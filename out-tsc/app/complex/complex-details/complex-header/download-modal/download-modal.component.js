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
import { environment } from '../../../../../environments/environment';
import { Category } from '../../../../shared/google-analytics/category.enum';
import { GoogleAnalyticsService } from '../../../../shared/google-analytics/service/google-analytics.service';
var DownloadModalComponent = (function () {
    function DownloadModalComponent(googleAnalyticsService) {
        this.googleAnalyticsService = googleAnalyticsService;
    }
    DownloadModalComponent.prototype.ngOnInit = function () {
    };
    DownloadModalComponent.prototype.goToComplexWS = function () {
        this.googleAnalyticsService.fireDownloadResourceEvent(Category.details, 'ComplexWS');
        window.open(environment.complex_ws_base_url + '/details/' + this._complexAC, '_blank');
    };
    Object.defineProperty(DownloadModalComponent.prototype, "complexAC", {
        get: function () {
            return this._complexAC;
        },
        set: function (value) {
            this._complexAC = value;
        },
        enumerable: true,
        configurable: true
    });
    return DownloadModalComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], DownloadModalComponent.prototype, "complexAC", null);
DownloadModalComponent = __decorate([
    Component({
        selector: 'cp-download-modal',
        templateUrl: './download-modal.component.html',
        styleUrls: ['./download-modal.component.css']
    }),
    __metadata("design:paramtypes", [GoogleAnalyticsService])
], DownloadModalComponent);
export { DownloadModalComponent };
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/complex/complex-details/complex-header/download-modal/download-modal.component.js.map