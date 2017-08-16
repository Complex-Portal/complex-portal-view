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
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
var OntologiesComponent = (function () {
    function OntologiesComponent(router, titleService) {
        this.router = router;
        this.titleService = titleService;
    }
    OntologiesComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('Complex Portal - Ontologies');
        this.router.navigate(['home']);
    };
    return OntologiesComponent;
}());
OntologiesComponent = __decorate([
    Component({
        selector: 'cp-ontologies',
        templateUrl: './ontologies.component.html',
        styleUrls: ['./ontologies.component.css']
    }),
    __metadata("design:paramtypes", [Router, Title])
], OntologiesComponent);
export { OntologiesComponent };
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/ontologies/ontologies.component.js.map