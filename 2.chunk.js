webpackJsonp([2,13],{

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__complex_results_component__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__complex_paginator_complex_paginator_component__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__complex_filter_complex_filter_component__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__complex_list_complex_list_component__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_loading_indicators_progress_spinner_progress_spinner_module__ = __webpack_require__(462);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplexResultsModule", function() { return ComplexResultsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ComplexResultsModule = (function () {
    function ComplexResultsModule() {
    }
    return ComplexResultsModule;
}());
ComplexResultsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_3__angular_router__["RouterModule"].forChild([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_2__complex_results_component__["a" /* ComplexResultsComponent */] },
            ]),
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_7__shared_loading_indicators_progress_spinner_progress_spinner_module__["a" /* ProgressSpinnerModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__complex_results_component__["a" /* ComplexResultsComponent */],
            __WEBPACK_IMPORTED_MODULE_6__complex_list_complex_list_component__["a" /* ComplexListComponent */],
            __WEBPACK_IMPORTED_MODULE_5__complex_filter_complex_filter_component__["a" /* ComplexFilterComponent */],
            __WEBPACK_IMPORTED_MODULE_4__complex_paginator_complex_paginator_component__["a" /* ComplexPaginatorComponent */],
        ]
    })
], ComplexResultsModule);

//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/complex-results.module.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(34);
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

exports = module.exports = __webpack_require__(16)(false);
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

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_model_complex_results_facets_model__ = __webpack_require__(537);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComplexFilterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComplexFilterComponent = (function () {
    function ComplexFilterComponent() {
        this.onSpicesFilterChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onBiologicalRoleFilterChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onInteractorTyoeFilterChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onResetAllFilters = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ComplexFilterComponent.prototype.ngOnInit = function () {
    };
    ComplexFilterComponent.prototype.changeSpeciesFilter = function (filter, status) {
        if (status) {
            this.spicesFilter.push(filter);
        }
        else {
            this.spicesFilter.splice(this.spicesFilter.indexOf(filter), 1);
        }
        this.onSpicesFilterChanged.emit(this.spicesFilter);
    };
    ComplexFilterComponent.prototype.changeBiologicalRoleFilter = function (filter, status) {
        if (status) {
            this.bioRoleFilter.push(filter);
        }
        else {
            this.bioRoleFilter.splice(this.bioRoleFilter.indexOf(filter), 1);
        }
        this.onBiologicalRoleFilterChanged.emit(this.bioRoleFilter);
    };
    ComplexFilterComponent.prototype.changeInteractorTyoeFilter = function (filter, status) {
        if (status) {
            this.interactorTypeFilter.push(filter);
        }
        else {
            this.interactorTypeFilter.splice(this.interactorTypeFilter.indexOf(filter), 1);
        }
        this.onInteractorTyoeFilterChanged.emit(this.interactorTypeFilter);
    };
    ComplexFilterComponent.prototype.resetAllFilters = function () {
        this.onResetAllFilters.emit(true);
    };
    ComplexFilterComponent.prototype.anyFiltersSelected = function () {
        return !!(this._spicesFilter.length !== 0 || this._bioRoleFilter.length !== 0 || this._interactorTypeFilter.length !== 0);
    };
    ComplexFilterComponent.prototype.isSelected = function (elmement, filter) {
        return filter.indexOf(elmement) !== -1;
    };
    Object.defineProperty(ComplexFilterComponent.prototype, "facets", {
        get: function () {
            return this._facets;
        },
        set: function (value) {
            this._facets = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexFilterComponent.prototype, "spicesFilter", {
        get: function () {
            return this._spicesFilter;
        },
        set: function (value) {
            this._spicesFilter = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexFilterComponent.prototype, "bioRoleFilter", {
        get: function () {
            return this._bioRoleFilter;
        },
        set: function (value) {
            this._bioRoleFilter = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexFilterComponent.prototype, "interactorTypeFilter", {
        get: function () {
            return this._interactorTypeFilter;
        },
        set: function (value) {
            this._interactorTypeFilter = value;
        },
        enumerable: true,
        configurable: true
    });
    return ComplexFilterComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], ComplexFilterComponent.prototype, "onSpicesFilterChanged", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], ComplexFilterComponent.prototype, "onBiologicalRoleFilterChanged", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _c || Object)
], ComplexFilterComponent.prototype, "onInteractorTyoeFilterChanged", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _d || Object)
], ComplexFilterComponent.prototype, "onResetAllFilters", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__shared_model_complex_results_facets_model__["a" /* Facets */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_model_complex_results_facets_model__["a" /* Facets */]) === "function" && _e || Object),
    __metadata("design:paramtypes", [typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__shared_model_complex_results_facets_model__["a" /* Facets */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_model_complex_results_facets_model__["a" /* Facets */]) === "function" && _f || Object])
], ComplexFilterComponent.prototype, "facets", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], ComplexFilterComponent.prototype, "spicesFilter", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], ComplexFilterComponent.prototype, "bioRoleFilter", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], ComplexFilterComponent.prototype, "interactorTypeFilter", null);
ComplexFilterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'cp-complex-filter',
        template: __webpack_require__(653),
        styles: [__webpack_require__(597)]
    }),
    __metadata("design:paramtypes", [])
], ComplexFilterComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/complex-filter.component.js.map

