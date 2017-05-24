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
import { ProgressBarComponent } from "../shared/loading-indicators/progress-bar/progress-bar.component";
import { Title } from "@angular/platform-browser";
var DocumentationComponent = (function () {
    function DocumentationComponent(titleService) {
        this.titleService = titleService;
    }
    DocumentationComponent.prototype.ngOnInit = function () {
    };
    DocumentationComponent.prototype.ngAfterViewInit = function () {
        this.titleService.setTitle('Complex Portal - Documentation');
        ProgressBarComponent.hide();
    };
    return DocumentationComponent;
}());
DocumentationComponent = __decorate([
    Component({
        selector: 'cp-documentation',
        templateUrl: './documentation.component.html',
        styleUrls: ['./documentation.component.css']
    }),
    __metadata("design:paramtypes", [Title])
], DocumentationComponent);
export { DocumentationComponent };
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/documentation/documentation.component.js.map