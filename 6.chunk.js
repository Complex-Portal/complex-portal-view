webpackJsonp([6],{

/***/ "../../../../../src/app/basket/basket.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/basket/basket.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div *ngIf=\"!isComplexBasketEmpty()\" class=\"columns medium-12\">\n    <div class=\"callout\">\n      <h3>Personal complex collection</h3>\n    </div>\n    <table class=\"hover\">\n      <thead>\n      <tr>\n        <th>Name</th>\n        <th>ID</th>\n        <th>Organism</th>\n        <th></th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr *ngFor=\"let key of getKeys(complexBasket)\">\n        <td>\n          <a [routerLink]=\"['/complex', complexBasket[key].id]\">{{complexBasket[key].name}}</a>\n        </td>\n        <td>\n          {{complexBasket[key].id}}\n        </td>\n        <td>\n          {{complexBasket[key].organism}}\n        </td>\n        <td>\n          <a class=\"button primary columns medium-12\" (click)=\"deleteFromBasket(key)\"> <span\n            class=\"icon icon-functional\" data-icon=\"d\"></span></a>\n        </td>\n      </tr>\n      </tbody>\n    </table>\n  </div>\n  <div *ngIf=\"isComplexBasketEmpty()\" class=\"columns medium-12\">\n    <div class=\"callout\">\n      <h3>Your basket is currently empty. :'-(</h3>\n      <h5>Search for a complex and click on <i class=\"icon icon-generic\" data-icon=\"b\"></i>-symbol to create your own collection of favorite complexes.</h5>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/basket/basket.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_basket_service_basket_service__ = __webpack_require__("../../../../../src/app/shared/basket/service/basket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_loading_indicators_progress_bar_progress_bar_component__ = __webpack_require__("../../../../../src/app/shared/loading-indicators/progress-bar/progress-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasketComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BasketComponent = (function () {
    function BasketComponent(_basketService, titleService) {
        this._basketService = _basketService;
        this.titleService = titleService;
        this._complexBasket = this._basketService.complexBasket;
    }
    BasketComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('Complex Portal - Basket');
    };
    BasketComponent.prototype.ngAfterViewInit = function () {
        __WEBPACK_IMPORTED_MODULE_2__shared_loading_indicators_progress_bar_progress_bar_component__["a" /* ProgressBarComponent */].hide();
    };
    BasketComponent.prototype.deleteFromBasket = function (key) {
        this._basketService.deleteFromBasket(key);
    };
    Object.defineProperty(BasketComponent.prototype, "complexBasket", {
        get: function () {
            return this._complexBasket;
        },
        set: function (value) {
            this._complexBasket = value;
        },
        enumerable: true,
        configurable: true
    });
    BasketComponent.prototype.isComplexBasketEmpty = function () {
        return this.getKeys(this._complexBasket).length === 0;
    };
    // Candidate for Util
    BasketComponent.prototype.getKeys = function (object) {
        return Object.keys(object);
    };
    return BasketComponent;
}());
BasketComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'cp-basket',
        template: __webpack_require__("../../../../../src/app/basket/basket.component.html"),
        styles: [__webpack_require__("../../../../../src/app/basket/basket.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_basket_service_basket_service__["a" /* BasketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_basket_service_basket_service__["a" /* BasketService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["Title"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["Title"]) === "function" && _b || Object])
], BasketComponent);

var _a, _b;
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/basket.component.js.map

/***/ }),

/***/ "../../../../../src/app/basket/basket.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__basket_component__ = __webpack_require__("../../../../../src/app/basket/basket.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasketModule", function() { return BasketModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BasketModule = (function () {
    function BasketModule() {
    }
    return BasketModule;
}());
BasketModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forChild([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_3__basket_component__["a" /* BasketComponent */] }
            ]),
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__basket_component__["a" /* BasketComponent */]]
    })
], BasketModule);

//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/basket.module.js.map

/***/ })

});
//# sourceMappingURL=6.chunk.js.map