import {Component, computed, input} from '@angular/core';
import {findInteractorInComplex} from '../complex-navigator-utils';
import {NavigatorComplex} from '../../navigator-complex.model';
import {NavigatorInteractor} from '../../navigator-interactors.model';

@Component({
  selector: 'cp-table-main-interactor',
  templateUrl: './table-main-interactor.component.html',
  styleUrls: ['./table-main-interactor.component.css']
})
export class TableMainInteractorComponent {
  complex = input<NavigatorComplex>();
  i = input<number>();
  navigatorInteractors = input<NavigatorInteractor[]>();

  interactorComponent = computed(() =>
    findInteractorInComplex(this.complex().complex, this.interactor.interactor.identifier, this.navigatorInteractors()));
  topLineClass = computed(() => this.displayTopLineClass(this.complex(), this.i()));
  bottomLineClass = computed(() => this.displayBottomLineClass(this.complex(), this.i()));

  get interactor(): NavigatorInteractor {
    return this.navigatorInteractors()[this.i()];
  }

  public displayTopLineClass(complex: NavigatorComplex, interactorIndex: number): string {
    if (complex.doesLineCrossInteractorCell(this.navigatorInteractors(), interactorIndex)) {
      return 'verticalLine';
    }
    if (complex.doesLineEndOnInteractorCell(this.navigatorInteractors(), interactorIndex) &&
      !complex.doesLineStartOnInteractorCell(this.navigatorInteractors(), interactorIndex)) {
      return 'verticalLine';
    }

    return 'transparentVerticalLine';
  }

  public displayBottomLineClass(complex: NavigatorComplex, interactorIndex: number): string {
    if (complex.doesLineCrossInteractorCell(this.navigatorInteractors(), interactorIndex)) {
      return 'verticalLine';
    }
    if (complex.doesLineStartOnInteractorCell(this.navigatorInteractors(), interactorIndex) &&
      !complex.doesLineEndOnInteractorCell(this.navigatorInteractors(), interactorIndex)) {
      return 'verticalLine';
    }

    return 'transparentVerticalLine';
  }
}
