"use strict";
(self["webpackChunkcomplex_portal_view"] = self["webpackChunkcomplex_portal_view"] || []).push([["src_app_complex_complex-results_complex-results_module_ts"],{

/***/ 16778:
/*!************************************************************************************!*\
  !*** ./src/app/complex/complex-results/complex-filter/complex-filter.component.ts ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComplexFilterComponent": function() { return /* binding */ ComplexFilterComponent; }
/* harmony export */ });
/* harmony import */ var _Users_susiehuget_Documents_GitHub_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_complex_filter_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./complex-filter.component.html */ 22830);
/* harmony import */ var _complex_filter_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./complex-filter.component.css */ 87165);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _shared_google_analytics_service_analytics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/google-analytics/service/analytics.service */ 96242);
/* harmony import */ var _complex_portal_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../complex-portal-utils */ 82682);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let ComplexFilterComponent = class ComplexFilterComponent {
    constructor(googleAnalyticsService) {
        this.googleAnalyticsService = googleAnalyticsService;
        this.onSpicesFilterChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.onBiologicalRoleFilterChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.onInteractorTypeFilterChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.onResetAllFilters = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    }
    ngOnInit() {
    }
    /**
     *
     * @param filter selected filter
     * @param status status if selected filter has been added or removed
     */
    changeSpeciesFilter(filter, status) {
        if (status) {
            this.spicesFilter.push(filter);
            this.googleAnalyticsService.fireAddedFilterEvent(filter);
        }
        else {
            this.spicesFilter.splice(this.spicesFilter.indexOf(filter), 1);
            this.googleAnalyticsService.fireRemovedFilterEvent(filter);
        }
        this.onSpicesFilterChanged.emit(this.spicesFilter);
    }
    /**
     *
     * @param filter selected filter
     * @param status status if selected filter has been added or removed
     */
    changeBiologicalRoleFilter(filter, status) {
        if (status) {
            this.bioRoleFilter.push(filter);
            this.googleAnalyticsService.fireAddedFilterEvent(filter);
        }
        else {
            this.bioRoleFilter.splice(this.bioRoleFilter.indexOf(filter), 1);
            this.googleAnalyticsService.fireRemovedFilterEvent(filter);
        }
        this.onBiologicalRoleFilterChanged.emit(this.bioRoleFilter);
    }
    /**
     *
     * @param filter selected filter
     * @param status status if selected filter has been added or removed
     */
    changeInteractorTypeFilter(filter, status) {
        if (status) {
            this.interactorTypeFilter.push(filter);
            this.googleAnalyticsService.fireAddedFilterEvent(filter);
        }
        else {
            this.interactorTypeFilter.splice(this.interactorTypeFilter.indexOf(filter), 1);
            this.googleAnalyticsService.fireRemovedFilterEvent(filter);
        }
        this.onInteractorTypeFilterChanged.emit(this.interactorTypeFilter);
    }
    /**
     * Emit event to parent component to remove all filters
     */
    resetAllFilters() {
        this.onResetAllFilters.emit(true);
    }
    /**
     *
     * @returns {boolean} true is any filter array contains an filter
     */
    anyFiltersSelected() {
        return (this._spicesFilter.length !== 0 || this._bioRoleFilter.length !== 0 || this._interactorTypeFilter.length !== 0);
    }
    /**
     *
     * @param element filter to check if already selected
     * @param filter selected filters
     * @returns {boolean} true if filter is already in selected filters
     */
    isSelected(element, filter) {
        return filter.indexOf(element) !== -1;
    }
    get facets() {
        return this._facets;
    }
    set facets(value) {
        this._facets = value;
    }
    get spicesFilter() {
        return this._spicesFilter;
    }
    set spicesFilter(value) {
        this._spicesFilter = value;
    }
    get bioRoleFilter() {
        return this._bioRoleFilter;
    }
    set bioRoleFilter(value) {
        this._bioRoleFilter = value;
    }
    get interactorTypeFilter() {
        return this._interactorTypeFilter;
    }
    set interactorTypeFilter(value) {
        this._interactorTypeFilter = value;
    }
    facetTypeIcon(facet) {
        return (0,_complex_portal_utils__WEBPACK_IMPORTED_MODULE_3__.interactorTypeIcon)(facet.name);
    }
    facetOrganismIcon(facet) {
        return (0,_complex_portal_utils__WEBPACK_IMPORTED_MODULE_3__.organismIcon)(facet);
    }
};
ComplexFilterComponent.ctorParameters = () => [
    { type: _shared_google_analytics_service_analytics_service__WEBPACK_IMPORTED_MODULE_2__.AnalyticsService }
];
ComplexFilterComponent.propDecorators = {
    onSpicesFilterChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output }],
    onBiologicalRoleFilterChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output }],
    onInteractorTypeFilterChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output }],
    onResetAllFilters: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output }],
    facets: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    spicesFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    bioRoleFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    interactorTypeFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
ComplexFilterComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'cp-complex-filter',
        template: _Users_susiehuget_Documents_GitHub_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_complex_filter_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_complex_filter_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], ComplexFilterComponent);



/***/ }),

/***/ 57991:
/*!********************************************************************************!*\
  !*** ./src/app/complex/complex-results/complex-list/complex-list.component.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComplexListComponent": function() { return /* binding */ ComplexListComponent; }
/* harmony export */ });
/* harmony import */ var _Users_susiehuget_Documents_GitHub_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_complex_list_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./complex-list.component.html */ 3122);
/* harmony import */ var _complex_list_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./complex-list.component.css */ 17554);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let ComplexListComponent = class ComplexListComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
ComplexListComponent.ctorParameters = () => [];
ComplexListComponent.propDecorators = {
    complexSearch: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
ComplexListComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'cp-complex-list',
        template: _Users_susiehuget_Documents_GitHub_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_complex_list_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_complex_list_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], ComplexListComponent);



