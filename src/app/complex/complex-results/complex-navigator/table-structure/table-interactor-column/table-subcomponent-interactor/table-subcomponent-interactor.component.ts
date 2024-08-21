import {Component, input, computed} from '@angular/core';
import {ComplexComponent} from '../../../../../shared/model/complex-results/complex-component.model';
import {findInteractorInComplex} from '../complex-navigator-utils';
import {EnrichedComplex} from '../../enriched-complex.model';
import {EnrichedInteractor} from '../../enriched-interactors.model';

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

  interactorComponent = computed(() =>
    findInteractorInComplex(this.complex().complex, this.el.identifier, this.enrichedInteractors()));
  displayTopLineClass = computed(() => this.displayTopLineClassExpanded(this.complex(), this.i(), this.j()));
  displayBottomLineClass = computed(() => this.displayBottomLineClassExpanded(this.complex(), this.i(), this.j()));


  get interactor(): EnrichedInteractor {
    return this.enrichedInteractors()[this.i()];
  }

  get el(): ComplexComponent {
    return this.enrichedInteractors()[this.i()].subComponents[this.j()];
  }

  public displayTopLineClassExpanded(complex: EnrichedComplex, interactorIndex: number, subComponentIndex: number): string {
    if (complex.doesLineCrossSubcomponentCell(interactorIndex, subComponentIndex)) {
      return 'verticalLine';
    }
    if (complex.doesLineEndOnSubcomponentCell(interactorIndex, subComponentIndex) &&
      !complex.doesLineStartOnSubcomponentCell(this.enrichedInteractors(), interactorIndex, subComponentIndex)) {
      return 'verticalLine';
    }

    return 'transparentVerticalLine';
  }

  public displayBottomLineClassExpanded(complex: EnrichedComplex, interactorIndex: number, subComponentIndex: number): string {
    if (complex.doesLineCrossSubcomponentCell(interactorIndex, subComponentIndex)) {
      return 'verticalLine';
    }
    if (complex.doesLineStartOnSubcomponentCell(this.enrichedInteractors(), interactorIndex, subComponentIndex) &&
      !complex.doesLineEndOnSubcomponentCell(interactorIndex, subComponentIndex)) {
      return 'verticalLine';
    }

    return 'transparentVerticalLine';
  }
}
