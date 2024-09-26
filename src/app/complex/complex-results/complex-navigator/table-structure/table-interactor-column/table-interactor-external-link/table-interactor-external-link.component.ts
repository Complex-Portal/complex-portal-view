import {Component, input, OnInit, output} from '@angular/core';
import {INavigatorComponent} from '../../model/navigator-component.model';

@Component({
  selector: 'cp-table-interactor-external-link',
  templateUrl: './table-interactor-external-link.component.html',
  styleUrls: ['./table-interactor-external-link.component.css']
})
export class TableInteractorExternalLinkComponent implements OnInit {
  interactor = input.required<INavigatorComponent>();

  externalLinkVisible = output<boolean>();

  ngOnInit(): void {
    this.showExternalLink();
  }

  showExternalLink(): boolean {
    if (this.interactor().hasSubComponents && this.interactor().interactorType === 'stable complex') {
      this.externalLinkVisible.emit(false);
      return false;
    }
    this.externalLinkVisible.emit(!!this.interactor().identifierLink);
    return !!this.interactor().identifierLink;
  }
}
