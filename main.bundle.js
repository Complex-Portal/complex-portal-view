webpackJsonp(["main"],{

/***/ "./package.json":
/***/ (function(module, exports) {

module.exports = {"name":"complex-portal-view","version":"1.0.2","license":"The Apache Software License, Version 2.0","angular-cli":{},"scripts":{"ng":"ng","start":"ng serve","test":"ng test","pree2e":"webdriver-manager update --standalone false --gecko false","e2e":"protractor"},"private":true,"dependencies":{"@angular/animations":"^5.2.8","@angular/cdk":"^5.2.4","@angular/common":"^5.2.8","@angular/compiler":"^5.2.8","@angular/core":"^5.2.8","@angular/forms":"^5.2.8","@angular/http":"^5.2.8","@angular/material":"^5.2.4","@angular/platform-browser":"^5.2.8","@angular/platform-browser-dynamic":"^5.2.8","@angular/router":"^5.2.8","EBI-Icon-fonts":"https://github.com/ebiwd/EBI-Icon-fonts/tarball/v1.1","angular-cli-ghpages":"^0.5.2","angulartics2":"^2.4.0","animate.css":"^3.5.2","classlist.js":"^1.1.20150312","complexviewer":"https://github.com/MICommunity/ComplexViewer/tarball/master","core-js":"^2.5.3","ebi-framework":"^1.2.7","expose-loader":"^0.7.5","jquery":"3.3.1","litemol":"https://github.com/dsehnal/LiteMol/tarball/master","ng2-page-scroll":"4.0.0-beta.12","ngx-markdown":"^1.5.2","ngx-page-scroll":"^6.0.0-beta.1","ngx-toastr":"^8.3.0","npm":"^5.7.1","react":"^15.6.1","rxjs":"^5.5.6","svgsaver":"^0.9.0","ts-helpers":"^1.1.2","ts-md5":"^1.2.4","typescript":"^2.6.2","zone.js":"^0.8.20"},"devDependencies":{"@angular/cli":"^1.7.3","@angular/compiler-cli":"^5.2.8","@angular/language-service":"^5.2.8","@types/jasmine":"2.8.6","@types/node":"^9.4.7","codelyzer":"^4.2.1","jasmine-core":"^3.1.0","jasmine-spec-reporter":"^4.2.1","karma":"^2.0.0","karma-chrome-launcher":"^2.2.0","karma-cli":"^1.0.1","karma-coverage-istanbul-reporter":"^1.4.2","karma-jasmine":"^1.1.1","karma-jasmine-html-reporter":"^0.2.2","protractor":"^5.3.0","ts-node":"^5.0.1","tslint":"^5.9.1"}}

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/about/about.module": [
		"./src/app/about/about.module.ts",
		"about.module"
	],
	"app/basket/basket.module": [
		"./src/app/basket/basket.module.ts",
		"basket.module"
	],
	"app/complex/complex-details/complex-details.module": [
		"./src/app/complex/complex-details/complex-details.module.ts",
		"complex-details.module",
		"common"
	],
	"app/complex/complex-organisms/complex-organisms.module": [
		"./src/app/complex/complex-organisms/complex-organisms.module.ts",
		"complex-organisms.module",
		"common"
	],
	"app/complex/complex-results/complex-results.module": [
		"./src/app/complex/complex-results/complex-results.module.ts",
		"complex-results.module",
		"common"
	],
	"app/complex/complex.module": [
		"./src/app/complex/complex.module.ts",
		"complex.module"
	],
	"app/download/download.module": [
		"./src/app/download/download.module.ts",
		"download.module"
	],
	"app/home/home.module": [
		"./src/app/home/home.module.ts",
		"home.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__documentation_documentation_component__ = __webpack_require__("./src/app/documentation/documentation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__documentation_query_syntax_query_syntax_component__ = __webpack_require__("./src/app/documentation/query-syntax/query-syntax.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__documentation_data_content_data_content_component__ = __webpack_require__("./src/app/documentation/data-content/data-content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ontologies_ontologies_component__ = __webpack_require__("./src/app/ontologies/ontologies.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'complex', loadChildren: 'app/complex/complex.module#ComplexModule' },
    { path: 'home', loadChildren: 'app/home/home.module#HomeModule' },
    { path: 'download', loadChildren: 'app/download/download.module#DownloadModule' },
    { path: 'basket', loadChildren: 'app/basket/basket.module#BasketModule' },
    { path: 'about', loadChildren: 'app/about/about.module#AboutModule' },
    { path: 'documentation', component: __WEBPACK_IMPORTED_MODULE_2__documentation_documentation_component__["a" /* DocumentationComponent */] },
    { path: 'documentation/query_syntax', component: __WEBPACK_IMPORTED_MODULE_3__documentation_query_syntax_query_syntax_component__["a" /* QuerySyntaxComponent */] },
    { path: 'documentation/data_content', component: __WEBPACK_IMPORTED_MODULE_4__documentation_data_content_data_content_component__["a" /* DataContentComponent */] },
    { path: 'ontologies', component: __WEBPACK_IMPORTED_MODULE_5__ontologies_ontologies_component__["a" /* OntologiesComponent */] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forRoot(routes, { useHash: false })]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "a {\n  text-decoration:none;\n  border-width: 0;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div data-sticky-container>\n  <header id=\"masthead\" class=\"masthead\" data-sticky data-sticky-on=\"large\" data-top-anchor=\"content:top\"\n          data-btm-anchor=\"content:bottom\">\n    <!-- COMPLEX PORTAL HEADER SECTION -->\n    <div class=\"masthead-inner row\"> <!-- expanded -->\n      <!-- local-title -->\n      <div class=\"columns medium-6\" id=\"local-title\">\n        <h1><a routerLink=\"/home\" title=\"Back to Complex Portal homepage\">\n          <img src=\"assets/images/logo.png\" style=\"width: 43px; height: 63px;\"> Complex Portal</a>\n        </h1>\n      </div>\n      <!--/local-title -->\n\n      <div class=\"columns medium-6\">\n        <cp-local-search></cp-local-search>\n      </div>\n\n      <!-- local-nav -->\n      <nav>\n        <ul id=\"local-nav\" class=\"dropdown menu float-left\" data-description=\"navigational\">\n          <li><a routerLink=\"/home\">Home</a></li>\n          <li><a routerLink=\"/about\">About</a></li>\n          <li><a href=\"https://github.com/Complex-Portal/complex-portal-view/issues\" target=\"_blank\">Feedback</a></li>\n          <li><a [ngClass]=\"{'animated flash': onChangeInBasket}\" routerLink=\"/basket\">Basket\n            <i class=\"label\" style=\"border-radius: 2px; background-color: white\">\n              &nbsp;<strong>{{basketCount}}</strong>&nbsp;\n            </i></a>\n          </li>\n        </ul>\n      </nav>\n      <!-- /local-nav -->\n    </div>\n  </header>\n  <!-- END COMPLEX PORTAL HEADER SECTION -->\n\n  <cp-progress-bar></cp-progress-bar>\n</div>\n\n<!---->\n<div id=\"content\" role=\"main\" class=\"row\">\n  <!-- Suggested layout containers -->\n  <section>\n    <router-outlet></router-outlet>\n    <!-- Routed views go here -->\n  </section>\n  <!-- End suggested layout containers -->\n</div>\n\n\n<!-- Local footer -->\n\n<div class=\"row margin-top-medium expanded\">\n\n  <footer id=\"local-footer\" class=\"local-footer row expanded\" role=\"local-footer\">\n    <div class=\"row padding-top-large padding-bottom-large\">\n      <div class=\"columns medium-12\">\n        <p class=\"label secondary-color padding-left-large columns small-10\">Our contributors </p>\n        <p class=\"label secondary-color padding-left-large columns small-2\">{{version}}-{{environmentName}}</p>\n        <table>\n          <tbody>\n          <tr>\n            <td><a href=\"//www.ceitec.eu\" target=\"_blank\"><img src=\"assets/images/contributors/Ceitec.png\"></a></td>\n            <td><a href=\"//www.evidenceontology.org/\" target=\"_blank\"><img src=\"assets/images/contributors/eco.png\"></a>\n            </td>\n            <td><a href=\"//www.ucl.ac.uk/functional-gene-annotation/cardiovascular\" target=\"_blank\"><img\n              src=\"assets/images/contributors/imex_acg_s.png\"></a></td>\n            <td><a href=\"http://matrixdb.univ-lyon1.fr\" target=\"_blank\"><img\n              src=\"assets/images/contributors/matrixdb.png\"></a></td>\n            <!-- We need the protocol, matrixdb don't support https-->\n            <td><a href=\"//mint.bio.uniroma2.it\" target=\"_blank\"><img src=\"assets/images/contributors/Mint.png\"></a>\n            <td><a href=\"//www.ebi.ac.uk/pdbe/\" target=\"_blank\"><img src=\"assets/images/contributors/PDBe.png\"></a>\n            <td><a href=\"//www.yeastgenome.org\" target=\"_blank\"><img src=\"assets/images/contributors/SGD.png\"></a>\n            </td>\n            <td><a href=\"//www.sib.swiss\" target=\"_blank\"><img src=\"assets/images/contributors/sib.png\"></a></td>\n            <td><a href=\"//www.uniprot.org\" target=\"_blank\"><img src=\"assets/images/contributors/uniprot.png\"></a>\n            </td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </footer>\n\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_loading_indicators_progress_bar_progress_bar_component__ = __webpack_require__("./src/app/shared/loading-indicators/progress-bar/progress-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_basket_service_basket_service__ = __webpack_require__("./src/app/shared/basket/service/basket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angulartics2__ = __webpack_require__("./node_modules/angulartics2/dist/es5/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angulartics2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angulartics2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var version = __webpack_require__("./package.json").version;
var environmentName = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].evn;
var AppComponent = /** @class */ (function () {
    function AppComponent(angulartics2GoogleAnalytics, router, basketService) {
        this.angulartics2GoogleAnalytics = angulartics2GoogleAnalytics;
        this.router = router;
        this.basketService = basketService;
        this._basketCount = 0;
        this._EBI_BASE_URL = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].ebi_base_url;
        this._basketCount = this.basketService.getBasketCount();
        this._version = version;
        this._environmentName = environmentName;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.observeRouteChange();
        this.observeBasketChange();
        this.initialiseFoundation();
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        // Init some libs.
        // this.initialiseFoundation();
        this.initialiseGoogleAnalytics();
        // this.initialiseFoundationHacks();
    };
    // Candidate for utils.
    AppComponent.prototype.initialiseFoundation = function () {
        $(document).foundation();
        $(document).foundationExtendEBI();
    };
    AppComponent.prototype.initialiseGoogleAnalytics = function () {
        ga('create', __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].analytics_id, 'none');
    };
    AppComponent.prototype.observeRouteChange = function () {
        // For every router change, we load the ProgressBar by default.
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof __WEBPACK_IMPORTED_MODULE_3__angular_router__["NavigationEnd"])) {
                __WEBPACK_IMPORTED_MODULE_2__shared_loading_indicators_progress_bar_progress_bar_component__["a" /* ProgressBarComponent */].display();
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    AppComponent.prototype.observeBasketChange = function () {
        var _this = this;
        this.basketService.onBasketCountChanged$.subscribe(function (count) {
            _this._basketCount = count;
            _this._onChangeInBasket = true;
            var ctx = _this;
            setTimeout(function () {
                ctx._onChangeInBasket = false;
            }, 1000);
        });
    };
    Object.defineProperty(AppComponent.prototype, "version", {
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
        get: function () {
            return this._version;
        },
        set: function (value) {
            this._version = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "environmentName", {
        get: function () {
            return this._environmentName;
        },
        set: function (value) {
            this._environmentName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "basketCount", {
        get: function () {
            return this._basketCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "EBI_BASE_URL", {
        get: function () {
            return this._EBI_BASE_URL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "onChangeInBasket", {
        get: function () {
            return this._onChangeInBasket;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'cp-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_angulartics2__["Angulartics2GoogleAnalytics"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_4__shared_basket_service_basket_service__["a" /* BasketService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__complex_shared_service_complex_portal_service__ = __webpack_require__("./src/app/complex/shared/service/complex-portal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_notification_service_notification_service__ = __webpack_require__("./src/app/shared/notification/service/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angulartics2__ = __webpack_require__("./node_modules/angulartics2/dist/es5/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angulartics2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angulartics2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__complex_complex_details_complex_function_reactome_crossreferences_service_reactome_service__ = __webpack_require__("./src/app/complex/complex-details/complex-function/reactome-crossreferences/service/reactome.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__complex_complex_details_complex_references_euro_pmc_crossreferences_service_euro_pmc_service__ = __webpack_require__("./src/app/complex/complex-details/complex-references/euro-pmc-crossreferences/service/euro-pmc.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_ols_service_ols_service__ = __webpack_require__("./src/app/shared/ols/service/ols.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_basket_service_basket_service__ = __webpack_require__("./src/app/shared/basket/service/basket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ts_md5_dist_md5__ = __webpack_require__("./node_modules/ts-md5/dist/md5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ts_md5_dist_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_ts_md5_dist_md5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_loading_indicators_progress_bar_progress_bar_component__ = __webpack_require__("./src/app/shared/loading-indicators/progress-bar/progress-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__search_local_search_local_search_component__ = __webpack_require__("./src/app/search/local-search/local-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__documentation_documentation_component__ = __webpack_require__("./src/app/documentation/documentation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__documentation_query_syntax_query_syntax_component__ = __webpack_require__("./src/app/documentation/query-syntax/query-syntax.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__documentation_data_content_data_content_component__ = __webpack_require__("./src/app/documentation/data-content/data-content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ontologies_ontologies_component__ = __webpack_require__("./src/app/ontologies/ontologies.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__shared_google_analytics_service_google_analytics_service__ = __webpack_require__("./src/app/shared/google-analytics/service/google-analytics.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__shared_local_storage_service_local_storage_service__ = __webpack_require__("./src/app/shared/local-storage/service/local-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__search_service_search_service__ = __webpack_require__("./src/app/search/service/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_ngx_markdown__ = __webpack_require__("./node_modules/ngx-markdown/dist/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_ngx_markdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26_ngx_markdown__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* tslint:disable:max-line-length */



























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_14__shared_loading_indicators_progress_bar_progress_bar_component__["a" /* ProgressBarComponent */],
                __WEBPACK_IMPORTED_MODULE_16__search_local_search_local_search_component__["a" /* LocalSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_19__documentation_documentation_component__["a" /* DocumentationComponent */],
                __WEBPACK_IMPORTED_MODULE_20__documentation_query_syntax_query_syntax_component__["a" /* QuerySyntaxComponent */],
                __WEBPACK_IMPORTED_MODULE_21__documentation_data_content_data_content_component__["a" /* DataContentComponent */],
                __WEBPACK_IMPORTED_MODULE_22__ontologies_ontologies_component__["a" /* OntologiesComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["HttpClientModule"],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser_animations__["a" /* NoopAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_15_ngx_toastr__["a" /* ToastrModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8_angulartics2__["Angulartics2Module"].forRoot([__WEBPACK_IMPORTED_MODULE_8_angulartics2__["Angulartics2GoogleAnalytics"]]),
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["a" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_26_ngx_markdown__["MarkdownModule"].forRoot(),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__complex_shared_service_complex_portal_service__["a" /* ComplexPortalService */], __WEBPACK_IMPORTED_MODULE_7__shared_notification_service_notification_service__["a" /* NotificationService */], __WEBPACK_IMPORTED_MODULE_9__complex_complex_details_complex_function_reactome_crossreferences_service_reactome_service__["a" /* ReactomeService */], __WEBPACK_IMPORTED_MODULE_10__complex_complex_details_complex_references_euro_pmc_crossreferences_service_euro_pmc_service__["a" /* EuroPmcService */], __WEBPACK_IMPORTED_MODULE_11__shared_ols_service_ols_service__["a" /* OlsService */], __WEBPACK_IMPORTED_MODULE_12__shared_basket_service_basket_service__["a" /* BasketService */], __WEBPACK_IMPORTED_MODULE_24__shared_local_storage_service_local_storage_service__["a" /* LocalStorageService */], __WEBPACK_IMPORTED_MODULE_13_ts_md5_dist_md5__["Md5"], __WEBPACK_IMPORTED_MODULE_23__shared_google_analytics_service_google_analytics_service__["a" /* GoogleAnalyticsService */], __WEBPACK_IMPORTED_MODULE_25__search_service_search_service__["a" /* SearchService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/complex/complex-details/complex-function/reactome-crossreferences/service/reactome.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReactomeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var baseURL = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].reactome_base_url;
var ReactomeService = /** @class */ (function () {
    function ReactomeService(http) {
        this.http = http;
    }
    /**
     * Returns all related pathways for a given complex stable identifier
     * @param id - a reactome stable identifier
     * @returns {Observable<R|T>}
     */
    ReactomeService.prototype.findRelatedPathways = function (id) {
        return this.http.get(baseURL + '/ContentService/data/pathways/low/entity/' + id)
            .catch(this.handleError);
    };
    /**
     * Returns the name of a complex by a given complex stable identifier
     * @param id - a complex stable identifier
     * @returns {Observable<R|T>}
     */
    ReactomeService.prototype.getComplexName = function (id) {
        return this.http.get(baseURL + '/ContentService/data/query/' + id + '/displayName', { observe: 'response', responseType: 'text' })
            // .map((res: HttpResponse) => res.body.text())
            .catch(this.handleError);
    };
    ReactomeService.prototype.handleError = function (err) {
        if (err.error instanceof Error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err);
        }
        else {
            console.error(err.message ? err.message : err.toString());
        }
    };
    ReactomeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["HttpClient"]])
    ], ReactomeService);
    return ReactomeService;
}());



/***/ }),

/***/ "./src/app/complex/complex-details/complex-references/euro-pmc-crossreferences/service/euro-pmc.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EuroPmcService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var baseURL = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].europepmc_base_url;
var EuroPmcService = /** @class */ (function () {
    function EuroPmcService(http) {
        this.http = http;
    }
    EuroPmcService.prototype.getPublicationInformation = function (id) {
        return this.http.get(baseURL + '/webservices/rest/search?query=ext_id:' + id + '%20src:med&format=json')
            .catch(this.handleError);
    };
    EuroPmcService.prototype.handleError = function (err) {
        if (err.error instanceof Error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err);
        }
        else {
            console.error(err.message ? err.message : err.toString());
        }
    };
    EuroPmcService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["HttpClient"]])
    ], EuroPmcService);
    return EuroPmcService;
}());



/***/ }),

/***/ "./src/app/complex/shared/service/complex-portal.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComplexPortalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var baseURL = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].complex_ws_base_url;
var ComplexPortalService = /** @class */ (function () {
    function ComplexPortalService(http) {
        this.http = http;
    }
    /**
     * Get a specific complex from the WS
     * @param ac
     * @returns {Observable<ComplexDetails>}
     */
    ComplexPortalService.prototype.getComplex = function (ac) {
        var url = baseURL + "/details/" + ac;
        return this.http.get(url)
            .catch(this.handleError);
    };
    /**
     * Get a specific complex from the WS
     * @param complexAc
     * @returns {Observable<ComplexDetails>}
     */
    ComplexPortalService.prototype.getComplexAc = function (complexAc) {
        var url = baseURL + "/complex/" + complexAc;
        return this.http.get(url)
            .catch(this.handleError);
    };
    /**
     *
     * @returns {Observable<SpeciesFacet[]>}
     */
    ComplexPortalService.prototype.getComplexOrganisms = function () {
        return this.findComplex('*').map(function (complexSearchResult) {
            return complexSearchResult.facets['species_f'];
        });
    };
    /**
     * Get a specif complex from the WS
     * @param ac
     * @returns {Observable<any>}
     * TODO: Define MI-JSON maybe, but as we don't work with it and only pass it on we never implemented the model
     */
    ComplexPortalService.prototype.getComplexMIJSON = function (ac) {
        return this.http.get(baseURL + '/export/' + ac).catch(this.handleError);
    };
    /**
     * Find a complex based on indexed term
     * @param query
     * @param speciesFilter
     * @param bioRoleFilter
     * @param interactorTypeFilter
     * @param currentPageIndex
     * @param pageSize
     * @param format
     * @param facets
     * @returns {Observable<ComplexSearchResult>}
     */
    ComplexPortalService.prototype.findComplex = function (query, speciesFilter, bioRoleFilter, interactorTypeFilter, currentPageIndex, pageSize, format, facets) {
        if (speciesFilter === void 0) { speciesFilter = []; }
        if (bioRoleFilter === void 0) { bioRoleFilter = []; }
        if (interactorTypeFilter === void 0) { interactorTypeFilter = []; }
        if (currentPageIndex === void 0) { currentPageIndex = 1; }
        if (pageSize === void 0) { pageSize = 10; }
        if (format === void 0) { format = 'json'; }
        if (facets === void 0) { facets = 'species_f,ptype_f,pbiorole_f'; }
        var filters = '';
        if (speciesFilter.length !== 0) {
            filters += 'species_f:(' + '"' + speciesFilter.join('"AND"') + '"' + '),';
        }
        if (bioRoleFilter.length !== 0) {
            filters += 'pbiorole_f:(' + '"' + bioRoleFilter.join('"AND"') + '"' + '),';
        }
        if (interactorTypeFilter.length !== 0) {
            filters += 'ptype_f:(' + '"' + interactorTypeFilter.join('"AND"') + '"' + '),';
        }
        /** HttpParams is immutable. Its set() method returns a new HttpParams, without mutating the original one **/
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["HttpParams"]()
            .set('first', ((currentPageIndex * pageSize) - pageSize).toString())
            .set('number', pageSize.toString())
            .set('format', format)
            .set('facets', facets)
            .set('filters', filters);
        return this.http.get(baseURL + '/search/' + query, { params: params })
            .catch(this.handleError);
    };
    ComplexPortalService.prototype.handleError = function (err) {
        if (err.error instanceof Error) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(err);
        }
        else {
            console.error(err.message ? err.message : err.toString());
        }
    };
    ComplexPortalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["HttpClient"]])
    ], ComplexPortalService);
    return ComplexPortalService;
}());



