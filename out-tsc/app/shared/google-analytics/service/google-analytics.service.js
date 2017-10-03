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
import { Angulartics2 } from 'angulartics2';
import { Category } from '../category.enum';
import { Action } from '../action.enum';
var GoogleAnalyticsService = (function () {
    function GoogleAnalyticsService(angulartics2) {
        this.angulartics2 = angulartics2;
    }
    GoogleAnalyticsService.prototype.invokeCustomEvent = function (value, category, label) {
        this.angulartics2.eventTrack.next({
            action: Action[value],
            properties: { category: Category[category], label: label }
        });
    };
    GoogleAnalyticsService.prototype.fireDownloadResourceEvent = function (site, type) {
        this.invokeCustomEvent(Action.download, site, type);
    };
    GoogleAnalyticsService.prototype.fireOpenExternalLinkEvent = function (site, type) {
        this.invokeCustomEvent(Action.externalLink, site, type);
    };
    GoogleAnalyticsService.prototype.fireClickHomeTileEvent = function (type) {
        this.invokeCustomEvent(Action.Tile, Category.home, type);
    };
    GoogleAnalyticsService.prototype.fireGoToDetailsSectionEvent = function (type) {
        this.invokeCustomEvent(Action.GoToMenu, Category.details, type);
    };
    GoogleAnalyticsService.prototype.fireSearchTermEvent = function (site, type) {
        this.invokeCustomEvent(Action.search, site, type);
    };
    // To identify if user use 'enter' or if they click with the mouse on the magnifier.
    // 'site' is not the actual site, but if it is the homepage or the header search box
    GoogleAnalyticsService.prototype.fireSearchInvokerEvent = function (site, type) {
        this.invokeCustomEvent(Action.searchInvoker, site, type);
    };
    GoogleAnalyticsService.prototype.fireAddToBasketEvent = function (type) {
        this.invokeCustomEvent(Action.AddToBasket, Category.basket, type);
    };
    GoogleAnalyticsService.prototype.fireRemoveFromBasketEvent = function (type) {
        this.invokeCustomEvent(Action.RemoveFromBasket, Category.basket, type);
    };
    GoogleAnalyticsService.prototype.fireInteractionWithViewerEvent = function (viewer, type) {
        // this.invokeCustomEvent(Action.VisualisationInteraction, viewer, type);
    };
    GoogleAnalyticsService.prototype.fireAddedFilterEvent = function (type) {
        // this.invokeCustomEvent(Action.AddResultFilter, Category.ResultFilter, type);
    };
    GoogleAnalyticsService.prototype.fireRemovedFilterEvent = function (type) {
        // this.invokeCustomEvent(Action.RemoveResultFilter, Category.ResultFilter, type);
    };
    GoogleAnalyticsService.prototype.fireMultiFilterEvent = function (type) {
        // this.invokeCustomEvent(Action.IsAMultiFilterResult, Category.ResultFilter, type);
    };
    GoogleAnalyticsService.prototype.fireUsePaginatorEvent = function (type) {
        // this.invokeCustomEvent(Action.ChangeResultPage, Category.Paginator, type);
    };
    GoogleAnalyticsService.prototype.fireAPIRequestErrorEvent = function (api, type) {
        // this.invokeCustomEvent(Action.APIResquestError, api, type);
    };
    return GoogleAnalyticsService;
}());
GoogleAnalyticsService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Angulartics2])
], GoogleAnalyticsService);
export { GoogleAnalyticsService };
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/shared/google-analytics/service/google-analytics.service.js.map