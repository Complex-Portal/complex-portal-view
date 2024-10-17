import {Component, computed, input, output} from '@angular/core';
import {Complex} from '../../../../shared/model/complex-results/complex.model';
import {organismIcon} from '../../../../complex-portal-utils';
import {BasketService} from '../../../../../shared/basket/service/basket.service';
import {NavigatorComponentSorting, NavigatorStateService} from '../../service/state/complex-navigator-display.service';

@Component({
  selector: 'cp-table-header',
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.scss'],
})

export class TableHeaderComponent {
  complexes = input.required<Complex[]>();
  onComplexRemovedFromBasket = output<string>();

  shadowLeftVisible = input<boolean>(false);

  constructor(private basketService: BasketService, public state: NavigatorStateService) {
  }

  anyPredictedComplex(): boolean {
    return this.complexes().some(c => c.predictedComplex);
  }

  iconOrganism(organismName: string) {
    return organismIcon(organismName);
  }

  toggleBasket(complex: Complex) {
    if (this.isInBasket(complex.complexAC)) {
      this.removeComplex(complex.complexAC);
    } else {
      this.saveComplex(complex);
    }
  }

  saveComplex(complex: Complex) {
    this.basketService.saveInBasket(complex);
  }

  removeComplex(complexAC: string): void {
    this.basketService.deleteFromBasket(complexAC);
    this.onComplexRemovedFromBasket.emit(complexAC);
  }

  isInBasket(complexAC: string): boolean {
    return this.basketService.isInBasket(complexAC);
  }
}
