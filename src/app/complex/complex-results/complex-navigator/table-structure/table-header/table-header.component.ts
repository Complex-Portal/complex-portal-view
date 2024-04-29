import {Component, Input} from '@angular/core';
import {Element} from '../../../../shared/model/complex-results/element.model';

@Component({
  selector: 'cp-table-header',
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.css'],
})

export class TableHeaderComponent {
  // @Input() complexSearch: ComplexSearchResult;
  @Input() complexes: Element[];
  @Input() interactorsSorting: string;

  isInteractorSortingSet() {
    return this.interactorsSorting === 'Type' || this.interactorsSorting === 'Organism';
  }
}