/***/ }),

/***/ 88628:
/*!**************************************************************************************************************************!*\
  !*** ./src/app/complex/complex-results/complex-navigator/complex-navigator-rating/complex-navigator-rating.component.ts ***!
  \**************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComplexNavigatorRatingComponent": function() { return /* binding */ ComplexNavigatorRatingComponent; }
/* harmony export */ });
/* harmony import */ var _Users_susiehuget_Documents_GitHub_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_complex_navigator_rating_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./complex-navigator-rating.component.html */ 45831);
/* harmony import */ var _complex_navigator_rating_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./complex-navigator-rating.component.css */ 2405);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _shared_google_analytics_service_analytics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/google-analytics/service/analytics.service */ 96242);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




const COMPLEX_NAVIGATOR_RATING = 'already_rated';
let ComplexNavigatorRatingComponent = class ComplexNavigatorRatingComponent {
    constructor(analyticsService) {
        this.analyticsService = analyticsService;
        this.hidden = false;
    }
    ngOnInit() {
        this.hidden = localStorage.getItem(COMPLEX_NAVIGATOR_RATING) === 'true' || false;
    }
    selectRating(rating) {
        this.selectedRating = rating;
        // console.log(`Selected rating: ${rating}`);
        this.analyticsService.rateComplexNavigator(this.selectedRating);
        localStorage.setItem(COMPLEX_NAVIGATOR_RATING, 'true');
        setTimeout(() => this.hidden = true, 2000);
    }
};
ComplexNavigatorRatingComponent.ctorParameters = () => [
    { type: _shared_google_analytics_service_analytics_service__WEBPACK_IMPORTED_MODULE_2__.AnalyticsService }
];
ComplexNavigatorRatingComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'cp-complex-navigator-rating',
        template: _Users_susiehuget_Documents_GitHub_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_complex_navigator_rating_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_complex_navigator_rating_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], ComplexNavigatorRatingComponent);



/***/ }),

/***/ 80556:
/*!******************************************************************************************!*\
  !*** ./src/app/complex/complex-results/complex-paginator/complex-paginator.component.ts ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComplexPaginatorComponent": function() { return /* binding */ ComplexPaginatorComponent; }
/* harmony export */ });
/* harmony import */ var _Users_susiehuget_Documents_GitHub_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_complex_paginator_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./complex-paginator.component.html */ 65123);
/* harmony import */ var _complex_paginator_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./complex-paginator.component.css */ 71945);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let ComplexPaginatorComponent = class ComplexPaginatorComponent {
    constructor() {
        this.onPageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() {
        this.updatePaginatior();
    }
    ngOnChanges(changes) {
        this.updatePaginatior();
    }
    updatePaginatior() {
        let start;
        let end;
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
    }
    getFirstPage() {
        this.onPageChange.emit(1);
    }
    getLastPage() {
        this.onPageChange.emit(this.lastPageIndex);
    }
    getPage(pageIndex) {
        this.onPageChange.emit(pageIndex);
    }
    getPreviousPage() {
        this.onPageChange.emit(this.currentPageIndex - 1);
    }
    getNextPage() {
        this.onPageChange.emit(this.currentPageIndex + 1);
    }
    get lastPageIndex() {
        return this._lastPageIndex;
    }
    set lastPageIndex(value) {
        this._lastPageIndex = value;
    }
    get currentPageIndex() {
        return this._currentPageIndex;
    }
    set currentPageIndex(value) {
        this._currentPageIndex = value;
    }
    get pagination() {
        return this._pagination;
    }
    set pagination(value) {
        this._pagination = value;
    }
};
ComplexPaginatorComponent.ctorParameters = () => [];
ComplexPaginatorComponent.propDecorators = {
    onPageChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
    lastPageIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    currentPageIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
ComplexPaginatorComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'cp-complex-paginator',
        template: _Users_susiehuget_Documents_GitHub_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_complex_paginator_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_complex_paginator_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], ComplexPaginatorComponent);



/***/ }),

/***/ 50967:
/*!**********************************************************************!*\
  !*** ./src/app/complex/complex-results/complex-results.component.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComplexResultsComponent": function() { return /* binding */ ComplexResultsComponent; }
/* harmony export */ });
/* harmony import */ var _Users_susiehuget_Documents_GitHub_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_complex_results_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./complex-results.component.html */ 13182);
/* harmony import */ var _complex_results_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./complex-results.component.css */ 23654);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _shared_service_complex_portal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/service/complex-portal.service */ 20658);
/* harmony import */ var _shared_loading_indicators_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/loading-indicators/progress-bar/progress-bar.component */ 57040);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 71570);
/* harmony import */ var _shared_google_analytics_service_analytics_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/google-analytics/service/analytics.service */ 96242);
/* harmony import */ var _shared_model_complex_results_interactor_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/model/complex-results/interactor.model */ 45178);
/* harmony import */ var _shared_notification_service_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/notification/service/notification.service */ 30048);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










