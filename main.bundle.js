webpackJsonp([9,13],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_basketItem__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ts_md5_dist_md5__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ts_md5_dist_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ts_md5_dist_md5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notification_service_notification_service__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__google_analytics_google_analytics_service__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__google_analytics_category_enum__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__google_analytics_action_enum__ = __webpack_require__(108);
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
    function BasketService(notificationService, ga) {
        this.notificationService = notificationService;
        this.ga = ga;
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
            this.ga.invokeCustomEvent(__WEBPACK_IMPORTED_MODULE_6__google_analytics_action_enum__["a" /* Action */].AddToBasket, __WEBPACK_IMPORTED_MODULE_5__google_analytics_category_enum__["a" /* Category */].basket, id);
            this.notificationService.addSuccessNotification('Stored ' + id + ' in you basket!');
        }
        this.onBasketCountChanged$.emit(this.getBasketCount());
    };
    BasketService.prototype.deleteFromBasket = function (key) {
        var id = this._complexBasket[key].id;
        delete this._complexBasket[key];
        this.saveInLocalStorage();
        this.ga.invokeCustomEvent(__WEBPACK_IMPORTED_MODULE_6__google_analytics_action_enum__["a" /* Action */].RemoveFromBasket, __WEBPACK_IMPORTED_MODULE_5__google_analytics_category_enum__["a" /* Category */].basket, id);
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__notification_service_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__notification_service_notification_service__["a" /* NotificationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__google_analytics_google_analytics_service__["a" /* GoogleAnalyticsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__google_analytics_google_analytics_service__["a" /* GoogleAnalyticsService */]) === "function" && _b || Object])
], BasketService);

var _a, _b;
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/basket.service.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Action; });
var Action;
(function (Action) {
    Action[Action["Tile"] = 0] = "Tile";
    Action[Action["RemoveFromBasket"] = 1] = "RemoveFromBasket";
    Action[Action["search"] = 2] = "search";
    Action[Action["AddToBasket"] = 3] = "AddToBasket";
    Action[Action["GoToMenu"] = 4] = "GoToMenu";
})(Action || (Action = {}));
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/action.enum.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Category; });
var Category;
(function (Category) {
    Category[Category["home"] = 0] = "home";
    Category[Category["details"] = 1] = "details";
    Category[Category["basket"] = 2] = "basket";
    Category[Category["search"] = 3] = "search";
})(Category || (Category = {}));
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/category.enum.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angulartics2__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angulartics2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angulartics2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__category_enum__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__action_enum__ = __webpack_require__(108);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleAnalyticsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GoogleAnalyticsService = (function () {
    function GoogleAnalyticsService(angulartics2) {
        this.angulartics2 = angulartics2;
    }
    GoogleAnalyticsService.prototype.invokeCustomEvent = function (value, category, label) {
        this.angulartics2.eventTrack.next({ action: __WEBPACK_IMPORTED_MODULE_3__action_enum__["a" /* Action */][value], properties: { category: __WEBPACK_IMPORTED_MODULE_2__category_enum__["a" /* Category */][category], label: label } });
    };
    return GoogleAnalyticsService;
}());
GoogleAnalyticsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angulartics2__["Angulartics2"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angulartics2__["Angulartics2"]) === "function" && _a || Object])
], GoogleAnalyticsService);

var _a;
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/google-analytics.service.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_loading_indicators_progress_bar_progress_bar_component__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataContentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataContentComponent = (function () {
    function DataContentComponent(router) {
        this.router = router;
    }
    DataContentComponent.prototype.ngOnInit = function () {
    };
    DataContentComponent.prototype.ngAfterViewInit = function () {
        __WEBPACK_IMPORTED_MODULE_1__shared_loading_indicators_progress_bar_progress_bar_component__["a" /* ProgressBarComponent */].hide();
    };
    DataContentComponent.prototype.goToComplex = function (ac) {
        this.router.navigate(['complex', ac]);
    };
    DataContentComponent.prototype.goToECO = function (term) {
        this.goTo(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].ols_eco_url + term);
    };
    DataContentComponent.prototype.goToGO = function (term) {
        this.goTo(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].ols_go_url + term);
    };
    DataContentComponent.prototype.goTo = function (url) {
        window.open(url, '_blank');
    };
    return DataContentComponent;
}());
DataContentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'cp-data-content',
        template: __webpack_require__(388),
        styles: [__webpack_require__(372)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _a || Object])
], DataContentComponent);

var _a;
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/data-content.component.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_loading_indicators_progress_bar_progress_bar_component__ = __webpack_require__(58);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DocumentationComponent = (function () {
    function DocumentationComponent() {
    }
    DocumentationComponent.prototype.ngOnInit = function () {
    };
    DocumentationComponent.prototype.ngAfterViewInit = function () {
        __WEBPACK_IMPORTED_MODULE_1__shared_loading_indicators_progress_bar_progress_bar_component__["a" /* ProgressBarComponent */].hide();
    };
    return DocumentationComponent;
}());
DocumentationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'cp-documentation',
        template: __webpack_require__(389),
        styles: [__webpack_require__(373)]
    }),
    __metadata("design:paramtypes", [])
], DocumentationComponent);

//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/documentation.component.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuerySyntaxComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuerySyntaxComponent = (function () {
    function QuerySyntaxComponent() {
    }
    QuerySyntaxComponent.prototype.ngOnInit = function () {
    };
    return QuerySyntaxComponent;
}());
QuerySyntaxComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'cp-query-syntax',
        template: __webpack_require__(390),
        styles: [__webpack_require__(374)]
    }),
    __metadata("design:paramtypes", [])
], QuerySyntaxComponent);

