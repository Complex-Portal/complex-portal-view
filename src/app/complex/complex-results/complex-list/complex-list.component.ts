import {Component, Input, OnInit} from '@angular/core';
import {ComplexSearchResult} from '../../shared/model/complex-results/complex-search.model';
import {BasketService} from '../../../shared/basket/service/basket.service';

@Component({
  selector: 'cp-complex-list',
  templateUrl: './complex-list.component.html',
  styleUrls: ['./complex-list.component.css']
})
export class ComplexListComponent implements OnInit {
  @Input() complexSearch: ComplexSearchResult;

  constructor(private basketService: BasketService) {
  }

  ngOnInit() {
  }

  saveComplex(complexName: string, complexAC: string, complexOrganism: string) {
    this.basketService.saveInBasket(complexName, complexAC, complexOrganism);
  }

  removeComplexFromBasket(complexAC: string) {
    const key = this.basketService.getKey(complexAC);
    this.basketService.deleteFromBasket(key);
  }

  isInBasket(complexAC: string): boolean {
    return this.basketService.isInBasket(complexAC);
  }
}
