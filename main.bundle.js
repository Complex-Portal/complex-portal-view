webpackJsonp(["main"],{

/***/ "./package.json":
/***/ (function(module, exports) {

module.exports = {"name":"complex-portal-view","version":"1.0.2","license":"The Apache Software License, Version 2.0","angular-cli":{},"scripts":{"ng":"ng","start":"ng serve","start-with-proxy":"ng serve --proxy-config proxy.conf.json","test":"ng test","pree2e":"webdriver-manager update --standalone false --gecko false","e2e":"protractor"},"private":true,"dependencies":{"@angular/animations":"^5.2.8","@angular/cdk":"^5.2.4","@angular/common":"^5.2.8","@angular/compiler":"^5.2.8","@angular/core":"^5.2.8","@angular/forms":"^5.2.8","@angular/http":"^5.2.8","@angular/material":"^5.2.4","@angular/platform-browser":"^5.2.8","@angular/platform-browser-dynamic":"^5.2.8","@angular/router":"^5.2.8","@ebi-gene-expression-group/anatomogram":"^2.4.0","angular-cli-ghpages":"^0.5.2","angulartics2":"^2.4.0","animate.css":"^3.5.2","classlist.js":"^1.1.20150312","complexviewer":"^2.1.2","core-js":"^2.5.3","ebi-framework":"1.3.8","expose-loader":"^0.7.5","jquery":"^3.4.1","litemol":"https://github.com/dsehnal/LiteMol/tarball/master","ngx-markdown":"^1.5.2","ngx-page-scroll":"^4.0.2","ngx-toastr":"^8.3.0","npm":"^5.7.1","react":"^15.6.1","rxjs":"^5.5.6","svgsaver":"^0.9.0","ts-helpers":"^1.1.2","ts-md5":"^1.2.4","zone.js":"^0.8.20"},"devDependencies":{"@angular/cli":"^1.7.3","@angular/compiler-cli":"^5.2.8","@angular/language-service":"^5.2.8","@types/jasmine":"2.8.6","@types/node":"~14.0.1","codelyzer":"^4.2.1","jasmine-core":"^3.1.0","jasmine-spec-reporter":"^4.2.1","karma":"^2.0.0","karma-chrome-launcher":"^2.2.0","karma-cli":"^1.0.1","karma-coverage-istanbul-reporter":"^1.4.2","karma-jasmine":"^1.1.1","karma-jasmine-html-reporter":"^0.2.2","protractor":"^5.3.0","ts-node":"^5.0.1","tslint":"^5.9.1","typescript":"~2.9.2"}}

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ontologies_ontologies_component__ = __webpack_require__("./src/app/ontologies/ontologies.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navigation_about_about_component__ = __webpack_require__("./src/app/navigation/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__download_download_component__ = __webpack_require__("./src/app/download/download.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'complex',
        loadChildren: 'app/complex/complex.module#ComplexModule'
    },
    {
        path: 'basket',
        loadChildren: 'app/basket/basket.module#BasketModule'
    },
    {
        path: 'about',
        component: __WEBPACK_IMPORTED_MODULE_3__navigation_about_about_component__["a" /* AboutComponent */],
    },
    {
        path: 'download',
        component: __WEBPACK_IMPORTED_MODULE_4__download_download_component__["a" /* DownloadComponent */]
    },
    {
        path: 'ontologies',
        component: __WEBPACK_IMPORTED_MODULE_2__ontologies_ontologies_component__["a" /* OntologiesComponent */]
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forRoot(routes, { useHash: false })],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "footer a {\n  text-decoration:none;\n  border-width: 0;\n}\n\n.basket {\n  padding: 0.2rem 0;\n  border-radius: 2px;\n  font-size: 0.8rem;\n  line-height: 1;\n  white-space: nowrap;\n  cursor: default;\n  color: #007c82;\n  background-color: white;\n  display: inline;\n}\n\n.basket.active {\n  padding: 0.2rem 0;\n  border-radius: 2px;\n  font-size: 0.8rem;\n  line-height: 1;\n  white-space: nowrap;\n  cursor: default;\n  color: white;\n  background-color: #007c82;\n  display: inline;\n}\n\n/* NAVIGATION SUBMENU OVERRIDE EBI-GLOBAL TO REMOVE A WHITE RIGHT LINE */\n\n.no-border-submenu {\n  border-right: 0 !important ;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div data-sticky-container>\n  <header id=\"masthead\" class=\"masthead\" data-sticky data-sticky-on=\"large\" data-top-anchor=\"content:top\"\n          data-btm-anchor=\"content:bottom\">\n    <!-- COMPLEX PORTAL HEADER SECTION -->\n    <div class=\"masthead-inner row\"> <!-- expanded -->\n      <!-- local-title -->\n      <div class=\"columns medium-6\" id=\"local-title\">\n        <h1><a routerLink=\"/home\" title=\"Back to Complex Portal homepage\">\n          <img src=\"assets/images/logo.png\" style=\"width: 43px; height: 63px;\"> Complex Portal</a>\n        </h1>\n      </div>\n      <!--/local-title -->\n\n      <div class=\"columns medium-6\">\n        <cp-local-search></cp-local-search>\n      </div>\n\n      <!-- local-nav -->\n      <nav>\n        <ul id=\"local-nav\" class=\"dropdown menu float-left\" data-dropdown-menu=\"true\" data-description=\"navigational\">\n          <li routerLinkActive=\"active\"><a routerLink=\"/home\" routerLinkActive=\"active\">Home</a></li>\n          <li routerLinkActive=\"active\"><a routerLink=\"/about\" routerLinkActive=\"active\">About</a></li>\n          <li class=\"extra-items-menu is-dropdown-submenu-parent opens-right\">\n            <a routerLinkActive=\"active\" routerLink=\"/documentation\">Documentation</a>\n            <ul class=\"menu submenu is-dropdown-submenu first-sub vertical\" role=\"menu\" >\n              <li class=\"no-border-submenu\" routerLinkActive=\"active\"><a routerLink=\"/documentation/data_content\">Data Content</a></li>\n              <li class=\"no-border-submenu\" routerLinkActive=\"active\"><a routerLink=\"/documentation/query_syntax\">Query syntax</a></li>\n            </ul>\n          </li>\n          <li routerLinkActive=\"active\"><a routerLinkActive=\"active\" [ngClass]=\"{'animated flash': onChangeInBasket}\" routerLink=\"/basket\">Basket\n            <div routerLinkActive=\"active\" routerLink=\"/basket\" class=\"basket\">\n              &nbsp;<strong>{{basketCount}}</strong>&nbsp;\n            </div></a>\n          </li>\n          <li routerLinkActive=\"active\"><a href=\"{{complexPortalSupportUrl}}\">Support <i class=\"icon icon-generic\" data-icon=\"x\"></i></a></li>\n        </ul>\n      </nav>\n      <!-- /local-nav -->\n    </div>\n  </header>\n  <!-- END COMPLEX PORTAL HEADER SECTION -->\n\n<!--  <cp-progress-bar></cp-progress-bar>-->\n</div>\n\n<!---->\n<div id=\"content\" role=\"main\" class=\"row\">\n  <!-- Suggested layout containers -->\n  <section>\n    <router-outlet></router-outlet>\n    <!-- Routed views go here -->\n  </section>\n  <!-- End suggested layout containers -->\n</div>\n\n\n<!-- Local footer -->\n<footer id=\"local-footer\" class=\"local-footer\" role=\"local-footer\">\n  <div class=\"row margin-top-medium\">\n    <div id=\"contributors\" class=\"margin-top-large\" style=\"text-align: center\">\n      <h4><p class=\"icon icon-generic\" data-icon=\"}\"> Our Contributors</p></h4>\n    </div>\n\n    <div class=\"columns\">\n      <table style=\"border-collapse: unset\">\n        <tbody>\n        <tr>\n          <td><a href=\"//www.ceitec.eu\" target=\"_blank\"><img src=\"assets/images/contributors/Ceitec.png\"></a></td>\n          <td><a href=\"//www.evidenceontology.org/\" target=\"_blank\"><img src=\"assets/images/contributors/eco.png\"></a>\n          </td>\n          <td><a href=\"//www.ucl.ac.uk/functional-gene-annotation/cardiovascular\" target=\"_blank\"><img\n            src=\"assets/images/contributors/imex_acg_s.png\"></a></td>\n          <td><a href=\"http://matrixdb.univ-lyon1.fr\" target=\"_blank\"><img\n            src=\"assets/images/contributors/matrixdb.png\"></a></td>\n          <!-- We need the protocol, matrixdb don't support https-->\n          <td><a href=\"//mint.bio.uniroma2.it\" target=\"_blank\"><img src=\"assets/images/contributors/Mint.png\"></a>\n          <td><a href=\"//www.ebi.ac.uk/pdbe/\" target=\"_blank\"><img src=\"assets/images/contributors/PDBe.png\"></a>\n          <td><a href=\"//www.yeastgenome.org\" target=\"_blank\"><img src=\"assets/images/contributors/SGD.png\"></a>\n          </td>\n          <td><a href=\"//www.sib.swiss\" target=\"_blank\"><img src=\"assets/images/contributors/sib.png\"></a></td>\n          <td><a href=\"//www.uniprot.org\" target=\"_blank\"><img src=\"assets/images/contributors/uniprot.png\"></a>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n      <div class=\"label secondary-color float-right\">{{version}}-{{environmentName}}</div>\n    </div>\n  </div>\n</footer>\n"

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
        this._complexPortalSupportUrl = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].complex_portal_support_url;
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
    Object.defineProperty(AppComponent.prototype, "complexPortalSupportUrl", {
        get: function () {
            return this._complexPortalSupportUrl;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__navigation_documentation_documentation_module__ = __webpack_require__("./src/app/navigation/documentation/documentation.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ontologies_ontologies_component__ = __webpack_require__("./src/app/ontologies/ontologies.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__shared_google_analytics_service_google_analytics_service__ = __webpack_require__("./src/app/shared/google-analytics/service/google-analytics.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__shared_local_storage_service_local_storage_service__ = __webpack_require__("./src/app/shared/local-storage/service/local-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__search_service_search_service__ = __webpack_require__("./src/app/search/service/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ngx_markdown__ = __webpack_require__("./node_modules/ngx-markdown/dist/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ngx_markdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_ngx_markdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__home_home_module__ = __webpack_require__("./src/app/home/home.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__navigation_about_about_component__ = __webpack_require__("./src/app/navigation/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__download_download_component__ = __webpack_require__("./src/app/download/download.component.ts");
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
                __WEBPACK_IMPORTED_MODULE_20__ontologies_ontologies_component__["a" /* OntologiesComponent */],
                __WEBPACK_IMPORTED_MODULE_27__navigation_about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_28__download_download_component__["a" /* DownloadComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_26__angular_router__["RouterModule"].forRoot([]),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["HttpClientModule"],
                __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser_animations__["a" /* NoopAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_15_ngx_toastr__["a" /* ToastrModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8_angulartics2__["Angulartics2Module"].forRoot([__WEBPACK_IMPORTED_MODULE_8_angulartics2__["Angulartics2GoogleAnalytics"]]),
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["a" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_24_ngx_markdown__["MarkdownModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_25__home_home_module__["a" /* HomeModule */],
                __WEBPACK_IMPORTED_MODULE_19__navigation_documentation_documentation_module__["a" /* DocumentationModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__complex_shared_service_complex_portal_service__["a" /* ComplexPortalService */],
                __WEBPACK_IMPORTED_MODULE_7__shared_notification_service_notification_service__["a" /* NotificationService */],
                __WEBPACK_IMPORTED_MODULE_9__complex_complex_details_complex_function_reactome_crossreferences_service_reactome_service__["a" /* ReactomeService */],
                __WEBPACK_IMPORTED_MODULE_10__complex_complex_details_complex_references_euro_pmc_crossreferences_service_euro_pmc_service__["a" /* EuroPmcService */],
                __WEBPACK_IMPORTED_MODULE_11__shared_ols_service_ols_service__["a" /* OlsService */],
                __WEBPACK_IMPORTED_MODULE_12__shared_basket_service_basket_service__["a" /* BasketService */],
                __WEBPACK_IMPORTED_MODULE_22__shared_local_storage_service_local_storage_service__["a" /* LocalStorageService */],
                __WEBPACK_IMPORTED_MODULE_13_ts_md5_dist_md5__["Md5"],
                __WEBPACK_IMPORTED_MODULE_21__shared_google_analytics_service_google_analytics_service__["a" /* GoogleAnalyticsService */],
                __WEBPACK_IMPORTED_MODULE_23__search_service_search_service__["a" /* SearchService */]
            ],
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

/***/ "./src/app/download/download.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/download/download.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"columns margin-top-large margin-bottom-large\">\n  <h1>Downloads</h1>\n  <p>The Complex Portal is released monthly and data on individual complexes is available for download in both PSI-MI\n    XML2.5 and XML3.0 formats (see the PSI website for a detailed format description). The files are grouped by\n    species. We have now also developed ComplexTAB, a flatfile format to enable simpler parsing or loading into\n    Microsoft Excel. A separate ComplexTAB file has been produced for each species - details on the format are\n    available <a (click)=\"goToComplexTabeReadMe()\">here <i class=\"icon icon-generic small\" data-icon=\"x\"></i></a>. All\n    files are available from the <a\n      (click)=\"goToComplexFTPCurrent()\">ftp site <i class=\"icon icon-generic small\" data-icon=\"x\"></i></a> and will be\n    updated as we add new complexes with every data release.</p>\n  <ul>\n    <li class=\"icon-bullet\"><span class=\"icon icon-generic\" data-icon=\"*\"></span> All Complex Portal data and software\n      is freely available to all users, academic or commercial, under the terms of the Apache License, Version 2.0\n    </li>\n  </ul>\n  <div class=\"row button-grid small-up-1 medium-up-4 large-up-4 margin-top-xlarge no-pad-right\" data-equalizer\n       data-equalize-on=\"medium\" id=\"large-button-grid\">\n    <div class=\"column  padding-bottom-large\">\n      <a class=\"button medium-12 columns text-center\" data-equalizer-watch (click)=\"goToComplexPSI25()\">\n        <h3 class=\"icon icon-fileformats  white-color\" data-icon=\"1\"></h3>\n        <h5 class=\"white-color\">PSI-MI XML 2.5</h5>\n      </a>\n    </div>\n    <div class=\"column  padding-bottom-large\">\n      <a class=\"button medium-12 columns text-center\" data-equalizer-watch\n         (click)=\"goToComplexPSI30()\">\n        <h3 class=\"icon icon-fileformats  white-color\" data-icon=\"1\"></h3>\n        <h5 class=\"white-color\">PSI-MI XML 3.0</h5>\n      </a>\n    </div>\n    <div class=\"column  padding-bottom-large\">\n      <a class=\"button medium-12 columns text-center\" data-equalizer-watch\n         (click)=\"goToComplexTAB()\">\n        <h3 class=\"icon icon-fileformats  white-color\" data-icon=\"v\"></h3>\n        <h5 class=\"white-color\">ComplexTab</h5>\n      </a>\n    </div>\n    <div class=\"column  padding-bottom-large\">\n      <a class=\"button medium-12 columns text-center\" data-equalizer-watch\n         (click)=\"goToComplexWS()\">\n        <h3 class=\"icon icon-fileformats white-color\" data-icon=\"J\"></h3>\n        <h5 class=\"white-color\">Web Service</h5>\n      </a>\n    </div>\n  </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/download/download.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DownloadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_loading_indicators_progress_bar_progress_bar_component__ = __webpack_require__("./src/app/shared/loading-indicators/progress-bar/progress-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_google_analytics_service_google_analytics_service__ = __webpack_require__("./src/app/shared/google-analytics/service/google-analytics.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_google_analytics_types_category_enum__ = __webpack_require__("./src/app/shared/google-analytics/types/category.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DownloadComponent = /** @class */ (function () {
    function DownloadComponent(googleAnalyticsService, titleService) {
        this.googleAnalyticsService = googleAnalyticsService;
        this.titleService = titleService;
    }
    DownloadComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('Complex Portal - Downloads');
        __WEBPACK_IMPORTED_MODULE_1__shared_loading_indicators_progress_bar_progress_bar_component__["a" /* ProgressBarComponent */].display();
    };
    DownloadComponent.prototype.ngAfterViewInit = function () {
        __WEBPACK_IMPORTED_MODULE_1__shared_loading_indicators_progress_bar_progress_bar_component__["a" /* ProgressBarComponent */].hide();
    };
    DownloadComponent.prototype.goToComplexPSI25 = function () {
        this.googleAnalyticsService.fireDownloadResourceEvent(__WEBPACK_IMPORTED_MODULE_4__shared_google_analytics_types_category_enum__["a" /* Category */].download, 'PSIXML25');
        window.open(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].complex_psi25, '_blank');
    };
    DownloadComponent.prototype.goToComplexPSI30 = function () {
        this.googleAnalyticsService.fireDownloadResourceEvent(__WEBPACK_IMPORTED_MODULE_4__shared_google_analytics_types_category_enum__["a" /* Category */].download, 'PSIXML30');
        window.open(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].complex_psi30, '_blank');
    };
    DownloadComponent.prototype.goToComplexTAB = function () {
        this.googleAnalyticsService.fireDownloadResourceEvent(__WEBPACK_IMPORTED_MODULE_4__shared_google_analytics_types_category_enum__["a" /* Category */].download, 'ComplexTAB');
        window.open(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].complex_tab, '_blank');
    };
    DownloadComponent.prototype.goToComplexWS = function () {
        this.googleAnalyticsService.fireDownloadResourceEvent(__WEBPACK_IMPORTED_MODULE_4__shared_google_analytics_types_category_enum__["a" /* Category */].download, 'ComplexWS');
        window.open(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].complex_ws_base_url, '_blank');
    };
    DownloadComponent.prototype.goToComplexTabeReadMe = function () {
        this.googleAnalyticsService.fireOpenExternalLinkEvent(__WEBPACK_IMPORTED_MODULE_4__shared_google_analytics_types_category_enum__["a" /* Category */].download, 'ComplexTABReadMe');
        window.open(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].complex_tab_readme, '_blank');
    };
    DownloadComponent.prototype.goToComplexFTPCurrent = function () {
        this.googleAnalyticsService.fireOpenExternalLinkEvent(__WEBPACK_IMPORTED_MODULE_4__shared_google_analytics_types_category_enum__["a" /* Category */].download, 'ComplexCurrentFTP');
        window.open(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].complex_current, '_blank');
    };
    DownloadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'cp-download',
            template: __webpack_require__("./src/app/download/download.component.html"),
            styles: [__webpack_require__("./src/app/download/download.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_google_analytics_service_google_analytics_service__["a" /* GoogleAnalyticsService */], __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["Title"]])
    ], DownloadComponent);
    return DownloadComponent;
}());



/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_component__ = __webpack_require__("./src/app/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */]
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = "/* Custom tag for COVID banner */\n.banner-tag {\n  /*background: #dabc3d;*/\n  background: #ffa232;\n  padding: 0.3rem 0.3rem;\n  line-height: 0.6rem;\n  font-size: 0.8rem;\n}\n.covid-banner {\n  background: #fcefa1;\n  border-color: gold;\n  border-style: solid;\n  border-width: 2px;\n  vertical-align: middle;\n  padding: 6px\n}\n.survey-banner {\n  background: #d3dfff;\n  border-color: #1f77b4;\n  border-style: solid;\n  border-width: 2px;\n  vertical-align: middle;\n  padding: 6px\n}\n.definition {\n  background: #cde4e5;\n  font-family: \"Lato-Regular\", Helvetica, Arial, sans-serif;\n  border-radius: 4px;\n  vertical-align: middle;\n  padding: 15px\n}\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\n  <div id=\"main-content-area\">\n    <!-- Start COVID banner-->\n<!--    <div class=\"row padding-bottom-xlarge padding-top-xlarge\">-->\n<!--      <div id=\"covid_panel\" class=\"covid-banner\">-->\n<!--        <div class=\"grid_20 push_2\" style=\"text-align: center; padding: 4px\">-->\n<!--          <b>COVID19-related complexes at Complex Portal</b><br/>-->\n<!--          <div class=\"padding-top-medium\" style=\"text-align: center\">-->\n<!--            <a (click)=\"search('Severe acute respiratory syndrome coronavirus 2')\">Browse</a> or download SARS-CoV2 complexes-->\n<!--            <a class=\"tag banner-tag\" (click)=\"goToComplexSARSCoV2TAB()\">ComplexTab</a>-->\n<!--            <a class=\"tag banner-tag\" (click)=\"goToComplexSARSCoV2PSI25()\">PSI-XML2.5</a>-->\n<!--            <a class=\"tag banner-tag\" (click)=\"goToComplexSARSCoV2PSI30()\">PSI-XML3.0</a>-->\n<!--          </div>-->\n\n<!--          <div class=\"\" style=\"text-align: center\">-->\n<!--            <a (click)=\"search('Severe acute respiratory syndrome coronavirus')\">Browse</a> or download SARS complexes-->\n<!--            <a class=\"tag banner-tag\" (click)=\"goToComplexSARSTAB()\">ComplexTab</a>-->\n<!--            <a class=\"tag banner-tag\" (click)=\"goToComplexSARSPSI25()\">PSI-XML2.5</a>-->\n<!--            <a class=\"tag banner-tag\" (click)=\"goToComplexSARSPSI30()\">PSI-XML3.0</a>-->\n<!--          </div>-->\n<!--        </div>-->\n<!--      </div>-->\n<!--    </div>-->\n    <!-- End COVID banner-->\n    <!-- Survey banner -->\n    <div class=\"row padding-bottom-xlarge padding-top-xlarge\">\n      <div class=\"columns medium-12\">\n        <div id=\"survey_panel\" class=\"survey-banner\">\n          <div class=\"grid_20 push_2\" style=\"text-align: center; padding: 4px\">\n            <b>EMBL-EBI Impact survey</b><br/>\n            We need your help!<br/>\n            If you’ve ever found our data helpful, please take our impact survey (15 min). Your replies will help keep\n            the\n            data flowing to the scientific community.<br/>\n            <a charset=\"submit\" href=\"https://www.surveymonkey.co.uk/r/EMBL-EBI_Impact_DR\" target=\"_blank\">Go To\n              Survey</a>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- End Survey banner -->\n\n    <div class=\"row\">\n      <div class=\"columns medium-9\">\n        <div class=\"columns medium-12 no-pad-left no-pad-right padding-top-xsmall padding-bottom-small\">\n          <h1>Explore the Complex Portal</h1>\n          <p>\n            The Complex Portal is a manually curated, encyclopaedic resource of macromolecular complexes from a number\n            of key model organisms. The majority of complexes are made up of proteins but may also include nucleic acids\n            or small molecules. All data is freely available for search and <a class=\"readmore\" routerLink=\"/download\">download</a>.\n          </p>\n          <div id=\"cp-definition\" class=\"definition padding-bottom-xlarge padding-top-xlarge\">\n            <i>Complexes are defined as an assembly of any two or more proteins and/or nucleic acids that are stable enough\n            in vitro to be reconstituted and have been demonstrated to have a specific molecular function.</i>\n          </div>\n          <p class=\"padding-top-large\">\n            To perform a search for macromolecular complexes use the search box below. Read more\n            <a class=\"readmore\" routerLink=\"/about\">here</a>.\n          </p>\n        </div>\n        <div class=\"columns medium-12\">\n          <cp-search></cp-search>\n        </div>\n        <div class=\"columns medium-12 margin-top-xlarge\">\n          <cp-tile-menu></cp-tile-menu>\n        </div>\n      </div>\n\n      <div class=\"columns medium-3\">\n        <div class=\"columns medium-12\">\n          <cp-newsletter-subscription></cp-newsletter-subscription>\n        </div>\n        <div class=\"columns medium-12\">\n          <cp-twitter-display></cp-twitter-display>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_loading_indicators_progress_bar_progress_bar_component__ = __webpack_require__("./src/app/shared/loading-indicators/progress-bar/progress-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_google_analytics_service_google_analytics_service__ = __webpack_require__("./src/app/shared/google-analytics/service/google-analytics.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_google_analytics_types_category_enum__ = __webpack_require__("./src/app/shared/google-analytics/types/category.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomeComponent = /** @class */ (function () {
    function HomeComponent(titleService, router, googleAnalyticsService) {
        this.titleService = titleService;
        this.router = router;
        this.googleAnalyticsService = googleAnalyticsService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('Complex Portal');
        __WEBPACK_IMPORTED_MODULE_1__shared_loading_indicators_progress_bar_progress_bar_component__["a" /* ProgressBarComponent */].display();
        document.body.scrollTop = 0;
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        __WEBPACK_IMPORTED_MODULE_1__shared_loading_indicators_progress_bar_progress_bar_component__["a" /* ProgressBarComponent */].hide();
    };
    /* Start COVID banner */
    HomeComponent.prototype.search = function (speciesName) {
        this.googleAnalyticsService.fireSearchTermEvent(__WEBPACK_IMPORTED_MODULE_5__shared_google_analytics_types_category_enum__["a" /* Category */].organisms, speciesName);
        this.router.navigate(['complex/search'], { queryParams: { query: '*', species: speciesName, page: 1 } });
    };
    HomeComponent.prototype.goToComplexSARSCoV2PSI25 = function () {
        this.googleAnalyticsService.fireDownloadResourceEvent(__WEBPACK_IMPORTED_MODULE_5__shared_google_analytics_types_category_enum__["a" /* Category */].organisms, 'PSIXML25');
        window.open(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].complex_psi25 + 'SARS-CoV-2', '_blank');
    };
    HomeComponent.prototype.goToComplexSARSPSI25 = function () {
        this.googleAnalyticsService.fireDownloadResourceEvent(__WEBPACK_IMPORTED_MODULE_5__shared_google_analytics_types_category_enum__["a" /* Category */].organisms, 'PSIXML25');
        window.open(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].complex_psi25 + 'Human_SARS_coronavirus', '_blank');
    };
    HomeComponent.prototype.goToComplexSARSCoV2PSI30 = function () {
        this.googleAnalyticsService.fireDownloadResourceEvent(__WEBPACK_IMPORTED_MODULE_5__shared_google_analytics_types_category_enum__["a" /* Category */].organisms, 'PSIXML30');
        window.open(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].complex_psi30 + 'SARS-CoV-2', '_blank');
    };
    HomeComponent.prototype.goToComplexSARSPSI30 = function () {
        this.googleAnalyticsService.fireDownloadResourceEvent(__WEBPACK_IMPORTED_MODULE_5__shared_google_analytics_types_category_enum__["a" /* Category */].organisms, 'PSIXML30');
        window.open(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].complex_psi30 + 'sars-cov', '_blank');
    };
    HomeComponent.prototype.goToComplexSARSCoV2TAB = function () {
        this.googleAnalyticsService.fireDownloadResourceEvent(__WEBPACK_IMPORTED_MODULE_5__shared_google_analytics_types_category_enum__["a" /* Category */].organisms, 'ComplexTAB');
        window.open(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].complex_tab + '2697049' + '.tsv', '_blank');
    };
    HomeComponent.prototype.goToComplexSARSTAB = function () {
        this.googleAnalyticsService.fireDownloadResourceEvent(__WEBPACK_IMPORTED_MODULE_5__shared_google_analytics_types_category_enum__["a" /* Category */].organisms, 'ComplexTAB');
        window.open(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].complex_tab + '694009' + '.tsv', '_blank');
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'cp-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["Title"], __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_3__shared_google_analytics_service_google_analytics_service__["a" /* GoogleAnalyticsService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tile_menu_tile_menu_component__ = __webpack_require__("./src/app/home/tile-menu/tile-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__twitter_display_twitter_display_component__ = __webpack_require__("./src/app/home/twitter-display/twitter-display.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__newsletter_subscription_newsletter_subscription_component__ = __webpack_require__("./src/app/home/newsletter-subscription/newsletter-subscription.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search_home_search_search_component__ = __webpack_require__("./src/app/search/home-search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_routing_module__ = __webpack_require__("./src/app/home/home-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_7__home_routing_module__["a" /* HomeRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_6__search_home_search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_5__newsletter_subscription_newsletter_subscription_component__["a" /* NewsletterSubscriptionComponent */],
                __WEBPACK_IMPORTED_MODULE_4__twitter_display_twitter_display_component__["a" /* TwitterDisplayComponent */],
                __WEBPACK_IMPORTED_MODULE_3__tile_menu_tile_menu_component__["a" /* TileMenuComponent */],
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/home/newsletter-subscription/newsletter-subscription.component.css":
/***/ (function(module, exports) {

module.exports = "\n@import \"//cdn-images.mailchimp.com/embedcode/slim-10_7.css\";\n/*noinspection CssUnknownTarget*/\nh3 {\n  border-bottom:solid;\n  border-color: #5ca23561;\n}\n#mc_embed_signup {\n  background: #fff;\n  clear: left;\n  font: 14px Helvetica, Arial, sans-serif;\n}\n#mc_embed_signup form {\n  padding: 0;\n}\ninput#mce-EMAIL.email {\n  width: 100% !important;\n}\ninput#mc-embedded-subscribe.button {\n  width: 100% !important;\n  background-color: #007c82\n}\n"

/***/ }),

/***/ "./src/app/home/newsletter-subscription/newsletter-subscription.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"margin-bottom-xlarge\" id=\"mc_embed_signup\">\n  <form ngNoForm action=\"//ebi.us9.list-manage.com/subscribe/post?u=d50725c1556266fd605025eaf&id=91a036cbb0\"\n        method=\"post\"\n        id=\"mc-embedded-subscribe-form\" name=\"mc-embedded-subscribe-form\" class=\"validate\" target=\"_blank\" novalidate>\n    <div id=\"mc_embed_signup_scroll\">\n      <h3><i class=\"icon icon-generic icon-spacer\" data-icon=\"m\"></i>Newsletter</h3>\n      <input type=\"email\" value=\"\" name=\"EMAIL\" class=\"email\" id=\"mce-EMAIL\" placeholder=\"email address\" required>\n      <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->\n      <div style=\"position: absolute; left: -5000px;\" aria-hidden=\"true\"><input type=\"text\"\n                                                                                name=\"b_d50725c1556266fd605025eaf_91a036cbb0\"\n                                                                                tabindex=\"-1\" value=\"\"></div>\n      <div class=\"clear\"><input type=\"submit\" value=\"Subscribe\" name=\"subscribe\" id=\"mc-embedded-subscribe\"\n                                class=\"button\"></div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/home/newsletter-subscription/newsletter-subscription.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsletterSubscriptionComponent; });
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

var NewsletterSubscriptionComponent = /** @class */ (function () {
    function NewsletterSubscriptionComponent() {
    }
    NewsletterSubscriptionComponent.prototype.ngOnInit = function () {
    };
    NewsletterSubscriptionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'cp-newsletter-subscription',
            template: __webpack_require__("./src/app/home/newsletter-subscription/newsletter-subscription.component.html"),
            styles: [__webpack_require__("./src/app/home/newsletter-subscription/newsletter-subscription.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NewsletterSubscriptionComponent);
    return NewsletterSubscriptionComponent;
}());



/***/ }),

/***/ "./src/app/home/tile-menu/tile-menu.component.css":
/***/ (function(module, exports) {

module.exports = ".menu-blue {\n  background-color: #005c82;\n}\n\n.menu-gold {\n  background-color: #bca04d;\n}\n"

/***/ }),

/***/ "./src/app/home/tile-menu/tile-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row button-grid\" data-equalizer id=\"large-button-grid\">\n  <div class=\"columns large-3 medium-6 text-center padding-bottom-large\">\n    <a class=\"button medium-12 columns\" data-equalizer-watch (click)=\"goToDownload()\">\n      <h3 class=\"icon icon-functional white-color\" data-icon=\"=\"></h3>\n      <h5 class=\"white-color\" style=\"white-space: normal\">Downloads</h5>\n    </a>\n  </div>\n  <div class=\"columns large-3 medium-6 text-center padding-bottom-large\">\n    <a class=\"button medium-12 columns\" data-equalizer-watch (click)=\"goToBasket()\">\n      <h3 class=\"icon icon-generic white-color\" data-icon=\"b\"></h3>\n      <h5 class=\"white-color\">Basket</h5>\n    </a>\n  </div>\n  <div class=\"columns large-3 medium-6 text-center padding-bottom-large\">\n    <a class=\"button medium-12 columns\" data-equalizer-watch (click)=\"goToOrganisms()\">\n      <h3 class=\"icon icon-species white-color\" data-icon=\"M\"></h3>\n      <h5 class=\"white-color\">Organisms</h5>\n    </a>\n  </div>\n  <div class=\"columns large-3 medium-6 text-center padding-bottom-large\">\n    <a class=\"button medium-12 columns\" data-equalizer-watch (click)=\"goToOntologies()\">\n      <h3 class=\"icon icon-conceptual white-color\" data-icon=\"o\"></h3>\n      <h5 class=\"white-color\">Ontologies</h5>\n    </a>\n  </div>\n  <div class=\"columns large-3 medium-6 text-center padding-bottom-large\">\n    <a class=\"button medium-12 columns training-background\" data-equalizer-watch (click)=\"goToRequestComplex()\">\n      <h3 class=\"icon icon-generic white-color\" data-icon=\"\\\"></h3>\n      <h5 class=\"white-color\" style=\"white-space: normal\">Request Complex</h5>\n    </a>\n  </div>\n  <div class=\"reveal\" id=\"citationModal\" data-reveal>\n    <h3>Citing Complex Portal</h3>\n    <span class=\"lead\">Complex Portal 2018: extended content and enhanced visualization tools for macromolecular complexes.</span>\n    <p>Meldal BHM et al [PMID: 30357405]</p>\n    <p><i>Nucl. Acids Res. (2019) doi: 10.1093/nar/gky1001</i></p>\n    <a class=\"button readmore\" href=\"//europepmc.org/abstract/MED/30357405\" target=\"_blank\">Abstract</a>\n    <a class=\"button readmore\"\n       href=\"https://academic.oup.com/nar/article/47/D1/D550/5144138\" target=\"_blank\">Full\n      text</a>\n\n    <button class=\"close-button\" data-close aria-label=\"Close modal\" type=\"button\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"columns large-3 medium-6 text-center padding-bottom-large\">\n    <a class=\"button medium-12 columns industry-background\" data-equalizer-watch (click)=\"goToDocumentation()\">\n      <h3 class=\"icon icon-common white-color\" data-icon=\"&#xf283;\"></h3>\n      <h5 class=\"white-color\">Documentation</h5>\n    </a>\n  </div>\n  <div class=\"columns large-3 medium-6 text-center padding-bottom-large\">\n    <a class=\"button medium-12 columns industry-background\" data-equalizer-watch data-open=\"citationModal\" (click)=\"goToCitation()\">\n      <h3 class=\"icon icon-generic white-color\" data-icon=\"P\"></h3>\n      <h5 class=\"white-color\">How To Cite Us</h5>\n    </a>\n  </div>\n  <div class=\"columns large-3 medium-6 text-center padding-bottom-large\">\n    <a class=\"button medium-12 columns industry-background\" data-equalizer-watch (click)=\"goToTraining()\">\n      <h3 class=\"icon icon-generic white-color\" data-icon=\"t\"></h3>\n      <h5 class=\"white-color\">Training</h5>\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/tile-menu/tile-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TileMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_notification_service_notification_service__ = __webpack_require__("./src/app/shared/notification/service/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_google_analytics_service_google_analytics_service__ = __webpack_require__("./src/app/shared/google-analytics/service/google-analytics.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TileMenuComponent = /** @class */ (function () {
    function TileMenuComponent(notificationService, router, googleAnalyticsService) {
        this.notificationService = notificationService;
        this.router = router;
        this.googleAnalyticsService = googleAnalyticsService;
    }
    TileMenuComponent.prototype.ngAfterViewInit = function () {
        // Necessary for layout of tiles (equal size, etc.)
        $('cp-tile-menu').foundation();
    };
    TileMenuComponent.prototype.goToDownload = function () {
        this.googleAnalyticsService.fireClickHomeTileEvent('download');
        this.router.navigate(['download']);
    };
    TileMenuComponent.prototype.goToBasket = function () {
        this.googleAnalyticsService.fireClickHomeTileEvent('basket');
        this.router.navigate(['basket']);
    };
    TileMenuComponent.prototype.goToOrganisms = function () {
        this.googleAnalyticsService.fireClickHomeTileEvent('organisms');
        this.router.navigate(['complex/organisms']);
    };
    TileMenuComponent.prototype.goToOntologies = function () {
        this.googleAnalyticsService.fireClickHomeTileEvent('ontologies');
        this.notificationService.onFeatureNotAvailableYet();
        this.router.navigate(['ontologies']);
    };
    TileMenuComponent.prototype.goToRequestComplex = function () {
        this.googleAnalyticsService.fireClickHomeTileEvent('request complex');
        window.open(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].complex_portal_support_url, '_blank');
    };
    TileMenuComponent.prototype.goToTraining = function () {
        this.googleAnalyticsService.fireClickHomeTileEvent('training');
        window.open(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].intact_training_url, '_blank');
    };
    TileMenuComponent.prototype.goToDocumentation = function () {
        this.googleAnalyticsService.fireClickHomeTileEvent('documentation');
        this.router.navigate(['documentation']);
    };
    TileMenuComponent.prototype.goToCitation = function () {
        this.googleAnalyticsService.fireClickHomeTileEvent('citation');
    };
    TileMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'cp-tile-menu',
            template: __webpack_require__("./src/app/home/tile-menu/tile-menu.component.html"),
            styles: [__webpack_require__("./src/app/home/tile-menu/tile-menu.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_notification_service_notification_service__["a" /* NotificationService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_4__shared_google_analytics_service_google_analytics_service__["a" /* GoogleAnalyticsService */]])
    ], TileMenuComponent);
    return TileMenuComponent;
}());