/***/ }),

/***/ "./src/app/documentation/data-content/data-content.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/documentation/data-content/data-content.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"columns medium-12\">\n    <h2>Data Content</h2>\n    <div class=\"medium-12\">\n      <h3>\n        What can be described as a complex\n      </h3>\n      <p>\n        A stable set of (two or more) interacting macromolecules such as proteins which can be co-purified by an\n        acceptable method and have been shown to exist as an isolated, functional unit in vivo. Any interacting,\n        integral non-protein molecules (e.g. small molecules, nucleic acids) may also be included.\n      </p>\n    </div>\n\n    <div class=\"columns medium-6\">\n      <h3>What should <b>NOT</b> be captured:</h3>\n      <ul>\n        <li>\n          Enzyme/substrate, receptor/ligand or any similar transient interactions unless these are a critical part of\n          the complex assembly (e.g. PDGF receptors only become 'dimeric' when linked by the dimeric ligand forming a\n          tetramer).\n        </li>\n        <li>\n          Proteins associated in a pulldown/coimmunoprecipitation with no functional link or any evidence that this is\n          a defined biological entity rather than a loose affinity complex.\n        </li>\n        <li>\n          Any literature complex where the only evidence is based on genetic interaction data.\n        </li>\n        <li>\n          Partial complexes\n        </li>\n      </ul>\n    </div>\n    <div class=\"columns medium-6\">\n      <h3>Tricky cases we <b>DO</b> capture:</h3>\n      <ul>\n        <li>\n          Substrates or ligands if the enzyme or receptor complex only forms in their presence (see PDGF receptors\n          above, e.g. <a (click)=\"goToComplex('EBI-9082861')\">EBI-9082861</a>).\n        </li>\n        <li>\n          Homologous proteins, with the same functionality, which would be inferred based on homology of the\n          genome-encoded components made primarily on functional conservation between the two systems to form a\n          complex but for which no physical link has been demonstrated, e.g. proteins A and B have been shown to\n          physically interact and form a functional complex, protein C is a homologue of protein B by sequence\n          similarity and is know to have the same function as B but protein A-C interaction has not been demonstrated\n          experimentally (E.g. SUMO - E1 ligase complexes where there is interaction evidence for binding with SUMO1\n          (<a (click)=\"goToComplex('EBI-9349603')\">EBI-9349603</a>) but not with\n          SUMO2 (<a (click)=\"goToComplex('EBI-9345927')\">EBI-9345927</a>)). These\n          complexes are tagged with <a\n          href=\"http://www.ebi.ac.uk/ols/ontologies/eco/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FECO_0005547\"\n          target=\"_blank\">ECO:0005547 <i class=\"icon icon-generic small\" data-icon=\"x\"></i></a> biological system\n          reconstruction evidence based on inference from background scientific knowledge used in manual assertion.\n        </li>\n        <li>\n          Complexes that lack full experimental evidence but are commonly regarded as existing, e.g. transmembrane\n          receptors (e.g <a (click)=\"goToComplex('EBI-9008426')\">EBI-9008426</a>,\n          GABA receptors) for which only pharmacological evidence exists. These complexes\n          are tagged with <a (click)=\"goToECO('ECO:0000306')\">ECO:0000306 <i class=\"icon icon-generic small\" data-icon=\"x\"></i></a>\n          - inferred from background scientific knowledge by manual assertion.\n        </li>\n      </ul>\n    </div>\n    <div class=\"medium-12\">\n      <h3>Complex Nomenclature</h3>\n      <dl>\n        <dt>\n          <b> Complex recommended name</b>\n        </dt>\n        <dd>\n          The most informative, well accepted name in the literature, that is intuitive to the user. Where possible,\n          this will be the same as the equivalent component term in GO. The term should always end in the word 'complex'\n          or homo'n'mer. The recommended name is kept consistent when a complex is conserved across a taxonomic range.\n        </dd>\n      </dl>\n      <dl>\n        <dt><b>Complex systematic name</b></dt>\n        <dd>Derived using the Reactome rules for naming complexes. In principle this is a string of gene names of the\n          participants of the complex separated by a colon (e.g. \"fiba:fibb:fibg\"). The order is determined by the order\n          of synthesis of the complex. Where several participants join at the same time, or the order is unknown,\n          alphanumeric order is used. Recommended gene names for each model organism will be used; therefore the\n          systematic name may not be consistent when a complex is conserved across a taxonomic range.\n        </dd>\n      </dl>\n      <dl>\n        <dt><b>Complex synonym</b></dt>\n        <dd>All other possible names the complex is known by or can be described as.</dd>\n      </dl>\n      <dl>\n        <dt><b>Short label</b></dt>\n        <dd>Currently an obligate part of the data model, it may be possible to remove these once the model is updated.\n          Currently, an appropriate designation for the complex with species indicated using the UniProt five letter\n          code e.g. fibrinogen_human, tfiid_mouse. When the same complex is conserved across a taxonomic range, the root\n          name is maintained across all entries e.g. fibrinogen_human, fibrinogen_mouse, fibrinogen_bovin.\n        </dd>\n      </dl>\n    </div>\n    <div class=\"medium-12\">\n      <h3>Complex Participants</h3>\n      <dl>\n        <dt><b>Proteins</b></dt>\n        <dd>All proteins are derived from, and linked to, UniProtKB, ideally UniProtKB/Swiss-Prot.\n          Isoform and chain designators will be used when appropriate. Should one or more isoforms exist, annotation\n          will\n          be to the canonical protein entry unless either only one isoform is known to exist in the complex or different\n          isoforms give the complex different properties. In the latter case, a separate entry should be made for each\n          variation with detail given in \"curated-complex\" or \"complex-properties\" as appropriate (see below for details\n          on complex variants).\n        </dd>\n      </dl>\n      <dl>\n        <dt><b>Small molecules /polysaccharides</b></dt>\n        <dd>All small molecules are derived from, and linked to, ChEBI. Small\n          molecules are entered if they are integral to the complex or bind to the complex as part of its function, e.g.\n          cofactors, electron donors/acceptors, such as ATP, H+. Enzyme targets are not added as participants. For\n          example, ATP is entered as a cofactor if the enzyme function is NOT primarily an ATPase (e.g. <a (click)=\"goToComplex('EBI-9008779')\">EBI-9008779</a>\n          gyrase_ecoli) but NOT entered for ATPases where it is a substrate (e.g. <a (click)=\"goToComplex('EBI-9007893')\">EBI-9007893</a> mfd-uvra_ecoli, a DNA\n          translocase).\n        </dd>\n      </dl>\n      <dl>\n        <dt><b>Nucleic acids</b></dt>\n        <dd>Nucleic acids are only entered as participants when they are an obligate part of the\n          complex. Non-coding RNA participants are linked to RNACentral, all other nucleic acid types are created as\n          generic molecules linked to generic ChEBI identifiers. For complexes which assemble and then bind to a nucleic\n          acid, this function is indicated in free text and using GO terms such as GO:0003677 DNA binding.\n        </dd>\n      </dl>\n    </div>\n    <div class=\"medium-12\">\n      <h3>Participant Features</h3>\n      <ul>\n        <li>Any features known to be involved in the reactions are mapped to the underlying sequence, as given in the\n          source database, and cross-referenced to InterPro when possible. If a PTM is required for complex activation,\n          this is curated as a feature and the effects detailed in the annotation field 'Complex-properties'.\n        </li>\n        <li>Binding sites or residues within proteins, known to directly interact within the complex, are shown as\n          linked features in the graphical views.\n        </li>\n        <li>Stoichiometry is added, when known. Stoichiometry=0 is used for participants with no information about\n          stoichiometry. It is common that stoichiometry is only know for some participants in the same complex.\n        </li>\n      </ul>\n    </div>\n    <div class=\"medium-12\">\n      <h3>Interaction Type</h3>\n      <p>\n        This will always be 'Physical association' - the controlled vocabulary term indicating that these proteins are\n        present in the same complex - unless there are one or two protein species involved in which case it will be\n        'Direct interaction'. Proteins directly binding to each other within a larger complex will be indicated by\n        linked features (see above).\n      </p>\n    </div>\n    <div class=\"medium-12\">\n      <h3>Free text annotation</h3>\n      <dl>\n        <dt><b>Curated-complex</b></dt>\n        <dd>A brief, free-text description of the function of the complex, written in the same\n          style as a UniProtKB/Swiss-Prot entry. For example \"Required for processive DNA replication and may act as a\n          replicative helicase during DNA synthesis. Plays a central role in S-phase genome stability.\".\n        </dd>\n      </dl>\n      <dl>\n        <dt><b>Complex-properties</b></dt>\n        <dd>Details of physical properties of the complex. This may include details about the\n          topology, varying (as opposed to absolute) stoichiometry, molecular weight and Stoke's radius of the complex.\n        </dd>\n      </dl>\n      <dl>\n        <dt><b>Complex-assembly</b></dt>\n        <dd>Experimentally verified structural assembly e.g. homodimer, heterohexamer. Assemblies\n          which have been computationally predicted are not included.\n        </dd>\n      </dl>\n      <dl>\n        <dt><b>Disease</b></dt>\n        <dd>Only added when the disease state has been specifically linked to the protein when in the\n          complex.\n        </dd>\n      </dl>\n      <dl>\n        <dt><b>Ligand</b></dt>\n        <dd>When a complex has one or more ligands transiently associated with it, they will be listed\n          under this heading.\n        </dd>\n      </dl>\n    </div>\n    <div class=\"medium-12\">\n      <h3>Structured Annotations</h3>\n      <p>All structured annotation is entered as database/controlled vocabulary cross-reference with an appropriate\n        qualifier term.</p>\n      <dl>\n        <dt><b>Gene Ontology</b></dt>\n        <dd>Used to indicate the function, process and component of the complex as a whole. The\n          Function term, in particular, may not be true for all members of the complex, for example enzyme complexes\n          will\n          be annotated with a catalytic function term even when some subunits play only a regulatory role.\n        </dd>\n      </dl>\n      <dl>\n        <dt><b>Experimental evidence</b></dt>\n        <dd>When high quality evidence for the existence of this complex is present in an\n          IMEx database, this will be added manually as a cross-reference so that it may be downloaded in the same file\n          as\n          the complex.\n        </dd>\n      </dl>\n      <dl>\n        <dt><b>3D structure</b></dt>\n        <dd>Representative PDB cross-references will be added when the complex has been crystallised\n          in its entirety.\n        </dd>\n      </dl>\n      <dl>\n        <dt><b>Electron microscopy</b></dt>\n        <dd>Representative EMDB cross-references will be added when the complex has been\n          visualised by electron microscopy in its entirety.\n        </dd>\n      </dl>\n      <dl>\n        <dt><b>Evidence codes</b></dt>\n        <dd>The following ECO codes will be used to indicate the strength of evidence that a\n          complex exists:\n        </dd>\n        <table class=\"hover\">\n          <thead>\n          <tr>\n            <th width=\"150\">ECO Code</th>\n            <th width=\"300\">Name</th>\n            <th>Description</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr>\n            <td><a (click)=\"goToECO('ECO:0005542')\">ECO:0005542 <i class=\"icon icon-generic small\" data-icon=\"x\"></i></a></td>\n            <td>biological system reconstruction evidence by experimental evidence from single species used\n              in manual assertion\n            </td>\n            <td>Indicates that experimental evidence for the complexes exists but only by combining data\n              from several experiments. Experimental data can be found in an IMEx database, PDB or EMDB.\n            </td>\n          </tr>\n          <tr>\n            <td><a (click)=\"goToECO('ECO:0000353')\">ECO:0000353 <i class=\"icon icon-generic small\" data-icon=\"x\"></i></a></td>\n            <td>physical interaction evidence used in manual assertion</td>\n            <td>Indicates that experimental evidence for the complexes exists in a single experiment. This will consist\n              of either a cross-reference to experimental data in an IMEx database, PDB or EMDB.\n            </td>\n          </tr>\n          <tr>\n            <td><a (click)=\"goToECO('ECO:0005543')\">ECO:0005543 <i class=\"icon icon-generic small\" data-icon=\"x\"></i></a></td>\n            <td>biological system reconstruction evidence by experimental evidence from mixed species used in\n              manual assertion\n            </td>\n            <td>Indicates that experimental evidence for the complexes exists in a single experiment but the constructs\n              are derived from homologous gene products in different species. Experimental data can be found in an IMEx\n              database, PDB or EMDB.\n            </td>\n          </tr>\n          <tr>\n            <td><a (click)=\"goToECO('ECO:0005544')\">ECO:0005544 <i class=\"icon icon-generic small\" data-icon=\"x\"></i></a></td>\n            <td>biological system reconstruction evidence based on orthology evidence used in manual assertion</td>\n            <td>Indicates only limited experimental evidence exists for a complex in one species (e.g. mouse) but it is\n              desirable to curate the complex which has been curated in another species (e.g. human). Sequences and\n              number\n              of genome-encoded components are fairly conserved but some divergence may be observed. The complex with\n              the\n              experimental evidence has to be cross-referenced with the qualifier = \"inferred-from\" and must have the\n              ECO:0000353, ECO:0005542 or ECO:0005543 tag.\n            </td>\n          </tr>\n          <tr>\n            <td><a (click)=\"goToECO('ECO:0005546')\">ECO:0005546 <i class=\"icon icon-generic small\" data-icon=\"x\"></i></a></td>\n            <td>biological system reconstruction evidence based on paralogy evidence used in manual assertion</td>\n            <td>Indicates only limited experimental evidence exists for one complex but full experimental evidence\n              exists for a similar complex of the same species. Sequences and number of genome-encoded components are\n              fairly conserved but some divergence may be observed. The complex with the experimental evidence has to be\n              cross-referenced with the qualifier = \"inferred-from\" and must have the ECO:0000353, ECO:0005542 or\n              ECO:0005543 tag.\n            </td>\n          </tr>\n          <tr>\n            <td><a (click)=\"goToECO('ECO:0005547')\">ECO:0005547 <i class=\"icon icon-generic small\" data-icon=\"x\"></i></a></td>\n            <td>biological system reconstruction evidence based on inference from background scientific\n              knowledge used in manual assertion\n            </td>\n            <td>Is used if no or only partial experimental evidence is present but the\n              complex is generally assumed to exist. Functional studies or ligand binding evidence from pharmacological\n              experiments are often used for the reconstruction of such complexes.\n            </td>\n          </tr>\n          </tbody>\n        </table>\n      </dl>\n      <dl>\n        <dt><b>Enzymatic activity</b></dt>\n        <dd>The E.C. number linked to IntEnz will be added when an enzyme complex is described.</dd>\n      </dl>\n      <dl>\n        <dt><b>Additional literature</b></dt>\n        <dd>Review articles or experimental data not appropriate for entering into IntAct\n          are added.\n        </dd>\n      </dl>\n      <dl>\n        <dt><b>Pathway information</b></dt>\n        <dd>For human complexes, crosslinks to Reactome put complexes into a pathway context.\n          Note that the definition of a complex is different in Reactome and in many cases a one-to-many relationship\n          exists.\n        </dd>\n      </dl>\n      <dl>\n        <dt><b>Disease information</b></dt>\n        <dd>Cross references to the Experimental Factor Ontology (EFO) or their contributing databases (e.g. Orphanet,\n          Human Phenotype Ontology) may be added if a complex or a chain when within that complex has been linked to a\n          specific disease condition.\n        </dd>\n      </dl>\n      <dl>\n        <dt><b>Drug target information</b></dt>\n        <dd>Cross-links to ChEMBL are used to indicate complexes which have been used as\n          drug targets.\n        </dd>\n      </dl>\n    </div>\n    <div class=\"medium-12\">\n      <h3>Complex Variants</h3>\n      <p>\n        If variant forms of a complex exist i.e. the same functional unit can exist in alternate forms with differing\n        macromolecular composition, these are curated as separate objects. For example, PDGF can exist as a PDGF-A\n        homodimer, PDGF-B homodimer, PDGF-AB heterodimer, PDGF-C homodimer and a PDGF-D homodimer If the variants have\n        well-accepted names, e.g. PDGF-AB, these may be used as the primary name. If not, then the recommended name is\n        qualified by variant 1, variant 2 e.g. TRAMP complex variant 1 (<a (click)=\"goToComplex('EBI-2352894')\">EBI-2352894</a>).\n      </p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/documentation/data-content/data-content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_loading_indicators_progress_bar_progress_bar_component__ = __webpack_require__("./src/app/shared/loading-indicators/progress-bar/progress-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DataContentComponent = /** @class */ (function () {
    function DataContentComponent(router, titleService) {
        this.router = router;
        this.titleService = titleService;
    }
    DataContentComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('Complex Portal - Data Content');
        __WEBPACK_IMPORTED_MODULE_1__shared_loading_indicators_progress_bar_progress_bar_component__["a" /* ProgressBarComponent */].hide();
    };
    DataContentComponent.prototype.goToComplex = function (ac) {
        this.router.navigate(['complex', ac]);
    };
    DataContentComponent.prototype.goToECO = function (term) {
        this.goTo(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].ols_eco_url + term);
    };
    DataContentComponent.prototype.goToGO = function (term) {
        this.goTo(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].ols_go_url + term);
    };
    DataContentComponent.prototype.goTo = function (url) {
        window.open(url, '_blank');
    };
    DataContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'cp-data-content',
            template: __webpack_require__("./src/app/documentation/data-content/data-content.component.html"),
            styles: [__webpack_require__("./src/app/documentation/data-content/data-content.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["Title"]])
    ], DataContentComponent);
    return DataContentComponent;
}());



