import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'cp-table-interactor-external-link',
  templateUrl: './table-interactor-external-link.component.html',
  styleUrls: ['./table-interactor-external-link.component.css']
})
export class TableInteractorExternalLinkComponent implements OnInit {

  @Input() interactorId: string;
  @Input() identifierLink: string;
  @Input() interactorType: string;
  @Input() isMainInteractor: boolean;
  @Input() IDDisplay: boolean;

  @Output() externalLinkVisible: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit(): void {
    this.showExternalLink();
  }

  showExternalLink(): boolean {
    if (this.isMainInteractor && this.interactorType === 'stable complex') {
      this.externalLinkVisible.emit(false);
      return false;
    }
    this.externalLinkVisible.emit(!!this.identifierLink);
    return !!this.identifierLink;
  }
}
