import {Element} from '../../../shared/model/complex-results/element.model';
import {EnrichedInteractor, EnrichedInteractors} from './enriched-interactors.model';

export class EnrichedComplex {
  complex: Element;
  _startInteractorIndex: number;
  _endInteractorIndex: number;
  _startSubComponentIndex: number;
  _endSubComponentIndex: number;


  constructor(complex: Element) {
    this.complex = complex;
    this._startInteractorIndex = null;
    this._endInteractorIndex = null;
    this._startSubComponentIndex = null;
    this._endSubComponentIndex = null;
  }

  calculateStartAndEndIndexes(enrichedInteractors: EnrichedInteractors): void {
    // We iterate through the interactors to find the first and last one part of the complex
    // We do this to be able to draw a line connecting all interactors in the complex
    for (let i = 0; i < enrichedInteractors.interactors.length; i++) {
      if (!enrichedInteractors.interactors[i].hidden) {

        if (!!enrichedInteractors.findInteractorInComplex(i, this.complex)) {
          this.updateInteractorIndexes(enrichedInteractors, i);
        } else if (enrichedInteractors.interactors[i].isExpandedSubComplex()) {
          // The interactor is not part of the complex, but it is a subcomplex, and it is expanded.
          // This means the subcomponents of the subcomplex are visible, and any of them could be part of the complex.
          // In that case, the line could start or end on any of those subcomponents
          for (let j = 0; j < enrichedInteractors.interactors[i].subComponents.length; j++) {
            if (!!enrichedInteractors.findSubcomponentInComplex(i, j, this.complex)) {
              this.updateSubcomponentIndexes(i, j);
            }
          }
        }
      }
    }
  }

  doesLineCrossInteractorCell(enrichedInteractors: EnrichedInteractor[], interactorIndex: number): boolean {
    if (this._startInteractorIndex != null && this._endInteractorIndex != null) {

      // The line starts before this interactor and ends after, so it crosses through the interactor
      if (this._startInteractorIndex < interactorIndex && this._endInteractorIndex > interactorIndex) {
        return true;
      }

      // The line starts before this interactor and end at this interactor or on any of its subcomponents
      if (this._startInteractorIndex < interactorIndex && this._endInteractorIndex === interactorIndex) {
        // If the interactor is an expanded subcomplex, and there is any line between the subcomponents, then
        // the line does not end in this interactor, and it must cross through the interactor cell to the subcomponents
        if (enrichedInteractors[interactorIndex].isExpandedSubComplex()) {
          if (this._startSubComponentIndex != null && this._endSubComponentIndex != null) {
            return true;
          }
        }
      }
    }

    return false;
  }

  doesLineStartOnInteractorCell(enrichedInteractors: EnrichedInteractor[], interactorIndex: number): boolean {
    // The line starts at this interactor or on any of its subcomponents
    if (this._startInteractorIndex != null && this._startInteractorIndex === interactorIndex) {

      if (!enrichedInteractors[interactorIndex].isSubComplex) {
        // If the interactor is not a subcomplex, then the interactor has no subcomponents and the line starts in it
        return true;
      }
      // If the interactor is a subcomplex.
      // If the interactor is actually part of the complex, the line starts in this interactor
      // Otherwise, the line actually starts on one of the subcomponents of the complex, but not on the interactor itself, as it is
      // not part of the complex.
      if (this._startSubComponentIndex === -1) {
        return true;
      }
    }

    return false;
  }

  doesLineEndOnInteractorCell(enrichedInteractors: EnrichedInteractor[], interactorIndex: number): boolean {
    // The line ends at this interactor or on any of its subcomponents
    if (this._endInteractorIndex != null && this._endInteractorIndex === interactorIndex) {

      // If the interactor is an expanded subcomplex, and there is any line between the subcomponents, then
      // the line does not end in this interactor, and it must cross through to the subcomponents
      if (enrichedInteractors[interactorIndex].isExpandedSubComplex()) {
        if (this._startSubComponentIndex != null && this._endSubComponentIndex != null) {
          return false;
        }
      }
      return true;
    }
    return false;
  }

