(function () {
  "use strict";

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  (self["webpackChunkcomplex_portal_view"] = self["webpackChunkcomplex_portal_view"] || []).push([["src_app_complex_complex-results_complex-results_module_ts"], {
    /***/16778: (
    /*!************************************************************************************!*\
      !*** ./src/app/complex/complex-results/complex-filter/complex-filter.component.ts ***!
      \************************************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"ComplexFilterComponent": function ComplexFilterComponent() {
          return /* binding */_ComplexFilterComponent;
        }
        /* harmony export */
      });
      /* harmony import */
      var _Users_susiehuget_Documents_GitHub_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_complex_filter_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./complex-filter.component.html */22830);
      /* harmony import */
      var _complex_filter_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./complex-filter.component.css */87165);
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/core */2316);
      /* harmony import */
      var _shared_google_analytics_service_analytics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../../shared/google-analytics/service/analytics.service */96242);
      /* harmony import */
      var _complex_portal_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../../complex-portal-utils */82682);
      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      var _ComplexFilterComponent = /*#__PURE__*/function () {
        function ComplexFilterComponent(googleAnalyticsService) {
          _classCallCheck(this, ComplexFilterComponent);
          this.googleAnalyticsService = googleAnalyticsService;
          this.onSpicesFilterChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
          this.onBiologicalRoleFilterChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
          this.onInteractorTypeFilterChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
          this.onResetAllFilters = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        }
        _createClass(ComplexFilterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
          /**
           *
           * @param filter selected filter
           * @param status status if selected filter has been added or removed
           */
        }, {
          key: "changeSpeciesFilter",
          value: function changeSpeciesFilter(filter, status) {
            if (status) {
              this.spicesFilter.push(filter);
              this.googleAnalyticsService.fireAddedFilterEvent(filter);
            } else {
              this.spicesFilter.splice(this.spicesFilter.indexOf(filter), 1);
              this.googleAnalyticsService.fireRemovedFilterEvent(filter);
            }
            this.onSpicesFilterChanged.emit(this.spicesFilter);
          }
          /**
           *
           * @param filter selected filter
           * @param status status if selected filter has been added or removed
           */
        }, {
          key: "changeBiologicalRoleFilter",
          value: function changeBiologicalRoleFilter(filter, status) {
            if (status) {
              this.bioRoleFilter.push(filter);
              this.googleAnalyticsService.fireAddedFilterEvent(filter);
            } else {
              this.bioRoleFilter.splice(this.bioRoleFilter.indexOf(filter), 1);
              this.googleAnalyticsService.fireRemovedFilterEvent(filter);
            }
            this.onBiologicalRoleFilterChanged.emit(this.bioRoleFilter);
          }
          /**
           *
           * @param filter selected filter
           * @param status status if selected filter has been added or removed
           */
        }, {
          key: "changeInteractorTypeFilter",
          value: function changeInteractorTypeFilter(filter, status) {
            if (status) {
              this.interactorTypeFilter.push(filter);
              this.googleAnalyticsService.fireAddedFilterEvent(filter);
            } else {
              this.interactorTypeFilter.splice(this.interactorTypeFilter.indexOf(filter), 1);
              this.googleAnalyticsService.fireRemovedFilterEvent(filter);
            }
            this.onInteractorTypeFilterChanged.emit(this.interactorTypeFilter);
          }
          /**
           * Emit event to parent component to remove all filters
           */
        }, {
          key: "resetAllFilters",
          value: function resetAllFilters() {
            this.onResetAllFilters.emit(true);
          }
          /**
           *
           * @returns {boolean} true is any filter array contains an filter
           */
        }, {
          key: "anyFiltersSelected",
          value: function anyFiltersSelected() {
            return this._spicesFilter.length !== 0 || this._bioRoleFilter.length !== 0 || this._interactorTypeFilter.length !== 0;
          }
          /**
           *
           * @param element filter to check if already selected
           * @param filter selected filters
           * @returns {boolean} true if filter is already in selected filters
           */
        }, {
          key: "isSelected",
          value: function isSelected(element, filter) {
            return filter.indexOf(element) !== -1;
          }
        }, {
          key: "facets",
          get: function get() {
            return this._facets;
          },
          set: function set(value) {
            this._facets = value;
          }
        }, {
          key: "spicesFilter",
          get: function get() {
            return this._spicesFilter;
          },
          set: function set(value) {
            this._spicesFilter = value;
          }
        }, {
          key: "bioRoleFilter",
          get: function get() {
            return this._bioRoleFilter;
          },
          set: function set(value) {
            this._bioRoleFilter = value;
          }
        }, {
          key: "interactorTypeFilter",
          get: function get() {
            return this._interactorTypeFilter;
          },
          set: function set(value) {
            this._interactorTypeFilter = value;
          }
        }, {
          key: "facetTypeIcon",
          value: function facetTypeIcon(facet) {
            return (0, _complex_portal_utils__WEBPACK_IMPORTED_MODULE_3__.interactorTypeIcon)(facet.name);
          }
        }, {
          key: "facetOrganismIcon",
          value: function facetOrganismIcon(facet) {
            return (0, _complex_portal_utils__WEBPACK_IMPORTED_MODULE_3__.organismIcon)(facet);
          }
        }]);
        return ComplexFilterComponent;
      }();
      _ComplexFilterComponent.ctorParameters = function () {
        return [{
          type: _shared_google_analytics_service_analytics_service__WEBPACK_IMPORTED_MODULE_2__.AnalyticsService
        }];
      };
      _ComplexFilterComponent.propDecorators = {
        onSpicesFilterChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
        }],
        onBiologicalRoleFilterChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
        }],
        onInteractorTypeFilterChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
        }],
        onResetAllFilters: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
        }],
        facets: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
        }],
        spicesFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
        }],
        bioRoleFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
        }],
        interactorTypeFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
        }]
      };
      _ComplexFilterComponent = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'cp-complex-filter',
        template: _Users_susiehuget_Documents_GitHub_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_complex_filter_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_complex_filter_component_css__WEBPACK_IMPORTED_MODULE_1__]
      })], _ComplexFilterComponent);

      /***/
    }),
    /***/57991: (
    /*!********************************************************************************!*\
      !*** ./src/app/complex/complex-results/complex-list/complex-list.component.ts ***!
      \********************************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"ComplexListComponent": function ComplexListComponent() {
          return /* binding */_ComplexListComponent;
        }
        /* harmony export */
      });
      /* harmony import */
      var _Users_susiehuget_Documents_GitHub_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_complex_list_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./complex-list.component.html */3122);
      /* harmony import */
      var _complex_list_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./complex-list.component.css */17554);
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/core */2316);
      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      var _ComplexListComponent = /*#__PURE__*/function () {
        function ComplexListComponent() {
          _classCallCheck(this, ComplexListComponent);
        }
        _createClass(ComplexListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);
        return ComplexListComponent;
      }();
      _ComplexListComponent.ctorParameters = function () {
        return [];
      };
      _ComplexListComponent.propDecorators = {
        complexSearch: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }]
      };
      _ComplexListComponent = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'cp-complex-list',
        template: _Users_susiehuget_Documents_GitHub_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_complex_list_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_complex_list_component_css__WEBPACK_IMPORTED_MODULE_1__]
      })], _ComplexListComponent);

      /***/
    }),
    /***/88628: (
    /*!**************************************************************************************************************************!*\
      !*** ./src/app/complex/complex-results/complex-navigator/complex-navigator-rating/complex-navigator-rating.component.ts ***!
      \**************************************************************************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"ComplexNavigatorRatingComponent": function ComplexNavigatorRatingComponent() {
          return /* binding */_ComplexNavigatorRatingComponent;
        }
        /* harmony export */
      });
      /* harmony import */
      var _Users_susiehuget_Documents_GitHub_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_complex_navigator_rating_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./complex-navigator-rating.component.html */45831);
      /* harmony import */
      var _complex_navigator_rating_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./complex-navigator-rating.component.css */2405);
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/core */2316);
      /* harmony import */
      var _shared_google_analytics_service_analytics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../../../shared/google-analytics/service/analytics.service */96242);
      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      var COMPLEX_NAVIGATOR_RATING = 'already_rated';
      var _ComplexNavigatorRatingComponent = /*#__PURE__*/function () {
        function ComplexNavigatorRatingComponent(analyticsService) {
          _classCallCheck(this, ComplexNavigatorRatingComponent);
          this.analyticsService = analyticsService;
          this.hidden = false;
        }
        _createClass(ComplexNavigatorRatingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.hidden = localStorage.getItem(COMPLEX_NAVIGATOR_RATING) === 'true' || false;
          }
        }, {
          key: "selectRating",
          value: function selectRating(rating) {
            var _this = this;
            this.selectedRating = rating;
            // console.log(`Selected rating: ${rating}`);
            this.analyticsService.rateComplexNavigator(this.selectedRating);
            localStorage.setItem(COMPLEX_NAVIGATOR_RATING, 'true');
            setTimeout(function () {
              return _this.hidden = true;
            }, 2000);
          }
        }]);
        return ComplexNavigatorRatingComponent;
      }();
      _ComplexNavigatorRatingComponent.ctorParameters = function () {
        return [{
          type: _shared_google_analytics_service_analytics_service__WEBPACK_IMPORTED_MODULE_2__.AnalyticsService
        }];
      };
      _ComplexNavigatorRatingComponent = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'cp-complex-navigator-rating',
        template: _Users_susiehuget_Documents_GitHub_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_complex_navigator_rating_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_complex_navigator_rating_component_css__WEBPACK_IMPORTED_MODULE_1__]
      })], _ComplexNavigatorRatingComponent);

      /***/
    }),
    /***/80556: (
    /*!******************************************************************************************!*\
      !*** ./src/app/complex/complex-results/complex-paginator/complex-paginator.component.ts ***!
      \******************************************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"ComplexPaginatorComponent": function ComplexPaginatorComponent() {
          return /* binding */_ComplexPaginatorComponent;
        }
        /* harmony export */
      });
      /* harmony import */
      var _Users_susiehuget_Documents_GitHub_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_complex_paginator_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./complex-paginator.component.html */65123);
      /* harmony import */
      var _complex_paginator_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./complex-paginator.component.css */71945);
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/core */2316);
      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      var _ComplexPaginatorComponent = /*#__PURE__*/function () {
        function ComplexPaginatorComponent() {
          _classCallCheck(this, ComplexPaginatorComponent);
          this.onPageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        }
        _createClass(ComplexPaginatorComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.updatePaginatior();
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            this.updatePaginatior();
          }
        }, {
          key: "updatePaginatior",
          value: function updatePaginatior() {
            var start;
            var end;
            this.pagination = [];
            if (this._lastPageIndex < 5) {
              start = 1;
              end = this._lastPageIndex;
            } else {
              if (this._currentPageIndex === 1 || this._currentPageIndex === 2) {
                start = 1;
                end = 5;
              } else if (this._currentPageIndex === this._lastPageIndex || this._currentPageIndex === this._lastPageIndex - 1) {
                start = this._lastPageIndex - 4;
                end = this._lastPageIndex;
              } else {
                start = this._currentPageIndex - 2;
                end = this._currentPageIndex + 2;
              }
            }
            while (start <= end) {
              if (start === this._currentPageIndex) {
                this._pagination.push([[this._currentPageIndex], [true]]);
              } else {
                this._pagination.push([[start], [false]]);
              }
              start++;
            }
          }
        }, {
          key: "getFirstPage",
          value: function getFirstPage() {
            this.onPageChange.emit(1);
          }
        }, {
          key: "getLastPage",
          value: function getLastPage() {
            this.onPageChange.emit(this.lastPageIndex);
          }
        }, {
          key: "getPage",
          value: function getPage(pageIndex) {
            this.onPageChange.emit(pageIndex);
          }
        }, {
          key: "getPreviousPage",
          value: function getPreviousPage() {
            this.onPageChange.emit(this.currentPageIndex - 1);
          }
        }, {
          key: "getNextPage",
          value: function getNextPage() {
            this.onPageChange.emit(this.currentPageIndex + 1);
          }
        }, {
          key: "lastPageIndex",
          get: function get() {
            return this._lastPageIndex;
          },
          set: function set(value) {
            this._lastPageIndex = value;
          }
        }, {
          key: "currentPageIndex",
          get: function get() {
            return this._currentPageIndex;
          },
          set: function set(value) {
            this._currentPageIndex = value;
          }
        }, {
          key: "pagination",
          get: function get() {
            return this._pagination;
          },
          set: function set(value) {
            this._pagination = value;
          }
        }]);
        return ComplexPaginatorComponent;
      }();
      _ComplexPaginatorComponent.ctorParameters = function () {
        return [];
      };
      _ComplexPaginatorComponent.propDecorators = {
        onPageChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }],
        lastPageIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        currentPageIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }]
      };
      _ComplexPaginatorComponent = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'cp-complex-paginator',
        template: _Users_susiehuget_Documents_GitHub_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_complex_paginator_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_complex_paginator_component_css__WEBPACK_IMPORTED_MODULE_1__]
      })], _ComplexPaginatorComponent);

      /***/
    }),
    /***/50967: (
    /*!**********************************************************************!*\
      !*** ./src/app/complex/complex-results/complex-results.component.ts ***!
      \**********************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"ComplexResultsComponent": function ComplexResultsComponent() {
          return /* binding */_ComplexResultsComponent;
        }
        /* harmony export */
      });
      /* harmony import */
      var _Users_susiehuget_Documents_GitHub_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_complex_results_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./complex-results.component.html */13182);
      /* harmony import */
      var _complex_results_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./complex-results.component.css */23654);
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! @angular/core */2316);
      /* harmony import */
      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! @angular/router */71258);
      /* harmony import */
      var _shared_service_complex_portal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../shared/service/complex-portal.service */20658);
      /* harmony import */
      var _shared_loading_indicators_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../../shared/loading-indicators/progress-bar/progress-bar.component */57040);
      /* harmony import */
      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! @angular/platform-browser */71570);
      /* harmony import */
      var _shared_google_analytics_service_analytics_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ../../shared/google-analytics/service/analytics.service */96242);
      /* harmony import */
      var _shared_model_complex_results_interactor_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ../shared/model/complex-results/interactor.model */45178);
      /* harmony import */
      var _shared_notification_service_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ../../shared/notification/service/notification.service */30048);
      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      var _ComplexResultsComponent = /*#__PURE__*/function () {
        function ComplexResultsComponent(route, router, complexPortalService, titleService, googleAnalyticsService, notificationService) {
          _classCallCheck(this, ComplexResultsComponent);
          this.route = route;
          this.router = router;
          this.complexPortalService = complexPortalService;
          this.titleService = titleService;
          this.googleAnalyticsService = googleAnalyticsService;
          this.notificationService = notificationService;
          this.LIST_VIEW = 'view_list';
          this.COMPLEX_NAVIGATOR_VIEW = 'view_complex_navigator';
          this._allInteractorsInComplexSearch = [];
          this._listPageSize = 15; // This is where we set the size of the pages for list view
          this._navigatorPageSize = 20; // This is where we set the size of the pages for navigator view
        }
        _createClass(ComplexResultsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;
            this.titleService.setTitle('Complex Portal - Results');
            this._allInteractorsInComplexSearch = [];
            this.route.fragment.subscribe(function (fragment) {
              if (fragment === _this2.COMPLEX_NAVIGATOR_VIEW) {
                _this2.DisplayType = _this2.COMPLEX_NAVIGATOR_VIEW;
              } else if (fragment === _this2.LIST_VIEW) {
                _this2.DisplayType = _this2.LIST_VIEW;
              }
              _this2.route.queryParams.subscribe(function (queryParams) {
                _this2._query = queryParams['query'];
                _this2._spicesFilter = queryParams['species'] ? queryParams['species'].split('+') : [];
                _this2._bioRoleFilter = queryParams['bioRole'] ? queryParams['bioRole'].split('+') : [];
                _this2._interactorTypeFilter = queryParams['interactorType'] ? queryParams['interactorType'].split('+') : [];
                _this2.currentPageIndex = queryParams['page'] ? Number(queryParams['page']) : 1;
                // TODO This is out for now, but CP-84 (JIRA )should fix that!!
                // this.pageSize = queryParams['size'] ? Number(queryParams['size']) : 10;
                _this2.requestComplexResults();
                document.body.scrollTop = 0;
              });
            });
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {}
        }, {
          key: "requestComplexResults",
          value: function requestComplexResults() {
            var _this3 = this;
            this.complexPortalService.findComplex(this.query, this.spicesFilter, this.bioRoleFilter, this.interactorTypeFilter, this.currentPageIndex, this.pageSize).subscribe(function (complexSearch) {
              _this3.complexSearch = complexSearch;
              _this3._allInteractorsInComplexSearch = [];
              if (_this3.complexSearch.totalNumberOfResults !== 0) {
                _this3.lastPageIndex = Math.ceil(complexSearch.totalNumberOfResults / _this3.pageSize);
                for (var i = 0; i < complexSearch.elements.length; i++) {
                  var _iterator = _createForOfIteratorHelper(complexSearch.elements[i].interactors),
                    _step;
                  try {
                    var _loop = function _loop() {
                      var component = _step.value;
                      if (!_this3._allInteractorsInComplexSearch.some(function (interactor) {
                        return interactor.identifier === component.identifier;
                      })) {
                        _this3._allInteractorsInComplexSearch.push(new _shared_model_complex_results_interactor_model__WEBPACK_IMPORTED_MODULE_5__.Interactor(component.identifier, component.identifierLink, component.name, component.description, component.interactorType, component.organismName));
                      }
                    };
                    for (_iterator.s(); !(_step = _iterator.n()).done;) {
                      _loop();
                    }
                  } catch (err) {
                    _iterator.e(err);
                  } finally {
                    _iterator.f();
                  }
                }
              }
              _shared_loading_indicators_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_3__.ProgressBarComponent.hide();
            });
          }
          /**
           * Prepare query params to build new URL after filter or pagination has changed
           */
        }, {
          key: "reloadPage",
          value: function reloadPage() {
            var queryParams = {};
            queryParams['query'] = this._query;
            queryParams['page'] = this.currentPageIndex;
            if (this._spicesFilter !== undefined && this._spicesFilter.length !== 0) {
              queryParams['species'] = this.prepareFiltersForParams(this.spicesFilter);
            }
            if (this._bioRoleFilter !== undefined && this._bioRoleFilter.length !== 0) {
              queryParams['bioRole'] = this.prepareFiltersForParams(this._bioRoleFilter);
            }
            if (this._interactorTypeFilter !== undefined && this._interactorTypeFilter.length !== 0) {
              queryParams['interactorType'] = this.prepareFiltersForParams(this._interactorTypeFilter);
            }
            this.router.navigate([], {
              queryParams: queryParams,
              fragment: this.DisplayType
            });
            _shared_loading_indicators_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_3__.ProgressBarComponent.hide();
            // This is a test case event for GA, to monitor if users ever use more then one filter.
            var filterCount = this.getFilterCount();
            if (1 < filterCount) {
              this.googleAnalyticsService.fireMultiFilterEvent(filterCount.toString());
            }
          }
        }, {
          key: "prepareFiltersForParams",
          value: function prepareFiltersForParams(filter) {
            return filter.toString().replace(/,/g, '+');
          }
        }, {
          key: "getFilterCount",
          value: function getFilterCount() {
            return this._spicesFilter.length + this._interactorTypeFilter.length + this._bioRoleFilter.length;
          }
          /**
           *
           * @param pageIndex new page index after hitting the paginator to update the URL and reload content
           */
        }, {
          key: "onPageChange",
          value: function onPageChange(pageIndex) {
            this.currentPageIndex = pageIndex;
            this.reloadPage();
          }
        }, {
          key: "onResetAllFilters",
          value: function onResetAllFilters() {
            this.spicesFilter = [];
            this.bioRoleFilter = [];
            this.interactorTypeFilter = [];
            this.currentPageIndex = 1;
            this.reloadPage();
          }
        }, {
          key: "onSpicesFilterChanged",
          value: function onSpicesFilterChanged(filter) {
            this.spicesFilter = filter;
            this.currentPageIndex = 1;
            this.reloadPage();
          }
        }, {
          key: "onBiologicalRoleFilterChanged",
          value: function onBiologicalRoleFilterChanged(filter) {
            this.bioRoleFilter = filter;
            this.currentPageIndex = 1;
            this.reloadPage();
          }
        }, {
          key: "onInteractorTypeFilterChanged",
          value: function onInteractorTypeFilterChanged(filter) {
            this.interactorTypeFilter = filter;
            this.currentPageIndex = 1;
            this.reloadPage();
          }
        }, {
          key: "query",
          get: function get() {
            return this._query;
          },
          set: function set(value) {
            this._query = value;
          }
        }, {
          key: "currentPageIndex",
          get: function get() {
            if (this.DisplayType === this.COMPLEX_NAVIGATOR_VIEW) {
              return this._navigatorCurrentPage;
            } else {
              return this._listCurrentPage;
            }
          },
          set: function set(value) {
            if (this.DisplayType === this.COMPLEX_NAVIGATOR_VIEW) {
              this._navigatorCurrentPage = value;
            } else {
              this._listCurrentPage = value;
            }
          }
        }, {
          key: "complexSearch",
          get: function get() {
            return this._complexSearch;
          },
          set: function set(value) {
            this._complexSearch = value;
            this.setFirstDisplayType();
          }
        }, {
          key: "lastPageIndex",
          get: function get() {
            if (this.DisplayType === this.COMPLEX_NAVIGATOR_VIEW) {
              return this._navigatorLastPageIndex;
            } else {
              return this._listLastPageIndex;
            }
          },
          set: function set(value) {
            if (this.DisplayType === this.COMPLEX_NAVIGATOR_VIEW) {
              this._navigatorLastPageIndex = value;
            } else {
              this._listLastPageIndex = value;
            }
          }
        }, {
          key: "pageSize",
          get: function get() {
            if (this.DisplayType === this.COMPLEX_NAVIGATOR_VIEW) {
              return this._navigatorPageSize;
            } else {
              return this._listPageSize;
            }
          }
        }, {
          key: "spicesFilter",
          get: function get() {
            return this._spicesFilter;
          },
          set: function set(value) {
            this._spicesFilter = value;
          }
        }, {
          key: "bioRoleFilter",
          get: function get() {
            return this._bioRoleFilter;
          },
          set: function set(value) {
            this._bioRoleFilter = value;
          }
        }, {
          key: "interactorTypeFilter",
          get: function get() {
            return this._interactorTypeFilter;
          },
          set: function set(value) {
            this._interactorTypeFilter = value;
          }
        }, {
          key: "allInteractorsInComplexSearch",
          get: function get() {
            return this._allInteractorsInComplexSearch;
          }
        }, {
          key: "setListView",
          value: function setListView() {
            this.DisplayType = this.LIST_VIEW;
            this.toast = this.notificationService.complexNavigatorAnnouncement();
            this.reloadPage();
          }
        }, {
          key: "setComplexNavigatorView",
          value: function setComplexNavigatorView() {
            this.DisplayType = this.COMPLEX_NAVIGATOR_VIEW;
            this.reloadPage();
            if (!!this.toast) {
              this.notificationService.closeAnnouncement(this.toast.toastId);
              this.toast = null;
            }
          }
        }, {
          key: "setFirstDisplayType",
          value: function setFirstDisplayType() {
            if (!this.DisplayType) {
              if (this._complexSearch.totalNumberOfResults === 1) {
                var complexId = this._complexSearch.elements[0].complexAC;
                if (!!complexId) {
                  // For some reason this is needed so the navigate call works
                  this.router.routeReuseStrategy.shouldReuseRoute = function () {
                    return false;
                  };
                  this.router.navigate(['/complex', complexId]);
                }
              } else {
                // Currently the list view is the default, as we are just launching the navigator view
                // Later on we can change the default view to be the list or navigator view based on number of results
                if (this._complexSearch.totalNumberOfResults <= this._navigatorPageSize) {
                  this.setComplexNavigatorView();
                } else {
                  this.setListView();
                }
              }
            }
          }
        }]);
        return ComplexResultsComponent;
      }();
      _ComplexResultsComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
        }, {
          type: _shared_service_complex_portal_service__WEBPACK_IMPORTED_MODULE_2__.ComplexPortalService
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.Title
        }, {
          type: _shared_google_analytics_service_analytics_service__WEBPACK_IMPORTED_MODULE_4__.AnalyticsService
        }, {
          type: _shared_notification_service_notification_service__WEBPACK_IMPORTED_MODULE_6__.NotificationService
        }];
      };
      _ComplexResultsComponent = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'cp-complex-results',
        template: _Users_susiehuget_Documents_GitHub_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_complex_results_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_complex_results_component_css__WEBPACK_IMPORTED_MODULE_1__]
      })], _ComplexResultsComponent);

      /***/
    }),
    /***/79555: (
    /*!*******************************************************************!*\
      !*** ./src/app/complex/complex-results/complex-results.module.ts ***!
      \*******************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"ComplexResultsModule": function ComplexResultsModule() {
          return /* binding */_ComplexResultsModule;
        }
        /* harmony export */
      });
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! @angular/core */2316);
      /* harmony import */
      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! @angular/common */54364);
      /* harmony import */
      var _complex_results_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./complex-results.component */50967);
      /* harmony import */
      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! @angular/router */71258);
      /* harmony import */
      var _complex_paginator_complex_paginator_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./complex-paginator/complex-paginator.component */80556);
      /* harmony import */
      var _complex_filter_complex_filter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./complex-filter/complex-filter.component */16778);
      /* harmony import */
      var _complex_list_complex_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./complex-list/complex-list.component */57991);
      /* harmony import */
      var _shared_loading_indicators_progress_spinner_progress_spinner_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ../../shared/loading-indicators/progress-spinner/progress-spinner.module */45103);
      /* harmony import */
      var ngx_markdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! ngx-markdown */36731);
      /* harmony import */
      var _complex_navigator_complex_navigator_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./complex-navigator/complex-navigator.module */60090);
      /* harmony import */
      var _complex_navigator_complex_navigator_rating_complex_navigator_rating_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./complex-navigator/complex-navigator-rating/complex-navigator-rating.component */88628);
      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      var _ComplexResultsModule = /*#__PURE__*/_createClass(function ComplexResultsModule() {
        _classCallCheck(this, ComplexResultsModule);
      });
      _ComplexResultsModule = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([{
          path: '',
          component: _complex_results_component__WEBPACK_IMPORTED_MODULE_0__.ComplexResultsComponent
        }]), _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _shared_loading_indicators_progress_spinner_progress_spinner_module__WEBPACK_IMPORTED_MODULE_4__.ProgressSpinnerModule, ngx_markdown__WEBPACK_IMPORTED_MODULE_10__.MarkdownModule, _complex_navigator_complex_navigator_module__WEBPACK_IMPORTED_MODULE_5__.ComplexNavigatorModule],
        exports: [],
        declarations: [_complex_results_component__WEBPACK_IMPORTED_MODULE_0__.ComplexResultsComponent, _complex_list_complex_list_component__WEBPACK_IMPORTED_MODULE_3__.ComplexListComponent, _complex_filter_complex_filter_component__WEBPACK_IMPORTED_MODULE_2__.ComplexFilterComponent, _complex_paginator_complex_paginator_component__WEBPACK_IMPORTED_MODULE_1__.ComplexPaginatorComponent, _complex_navigator_complex_navigator_rating_complex_navigator_rating_component__WEBPACK_IMPORTED_MODULE_6__.ComplexNavigatorRatingComponent]
      })], _ComplexResultsModule);

      /***/
    }),
    /***/22830: (
    /*!*****************************************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/complex/complex-results/complex-filter/complex-filter.component.html ***!
      \*****************************************************************************************************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */
      __webpack_exports__["default"] = "<div class=\"filters row\">\n  <div class=\"columns medium-6\"><h3>Filters</h3></div>\n  <div class=\"columns medium-6\">\n    <div *ngIf=\"anyFiltersSelected()\">\n      <a class=\"button\" (click)=\"resetAllFilters()\"><i class=\"icon icon-functional\" data-icon=\"d\"></i> Reset filters</a>\n    </div>\n  </div>\n  <div class=\"columns medium-12\">\n    <div *ngIf=\"facets.species_f\">\n      <b>Species</b>\n      <ul class=\"no-bullet\">\n        <li *ngFor=\"let facet of facets.species_f\">\n          <div [ngSwitch]=\"isSelected(facet.name, spicesFilter)\">\n            <div *ngSwitchCase=\"true\">\n              <input type=\"checkbox\" #filter value=\"{{facet.name}}\"\n                     (change)=\"changeSpeciesFilter(filter.value, filter.checked)\" checked>\n              {{ facet.name }}\n              ({{ facet.count }})\n              <i class=\"{{ facetOrganismIcon(facet.name) }}\"\n                 style=\"font-size: large;\"></i>\n            </div>\n            <div *ngSwitchDefault>\n              <input type=\"checkbox\" #filter value=\"{{facet.name}}\"\n                     (change)=\"changeSpeciesFilter(filter.value, filter.checked)\"> {{ facet.name }} ({{ facet.count }})\n\n              <i class=\"{{ facetOrganismIcon(facet.name) }}\"\n                 style=\"font-size: large;\"></i>\n            </div>\n          </div>\n        </li>\n      </ul>\n    </div>\n\n    <div *ngIf=\"facets.pbiorole_f\">\n      <b>Biological Role</b>\n      <ul class=\"no-bullet\">\n        <li *ngFor=\"let facet of facets.pbiorole_f\">\n          <div [ngSwitch]=\"isSelected(facet.name, bioRoleFilter)\">\n            <div *ngSwitchCase=\"true\">\n              <input type=\"checkbox\" #filter value=\"{{facet.name}}\"\n                     (change)=\"changeBiologicalRoleFilter(filter.value, filter.checked)\" checked> {{ facet.name }}\n              ({{ facet.count }})\n            </div>\n            <div *ngSwitchDefault>\n              <input type=\"checkbox\" #filter value=\"{{facet.name}}\"\n                     (change)=\"changeBiologicalRoleFilter(filter.value, filter.checked)\"> {{ facet.name }}\n              ({{ facet.count }})\n            </div>\n          </div>\n        </li>\n      </ul>\n    </div>\n\n\n    <div *ngIf=\"facets.ptype_f\">\n      <b>Component Type</b>\n      <ul class=\"no-bullet\">\n        <li *ngFor=\"let facet of facets.ptype_f\">\n          <div [ngSwitch]=\"isSelected(facet.name, interactorTypeFilter)\">\n            <div *ngSwitchCase=\"true\">\n              <input type=\"checkbox\" #filter value=\"{{facet.name}}\"\n                     (change)=\"changeInteractorTypeFilter(filter.value, filter.checked)\" checked> {{ facet.name }}\n              ({{ facet.count }})\n              <i class=\"{{ facetTypeIcon(facet) }}\"\n                 style=\"font-size: large;\"></i>\n            </div>\n            <div *ngSwitchDefault>\n              <input type=\"checkbox\" #filter value=\"{{facet.name}}\"\n                     (change)=\"changeInteractorTypeFilter(filter.value, filter.checked)\"> {{ facet.name }}\n              ({{ facet.count }})\n              <i class=\"{{ facetTypeIcon(facet) }}\"\n                 style=\"font-size: large;\"></i>\n            </div>\n          </div>\n        </li>\n      </ul>\n    </div>\n    <div *ngIf=\"!facets.species_f && !facets.pbiorole_f && !facets.ptype_f\">\n      <h6>No filters available</h6>\n    </div>\n  </div>\n</div>\n";

      /***/
    }),
    /***/3122: (
    /*!*************************************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/complex/complex-results/complex-list/complex-list.component.html ***!
      \*************************************************************************************************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */
      __webpack_exports__["default"] = "<ul class=\"no-bullet\">\n  <li *ngFor=\"let complex of complexSearch.elements\">\n    <h3><a [routerLink]=\"['/complex', complex.complexAC]\">{{ complex.complexName }}</a></h3>\n    <div class=\"description\" style=\"background-color: white\">\n      <b>Complex AC:</b> {{ complex.complexAC }} / <b>Organism:</b> ({{ complex.organismName }})<br>\n      <b>Description:</b>\n      <div *ngIf=\"complex.description.length <= 250\">\n        {{ complex.description }}<a [routerLink]=\"['/complex', complex.complexAC]\">...</a>\n      </div>\n      <div *ngIf=\"complex.description.length > 250\">\n        {{ complex.description.substr(0, 250) }}<a [routerLink]=\"['/complex', complex.complexAC]\">...</a>\n      </div>\n    </div>\n  </li>\n</ul>\n";

      /***/
    }),
    /***/45831: (
    /*!*******************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/complex/complex-results/complex-navigator/complex-navigator-rating/complex-navigator-rating.component.html ***!
      \*******************************************************************************************************************************************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */
      __webpack_exports__["default"] = "<div class=\"ratingComponent\" *ngIf=\"!hidden\">\n  <div class=\"buttonContainer\">\n    <button class=\"close\" id=\"closePopup\" (click)=\"hidden = true\">&times;</button>\n  </div>\n  <div class=\"text\">\n    <p>Tell us about your experience with the Complex Navigator!</p>\n  </div>\n  <div class=\"ratingComponentStars\">\n    <span class=\"star\" [ngClass]=\"{'selected': selectedRating >= 1}\" (click)=\"selectRating(1)\"> &#9733; </span>\n    <span class=\"star\" [ngClass]=\"{'selected': selectedRating >= 2}\" (click)=\"selectRating(2)\"> &#9733; </span>\n    <span class=\"star\" [ngClass]=\"{'selected': selectedRating >= 3}\" (click)=\"selectRating(3)\"> &#9733; </span>\n    <span class=\"star\" [ngClass]=\"{'selected': selectedRating >= 4}\" (click)=\"selectRating(4)\"> &#9733; </span>\n    <span class=\"star\" [ngClass]=\"{'selected': selectedRating >= 5}\" (click)=\"selectRating(5)\"> &#9733; </span>\n  </div>\n</div>\n";

      /***/
    }),
    /***/65123: (
    /*!***********************************************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/complex/complex-results/complex-paginator/complex-paginator.component.html ***!
      \***********************************************************************************************************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */
      __webpack_exports__["default"] = "<div>\n  <h5 class=\"text-center\">{{ currentPageIndex }} of {{ lastPageIndex }}</h5>\n  <ul class=\"pagination text-center\" role=\"navigation\" aria-label=\"Pagination\">\n    <li class=\"arrow unavailable\" *ngIf=\"currentPageIndex != 1\" aria-disabled=\"true\"><a\n      (click)=\"getFirstPage()\">&Lang; First</a></li>\n    <li class=\"arrow unavailable\" *ngIf=\"currentPageIndex != 1\" aria-disabled=\"true\"><a\n      (click)=\"getPreviousPage()\">&lang; Previous</a></li>\n    <ng-container *ngFor=\"let index of pagination\">\n      <li *ngIf=\"index[1] == 'true'\" class=\"current\"><span class=\"show-for-sr\">You're on page</span>{{ index[0] }}</li>\n      <li *ngIf=\"index[1] == 'false'\"><a (click)=\"getPage(index[0])\">{{ index[0] }}</a></li>\n    </ng-container>\n    <li class=\"arrow\" *ngIf=\"currentPageIndex != lastPageIndex\"><a (click)=\"getNextPage()\">Next &rang;</a></li>\n    <li class=\"arrow\" *ngIf=\"currentPageIndex != lastPageIndex\"><a (click)=\"getLastPage()\">Last &Rang;</a></li>\n  </ul>\n</div>\n";

      /***/
    }),
    /***/13182: (
    /*!***************************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/complex/complex-results/complex-results.component.html ***!
      \***************************************************************************************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */
      __webpack_exports__["default"] = "<div class=\"margin-top-large margin-bottom-large row\">\n  <ng-container *ngIf=\"complexSearch;else loadingSpinner\">\n    <div class=\"columns medium-12\" *ngIf=\"complexSearch.totalNumberOfResults !== 0\">\n      <h2 class=\"padding-left-large leftAligned\">Total number of\n        results: {{ complexSearch.totalNumberOfResults }} </h2>\n      <div class=\"row\">\n        <cp-complex-navigator-rating *ngIf=\"DisplayType=== COMPLEX_NAVIGATOR_VIEW\">\n        </cp-complex-navigator-rating>\n        <div class=\"displayButton columns medium-8\">\n          <button type=\"submit\" name=\"submit\" class=\"button view-button\"\n                  (click)=\"setListView()\" [ngClass]=\"{'selected': DisplayType === LIST_VIEW}\">\n            View list\n          </button>\n          <button type=\"submit\" name=\"submit\" class=\"button view-button cnButton\"\n                  (click)=\"setComplexNavigatorView()\" [ngClass]=\"{'selected': DisplayType === COMPLEX_NAVIGATOR_VIEW}\">\n            View Complex Navigator\n            <span class=\"new-tag\" [ngClass]=\"{'new-tag-selected': DisplayType === COMPLEX_NAVIGATOR_VIEW}\">NEW!</span>\n          </button>\n        </div>\n      </div>\n      <div class=\"columns medium-4 filterColumn leftAligned\">\n        <cp-complex-filter *ngIf=\"spicesFilter && bioRoleFilter && interactorTypeFilter\"\n                           [spicesFilter]=\"spicesFilter\"\n                           [bioRoleFilter]=\"bioRoleFilter\"\n                           [interactorTypeFilter]=\"interactorTypeFilter\" [facets]=\"complexSearch.facets\"\n                           (onResetAllFilters)=\"onResetAllFilters()\"\n                           (onSpicesFilterChanged)=\"onSpicesFilterChanged($event)\"\n                           (onBiologicalRoleFilterChanged)=\"onBiologicalRoleFilterChanged($event)\"\n                           (onInteractorTypeFilterChanged)=\"onInteractorTypeFilterChanged($event)\">\n        </cp-complex-filter>\n      </div>\n      <div class=\"columns medium-8\">\n        <cp-complex-paginator class=\"changingOfDisplay\"\n                              [currentPageIndex]=\"currentPageIndex\"\n                              [lastPageIndex]=\"lastPageIndex\"\n                              (onPageChange)=\"onPageChange($event)\">\n        </cp-complex-paginator>\n        <div class=\"listOfResults\">\n          <cp-complex-list *ngIf=\"DisplayType===LIST_VIEW\"\n                           [complexSearch]=\"complexSearch\">\n          </cp-complex-list>\n        </div>\n        <div class=\"ComplexNavigator changingOfDisplay\" *ngIf=\"DisplayType===COMPLEX_NAVIGATOR_VIEW\"\n             [ngClass]=\"complexSearch.totalNumberOfResults <=6 ? 'smallCN' : ''\">\n          <cp-complex-navigator class=\"Complex-navigator\"\n                                [complexSearch]=\"complexSearch\"\n                                [interactors]=\"allInteractorsInComplexSearch\">\n          </cp-complex-navigator>\n        </div>\n        <cp-complex-paginator class=\"changingOfDisplay\"\n                              [currentPageIndex]=\"currentPageIndex\"\n                              [lastPageIndex]=\"lastPageIndex\"\n                              (onPageChange)=\"onPageChange($event)\"></cp-complex-paginator>\n      </div>\n    </div>\n\n    <div class=\"columns medium-12 callout alert\" *ngIf=\"complexSearch.totalNumberOfResults === 0\">\n      <h2>No Complex Portal results found</h2>\n      <h3>We're sorry but we couldn't find anything that matched your search for: <b>{{ query }}</b></h3>\n      <h4>Please consider refining your terms:</h4>\n      <ul>\n        <li>Make sure all words are spelled correctly</li>\n        <li>Try different keywords</li>\n        <li>Be more precise: use gene or protein IDs, e.g. Ndc80 or Q04571</li>\n        <li>Remove quotes around phrases to search for each word individually. bike shed will often show more results\n          than\n          \"bike shed\"\n        </li>\n      </ul>\n    </div>\n  </ng-container>\n  <ng-template #loadingSpinner>\n    <cp-progress-spinner [query]=\"query\"></cp-progress-spinner>\n  </ng-template>\n</div>\n";

      /***/
    }),
    /***/87165: (
    /*!*************************************************************************************!*\
      !*** ./src/app/complex/complex-results/complex-filter/complex-filter.component.css ***!
      \*************************************************************************************/
    /***/
    function _(module) {
      module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wbGV4LWZpbHRlci5jb21wb25lbnQuY3NzIn0= */";

      /***/
    }),
    /***/17554: (
    /*!*********************************************************************************!*\
      !*** ./src/app/complex/complex-results/complex-list/complex-list.component.css ***!
      \*********************************************************************************/
    /***/
    function _(module) {
      module.exports = ".description {\n  width: 100%;\n  text-align: justify;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBsZXgtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJjb21wbGV4LWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXNjcmlwdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuIl19 */";

      /***/
    }),
    /***/2405: (
    /*!***************************************************************************************************************************!*\
      !*** ./src/app/complex/complex-results/complex-navigator/complex-navigator-rating/complex-navigator-rating.component.css ***!
      \***************************************************************************************************************************/
    /***/
    function _(module) {
      module.exports = ".star {\n  font-size: 1.5em;\n  cursor: pointer;\n  color: white;\n}\n\n.star.selected {\n  color: gold;\n}\n\n.ratingComponent {\n  background-color: #007c82;\n  padding: 5px;\n  width: 350px;\n  text-align: center;\n  position: fixed;\n  z-index: 5;\n  top: 54vh;\n  right: -350px;\n  border: 1px solid white;\n  visibility: hidden;\n  animation: ratingComponentMove 1s forwards 7s;\n}\n\n.ratingComponent input {\n  background-color: white;\n  color: #007c82;\n}\n\n.text {\n  display: -webkit-box;\n  color: white;\n  width: 96%;\n  text-align: -webkit-center;\n  padding-left: 10px;\n  margin-bottom: -15px;\n}\n\n@keyframes ratingComponentMove {\n  from {\n    right: -10vw;\n    visibility: visible;\n  }\n  to {\n    right: 4vw;\n    visibility: visible;\n  }\n}\n\n.buttonContainer {\n  width: 100%;\n  height: 1ch;\n  text-align: end;\n  padding-right: 5px;\n}\n\n.close {\n  color: white;\n}\n\n.ratingComponentStars {\n  padding-bottom: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBsZXgtbmF2aWdhdG9yLXJhdGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFVBQVU7RUFDVixTQUFTO0VBQ1QsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsNkNBQTZDO0FBQy9DOztBQUdBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLFVBQVU7RUFDViwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtJQUNaLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsVUFBVTtJQUNWLG1CQUFtQjtFQUNyQjtBQUNGOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6ImNvbXBsZXgtbmF2aWdhdG9yLXJhdGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0YXIge1xuICBmb250LXNpemU6IDEuNWVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnN0YXIuc2VsZWN0ZWQge1xuICBjb2xvcjogZ29sZDtcbn1cblxuLnJhdGluZ0NvbXBvbmVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdjODI7XG4gIHBhZGRpbmc6IDVweDtcbiAgd2lkdGg6IDM1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogNTtcbiAgdG9wOiA1NHZoO1xuICByaWdodDogLTM1MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBhbmltYXRpb246IHJhdGluZ0NvbXBvbmVudE1vdmUgMXMgZm9yd2FyZHMgN3M7XG59XG5cblxuLnJhdGluZ0NvbXBvbmVudCBpbnB1dCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogIzAwN2M4Mjtcbn1cblxuLnRleHQge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogOTYlO1xuICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAtMTVweDtcbn1cblxuQGtleWZyYW1lcyByYXRpbmdDb21wb25lbnRNb3ZlIHtcbiAgZnJvbSB7XG4gICAgcmlnaHQ6IC0xMHZ3O1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIH1cbiAgdG8ge1xuICAgIHJpZ2h0OiA0dnc7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgfVxufVxuXG4uYnV0dG9uQ29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMWNoO1xuICB0ZXh0LWFsaWduOiBlbmQ7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxuLmNsb3NlIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ucmF0aW5nQ29tcG9uZW50U3RhcnMge1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuIl19 */";

      /***/
    }),
    /***/71945: (
    /*!*******************************************************************************************!*\
      !*** ./src/app/complex/complex-results/complex-paginator/complex-paginator.component.css ***!
      \*******************************************************************************************/
    /***/
    function _(module) {
      module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wbGV4LXBhZ2luYXRvci5jb21wb25lbnQuY3NzIn0= */";

      /***/
    }),
    /***/23654: (
    /*!***********************************************************************!*\
      !*** ./src/app/complex/complex-results/complex-results.component.css ***!
      \***********************************************************************/
    /***/
    function _(module) {
      module.exports = ".displayButton {\n  text-align: center;\n  width: 78vw;\n}\n\n.view-button {\n  width: 225px;\n  margin-right: 5px;\n  background-color: white;\n  color: #555;\n  border: 1px dotted #007c82;\n  float: unset;\n}\n\n.view-button:hover {\n  color: #007c82;\n  background-color: rgb(234, 234, 234);\n  border: transparent;\n  border-bottom: 1px dotted #007c82;\n}\n\n.selected,\n.selected:hover {\n  background-color: #007c82;\n  color: white;\n}\n\n.new-tag {\n  color: red;\n  font-weight: bold;\n  font-size: x-small;\n}\n\n.new-tag-selected {\n  color: yellow;\n}\n\n.filterColumn {\n  width: 15vw;\n}\n\n.leftAligned {\n  --global-margin: calc((100vw - 80rem) / -2);\n  --min-margin-left: calc(-100rem * 1.17);\n  margin-left: max(var(--global-margin), var(--min-margin-left));\n}\n\n.cnButton {\n  outline-offset: 0;\n  outline: rgba(0, 124, 130, 0.75) solid 1px;\n  animation: animateOutline 4s ease infinite;\n}\n\n.cnButton.selected {\n  animation: none;\n}\n\n@keyframes animateOutline {\n  0%,\n  50%,\n  100% {\n    outline-width: 6px;\n    outline-offset: 4px;\n    outline-color: rgba(0, 124, 130, 0);\n  }\n  10% {\n    outline-color: rgba(0, 124, 130, 0.75);\n  }\n}\n\n.smallCN {\n  width: 55vw;\n  float: right;\n  margin-left: auto;\n}\n\n.changingOfDisplay {\n  float: left;\n  width: 75vw;\n  margin-right: -2vw;\n}\n\n.column:last-child:not(:first-child),\n.columns:last-child:not(:first-child) {\n  float: left !important;\n}\n\n.listOfResults {\n  width: 40vw;\n  margin-left: 15vw;\n  text-justify: distribute;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBsZXgtcmVzdWx0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCwwQkFBMEI7RUFDMUIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztFQUNkLG9DQUFvQztFQUNwQyxtQkFBbUI7RUFDbkIsaUNBQWlDO0FBQ25DOztBQUVBOztFQUVFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLDJDQUEyQztFQUMzQyx1Q0FBdUM7RUFDdkMsOERBQThEO0FBQ2hFOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLDBDQUEwQztFQUMxQywwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0U7OztJQUdFLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsbUNBQW1DO0VBQ3JDO0VBQ0E7SUFDRSxzQ0FBc0M7RUFDeEM7QUFDRjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQix3QkFBd0I7QUFDMUIiLCJmaWxlIjoiY29tcGxleC1yZXN1bHRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlzcGxheUJ1dHRvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDc4dnc7XG59XG5cbi52aWV3LWJ1dHRvbiB7XG4gIHdpZHRoOiAyMjVweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogIzU1NTtcbiAgYm9yZGVyOiAxcHggZG90dGVkICMwMDdjODI7XG4gIGZsb2F0OiB1bnNldDtcbn1cblxuLnZpZXctYnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6ICMwMDdjODI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzQsIDIzNCwgMjM0KTtcbiAgYm9yZGVyOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCAjMDA3YzgyO1xufVxuXG4uc2VsZWN0ZWQsXG4uc2VsZWN0ZWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YzgyO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5uZXctdGFnIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogeC1zbWFsbDtcbn1cblxuLm5ldy10YWctc2VsZWN0ZWQge1xuICBjb2xvcjogeWVsbG93O1xufVxuXG4uZmlsdGVyQ29sdW1uIHtcbiAgd2lkdGg6IDE1dnc7XG59XG5cbi5sZWZ0QWxpZ25lZCB7XG4gIC0tZ2xvYmFsLW1hcmdpbjogY2FsYygoMTAwdncgLSA4MHJlbSkgLyAtMik7XG4gIC0tbWluLW1hcmdpbi1sZWZ0OiBjYWxjKC0xMDByZW0gKiAxLjE3KTtcbiAgbWFyZ2luLWxlZnQ6IG1heCh2YXIoLS1nbG9iYWwtbWFyZ2luKSwgdmFyKC0tbWluLW1hcmdpbi1sZWZ0KSk7XG59XG5cbi5jbkJ1dHRvbiB7XG4gIG91dGxpbmUtb2Zmc2V0OiAwO1xuICBvdXRsaW5lOiByZ2JhKDAsIDEyNCwgMTMwLCAwLjc1KSBzb2xpZCAxcHg7XG4gIGFuaW1hdGlvbjogYW5pbWF0ZU91dGxpbmUgNHMgZWFzZSBpbmZpbml0ZTtcbn1cblxuLmNuQnV0dG9uLnNlbGVjdGVkIHtcbiAgYW5pbWF0aW9uOiBub25lO1xufVxuXG5Aa2V5ZnJhbWVzIGFuaW1hdGVPdXRsaW5lIHtcbiAgMCUsXG4gIDUwJSxcbiAgMTAwJSB7XG4gICAgb3V0bGluZS13aWR0aDogNnB4O1xuICAgIG91dGxpbmUtb2Zmc2V0OiA0cHg7XG4gICAgb3V0bGluZS1jb2xvcjogcmdiYSgwLCAxMjQsIDEzMCwgMCk7XG4gIH1cbiAgMTAlIHtcbiAgICBvdXRsaW5lLWNvbG9yOiByZ2JhKDAsIDEyNCwgMTMwLCAwLjc1KTtcbiAgfVxufVxuXG4uc21hbGxDTiB7XG4gIHdpZHRoOiA1NXZ3O1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4uY2hhbmdpbmdPZkRpc3BsYXkge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDc1dnc7XG4gIG1hcmdpbi1yaWdodDogLTJ2dztcbn1cblxuLmNvbHVtbjpsYXN0LWNoaWxkOm5vdCg6Zmlyc3QtY2hpbGQpLFxuLmNvbHVtbnM6bGFzdC1jaGlsZDpub3QoOmZpcnN0LWNoaWxkKSB7XG4gIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG59XG5cbi5saXN0T2ZSZXN1bHRzIHtcbiAgd2lkdGg6IDQwdnc7XG4gIG1hcmdpbi1sZWZ0OiAxNXZ3O1xuICB0ZXh0LWp1c3RpZnk6IGRpc3RyaWJ1dGU7XG59XG4iXX0= */";

      /***/
    })
  }]);
})();
//# sourceMappingURL=src_app_complex_complex-results_complex-results_module_ts-es5.js.map