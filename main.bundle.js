webpackJsonp([9,13],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgressBarComponent = ProgressBarComponent_1 = (function () {
    function ProgressBarComponent() {
        this._color = 'primary';
        this._mode = 'query';
        ProgressBarComponent_1.show = false;
    }
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
    return ProgressBarComponent;
}());
ProgressBarComponent = ProgressBarComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'cp-progress-bar',
        template: __webpack_require__(378),
        styles: [__webpack_require__(366)]
    }),
    __metadata("design:paramtypes", [])
], ProgressBarComponent);

var ProgressBarComponent_1;
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/progress-bar.component.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_basketItem__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ts_md5_dist_md5__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ts_md5_dist_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ts_md5_dist_md5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notification_service_notification_service__ = __webpack_require__(70);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasketService; });
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
var BasketService = (function () {
    function BasketService(notificationService) {
        this.notificationService = notificationService;
        this._complexBasket = {};
        this.onBasketCountChanged$ = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.initialiseBasket();
    }
    BasketService.prototype.initialiseBasket = function () {
        var complexStore = this.getLocalStorage();
        if (!complexStore) {
            this.saveInLocalStorage();
            this.initialiseBasket();
        }
        else {
            var keys = this.getKeys(complexStore);
            for (var i = 0; i < keys.length; i++) {
                var complex = complexStore[keys[i]];
                if (complex) {
                    this._complexBasket[keys[i]] = new __WEBPACK_IMPORTED_MODULE_1__model_basketItem__["a" /* BasketItem */](complex._name, complex._id, complex._date, complex._organism);
                }
            }
        }
    };
    BasketService.prototype.getKeys = function (object) {
        return Object.keys(object);
    };
    BasketService.prototype.saveInBasket = function (name, id, organism) {
        var newBasketItem = new __WEBPACK_IMPORTED_MODULE_1__model_basketItem__["a" /* BasketItem */](name, id, new Date(), organism);
        if (!this.isInBasket(id)) {
            this._complexBasket[this.toMd5(id)] = newBasketItem;
            this.saveInLocalStorage();
            this.notificationService.addSuccessNotification('Stored ' + id + ' in you basket!');
        }
        this.onBasketCountChanged$.emit(this.getBasketCount());
    };
    BasketService.prototype.deleteFromBasket = function (key) {
        var id = this._complexBasket[key].id;
        delete this._complexBasket[key];
        this.saveInLocalStorage();
        this.notificationService.addSuccessNotification('Removed ' + id + ' in you basket!');
        this.onBasketCountChanged$.emit(this.getBasketCount());
    };
    BasketService.prototype.saveInLocalStorage = function () {
        localStorage.setItem(COMPLEX_STORE, JSON.stringify(this._complexBasket));
    };
    BasketService.prototype.getLocalStorage = function () {
        return JSON.parse(localStorage.getItem(COMPLEX_STORE));
    };
    BasketService.prototype.isInBasket = function (id) {
        var key = this.toMd5(id);
        if (this._complexBasket[key]) {
            this.notificationService.addErrorNotification(id + ' is already stored in you basket!');
            return true;
        }
        return false;
    };
    BasketService.prototype.toMd5 = function (key) {
        return __WEBPACK_IMPORTED_MODULE_2_ts_md5_dist_md5__["Md5"].hashStr(key).toString();
    };
    Object.defineProperty(BasketService.prototype, "complexBasket", {
        get: function () {
            return this._complexBasket;
        },
        enumerable: true,
        configurable: true
    });
    BasketService.prototype.getBasketCount = function () {
        return this.getKeys(this._complexBasket).length;
    };
    return BasketService;
}());
BasketService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__notification_service_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__notification_service_notification_service__["a" /* NotificationService */]) === "function" && _a || Object])
], BasketService);

