import {Component, computed, effect, input, model, output} from '@angular/core';
import {ComplexSearchResult} from '../../../shared/model/complex-results/complex-search.model';
import {Interactor} from '../../../shared/model/complex-results/interactor.model';
import {Complex} from '../../../shared/model/complex-results/complex.model';
import {ComplexComponent} from '../../../shared/model/complex-results/complex-component.model';
import * as tf from '@tensorflow/tfjs';
import {groupByPropertyToArray} from '../../../complex-portal-utils';
import {
  findComponentInComplex,
  NavigatorComponentGrouping,
  NavigatorComponentSorting
} from '../complex-navigator-utils';
import {INavigatorComponent} from './model/navigator-component.model';
import {NavigatorSimpleComponent} from './model/navigator-simple-component.model';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';
import {ComplexPortalService} from '../../../shared/service/complex-portal.service';
import {NavigatorOrthologGroup} from './model/navigator-ortholog-group.model';

@Component({
  selector: 'cp-table-structure',
  templateUrl: './table-structure.component.html',
  styleUrls: ['./table-structure.component.css']
})
export class TableStructureComponent {
  complexSearch = input<ComplexSearchResult>();
  interactors = input<Interactor[]>();
  componentsSorting = input<NavigatorComponentSorting>();
  componentsGrouping = input<NavigatorComponentGrouping>();
  organismIconDisplay = input<boolean>();
  interactorTypeDisplay = input<boolean>();
  idDisplay = input<boolean>();
  canAddComplexesToBasket = input<boolean>();
  canRemoveComplexesFromBasket = input<boolean>();
  onComplexRemovedFromBasket = output<string>();
  orthologGroupsAvailable = model<boolean>();

  navigatorComponentsWithoutGrouping = computed(() => this.createNavigatorComplexes(this.complexSearch().elements, this.interactors()));
  // navigatorComponentsGroupedByOrthologs = computed(() => {
  //   const {newComponents, anyOrthologGroupCreated} = this.createOrthologGroups(this.navigatorComponentsWithoutGrouping());
  //   return newComponents; // Just return the new components here
  // });
  navigatorComponentsGroupedByOrthologs = computed(() => this.createOrthologGroups(this.navigatorComponentsWithoutGrouping()));


  navigatorComponents = computed(() => this.componentsGrouping() === NavigatorComponentGrouping.ORTHOLOGY
    ? this.navigatorComponentsGroupedByOrthologs()
    : this.navigatorComponentsWithoutGrouping());

  sortedComplexes = computed(() =>
    this.sortComplexBySimilarityClustering(this.complexSearch().elements, this.navigatorComponents()));