/***/ }),

/***/ "./src/app/documentation/documentation.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/documentation/documentation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"columns medium-12\">\n    <div class=\"intro-unit\">\n      <h2>Documentation</h2>\n      <div class=\"row button-grid small-up-1 medium-up-2 large-up-2 margin-top-xlarge no-pad-right\" data-equalizer\n           data-equalize-on=\"medium\" id=\"large-button-grid\">\n        <div class=\"column  padding-bottom-large\">\n          <p>Query Syntax contains details about the types of search that can be performed and the syntax required.</p>\n          <a class=\"button medium-12 columns text-center\" data-equalizer-watch routerLink=\"/documentation/query_syntax\">\n            <h3 class=\"icon icon-functional white-color\" data-icon=\"1\"></h3>\n            <h5 class=\"white-color\">Query Syntax</h5>\n          </a>\n        </div>\n        <div class=\"column  padding-bottom-large\">\n          <p>Data Content documents the type of data and features that are captured for each complex.</p>\n          <a class=\"button medium-12 columns text-center\" data-equalizer-watch routerLink=\"/documentation/data_content\">\n            <h3 class=\"icon icon-generic  white-color\" data-icon=\";\"></h3>\n            <h5 class=\"white-color\">Data Content</h5>\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/documentation/documentation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_loading_indicators_progress_bar_progress_bar_component__ = __webpack_require__("./src/app/shared/loading-indicators/progress-bar/progress-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DocumentationComponent = /** @class */ (function () {
    function DocumentationComponent(titleService) {
        this.titleService = titleService;
    }
    DocumentationComponent.prototype.ngOnInit = function () {
    };
    DocumentationComponent.prototype.ngAfterViewInit = function () {
        this.titleService.setTitle('Complex Portal - Documentation');
        __WEBPACK_IMPORTED_MODULE_1__shared_loading_indicators_progress_bar_progress_bar_component__["a" /* ProgressBarComponent */].hide();
    };
    DocumentationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'cp-documentation',
            template: __webpack_require__("./src/app/documentation/documentation.component.html"),
            styles: [__webpack_require__("./src/app/documentation/documentation.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["Title"]])
    ], DocumentationComponent);
    return DocumentationComponent;
}());