var _a;
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/basket.service.js.map

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/about/about.module": [
		432,
		6
	],
	"app/basket/basket.module": [
		433,
		5
	],
	"app/complex/complex-details/complex-details.module": [
		434,
		0
	],
	"app/complex/complex-organisms/complex-organisms.module": [
		435,
		3
	],
	"app/complex/complex-results/complex-results.module": [
		436,
		2
	],
	"app/complex/complex.module": [
		437,
		7
	],
	"app/download/download.module": [
		438,
		4
	],
	"app/home/home.module": [
		439,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 171;


/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(196);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/main.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComplexPortalService; });
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
var ComplexPortalService = (function () {
    function ComplexPortalService(http) {
        this.http = http;
    }
    /**
     * Get a specif complex from the WS
     * @param ac
     * @returns {Observable<R>}
     */
    ComplexPortalService.prototype.getComplex = function (ac) {
        return this.http.get(baseURL + '/details/' + ac)
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    ComplexPortalService.prototype.getComplexOrganisms = function () {
        return this.findComplex('*').map(function (res) { return res.facets.species_f; });
    };
    /**
     * Get a specif complex from the WS
     * @param ac
     * @returns {Observable<R>}
     */
    ComplexPortalService.prototype.getComplexMIJSON = function (ac) {
        return this.http.get(baseURL + '/export/' + ac)
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    /**
     * Find a complex based on indexed term
     * @returns {Observable<R>}
     * @param query
     * @param speciesFilter
     * @param bioRoleFilter
     * @param interactorTypeFilter
     * @param currentPageIndex
     * @param pageSize
     * @param format
     * @param facets
     */
    ComplexPortalService.prototype.findComplex = function (query, speciesFilter, bioRoleFilter, interactorTypeFilter, currentPageIndex, pageSize, format, facets) {
        if (speciesFilter === void 0) { speciesFilter = []; }
        if (bioRoleFilter === void 0) { bioRoleFilter = []; }
        if (interactorTypeFilter === void 0) { interactorTypeFilter = []; }
        if (currentPageIndex === void 0) { currentPageIndex = 1; }
        if (pageSize === void 0) { pageSize = 10; }
        if (format === void 0) { format = 'json'; }
        if (facets === void 0) { facets = 'species_f,ptype_f,pbiorole_f'; }
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        var filters = '';
        params.set('first', ((currentPageIndex * pageSize) - pageSize).toString());
        params.set('number', pageSize.toString());
        params.set('format', format);
        params.set('facets', facets);
        if (speciesFilter.length !== 0) {
            filters += 'species_f:(' + '"' + speciesFilter.join('"AND"') + '"' + '),';
        }
        if (bioRoleFilter.length !== 0) {
            filters += 'pbiorole_f:(' + '"' + bioRoleFilter.join('"AND"') + '"' + '),';
        }
        if (interactorTypeFilter.length !== 0) {
            filters += 'ptype_f:(' + '"' + interactorTypeFilter.join('"AND"') + '"' + '),';
        }
        params.set('filters', filters);
        // console.log(baseURL + '/search/' + query, {search: params});
        return this.http.get(baseURL + '/search/' + query, { search: params })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    ComplexPortalService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return ComplexPortalService;
}());
ComplexPortalService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ComplexPortalService);

var _a;
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/complex-portal.service.js.map

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReactomeService; });
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
var ReactomeService = (function () {
    function ReactomeService(http) {
        this.http = http;
    }
    ReactomeService.prototype.findRelatedPathways = function (id) {
        return this.http.get(baseURL + '/ContentService/data/pathways/low/entity/' + id)
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    ReactomeService.prototype.getComplexName = function (id) {
        return this.http.get(baseURL + '/ContentService/data/query/' + id + '/displayName')
            .map(function (res) { return res.text(); }).catch(this.handleError);
    };
    ReactomeService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        console.log(error);
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return ReactomeService;
}());
ReactomeService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ReactomeService);

var _a;
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/reactome.service.js.map

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EuroPmcService; });
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
var EuroPmcService = (function () {
    function EuroPmcService(http) {
        this.http = http;
    }
    EuroPmcService.prototype.getPublicationInformation = function (id) {
        return this.http.get(baseURL + '/webservices/rest/search?query=ext_id:' + id + '%20src:med&format=json')
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    EuroPmcService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return EuroPmcService;
}());
EuroPmcService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], EuroPmcService);

var _a;
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/euro-pmc.service.js.map

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OlsService; });
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
var OlsService = (function () {
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
            .map(function (response) { return response; }).catch(this.handleError);
    };
    OlsService.prototype.getEfoName = function (id) {
        return this.http.get(baseURL + '/efo/terms?iri=http://www.ebi.ac.uk/efo/' + id.replace(':', '_'))
            .map(function (response) { return response; }).catch(this.handleError);
    };
    OlsService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return OlsService;
}());
OlsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], OlsService);

