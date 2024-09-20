import {Component, computed, input, model, OnInit} from '@angular/core';
import {
  NavigatorComponentGrouping,
  NavigatorComponentSorting
} from '../complex-navigator/complex-navigator-utils';
import {ComplexSearchResult} from '../../shared/model/complex-results/complex-search.model';
import {ComplexComponent} from '../../shared/model/complex-results/complex-component.model';

@Component({
  selector: 'cp-complex-navigator-buttons',
  templateUrl: './complex-navigator-buttons.component.html',
  styleUrls: ['./complex-navigator-buttons.component.css']
})
export class ComplexNavigatorButtonsComponent implements OnInit {
  componentsSorting = model<NavigatorComponentSorting>();
  componentsGrouping = model<NavigatorComponentGrouping>();
  organismIconDisplay = model<boolean>();
  interactorTypeDisplay = model<boolean>();
  idDisplay = model<boolean>();
  complexSearch = input<ComplexSearchResult>();
  orthologButtonAvailable = input<boolean>();

  // orthologButtonAvailable = computed(() => this.checkIfPantherGroups());

  typeOfDisplay: 'compact' | 'detailed';

  protected readonly NavigatorComponentSorting = NavigatorComponentSorting;
  protected readonly NavigatorComponentGrouping = NavigatorComponentGrouping;

  ngOnInit() {
    this.updateDisplay();
  }

  componentsGroupingChanges(typeOfGrouping: NavigatorComponentGrouping) {
    this.componentsGrouping.set(typeOfGrouping);
  }

  componentsSortingChanges(typeOfSorting: NavigatorComponentSorting) {
    this.componentsSorting.set(typeOfSorting);
    if (this.typeOfDisplay === 'detailed') {
      if (typeOfSorting === 'Type') {
        this.interactorTypeDisplay.set(false);
        this.organismIconDisplay.set(true);
      } else if (typeOfSorting === 'Organism') {
        this.organismIconDisplay.set(false);
        this.interactorTypeDisplay.set(true);
      }
      this.updateDisplay();
    }
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

  setDisplayType(type: 'compact' | 'detailed') {
    if (type === 'compact') {
      this.compactDisplay();
    } else if (type === 'detailed') {
      this.detailedDisplay();
    }
  }

  compactDisplay() {
    this.organismIconDisplay.set(false);
    this.interactorTypeDisplay.set(false);
    this.idDisplay.set(false);
    this.typeOfDisplay = 'compact';
  }

  detailedDisplay() {
    this.organismIconDisplay.set(true);
    this.interactorTypeDisplay.set(true);
    this.idDisplay.set(true);
    this.typeOfDisplay = 'detailed';
  }

  updateDisplay() {
    if (this.organismIconDisplay() || this.interactorTypeDisplay() || this.idDisplay()) {
      this.typeOfDisplay = 'detailed';
    } else {
      this.typeOfDisplay = 'compact';
    }
  }

  // checkIfPantherGroups() {
  //   const pantherXrefs = new Set<string>();
  //   const parsedInteractors = new Set<ComplexComponent>();
  //
  //   for (const complex of this.complexSearch().elements) {
  //     for (const complexComponent of complex.interactors) {
  //       parsedInteractors.add(complexComponent);
  //     }
  //   }
  //
  //   for (const complexComponent of parsedInteractors) {
  //     for (const xref of complexComponent.xrefs) {
  //       if (xref.database === 'panther' && xref.qualifier === 'orthology-group') {
  //         if (pantherXrefs.has(xref.identifier)) {
  //           return true;
  //         }
  //         pantherXrefs.add(xref.identifier);
  //       }
  //     }
  //   }
  //   return false;
  // }
}
