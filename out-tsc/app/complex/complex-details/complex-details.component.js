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
import { ActivatedRoute, Router } from '@angular/router';
import { ComplexPortalService } from '../shared/service/complex-portal.service';
import { ProgressBarComponent } from '../../shared/loading-indicators/progress-bar/progress-bar.component';
import { NotificationService } from '../../shared/notification/service/notification.service';
import { SectionService } from './shared/service/section/section.service';
import { PageScrollConfig } from 'ng2-page-scroll';
import { Title } from '@angular/platform-browser';
import { GoogleAnalyticsService } from '../../shared/google-analytics/service/google-analytics.service';
import { Category } from '../../shared/google-analytics/types/category.enum';
var ComplexDetailsComponent = (function () {
    function ComplexDetailsComponent(route, router, notificationService, googleAnalyticsService, complexPortalService, sectionService, titleService) {
        this.route = route;
        this.router = router;
        this.notificationService = notificationService;
        this.googleAnalyticsService = googleAnalyticsService;
        this.complexPortalService = complexPortalService;
        this.sectionService = sectionService;
        this.titleService = titleService;
        // This is to calculate the EBI menu bar into the scrolling
        PageScrollConfig.defaultScrollOffset = 50;
        this.checkIfGPAIsDefined();
    }
    ComplexDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._callSubscription = this.route
            .params
            .subscribe(function (params) {
            _this.query = params['id'];
            _this.titleService.setTitle('Complex Portal - ' + _this.query);
            _this.requestComplex();
            _this.requestComplexMIJSON();
            document.body.scrollTop = 0;
        });
    };
    ComplexDetailsComponent.prototype.ngAfterViewInit = function () {
        ProgressBarComponent.hide();
    };
    ComplexDetailsComponent.prototype.ngOnDestroy = function () {
        this._callSubscription.unsubscribe();
        this.sectionService.reset();
    };
    ComplexDetailsComponent.prototype.checkIfGPAIsDefined = function () {
        // TODO: Not needed when we properly use the gxa node module and not use the backed version.
        if (typeof expressionAtlasHeatmapHighcharts !== 'undefined') {
            this._gxa = expressionAtlasHeatmapHighcharts;
        }
        else {
            this._gxa = null;
        }
    };
    ComplexDetailsComponent.prototype.requestComplex = function () {
        var _this = this;
        this.complexPortalService.getComplex(this._query).subscribe(function (complexDetails) { return _this.complexDetails = complexDetails; }, function (error) {
            _this.notificationService.onAPIRequestError('Complex Portal');
            _this.googleAnalyticsService.fireAPIRequestErrorEvent(Category.complexportal_details, error.status ? error.status : 'unknown');
            _this.router.navigate(['home']);
        });
    };
    ComplexDetailsComponent.prototype.requestComplexMIJSON = function () {
        var _this = this;
        this.complexPortalService.getComplexMIJSON(this._query).subscribe(function (complexMIJSON) { return _this.complexMIJSON = complexMIJSON; }, function (error) {
            _this.notificationService.onAPIRequestError('Complex Portal');
            _this.googleAnalyticsService.fireAPIRequestErrorEvent(Category.complexportal_mi, error.status ? error.status : 'unknown');
            _this.router.navigate(['home']);
        });
    };
    Object.defineProperty(ComplexDetailsComponent.prototype, "complexDetails", {
        get: function () {
            return this._complexDetails;
        },
        set: function (value) {
            this._complexDetails = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexDetailsComponent.prototype, "complexMIJSON", {
        get: function () {
            return this._complexMIJSON;
        },
        set: function (value) {
            this._complexMIJSON = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexDetailsComponent.prototype, "query", {
        get: function () {
            return this._query;
        },
        set: function (value) {
            this._query = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexDetailsComponent.prototype, "gxa", {
        get: function () {
            return this._gxa;
        },
        set: function (value) {
            this._gxa = value;
        },
        enumerable: true,
        configurable: true
    });
    return ComplexDetailsComponent;
}());
ComplexDetailsComponent = __decorate([
    Component({
        selector: 'cp-complex-details',
        templateUrl: './complex-details.component.html',
        styleUrls: ['./complex-details.component.css']
    }),
    __metadata("design:paramtypes", [ActivatedRoute, Router, NotificationService,
        GoogleAnalyticsService, ComplexPortalService,
        SectionService, Title])
], ComplexDetailsComponent);
export { ComplexDetailsComponent };
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/complex/complex-details/complex-details.component.js.map