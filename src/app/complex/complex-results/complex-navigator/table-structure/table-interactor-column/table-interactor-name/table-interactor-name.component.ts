import {Component, Input, OnInit} from '@angular/core';
import {interactorTypeIcon} from '../../../../../complex-portal-utils';
import {organismIcon} from '../../../../../complex-portal-utils';

@Component({
  selector: 'cp-table-interactor-name',
  templateUrl: './table-interactor-name.component.html',
  styleUrls: ['./table-interactor-name.component.css']
})
export class TableInteractorNameComponent implements OnInit {

  @Input() interactorName: string;
  @Input() interactorType: string;
  @Input() interactorId: string;
  @Input() interactorOrganism: string;
  @Input() identifierLink: string;
  @Input() organismIconDisplay: boolean;
  @Input() interactorTypeDisplay: boolean;
  @Input() IDDisplay: boolean;
  @Input() isMainInteractor: boolean;
  interactorTypeIcon: string;
  interactorOrganismIcon: string;
  externalLinkVisible: boolean;

  ngOnInit(): void {
    this.formatInteractorOrganism(); // put the organism name into the right format for the interactorOrganismIcon function
    this.interactorTypeIcon = interactorTypeIcon(this.interactorType);
    this.interactorOrganismIcon = organismIcon(this.interactorOrganism);
  }

  formatInteractorOrganism() {
    if (this.interactorOrganism.includes(';')) {
      const end = this.interactorOrganism.indexOf(';');
      this.interactorOrganism = this.interactorOrganism.substring(0, end);
    }
  }

  externalLinkVisibleHandler(isVisible: boolean): void {
    this.externalLinkVisible = isVisible;
  }
}
