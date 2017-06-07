var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { EventEmitter, Injectable } from '@angular/core';
import { BasketItem } from '../model/basketItem';
import { Md5 } from 'ts-md5/dist/md5';
import { NotificationService } from '../../notification/service/notification.service';
import { GoogleAnalyticsService } from '../../google-analytics/google-analytics.service';
import { Category } from '../../google-analytics/category.enum';
import { Action } from '../../google-analytics/action.enum';
var COMPLEX_STORE = 'cp_complex_store';
var BasketService = (function () {
    function BasketService(notificationService, ga) {
        this.notificationService = notificationService;
        this.ga = ga;
        this._complexBasket = {};
        this.onBasketCountChanged$ = new EventEmitter();
        this.initialiseBasket();
    }
    BasketService.prototype.initialiseBasket = function () {
        var complexStore = this.getLocalStorage();
        if (!complexStore) {
            this.saveInLocalStorage();
            this.initialiseBasket();
        }
        else {
            var keys = this.getKeys(complexStore);
            for (var i = 0; i < keys.length; i++) {
                var complex = complexStore[keys[i]];
                if (complex) {
                    this._complexBasket[keys[i]] = new BasketItem(complex._name, complex._id, complex._date, complex._organism);
                }
            }
        }
    };
    BasketService.prototype.getKeys = function (object) {
        return Object.keys(object);
    };
    BasketService.prototype.saveInBasket = function (name, id, organism) {
        var newBasketItem = new BasketItem(name, id, new Date(), organism);
        if (!this.isInBasket(id)) {
            this._complexBasket[this.toMd5(id)] = newBasketItem;
            this.saveInLocalStorage();
            this.ga.invokeCustomEvent(Action.AddToBasket, Category.basket, id);
            this.notificationService.addSuccessNotification('Stored ' + id + ' in your basket!');
        }
        this.onBasketCountChanged$.emit(this.getBasketCount());
    };
    BasketService.prototype.deleteFromBasket = function (key) {
        var id = this._complexBasket[key].id;
        delete this._complexBasket[key];
        this.saveInLocalStorage();
        this.ga.invokeCustomEvent(Action.RemoveFromBasket, Category.basket, id);
        this.notificationService.addSuccessNotification('Removed ' + id + ' in your basket!');
        this.onBasketCountChanged$.emit(this.getBasketCount());
    };
    BasketService.prototype.saveInLocalStorage = function () {
        localStorage.setItem(COMPLEX_STORE, JSON.stringify(this._complexBasket));
    };
    BasketService.prototype.getLocalStorage = function () {
        return JSON.parse(localStorage.getItem(COMPLEX_STORE));
    };
    BasketService.prototype.isInBasket = function (id) {
        var key = this.toMd5(id);
        if (this._complexBasket[key]) {
            this.notificationService.addErrorNotification(id + ' is already stored in your basket!');
            return true;
        }
        return false;
    };
    BasketService.prototype.toMd5 = function (key) {
        return Md5.hashStr(key).toString();
    };
    Object.defineProperty(BasketService.prototype, "complexBasket", {
        get: function () {
            return this._complexBasket;
        },
        enumerable: true,
        configurable: true
    });
    BasketService.prototype.getBasketCount = function () {
        return this.getKeys(this._complexBasket).length;
    };
    return BasketService;
}());
BasketService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [NotificationService, GoogleAnalyticsService])
], BasketService);
export { BasketService };
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/shared/basket/service/basket.service.js.map