/***/ }),

/***/ "./src/app/documentation/query-syntax/query-syntax.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/documentation/query-syntax/query-syntax.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <markdown [src]=source></markdown>\n</div>\n"

/***/ }),

/***/ "./src/app/documentation/query-syntax/query-syntax.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuerySyntaxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_loading_indicators_progress_bar_progress_bar_component__ = __webpack_require__("./src/app/shared/loading-indicators/progress-bar/progress-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuerySyntaxComponent = /** @class */ (function () {
    function QuerySyntaxComponent(titleService) {
        this.titleService = titleService;
        this.source = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].complex_portal_documentation_url + 'cql.md';
    }
    QuerySyntaxComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('Complex Portal - Query Syntax');
        __WEBPACK_IMPORTED_MODULE_2__shared_loading_indicators_progress_bar_progress_bar_component__["a" /* ProgressBarComponent */].hide();
    };
    QuerySyntaxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'cp-query-syntax',
            template: __webpack_require__("./src/app/documentation/query-syntax/query-syntax.component.html"),
            styles: [__webpack_require__("./src/app/documentation/query-syntax/query-syntax.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["Title"]])
    ], QuerySyntaxComponent);
    return QuerySyntaxComponent;
}());



/***/ }),

/***/ "./src/app/ontologies/ontologies.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ontologies/ontologies.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<input style=\"font-weight: normal\" size=\"35\" type=\"text\" name=\"q\" data-olswidget=\"select\" data-olsontology=\"\" data-selectpath=\"http://www.ebi.ac.uk/ols/\" olstype=\"\" id=\"local-searchbox\" placeholder=\"Enter the term you are looking for\" class=\"ac_input\"/>-->\n"

