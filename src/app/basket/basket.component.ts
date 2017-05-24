import {AfterViewInit, Component, OnInit} from '@angular/core';
import {BasketService} from '../shared/basket/service/basket.service';
import {BasketItem} from '../shared/basket/model/basketItem';
import {ProgressBarComponent} from '../shared/loading-indicators/progress-bar/progress-bar.component';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'cp-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit, AfterViewInit {
  private _complexBasket: { [name: string]: BasketItem };

  constructor(private _basketService: BasketService, private titleService: Title) {

  }

  ngOnInit() {
    this.titleService.setTitle('Complex Portal - Basket');
    this._complexBasket = this._basketService.complexBasket;
  }

  ngAfterViewInit(): void {
    ProgressBarComponent.hide();
  }

  deleteFromBasket(key: string): void {
    this._basketService.deleteFromBasket(key);
  }

  get complexBasket(): { [name: string]: BasketItem } {
    return this._complexBasket;
  }

  set complexBasket(value: { [name: string]: BasketItem }) {
    this._complexBasket = value;
  }

  public isComplexBasketEmpty(): boolean {
    return this.getKeys(this._complexBasket).length === 0;

  }

  // Candidate for Util
  public getKeys(object: any) {
    return Object.keys(object);
  }
}