/***/ }),

/***/ "./src/app/home/twitter-display/twitter-display.component.css":
/***/ (function(module, exports) {

module.exports = "#twitter {\n  max-height: 400px;\n}\n\nh3 {\n  border-bottom:solid;\n  border-color: #5ca23561;\n}\n"

/***/ }),

/***/ "./src/app/home/twitter-display/twitter-display.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"twitter\">\n  <h3><i class=\"icon icon-common icon-twitter icon-spacer\"></i>Twitter</h3>\n  <a class=\"twitter-timeline\" data-lang=\"en\" data-height=\"530\" data-theme=\"light\"\n     data-chrome=\"noheader noborders\" data-link-color=\"#007c82\" href=\"https://twitter.com/complexportal\">Tweets\n    by Complex Portal</a>\n</div>\n"

/***/ }),

/***/ "./src/app/home/twitter-display/twitter-display.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TwitterDisplayComponent; });
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

var twitterURL = 'https://platform.twitter.com/widgets.js';
var TwitterDisplayComponent = /** @class */ (function () {
    function TwitterDisplayComponent() {
    }
    TwitterDisplayComponent.prototype.ngOnInit = function () {
        this.initTwitterWidget();
    };
    TwitterDisplayComponent.prototype.initTwitterWidget = function () {
        /* tslint:disable */
        window.twttr = (function (d, s, id, call) {
            var js, fjs = d.getElementsByTagName(s)[0], t = window.twttr || {};
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
    };
    TwitterDisplayComponent.prototype.reloadWidget = function () {
        try {
            window.twttr.widgets.load(document.getElementById('twitter'));
        }
        catch (ignore) {
            // ignore
        }
    };
    TwitterDisplayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'cp-twitter-display',
            template: __webpack_require__("./src/app/home/twitter-display/twitter-display.component.html"),
            styles: [__webpack_require__("./src/app/home/twitter-display/twitter-display.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TwitterDisplayComponent);
    return TwitterDisplayComponent;
}());



/***/ }),

/***/ "./src/app/navigation/about/about.component.css":
/***/ (function(module, exports) {

module.exports = "/* See this issue to understand why we need ng-deep https://github.com/jfcere/ngx-markdown/issues/56*/\nmarkdown ::ng-deep h1 {\n  font-size: xx-large;\n}\nmarkdown ::ng-deep h2 {\n  font-size: x-large;\n}\nmarkdown ::ng-deep h3 {\n  font-size: large;\n}\nmarkdown ::ng-deep img {\n  display: block;\n  margin: 0 auto;\n  text-align: center;\n  height: 100px;\n}\n"

/***/ }),

/***/ "./src/app/navigation/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"columns margin-top-large margin-bottom-large\">\n  <h1>About</h1>\n  <ul class=\"tabs\" data-tabs data-deep-link=\"true\" data-update-history=\"false\" id=\"about-tabs\">\n    <li class=\"tabs-title is-active\"><a href=\"about#overview\" aria-selected=\"true\">Overview</a></li>\n    <li class=\"tabs-title\"><a href=\"about#requests\">Requests</a></li>\n    <li class=\"tabs-title\"><a href=\"about#license_privacy\">License and Privacy</a></li>\n    <li class=\"tabs-title\"><a href=\"about#code\">Code Repository</a></li>\n    <li class=\"tabs-title\"><a href=\"about#funding\">Funding</a></li>\n    <li class=\"tabs-title\"><a href=\"about#publications\">Publications</a></li>\n    <li class=\"tabs-title\"><a href=\"about#sab\">SAB</a></li>\n  </ul>\n\n  <div class=\"tabs-content\" data-tabs-content=\"about-tabs\">\n    <div class=\"tabs-panel is-active\" id=\"overview\">\n      <markdown [src]=overview></markdown>\n    </div>\n\n    <div class=\"tabs-panel\" id=\"requests\">\n      <markdown [src]=requests></markdown>\n    </div>\n\n    <div class=\"tabs-panel\" id=\"license_privacy\">\n      <markdown [src]=license_privacy></markdown>\n    </div>\n\n    <div class=\"tabs-panel\" id=\"code\">\n      <markdown [src]=code></markdown>\n    </div>\n\n    <div class=\"tabs-panel\" id=\"funding\">\n      <markdown [src]=funding></markdown>\n    </div>\n\n    <div class=\"tabs-panel\" id=\"publications\">\n      <markdown [src]=publications></markdown>\n    </div>\n\n    <div class=\"tabs-panel\" id=\"sab\">\n      <markdown [src]=sab></markdown>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/navigation/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_loading_indicators_progress_bar_progress_bar_component__ = __webpack_require__("./src/app/shared/loading-indicators/progress-bar/progress-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AboutComponent = /** @class */ (function () {
    function AboutComponent(titleService, router) {
        this.titleService = titleService;
        this.router = router;
        this.overview = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].complex_portal_documentation_url + 'about/overview.md';
        this.funding = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].complex_portal_documentation_url + 'about/funding.md';
        this.code = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].complex_portal_documentation_url + 'about/code-repository.md';
        this.license_privacy = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].complex_portal_documentation_url + 'about/license.md';
        this.publications = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].complex_portal_documentation_url + 'about/publications.md';
        this.sab = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].complex_portal_documentation_url + 'about/scientific-advisory-board.md';
        this.requests = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].complex_portal_documentation_url + 'about/requests.md';
    }
    AboutComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('Complex Portal - About');
        $('cp-about').foundation();
        __WEBPACK_IMPORTED_MODULE_3__shared_loading_indicators_progress_bar_progress_bar_component__["a" /* ProgressBarComponent */].hide();
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'cp-about',
            template: __webpack_require__("./src/app/navigation/about/about.component.html"),
            styles: [__webpack_require__("./src/app/navigation/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["Title"], __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/navigation/documentation/data-content/data-content.component.css":
/***/ (function(module, exports) {

module.exports = "/* See this issue to understand why we need ng-deep https://github.com/jfcere/ngx-markdown/issues/56*/\nmarkdown ::ng-deep h1 {\n  font-size: xx-large;\n}\nmarkdown ::ng-deep h2 {\n  font-size: x-large;\n}\nmarkdown ::ng-deep h3 {\n  font-size: large;\n}\nmarkdown ::ng-deep img {\n  display: block;\n  margin: 0 auto;\n  text-align: center;\n  height: 100px;\n}\n"

/***/ }),

/***/ "./src/app/navigation/documentation/data-content/data-content.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"columns margin-top-large margin-bottom-large\">\n  <h1>Data Content</h1>\n  <ul class=\"tabs\" data-tabs data-deep-link=\"true\" data-update-history=\"false\" id=\"data-content-tabs\">\n    <li class=\"tabs-title is-active\"><a href=\"documentation/data_content#overview\" aria-selected=\"true\">Overview</a>\n    </li>\n  </ul>\n\n  <div class=\"tabs-content\" data-tabs-content=\"data-content-tabs\">\n    <div class=\"tabs-panel is-active\" id=\"overview\">\n      <markdown [src]=source></markdown>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/navigation/documentation/data-content/data-content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataContentComponent; });
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




var DataContentComponent = /** @class */ (function () {
    function DataContentComponent(titleService) {
        this.titleService = titleService;
        this.source = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].complex_portal_documentation_url + 'cp_content.md';
    }
    DataContentComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('Complex Portal - Data Content');
        __WEBPACK_IMPORTED_MODULE_2__shared_loading_indicators_progress_bar_progress_bar_component__["a" /* ProgressBarComponent */].hide();
    };
    DataContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'cp-data-content',
            template: __webpack_require__("./src/app/navigation/documentation/data-content/data-content.component.html"),
            styles: [__webpack_require__("./src/app/navigation/documentation/data-content/data-content.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["Title"]])
    ], DataContentComponent);
    return DataContentComponent;
}());



