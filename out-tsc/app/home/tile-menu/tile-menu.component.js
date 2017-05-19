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
var TileMenuComponent = (function () {
    function TileMenuComponent(notificationService) {
        this.notificationService = notificationService;
    }
    TileMenuComponent.prototype.ngAfterViewInit = function () {
        $('cp-tile-menu').foundation();
    };
    TileMenuComponent.prototype.featureNotAvailableYet = function () {
        this.notificationService.addHintNotification('This feature is not available yet. But it is coming soon! :-)');
    };
    return TileMenuComponent;
}());
TileMenuComponent = __decorate([
    Component({
        selector: 'cp-tile-menu',
        templateUrl: './tile-menu.component.html',
        styleUrls: ['./tile-menu.component.css']
    }),
    __metadata("design:paramtypes", [NotificationService])
], TileMenuComponent);
export { TileMenuComponent };
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/home/tile-menu/tile-menu.component.js.map