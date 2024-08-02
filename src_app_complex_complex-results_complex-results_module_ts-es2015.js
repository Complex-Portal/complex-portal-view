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
/* harmony import */ var _Users_eragueneau_WebstormProjects_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_complex_filter_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./complex-filter.component.html */ 22830);
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
        return (0,_complex_portal_utils__WEBPACK_IMPORTED_MODULE_3__.interactorTypeIcon)(facet);
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
        template: _Users_eragueneau_WebstormProjects_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_complex_filter_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
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
/* harmony import */ var _Users_eragueneau_WebstormProjects_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_complex_list_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./complex-list.component.html */ 3122);
/* harmony import */ var _complex_list_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./complex-list.component.css */ 17554);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _shared_basket_service_basket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/basket/service/basket.service */ 69510);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let ComplexListComponent = class ComplexListComponent {
    constructor(basketService) {
        this.basketService = basketService;
    }
    ngOnInit() {
    }
    saveComplex(complexName, complexAC, complexOrganism) {
        this.basketService.saveInBasket(complexName, complexAC, complexOrganism);
    }
    removeComplexFromBasket(complexAC) {
        const key = this.basketService.getKey(complexAC);
        this.basketService.deleteFromBasket(key);
    }
    isInBasket(complexAC) {
        return this.basketService.isInBasket(complexAC);
    }
    toggleBasket(complexName, complexAC, complexOrganism) {
        if (this.isInBasket(complexAC)) {
            this.removeComplexFromBasket(complexAC);
        }
        else {
            this.saveComplex(complexName, complexAC, complexOrganism);
        }
    }
};
ComplexListComponent.ctorParameters = () => [
    { type: _shared_basket_service_basket_service__WEBPACK_IMPORTED_MODULE_2__.BasketService }
];
ComplexListComponent.propDecorators = {
    complexSearch: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
ComplexListComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'cp-complex-list',
        template: _Users_eragueneau_WebstormProjects_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_complex_list_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
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
/* harmony import */ var _Users_eragueneau_WebstormProjects_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_complex_navigator_rating_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./complex-navigator-rating.component.html */ 45831);
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
        template: _Users_eragueneau_WebstormProjects_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_complex_navigator_rating_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
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
/* harmony import */ var _Users_eragueneau_WebstormProjects_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_complex_paginator_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./complex-paginator.component.html */ 65123);
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
        template: _Users_eragueneau_WebstormProjects_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_complex_paginator_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
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
/* harmony import */ var _Users_eragueneau_WebstormProjects_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_complex_results_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./complex-results.component.html */ 13182);
/* harmony import */ var _complex_results_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./complex-results.component.css */ 23654);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _shared_service_complex_portal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/service/complex-portal.service */ 20658);
/* harmony import */ var _shared_loading_indicators_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/loading-indicators/progress-bar/progress-bar.component */ 57040);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 71570);
/* harmony import */ var _shared_google_analytics_service_analytics_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/google-analytics/service/analytics.service */ 96242);
/* harmony import */ var _shared_notification_service_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/notification/service/notification.service */ 30048);
/* harmony import */ var _complex_navigator_complex_list_display_buttons_complex_list_display_buttons_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./complex-navigator/complex-list-display-buttons/complex-list-display-buttons.component */ 99915);
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
        this._allInteractorsInComplexSearch = [];
        this._listPageSize = 15; // This is where we set the size of the pages for list view
        this._navigatorPageSize = 20; // This is where we set the size of the pages for navigator view
    }
    ngOnInit() {
        this.titleService.setTitle('Complex Portal - Results');
        this._allInteractorsInComplexSearch = [];
        this.route.fragment.subscribe(fragment => {
            if (fragment === _complex_navigator_complex_list_display_buttons_complex_list_display_buttons_component__WEBPACK_IMPORTED_MODULE_6__.COMPLEX_NAVIGATOR_VIEW) {
                this.DisplayType = _complex_navigator_complex_list_display_buttons_complex_list_display_buttons_component__WEBPACK_IMPORTED_MODULE_6__.COMPLEX_NAVIGATOR_VIEW;
            }
            else if (fragment === _complex_navigator_complex_list_display_buttons_complex_list_display_buttons_component__WEBPACK_IMPORTED_MODULE_6__.LIST_VIEW) {
                this.DisplayType = _complex_navigator_complex_list_display_buttons_complex_list_display_buttons_component__WEBPACK_IMPORTED_MODULE_6__.LIST_VIEW;
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
                            this._allInteractorsInComplexSearch.push(component);
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
        if (this.DisplayType === _complex_navigator_complex_list_display_buttons_complex_list_display_buttons_component__WEBPACK_IMPORTED_MODULE_6__.COMPLEX_NAVIGATOR_VIEW) {
            return this._navigatorCurrentPage;
        }
        else {
            return this._listCurrentPage;
        }
    }
    set currentPageIndex(value) {
        if (this.DisplayType === _complex_navigator_complex_list_display_buttons_complex_list_display_buttons_component__WEBPACK_IMPORTED_MODULE_6__.COMPLEX_NAVIGATOR_VIEW) {
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
        this.processSearchResults();
    }
    get lastPageIndex() {
        if (this.DisplayType === _complex_navigator_complex_list_display_buttons_complex_list_display_buttons_component__WEBPACK_IMPORTED_MODULE_6__.COMPLEX_NAVIGATOR_VIEW) {
            return this._navigatorLastPageIndex;
        }
        else {
            return this._listLastPageIndex;
        }
    }
    set lastPageIndex(value) {
        if (this.DisplayType === _complex_navigator_complex_list_display_buttons_complex_list_display_buttons_component__WEBPACK_IMPORTED_MODULE_6__.COMPLEX_NAVIGATOR_VIEW) {
            this._navigatorLastPageIndex = value;
        }
        else {
            this._listLastPageIndex = value;
        }
    }
    get pageSize() {
        if (this.DisplayType === _complex_navigator_complex_list_display_buttons_complex_list_display_buttons_component__WEBPACK_IMPORTED_MODULE_6__.COMPLEX_NAVIGATOR_VIEW) {
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
    onDisplayTypeChange(displayType) {
        if (this.DisplayType !== displayType) {
            this.DisplayType = displayType;
            if (displayType === _complex_navigator_complex_list_display_buttons_complex_list_display_buttons_component__WEBPACK_IMPORTED_MODULE_6__.LIST_VIEW) {
                this.setListView();
            }
            else if (displayType === _complex_navigator_complex_list_display_buttons_complex_list_display_buttons_component__WEBPACK_IMPORTED_MODULE_6__.COMPLEX_NAVIGATOR_VIEW) {
                this.setComplexNavigatorView();
            }
        }
    }
    isDisplayComplexNavigatorView() {
        return this.DisplayType === _complex_navigator_complex_list_display_buttons_complex_list_display_buttons_component__WEBPACK_IMPORTED_MODULE_6__.COMPLEX_NAVIGATOR_VIEW;
    }
    setListView() {
        this.toast = this.notificationService.complexNavigatorAnnouncement();
        this.reloadPage();
    }
    setComplexNavigatorView() {
        if (!!this.toast) {
            this.notificationService.closeAnnouncement(this.toast.toastId);
            this.toast = null;
        }
        this.reloadPage();
    }
    processSearchResults() {
        // No filters and only one result, then we redirect to complex details page
        // This allows users to enable filters to see even one result without redirecting them out from the results page,
        // but we ensure redirection of a new search has only one result.
        if (this.getFilterCount() === 0 && this._complexSearch.totalNumberOfResults === 1) {
            const complexId = this._complexSearch.elements[0].complexAC;
            if (!!complexId) {
                // For some reason this is needed so the navigate call works
                this.router.routeReuseStrategy.shouldReuseRoute = function () {
                    return false;
                };
                this.router.navigate(['/complex', complexId]);
            }
        }
        else if (!this.DisplayType) {
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
};
ComplexResultsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _shared_service_complex_portal_service__WEBPACK_IMPORTED_MODULE_2__.ComplexPortalService },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.Title },
    { type: _shared_google_analytics_service_analytics_service__WEBPACK_IMPORTED_MODULE_4__.AnalyticsService },
    { type: _shared_notification_service_notification_service__WEBPACK_IMPORTED_MODULE_5__.NotificationService }
];
ComplexResultsComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'cp-complex-results',
        template: _Users_eragueneau_WebstormProjects_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_complex_results_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _complex_results_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./complex-results.component */ 50967);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _complex_paginator_complex_paginator_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./complex-paginator/complex-paginator.component */ 80556);
/* harmony import */ var _complex_filter_complex_filter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./complex-filter/complex-filter.component */ 16778);
/* harmony import */ var _complex_list_complex_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./complex-list/complex-list.component */ 57991);
/* harmony import */ var _shared_loading_indicators_progress_spinner_progress_spinner_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/loading-indicators/progress-spinner/progress-spinner.module */ 45103);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-markdown */ 36731);
/* harmony import */ var _complex_navigator_complex_navigator_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./complex-navigator/complex-navigator.module */ 60090);
/* harmony import */ var _complex_navigator_complex_navigator_rating_complex_navigator_rating_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./complex-navigator/complex-navigator-rating/complex-navigator-rating.component */ 88628);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ 50298);
/* harmony import */ var _complex_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../complex.module */ 26330);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













