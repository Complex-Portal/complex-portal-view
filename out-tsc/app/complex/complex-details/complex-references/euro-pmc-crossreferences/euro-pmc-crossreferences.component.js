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
import { EuroPmcService } from './service/euro-pmc.service';
import { NotificationService } from '../../../../shared/notification/service/notification.service';
import { GoogleAnalyticsService } from '../../../../shared/google-analytics/service/google-analytics.service';
import { Category } from '../../../../shared/google-analytics/types/category.enum';
var EuroPmcCrossreferencesComponent = (function () {
    function EuroPmcCrossreferencesComponent(euroPmcService, notificationService, googleAnalyticsService) {
        this.euroPmcService = euroPmcService;
        this.notificationService = notificationService;
        this.googleAnalyticsService = googleAnalyticsService;
        this._publications = [];
        this._isDataLoaded = false;
    }
    EuroPmcCrossreferencesComponent.prototype.ngOnInit = function () {
        this.findXRefs();
    };
    EuroPmcCrossreferencesComponent.prototype.findXRefs = function () {
        var _this = this;
        var _loop_1 = function (i) {
            this_1.euroPmcService.getPublicationInformation(this_1.crossReferences[i].identifier).subscribe(function (response) { return _this.publicationFactory(_this.crossReferences[i], response); }, function (error) {
                _this._isDataLoaded = false;
                _this.notificationService.onAPIRequestError('Euro PMC');
                _this.googleAnalyticsService.fireAPIRequestErrorEvent(Category.complexportal_details, error.status ? error.status : 'unknown');
            });
            if (i === this_1.crossReferences.length - 1) {
                this_1._isDataLoaded = true;
            }
        };
        var this_1 = this;
        for (var i = 0; i < this.crossReferences.length; i++) {
            _loop_1(i);
        }
    };
    EuroPmcCrossreferencesComponent.prototype.publicationFactory = function (crossReference, euroPmcResponse) {
        this.publications.push({
            id: crossReference.identifier,
            title: euroPmcResponse.resultList.result[0].title,
            authors: euroPmcResponse.resultList.result[0].authorString,
            url: crossReference.searchURL
        });
    };
    Object.defineProperty(EuroPmcCrossreferencesComponent.prototype, "crossReferences", {
        get: function () {
            return this._crossReferences;
        },
        set: function (value) {
            this._crossReferences = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EuroPmcCrossreferencesComponent.prototype, "publications", {
        get: function () {
            return this._publications;
        },
        set: function (value) {
            this._publications = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EuroPmcCrossreferencesComponent.prototype, "isDataLoaded", {
        get: function () {
            return this._isDataLoaded;
        },
        set: function (value) {
            this._isDataLoaded = value;
        },
        enumerable: true,
        configurable: true
    });
    return EuroPmcCrossreferencesComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], EuroPmcCrossreferencesComponent.prototype, "crossReferences", null);
EuroPmcCrossreferencesComponent = __decorate([
    Component({
        selector: 'cp-euro-pmc-crossreferences',
        templateUrl: 'euro-pmc-crossreferences.component.html',
        styleUrls: ['euro-pmc-crossreferences.component.css']
    }),
    __metadata("design:paramtypes", [EuroPmcService, NotificationService,
        GoogleAnalyticsService])
], EuroPmcCrossreferencesComponent);
export { EuroPmcCrossreferencesComponent };
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/complex/complex-details/complex-references/euro-pmc-crossreferences/euro-pmc-crossreferences.component.js.map