let ComplexResultsComponent = class ComplexResultsComponent {
    constructor(route, router, complexPortalService, titleService, googleAnalyticsService, notificationService) {
        this.route = route;
        this.router = router;
        this.complexPortalService = complexPortalService;
        this.titleService = titleService;
        this.googleAnalyticsService = googleAnalyticsService;
        this.notificationService = notificationService;
        this.LIST_VIEW = 'view_list';
        this.COMPLEX_NAVIGATOR_VIEW = 'view_complex_navigator';
        this._allInteractorsInComplexSearch = [];
        this._listPageSize = 15; // This is where we set the size of the pages for list view
        this._navigatorPageSize = 20; // This is where we set the size of the pages for navigator view
    }
    ngOnInit() {
        this.titleService.setTitle('Complex Portal - Results');
        this._allInteractorsInComplexSearch = [];
        this.route.fragment.subscribe(fragment => {
            if (fragment === this.COMPLEX_NAVIGATOR_VIEW) {
                this.DisplayType = this.COMPLEX_NAVIGATOR_VIEW;
            }
            else if (fragment === this.LIST_VIEW) {
                this.DisplayType = this.LIST_VIEW;
            }
            this.route
                .queryParams
                .subscribe(queryParams => {
                this._query = queryParams['query'];
                this._spicesFilter = queryParams['species'] ? queryParams['species'].split('+') : [];
                this._bioRoleFilter = queryParams['bioRole'] ? queryParams['bioRole'].split('+') : [];
                this._interactorTypeFilter = queryParams['interactorType'] ? queryParams['interactorType'].split('+') : [];
                this.currentPageIndex = queryParams['page'] ? Number(queryParams['page']) : 1;
                // TODO This is out for now, but CP-84 (JIRA )should fix that!!
                // this.pageSize = queryParams['size'] ? Number(queryParams['size']) : 10;
                this.requestComplexResults();
                document.body.scrollTop = 0;
            });
        });
    }
    ngAfterViewInit() {
    }
    requestComplexResults() {
        this.complexPortalService.findComplex(this.query, this.spicesFilter, this.bioRoleFilter, this.interactorTypeFilter, this.currentPageIndex, this.pageSize).subscribe(complexSearch => {
            this.complexSearch = complexSearch;
            this._allInteractorsInComplexSearch = [];
            if (this.complexSearch.totalNumberOfResults !== 0) {
                this.lastPageIndex = Math.ceil(complexSearch.totalNumberOfResults / this.pageSize);
                for (let i = 0; i < complexSearch.elements.length; i++) {
                    for (const component of complexSearch.elements[i].interactors) {
                        if (!this._allInteractorsInComplexSearch.some(interactor => interactor.identifier === component.identifier)) {
                            this._allInteractorsInComplexSearch.push(new _shared_model_complex_results_interactor_model__WEBPACK_IMPORTED_MODULE_5__.Interactor(component.identifier, component.identifierLink, component.name, component.description, component.interactorType, component.organismName));
                        }
                    }
                }
            }
            _shared_loading_indicators_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_3__.ProgressBarComponent.hide();
        });
    }
    /**
     * Prepare query params to build new URL after filter or pagination has changed
     */
    reloadPage() {
        const queryParams = {};
        queryParams['query'] = this._query;
        queryParams['page'] = this.currentPageIndex;
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
            queryParams,
            fragment: this.DisplayType
        });
        _shared_loading_indicators_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_3__.ProgressBarComponent.hide();
        // This is a test case event for GA, to monitor if users ever use more then one filter.
        const filterCount = this.getFilterCount();
        if (1 < filterCount) {
            this.googleAnalyticsService.fireMultiFilterEvent(filterCount.toString());
        }
    }
    prepareFiltersForParams(filter) {
        return filter.toString().replace(/,/g, '+');
    }
    getFilterCount() {
        return this._spicesFilter.length + this._interactorTypeFilter.length + this._bioRoleFilter.length;
    }
    /**
     *
     * @param pageIndex new page index after hitting the paginator to update the URL and reload content
     */
    onPageChange(pageIndex) {
        this.currentPageIndex = pageIndex;
        this.reloadPage();
    }
    onResetAllFilters() {
        this.spicesFilter = [];
        this.bioRoleFilter = [];
        this.interactorTypeFilter = [];
        this.currentPageIndex = 1;
        this.reloadPage();
    }
    onSpicesFilterChanged(filter) {
        this.spicesFilter = filter;
        this.currentPageIndex = 1;
        this.reloadPage();
    }
    onBiologicalRoleFilterChanged(filter) {
        this.bioRoleFilter = filter;
        this.currentPageIndex = 1;
        this.reloadPage();
    }
    onInteractorTypeFilterChanged(filter) {
        this.interactorTypeFilter = filter;
        this.currentPageIndex = 1;
        this.reloadPage();
    }
    get query() {
        return this._query;
    }
    set query(value) {
        this._query = value;
    }
    get currentPageIndex() {
        if (this.DisplayType === this.COMPLEX_NAVIGATOR_VIEW) {
            return this._navigatorCurrentPage;
        }
        else {
            return this._listCurrentPage;
        }
    }
    set currentPageIndex(value) {
        if (this.DisplayType === this.COMPLEX_NAVIGATOR_VIEW) {
            this._navigatorCurrentPage = value;
        }
        else {
            this._listCurrentPage = value;
        }
    }
    get complexSearch() {
        return this._complexSearch;
    }
    set complexSearch(value) {
        this._complexSearch = value;
        this.setFirstDisplayType();
    }
    get lastPageIndex() {
        if (this.DisplayType === this.COMPLEX_NAVIGATOR_VIEW) {
            return this._navigatorLastPageIndex;
        }
        else {
            return this._listLastPageIndex;
        }
    }
    set lastPageIndex(value) {
        if (this.DisplayType === this.COMPLEX_NAVIGATOR_VIEW) {
            this._navigatorLastPageIndex = value;
        }
        else {
            this._listLastPageIndex = value;
        }
    }
    get pageSize() {
        if (this.DisplayType === this.COMPLEX_NAVIGATOR_VIEW) {
            return this._navigatorPageSize;
        }
        else {
            return this._listPageSize;
        }
    }
    get spicesFilter() {
        return this._spicesFilter;
    }
    set spicesFilter(value) {
        this._spicesFilter = value;
    }
    get bioRoleFilter() {
        return this._bioRoleFilter;
    }
    set bioRoleFilter(value) {
        this._bioRoleFilter = value;
    }
    get interactorTypeFilter() {
        return this._interactorTypeFilter;
    }
    set interactorTypeFilter(value) {
        this._interactorTypeFilter = value;
    }
    get allInteractorsInComplexSearch() {
        return this._allInteractorsInComplexSearch;
    }
    setListView() {
        this.DisplayType = this.LIST_VIEW;
        this.toast = this.notificationService.complexNavigatorAnnouncement();
        this.reloadPage();
    }
    setComplexNavigatorView() {
        this.DisplayType = this.COMPLEX_NAVIGATOR_VIEW;
        this.reloadPage();
        if (!!this.toast) {
            this.notificationService.closeAnnouncement(this.toast.toastId);
            this.toast = null;
        }
    }
    setFirstDisplayType() {
        if (!this.DisplayType) {
            if (this._complexSearch.totalNumberOfResults === 1) {
                const complexId = this._complexSearch.elements[0].complexAC;
                if (!!complexId) {
                    // For some reason this is needed so the navigate call works
                    this.router.routeReuseStrategy.shouldReuseRoute = function () {
                        return false;
                    };
                    this.router.navigate(['/complex', complexId]);
                }
            }
            else {
                // Currently the list view is the default, as we are just launching the navigator view
                // Later on we can change the default view to be the list or navigator view based on number of results
                if (this._complexSearch.totalNumberOfResults <= this._navigatorPageSize) {
                    this.setComplexNavigatorView();
                }
                else {
                    this.setListView();
                }
            }
        }
    }
};
ComplexResultsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _shared_service_complex_portal_service__WEBPACK_IMPORTED_MODULE_2__.ComplexPortalService },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.Title },
    { type: _shared_google_analytics_service_analytics_service__WEBPACK_IMPORTED_MODULE_4__.AnalyticsService },
    { type: _shared_notification_service_notification_service__WEBPACK_IMPORTED_MODULE_6__.NotificationService }
];
ComplexResultsComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'cp-complex-results',
        template: _Users_susiehuget_Documents_GitHub_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_complex_results_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_complex_results_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], ComplexResultsComponent);