//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/query-syntax.component.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OntologiesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OntologiesComponent = (function () {
    function OntologiesComponent(router) {
        this.router = router;
    }
    OntologiesComponent.prototype.ngOnInit = function () {
        this.router.navigate(['home']);
    };
    return OntologiesComponent;
}());
OntologiesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'cp-ontologies',
        template: __webpack_require__(391),
        styles: [__webpack_require__(375)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object])
], OntologiesComponent);

var _a;
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/ontologies.component.js.map

/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/about/about.module": [
		447,
		6
	],
	"app/basket/basket.module": [
		448,
		5
	],
	"app/complex/complex-details/complex-details.module": [
		449,
		0
	],
	"app/complex/complex-organisms/complex-organisms.module": [
		450,
		3
	],
	"app/complex/complex-results/complex-results.module": [
		451,
		2
	],
	"app/complex/complex.module": [
		452,
		7
	],
	"app/download/download.module": [
		453,
		4
	],
	"app/home/home.module": [
		454,
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
webpackAsyncContext.id = 178;


/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(203);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/main.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__(159);
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

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__(35);
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

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__(35);
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

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__(35);
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

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_notification_service_notification_service__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angulartics2__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angulartics2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angulartics2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_loading_indicators_progress_bar_progress_bar_component__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_toastr__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ngx_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_basket_service_basket_service__ = __webpack_require__(107);
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








var version = __webpack_require__(379).version;
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
        this._EBI_BASE_URL = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].ebi_base_url;
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
    Object.defineProperty(AppComponent.prototype, "EBI_BASE_URL", {
        get: function () {
            return this._EBI_BASE_URL;
        },
        enumerable: true,
        configurable: true
    });
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'cp-root',
        template: __webpack_require__(387),
        styles: [__webpack_require__(371)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angulartics2__["Angulartics2GoogleAnalytics"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angulartics2__["Angulartics2GoogleAnalytics"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__shared_notification_service_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_notification_service_notification_service__["a" /* NotificationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6_ngx_toastr__["ToastrConfig"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ngx_toastr__["ToastrConfig"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__shared_basket_service_basket_service__["a" /* BasketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__shared_basket_service_basket_service__["a" /* BasketService */]) === "function" && _e || Object])
], AppComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app.component.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routes__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__complex_shared_service_complex_portal_service__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_notification_service_notification_service__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angulartics2__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angulartics2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angulartics2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__complex_complex_details_complex_function_reactome_crossreferences_shared_service_reactome_service__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__complex_complex_details_complex_references_euro_pmc_crossreferences_service_euro_pmc_service__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_ols_service_ols_service__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_basket_service_basket_service__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ts_md5_dist_md5__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ts_md5_dist_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_ts_md5_dist_md5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_loading_indicators_progress_bar_progress_bar_component__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ngx_toastr__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ngx_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_ngx_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__search_local_search_local_search_component__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_platform_browser_animations__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_material__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__documentation_documentation_component__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__documentation_query_syntax_query_syntax_component__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__documentation_data_content_data_content_component__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ontologies_ontologies_component__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__shared_google_analytics_google_analytics_service__ = __webpack_require__(110);
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
            __WEBPACK_IMPORTED_MODULE_20__documentation_documentation_component__["a" /* DocumentationComponent */],
            __WEBPACK_IMPORTED_MODULE_21__documentation_query_syntax_query_syntax_component__["a" /* QuerySyntaxComponent */],
            __WEBPACK_IMPORTED_MODULE_22__documentation_data_content_data_content_component__["a" /* DataContentComponent */],
            __WEBPACK_IMPORTED_MODULE_23__ontologies_ontologies_component__["a" /* OntologiesComponent */],
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
        providers: [__WEBPACK_IMPORTED_MODULE_7__complex_shared_service_complex_portal_service__["a" /* ComplexPortalService */], __WEBPACK_IMPORTED_MODULE_8__shared_notification_service_notification_service__["a" /* NotificationService */], __WEBPACK_IMPORTED_MODULE_10__complex_complex_details_complex_function_reactome_crossreferences_shared_service_reactome_service__["a" /* ReactomeService */], __WEBPACK_IMPORTED_MODULE_11__complex_complex_details_complex_references_euro_pmc_crossreferences_service_euro_pmc_service__["a" /* EuroPmcService */], __WEBPACK_IMPORTED_MODULE_12__shared_ols_service_ols_service__["a" /* OlsService */], __WEBPACK_IMPORTED_MODULE_13__shared_basket_service_basket_service__["a" /* BasketService */], __WEBPACK_IMPORTED_MODULE_14_ts_md5_dist_md5__["Md5"], __WEBPACK_IMPORTED_MODULE_24__shared_google_analytics_google_analytics_service__["a" /* GoogleAnalyticsService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app.module.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__documentation_documentation_component__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__documentation_query_syntax_query_syntax_component__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__documentation_data_content_data_content_component__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ontologies_ontologies_component__ = __webpack_require__(117);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return rootRouterConfig; });




var rootRouterConfig = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'complex', loadChildren: 'app/complex/complex.module#ComplexModule' },
    { path: 'home', loadChildren: 'app/home/home.module#HomeModule' },
    { path: 'download', loadChildren: 'app/download/download.module#DownloadModule' },
    { path: 'basket', loadChildren: 'app/basket/basket.module#BasketModule' },
    { path: 'about', loadChildren: 'app/about/about.module#AboutModule' },
    { path: 'documentation', component: __WEBPACK_IMPORTED_MODULE_0__documentation_documentation_component__["a" /* DocumentationComponent */] },
    { path: 'documentation/query_syntax', component: __WEBPACK_IMPORTED_MODULE_1__documentation_query_syntax_query_syntax_component__["a" /* QuerySyntaxComponent */] },
    { path: 'documentation/data_content', component: __WEBPACK_IMPORTED_MODULE_2__documentation_data_content_data_content_component__["a" /* DataContentComponent */] },
    { path: 'ontologies', component: __WEBPACK_IMPORTED_MODULE_3__ontologies_ontologies_component__["a" /* OntologiesComponent */] },
];
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app.routes.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(34);
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
        template: __webpack_require__(392),
        styles: [__webpack_require__(376)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _c || Object])
], LocalSearchComponent);

