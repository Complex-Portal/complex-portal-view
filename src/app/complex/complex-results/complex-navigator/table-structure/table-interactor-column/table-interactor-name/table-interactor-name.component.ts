import {Component, Input, OnInit} from '@angular/core';
import {interactorTypeIcon} from '../../../../../complex-portal-utils';

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

  constructor() {
  }

  ngOnInit(): void {
    this.interactorTypeIcon = interactorTypeIcon(this.interactorType);
  }
}
