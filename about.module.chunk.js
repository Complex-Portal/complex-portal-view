webpackJsonp(["about.module"],{

/***/ "./src/app/about/about.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"columns medium-12\">\n    <div>\n      <h2>About</h2>\n      <p>The Complex Portal is a manually curated, encyclopaedic resource of macromolecular complexes from\n        a number of key model organisms, entered into the <a href=\"{{INTACT_BASE_URL}}\" target=\"_blank\">IntAct\n          molecular interaction database <i class=\"icon icon-generic small\" data-icon=\"x\"></i></a>. Data includes\n        protein-only complexes as well as protein-small molecule and protein-nucleic acid complexes. All complexes are\n        derived from physical molecular interaction evidences extracted from the literature and cross-referenced in the\n        entry, or by curator inference from information on homologs in closely related species or by inference from\n        scientific background. All complexes are tagged with <a\n          href=\"http://www.ebi.ac.uk/intact/complex/documentation/#evidences\">Evidence and Conclusion Ontology codes <i class=\"icon icon-generic small\" data-icon=\"x\"></i></a>\n        to indicate the type of evidence available for each entry.</p>\n      <p>The number of complexes available is currently limited, but will be added to over time. If you\n        wish to request the curation of one or more complexes, or to amend or contribute to an existing entry, please <a\n          href=\"{{INTACT_SUPPORT_URL}}\" target=\"_blank\">contact us <i class=\"icon icon-generic small\" data-icon=\"x\"></i></a>.\n      </p>\n      <p>\n        All Complex Portal data and software is freely available to all users, academic or commercial,\n        under the terms of the <a href=\"{{LICENSE_URL}}\"\n                                  target=\"_blank\">CC-BY4.0</a>\n      </p>\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_loading_indicators_progress_bar_progress_bar_component__ = __webpack_require__("./src/app/shared/loading-indicators/progress-bar/progress-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
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
    function AboutComponent(titleService) {
        this.titleService = titleService;
        this._INTACT_BASE_URL = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].intact_base_url;
        this._INTACT_SUPPORT_URL = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].intact_support_url;
        this._LICENSE_URL = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].license_url;
    }
    AboutComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('Complex Portal - About');
    };
    AboutComponent.prototype.ngAfterViewInit = function () {
        __WEBPACK_IMPORTED_MODULE_1__shared_loading_indicators_progress_bar_progress_bar_component__["a" /* ProgressBarComponent */].hide();
    };
    Object.defineProperty(AboutComponent.prototype, "INTACT_BASE_URL", {
        get: function () {
            return this._INTACT_BASE_URL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AboutComponent.prototype, "INTACT_SUPPORT_URL", {
        get: function () {
            return this._INTACT_SUPPORT_URL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AboutComponent.prototype, "LICENSE_URL", {
        get: function () {
            return this._LICENSE_URL;
        },
        enumerable: true,
        configurable: true
    });
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'cp-about',
            template: __webpack_require__("./src/app/about/about.component.html"),
            styles: [__webpack_require__("./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["Title"]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/about/about.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return AboutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_component__ = __webpack_require__("./src/app/about/about.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AboutModule = /** @class */ (function () {
    function AboutModule() {
    }
    AboutModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forChild([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__about_component__["a" /* AboutComponent */] }
                ]),
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__about_component__["a" /* AboutComponent */]]
        })
    ], AboutModule);
    return AboutModule;
}());



/***/ })

});
//# sourceMappingURL=about.module.chunk.js.map