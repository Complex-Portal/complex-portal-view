import {Component, computed, input, output} from '@angular/core';
import {ComplexSearchResult} from '../../../shared/model/complex-results/complex-search.model';
import {Interactor} from '../../../shared/model/complex-results/interactor.model';
import {Element} from '../../../shared/model/complex-results/element.model';
import {ComplexComponent} from '../../../shared/model/complex-results/complex-component.model';
import * as tf from '@tensorflow/tfjs';
import {groupByPropertyToArray} from '../../../complex-portal-utils';

@Component({
  selector: 'cp-table-structure',
  templateUrl: './table-structure.component.html',
  styleUrls: ['./table-structure.component.css']
})
export class TableStructureComponent {
  complexSearch = input<ComplexSearchResult>();
  interactors = input<Interactor[]>();
  interactorsSorting = input<string>();
  organismIconDisplay = input<boolean>();
  interactorTypeDisplay = input<boolean>();
  idDisplay = input<boolean>();
  canAddComplexesToBasket = input<boolean>();
  canRemoveComplexesFromBasket = input<boolean>();
  onComplexRemovedFromBasket = output<string>();

  sortedComplexes = computed(() => this.sortComplexBySimilarityClustering(this.complexSearch().elements));

  private getComponentAsComplex(component: ComplexComponent): Element | undefined {
    return this.complexSearch().elements.find(interactor => interactor.complexAC === component.identifier);
  }

  private calculateSimilarity(complex1: Element, complex2: Element) {
    if (complex1 === complex2) {
      return 1;
    }

    const [components1, components2] = [complex1, complex2].map(this.getComponents.bind(this));
    // @ts-ignore
    return components1.intersection(components2).size / components1.union(components2).size;
  }

  private getComponents(complex: Element): Set<string> {
    if (!complex.componentAcs) {
      complex.componentAcs = new Set<string>(this.getAllComponents(complex, [], true).map(component => component.identifier));
    }
    return complex.componentAcs;
  }

  private getAllComponents(complex?: Element, components: ComplexComponent[] = [], includeComplexes = false): ComplexComponent[] {
    for (const component of complex.interactors) {
      if (component.interactorType === 'stable complex') {
        const subComplex = this.getComponentAsComplex(component);
        if (subComplex) {
          components.push(...this.getAllComponents(subComplex));
          if (includeComplexes) {
            components.push(component);
          }
        } else {
          components.push(component);
        }
      } else {
        components.push(component);
      }
    }
    return components;
  }

  sortComplexBySimilarityClustering(complexesList: Element[]) {
    // Group by predicted to cluster only inside the different groups, and place predicted after curated
    const groups = groupByPropertyToArray(
      complexesList,
      'predictedComplex',
      (a, b) => (a as unknown as number) - (b as unknown as number) // Makes false go before true
    );

    return groups.flatMap(group => {
      // Calculate Similarity Matrix
      const sm: number[][] = new Array(group.length).fill(null).map(r => new Array(group.length).fill(null));
      group.forEach((complex, i) => group.forEach((comparedComplex, j) => {
        if (i >= j) { // Avoid useless calculations
          sm[i][j] = this.calculateSimilarity(complex, comparedComplex);
          sm[j][i] = sm[i][j]; // Matrix is symmetric
        }
      }));
      return this.getSortedIndexFromChainedSimilarity(tf.tensor2d(sm)).map(i => group[i]);
    });
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
}