/***/ }),

/***/ "./src/app/navigation/documentation/documentation-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentationRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__documentation_component__ = __webpack_require__("./src/app/navigation/documentation/documentation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_content_data_content_component__ = __webpack_require__("./src/app/navigation/documentation/data-content/data-content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__query_syntax_query_syntax_component__ = __webpack_require__("./src/app/navigation/documentation/query-syntax/query-syntax.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var documentationRoutes = [
    {
        path: 'documentation',
        component: __WEBPACK_IMPORTED_MODULE_2__documentation_component__["a" /* DocumentationComponent */],
    },
    {
        path: 'documentation/data_content',
        component: __WEBPACK_IMPORTED_MODULE_3__data_content_data_content_component__["a" /* DataContentComponent */],
    },
    {
        path: 'documentation/query_syntax',
        component: __WEBPACK_IMPORTED_MODULE_4__query_syntax_query_syntax_component__["a" /* QuerySyntaxComponent */],
    },
];
var DocumentationRoutingModule = /** @class */ (function () {
    function DocumentationRoutingModule() {
    }
    DocumentationRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(documentationRoutes)],
        })
    ], DocumentationRoutingModule);
    return DocumentationRoutingModule;
}());



/***/ }),

/***/ "./src/app/navigation/documentation/documentation.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navigation/documentation/documentation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"columns margin-top-large margin-bottom-large\">\n  <h1>Documentation</h1>\n  <div class=\"row button-grid small-up-1 medium-up-2 large-up-2 margin-top-xlarge no-pad-right\" data-equalizer\n       data-equalize-on=\"medium\" id=\"large-button-grid\">\n    <div class=\"column  padding-bottom-large\">\n      <p>Data Content documents the type of data and features that are captured for each complex.</p>\n      <a class=\"button medium-12 columns text-center\" data-equalizer-watch routerLink=\"./data_content\">\n        <h3 class=\"icon icon-generic  white-color\" data-icon=\";\"></h3>\n        <h5 class=\"white-color\">Data Content</h5>\n      </a>\n    </div>\n    <div class=\"column  padding-bottom-large\">\n      <p>Query Syntax contains details about the types of search that can be performed and the syntax required.</p>\n      <a class=\"button medium-12 columns text-center\" data-equalizer-watch routerLink=\"./query_syntax\">\n        <h3 class=\"icon icon-functional white-color\" data-icon=\"1\"></h3>\n        <h5 class=\"white-color\">Query Syntax</h5>\n      </a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/navigation/documentation/documentation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_loading_indicators_progress_bar_progress_bar_component__ = __webpack_require__("./src/app/shared/loading-indicators/progress-bar/progress-bar.component.ts");
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
        this.titleService.setTitle('Complex Portal - Documentation');
        $('cp-documentation').foundation();
        __WEBPACK_IMPORTED_MODULE_2__shared_loading_indicators_progress_bar_progress_bar_component__["a" /* ProgressBarComponent */].hide();
    };
    DocumentationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'cp-documentation',
            template: __webpack_require__("./src/app/navigation/documentation/documentation.component.html"),
            styles: [__webpack_require__("./src/app/navigation/documentation/documentation.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["Title"]])
    ], DocumentationComponent);
    return DocumentationComponent;
}());



