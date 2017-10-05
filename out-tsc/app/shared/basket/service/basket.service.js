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
import { GoogleAnalyticsService } from '../../google-analytics/service/google-analytics.service';
import { LocalStorageService } from '../../local-storage/service/local-storage.service';
var COMPLEX_STORE = 'cp_complex_store';
var BasketService = (function () {
    function BasketService(notificationService, googleAnalyticsService) {
        this.notificationService = notificationService;
        this.googleAnalyticsService = googleAnalyticsService;
        this._complexBasket = {};
        this.onBasketCountChanged$ = new EventEmitter();
        this.initialiseBasket();
    }
    BasketService.prototype.initialiseBasket = function () {
        var complexStore = LocalStorageService.getLocalStorage(COMPLEX_STORE);
        if (!complexStore) {
            LocalStorageService.saveInLocalStorage(COMPLEX_STORE, this._complexBasket);
            this.initialiseBasket();
        }
        else {
            var keys = Object.keys(complexStore);
            for (var i = 0; i < keys.length; i++) {
                var complex = complexStore[keys[i]];
                if (complex) {
                    this._complexBasket[keys[i]] = new BasketItem(complex._name, complex._id, complex._date, complex._organism);
                }
            }
        }
    };
    BasketService.prototype.saveInBasket = function (name, id, organism) {
        var newBasketItem = new BasketItem(name, id, new Date(), organism);
        if (!this.isInBasket(id)) {
            this._complexBasket[Md5.hashStr(id).toString()] = newBasketItem;
            LocalStorageService.saveInLocalStorage(COMPLEX_STORE, this._complexBasket);
            this.onBasketCountChanged$.emit(this.getBasketCount());
            this.googleAnalyticsService.fireAddToBasketEvent(id);
            this.notificationService.onAddedComplexToBasket(id);
        }
    };
    BasketService.prototype.deleteFromBasket = function (key) {
        var id = this._complexBasket[key].id;
        delete this._complexBasket[key];
        LocalStorageService.saveInLocalStorage(COMPLEX_STORE, this._complexBasket);
        this.onBasketCountChanged$.emit(this.getBasketCount());
        this.googleAnalyticsService.fireRemoveFromBasketEvent(id);
        this.notificationService.onRemovedComplexFromBasket(id);
    };
    BasketService.prototype.isInBasket = function (id) {
        var key = Md5.hashStr(id).toString();
        return !!this._complexBasket[key];
    };
    Object.defineProperty(BasketService.prototype, "complexBasket", {
        get: function () {
            return this._complexBasket;
        },
        enumerable: true,
        configurable: true
    });
    BasketService.prototype.getBasketCount = function () {
        return Object.keys(this._complexBasket).length;
    };
    return BasketService;
}());
BasketService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [NotificationService, GoogleAnalyticsService])
], BasketService);
export { BasketService };
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/shared/basket/service/basket.service.js.map