webpackJsonp([4],{

/***/ "../../../../../src/app/complex/complex-organisms/complex-organism/complex-organism.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".icon {\n  font-size: 120px;\n  color: #808080;\n  ;\n}\n\n\n\na {\n  text-decoration:none;\n  border-width: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/complex/complex-organisms/complex-organism/complex-organism.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"organism.symbol\" style=\"text-align: center; padding-top: 20px\">\n  <div class=\"columns medium-12\" style=\"height: 60px\">\n    <h5>{{organism.name}}</h5>\n\n  </div>\n  <div class=\"columns medium-12\" style=\"text-align: center\">\n    <ng-container *ngIf=\"organism.symbol !== 'x'\">\n      <a (click)=\"search(organism.name)\"><span class=\"icon icon-species\" attr.data-icon=\"{{organism.symbol}}\"></span><br>{{organism.count}}</a>\n    </ng-container>\n    <ng-container *ngIf=\"organism.symbol === 'x'\">\n      <a (click)=\"search(organism.name)\"><span class=\"icon icon-functional\" attr.data-icon=\"{{organism.symbol}}\"></span><br>{{organism.count}}</a>\n    </ng-container>\n  </div>\n  <div class=\"\" style=\"text-align: center\">\n    <a class=\"tag\" (click)=\"goToComplexTAB()\">ComplexTab</a>\n    <a class=\"tag\" (click)=\"goToComplexPSI25()\">PSI-XML2.5</a>\n    <a class=\"tag\" (click)=\"goToComplexPSI30()\">PSI-XML3.0</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/complex/complex-organisms/complex-organism/complex-organism.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_google_analytics_service_google_analytics_service__ = __webpack_require__("../../../../../src/app/shared/google-analytics/service/google-analytics.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_google_analytics_types_category_enum__ = __webpack_require__("../../../../../src/app/shared/google-analytics/types/category.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_model_complex_organism_complex_organism_model__ = __webpack_require__("../../../../../src/app/complex/shared/model/complex-organism/complex-organism.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComplexOrganismComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ComplexOrganismComponent = (function () {
    function ComplexOrganismComponent(router, googleAnalyticsService) {
        this.router = router;
        this.googleAnalyticsService = googleAnalyticsService;
    }
    ComplexOrganismComponent.prototype.ngOnInit = function () {
    };
    ComplexOrganismComponent.prototype.search = function (specieName) {
        this.googleAnalyticsService.fireSearchTermEvent(__WEBPACK_IMPORTED_MODULE_3__shared_google_analytics_types_category_enum__["a" /* Category */].organisms, specieName);
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
        this.googleAnalyticsService.fireDownloadResourceEvent(__WEBPACK_IMPORTED_MODULE_3__shared_google_analytics_types_category_enum__["a" /* Category */].organisms, 'PSIXML25');
        window.open(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].complex_psi25 + this.organism.psi25, '_blank');
    };
    ComplexOrganismComponent.prototype.goToComplexPSI30 = function () {
        this.googleAnalyticsService.fireDownloadResourceEvent(__WEBPACK_IMPORTED_MODULE_3__shared_google_analytics_types_category_enum__["a" /* Category */].organisms, 'PSIXML30');
        window.open(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].complex_psi30 + this.organism.psi30, '_blank');
    };
    ComplexOrganismComponent.prototype.goToComplexTAB = function () {
        this.googleAnalyticsService.fireDownloadResourceEvent(__WEBPACK_IMPORTED_MODULE_3__shared_google_analytics_types_category_enum__["a" /* Category */].organisms, 'ComplexTAB');
        window.open(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].complex_tab + this.organism.complextab + '.tsv', '_blank');
    };
    return ComplexOrganismComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__shared_model_complex_organism_complex_organism_model__["a" /* ComplexOrganisms */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_model_complex_organism_complex_organism_model__["a" /* ComplexOrganisms */]) === "function" && _a || Object),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__shared_model_complex_organism_complex_organism_model__["a" /* ComplexOrganisms */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_model_complex_organism_complex_organism_model__["a" /* ComplexOrganisms */]) === "function" && _b || Object])
], ComplexOrganismComponent.prototype, "organism", null);
ComplexOrganismComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'cp-complex-organism',
        template: __webpack_require__("../../../../../src/app/complex/complex-organisms/complex-organism/complex-organism.component.html"),
        styles: [__webpack_require__("../../../../../src/app/complex/complex-organisms/complex-organism/complex-organism.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__shared_google_analytics_service_google_analytics_service__["a" /* GoogleAnalyticsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_google_analytics_service_google_analytics_service__["a" /* GoogleAnalyticsService */]) === "function" && _d || Object])
], ComplexOrganismComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/complex-organism.component.js.map

/***/ }),

