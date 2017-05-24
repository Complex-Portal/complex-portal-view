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
import { GoogleAnalyticsService } from "../../../shared/google-analytics/google-analytics.service";
import { Router } from "@angular/router";
import { Action } from "../../../shared/google-analytics/action.enum";
import { Category } from "../../../shared/google-analytics/category.enum";
var ComplexOrganismComponent = (function () {
    function ComplexOrganismComponent(router, ga) {
        this.router = router;
        this.ga = ga;
    }
    ComplexOrganismComponent.prototype.ngOnInit = function () {
    };
    ComplexOrganismComponent.prototype.search = function (specieName) {
        this.ga.invokeCustomEvent(Action.search, Category.organisms, specieName);
        this.router.navigate(['complex/search'], { queryParams: { query: '*', species: [specieName], page: 1 } });
    };
    Object.defineProperty(ComplexOrganismComponent.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexOrganismComponent.prototype, "symbol", {
        get: function () {
            return this._symbol;
        },
        set: function (value) {
            this._symbol = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexOrganismComponent.prototype, "count", {
        get: function () {
            return this._count;
        },
        set: function (value) {
            this._count = value;
        },
        enumerable: true,
        configurable: true
    });
    return ComplexOrganismComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], ComplexOrganismComponent.prototype, "name", null);
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], ComplexOrganismComponent.prototype, "symbol", null);
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], ComplexOrganismComponent.prototype, "count", null);
ComplexOrganismComponent = __decorate([
    Component({
        selector: 'cp-complex-organism',
        templateUrl: './complex-organism.component.html',
        styleUrls: ['./complex-organism.component.css']
    }),
    __metadata("design:paramtypes", [Router, GoogleAnalyticsService])
], ComplexOrganismComponent);
export { ComplexOrganismComponent };
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/complex/complex-organisms/complex-organism/complex-organism.component.js.map