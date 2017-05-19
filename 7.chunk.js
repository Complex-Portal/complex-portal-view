webpackJsonp([7,13],{

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplexModule", function() { return ComplexModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ComplexModule = (function () {
    function ComplexModule() {
    }
    return ComplexModule;
}());
ComplexModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forChild([
                { path: 'organisms', loadChildren: 'app/complex/complex-organisms/complex-organisms.module#ComplexOrganismsModule' },
                { path: 'search', loadChildren: 'app/complex/complex-results/complex-results.module#ComplexResultsModule' },
                { path: ':id', loadChildren: 'app/complex/complex-details/complex-details.module#ComplexDetailsModule' },
            ]),
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
        ],
        declarations: [],
        exports: []
    })
], ComplexModule);

//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/complex.module.js.map

/***/ })

});
//# sourceMappingURL=7.chunk.js.map