/***/ }),

/***/ "./src/app/ontologies/ontologies.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OntologiesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OntologiesComponent = /** @class */ (function () {
    function OntologiesComponent(router, titleService) {
        this.router = router;
        this.titleService = titleService;
    }
    OntologiesComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('Complex Portal - Ontologies');
        this.router.navigate(['home']);
    };
    OntologiesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'cp-ontologies',
            template: __webpack_require__("./src/app/ontologies/ontologies.component.html"),
            styles: [__webpack_require__("./src/app/ontologies/ontologies.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["Title"]])
    ], OntologiesComponent);
    return OntologiesComponent;
}());



/***/ }),

/***/ "./src/app/search/local-search/local-search.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/search/local-search/local-search.component.html":
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!display\" id=\"local-search\" name=\"local-search\">\n  <fieldset>\n    <div class=\"input-group margin-bottom-none\">\n      <input #searchTerm type=\"text\" name=\"first\" id=\"local-searchbox\" placeholder=\"Search this service\"\n             value=\"{{query}}\"\n             class=\"input-group-field\" (keydown.enter)=\"search(searchTerm.value, 'enter')\">\n      <div class=\"input-group-button\">\n        <input type=\"button\" name=\"submit\" value=\"1\" (click)=\"search(searchTerm.value, 'button')\"\n               class=\"button icon icon-functional\"></div>\n    </div>\n    <small class=\"\">\n      <!-- If your search is more complex than just a keyword search, you can link to an Advanced Search -->\n      <!-- <span class=\"adv\"><a href=\"../search\" id=\"adv-search\" title=\"Advanced\">Advanced</a></span> | -->\n      <!-- Include some example searchterms - keep them short and few. -->\n      Examples:\n      <a (click)=\"search('GO:0016491', 'example')\">GO:0016491</a>\n      <a (click)=\"search('Ndc80', 'example')\">Ndc80</a>\n      <a (click)=\"search('Q05471', 'example')\">Q05471</a>\n      <a (click)=\"search('PCNA', 'example')\">PCNA</a>\n      <a (click)=\"search('CPX-2158', 'example')\">CPX-2158</a>\n      <a (click)=\"search('nuclear pore', 'example')\">nuclear pore</a>\n      <a (click)=\"search('Q15554, P54274, Q96AP0', 'example')\">Q15554, P54274, Q96AP0</a>\n    </small>\n  </fieldset>\n</div>\n<!-- /local-search -->\n"

