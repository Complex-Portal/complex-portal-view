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
import { GoogleAnalyticsService } from '../../shared/google-analytics/service/google-analytics.service';
var TileMenuComponent = (function () {
    function TileMenuComponent(notificationService, router, googleAnalyticsService) {
        this.notificationService = notificationService;
        this.router = router;
        this.googleAnalyticsService = googleAnalyticsService;
    }
    TileMenuComponent.prototype.ngAfterViewInit = function () {
        // Necessary for layout of tiles (equal size, etc.)
        $('cp-tile-menu').foundation();
    };
    TileMenuComponent.prototype.goToDownload = function () {
        this.googleAnalyticsService.fireClickHomeTileEvent('download');
        this.router.navigate(['download']);
    };
    TileMenuComponent.prototype.goToBasket = function () {
        this.googleAnalyticsService.fireClickHomeTileEvent('basket');
        this.router.navigate(['basket']);
    };
    TileMenuComponent.prototype.goToOrganisms = function () {
        this.googleAnalyticsService.fireClickHomeTileEvent('organisms');
        this.router.navigate(['complex/organisms']);
    };
    TileMenuComponent.prototype.goToOntologies = function () {
        this.googleAnalyticsService.fireClickHomeTileEvent('ontologies');
        this.notificationService.onFeatureNotAvailableYet();
        this.router.navigate(['ontologies']);
    };
    TileMenuComponent.prototype.goToRequestComplex = function () {
        this.googleAnalyticsService.fireClickHomeTileEvent('request complex');
        window.open(environment.intact_support_url, '_blank');
    };
    TileMenuComponent.prototype.goToTraining = function () {
        this.googleAnalyticsService.fireClickHomeTileEvent('training');
        window.open(environment.intact_training_url, '_blank');
    };
    TileMenuComponent.prototype.goToDocumentation = function () {
        this.googleAnalyticsService.fireClickHomeTileEvent('documentation');
        this.router.navigate(['documentation']);
    };
    TileMenuComponent.prototype.goToCitation = function () {
        this.googleAnalyticsService.fireClickHomeTileEvent('citation');
    };
    return TileMenuComponent;
}());
TileMenuComponent = __decorate([
    Component({
        selector: 'cp-tile-menu',
        templateUrl: './tile-menu.component.html',
        styleUrls: ['./tile-menu.component.css']
    }),
    __metadata("design:paramtypes", [NotificationService, Router,
        GoogleAnalyticsService])
], TileMenuComponent);
export { TileMenuComponent };
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/home/tile-menu/tile-menu.component.js.map