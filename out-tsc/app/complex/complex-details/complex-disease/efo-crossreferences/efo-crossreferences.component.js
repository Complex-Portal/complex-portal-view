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
import { OlsService } from '../../../../shared/ols/service/ols.service';
import { NotificationService } from '../../../../shared/notification/service/notification.service';
import { GoogleAnalyticsService } from '../../../../shared/google-analytics/service/google-analytics.service';
import { Category } from '../../../../shared/google-analytics/types/category.enum';
var EfoCrossreferencesComponent = (function () {
    function EfoCrossreferencesComponent(olsService, notificationService, googleAnalyticsService) {
        this.olsService = olsService;
        this.notificationService = notificationService;
        this.googleAnalyticsService = googleAnalyticsService;
        this._displayedElements = 5;
    }
    EfoCrossreferencesComponent.prototype.ngOnInit = function () {
        this.findXRefs();
    };
    /**
     * The OLS WS provides us some description to the found EFO and Orphanet XRefs.
     */
    EfoCrossreferencesComponent.prototype.findXRefs = function () {
        var _this = this;
        var _loop_1 = function (i) {
            if (this_1.crossReferences[i].identifier.split(':')[0] === 'EFO') {
                this_1.olsService.getEfoName(this_1.crossReferences[i].identifier).subscribe(function (response) { return _this._crossReferences[i].description = JSON.parse(response._body)._embedded.terms[0].label; }, function (error) {
                    _this.notificationService.onAPIRequestError('OLS');
                    _this.googleAnalyticsService.fireAPIRequestErrorEvent(Category.ols_efo, error.status ? error.status : 'unknown');
                });
            }
            else if (this_1.crossReferences[i].identifier.split(':')[0] === 'Orphanet') {
                this_1.olsService.getOrphaNetName(this_1.crossReferences[i].identifier).subscribe(function (response) { return _this._crossReferences[i].description = JSON.parse(response._body)._embedded.terms[0].label; }, function (error) {
                    _this.notificationService.onAPIRequestError('OLS');
                    _this.googleAnalyticsService.fireAPIRequestErrorEvent(Category.ols_orphanet, error.status ? error.status : 'unknown');
                });
            }
        };
        var this_1 = this;
        for (var i = 0; i < this._crossReferences.length; i++) {
            _loop_1(i);
        }
    };
    Object.defineProperty(EfoCrossreferencesComponent.prototype, "crossReferences", {
        get: function () {
            return this._crossReferences;
        },
        set: function (value) {
            this._crossReferences = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EfoCrossreferencesComponent.prototype, "displayedElements", {
        get: function () {
            return this._displayedElements;
        },
        set: function (value) {
            this._displayedElements = value;
        },
        enumerable: true,
        configurable: true
    });
    return EfoCrossreferencesComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], EfoCrossreferencesComponent.prototype, "crossReferences", null);
EfoCrossreferencesComponent = __decorate([
    Component({
        selector: 'cp-efo-crossreferences',
        templateUrl: './efo-crossreferences.component.html',
        styleUrls: ['./efo-crossreferences.component.css']
    }),
    __metadata("design:paramtypes", [OlsService, NotificationService,
        GoogleAnalyticsService])
], EfoCrossreferencesComponent);
export { EfoCrossreferencesComponent };
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/complex/complex-details/complex-disease/efo-crossreferences/efo-crossreferences.component.js.map