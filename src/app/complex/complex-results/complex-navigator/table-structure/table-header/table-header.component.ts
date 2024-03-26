import {Component, Input, OnInit} from '@angular/core';
import {ComplexSearchResult} from '../../../../shared/model/complex-results/complex-search.model';

@Component({
  selector: 'cp-table-header',
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.css'],
})

export class TableHeaderComponent implements OnInit {
  @Input() complexSearch: ComplexSearchResult;
  // overFlowing: TableStructureComponent['overFlowing'];
  // displayTilted: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

  function;

  classifyComplexes(searchResult: ComplexSearchResult): ComplexSearchResult {
    const complexAndSimilarComponents = new Map<ComplexSearchResult['elements'][0], number>();

    // check how many similar components a complex have with the others
    for (const complex of searchResult.elements) {
      let similarParticipantsCount = 0;
      for (const otherCpx of searchResult.elements) {
        if (complex !== otherCpx) {
          for (const participant of complex.components) {
            for (const otherCpxParticipant of otherCpx.components) {
              if (otherCpxParticipant.identifier === participant.identifier) {
                similarParticipantsCount++;
              }
            }
          }
        }
      }
      complexAndSimilarComponents.set(complex, similarParticipantsCount);
      // console.log(complexAndSimilarComponents);
    }

    // sort complexes depending on their similarity counts
    searchResult.elements.sort((a, b) => complexAndSimilarComponents.get(b)! - complexAndSimilarComponents.get(a)!);

    // creation of a new result list
    const ComplexSearchResultSorted = new ComplexSearchResult(
      searchResult.size,
      searchResult.size,
      searchResult.elements,
      []
    );
    // console.log(ComplexSearchResultSorted);

    return ComplexSearchResultSorted;
  }


  /*
   set displayTilted(value: boolean) {
    this.displayTilted = this.overFlowing;
   }

  isOverFlowing(): boolean {
    const tablePart = document.querySelector<HTMLElement>('.Complex-navigator');
    console.log(tablePart.scrollWidth > tablePart.offsetWidth);
    this.displayTilted = tablePart.scrollWidth > tablePart.offsetWidth;
    return tablePart.scrollWidth > tablePart.offsetWidth;.
  }

 */

}

