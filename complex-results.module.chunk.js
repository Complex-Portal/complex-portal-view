webpackJsonp(["complex-results.module"],{

/***/ "./src/app/complex/complex-results/complex-filter/complex-filter.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/complex/complex-results/complex-filter/complex-filter.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"filters row\">\n  <div class=\"columns medium-6\"><h3>Filters</h3></div>\n  <div class=\"columns medium-6\">\n    <div *ngIf=\"anyFiltersSelected()\">\n      <a class=\"button\" (click)=\"resetAllFilters()\"><i class=\"icon icon-functional\" data-icon=\"d\"></i> Reset filters</a>\n    </div>\n  </div>\n  <div class=\"columns medium-12\">\n    <div *ngIf=\"facets.species_f\">\n      <b>Species</b>\n      <ul class=\"no-bullet\">\n        <li *ngFor=\"let facet of facets.species_f\">\n          <div [ngSwitch]=\"isSelected(facet.name, spicesFilter)\">\n            <div *ngSwitchCase=\"true\">\n              <input type=\"checkbox\" #filter value=\"{{facet.name}}\"\n                     (change)=\"changeSpeciesFilter(filter.value, filter.checked)\" checked> {{facet.name}}\n              ({{facet.count}})\n            </div>\n            <div *ngSwitchDefault>\n              <input type=\"checkbox\" #filter value=\"{{facet.name}}\"\n                     (change)=\"changeSpeciesFilter(filter.value, filter.checked)\"> {{facet.name}} ({{facet.count}})\n            </div>\n          </div>\n        </li>\n      </ul>\n    </div>\n\n    <div *ngIf=\"facets.pbiorole_f\">\n      <b>Biological Role</b>\n      <ul class=\"no-bullet\">\n        <li *ngFor=\"let facet of facets.pbiorole_f\">\n          <div [ngSwitch]=\"isSelected(facet.name, bioRoleFilter)\">\n            <div *ngSwitchCase=\"true\">\n              <input type=\"checkbox\" #filter value=\"{{facet.name}}\"\n                     (change)=\"changeBiologicalRoleFilter(filter.value, filter.checked)\" checked> {{facet.name}}\n              ({{facet.count}})\n            </div>\n            <div *ngSwitchDefault>\n              <input type=\"checkbox\" #filter value=\"{{facet.name}}\"\n                     (change)=\"changeBiologicalRoleFilter(filter.value, filter.checked)\"> {{facet.name}}\n              ({{facet.count}})\n            </div>\n          </div>\n        </li>\n      </ul>\n    </div>\n\n\n    <div *ngIf=\"facets.ptype_f\">\n      <b>Interactor Type</b>\n      <ul class=\"no-bullet\">\n        <li *ngFor=\"let facet of facets.ptype_f\">\n          <div [ngSwitch]=\"isSelected(facet.name, interactorTypeFilter)\">\n            <div *ngSwitchCase=\"true\">\n              <input type=\"checkbox\" #filter value=\"{{facet.name}}\"\n                     (change)=\"changeInteractorTypeFilter(filter.value, filter.checked)\" checked> {{facet.name}}\n              ({{facet.count}})\n            </div>\n            <div *ngSwitchDefault>\n              <input type=\"checkbox\" #filter value=\"{{facet.name}}\"\n                     (change)=\"changeInteractorTypeFilter(filter.value, filter.checked)\"> {{facet.name}}\n              ({{facet.count}})\n            </div>\n          </div>\n        </li>\n      </ul>\n    </div>\n    <div *ngIf=\"!facets.species_f && !facets.pbiorole_f && !facets.ptype_f\">\n      <h6>No filters available</h6>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/complex/complex-results/complex-filter/complex-filter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComplexFilterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_model_complex_results_facets_model__ = __webpack_require__("./src/app/complex/shared/model/complex-results/facets.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_google_analytics_service_google_analytics_service__ = __webpack_require__("./src/app/shared/google-analytics/service/google-analytics.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ComplexFilterComponent = /** @class */ (function () {
    function ComplexFilterComponent(googleAnalyticsService) {
        this.googleAnalyticsService = googleAnalyticsService;
        this.onSpicesFilterChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onBiologicalRoleFilterChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onInteractorTyoeFilterChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onResetAllFilters = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ComplexFilterComponent.prototype.ngOnInit = function () {
    };
    /**
     *
     * @param filter selected filter
     * @param status status if selected filter has been added or removed
     */
    ComplexFilterComponent.prototype.changeSpeciesFilter = function (filter, status) {
        if (status) {
            this.spicesFilter.push(filter);
            this.googleAnalyticsService.fireAddedFilterEvent(filter);
        }
        else {
            this.spicesFilter.splice(this.spicesFilter.indexOf(filter), 1);
            this.googleAnalyticsService.fireRemovedFilterEvent(filter);
        }
        this.onSpicesFilterChanged.emit(this.spicesFilter);
    };
    /**
     *
     * @param filter selected filter
     * @param status status if selected filter has been added or removed
     */
    ComplexFilterComponent.prototype.changeBiologicalRoleFilter = function (filter, status) {
        if (status) {
            this.bioRoleFilter.push(filter);
            this.googleAnalyticsService.fireAddedFilterEvent(filter);
        }
        else {
            this.bioRoleFilter.splice(this.bioRoleFilter.indexOf(filter), 1);
            this.googleAnalyticsService.fireRemovedFilterEvent(filter);
        }
        this.onBiologicalRoleFilterChanged.emit(this.bioRoleFilter);
    };
    /**
     *
     * @param filter selected filter
     * @param status status if selected filter has been added or removed
     */
    ComplexFilterComponent.prototype.changeInteractorTypeFilter = function (filter, status) {
        if (status) {
            this.interactorTypeFilter.push(filter);
            this.googleAnalyticsService.fireAddedFilterEvent(filter);
        }
        else {
            this.interactorTypeFilter.splice(this.interactorTypeFilter.indexOf(filter), 1);
            this.googleAnalyticsService.fireRemovedFilterEvent(filter);
        }
        this.onInteractorTyoeFilterChanged.emit(this.interactorTypeFilter);
    };
    /**
     * Emit event to parent component to remove all filters
     */
    ComplexFilterComponent.prototype.resetAllFilters = function () {
        this.onResetAllFilters.emit(true);
    };
    /**
     *
     * @returns {boolean} true is any filter array contains an filter
     */
    ComplexFilterComponent.prototype.anyFiltersSelected = function () {
        return (this._spicesFilter.length !== 0 || this._bioRoleFilter.length !== 0 || this._interactorTypeFilter.length !== 0);
    };
    /**
     *
     * @param element filter to check if already selected
     * @param filter selected filters
     * @returns {boolean} true if filter is already in selected filters
     */
    ComplexFilterComponent.prototype.isSelected = function (element, filter) {
        return filter.indexOf(element) !== -1;
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ComplexFilterComponent.prototype, "onSpicesFilterChanged", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ComplexFilterComponent.prototype, "onBiologicalRoleFilterChanged", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ComplexFilterComponent.prototype, "onInteractorTyoeFilterChanged", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ComplexFilterComponent.prototype, "onResetAllFilters", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__shared_model_complex_results_facets_model__["a" /* Facets */]),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_model_complex_results_facets_model__["a" /* Facets */]])
    ], ComplexFilterComponent.prototype, "facets", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], ComplexFilterComponent.prototype, "spicesFilter", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], ComplexFilterComponent.prototype, "bioRoleFilter", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], ComplexFilterComponent.prototype, "interactorTypeFilter", null);
    ComplexFilterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'cp-complex-filter',
            template: __webpack_require__("./src/app/complex/complex-results/complex-filter/complex-filter.component.html"),
            styles: [__webpack_require__("./src/app/complex/complex-results/complex-filter/complex-filter.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_google_analytics_service_google_analytics_service__["a" /* GoogleAnalyticsService */]])
    ], ComplexFilterComponent);
    return ComplexFilterComponent;
}());



