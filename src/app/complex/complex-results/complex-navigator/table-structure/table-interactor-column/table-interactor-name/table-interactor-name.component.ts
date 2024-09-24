import {Component, computed, Inject, input} from '@angular/core';
import {interactorTypeIcon, organismIcon} from '../../../../../complex-portal-utils';
import {APP_BASE_HREF} from '@angular/common';

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

  constructor(@Inject(APP_BASE_HREF) private _baseHref: string) {
  }

  externalLinkVisibleHandler(isVisible: boolean): void {
    this.externalLinkVisible = isVisible;
  }

  get maskStyle(): string {
    return `mask: url(${this._baseHref}${this.interactorOrganismIcon()}) no-repeat center; -webkit-mask: url(${this._baseHref}${this.interactorOrganismIcon()}) no-repeat center`;
  }
}
