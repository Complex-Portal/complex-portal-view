(self["webpackChunkcomplex_portal_view"] = self["webpackChunkcomplex_portal_view"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _ontologies_ontologies_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ontologies/ontologies.component */ 81400);
/* harmony import */ var _navigation_about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation/about/about.component */ 7249);
/* harmony import */ var _download_download_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./download/download.component */ 44456);
/* harmony import */ var _navigation_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation/documentation/documentation.component */ 75421);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






const routes = [
    {
        path: 'complex',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_complex_complex_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! app/complex/complex.module */ 26330)).then(m => m.ComplexModule)
    },
    {
        path: 'basket',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_loading-indicators_progress-spinner_progress-spinner_module_ts"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_tooltip_js-src_app_complex_comple-8a6e67"), __webpack_require__.e("default-src_app_complex_complex-results_complex-navigator_complex-navigator_module_ts"), __webpack_require__.e("src_app_basket_basket_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! app/basket/basket.module */ 55801)).then(m => m.BasketModule)
    },
    {
        path: 'about',
        component: _navigation_about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent,
    },
    {
        path: 'download',
        component: _download_download_component__WEBPACK_IMPORTED_MODULE_2__.DownloadComponent
    },
    {
        path: 'ontologies',
        component: _ontologies_ontologies_component__WEBPACK_IMPORTED_MODULE_0__.OntologiesComponent
    },
    {
        path: 'documentation',
        component: _navigation_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_3__.DocumentationComponent
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes, { useHash: false, relativeLinkResolution: 'legacy' })],
    })
], AppRoutingModule);



/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var _Users_eragueneau_WebstormProjects_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./app.component.html */ 75158);
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.css */ 6849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ 92340);
/* harmony import */ var _shared_loading_indicators_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/loading-indicators/progress-bar/progress-bar.component */ 57040);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _shared_basket_service_basket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/basket/service/basket.service */ 69510);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







const { version: version } = __webpack_require__(/*! ../../package.json */ 4147);
const environmentName = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.evn;
let AppComponent = class AppComponent {
    constructor(router, basketService) {
        this.router = router;
        this.basketService = basketService;
        this._basketCount = 0;
        this._complexPortalSupportUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.complex_portal_support_url;
        this._basketCount = this.basketService.getBasketCount();
        this._version = version;
        this._environmentName = environmentName;
    }
    ngOnInit() {
        this.observeRouteChange();
        this.observeBasketChange();
        this.initialiseFoundation();
    }
    ngAfterViewInit() {
        // Init some libs.
        // this.initialiseFoundation();
        // this.initialiseFoundationHacks();
    }
    // Candidate for utils.
    initialiseFoundation() {
        $(document).foundation();
        // @ts-ignore
        $(document).foundationExtendEBI();
    }
    observeRouteChange() {
        // For every router change, we load the ProgressBar by default.
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationEnd)) {
                _shared_loading_indicators_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_3__.ProgressBarComponent.display();
                return;
            }
            window.scrollTo(0, 0);
        });
    }
    observeBasketChange() {
        this.basketService.onBasketCountChanged$.subscribe(count => {
            this._basketCount = count;
            this._onChangeInBasket = true;
            const ctx = this;
            setTimeout(function () {
                ctx._onChangeInBasket = false;
            }, 1000);
        });
    }
    // private initialiseFoundationHacks(): void {
    //   // copied from script.js (ebi framework)
    //   // Assign global nav background images through meta tags
    //   (function assignImageByMetaTags() {
    //     const localMasthead = document.getElementById('local-masthead');
    //     // check for both ebi: and ebi- formatted meta tags
    //     // tslint:disable
    //     let localMastheadColor = document.querySelector("meta[name='ebi:localmasthead-color']")
    //       || document.querySelector("meta[name='ebi-localmasthead-color']");
    //     let localMastheadImage = document.querySelector("meta[name='ebi:localmasthead-image']")
    //       || document.querySelector("meta[name='ebi-localmasthead-image']");
    //     if (localMastheadColor != null) {
    //       localMasthead.style.backgroundColor = localMastheadColor.getAttribute("content");
    //       localMasthead.className += ' meta-background-color';
    //     }
    //     if (localMastheadImage != null) {
    //       localMasthead.style.backgroundImage = 'url(' + localMastheadImage.getAttribute("content") + ')';
    //       localMasthead.className += ' meta-background-image';
    //     }
    //     // tslint:enable
    //   })();
    // }
    get version() {
        return this._version;
    }
    set version(value) {
        this._version = value;
    }
    get environmentName() {
        return this._environmentName;
    }
    set environmentName(value) {
        this._environmentName = value;
    }
    get basketCount() {
        return this._basketCount;
    }
    get complexPortalSupportUrl() {
        return this._complexPortalSupportUrl;
    }
    get onChangeInBasket() {
        return this._onChangeInBasket;
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _shared_basket_service_basket_service__WEBPACK_IMPORTED_MODULE_4__.BasketService }
];
AppComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'cp-root',
        template: _Users_eragueneau_WebstormProjects_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/platform-browser */ 71570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _complex_shared_service_complex_portal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./complex/shared/service/complex-portal.service */ 20658);
/* harmony import */ var _shared_notification_service_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/notification/service/notification.service */ 30048);
/* harmony import */ var _complex_complex_details_complex_function_reactome_crossreferences_service_reactome_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./complex/complex-details/complex-function/reactome-crossreferences/service/reactome.service */ 53764);
/* harmony import */ var _complex_complex_details_complex_references_euro_pmc_crossreferences_service_euro_pmc_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./complex/complex-details/complex-references/euro-pmc-crossreferences/service/euro-pmc.service */ 30582);
/* harmony import */ var _shared_ols_service_ols_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/ols/service/ols.service */ 99948);
/* harmony import */ var _shared_basket_service_basket_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/basket/service/basket.service */ 69510);
/* harmony import */ var _shared_loading_indicators_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/loading-indicators/progress-bar/progress-bar.component */ 57040);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-toastr */ 83315);
/* harmony import */ var _search_local_search_local_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./search/local-search/local-search.component */ 3484);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/platform-browser/animations */ 20718);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-bar */ 365);
/* harmony import */ var _ontologies_ontologies_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ontologies/ontologies.component */ 81400);
/* harmony import */ var _shared_google_analytics_service_analytics_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/google-analytics/service/analytics.service */ 96242);
/* harmony import */ var _shared_local_storage_service_local_storage_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/local-storage/service/local-storage.service */ 88153);
/* harmony import */ var _search_service_search_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./search/service/search.service */ 98377);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ngx-markdown */ 36731);
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/home.module */ 3467);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _navigation_about_about_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./navigation/about/about.component */ 7249);
/* harmony import */ var _download_download_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./download/download.component */ 44456);
/* harmony import */ var _navigation_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./navigation/documentation/documentation.component */ 75421);
/* harmony import */ var ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ngx-page-scroll-core */ 891);
/* harmony import */ var ngx_google_analytics__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ngx-google-analytics */ 14462);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../environments/environment */ 92340);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./footer/footer.component */ 10970);
/* harmony import */ var _complex_shared_pipe_species_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./complex/shared/pipe/species.pipe */ 6183);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* tslint:disable:max-line-length */
































let AppModule = class AppModule {
};
AppModule = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_21__.NgModule)({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
            _shared_loading_indicators_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_8__.ProgressBarComponent,
            _search_local_search_local_search_component__WEBPACK_IMPORTED_MODULE_9__.LocalSearchComponent,
            _ontologies_ontologies_component__WEBPACK_IMPORTED_MODULE_10__.OntologiesComponent,
            _navigation_about_about_component__WEBPACK_IMPORTED_MODULE_15__.AboutComponent,
            _download_download_component__WEBPACK_IMPORTED_MODULE_16__.DownloadComponent,
            _navigation_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_17__.DocumentationComponent,
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_19__.FooterComponent
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__.BrowserModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_23__.RouterModule.forRoot([], { relativeLinkResolution: 'legacy' }),
            _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_25__.HttpClientModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__.NoopAnimationsModule,
            ngx_toastr__WEBPACK_IMPORTED_MODULE_27__.ToastrModule.forRoot(),
            ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_28__.NgxPageScrollCoreModule.forRoot({ scrollOffset: 50 }),
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__.MatProgressBarModule,
            ngx_markdown__WEBPACK_IMPORTED_MODULE_30__.MarkdownModule.forRoot(),
            ngx_google_analytics__WEBPACK_IMPORTED_MODULE_31__.NgxGoogleAnalyticsModule.forRoot(_environments_environment__WEBPACK_IMPORTED_MODULE_18__.environment.analytics_id),
            ngx_google_analytics__WEBPACK_IMPORTED_MODULE_31__.NgxGoogleAnalyticsRouterModule,
            _home_home_module__WEBPACK_IMPORTED_MODULE_14__.HomeModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
        ],
        providers: [
            _complex_shared_service_complex_portal_service__WEBPACK_IMPORTED_MODULE_2__.ComplexPortalService,
            _shared_notification_service_notification_service__WEBPACK_IMPORTED_MODULE_3__.NotificationService,
            _complex_complex_details_complex_function_reactome_crossreferences_service_reactome_service__WEBPACK_IMPORTED_MODULE_4__.ReactomeService,
            _complex_complex_details_complex_references_euro_pmc_crossreferences_service_euro_pmc_service__WEBPACK_IMPORTED_MODULE_5__.EuroPmcService,
            _shared_ols_service_ols_service__WEBPACK_IMPORTED_MODULE_6__.OlsService,
            _shared_basket_service_basket_service__WEBPACK_IMPORTED_MODULE_7__.BasketService,
            _shared_local_storage_service_local_storage_service__WEBPACK_IMPORTED_MODULE_12__.LocalStorageService,
            _complex_shared_pipe_species_pipe__WEBPACK_IMPORTED_MODULE_20__.SpeciesPipe,
            _shared_google_analytics_service_analytics_service__WEBPACK_IMPORTED_MODULE_11__.AnalyticsService,
            _search_service_search_service__WEBPACK_IMPORTED_MODULE_13__.SearchService
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
    })
], AppModule);



/***/ }),

/***/ 53764:
/*!***************************************************************************************************************!*\
  !*** ./src/app/complex/complex-details/complex-function/reactome-crossreferences/service/reactome.service.ts ***!
  \***************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReactomeService": function() { return /* binding */ ReactomeService; }
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 18293);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../environments/environment */ 92340);
/* harmony import */ var rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/observable/throwError */ 76859);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





const baseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.reactome_base_url;
let ReactomeService = class ReactomeService {
    constructor(http) {
        this.http = http;
    }
    /**
     * Returns all related pathways for a given complex stable identifier
     * @param id - a reactome stable identifier
     * @returns {Observable<R|T>}
     */
    findRelatedPathways(id) {
        return this.http.get(baseURL + '/ContentService/data/pathways/low/entity/' + id)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.handleError));
    }
    /**
     * Returns the name of a complex by a given complex stable identifier
     * @param id - a complex stable identifier
     * @returns {Observable<R|T>}
     */
    getComplexName(id) {
        return this.http.get(baseURL + '/ContentService/data/query/' + id + '/displayName', { observe: 'body', responseType: 'text' })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.handleError));
    }
    handleError(err) {
        if (err.error instanceof Error) {
            return (0,rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_2__.throwError)(err);
        }
        else {
            console.error(err.message ? err.message : err.toString());
        }
    }
};
ReactomeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient }
];
ReactomeService = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)()
], ReactomeService);



/***/ }),

/***/ 30582:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/complex/complex-details/complex-references/euro-pmc-crossreferences/service/euro-pmc.service.ts ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EuroPmcService": function() { return /* binding */ EuroPmcService; }
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 18293);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../environments/environment */ 92340);
/* harmony import */ var rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/observable/throwError */ 76859);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





const baseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.europepmc_base_url;
let EuroPmcService = class EuroPmcService {
    constructor(http) {
        this.http = http;
    }
    getPublicationInformation(id) {
        return this.http.get(baseURL + '/webservices/rest/search?query=ext_id:' + id + '%20src:med&format=json')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.handleError));
    }
    handleError(err) {
        if (err.error instanceof Error) {
            return (0,rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_2__.throwError)(err);
        }
        else {
            console.error(err.message ? err.message : err.toString());
        }
    }
};
EuroPmcService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient }
];
EuroPmcService = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)()
], EuroPmcService);



/***/ }),

/***/ 6183:
/*!*****************************************************!*\
  !*** ./src/app/complex/shared/pipe/species.pipe.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpeciesPipe": function() { return /* binding */ SpeciesPipe; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let SpeciesPipe = class SpeciesPipe {
    constructor() {
        this.exceptions = new Map([
            ['Severe acute respiratory syndrome coronavirus', 'SARS-CoV'],
            ['Severe acute respiratory syndrome coronavirus 2', 'SARS-CoV-2'],
            ['Middle East respiratory syndrome-related coronavirus (isolate United Kingdom/H123990006/2012)', 'MERS-CoV'],
        ]);
    }
    transform(value, short = false) {
        const words = value.replace(';', '').split(' ');
        return this.exceptions.get(value) || (short ?
            words[0].charAt(0) + '. ' + words[1] :
            words.slice(0, 2).join(' '));
    }
};
SpeciesPipe = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe)({
        name: 'species',
        pure: true
    })
], SpeciesPipe);



