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
var DownloadComponent = (function () {
    function DownloadComponent() {
    }
    DownloadComponent.prototype.ngOnInit = function () {
        ProgressBarComponent.display();
    };
    DownloadComponent.prototype.ngAfterViewInit = function () {
        ProgressBarComponent.hide();
    };
    return DownloadComponent;
}());
DownloadComponent = __decorate([
    Component({
        selector: 'app-download',
        templateUrl: './download.component.html',
        styleUrls: ['./download.component.css']
    }),
    __metadata("design:paramtypes", [])
], DownloadComponent);
export { DownloadComponent };
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/download/download.component.js.map