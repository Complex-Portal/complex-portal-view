import {Component, Input, OnChanges} from '@angular/core';
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
    // for (const complex1Interactor of complex1.interactors) {
    //   // The interactor of complex 1 is a subcomplex
    //   if (complex1Interactor.interactorType === 'stable complex') {
    //     // The subcomplex is exactly complex 2, so we add the number of interactors of complex 2 to the similarities
    //     if (complex2.complexAC === complex1Interactor.identifier) {
    //       similarities += complex2.interactors.length;
    //     } else {
    //       const subComplex: Element = this.complexSearch.elements.find(
    //         complex => complex.complexAC === complex1Interactor.identifier
    //       );
    //       if (!!subComplex) {
    //         const complex2MatchingInteractor: ComplexComponent = complex2.interactors.find(
    //           interactor => interactor.identifier === complex1Interactor.identifier
    //         );
    //         if (!!complex2MatchingInteractor) {
    //           // Complex 2 also has the same subcomplex as an interactor, so we add all the interactors in the subcomplex
    //           // to the similarities, as the two complexes have all those interactors in common
    //           similarities += subComplex.interactors.length;
    //         } else {
    //           // Complex 2 does not have the same subcomplex as interactor, so we need to compare interactors
    //           // of the subcomplex and complex 2 to find any matches
    //           for (const subComplexInteractor of subComplex.interactors) {
    //             for (const complex2Interactor of complex2.interactors) {
    //               if (subComplexInteractor.identifier === complex2Interactor.identifier) {
    //                 similarities++;
    //               }
    //             }
    //           }
    //         }
    //       }
    //     }
    //   } else {
    //     // The interactor of complex 1 is not a subcomplex
    //     for (const complex2Interactor of complex2.interactors) {
    //       // The interactor of complex 2 is a subcomplex
    //       if (complex2Interactor.interactorType === 'stable complex') {
    //         const subComplex: Element = this.complexSearch.elements.find(
    //           complex => complex.complexAC === complex2Interactor.identifier
    //         );
    //         if (!!subComplex) {
    //           // Complex 2 interactor is a subcomplex, so we need to compare the complex 1 interactor with interactors of this
    //           // subcomplex to find any matches
    //           for (const subComplexInteractor of subComplex.interactors) {
    //             if (subComplexInteractor.identifier === complex1Interactor.identifier) {
    //               similarities++;
    //             }
    //           }
    //         }
    //       } else if (complex1Interactor.identifier === complex2Interactor.identifier) {
    //         // The interactors of complex 1 and complex 2 are not subcomplexes, and they have the same id, so we add to the similarities
    //         similarities++;
    //       }
    //     }
    //   }
    // }
    // return similarities;
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
      }
    }
    return complexesOrderedSet;
  }
}