/***/ }),

/***/ "./src/app/complex/complex-results/complex-list/complex-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/complex/complex-results/complex-list/complex-list.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"no-bullet\">\n  <li *ngFor=\"let complex of complexSearch.elements\">\n    <h3><a [routerLink]=\"['/complex', complex.complexAC]\">{{complex.complexName}}</a></h3>\n    <div class=\"description\" style=\"background-color: white\">\n      <b>Complex AC:</b> {{complex.complexAC}} / <b>Organism:</b> ({{complex.organismName}})<br>\n      <b>Description:</b>\n      <div *ngIf=\"complex.description.length <= 250\">\n        {{complex.description}}<a [routerLink]=\"['/complex', complex.complexAC]\">...</a>\n      </div>\n      <div *ngIf=\"complex.description.length > 250\">\n        {{complex.description.substr(0,250)}}<a [routerLink]=\"['/complex', complex.complexAC]\">...</a>\n      </div>\n    </div>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/complex/complex-results/complex-list/complex-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComplexListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_model_complex_results_complex_search_model__ = __webpack_require__("./src/app/complex/shared/model/complex-results/complex-search.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComplexListComponent = /** @class */ (function () {
    function ComplexListComponent() {
    }
    ComplexListComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__shared_model_complex_results_complex_search_model__["a" /* ComplexSearchResult */])
    ], ComplexListComponent.prototype, "complexSearch", void 0);
    ComplexListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'cp-complex-list',
            template: __webpack_require__("./src/app/complex/complex-results/complex-list/complex-list.component.html"),
            styles: [__webpack_require__("./src/app/complex/complex-results/complex-list/complex-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ComplexListComponent);
    return ComplexListComponent;
}());