/***/ }),

/***/ "./src/app/search/local-search/local-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_google_analytics_types_category_enum__ = __webpack_require__("./src/app/shared/google-analytics/types/category.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_search_service__ = __webpack_require__("./src/app/search/service/search.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LocalSearchComponent = /** @class */ (function () {
    function LocalSearchComponent(location, router, route, searchService) {
        this.location = location;
        this.router = router;
        this.route = route;
        this.searchService = searchService;
    }
    LocalSearchComponent.prototype.ngOnInit = function () {
        this.extractQueryFromURL();
    };
    // TODO: REVIEW THIS METHOD
    LocalSearchComponent.prototype.extractQueryFromURL = function () {
        var _this = this;
        // Retrieve query from URL. Would be nice to have it in the service.. but time etc.
        this.router.events.subscribe(function (val) {
            if (_this.location.path().startsWith('/home')) {
                _this._display = false;
            }
            else {
                _this._display = true;
                if (_this.location.path().startsWith('/complex/search')) {
                    _this.route
                        .queryParams
                        .subscribe(function (queryParams) {
                        _this._query = queryParams['query'];
                    });
                }
                else if (_this.location.path().startsWith('/complex/organisms')) {
                    _this._query = '';
                }
                else if (_this.location.path().startsWith('/complex')) {
                    _this._query = ''; // this.location.path().split('/')[2];
                }
                else {
                    _this._query = '';
                }
            }
        });
    };
    LocalSearchComponent.prototype.search = function (query, typeOfButton) {
        this.searchService.search(query, __WEBPACK_IMPORTED_MODULE_3__shared_google_analytics_types_category_enum__["a" /* Category */].header, typeOfButton);
    };
    Object.defineProperty(LocalSearchComponent.prototype, "display", {
        get: function () {
            return this._display;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalSearchComponent.prototype, "query", {
        get: function () {
            return this._query;
        },
        enumerable: true,
        configurable: true
    });
    LocalSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'cp-local-search',
            template: __webpack_require__("./src/app/search/local-search/local-search.component.html"),
            styles: [__webpack_require__("./src/app/search/local-search/local-search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_4__service_search_service__["a" /* SearchService */]])
    ], LocalSearchComponent);
    return LocalSearchComponent;
}());



/***/ }),

/***/ "./src/app/search/service/search.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_google_analytics_service_google_analytics_service__ = __webpack_require__("./src/app/shared/google-analytics/service/google-analytics.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchService = /** @class */ (function () {
    function SearchService(router, googleAnalyticsService) {
        this.router = router;
        this.googleAnalyticsService = googleAnalyticsService;
    }
    SearchService.prototype.search = function (query, category, typeOfButton) {
        this._query = query;
        this.googleAnalyticsService.fireSearchInvokerEvent(category, typeOfButton);
        this.googleAnalyticsService.fireSearchTermEvent(category, query);
        this.router.navigate(['complex/search'], { queryParams: { query: query, page: 1 } });
    };
    Object.defineProperty(SearchService.prototype, "query", {
        get: function () {
            return this._query;
        },
        set: function (value) {
            this._query = value;
        },
        enumerable: true,
        configurable: true
    });
    SearchService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_1__shared_google_analytics_service_google_analytics_service__["a" /* GoogleAnalyticsService */]])
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ "./src/app/shared/basket/model/basketItem.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasketItem; });
var BasketItem = /** @class */ (function () {
    function BasketItem(name, id, date, organism) {
        this._name = name;
        this._id = id;
        this._date = date;
        this._organism = organism;
    }
    Object.defineProperty(BasketItem.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasketItem.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasketItem.prototype, "date", {
        get: function () {
            return this._date;
        },
        set: function (value) {
            this._date = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasketItem.prototype, "organism", {
        get: function () {
            return this._organism;
        },
        set: function (value) {
            this._organism = value;
        },
        enumerable: true,
        configurable: true
    });
    return BasketItem;
}());



/***/ }),

