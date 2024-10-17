import {AfterViewInit, Component, computed, effect, ElementRef, HostListener, input, output, ViewChild} from '@angular/core';
import {ComplexSearchResult} from '../../shared/model/complex-results/complex-search.model';
import {Complex} from '../../shared/model/complex-results/complex.model';
import {INavigatorComponent} from './table-structure/model/navigator-component.model';
import {NavigatorSimpleComponent} from './table-structure/model/navigator-simple-component.model';
import {NavigatorOrthologGroup} from './table-structure/model/navigator-ortholog-group.model';
import {forkJoin, Observable, of} from 'rxjs';
import {ComplexComponent} from '../../shared/model/complex-results/complex-component.model';
import {map} from 'rxjs/operators';
import {ComplexPortalService} from '../../shared/service/complex-portal.service';
import {NavigatorStateService} from './service/state/complex-navigator-display.service';

@Component({
  selector: 'cp-complex-navigator',
  templateUrl: './complex-navigator.component.html',
  styleUrls: ['./complex-navigator.component.scss']
})

export class ComplexNavigatorComponent implements AfterViewInit {
  complexSearch = input<ComplexSearchResult>();
  components = input<ComplexComponent[]>();
  onComplexRemovedFromBasket = output<string>();

  anyChange = output<void>();

  numberOfColumns = computed(() => this.complexSearch().elements.length);
  navigatorComponentsWithoutGrouping = computed(() => {
    // We set navigatorComponents as an empty list here to show the loading spinner while creating the components and ortholog groups
    this.navigatorComponents = [];
    return this.createNavigatorComplexes(this.complexSearch().elements, this.components());
  });
  navigatorComponentsGroupedByOrthologs = computed(() => this.createOrthologGroups(this.navigatorComponentsWithoutGrouping()));

  @ViewChild('parent') parent: ElementRef<HTMLDivElement>;
  navigatorComponents: INavigatorComponent[] = [];
  orthologGroupsAvailable = false;

  constructor(private complexPortalService: ComplexPortalService, public state: NavigatorStateService) {
    effect(() => this.adjustColWidth(), {allowSignalWrites: true});
    effect(() => this.setNavigatorComponents(this.navigatorComponentsGroupedByOrthologs(), this.navigatorComponentsWithoutGrouping()));
  }

  ngAfterViewInit(): void {
    this.adjustColWidth();
  }

  @HostListener('window:resize', ['$event'])
  adjustColWidth() {
    this.state.adjustColumnWidth(this.parent.nativeElement.clientWidth, this.numberOfColumns());
  }

  private setNavigatorComponents(navigatorComponentsGroupedByOrthologs: Observable<INavigatorComponent[]>,
                                 navigatorComponentsWithoutGrouping: Observable<INavigatorComponent[]>): void {

    forkJoin({navigatorComponentsGroupedByOrthologs, navigatorComponentsWithoutGrouping}).subscribe(response => {
      this.navigatorComponents = this.state.mergeOrthologs()
        ? response.navigatorComponentsGroupedByOrthologs
        : response.navigatorComponentsWithoutGrouping;
    });
  }

  private createNavigatorComplexes(complexes: Complex[], components: ComplexComponent[]): Observable<INavigatorComponent[]> {
    const newNavigatorComponents: Observable<INavigatorComponent>[] = [];
    for (const component of components) {
      const isSubComplex = component.interactorType === 'stable complex';
      const newNavigatorComponent = new NavigatorSimpleComponent(
        component,
        isSubComplex);
      if (isSubComplex) {
        newNavigatorComponents.push(this.loadSubComponents(newNavigatorComponent, complexes)
          .pipe(map(subComponents => {
            newNavigatorComponent.complexComponents = subComponents;
            return newNavigatorComponent;
          })));
      } else {
        newNavigatorComponents.push(of(newNavigatorComponent));
      }
    }
    return forkJoin(newNavigatorComponents);
  }

  private createOrthologGroups(navigatorComponentsObservable: Observable<INavigatorComponent[]>): Observable<INavigatorComponent[]> {
    return navigatorComponentsObservable.pipe(map(navigatorComponents => {
      const sortedForOrthology = this.classifyInteractorsByOrthology(navigatorComponents);
      const interactorsWithGroup = sortedForOrthology.filter(interactor => !!interactor.orthologsGroup);
      const interactorsWithoutGroup = sortedForOrthology.filter(interactor => !interactor.orthologsGroup);

      const groupedByOrthology: { [key: string]: INavigatorComponent[] } = interactorsWithGroup.reduce((groups, interactor) => {
        const group = interactor.orthologsGroup;
        if (!groups[group.identifier]) {
          groups[group.identifier] = [];
        }
        groups[group.identifier].push(interactor);
        return groups;
      }, {});

      const newNavigatorComponents: INavigatorComponent[] = [];
      for (const [_, proteins] of Object.entries(groupedByOrthology)) {
        if (proteins.length > 1) {
          // Multiple proteins in the ortholog group
          const group = proteins[0].orthologsGroup;
          const orthologsGroup = new NavigatorOrthologGroup(group, proteins);
          newNavigatorComponents.push(orthologsGroup);
          // There is at least 1 ortholog group
          this.orthologGroupsAvailable = true;
        } else if (proteins.length === 1) {
          // Single proteins in the ortholog group, there's no need to create the group, we just use the protein component
          newNavigatorComponents.push(proteins[0]);
        }
      }
      newNavigatorComponents.push(...interactorsWithoutGroup);
      return newNavigatorComponents;
    }));
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