/***/ }),

/***/ "./src/app/complex/complex-results/complex-paginator/complex-paginator.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/complex/complex-results/complex-paginator/complex-paginator.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <h5 class=\"text-center\">{{currentPageIndex}} of {{lastPageIndex}}</h5>\n  <ul class=\"pagination text-center\" role=\"navigation\" aria-label=\"Pagination\">\n    <li class=\"arrow unavailable\" *ngIf=\"currentPageIndex != 1\" aria-disabled=\"true\"><a\n      (click)=\"getPreviousPage()\">&laquo; Previous</a></li>\n    <ng-container *ngFor=\"let index of pagination\">\n      <li *ngIf=\"index[1] == 'true'\" class=\"current\"><span class=\"show-for-sr\">You're on page</span>{{index[0]}}</li>\n      <li *ngIf=\"index[1] == 'false'\"><a (click)=\"getPage(index[0])\">{{index[0]}}</a></li>\n    </ng-container>\n    <li class=\"arrow\" *ngIf=\"currentPageIndex != lastPageIndex\"><a (click)=\"getNextPage()\">Next &raquo;</a></li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/complex/complex-results/complex-paginator/complex-paginator.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComplexPaginatorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ComplexPaginatorComponent = /** @class */ (function () {
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ComplexPaginatorComponent.prototype, "onPageChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ComplexPaginatorComponent.prototype, "lastPageIndex", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ComplexPaginatorComponent.prototype, "currentPageIndex", null);
    ComplexPaginatorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'cp-complex-paginator',
            template: __webpack_require__("./src/app/complex/complex-results/complex-paginator/complex-paginator.component.html"),
            styles: [__webpack_require__("./src/app/complex/complex-results/complex-paginator/complex-paginator.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ComplexPaginatorComponent);
    return ComplexPaginatorComponent;
}());



/***/ }),

