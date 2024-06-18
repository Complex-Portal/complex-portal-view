import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';

@Component({
  selector: 'cp-complex-navigator-buttons',
  templateUrl: './complex-navigator-buttons.component.html',
  styleUrls: ['./complex-navigator-buttons.component.css']
})
export class ComplexNavigatorButtonsComponent implements OnInit {
  @Output() interactorsSortingChange = new EventEmitter<string>();
  @Output() organismIconDisplayChange = new EventEmitter<boolean>();
  @Output() interactorTypeDisplayChange = new EventEmitter<boolean>();
  @Output() IDDisplayChange = new EventEmitter<boolean>();

  @Input() interactorsSorting: string;
  @Input() organismIconDisplay: boolean;
  @Input() interactorTypeDisplay: boolean;
  @Input() IDDisplay: boolean;

  typeOfDisplay: string;

  ngOnInit() {
    this.updateDisplay();
  }

  interactorsSortingChanges(typeOfSorting: string) {
    this.interactorsSortingChange.emit(typeOfSorting);
    if (this.typeOfDisplay === 'detailed') {
      if (typeOfSorting === 'Type') {
        this.interactorTypeDisplay = false;
        this.organismIconDisplay = true;
      } else if (typeOfSorting === 'Organism') {
        this.organismIconDisplay = false;
        this.interactorTypeDisplay = true;
      }
      this.updateDisplay();
    }
  }

  DisplayingOrganism() {
    this.organismIconDisplay = !this.organismIconDisplay;
    this.updateDisplay();
  }

  DisplayingType() {
    this.interactorTypeDisplay = !this.interactorTypeDisplay;
    this.updateDisplay();
  }

  DisplayingID() {
    this.IDDisplay = !this.IDDisplay;
    this.updateDisplay();
  }

  setDisplayType(type: string) {
    if (type === 'compact') {
      this.compactDisplay();
    } else if (type === 'detailed') {
      this.detailedDisplay();
    }
  }

  compactDisplay() {
    this.organismIconDisplay = false;
    this.interactorTypeDisplay = false;
    this.IDDisplay = false;
    this.typeOfDisplay = 'compact';
    this.changesEmitter();
  }

  detailedDisplay() {
    this.organismIconDisplay = true;
    this.interactorTypeDisplay = true;
    this.IDDisplay = true;
    this.typeOfDisplay = 'detailed';
    this.changesEmitter();
  }

  updateDisplay() {
    if (this.organismIconDisplay || this.interactorTypeDisplay || this.IDDisplay) {
      this.typeOfDisplay = 'detailed';
    } else {
      this.typeOfDisplay = 'compact';
    }
    this.changesEmitter();
  }

  changesEmitter() {
    this.organismIconDisplayChange.emit(this.organismIconDisplay);
    this.interactorTypeDisplayChange.emit(this.interactorTypeDisplay);
    this.IDDisplayChange.emit(this.IDDisplay);
  }

}