var _a, _b, _c;
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/local-search.component.js.map

/***/ }),

/***/ 206:
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

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var EBI_BASE_URL = '//wwwdev.ebi.ac.uk/';
var INTACT_FTP_BASE_URL = 'ftp://ftp.ebi.ac.uk/pub/databases/intact/';
var COMPLEX__FTP_BASE_URL = INTACT_FTP_BASE_URL + 'complex/';
var environment = {
    production: false,
    evn: 'dev',
    analytics_id: 'UA-672146-11',
    ebi_base_url: EBI_BASE_URL,
    complex_ws_base_url: EBI_BASE_URL + 'intact/complex-ws',
    europepmc_base_url: EBI_BASE_URL + 'europepmc',
    pdb_base_url: EBI_BASE_URL + 'pdbe',
    ols_base_url: EBI_BASE_URL + 'ols/api/ontologies',
    ols_go_url: EBI_BASE_URL + 'ols/ontologies/go/terms?obo_id=',
    ols_eco_url: EBI_BASE_URL + 'ols/ontologies/eco/terms?obo_id=',
    reactome_base_url: '//reactomedev.oicr.on.ca',
    complex_current: COMPLEX__FTP_BASE_URL + 'current',
    complex_tab: COMPLEX__FTP_BASE_URL + 'current/complextab/',
    complex_tab_readme: COMPLEX__FTP_BASE_URL + 'current/complextab/README.htm',
    complex_psi25: COMPLEX__FTP_BASE_URL + 'current/psi25/',
    complex_psi30: COMPLEX__FTP_BASE_URL + 'current/psi30/',
    intact_base_url: EBI_BASE_URL + 'intact',
    intact_support_url: EBI_BASE_URL + 'support/intact',
    intact_training_url: EBI_BASE_URL + 'intact/resources/training',
};
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/environment.js.map

/***/ }),

/***/ 371:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, "a {\n  text-decoration:none;\n  border-width: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 372:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 373:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 374:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 375:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 376:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 377:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 379:
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

