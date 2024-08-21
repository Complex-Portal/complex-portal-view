import {Component, computed, input} from '@angular/core';
import {EnrichedComplex, EnrichedInteractor} from '../table-interactor-column.component';
import {findInteractorInComplex} from '../complex-navigator-utils';

@Component({
  selector: 'cp-table-main-interactor',
  templateUrl: './table-main-interactor.component.html',
  styleUrls: ['./table-main-interactor.component.css']
})
export class TableMainInteractorComponent {
  complex = input<EnrichedComplex>();
  i = input<number>();
  enrichedInteractors = input<EnrichedInteractor[]>();

  interactorComponent = computed(() =>
    findInteractorInComplex(this.complex().complex, this.interactor.interactor.identifier, this.enrichedInteractors()));
  topLineClass = computed(() => this.displayTopLineClass(this.complex(), this.i()));
  bottomLineClass = computed(() => this.displayBottomLineClass(this.complex(), this.i()));

  get interactor(): EnrichedInteractor {
    return this.enrichedInteractors()[this.i()];
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
        if (this.enrichedInteractors()[interactorIndex].isSubComplex && this.enrichedInteractors()[interactorIndex].expanded) {
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

      if (!this.enrichedInteractors()[interactorIndex].isSubComplex) {
        // If the interactor is not a subcomplex, then the interactor has no subcomponents and the line starts in it
        return true;
      }
      // If the interactor is a subcomplex.
      // If the interactor is actually part of the complex, the line starts in this interactor
      // Otherwise, the line actually starts on one of the subcomponents of the complex, but not on the interactor itself, as it is
      // not part of the complex.
      if (complex.startInteractorIncludedWhenExpanded) {
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
      if (this.enrichedInteractors()[interactorIndex].isSubComplex && this.enrichedInteractors()[interactorIndex].expanded) {
        if (complex.startSubComponentIndex != null && complex.endSubComponentIndex != null) {
          return false;
        }
      }
      return true;
    }
    return false;
  }
}