/***/ "./src/app/shared/basket/service/basket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_basketItem__ = __webpack_require__("./src/app/shared/basket/model/basketItem.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ts_md5_dist_md5__ = __webpack_require__("./node_modules/ts-md5/dist/md5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ts_md5_dist_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ts_md5_dist_md5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notification_service_notification_service__ = __webpack_require__("./src/app/shared/notification/service/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__google_analytics_service_google_analytics_service__ = __webpack_require__("./src/app/shared/google-analytics/service/google-analytics.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__local_storage_service_local_storage_service__ = __webpack_require__("./src/app/shared/local-storage/service/local-storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var COMPLEX_STORE = 'cp_complex_store';
var BasketService = /** @class */ (function () {
    function BasketService(notificationService, googleAnalyticsService) {
        this.notificationService = notificationService;
        this.googleAnalyticsService = googleAnalyticsService;
        this._complexBasket = {};
        this.onBasketCountChanged$ = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.initialiseBasket();
    }
    BasketService.prototype.initialiseBasket = function () {
        var complexStore = __WEBPACK_IMPORTED_MODULE_5__local_storage_service_local_storage_service__["a" /* LocalStorageService */].getLocalStorage(COMPLEX_STORE);
        if (!complexStore) {
            __WEBPACK_IMPORTED_MODULE_5__local_storage_service_local_storage_service__["a" /* LocalStorageService */].saveInLocalStorage(COMPLEX_STORE, this._complexBasket);
            this.initialiseBasket();
        }
        else {
            var keys = Object.keys(complexStore);
            for (var i = 0; i < keys.length; i++) {
                var complex = complexStore[keys[i]];
                if (complex) {
                    this._complexBasket[keys[i]] = new __WEBPACK_IMPORTED_MODULE_1__model_basketItem__["a" /* BasketItem */](complex._name, complex._id, complex._date, complex._organism);
                }
            }
        }
    };
    BasketService.prototype.saveInBasket = function (name, id, organism) {
        var newBasketItem = new __WEBPACK_IMPORTED_MODULE_1__model_basketItem__["a" /* BasketItem */](name, id, new Date(), organism);
        if (!this.isInBasket(id)) {
            this._complexBasket[__WEBPACK_IMPORTED_MODULE_2_ts_md5_dist_md5__["Md5"].hashStr(id).toString()] = newBasketItem;
            __WEBPACK_IMPORTED_MODULE_5__local_storage_service_local_storage_service__["a" /* LocalStorageService */].saveInLocalStorage(COMPLEX_STORE, this._complexBasket);
            this.onBasketCountChanged$.emit(this.getBasketCount());
            this.googleAnalyticsService.fireAddToBasketEvent(id);
            this.notificationService.onAddedComplexToBasket(id);
        }
    };
    BasketService.prototype.deleteFromBasket = function (key) {
        var id = this._complexBasket[key].id;
        delete this._complexBasket[key];
        __WEBPACK_IMPORTED_MODULE_5__local_storage_service_local_storage_service__["a" /* LocalStorageService */].saveInLocalStorage(COMPLEX_STORE, this._complexBasket);
        this.onBasketCountChanged$.emit(this.getBasketCount());
        this.googleAnalyticsService.fireRemoveFromBasketEvent(id);
        this.notificationService.onRemovedComplexFromBasket(id);
    };
    BasketService.prototype.isInBasket = function (id) {
        var key = __WEBPACK_IMPORTED_MODULE_2_ts_md5_dist_md5__["Md5"].hashStr(id).toString();
        return !!this._complexBasket[key];
    };
    Object.defineProperty(BasketService.prototype, "complexBasket", {
        get: function () {
            return this._complexBasket;
        },
        enumerable: true,
        configurable: true
    });
    BasketService.prototype.getBasketCount = function () {
        return Object.keys(this._complexBasket).length;
    };
    BasketService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__notification_service_notification_service__["a" /* NotificationService */], __WEBPACK_IMPORTED_MODULE_4__google_analytics_service_google_analytics_service__["a" /* GoogleAnalyticsService */]])
    ], BasketService);
    return BasketService;
}());



/***/ }),

/***/ "./src/app/shared/google-analytics/service/google-analytics.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleAnalyticsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angulartics2__ = __webpack_require__("./node_modules/angulartics2/dist/es5/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angulartics2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angulartics2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__types_category_enum__ = __webpack_require__("./src/app/shared/google-analytics/types/category.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__types_action_enum__ = __webpack_require__("./src/app/shared/google-analytics/types/action.enum.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GoogleAnalyticsService = /** @class */ (function () {
    function GoogleAnalyticsService(angulartics2) {
        this.angulartics2 = angulartics2;
    }
    GoogleAnalyticsService.prototype.invokeCustomEvent = function (value, category, label) {
        this.angulartics2.eventTrack.next({
            action: __WEBPACK_IMPORTED_MODULE_3__types_action_enum__["a" /* Action */][value],
            properties: { category: __WEBPACK_IMPORTED_MODULE_2__types_category_enum__["a" /* Category */][category], label: label }
        });
    };
    GoogleAnalyticsService.prototype.fireDownloadResourceEvent = function (site, type) {
        this.invokeCustomEvent(__WEBPACK_IMPORTED_MODULE_3__types_action_enum__["a" /* Action */].download, site, type);
    };
    GoogleAnalyticsService.prototype.fireOpenExternalLinkEvent = function (site, type) {
        this.invokeCustomEvent(__WEBPACK_IMPORTED_MODULE_3__types_action_enum__["a" /* Action */].externalLink, site, type);
    };
    GoogleAnalyticsService.prototype.fireClickHomeTileEvent = function (type) {
        this.invokeCustomEvent(__WEBPACK_IMPORTED_MODULE_3__types_action_enum__["a" /* Action */].Tile, __WEBPACK_IMPORTED_MODULE_2__types_category_enum__["a" /* Category */].home, type);
    };
    GoogleAnalyticsService.prototype.fireGoToDetailsSectionEvent = function (type) {
        this.invokeCustomEvent(__WEBPACK_IMPORTED_MODULE_3__types_action_enum__["a" /* Action */].GoToMenu, __WEBPACK_IMPORTED_MODULE_2__types_category_enum__["a" /* Category */].details, type);
    };
    GoogleAnalyticsService.prototype.fireSearchTermEvent = function (site, type) {
        this.invokeCustomEvent(__WEBPACK_IMPORTED_MODULE_3__types_action_enum__["a" /* Action */].search, site, type);
    };
    // To identify if user use 'enter' or if they click with the mouse on the magnifier.
    // 'site' is not the actual site, but if it is the homepage or the header search box
    GoogleAnalyticsService.prototype.fireSearchInvokerEvent = function (site, type) {
        this.invokeCustomEvent(__WEBPACK_IMPORTED_MODULE_3__types_action_enum__["a" /* Action */].searchInvoker, site, type);
    };
    GoogleAnalyticsService.prototype.fireAddToBasketEvent = function (type) {
        this.invokeCustomEvent(__WEBPACK_IMPORTED_MODULE_3__types_action_enum__["a" /* Action */].AddToBasket, __WEBPACK_IMPORTED_MODULE_2__types_category_enum__["a" /* Category */].basket, type);
    };
    GoogleAnalyticsService.prototype.fireRemoveFromBasketEvent = function (type) {
        this.invokeCustomEvent(__WEBPACK_IMPORTED_MODULE_3__types_action_enum__["a" /* Action */].RemoveFromBasket, __WEBPACK_IMPORTED_MODULE_2__types_category_enum__["a" /* Category */].basket, type);
    };
    GoogleAnalyticsService.prototype.fireInteractionWithViewerEvent = function (viewer, type) {
        this.invokeCustomEvent(__WEBPACK_IMPORTED_MODULE_3__types_action_enum__["a" /* Action */].ComplexVisualisation, viewer, type);
    };
    GoogleAnalyticsService.prototype.fireAddedFilterEvent = function (type) {
        this.invokeCustomEvent(__WEBPACK_IMPORTED_MODULE_3__types_action_enum__["a" /* Action */].AddResultFilter, __WEBPACK_IMPORTED_MODULE_2__types_category_enum__["a" /* Category */].ResultFilter, type);
    };
    GoogleAnalyticsService.prototype.fireRemovedFilterEvent = function (type) {
        this.invokeCustomEvent(__WEBPACK_IMPORTED_MODULE_3__types_action_enum__["a" /* Action */].RemoveResultFilter, __WEBPACK_IMPORTED_MODULE_2__types_category_enum__["a" /* Category */].ResultFilter, type);
    };
    GoogleAnalyticsService.prototype.fireMultiFilterEvent = function (type) {
        this.invokeCustomEvent(__WEBPACK_IMPORTED_MODULE_3__types_action_enum__["a" /* Action */].FilterByMultipleFields, __WEBPACK_IMPORTED_MODULE_2__types_category_enum__["a" /* Category */].ResultFilter, type);
    };
    GoogleAnalyticsService.prototype.fireAPIRequestErrorEvent = function (api, type) {
        this.invokeCustomEvent(__WEBPACK_IMPORTED_MODULE_3__types_action_enum__["a" /* Action */].APIResquestError, api, type);
    };
    GoogleAnalyticsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angulartics2__["Angulartics2"]])
    ], GoogleAnalyticsService);
    return GoogleAnalyticsService;
}());