/***/ 387:
/***/ (function(module, exports) {

module.exports = "<div data-sticky-container>\n  <div id=\"local-masthead\" data-sticky data-sticky-on=\"large\" data-top-anchor=\"180\" data-btm-anchor=\"300000\">\n    <header>\n\n      <div id=\"global-masthead\" class=\"clearfix\">\n        <!--This has to be one line and no newline characters-->\n        <a href=\"{{EBI_BASE_URL}}\" title=\"Go to the EMBL-EBI homepage\"><span class=\"ebi-logo\"></span></a>\n\n        <nav>\n          <div class=\"row\">\n            <ul id=\"global-nav\" class=\"menu\">\n              <!-- set active class as appropriate -->\n              <li id=\"home-mobile\" class=\"\"><a href=\"{{EBI_BASE_URL}}\"></a></li>\n              <li id=\"home\" class=\"active\"><a href=\"{{EBI_BASE_URL}}\"><i class=\"icon icon-generic\" data-icon=\"H\"></i>\n                EMBL-EBI</a></li>\n              <li id=\"services\"><a href=\"//www.ebi.ac.uk/services\"><i class=\"icon icon-generic\" data-icon=\"(\"></i>\n                Services</a></li>\n              <li id=\"research\"><a href=\"//www.ebi.ac.uk/research\"><i class=\"icon icon-generic\" data-icon=\")\"></i>\n                Research</a></li>\n              <li id=\"training\"><a href=\"//www.ebi.ac.uk/training\"><i class=\"icon icon-generic\" data-icon=\"t\"></i>\n                Training</a></li>\n              <li id=\"about\"><a href=\"//www.ebi.ac.uk/about\"><i class=\"icon icon-generic\" data-icon=\"i\"></i> About\n                us</a></li>\n              <li id=\"search\">\n                <a data-toggle=\"search-global-dropdown\"><i class=\"icon icon-functional\" data-icon=\"1\"></i>\n                  <span class=\"show-for-small-only\">Search</span></a>\n                <div id=\"search-global-dropdown\" class=\"dropdown-pane\" data-dropdown data-options=\"closeOnClick:true;\">\n                  <form id=\"global-search\" name=\"global-search\" action=\"/ebisearch/search.ebi\" method=\"GET\">\n                    <fieldset>\n                      <div class=\"input-group\">\n                        <input type=\"text\" name=\"query\" id=\"global-searchbox\" class=\"input-group-field\"\n                               placeholder=\"Search all of EMBL-EBI\">\n                        <div class=\"input-group-button\">\n                          <input type=\"submit\" name=\"submit\" value=\"Search\" class=\"button\">\n                          <input type=\"hidden\" name=\"db\" value=\"allebi\" checked=\"checked\">\n                          <input type=\"hidden\" name=\"requestFrom\" value=\"global-masthead\" checked=\"checked\">\n                        </div>\n                      </div>\n                    </fieldset>\n                  </form>\n                </div>\n              </li>\n              <li class=\"float-right show-for-medium embl-selector\">\n                <button class=\"button float-right\" type=\"button\" data-toggle=\"embl-dropdown\">Hinxton</button>\n                <!-- The dropdown menu will be programatically added by script.js -->\n              </li>\n            </ul>\n          </div>\n        </nav>\n\n      </div>\n\n      <div class=\"masthead row\">\n\n        <!-- local-title -->\n        <div class=\"columns medium-6\" id=\"local-title\">\n          <h1>\n            <a routerLink=\"/home\" title=\"Back to [service-name] homepage\">\n              <img src=\"assets/images/logo.png\" style=\"width: 43px; height: 63px;\">\n              Complex Portal\n            </a>\n          </h1>\n\n        </div>\n         <!--/local-title -->\n        <div class=\"columns medium-6\">\n         <cp-local-search></cp-local-search>\n        </div>\n        <!-- local-nav -->\n        <nav>\n          <ul class=\"dropdown menu float-left\" data-description=\"navigational\">\n            <li><a routerLink=\"/home\">Home</a></li>\n            <li><a routerLink=\"/documentation\">Documentation</a></li>\n            <li><a routerLink=\"/about\">About</a></li>\n            <li><a routerLink=\"/basket\">Basket ({{basketCount}})</a></li>\n            <li><a href=\"https://github.com/Complex-Portal/complex-portal-view/issues\" target=\"_blank\">Feedback</a></li>\n          </ul>\n        </nav>\n        <!-- /local-nav -->\n      </div>\n    </header>\n  </div>\n  <cp-progress-bar></cp-progress-bar>\n</div>\n<!---->\n<div id=\"content\" role=\"main\" class=\"row\">\n  <!-- Suggested layout containers -->\n  <section>\n    <router-outlet></router-outlet>\n  </section>\n  <!-- End suggested layout containers -->\n\n</div>\n\n<footer>\n  <!-- Optional local footer (insert citation / project-specific copyright / etc here -->\n  <!--\n        <div id=\"local-footer\">\n          <div class=\"row\">\n            <span class=\"reference\">How to reference this page: ...</span>\n          </div>\n        </div>\n   -->\n  <!-- End optional local footer -->\n  <!-- Optional local footer (insert citation / project-specific copyright / etc here -->\n  <div id=\"local-footer\">\n    <div class=\"row padding-top-large padding-bottom-large\">\n      <div class=\"columns medium-12\">\n        <p class=\"label secondary-color padding-left-large columns small-10\">Our contributors </p>\n        <p class=\"label secondary-color padding-left-large columns small-2\">{{version}}-{{environmentName}}</p>\n        <table>\n          <tbody>\n          <tr>\n            <td><a href=\"//www.ceitec.eu\" target=\"_blank\"><img src=\"assets/images/contributors/Ceitec.png\"></a></td>\n            <td><a href=\"//www.evidenceontology.org/\" target=\"_blank\"><img src=\"assets/images/contributors/eco.png\"></a></td>\n            <td><a href=\"//www.ucl.ac.uk/functional-gene-annotation/cardiovascular\" target=\"_blank\"><img\n              src=\"assets/images/contributors/imex_acg_s.png\"></a></td>\n            <td><a href=\"//matrixdb.univ-lyon1.fr\" target=\"_blank\"><img\n              src=\"assets/images/contributors/matrixdb.png\"></a></td>\n            <td><a href=\"//mint.bio.uniroma2.it\" target=\"_blank\"><img src=\"assets/images/contributors/Mint.png\"></a>\n            <td><a href=\"//www.yeastgenome.org\" target=\"_blank\"><img src=\"assets/images/contributors/SGD.png\"></a></td>\n            <td><a href=\"//www.sib.swiss\" target=\"_blank\"><img src=\"assets/images/contributors/sib.png\"></a></td>\n            <td><a href=\"//www.uniprot.org\" target=\"_blank\"><img src=\"assets/images/contributors/uniprot.png\"></a></td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n\n  <div id=\"global-footer\">\n\n    <nav id=\"global-nav-expanded\" class=\"row\">\n      <!-- Footer will be automatically inserted by footer.js -->\n    </nav>\n\n    <section id=\"ebi-footer-meta\" class=\"row\">\n      <!-- Footer meta will be automatically inserted by footer.js -->\n    </section>\n\n  </div>\n\n</footer>\n"

/***/ }),

