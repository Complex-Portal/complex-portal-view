import {Component, output, input } from '@angular/core';
import {Complex} from '../../../../shared/model/complex-results/complex.model';
import {organismIcon} from '../../../../complex-portal-utils';
import {BasketService} from '../../../../../shared/basket/service/basket.service';
import {NavigatorComponentSorting} from '../../complex-navigator-utils';

@Component({
  selector: 'cp-table-header',
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.css'],
})

export class TableHeaderComponent {
  complexes = input<Complex[]>();
  componentsSorting = input<NavigatorComponentSorting>();
  onComplexRemovedFromBasket = output<string>();

  constructor(private basketService: BasketService) {
  }

  anyPredictedComplex(): boolean {
    return this.complexes().some(c => c.predictedComplex);
  }

  isComponentsSortingSet() {
    return this.componentsSorting() === NavigatorComponentSorting.TYPE || this.componentsSorting() === NavigatorComponentSorting.ORGANISM;
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
