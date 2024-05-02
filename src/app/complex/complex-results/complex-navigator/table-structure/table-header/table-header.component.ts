import {Component, Input} from '@angular/core';
import {Element} from '../../../../shared/model/complex-results/element.model';
import {organismIcon} from '../../../../complex-portal-utils';

@Component({
  selector: 'cp-table-header',
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.css'],
})

export class TableHeaderComponent {
  @Input() complexes: Element[];
  @Input() interactorsSorting: string;

  organismIcon(complex: Element) {
    return organismIcon(complex.organismName);
  }

  isInteractorSortingSet() {
    return this.interactorsSorting === 'Type' || this.interactorsSorting === 'Organism';
  }
}
