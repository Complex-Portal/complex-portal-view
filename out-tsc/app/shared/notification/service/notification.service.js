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
import { ToastrConfig, ToastrService } from 'ngx-toastr';
var NotificationService = (function () {
    function NotificationService(toastrService, toastrConfig) {
        this.toastrService = toastrService;
        this.toastrConfig = toastrConfig;
        toastrConfig.closeButton = true; // displayedElements close button
        toastrConfig.timeOut = 5000; // time to live
        toastrConfig.preventDuplicates = true;
        toastrConfig.progressBar = true;
        toastrConfig.tapToDismiss = false;
        toastrConfig.enableHtml = true;
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
    NotificationService.prototype.onAPIRequestError = function (resource) {
        this.addErrorNotification('We couldn\'t reach the ' + resource + ' webservice. ' +
            'Please try again later or contact us if issue persists!');
    };
    NotificationService.prototype.onAddedComplexToBasket = function (id) {
        this.addSuccessNotification('Stored ' + id + ' in your basket!');
    };
    NotificationService.prototype.onRemovedComplexFromBasket = function (id) {
        this.addSuccessNotification('Removed ' + id + ' in your basket!');
    };
    NotificationService.prototype.onFeatureNotAvailableYet = function () {
        this.addHintNotification('This feature is not available yet. But it is coming soon! :-)');
    };
    return NotificationService;
}());
NotificationService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [ToastrService, ToastrConfig])
], NotificationService);
export { NotificationService };
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/shared/notification/service/notification.service.js.map