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
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from '../../local-storage/local-storage.service';
var NotificationService = (function () {
    function NotificationService(toastrService) {
        this.toastrService = toastrService;
    }
    NotificationService.prototype.addSuccessNotification = function (successNotification) {
        this.toastrService.success(successNotification);
    };
    NotificationService.prototype.addErrorNotification = function (errorNotification) {
        this.toastrService.error(errorNotification, 'Something went wrong :(');
    };
    NotificationService.prototype.addAnnouncementNotification = function (announcementNotification, options) {
        this.toastrService.info(announcementNotification, 'Just to let you know!', options);
    };
    NotificationService.prototype.addHintNotification = function (hintNotification) {
        this.toastrService.warning(hintNotification, 'Just to let you know!');
    };
    NotificationService.prototype.addStaticNotification = function (staticNotification) {
        this.toastrService.success('Hello world!', staticNotification);
    };
    NotificationService.prototype.followOnTwitter = function () {
        var CP_TWITTER_REMINDER = 'cp_twitter_reminder';
        if (LocalStorageService.getLocalStorage(CP_TWITTER_REMINDER) == null) {
            var context_1 = this;
            setTimeout(function () {
                context_1.toastrService.info('Stay in touch and follow <b><a href="//twitter.com/complexportal" target="_blank">@complexportal</a></b> on Twitter!', 'Follow us on Twitter!');
                LocalStorageService.saveInLocalStorage(CP_TWITTER_REMINDER, true);
            }, 30000);
        }
    };
    return NotificationService;
}());
NotificationService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [ToastrService])
], NotificationService);
export { NotificationService };
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/shared/notification/service/notification.service.js.map