/***/ }),

/***/ 20658:
/*!******************************************************************!*\
  !*** ./src/app/complex/shared/service/complex-portal.service.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComplexPortalService": function() { return /* binding */ ComplexPortalService; }
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 18293);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 33927);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/observable/throwError */ 76859);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ComplexPortalService_1;





const baseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.complex_ws_base_url;
let ComplexPortalService = ComplexPortalService_1 = class ComplexPortalService {
    constructor(http) {
        this.http = http;
    }
    /**
     * Get a specific complex from the WS
     * @param ac
     * @returns {Observable<ComplexDetails>}
     */
    getComplex(ac) {
        const url = `${baseURL}/details/${ac}`;
        return this.http.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.handleError));
    }
    /**
     * Get a specific complex from the WS
     * @param complexAc
     * @returns {Observable<ComplexDetails>}
     */
    getComplexAc(complexAc) {
        const url = `${baseURL}/complex/${complexAc}`;
        return this.http.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.handleError));
    }
    /**
     *
     * @returns {Observable<Facet[]>}
     */
    getComplexOrganisms() {
        return this.findComplex('*').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((complexSearchResult) => {
            return complexSearchResult.facets['species_f'];
        }));
    }
    /**
     * Get a specif complex from the WS
     * @param ac
     * @returns {Observable<any>}
     * TODO: Define MI-JSON maybe, but as we don't work with it and only pass it on we never implemented the model
     */
    getComplexMIJSON(ac) {
        return this.http.get(baseURL + '/export/' + ac).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.handleError));
    }
    findComplexNoFilters(query, currentPageIndex = 1, pageSize = 10, format = 'json') {
        return this.findComplex(query, [], [], [], [], [], currentPageIndex, pageSize, format);
    }
    /**
     * Find a complex based on indexed term
     * @param query
     * @param speciesFilter
     * @param bioRoleFilter
     * @param interactorTypeFilter
     * @param predictedFilter
     * @param evidenceTypeFilter
     * @param currentPageIndex
     * @param pageSize
     * @param format
     * @returns {Observable<ComplexSearchResult>}
     */
    findComplex(query, speciesFilter = [], bioRoleFilter = [], interactorTypeFilter = [], predictedFilter = [], evidenceTypeFilter = [], currentPageIndex = 1, pageSize = 10, format = 'json') {
        let filters = '';
        if (speciesFilter.length !== 0) {
            filters += this.buildFilterParam(ComplexPortalService_1.SPECIES_FACET_FIELD, ComplexPortalService_1.SPECIES_FACET_TAG, speciesFilter);
        }
        if (bioRoleFilter.length !== 0) {
            filters += this.buildFilterParam(ComplexPortalService_1.BIO_ROLE_FACET_FIELD, ComplexPortalService_1.BIO_ROLE_FACET_TAG, bioRoleFilter);
        }
        if (interactorTypeFilter.length !== 0) {
            filters += this.buildFilterParam(ComplexPortalService_1.COMPONENT_TYPE_FACET_FIELD, ComplexPortalService_1.COMPONENT_TYPE_FACET_TAG, interactorTypeFilter);
        }
        if (predictedFilter.length !== 0) {
            filters += this.buildFilterParam(ComplexPortalService_1.PREDICTED_FACET_FIELD, ComplexPortalService_1.PREDICTED_FACET_TAG, predictedFilter);
        }
        if (evidenceTypeFilter.length !== 0) {
            filters += this.buildFilterParam(ComplexPortalService_1.EVIDENCE_TYPE_FACET_FIELD, ComplexPortalService_1.EVIDENCE_TYPE_FACET_TAG, evidenceTypeFilter);
        }
        /** HttpParams is immutable. Its set() method returns a new HttpParams, without mutating the original one **/
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams()
            .set('first', ((currentPageIndex * pageSize) - pageSize).toString())
            .set('number', pageSize.toString())
            .set('format', format)
            .set('facets', ComplexPortalService_1.FACETS)
            .set('filters', filters);
        return this.http.get(baseURL + '/search/' + query, { params: params }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.handleError));
    }
    buildFilterParam(filterField, filterTag, filterValues) {
        // Filters needs to be prefixed with a tag, to be able to exclude them in the facets counts
        return '{!tag=' + filterTag + '}' + filterField + ':(' + '"' + filterValues.join('"OR"') + '"' + '),';
    }
    handleError(err) {
        if (err.error instanceof Error) {
            return (0,rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_4__.throwError)(err);
        }
        else {
            console.error(err.message ? err.message : err.toString());
        }
    }
    getSimplifiedComplex(complexAc) {
        const url = `${baseURL}/complex-simplified/${complexAc}`;
        return this.http.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.handleError));
    }
};
// Tags used by SOLR to exclude the filters from the facets counts.
ComplexPortalService.SPECIES_FACET_TAG = 'SPECIES';
ComplexPortalService.COMPONENT_TYPE_FACET_TAG = 'COMP_TYPE';
ComplexPortalService.BIO_ROLE_FACET_TAG = 'BIO_ROLE';
ComplexPortalService.PREDICTED_FACET_TAG = 'PREDICTED';
ComplexPortalService.EVIDENCE_TYPE_FACET_TAG = 'EVIDENCE_TYPE';
ComplexPortalService.SPECIES_FACET_FIELD = 'species_f';
ComplexPortalService.COMPONENT_TYPE_FACET_FIELD = 'ptype_f';
ComplexPortalService.BIO_ROLE_FACET_FIELD = 'pbiorole_f';
ComplexPortalService.PREDICTED_FACET_FIELD = 'predicted_complex_f';
ComplexPortalService.EVIDENCE_TYPE_FACET_FIELD = 'evidence_type_f';
// Facets need to be prefixed with the exclude field set to the tags used on the filters
ComplexPortalService.FACETS = [
    '{!ex= ' + ComplexPortalService_1.SPECIES_FACET_TAG + '}' + ComplexPortalService_1.SPECIES_FACET_FIELD,
    '{!ex= ' + ComplexPortalService_1.COMPONENT_TYPE_FACET_TAG + '}' + ComplexPortalService_1.COMPONENT_TYPE_FACET_FIELD,
    '{!ex= ' + ComplexPortalService_1.BIO_ROLE_FACET_TAG + '}' + ComplexPortalService_1.BIO_ROLE_FACET_FIELD,
    '{!ex= ' + ComplexPortalService_1.PREDICTED_FACET_TAG + '}' + ComplexPortalService_1.PREDICTED_FACET_FIELD,
    '{!ex= ' + ComplexPortalService_1.EVIDENCE_TYPE_FACET_TAG + '}' + ComplexPortalService_1.EVIDENCE_TYPE_FACET_FIELD
].join(',');
ComplexPortalService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient }
];
ComplexPortalService = ComplexPortalService_1 = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)()
], ComplexPortalService);



/***/ }),

/***/ 44456:
/*!************************************************!*\
  !*** ./src/app/download/download.component.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DownloadComponent": function() { return /* binding */ DownloadComponent; }
/* harmony export */ });
/* harmony import */ var _Users_eragueneau_WebstormProjects_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_download_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./download.component.html */ 30251);
/* harmony import */ var _download_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./download.component.css */ 86433);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _shared_loading_indicators_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/loading-indicators/progress-bar/progress-bar.component */ 57040);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var _shared_google_analytics_service_analytics_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/google-analytics/service/analytics.service */ 96242);
/* harmony import */ var _shared_google_analytics_types_category_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/google-analytics/types/category.enum */ 86335);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 71570);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








let DownloadComponent = class DownloadComponent {
    constructor(googleAnalyticsService, titleService) {
        this.googleAnalyticsService = googleAnalyticsService;
        this.titleService = titleService;
    }
    ngOnInit() {
        this.titleService.setTitle('Complex Portal - Downloads');
        _shared_loading_indicators_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_2__.ProgressBarComponent.display();
    }
    ngAfterViewInit() {
        _shared_loading_indicators_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_2__.ProgressBarComponent.hide();
    }
    goToComplexPSI25() {
        this.googleAnalyticsService.fireDownloadResourceEvent(_shared_google_analytics_types_category_enum__WEBPACK_IMPORTED_MODULE_5__.Category.download, 'PSIXML25');
        window.open(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.complex_psi25, '_blank');
    }
    goToComplexPSI30() {
        this.googleAnalyticsService.fireDownloadResourceEvent(_shared_google_analytics_types_category_enum__WEBPACK_IMPORTED_MODULE_5__.Category.download, 'PSIXML30');
        window.open(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.complex_psi30, '_blank');
    }
    goToComplexTAB() {
        this.googleAnalyticsService.fireDownloadResourceEvent(_shared_google_analytics_types_category_enum__WEBPACK_IMPORTED_MODULE_5__.Category.download, 'ComplexTAB');
        window.open(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.complex_tab, '_blank');
    }
    goToComplexWS() {
        this.googleAnalyticsService.fireDownloadResourceEvent(_shared_google_analytics_types_category_enum__WEBPACK_IMPORTED_MODULE_5__.Category.download, 'ComplexWS');
        window.open(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.complex_ws_base_url, '_blank');
    }
    goToComplexTabeReadMe() {
        this.googleAnalyticsService.fireOpenExternalLinkEvent(_shared_google_analytics_types_category_enum__WEBPACK_IMPORTED_MODULE_5__.Category.download, 'ComplexTABReadMe');
        window.open(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.complex_tab_readme, '_blank');
    }
    goToComplexFTPCurrent() {
        this.googleAnalyticsService.fireOpenExternalLinkEvent(_shared_google_analytics_types_category_enum__WEBPACK_IMPORTED_MODULE_5__.Category.download, 'ComplexCurrentFTP');
        window.open(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.complex_current, '_blank');
    }
};
DownloadComponent.ctorParameters = () => [
    { type: _shared_google_analytics_service_analytics_service__WEBPACK_IMPORTED_MODULE_4__.AnalyticsService },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.Title }
];
DownloadComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'cp-download',
        template: _Users_eragueneau_WebstormProjects_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_download_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_download_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], DownloadComponent);



/***/ }),

/***/ 10970:
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": function() { return /* binding */ FooterComponent; }
/* harmony export */ });
/* harmony import */ var _Users_eragueneau_WebstormProjects_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_footer_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./footer.component.html */ 70090);
/* harmony import */ var _footer_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.component.css */ 63357);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
        $('cp-footer').foundation();
    }
};
FooterComponent.ctorParameters = () => [];
FooterComponent.propDecorators = {
    environmentName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    version: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
FooterComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'cp-local-footer',
        template: _Users_eragueneau_WebstormProjects_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_footer_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_footer_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], FooterComponent);



/***/ }),

/***/ 52003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeRoutingModule": function() { return /* binding */ HomeRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ 45067);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



const routes = [
    {
        path: 'home',
        component: _home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];
let HomeRoutingModule = class HomeRoutingModule {
};
HomeRoutingModule = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)]
    })
], HomeRoutingModule);



/***/ }),

/***/ 45067:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": function() { return /* binding */ HomeComponent; }
/* harmony export */ });
/* harmony import */ var _Users_eragueneau_WebstormProjects_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./home.component.html */ 91659);
/* harmony import */ var _home_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component.css */ 92698);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _shared_loading_indicators_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/loading-indicators/progress-bar/progress-bar.component */ 57040);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 71570);
/* harmony import */ var _shared_google_analytics_service_analytics_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/google-analytics/service/analytics.service */ 96242);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _shared_google_analytics_types_category_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/google-analytics/types/category.enum */ 86335);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ 92340);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