/***/ "../../../../../src/app/complex/complex-organisms/complex-organisms.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/complex/complex-organisms/complex-organisms.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"column medium-12\">\n    <ng-container *ngIf=\"organisms;else loadingSpinner\">\n      <div  class=\"column medium-3\" *ngFor=\"let organism of organisms\">\n        <cp-complex-organism [organism]=\"organism\"></cp-complex-organism>\n      </div>\n    </ng-container>\n    <ng-template #loadingSpinner>\n      <cp-progress-spinner [query]=\"query\"></cp-progress-spinner>\n    </ng-template>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/complex/complex-organisms/complex-organisms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_loading_indicators_progress_bar_progress_bar_component__ = __webpack_require__("../../../../../src/app/shared/loading-indicators/progress-bar/progress-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_service_complex_portal_service__ = __webpack_require__("../../../../../src/app/complex/shared/service/complex-portal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComplexOrganismsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ComplexOrganismsComponent = (function () {
    function ComplexOrganismsComponent(complexPortalService, titleService) {
        this.complexPortalService = complexPortalService;
        this.titleService = titleService;
        this._query = 'organisms';
    }
    ComplexOrganismsComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('Complex Portal - Organisms');
        this.requestComplexOrganisms();
    };
    ComplexOrganismsComponent.prototype.ngAfterViewInit = function () {
        __WEBPACK_IMPORTED_MODULE_1__shared_loading_indicators_progress_bar_progress_bar_component__["a" /* ProgressBarComponent */].hide();
    };
    ComplexOrganismsComponent.prototype.requestComplexOrganisms = function () {
        var _this = this;
        // TODO: This needs to be looked at, once ftp and WS are able to take care of this.
        // TODO: When new species in CP, we need to add it here to at the image.
        // TODO: Currently we the organism name and count from species facets doing a * search.
        // TODO: The ComplexOrganisms object extends the facet object.
        this.complexPortalService.getComplexOrganisms().subscribe(function (speciesFacets) {
            var organisms = speciesFacets;
            for (var i = 0; i < organisms.length; i++) {
                switch (organisms[i].name) {
                    case 'Homo sapiens':
                        organisms[i].symbol = 'H';
                        organisms[i].type = 'animal';
                        organisms[i].psi25 = 'Homo_sapiens';
                        organisms[i].psi30 = 'human';
                        organisms[i].complextab = 'homo_sapiens';
                        break;
                    case 'Mus musculus':
                        organisms[i].symbol = 'M';
                        organisms[i].type = 'animal';
                        organisms[i].psi25 = 'Mus_musculus';
                        organisms[i].psi30 = 'mouse';
                        organisms[i].complextab = 'mus_musculus';
                        break;
                    case 'Saccharomyces cerevisiae (strain ATCC 204508 / S288c)':
                        organisms[i].symbol = 'Y';
                        organisms[i].type = 'plant';
                        organisms[i].psi25 = 'Saccharomyces_cerevisiae';
                        organisms[i].psi30 = 'yeast';
                        organisms[i].complextab = 'saccharomyces_cerevisiae';
                        break;
                    case 'Escherichia coli (strain K12)':
                        organisms[i].symbol = 'L';
                        organisms[i].type = 'animal';
                        organisms[i].psi25 = 'Escherichia_coli';
                        organisms[i].psi30 = 'ecoli';
                        organisms[i].complextab = 'escherichia_coli';
                        break;
                    case 'Rattus norvegicus':
                        organisms[i].symbol = 'R';
                        organisms[i].type = 'animal';
                        organisms[i].psi25 = 'Rattus_norvegicus';
                        organisms[i].psi30 = 'rat';
                        organisms[i].complextab = 'rattus_norvegicus';
                        break;
                    case 'Caenorhabditis elegans':
                        organisms[i].symbol = 'W';
                        organisms[i].type = 'animal';
                        organisms[i].psi25 = 'Caenorhabditis_elegans';
                        organisms[i].psi30 = 'caeel';
                        organisms[i].complextab = 'caenorhabditis_elegans';
                        break;
                    case 'Gallus gallus':
                        organisms[i].symbol = 'k';
                        organisms[i].type = 'animal';
                        organisms[i].psi25 = 'Gallus_gallus';
                        organisms[i].psi30 = 'chick';
                        organisms[i].complextab = 'gallus_gallus';
                        break;
                    case 'Drosophila melanogaster':
                        organisms[i].symbol = 'F';
                        organisms[i].type = 'animal';
                        organisms[i].psi25 = 'Drosophila_melanogaster';
                        organisms[i].psi30 = 'drome';
                        organisms[i].complextab = 'drosophila_melanogaster';
                        break;
                    case 'Bos taurus':
                        organisms[i].symbol = 'C';
                        organisms[i].type = 'animal';
                        organisms[i].psi25 = 'Bos_taurus';
                        organisms[i].psi30 = 'bovin';
                        organisms[i].complextab = 'bos_taurus';
                        break;
                    case 'Oryctolagus cuniculus':
                        organisms[i].symbol = 't';
                        organisms[i].type = 'animal';
                        organisms[i].psi25 = 'Oryctolagus_cuniculus';
                        organisms[i].psi30 = 'rabit';
                        organisms[i].complextab = 'oryctolagus_cuniculus';
                        break;
                    case 'Xenopus laevis':
                        organisms[i].symbol = 'f';
                        organisms[i].type = 'animal';
                        organisms[i].psi25 = 'Xenopus_laevis';
                        organisms[i].psi30 = 'xenla';
                        organisms[i].complextab = 'xenopus_laevis';
                        break;
                    case 'Canis lupus familiaris':
                        organisms[i].symbol = 'd';
                        organisms[i].type = 'animal';
                        organisms[i].psi25 = 'Canis_familiaris';
                        organisms[i].psi30 = 'canlf';
                        organisms[i].complextab = 'canis_familiaris';
                        break;
                    case 'Schizosaccharomyces pombe (strain 972 / ATCC 24843)':
                        organisms[i].symbol = 'Y';
                        organisms[i].type = 'animal';
                        organisms[i].psi25 = 'Schizosaccharomyces_pombe';
                        organisms[i].psi30 = 'schpo';
                        organisms[i].complextab = 'schizosaccharomyces_pombe';
                        break;
                    case 'Sus scrofa':
                        organisms[i].symbol = 'p';
                        organisms[i].type = 'animal';
                        organisms[i].psi25 = 'Sus_scrofa';
                        organisms[i].psi30 = 'pig';
                        organisms[i].complextab = 'sus_scrofa';
                        break;
                    case 'Pseudomonas aeruginosa (strain ATCC 15692 / DSM 22644 / CIP 104116 ' +
                        '/ JCM 14847 / LMG 12228 / 1C / PRS 101 / PAO1)':
                        organisms[i].name = 'Pseudomonas aeruginosa (strain ATCC 15692)';
                        organisms[i].symbol = 'L';
                        organisms[i].type = 'animal';
                        organisms[i].psi25 = 'Pseudomonas_aeruginosa';
                        organisms[i].psi30 = 'pseae';
                        organisms[i].complextab = 'pseudomonas_aeruginosa';
                        break;
                    case 'Pseudomonas aeruginosa (strain ATCC 15692 / PAO1 / 1C / PRS 101 / LMG 12228)':
                        organisms[i].name = 'Pseudomonas aeruginosa (strain ATCC 15692)';
                        organisms[i].symbol = 'L';
                        organisms[i].type = 'animal';
                        organisms[i].psi25 = 'Pseudomonas_aeruginosa';
                        organisms[i].psi30 = 'pseae';
                        organisms[i].complextab = 'pseudomonas_aeruginosa';
                        break;
                    case 'Torpedo marmorata':
                        organisms[i].symbol = '+';
                        organisms[i].type = 'animal';
                        organisms[i].psi25 = 'Torpedo_marmorata';
                        organisms[i].psi30 = 'torma';
                        organisms[i].complextab = 'torpedo_marmorata';
                        break;
                    case 'Tetronarce californica':
                        organisms[i].symbol = '+';
                        organisms[i].type = 'animal';
                        organisms[i].psi25 = 'Torpedo_californica';
                        organisms[i].psi30 = 'torca';
                        organisms[i].complextab = 'torpedo_californica';
                        break;
                    case 'Lymnaea stagnalis':
                        organisms[i].symbol = '\'';
                        organisms[i].type = 'animal';
                        organisms[i].psi25 = 'Lymnaea_stagnalis';
                        organisms[i].psi30 = 'lymst';
                        organisms[i].complextab = 'lymnaea_stagnalis';
                        break;
                    case 'Arabidopsis thaliana':
                        organisms[i].symbol = 'B';
                        organisms[i].type = 'plant';
                        organisms[i].psi25 = 'arabidopsis_thaliana';
                        organisms[i].psi30 = 'arath';
                        organisms[i].complextab = 'arabidopsis_thaliana';
                        break;
                    case 'Danio rerio':
                        organisms[i].symbol = 'Z';
                        organisms[i].type = 'animal';
                        organisms[i].psi25 = 'danio_rerio';
                        organisms[i].psi30 = 'danre';
                        organisms[i].complextab = 'danio_rerio';
                        break;
                    default:
                        organisms[i].symbol = 'x';
                        organisms[i].type = 'none';
                        organisms[i].psi25 = '';
                        organisms[i].psi30 = '';
                        organisms[i].complextab = '';
                }
            }
            _this._organisms = organisms;
        });
    };
    Object.defineProperty(ComplexOrganismsComponent.prototype, "organisms", {
        get: function () {
            return this._organisms;
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
    return ComplexOrganismsComponent;
}());
ComplexOrganismsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'cp-complex-organisms',
        template: __webpack_require__("../../../../../src/app/complex/complex-organisms/complex-organisms.component.html"),
        styles: [__webpack_require__("../../../../../src/app/complex/complex-organisms/complex-organisms.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_service_complex_portal_service__["a" /* ComplexPortalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_service_complex_portal_service__["a" /* ComplexPortalService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["Title"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["Title"]) === "function" && _b || Object])
], ComplexOrganismsComponent);

var _a, _b;
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/complex-organisms.component.js.map

/***/ }),

