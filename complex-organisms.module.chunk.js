webpackJsonp(["complex-organisms.module"],{

/***/ "./src/app/complex/complex-organisms/complex-organism/complex-organism.component.css":
/***/ (function(module, exports) {

module.exports = ".icon {\n  font-size: 100px;\n  color: #accdcf;\n}\n\na {\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center;\n}\n\n.card {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  text-align: center;\n  -webkit-box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);\n          box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);\n  padding: 1.5em 1em;\n  border-radius: 12px;\n  height: 100%;\n}\n\n.flex-spacer {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n\ndiv.actions {\n  text-align: center;\n}\n\n.species-button {\n  padding: 1em;\n  color: #007c82;\n  border-radius: 20%;\n  margin: 1em;\n  border: none;\n  cursor: pointer;\n}\n\n.species-button:hover {\n  opacity: 0.9;\n  -webkit-box-shadow: 0 0 20px #007c82;\n          box-shadow: 0 0 20px #007c82;\n}\n\nbutton.download-button {\n  border: 2px solid #007c82;\n  border-radius: 25px;\n  color: #007c82;\n}\n"

/***/ }),

/***/ "./src/app/complex/complex-organisms/complex-organism/complex-organism.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" *ngIf=\"organism.symbol\">\n  <div class=\"medium-12\">\n    <b>{{organism.scientificName}}</b><br>\n    {{organism.nameDetails}}\n  </div>\n  <a href=\"https://www.uniprot.org/taxonomy/{{organism.taxid}}\" target=\"_blank\">{{organism.taxid}}</a>\n\n  <div class=\"flex-spacer\"></div>\n\n  <div class=\"medium-12\" style=\"text-align: center\">\n    <button (click)=\"search(organism.name)\" class=\"species-button\">\n        <span attr.data-icon=\"{{organism.symbol}}\" style=\"color: #007c82\"\n              [ngClass]=\"{'icon ': true,'icon-species': organism.symbol !== '?', 'icon-functional': organism.symbol === '?'}\">\n        </span>\n      <br>{{organism.count}}\n    </button>\n  </div>\n  <div class=\"actions\">\n    <button mat-raised-button color=\"primary\" (click)=\"goToComplexPSI25()\">miXML 2.5</button>\n    <button mat-raised-button color=\"primary\" (click)=\"goToComplexPSI30()\">miXML 3.0</button>\n  </div>\n  <div class=\"actions margin-top-small\">\n    <button mat-raised-button color=\"primary\" (click)=\"goToComplexTAB()\">ComplexTab</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/complex/complex-organisms/complex-organism/complex-organism.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComplexOrganismComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_google_analytics_service_google_analytics_service__ = __webpack_require__("./src/app/shared/google-analytics/service/google-analytics.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_google_analytics_types_category_enum__ = __webpack_require__("./src/app/shared/google-analytics/types/category.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_model_complex_organism_complex_organism_model__ = __webpack_require__("./src/app/complex/shared/model/complex-organism/complex-organism.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ComplexOrganismComponent = /** @class */ (function () {
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__shared_model_complex_organism_complex_organism_model__["a" /* ComplexOrganisms */]),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__shared_model_complex_organism_complex_organism_model__["a" /* ComplexOrganisms */]])
    ], ComplexOrganismComponent.prototype, "organism", null);
    ComplexOrganismComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'cp-complex-organism',
            template: __webpack_require__("./src/app/complex/complex-organisms/complex-organism/complex-organism.component.html"),
            styles: [__webpack_require__("./src/app/complex/complex-organisms/complex-organism/complex-organism.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_1__shared_google_analytics_service_google_analytics_service__["a" /* GoogleAnalyticsService */]])
    ], ComplexOrganismComponent);
    return ComplexOrganismComponent;
}());



/***/ }),

/***/ "./src/app/complex/complex-organisms/complex-organisms.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/complex/complex-organisms/complex-organisms.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"columns margin-top-large margin-bottom-large\">\n  <h1>Organisms</h1>\n  <ng-container *ngIf=\"organisms;else loadingSpinner\">\n    <div class=\"columns medium-12\" style=\"display: grid; grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr)); grid-gap: 1rem;\">\n      <div class=\"medium-12\" *ngFor=\"let organism of organisms\" style=\"break-inside: avoid-column\">\n        <cp-complex-organism [organism]=\"organism\"></cp-complex-organism>\n      </div>\n    </div>\n  </ng-container>\n  <ng-template #loadingSpinner>\n    <cp-progress-spinner [query]=\"query\"></cp-progress-spinner>\n  </ng-template>\n</div>\n\n"

