import {Component, computed, input} from '@angular/core';
import {interactorTypeIcon, organismIcon} from '../../../../../complex-portal-utils';

@Component({
  selector: 'cp-table-interactor-name',
  templateUrl: './table-interactor-name.component.html',
  styleUrls: ['./table-interactor-name.component.css']
})
export class TableInteractorNameComponent {

  interactorName = input<string>();
  interactorType = input<string>();
  interactorId = input<string>();
  interactorOrganism = input<string>();
  identifierLink = input<string>();
  organismIconDisplay = input<boolean>();
  interactorTypeDisplay = input<boolean>();
  idDisplay = input<boolean>();
  isMainInteractor = input<boolean>();
  interactorTypeIcon = computed(() => interactorTypeIcon(this.interactorType()));
  interactorOrganismIcon = computed(() => organismIcon(this.interactorOrganism()));
  externalLinkVisible: boolean;

  externalLinkVisibleHandler(isVisible: boolean): void {
    this.externalLinkVisible = isVisible;
  }
}