/***/ }),

/***/ "./src/app/shared/google-analytics/types/action.enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Action; });
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
})(Action || (Action = {}));


/***/ }),

/***/ "./src/app/shared/google-analytics/types/category.enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Category; });
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
})(Category || (Category = {}));


/***/ }),

/***/ "./src/app/shared/loading-indicators/progress-bar/progress-bar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/loading-indicators/progress-bar/progress-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-progress-bar *ngIf=\"isDisplayed\"\n                 [color]=\"color\"\n                 [mode]=\"mode\">\n</mat-progress-bar>\n\n"

/***/ }),

/***/ "./src/app/shared/loading-indicators/progress-bar/progress-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressBarComponent; });
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

var ProgressBarComponent = /** @class */ (function () {
    function ProgressBarComponent() {
        this._color = 'primary';
        this._mode = 'query';
        ProgressBarComponent_1.show = false;
    }
    ProgressBarComponent_1 = ProgressBarComponent;
    ProgressBarComponent.display = function () {
        ProgressBarComponent_1.show = true;
    };
    ProgressBarComponent.hide = function () {
        setTimeout(function () {
            ProgressBarComponent_1.show = false;
        }, 1000);
    };
    ProgressBarComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(ProgressBarComponent.prototype, "isDisplayed", {
        get: function () {
            return ProgressBarComponent_1.show;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressBarComponent.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            this._color = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressBarComponent.prototype, "mode", {
        get: function () {
            return this._mode;
        },
        set: function (value) {
            this._mode = value;
        },
        enumerable: true,
        configurable: true
    });
    var ProgressBarComponent_1;
    ProgressBarComponent = ProgressBarComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'cp-progress-bar',
            template: __webpack_require__("./src/app/shared/loading-indicators/progress-bar/progress-bar.component.html"),
            styles: [__webpack_require__("./src/app/shared/loading-indicators/progress-bar/progress-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProgressBarComponent);
    return ProgressBarComponent;
}());



/***/ }),

/***/ "./src/app/shared/local-storage/service/local-storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LocalStorageService = /** @class */ (function () {
    function LocalStorageService() {
    }
    LocalStorageService.saveInLocalStorage = function (key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    };
    LocalStorageService.getLocalStorage = function (key) {
        return JSON.parse(localStorage.getItem(key));
    };
    LocalStorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], LocalStorageService);
    return LocalStorageService;
}());



/***/ }),

/***/ "./src/app/shared/notification/service/notification.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationService = /** @class */ (function () {
    function NotificationService(toastrService) {
        this.toastrService = toastrService;
        toastrService.toastrConfig.closeButton = true; // displayedElements close button
        toastrService.toastrConfig.timeOut = 5000; // time to live
        toastrService.toastrConfig.preventDuplicates = true;
        toastrService.toastrConfig.progressBar = true;
        toastrService.toastrConfig.tapToDismiss = false;
        toastrService.toastrConfig.enableHtml = true;
    }
    NotificationService.prototype.addSuccessNotification = function (successNotification) {
        this.toastrService.success(successNotification);
    };
    NotificationService.prototype.addErrorNotification = function (errorNotification) {
        this.toastrService.error(errorNotification, 'Something went wrong :(');
    };
    NotificationService.prototype.addAnnouncementNotification = function (announcementNotification, options) {
        this.toastrService.info(announcementNotification, 'Just to let you know!', options);
    };
    NotificationService.prototype.addHintNotification = function (hintNotification) {
        this.toastrService.warning(hintNotification, 'Just to let you know!');
    };
    NotificationService.prototype.onAPIRequestError = function (resource) {
        this.addErrorNotification('We couldn\'t reach the ' + resource + ' webservice. ' +
            'Please try again later or contact us if issue persists!');
    };
    NotificationService.prototype.onAddedComplexToBasket = function (id) {
        this.addSuccessNotification('Stored ' + id + ' in your basket!');
    };
    NotificationService.prototype.onRemovedComplexFromBasket = function (id) {
        this.addSuccessNotification('Removed ' + id + ' in your basket!');
    };
    NotificationService.prototype.onFeatureNotAvailableYet = function () {
        this.addHintNotification('This feature is not available yet. But it is coming soon! :-)');
    };
    NotificationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_toastr__["b" /* ToastrService */]])
    ], NotificationService);
    return NotificationService;
}());



/***/ }),

/***/ "./src/app/shared/ols/service/ols.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OlsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var baseURL = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].ols_base_url;
var OlsService = /** @class */ (function () {
    function OlsService(http) {
        this.http = http;
    }
    /**
     * Get a name of efo xref
     * @param id
     * @returns {Observable<R>}
     */
    OlsService.prototype.getOrphaNetName = function (id) {
        return this.http.get(baseURL + '/ordo/terms?iri=http://www.orpha.net/ORDO/' + id.replace(':', '_'))
            .map(function (response) { return response; })
            .catch(this.handleError);
    };
    /**
     * Get a name of efo xref
     * @param id
     * @returns {Observable<R>}
     */
    OlsService.prototype.getEfoName = function (id) {
        return this.http.get(baseURL + '/efo/terms?iri=http://www.ebi.ac.uk/efo/' + id.replace(':', '_'))
            .catch(this.handleError);
    };
    OlsService.prototype.handleError = function (err) {
        if (err.error instanceof Error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err);
        }
        else {
            console.error(err.message ? err.message : err.toString());
        }
    };
    OlsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["HttpClient"]])
    ], OlsService);
    return OlsService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// Environment for production
var EBI_BASE_URL = 'https://www.ebi.ac.uk/';
var COMPLEX_LOCAL_BASE_URL = 'https://wwwdev.ebi.ac.uk/';
var LICENSE_URL = 'https://creativecommons.org/licenses/by/4.0/';
var REACTOME_BASE_URL = 'https://reactomedev.oicr.on.ca';
var INTACT_FTP_BASE_URL = 'ftp://ftp.ebi.ac.uk/pub/databases/intact/';
var COMPLEX__FTP_BASE_URL = INTACT_FTP_BASE_URL + 'complex/';
var COMPLEX_PORTAL_DOCUMENTATION_URL = 'https://raw.githubusercontent.com/Complex-Portal/complex-portal-documentation/master/';
var environment = {
    production: false,
    evn: 'dev',
    analytics_id: 'UA-672146-11',
    ebi_base_url: EBI_BASE_URL,
    license_url: LICENSE_URL,
    complex_portal_documentation_url: COMPLEX_PORTAL_DOCUMENTATION_URL,
    complex_ws_base_url: COMPLEX_LOCAL_BASE_URL + 'intact/complex-ws',
    europepmc_base_url: EBI_BASE_URL + 'europepmc',
    pdb_base_url: EBI_BASE_URL + 'pdbe',
    ols_base_url: EBI_BASE_URL + 'ols/api/ontologies',
    ols_go_url: EBI_BASE_URL + 'ols/ontologies/go/terms?obo_id=',
    ols_eco_url: EBI_BASE_URL + 'ols/ontologies/eco/terms?obo_id=',
    reactome_base_url: REACTOME_BASE_URL,
    complex_current: COMPLEX__FTP_BASE_URL + 'current',
    complex_tab: COMPLEX__FTP_BASE_URL + 'current/complextab/',
    complex_tab_readme: COMPLEX__FTP_BASE_URL + 'current/complextab/README.htm',
    complex_psi25: COMPLEX__FTP_BASE_URL + 'current/psi25/',
    complex_psi30: COMPLEX__FTP_BASE_URL + 'current/psi30/',
    intact_base_url: EBI_BASE_URL + 'intact',
    complex_portal_support_url: EBI_BASE_URL + 'support/complexportal',
    intact_training_url: EBI_BASE_URL + 'intact/resources/training',
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("./src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map