/***/ }),

/***/ "./src/app/complex/complex-organisms/complex-organisms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComplexOrganismsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_loading_indicators_progress_bar_progress_bar_component__ = __webpack_require__("./src/app/shared/loading-indicators/progress-bar/progress-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_service_complex_portal_service__ = __webpack_require__("./src/app/complex/shared/service/complex-portal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ComplexOrganismsComponent = /** @class */ (function () {
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
                        organisms[i].scientificName = organisms[i].name;
                        organisms[i].nameDetails = '';
                        organisms[i].symbol = 'H';
                        organisms[i].type = 'animal';
                        organisms[i].psi25 = 'Homo_sapiens';
                        organisms[i].psi30 = 'human';
                        organisms[i].complextab = '9606';
                        organisms[i].taxid = '9606';
                        break;
                    case 'Mus musculus':
                        organisms[i].scientificName = organisms[i].name;
                        organisms[i].nameDetails = '';
                        organisms[i].symbol = 'M';
                        organisms[i].type = 'animal';
                        organisms[i].psi25 = 'Mus_musculus';
                        organisms[i].psi30 = 'mouse';
                        organisms[i].complextab = '10090';
                        organisms[i].taxid = '10090';
                        break;
                    case 'Saccharomyces cerevisiae (strain ATCC 204508 / S288c)':
                        organisms[i].scientificName = 'Saccharomyces cerevisiae';
                        organisms[i].nameDetails = 'strain ATCC 204508 / S288c';
                        organisms[i].symbol = 'Y';
                        organisms[i].type = 'plant';
                        organisms[i].psi25 = 'Saccharomyces_cerevisiae';
                        organisms[i].psi30 = 'yeast';
                        organisms[i].complextab = '559292';
                        organisms[i].taxid = '559292';
                        break;
                    case 'Escherichia coli (strain K12)':
                        organisms[i].scientificName = 'Escherichia coli';
                        organisms[i].nameDetails = 'strain K12';
                        organisms[i].symbol = 'L';
                        organisms[i].type = 'animal';
                        organisms[i].psi25 = 'Escherichia_coli';
                        organisms[i].psi30 = 'ecoli';
                        organisms[i].complextab = '83333';
                        organisms[i].taxid = '83333';
                        break;
                    case 'Escherichia coli':
                        organisms[i].scientificName = organisms[i].name;
                        organisms[i].nameDetails = '';
                        organisms[i].symbol = 'L';
                        organisms[i].type = 'animal';
                        organisms[i].psi25 = 'Escherichia_coli';
                        organisms[i].psi30 = 'ecolx';
                        organisms[i].complextab = '562';
                        organisms[i].complextab = '562';
                        break;
                    case 'Rattus norvegicus':
                        organisms[i].scientificName = organisms[i].name;
                        organisms[i].nameDetails = '';
                        organisms[i].symbol = 'R';
                        organisms[i].type = 'animal';
                        organisms[i].psi25 = 'Rattus_norvegicus';
                        organisms[i].psi30 = 'rat';
                        organisms[i].complextab = '10116';
                        organisms[i].taxid = '10116';
                        break;
                    case 'Caenorhabditis elegans':
                        organisms[i].scientificName = organisms[i].name;
                        organisms[i].nameDetails = '';
                        organisms[i].symbol = 'W';
                        organisms[i].type = 'animal';
                        organisms[i].psi25 = 'Caenorhabditis_elegans';
                        organisms[i].psi30 = 'caeel';
                        organisms[i].complextab = '6239';
                        organisms[i].taxid = '6239';
                        break;
                    case 'Gallus gallus':
                        organisms[i].scientificName = organisms[i].name;
                        organisms[i].nameDetails = '';
                        organisms[i].symbol = 'k';
                        organisms[i].type = 'animal';
                        organisms[i].psi25 = 'Gallus_gallus';
                        organisms[i].psi30 = 'chick';
                        organisms[i].complextab = '9031';
                        organisms[i].taxid = '9031';
                        break;
                    case 'Drosophila melanogaster':
                        organisms[i].scientificName = organisms[i].name;
                        organisms[i].nameDetails = '';
                        organisms[i].symbol = 'F';
                        organisms[i].type = 'animal';
                        organisms[i].psi25 = 'Drosophila_melanogaster';
                        organisms[i].psi30 = 'drome';
                        organisms[i].complextab = '7227';
                        organisms[i].complextab = '7227';
                        break;
                    case 'Bos taurus':
                        organisms[i].scientificName = organisms[i].name;
                        organisms[i].nameDetails = '';
                        organisms[i].symbol = 'C';
                        organisms[i].type = 'animal';
                        organisms[i].psi25 = 'Bos_taurus';
                        organisms[i].psi30 = 'bovin';
                        organisms[i].complextab = '9913';
                        organisms[i].taxid = '9913';
                        break;
                    case 'Oryctolagus cuniculus':
                        organisms[i].scientificName = organisms[i].name;
                        organisms[i].nameDetails = '';
                        organisms[i].symbol = 't';
                        organisms[i].type = 'animal';
                        organisms[i].psi25 = 'Oryctolagus_cuniculus';
                        organisms[i].psi30 = 'rabit';
                        organisms[i].complextab = '9986';
                        organisms[i].complextab = '9986';
                        break;
                    case 'Ovis aries':
                        organisms[i].scientificName = organisms[i].name;
                        organisms[i].nameDetails = '';
                        organisms[i].symbol = 'x';
                        organisms[i].type = 'animal';
                        organisms[i].psi25 = 'Ovis_aries';
                        organisms[i].psi30 = 'sheep';
                        organisms[i].complextab = '9940';
                        organisms[i].taxid = '9940';
                        break;
                    case 'Xenopus laevis':
                        organisms[i].scientificName = organisms[i].name;
                        organisms[i].nameDetails = '';
                        organisms[i].symbol = 'f';
                        organisms[i].type = 'animal';
                        organisms[i].psi25 = 'Xenopus_laevis';
                        organisms[i].psi30 = 'xenla';
                        organisms[i].complextab = '8355';
                        organisms[i].taxid = '8355';
                        break;
                    case 'Canis lupus familiaris':
                        organisms[i].scientificName = organisms[i].name;
                        organisms[i].nameDetails = '';
                        organisms[i].symbol = 'd';
                        organisms[i].type = 'animal';
                        organisms[i].psi25 = 'Canis_familiaris';
                        organisms[i].psi30 = 'canlf';
                        organisms[i].complextab = '9615';
                        organisms[i].taxid = '9615';
                        break;
                    case 'Schizosaccharomyces pombe (strain 972 / ATCC 24843)':
                        organisms[i].scientificName = 'Homo sapiens';
                        organisms[i].nameDetails = 'strain 972 / ATCC 24843';
                        organisms[i].symbol = 'Y';
                        organisms[i].type = 'animal';
                        organisms[i].psi25 = 'Schizosaccharomyces_pombe';
                        organisms[i].psi30 = 'schpo';
                        organisms[i].complextab = '284812';
                        organisms[i].taxid = '284812';
                        break;
                    case 'Sus scrofa':
                        organisms[i].scientificName = organisms[i].name;
                        organisms[i].nameDetails = '';
                        organisms[i].symbol = 'p';
                        organisms[i].type = 'animal';
                        organisms[i].psi25 = 'Sus_scrofa';
                        organisms[i].psi30 = 'pig';
                        organisms[i].complextab = '9823';
                        organisms[i].taxid = '9823';
                        break;
                    case 'Pseudomonas aeruginosa (strain ATCC 15692 / DSM 22644 / CIP 104116 ' +
                        '/ JCM 14847 / LMG 12228 / 1C / PRS 101 / PAO1)':
                        organisms[i].scientificName = 'Pseudomonas aeruginosa';
                        organisms[i].nameDetails = 'strain ATCC 15692';
                        organisms[i].symbol = 'L';
                        organisms[i].type = 'animal';
                        organisms[i].psi25 = 'Pseudomonas_aeruginosa';
                        organisms[i].psi30 = 'pseae';
                        organisms[i].complextab = '208964';
                        organisms[i].taxid = '208964';
                        break;
                    case 'Torpedo marmorata':
                        organisms[i].scientificName = organisms[i].name;
                        organisms[i].nameDetails = '';
                        organisms[i].symbol = '+';
                        organisms[i].type = 'animal';
                        organisms[i].psi25 = 'Torpedo_marmorata';
                        organisms[i].psi30 = 'torma';
                        organisms[i].complextab = '7788';
                        organisms[i].taxid = '7788';
                        break;
                    case 'Tetronarce californica':
                        organisms[i].scientificName = organisms[i].name;
                        organisms[i].nameDetails = '';
                        organisms[i].symbol = '+';
                        organisms[i].type = 'animal';
                        organisms[i].psi25 = 'Torpedo_californica';
                        organisms[i].psi30 = 'torca';
                        organisms[i].complextab = '7787';
                        organisms[i].taxid = '7787';
                        break;
                    case 'Lymnaea stagnalis':
                        organisms[i].scientificName = organisms[i].name;
                        organisms[i].nameDetails = '';
                        organisms[i].symbol = '\'';
                        organisms[i].type = 'animal';
                        organisms[i].psi25 = 'Lymnaea_stagnalis';
                        organisms[i].psi30 = 'lymst';
                        organisms[i].complextab = '6523';
                        organisms[i].taxid = '6523';
                        break;
                    case 'Arabidopsis thaliana':
                        organisms[i].scientificName = organisms[i].name;
                        organisms[i].nameDetails = '';
                        organisms[i].symbol = 'B';
                        organisms[i].type = 'plant';
                        organisms[i].psi25 = 'arabidopsis_thaliana';
                        organisms[i].psi30 = 'arath';
                        organisms[i].complextab = '3702';
                        organisms[i].taxid = '3702';
                        break;
                    case 'Danio rerio':
                        organisms[i].scientificName = organisms[i].name;
                        organisms[i].nameDetails = '';
                        organisms[i].symbol = 'Z';
                        organisms[i].type = 'animal';
                        organisms[i].psi25 = 'danio_rerio';
                        organisms[i].psi30 = 'danre';
                        organisms[i].complextab = '7955';
                        organisms[i].taxid = '7955';
                        break;
                    case 'Severe acute respiratory syndrome coronavirus':
                        organisms[i].scientificName = organisms[i].name;
                        organisms[i].nameDetails = '';
                        organisms[i].symbol = 'v';
                        organisms[i].type = 'virus';
                        organisms[i].psi25 = 'Human_SARS_coronavirus';
                        organisms[i].psi30 = 'sars-cov';
                        organisms[i].complextab = '694009';
                        organisms[i].taxid = '694009';
                        break;
                    case 'Severe acute respiratory syndrome coronavirus 2':
                        organisms[i].scientificName = organisms[i].name;
                        organisms[i].nameDetails = '';
                        organisms[i].symbol = 'v';
                        organisms[i].type = 'virus';
                        organisms[i].psi25 = 'SARS-CoV-2';
                        organisms[i].psi30 = 'SARS-CoV-2';
                        organisms[i].complextab = '2697049';
                        organisms[i].taxid = '2697049';
                        break;
                    case 'Middle East respiratory syndrome-related coronavirus (isolate United Kingdom/H123990006/2012)':
                        organisms[i].scientificName = 'Middle East respiratory syndrome-related coronavirus';
                        organisms[i].nameDetails = 'isolate United Kingdom/H123990006/2012';
                        organisms[i].symbol = 'v';
                        organisms[i].type = 'virus';
                        organisms[i].psi25 = 'Middle_East_respiratory_syndrome-related_coronavirus';
                        organisms[i].psi30 = 'cvemc';
                        organisms[i].complextab = '1263720';
                        organisms[i].taxid = '1263720';
                        break;
                    case 'Human betacoronavirus 2c EMC/2012':
                        organisms[i].scientificName = organisms[i].name;
                        organisms[i].nameDetails = '';
                        organisms[i].symbol = 'v';
                        organisms[i].type = 'virus';
                        organisms[i].psi25 = 'Human_betacoronavirus_2c_EMC_2012';
                        organisms[i].psi30 = 'cv2ce';
                        organisms[i].complextab = '1235996';
                        organisms[i].taxid = '1235996';
                        break;
                    default:
                        organisms[i].scientificName = organisms[i].name;
                        organisms[i].nameDetails = '';
                        organisms[i].symbol = '?';
                        organisms[i].type = 'none';
                        organisms[i].psi25 = '';
                        organisms[i].psi30 = '';
                        organisms[i].complextab = '';
                        organisms[i].taxid = '';
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
    ComplexOrganismsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'cp-complex-organisms',
            template: __webpack_require__("./src/app/complex/complex-organisms/complex-organisms.component.html"),
            styles: [__webpack_require__("./src/app/complex/complex-organisms/complex-organisms.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_service_complex_portal_service__["a" /* ComplexPortalService */], __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["Title"]])
    ], ComplexOrganismsComponent);
    return ComplexOrganismsComponent;
}());