var _a;
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/ols.service.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_notification_service_notification_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angulartics2__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angulartics2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angulartics2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_loading_indicators_progress_bar_progress_bar_component__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_toastr__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ngx_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_basket_service_basket_service__ = __webpack_require__(106);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var version = __webpack_require__(368).version;
var environmentName = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].evn;
var AppComponent = (function () {
    function AppComponent(angulartics2GoogleAnalytics, router, notificationService, toastrConfig, basketService) {
        var _this = this;
        this.angulartics2GoogleAnalytics = angulartics2GoogleAnalytics;
        this.router = router;
        this.notificationService = notificationService;
        this.toastrConfig = toastrConfig;
        this.basketService = basketService;
        this._basketCount = 0;
        this.basketService.onBasketCountChanged$.subscribe(function (count) { return _this._basketCount = count; });
        this._basketCount = this.basketService.getBasketCount();
        this._version = version;
        this._environmentName = environmentName;
        toastrConfig.closeButton = true; // displayedElements close button
        toastrConfig.timeOut = 0; // time to live
        this.notificationService.addAnnouncementNotification('For reporting issues or any request, please use the ' +
            '\'Issues\'-button in the top bar.', this.toastrConfig);
        this.notificationService.addAnnouncementNotification('This is a development page!', this.toastrConfig);
        // this.basketService.initialiseBasket();
    }
    AppComponent.prototype.ngOnInit = function () {
        // For every router change, we load the ProgressBar by default.
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof __WEBPACK_IMPORTED_MODULE_5__angular_router__["NavigationEnd"])) {
                __WEBPACK_IMPORTED_MODULE_4__shared_loading_indicators_progress_bar_progress_bar_component__["a" /* ProgressBarComponent */].display();
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        // Init some libs.
        this.initialiseFoundation();
        this.initialiseGoogleAnalytics();
        this.initialiseFoundationHacks();
        // ProgressBarComponent.hide();
    };
    // Candidate for utils.
    AppComponent.prototype.initialiseFoundation = function () {
        $(document).foundation();
        $(document).foundationExtendEBI();
    };
    AppComponent.prototype.initialiseGoogleAnalytics = function () {
        if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production === false) {
            ga('create', __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].analytics_id, 'none');
        }
        else {
            ga('create', __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].analytics_id, 'none');
        }
    };
    AppComponent.prototype.initialiseFoundationHacks = function () {
        // copied from script.js (ebi framework)
        // Assign global nav background images through meta tags
        (function assignImageByMetaTags() {
            var localMasthead = document.getElementById('local-masthead');
            // check for both ebi: and ebi- formatted meta tags
            // tslint:disable
            var localMastheadColor = document.querySelector("meta[name='ebi:localmasthead-color']")
                || document.querySelector("meta[name='ebi-localmasthead-color']");
            var localMastheadImage = document.querySelector("meta[name='ebi:localmasthead-image']")
                || document.querySelector("meta[name='ebi-localmasthead-image']");
            if (localMastheadColor != null) {
                localMasthead.style.backgroundColor = localMastheadColor.getAttribute("content");
                localMasthead.className += ' meta-background-color';
            }
            if (localMastheadImage != null) {
                localMasthead.style.backgroundImage = 'url(' + localMastheadImage.getAttribute("content") + ')';
                localMasthead.className += ' meta-background-image';
            }
            // tslint:enable
        })();
    };
    Object.defineProperty(AppComponent.prototype, "version", {
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
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'cp-root',
        template: __webpack_require__(376),
        styles: [__webpack_require__(364)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angulartics2__["Angulartics2GoogleAnalytics"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angulartics2__["Angulartics2GoogleAnalytics"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__shared_notification_service_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_notification_service_notification_service__["a" /* NotificationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6_ngx_toastr__["ToastrConfig"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ngx_toastr__["ToastrConfig"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__shared_basket_service_basket_service__["a" /* BasketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__shared_basket_service_basket_service__["a" /* BasketService */]) === "function" && _e || Object])
], AppComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app.component.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routes__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__complex_shared_service_complex_portal_service__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_notification_service_notification_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angulartics2__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angulartics2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angulartics2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__complex_complex_details_complex_function_reactome_crossreferences_shared_service_reactome_service__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__complex_complex_details_complex_references_euro_pmc_crossreferences_service_euro_pmc_service__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_ols_service_ols_service__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_basket_service_basket_service__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ts_md5_dist_md5__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ts_md5_dist_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_ts_md5_dist_md5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_loading_indicators_progress_bar_progress_bar_component__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ngx_toastr__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ngx_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_ngx_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__search_local_search_local_search_component__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_platform_browser_animations__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_material__ = __webpack_require__(186);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* tslint:disable:max-line-length */




















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_15__shared_loading_indicators_progress_bar_progress_bar_component__["a" /* ProgressBarComponent */],
            __WEBPACK_IMPORTED_MODULE_17__search_local_search_local_search_component__["a" /* LocalSearchComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["RouterModule"].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_routes__["a" /* rootRouterConfig */], { useHash: false }),
            __WEBPACK_IMPORTED_MODULE_16_ngx_toastr__["ToastrModule"].forRoot(),
            __WEBPACK_IMPORTED_MODULE_9_angulartics2__["Angulartics2Module"].forRoot([__WEBPACK_IMPORTED_MODULE_9_angulartics2__["Angulartics2GoogleAnalytics"]]),
            __WEBPACK_IMPORTED_MODULE_19__angular_material__["a" /* MdProgressBarModule */],
            __WEBPACK_IMPORTED_MODULE_18__angular_platform_browser_animations__["a" /* NoopAnimationsModule */],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__complex_shared_service_complex_portal_service__["a" /* ComplexPortalService */], __WEBPACK_IMPORTED_MODULE_8__shared_notification_service_notification_service__["a" /* NotificationService */], __WEBPACK_IMPORTED_MODULE_10__complex_complex_details_complex_function_reactome_crossreferences_shared_service_reactome_service__["a" /* ReactomeService */], __WEBPACK_IMPORTED_MODULE_11__complex_complex_details_complex_references_euro_pmc_crossreferences_service_euro_pmc_service__["a" /* EuroPmcService */], __WEBPACK_IMPORTED_MODULE_12__shared_ols_service_ols_service__["a" /* OlsService */], __WEBPACK_IMPORTED_MODULE_13__shared_basket_service_basket_service__["a" /* BasketService */], __WEBPACK_IMPORTED_MODULE_14_ts_md5_dist_md5__["Md5"]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app.module.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return rootRouterConfig; });