let ComplexResultsModule = class ComplexResultsModule {
};
ComplexResultsModule = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild([
                { path: '', component: _complex_results_component__WEBPACK_IMPORTED_MODULE_0__.ComplexResultsComponent },
            ]),
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _shared_loading_indicators_progress_spinner_progress_spinner_module__WEBPACK_IMPORTED_MODULE_4__.ProgressSpinnerModule, ngx_markdown__WEBPACK_IMPORTED_MODULE_11__.MarkdownModule,
            _complex_navigator_complex_navigator_module__WEBPACK_IMPORTED_MODULE_5__.ComplexNavigatorModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__.MatTooltipModule, _complex_module__WEBPACK_IMPORTED_MODULE_7__.ComplexModule
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
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"filters row\">\n  <div class=\"columns medium-6\"><h3>Filters</h3></div>\n  <div class=\"columns medium-6\">\n    <div *ngIf=\"anyFiltersSelected()\">\n      <a class=\"button\" (click)=\"resetAllFilters()\"><i class=\"icon icon-functional\" data-icon=\"d\"></i> Reset filters</a>\n    </div>\n  </div>\n  <div class=\"columns medium-12\">\n    <div *ngIf=\"facets.species_f\">\n      <b>Species</b>\n      <ul class=\"no-bullet\">\n        <li *ngFor=\"let facet of facets.species_f\">\n          <label [matTooltip]=\"facet.name\">\n            <input type=\"checkbox\" #filter value=\"{{facet.name}}\"\n                   (change)=\"changeSpeciesFilter(filter.value, filter.checked)\"\n                   [checked]=\"isSelected(facet.name, spicesFilter)\">\n\n            <span>\n              <i *ngIf=\"facetOrganismIcon(facet.name).startsWith('icon'); else img\"\n                 [ngClass]=\"facetOrganismIcon(facet.name)\" style=\"font-size: large;\"></i>\n            <ng-template #img>\n              <img [src]=\"facetOrganismIcon(facet.name)\" alt=\"\" width=\"18px\" height=\"18px\"/>\n            </ng-template>\n            </span>\n\n            {{ facet.name | species:true }} ({{ facet.count }})\n          </label>\n        </li>\n      </ul>\n    </div>\n\n    <div *ngIf=\"facets.pbiorole_f\">\n      <b>Biological Role</b>\n      <ul class=\"no-bullet\">\n        <li *ngFor=\"let facet of facets.pbiorole_f\">\n          <label>\n            <input type=\"checkbox\" #filter value=\"{{facet.name}}\"\n                   (change)=\"changeBiologicalRoleFilter(filter.value, filter.checked)\"\n                   [checked]=\"isSelected(facet.name, bioRoleFilter)\">\n\n            {{ facet.name }} ({{ facet.count }})\n          </label>\n        </li>\n      </ul>\n    </div>\n\n\n    <div *ngIf=\"facets.ptype_f\">\n      <b>Component Type</b>\n      <ul class=\"no-bullet\">\n        <li *ngFor=\"let facet of facets.ptype_f\">\n          <label>\n            <input type=\"checkbox\" #filter value=\"{{facet.name}}\"\n                   (change)=\"changeInteractorTypeFilter(filter.value, filter.checked)\"\n                   [checked]=\"isSelected(facet.name, interactorTypeFilter)\">\n\n            <span >\n              <i [ngClass]=\"facetTypeIcon(facet.name)\" style=\"font-size: large;\"></i>\n            </span>\n            {{ facet.name }} ({{ facet.count }})\n          </label>\n        </li>\n      </ul>\n    </div>\n    <div *ngIf=\"!facets.species_f && !facets.pbiorole_f && !facets.ptype_f\">\n      <h6>No filters available</h6>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ 3122:
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/complex/complex-results/complex-list/complex-list.component.html ***!
  \*************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul class=\"no-bullet\">\n  <li *ngFor=\"let complex of complexSearch.elements\">\n    <div class=\"container\">\n      <div class=\"basketButtonContainer\"\n           [matTooltip]=\"isInBasket(complex.complexAC) ? 'Remove from basket' : 'Add to basket'\">\n        <a class=\"button\" (click)=\"toggleBasket(complex.complexName,complex.complexAC,complex.organismName)\">\n          <i class=\"icon icon-common\" [attr.data-icon]=\"isInBasket(complex.complexAC) ? '':''\"></i>\n        </a>\n      </div>\n      <div class=\"complexesAndDescription\">\n        <h3>\n          <a [routerLink]=\"['/complex', complex.complexAC]\">{{ complex.complexName }}</a></h3>\n        <div class=\"description\" style=\"background-color: white\">\n          <b>Complex AC:</b> {{ complex.complexAC }} · <b>Organism:</b> {{ complex.organismName | species }}<br>\n          <b>Description:</b>\n          <div *ngIf=\"complex.description.length <= 250\">\n            {{ complex.description }}<a [routerLink]=\"['/complex', complex.complexAC]\">...</a>\n          </div>\n          <div *ngIf=\"complex.description.length > 250\">\n            {{ complex.description.substr(0, 250) }}<a [routerLink]=\"['/complex', complex.complexAC]\">...</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </li>\n</ul>\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"margin-top-large margin-bottom-large row expanded\">\n  <ng-container *ngIf=\"complexSearch;else loadingSpinner\">\n    <div class=\"columns medium-12\" *ngIf=\"complexSearch.totalNumberOfResults !== 0\">\n      <h2 class=\"padding-left-large\">Total number of results: {{ complexSearch.totalNumberOfResults }} </h2>\n      <div class=\"row expanded\">\n        <div class=\"columns medium-12\">\n          <cp-complex-navigator-rating *ngIf=\"isDisplayComplexNavigatorView()\">\n          </cp-complex-navigator-rating>\n\n        </div>\n\n        <div class=\"columns medium-12 large-2 no-padding\">\n          <cp-complex-filter *ngIf=\"spicesFilter && bioRoleFilter && interactorTypeFilter\"\n                             [spicesFilter]=\"spicesFilter\"\n                             [bioRoleFilter]=\"bioRoleFilter\"\n                             [interactorTypeFilter]=\"interactorTypeFilter\" [facets]=\"complexSearch.facets\"\n                             (onResetAllFilters)=\"onResetAllFilters()\"\n                             (onSpicesFilterChanged)=\"onSpicesFilterChanged($event)\"\n                             (onBiologicalRoleFilterChanged)=\"onBiologicalRoleFilterChanged($event)\"\n                             (onInteractorTypeFilterChanged)=\"onInteractorTypeFilterChanged($event)\">\n          </cp-complex-filter>\n        </div>\n        <div class=\"columns medium-12 large-10\">\n          <div class=\"paginatorAndDisplay\">\n            <cp-complex-list-display-buttons\n              [displayType]=\"DisplayType\"\n              (displayTypeChange)=\"onDisplayTypeChange($event)\">\n            </cp-complex-list-display-buttons>\n            <cp-complex-paginator class=\"paginator\"\n                                  [currentPageIndex]=\"currentPageIndex\"\n                                  [lastPageIndex]=\"lastPageIndex\"\n                                  (onPageChange)=\"onPageChange($event)\">\n            </cp-complex-paginator>\n          </div>\n          <div class=\"listOfResults\">\n            <cp-complex-list *ngIf=\"!isDisplayComplexNavigatorView()\"\n                             [complexSearch]=\"complexSearch\">\n            </cp-complex-list>\n          </div>\n          <div class=\"ComplexNavigator\" *ngIf=\"isDisplayComplexNavigatorView()\"\n               [ngClass]=\"complexSearch.totalNumberOfResults <=6 ? 'smallCN' : 'largeCN'\">\n            <cp-complex-navigator class=\"Complex-navigator\"\n                                  [complexSearch]=\"complexSearch\"\n                                  [interactors]=\"allInteractorsInComplexSearch\"\n                                  [canAddComplexesToBasket]=\"true\"\n                                  [canRemoveComplexesFromBasket]=\"false\">\n            </cp-complex-navigator>\n          </div>\n          <cp-complex-paginator class=\"paginator\"\n                                [currentPageIndex]=\"currentPageIndex\"\n                                [lastPageIndex]=\"lastPageIndex\"\n                                (onPageChange)=\"onPageChange($event)\"></cp-complex-paginator>\n        </div>\n      </div>\n    </div>\n\n\n    <div class=\"columns medium-12 callout alert\" *ngIf=\"complexSearch.totalNumberOfResults === 0\">\n      <h2>No Complex Portal results found</h2>\n      <h3>We're sorry but we couldn't find anything that matched your search for: <b>{{ query }}</b></h3>\n      <h4>Please consider refining your terms:</h4>\n      <ul>\n        <li>Make sure all words are spelled correctly</li>\n        <li>Try different keywords</li>\n        <li>Be more precise: use gene or protein IDs, e.g. Ndc80 or Q04571</li>\n        <li>Remove quotes around phrases to search for each word individually. bike shed will often show more results\n          than\n          \"bike shed\"\n        </li>\n      </ul>\n    </div>\n  </ng-container>\n  <ng-template #loadingSpinner>\n    <cp-progress-spinner [query]=\"query\"></cp-progress-spinner>\n  </ng-template>\n</div>\n");