/***/ 388:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"columns medium-12\">\n    <h2>Data Content</h2>\n    <div class=\"medium-12\">\n      <h3>\n        What can be described as a complex\n      </h3>\n      <p>\n        A stable set of (two or more) interacting macromolecules such as proteins which can be co-purified by an\n        acceptable method and have been shown to exist as an isolated, functional unit in vivo. Any interacting,\n        integral non-protein molecules (e.g. small molecules, nucleic acids) may also be included.\n      </p>\n    </div>\n\n    <div class=\"columns medium-6\">\n      <h3>What should <b>NOT</b> be captured:</h3>\n      <ul>\n        <li>\n          Enzyme/substrate, receptor/ligand or any similar transient interactions unless these are a critical part of\n          the complex assembly (e.g. PDGF receptors only become 'dimeric' when linked by the dimeric ligand forming a\n          tetramer).\n        </li>\n        <li>\n          Proteins associated in a pulldown/coimmunoprecipitation with no functional link or any evidence that this is\n          a defined biological entity rather than a loose affinity complex.\n        </li>\n        <li>\n          Any literature complex where the only evidence is based on genetic interaction data.\n        </li>\n        <li>\n          Partial complexes\n        </li>\n      </ul>\n    </div>\n    <div class=\"columns medium-6\">\n      <h3>Tricky cases we <b>DO</b> capture:</h3>\n      <ul>\n        <li>\n          Substrates or ligands if the enzyme or receptor complex only forms in their presence (see PDGF receptors\n          above, e.g. <a (click)=\"goToComplex('EBI-9082861')\">EBI-9082861</a>).\n        </li>\n        <li>\n          Homologous proteins, with the same functionality, which would be inferred based on homology of the\n          genome-encoded components made primarily on functional conservation between the two systems to form a\n          complex but for which no physical link has been demonstrated, e.g. proteins A and B have been shown to\n          physically interact and form a functional complex, protein C is a homologue of protein B by sequence\n          similarity and is know to have the same function as B but protein A-C interaction has not been demonstrated\n          experimentally (E.g. SUMO - E1 ligase complexes where there is interaction evidence for binding with SUMO1\n          (<a (click)=\"goToComplex('EBI-9349603')\">EBI-9349603</a>) but not with\n          SUMO2 (<a (click)=\"goToComplex('EBI-9345927')\">EBI-9345927</a>)). These\n          complexes are tagged with <a\n          href=\"http://www.ebi.ac.uk/ols/ontologies/eco/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FECO_0005547\"\n          target=\"_blank\">ECO:0005547 <i class=\"icon icon-generic small\" data-icon=\"x\"></i></a> biological system\n          reconstruction evidence based on inference from background scientific knowledge used in manual assertion.\n        </li>\n        <li>\n          Complexes that lack full experimental evidence but are commonly regarded as existing, e.g. transmembrane\n          receptors (e.g <a (click)=\"goToComplex('EBI-9008426')\">EBI-9008426</a>,\n          GABA receptors) for which only pharmacological evidence exists. These complexes\n          are tagged with <a (click)=\"goToECO('ECO:0000306')\">ECO:0000306 <i class=\"icon icon-generic small\" data-icon=\"x\"></i></a>\n          - inferred from background scientific knowledge by manual assertion.\n        </li>\n      </ul>\n    </div>\n    <div class=\"medium-12\">\n      <h3>Complex Nomenclature</h3>\n      <dl>\n        <dt>\n          <b> Complex recommended name</b>\n        </dt>\n        <dd>\n          The most informative, well accepted name in the literature, that is intuitive to the user. Where possible,\n          this will be the same as the equivalent component term in GO. The term should always end in the word 'complex'\n          or homo'n'mer. The recommended name is kept consistent when a complex is conserved across a taxonomic range.\n        </dd>\n      </dl>\n      <dl>\n        <dt><b>Complex systematic name</b></dt>\n        <dd>Derived using the Reactome rules for naming complexes. In principle this is a string of gene names of the\n          participants of the complex separated by a colon (e.g. \"fiba:fibb:fibg\"). The order is determined by the order\n          of synthesis of the complex. Where several participants join at the same time, or the order is unknown,\n          alphanumeric order is used. Recommended gene names for each model organism will be used; therefore the\n          systematic name may not be consistent when a complex is conserved across a taxonomic range.\n        </dd>\n      </dl>\n      <dl>\n        <dt><b>Complex synonym</b></dt>\n        <dd>All other possible names the complex is known by or can be described as.</dd>\n      </dl>\n      <dl>\n        <dt><b>Short label</b></dt>\n        <dd>Currently an obligate part of the data model, it may be possible to remove these once the model is updated.\n          Currently, an appropriate designation for the complex with species indicated using the UniProt five letter\n          code e.g. fibrinogen_human, tfiid_mouse. When the same complex is conserved across a taxonomic range, the root\n          name is maintained across all entries e.g. fibrinogen_human, fibrinogen_mouse, fibrinogen_bovin.\n        </dd>\n      </dl>\n    </div>\n    <div class=\"medium-12\">\n      <h3>Complex Participants</h3>\n      <dl>\n        <dt><b>Proteins</b></dt>\n        <dd>All proteins are derived from, and linked to, UniProtKB, ideally UniProtKB/Swiss-Prot.\n          Isoform and chain designators will be used when appropriate. Should one or more isoforms exist, annotation\n          will\n          be to the canonical protein entry unless either only one isoform is known to exist in the complex or different\n          isoforms give the complex different properties. In the latter case, a separate entry should be made for each\n          variation with detail given in \"curated-complex\" or \"complex-properties\" as appropriate (see below for details\n          on complex variants).\n        </dd>\n      </dl>\n      <dl>\n        <dt><b>Small molecules /polysaccharides</b></dt>\n        <dd>All small molecules are derived from, and linked to, ChEBI. Small\n          molecules are entered if they are integral to the complex or bind to the complex as part of its function, e.g.\n          cofactors, electron donors/acceptors, such as ATP, H+. Enzyme targets are not added as participants. For\n          example, ATP is entered as a cofactor if the enzyme function is NOT primarily an ATPase (e.g. <a (click)=\"goToComplex('EBI-9008779')\">EBI-9008779</a>\n          gyrase_ecoli) but NOT entered for ATPases where it is a substrate (e.g. <a (click)=\"goToComplex('EBI-9007893')\">EBI-9007893</a> mfd-uvra_ecoli, a DNA\n          translocase).\n        </dd>\n      </dl>\n      <dl>\n        <dt><b>Nucleic acids</b></dt>\n        <dd>Nucleic acids are only entered as participants when they are an obligate part of the\n          complex. Non-coding RNA participants are linked to RNACentral, all other nucleic acid types are created as\n          generic molecules linked to generic ChEBI identifiers. For complexes which assemble and then bind to a nucleic\n          acid, this function is indicated in free text and using GO terms such as GO:0003677 DNA binding.\n        </dd>\n      </dl>\n    </div>\n    <div class=\"medium-12\">\n      <h3>Participant Features</h3>\n      <ul>\n        <li>Any features known to be involved in the reactions are mapped to the underlying sequence, as given in the\n          source database, and cross-referenced to InterPro when possible. If a PTM is required for complex activation,\n          this is curated as a feature and the effects detailed in the annotation field 'Complex-properties'.\n        </li>\n        <li>Binding sites or residues within proteins, known to directly interact within the complex, are shown as\n          linked features in the graphical views.\n        </li>\n        <li>Stoichiometry is added, when known. Stoichiometry=0 is used for participants with no information about\n          stoichiometry. It is common that stoichiometry is only know for some participants in the same complex.\n        </li>\n      </ul>\n    </div>\n    <div class=\"medium-12\">\n      <h3>Interaction Type</h3>\n      <p>\n        This will always be 'Physical association' - the controlled vocabulary term indicating that these proteins are\n        present in the same complex - unless there are one or two protein species involved in which case it will be\n        'Direct interaction'. Proteins directly binding to each other within a larger complex will be indicated by\n        linked features (see above).\n      </p>\n    </div>\n    <div class=\"medium-12\">\n      <h3>Free text annotation</h3>\n      <dl>\n        <dt><b>Curated-complex</b></dt>\n        <dd>A brief, free-text description of the function of the complex, written in the same\n          style as a UniProtKB/Swiss-Prot entry. For example \"Required for processive DNA replication and may act as a\n          replicative helicase during DNA synthesis. Plays a central role in S-phase genome stability.\".\n        </dd>\n      </dl>\n      <dl>\n        <dt><b>Complex-properties</b></dt>\n        <dd>Details of physical properties of the complex. This may include details about the\n          topology, varying (as opposed to absolute) stoichiometry, molecular weight and Stoke's radius of the complex.\n        </dd>\n      </dl>\n      <dl>\n        <dt><b>Complex-assembly</b></dt>\n        <dd>Experimentally verified structural assembly e.g. homodimer, heterohexamer. Assemblies\n          which have been computationally predicted are not included.\n        </dd>\n      </dl>\n      <dl>\n        <dt><b>Disease</b></dt>\n        <dd>Only added when the disease state has been specifically linked to the protein when in the\n          complex.\n        </dd>\n      </dl>\n      <dl>\n        <dt><b>Ligand</b></dt>\n        <dd>When a complex has one or more ligands transiently associated with it, they will be listed\n          under this heading.\n        </dd>\n      </dl>\n    </div>\n    <div class=\"medium-12\">\n      <h3>Structured Annotations</h3>\n      <p>All structured annotation is entered as database/controlled vocabulary cross-reference with an appropriate\n        qualifier term.</p>\n      <dl>\n        <dt><b>Gene Ontology</b></dt>\n        <dd>Used to indicate the function, process and component of the complex as a whole. The\n          Function term, in particular, may not be true for all members of the complex, for example enzyme complexes\n          will\n          be annotated with a catalytic function term even when some subunits play only a regulatory role.\n        </dd>\n      </dl>\n      <dl>\n        <dt><b>Experimental evidence</b></dt>\n        <dd>When high quality evidence for the existence of this complex is present in an\n          IMEx database, this will be added manually as a cross-reference so that it may be downloaded in the same file\n          as\n          the complex.\n        </dd>\n      </dl>\n      <dl>\n        <dt><b>3D structure</b></dt>\n        <dd>Representative PDB cross-references will be added when the complex has been crystallised\n          in its entirety.\n        </dd>\n      </dl>\n      <dl>\n        <dt><b>Electron microscopy</b></dt>\n        <dd>Representative EMDB cross-references will be added when the complex has been\n          visualised by electron microscopy in its entirety.\n        </dd>\n      </dl>\n      <dl>\n        <dt><b>Evidence codes</b></dt>\n        <dd>The following ECO codes will be used to indicate the strength of evidence that a\n          complex exists:\n        </dd>\n        <table class=\"hover\">\n          <thead>\n          <tr>\n            <th width=\"150\">ECO Code</th>\n            <th width=\"300\">Name</th>\n            <th>Description</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr>\n            <td><a (click)=\"goToECO('ECO:0005542')\">ECO:0005542 <i class=\"icon icon-generic small\" data-icon=\"x\"></i></a></td>\n            <td>biological system reconstruction evidence by experimental evidence from single species used\n              in manual assertion\n            </td>\n            <td>Indicates that experimental evidence for the complexes exists but only by combining data\n              from several experiments. Experimental data can be found in an IMEx database, PDB or EMDB.\n            </td>\n          </tr>\n          <tr>\n            <td><a (click)=\"goToECO('ECO:0000353')\">ECO:0000353 <i class=\"icon icon-generic small\" data-icon=\"x\"></i></a></td>\n            <td>physical interaction evidence used in manual assertion</td>\n            <td>Indicates that experimental evidence for the complexes exists in a single experiment. This will consist\n              of either a cross-reference to experimental data in an IMEx database, PDB or EMDB.\n            </td>\n          </tr>\n          <tr>\n            <td><a (click)=\"goToECO('ECO:0005543')\">ECO:0005543 <i class=\"icon icon-generic small\" data-icon=\"x\"></i></a></td>\n            <td>biological system reconstruction evidence by experimental evidence from mixed species used in\n              manual assertion\n            </td>\n            <td>Indicates that experimental evidence for the complexes exists in a single experiment but the constructs\n              are derived from homologous gene products in different species. Experimental data can be found in an IMEx\n              database, PDB or EMDB.\n            </td>\n          </tr>\n          <tr>\n            <td><a (click)=\"goToECO('ECO:0005544')\">ECO:0005544 <i class=\"icon icon-generic small\" data-icon=\"x\"></i></a></td>\n            <td>biological system reconstruction evidence based on orthology evidence used in manual assertion</td>\n            <td>Indicates only limited experimental evidence exists for a complex in one species (e.g. mouse) but it is\n              desirable to curate the complex which has been curated in another species (e.g. human). Sequences and\n              number\n              of genome-encoded components are fairly conserved but some divergence may be observed. The complex with\n              the\n              experimental evidence has to be cross-referenced with the qualifier = \"inferred-from\" and must have the\n              ECO:0000353, ECO:0005542 or ECO:0005543 tag.\n            </td>\n          </tr>\n          <tr>\n            <td><a (click)=\"goToECO('ECO:0005546')\">ECO:0005546 <i class=\"icon icon-generic small\" data-icon=\"x\"></i></a></td>\n            <td>biological system reconstruction evidence based on paralogy evidence used in manual assertion</td>\n            <td>Indicates only limited experimental evidence exists for one complex but full experimental evidence\n              exists for a similar complex of the same species. Sequences and number of genome-encoded components are\n              fairly conserved but some divergence may be observed. The complex with the experimental evidence has to be\n              cross-referenced with the qualifier = \"inferred-from\" and must have the ECO:0000353, ECO:0005542 or\n              ECO:0005543 tag.\n            </td>\n          </tr>\n          <tr>\n            <td><a (click)=\"goToECO('ECO:0005547')\">ECO:0005547 <i class=\"icon icon-generic small\" data-icon=\"x\"></i></a></td>\n            <td>biological system reconstruction evidence based on inference from background scientific\n              knowledge used in manual assertion\n            </td>\n            <td>Is used if no or only partial experimental evidence is present but the\n              complex is generally assumed to exist. Functional studies or ligand binding evidence from pharmacological\n              experiments are often used for the reconstruction of such complexes.\n            </td>\n          </tr>\n          </tbody>\n        </table>\n      </dl>\n      <dl>\n        <dt><b>Enzymatic activity</b></dt>\n        <dd>The E.C. number linked to IntEnz will be added when an enzyme complex is described.</dd>\n      </dl>\n      <dl>\n        <dt><b>Additional literature</b></dt>\n        <dd>Review articles or experimental data not appropriate for entering into IntAct\n          are added.\n        </dd>\n      </dl>\n      <dl>\n        <dt><b>Pathway information</b></dt>\n        <dd>For human complexes, crosslinks to Reactome put complexes into a pathway context.\n          Note that the definition of a complex is different in Reactome and in many cases a one-to-many relationship\n          exists.\n        </dd>\n      </dl>\n      <dl>\n        <dt><b>Disease information</b></dt>\n        <dd>Cross references to the Experimental Factor Ontology (EFO) or their contributing databases (e.g. Orphanet,\n          Human Phenotype Ontology) may be added if a complex or a chain when within that complex has been linked to a\n          specific disease condition.\n        </dd>\n      </dl>\n      <dl>\n        <dt><b>Drug target information</b></dt>\n        <dd>Cross-links to ChEMBL are used to indicate complexes which have been used as\n          drug targets.\n        </dd>\n      </dl>\n    </div>\n    <div class=\"medium-12\">\n      <h3>Complex Variants</h3>\n      <p>\n        If variant forms of a complex exist i.e. the same functional unit can exist in alternate forms with differing\n        macromolecular composition, these are curated as separate objects. For example, PDGF can exist as a PDGF-A\n        homodimer, PDGF-B homodimer, PDGF-AB heterodimer, PDGF-C homodimer and a PDGF-D homodimer If the variants have\n        well-accepted names, e.g. PDGF-AB, these may be used as the primary name. If not, then the recommended name is\n        qualified by variant 1, variant 2 e.g. TRAMP complex variant 1 (<a (click)=\"goToComplex('EBI-2352894')\">EBI-2352894</a>).\n      </p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 389:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"columns medium-12\">\n    <div class=\"intro-unit\">\n      <h2>Documentation</h2>\n      <div class=\"row button-grid small-up-1 medium-up-2 large-up-2 margin-top-xlarge no-pad-right\" data-equalizer\n           data-equalize-on=\"medium\" id=\"large-button-grid\">\n        <div class=\"column  padding-bottom-large\">\n          <p>Query Syntax contains details about the types of search that can be performed and the syntax required.</p>\n          <a class=\"button medium-12 columns text-center\" data-equalizer-watch routerLink=\"/documentation/query_syntax\">\n            <h3 class=\"icon icon-functional white-color\" data-icon=\"1\"></h3>\n            <h5 class=\"white-color\">Query Syntax</h5>\n          </a>\n        </div>\n        <div class=\"column  padding-bottom-large\">\n          <p>Data Content documents the type of data and features that are captured for each complex.</p>\n          <a class=\"button medium-12 columns text-center\" data-equalizer-watch routerLink=\"/documentation/data_content\">\n            <h3 class=\"icon icon-generic  white-color\" data-icon=\";\"></h3>\n            <h5 class=\"white-color\">Data Content</h5>\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 390:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"columns medium-12\">\n    <h2>Query Syntax</h2>\n    <div class=\"medium-12\">\n      <p>\n        To do a search you can use the Complex Query Language (CQL), which is based on Lucene's syntax.\n      </p>\n      <p>\n        Free text search will look by default for:\n      </p>\n      <ul>\n        <li>\n          Identifiers, names and synonyms of molecules (protein, gene, small molecule)\n        </li>\n        <li>\n          Identifiers, names and synonyms of complexes\n        </li>\n        <li>\n          Cross-references of complexes\n        </li>\n        <li>\n          Species\n        </li>\n      </ul>\n      <p>\n        Search for groups of complexes by using the Gene Ontology. For example, GO:0016491 will search for all\n        complexes annotated with \"oxidoreductase activity\" and all downstream child terms of this.\n      </p>\n      <p>\n        Narrow your initial search result by using the filters on the results page for:\n      </p>\n      <ul>\n        <li>Species</li>\n        <li>Molecule type</li>\n        <li>Biological role</li>\n      </ul>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 391:
/***/ (function(module, exports) {

module.exports = "<!--<input style=\"font-weight: normal\" size=\"35\" type=\"text\" name=\"q\" data-olswidget=\"select\" data-olsontology=\"\" data-selectpath=\"http://www.ebi.ac.uk/ols/\" olstype=\"\" id=\"local-searchbox\" placeholder=\"Enter the term you are looking for\" class=\"ac_input\"/>-->\n"

/***/ }),

