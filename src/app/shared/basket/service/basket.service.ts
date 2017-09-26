import {EventEmitter, Injectable} from '@angular/core';
import {BasketItem} from '../model/basketItem';
import {Md5} from 'ts-md5/dist/md5';
import {NotificationService} from '../../notification/service/notification.service';
import {GoogleAnalyticsService} from '../../google-analytics/service/google-analytics.service';
import {Category} from '../../google-analytics/category.enum';
import {Action} from '../../google-analytics/action.enum';
import {LocalStorageService} from '../../local-storage/local-storage.service';

const COMPLEX_STORE = 'cp_complex_store';

@Injectable()
export class BasketService {
  private _complexBasket: { [name: string]: BasketItem } = {};
  public onBasketCountChanged$: EventEmitter<number>;

  constructor(private notificationService: NotificationService, private googleAnalyticsService: GoogleAnalyticsService) {
    this.onBasketCountChanged$ = new EventEmitter<number>();
    this.initialiseBasket();
  }

  private initialiseBasket() {
    const complexStore = LocalStorageService.getLocalStorage(COMPLEX_STORE);
    if (!complexStore) {
      LocalStorageService.saveInLocalStorage(COMPLEX_STORE, this._complexBasket);
      this.initialiseBasket();
    } else {
      const keys = this.getKeys(complexStore);
      for (let i = 0; i < keys.length; i++) {
        const complex = complexStore[keys[i]];
        if (complex) {
          this._complexBasket[keys[i]] = new BasketItem(complex._name, complex._id, complex._date, complex._organism);
        }
      }
    }
  }

  public getKeys(object: Object): string[] {
    return Object.keys(object);
  }

  public saveInBasket(name: string, id: string, organism: string): void {
    const newBasketItem = new BasketItem(name, id, new Date(), organism);
    if (!this.isInBasket(id)) {
      this._complexBasket[this.toMd5(id)] = newBasketItem;
      LocalStorageService.saveInLocalStorage(COMPLEX_STORE, this._complexBasket);
      this.googleAnalyticsService.fireAddToBasketEvent(id);
      this.notificationService.addSuccessNotification('Stored ' + id + ' in your basket!');
    }
    this.onBasketCountChanged$.emit(this.getBasketCount());
  }

  public deleteFromBasket(key: string): void {
    const id = this._complexBasket[key].id;
    delete this._complexBasket[key];
    LocalStorageService.saveInLocalStorage(COMPLEX_STORE, this._complexBasket);
    this.googleAnalyticsService.fireRemoveFromBasketEvent(id);
    this.notificationService.addSuccessNotification('Removed ' + id + ' in your basket!');
    this.onBasketCountChanged$.emit(this.getBasketCount());
  }

  public isInBasket(id: string): boolean {
    const key: string = this.toMd5(id);
    return !!this._complexBasket[key];
  }

  private toMd5(key: string): string {
    return Md5.hashStr(key).toString();
  }

  get complexBasket() {
    return this._complexBasket;
  }

  public getBasketCount(): number {
    return this.getKeys(this._complexBasket).length;
  }
}
