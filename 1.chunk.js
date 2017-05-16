webpackJsonp([1,13],{

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_component__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tile_menu_tile_menu_component__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__twitter_display_twitter_display_component__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__newsletter_subscription_newsletter_subscription_component__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_search_component__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__search_examples_examples_large_examples_large_component__ = __webpack_require__(536);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forChild([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_3__home_component__["a" /* HomeComponent */] }
            ]),
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_7__search_search_component__["a" /* SearchComponent */],
            __WEBPACK_IMPORTED_MODULE_6__newsletter_subscription_newsletter_subscription_component__["a" /* NewsletterSubscriptionComponent */],
            __WEBPACK_IMPORTED_MODULE_5__twitter_display_twitter_display_component__["a" /* TwitterDisplayComponent */],
            __WEBPACK_IMPORTED_MODULE_4__tile_menu_tile_menu_component__["a" /* TileMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_8__search_examples_examples_large_examples_large_component__["a" /* ExamplesLargeComponent */],
        ]
    })
], HomeModule);

//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/home.module.js.map

/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_loading_indicators_progress_bar_progress_bar_component__ = __webpack_require__(58);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_1__shared_loading_indicators_progress_bar_progress_bar_component__["a" /* ProgressBarComponent */].display();
        document.body.scrollTop = 0;
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        __WEBPACK_IMPORTED_MODULE_1__shared_loading_indicators_progress_bar_progress_bar_component__["a" /* ProgressBarComponent */].hide();
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'cp-home',
        template: __webpack_require__(649),
        styles: [__webpack_require__(594)]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/home.component.js.map

/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsletterSubscriptionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewsletterSubscriptionComponent = (function () {
    function NewsletterSubscriptionComponent() {
    }
    NewsletterSubscriptionComponent.prototype.ngOnInit = function () {
    };
    return NewsletterSubscriptionComponent;
}());
NewsletterSubscriptionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'cp-newsletter-subscription',
        template: __webpack_require__(650),
        styles: [__webpack_require__(595)]
    }),
    __metadata("design:paramtypes", [])
], NewsletterSubscriptionComponent);

//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/newsletter-subscription.component.js.map

/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_notification_service_notification_service__ = __webpack_require__(71);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TileMenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TileMenuComponent = (function () {
    function TileMenuComponent(notificationService) {
        this.notificationService = notificationService;
    }
    TileMenuComponent.prototype.ngAfterViewInit = function () {
        $('cp-tile-menu').foundation();
    };
    TileMenuComponent.prototype.featureNotAvailableYet = function () {
        this.notificationService.addHintNotification('This feature is not available yet. But it is coming soon! :-)');
    };
    return TileMenuComponent;
}());
TileMenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'cp-tile-menu',
        template: __webpack_require__(651),
        styles: [__webpack_require__(596)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_notification_service_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_notification_service_notification_service__["a" /* NotificationService */]) === "function" && _a || Object])
], TileMenuComponent);

var _a;
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/tile-menu.component.js.map

/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TwitterDisplayComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var twitterURL = 'platform.twitter.com/widgets.js';
var TwitterDisplayComponent = (function () {
    function TwitterDisplayComponent() {
    }
    TwitterDisplayComponent.prototype.ngOnInit = function () {
    };
    TwitterDisplayComponent.prototype.ngAfterViewInit = function () {
        /* tslint:disable */
        !function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0], p = 'https';
            if (!d.getElementById(id)) {
                js = d.createElement(s);
                js.id = id;
                js.src = p + '://' + twitterURL;
                fjs.parentNode.insertBefore(js, fjs);
            }
        }(document, 'script', 'twitter-wjs');
        /* tslint:enable */
    };
    return TwitterDisplayComponent;
}());
TwitterDisplayComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'cp-twitter-display',
        template: __webpack_require__(652),
        styles: [__webpack_require__(597)]
    }),
    __metadata("design:paramtypes", [])
], TwitterDisplayComponent);

//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/twitter-display.component.js.map

/***/ }),

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExamplesLargeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExamplesLargeComponent = (function () {
    function ExamplesLargeComponent() {
    }
    ExamplesLargeComponent.prototype.ngOnInit = function () {
    };
    return ExamplesLargeComponent;
}());
ExamplesLargeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'cp-examples-large',
        template: __webpack_require__(653),
        styles: [__webpack_require__(598)]
    }),
    __metadata("design:paramtypes", [])
], ExamplesLargeComponent);

//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/examples-large.component.js.map

/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angulartics2__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angulartics2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angulartics2__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchComponent = (function () {
    function SearchComponent(router, angulartics2) {
        this.router = router;
        this.angulartics2 = angulartics2;
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent.prototype.search = function (query) {
        this.angulartics2.eventTrack.next({ action: query, properties: { category: 'search', label: 'home' } });
        this.router.navigate(['complex/search'], { queryParams: { query: query, page: 1 } });
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'cp-search',
        template: __webpack_require__(654),
        styles: [__webpack_require__(599)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angulartics2__["Angulartics2"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angulartics2__["Angulartics2"]) === "function" && _b || Object])
], SearchComponent);

var _a, _b;
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/search.component.js.map

/***/ }),

