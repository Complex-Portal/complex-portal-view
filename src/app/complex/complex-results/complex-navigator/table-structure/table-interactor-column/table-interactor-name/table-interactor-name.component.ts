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
  @Input() interactorTypeIcon: string;
  @Input() interactorOrganismIcon: string;
  @Input() interactorOrganism: string;

  ngOnInit(): void {
    this.formatInteractorOrganism(); // put the organism name into the right format for the interactorOrganismIcon function
    this.interactorTypeIcon = interactorTypeIcon(this.interactorType);
    this.interactorOrganismIcon = organismIcon(this.interactorOrganism);
  }

  formatInteractorOrganism() {
    let from = this.interactorOrganism.indexOf(';');
    this.interactorOrganism = this.interactorOrganism.substring(0, from);
  }
}