  constructor(private complexPortalService: ComplexPortalService) {
    // this.updateOrthologGroupsAvailability();
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

    let anyOrthologGroupCreated = false;
    const newNavigatorComponents: INavigatorComponent[] = [];
    for (const [_, proteins] of Object.entries(groupedByOrthology)) {
      if (proteins.length > 1) {
        // Multiple proteins in the ortholog group
        const group = proteins[0].orthologsGroup;
        const orthologsGroup = new NavigatorOrthologGroup(group, proteins);
        newNavigatorComponents.push(orthologsGroup);
        anyOrthologGroupCreated = true;
      } else if (proteins.length === 1) {
        // Single proteins in the ortholog group, there's no need to create the group, we just use the protein component
        newNavigatorComponents.push(proteins[0]);
      }
    }
    this.orthologGroupsAvailable.set(anyOrthologGroupCreated);
    newNavigatorComponents.push(...interactorsWithoutGroup);
    return newNavigatorComponents;
    // return {newComponents: newNavigatorComponents, anyOrthologGroupCreated};
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

  private calculateSimilarity(complex1: Complex, complex2: Complex, navigatorComponents: INavigatorComponent[]) {
    if (complex1 === complex2) {
      return 1;
    }

    const components1 = this.getComponents(complex1, navigatorComponents);
    const components2 = this.getComponents(complex2, navigatorComponents);

    // @ts-ignore
    return components1.intersection(components2).size / components1.union(components2).size;
  }

  private getComponents(complex: Complex, navigatorComponents: INavigatorComponent[]): Set<string> {
    if (!complex.componentAcs || complex.componentAcs.size === 0) {
      complex.componentAcs = new Set<string>(
        navigatorComponents
          .filter(component => findComponentInComplex(complex, component.componentIds(), navigatorComponents))
          .map(component => component.identifier));
    }
    return complex.componentAcs;
  }

  sortComplexBySimilarityClustering(complexesList: Complex[], navigatorComponents: INavigatorComponent[]): Complex[] {
    let sortedComplexesList = complexesList;

    sortedComplexesList.forEach(complex => {
      if (!!complex.componentAcs) {
        complex.componentAcs.clear();
      }
    });

    if (!!navigatorComponents && !!navigatorComponents && navigatorComponents.length > 0) {
      // Group by predicted to cluster only inside the different groups, and place predicted after curated
      const groups = groupByPropertyToArray(
        complexesList,
        'predictedComplex',
        (a, b) => (a as unknown as number) - (b as unknown as number) // Makes false go before true
      );

      sortedComplexesList = groups.flatMap(group => {
        // Calculate Similarity Matrix
        const sm: number[][] = new Array(group.length).fill(null).map(_ => new Array(group.length).fill(null));
        group.forEach((complex, i) => group.forEach((comparedComplex, j) => {
          if (i >= j) { // Avoid useless calculations
            sm[i][j] = this.calculateSimilarity(complex, comparedComplex, navigatorComponents);
            sm[j][i] = sm[i][j]; // Matrix is symmetric
          }
        }));
        return this.getSortedIndexFromChainedSimilarity(tf.tensor2d(sm)).map(i => group[i]);
      });
    }

    // After the complexes have been sorted, we then set the index appearing for all components
    // so they are properly sorted later
    navigatorComponents.forEach(component => {
      component.indexAppearing = sortedComplexesList.findIndex(complex => complex.componentAcs?.has(component.identifier)) || 0;
    });
    return sortedComplexesList;
  }

  /**
   * Uses a similarity matrix to order elements based on how similar one element is to the previous element on the list.<br>
   * Inspired by https://stackoverflow.com/a/64338609
   *
   * @param sm A similarity matrix to be sorted
   * @returns indexes of elements ordered according to their similarity
   */
  getSortedIndexFromChainedSimilarity(sm: tf.Tensor2D): number[] {
    const idx: number[] = [];
    let currentIdx = tf.argMax(sm.sum(0)).arraySync() as number;  // Start with complex with most similarities
    idx.push(currentIdx);

    const currentCluster: Set<number> = new Set<number>();
    for (let i = 1; i < sm.shape[0]; i++) {
      // Mask already selected indices
      const buffer = sm.bufferSync();
      for (let x = 0; x < sm.shape[0]; x++) {
        buffer.set(-Infinity, x, currentIdx);
      }
      sm = buffer.toTensor();

      // Find the closest complex to last selected
      const sm_i = sm.gather([currentIdx]).arraySync()[0] as number[];
      currentIdx = tf.argMax(sm_i).arraySync() as number;
      sm_i.forEach((similarity, i) => {
          if (similarity > 0) {
            currentCluster.add(i);
          }
        }
      );
      // If no similar entities (cluster ends), take the next complex with most similarities
      if (sm_i[currentIdx] === 0) {
        if (currentCluster.size !== 0) {
          currentIdx = currentCluster.values().next().value; // Pick another one from the cluster
        } else {
          currentIdx = tf.argMax(sm.sum(0)).arraySync() as number; // If cluster is empty, take the next biggest cluster seed
        }
      }

      idx.push(currentIdx);
      currentCluster.delete(currentIdx);
    }
    return idx;
  }

  // updateOrthologGroupsAvailability() {
  //   if (!!this.navigatorComponentsGroupedByOrthologs()) {
  //   const anyOrthologGroupCreated = this.navigatorComponentsGroupedByOrthologs()
  //   .some(component => component.identifier.includes('PTHR'));
  //   this.orthologGroupsAvailable.set(anyOrthologGroupCreated);
  //   }
  // }
}
