import {Component, input, model, output} from '@angular/core';
import {
  NavigatorComponentGrouping,
  NavigatorComponentSorting, NavigatorDisplayType
} from '../complex-navigator/complex-navigator-utils';
import {ComplexSearchResult} from '../../shared/model/complex-results/complex-search.model';

@Component({
  selector: 'cp-complex-navigator-buttons',
  templateUrl: './complex-navigator-buttons.component.html',
  styleUrls: ['./complex-navigator-buttons.component.css']
})
export class ComplexNavigatorButtonsComponent {
  organismIconDisplay = model<boolean>();
  interactorTypeDisplay = model<boolean>();
  idDisplay = model<boolean>();
  complexSearch = input<ComplexSearchResult>();
  orthologButtonAvailable = input<boolean>();
  typeOfDisplay = input<NavigatorDisplayType>();
  onGroupingChanged = output<NavigatorComponentGrouping>();
  onSortingChanged = output<NavigatorComponentSorting>();
  onDisplayTypeChanged = output<NavigatorDisplayType>();
  protected readonly NavigatorComponentSorting = NavigatorComponentSorting;
  protected readonly NavigatorComponentGrouping = NavigatorComponentGrouping;
  protected readonly NavigatorDisplayType = NavigatorDisplayType;

  onDisplayTypeChange(displayType: NavigatorDisplayType) {
    this.onDisplayTypeChanged.emit(displayType);
  }

  componentsGroupingChanges(typeOfGrouping: NavigatorComponentGrouping) {
    this.onGroupingChanged.emit(typeOfGrouping);
  }

  componentsSortingChanges(typeOfSorting: NavigatorComponentSorting) {
    if (this.typeOfDisplay() === NavigatorDisplayType.DETAILED) {
      if (typeOfSorting === 'Type') {
        this.interactorTypeDisplay.set(false);
        this.organismIconDisplay.set(true);
      } else if (typeOfSorting === 'Organism') {
        this.organismIconDisplay.set(false);
        this.interactorTypeDisplay.set(true);
      }
      this.updateDisplay();
    }
    this.onSortingChanged.emit(typeOfSorting);
  }

  toggleOrganism() {
    this.organismIconDisplay.update(v => !v);
    this.updateDisplay();
  }

  toggleType() {
    this.interactorTypeDisplay.update(v => !v);
    this.updateDisplay();
  }

  toggleId() {
    this.idDisplay.update(v => !v);
    this.updateDisplay();
  }

  setDisplayType(type: NavigatorDisplayType) {
    if (type === NavigatorDisplayType.COMPACT) {
      this.compactDisplay();
    } else if (type === NavigatorDisplayType.DETAILED) {
      this.detailedDisplay();
    }
  }

  compactDisplay() {
    this.organismIconDisplay.set(false);
    this.interactorTypeDisplay.set(false);
    this.idDisplay.set(false);
    this.onDisplayTypeChange(NavigatorDisplayType.COMPACT);
  }

  detailedDisplay() {
    this.organismIconDisplay.set(true);
    this.interactorTypeDisplay.set(true);
    this.idDisplay.set(true);
    this.onDisplayTypeChange(NavigatorDisplayType.DETAILED);
  }

  updateDisplay() {
    if (this.organismIconDisplay() || this.interactorTypeDisplay() || this.idDisplay()) {
      this.onDisplayTypeChange(NavigatorDisplayType.DETAILED);
    } else {
      this.onDisplayTypeChange(NavigatorDisplayType.COMPACT);
    }
  }
}