/***/ }),

/***/ "./src/app/navigation/documentation/documentation.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__documentation_component__ = __webpack_require__("./src/app/navigation/documentation/documentation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__documentation_routing_module__ = __webpack_require__("./src/app/navigation/documentation/documentation-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_content_data_content_component__ = __webpack_require__("./src/app/navigation/documentation/data-content/data-content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__query_syntax_query_syntax_component__ = __webpack_require__("./src/app/navigation/documentation/query-syntax/query-syntax.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_markdown__ = __webpack_require__("./node_modules/ngx-markdown/dist/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_markdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ngx_markdown__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var DocumentationModule = /** @class */ (function () {
    function DocumentationModule() {
    }
    DocumentationModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__documentation_routing_module__["a" /* DocumentationRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6_ngx_markdown__["MarkdownModule"].forChild(),
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__documentation_component__["a" /* DocumentationComponent */],
                __WEBPACK_IMPORTED_MODULE_4__data_content_data_content_component__["a" /* DataContentComponent */],
                __WEBPACK_IMPORTED_MODULE_5__query_syntax_query_syntax_component__["a" /* QuerySyntaxComponent */]
            ]
        })
    ], DocumentationModule);
    return DocumentationModule;
}());



/***/ }),

/***/ "./src/app/navigation/documentation/query-syntax/query-syntax.component.css":
/***/ (function(module, exports) {

module.exports = "/* See this issue to understand why we need ng-deep https://github.com/jfcere/ngx-markdown/issues/56*/\nmarkdown ::ng-deep h1 {\n  font-size: xx-large;\n}\nmarkdown ::ng-deep h2 {\n  font-size: x-large;\n}\nmarkdown ::ng-deep h3 {\n  font-size: large;\n}\nmarkdown ::ng-deep img {\n  display: block;\n  margin: 0 auto;\n  text-align: center;\n  height: 100px;\n}\n"

/***/ }),

