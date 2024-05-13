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

  isInteractorSortingSet() {
    return this.interactorsSorting === 'Type' || this.interactorsSorting === 'Organism';
  }

  iconOrganism(organismName: string) {
    return organismIcon(this.formatInteractorOrganism(organismName));
  }

  formatInteractorOrganism(organismName: string) {
    if (organismName.includes(';')) {
      const end = organismName.indexOf(';');
      return organismName.substring(0, end);
    }
  }
}
