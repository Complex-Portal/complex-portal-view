import {Component, OnInit} from '@angular/core';
import {BasketService} from "../shared/service/basket/basket.service";
import {BasketItem} from "../shared/service/basket/model/basketItem";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  private _complexBasket: {[name: string]: BasketItem};

  constructor(private _basketService: BasketService) {

  }

  ngOnInit() {
    this._complexBasket = this._basketService.complexBasket;
    console.log(this._complexBasket);
  }

  deleteFromBasket(key: string): void {
    this._basketService.deleteFromBasket(key);
  }

  get basketService(): BasketService {
    return this._basketService;
  }

  get complexBasket(): {[name: string]: BasketItem} {
    return this._complexBasket;
  }

  set complexBasket(value: {[name: string]: BasketItem}) {
    this._complexBasket = value;
  }

  public isComplexBasketEmpty(): boolean {
    return this.getKeys(this._complexBasket).length === 0;

  }

  public getKeys(object: any) {
    return Object.keys(object);
  }
}
