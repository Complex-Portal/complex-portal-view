import {Component, output, input, model} from '@angular/core';

export const LIST_VIEW = 'view_list';
export const COMPLEX_NAVIGATOR_VIEW = 'view_complex_navigator';

export type SearchDisplay = 'view_list' | 'view_complex_navigator';

@Component({
  selector: 'cp-complex-list-display-buttons',
  templateUrl: './complex-list-display-buttons.component.html',
  styleUrls: ['./complex-list-display-buttons.component.css']
})
export class ComplexListDisplayButtonsComponent {

  displayType = model<SearchDisplay>('view_list');

  setListView() {
    this.displayType.set(LIST_VIEW);
  }

  setComplexNavigatorView() {
    this.displayType.set(COMPLEX_NAVIGATOR_VIEW);
  }
}
