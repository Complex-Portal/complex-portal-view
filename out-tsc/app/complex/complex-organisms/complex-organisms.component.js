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
import { ProgressBarComponent } from '../../shared/loading-indicators/progress-bar/progress-bar.component';
import { ComplexPortalService } from '../shared/service/complex-portal.service';
import { Title } from '@angular/platform-browser';
var ComplexOrganismsComponent = (function () {
    function ComplexOrganismsComponent(complexPortalService, titleService) {
        this.complexPortalService = complexPortalService;
        this.titleService = titleService;
        this._query = 'organisms';
    }
    ComplexOrganismsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.setTitle('Complex Portal - Organisms');
        this.complexPortalService.getComplexOrganisms().subscribe(function (result) {
            for (var i = 0; i < result.length; i++) {
                switch (result[i].name) {
                    case 'Homo sapiens':
                        result[i].symbol = 'H';
                        result[i].type = 'animal';
                        break;
                    case 'Mus musculus':
                        result[i].symbol = 'M';
                        result[i].type = 'animal';
                        break;
                    case 'Saccharomyces cerevisiae (strain ATCC 204508 / S288c)':
                        result[i].symbol = 'Y';
                        result[i].type = 'plant';
                        break;
                    case 'Escherichia coli (strain K12)':
                        result[i].symbol = 'L';
                        result[i].type = 'animal';
                        break;
                    case 'Rattus norvegicus':
                        result[i].symbol = 'R';
                        result[i].type = 'animal';
                        break;
                    case 'Caenorhabditis elegans':
                        result[i].symbol = 'W';
                        result[i].type = 'animal';
                        break;
                    case 'Gallus gallus':
                        result[i].symbol = 'k';
                        result[i].type = 'animal';
                        break;
                    case 'Drosophila melanogaster':
                        result[i].symbol = 'F';
                        result[i].type = 'animal';
                        break;
                    case 'Bos taurus':
                        result[i].symbol = 'C';
                        result[i].type = 'animal';
                        break;
                    case 'Oryctolagus cuniculus':
                        result[i].symbol = 't';
                        result[i].type = 'animal';
                        break;
                    case 'Xenopus laevis':
                        result[i].symbol = 'f';
                        result[i].type = 'animal';
                        break;
                    case 'Canis lupus familiaris':
                        result[i].symbol = 'd';
                        result[i].type = 'animal';
                        break;
                    case 'Schizosaccharomyces pombe (strain 972 / ATCC 24843)':
                        result[i].symbol = 'Y';
                        result[i].type = 'animal';
                        break;
                    case 'Sus scrofa':
                        result[i].symbol = 'p';
                        result[i].type = 'animal';
                        break;
                    case 'Pseudomonas aeruginosa (strain ATCC 15692 / PAO1 / 1C / PRS 101 / LMG 12228)':
                        result[i].symbol = 'L';
                        result[i].type = 'animal';
                        break;
                    case 'Torpedo marmorata':
                        result[i].symbol = '+';
                        result[i].type = 'animal';
                        break;
                    case 'Tetronarce californica':
                        result[i].symbol = '+';
                        result[i].type = 'animal';
                        break;
                    case 'Lymnaea stagnalis':
                        result[i].symbol = '\'';
                        result[i].type = 'animal';
                        break;
                    default:
                        result[i].symbol = 'x';
                        result[i].type = 'none';
                }
            }
            _this._specieFacets = result;
        });
    };
    Object.defineProperty(ComplexOrganismsComponent.prototype, "specieFacets", {
        get: function () {
            return this._specieFacets;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexOrganismsComponent.prototype, "query", {
        get: function () {
            return this._query;
        },
        enumerable: true,
        configurable: true
    });
    ComplexOrganismsComponent.prototype.ngAfterViewInit = function () {
        ProgressBarComponent.hide();
    };
    return ComplexOrganismsComponent;
}());
ComplexOrganismsComponent = __decorate([
    Component({
        selector: 'cp-complex-organisms',
        templateUrl: './complex-organisms.component.html',
        styleUrls: ['./complex-organisms.component.css']
    }),
    __metadata("design:paramtypes", [ComplexPortalService, Title])
], ComplexOrganismsComponent);
export { ComplexOrganismsComponent };
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/complex/complex-organisms/complex-organisms.component.js.map