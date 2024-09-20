import {Component, output, input, computed, effect} from '@angular/core';
import {ComplexSearchResult} from '../../shared/model/complex-results/complex-search.model';
import {Interactor} from '../../shared/model/complex-results/interactor.model';
import {NavigatorComponentGrouping, NavigatorComponentSorting} from './complex-navigator-utils';
import {Complex} from '../../shared/model/complex-results/complex.model';
import {INavigatorComponent} from './table-structure/model/navigator-component.model';
import {NavigatorSimpleComponent} from './table-structure/model/navigator-simple-component.model';
import {NavigatorOrthologGroup} from './table-structure/model/navigator-ortholog-group.model';
import {Observable, of} from 'rxjs';
import {ComplexComponent} from '../../shared/model/complex-results/complex-component.model';
import {map} from 'rxjs/operators';
import {ComplexPortalService} from '../../shared/service/complex-portal.service';

@Component({
  selector: 'cp-complex-navigator',
  templateUrl: './complex-navigator.component.html',
  styleUrls: ['./complex-navigator.component.css']
})

export class ComplexNavigatorComponent {
  complexSearch = input<ComplexSearchResult>();
  interactors = input<Interactor[]>();
  canAddComplexesToBasket = input<boolean>();
  canRemoveComplexesFromBasket = input<boolean>();
  onComplexRemovedFromBasket = output<string>();

  componentsSorting = NavigatorComponentSorting.DEFAULT;
  componentsGrouping = NavigatorComponentGrouping.DEFAULT;
  organismIconDisplay = true;
  interactorTypeDisplay = true;
  idDisplay = true;

  navigatorComponentsWithoutGrouping = computed(() => this.createNavigatorComplexes(this.complexSearch().elements, this.interactors()));
  navigatorComponentsGroupedByOrthologs = computed(() => this.createOrthologGroups(this.navigatorComponentsWithoutGrouping()));
  orthologGroupsAvailable = computed(() => this.navigatorComponentsGroupedByOrthologs().some(c => c instanceof NavigatorOrthologGroup));
  navigatorComponents: INavigatorComponent[] = [];

  constructor(private complexPortalService: ComplexPortalService) {
    effect(() => this.setNavigatorComponents(this.navigatorComponentsGroupedByOrthologs(), this.navigatorComponentsWithoutGrouping()));
  }

  onGroupingChanged(componentsGrouping: NavigatorComponentGrouping) {
    this.componentsGrouping = componentsGrouping;
    this.setNavigatorComponents(this.navigatorComponentsGroupedByOrthologs(), this.navigatorComponentsWithoutGrouping());
  }

  private setNavigatorComponents(navigatorComponentsGroupedByOrthologs: INavigatorComponent[],
                                 navigatorComponentsWithoutGrouping: INavigatorComponent[]): void {

    this.navigatorComponents = this.componentsGrouping === NavigatorComponentGrouping.ORTHOLOGY
      ? navigatorComponentsGroupedByOrthologs
      : navigatorComponentsWithoutGrouping;
  }

  private createNavigatorComplexes(complexes: Complex[], interactors: Interactor[]): INavigatorComponent[] {
    const newNavigatorComponents: INavigatorComponent[] = [];
    for (const interactor of interactors) {
      const isSubComplex = interactor.interactorType === 'stable complex';
      const newNavigatorComponent = new NavigatorSimpleComponent(
        interactor,
        isSubComplex);
      if (isSubComplex) {
        this.loadSubComponents(newNavigatorComponent, complexes)
          .subscribe(subComponents => newNavigatorComponent.subComponents = subComponents);
      }
      newNavigatorComponents.push(newNavigatorComponent);
    }
    return newNavigatorComponents;
  }

  private createOrthologGroups(navigatorComponents: INavigatorComponent[]): INavigatorComponent[] {
    // { newComponents: INavigatorComponent[]; anyOrthologGroupCreated: boolean } {
    const sortedForOrthology = this.classifyInteractorsByOrthology(navigatorComponents);
    const interactorsWithGroup = sortedForOrthology.filter(interactor => !!interactor.orthologsGroup);
    const interactorsWithoutGroup = sortedForOrthology.filter(interactor => !interactor.orthologsGroup);

    const groupedByOrthology = interactorsWithGroup.reduce((groups, interactor) => {
      const group = interactor.orthologsGroup;
      if (!groups[group.identifier]) {
        groups[group.identifier] = [];
      }
      groups[group.identifier].push(interactor);
      return groups;
    }, {} as { [key: string]: INavigatorComponent[] });

    const newNavigatorComponents: INavigatorComponent[] = [];
    for (const [_, proteins] of Object.entries(groupedByOrthology)) {
      if (proteins.length > 1) {
        // Multiple proteins in the ortholog group
        const group = proteins[0].orthologsGroup;
        const orthologsGroup = new NavigatorOrthologGroup(group, proteins);
        newNavigatorComponents.push(orthologsGroup);
      } else if (proteins.length === 1) {
        // Single proteins in the ortholog group, there's no need to create the group, we just use the protein component
        newNavigatorComponents.push(proteins[0]);
      }
    }
    newNavigatorComponents.push(...interactorsWithoutGroup);
    return newNavigatorComponents;
  }

  private loadSubComponents(component: INavigatorComponent, complexes: Complex[]): Observable<ComplexComponent[]> {
    // this function returns the list of subcomponents of an interactor of type stable complex
    const foundComplex: Complex = complexes.find(complex => complex.complexAC === component.identifier);
    if (!!foundComplex) {
      return of(foundComplex.interactors);
    } else {
      // Actually call the back-end to fetch these
      return this.complexPortalService.getSimplifiedComplex(component.identifier)
        .pipe(map(complex => complex?.interactors));
    }
  }

  private classifyInteractorsByOrthology(navigatorComponents: INavigatorComponent[]): INavigatorComponent[] {
    return navigatorComponents.sort((a, b) => {
      if (a.orthologsGroup?.identifier < b.orthologsGroup?.identifier) {
        return -1;
      }
      if (a.orthologsGroup?.identifier > b.orthologsGroup?.identifier) {
        return 1;
      }
      return 0;
    });
  }
}
