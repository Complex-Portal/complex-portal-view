import {Component, Input, OnInit} from '@angular/core';
import {Interactor} from '../../../../../shared/model/complex-results/interactor.model';
import {ComplexComponent} from '../../../../../shared/model/complex-results/complex-component.model';
import {EnrichedInteractor} from '../table-interactor-column.component';

@Component({
  selector: 'cp-table-interactor-external-link',
  templateUrl: './table-interactor-external-link.component.html',
  styleUrls: ['./table-interactor-external-link.component.css']
})
export class TableInteractorExternalLinkComponent implements OnInit {

  @Input() interactorId: string;
  @Input() identifierLink: string;
  @Input() interactorType: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  showExternalLink(): boolean {
    return this.interactorType !== 'stable complex' && !!this.identifierLink;
  }

}