/***/ }),

/***/ "./src/app/complex/complex-organisms/complex-organisms.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplexOrganismsModule", function() { return ComplexOrganismsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__complex_organism_complex_organism_component__ = __webpack_require__("./src/app/complex/complex-organisms/complex-organism/complex-organism.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__complex_organisms_component__ = __webpack_require__("./src/app/complex/complex-organisms/complex-organisms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_loading_indicators_progress_spinner_progress_spinner_module__ = __webpack_require__("./src/app/shared/loading-indicators/progress-spinner/progress-spinner.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_button__ = __webpack_require__("./node_modules/@angular/material/esm5/button.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ComplexOrganismsModule = /** @class */ (function () {
    function ComplexOrganismsModule() {
    }
    ComplexOrganismsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_4__angular_router__["RouterModule"].forChild([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__complex_organisms_component__["a" /* ComplexOrganismsComponent */] }
                ]),
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_5__shared_loading_indicators_progress_spinner_progress_spinner_module__["a" /* ProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_button__["a" /* MatButtonModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__complex_organisms_component__["a" /* ComplexOrganismsComponent */],
                __WEBPACK_IMPORTED_MODULE_2__complex_organism_complex_organism_component__["a" /* ComplexOrganismComponent */]]
        })
    ], ComplexOrganismsModule);
    return ComplexOrganismsModule;
}());