let HomeComponent = class HomeComponent {
    constructor(titleService, router, googleAnalyticsService) {
        this.titleService = titleService;
        this.router = router;
        this.googleAnalyticsService = googleAnalyticsService;
    }
    ngOnInit() {
        this.titleService.setTitle('Complex Portal');
        _shared_loading_indicators_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_2__.ProgressBarComponent.display();
        document.body.scrollTop = 0;
    }
    ngAfterViewInit() {
        _shared_loading_indicators_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_2__.ProgressBarComponent.hide();
    }
    /* Start COVID banner */
    search(speciesName) {
        this.googleAnalyticsService.fireSearchTermEvent(_shared_google_analytics_types_category_enum__WEBPACK_IMPORTED_MODULE_4__.Category.organisms, speciesName);
        this.router.navigate(['complex/search'], { queryParams: { query: '*', species: speciesName, page: 1 } });
    }
    goToComplexSARSCoV2PSI25() {
        this.googleAnalyticsService.fireDownloadResourceEvent(_shared_google_analytics_types_category_enum__WEBPACK_IMPORTED_MODULE_4__.Category.organisms, 'PSIXML25');
        window.open(_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.complex_psi25 + 'SARS-CoV-2', '_blank');
    }
    goToComplexSARSPSI25() {
        this.googleAnalyticsService.fireDownloadResourceEvent(_shared_google_analytics_types_category_enum__WEBPACK_IMPORTED_MODULE_4__.Category.organisms, 'PSIXML25');
        window.open(_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.complex_psi25 + 'Human_SARS_coronavirus', '_blank');
    }
    goToComplexSARSCoV2PSI30() {
        this.googleAnalyticsService.fireDownloadResourceEvent(_shared_google_analytics_types_category_enum__WEBPACK_IMPORTED_MODULE_4__.Category.organisms, 'PSIXML30');
        window.open(_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.complex_psi30 + 'SARS-CoV-2', '_blank');
    }
    goToComplexSARSPSI30() {
        this.googleAnalyticsService.fireDownloadResourceEvent(_shared_google_analytics_types_category_enum__WEBPACK_IMPORTED_MODULE_4__.Category.organisms, 'PSIXML30');
        window.open(_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.complex_psi30 + 'sars-cov', '_blank');
    }
    goToComplexSARSCoV2TAB() {
        this.googleAnalyticsService.fireDownloadResourceEvent(_shared_google_analytics_types_category_enum__WEBPACK_IMPORTED_MODULE_4__.Category.organisms, 'ComplexTAB');
        window.open(_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.complex_tab + '2697049' + '.tsv', '_blank');
    }
    goToComplexSARSTAB() {
        this.googleAnalyticsService.fireDownloadResourceEvent(_shared_google_analytics_types_category_enum__WEBPACK_IMPORTED_MODULE_4__.Category.organisms, 'ComplexTAB');
        window.open(_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.complex_tab + '694009' + '.tsv', '_blank');
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.Title },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _shared_google_analytics_service_analytics_service__WEBPACK_IMPORTED_MODULE_3__.AnalyticsService }
];
HomeComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'cp-home',
        template: _Users_eragueneau_WebstormProjects_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomeComponent);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeModule": function() { return /* binding */ HomeModule; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ 45067);
/* harmony import */ var _tile_menu_tile_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tile-menu/tile-menu.component */ 70430);
/* harmony import */ var _twitter_display_twitter_display_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./twitter-display/twitter-display.component */ 30220);
/* harmony import */ var _newsletter_subscription_newsletter_subscription_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./newsletter-subscription/newsletter-subscription.component */ 81083);
/* harmony import */ var _search_home_search_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../search/home-search/search.component */ 83950);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ 52003);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








let HomeModule = class HomeModule {
};
HomeModule = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__.HomeRoutingModule
        ],
        declarations: [
            _home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent,
            _search_home_search_search_component__WEBPACK_IMPORTED_MODULE_4__.SearchComponent,
            _newsletter_subscription_newsletter_subscription_component__WEBPACK_IMPORTED_MODULE_3__.NewsletterSubscriptionComponent,
            _twitter_display_twitter_display_component__WEBPACK_IMPORTED_MODULE_2__.TwitterDisplayComponent,
            _tile_menu_tile_menu_component__WEBPACK_IMPORTED_MODULE_1__.TileMenuComponent,
        ]
    })
], HomeModule);



/***/ }),

/***/ 81083:
/*!***********************************************************************************!*\
  !*** ./src/app/home/newsletter-subscription/newsletter-subscription.component.ts ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsletterSubscriptionComponent": function() { return /* binding */ NewsletterSubscriptionComponent; }
/* harmony export */ });
/* harmony import */ var _Users_eragueneau_WebstormProjects_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_newsletter_subscription_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./newsletter-subscription.component.html */ 70670);
/* harmony import */ var _newsletter_subscription_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newsletter-subscription.component.css */ 49413);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let NewsletterSubscriptionComponent = class NewsletterSubscriptionComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
NewsletterSubscriptionComponent.ctorParameters = () => [];
NewsletterSubscriptionComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'cp-newsletter-subscription',
        template: _Users_eragueneau_WebstormProjects_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_newsletter_subscription_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_newsletter_subscription_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], NewsletterSubscriptionComponent);



/***/ }),

/***/ 70430:
/*!*******************************************************!*\
  !*** ./src/app/home/tile-menu/tile-menu.component.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TileMenuComponent": function() { return /* binding */ TileMenuComponent; }
/* harmony export */ });
/* harmony import */ var _Users_eragueneau_WebstormProjects_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tile_menu_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./tile-menu.component.html */ 49414);
/* harmony import */ var _tile_menu_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tile-menu.component.css */ 67811);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _shared_notification_service_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/notification/service/notification.service */ 30048);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var _shared_google_analytics_service_analytics_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/google-analytics/service/analytics.service */ 96242);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







let TileMenuComponent = class TileMenuComponent {
    constructor(notificationService, router, googleAnalyticsService) {
        this.notificationService = notificationService;
        this.router = router;
        this.googleAnalyticsService = googleAnalyticsService;
    }
    ngAfterViewInit() {
        // Necessary for layout of tiles (equal size, etc.)
        $('cp-tile-menu').foundation();
    }
    goToDownload() {
        this.googleAnalyticsService.fireClickHomeTileEvent('download');
        this.router.navigate(['download']);
    }
    goToBasket() {
        this.googleAnalyticsService.fireClickHomeTileEvent('basket');
        this.router.navigate(['basket']);
    }
    goToOrganisms() {
        this.googleAnalyticsService.fireClickHomeTileEvent('organisms');
        this.router.navigate(['complex/organisms']);
    }
    goToOntologies() {
        this.googleAnalyticsService.fireClickHomeTileEvent('ontologies');
        this.notificationService.onFeatureNotAvailableYet();
        this.router.navigate(['ontologies']);
    }
    goToRequestComplex() {
        this.googleAnalyticsService.fireClickHomeTileEvent('request complex');
        window.open(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.complex_portal_support_url, '_blank');
    }
    goToTraining() {
        this.googleAnalyticsService.fireClickHomeTileEvent('training');
        window.open(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.training_url, '_blank');
    }
    goToDocumentation() {
        this.googleAnalyticsService.fireClickHomeTileEvent('documentation');
        this.router.navigate(['documentation']);
    }
    goToCitation() {
        this.googleAnalyticsService.fireClickHomeTileEvent('citation');
    }
};
TileMenuComponent.ctorParameters = () => [
    { type: _shared_notification_service_notification_service__WEBPACK_IMPORTED_MODULE_2__.NotificationService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _shared_google_analytics_service_analytics_service__WEBPACK_IMPORTED_MODULE_4__.AnalyticsService }
];
TileMenuComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'cp-tile-menu',
        template: _Users_eragueneau_WebstormProjects_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tile_menu_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tile_menu_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], TileMenuComponent);



/***/ }),

/***/ 30220:
/*!*******************************************************************!*\
  !*** ./src/app/home/twitter-display/twitter-display.component.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TwitterDisplayComponent": function() { return /* binding */ TwitterDisplayComponent; }
/* harmony export */ });
/* harmony import */ var _Users_eragueneau_WebstormProjects_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_twitter_display_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./twitter-display.component.html */ 34270);
/* harmony import */ var _twitter_display_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./twitter-display.component.css */ 66566);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



const twitterURL = 'https://platform.twitter.com/widgets.js';
let TwitterDisplayComponent = class TwitterDisplayComponent {
    constructor() {
    }
    ngOnInit() {
        this.initTwitterWidget();
    }
    initTwitterWidget() {
        /* tslint:disable */
        window.twttr = (function (d, s, id, call) {
            let js, fjs = d.getElementsByTagName(s)[0], t = window.twttr || {};
            if (d.getElementById(id))
                return t;
            js = d.createElement(s);
            js.id = id;
            js.src = twitterURL;
            fjs.parentNode.insertBefore(js, fjs);
            t._e = [];
            t.ready = function (f) {
                t._e.push(f);
            };
        })(document, "script", "twitter-wjs", this.reloadWidget());
        /* tslint:enable */
    }
    reloadWidget() {
        try {
            window.twttr.widgets.load(document.getElementById('twitter'));
        }
        catch (ignore) {
            // ignore
        }
    }
};
TwitterDisplayComponent.ctorParameters = () => [];
TwitterDisplayComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'cp-twitter-display',
        template: _Users_eragueneau_WebstormProjects_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_twitter_display_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_twitter_display_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], TwitterDisplayComponent);



/***/ }),

/***/ 7249:
/*!*****************************************************!*\
  !*** ./src/app/navigation/about/about.component.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": function() { return /* binding */ AboutComponent; }
/* harmony export */ });
/* harmony import */ var _Users_eragueneau_WebstormProjects_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_about_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./about.component.html */ 68809);
/* harmony import */ var _about_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.component.css */ 70332);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 71570);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var _shared_loading_indicators_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/loading-indicators/progress-bar/progress-bar.component */ 57040);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







let AboutComponent = class AboutComponent {
    constructor(titleService, router) {
        this.titleService = titleService;
        this.router = router;
        this.overview = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.complex_portal_documentation_url + 'about/overview.md';
        this.funding = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.complex_portal_documentation_url + 'about/funding.md';
        this.code = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.complex_portal_documentation_url + 'about/code-repository.md';
        this.license_privacy = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.complex_portal_documentation_url + 'about/license.md';
        this.publications = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.complex_portal_documentation_url + 'about/publications.md';
        // We use the Intact Portal documentation for the SAB page to keep it in sync between Intact and Complex Portal
        this.sab = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.intact_portal_documentation_url + 'about/scientific-advisory-board.md';
        this.imex_partners = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.intact_portal_documentation_url + 'about/imex-consortium-partners.md';
        this.requests = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.complex_portal_documentation_url + 'about/requests.md';
    }
    ngOnInit() {
        this.titleService.setTitle('Complex Portal - About');
        $('cp-about').foundation();
        _shared_loading_indicators_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_3__.ProgressBarComponent.hide();
    }
};
AboutComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.Title },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
AboutComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'cp-about',
        template: _Users_eragueneau_WebstormProjects_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_about_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_about_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], AboutComponent);



/***/ }),

/***/ 75421:
/*!*********************************************************************!*\
  !*** ./src/app/navigation/documentation/documentation.component.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocumentationComponent": function() { return /* binding */ DocumentationComponent; }
/* harmony export */ });
/* harmony import */ var _Users_eragueneau_WebstormProjects_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_documentation_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./documentation.component.html */ 5090);
/* harmony import */ var _documentation_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./documentation.component.css */ 83791);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 71570);
/* harmony import */ var _shared_loading_indicators_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/loading-indicators/progress-bar/progress-bar.component */ 57040);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let DocumentationComponent = class DocumentationComponent {
    constructor(titleService) {
        this.titleService = titleService;
        this.data_content = _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.complex_portal_documentation_url + 'documentation/cp_content.md';
        this.file_formats = _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.complex_portal_documentation_url + 'documentation/file_formats.md';
        this.query_syntax = _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.complex_portal_documentation_url + 'documentation/cql.md';
    }
    ngOnInit() {
        this.titleService.setTitle('Complex Portal - Documentation');
        $('cp-documentation').foundation();
        _shared_loading_indicators_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_2__.ProgressBarComponent.hide();
    }
};
DocumentationComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.Title }
];
DocumentationComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'cp-documentation',
        template: _Users_eragueneau_WebstormProjects_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_documentation_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_documentation_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], DocumentationComponent);



/***/ }),

/***/ 81400:
/*!****************************************************!*\
  !*** ./src/app/ontologies/ontologies.component.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OntologiesComponent": function() { return /* binding */ OntologiesComponent; }
/* harmony export */ });
/* harmony import */ var _Users_eragueneau_WebstormProjects_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_ontologies_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./ontologies.component.html */ 43501);
/* harmony import */ var _ontologies_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ontologies.component.css */ 5014);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 71570);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let OntologiesComponent = class OntologiesComponent {
    constructor(router, titleService) {
        this.router = router;
        this.titleService = titleService;
    }
    ngOnInit() {
        this.titleService.setTitle('Complex Portal - Ontologies');
        this.router.navigate(['home']);
    }
};
OntologiesComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.Title }
];
OntologiesComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'cp-ontologies',
        template: _Users_eragueneau_WebstormProjects_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_ontologies_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_ontologies_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], OntologiesComponent);



/***/ }),

/***/ 83950:
/*!********************************************************!*\
  !*** ./src/app/search/home-search/search.component.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchComponent": function() { return /* binding */ SearchComponent; }
