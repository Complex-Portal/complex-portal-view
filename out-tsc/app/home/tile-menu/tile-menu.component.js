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
import { NotificationService } from '../../shared/notification/service/notification.service';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { Action } from '../../shared/google-analytics/action.enum';
import { Category } from '../../shared/google-analytics/category.enum';
import { GoogleAnalyticsService } from '../../shared/google-analytics/google-analytics.service';
var TileMenuComponent = (function () {
    function TileMenuComponent(notificationService, router, ga) {
        this.notificationService = notificationService;
        this.router = router;
        this.ga = ga;
    }
    TileMenuComponent.prototype.ngAfterViewInit = function () {
        $('cp-tile-menu').foundation();
    };
    TileMenuComponent.prototype.featureNotAvailableYet = function () {
        this.notificationService.addHintNotification('This feature is not available yet. But it is coming soon! :-)');
    };
    TileMenuComponent.prototype.goToDownload = function () {
        this.ga.invokeCustomEvent(Action.Tile, Category.home, 'download');
        this.router.navigate(['download']);
    };
    TileMenuComponent.prototype.goToBasket = function () {
        this.ga.invokeCustomEvent(Action.Tile, Category.home, 'basket');
        this.router.navigate(['basket']);
    };
    TileMenuComponent.prototype.goToOrganisms = function () {
        this.ga.invokeCustomEvent(Action.Tile, Category.home, 'organisms');
        this.router.navigate(['complex/organisms']);
    };
    TileMenuComponent.prototype.goToOntologies = function () {
        this.ga.invokeCustomEvent(Action.Tile, Category.home, 'ontologies');
        this.featureNotAvailableYet();
        this.router.navigate(['ontologies']);
    };
    TileMenuComponent.prototype.goToRequestComplex = function () {
        this.ga.invokeCustomEvent(Action.Tile, Category.home, 'request complex');
        window.open(environment.intact_support_url, '_blank');
    };
    TileMenuComponent.prototype.goToTraining = function () {
        this.ga.invokeCustomEvent(Action.Tile, Category.home, 'training');
        window.open(environment.intact_training_url, '_blank');
    };
    TileMenuComponent.prototype.goToDocumentation = function () {
        this.ga.invokeCustomEvent(Action.Tile, Category.home, 'documentation');
        this.router.navigate(['documentation']);
    };
    TileMenuComponent.prototype.goToCitation = function () {
        this.ga.invokeCustomEvent(Action.Tile, Category.home, 'citation');
        this.featureNotAvailableYet();
        this.router.navigate(['home']);
    };
    return TileMenuComponent;
}());
TileMenuComponent = __decorate([
    Component({
        selector: 'cp-tile-menu',
        templateUrl: './tile-menu.component.html',
        styleUrls: ['./tile-menu.component.css']
    }),
    __metadata("design:paramtypes", [NotificationService, Router, GoogleAnalyticsService])
], TileMenuComponent);
export { TileMenuComponent };
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/home/tile-menu/tile-menu.component.js.map