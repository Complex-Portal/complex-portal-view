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
import { GoogleAnalyticsService } from '../../../shared/google-analytics/service/google-analytics.service';
import { Router } from '@angular/router';
import { Category } from '../../../shared/google-analytics/category.enum';
import { environment } from '../../../../environments/environment';
import { ComplexOrganisms } from '../../shared/model/complex-organism/complex-organism.model';
var ComplexOrganismComponent = (function () {
    function ComplexOrganismComponent(router, googleAnalyticsService) {
        this.router = router;
        this.googleAnalyticsService = googleAnalyticsService;
    }
    ComplexOrganismComponent.prototype.ngOnInit = function () {
        this._organism.name;
    };
    ComplexOrganismComponent.prototype.search = function (specieName) {
        this.googleAnalyticsService.fireSearchTermEvent(Category.organisms, specieName);
        this.router.navigate(['complex/search'], { queryParams: { query: '*', species: specieName, page: 1 } });
    };
    Object.defineProperty(ComplexOrganismComponent.prototype, "organism", {
        get: function () {
            return this._organism;
        },
        set: function (value) {
            this._organism = value;
        },
        enumerable: true,
        configurable: true
    });
    ComplexOrganismComponent.prototype.goToComplexPSI25 = function () {
        this.googleAnalyticsService.fireDownloadResourceEvent(Category.organisms, 'PSIXML25');
        window.open(environment.complex_psi25 + this.organism.psi25, '_blank');
    };
    ComplexOrganismComponent.prototype.goToComplexPSI30 = function () {
        this.googleAnalyticsService.fireDownloadResourceEvent(Category.organisms, 'PSIXML30');
        window.open(environment.complex_psi30 + this.organism.psi30, '_blank');
    };
    ComplexOrganismComponent.prototype.goToComplexTAB = function () {
        this.googleAnalyticsService.fireDownloadResourceEvent(Category.organisms, 'ComplexTAB');
        window.open(environment.complex_tab + this.organism.complextab + '.tsv', '_blank');
    };
    return ComplexOrganismComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", ComplexOrganisms),
    __metadata("design:paramtypes", [ComplexOrganisms])
], ComplexOrganismComponent.prototype, "organism", null);
ComplexOrganismComponent = __decorate([
    Component({
        selector: 'cp-complex-organism',
        templateUrl: './complex-organism.component.html',
        styleUrls: ['./complex-organism.component.css']
    }),
    __metadata("design:paramtypes", [Router, GoogleAnalyticsService])
], ComplexOrganismComponent);
export { ComplexOrganismComponent };
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/complex/complex-organisms/complex-organism/complex-organism.component.js.map