/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_model_complex_results_complex_search_model__ = __webpack_require__(536);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComplexListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComplexListComponent = (function () {
    function ComplexListComponent() {
    }
    ComplexListComponent.prototype.ngOnInit = function () {
    };
    return ComplexListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_model_complex_results_complex_search_model__["a" /* ComplexSearchResult */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_model_complex_results_complex_search_model__["a" /* ComplexSearchResult */]) === "function" && _a || Object)
], ComplexListComponent.prototype, "complexSearch", void 0);
ComplexListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'cp-complex-list',
        template: __webpack_require__(654),
        styles: [__webpack_require__(598)]
    }),
    __metadata("design:paramtypes", [])
], ComplexListComponent);

var _a;
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/complex-list.component.js.map

/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComplexPaginatorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ComplexPaginatorComponent = (function () {
    function ComplexPaginatorComponent() {
        this.onPageChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ComplexPaginatorComponent.prototype.ngOnInit = function () {
        this.updatePaginatior();
    };
    ComplexPaginatorComponent.prototype.ngOnChanges = function (changes) {
        this.updatePaginatior();
    };
    ComplexPaginatorComponent.prototype.updatePaginatior = function () {
        var start;
        var end;
        this.pagination = [];
        if (this._lastPageIndex < 5) {
            start = 1;
            end = this._lastPageIndex;
        }
        else {
            if (this._currentPageIndex === 1 || this._currentPageIndex === 2) {
                start = 1;
                end = 5;
            }
            else if (this._currentPageIndex === this._lastPageIndex || this._currentPageIndex === this._lastPageIndex - 1) {
                start = this._lastPageIndex - 4;
                end = this._lastPageIndex;
            }
            else {
                start = this._currentPageIndex - 2;
                end = this._currentPageIndex + 2;
            }
        }
        while (start <= end) {
            if (start === this._currentPageIndex) {
                this._pagination.push([[this._currentPageIndex], [true]]);
            }
            else {
                this._pagination.push([[start], [false]]);
            }
            start++;
        }
    };
    ComplexPaginatorComponent.prototype.getFirstPage = function () {
        this.onPageChange.emit(1);
    };
    ComplexPaginatorComponent.prototype.getLastPage = function () {
        this.onPageChange.emit(this.lastPageIndex);
    };
    ComplexPaginatorComponent.prototype.getPage = function (pageIndex) {
        this.onPageChange.emit(pageIndex);
    };
    ComplexPaginatorComponent.prototype.getPreviousPage = function () {
        this.onPageChange.emit(this.currentPageIndex - 1);
    };
    ComplexPaginatorComponent.prototype.getNextPage = function () {
        this.onPageChange.emit(this.currentPageIndex + 1);
    };
    Object.defineProperty(ComplexPaginatorComponent.prototype, "lastPageIndex", {
        get: function () {
            return this._lastPageIndex;
        },
        set: function (value) {
            this._lastPageIndex = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexPaginatorComponent.prototype, "currentPageIndex", {
        get: function () {
            return this._currentPageIndex;
        },
        set: function (value) {
            this._currentPageIndex = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexPaginatorComponent.prototype, "pagination", {
        get: function () {
            return this._pagination;
        },
        set: function (value) {
            this._pagination = value;
        },
        enumerable: true,
        configurable: true
    });
    return ComplexPaginatorComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], ComplexPaginatorComponent.prototype, "onPageChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], ComplexPaginatorComponent.prototype, "lastPageIndex", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], ComplexPaginatorComponent.prototype, "currentPageIndex", null);
ComplexPaginatorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'cp-complex-paginator',
        template: __webpack_require__(655),
        styles: [__webpack_require__(599)]
    }),
    __metadata("design:paramtypes", [])
], ComplexPaginatorComponent);

var _a;
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/complex-paginator.component.js.map

/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_service_complex_portal_service__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_loading_indicators_progress_bar_progress_bar_component__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComplexResultsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ComplexResultsComponent = (function () {
    function ComplexResultsComponent(route, router, complexPortalService, titleService) {
        this.route = route;
        this.router = router;
        this.complexPortalService = complexPortalService;
        this.titleService = titleService;
        this._pageSize = 10;
    }
    ComplexResultsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.setTitle('Complex Portal - Results');
        this.route
            .queryParams
            .subscribe(function (queryParams) {
            _this._query = queryParams['query'] ? queryParams['query'] : console.log('Error');
            _this._spicesFilter = queryParams['species'] ? queryParams['species'] : [];
            _this._bioRoleFilter = queryParams['bioRole'] ? queryParams['bioRole'] : [];
            _this._interactorTypeFilter = queryParams['interactorType'] ? queryParams['interactorType'] : [];
            _this._currentPageIndex = queryParams['page'] ? Number(queryParams['page']) : 1;
            // TODO This is out for now, but CP-84 should fix that!!
            // this.pageSize = queryParams['size'] ? Number(queryParams['size']) : 10;
            _this.complexPortalService.findComplex(_this.query, _this.spicesFilter, _this.bioRoleFilter, _this.interactorTypeFilter, _this.currentPageIndex, _this.pageSize).subscribe(function (complexSearch) {
                _this.complexSearch = complexSearch;
                if (_this.complexSearch.totalNumberOfResults !== 0) {
                    _this.lastPageIndex = Math.ceil(complexSearch.totalNumberOfResults / _this.pageSize);
                }
                __WEBPACK_IMPORTED_MODULE_3__shared_loading_indicators_progress_bar_progress_bar_component__["a" /* ProgressBarComponent */].hide();
            });
            document.body.scrollTop = 0;
        });
    };
    ComplexResultsComponent.prototype.ngAfterViewInit = function () {
        // ProgressBarComponent.hide();
    };
    ComplexResultsComponent.prototype.reloadPage = function () {
        var queryParams = {};
        queryParams['query'] = this._query;
        queryParams['page'] = this._currentPageIndex;
        this.prepareFiltersForParams(queryParams);
        this.router.navigate([], {
            queryParams: queryParams
        });
        __WEBPACK_IMPORTED_MODULE_3__shared_loading_indicators_progress_bar_progress_bar_component__["a" /* ProgressBarComponent */].hide();
    };
    ComplexResultsComponent.prototype.prepareFiltersForParams = function (queryParams) {
        if (this._spicesFilter !== undefined && this._spicesFilter.length !== 0) {
            queryParams['species'] = this._spicesFilter;
        }
        if (this._bioRoleFilter !== undefined && this._bioRoleFilter.length !== 0) {
            queryParams['bioRole'] = this._bioRoleFilter;
        }
        if (this._interactorTypeFilter !== undefined && this._interactorTypeFilter.length !== 0) {
            queryParams['interactorType'] = this._interactorTypeFilter;
        }
    };
    ComplexResultsComponent.prototype.onPageChange = function (pageIndex) {
        this.currentPageIndex = pageIndex;
        this.reloadPage();
    };
    ComplexResultsComponent.prototype.onResetAllFilters = function () {
        this.spicesFilter = [];
        this.bioRoleFilter = [];
        this.interactorTypeFilter = [];
        this.currentPageIndex = 1;
        this.reloadPage();
    };
    ComplexResultsComponent.prototype.onSpicesFilterChanged = function (filter) {
        this.spicesFilter = filter;
        this.currentPageIndex = 1;
        this.reloadPage();
    };
    ComplexResultsComponent.prototype.onBiologicalRoleFilterChanged = function (filter) {
        this.bioRoleFilter = filter;
        this.currentPageIndex = 1;
        this.reloadPage();
    };
    ComplexResultsComponent.prototype.onInteractorTyoeFilterChanged = function (filter) {
        this.interactorTypeFilter = filter;
        this.currentPageIndex = 1;
        this.reloadPage();
    };
    Object.defineProperty(ComplexResultsComponent.prototype, "query", {
        get: function () {
            return this._query;
        },
        set: function (value) {
            this._query = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexResultsComponent.prototype, "currentPageIndex", {
        get: function () {
            return this._currentPageIndex;
        },
        set: function (value) {
            this._currentPageIndex = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexResultsComponent.prototype, "complexSearch", {
        get: function () {
            return this._complexSearch;
        },
        set: function (value) {
            this._complexSearch = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexResultsComponent.prototype, "lastPageIndex", {
        get: function () {
            return this._lastPageIndex;
        },
        set: function (value) {
            this._lastPageIndex = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexResultsComponent.prototype, "pageSize", {
        get: function () {
            return this._pageSize;
        },
        set: function (value) {
            this._pageSize = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexResultsComponent.prototype, "spicesFilter", {
        get: function () {
            return this._spicesFilter;
        },
        set: function (value) {
            this._spicesFilter = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexResultsComponent.prototype, "bioRoleFilter", {
        get: function () {
            return this._bioRoleFilter;
        },
        set: function (value) {
            this._bioRoleFilter = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexResultsComponent.prototype, "interactorTypeFilter", {
        get: function () {
            return this._interactorTypeFilter;
        },
        set: function (value) {
            this._interactorTypeFilter = value;
        },
        enumerable: true,
        configurable: true
    });
    return ComplexResultsComponent;
}());
ComplexResultsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'cp-complex-results',
        template: __webpack_require__(656),
        styles: [__webpack_require__(600)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_service_complex_portal_service__["a" /* ComplexPortalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_service_complex_portal_service__["a" /* ComplexPortalService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["Title"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["Title"]) === "function" && _d || Object])
], ComplexResultsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/complex-results.component.js.map

/***/ }),

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComplexSearchResult; });
var ComplexSearchResult = (function () {
    function ComplexSearchResult(size, totalNumberOfResults, elements, facets) {
        this._size = size;
        this._totalNumberOfResults = totalNumberOfResults;
        this._elements = elements;
        this._facets = facets;
    }
    Object.defineProperty(ComplexSearchResult.prototype, "size", {
        get: function () {
            return this._size;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexSearchResult.prototype, "totalNumberOfResults", {
        get: function () {
            return this._totalNumberOfResults;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexSearchResult.prototype, "elements", {
        get: function () {
            return this._elements;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexSearchResult.prototype, "facets", {
        get: function () {
            return this._facets;
        },
        enumerable: true,
        configurable: true
    });
    return ComplexSearchResult;
}());

//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/complex-search.model.js.map

/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Facets; });
/**
 * Created by mkoch on 31/10/2016.
 */
var Facets = (function () {
    function Facets(ptype_f, species_f, pbiorole_f) {
        this._ptype_f = ptype_f;
        this._species_f = species_f;
        this._pbiorole_f = pbiorole_f;
    }
    Object.defineProperty(Facets.prototype, "ptype_f", {
        get: function () {
            return this._ptype_f;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Facets.prototype, "species_f", {
        get: function () {
            return this._species_f;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Facets.prototype, "pbiorole_f", {
        get: function () {
            return this._pbiorole_f;
        },
        enumerable: true,
        configurable: true
    });
    return Facets;
}());

//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/facets.model.js.map

/***/ }),

/***/ 597:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 598:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 599:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 600:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 653:
/***/ (function(module, exports) {

module.exports = "<div class=\"filters row\">\n  <div class=\"columns medium-6\"><h3>Filters</h3></div>\n  <div class=\"columns medium-6\">\n    <div *ngIf=\"anyFiltersSelected()\">\n      <a class=\"button\" (click)=\"resetAllFilters()\"><i class=\"icon icon-functional\" data-icon=\"d\"></i> Reset filters</a>\n    </div>\n  </div>\n  <div class=\"columns medium-12\">\n    <div *ngIf=\"facets.species_f\">\n      <b>Species</b>\n      <ul class=\"no-bullet\">\n        <li *ngFor=\"let facet of facets.species_f\">\n          <div [ngSwitch]=\"isSelected(facet.name, spicesFilter)\">\n            <div *ngSwitchCase=\"true\">\n              <input type=\"checkbox\" #filter value=\"{{facet.name}}\"\n                     (change)=\"changeSpeciesFilter(filter.value, filter.checked)\" checked> {{facet.name}}\n              ({{facet.count}})\n            </div>\n            <div *ngSwitchDefault>\n              <input type=\"checkbox\" #filter value=\"{{facet.name}}\"\n                     (change)=\"changeSpeciesFilter(filter.value, filter.checked)\"> {{facet.name}} ({{facet.count}})\n            </div>\n          </div>\n        </li>\n      </ul>\n    </div>\n\n    <div *ngIf=\"facets.pbiorole_f\">\n      <b>Biological Role</b>\n      <ul class=\"no-bullet\">\n        <li *ngFor=\"let facet of facets.pbiorole_f\">\n          <div [ngSwitch]=\"isSelected(facet.name, bioRoleFilter)\">\n            <div *ngSwitchCase=\"true\">\n              <input type=\"checkbox\" #filter value=\"{{facet.name}}\"\n                     (change)=\"changeBiologicalRoleFilter(filter.value, filter.checked)\" checked> {{facet.name}}\n              ({{facet.count}})\n            </div>\n            <div *ngSwitchDefault>\n              <input type=\"checkbox\" #filter value=\"{{facet.name}}\"\n                     (change)=\"changeBiologicalRoleFilter(filter.value, filter.checked)\"> {{facet.name}}\n              ({{facet.count}})\n            </div>\n          </div>\n        </li>\n      </ul>\n    </div>\n\n\n    <div *ngIf=\"facets.ptype_f\">\n      <b>Interactor Type</b>\n      <ul class=\"no-bullet\">\n        <li *ngFor=\"let facet of facets.ptype_f\">\n          <div [ngSwitch]=\"isSelected(facet.name, interactorTypeFilter)\">\n            <div *ngSwitchCase=\"true\">\n              <input type=\"checkbox\" #filter value=\"{{facet.name}}\"\n                     (change)=\"changeInteractorTyoeFilter(filter.value, filter.checked)\" checked> {{facet.name}}\n              ({{facet.count}})\n            </div>\n            <div *ngSwitchDefault>\n              <input type=\"checkbox\" #filter value=\"{{facet.name}}\"\n                     (change)=\"changeInteractorTyoeFilter(filter.value, filter.checked)\"> {{facet.name}}\n              ({{facet.count}})\n            </div>\n          </div>\n        </li>\n      </ul>\n    </div>\n    <div *ngIf=\"!facets.species_f && !facets.pbiorole_f && !facets.ptype_f\">\n      <h6>No filters available</h6>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 654:
/***/ (function(module, exports) {

module.exports = "<ul class=\"no-bullet\">\n  <li *ngFor=\"let complex of complexSearch.elements\">\n    <h3><a [routerLink]=\"['/complex', complex.complexAC]\">{{complex.complexName}}</a></h3>\n    <div class=\"description\" style=\"background-color: white\">\n      <b>Complex AC:</b> {{complex.complexAC}} / <b>Organism:</b> ({{complex.organismName}})<br>\n      <b>Description:</b>\n      <div *ngIf=\"complex.description.length <= 250\">\n        {{complex.description}}<a [routerLink]=\"['/complex', complex.complexAC]\">...</a>\n      </div>\n      <div *ngIf=\"complex.description.length > 250\">\n        {{complex.description.substr(0,250)}}<a [routerLink]=\"['/complex', complex.complexAC]\">...</a>\n      </div>\n    </div>\n  </li>\n</ul>\n"

/***/ }),

/***/ 655:
/***/ (function(module, exports) {

module.exports = "<div>\n  <h5 class=\"text-center\">{{currentPageIndex}} of {{lastPageIndex}}</h5>\n  <ul class=\"pagination text-center\" role=\"navigation\" aria-label=\"Pagination\">\n    <li class=\"arrow unavailable\" *ngIf=\"currentPageIndex != 1\" aria-disabled=\"true\"><a\n      (click)=\"getPreviousPage()\">&laquo; Previous</a></li>\n    <ng-container *ngFor=\"let index of pagination\">\n      <li *ngIf=\"index[1] == 'true'\" class=\"current\"><span class=\"show-for-sr\">You're on page</span>{{index[0]}}</li>\n      <li *ngIf=\"index[1] == 'false'\"><a (click)=\"getPage(index[0])\">{{index[0]}}</a></li>\n    </ng-container>\n    <li class=\"arrow\" *ngIf=\"currentPageIndex != lastPageIndex\"><a (click)=\"getNextPage()\">Next &raquo;</a></li>\n  </ul>\n</div>\n"

/***/ }),

/***/ 656:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <ng-container *ngIf=\"complexSearch;else loadingSpinner\">\n  <div class=\"columns medium-12\" *ngIf=\"complexSearch.totalNumberOfResults !== 0\">\n    <h2 class=\"padding-left-large\">Total number of results: {{complexSearch.totalNumberOfResults}} </h2>\n    <div class=\"columns medium-4\">\n      <cp-complex-filter *ngIf=\"spicesFilter && bioRoleFilter && interactorTypeFilter\"\n                         [spicesFilter]=\"spicesFilter\"\n                         [bioRoleFilter]=\"bioRoleFilter\"\n                         [interactorTypeFilter]=\"interactorTypeFilter\" [facets]=\"complexSearch.facets\"\n                         (onResetAllFilters)=\"onResetAllFilters($event)\"\n                         (onSpicesFilterChanged)=\"onSpicesFilterChanged($event)\"\n                         (onBiologicalRoleFilterChanged)=\"onBiologicalRoleFilterChanged($event)\"\n                         (onInteractorTyoeFilterChanged)=\"onInteractorTyoeFilterChanged($event)\">\n      </cp-complex-filter>\n    </div>\n    <div class=\"columns medium-8\">\n      <cp-complex-paginator [currentPageIndex]=\"currentPageIndex\"\n                            [lastPageIndex]=\"lastPageIndex\"\n                            (onPageChange)=\"onPageChange($event)\"></cp-complex-paginator>\n      <cp-complex-list [complexSearch]=\"complexSearch\">Loading ...</cp-complex-list>\n      <cp-complex-paginator [currentPageIndex]=\"currentPageIndex\"\n                            [lastPageIndex]=\"lastPageIndex\"\n                            (onPageChange)=\"onPageChange($event)\"></cp-complex-paginator>\n    </div>\n  </div>\n  <div class=\"columns medium-12 callout alert\" *ngIf=\"complexSearch.totalNumberOfResults === 0\">\n    <h2>No Complex Portal results found</h2>\n    <h3>We're sorry but we couldn't find anything that matched your search for: <b>{{query}}</b></h3>\n    <h4>Please consider refining your terms:</h4>\n    <ul>\n      <li>Make sure all words are spelled correctly</li>\n      <li>Try different keywords</li>\n      <li>Be more precise: use gene or protein IDs, e.g. Ndc80 or Q04571</li>\n      <li>Remove quotes around phrases to search for each word individually. bike shed will often show more results than\n        \"bike shed\"\n      </li>\n    </ul>\n  </div>\n  </ng-container>\n  <ng-template #loadingSpinner>\n    <cp-progress-spinner [query]=\"query\"></cp-progress-spinner>\n  </ng-template>\n</div>\n"

/***/ })

});
//# sourceMappingURL=2.chunk.js.map