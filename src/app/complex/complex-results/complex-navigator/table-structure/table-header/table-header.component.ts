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
    this.classifyComplexes();
  }

  classifyComplexes(): void {
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
}