/***/ }),

/***/ 87165:
/*!*************************************************************************************!*\
  !*** ./src/app/complex/complex-results/complex-filter/complex-filter.component.css ***!
  \*************************************************************************************/
/***/ (function(module) {

module.exports = "input {\n  margin: 0;\n  vertical-align: middle;\n}\n.icon, img {\n  vertical-align: middle;\n  margin: 0 2px;\n}\nlabel {\n  line-height: 1.8;\n  vertical-align: middle;\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBsZXgtZmlsdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFTO0VBQ1Qsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtBQUNmO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsc0JBQXNCOztBQUV4QiIsImZpbGUiOiJjb21wbGV4LWZpbHRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQge1xuICBtYXJnaW46IDA7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4uaWNvbiwgaW1nIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWFyZ2luOiAwIDJweDtcbn1cblxubGFiZWwge1xuICBsaW5lLWhlaWdodDogMS44O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXG59XG4iXX0= */";

/***/ }),

/***/ 17554:
/*!*********************************************************************************!*\
  !*** ./src/app/complex/complex-results/complex-list/complex-list.component.css ***!
  \*********************************************************************************/
/***/ (function(module) {

module.exports = ".description {\n  width: 90%;\n  text-align: justify;\n}\n\n.container {\n  display: inline-flex;\n}\n\n.complexesAndDescription {\n  padding: 10px;\n  width: 95%\n}\n\n.basketButtonContainer {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin-top: 10px;\n}\n\n.basket-icons {\n  margin-left: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBsZXgtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYjtBQUNGOztBQUVBO0VBQ0UsMEJBQWtCO0VBQWxCLHVCQUFrQjtFQUFsQixrQkFBa0I7RUFDbEIsMkJBQW1CO0VBQW5CLHdCQUFtQjtFQUFuQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6ImNvbXBsZXgtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlc2NyaXB0aW9uIHtcbiAgd2lkdGg6IDkwJTtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xufVxuXG4uY29tcGxleGVzQW5kRGVzY3JpcHRpb24ge1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogOTUlXG59XG5cbi5iYXNrZXRCdXR0b25Db250YWluZXIge1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5iYXNrZXQtaWNvbnMge1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuIl19 */";

/***/ }),

