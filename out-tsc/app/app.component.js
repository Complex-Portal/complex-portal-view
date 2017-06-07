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
import { NotificationService } from './shared/notification/service/notification.service';
import { Angulartics2GoogleAnalytics } from 'angulartics2';
import { environment } from '../environments/environment';
import { ProgressBarComponent } from './shared/loading-indicators/progress-bar/progress-bar.component';
import { NavigationEnd, Router } from '@angular/router';
import { ToastrConfig } from 'ngx-toastr';
import { BasketService } from './shared/basket/service/basket.service';
var version = require('../../package.json').version;
var environmentName = environment.evn;
var AppComponent = (function () {
    function AppComponent(angulartics2GoogleAnalytics, router, notificationService, toastrConfig, basketService) {
        var _this = this;
        this.angulartics2GoogleAnalytics = angulartics2GoogleAnalytics;
        this.router = router;
        this.notificationService = notificationService;
        this.toastrConfig = toastrConfig;
        this.basketService = basketService;
        this._basketCount = 0;
        this._EBI_BASE_URL = environment.ebi_base_url;
        this.basketService.onBasketCountChanged$.subscribe(function (count) { return _this._basketCount = count; });
        this._basketCount = this.basketService.getBasketCount();
        this._version = version;
        this._environmentName = environmentName;
        toastrConfig.closeButton = true; // displayedElements close button
        toastrConfig.timeOut = 0; // time to live
        this.notificationService.addAnnouncementNotification('For reporting feedback or any request, please use the ' +
            '\'Feeback\'-button in the top bar.', this.toastrConfig);
        this.notificationService.addAnnouncementNotification('This is a development page!', this.toastrConfig);
        // this.basketService.initialiseBasket();
    }
    AppComponent.prototype.ngOnInit = function () {
        // For every router change, we load the ProgressBar by default.
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof NavigationEnd)) {
                ProgressBarComponent.display();
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        // Init some libs.
        this.initialiseFoundation();
        this.initialiseGoogleAnalytics();
        this.initialiseFoundationHacks();
        // ProgressBarComponent.hide();
    };
    // Candidate for utils.
    AppComponent.prototype.initialiseFoundation = function () {
        $(document).foundation();
        $(document).foundationExtendEBI();
    };
    AppComponent.prototype.initialiseGoogleAnalytics = function () {
        ga('create', environment.analytics_id, 'none');
    };
    AppComponent.prototype.initialiseFoundationHacks = function () {
        // copied from script.js (ebi framework)
        // Assign global nav background images through meta tags
        (function assignImageByMetaTags() {
            var localMasthead = document.getElementById('local-masthead');
            // check for both ebi: and ebi- formatted meta tags
            // tslint:disable
            var localMastheadColor = document.querySelector("meta[name='ebi:localmasthead-color']")
                || document.querySelector("meta[name='ebi-localmasthead-color']");
            var localMastheadImage = document.querySelector("meta[name='ebi:localmasthead-image']")
                || document.querySelector("meta[name='ebi-localmasthead-image']");
            if (localMastheadColor != null) {
                localMasthead.style.backgroundColor = localMastheadColor.getAttribute("content");
                localMasthead.className += ' meta-background-color';
            }
            if (localMastheadImage != null) {
                localMasthead.style.backgroundImage = 'url(' + localMastheadImage.getAttribute("content") + ')';
                localMasthead.className += ' meta-background-image';
            }
            // tslint:enable
        })();
    };
    Object.defineProperty(AppComponent.prototype, "version", {
        get: function () {
            return this._version;
        },
        set: function (value) {
            this._version = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "environmentName", {
        get: function () {
            return this._environmentName;
        },
        set: function (value) {
            this._environmentName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "basketCount", {
        get: function () {
            return this._basketCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "EBI_BASE_URL", {
        get: function () {
            return this._EBI_BASE_URL;
        },
        enumerable: true,
        configurable: true
    });
    return AppComponent;
}());
AppComponent = __decorate([
    Component({
        selector: 'cp-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    }),
    __metadata("design:paramtypes", [Angulartics2GoogleAnalytics, Router,
        NotificationService, ToastrConfig, BasketService])
], AppComponent);
export { AppComponent };
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/app.component.js.map