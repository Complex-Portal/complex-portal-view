import {Component, input, OnInit} from '@angular/core';
import {interactorTypeIcon, organismIcon} from '../../../../../complex-portal-utils';

@Component({
  selector: 'cp-table-interactor-name',
  templateUrl: './table-interactor-name.component.html',
  styleUrls: ['./table-interactor-name.component.css']
})
export class TableInteractorNameComponent implements OnInit {

  interactorName = input<string>();
  interactorType = input<string>();
  interactorId = input<string>();
  interactorOrganism = input<string>();
  identifierLink = input<string>();
  organismIconDisplay = input<boolean>();
  interactorTypeDisplay = input<boolean>();
  IDDisplay = input<boolean>();
  isMainInteractor = input<boolean>();
  interactorTypeIcon: string;
  interactorOrganismIcon: string;
  externalLinkVisible: boolean;

  ngOnInit(): void {
    this.interactorTypeIcon = interactorTypeIcon(this.interactorType());
    this.interactorOrganismIcon = organismIcon(this.interactorOrganism());
  }

  externalLinkVisibleHandler(isVisible: boolean): void {
    this.externalLinkVisible = isVisible;
  }
}
