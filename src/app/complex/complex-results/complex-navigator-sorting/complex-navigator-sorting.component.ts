import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'cp-complex-navigator-sorting',
  templateUrl: './complex-navigator-sorting.component.html',
  styleUrls: ['./complex-navigator-sorting.component.css']
})
export class ComplexNavigatorSortingComponent {
  @Output() interactorsSortingChange = new EventEmitter<string>();
  @Input() interactorsSorting: string;

  setInteractorsSorting(typeOfSorting: string) {
    this.interactorsSortingChange.emit(typeOfSorting);
  }

  //test
}