/* harmony export */ });
/* harmony import */ var _Users_eragueneau_WebstormProjects_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_search_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./search.component.html */ 64303);
/* harmony import */ var _search_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.component.css */ 61326);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _shared_google_analytics_types_category_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/google-analytics/types/category.enum */ 86335);
/* harmony import */ var _service_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/search.service */ 98377);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let SearchComponent = class SearchComponent {
    constructor(searchService) {
        this.searchService = searchService;
    }
    ngOnInit() {
    }
    search(query, typeOfButton) {
        this.searchService.search(query, _shared_google_analytics_types_category_enum__WEBPACK_IMPORTED_MODULE_2__.Category.home, typeOfButton);
    }
};
SearchComponent.ctorParameters = () => [
    { type: _service_search_service__WEBPACK_IMPORTED_MODULE_3__.SearchService }
];
SearchComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'cp-search',
        template: _Users_eragueneau_WebstormProjects_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_search_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_search_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], SearchComponent);



/***/ }),

/***/ 3484:
/*!***************************************************************!*\
  !*** ./src/app/search/local-search/local-search.component.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalSearchComponent": function() { return /* binding */ LocalSearchComponent; }
/* harmony export */ });
/* harmony import */ var _Users_eragueneau_WebstormProjects_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_local_search_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./local-search.component.html */ 71009);
/* harmony import */ var _local_search_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local-search.component.css */ 20597);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _shared_google_analytics_types_category_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/google-analytics/types/category.enum */ 86335);
/* harmony import */ var _service_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/search.service */ 98377);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







let LocalSearchComponent = class LocalSearchComponent {
    constructor(location, router, route, searchService) {
        this.location = location;
        this.router = router;
        this.route = route;
        this.searchService = searchService;
    }
    ngOnInit() {
        this.extractQueryFromURL();
    }
    // TODO: REVIEW THIS METHOD
    extractQueryFromURL() {
        // Retrieve query from URL. Would be nice to have it in the service.. but time etc.
        this.router.events.subscribe((val) => {
            if (this.location.path().startsWith('/home')) {
                this._display = false;
            }
            else {
                this._display = true;
                if (this.location.path().startsWith('/complex/search')) {
                    this.route
                        .queryParams
                        .subscribe(queryParams => {
                        this._query = queryParams['query'];
                    });
                }
                else if (this.location.path().startsWith('/complex/organisms')) {
                    this._query = '';
                }
                else if (this.location.path().startsWith('/complex')) {
                    this._query = ''; // this.location.path().split('/')[2];
                }
                else {
                    this._query = '';
                }
            }
        });
    }
    search(query, typeOfButton) {
        this.searchService.search(query, _shared_google_analytics_types_category_enum__WEBPACK_IMPORTED_MODULE_2__.Category.header, typeOfButton);
    }
    get display() {
        return this._display;
    }
    get query() {
        return this._query;
    }
};
LocalSearchComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _service_search_service__WEBPACK_IMPORTED_MODULE_3__.SearchService }
];
LocalSearchComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'cp-local-search',
        template: _Users_eragueneau_WebstormProjects_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_local_search_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_local_search_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], LocalSearchComponent);



/***/ }),

/***/ 98377:
/*!**************************************************!*\
  !*** ./src/app/search/service/search.service.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchService": function() { return /* binding */ SearchService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _shared_google_analytics_service_analytics_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/google-analytics/service/analytics.service */ 96242);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 71258);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let SearchService = class SearchService {
    constructor(router, googleAnalyticsService) {
        this.router = router;
        this.googleAnalyticsService = googleAnalyticsService;
    }
    search(query, category, typeOfButton) {
        this._query = query;
        this.googleAnalyticsService.fireSearchInvokerEvent(category, typeOfButton);
        this.googleAnalyticsService.fireSearchTermEvent(category, query);
        this.router.navigate(['complex/search'], { queryParams: { query: query, page: 1 } });
    }
    get query() {
        return this._query;
    }
    set query(value) {
        this._query = value;
    }
};
SearchService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router },
    { type: _shared_google_analytics_service_analytics_service__WEBPACK_IMPORTED_MODULE_0__.AnalyticsService }
];
SearchService = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()
], SearchService);



/***/ }),

/***/ 69510:
/*!*********************************************************!*\
  !*** ./src/app/shared/basket/service/basket.service.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasketService": function() { return /* binding */ BasketService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _notification_service_notification_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../notification/service/notification.service */ 30048);
/* harmony import */ var _google_analytics_service_analytics_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../google-analytics/service/analytics.service */ 96242);
/* harmony import */ var _local_storage_service_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../local-storage/service/local-storage.service */ 88153);
/* harmony import */ var _complex_shared_pipe_species_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../complex/shared/pipe/species.pipe */ 6183);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





const COMPLEX_STORE = 'cp_complex_store';
let BasketService = class BasketService {
    constructor(notificationService, googleAnalyticsService, species) {
        this.notificationService = notificationService;
        this.googleAnalyticsService = googleAnalyticsService;
        this.species = species;
        this._complexBasket = {};
        this.onBasketCountChanged$ = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.initialiseBasket();
    }
    initialiseBasket() {
        const complexStore = _local_storage_service_local_storage_service__WEBPACK_IMPORTED_MODULE_2__.LocalStorageService.getLocalStorage(COMPLEX_STORE);
        if (!complexStore) {
            _local_storage_service_local_storage_service__WEBPACK_IMPORTED_MODULE_2__.LocalStorageService.saveInLocalStorage(COMPLEX_STORE, this._complexBasket);
            this.initialiseBasket();
        }
        else {
            const keys = Object.keys(complexStore);
            for (let i = 0; i < keys.length; i++) {
                const complex = complexStore[keys[i]];
                if (complex) {
                    this._complexBasket[keys[i]] = complex;
                }
            }
        }
    }
    isElement(complex) {
        return complex.complexAC !== undefined;
    }
    saveInBasket(complex) {
        const item = this.isElement(complex) ? {
            id: complex.complexAC,
            name: complex.complexName,
            organism: complex.organismName,
            predicted: complex.predictedComplex,
            date: new Date()
        } : {
            id: complex.complexAc,
            name: complex.name,
            organism: complex.species,
            predicted: complex.predictedComplex,
            date: new Date(),
        };
        item.organism = this.species.transform(item.organism, false);
        if (!this.isInBasket(item.id)) {
            this._complexBasket[item.id] = item;
            _local_storage_service_local_storage_service__WEBPACK_IMPORTED_MODULE_2__.LocalStorageService.saveInLocalStorage(COMPLEX_STORE, this._complexBasket);
            this.onBasketCountChanged$.emit(this.getBasketCount());
            this.googleAnalyticsService.fireAddToBasketEvent(item.id);
            this.notificationService.onAddedComplexToBasket(item.id);
        }
    }
    deleteFromBasket(id) {
        delete this._complexBasket[id];
        _local_storage_service_local_storage_service__WEBPACK_IMPORTED_MODULE_2__.LocalStorageService.saveInLocalStorage(COMPLEX_STORE, this._complexBasket);
        this.onBasketCountChanged$.emit(this.getBasketCount());
        this.googleAnalyticsService.fireRemoveFromBasketEvent(id);
        this.notificationService.onRemovedComplexFromBasket(id);
    }
    isInBasket(id) {
        return !!this._complexBasket[id];
    }
    get complexBasket() {
        return this._complexBasket;
    }
    getBasketCount() {
        return Object.keys(this._complexBasket).length;
    }
};
BasketService.ctorParameters = () => [
    { type: _notification_service_notification_service__WEBPACK_IMPORTED_MODULE_0__.NotificationService },
    { type: _google_analytics_service_analytics_service__WEBPACK_IMPORTED_MODULE_1__.AnalyticsService },
    { type: _complex_shared_pipe_species_pipe__WEBPACK_IMPORTED_MODULE_3__.SpeciesPipe }
];
BasketService = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)()
], BasketService);



/***/ }),

/***/ 96242:
/*!**********************************************************************!*\
  !*** ./src/app/shared/google-analytics/service/analytics.service.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnalyticsService": function() { return /* binding */ AnalyticsService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _types_category_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/category.enum */ 86335);
/* harmony import */ var _types_action_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/action.enum */ 44955);
/* harmony import */ var ngx_google_analytics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-google-analytics */ 14462);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let AnalyticsService = class AnalyticsService {
    constructor(analytics) {
        this.analytics = analytics;
    }
    invokeCustomEvent(value, category, label) {
        this.analytics.event(_types_action_enum__WEBPACK_IMPORTED_MODULE_1__.Action[value], _types_category_enum__WEBPACK_IMPORTED_MODULE_0__.Category[category], label);
    }
    fireDownloadResourceEvent(site, type) {
        this.invokeCustomEvent(_types_action_enum__WEBPACK_IMPORTED_MODULE_1__.Action.download, site, type);
    }
    fireOpenExternalLinkEvent(site, type) {
        this.invokeCustomEvent(_types_action_enum__WEBPACK_IMPORTED_MODULE_1__.Action.externalLink, site, type);
    }
    fireClickHomeTileEvent(type) {
        this.invokeCustomEvent(_types_action_enum__WEBPACK_IMPORTED_MODULE_1__.Action.Tile, _types_category_enum__WEBPACK_IMPORTED_MODULE_0__.Category.home, type);
    }
    fireGoToDetailsSectionEvent(type) {
        this.invokeCustomEvent(_types_action_enum__WEBPACK_IMPORTED_MODULE_1__.Action.GoToMenu, _types_category_enum__WEBPACK_IMPORTED_MODULE_0__.Category.details, type);
    }
    fireSearchTermEvent(site, type) {
        this.invokeCustomEvent(_types_action_enum__WEBPACK_IMPORTED_MODULE_1__.Action.search, site, type);
    }
    // To identify if user use 'enter' or if they click with the mouse on the magnifier.
    // 'site' is not the actual site, but if it is the homepage or the header search box
    fireSearchInvokerEvent(site, type) {
        this.invokeCustomEvent(_types_action_enum__WEBPACK_IMPORTED_MODULE_1__.Action.searchInvoker, site, type);
    }
    fireAddToBasketEvent(type) {
        this.invokeCustomEvent(_types_action_enum__WEBPACK_IMPORTED_MODULE_1__.Action.AddToBasket, _types_category_enum__WEBPACK_IMPORTED_MODULE_0__.Category.basket, type);
    }
    fireRemoveFromBasketEvent(type) {
        this.invokeCustomEvent(_types_action_enum__WEBPACK_IMPORTED_MODULE_1__.Action.RemoveFromBasket, _types_category_enum__WEBPACK_IMPORTED_MODULE_0__.Category.basket, type);
    }
    fireInteractionWithViewerEvent(viewer, type) {
        this.invokeCustomEvent(_types_action_enum__WEBPACK_IMPORTED_MODULE_1__.Action.ComplexVisualisation, viewer, type);
    }
    fireAddedFilterEvent(type) {
        this.invokeCustomEvent(_types_action_enum__WEBPACK_IMPORTED_MODULE_1__.Action.AddResultFilter, _types_category_enum__WEBPACK_IMPORTED_MODULE_0__.Category.ResultFilter, type);
    }
    fireRemovedFilterEvent(type) {
        this.invokeCustomEvent(_types_action_enum__WEBPACK_IMPORTED_MODULE_1__.Action.RemoveResultFilter, _types_category_enum__WEBPACK_IMPORTED_MODULE_0__.Category.ResultFilter, type);
    }
    fireMultiFilterEvent(type) {
        this.invokeCustomEvent(_types_action_enum__WEBPACK_IMPORTED_MODULE_1__.Action.FilterByMultipleFields, _types_category_enum__WEBPACK_IMPORTED_MODULE_0__.Category.ResultFilter, type);
    }
    fireAPIRequestErrorEvent(api, type) {
        this.invokeCustomEvent(_types_action_enum__WEBPACK_IMPORTED_MODULE_1__.Action.APIResquestError, api, type);
    }
    rateComplexNavigator(rating) {
        this.analytics.event(_types_action_enum__WEBPACK_IMPORTED_MODULE_1__.Action[_types_action_enum__WEBPACK_IMPORTED_MODULE_1__.Action.RatingComplexNavigator], _types_category_enum__WEBPACK_IMPORTED_MODULE_0__.Category[_types_category_enum__WEBPACK_IMPORTED_MODULE_0__.Category.complexNavigator], 'rating', rating);
    }
};
AnalyticsService.ctorParameters = () => [
    { type: ngx_google_analytics__WEBPACK_IMPORTED_MODULE_2__.GoogleAnalyticsService }
];
AnalyticsService = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)()
], AnalyticsService);



/***/ }),

/***/ 44955:
/*!**************************************************************!*\
  !*** ./src/app/shared/google-analytics/types/action.enum.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Action": function() { return /* binding */ Action; }
