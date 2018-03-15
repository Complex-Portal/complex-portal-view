webpackJsonp(["download.module"],{

/***/ "./src/app/download/download.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/download/download.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"columns medium-12\">\n    <h2>Programmatic Access</h2>\n    <p>The Complex Portal is released monthly and data on individual complexes is available for download in both PSI-MI\n      XML2.5 and XML3.0 formats (see the PSI website for a detailed format description). The files are grouped by\n      species. We have now also developed ComplexTAB, a flatfile format to enable simpler parsing or loading into\n      Microsoft Excel. A separate ComplexTAB file has been produced for each species - details on the format are\n      available <a (click)=\"goToComplexTabeReadMe()\">here <i class=\"icon icon-generic small\" data-icon=\"x\"></i></a>. All files are available from the <a\n        (click)=\"goToComplexFTPCurrent()\">ftp site <i class=\"icon icon-generic small\" data-icon=\"x\"></i></a> and will be\n      updated as we add new complexes with every data release.</p>\n    <ul>\n      <li class=\"icon-bullet\"><span class=\"icon icon-generic\" data-icon=\"*\"></span> All Complex Portal data and software\n        is freely available to all users, academic or commercial, under the terms of the Apache License, Version 2.0\n      </li>\n    </ul>\n    <div class=\"row button-grid small-up-1 medium-up-4 large-up-4 margin-top-xlarge no-pad-right\" data-equalizer\n         data-equalize-on=\"medium\" id=\"large-button-grid\">\n      <div class=\"column  padding-bottom-large\">\n        <a class=\"button medium-12 columns text-center\" data-equalizer-watch (click)=\"goToComplexPSI25()\">\n          <h3 class=\"icon icon-fileformats  white-color\" data-icon=\"1\"></h3>\n          <h5 class=\"white-color\">PSI-MI XML 2.5</h5>\n        </a>\n      </div>\n      <div class=\"column  padding-bottom-large\">\n        <a class=\"button medium-12 columns text-center\" data-equalizer-watch\n           (click)=\"goToComplexPSI30()\">\n          <h3 class=\"icon icon-fileformats  white-color\" data-icon=\"1\"></h3>\n          <h5 class=\"white-color\">PSI-MI XML 3.0</h5>\n        </a>\n      </div>\n      <div class=\"column  padding-bottom-large\">\n        <a class=\"button medium-12 columns text-center\" data-equalizer-watch\n           (click)=\"goToComplexTAB()\">\n          <h3 class=\"icon icon-fileformats  white-color\" data-icon=\"v\"></h3>\n          <h5 class=\"white-color\">ComplexTab</h5>\n        </a>\n      </div>\n      <div class=\"column  padding-bottom-large\">\n        <a class=\"button medium-12 columns text-center\" data-equalizer-watch\n           (click)=\"goToComplexWS()\">\n          <h3 class=\"icon icon-fileformats white-color\" data-icon=\"J\"></h3>\n          <h5 class=\"white-color\">PSI-MI JSON</h5>\n        </a>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n"

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
        this.titleService.setTitle('Complex Portal - Programmatic Access');
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

/***/ "./src/app/download/download.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadModule", function() { return DownloadModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__download_component__ = __webpack_require__("./src/app/download/download.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DownloadModule = /** @class */ (function () {
    function DownloadModule() {
    }
    DownloadModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forChild([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__download_component__["a" /* DownloadComponent */] }
                ]),
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__download_component__["a" /* DownloadComponent */]]
        })
    ], DownloadModule);
    return DownloadModule;
}());



/***/ })

});
//# sourceMappingURL=download.module.chunk.js.map