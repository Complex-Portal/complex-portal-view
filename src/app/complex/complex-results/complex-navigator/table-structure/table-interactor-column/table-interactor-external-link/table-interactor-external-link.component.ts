import {Component, input, OnInit, output} from '@angular/core';

@Component({
  selector: 'cp-table-interactor-external-link',
  templateUrl: './table-interactor-external-link.component.html',
  styleUrls: ['./table-interactor-external-link.component.css']
})
export class TableInteractorExternalLinkComponent implements OnInit {

  interactorId = input<string>();
  identifierLink = input<string>();
  interactorType = input<string>();
  isMainInteractor = input<boolean>();
  IDDisplay = input<boolean>();

  externalLinkVisible = output<boolean>();

  ngOnInit(): void {
    this.showExternalLink();
  }

  showExternalLink(): boolean {
    if (this.isMainInteractor() && this.interactorType() === 'stable complex') {
      this.externalLinkVisible.emit(false);
      return false;
    }
    this.externalLinkVisible.emit(!!this.identifierLink());
    return !!this.identifierLink();
  }
}
