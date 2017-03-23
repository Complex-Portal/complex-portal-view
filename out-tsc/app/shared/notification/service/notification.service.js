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
import { ToastrService } from "ngx-toastr";
var NotificationService = (function () {
    function NotificationService(toastrService) {
        this.toastrService = toastrService;
    }
    NotificationService.prototype.addSuccessNotification = function (successNotification) {
        this.toastrService.success(successNotification);
    };
    NotificationService.prototype.addErrorNotification = function (errorNotification) {
        this.toastrService.error('Something went wrong :(', errorNotification);
    };
    NotificationService.prototype.addAnnouncementNotification = function (announcementNotification, options) {
        this.toastrService.info('Just to let you know!', announcementNotification, options);
    };
    NotificationService.prototype.addHintNotification = function (hintNotification) {
        this.toastrService.warning('Just to let you know!', hintNotification);
    };
    NotificationService.prototype.addStaticNotification = function (staticNotification) {
        this.toastrService.success('Hello world!', staticNotification);
    };
    return NotificationService;
}());
NotificationService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [ToastrService])
], NotificationService);
export { NotificationService };
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/shared/notification/service/notification.service.js.map