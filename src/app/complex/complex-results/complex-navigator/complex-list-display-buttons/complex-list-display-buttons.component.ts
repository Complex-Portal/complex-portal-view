import {Component, model} from '@angular/core';

export enum SearchDisplay {
  list = 'view_list',
  navigator = 'view_navigator',
}

@Component({
  selector: 'cp-complex-list-display-buttons',
  templateUrl: './complex-list-display-buttons.component.html',
  styleUrls: ['./complex-list-display-buttons.component.css']
})
export class ComplexListDisplayButtonsComponent {

  displayType = model<SearchDisplay>();

  setListView() {
    this.displayType.set(SearchDisplay.list);
  }

  setComplexNavigatorView() {
    this.displayType.set(SearchDisplay.navigator);
  }

  protected readonly SearchDisplay = SearchDisplay;
}
