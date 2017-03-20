import {Component, OnInit} from '@angular/core';
import {BasketService} from "../shared/service/basket/basket.service";
import {BasketItem} from "../shared/service/basket/model/basketItem";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  private _complexBasket: { [name: string]: BasketItem} = {};
  //
  constructor(private _basketService: BasketService) {

  }
  //
  ngOnInit() {
    this._complexBasket = this._basketService.complexBasket;
  }

  deleteFromBasket(key : string) : void {
    this._basketService.deleteFromBasket(key);
  }

  get basketService(): BasketService {
    return this._basketService;
  }

  set basketService(value: BasketService) {
    this._basketService = value;
  }

  get complexBasket(): {} {
    return this._complexBasket;
  }

  set complexBasket(value: {}) {
    this._complexBasket = value;
  }

  public getKeys(object : any){
    return Object.keys(object);
  }
}
