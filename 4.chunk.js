webpackJsonp([4,13],{

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__download_component__ = __webpack_require__(522);
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

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_loading_indicators_progress_bar_progress_bar_component__ = __webpack_require__(105);
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
    }
    DownloadComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_1__shared_loading_indicators_progress_bar_progress_bar_component__["a" /* ProgressBarComponent */].display();
    };
    DownloadComponent.prototype.ngAfterViewInit = function () {
        __WEBPACK_IMPORTED_MODULE_1__shared_loading_indicators_progress_bar_progress_bar_component__["a" /* ProgressBarComponent */].hide();
    };
    return DownloadComponent;
}());
DownloadComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'cp-download',
        template: __webpack_require__(639),
        styles: [__webpack_require__(584)]
    }),
    __metadata("design:paramtypes", [])
], DownloadComponent);

//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/download.component.js.map

/***/ }),

/***/ 584:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 639:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"columns medium-12\">\n    <h2>Downloads</h2>\n    <h3>Complex Portal is released monthly and all data is in PSI-MI 2.5 and 3.0 format as well as in ComplexTAB format. See the PSI website for a detailed\n      format\n      description.</h3>\n    <ul>\n      <li class=\"icon-bullet\"><span class=\"icon icon-generic\" data-icon=\"*\"></span> All Complex Portal data and software\n        is freely available to all users, academic or commercial, under the terms of the Apache License, Version 2.0\n      </li>\n    </ul>\n    <div class=\"callout columns medium-4\">\n      <dl>\n        <h4>Latest PSI-MI 2.5 format</h4>\n        <dd><p>Available <a href=\"ftp://ftp.ebi.ac.uk/pub/databases/intact/complex/current/psi25/\" target=\"_blank\"\n                            class=\"readmore\">here</a></p></dd>\n      </dl>\n    </div> <!-- /callout -->\n    <div class=\"callout columns medium-4\">\n      <dl>\n        <h4>Latest PSI-MI 3.0 format</h4>\n        <dd><p>Available <a href=\"ftp://ftp.ebi.ac.uk/pub/databases/intact/complex/current/psi30/\" target=\"_blank\"\n                            class=\"readmore\">here</a></p></dd>\n      </dl>\n    </div> <!-- /callout -->\n    <div class=\"callout columns medium-4\">\n      <dl>\n        <h4>Latest ComplexTAB format</h4>\n        <dd><p>Available <a href=\"ftp://ftp.ebi.ac.uk/pub/databases/intact/complex/current/complextab/\" target=\"_blank\"\n                            class=\"readmore\">here</a></p></dd>\n      </dl>\n    </div> <!-- /callout -->\n  </div>\n</div>\n"

/***/ })

});
//# sourceMappingURL=4.chunk.js.map