var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { BasketService } from '../../../shared/basket/service/basket.service';
import { NotificationService } from '../../../shared/notification/service/notification.service';
var ComplexHeaderComponent = (function () {
    function ComplexHeaderComponent(basketService, notificationService) {
        this.basketService = basketService;
        this.notificationService = notificationService;
    }
    ComplexHeaderComponent.prototype.ngOnInit = function () {
        this._jsonURL = environment.complex_ws_base_url + '/details/' + this._complexAC;
    };
    ComplexHeaderComponent.prototype.saveComplex = function () {
        this.basketService.saveInBasket(this._complexName, this._complexAC, this._complexSpecies);
    };
    Object.defineProperty(ComplexHeaderComponent.prototype, "complexAC", {
        get: function () {
            return this._complexAC;
        },
        set: function (value) {
            this._complexAC = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexHeaderComponent.prototype, "complexName", {
        get: function () {
            return this._complexName;
        },
        set: function (value) {
            this._complexName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexHeaderComponent.prototype, "complexSpecies", {
        get: function () {
            return this._complexSpecies;
        },
        set: function (value) {
            this._complexSpecies = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexHeaderComponent.prototype, "jsonURL", {
        get: function () {
            return this._jsonURL;
        },
        set: function (value) {
            this._jsonURL = value;
        },
        enumerable: true,
        configurable: true
    });
    return ComplexHeaderComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], ComplexHeaderComponent.prototype, "complexAC", null);
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], ComplexHeaderComponent.prototype, "complexName", null);
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], ComplexHeaderComponent.prototype, "complexSpecies", null);
ComplexHeaderComponent = __decorate([
    Component({
        selector: 'app-complex-header',
        templateUrl: './complex-header.component.html',
        styleUrls: ['./complex-header.component.css']
    }),
    __metadata("design:paramtypes", [BasketService, NotificationService])
], ComplexHeaderComponent);
export { ComplexHeaderComponent };
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/complex/complex-details/complex-header/complex-header.component.js.map