/***/ "./src/app/navigation/documentation/query-syntax/query-syntax.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"columns margin-top-large margin-bottom-large\">\n  <h1>Querying Complex Portal</h1>\n  <ul class=\"tabs\" data-tabs data-deep-link=\"true\" data-update-history=\"false\" id=\"query-tabs\">\n    <li class=\"tabs-title is-active\"><a href=\"documentation/query_syntax#overview\" aria-selected=\"true\">Overview</a>\n    </li>\n  </ul>\n\n  <div class=\"tabs-content\" data-tabs-content=\"query-tabs\">\n    <div class=\"tabs-panel is-active\" id=\"overview\">\n      <markdown [src]=source></markdown>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/navigation/documentation/query-syntax/query-syntax.component.ts":
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
            template: __webpack_require__("./src/app/navigation/documentation/query-syntax/query-syntax.component.html"),
            styles: [__webpack_require__("./src/app/navigation/documentation/query-syntax/query-syntax.component.css")]
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

/***/ "./src/app/search/home-search/search.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/search/home-search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"columns medium-12 no-pad-left no-pad-right\">\n    <!-- local-search -->\n    <!-- if you do not have a local-search, delete the following form -->\n    <div id=\"content-search\" name=\"content-search\" >\n      <fieldset>\n        <div class=\"input-group margin-bottom-none\">\n          <input #query type=\"text\" name=\"first\" id=\"content-searchbox\" class=\"input-group-field\" (keydown.enter)=\"search(query.value, 'enter')\"\n                 placeholder=\"GO term(s), Gene name(s), UniProt AC(s), Protein name(s), Protein name(s), Complex AC\">\n          <div class=\"input-group-button\">\n            <input type=\"button\" name=\"submit\" value=\"1\" (click)=\"search(query.value, 'button')\"\n                   class=\"button icon icon-functional\">\n          </div>\n        </div>\n      </fieldset>\n    </div>\n  </div>\n  <div class=\"columns callout medium-12 margin-bottom-none\" style=\"font-size: smaller\">\n    <h5><i class=\"icon icon-generic padding-right-medium\" data-icon=\"?\"></i>Examples:</h5>\n    <div class=\"columns medium-4\">\n      <ul>\n        <li>Gene name(s): <a (click)=\"search('Ndc80', 'example')\">Ndc80</a></li>\n        <li>UniProt AC(s): <a (click)=\"search('Q05471', 'example')\">Q05471</a></li>\n      </ul>\n    </div>\n    <div class=\"columns medium-4\">\n      <ul>\n        <li>Complex AC: <a (click)=\"search('CPX-2158', 'example')\">CPX-2158</a></li>\n        <li>Complex Name: <a (click)=\"search('nuclear pore', 'example')\">nuclear pore</a></li>\n      </ul>\n    </div>\n    <div class=\"columns medium-4\">\n      <ul>\n        <li>GO term(s): <a (click)=\"search('GO:0016491', 'example')\">GO:0016491</a></li>\n        <li>List of ACs: <a (click)=\"search('Q15554, P54274, Q96AP0', 'example')\">Q15554, P54274, Q96AP0</a></li>\n       </ul>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/search/home-search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_google_analytics_types_category_enum__ = __webpack_require__("./src/app/shared/google-analytics/types/category.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_search_service__ = __webpack_require__("./src/app/search/service/search.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchComponent = /** @class */ (function () {
    function SearchComponent(searchService) {
        this.searchService = searchService;
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent.prototype.search = function (query, typeOfButton) {
        this.searchService.search(query, __WEBPACK_IMPORTED_MODULE_1__shared_google_analytics_types_category_enum__["a" /* Category */].home, typeOfButton);
    };
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'cp-search',
            template: __webpack_require__("./src/app/search/home-search/search.component.html"),
            styles: [__webpack_require__("./src/app/search/home-search/search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_search_service__["a" /* SearchService */]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/search/local-search/local-search.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/search/local-search/local-search.component.html":
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!display\" id=\"local-search\" name=\"local-search\">\n  <fieldset>\n    <div class=\"input-group margin-bottom-none\">\n      <input #searchTerm type=\"text\" name=\"first\" id=\"local-searchbox\" placeholder=\"Search this service\"\n             value=\"{{query}}\"\n             class=\"input-group-field\" (keydown.enter)=\"search(searchTerm.value, 'enter')\">\n      <div class=\"input-group-button\">\n        <input type=\"button\" name=\"submit\" value=\"1\" (click)=\"search(searchTerm.value, 'button')\"\n               class=\"button icon icon-functional\"></div>\n    </div>\n    <small>\n      <!-- If your search is more complex than just a keyword search, you can link to an Advanced Search -->\n      <!-- <span class=\"adv\"><a href=\"../search\" id=\"adv-search\" title=\"Advanced\">Advanced</a></span> | -->\n      <!-- Include some example searchterms - keep them short and few. -->\n      Examples:\n      <a (click)=\"search('GO:0016491', 'example')\">GO:0016491</a>\n      <a (click)=\"search('Ndc80', 'example')\">Ndc80</a>\n      <a (click)=\"search('Q05471', 'example')\">Q05471</a>\n      <a (click)=\"search('PCNA', 'example')\">PCNA</a>\n      <a (click)=\"search('CPX-2158', 'example')\">CPX-2158</a>\n      <a (click)=\"search('nuclear pore', 'example')\">nuclear pore</a>\n      <a (click)=\"search('Q15554, P54274, Q96AP0', 'example')\">Q15554, P54274, Q96AP0</a>\n    </small>\n  </fieldset>\n</div>\n<!-- /local-search -->\n"

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
var INTACT_FTP_BASE_URL = 'http://ftp.ebi.ac.uk/pub/databases/intact/';
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