/* harmony export */ });
var Action;
(function (Action) {
    Action[Action["APIResquestError"] = 0] = "APIResquestError";
    Action[Action["ChangeResultPage"] = 1] = "ChangeResultPage";
    Action[Action["FilterByMultipleFields"] = 2] = "FilterByMultipleFields";
    Action[Action["RemoveResultFilter"] = 3] = "RemoveResultFilter";
    Action[Action["AddResultFilter"] = 4] = "AddResultFilter";
    Action[Action["ComplexVisualisation"] = 5] = "ComplexVisualisation";
    Action[Action["download"] = 6] = "download";
    Action[Action["externalLink"] = 7] = "externalLink";
    Action[Action["example"] = 8] = "example";
    Action[Action["searchInvoker"] = 9] = "searchInvoker";
    Action[Action["Tile"] = 10] = "Tile";
    Action[Action["RemoveFromBasket"] = 11] = "RemoveFromBasket";
    Action[Action["search"] = 12] = "search";
    Action[Action["AddToBasket"] = 13] = "AddToBasket";
    Action[Action["GoToMenu"] = 14] = "GoToMenu";
    Action[Action["RatingComplexNavigator"] = 15] = "RatingComplexNavigator";
})(Action || (Action = {}));


/***/ }),

/***/ 86335:
/*!****************************************************************!*\
  !*** ./src/app/shared/google-analytics/types/category.enum.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Category": function() { return /* binding */ Category; }
/* harmony export */ });
var Category;
(function (Category) {
    Category[Category["reactome"] = 0] = "reactome";
    Category[Category["ols_orphanet"] = 1] = "ols_orphanet";
    Category[Category["ols_efo"] = 2] = "ols_efo";
    Category[Category["complexportal_details"] = 3] = "complexportal_details";
    Category[Category["complexportal_mi"] = 4] = "complexportal_mi";
    Category[Category["europepmc"] = 5] = "europepmc";
    Category[Category["ResultFilter"] = 6] = "ResultFilter";
    Category[Category["InteractionViewer_ExportSVG"] = 7] = "InteractionViewer_ExportSVG";
    Category[Category["InteractionViewer_SelectedAnno"] = 8] = "InteractionViewer_SelectedAnno";
    Category[Category["InteractionViewer_ChangeAnno"] = 9] = "InteractionViewer_ChangeAnno";
    Category[Category["InteractionViewer_Reset"] = 10] = "InteractionViewer_Reset";
    Category[Category["InteractionViewer_ExpandAll"] = 11] = "InteractionViewer_ExpandAll";
    Category[Category["InteractionViewer_Interaction"] = 12] = "InteractionViewer_Interaction";
    Category[Category["PathwayDiagram_Interaction"] = 13] = "PathwayDiagram_Interaction";
    Category[Category["LiteMolViewer_Interaction"] = 14] = "LiteMolViewer_Interaction";
    Category[Category["download"] = 15] = "download";
    Category[Category["organisms"] = 16] = "organisms";
    Category[Category["species"] = 17] = "species";
    Category[Category["header"] = 18] = "header";
    Category[Category["home"] = 19] = "home";
    Category[Category["details"] = 20] = "details";
    Category[Category["basket"] = 21] = "basket";
    Category[Category["search"] = 22] = "search";
    Category[Category["complexNavigator"] = 23] = "complexNavigator";
    Category[Category["ols_obo"] = 24] = "ols_obo";
})(Category || (Category = {}));


/***/ }),

/***/ 57040:
/*!**********************************************************************************!*\
  !*** ./src/app/shared/loading-indicators/progress-bar/progress-bar.component.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgressBarComponent": function() { return /* binding */ ProgressBarComponent; }
/* harmony export */ });
/* harmony import */ var _Users_eragueneau_WebstormProjects_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_progress_bar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./progress-bar.component.html */ 86234);
/* harmony import */ var _progress_bar_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./progress-bar.component.css */ 57814);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ProgressBarComponent_1;



let ProgressBarComponent = ProgressBarComponent_1 = class ProgressBarComponent {
    constructor() {
        this._color = 'primary';
        this._mode = 'query';
        ProgressBarComponent_1.show = false;
    }
    static display() {
        ProgressBarComponent_1.show = true;
    }
    static hide() {
        setTimeout(function () {
            ProgressBarComponent_1.show = false;
        }, 1000);
    }
    ngOnInit() {
    }
    get isDisplayed() {
        return ProgressBarComponent_1.show;
    }
    get color() {
        return this._color;
    }
    set color(value) {
        this._color = value;
    }
    get mode() {
        return this._mode;
    }
    set mode(value) {
        this._mode = value;
    }
};
ProgressBarComponent.ctorParameters = () => [];
ProgressBarComponent = ProgressBarComponent_1 = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'cp-progress-bar',
        template: _Users_eragueneau_WebstormProjects_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_progress_bar_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_progress_bar_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProgressBarComponent);



/***/ }),

/***/ 88153:
/*!***********************************************************************!*\
  !*** ./src/app/shared/local-storage/service/local-storage.service.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalStorageService": function() { return /* binding */ LocalStorageService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let LocalStorageService = class LocalStorageService {
    static saveInLocalStorage(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }
    static getLocalStorage(key) {
        return JSON.parse(localStorage.getItem(key));
    }
};
LocalStorageService = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)()
], LocalStorageService);



/***/ }),

/***/ 30048:
/*!*********************************************************************!*\
  !*** ./src/app/shared/notification/service/notification.service.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationService": function() { return /* binding */ NotificationService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-toastr */ 83315);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let NotificationService = class NotificationService {
    constructor(toastrService) {
        this.toastrService = toastrService;
        toastrService.toastrConfig.closeButton = true; // displayedElements close button
        toastrService.toastrConfig.timeOut = 5000; // time to live
        toastrService.toastrConfig.preventDuplicates = true;
        toastrService.toastrConfig.progressBar = true;
        toastrService.toastrConfig.tapToDismiss = false;
        toastrService.toastrConfig.enableHtml = true;
    }
    addSuccessNotification(successNotification) {
        this.toastrService.success(successNotification);
    }
    addErrorNotification(errorNotification) {
        this.toastrService.error(errorNotification, 'Something went wrong :(');
    }
    addAnnouncementNotification(announcementNotification, options) {
        this.toastrService.info(announcementNotification, 'Just to let you know!', options);
    }
    addComplexNavigatorAnnouncementNotification(announcement) {
        return this.toastrService.info(announcement, null, {
            disableTimeOut: false,
            closeButton: true,
            progressBar: false,
            positionClass: 'toast-right-under-header'
        });
    }
    addHintNotification(hintNotification) {
        this.toastrService.warning(hintNotification, 'Just to let you know!');
    }
    onAPIRequestError(resource) {
        this.addErrorNotification('We couldn\'t reach the ' + resource + ' webservice. ' +
            'Please try again later or contact us if issue persists!');
    }
    onAddedComplexToBasket(id) {
        this.addSuccessNotification('Added ' + id + ' to your basket!');
    }
    onRemovedComplexFromBasket(id) {
        this.addSuccessNotification('Removed ' + id + ' from your basket!');
    }
    onFeatureNotAvailableYet() {
        this.addHintNotification('This feature is not available yet. But it is coming soon! :-)');
    }
    complexNavigatorAnnouncement() {
        return this.addComplexNavigatorAnnouncementNotification('Try out our new display: \n ' +
            'the Complex Navigator!');
    }
    closeAnnouncement(toastId) {
        this.toastrService.clear(toastId);
    }
};
NotificationService.ctorParameters = () => [
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_0__.ToastrService }
];
NotificationService = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()
], NotificationService);



/***/ }),

/***/ 99948:
/*!***************************************************!*\
  !*** ./src/app/shared/ols/service/ols.service.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OlsService": function() { return /* binding */ OlsService; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 33927);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 18293);
/* harmony import */ var rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/observable/throwError */ 76859);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





const baseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.ols_base_url;
let OlsService = class OlsService {
    constructor(http) {
        this.http = http;
    }
    /**
     * Get a name of efo xref
     * @param id
     * @returns {Observable<R>}
     */
    getOrphaNetName(id) {
        return this.http.get(baseURL + '/ordo/terms?iri=http://www.orpha.net/ORDO/' + id.replace(':', '_')).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((response) => response), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    /**
     * Get a name of efo xref
     * @param id
     * @returns {Observable<R>}
     */
    getEfoName(id) {
        return this.http.get(baseURL + '/efo/terms?iri=http://www.ebi.ac.uk/efo/' + id.replace(':', '_')).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    /**
     * Get a name of mondo xref
     * @param id
     * @returns {Observable<R>}
     */
    getOboName(id) {
        return this.http.get(baseURL + '/efo/terms?iri=http://purl.obolibrary.org/obo/' + id.replace(':', '_')).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    handleError(err) {
        if (err.error instanceof Error) {
            return (0,rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_3__.throwError)(err);
        }
        else {
            console.error(err.message ? err.message : err.toString());
        }
    }
};
OlsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient }
];
OlsService = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)()
], OlsService);



/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
/**
 * Created by Maximilian Koch (mkoch@ebi.ac.uk) on 01/06/2017.
 */
// Environment for GitHub Page
const EBI_BASE_URL = 'https://www.ebi.ac.uk/';
const COMPLEX_BASE_URL = 'https://wwwdev.ebi.ac.uk/';
const LICENSE_URL = 'https://creativecommons.org/licenses/by/4.0/';
const REACTOME_BASE_URL = 'https://reactome.org';
const INTACT_FTP_BASE_URL = 'ftp://ftp.ebi.ac.uk/pub/databases/intact/';
const COMPLEX__FTP_BASE_URL = INTACT_FTP_BASE_URL + 'complex/';
const COMPLEX_PORTAL_DOCUMENTATION_URL = 'https://raw.githubusercontent.com/Complex-Portal/complex-portal-documentation/master/';
const INTACT_PORTAL_DOCUMENTATION_URL = 'https://raw.githubusercontent.com/Intact-Portal/intact-portal-documentation/master/';
const environment = {
    production: false,
    evn: 'test',
    analytics_id: 'UA-672146-13',
    ebi_base_url: EBI_BASE_URL,
    license_url: LICENSE_URL,
    complex_portal_documentation_url: COMPLEX_PORTAL_DOCUMENTATION_URL,
    intact_portal_documentation_url: INTACT_PORTAL_DOCUMENTATION_URL,
    complex_ws_base_url: COMPLEX_BASE_URL + 'intact/complex-ws',
    europepmc_base_url: EBI_BASE_URL + 'europepmc',
    pdb_base_url: EBI_BASE_URL + 'pdbe',
    ols_base_url: EBI_BASE_URL + 'ols4/api/ontologies',
    ols_go_url: EBI_BASE_URL + 'ols4/ontologies/go/terms?obo_id=',
    ols_eco_url: EBI_BASE_URL + 'ols4/ontologies/eco/terms?obo_id=',
    complex_current: COMPLEX__FTP_BASE_URL + 'current',
    complex_tab: COMPLEX__FTP_BASE_URL + 'current/complextab/',
    complex_tab_readme: COMPLEX__FTP_BASE_URL + 'current/complextab/README.htm',
    complex_psi25: COMPLEX__FTP_BASE_URL + 'current/psi25/',
    complex_psi30: COMPLEX__FTP_BASE_URL + 'current/psi30/',
    intact_base_url: EBI_BASE_URL + 'intact',
    complex_portal_support_url: EBI_BASE_URL + 'support/complexportal',
    training_url: EBI_BASE_URL + 'training/search-results?query=complex%20portal',
    reactome_base_url: REACTOME_BASE_URL,
};


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 61882);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./environments/environment */ 92340);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ 36747);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__.AppModule, {
    preserveWhitespaces: true
});


/***/ }),