/***/ }),

/***/ 79555:
/*!*******************************************************************!*\
  !*** ./src/app/complex/complex-results/complex-results.module.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComplexResultsModule": function() { return /* binding */ ComplexResultsModule; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _complex_results_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./complex-results.component */ 50967);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _complex_paginator_complex_paginator_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./complex-paginator/complex-paginator.component */ 80556);
/* harmony import */ var _complex_filter_complex_filter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./complex-filter/complex-filter.component */ 16778);
/* harmony import */ var _complex_list_complex_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./complex-list/complex-list.component */ 57991);
/* harmony import */ var _shared_loading_indicators_progress_spinner_progress_spinner_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/loading-indicators/progress-spinner/progress-spinner.module */ 45103);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-markdown */ 36731);
/* harmony import */ var _complex_navigator_complex_navigator_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./complex-navigator/complex-navigator.module */ 60090);
/* harmony import */ var _complex_navigator_complex_navigator_rating_complex_navigator_rating_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./complex-navigator/complex-navigator-rating/complex-navigator-rating.component */ 88628);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











let ComplexResultsModule = class ComplexResultsModule {
};
ComplexResultsModule = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([
                { path: '', component: _complex_results_component__WEBPACK_IMPORTED_MODULE_0__.ComplexResultsComponent },
            ]),
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _shared_loading_indicators_progress_spinner_progress_spinner_module__WEBPACK_IMPORTED_MODULE_4__.ProgressSpinnerModule, ngx_markdown__WEBPACK_IMPORTED_MODULE_10__.MarkdownModule,
            _complex_navigator_complex_navigator_module__WEBPACK_IMPORTED_MODULE_5__.ComplexNavigatorModule
        ],
        exports: [],
        declarations: [_complex_results_component__WEBPACK_IMPORTED_MODULE_0__.ComplexResultsComponent,
            _complex_list_complex_list_component__WEBPACK_IMPORTED_MODULE_3__.ComplexListComponent,
            _complex_filter_complex_filter_component__WEBPACK_IMPORTED_MODULE_2__.ComplexFilterComponent,
            _complex_paginator_complex_paginator_component__WEBPACK_IMPORTED_MODULE_1__.ComplexPaginatorComponent,
            _complex_navigator_complex_navigator_rating_complex_navigator_rating_component__WEBPACK_IMPORTED_MODULE_6__.ComplexNavigatorRatingComponent
        ]
    })
], ComplexResultsModule);



/***/ }),