/***/ "./src/app/complex/complex-results/complex-results.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/complex/complex-results/complex-results.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"margin-top-large margin-bottom-large row\">\n  <ng-container *ngIf=\"complexSearch;else loadingSpinner\">\n  <div class=\"columns medium-12\" *ngIf=\"complexSearch.totalNumberOfResults !== 0\">\n    <h2 class=\"padding-left-large\">Total number of results: {{complexSearch.totalNumberOfResults}} </h2>\n    <div class=\"columns medium-4\">\n      <cp-complex-filter *ngIf=\"spicesFilter && bioRoleFilter && interactorTypeFilter\"\n                         [spicesFilter]=\"spicesFilter\"\n                         [bioRoleFilter]=\"bioRoleFilter\"\n                         [interactorTypeFilter]=\"interactorTypeFilter\" [facets]=\"complexSearch.facets\"\n                         (onResetAllFilters)=\"onResetAllFilters()\"\n                         (onSpicesFilterChanged)=\"onSpicesFilterChanged($event)\"\n                         (onBiologicalRoleFilterChanged)=\"onBiologicalRoleFilterChanged($event)\"\n                         (onInteractorTyoeFilterChanged)=\"onInteractorTyoeFilterChanged($event)\">\n      </cp-complex-filter>\n    </div>\n    <div class=\"columns medium-8\">\n      <cp-complex-paginator [currentPageIndex]=\"currentPageIndex\"\n                            [lastPageIndex]=\"lastPageIndex\"\n                            (onPageChange)=\"onPageChange($event)\"></cp-complex-paginator>\n      <cp-complex-list [complexSearch]=\"complexSearch\"></cp-complex-list>\n      <cp-complex-paginator [currentPageIndex]=\"currentPageIndex\"\n                            [lastPageIndex]=\"lastPageIndex\"\n                            (onPageChange)=\"onPageChange($event)\"></cp-complex-paginator>\n    </div>\n  </div>\n  <div class=\"columns medium-12 callout alert\" *ngIf=\"complexSearch.totalNumberOfResults === 0\">\n    <h2>No Complex Portal results found</h2>\n    <h3>We're sorry but we couldn't find anything that matched your search for: <b>{{query}}</b></h3>\n    <h4>Please consider refining your terms:</h4>\n    <ul>\n      <li>Make sure all words are spelled correctly</li>\n      <li>Try different keywords</li>\n      <li>Be more precise: use gene or protein IDs, e.g. Ndc80 or Q04571</li>\n      <li>Remove quotes around phrases to search for each word individually. bike shed will often show more results than\n        \"bike shed\"\n      </li>\n    </ul>\n  </div>\n  </ng-container>\n  <ng-template #loadingSpinner>\n    <cp-progress-spinner [query]=\"query\"></cp-progress-spinner>\n  </ng-template>\n</div>\n"

/***/ }),