/***/ 75158:
/*!***************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/app.component.html ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <header id=\"masthead\" class=\"masthead\">\n    <!-- COMPLEX PORTAL HEADER SECTION -->\n    <div class=\"masthead-inner row\"> <!-- expanded -->\n      <!-- local-title -->\n      <div class=\"columns medium-6\" id=\"local-title\">\n        <h1><a routerLink=\"/home\" title=\"Back to Complex Portal homepage\">\n          <img src=\"assets/images/logo.png\" style=\"width: 43px; height: 63px;\"> Complex Portal</a>\n        </h1>\n      </div>\n      <!--/local-title -->\n\n      <div class=\"columns medium-6\">\n        <cp-local-search></cp-local-search>\n      </div>\n    </div>\n  </header>\n  <!-- END COMPLEX PORTAL HEADER SECTION -->\n\n  <!--  <cp-progress-bar></cp-progress-bar>-->\n</div>\n\n<!---->\n<div id=\"content\" role=\"main\" class=\"row expanded\">\n\n  <!-- local-nav -->\n  <div class=\"masthead sticky-nav-container\">\n    <nav>\n      <ul id=\"local-nav\" class=\"dropdown menu float-left\" data-dropdown-menu=\"true\" data-description=\"navigational\">\n        <li routerLinkActive=\"active\"><a routerLink=\"/home\" routerLinkActive=\"active\">Home</a></li>\n        <li routerLinkActive=\"active\"><a routerLink=\"/about\" routerLinkActive=\"active\">About</a></li>\n        <li routerLinkActive=\"active\"><a routerLink=\"/documentation\" routerLinkActive=\"active\">Documentation</a></li>\n        <li routerLinkActive=\"active\"><a routerLink=\"/basket\" routerLinkActive=\"active\"\n                                         [ngClass]=\"{'animated flash': onChangeInBasket}\">Basket\n          <div routerLink=\"/basket\" routerLinkActive=\"active\" class=\"basket\">\n            &nbsp;<strong>{{ basketCount }}</strong>&nbsp;\n          </div>\n        </a>\n        </li>\n        <li routerLinkActive=\"active\"><a href=\"{{complexPortalSupportUrl}}\">Support <i class=\"icon icon-generic\"\n                                                                                       data-icon=\"x\"></i></a></li>\n      </ul>\n    </nav>\n  </div>\n\n  <!-- /local-nav -->\n  <!-- Suggested layout containers -->\n  <section>\n    <router-outlet></router-outlet>\n    <!-- Routed views go here -->\n  </section>\n  <!-- End suggested layout containers -->\n</div>\n\n\n<!-- Local footer -->\n<cp-local-footer [environmentName]=\"environmentName\" [version]=\"version\"></cp-local-footer>\n");

/***/ }),

/***/ 30251:
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/download/download.component.html ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"columns margin-top-large margin-bottom-large\">\n  <h1>Downloads</h1>\n  <p>The Complex Portal is released monthly and data on individual complexes is available for download in both PSI-MI\n    XML2.5 and XML3.0 formats (see the PSI website for a detailed format description). The files are grouped by\n    species. We have now also developed ComplexTAB, a flatfile format to enable simpler parsing or loading into\n    Microsoft Excel. A separate ComplexTAB file has been produced for each species - details on the format are\n    available <a (click)=\"goToComplexTabeReadMe()\">here <i class=\"icon icon-generic small\" data-icon=\"x\"></i></a>. All\n    files are available from the <a\n      (click)=\"goToComplexFTPCurrent()\">ftp site <i class=\"icon icon-generic small\" data-icon=\"x\"></i></a> and will be\n    updated as we add new complexes with every data release.</p>\n  <ul>\n    <li class=\"icon-bullet\"><span class=\"icon icon-generic\" data-icon=\"*\"></span> For license details, please visit our\n      <a routerLink=\"/about\" fragment=\"license_privacy\">About section.</a>\n    </li>\n  </ul>\n  <div class=\"row button-grid small-up-1 medium-up-4 large-up-4 margin-top-xlarge no-pad-right\" data-equalizer\n       data-equalize-on=\"medium\" id=\"large-button-grid\">\n    <div class=\"column  padding-bottom-large\">\n      <a class=\"button medium-12 columns text-center\" data-equalizer-watch (click)=\"goToComplexPSI25()\">\n        <h3 class=\"icon icon-fileformats  white-color\" data-icon=\"1\"></h3>\n        <h5 class=\"white-color\">PSI-MI XML 2.5</h5>\n      </a>\n    </div>\n    <div class=\"column  padding-bottom-large\">\n      <a class=\"button medium-12 columns text-center\" data-equalizer-watch\n         (click)=\"goToComplexPSI30()\">\n        <h3 class=\"icon icon-fileformats  white-color\" data-icon=\"1\"></h3>\n        <h5 class=\"white-color\">PSI-MI XML 3.0</h5>\n      </a>\n    </div>\n    <div class=\"column  padding-bottom-large\">\n      <a class=\"button medium-12 columns text-center\" data-equalizer-watch\n         (click)=\"goToComplexTAB()\">\n        <h3 class=\"icon icon-fileformats  white-color\" data-icon=\"v\"></h3>\n        <h5 class=\"white-color\">ComplexTab</h5>\n      </a>\n    </div>\n    <div class=\"column  padding-bottom-large\">\n      <a class=\"button medium-12 columns text-center\" data-equalizer-watch\n         (click)=\"goToComplexWS()\">\n        <h3 class=\"icon icon-fileformats white-color\" data-icon=\"J\"></h3>\n        <h5 class=\"white-color\">Web Service</h5>\n      </a>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ 70090:
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/footer/footer.component.html ***!
  \*************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer id=\"local-footer\" class=\"local-footer\" role=\"local-footer\">\n  <div class=\"row margin-top-medium\">\n    <div id=\"contributors\" class=\"margin-top-large\" style=\"text-align: center\">\n      <h4><p class=\"icon icon-generic\" data-icon=\"}\"> Our Contributors</p></h4>\n    </div>\n\n    <div class=\"columns\">\n\n      <div style=\"text-align: center\">\n        <a href=\"//www.ceitec.eu\" target=\"_blank\">\n          <img src=\"assets/images/contributors/Ceitec.png\" alt=\"CEITEC\">\n        </a>\n        <a href=\"//www.evidenceontology.org/\" target=\"_blank\">\n          <img src=\"assets/images/contributors/eco.png\" alt=\"eco\">\n        </a>\n        <a href=\"//www.ucl.ac.uk/functional-gene-annotation/cardiovascular\" target=\"_blank\">\n          <img src=\"assets/images/contributors/imex_acg_s.png\" alt=\"ACG\">\n        </a>\n        <a href=\"http://matrixdb.univ-lyon1.fr\" target=\"_blank\">\n          <img src=\"assets/images/contributors/matrixdb.png\" alt=\"matrixDB\">\n        </a>\n        <a href=\"//mint.bio.uniroma2.it\" target=\"_blank\">\n          <img src=\"assets/images/contributors/Mint.png\" alt=\"Mint\">\n        </a>\n        <a href=\"//www.ebi.ac.uk/pdbe/\" target=\"_blank\">\n          <img src=\"assets/images/contributors/PDBe.png\" alt=\"PDBe\">\n        </a>\n        <a href=\"//www.yeastgenome.org\" target=\"_blank\">\n          <img src=\"assets/images/contributors/SGD.png\" alt=\"SGD\">\n        </a>\n        <a href=\"//www.sib.swiss\" target=\"_blank\">\n          <img src=\"assets/images/contributors/sib.png\" alt=\"SIB\">\n        </a>\n        <a href=\"//www.uniprot.org\" target=\"_blank\">\n          <img src=\"assets/images/contributors/uniprot.png\" alt=\"UniProt\">\n        </a>\n        <a href=\"//www.flybase.org\" target=\"_blank\">\n          <img src=\"assets/images/contributors/flybase.png\" alt=\"FlyBase\">\n        </a>\n        <a href=\"//www.rappsilberlab.org/\" target=\"_blank\">\n          <img src=\"assets/images/contributors/rap_lab_text_logo.png\" alt=\"RAPPSILBER\">\n        </a>\n      </div>\n\n      <div class=\"label secondary-color float-right\">{{version}}-{{environmentName}}</div>\n    </div>\n  </div>\n</footer>\n");

/***/ }),

/***/ 91659:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/home/home.component.html ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section>\n  <div id=\"main-content-area\">\n\n    <div class=\"row\">\n      <div class=\"columns medium-9\">\n        <div class=\"columns medium-12 no-pad-left no-pad-right padding-top-xsmall padding-bottom-small\">\n          <h1>Explore the Complex Portal</h1>\n          <p>\n            The Complex Portal is a manually curated, encyclopaedic resource of macromolecular complexes from a number\n            of key model organisms. The majority of complexes are made up of proteins but may also include nucleic acids\n            or small molecules. All data is freely available for search and <a class=\"readmore\" routerLink=\"/download\">download</a>.\n          </p>\n          <div id=\"cp-definition\" class=\"definition padding-bottom-xlarge padding-top-xlarge\">\n            <i>Complexes are defined as an assembly of any two or more proteins and/or nucleic acids that are stable enough\n            in vitro to be reconstituted and have been demonstrated to have a specific molecular function.</i>\n          </div>\n          <p class=\"padding-top-large\">\n            To perform a search for macromolecular complexes use the search box below. Read more\n            <a class=\"readmore\" routerLink=\"/about\">here</a>.\n          </p>\n        </div>\n        <div class=\"columns medium-12\">\n          <cp-search></cp-search>\n        </div>\n        <div class=\"columns medium-12 margin-top-xlarge\">\n          <cp-tile-menu></cp-tile-menu>\n        </div>\n      </div>\n\n      <div class=\"columns medium-3\">\n        <div class=\"columns medium-12\">\n          <cp-newsletter-subscription></cp-newsletter-subscription>\n        </div>\n        <div class=\"columns medium-12\">\n          <cp-twitter-display></cp-twitter-display>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n");

/***/ }),

/***/ 70670:
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/home/newsletter-subscription/newsletter-subscription.component.html ***!
  \****************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"margin-bottom-xlarge\" id=\"mc_embed_signup\">\n  <form ngNoForm action=\"//ebi.us9.list-manage.com/subscribe/post?u=d50725c1556266fd605025eaf&id=91a036cbb0\"\n        method=\"post\"\n        id=\"mc-embedded-subscribe-form\" name=\"mc-embedded-subscribe-form\" class=\"validate\" target=\"_blank\" novalidate>\n    <div id=\"mc_embed_signup_scroll\">\n      <h3><i class=\"icon icon-generic icon-spacer\" data-icon=\"m\"></i>Newsletter</h3>\n      <input type=\"email\" value=\"\" name=\"EMAIL\" class=\"email\" id=\"mce-EMAIL\" placeholder=\"email address\" required>\n      <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->\n      <div style=\"position: absolute; left: -5000px;\" aria-hidden=\"true\"><input type=\"text\"\n                                                                                name=\"b_d50725c1556266fd605025eaf_91a036cbb0\"\n                                                                                tabindex=\"-1\" value=\"\"></div>\n      <div class=\"clear\"><input type=\"submit\" value=\"Subscribe\" name=\"subscribe\" id=\"mc-embedded-subscribe\"\n                                class=\"button\"></div>\n    </div>\n  </form>\n</div>\n");

/***/ }),

/***/ 49414:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/home/tile-menu/tile-menu.component.html ***!
  \************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row button-grid\" data-equalizer id=\"large-button-grid\">\n  <div class=\"columns large-3 medium-6 text-center padding-bottom-large\">\n    <a class=\"button medium-12 columns\" data-equalizer-watch (click)=\"goToDownload()\">\n      <h3 class=\"icon icon-functional white-color\" data-icon=\"=\"></h3>\n      <h5 class=\"white-color\" style=\"white-space: normal\">Downloads</h5>\n    </a>\n  </div>\n  <div class=\"columns large-3 medium-6 text-center padding-bottom-large\">\n    <a class=\"button medium-12 columns\" data-equalizer-watch (click)=\"goToBasket()\">\n      <h3 class=\"icon icon-generic white-color\" data-icon=\"b\"></h3>\n      <h5 class=\"white-color\">Basket</h5>\n    </a>\n  </div>\n  <div class=\"columns large-3 medium-6 text-center padding-bottom-large\">\n    <a class=\"button medium-12 columns\" data-equalizer-watch (click)=\"goToOrganisms()\">\n      <h3 class=\"icon icon-species white-color\" data-icon=\"M\"></h3>\n      <h5 class=\"white-color\">Organisms</h5>\n    </a>\n  </div>\n  <div class=\"columns large-3 medium-6 text-center padding-bottom-large\">\n    <a class=\"button medium-12 columns\" data-equalizer-watch (click)=\"goToOntologies()\">\n      <h3 class=\"icon icon-conceptual white-color\" data-icon=\"o\"></h3>\n      <h5 class=\"white-color\">Ontologies</h5>\n    </a>\n  </div>\n  <div class=\"columns large-3 medium-6 text-center padding-bottom-large\">\n    <a class=\"button medium-12 columns training-background\" data-equalizer-watch (click)=\"goToRequestComplex()\">\n      <h3 class=\"icon icon-generic white-color\" data-icon=\"\\\"></h3>\n      <h5 class=\"white-color\" style=\"white-space: normal\">Request Complex</h5>\n    </a>\n  </div>\n  <div class=\"reveal\" id=\"citationModal\" data-reveal>\n    <h3>Citing Complex Portal</h3>\n    <span class=\"lead\">Complex Portal 2018: extended content and enhanced visualization tools for macromolecular complexes.</span>\n    <p>Meldal BHM et al [PMID: 30357405]</p>\n    <p><i>Nucl. Acids Res. (2019) doi: 10.1093/nar/gky1001</i></p>\n    <a class=\"button readmore\" href=\"//europepmc.org/abstract/MED/30357405\" target=\"_blank\">Abstract</a>\n    <a class=\"button readmore\"\n       href=\"https://academic.oup.com/nar/article/47/D1/D550/5144138\" target=\"_blank\">Full\n      text</a>\n\n    <button class=\"close-button\" data-close aria-label=\"Close modal\" type=\"button\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"columns large-3 medium-6 text-center padding-bottom-large\">\n    <a class=\"button medium-12 columns industry-background\" data-equalizer-watch (click)=\"goToDocumentation()\">\n      <h3 class=\"icon icon-common white-color\" data-icon=\"&#xf283;\"></h3>\n      <h5 class=\"white-color\">Documentation</h5>\n    </a>\n  </div>\n  <div class=\"columns large-3 medium-6 text-center padding-bottom-large\">\n    <a class=\"button medium-12 columns industry-background\" data-equalizer-watch data-open=\"citationModal\"\n       (click)=\"goToCitation()\">\n      <h3 class=\"icon icon-generic white-color\" data-icon=\"P\"></h3>\n      <h5 class=\"white-color\">How To Cite Us</h5>\n    </a>\n  </div>\n  <div class=\"columns large-3 medium-6 text-center padding-bottom-large\">\n    <a class=\"button medium-12 columns industry-background\" data-equalizer-watch (click)=\"goToTraining()\">\n      <h3 class=\"icon icon-generic white-color\" data-icon=\"t\"></h3>\n      <h5 class=\"white-color\">Training</h5>\n    </a>\n  </div>\n</div>\n");

