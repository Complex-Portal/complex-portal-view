import {Component, Input, OnInit} from '@angular/core';
import {ComplexSearchResult} from '../../../../shared/model/complex-results/complex-search.model';
import {TableInteractorColumnComponent} from '../table-interactor-column/table-interactor-column.component';
import {Element} from '../../../../shared/model/complex-results/element.model';

@Component({
  selector: 'cp-table-header',
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.css'],
})

export class TableHeaderComponent implements OnInit {
  @Input() complexSearch: ComplexSearchResult;
  @Input() interactorsTable: TableInteractorColumnComponent;

  constructor() {
  }

  ngOnInit(): void {
    this.classifyComplexesSize();
    this.classifyComplexesSimilarities(this.complexSearch);
  }

  classifyComplexesSize(): void {
    const searchResult = this.complexSearch.elements;
    const complexesWithSimilarities = new Map<ComplexSearchResult['elements'][0], number>();
    const biggestComplex = [searchResult[0], 0];

    // check which complex is the biggest
    for (const complex of searchResult) {
      let totalLength = complex.interactors.length;
      for (const complexInteractorChecked of complex.interactors) {
        if (complexInteractorChecked.interactorType === 'stable complex') {
          // tslint:disable-next-line:no-shadowed-variable
          const subComplex: Element = searchResult.find(complex => complex.complexAC === complexInteractorChecked.identifier);
          totalLength += subComplex.interactors.length;
        }
      }
      if (totalLength > biggestComplex[1]) {
        biggestComplex[0] = complex;
        biggestComplex[1] = totalLength;
      }
    }

    const bigComplex: any = biggestComplex[0]; // access to the complex

    // compare the other complexes with the biggest
    for (const comparedComplex of searchResult) {
      let similarities = 0;
      for (const biggestComplexInteractor of bigComplex.interactors) {
        for (const complexInteractor of comparedComplex.interactors) {
          if (biggestComplexInteractor.identifier === complexInteractor.identifier) {
            similarities++;
          }
        }
        if (biggestComplexInteractor.interactorType === 'stable complex') {
          // tslint:disable-next-line:max-line-length
          const subComplex: Element = searchResult.find(complex => complex.complexAC === biggestComplexInteractor.identifier);
          if (comparedComplex.complexAC === bigComplex.complexAC) {
            similarities += subComplex.interactors.length;
          }
          for (const subComponent of subComplex.interactors) {
            for (const complexInteractor of comparedComplex.interactors) {
              if (subComponent.identifier === complexInteractor.identifier) {
                similarities++;
              }
            }
          }
        }
      }
      complexesWithSimilarities.set(comparedComplex, similarities);
    }
    // sort complexes depending on their similarities with the biggest
    this.complexSearch.elements.sort((a, b) => complexesWithSimilarities.get(b)! - complexesWithSimilarities.get(a)!);
  }

  calculateSimilarity(complex1, complex2) {
    let similarities = 0;
    for (const complex1Interactor of complex1.interactors) {
      for (const complex2Interactor of complex2.interactors) {
        if (complex1Interactor.identifier === complex2Interactor.identifier) {
          similarities++;
        }
      }
      if (complex1Interactor.interactorType === 'stable complex') {
        // tslint:disable-next-line:max-line-length
        const subComplex: Element = this.complexSearch.elements.find(complex => complex.complexAC === complex1Interactor.identifier);
        if (complex2.complexAC === complex1.complexAC) {
          similarities += subComplex.interactors.length;
        }
        for (const subComponent of subComplex.interactors) {
          for (const complexInteractor of complex2.interactors) {
            if (subComponent.identifier === complexInteractor.identifier) {
              similarities++;
            }
          }
        }
      }
    }
    return similarities;
  }

  classifyComplexesSimilarities(complexSearch) {
    const classifiedList = [];
    complexSearch.elements.forEach(complex => {
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
    });

    // make the array 1D
    const listOfComplex = classifiedList.reduce((acc, val) => acc.concat(val), []);

    // The list which was multidimensional before has duplicates
    const unique = [];
    listOfComplex.forEach(element => {
      if (!unique.includes(element)) {
        unique.push(element);
      }
    });

    // sorting by similarities
    this.complexSearch.elements.sort((a, b) => {
      const indexA = unique.indexOf(a);
      const indexB = unique.indexOf(b);
      if (indexA !== -1 && indexB !== -1) {
        return indexA - indexB; // Sort in ascending order based on the index
      } else if (indexA !== -1) {
        return -1; // Put element a before element b
      } else if (indexB !== -1) {
        return 1; // Put element b before element a
      } else {
        return 0; // Leave the order unchanged if both elements are not found in unique list
      }
    });
  }
}