/***/ "./src/app/complex/complex-results/complex-results.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComplexResultsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_service_complex_portal_service__ = __webpack_require__("./src/app/complex/shared/service/complex-portal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_loading_indicators_progress_bar_progress_bar_component__ = __webpack_require__("./src/app/shared/loading-indicators/progress-bar/progress-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_google_analytics_service_google_analytics_service__ = __webpack_require__("./src/app/shared/google-analytics/service/google-analytics.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ComplexResultsComponent = /** @class */ (function () {
    function ComplexResultsComponent(route, router, complexPortalService, titleService, googleAnalyticsService) {
        this.route = route;
        this.router = router;
        this.complexPortalService = complexPortalService;
        this.titleService = titleService;
        this.googleAnalyticsService = googleAnalyticsService;
        this._pageSize = 10;
    }
    ComplexResultsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.setTitle('Complex Portal - Results');
        this.route
            .queryParams
            .subscribe(function (queryParams) {
            _this._query = queryParams['query'];
            _this._spicesFilter = queryParams['species'] ? queryParams['species'].split('+') : [];
            _this._bioRoleFilter = queryParams['bioRole'] ? queryParams['bioRole'].split('+') : [];
            _this._interactorTypeFilter = queryParams['interactorType'] ? queryParams['interactorType'].split('+') : [];
            _this._currentPageIndex = queryParams['page'] ? Number(queryParams['page']) : 1;
            // TODO This is out for now, but CP-84 (JIRA )should fix that!!
            // this.pageSize = queryParams['size'] ? Number(queryParams['size']) : 10;
            _this.requestComplexResults();
            document.body.scrollTop = 0;
        });
    };
    ComplexResultsComponent.prototype.ngAfterViewInit = function () {
    };
    ComplexResultsComponent.prototype.requestComplexResults = function () {
        var _this = this;
        this.complexPortalService.findComplex(this.query, this.spicesFilter, this.bioRoleFilter, this.interactorTypeFilter, this.currentPageIndex, this.pageSize).subscribe(function (complexSearch) {
            _this.complexSearch = complexSearch;
            if (_this.complexSearch.totalNumberOfResults !== 0) {
                _this.lastPageIndex = Math.ceil(complexSearch.totalNumberOfResults / _this.pageSize);
            }
            __WEBPACK_IMPORTED_MODULE_3__shared_loading_indicators_progress_bar_progress_bar_component__["a" /* ProgressBarComponent */].hide();
        });
    };
    /**
     * Prepare query params to build new URL after filter or pagination has changed
     */
    ComplexResultsComponent.prototype.reloadPage = function () {
        var queryParams = {};
        queryParams['query'] = this._query;
        queryParams['page'] = this._currentPageIndex;
        if (this._spicesFilter !== undefined && this._spicesFilter.length !== 0) {
            queryParams['species'] = this.prepareFiltersForParams(this.spicesFilter);
        }
        if (this._bioRoleFilter !== undefined && this._bioRoleFilter.length !== 0) {
            queryParams['bioRole'] = this.prepareFiltersForParams(this._bioRoleFilter);
        }
        if (this._interactorTypeFilter !== undefined && this._interactorTypeFilter.length !== 0) {
            queryParams['interactorType'] = this.prepareFiltersForParams(this._interactorTypeFilter);
        }
        this.router.navigate([], {
            queryParams: queryParams
        });
        __WEBPACK_IMPORTED_MODULE_3__shared_loading_indicators_progress_bar_progress_bar_component__["a" /* ProgressBarComponent */].hide();
        // This is a test case event for GA, to monitor if users ever use more then one filter.
        var filterCount = this.getFilterCount();
        if (1 < filterCount) {
            this.googleAnalyticsService.fireMultiFilterEvent(filterCount.toString());
        }
    };
    ComplexResultsComponent.prototype.prepareFiltersForParams = function (filter) {
        return filter.toString().replace(/,/g, '+');
    };
    ComplexResultsComponent.prototype.getFilterCount = function () {
        return this._spicesFilter.length + this._interactorTypeFilter.length + this._bioRoleFilter.length;
    };
    /**
     *
     * @param pageIndex new page index after hitting the paginator to update the URL and reload content
     */
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
    ComplexResultsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'cp-complex-results',
            template: __webpack_require__("./src/app/complex/complex-results/complex-results.component.html"),
            styles: [__webpack_require__("./src/app/complex/complex-results/complex-results.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_2__shared_service_complex_portal_service__["a" /* ComplexPortalService */], __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["Title"],
            __WEBPACK_IMPORTED_MODULE_5__shared_google_analytics_service_google_analytics_service__["a" /* GoogleAnalyticsService */]])
    ], ComplexResultsComponent);
    return ComplexResultsComponent;
}());



/***/ }),

/***/ "./src/app/complex/complex-results/complex-results.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplexResultsModule", function() { return ComplexResultsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__complex_results_component__ = __webpack_require__("./src/app/complex/complex-results/complex-results.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__complex_paginator_complex_paginator_component__ = __webpack_require__("./src/app/complex/complex-results/complex-paginator/complex-paginator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__complex_filter_complex_filter_component__ = __webpack_require__("./src/app/complex/complex-results/complex-filter/complex-filter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__complex_list_complex_list_component__ = __webpack_require__("./src/app/complex/complex-results/complex-list/complex-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_loading_indicators_progress_spinner_progress_spinner_module__ = __webpack_require__("./src/app/shared/loading-indicators/progress-spinner/progress-spinner.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ComplexResultsModule = /** @class */ (function () {
    function ComplexResultsModule() {
    }
    ComplexResultsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
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
    return ComplexResultsModule;
}());



/***/ }),

/***/ "./src/app/complex/shared/model/complex-results/complex-search.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComplexSearchResult; });
var ComplexSearchResult = /** @class */ (function () {
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



/***/ }),

/***/ "./src/app/complex/shared/model/complex-results/facets.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Facets; });
/**
 * Created by mkoch on 31/10/2016.
 */
var Facets = /** @class */ (function () {
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



/***/ })

});
//# sourceMappingURL=complex-results.module.chunk.js.map