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
import { ProgressBarComponent } from "../../shared/loading-indicators/progress-bar/progress-bar.component";
import { Router } from "@angular/router";
import { environment } from "../../../environments/environment";
import { Title } from "@angular/platform-browser";
var DataContentComponent = (function () {
    function DataContentComponent(router, titleService) {
        this.router = router;
        this.titleService = titleService;
    }
    DataContentComponent.prototype.ngOnInit = function () {
    };
    DataContentComponent.prototype.ngAfterViewInit = function () {
        this.titleService.setTitle('Complex Portal - Data Content');
        ProgressBarComponent.hide();
    };
    DataContentComponent.prototype.goToComplex = function (ac) {
        this.router.navigate(['complex', ac]);
    };
    DataContentComponent.prototype.goToECO = function (term) {
        this.goTo(environment.ols_eco_url + term);
    };
    DataContentComponent.prototype.goToGO = function (term) {
        this.goTo(environment.ols_go_url + term);
    };
    DataContentComponent.prototype.goTo = function (url) {
        window.open(url, '_blank');
    };
    return DataContentComponent;
}());
DataContentComponent = __decorate([
    Component({
        selector: 'cp-data-content',
        templateUrl: './data-content.component.html',
        styleUrls: ['./data-content.component.css']
    }),
    __metadata("design:paramtypes", [Router, Title])
], DataContentComponent);
export { DataContentComponent };
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/documentation/data-content/data-content.component.js.map