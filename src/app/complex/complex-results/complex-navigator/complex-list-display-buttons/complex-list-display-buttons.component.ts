import {Component, EventEmitter, Input, Output} from '@angular/core';

export const LIST_VIEW = 'view_list';
export const COMPLEX_NAVIGATOR_VIEW = 'view_complex_navigator';

@Component({
  selector: 'cp-complex-list-display-buttons',
  templateUrl: './complex-list-display-buttons.component.html',
  styleUrls: ['./complex-list-display-buttons.component.css']
})
export class ComplexListDisplayButtonsComponent {
  @Input() displayType: string;
  @Output() displayTypeChange = new EventEmitter<string>();

  setListView() {
    this.displayType = LIST_VIEW;
    this.displayTypeChange.emit(this.displayType);
  }

  setComplexNavigatorView() {
    this.displayType = COMPLEX_NAVIGATOR_VIEW;
    this.displayTypeChange.emit(this.displayType);
  }

  isDisplayComplexNavigatorView(): boolean {
    return this.displayType === COMPLEX_NAVIGATOR_VIEW;
  }

}
