var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Angulartics2 } from "angulartics2";
import { Category } from "./category.enum";
import { Action } from "./action.enum";
var GoogleAnalyticsService = (function () {
    function GoogleAnalyticsService(angulartics2) {
        this.angulartics2 = angulartics2;
    }
    GoogleAnalyticsService.prototype.invokeCustomEvent = function (value, category, label) {
        this.angulartics2.eventTrack.next({ action: Action[value], properties: { category: Category[category], label: label } });
    };
    return GoogleAnalyticsService;
}());
GoogleAnalyticsService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Angulartics2])
], GoogleAnalyticsService);
export { GoogleAnalyticsService };
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/shared/google-analytics/google-analytics.service.js.map