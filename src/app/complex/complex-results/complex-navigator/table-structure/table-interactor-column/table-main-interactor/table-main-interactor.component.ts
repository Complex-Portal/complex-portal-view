import {Component, computed, input} from '@angular/core';
import {findInteractorInComplex} from '../complex-navigator-utils';
import {EnrichedComplex} from '../../enriched-complex.model';
import {EnrichedInteractor} from '../../enriched-interactors.model';

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
    if (complex.doesLineCrossInteractorCell(this.enrichedInteractors(), interactorIndex)) {
      return 'verticalLine';
    }
    if (complex.doesLineEndOnInteractorCell(this.enrichedInteractors(), interactorIndex) &&
      !complex.doesLineStartOnInteractorCell(this.enrichedInteractors(), interactorIndex)) {
      return 'verticalLine';
    }

    return 'transparentVerticalLine';
  }

  public displayBottomLineClass(complex: EnrichedComplex, interactorIndex: number): string {
    if (complex.doesLineCrossInteractorCell(this.enrichedInteractors(), interactorIndex)) {
      return 'verticalLine';
    }
    if (complex.doesLineStartOnInteractorCell(this.enrichedInteractors(), interactorIndex) &&
      !complex.doesLineEndOnInteractorCell(this.enrichedInteractors(), interactorIndex)) {
      return 'verticalLine';
    }

    return 'transparentVerticalLine';
  }
}
