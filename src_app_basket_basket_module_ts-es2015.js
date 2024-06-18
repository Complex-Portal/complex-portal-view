"use strict";
(self["webpackChunkcomplex_portal_view"] = self["webpackChunkcomplex_portal_view"] || []).push([["src_app_basket_basket_module_ts"],{

/***/ 49849:
/*!********************************************!*\
  !*** ./src/app/basket/basket.component.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasketComponent": function() { return /* binding */ BasketComponent; }
/* harmony export */ });
/* harmony import */ var _Users_susiehuget_Documents_GitHub_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_basket_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./basket.component.html */ 35343);
/* harmony import */ var _basket_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basket.component.css */ 78478);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _shared_basket_service_basket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/basket/service/basket.service */ 69510);
/* harmony import */ var _shared_loading_indicators_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/loading-indicators/progress-bar/progress-bar.component */ 57040);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 71570);
/* harmony import */ var _complex_shared_service_complex_portal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../complex/shared/service/complex-portal.service */ 20658);
/* harmony import */ var _complex_shared_model_complex_results_interactor_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../complex/shared/model/complex-results/interactor.model */ 45178);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








let BasketComponent = class BasketComponent {
    constructor(_basketService, titleService, complexPortalService) {
        this._basketService = _basketService;
        this.titleService = titleService;
        this.complexPortalService = complexPortalService;
        this.complexSearchBasket = null;
        this.allInteractorsInComplexSearchBasket = [];
        this._complexBasket = this._basketService.complexBasket;
    }
    ngOnInit() {
        this.titleService.setTitle('Complex Portal - Basket');
        this.complexNavigatorLoading();
    }
    ngAfterViewInit() {
        _shared_loading_indicators_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_3__.ProgressBarComponent.hide();
    }
    deleteFromBasket(key) {
        this._basketService.deleteFromBasket(key);
        this.complexNavigatorLoading();
    }
    get complexBasket() {
        return this._complexBasket;
    }
    set complexBasket(value) {
        this._complexBasket = value;
    }
    isComplexBasketEmpty() {
        return this.getKeys(this._complexBasket).length === 0;
    }
    // Candidate for Util
    getKeys(object) {
        return Object.keys(object);
    }
    createQuery(object) {
        let query = '';
        for (const key of this.getKeys(object)) {
            if (object[key] !== undefined) {
                let queryPerObject = ' complex_id:';
                queryPerObject += object[key].id;
                query += queryPerObject;
            }
        }
        this._query = query;
        return query;
    }
    requestComplexesForNavigator() {
        this.complexPortalService.findComplex(this._query).subscribe(complexSearch => {
            this.complexSearchBasket = complexSearch;
            if (this.complexSearchBasket.totalNumberOfResults !== 0) {
                for (let i = 0; i < complexSearch.elements.length; i++) {
                    this._complexes.push(complexSearch.elements[i]);
                    for (const component of complexSearch.elements[i].interactors) {
                        if (!this.allInteractorsInComplexSearchBasket.some(interactor => interactor.identifier === component.identifier)) {
                            this.allInteractorsInComplexSearchBasket.push(new _complex_shared_model_complex_results_interactor_model__WEBPACK_IMPORTED_MODULE_5__.Interactor(component.identifier, component.identifierLink, component.name, component.description, component.interactorType, component.organismName));
                        }
                    }
                }
            }
        });
    }
    complexNavigatorLoading() {
        this._query = this.createQuery(this._complexBasket);
        this.complexSearchBasket = null;
        this.allInteractorsInComplexSearchBasket = [];
        this._complexes = [];
        this.requestComplexesForNavigator();
        console.log(this._complexes);
        console.log(this.allInteractorsInComplexSearchBasket);
    }
};
BasketComponent.ctorParameters = () => [
    { type: _shared_basket_service_basket_service__WEBPACK_IMPORTED_MODULE_2__.BasketService },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.Title },
    { type: _complex_shared_service_complex_portal_service__WEBPACK_IMPORTED_MODULE_4__.ComplexPortalService }
];
BasketComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'cp-basket',
        template: _Users_susiehuget_Documents_GitHub_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_basket_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_basket_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], BasketComponent);



/***/ }),

/***/ 55801:
/*!*****************************************!*\
  !*** ./src/app/basket/basket.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasketModule": function() { return /* binding */ BasketModule; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _basket_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basket.component */ 49849);
/* harmony import */ var _complex_complex_results_complex_navigator_complex_navigator_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../complex/complex-results/complex-navigator/complex-navigator.module */ 60090);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let BasketModule = class BasketModule {
};
BasketModule = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild([
                { path: '', component: _basket_component__WEBPACK_IMPORTED_MODULE_0__.BasketComponent }
            ]),
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _complex_complex_results_complex_navigator_complex_navigator_module__WEBPACK_IMPORTED_MODULE_1__.ComplexNavigatorModule
        ],
        declarations: [_basket_component__WEBPACK_IMPORTED_MODULE_0__.BasketComponent]
    })
], BasketModule);



/***/ }),

/***/ 35343:
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/basket/basket.component.html ***!
  \*************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"margin-top-large margin-bottom-large\">\n  <div *ngIf=\"!isComplexBasketEmpty()\" class=\"columns medium-12\">\n    <h1>Personal complex collection</h1>\n    <table class=\"hover\">\n      <thead>\n      <tr>\n        <th>Name</th>\n        <th>ID</th>\n        <th>Organism</th>\n        <th></th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr *ngFor=\"let key of getKeys(complexBasket)\">\n        <td>\n          <a [routerLink]=\"['/complex', complexBasket[key].id]\">{{ complexBasket[key].name }}</a>\n        </td>\n        <td>\n          {{ complexBasket[key].id }}\n        </td>\n        <td>\n          {{ complexBasket[key].organism }}\n        </td>\n        <td>\n          <a class=\"button primary columns medium-12\" (click)=\"deleteFromBasket(key)\"> <span\n            class=\"icon icon-functional\" data-icon=\"d\"></span></a>\n        </td>\n      </tr>\n      </tbody>\n    </table>\n    <div class=\"ComplexNavigator\">\n      <cp-complex-navigator\n        [complexSearch]=\"complexSearchBasket\"\n        [interactors]=\"allInteractorsInComplexSearchBasket\">\n      </cp-complex-navigator>\n    </div>\n\n  </div>\n  <div *ngIf=\"isComplexBasketEmpty()\" class=\"columns medium-12\">\n    <div class=\"callout\">\n      <h3>Your basket is currently empty. :'-(</h3>\n      <h5>Search for a complex and click on <i class=\"icon icon-generic\" data-icon=\"b\"></i>-symbol to create your own\n        collection of favorite complexes.</h5>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ 78478:
/*!*********************************************!*\
  !*** ./src/app/basket/basket.component.css ***!
  \*********************************************/
/***/ (function(module) {

module.exports = ".ComplexNavigator {\n  float: left;\n  width: 100%\n  /*background-color: #6dab49;*/\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2tldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDViw2QkFBNkI7QUFDL0IiLCJmaWxlIjoiYmFza2V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuQ29tcGxleE5hdmlnYXRvciB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMTAwJVxuICAvKmJhY2tncm91bmQtY29sb3I6ICM2ZGFiNDk7Ki9cbn1cbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_basket_basket_module_ts-es2015.js.map