var rootRouterConfig = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'complex', loadChildren: 'app/complex/complex.module#ComplexModule' },
    { path: 'home', loadChildren: 'app/home/home.module#HomeModule' },
    { path: 'download', loadChildren: 'app/download/download.module#DownloadModule' },
    { path: 'basket', loadChildren: 'app/basket/basket.module#BasketModule' },
    { path: 'about', loadChildren: 'app/about/about.module#AboutModule' },
];
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app.routes.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalSearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LocalSearchComponent = (function () {
    function LocalSearchComponent(location, router, route) {
        this.location = location;
        this.router = router;
        this.route = route;
    }
    LocalSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
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
                        _this._query = queryParams['query'] ? queryParams['query'] : console.log('Error');
                    });
                }
                else if (_this.location.path().startsWith('/complex')) {
                    _this._query = _this.location.path().split('/')[2];
                }
                else {
                    _this._query = '';
                }
            }
        });
    };
    LocalSearchComponent.prototype.search = function (query) {
        this.router.navigate(['complex/search'], { queryParams: { query: query, page: 1 } });
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
    return LocalSearchComponent;
}());
LocalSearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'cp-local-search',
        template: __webpack_require__(377),
        styles: [__webpack_require__(365)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _c || Object])
], LocalSearchComponent);

var _a, _b, _c;
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/local-search.component.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasketItem; });
var BasketItem = (function () {
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

//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/basketItem.js.map

/***/ }),

/***/ 364:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)(false);
// imports


