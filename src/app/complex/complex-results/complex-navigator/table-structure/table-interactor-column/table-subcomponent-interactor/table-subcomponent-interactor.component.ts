import {Component, Input, OnChanges} from '@angular/core';
import {Element} from '../../../../../shared/model/complex-results/element.model';
import {ComplexComponent} from '../../../../../shared/model/complex-results/complex-component.model';
import {EnrichedComplex, EnrichedInteractor} from '../table-interactor-column.component';
import {findInteractorInComplex, formatStoichiometryValues, getStoichiometry, stoichiometryOfInteractors} from '../complex-navigator-utils';

@Component({
  selector: 'cp-table-subcomponent-interactor',
  templateUrl: './table-subcomponent-interactor.component.html',
  styleUrls: ['./table-subcomponent-interactor.component.css']
})

export class TableSubcomponentInteractorComponent implements OnChanges {
  @Input() complex: EnrichedComplex;
  @Input() i: number;
  @Input() j: number;
  @Input() enrichedInteractors: EnrichedInteractor[];

  displayTopLineClass: string;
  displayBottomLineClass: string;
  interactorInComplex = false;
  interactorStoichiometryText: string;
  interactorStoichiometryValue: string;
  interactorInSubComplex = false;
  subComplexInteractorStoichiometryText: string;
  subComplexInteractorStoichiometryValue: string;

  ngOnChanges(): void {
    this.displayTopLineClass = this.displayTopLineClassExpanded(this.complex, this.i, this.j);
    this.interactorInComplex = !!findInteractorInComplex(this.complex.complex, this.el.identifier);
    this.interactorStoichiometryText = getStoichiometry(this.complex.complex, this.el.identifier);
    this.interactorStoichiometryValue = stoichiometryOfInteractors(this.complex.complex, this.el.identifier);
    this.interactorInSubComplex = !!this.findInteractorInExpandedSubComplex(this.interactor, this.complex.complex, this.el.identifier);
    this.subComplexInteractorStoichiometryText = this.getStoichiometryInExpandedSubComplex(this.interactor, this.el.identifier);
    this.subComplexInteractorStoichiometryValue = this.stoichiometryOfInteractorsExpandable(this.interactor, this.el.identifier);
    this.displayBottomLineClass = this.displayBottomLineClassExpanded(this.complex, this.i, this.j);
  }


  get interactor(): EnrichedInteractor {
    return this.enrichedInteractors[this.i];
  }

  get el(): ComplexComponent {
    return this.enrichedInteractors[this.i].subComponents[this.j];
  }

  public displayTopLineClassExpanded(complex: EnrichedComplex, interactorIndex: number, subComponentIndex: number): string {
    if (this.doesLineCrossSubcomponentCell(complex, interactorIndex, subComponentIndex)) {
      return 'verticalLine';
    }
    if (this.doesLineEndOnSubcomponentCell(complex, interactorIndex, subComponentIndex) &&
      !this.doesLineStartOnSubcomponentCell(complex, interactorIndex, subComponentIndex)) {
      return 'verticalLine';
    }

    return 'transparentVerticalLine';
  }

  public displayBottomLineClassExpanded(complex: EnrichedComplex, interactorIndex: number, subComponentIndex: number): string {
    if (this.doesLineCrossSubcomponentCell(complex, interactorIndex, subComponentIndex)) {
      return 'verticalLine';
    }
    if (this.doesLineStartOnSubcomponentCell(complex, interactorIndex, subComponentIndex) &&
      !this.doesLineEndOnSubcomponentCell(complex, interactorIndex, subComponentIndex)) {
      return 'verticalLine';
    }

    return 'transparentVerticalLine';
  }

  public findInteractorInExpandedSubComplex(interactor: EnrichedInteractor, complex: Element, interactorId: string): ComplexComponent {
    if (complex.interactors.some(component => component.identifier === interactor.interactor.identifier)) {
      return interactor.subComponents.find(component => component.identifier === interactorId);
    }
    return null;
  }

  getStoichiometryInExpandedSubComplex(interactor: EnrichedInteractor, interactorId: string): string {
    const match = this.findInteractorInSubcomplex(interactor, interactorId);
    if (!!match) {
      if (!!match.stochiometry) {
        return 'Stoichiometry values: ' + (match.stochiometry);
      } else {
        return 'No stoichiometry data available'; // sometimes we don't have the stoichiometry value
      }
    }
    return null;
  }

  stoichiometryOfInteractorsExpandable(interactor: EnrichedInteractor, interactorId: string): string {
    const match = this.findInteractorInSubcomplex(interactor, interactorId);
    if (!!match) {
      return formatStoichiometryValues(match.stochiometry);
    }
    return null;
  }

  private doesLineCrossSubcomponentCell(complex: EnrichedComplex, interactorIndex: number, subComponentIndex: number): boolean {
    if (complex.startInteractorIndex != null && complex.endInteractorIndex != null) {
      // The line starts before this interactor and ends after, so it crosses through all the subcomponents of the interactor
      if (complex.startInteractorIndex < interactorIndex && complex.endInteractorIndex > interactorIndex) {
        return true;
      }

      if (complex.startSubComponentIndex != null && complex.endSubComponentIndex != null) {
        // The line starts before this subcomponent and ends after, so it crosses through the subcomponent
        if (complex.startSubComponentIndex < subComponentIndex && complex.endSubComponentIndex > subComponentIndex) {
          return true;
        }

        // The line started before this interactor, and it ends on a later subcomponent, so it crosses through this subcomponent
        if (complex.startInteractorIndex < interactorIndex && complex.endSubComponentIndex > subComponentIndex) {
          return true;
        }

        // The line started before this subcomponent, and it ends on a later interactor, so it crosses through this subcomponent
        if (complex.startSubComponentIndex < subComponentIndex && complex.endInteractorIndex > interactorIndex) {
          return true;
        }
      }
    }

    return false;
  }

  private doesLineStartOnSubcomponentCell(complex: EnrichedComplex, interactorIndex: number, subComponentIndex: number): boolean {
    // The line starts at this interactor or on any of its subcomponents
    if (complex.startInteractorIndex != null && complex.startInteractorIndex === interactorIndex) {
      if (complex.startSubComponentIndex != null && complex.startSubComponentIndex === subComponentIndex) {
        // If the subcomplex is a component of the complex, the line starts in the cell of the interactor, meaning it cannot
        // start on any subcomponent.
        // Otherwise, it starts on the subcomponent with the index subComponentIndex
        return !complex.complex.interactors.some(component =>
          this.enrichedInteractors[interactorIndex].interactor.identifier === component.identifier);

      }
    }

    return false;
  }

  private doesLineEndOnSubcomponentCell(complex: EnrichedComplex, interactorIndex: number, subComponentIndex: number): boolean {
    if (complex.endInteractorIndex != null && complex.endInteractorIndex === interactorIndex) {
      // The line ends at this interactor and this subcomponent
      if (complex.endSubComponentIndex != null && complex.endSubComponentIndex === subComponentIndex) {
        return true;
      }
    }
    return false;
  }

  private findInteractorInSubcomplex(interactor: EnrichedInteractor, interactorId: string): ComplexComponent {
    return interactor.subComponents.find(component => component.identifier === interactorId);
  }

}
