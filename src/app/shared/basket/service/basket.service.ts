import {Injectable} from '@angular/core';
import {BasketItem} from "../model/basketItem";
import {Md5} from 'ts-md5/dist/md5'
import {NotificationService} from "../../notification/service/notification.service";

const COMPLEX_STORE = 'cp_complex_store';

@Injectable()
export class BasketService {
  private _complexBasket: {[name: string]: BasketItem} = {};

  constructor(private notificationService: NotificationService) {
    this.initialiseBasket();
  }

  private initialiseBasket() {
    let complexStore = this.getLocalStorage();
    if (!complexStore) {
      this.saveInLocalStorage();
      this.initialiseBasket();
    } else {
      for (let key in complexStore) {
        let complex = complexStore[key];
        if (complex) {
          this._complexBasket[key] = new BasketItem(complex._name, complex._id, complex._date, complex._organism);
        }
      }
    }
  }

  public saveInBasket(name: string, id: string, organism: string): void {
    let newBasketItem = new BasketItem(name, id, new Date(), organism);
    if (!this.isInBasket(id)) {
      this._complexBasket[this.toMd5(id)] = newBasketItem;
      this.saveInLocalStorage();
      this.notificationService.addSuccessNotification("Stored " + id + " in you basket!");
    }
  }

  public deleteFromBasket(key: string): void {
    const id = this._complexBasket[key].id;
    delete this._complexBasket[key];
    this.saveInLocalStorage();
    this.notificationService.addSuccessNotification("Removed " + id + " in you basket!");
  }

  private saveInLocalStorage(): void {
    localStorage.setItem(COMPLEX_STORE, JSON.stringify(this._complexBasket));
  }

  private getLocalStorage(){
    return JSON.parse(localStorage.getItem(COMPLEX_STORE));
  }

  private isInBasket(id: string): boolean {
    let key: string = this.toMd5(id);
    if (this._complexBasket[key]) {
      this.notificationService.addErrorNotification(id + " is already stored in you basket!");
      return true;
    }
    return false;
  }

  private toMd5(key: string): string {
    return Md5.hashStr(key).toString();
  }

  get complexBasket() {
    return this._complexBasket;
  }
}