/***/ 392:
/***/ (function(module, exports) {

module.exports = "<form [hidden]=\"!display\" id=\"local-search\" name=\"local-search\">\n  <fieldset>\n    <div class=\"input-group margin-bottom-none\">\n      <input #searchTerm type=\"text\" name=\"first\" id=\"local-searchbox\" placeholder=\"Search this service\"\n             value=\"{{query}}\"\n             class=\"input-group-field\">\n      <div class=\"input-group-button\">\n        <input type=\"button\" name=\"submit\" value=\"1\" (click)=\"search(searchTerm.value)\"\n               class=\"button icon icon-functional\"></div>\n    </div>\n    <small class=\"\">\n      <!-- If your search is more complex than just a keyword search, you can link to an Advanced Search -->\n      <!-- <span class=\"adv\"><a href=\"../search\" id=\"adv-search\" title=\"Advanced\">Advanced</a></span> | -->\n      <!-- Include some example searchterms - keep them short and few. -->\n      <a [routerLink]=\"['/complex/search']\" [queryParams]=\"{query: 'GO:0016491'}\">GO:0016491</a>\n      <a [routerLink]=\"['/complex/search']\" [queryParams]=\"{query: 'Ndc80'}\">Ndc80</a>\n      <a [routerLink]=\"['/complex/search']\" [queryParams]=\"{query: 'Q05471'}\">Q05471</a>\n      <a [routerLink]=\"['/complex/search']\" [queryParams]=\"{query: 'PCNA'}\">PCNA</a>\n      <a [routerLink]=\"['/complex/search']\" [queryParams]=\"{query: 'EBI-9008420'}\">EBI-9008420</a>\n    </small>\n  </fieldset>\n</form>\n<!-- /local-search -->\n"

/***/ }),

/***/ 393:
/***/ (function(module, exports) {

module.exports = "<md-progress-bar *ngIf=\"isDisplayed\"\n                 [color]=\"color\"\n                 [mode]=\"mode\">\n</md-progress-bar>\n\n"

/***/ }),

/***/ 443:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(179);


/***/ }),

/***/ 58:
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
        template: __webpack_require__(393),
        styles: [__webpack_require__(377)]
    }),
    __metadata("design:paramtypes", [])
], ProgressBarComponent);

var ProgressBarComponent_1;
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/progress-bar.component.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_toastr__ = __webpack_require__(94);
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
        this.toastrService.error(errorNotification, 'Something went wrong :(');
    };
    NotificationService.prototype.addAnnouncementNotification = function (announcementNotification, options) {
        this.toastrService.info(announcementNotification, 'Just to let you know!', options);
    };
    NotificationService.prototype.addHintNotification = function (hintNotification) {
        this.toastrService.warning(hintNotification, 'Just to let you know!');
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

},[443]);
//# sourceMappingURL=main.bundle.js.map