/***/ 2405:
/*!***************************************************************************************************************************!*\
  !*** ./src/app/complex/complex-results/complex-navigator/complex-navigator-rating/complex-navigator-rating.component.css ***!
  \***************************************************************************************************************************/
/***/ (function(module) {

module.exports = ".star {\n  font-size: 1.5em;\n  cursor: pointer;\n  color: white;\n}\n\n.star.selected {\n  color: gold;\n}\n\n.ratingComponent {\n  background-color: var(--primary);\n  padding: 5px;\n  width: 350px;\n  text-align: center;\n  position: fixed;\n  z-index: 5;\n  top: 54vh;\n  right: -350px;\n  border: 1px solid white;\n  visibility: hidden;\n  -webkit-animation: ratingComponentMove 1s forwards 7s;\n          animation: ratingComponentMove 1s forwards 7s;\n}\n\n.ratingComponent input {\n  background-color: white;\n  color: var(--primary);\n}\n\n.text {\n  display: -webkit-box;\n  color: white;\n  width: 96%;\n  text-align: -webkit-center;\n  padding-left: 10px;\n  margin-bottom: -15px;\n}\n\n@-webkit-keyframes ratingComponentMove {\n  from {\n    right: -10vw;\n    visibility: visible;\n  }\n  to {\n    right: 4vw;\n    visibility: visible;\n  }\n}\n\n@keyframes ratingComponentMove {\n  from {\n    right: -10vw;\n    visibility: visible;\n  }\n  to {\n    right: 4vw;\n    visibility: visible;\n  }\n}\n\n.buttonContainer {\n  width: 100%;\n  height: 1ch;\n  text-align: end;\n  padding-right: 5px;\n}\n\n.close {\n  color: white;\n}\n\n.ratingComponentStars {\n  padding-bottom: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBsZXgtbmF2aWdhdG9yLXJhdGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFVBQVU7RUFDVixTQUFTO0VBQ1QsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIscURBQTZDO1VBQTdDLDZDQUE2QztBQUMvQzs7QUFHQTtFQUNFLHVCQUF1QjtFQUN2QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLFVBQVU7RUFDViwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtJQUNaLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsVUFBVTtJQUNWLG1CQUFtQjtFQUNyQjtBQUNGOztBQVRBO0VBQ0U7SUFDRSxZQUFZO0lBQ1osbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsbUJBQW1CO0VBQ3JCO0FBQ0Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckIiLCJmaWxlIjoiY29tcGxleC1uYXZpZ2F0b3ItcmF0aW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RhciB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc3Rhci5zZWxlY3RlZCB7XG4gIGNvbG9yOiBnb2xkO1xufVxuXG4ucmF0aW5nQ29tcG9uZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIHBhZGRpbmc6IDVweDtcbiAgd2lkdGg6IDM1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogNTtcbiAgdG9wOiA1NHZoO1xuICByaWdodDogLTM1MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBhbmltYXRpb246IHJhdGluZ0NvbXBvbmVudE1vdmUgMXMgZm9yd2FyZHMgN3M7XG59XG5cblxuLnJhdGluZ0NvbXBvbmVudCBpbnB1dCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG59XG5cbi50ZXh0IHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDk2JTtcbiAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogLTE1cHg7XG59XG5cbkBrZXlmcmFtZXMgcmF0aW5nQ29tcG9uZW50TW92ZSB7XG4gIGZyb20ge1xuICAgIHJpZ2h0OiAtMTB2dztcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG4gIHRvIHtcbiAgICByaWdodDogNHZ3O1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIH1cbn1cblxuLmJ1dHRvbkNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDFjaDtcbiAgdGV4dC1hbGlnbjogZW5kO1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cbi5jbG9zZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnJhdGluZ0NvbXBvbmVudFN0YXJzIHtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cbiJdfQ== */";

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

module.exports = ".listOfResults {\n  width: 70%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBsZXgtcmVzdWx0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEIiLCJmaWxlIjoiY29tcGxleC1yZXN1bHRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdE9mUmVzdWx0cyB7XG4gIHdpZHRoOiA3MCU7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_complex_complex-results_complex-results_module_ts-es2015.js.map