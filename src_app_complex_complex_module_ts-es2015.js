"use strict";
(self["webpackChunkcomplex_portal_view"] = self["webpackChunkcomplex_portal_view"] || []).push([["src_app_complex_complex_module_ts"],{

/***/ 26330:
/*!*******************************************!*\
  !*** ./src/app/complex/complex.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComplexModule": function() { return /* binding */ ComplexModule; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _shared_pipe_species_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/pipe/species.pipe */ 6183);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let ComplexModule = class ComplexModule {
};
ComplexModule = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild([
                {
                    path: 'organisms',
                    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_loading-indicators_progress-spinner_progress-spinner_module_ts"), __webpack_require__.e("src_app_complex_complex-organisms_complex-organisms_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! app/complex/complex-organisms/complex-organisms.module */ 15563)).then(m => m.ComplexOrganismsModule)
                },
                {
                    path: 'search',
                    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_loading-indicators_progress-spinner_progress-spinner_module_ts"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_tooltip_js"), __webpack_require__.e("default-src_app_complex_complex-results_complex-navigator_complex-navigator_module_ts"), __webpack_require__.e("src_app_complex_complex-results_complex-results_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! app/complex/complex-results/complex-results.module */ 79555)).then(m => m.ComplexResultsModule)
                },
                {
                    path: ':id',
                    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_loading-indicators_progress-spinner_progress-spinner_module_ts"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_tooltip_js"), __webpack_require__.e("src_app_complex_complex-details_complex-details_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! app/complex/complex-details/complex-details.module */ 81613)).then(m => m.ComplexDetailsModule)
                },
            ]),
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        ],
        providers: [
            {
                provide: _angular_common__WEBPACK_IMPORTED_MODULE_3__.APP_BASE_HREF,
                useFactory: (s) => s.getBaseHrefFromDOM(),
                deps: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.PlatformLocation]
            }
        ],
        exports: [
            _shared_pipe_species_pipe__WEBPACK_IMPORTED_MODULE_0__.SpeciesPipe
        ],
        declarations: [
            _shared_pipe_species_pipe__WEBPACK_IMPORTED_MODULE_0__.SpeciesPipe
        ]
    })
], ComplexModule);



/***/ })

}]);
//# sourceMappingURL=src_app_complex_complex_module_ts-es2015.js.map