/***/ 22830:
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/complex/complex-results/complex-filter/complex-filter.component.html ***!
  \*****************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"filters row\">\n  <div class=\"columns medium-6\"><h3>Filters</h3></div>\n  <div class=\"columns medium-6\">\n    <div *ngIf=\"anyFiltersSelected()\">\n      <a class=\"button\" (click)=\"resetAllFilters()\"><i class=\"icon icon-functional\" data-icon=\"d\"></i> Reset filters</a>\n    </div>\n  </div>\n  <div class=\"columns medium-12\">\n    <div *ngIf=\"facets.species_f\">\n      <b>Species</b>\n      <ul class=\"no-bullet\">\n        <li *ngFor=\"let facet of facets.species_f\">\n          <div [ngSwitch]=\"isSelected(facet.name, spicesFilter)\">\n            <div *ngSwitchCase=\"true\">\n              <input type=\"checkbox\" #filter value=\"{{facet.name}}\"\n                     (change)=\"changeSpeciesFilter(filter.value, filter.checked)\" checked>\n              {{ facet.name }}\n              ({{ facet.count }})\n              <i class=\"{{ facetOrganismIcon(facet.name) }}\"\n                 style=\"font-size: large;\"></i>\n            </div>\n            <div *ngSwitchDefault>\n              <input type=\"checkbox\" #filter value=\"{{facet.name}}\"\n                     (change)=\"changeSpeciesFilter(filter.value, filter.checked)\"> {{ facet.name }} ({{ facet.count }})\n\n              <i class=\"{{ facetOrganismIcon(facet.name) }}\"\n                 style=\"font-size: large;\"></i>\n            </div>\n          </div>\n        </li>\n      </ul>\n    </div>\n\n    <div *ngIf=\"facets.pbiorole_f\">\n      <b>Biological Role</b>\n      <ul class=\"no-bullet\">\n        <li *ngFor=\"let facet of facets.pbiorole_f\">\n          <div [ngSwitch]=\"isSelected(facet.name, bioRoleFilter)\">\n            <div *ngSwitchCase=\"true\">\n              <input type=\"checkbox\" #filter value=\"{{facet.name}}\"\n                     (change)=\"changeBiologicalRoleFilter(filter.value, filter.checked)\" checked> {{ facet.name }}\n              ({{ facet.count }})\n            </div>\n            <div *ngSwitchDefault>\n              <input type=\"checkbox\" #filter value=\"{{facet.name}}\"\n                     (change)=\"changeBiologicalRoleFilter(filter.value, filter.checked)\"> {{ facet.name }}\n              ({{ facet.count }})\n            </div>\n          </div>\n        </li>\n      </ul>\n    </div>\n\n\n    <div *ngIf=\"facets.ptype_f\">\n      <b>Interactor Type</b>\n      <ul class=\"no-bullet\">\n        <li *ngFor=\"let facet of facets.ptype_f\">\n          <div [ngSwitch]=\"isSelected(facet.name, interactorTypeFilter)\">\n            <div *ngSwitchCase=\"true\">\n              <input type=\"checkbox\" #filter value=\"{{facet.name}}\"\n                     (change)=\"changeInteractorTypeFilter(filter.value, filter.checked)\" checked> {{ facet.name }}\n              ({{ facet.count }})\n              <i class=\"{{ facetTypeIcon(facet) }}\"\n                 style=\"font-size: large;\"></i>\n            </div>\n            <div *ngSwitchDefault>\n              <input type=\"checkbox\" #filter value=\"{{facet.name}}\"\n                     (change)=\"changeInteractorTypeFilter(filter.value, filter.checked)\"> {{ facet.name }}\n              ({{ facet.count }})\n              <i class=\"{{ facetTypeIcon(facet) }}\"\n                 style=\"font-size: large;\"></i>\n            </div>\n          </div>\n        </li>\n      </ul>\n    </div>\n    <div *ngIf=\"!facets.species_f && !facets.pbiorole_f && !facets.ptype_f\">\n      <h6>No filters available</h6>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ 3122:
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/complex/complex-results/complex-list/complex-list.component.html ***!
  \*************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul class=\"no-bullet\">\n  <li *ngFor=\"let complex of complexSearch.elements\">\n    <h3><a [routerLink]=\"['/complex', complex.complexAC]\">{{ complex.complexName }}</a></h3>\n    <div class=\"description\" style=\"background-color: white\">\n      <b>Complex AC:</b> {{ complex.complexAC }} / <b>Organism:</b> ({{ complex.organismName }})<br>\n      <b>Description:</b>\n      <div *ngIf=\"complex.description.length <= 250\">\n        {{ complex.description }}<a [routerLink]=\"['/complex', complex.complexAC]\">...</a>\n      </div>\n      <div *ngIf=\"complex.description.length > 250\">\n        {{ complex.description.substr(0, 250) }}<a [routerLink]=\"['/complex', complex.complexAC]\">...</a>\n      </div>\n    </div>\n  </li>\n</ul>\n");

/***/ }),

/***/ 45831:
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/complex/complex-results/complex-navigator/complex-navigator-rating/complex-navigator-rating.component.html ***!
  \*******************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ratingComponent\" *ngIf=\"!hidden\">\n  <div class=\"buttonContainer\">\n    <button class=\"close\" id=\"closePopup\" (click)=\"hidden = true\">&times;</button>\n  </div>\n  <div class=\"text\">\n    <p>Tell us about your experience with the Complex Navigator!</p>\n  </div>\n  <div class=\"ratingComponentStars\">\n    <span class=\"star\" [ngClass]=\"{'selected': selectedRating >= 1}\" (click)=\"selectRating(1)\"> &#9733; </span>\n    <span class=\"star\" [ngClass]=\"{'selected': selectedRating >= 2}\" (click)=\"selectRating(2)\"> &#9733; </span>\n    <span class=\"star\" [ngClass]=\"{'selected': selectedRating >= 3}\" (click)=\"selectRating(3)\"> &#9733; </span>\n    <span class=\"star\" [ngClass]=\"{'selected': selectedRating >= 4}\" (click)=\"selectRating(4)\"> &#9733; </span>\n    <span class=\"star\" [ngClass]=\"{'selected': selectedRating >= 5}\" (click)=\"selectRating(5)\"> &#9733; </span>\n  </div>\n</div>\n");

/***/ }),

/***/ 65123:
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/complex/complex-results/complex-paginator/complex-paginator.component.html ***!
  \***********************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <h5 class=\"text-center\">{{ currentPageIndex }} of {{ lastPageIndex }}</h5>\n  <ul class=\"pagination text-center\" role=\"navigation\" aria-label=\"Pagination\">\n    <li class=\"arrow unavailable\" *ngIf=\"currentPageIndex != 1\" aria-disabled=\"true\"><a\n      (click)=\"getFirstPage()\">&Lang; First</a></li>\n    <li class=\"arrow unavailable\" *ngIf=\"currentPageIndex != 1\" aria-disabled=\"true\"><a\n      (click)=\"getPreviousPage()\">&lang; Previous</a></li>\n    <ng-container *ngFor=\"let index of pagination\">\n      <li *ngIf=\"index[1] == 'true'\" class=\"current\"><span class=\"show-for-sr\">You're on page</span>{{ index[0] }}</li>\n      <li *ngIf=\"index[1] == 'false'\"><a (click)=\"getPage(index[0])\">{{ index[0] }}</a></li>\n    </ng-container>\n    <li class=\"arrow\" *ngIf=\"currentPageIndex != lastPageIndex\"><a (click)=\"getNextPage()\">Next &rang;</a></li>\n    <li class=\"arrow\" *ngIf=\"currentPageIndex != lastPageIndex\"><a (click)=\"getLastPage()\">Last &Rang;</a></li>\n  </ul>\n</div>\n");

