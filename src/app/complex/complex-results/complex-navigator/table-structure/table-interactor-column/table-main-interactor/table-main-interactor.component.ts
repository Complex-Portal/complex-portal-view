import {Component, Input} from '@angular/core';
import {EnrichedComplex, EnrichedInteractor} from '../table-interactor-column.component';
import {Element} from '../../../../../shared/model/complex-results/element.model';
import {ComplexComponent} from '../../../../../shared/model/complex-results/complex-component.model';
import {
  findInteractorInComplex,
  getStoichiometry,
  stoichiometryOfInteractors,
  parseStoichiometryValues
} from '../complex-navigator-utils';

@Component({
  selector: 'cp-table-main-interactor',
  templateUrl: './table-main-interactor.component.html',
  styleUrls: ['./table-main-interactor.component.css']
})
export class TableMainInteractorComponent {
  @Input() complex: EnrichedComplex;
  @Input() i: number;
  @Input() enrichedInteractors: EnrichedInteractor[];

  findInteractorInComplex = findInteractorInComplex;
  getStoichiometry = getStoichiometry;
  stoichiometryOfInteractors = stoichiometryOfInteractors;

  get interactor(): EnrichedInteractor {
    return this.enrichedInteractors[this.i];
  }

  findInteractorsInSubComplex(complex: Element, interactorId: string): ComplexComponent[] {
    return this.enrichedInteractors
      // filter subcomplexes
      .filter(interactor => interactor.isSubComplex)
      // filter subcomplexes included in complex
      .filter(interactor =>
        complex.interactors.some(component => component.identifier === interactor.interactor.identifier))
      // filter subcomplexes that match the componentId
      .filter(interactor => !!interactor.subComponents)
      .map(interactor => interactor.subComponents.find(subComponent => subComponent.identifier === interactorId))
      .filter(component => !!component);
  }

  public displayTopLineClass(complex: EnrichedComplex, interactorIndex: number): string {
    if (this.doesLineCrossInteractorCell(complex, interactorIndex)) {
      return 'verticalLine';
    }
    if (this.doesLineEndOnInteractorCell(complex, interactorIndex) && !this.doesLineStartOnInteractorCell(complex, interactorIndex)) {
      return 'verticalLine';
    }

    return 'transparentVerticalLine';
  }

  public displayBottomLineClass(complex: EnrichedComplex, interactorIndex: number): string {
    if (this.doesLineCrossInteractorCell(complex, interactorIndex)) {
      return 'verticalLine';
    }
    if (this.doesLineStartOnInteractorCell(complex, interactorIndex) && !this.doesLineEndOnInteractorCell(complex, interactorIndex)) {
      return 'verticalLine';
    }

    return 'transparentVerticalLine';
  }

  getStoichiometrySubComplex(complex: Element, interactorId: string): string {
    const matches = this.findInteractorsInSubComplex(complex, interactorId);
    if (matches.length > 0) {
      const stoichiometryValues = this.addedStoichiometryValues(matches);
      if (!!stoichiometryValues) {
        return `Stoichiometry values: minValue: ${stoichiometryValues[0]}, maxValue: ${stoichiometryValues[1]}`;
      } else {
        return 'No stoichiometry data available'; // sometimes we don't have the stoichiometry value
      }
    }
    return null;
  }

  stoichiometryOfInteractorsMainTable(complex: Element, interactorId: string): string {
    const matches = this.findInteractorsInSubComplex(complex, interactorId);
    if (matches.length > 0) {
      const stoichiometryValues = this.addedStoichiometryValues(matches);
      if (!!stoichiometryValues) {
        if (stoichiometryValues[0] === stoichiometryValues[1]) {
          return stoichiometryValues[0].toString();
        } else {
          return `${stoichiometryValues[0]}, ${stoichiometryValues[1]}`;
        }
      } else {
        return ' ';
      }
    }
    return null;
  }

  private doesLineCrossInteractorCell(complex: EnrichedComplex, interactorIndex: number): boolean {
    if (complex.startInteractorIndex != null && complex.endInteractorIndex != null) {

      // The line starts before this interactor and ends after, so it crosses through the interactor
      if (complex.startInteractorIndex < interactorIndex && complex.endInteractorIndex > interactorIndex) {
        return true;
      }

      // The line starts before this interactor and end at this interactor or on any of its subcomponents
      if (complex.startInteractorIndex < interactorIndex && complex.endInteractorIndex === interactorIndex) {
        // If the interactor is an expanded subcomplex, and there is any line between the subcomponents, then
        // the line does not end in this interactor, and it must cross through the interactor cell to the subcomponents
        if (this.enrichedInteractors[interactorIndex].isSubComplex && this.enrichedInteractors[interactorIndex].expanded) {
          if (complex.startSubComponentIndex != null && complex.endSubComponentIndex != null) {
            return true;
          }
        }
      }
    }

    return false;
  }

  private doesLineStartOnInteractorCell(complex: EnrichedComplex, interactorIndex: number): boolean {
    // The line starts at this interactor or on any of its subcomponents
    if (complex.startInteractorIndex != null && complex.startInteractorIndex === interactorIndex) {

      if (!this.enrichedInteractors[interactorIndex].isSubComplex) {
        // If the interactor is not a subcomplex, then the interactor has no subcomponents and the line starts in it
        return true;
      }
      // If the interactor is a subcomplex.
      // If the interactor is actually part of the complex, the line starts in this interactor
      // Otherwise, the line actually starts on one of the subcomponents of the complex, but not on the interactor itself, as it is
      // not part of the complex.
      if (complex.complex.interactors.some(component =>
        this.enrichedInteractors[interactorIndex].interactor.identifier === component.identifier)) {
        return true;
      }
    }

    return false;
  }

  private doesLineEndOnInteractorCell(complex: EnrichedComplex, interactorIndex: number): boolean {
    // The line ends at this interactor or on any of its subcomponents
    if (complex.endInteractorIndex != null && complex.endInteractorIndex === interactorIndex) {

      // If the interactor is an expanded subcomplex, and there is any line between the subcomponents, then
      // the line does not end in this interactor, and it must cross through to the subcomponents
      if (this.enrichedInteractors[interactorIndex].isSubComplex && this.enrichedInteractors[interactorIndex].expanded) {
        if (complex.startSubComponentIndex != null && complex.endSubComponentIndex != null) {
          return false;
        }
      }
      return true;
    }
    return false;
  }

  private addedStoichiometryValues(components: ComplexComponent[]): [number, number] {
    let minValue: number = null;
    let maxValue: number = null;
    for (const component of components) {
      const parsedStoichiometry = parseStoichiometryValues(component.stochiometry);
      if (!!parsedStoichiometry) {
        if (minValue === null) {
          minValue = 0;
        }
        if (maxValue === null) {
          maxValue = 0;
        }
        minValue += parsedStoichiometry[0];
        maxValue += parsedStoichiometry[1];
      }
    }
    if (minValue !== null && maxValue !== null) {
      return [minValue, maxValue];
    }
    return null;
  }

}
