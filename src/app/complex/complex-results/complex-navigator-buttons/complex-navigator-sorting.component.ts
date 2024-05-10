import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'cp-complex-navigator-buttons',
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

  typeOfDisplay: string;

  InteractorsSorting(typeOfSorting: string) {
    this.interactorsSortingChange.emit(typeOfSorting);
    switch (this.typeOfDisplay) {
      case 'compact':
        this.compactDisplay();
        break;
      default:
        this.detailedDisplay();
        if (typeOfSorting === 'Type') {
          this.interactorTypeDisplay = false;
        } else if (typeOfSorting === 'Organism') {
          this.organismIconDisplay = false;
        }
    }
    this.changesEmitter();
  }

  DisplayingOrganism() {
    this.organismIconDisplay = !this.organismIconDisplay;
    this.changesEmitter();
  }

  DisplayingType() {
    this.interactorTypeDisplay = !this.interactorTypeDisplay;
    this.changesEmitter();
  }

  DisplayingID() {
    this.IDDisplay = !this.IDDisplay;
    this.changesEmitter();
  }

  compactDisplay() {
    this.organismIconDisplay = false;
    this.interactorTypeDisplay = false;
    this.IDDisplay = false;
    this.changesEmitter();
    this.typeOfDisplay = 'compact';
  }

  detailedDisplay() {
    this.organismIconDisplay = true;
    this.interactorTypeDisplay = true;
    this.IDDisplay = true;
    this.changesEmitter();
    this.typeOfDisplay = 'detailed';
  }

  changesEmitter() {
    this.organismIconDisplayChange.emit(this.organismIconDisplay);
    this.interactorTypeDisplayChange.emit(this.interactorTypeDisplay);
    this.IDDisplayChange.emit(this.IDDisplay);
  }
}