/***/ }),

/***/ 13182:
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/complex/complex-results/complex-results.component.html ***!
  \***************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"margin-top-large margin-bottom-large row\">\n  <ng-container *ngIf=\"complexSearch;else loadingSpinner\">\n    <div class=\"columns medium-12\" *ngIf=\"complexSearch.totalNumberOfResults !== 0\">\n      <h2 class=\"padding-left-large leftAligned\">Total number of\n        results: {{ complexSearch.totalNumberOfResults }} </h2>\n      <div class=\"row\">\n        <cp-complex-navigator-rating *ngIf=\"DisplayType=== COMPLEX_NAVIGATOR_VIEW\">\n        </cp-complex-navigator-rating>\n        <div class=\"displayButton columns medium-8\" style=\"text-align: center; padding-left: 10px\">\n          <button type=\"submit\" name=\"submit\" class=\"button view-button\"\n                  (click)=\"setListView()\" [ngClass]=\"{'selected': DisplayType === LIST_VIEW}\">\n            View list\n          </button>\n          <button type=\"submit\" name=\"submit\" class=\"button view-button cnButton\"\n                  (click)=\"setComplexNavigatorView()\" [ngClass]=\"{'selected': DisplayType === COMPLEX_NAVIGATOR_VIEW}\">\n            View Complex Navigator\n            <span class=\"new-tag\" [ngClass]=\"{'new-tag-selected': DisplayType === COMPLEX_NAVIGATOR_VIEW}\">NEW!</span>\n          </button>\n        </div>\n      </div>\n      <div class=\"columns medium-4 filterColumn leftAligned\">\n        <cp-complex-filter *ngIf=\"spicesFilter && bioRoleFilter && interactorTypeFilter\"\n                           [spicesFilter]=\"spicesFilter\"\n                           [bioRoleFilter]=\"bioRoleFilter\"\n                           [interactorTypeFilter]=\"interactorTypeFilter\" [facets]=\"complexSearch.facets\"\n                           (onResetAllFilters)=\"onResetAllFilters()\"\n                           (onSpicesFilterChanged)=\"onSpicesFilterChanged($event)\"\n                           (onBiologicalRoleFilterChanged)=\"onBiologicalRoleFilterChanged($event)\"\n                           (onInteractorTypeFilterChanged)=\"onInteractorTypeFilterChanged($event)\">\n        </cp-complex-filter>\n      </div>\n      <div class=\"columns medium-8 changingOfDisplay\">\n        <cp-complex-paginator [currentPageIndex]=\"currentPageIndex\"\n                              [lastPageIndex]=\"lastPageIndex\"\n                              (onPageChange)=\"onPageChange($event)\">\n        </cp-complex-paginator>\n        <cp-complex-list class=\"listOfResults\" *ngIf=\"DisplayType===LIST_VIEW\"\n                         [complexSearch]=\"complexSearch\">\n        </cp-complex-list>\n        <div class=\"ComplexNavigator\" *ngIf=\"DisplayType===COMPLEX_NAVIGATOR_VIEW\"\n             [ngClass]=\"complexSearch.totalNumberOfResults <=6 ? 'smallCN' : ''\">\n          <cp-complex-navigator class=\"Complex-navigator\"\n                                [complexSearch]=\"complexSearch\"\n                                [interactors]=\"allInteractorsInComplexSearch\">\n          </cp-complex-navigator>\n        </div>\n        <cp-complex-paginator [currentPageIndex]=\"currentPageIndex\"\n                              [lastPageIndex]=\"lastPageIndex\"\n                              (onPageChange)=\"onPageChange($event)\"></cp-complex-paginator>\n      </div>\n    </div>\n\n    <div class=\"columns medium-12 callout alert\" *ngIf=\"complexSearch.totalNumberOfResults === 0\">\n      <h2>No Complex Portal results found</h2>\n      <h3>We're sorry but we couldn't find anything that matched your search for: <b>{{ query }}</b></h3>\n      <h4>Please consider refining your terms:</h4>\n      <ul>\n        <li>Make sure all words are spelled correctly</li>\n        <li>Try different keywords</li>\n        <li>Be more precise: use gene or protein IDs, e.g. Ndc80 or Q04571</li>\n        <li>Remove quotes around phrases to search for each word individually. bike shed will often show more results\n          than\n          \"bike shed\"\n        </li>\n      </ul>\n    </div>\n  </ng-container>\n  <ng-template #loadingSpinner>\n    <cp-progress-spinner [query]=\"query\"></cp-progress-spinner>\n  </ng-template>\n</div>\n");

/***/ }),

/***/ 87165:
/*!*************************************************************************************!*\
  !*** ./src/app/complex/complex-results/complex-filter/complex-filter.component.css ***!
  \*************************************************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wbGV4LWZpbHRlci5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 17554:
/*!*********************************************************************************!*\
  !*** ./src/app/complex/complex-results/complex-list/complex-list.component.css ***!
  \*********************************************************************************/
/***/ (function(module) {

module.exports = ".description {\n  width: 100%;\n  text-align: justify;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBsZXgtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJjb21wbGV4LWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXNjcmlwdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuIl19 */";

/***/ }),

/***/ 2405:
/*!***************************************************************************************************************************!*\
  !*** ./src/app/complex/complex-results/complex-navigator/complex-navigator-rating/complex-navigator-rating.component.css ***!
  \***************************************************************************************************************************/