/***/ "../../../../../src/app/complex/complex-organisms/complex-organisms.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__complex_organism_complex_organism_component__ = __webpack_require__("../../../../../src/app/complex/complex-organisms/complex-organism/complex-organism.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__complex_organisms_component__ = __webpack_require__("../../../../../src/app/complex/complex-organisms/complex-organisms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_loading_indicators_progress_spinner_progress_spinner_module__ = __webpack_require__("../../../../../src/app/shared/loading-indicators/progress-spinner/progress-spinner.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplexOrganismsModule", function() { return ComplexOrganismsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ComplexOrganismsModule = (function () {
    function ComplexOrganismsModule() {
    }
    return ComplexOrganismsModule;
}());
ComplexOrganismsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_4__angular_router__["RouterModule"].forChild([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_3__complex_organisms_component__["a" /* ComplexOrganismsComponent */] }
            ]),
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_5__shared_loading_indicators_progress_spinner_progress_spinner_module__["a" /* ProgressSpinnerModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__complex_organisms_component__["a" /* ComplexOrganismsComponent */],
            __WEBPACK_IMPORTED_MODULE_2__complex_organism_complex_organism_component__["a" /* ComplexOrganismComponent */]]
    })
], ComplexOrganismsModule);

//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/complex-organisms.module.js.map

