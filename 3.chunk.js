webpackJsonp([3,13],{

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__complex_organism_complex_organism_component__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__complex_organisms_component__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_loading_indicators_progress_spinner_progress_spinner_module__ = __webpack_require__(462);
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

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressSpinnerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgressSpinnerComponent = ProgressSpinnerComponent_1 = (function () {
    function ProgressSpinnerComponent() {
        this._color = 'primary';
        this._mode = 'indeterminate';
        ProgressSpinnerComponent_1.show = false;
    }
    ProgressSpinnerComponent.display = function () {
        ProgressSpinnerComponent_1.show = true;
    };
    ProgressSpinnerComponent.hide = function () {
        setTimeout(function () {
            ProgressSpinnerComponent_1.show = false;
        }, 1000);
    };
    ProgressSpinnerComponent.prototype.ngOnInit = function () {
        var context = this;
        setTimeout(function () {
            context._takesLonger = true;
        }, 5000);
    };
    Object.defineProperty(ProgressSpinnerComponent.prototype, "isDisplayed", {
        get: function () {
            return ProgressSpinnerComponent_1.show;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressSpinnerComponent.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            this._color = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressSpinnerComponent.prototype, "mode", {
        get: function () {
            return this._mode;
        },
        set: function (value) {
            this._mode = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressSpinnerComponent.prototype, "query", {
        get: function () {
            return this._query;
        },
        set: function (value) {
            this._query = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressSpinnerComponent.prototype, "takesLonger", {
        get: function () {
            return this._takesLonger;
        },
        enumerable: true,
        configurable: true
    });
    return ProgressSpinnerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], ProgressSpinnerComponent.prototype, "query", null);
ProgressSpinnerComponent = ProgressSpinnerComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'cp-progress-spinner',
        template: __webpack_require__(465),
        styles: [__webpack_require__(464)]
    }),
    __metadata("design:paramtypes", [])
], ProgressSpinnerComponent);

var ProgressSpinnerComponent_1;
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/progress-spinner.component.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__progress_spinner_component__ = __webpack_require__(461);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressSpinnerModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProgressSpinnerModule = (function () {
    function ProgressSpinnerModule() {
    }
    return ProgressSpinnerModule;
}());
ProgressSpinnerModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdProgressSpinnerModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__progress_spinner_component__["a" /* ProgressSpinnerComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__progress_spinner_component__["a" /* ProgressSpinnerComponent */]
        ]
    })
], ProgressSpinnerModule);

//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/progress-spinner.module.js.map

/***/ }),

/***/ 464:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 465:
/***/ (function(module, exports) {

module.exports = "<div class=\"small-5 small-centered columns\">\n  <md-progress-spinner style=\"margin:0 auto;\"\n                       [attr.color]=\"color\"\n                       [mode]=\"mode\"\n                       [value]=\"0\">\n  </md-progress-spinner>\n  <div style=\"text-align: center\">\n    <h4>Loading {{query}}</h4>\n    <p *ngIf=\"takesLonger\">This takes longer than usual. Bare with us!</p>\n  </div>\n</div>\n"

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
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
    function ComplexOrganismComponent() {
    }
    ComplexOrganismComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(ComplexOrganismComponent.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexOrganismComponent.prototype, "symbol", {
        get: function () {
            return this._symbol;
        },
        set: function (value) {
            this._symbol = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexOrganismComponent.prototype, "count", {
        get: function () {
            return this._count;
        },
        set: function (value) {
            this._count = value;
        },
        enumerable: true,
        configurable: true
    });
    return ComplexOrganismComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], ComplexOrganismComponent.prototype, "name", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], ComplexOrganismComponent.prototype, "symbol", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], ComplexOrganismComponent.prototype, "count", null);
ComplexOrganismComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'cp-complex-organism',
        template: __webpack_require__(648),
        styles: [__webpack_require__(593)]
    }),
    __metadata("design:paramtypes", [])
], ComplexOrganismComponent);

//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/complex-organism.component.js.map

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_loading_indicators_progress_bar_progress_bar_component__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_service_complex_portal_service__ = __webpack_require__(192);
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
    function ComplexOrganismsComponent(complexPortalService) {
        this.complexPortalService = complexPortalService;
        this._query = 'organisms';
    }
    ComplexOrganismsComponent.prototype.ngOnInit = function () {
        var _this = this;
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
        __WEBPACK_IMPORTED_MODULE_1__shared_loading_indicators_progress_bar_progress_bar_component__["a" /* ProgressBarComponent */].hide();
    };
    return ComplexOrganismsComponent;
}());
ComplexOrganismsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'cp-complex-organisms',
        template: __webpack_require__(649),
        styles: [__webpack_require__(594)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_service_complex_portal_service__["a" /* ComplexPortalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_service_complex_portal_service__["a" /* ComplexPortalService */]) === "function" && _a || Object])
], ComplexOrganismsComponent);

var _a;
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/complex-organisms.component.js.map

/***/ }),

/***/ 593:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, ".icon {\n  font-size: 120px;\n  color: #808080;\n  ;\n}\n\n\n\na {\n  text-decoration:none;\n  border-width: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 594:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 648:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"symbol\" style=\"text-align: center; padding-top: 20px\">\n  <div class=\"columns medium-12\" style=\"height: 60px\">\n    <h5>{{name}}</h5>\n    <!--<br>-->\n  </div>\n  <div class=\"columns medium-12\" style=\"text-align: center\">\n    <ng-container *ngIf=\"symbol !== 'x'\">\n      <a [routerLink]=\"['/complex/search']\" [queryParams]=\"{query: '*', species: [name] }\"><span class=\"icon icon-species\" attr.data-icon=\"{{symbol}}\"></span><br>{{count}}</a>\n    </ng-container>\n    <ng-container *ngIf=\"symbol === 'x'\">\n      <a [routerLink]=\"['/complex/search']\" [queryParams]=\"{query: '*', species: [name] }\"><span class=\"icon icon-functional\" attr.data-icon=\"{{symbol}}\"></span><br>{{count}}</a>\n    </ng-container>\n  </div>\n  <div class=\"\" style=\"text-align: center\">\n    <a class=\"tag\">ComplexTab</a>\n    <a class=\"tag\">PSI-XML2.5</a>\n    <a class=\"tag\">PSI-XML3.0</a>\n  </div>\n</div>\n"

/***/ }),

/***/ 649:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"column medium-12\">\n    <ng-container *ngIf=\"specieFacets;else loadingSpinner\">\n      <div  class=\"column medium-3\" *ngFor=\"let specieFacet of specieFacets\">\n        <cp-complex-organism [name]=\"specieFacet.name\" [symbol]=\"specieFacet.symbol\" [count]=\"specieFacet.count\"></cp-complex-organism>\n      </div>\n    </ng-container>\n    <ng-template #loadingSpinner>\n      <cp-progress-spinner [query]=\"query\"></cp-progress-spinner>\n    </ng-template>\n  </div>\n</div>\n"

/***/ })

});
//# sourceMappingURL=3.chunk.js.map