import {Component, Input, OnChanges} from '@angular/core';
import {ComplexSearchResult} from '../../../shared/model/complex-results/complex-search.model';
import {Interactor} from '../../../shared/model/complex-results/interactor.model';
import {Element} from '../../../shared/model/complex-results/element.model';
import {ComplexPortalService} from '../../../shared/service/complex-portal.service';

@Component({
  selector: 'cp-table-structure',
  templateUrl: './table-structure.component.html',
  styleUrls: ['./table-structure.component.css']
})
export class TableStructureComponent implements OnChanges {
  @Input() complexSearch: ComplexSearchResult;
  @Input() interactors: Interactor[];
  @Input() interactorsSorting: string;

  sortedComplexes: Element[] = [];

  ngOnChanges(): void {
    this.sortedComplexes = this.classifyComplexesSimilarities(this.classifyComplexesSize());
  }

  classifyComplexesSize(): Element[] {
    const searchResult: Element[] = this.complexSearch.elements;
    const complexesAndSizes: [Element, number][] = [];

    // check which complex is the biggest
    for (const complex of searchResult) {
      let totalLength = complex.interactors.length;
      for (const complexInteractorChecked of complex.interactors) {
        if (complexInteractorChecked.interactorType === 'stable complex') {
          const subComplex: Element = searchResult.find(c => c.complexAC === complexInteractorChecked.identifier);
          if (!!subComplex) {
            totalLength += subComplex.interactors.length;
          }
        }
      }
      complexesAndSizes.push([complex, totalLength]);
    }
    complexesAndSizes.sort((a, b) => b[1] - a[1]);
    return complexesAndSizes.map(a => a[0]);
  }

  private calculateSimilarity(complex1, complex2) {
    let similarities = 0;
    for (const complex1Interactor of complex1.interactors) {
      // The interactor of complex 1 is a subcomplex
      if (complex1Interactor.interactorType === 'stable complex') {
        // The subcomplex is exactly complex 2, so we add the number of interactors of complex 2 to the similarities
        if (complex2.complexAC === complex1Interactor.identifier) {
          similarities += complex2.interactors.length;
        } else {
          const subComplex: Element = this.complexSearch.elements.find(
            complex => complex.complexAC === complex1Interactor.identifier
          );
          if (!!subComplex) {
            const complex2MatchingInteractor: Interactor = complex2.interactors.find(
              interactor => interactor.identifier === complex1Interactor.identifier
            );
            if (!!complex2MatchingInteractor) {
              // Complex 2 also has the same subcomplex as an interactor, so we add all the interactors in the subcomplex
              // to the similarities, as the two complexes have all those interactors in common
              similarities += subComplex.interactors.length;
            } else {
              // Complex 2 does not have the same subcomplex as interactor, so we need to compare interactors
              // of the subcomplex and complex 2 to find any matches
              for (const subComplexInteractor of subComplex.interactors) {
                for (const complex2Interactor of complex2.interactors) {
                  if (subComplexInteractor.identifier === complex2Interactor.identifier) {
                    similarities++;
                  }
                }
              }
            }
          }
        }
      } else {
        // The interactor of complex 1 is not a subcomplex
        for (const complex2Interactor of complex2.interactors) {
          // The interactor of complex 2 is a subcomplex
          if (complex2Interactor.interactorType === 'stable complex') {
            const subComplex: Element = this.complexSearch.elements.find(
              complex => complex.complexAC === complex2Interactor.identifier
            );
            if (!!subComplex) {
              // Complex 2 interactor is a subcomplex, so we need to compare the complex 1 interactor with interactors of this
              // subcomplex to find any matches
              for (const subComplexInteractor of subComplex.interactors) {
                if (subComplexInteractor.identifier === complex1Interactor.identifier) {
                  similarities++;
                }
              }
            }
          } else if (complex1Interactor.identifier === complex2Interactor.identifier) {
            // The interactors of complex 1 and complex 2 are not subcomplexes and they have the same id, so we add to the similarities
            similarities++;
          }
        }
      }
    }
    return similarities;
  }

  private classifyComplexesSimilarities(bigComplexes: Element[]): Element[] {
    const classifiedList = [];
    bigComplexes.forEach(complex => {
      // if (complex.complexAC !== bigComplex.complexAC) {
      let found = false;
      classifiedList.forEach(classification => {
        classification.forEach((classifiedComplex, index) => {
          const similarity = this.calculateSimilarity(complex, classifiedComplex);
          if (similarity >= 1) {
            found = true;
            classification.splice(index + 1, 0, complex);
          }
        });
      });
      if (!found) {
        // this list is multidimensional (1 list per complex)
        classifiedList.push([complex]);
      }
      // }
    });

    // make the array 1D
    const listOfComplex: Element[] = classifiedList.reduce((acc, val) => acc.concat(val), []);

    // The list which was multidimensional before has duplicates
    const unique: Element[] = [];
    listOfComplex.forEach(element => {
      if (!unique.includes(element)) {
        unique.push(element);
      }
    });
    return unique;
  }
}
