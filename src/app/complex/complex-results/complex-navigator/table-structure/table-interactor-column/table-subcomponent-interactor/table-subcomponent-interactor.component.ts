import {Component, input, computed} from '@angular/core';
import {ComplexComponent} from '../../../../../shared/model/complex-results/complex-component.model';
import {findInteractorInComplex} from '../complex-navigator-utils';
import {NavigatorComplex} from '../../navigator-complex.model';
import {NavigatorInteractor} from '../../navigator-interactors.model';

@Component({
  selector: 'cp-table-subcomponent-interactor',
  templateUrl: './table-subcomponent-interactor.component.html',
  styleUrls: ['./table-subcomponent-interactor.component.css']
})

export class TableSubcomponentInteractorComponent {
  complex = input<NavigatorComplex>();
  i = input<number>();
  j = input<number>();
  navigatorInteractors = input<NavigatorInteractor[]>();

  interactorComponent = computed(() =>
    findInteractorInComplex(this.complex().complex, this.el.identifier, this.navigatorInteractors()));
  displayTopLineClass = computed(() => this.displayTopLineClassExpanded(this.complex(), this.i(), this.j()));
  displayBottomLineClass = computed(() => this.displayBottomLineClassExpanded(this.complex(), this.i(), this.j()));


  get interactor(): NavigatorInteractor {
    return this.navigatorInteractors()[this.i()];
  }

  get el(): ComplexComponent {
    return this.navigatorInteractors()[this.i()].subComponents[this.j()];
  }

  public displayTopLineClassExpanded(complex: NavigatorComplex, interactorIndex: number, subComponentIndex: number): string {
    if (complex.doesLineCrossSubcomponentCell(interactorIndex, subComponentIndex)) {
      return 'verticalLine';
    }
    if (complex.doesLineEndOnSubcomponentCell(interactorIndex, subComponentIndex) &&
      !complex.doesLineStartOnSubcomponentCell(this.navigatorInteractors(), interactorIndex, subComponentIndex)) {
      return 'verticalLine';
    }

    return 'transparentVerticalLine';
  }

  public displayBottomLineClassExpanded(complex: NavigatorComplex, interactorIndex: number, subComponentIndex: number): string {
    if (complex.doesLineCrossSubcomponentCell(interactorIndex, subComponentIndex)) {
      return 'verticalLine';
    }
    if (complex.doesLineStartOnSubcomponentCell(this.navigatorInteractors(), interactorIndex, subComponentIndex) &&
      !complex.doesLineEndOnSubcomponentCell(interactorIndex, subComponentIndex)) {
      return 'verticalLine';
    }

    return 'transparentVerticalLine';
  }
}
