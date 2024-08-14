import {Component, OnChanges, input, computed} from '@angular/core';
import {ComplexComponent} from '../../../../../shared/model/complex-results/complex-component.model';
import {EnrichedComplex, EnrichedInteractor} from '../table-interactor-column.component';
import {ComponentWithStoichiometry, findInteractorInComplex} from '../complex-navigator-utils';

@Component({
  selector: 'cp-table-subcomponent-interactor',
  templateUrl: './table-subcomponent-interactor.component.html',
  styleUrls: ['./table-subcomponent-interactor.component.css']
})

export class TableSubcomponentInteractorComponent {
  complex = input<EnrichedComplex>();
  i = input<number>();
  j = input<number>();
  enrichedInteractors = input<EnrichedInteractor[]>();

  interactorComponent = computed(() => findInteractorInComplex(this.complex().complex, this.el.identifier, this.enrichedInteractors()));
  displayTopLineClass = computed(() => this.displayTopLineClassExpanded(this.complex(), this.i(), this.j()));
  displayBottomLineClass = computed(() => this.displayBottomLineClassExpanded(this.complex(), this.i(), this.j()));


  get interactor(): EnrichedInteractor {
    return this.enrichedInteractors()[this.i()];
  }

  get el(): ComplexComponent {
    return this.enrichedInteractors()[this.i()].subComponents[this.j()];
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
          this.enrichedInteractors()[interactorIndex].interactor.identifier === component.identifier);

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
}