  doesLineCrossSubcomponentCell(interactorIndex: number, subComponentIndex: number): boolean {
    if (this._startInteractorIndex != null && this._endInteractorIndex != null) {
      // The line starts before this interactor and ends after, so it crosses through all the subcomponents of the interactor
      if (this._startInteractorIndex < interactorIndex && this._endInteractorIndex > interactorIndex) {
        return true;
      }

      if (this._startSubComponentIndex != null && this._endSubComponentIndex != null) {
        // The line starts before this subcomponent and ends after, so it crosses through the subcomponent
        if (this._startSubComponentIndex < subComponentIndex && this._endSubComponentIndex > subComponentIndex) {
          return true;
        }

        // The line started before this interactor, and it ends on a later subcomponent, so it crosses through this subcomponent
        if (this._startInteractorIndex < interactorIndex && this._endSubComponentIndex > subComponentIndex) {
          return true;
        }

        // The line started before this subcomponent, and it ends on a later interactor, so it crosses through this subcomponent
        if (this._startSubComponentIndex < subComponentIndex && this._endInteractorIndex > interactorIndex) {
          return true;
        }
      }
    }

    return false;
  }

  doesLineStartOnSubcomponentCell(enrichedInteractors: EnrichedInteractor[], interactorIndex: number, subComponentIndex: number): boolean {
    // The line starts at this interactor or on any of its subcomponents
    if (this._startInteractorIndex != null && this._startInteractorIndex === interactorIndex) {
      if (this._startSubComponentIndex != null && this._startSubComponentIndex === subComponentIndex) {
        // If the subcomplex is a component of the complex, the line starts in the cell of the interactor, meaning it cannot
        // start on any subcomponent.
        // Otherwise, it starts on the subcomponent with the index subComponentIndex
        return !this.complex.interactors.some(component =>
          enrichedInteractors[interactorIndex].interactor.identifier === component.identifier);

      }
    }

    return false;
  }

  doesLineEndOnSubcomponentCell(interactorIndex: number, subComponentIndex: number): boolean {
    if (this._endInteractorIndex != null && this._endInteractorIndex === interactorIndex) {
      // The line ends at this interactor and this subcomponent
      if (this._endSubComponentIndex != null && this._endSubComponentIndex === subComponentIndex) {
        return true;
      }
    }
    return false;
  }

  private updateInteractorIndexes(enrichedInteractors: EnrichedInteractors, interactorIndex: number): void {
    // The interactor is part of the complex, we update the start and end indices for the interactors
    // line as it may start in this interactor
    this._startInteractorIndex = this.getMinValue(this._startInteractorIndex, interactorIndex);
    this._endInteractorIndex = this.getMaxValue(this._endInteractorIndex, interactorIndex);

    // The interactor is a subcomplex
    if (enrichedInteractors.interactors[interactorIndex].isExpandedSubComplex()) {
      // If the subcomplex is expanded, as the subcomplex is part of the complex, all its subcomponents are also part
      // of it. That means we need a line connecting all the subcomponents.
      // That line must also connect to the subcomplex, so we start it at -1 to make sure it starts at the interactor cell
      // and not at the first subcomponent
      this._startSubComponentIndex = -1;
      this._endSubComponentIndex = enrichedInteractors.interactors[interactorIndex].subComponents.length - 1;
    }
  }

  private updateSubcomponentIndexes(interactorIndex: number, subcomponentIndex: number): void {
    // The subcomponent of this interactor is part of the complex, we update the start and end indices for the interactors
    // line as it may start in this interactor
    this._startInteractorIndex = this.getMinValue(this._startInteractorIndex, interactorIndex);
    this._endInteractorIndex = this.getMaxValue(this._endInteractorIndex, interactorIndex);
    // The subcomponent of this interactor is part of the complex, we update the start and end indices for the subcomponents
    // line as it may start in this subcomponent
    this._startSubComponentIndex = this.getMinValue(this._startSubComponentIndex, subcomponentIndex);
    this._endSubComponentIndex = this.getMaxValue(this._endSubComponentIndex, subcomponentIndex);
  }

  private getMinValue(valueA: number, valueB: number) {
    if (valueB === null) {
      return valueA;
    }
    if (valueA === null) {
      return valueB;
    }
    return Math.min(valueA, valueB);
  }

  private getMaxValue(valueA: number, valueB: number) {
    if (valueB === null) {
      return valueA;
    }
    if (valueA === null) {
      return valueB;
    }
    return Math.max(valueA, valueB);
  }
}
