import {Component, computed, input, output} from '@angular/core';
import {ComplexSearchResult} from '../../../shared/model/complex-results/complex-search.model';
import {Interactor} from '../../../shared/model/complex-results/interactor.model';
import {Element} from '../../../shared/model/complex-results/element.model';
import {ComplexComponent} from '../../../shared/model/complex-results/complex-component.model';
import * as tf from '@tensorflow/tfjs';

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

    // Make predicted complex completely different to curated
    if (complex1.predictedComplex !== complex2.predictedComplex) {
      return -1;
    }

    const [components1, components2] = [complex1, complex2].map(this.getComponents.bind(this));
    // @ts-ignore
    return components1.intersection(components2).size / components1.union(components2).size;
  }

  private getComponents(complex: Element): Set<string> {
    if (!complex.componentAcs) {
      complex.componentAcs = new Set<string>(this.getAllComponents(complex).map(component => component.identifier));
    }
    return complex.componentAcs;
  }

  private getAllComponents(complex?: Element, components: ComplexComponent[] = []): ComplexComponent[] {
    for (const component of complex.interactors) {
      if (component.interactorType === 'stable complex') {
        const subComplex = this.getComponentAsComplex(component);
        if (subComplex) {
          components.push(...this.getAllComponents(subComplex));
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
    const sm: number[][] = new Array(complexesList.length).fill(null).map(r => new Array(complexesList.length).fill(null));
    complexesList.forEach((complex, i) => complexesList.forEach((comparedComplex, j) => {
      if (i >= j) {
        sm[i][j] = this.calculateSimilarity(complex, comparedComplex);
        sm[j][i] = sm[i][j];
      }
    }));
    const simMat = tf.tensor2d(sm);
    return this.getSortedIndexFromChainedSimilarity(simMat).map(i => complexesList[i]);
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

      // If no similar entities (cluster ends), take the next complex with most similarities
      if (sm_i[currentIdx] === 0) {
        currentIdx = tf.argMax(sm.sum(0)).arraySync() as number;
      }

      idx.push(currentIdx);
    }
    return idx;
  }
}
