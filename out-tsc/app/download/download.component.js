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
var DownloadComponent = (function () {
    function DownloadComponent() {
        this._COMPLEX_PSI25 = environment.complex_psi25;
        this._COMPLEX_PSI30 = environment.complex_psi30;
        this._COMPLEX_TAB = environment.complex_tab;
        this._COMPLEX_WS = environment.complex_ws_base_url;
        this._COMPLEX_TAB_README = environment.complex_tab_readme;
        this._COMPLEX_CURRENT = environment.complex_current;
    }
    DownloadComponent.prototype.ngOnInit = function () {
        ProgressBarComponent.display();
    };
    DownloadComponent.prototype.ngAfterViewInit = function () {
        ProgressBarComponent.hide();
    };
    Object.defineProperty(DownloadComponent.prototype, "COMPLEX_PSI25", {
        get: function () {
            return this._COMPLEX_PSI25;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DownloadComponent.prototype, "COMPLEX_PSI30", {
        get: function () {
            return this._COMPLEX_PSI30;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DownloadComponent.prototype, "COMPLEX_TAB", {
        get: function () {
            return this._COMPLEX_TAB;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DownloadComponent.prototype, "COMPLEX_WS", {
        get: function () {
            return this._COMPLEX_WS;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DownloadComponent.prototype, "COMPLEX_TAB_README", {
        get: function () {
            return this._COMPLEX_TAB_README;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DownloadComponent.prototype, "COMPLEX_CURRENT", {
        get: function () {
            return this._COMPLEX_CURRENT;
        },
        enumerable: true,
        configurable: true
    });
    return DownloadComponent;
}());
DownloadComponent = __decorate([
    Component({
        selector: 'cp-download',
        templateUrl: './download.component.html',
        styleUrls: ['./download.component.css']
    }),
    __metadata("design:paramtypes", [])
], DownloadComponent);
export { DownloadComponent };
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/download/download.component.js.map