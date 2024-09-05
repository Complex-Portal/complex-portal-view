import {Component, OnInit, input } from '@angular/core';
import {ComplexSearchResult} from '../../shared/model/complex-results/complex-search.model';
import {BasketService} from '../../../shared/basket/service/basket.service';
import {Element} from '../../shared/model/complex-results/element.model';

@Component({
  selector: 'cp-complex-list',
  templateUrl: './complex-list.component.html',
  styleUrls: ['./complex-list.component.css']
})
export class ComplexListComponent implements OnInit {
  complexSearch = input<ComplexSearchResult>();

  constructor(private basketService: BasketService) {
  }

  ngOnInit() {
  }


  saveComplex(complex: Element) {
    this.basketService.saveInBasket(complex);
  }

  removeComplexFromBasket(complex: Element) {
    this.basketService.deleteFromBasket(complex.complexAC);
  }

  isInBasket(complex: Element): boolean {
    return this.basketService.isInBasket(complex.complexAC);
  }

  toggleBasket(complex: Element) {
    if (this.isInBasket(complex)) {
      this.removeComplexFromBasket(complex);
    } else {
      this.saveComplex(complex);
    }
  }
}