/***/ }),

/***/ 34270:
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/home/twitter-display/twitter-display.component.html ***!
  \************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"twitter\">\n  <h3><i class=\"icon icon-common icon-twitter icon-spacer\"></i>Twitter</h3>\n  <a href=\"https://twitter.com/complexportal?ref_src=twsrc%5Etfw\"\n     class=\"twitter-follow-button\"\n     data-size=\"large\"\n     data-show-count=\"false\">\n    Follow @complexportal\n  </a>\n<!--  <a class=\"twitter-timeline\" data-lang=\"en\" data-height=\"530\" data-theme=\"light\"-->\n<!--     data-chrome=\"noheader noborders\" data-link-color=\"var(--primary)\" href=\"https://twitter.com/complexportal\">Tweets-->\n<!--    by Complex Portal</a>-->\n</div>\n");

/***/ }),

/***/ 68809:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/navigation/about/about.component.html ***!
  \**********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"columns margin-top-large margin-bottom-large\">\n  <h1>About</h1>\n  <ul class=\"tabs\" data-tabs data-deep-link=\"true\" data-update-history=\"false\" id=\"about-tabs\">\n    <li class=\"tabs-title is-active\"><a href=\"about#overview\" aria-selected=\"true\">Overview</a></li>\n    <li class=\"tabs-title\"><a href=\"about#requests\">Requests</a></li>\n    <li class=\"tabs-title\"><a href=\"about#license_privacy\">License and Privacy</a></li>\n    <li class=\"tabs-title\"><a href=\"about#code\">Code Repository</a></li>\n    <li class=\"tabs-title\"><a href=\"about#funding\">Funding</a></li>\n    <li class=\"tabs-title\"><a href=\"about#publications\">Publications</a></li>\n    <li class=\"tabs-title\"><a href=\"about#sab\">SAB</a></li>\n  </ul>\n\n  <div class=\"tabs-content\" data-tabs-content=\"about-tabs\">\n    <div class=\"tabs-panel is-active\" id=\"overview\">\n      <markdown [src]=overview></markdown>\n    </div>\n\n    <div class=\"tabs-panel\" id=\"requests\">\n      <markdown [src]=requests></markdown>\n    </div>\n\n    <div class=\"tabs-panel\" id=\"license_privacy\">\n      <markdown [src]=license_privacy></markdown>\n    </div>\n\n    <div class=\"tabs-panel\" id=\"code\">\n      <markdown [src]=code></markdown>\n    </div>\n\n    <div class=\"tabs-panel\" id=\"funding\">\n      <markdown [src]=funding></markdown>\n    </div>\n\n    <div class=\"tabs-panel\" id=\"publications\">\n      <markdown [src]=publications></markdown>\n    </div>\n\n    <div class=\"tabs-panel\" id=\"sab\">\n      <markdown [src]=sab></markdown>\n      <markdown [src]=imex_partners></markdown>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ 5090:
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/navigation/documentation/documentation.component.html ***!
  \**************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"columns margin-top-large margin-bottom-large\">\n  <h1>Documentation</h1>\n  <ul class=\"tabs\" data-tabs data-deep-link=\"true\" data-update-history=\"false\" id=\"documentation-tabs\">\n    <li class=\"tabs-title is-active\"><a href=\"documentation#data_content\" aria-selected=\"true\">Data Content</a>\n    <li class=\"tabs-title\"><a href=\"documentation#file_formats\">File Formats</a></li>\n    <li class=\"tabs-title\"><a href=\"documentation#query_syntax\">Query Syntax</a></li>\n  </ul>\n\n  <div class=\"tabs-content\" data-tabs-content=\"documentation-tabs\">\n    <div class=\"tabs-panel is-active\" id=\"data_content\">\n      <markdown [src]=data_content></markdown>\n    </div>\n\n    <div class=\"tabs-panel\" id=\"file_formats\">\n      <markdown [src]=file_formats></markdown>\n    </div>\n\n    <div class=\"tabs-panel\" id=\"query_syntax\">\n      <markdown [src]=query_syntax></markdown>\n    </div>\n\n  </div>\n</div>\n");

/***/ }),

/***/ 43501:
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/ontologies/ontologies.component.html ***!
  \*********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<input style=\"font-weight: normal\" size=\"35\" type=\"text\" name=\"q\" data-olswidget=\"select\" data-olsontology=\"\" data-selectpath=\"http://www.ebi.ac.uk/ols/\" olstype=\"\" id=\"local-searchbox\" placeholder=\"Enter the term you are looking for\" class=\"ac_input\"/>-->\n");

/***/ }),

/***/ 64303:
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/search/home-search/search.component.html ***!
  \*************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"columns medium-12 no-pad-left no-pad-right\">\n    <!-- local-search -->\n    <!-- if you do not have a local-search, delete the following form -->\n    <div id=\"content-search\" name=\"content-search\" >\n      <fieldset>\n        <div class=\"input-group margin-bottom-none\">\n          <input #query type=\"text\" name=\"first\" id=\"content-searchbox\" class=\"input-group-field\" (keydown.enter)=\"search(query.value, 'enter')\"\n                 placeholder=\"GO term(s), Gene name(s), UniProt AC(s), Protein name(s), Protein name(s), Complex AC\">\n          <div class=\"input-group-button\">\n            <input type=\"button\" name=\"submit\" value=\"1\" (click)=\"search(query.value, 'button')\"\n                   class=\"button icon icon-functional\">\n          </div>\n        </div>\n      </fieldset>\n    </div>\n  </div>\n  <div class=\"columns callout medium-12 margin-bottom-none\" style=\"font-size: smaller\">\n    <h5><i class=\"icon icon-generic padding-right-medium\" data-icon=\"?\"></i>Examples:</h5>\n    <div class=\"columns medium-4\">\n      <ul>\n        <li>Gene name(s): <a (click)=\"search('Ndc80', 'example')\">Ndc80</a></li>\n        <li>UniProt AC(s): <a (click)=\"search('Q05471', 'example')\">Q05471</a></li>\n      </ul>\n    </div>\n    <div class=\"columns medium-4\">\n      <ul>\n        <li>Complex AC: <a (click)=\"search('CPX-2158', 'example')\">CPX-2158</a></li>\n        <li>Complex Name: <a (click)=\"search('&quot;nuclear pore&quot;', 'example')\">\"nuclear pore\"</a></li>\n      </ul>\n    </div>\n    <div class=\"columns medium-4\">\n      <ul>\n        <li>GO term(s): <a (click)=\"search('GO:0016491', 'example')\">GO:0016491</a></li>\n        <li>List of ACs: <a (click)=\"search('Q15554, P54274, Q96AP0', 'example')\">Q15554, P54274, Q96AP0</a></li>\n       </ul>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ 71009:
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/search/local-search/local-search.component.html ***!
  \********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [hidden]=\"!display\" id=\"local-search\" name=\"local-search\">\n  <fieldset>\n    <div class=\"input-group margin-bottom-none\">\n      <input #searchTerm type=\"text\" name=\"first\" id=\"local-searchbox\" placeholder=\"Search this service\"\n             value=\"{{query}}\"\n             class=\"input-group-field\" (keydown.enter)=\"search(searchTerm.value, 'enter')\">\n      <div class=\"input-group-button\">\n        <input type=\"button\" name=\"submit\" value=\"1\" (click)=\"search(searchTerm.value, 'button')\"\n               class=\"button icon icon-functional\"></div>\n    </div>\n    <small>\n      <!-- If your search is more complex than just a keyword search, you can link to an Advanced Search -->\n      <!-- <span class=\"adv\"><a href=\"../search\" id=\"adv-search\" title=\"Advanced\">Advanced</a></span> | -->\n      <!-- Include some example searchterms - keep them short and few. -->\n      Examples:\n      <a (click)=\"search('GO:0016491', 'example')\">GO:0016491</a>\n      <a (click)=\"search('Ndc80', 'example')\">Ndc80</a>\n      <a (click)=\"search('Q05471', 'example')\">Q05471</a>\n      <a (click)=\"search('PCNA', 'example')\">PCNA</a>\n      <a (click)=\"search('CPX-2158', 'example')\">CPX-2158</a>\n      <a (click)=\"search('&quot;nuclear pore&quot;', 'example')\">\"nuclear pore\"</a>\n      <a (click)=\"search('Q15554, P54274, Q96AP0', 'example')\">Q15554, P54274, Q96AP0</a>\n    </small>\n  </fieldset>\n</div>\n<!-- /local-search -->\n");

/***/ }),

/***/ 86234:
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shared/loading-indicators/progress-bar/progress-bar.component.html ***!
  \***************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-progress-bar *ngIf=\"isDisplayed\"\n                 [color]=\"color\"\n                 [mode]=\"mode\">\n</mat-progress-bar>\n\n");

/***/ }),

/***/ 6849:
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = ".basket {\n  padding: 0.2rem 0;\n  border-radius: 2px;\n  font-size: 0.8rem;\n  line-height: 1;\n  white-space: nowrap;\n  cursor: default;\n  color: var(--primary);\n  background-color: white;\n  display: inline;\n}\n\n.basket.active {\n  padding: 0.2rem 0;\n  border-radius: 2px;\n  font-size: 0.8rem;\n  line-height: 1;\n  white-space: nowrap;\n  cursor: default;\n  color: white;\n  background-color: var(--primary);\n  display: inline;\n}\n\n/* NAVIGATION SUBMENU OVERRIDE EBI-GLOBAL TO REMOVE A WHITE RIGHT LINE */\n\n.no-border-submenu {\n  border-right: 0 !important;\n}\n\n.sticky-nav-container {\n  --global-margin: calc((100vw - 80rem) / -2);\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  background: var(--primary);\n  padding: 0 calc(-1 * var(--global-margin));\n  width: 100vw;\n  z-index: 4;\n  border-bottom: 1px solid white;\n}\n\n.sticky-nav-container nav {\n  display: flex;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGdDQUFnQztFQUNoQyxlQUFlO0FBQ2pCOztBQUVBLHdFQUF3RTs7QUFDeEU7RUFDRSwwQkFBMEI7QUFDNUI7O0FBR0E7RUFDRSwyQ0FBMkM7RUFDM0Msd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sMEJBQTBCO0VBQzFCLDBDQUEwQztFQUMxQyxZQUFZO0VBQ1osVUFBVTtFQUNWLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGFBQWE7QUFDZiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYXNrZXQge1xuICBwYWRkaW5nOiAwLjJyZW0gMDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuXG4uYmFza2V0LmFjdGl2ZSB7XG4gIHBhZGRpbmc6IDAuMnJlbSAwO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBsaW5lLWhlaWdodDogMTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbi8qIE5BVklHQVRJT04gU1VCTUVOVSBPVkVSUklERSBFQkktR0xPQkFMIFRPIFJFTU9WRSBBIFdISVRFIFJJR0hUIExJTkUgKi9cbi5uby1ib3JkZXItc3VibWVudSB7XG4gIGJvcmRlci1yaWdodDogMCAhaW1wb3J0YW50O1xufVxuXG5cbi5zdGlja3ktbmF2LWNvbnRhaW5lciB7XG4gIC0tZ2xvYmFsLW1hcmdpbjogY2FsYygoMTAwdncgLSA4MHJlbSkgLyAtMik7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gIHBhZGRpbmc6IDAgY2FsYygtMSAqIHZhcigtLWdsb2JhbC1tYXJnaW4pKTtcbiAgd2lkdGg6IDEwMHZ3O1xuICB6LWluZGV4OiA0O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XG59XG5cbi5zdGlja3ktbmF2LWNvbnRhaW5lciBuYXYge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4iXX0= */";

/***/ }),

