webpackJsonp(["common"],{

/***/ "../../../../../src/app/shared/loading-indicators/progress-spinner/progress-spinner.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/loading-indicators/progress-spinner/progress-spinner.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"small-5 small-centered columns\">\n  <md-progress-spinner style=\"margin:0 auto;\"\n                       [attr.color]=\"color\"\n                       [mode]=\"mode\"\n                       [value]=\"0\">\n  </md-progress-spinner>\n  <div style=\"text-align: center\">\n    <h4>Loading {{query}}</h4>\n    <p *ngIf=\"takesLonger\">This takes longer than usual. Bear with us!</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/loading-indicators/progress-spinner/progress-spinner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressSpinnerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgressSpinnerComponent = ProgressSpinnerComponent_1 = (function () {
    function ProgressSpinnerComponent() {
        this._color = 'primary';
        this._mode = 'indeterminate';
        ProgressSpinnerComponent_1.show = false;
    }
    ProgressSpinnerComponent.display = function () {
        ProgressSpinnerComponent_1.show = true;
    };
    ProgressSpinnerComponent.hide = function () {
        setTimeout(function () {
            ProgressSpinnerComponent_1.show = false;
        }, 1000);
    };
    ProgressSpinnerComponent.prototype.ngOnInit = function () {
        var context = this;
        setTimeout(function () {
            context._takesLonger = true;
        }, 5000);
    };
    Object.defineProperty(ProgressSpinnerComponent.prototype, "isDisplayed", {
        get: function () {
            return ProgressSpinnerComponent_1.show;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressSpinnerComponent.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            this._color = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressSpinnerComponent.prototype, "mode", {
        get: function () {
            return this._mode;
        },
        set: function (value) {
            this._mode = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressSpinnerComponent.prototype, "query", {
        get: function () {
            return this._query;
        },
        set: function (value) {
            this._query = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressSpinnerComponent.prototype, "takesLonger", {
        get: function () {
            return this._takesLonger;
        },
        enumerable: true,
        configurable: true
    });
    return ProgressSpinnerComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], ProgressSpinnerComponent.prototype, "query", null);
ProgressSpinnerComponent = ProgressSpinnerComponent_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'cp-progress-spinner',
        template: __webpack_require__("../../../../../src/app/shared/loading-indicators/progress-spinner/progress-spinner.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/loading-indicators/progress-spinner/progress-spinner.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProgressSpinnerComponent);

var ProgressSpinnerComponent_1;
//# sourceMappingURL=/Users/ntoro/Code/Complex-Portal/complex-portal-view/src/progress-spinner.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/loading-indicators/progress-spinner/progress-spinner.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressSpinnerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__progress_spinner_component__ = __webpack_require__("../../../../../src/app/shared/loading-indicators/progress-spinner/progress-spinner.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProgressSpinnerModule = (function () {
    function ProgressSpinnerModule() {
    }
    return ProgressSpinnerModule;
}());
ProgressSpinnerModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdProgressSpinnerModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__progress_spinner_component__["a" /* ProgressSpinnerComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__progress_spinner_component__["a" /* ProgressSpinnerComponent */]
        ]
    })
], ProgressSpinnerModule);

//# sourceMappingURL=/Users/ntoro/Code/Complex-Portal/complex-portal-view/src/progress-spinner.module.js.map

/***/ })

});
//# sourceMappingURL=common.chunk.js.map