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
import { ProgressBarComponent } from '../shared/loading-indicators/progress-bar/progress-bar.component';
import { environment } from '../../environments/environment';
import { GoogleAnalyticsService } from '../shared/google-analytics/service/google-analytics.service';
import { Category } from '../shared/google-analytics/types/category.enum';
import { Title } from '@angular/platform-browser';
var DownloadComponent = (function () {
    function DownloadComponent(googleAnalyticsService, titleService) {
        this.googleAnalyticsService = googleAnalyticsService;
        this.titleService = titleService;
    }
    DownloadComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('Complex Portal - Programmatic Access');
        ProgressBarComponent.display();
    };
    DownloadComponent.prototype.ngAfterViewInit = function () {
        ProgressBarComponent.hide();
    };
    DownloadComponent.prototype.goToComplexPSI25 = function () {
        this.googleAnalyticsService.fireDownloadResourceEvent(Category.download, 'PSIXML25');
        window.open(environment.complex_psi25, '_blank');
    };
    DownloadComponent.prototype.goToComplexPSI30 = function () {
        this.googleAnalyticsService.fireDownloadResourceEvent(Category.download, 'PSIXML30');
        window.open(environment.complex_psi30, '_blank');
    };
    DownloadComponent.prototype.goToComplexTAB = function () {
        this.googleAnalyticsService.fireDownloadResourceEvent(Category.download, 'ComplexTAB');
        window.open(environment.complex_tab, '_blank');
    };
    DownloadComponent.prototype.goToComplexWS = function () {
        this.googleAnalyticsService.fireDownloadResourceEvent(Category.download, 'ComplexWS');
        window.open(environment.complex_ws_base_url, '_blank');
    };
    DownloadComponent.prototype.goToComplexTabeReadMe = function () {
        this.googleAnalyticsService.fireOpenExternalLinkEvent(Category.download, 'ComplexTABReadMe');
        window.open(environment.complex_tab_readme, '_blank');
    };
    DownloadComponent.prototype.goToComplexFTPCurrent = function () {
        this.googleAnalyticsService.fireOpenExternalLinkEvent(Category.download, 'ComplexCurrentFTP');
        window.open(environment.complex_current, '_blank');
    };
    return DownloadComponent;
}());
DownloadComponent = __decorate([
    Component({
        selector: 'cp-download',
        templateUrl: './download.component.html',
        styleUrls: ['./download.component.css']
    }),
    __metadata("design:paramtypes", [GoogleAnalyticsService, Title])
], DownloadComponent);
export { DownloadComponent };
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/download/download.component.js.map