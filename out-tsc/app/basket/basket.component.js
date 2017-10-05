var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { BasketService } from '../shared/basket/service/basket.service';
import { ProgressBarComponent } from '../shared/loading-indicators/progress-bar/progress-bar.component';
import { Title } from '@angular/platform-browser';
var BasketComponent = (function () {
    function BasketComponent(_basketService, titleService) {
        this._basketService = _basketService;
        this.titleService = titleService;
        this._complexBasket = this._basketService.complexBasket;
    }
    BasketComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('Complex Portal - Basket');
    };
    BasketComponent.prototype.ngAfterViewInit = function () {
        ProgressBarComponent.hide();
    };
    BasketComponent.prototype.deleteFromBasket = function (key) {
        this._basketService.deleteFromBasket(key);
    };
    Object.defineProperty(BasketComponent.prototype, "complexBasket", {
        get: function () {
            return this._complexBasket;
        },
        set: function (value) {
            this._complexBasket = value;
        },
        enumerable: true,
        configurable: true
    });
    BasketComponent.prototype.isComplexBasketEmpty = function () {
        return this.getKeys(this._complexBasket).length === 0;
    };
    // Candidate for Util
    BasketComponent.prototype.getKeys = function (object) {
        return Object.keys(object);
    };
    return BasketComponent;
}());
BasketComponent = __decorate([
    Component({
        selector: 'cp-basket',
        templateUrl: './basket.component.html',
        styleUrls: ['./basket.component.css']
    }),
    __metadata("design:paramtypes", [BasketService, Title])
], BasketComponent);
export { BasketComponent };
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/basket/basket.component.js.map