import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {ComplexSearchResult} from '../../../shared/model/complex-results/complex-search.model';
import {Interactor} from '../../../shared/model/complex-results/interactor.model';
import {Element} from '../../../shared/model/complex-results/element.model';
import {ComplexComponent} from '../../../shared/model/complex-results/complex-component.model';

@Component({
  selector: 'cp-table-structure',
  templateUrl: './table-structure.component.html',
  styleUrls: ['./table-structure.component.css']
})
export class TableStructureComponent implements OnChanges {
  @Input() complexSearch: ComplexSearchResult;
  @Input() interactors: Interactor[];
  @Input() interactorsSorting: string;
  @Input() organismIconDisplay: boolean;
  @Input() interactorTypeDisplay: boolean;
  @Input() IDDisplay: boolean;
  @Input() canAddComplexesToBasket: boolean;
  @Input() canRemoveComplexesFromBasket: boolean;
  @Output() onComplexRemovedFromBasket: EventEmitter<string> = new EventEmitter<string>();

  sortedComplexes: Element[] = [];

  ngOnChanges(): void {
    this.sortedComplexes = this.classifyComplexesSimilaritiesV2(this.complexSearch.elements);
  }

  private getComponentAsComplex(component: ComplexComponent): Element | undefined {
    return this.complexSearch.elements.find(interactor => interactor.complexAC === component.identifier);
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

  private calculateSimilarity(complex1: Element, complex2: Element) {
    if (complex1 === complex2) {
      return new Set(this.getAllComponents(complex1)).size;
    }

    const [components1, components2] =
      [complex1, complex2]
        .map(complex => new Set(this.getAllComponents(complex).map(c => c.identifier)));

    return [...components1.values()].reduce((s, c1) => components2.has(c1) ? s + 1 : s, 0);
  }

  classifyComplexesSimilaritiesV2(complexesList: Element[]) {
    const comparedComplexes: [Element, Element, number][] = [];
    for (const complex of complexesList) {
      for (const comparedComplex of complexesList) {
        // for unique comparison
        if (complex.complexAC >= comparedComplex.complexAC) {
          comparedComplexes.push([complex, comparedComplex, this.calculateSimilarity(complex, comparedComplex)]);
        }
      }
    }
    comparedComplexes.sort((a, b) => b[2] - a[2]); // sorting by similarityScore
    const complexesOrderedSet = this.uniqueComplexesListOrderedBySimilarity(comparedComplexes);
    // to be used in the table as a 1D array
    return Array.from(complexesOrderedSet);
  }

  uniqueComplexesListOrderedBySimilarity(complexesListSimilarities: [Element, Element, number][]) {
    const complexesOrderedSet = new Set<Element>();
    for (let i = 0; i < complexesListSimilarities.length; i++) {
      const [complex1, complex2, similarityScore] = complexesListSimilarities[i];
      if (similarityScore !== 0) {
        complexesOrderedSet.add(complex1);
        complexesOrderedSet.add(complex2);
        for (let j = i + 1; j < complexesListSimilarities.length; j++) {
          const [complex3, complex4, similarityScore2nd] = complexesListSimilarities[j];
          if (complex1 === complex3 && similarityScore2nd !== 0) {
            complexesOrderedSet.add(complex4);
          }
        }
        if (complexesOrderedSet.size === this.complexSearch.elements.length) {
          // All complexes have been added, we can return and stop the loops
          return complexesOrderedSet;
        }
      }
      if (complexesOrderedSet.size === this.complexSearch.elements.length) {
        // All complexes have been added, we can return and stop the loops
        return complexesOrderedSet;
      }
    }
    return complexesOrderedSet;
  }
}