/***/ (function(module) {

module.exports = ".star {\n  font-size: 1.5em;\n  cursor: pointer;\n  color: white;\n}\n\n.star.selected {\n  color: gold;\n}\n\n.ratingComponent {\n  background-color: #007c82;\n  padding: 5px;\n  width: 350px;\n  text-align: center;\n  position: fixed;\n  z-index: 5;\n  top: 54vh;\n  right: -350px;\n  border: 1px solid white;\n  visibility: hidden;\n  animation: ratingComponentMove 1s forwards 7s;\n}\n\n.ratingComponent input {\n  background-color: white;\n  color: #007c82;\n}\n\n.text {\n  display: -webkit-box;\n  color: white;\n  width: 96%;\n  text-align: -webkit-center;\n  padding-left: 10px;\n  margin-bottom: -15px;\n}\n\n@keyframes ratingComponentMove {\n  from {\n    right: -10vw;\n    visibility: visible;\n  }\n  to {\n    right: 4vw;\n    visibility: visible;\n  }\n}\n\n.buttonContainer {\n  width: 100%;\n  height: 1ch;\n  text-align: end;\n  padding-right: 5px;\n}\n\n.close {\n  color: white;\n}\n\n.ratingComponentStars {\n  padding-bottom: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBsZXgtbmF2aWdhdG9yLXJhdGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFVBQVU7RUFDVixTQUFTO0VBQ1QsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsNkNBQTZDO0FBQy9DOztBQUdBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLFVBQVU7RUFDViwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtJQUNaLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsVUFBVTtJQUNWLG1CQUFtQjtFQUNyQjtBQUNGOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6ImNvbXBsZXgtbmF2aWdhdG9yLXJhdGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0YXIge1xuICBmb250LXNpemU6IDEuNWVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnN0YXIuc2VsZWN0ZWQge1xuICBjb2xvcjogZ29sZDtcbn1cblxuLnJhdGluZ0NvbXBvbmVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdjODI7XG4gIHBhZGRpbmc6IDVweDtcbiAgd2lkdGg6IDM1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogNTtcbiAgdG9wOiA1NHZoO1xuICByaWdodDogLTM1MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBhbmltYXRpb246IHJhdGluZ0NvbXBvbmVudE1vdmUgMXMgZm9yd2FyZHMgN3M7XG59XG5cblxuLnJhdGluZ0NvbXBvbmVudCBpbnB1dCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogIzAwN2M4Mjtcbn1cblxuLnRleHQge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogOTYlO1xuICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAtMTVweDtcbn1cblxuQGtleWZyYW1lcyByYXRpbmdDb21wb25lbnRNb3ZlIHtcbiAgZnJvbSB7XG4gICAgcmlnaHQ6IC0xMHZ3O1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIH1cbiAgdG8ge1xuICAgIHJpZ2h0OiA0dnc7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgfVxufVxuXG4uYnV0dG9uQ29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMWNoO1xuICB0ZXh0LWFsaWduOiBlbmQ7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxuLmNsb3NlIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ucmF0aW5nQ29tcG9uZW50U3RhcnMge1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuIl19 */";

/***/ }),

/***/ 71945:
/*!*******************************************************************************************!*\
  !*** ./src/app/complex/complex-results/complex-paginator/complex-paginator.component.css ***!
  \*******************************************************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wbGV4LXBhZ2luYXRvci5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 23654:
/*!***********************************************************************!*\
  !*** ./src/app/complex/complex-results/complex-results.component.css ***!
  \***********************************************************************/
