webpackJsonp([4,13],{

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__download_component__ = __webpack_require__(537);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadModule", function() { return DownloadModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DownloadModule = (function () {
    function DownloadModule() {
    }
    return DownloadModule;
}());
DownloadModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forChild([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_3__download_component__["a" /* DownloadComponent */] }
            ]),
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__download_component__["a" /* DownloadComponent */]]
    })
], DownloadModule);

//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/download.module.js.map

/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_loading_indicators_progress_bar_progress_bar_component__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DownloadComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DownloadComponent = (function () {
    function DownloadComponent() {
        this._COMPLEX_PSI25 = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].complex_psi25;
        this._COMPLEX_PSI30 = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].complex_psi30;
        this._COMPLEX_TAB = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].complex_tab;
        this._COMPLEX_WS = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].complex_ws_base_url;
        this._COMPLEX_TAB_README = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].complex_tab_readme;
        this._COMPLEX_CURRENT = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].complex_current;
    }
    DownloadComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_1__shared_loading_indicators_progress_bar_progress_bar_component__["a" /* ProgressBarComponent */].display();
    };
    DownloadComponent.prototype.ngAfterViewInit = function () {
        __WEBPACK_IMPORTED_MODULE_1__shared_loading_indicators_progress_bar_progress_bar_component__["a" /* ProgressBarComponent */].hide();
    };
    Object.defineProperty(DownloadComponent.prototype, "COMPLEX_PSI25", {
        get: function () {
            return this._COMPLEX_PSI25;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DownloadComponent.prototype, "COMPLEX_PSI30", {
        get: function () {
            return this._COMPLEX_PSI30;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DownloadComponent.prototype, "COMPLEX_TAB", {
        get: function () {
            return this._COMPLEX_TAB;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DownloadComponent.prototype, "COMPLEX_WS", {
        get: function () {
            return this._COMPLEX_WS;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DownloadComponent.prototype, "COMPLEX_TAB_README", {
        get: function () {
            return this._COMPLEX_TAB_README;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DownloadComponent.prototype, "COMPLEX_CURRENT", {
        get: function () {
            return this._COMPLEX_CURRENT;
        },
        enumerable: true,
        configurable: true
    });
    return DownloadComponent;
}());
DownloadComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'cp-download',
        template: __webpack_require__(654),
        styles: [__webpack_require__(599)]
    }),
    __metadata("design:paramtypes", [])
], DownloadComponent);

//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/download.component.js.map

/***/ }),

/***/ 599:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 654:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"columns medium-12\">\n    <h2>Programmatic Access</h2>\n    <p>The Complex Portal is released monthly and data on individual complexes is available for download in both PSI-MI\n      XML2.5 and XML3.0 formats (see the PSI website for a detailed format description). The files are grouped by\n      species. We have now also developed ComplexTAB, a flatfile format to enable simpler parsing or loading into\n      Microsoft Excel. A separate ComplexTAB file has been produced for each species - details on the format are\n      available <a href=\"{{COMPLEX_TAB_README}}\" target=\"_blank\">here</a>. All files are available from the <a\n        href=\"{{COMPLEX_CURRENT}}\" target=\"_blank\">ftp site</a> and will be\n      updated as we add new complexes with every data release.</p>\n    <ul>\n      <li class=\"icon-bullet\"><span class=\"icon icon-generic\" data-icon=\"*\"></span> All Complex Portal data and software\n        is freely available to all users, academic or commercial, under the terms of the Apache License, Version 2.0\n      </li>\n    </ul>\n    <div class=\"row button-grid small-up-1 medium-up-4 large-up-4 margin-top-xlarge no-pad-right\" data-equalizer\n         data-equalize-on=\"medium\" id=\"large-button-grid\">\n      <div class=\"column  padding-bottom-large\">\n        <a class=\"button medium-12 columns text-center\" data-equalizer-watch\n           href=\"{{COMPLEX_PSI25}}\" target=\"_blank\">\n          <h3 class=\"icon icon-fileformats  white-color\" data-icon=\"1\"></h3>\n          <h5 class=\"white-color\">PSI-MI XML 2.5</h5>\n        </a>\n      </div>\n      <div class=\"column  padding-bottom-large\">\n        <a class=\"button medium-12 columns text-center\" data-equalizer-watch\n           href=\"{{COMPLEX_PSI30}}\" target=\"_blank\">\n          <h3 class=\"icon icon-fileformats  white-color\" data-icon=\"1\"></h3>\n          <h5 class=\"white-color\">PSI-MI XML 3.0</h5>\n        </a>\n      </div>\n      <div class=\"column  padding-bottom-large\">\n        <a class=\"button medium-12 columns text-center\" data-equalizer-watch\n           href=\"{{COMPLEX_TAB}}\" target=\"_blank\">\n          <h3 class=\"icon icon-fileformats  white-color\" data-icon=\"v\"></h3>\n          <h5 class=\"white-color\">ComplexTab</h5>\n        </a>\n      </div>\n      <div class=\"column  padding-bottom-large\">\n        <a class=\"button medium-12 columns text-center\" data-equalizer-watch\n           href=\"{{COMPLEX_WS}}\" target=\"_blank\">\n          <h3 class=\"icon icon-fileformats white-color\" data-icon=\"J\"></h3>\n          <h5 class=\"white-color\">PSI-MI JSON</h5>\n        </a>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n"

/***/ })

});
//# sourceMappingURL=4.chunk.js.map