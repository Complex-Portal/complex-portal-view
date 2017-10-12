import {EventEmitter, Injectable} from '@angular/core';
import {BasketItem} from '../model/basketItem';
import {Md5} from 'ts-md5/dist/md5';
import {NotificationService} from '../../notification/service/notification.service';
import {GoogleAnalyticsService} from '../../google-analytics/service/google-analytics.service';
import {LocalStorageService} from '../../local-storage/service/local-storage.service';

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
      const keys = Object.keys(complexStore);
      for (let i = 0; i < keys.length; i++) {
        const complex = complexStore[keys[i]];
        if (complex) {
          this._complexBasket[keys[i]] = new BasketItem(complex._name, complex._id, complex._date, complex._organism);
        }
      }
    }
  }

  public saveInBasket(name: string, id: string, organism: string): void {
    const newBasketItem = new BasketItem(name, id, new Date(), organism);

    if (!this.isInBasket(id)) {
      this._complexBasket[Md5.hashStr(id).toString()] = newBasketItem;
      LocalStorageService.saveInLocalStorage(COMPLEX_STORE, this._complexBasket);
      this.onBasketCountChanged$.emit(this.getBasketCount());

      this.googleAnalyticsService.fireAddToBasketEvent(id);
      this.notificationService.onAddedComplexToBasket(id);
    }
  }

  public deleteFromBasket(key: string): void {
    const id = this._complexBasket[key].id;

    delete this._complexBasket[key];
    LocalStorageService.saveInLocalStorage(COMPLEX_STORE, this._complexBasket);
    this.onBasketCountChanged$.emit(this.getBasketCount());

    this.googleAnalyticsService.fireRemoveFromBasketEvent(id);
    this.notificationService.onRemovedComplexFromBasket(id);
  }

  public isInBasket(id: string): boolean {
    const key: string = Md5.hashStr(id).toString();
    return !!this._complexBasket[key];
  }

  get complexBasket() {
    return this._complexBasket;
  }

  public getBasketCount(): number {
    return Object.keys(this._complexBasket).length;
  }
}