/***/ }),

/***/ "./src/app/complex/shared/model/complex-organism/complex-organism.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComplexOrganisms; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__complex_results_facets_species_f_model__ = __webpack_require__("./src/app/complex/shared/model/complex-results/facets/species_f.model.ts");
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

var ComplexOrganisms = /** @class */ (function (_super) {
    __extends(ComplexOrganisms, _super);
    function ComplexOrganisms(name, count, scientificName, nameDetails, symbol, type, psi25, psi30, complextab, taxid) {
        var _this = _super.call(this, name, count) || this;
        _this._scientificName = scientificName;
        _this._nameDetails = nameDetails;
        _this._symbol = symbol;
        _this._type = type;
        _this._psi25 = psi25;
        _this._psi30 = psi30;
        _this._complextab = complextab;
        _this._taxid = taxid;
        return _this;
    }
    Object.defineProperty(ComplexOrganisms.prototype, "scientificName", {
        get: function () {
            return this._scientificName;
        },
        set: function (value) {
            this._scientificName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexOrganisms.prototype, "nameDetails", {
        get: function () {
            return this._nameDetails;
        },
        set: function (value) {
            this._nameDetails = value;
        },
        enumerable: true,
        configurable: true
    });
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
    Object.defineProperty(ComplexOrganisms.prototype, "taxid", {
        get: function () {
            return this._taxid;
        },
        set: function (value) {
            this._taxid = value;
        },
        enumerable: true,
        configurable: true
    });
    return ComplexOrganisms;
}(__WEBPACK_IMPORTED_MODULE_0__complex_results_facets_species_f_model__["a" /* SpeciesFacet */]));



/***/ }),

/***/ "./src/app/complex/shared/model/complex-results/facets/species_f.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeciesFacet; });
/**
 * Created by mkoch on 31/10/2016.
 */
var SpeciesFacet = /** @class */ (function () {
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



/***/ })

});
//# sourceMappingURL=complex-organisms.module.chunk.js.map