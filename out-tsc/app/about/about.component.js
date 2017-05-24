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
import { environment } from "../../environments/environment";
import { Title } from "@angular/platform-browser";
var AboutComponent = (function () {
    function AboutComponent(titleService) {
        this.titleService = titleService;
        this._INTACT_BASE_URL = environment.intact_base_url;
        this._INTACT_SUPPORT_URL = environment.intact_support_url;
    }
    AboutComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('Complex Portal - About');
    };
    AboutComponent.prototype.ngAfterViewInit = function () {
        ProgressBarComponent.hide();
    };
    Object.defineProperty(AboutComponent.prototype, "INTACT_BASE_URL", {
        get: function () {
            return this._INTACT_BASE_URL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AboutComponent.prototype, "INTACT_SUPPORT_URL", {
        get: function () {
            return this._INTACT_SUPPORT_URL;
        },
        enumerable: true,
        configurable: true
    });
    return AboutComponent;
}());
AboutComponent = __decorate([
    Component({
        selector: 'cp-about',
        templateUrl: './about.component.html',
        styleUrls: ['./about.component.css']
    }),
    __metadata("design:paramtypes", [Title])
], AboutComponent);
export { AboutComponent };
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/about/about.component.js.map