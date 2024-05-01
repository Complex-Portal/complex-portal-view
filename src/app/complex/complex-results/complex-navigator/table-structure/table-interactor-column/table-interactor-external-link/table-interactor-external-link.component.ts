import {Component, Input} from '@angular/core';

@Component({
  selector: 'cp-table-interactor-external-link',
  templateUrl: './table-interactor-external-link.component.html',
  styleUrls: ['./table-interactor-external-link.component.css']
})
export class TableInteractorExternalLinkComponent {

  @Input() interactorId: string;
  @Input() identifierLink: string;
  @Input() interactorType: string;

  // showExternalLink(): boolean {
  //   return this.interactorType !== 'stable complex' && !!this.identifierLink;
  // }
}