/***/ 594:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 595:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports
exports.push([module.i, "@import url(//cdn-images.mailchimp.com/embedcode/slim-10_7.css);", ""]);

// module
exports.push([module.i, "/*noinspection CssUnknownTarget*/\n\n#mc_embed_signup {\n  background: #fff;\n  clear: left;\n  font: 14px Helvetica, Arial, sans-serif;\n}\n\ninput#mce-EMAIL.email {\n  width: 100% !important;\n}\n\ninput#mc-embedded-subscribe.button {\n  width: 100% !important;\n  background-color: #007c82\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 596:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, ".tile {\n  height: 140px;\n  min-width: 180px;\n  margin-bottom: 1em;\n  border-radius: 15px\n}\n\n.menu-blue {\n  background-color: #005c82;\n}\n\n.menu-gold {\n  background-color: #bca04d;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 597:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "h3 {\n  border-bottom:2px solid black;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 598:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 599:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 649:
/***/ (function(module, exports) {

module.exports = "<section>\n  <!-- Your menu structure should make a breadcrumb redundant, but if a breadcrumb is needed uncomment the below -->\n  <!--<nav aria-label=\"You are here:\" role=\"navigation\">-->\n    <!--<ul class=\"breadcrumbs\">-->\n      <!--<li>-->\n        <!--<span class=\"displayedElements-for-sr\">Current: </span> Complex Portal-->\n      <!--</li>-->\n    <!--</ul>-->\n  <!--</nav>-->\n  <div id=\"main-content-area\">\n    <div class=\"row\">\n      <div class=\"columns medium-9\">\n        <div class=\"columns medium-12 no-pad-left\">\n          <h5>\n            The Complex Portal is a manually curated, encyclopaedic resource of macromolecular complexes from a number\n            of\n            key model organisms. All data is freely available for search and download. To perform a search for\n            macromolecular complexes use the search box below.\n          </h5>\n        </div>\n        <div class=\"columns medium-12 \">\n          <cp-search></cp-search>\n          <cp-examples-large></cp-examples-large>\n        </div>\n        <div class=\"columns medium-12 no-pad-left no-pad-right\">\n          <cp-tile-menu></cp-tile-menu>\n        </div>\n        <!--<div class=\"columns medium-12 no-pad-left\">-->\n          <!--<app-contributors-display></app-contributors-display>-->\n        <!--</div>-->\n      </div>\n      <div class=\"columns medium-3\">\n        <div class=\"columns medium-12\">\n          <cp-newsletter-subscription></cp-newsletter-subscription>\n        </div>\n        <div class=\"columns medium-12\">\n          <cp-twitter-display></cp-twitter-display>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ 650:
/***/ (function(module, exports) {

module.exports = "<div id=\"mc_embed_signup\">\n  <form ngNoForm action=\"//ebi.us9.list-manage.com/subscribe/post?u=d50725c1556266fd605025eaf&id=91a036cbb0\" method=\"post\"\n        id=\"mc-embedded-subscribe-form\" name=\"mc-embedded-subscribe-form\" class=\"validate\" target=\"_blank\" novalidate>\n    <div id=\"mc_embed_signup_scroll\">\n      <h3><i class=\"icon icon-generic\" data-icon=\"m\"></i>Newsletter</h3>\n      <input type=\"email\" value=\"\" name=\"EMAIL\" class=\"email\" id=\"mce-EMAIL\" placeholder=\"email address\" required>\n      <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->\n      <div style=\"position: absolute; left: -5000px;\" aria-hidden=\"true\"><input type=\"text\"\n                                                                                name=\"b_d50725c1556266fd605025eaf_91a036cbb0\"\n                                                                                tabindex=\"-1\" value=\"\"></div>\n      <div class=\"clear\"><input type=\"submit\" value=\"Subscribe\" name=\"subscribe\" id=\"mc-embedded-subscribe\"\n                                class=\"button\"></div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ 651:
/***/ (function(module, exports) {

module.exports = "<div class=\"row button-grid small-up-1 medium-up-2 large-up-4 margin-top-xlarge no-pad-right\" data-equalizer\n     data-equalize-on=\"medium\" id=\"large-button-grid\">\n  <div class=\"column medium-3 small-6 text-center padding-bottom-large\">\n    <a class=\"button medium-12 columns\" data-equalizer-watch [routerLink]=\"['/download']\">\n      <h3 class=\"icon icon-functional white-color\" data-icon=\"=\"></h3>\n      <h5 class=\"white-color\">Programmatic Access</h5>\n    </a>\n  </div>\n  <div class=\"column medium-3 small-6 text-center padding-bottom-large\">\n    <a class=\"button medium-12 columns\" data-equalizer-watch [routerLink]=\"['/basket']\">\n      <h3 class=\"icon icon-generic\" data-icon=\"b\"></h3>\n      <h5 class=\"white-color\">Basket</h5>\n    </a>\n  </div>\n  <div class=\"column medium-3 small-6 text-center padding-bottom-large\">\n    <a class=\"button medium-12 columns\" data-equalizer-watch [routerLink]=\"['/complex/organisms']\">\n      <h3 class=\"icon icon-species white-color\" data-icon=\"H\"></h3>\n      <h5 class=\"white-color\">Organisms</h5>\n    </a>\n  </div>\n  <div class=\"column medium-3 small-6 text-center padding-bottom-large\">\n    <a class=\"button medium-12 columns\" data-equalizer-watch href=\"featureNotAvailableYet()\">\n      <h3 class=\"icon icon-conceptual white-color\" data-icon=\"o\"></h3>\n      <h5 class=\"white-color\">Ontologies</h5>\n    </a>\n  </div>\n  <div class=\"column medium-3 small-6 text-center padding-bottom-large\">\n    <a\n      class=\"button medium-12 columns training-background\" data-equalizer-watch href=\"//www.ebi.ac.uk/support/intact\">\n      <h3 class=\"icon icon-generic white-color\" data-icon=\"\\\"></h3>\n      <h5 class=\"white-color\">Request<br/>Complex</h5>\n    </a>\n  </div>\n  <div class=\"column medium-3 small-6 text-center padding-bottom-large\">\n    <a\n      class=\"button medium-12 columns industry-background\" data-equalizer-watch\n      href=\"http://www.ebi.ac.uk/intact/resources/training\">\n      <h3 class=\"icon icon-generic white-color\" data-icon=\"t\"></h3>\n      <h5 class=\"white-color\">Training</h5>\n    </a>\n  </div>\n  <div class=\"column medium-3 small-6 text-center padding-bottom-large\">\n    <a class=\"button medium-12 columns industry-background\" data-equalizer-watch [routerLink]=\"['/documentation']\">\n      <h3 class=\"icon icon-generic white-color\" data-icon=\"?\"></h3>\n      <h5 class=\"white-color\">Documentation</h5>\n    </a>\n  </div>\n  <div class=\"column medium-3 small-6 text-center padding-bottom-large\">\n    <a\n      class=\"button medium-12 columns industry-background\" data-equalizer-watch href=\"featureNotAvailableYet()\">\n      <h3 class=\"icon icon-generic white-color\" data-icon=\"P\"></h3>\n      <h5 class=\"white-color\">Citation</h5>\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ 652:
/***/ (function(module, exports) {

module.exports = "<h3><i class=\"icon icon-generic\" data-icon=\"N\"></i>News</h3>\n<a class=\"twitter-timeline\" data-lang=\"en\" data-height=\"400\" data-theme=\"light\" data-tweet-limit=\"3\"\n   data-chrome=\"nofooter noheader noborders\" data-link-color=\"#007c82\" href=\"https://twitter.com/intact_project\">Tweets\n  by IntAct</a>\n"

/***/ }),

/***/ 653:
/***/ (function(module, exports) {

module.exports = "<div class=\"row no-pad-left\">\n  <div class=\"columns callout medium-12 margin-bottom-none\">\n    <h5><i class=\"icon icon-generic padding-right-medium\" data-icon=\"?\"></i>Examples:</h5>\n    <div class=\"columns medium-6\">\n      <ul>\n        <li>GO term(s): <a [routerLink]=\"['/complex/search']\" [queryParams]=\"{query: 'GO:0016491'}\" >GO:0016491</a></li>\n        <li>Gene name(s): <a [routerLink]=\"['/complex/search']\" [queryParams]=\"{query: 'Ndc80'}\">Ndc80</a></li>\n        <li>UniProt AC(s): <a [routerLink]=\"['/complex/search']\" [queryParams]=\"{query: 'Q05471'}\">Q05471</a></li>\n      </ul>\n    </div>\n    <div class=\"columns medium-6 no-pad-left\">\n      <ul>\n        <li>Protein name(s): <a [routerLink]=\"['/complex/search']\" [queryParams]=\"{query: 'PCNA'}\">PCNA</a></li>\n        <li>Complex AC: <a [routerLink]=\"['/complex/search']\" [queryParams]=\"{query: 'EBI-9008420'}\">EBI-9008420</a></li>\n      </ul>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ 654:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"columns medium-12 no-pad-left no-pad-right\">\n    <!-- local-search -->\n    <!-- if you do not have a local-search, delete the following form -->\n    <form id=\"content-search\" name=\"content-search\" action=\"[search-action]\" method=\"post\" (keyup.enter)=\"search(query.value)\">\n      <h2>Search in Complex Portal</h2>\n      <fieldset>\n        <div class=\"input-group margin-bottom-none\">\n          <input #query type=\"text\" name=\"first\" id=\"content-searchbox\" class=\"input-group-field\"\n                 placeholder=\"GO term(s), Gene name(s), UniProt AC(s), Protein name(s), Protein name(s), Complex AC\">\n          <div class=\"input-group-button\">\n            <input type=\"button\" name=\"submit\" value=\"1\" (click)=\"search(query.value)\"\n                   class=\"button icon icon-functional\">\n          </div>\n        </div>\n      </fieldset>\n    </form>\n  </div>\n</div>\n"

/***/ })

});
//# sourceMappingURL=1.chunk.js.map