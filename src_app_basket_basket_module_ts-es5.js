(function () {
  "use strict";

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  (self["webpackChunkcomplex_portal_view"] = self["webpackChunkcomplex_portal_view"] || []).push([["src_app_basket_basket_module_ts"], {
    /***/49849:
    /*!********************************************!*\
      !*** ./src/app/basket/basket.component.ts ***!
      \********************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"BasketComponent": function BasketComponent() {
          return (/* binding */_BasketComponent
          );
        }
        /* harmony export */
      });
      /* harmony import */
      var _Users_jmedina_IdeaProjects_ComplexPortal_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_basket_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./basket.component.html */35343);
      /* harmony import */
      var _basket_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./basket.component.css */78478);
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! @angular/core */2316);
      /* harmony import */
      var _shared_basket_service_basket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../shared/basket/service/basket.service */69510);
      /* harmony import */
      var _shared_loading_indicators_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../shared/loading-indicators/progress-bar/progress-bar.component */57040);
      /* harmony import */
      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! @angular/platform-browser */71570);
      /* harmony import */
      var _complex_shared_service_complex_portal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ../complex/shared/service/complex-portal.service */20658);
      /* harmony import */
      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! @angular/router */71258);
      /* harmony import */
      var _complex_complex_results_complex_navigator_complex_list_display_buttons_complex_list_display_buttons_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ../complex/complex-results/complex-navigator/complex-list-display-buttons/complex-list-display-buttons.component */99915);
      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      var _BasketComponent = /*#__PURE__*/function () {
        function BasketComponent(_basketService, titleService, complexPortalService, route, router) {
          _classCallCheck(this, BasketComponent);
          this._basketService = _basketService;
          this.titleService = titleService;
          this.complexPortalService = complexPortalService;
          this.route = route;
          this.router = router;
          this.complexSearchBasket = null;
          this.allInteractorsInComplexSearchBasket = [];
          this._complexBasket = this._basketService.complexBasket;
        }
        _createClass(BasketComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;
            this.titleService.setTitle('Complex Portal - Basket');
            this.complexNavigatorLoading();
            this.route.fragment.subscribe(function (fragment) {
              if (fragment === _complex_complex_results_complex_navigator_complex_list_display_buttons_complex_list_display_buttons_component__WEBPACK_IMPORTED_MODULE_5__.COMPLEX_NAVIGATOR_VIEW) {
                _this.DisplayType = _complex_complex_results_complex_navigator_complex_list_display_buttons_complex_list_display_buttons_component__WEBPACK_IMPORTED_MODULE_5__.COMPLEX_NAVIGATOR_VIEW;
              } else {
                _this.DisplayType = _complex_complex_results_complex_navigator_complex_list_display_buttons_complex_list_display_buttons_component__WEBPACK_IMPORTED_MODULE_5__.LIST_VIEW;
              }
            });
          }
        }, {
          key: "onDisplayTypeChange",
          value: function onDisplayTypeChange(displayType) {
            if (this.DisplayType !== displayType) {
              this.DisplayType = displayType;
              this.router.navigate([], {
                fragment: this.DisplayType
              });
            }
          }
        }, {
          key: "isDisplayComplexNavigatorView",
          value: function isDisplayComplexNavigatorView() {
            return this.DisplayType === _complex_complex_results_complex_navigator_complex_list_display_buttons_complex_list_display_buttons_component__WEBPACK_IMPORTED_MODULE_5__.COMPLEX_NAVIGATOR_VIEW;
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            _shared_loading_indicators_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_3__.ProgressBarComponent.hide();
          }
        }, {
          key: "deleteFromBasket",
          value: function deleteFromBasket(key) {
            this._basketService.deleteFromBasket(key);
            this.complexNavigatorLoading();
          }
        }, {
          key: "deleteComplexFromBasket",
          value: function deleteComplexFromBasket(complexAc) {
            var _iterator = _createForOfIteratorHelper(this.getKeys(this.complexBasket)),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var key = _step.value;
                if (this.complexBasket[key].id === complexAc) {
                  this._basketService.deleteFromBasket(key);
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
            this.complexNavigatorLoading();
          }
        }, {
          key: "complexBasket",
          get: function get() {
            return this._complexBasket;
          },
          set: function set(value) {
            this._complexBasket = value;
          }
        }, {
          key: "isComplexBasketEmpty",
          value: function isComplexBasketEmpty() {
            return this.getKeys(this._complexBasket).length === 0;
          }
          // Candidate for Util
        }, {
          key: "getKeys",
          value: function getKeys(object) {
            return Object.keys(object);
          }
        }, {
          key: "createQuery",
          value: function createQuery(object) {
            return 'complex_id: ' + Object.values(object).map(function (v) {
              return v.id;
            }).join(',');
          }
        }, {
          key: "requestComplexesForNavigator",
          value: function requestComplexesForNavigator() {
            var _this2 = this;
            var pageSize = Object.values(this._complexBasket).length;
            this.complexPortalService.findComplexNoFilters(this.createQuery(this._complexBasket), 1, pageSize).subscribe(function (complexSearch) {
              _this2.complexSearchBasket = complexSearch;
              if (_this2.complexSearchBasket.totalNumberOfResults !== 0) {
                for (var i = 0; i < complexSearch.elements.length; i++) {
                  var _iterator2 = _createForOfIteratorHelper(complexSearch.elements[i].interactors),
                    _step2;
                  try {
                    var _loop = function _loop() {
                      var component = _step2.value;
                      if (!_this2.allInteractorsInComplexSearchBasket.some(function (interactor) {
                        return interactor.identifier === component.identifier;
                      })) {
                        _this2.allInteractorsInComplexSearchBasket.push(component);
                      }
                    };
                    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                      _loop();
                    }
                  } catch (err) {
                    _iterator2.e(err);
                  } finally {
                    _iterator2.f();
                  }
                }
              }
            });
          }
        }, {
          key: "complexNavigatorLoading",
          value: function complexNavigatorLoading() {
            this.complexSearchBasket = null;
            this.allInteractorsInComplexSearchBasket = [];
            this.requestComplexesForNavigator();
          }
        }, {
          key: "deleteAllComplexes",
          value: function deleteAllComplexes() {
            var _this3 = this;
            Object.values(this._complexBasket).map(function (v) {
              return _this3.deleteComplexFromBasket(v.id);
            });
          }
        }]);
        return BasketComponent;
      }();
      _BasketComponent.ctorParameters = function () {
        return [{
          type: _shared_basket_service_basket_service__WEBPACK_IMPORTED_MODULE_2__.BasketService
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.Title
        }, {
          type: _complex_shared_service_complex_portal_service__WEBPACK_IMPORTED_MODULE_4__.ComplexPortalService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
        }];
      };
      _BasketComponent = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'cp-basket',
        template: _Users_jmedina_IdeaProjects_ComplexPortal_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_basket_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_basket_component_css__WEBPACK_IMPORTED_MODULE_1__]
      })], _BasketComponent);

      /***/
    },

    /***/55801:
    /*!*****************************************!*\
      !*** ./src/app/basket/basket.module.ts ***!
      \*****************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"BasketModule": function BasketModule() {
          return (/* binding */_BasketModule
          );
        }
        /* harmony export */
      });
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/core */2316);
      /* harmony import */
      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @angular/common */54364);
      /* harmony import */
      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/router */71258);
      /* harmony import */
      var _basket_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./basket.component */49849);
      /* harmony import */
      var _complex_complex_results_complex_navigator_complex_navigator_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../complex/complex-results/complex-navigator/complex-navigator.module */60090);
      /* harmony import */
      var _shared_loading_indicators_progress_spinner_progress_spinner_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../shared/loading-indicators/progress-spinner/progress-spinner.module */45103);
      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      var _BasketModule = /*#__PURE__*/_createClass(function BasketModule() {
        _classCallCheck(this, BasketModule);
      });
      _BasketModule = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild([{
          path: '',
          component: _basket_component__WEBPACK_IMPORTED_MODULE_0__.BasketComponent
        }]), _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _complex_complex_results_complex_navigator_complex_navigator_module__WEBPACK_IMPORTED_MODULE_1__.ComplexNavigatorModule, _shared_loading_indicators_progress_spinner_progress_spinner_module__WEBPACK_IMPORTED_MODULE_2__.ProgressSpinnerModule],
        declarations: [_basket_component__WEBPACK_IMPORTED_MODULE_0__.BasketComponent]
      })], _BasketModule);

      /***/
    },

    /***/35343:
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/basket/basket.component.html ***!
      \*************************************************************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */
      __webpack_exports__["default"] = "<div class=\"margin-top-large margin-bottom-large\">\n  <div *ngIf=\"!isComplexBasketEmpty()\" class=\"columns medium-12\">\n    <h2>Personal collection of favourite complexes\n\n      <a class=\"button primary columns medium-2 deleteAllButton float-right\"\n         (click)=\"deleteAllComplexes()\">\n        <i class=\"icon icon-common\" data-icon=\"\"></i>\n        Remove all complexes\n      </a>\n    </h2>\n    <h4>{{ getKeys(complexBasket).length }} complexes in your basket</h4>\n    <div class=\"row\">\n      <cp-complex-list-display-buttons\n        [displayType]=\"DisplayType\"\n        (displayTypeChange)=\"onDisplayTypeChange($event)\">\n      </cp-complex-list-display-buttons>\n    </div>\n    <table class=\"hover\" *ngIf=\"!this.isDisplayComplexNavigatorView()\">\n      <thead>\n      <tr>\n        <th>Name</th>\n        <th>ID</th>\n        <th>Organism</th>\n        <th></th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr *ngFor=\"let key of getKeys(complexBasket)\" [class.predicted]=\"complexBasket[key].predicted\">\n        <td>\n          <a [routerLink]=\"['/complex', complexBasket[key].id]\">{{ complexBasket[key].name }}</a>\n        </td>\n        <td>\n          {{ complexBasket[key].id }}\n        </td>\n        <td>\n          {{ complexBasket[key].organism }}\n        </td>\n        <td>\n          <!--          <a class=\"button primary columns medium-12\" (click)=\"deleteFromBasket(key)\"> <span-->\n          <!--            class=\"icon icon-functional\" data-icon=\"d\"></span></a>-->\n          <a class=\"button primary columns medium-12\" (click)=\"deleteFromBasket(key)\">\n            <i class=\"icon icon-common\" data-icon=\"\"></i>\n\n          </a>\n        </td>\n      </tr>\n      </tbody>\n    </table>\n    <div *ngIf=\"isDisplayComplexNavigatorView()\" class=\"columns medium-12\">\n      <ng-container *ngIf=\"complexSearchBasket;else loadingSpinner\">\n        <div class=\"ComplexNavigator\"\n             [ngClass]=\"complexSearchBasket.totalNumberOfResults <=6 ? 'smallCN' : ''\">\n          <cp-complex-navigator\n            [complexSearch]=\"complexSearchBasket\"\n            [interactors]=\"allInteractorsInComplexSearchBasket\"\n            [canAddComplexesToBasket]=\"false\"\n            [canRemoveComplexesFromBasket]=\"true\"\n            (onComplexRemovedFromBasket)=\"deleteComplexFromBasket($event)\">\n          </cp-complex-navigator>\n        </div>\n      </ng-container>\n      <ng-template #loadingSpinner>\n        <cp-progress-spinner></cp-progress-spinner>\n      </ng-template>\n    </div>\n\n  </div>\n  <div *ngIf=\"isComplexBasketEmpty()\" class=\"columns medium-12\">\n    <div class=\"callout\">\n      <h3>Your basket is currently empty. :'(</h3>\n      <h5>Search for a complex and click on <i class=\"icon icon-common\" data-icon=\"\"></i> symbol to create your own\n        collection of favorite complexes.</h5>\n    </div>\n  </div>\n</div>\n";

      /***/
    },

    /***/78478:
    /*!*********************************************!*\
      !*** ./src/app/basket/basket.component.css ***!
      \*********************************************/
    /***/
    function _(module) {
      module.exports = ".ComplexNavigator, .hover {\n  width: 70%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.basket-icons {\n  margin-left: 5px;\n  margin-bottom: 5px;\n}\n\n.deleteAllButton {\n  width: 225px;\n}\n\nh2 {\n  line-height: 1;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2tldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJiYXNrZXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5Db21wbGV4TmF2aWdhdG9yLCAuaG92ZXIge1xuICB3aWR0aDogNzAlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4uYmFza2V0LWljb25zIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uZGVsZXRlQWxsQnV0dG9uIHtcbiAgd2lkdGg6IDIyNXB4O1xufVxuXG5oMiB7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuIl19 */";

      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_basket_basket_module_ts-es5.js.map