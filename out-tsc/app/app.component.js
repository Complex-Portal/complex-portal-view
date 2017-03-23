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
import { ToastrConfig } from "ngx-toastr";
var version = require('../../package.json').version;
var environmentName = environment.evn;
var AppComponent = (function () {
    function AppComponent(angulartics2GoogleAnalytics, router, notificationService, toastrConfig) {
        this.angulartics2GoogleAnalytics = angulartics2GoogleAnalytics;
        this.router = router;
        this.notificationService = notificationService;
        this.toastrConfig = toastrConfig;
        this._version = version;
        this._environmentName = environmentName;
        toastrConfig.closeButton = true; // displayedElements close button
        toastrConfig.timeOut = 0; // time to live
        this.notificationService.addAnnouncementNotification('For reporting issues or any request, please use the ' +
            '\'Issues\'-button in the top bar.', this.toastrConfig);
        this.notificationService.addAnnouncementNotification('This is a development page!', this.toastrConfig);
    }
    AppComponent.prototype.ngOnInit = function () {
        this.initialiseFoundation();
        if (environment.production === false) {
            ga('create', environment.analytics_id, 'none');
        }
        else {
            ga('create', environment.analytics_id, 'none');
        }
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
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof NavigationEnd)) {
                ProgressBarComponent.display();
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        ProgressBarComponent.hide();
    };
    // Candidate for utils.
    AppComponent.prototype.initialiseFoundation = function () {
        $(document).foundation();
        $(document).foundationExtendEBI();
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
    return AppComponent;
}());
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    }),
    __metadata("design:paramtypes", [Angulartics2GoogleAnalytics, Router,
        NotificationService, ToastrConfig])
], AppComponent);
export { AppComponent };
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/app.component.js.map