/***/ 86433:
/*!*************************************************!*\
  !*** ./src/app/download/download.component.css ***!
  \*************************************************/
/***/ (function(module) {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb3dubG9hZC5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 63357:
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/***/ (function(module) {

"use strict";
module.exports = "footer a {\n  text-decoration:none;\n  border-width: 0;\n}\n\na, a:visited {\n  border: none;\n  padding: 2px;\n}\n\na img {\n  max-height: 75px;\n  max-width: 175px;\n  padding: 2px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQW9CO0VBQ3BCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2QiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjpub25lO1xuICBib3JkZXItd2lkdGg6IDA7XG59XG5cbmEsIGE6dmlzaXRlZCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMnB4O1xufVxuXG5hIGltZyB7XG4gIG1heC1oZWlnaHQ6IDc1cHg7XG4gIG1heC13aWR0aDogMTc1cHg7XG4gIHBhZGRpbmc6IDJweDtcbn1cbiJdfQ== */";

/***/ }),

/***/ 92698:
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/***/ (function(module) {

"use strict";
module.exports = ".definition {\n  background: #cde4e5;\n  font-family: \"Lato-Regular\", Helvetica, Arial, sans-serif;\n  border-radius: 4px;\n  vertical-align: middle;\n  padding: 15px\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQix5REFBeUQ7RUFDekQsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QjtBQUNGIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZWZpbml0aW9uIHtcbiAgYmFja2dyb3VuZDogI2NkZTRlNTtcbiAgZm9udC1mYW1pbHk6IFwiTGF0by1SZWd1bGFyXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgcGFkZGluZzogMTVweFxufVxuIl19 */";

/***/ }),

/***/ 49413:
/*!************************************************************************************!*\
  !*** ./src/app/home/newsletter-subscription/newsletter-subscription.component.css ***!
  \************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "\n@import \"//cdn-images.mailchimp.com/embedcode/slim-10_7.css\";\n/*noinspection CssUnknownTarget*/\nh3 {\n  border-bottom:solid;\n  border-color: #5ca23561;\n}\n#mc_embed_signup {\n  background: #fff;\n  clear: left;\n  font: 14px Helvetica, Arial, sans-serif;\n}\n#mc_embed_signup form {\n  padding: 0;\n}\ninput#mce-EMAIL.email {\n  width: 100% !important;\n}\ninput#mc-embedded-subscribe.button {\n  width: 100% !important;\n  background-color: var(--primary)\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ld3NsZXR0ZXItc3Vic2NyaXB0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLDREQUE0RDtBQUQ1RCxnQ0FBZ0M7QUFHaEM7RUFDRSxtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLHVDQUF1QztBQUN6QztBQUVBO0VBQ0UsVUFBVTtBQUNaO0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QjtBQUNGIiwiZmlsZSI6Im5ld3NsZXR0ZXItc3Vic2NyaXB0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKm5vaW5zcGVjdGlvbiBDc3NVbmtub3duVGFyZ2V0Ki9cbkBpbXBvcnQgXCIvL2Nkbi1pbWFnZXMubWFpbGNoaW1wLmNvbS9lbWJlZGNvZGUvc2xpbS0xMF83LmNzc1wiO1xuXG5oMyB7XG4gIGJvcmRlci1ib3R0b206c29saWQ7XG4gIGJvcmRlci1jb2xvcjogIzVjYTIzNTYxO1xufVxuXG4jbWNfZW1iZWRfc2lnbnVwIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY2xlYXI6IGxlZnQ7XG4gIGZvbnQ6IDE0cHggSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbn1cblxuI21jX2VtYmVkX3NpZ251cCBmb3JtIHtcbiAgcGFkZGluZzogMDtcbn1cblxuaW5wdXQjbWNlLUVNQUlMLmVtYWlsIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuaW5wdXQjbWMtZW1iZWRkZWQtc3Vic2NyaWJlLmJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpXG59XG4iXX0= */";

/***/ }),

/***/ 67811:
/*!********************************************************!*\
  !*** ./src/app/home/tile-menu/tile-menu.component.css ***!
  \********************************************************/
/***/ (function(module) {

"use strict";
module.exports = ".menu-blue {\n  background-color: #005c82;\n}\n\n.menu-gold {\n  background-color: #bca04d;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbGUtbWVudS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCIiwiZmlsZSI6InRpbGUtbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnUtYmx1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDVjODI7XG59XG5cbi5tZW51LWdvbGQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmNhMDRkO1xufVxuIl19 */";

/***/ }),

/***/ 66566:
/*!********************************************************************!*\
  !*** ./src/app/home/twitter-display/twitter-display.component.css ***!
  \********************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "#twitter {\n  max-height: 400px;\n}\n\nh3 {\n  border-bottom:solid;\n  border-color: #5ca23561;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR3aXR0ZXItZGlzcGxheS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6QiIsImZpbGUiOiJ0d2l0dGVyLWRpc3BsYXkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiN0d2l0dGVyIHtcbiAgbWF4LWhlaWdodDogNDAwcHg7XG59XG5cbmgzIHtcbiAgYm9yZGVyLWJvdHRvbTpzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiAjNWNhMjM1NjE7XG59XG4iXX0= */";

/***/ }),

/***/ 70332:
/*!******************************************************!*\
  !*** ./src/app/navigation/about/about.component.css ***!
  \******************************************************/
/***/ (function(module) {

"use strict";
module.exports = "/* See this issue to understand why we need ng-deep https://github.com/jfcere/ngx-markdown/issues/56*/\nmarkdown ::ng-deep h1 {\n  font-size: xx-large;\n}\nmarkdown ::ng-deep h2 {\n  font-size: x-large;\n}\nmarkdown ::ng-deep h3 {\n  font-size: large;\n}\nmarkdown ::ng-deep img {\n  display: block;\n  margin: 0 auto;\n  text-align: center;\n  height: 100px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUdBQXFHO0FBQ3JHO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsYUFBYTtBQUNmIiwiZmlsZSI6ImFib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTZWUgdGhpcyBpc3N1ZSB0byB1bmRlcnN0YW5kIHdoeSB3ZSBuZWVkIG5nLWRlZXAgaHR0cHM6Ly9naXRodWIuY29tL2pmY2VyZS9uZ3gtbWFya2Rvd24vaXNzdWVzLzU2Ki9cbm1hcmtkb3duIDo6bmctZGVlcCBoMSB7XG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG59XG5tYXJrZG93biA6Om5nLWRlZXAgaDIge1xuICBmb250LXNpemU6IHgtbGFyZ2U7XG59XG5tYXJrZG93biA6Om5nLWRlZXAgaDMge1xuICBmb250LXNpemU6IGxhcmdlO1xufVxubWFya2Rvd24gOjpuZy1kZWVwIGltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuIl19 */";

/***/ }),

/***/ 83791:
/*!**********************************************************************!*\
  !*** ./src/app/navigation/documentation/documentation.component.css ***!
  \**********************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "/* See this issue to understand why we need ng-deep https://github.com/jfcere/ngx-markdown/issues/56*/\nmarkdown ::ng-deep h1 {\n  font-size: xx-large;\n}\nmarkdown ::ng-deep h2 {\n  font-size: x-large;\n}\nmarkdown ::ng-deep h3 {\n  font-size: large;\n}\nmarkdown ::ng-deep img {\n  display: block;\n  margin: 0 auto;\n  text-align: center;\n  height: 100px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3VtZW50YXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxR0FBcUc7QUFDckc7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2YiLCJmaWxlIjoiZG9jdW1lbnRhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogU2VlIHRoaXMgaXNzdWUgdG8gdW5kZXJzdGFuZCB3aHkgd2UgbmVlZCBuZy1kZWVwIGh0dHBzOi8vZ2l0aHViLmNvbS9qZmNlcmUvbmd4LW1hcmtkb3duL2lzc3Vlcy81NiovXG5tYXJrZG93biA6Om5nLWRlZXAgaDEge1xuICBmb250LXNpemU6IHh4LWxhcmdlO1xufVxubWFya2Rvd24gOjpuZy1kZWVwIGgyIHtcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xufVxubWFya2Rvd24gOjpuZy1kZWVwIGgzIHtcbiAgZm9udC1zaXplOiBsYXJnZTtcbn1cbm1hcmtkb3duIDo6bmctZGVlcCBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cbiJdfQ== */";

/***/ }),

/***/ 5014:
/*!*****************************************************!*\
  !*** ./src/app/ontologies/ontologies.component.css ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvbnRvbG9naWVzLmNvbXBvbmVudC5jc3MifQ== */";

/***/ }),

/***/ 61326:
/*!*********************************************************!*\
  !*** ./src/app/search/home-search/search.component.css ***!
  \*********************************************************/
/***/ (function(module) {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWFyY2guY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 20597:
/*!****************************************************************!*\
  !*** ./src/app/search/local-search/local-search.component.css ***!
  \****************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2NhbC1zZWFyY2guY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 57814:
/*!***********************************************************************************!*\
  !*** ./src/app/shared/loading-indicators/progress-bar/progress-bar.component.css ***!
  \***********************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9ncmVzcy1iYXIuY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 4147:
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"name":"complex-portal-view","version":"1.0.3","license":"The Apache Software License, Version 2.0","angular-cli":{},"scripts":{"ng-high-memory":"node --max_old_space_size=8000 ./node_modules/@angular/cli/bin/ng","ng":"ng","start":"export NODE_OPTIONS=--openssl-legacy-provider; ng serve --proxy-config proxy-gxa.conf.json","start-with-proxy":"ng serve --proxy-config proxy.conf.json","publish-gh-pages":"export NODE_OPTIONS=--openssl-legacy-provider;rm -rf dist; node --max_old_space_size=8000 ./node_modules/@angular/cli/bin/ng build --output-path=dist --configuration production --base-href \\"https://complex-portal.github.io/complex-portal-view/\\"; sudo ngh -r https://github.com/Complex-Portal/complex-portal-view","publish-test-gh-pages":"export NODE_OPTIONS=--openssl-legacy-provider;rm -rf dist; node --max_old_space_size=8000 ./node_modules/@angular/cli/bin/ng build --output-path=dist --configuration test --base-href \\"https://complex-portal.github.io/complex-portal-view/\\"; sudo ngh -r https://github.com/Complex-Portal/complex-portal-view","build-prod":"export NODE_OPTIONS=--openssl-legacy-provider;rm -rf dist; node --max_old_space_size=8000 ./node_modules/@angular/cli/bin/ng build --configuration production --base-href \\"/complexportal/\\"","test":"ng test","pree2e":"webdriver-manager update --standalone false --gecko false","e2e":"protractor"},"private":true,"dependencies":{"@angular/animations":"^12.2.12","@angular/cdk":"^12.2.12","@angular/common":"^12.2.12","@angular/compiler":"^12.2.12","@angular/core":"^12.2.12","@angular/forms":"^12.2.12","@angular/material":"^12.2.12","@angular/platform-browser":"^12.2.12","@angular/platform-browser-dynamic":"^12.2.12","@angular/router":"^12.2.12","@ebi-gene-expression-group/anatomogram":"^2.4.0","@swissprot/rhea-reaction-visualizer":"0.0.23","@types/estree":"^1.0.0","angular-cli-ghpages":"^0.5.2","animate.css":"^3.5.2","classlist.js":"^1.1.20150312","complexviewer":"^2.2.2","core-js":"^2.5.3","ebi-framework":"1.3.8","expose-loader":"^5.0.0","jquery":"^3.4.1","litemol":"https://github.com/dsehnal/LiteMol/tarball/master","ngx-google-analytics":"^11.2.1","ngx-markdown":"^12.0.1","ngx-page-scroll":"^7.0.6","ngx-page-scroll-core":"^7.0.6","ngx-toastr":"^12.1.0","npm":"^5.7.1","react":"^16.14.0","rxjs":"^6.6.7","rxjs-compat":"^6.6.7","ts-helpers":"^1.1.2","ts-md5":"^1.2.4","tslib":"^2.0.0","zone.js":"~0.11.4"},"devDependencies":{"@angular-devkit/build-angular":"~12.2.12","@angular/cli":"^12.2.12","@angular/compiler-cli":"^12.2.12","@angular/language-service":"^12.2.12","@types/complexviewer":"^2.1.0","@types/foundation":"~5.5.30","@types/jasmine":"~3.6.0","@types/jquery":"^3.3.36","@types/node":"~14.0.1","codelyzer":"^6.0.0","jasmine-core":"^5.2.0","jasmine-spec-reporter":"^7.0.0","karma":"^6.4.4","karma-chrome-launcher":"^3.2.0","karma-cli":"^2.0.0","karma-coverage-istanbul-reporter":"^3.0.3","karma-jasmine":"^5.1.0","karma-jasmine-html-reporter":"^2.1.0","protractor":"~7.0.0","ts-node":"^5.0.1","tslint":"~6.1.0","typescript":"~4.3.5"}}');

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(14431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2015.js.map