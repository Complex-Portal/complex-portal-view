import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'cp-complex-navigator-sorting',
  templateUrl: './complex-navigator-sorting.component.html',
  styleUrls: ['./complex-navigator-sorting.component.css']
})
export class ComplexNavigatorSortingComponent {
  @Output() interactorsSortingChange = new EventEmitter<string>();
  @Output() organismIconDisplayChange = new EventEmitter<boolean>();
  @Output() interactorTypeDisplayChange = new EventEmitter<boolean>();
  @Output() IDDisplayChange = new EventEmitter<boolean>();

  @Input() interactorsSorting: string;
  @Input() organismIconDisplay: boolean;
  @Input() interactorTypeDisplay: boolean;
  @Input() IDDisplay: boolean;

  setInteractorsSorting(typeOfSorting: string) {
    this.interactorsSortingChange.emit(typeOfSorting);
  }

  setDisplayingOrganism() {
    this.organismIconDisplay = !this.organismIconDisplay;
    this.organismIconDisplayChange.emit(this.organismIconDisplay);
  }

  setDisplayingType() {
    this.interactorTypeDisplay = !this.interactorTypeDisplay;
    this.interactorTypeDisplayChange.emit(this.interactorTypeDisplay);
  }

  setDisplayingID() {
    this.IDDisplay = !this.IDDisplay;
    this.IDDisplayChange.emit(this.IDDisplay);
  }
}