// module
exports.push([module.i, "a {\n  text-decoration:none;\n  border-width: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 365:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 368:
/***/ (function(module, exports) {

module.exports = {
	"name": "complex-portal-view",
	"version": "0.0.8-beta",
	"license": "MIT",
	"angular-cli": {},
	"scripts": {
		"ng": "ng",
		"start": "ng serve",
		"test": "ng test",
		"pree2e": "webdriver-manager update --standalone false --gecko false",
		"e2e": "protractor"
	},
	"private": true,
	"dependencies": {
		"@angular/animations": "^4.0.1",
		"@angular/common": "^4.0.1",
		"@angular/compiler": "^4.0.1",
		"@angular/core": "^4.0.1",
		"@angular/forms": "^4.0.1",
		"@angular/http": "^4.0.1",
		"@angular/material": "^2.0.0-beta.3",
		"@angular/platform-browser": "^4.0.1",
		"@angular/platform-browser-dynamic": "^4.0.1",
		"@angular/router": "^4.0.1",
		"EBI-Icon-fonts": "https://github.com/ebiwd/EBI-Icon-fonts/tarball/v1.1",
		"angulartics2": "^1.6.3",
		"complexviewer": "/Users/maximiliankoch/interaction-viewer",
		"core-js": "^2.4.1",
		"ebi_framework": "https://github.com/ebiwd/EBI-Framework/tarball/v1.1.13",
		"expose-loader": "^0.7.1",
		"install": "^0.8.7",
		"jquery": "^3.1.1",
		"litemol": "https://github.com/dsehnal/LiteMol/tarball/v1.0",
		"ng2-page-scroll": "^4.0.0-beta.7",
		"ngx-toastr": "^5.0.6",
		"react": "^15.5.4",
		"rxjs": "^5.0.1",
		"svgsaver": "^0.6.2",
		"ts-helpers": "^1.1.1",
		"ts-md5": "^1.2.0",
		"zone.js": "^0.8.4"
	},
	"devDependencies": {
		"@angular/cli": "^1.0.0",
		"@angular/compiler-cli": "^4.0.1",
		"@types/jasmine": "2.5.38",
		"@types/node": "^6.0.42",
		"codelyzer": "~2.1.1",
		"jasmine-core": "2.5.2",
		"jasmine-spec-reporter": "2.5.0",
		"karma": "1.2.0",
		"karma-chrome-launcher": "^2.0.0",
		"karma-cli": "^1.0.1",
		"karma-jasmine": "^1.0.2",
		"karma-remap-istanbul": "^0.2.1",
		"protractor": "~4.0.13",
		"ts-node": "1.2.1",
		"tslint": "^4.3.0",
		"typescript": "^2.0.10"
	}
};

/***/ }),

/***/ 376:
/***/ (function(module, exports) {

module.exports = "<div data-sticky-container>\n  <div id=\"local-masthead\" data-sticky data-sticky-on=\"large\" data-top-anchor=\"180\" data-btm-anchor=\"300000\">\n    <header>\n\n      <div id=\"global-masthead\" class=\"clearfix\">\n        <!--This has to be one line and no newline characters-->\n        <a href=\"//www.ebi.ac.uk/\" title=\"Go to the EMBL-EBI homepage\"><span class=\"ebi-logo\"></span></a>\n\n        <nav>\n          <div class=\"row\">\n            <ul id=\"global-nav\" class=\"menu\">\n              <!-- set active class as appropriate -->\n              <li id=\"home-mobile\" class=\"\"><a href=\"//www.ebi.ac.uk\"></a></li>\n              <li id=\"home\" class=\"active\"><a href=\"//www.ebi.ac.uk\"><i class=\"icon icon-generic\" data-icon=\"H\"></i>\n                EMBL-EBI</a></li>\n              <li id=\"services\"><a href=\"//www.ebi.ac.uk/services\"><i class=\"icon icon-generic\" data-icon=\"(\"></i>\n                Services</a></li>\n              <li id=\"research\"><a href=\"//www.ebi.ac.uk/research\"><i class=\"icon icon-generic\" data-icon=\")\"></i>\n                Research</a></li>\n              <li id=\"training\"><a href=\"//www.ebi.ac.uk/training\"><i class=\"icon icon-generic\" data-icon=\"t\"></i>\n                Training</a></li>\n              <li id=\"about\"><a href=\"//www.ebi.ac.uk/about\"><i class=\"icon icon-generic\" data-icon=\"i\"></i> About\n                us</a></li>\n              <li id=\"search\">\n                <a data-toggle=\"search-global-dropdown\"><i class=\"icon icon-functional\" data-icon=\"1\"></i>\n                  <span class=\"show-for-small-only\">Search</span></a>\n                <div id=\"search-global-dropdown\" class=\"dropdown-pane\" data-dropdown data-options=\"closeOnClick:true;\">\n                  <form id=\"global-search\" name=\"global-search\" action=\"/ebisearch/search.ebi\" method=\"GET\">\n                    <fieldset>\n                      <div class=\"input-group\">\n                        <input type=\"text\" name=\"query\" id=\"global-searchbox\" class=\"input-group-field\"\n                               placeholder=\"Search all of EMBL-EBI\">\n                        <div class=\"input-group-button\">\n                          <input type=\"submit\" name=\"submit\" value=\"Search\" class=\"button\">\n                          <input type=\"hidden\" name=\"db\" value=\"allebi\" checked=\"checked\">\n                          <input type=\"hidden\" name=\"requestFrom\" value=\"global-masthead\" checked=\"checked\">\n                        </div>\n                      </div>\n                    </fieldset>\n                  </form>\n                </div>\n              </li>\n              <li class=\"float-right show-for-medium embl-selector\">\n                <button class=\"button float-right\" type=\"button\" data-toggle=\"embl-dropdown\">Hinxton</button>\n                <!-- The dropdown menu will be programatically added by script.js -->\n              </li>\n            </ul>\n          </div>\n        </nav>\n\n      </div>\n\n      <div class=\"masthead row\">\n\n        <!-- local-title -->\n        <div class=\"columns medium-6\" id=\"local-title\">\n          <h1>\n            <a routerLink=\"/home\" title=\"Back to [service-name] homepage\">\n              <img src=\"assets/images/logo.png\" style=\"width: 43px; height: 63px;\">\n              Complex Portal\n            </a>\n          </h1>\n\n        </div>\n         <!--/local-title -->\n        <div class=\"columns medium-6\">\n         <cp-local-search></cp-local-search>\n        </div>\n\n\n        <!-- local-nav -->\n        <nav>\n          <ul class=\"dropdown menu float-left\" data-description=\"navigational\">\n            <li><a routerLink=\"/home\">Home</a></li>\n            <li><a href=\"http://www.ebi.ac.uk/intact/complex/help/\" target=\"_blank\">Help</a></li>\n            <li><a routerLink=\"/about\">About</a></li>\n            <li><a routerLink=\"/basket\">Basket ({{basketCount}})</a></li>\n            <li><a href=\"https://github.com/Complex-Portal/complex-portal-view/issues\" target=\"_blank\">Feedback</a></li>\n            <!--<li><a routerLink=\"/favorites\">Favorites</a></li>-->\n          </ul>\n        </nav>\n        <!-- /local-nav -->\n      </div>\n    </header>\n  </div>\n  <cp-progress-bar></cp-progress-bar>\n</div>\n<!---->\n<div id=\"content\" role=\"main\" class=\"row\">\n  <!-- Suggested layout containers -->\n  <section>\n    <router-outlet></router-outlet>\n  </section>\n  <!-- End suggested layout containers -->\n\n</div>\n\n<footer>\n  <!-- Optional local footer (insert citation / project-specific copyright / etc here -->\n  <!--\n        <div id=\"local-footer\">\n          <div class=\"row\">\n            <span class=\"reference\">How to reference this page: ...</span>\n          </div>\n        </div>\n   -->\n  <!-- End optional local footer -->\n  <!-- Optional local footer (insert citation / project-specific copyright / etc here -->\n  <div id=\"local-footer\">\n    <div class=\"row padding-top-large padding-bottom-large\">\n      <div class=\"columns medium-12\">\n        <p class=\"label secondary-color padding-left-large columns small-10\">Our contributors </p>\n        <p class=\"label secondary-color padding-left-large columns small-2\">{{version}}-{{environmentName}}</p>\n        <table>\n          <tbody>\n          <tr>\n            <td><a href=\"//www.ceitec.eu\" target=\"_blank\"><img src=\"assets/images/contributors/Ceitec.png\"></a></td>\n            <td><a href=\"//www.evidenceontology.org/\" target=\"_blank\"><img src=\"assets/images/contributors/eco.png\"></a></td>\n            <td><a href=\"//www.ucl.ac.uk/functional-gene-annotation/cardiovascular\" target=\"_blank\"><img\n              src=\"assets/images/contributors/imex_acg_s.png\"></a></td>\n            <td><a href=\"//matrixdb.univ-lyon1.fr\" target=\"_blank\"><img\n              src=\"assets/images/contributors/matrixdb.png\"></a></td>\n            <td><a href=\"//mint.bio.uniroma2.it\" target=\"_blank\"><img src=\"assets/images/contributors/Mint.png\"></a>\n            <td><a href=\"//www.yeastgenome.org\" target=\"_blank\"><img src=\"assets/images/contributors/SGD.png\"></a></td>\n            <td><a href=\"//www.sib.swiss\" target=\"_blank\"><img src=\"assets/images/contributors/sib.png\"></a></td>\n            <td><a href=\"//www.uniprot.org\" target=\"_blank\"><img src=\"assets/images/contributors/uniprot.png\"></a></td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n\n  <div id=\"global-footer\">\n\n    <nav id=\"global-nav-expanded\" class=\"row\">\n      <!-- Footer will be automatically inserted by footer.js -->\n    </nav>\n\n    <section id=\"ebi-footer-meta\" class=\"row\">\n      <!-- Footer meta will be automatically inserted by footer.js -->\n    </section>\n\n  </div>\n\n</footer>\n"

/***/ }),

/***/ 377:
/***/ (function(module, exports) {

module.exports = "<form [hidden]=\"!display\" id=\"local-search\" name=\"local-search\" action=\"[search-action]\" method=\"post\">\n  <fieldset>\n    <div class=\"input-group margin-bottom-none\">\n      <input #searchTerm type=\"text\" name=\"first\" id=\"local-searchbox\" placeholder=\"Search this service\" value=\"{{query}}\"\n             class=\"input-group-field\">\n      <div class=\"input-group-button\">\n        <input type=\"button\" name=\"submit\" value=\"1\" (click)=\"search(searchTerm.value)\"\n               class=\"button icon icon-functional\"></div>\n    </div>\n    <small class=\"\">\n      <!-- If your search is more complex than just a keyword search, you can link to an Advanced Search -->\n      <!-- <span class=\"adv\"><a href=\"../search\" id=\"adv-search\" title=\"Advanced\">Advanced</a></span> | -->\n      <!-- Include some example searchterms - keep them short and few. -->\n      <a [routerLink]=\"['/complex/search']\" [queryParams]=\"{query: 'GO:0016491'}\" >GO:0016491</a>\n      <a [routerLink]=\"['/complex/search']\" [queryParams]=\"{query: 'Ndc80'}\">Ndc80</a>\n      <a [routerLink]=\"['/complex/search']\" [queryParams]=\"{query: 'Q05471'}\">Q05471</a>\n      <a [routerLink]=\"['/complex/search']\" [queryParams]=\"{query: 'PCNA'}\">PCNA</a>\n      <a [routerLink]=\"['/complex/search']\" [queryParams]=\"{query: 'EBI-9008420'}\">EBI-9008420</a>\n    </small>\n  </fieldset>\n</form>\n<!-- /local-search -->\n"

/***/ }),

/***/ 378:
/***/ (function(module, exports) {

module.exports = "<md-progress-bar *ngIf=\"isDisplayed\"\n                 [color]=\"color\"\n                 [mode]=\"mode\">\n</md-progress-bar>\n\n"

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    evn: 'dev',
    analytics_id: 'UA-672146-11',
    complex_ws_base_url: '//wwwdev.ebi.ac.uk/intact/complex-ws',
    europepmc_base_url: '//www.ebi.ac.uk/europepmc',
    reactome_base_url: '//reactomedev.oicr.on.ca',
    pdb_base_url: '//www.ebi.ac.uk/pdbe',
    ols_base_url: '//www.ebi.ac.uk/ols/api/ontologies',
};
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/environment.js.map

/***/ }),

/***/ 428:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(172);


/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_toastr__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ngx_toastr__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationService = (function () {
    function NotificationService(toastrService) {
        this.toastrService = toastrService;
    }
    NotificationService.prototype.addSuccessNotification = function (successNotification) {
        this.toastrService.success(successNotification);
    };
    NotificationService.prototype.addErrorNotification = function (errorNotification) {
        this.toastrService.error('Something went wrong :(', errorNotification);
    };
    NotificationService.prototype.addAnnouncementNotification = function (announcementNotification, options) {
        this.toastrService.info('Just to let you know!', announcementNotification, options);
    };
    NotificationService.prototype.addHintNotification = function (hintNotification) {
        this.toastrService.warning('Just to let you know!', hintNotification);
    };
    NotificationService.prototype.addStaticNotification = function (staticNotification) {
        this.toastrService.success('Hello world!', staticNotification);
    };
    return NotificationService;
}());
NotificationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_toastr__["ToastrService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_toastr__["ToastrService"]) === "function" && _a || Object])
], NotificationService);

var _a;
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/notification.service.js.map

/***/ })

},[428]);
//# sourceMappingURL=main.bundle.js.map