/***/ (function(module) {

module.exports = ".displayButton {\n  float: right;\n}\n\n.view-button {\n  float: unset;\n  width: 225px;\n  margin-right: 5px;\n  background-color: white;\n  color: #555;\n  border: 1px dotted #007c82;\n}\n\n.view-button:hover {\n  color: #007c82;\n  background-color: rgb(234, 234, 234);\n  border: transparent;\n  border-bottom: 1px dotted #007c82;\n}\n\n.selected,\n.selected:hover {\n  background-color: #007c82;\n  color: white;\n  opacity: 100%;\n}\n\n.new-tag {\n  color: red;\n  font-weight: bold;\n  font-size: x-small;\n}\n\n.new-tag-selected {\n  color: yellow;\n}\n\n.filterColumn {\n  width: 15vw;\n}\n\n.leftAligned {\n  --global-margin: calc((100vw - 80rem) / -2);\n  --min-margin-left: calc(-100rem * 0.17);\n  margin-left: max(var(--global-margin), var(--min-margin-left));\n}\n\n.cnButton {\n  outline-offset: 0;\n  outline: rgba(0, 124, 130, 0.75) solid 1px;\n  animation: animateOutline 4s ease infinite;\n}\n\n@keyframes animateOutline {\n  0% {\n    outline-width: 1px;\n    outline-offset: 0;\n    outline-color: rgba(0, 124, 130, 0);\n  }\n\n  10% {\n    outline-color: rgba(0, 124, 130, 0.75);\n  }\n\n  50% {\n    outline-width: 6px;\n    outline-offset: 4px;\n    outline-color: rgba(0, 124, 130, 0);\n  }\n\n  100% {\n    outline-width: 6px;\n    outline-offset: 4px;\n    outline-color: rgba(102, 102, 102, 0);\n  }\n}\n\n.cnButton.selected {\n  animation: none;\n}\n\n/*.ComplexNavigator {*/\n\n/*  width: 71.5vw;*/\n\n/*  float: left;*/\n\n/*  --global-margin: calc((100vw - 80rem) / -2);*/\n\n/*  --min-margin-left: calc(-100rem * 0.17);*/\n\n/*  margin-left: max(var(--global-margin), var(--min-margin-left));*/\n\n/*}*/\n\n.smallCN {\n  width: 55vw;\n  float: right;\n  margin-left: auto;\n}\n\n.changingOfDisplay {\n  /*display: grid;*/\n  float: left;\n  width: 65vw;\n  /*background-color: #0086b4;*/\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBsZXgtcmVzdWx0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsb0NBQW9DO0VBQ3BDLG1CQUFtQjtFQUNuQixpQ0FBaUM7QUFDbkM7O0FBRUE7O0VBRUUseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLDJDQUEyQztFQUMzQyx1Q0FBdUM7RUFDdkMsOERBQThEO0FBQ2hFOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLDBDQUEwQztFQUMxQywwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRTtJQUNFLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsbUNBQW1DO0VBQ3JDOztFQUVBO0lBQ0Usc0NBQXNDO0VBQ3hDOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixtQ0FBbUM7RUFDckM7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHFDQUFxQztFQUN2QztBQUNGOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQSxzQkFBc0I7O0FBQ3RCLG1CQUFtQjs7QUFDbkIsaUJBQWlCOztBQUNqQixpREFBaUQ7O0FBQ2pELDZDQUE2Qzs7QUFDN0Msb0VBQW9FOztBQUNwRSxJQUFJOztBQUVKO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLFdBQVc7RUFDWCw2QkFBNkI7QUFDL0IiLCJmaWxlIjoiY29tcGxleC1yZXN1bHRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlzcGxheUJ1dHRvbiB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLnZpZXctYnV0dG9uIHtcbiAgZmxvYXQ6IHVuc2V0O1xuICB3aWR0aDogMjI1cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6ICM1NTU7XG4gIGJvcmRlcjogMXB4IGRvdHRlZCAjMDA3YzgyO1xufVxuXG4udmlldy1idXR0b246aG92ZXIge1xuICBjb2xvcjogIzAwN2M4MjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNCwgMjM0LCAyMzQpO1xuICBib3JkZXI6IHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkICMwMDdjODI7XG59XG5cbi5zZWxlY3RlZCxcbi5zZWxlY3RlZDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdjODI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgb3BhY2l0eTogMTAwJTtcbn1cblxuLm5ldy10YWcge1xuICBjb2xvcjogcmVkO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiB4LXNtYWxsO1xufVxuXG4ubmV3LXRhZy1zZWxlY3RlZCB7XG4gIGNvbG9yOiB5ZWxsb3c7XG59XG5cbi5maWx0ZXJDb2x1bW4ge1xuICB3aWR0aDogMTV2dztcbn1cblxuLmxlZnRBbGlnbmVkIHtcbiAgLS1nbG9iYWwtbWFyZ2luOiBjYWxjKCgxMDB2dyAtIDgwcmVtKSAvIC0yKTtcbiAgLS1taW4tbWFyZ2luLWxlZnQ6IGNhbGMoLTEwMHJlbSAqIDAuMTcpO1xuICBtYXJnaW4tbGVmdDogbWF4KHZhcigtLWdsb2JhbC1tYXJnaW4pLCB2YXIoLS1taW4tbWFyZ2luLWxlZnQpKTtcbn1cblxuLmNuQnV0dG9uIHtcbiAgb3V0bGluZS1vZmZzZXQ6IDA7XG4gIG91dGxpbmU6IHJnYmEoMCwgMTI0LCAxMzAsIDAuNzUpIHNvbGlkIDFweDtcbiAgYW5pbWF0aW9uOiBhbmltYXRlT3V0bGluZSA0cyBlYXNlIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIGFuaW1hdGVPdXRsaW5lIHtcbiAgMCUge1xuICAgIG91dGxpbmUtd2lkdGg6IDFweDtcbiAgICBvdXRsaW5lLW9mZnNldDogMDtcbiAgICBvdXRsaW5lLWNvbG9yOiByZ2JhKDAsIDEyNCwgMTMwLCAwKTtcbiAgfVxuXG4gIDEwJSB7XG4gICAgb3V0bGluZS1jb2xvcjogcmdiYSgwLCAxMjQsIDEzMCwgMC43NSk7XG4gIH1cblxuICA1MCUge1xuICAgIG91dGxpbmUtd2lkdGg6IDZweDtcbiAgICBvdXRsaW5lLW9mZnNldDogNHB4O1xuICAgIG91dGxpbmUtY29sb3I6IHJnYmEoMCwgMTI0LCAxMzAsIDApO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgb3V0bGluZS13aWR0aDogNnB4O1xuICAgIG91dGxpbmUtb2Zmc2V0OiA0cHg7XG4gICAgb3V0bGluZS1jb2xvcjogcmdiYSgxMDIsIDEwMiwgMTAyLCAwKTtcbiAgfVxufVxuXG4uY25CdXR0b24uc2VsZWN0ZWQge1xuICBhbmltYXRpb246IG5vbmU7XG59XG5cbi8qLkNvbXBsZXhOYXZpZ2F0b3IgeyovXG4vKiAgd2lkdGg6IDcxLjV2dzsqL1xuLyogIGZsb2F0OiBsZWZ0OyovXG4vKiAgLS1nbG9iYWwtbWFyZ2luOiBjYWxjKCgxMDB2dyAtIDgwcmVtKSAvIC0yKTsqL1xuLyogIC0tbWluLW1hcmdpbi1sZWZ0OiBjYWxjKC0xMDByZW0gKiAwLjE3KTsqL1xuLyogIG1hcmdpbi1sZWZ0OiBtYXgodmFyKC0tZ2xvYmFsLW1hcmdpbiksIHZhcigtLW1pbi1tYXJnaW4tbGVmdCkpOyovXG4vKn0qL1xuXG4uc21hbGxDTiB7XG4gIHdpZHRoOiA1NXZ3O1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4uY2hhbmdpbmdPZkRpc3BsYXkge1xuICAvKmRpc3BsYXk6IGdyaWQ7Ki9cbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA2NXZ3O1xuICAvKmJhY2tncm91bmQtY29sb3I6ICMwMDg2YjQ7Ki9cbn1cbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_complex_complex-results_complex-results_module_ts-es2015.js.map