/***/ }),

/***/ "../../../../../src/app/complex/shared/model/complex-organism/complex-organism.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__complex_results_facets_species_f_model__ = __webpack_require__("../../../../../src/app/complex/shared/model/complex-results/facets/species_f.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComplexOrganisms; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ComplexOrganisms = (function (_super) {
    __extends(ComplexOrganisms, _super);
    function ComplexOrganisms(name, count, symbol, type, psi25, psi30, complextab) {
        var _this = _super.call(this, name, count) || this;
        _this._symbol = symbol;
        _this._type = type;
        _this._psi25 = psi25;
        _this._psi30 = psi30;
        _this._complextab = complextab;
        return _this;
    }
    Object.defineProperty(ComplexOrganisms.prototype, "symbol", {
        get: function () {
            return this._symbol;
        },
        set: function (value) {
            this._symbol = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexOrganisms.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexOrganisms.prototype, "psi25", {
        get: function () {
            return this._psi25;
        },
        set: function (value) {
            this._psi25 = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexOrganisms.prototype, "psi30", {
        get: function () {
            return this._psi30;
        },
        set: function (value) {
            this._psi30 = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexOrganisms.prototype, "complextab", {
        get: function () {
            return this._complextab;
        },
        set: function (value) {
            this._complextab = value;
        },
        enumerable: true,
        configurable: true
    });
    return ComplexOrganisms;
}(__WEBPACK_IMPORTED_MODULE_0__complex_results_facets_species_f_model__["a" /* SpeciesFacet */]));

//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/complex-organism.model.js.map

/***/ }),

/***/ "../../../../../src/app/complex/shared/model/complex-results/facets/species_f.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeciesFacet; });
/**
 * Created by mkoch on 31/10/2016.
 */
var SpeciesFacet = (function () {
    function SpeciesFacet(name, count) {
        this._name = name;
        this._count = count;
    }
    Object.defineProperty(SpeciesFacet.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpeciesFacet.prototype, "count", {
        get: function () {
            return this._count;
        },
        set: function (value) {
            this._count = value;
        },
        enumerable: true,
        configurable: true
    });
    return SpeciesFacet;
}());

//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/species_f.model.js.map

/***/ })

});
//# sourceMappingURL=4.chunk.js.map