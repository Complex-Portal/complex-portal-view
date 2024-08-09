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
  (self["webpackChunkcomplex_portal_view"] = self["webpackChunkcomplex_portal_view"] || []).push([["src_app_complex_complex-results_complex-results_module_ts"], {
    /***/16778:
    /*!************************************************************************************!*\
      !*** ./src/app/complex/complex-results/complex-filter/complex-filter.component.ts ***!
      \************************************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"ComplexFilterComponent": function ComplexFilterComponent() {
          return (/* binding */_ComplexFilterComponent
          );
        }
        /* harmony export */
      });
      /* harmony import */
      var _Users_jmedina_IdeaProjects_ComplexPortal_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_complex_filter_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./complex-filter.component.html */22830);
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
          this.onPredictedFilterChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
          this.onEvidenceTypeFilterChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
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
        }, {
          key: "changePredictedFilter",
          value: function changePredictedFilter(filter, status) {
            if (status) {
              this.predictedFilter.push(filter);
              this.googleAnalyticsService.fireAddedFilterEvent(filter);
            } else {
              this.predictedFilter.splice(this.predictedFilter.indexOf(filter), 1);
              this.googleAnalyticsService.fireRemovedFilterEvent(filter);
            }
            this.onPredictedFilterChanged.emit(this.predictedFilter);
          }
        }, {
          key: "changeEvidenceTypeFilter",
          value: function changeEvidenceTypeFilter(filter, status) {
            if (status) {
              this.evidenceTypeFilter.push(filter);
              this.googleAnalyticsService.fireAddedFilterEvent(filter);
            } else {
              this.evidenceTypeFilter.splice(this.evidenceTypeFilter.indexOf(filter), 1);
              this.googleAnalyticsService.fireRemovedFilterEvent(filter);
            }
            this.onEvidenceTypeFilterChanged.emit(this.evidenceTypeFilter);
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
            return this.spicesFilter.length !== 0 || this.bioRoleFilter.length !== 0 || this.interactorTypeFilter.length !== 0 || this.predictedFilter.length !== 0 || this.evidenceTypeFilter.length !== 0;
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
          key: "facetTypeIcon",
          value: function facetTypeIcon(facet) {
            return (0, _complex_portal_utils__WEBPACK_IMPORTED_MODULE_3__.interactorTypeIcon)(facet);
          }
        }, {
          key: "facetOrganismIcon",
          value: function facetOrganismIcon(facet) {
            return (0, _complex_portal_utils__WEBPACK_IMPORTED_MODULE_3__.organismIcon)(facet);
          }
        }, {
          key: "formatPredictedFacetValue",
          value: function formatPredictedFacetValue(facetName) {
            if (facetName === 'true') {
              return 'Predicted complex';
            } else {
              return 'Curated complex';
            }
          }
        }, {
          key: "formatEvidenceTypeFacetValue",
          value: function formatEvidenceTypeFacetValue(facetName) {
            var evidenceTypeName = (0, _complex_portal_utils__WEBPACK_IMPORTED_MODULE_3__.ecoCodeName)(facetName);
            return evidenceTypeName || facetName;
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
        }],
        predictedFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
        }],
        evidenceTypeFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
        }],
        onSpicesFilterChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
        }],
        onBiologicalRoleFilterChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
        }],
        onInteractorTypeFilterChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
        }],
        onPredictedFilterChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
        }],
        onEvidenceTypeFilterChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
        }],
        onResetAllFilters: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
        }]
      };
      _ComplexFilterComponent = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'cp-complex-filter',
        template: _Users_jmedina_IdeaProjects_ComplexPortal_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_complex_filter_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_complex_filter_component_css__WEBPACK_IMPORTED_MODULE_1__]
      })], _ComplexFilterComponent);

      /***/
    },

    /***/57991:
    /*!********************************************************************************!*\
      !*** ./src/app/complex/complex-results/complex-list/complex-list.component.ts ***!
      \********************************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"ComplexListComponent": function ComplexListComponent() {
          return (/* binding */_ComplexListComponent
          );
        }
        /* harmony export */
      });
      /* harmony import */
      var _Users_jmedina_IdeaProjects_ComplexPortal_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_complex_list_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./complex-list.component.html */3122);
      /* harmony import */
      var _complex_list_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./complex-list.component.css */17554);
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/core */2316);
      /* harmony import */
      var _shared_basket_service_basket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../../shared/basket/service/basket.service */69510);
      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      var _ComplexListComponent = /*#__PURE__*/function () {
        function ComplexListComponent(basketService) {
          _classCallCheck(this, ComplexListComponent);
          this.basketService = basketService;
        }
        _createClass(ComplexListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "saveComplex",
          value: function saveComplex(complex) {
            this.basketService.saveInBasket(complex);
          }
        }, {
          key: "removeComplexFromBasket",
          value: function removeComplexFromBasket(complex) {
            this.basketService.deleteFromBasket(complex.complexAC);
          }
        }, {
          key: "isInBasket",
          value: function isInBasket(complex) {
            return this.basketService.isInBasket(complex.complexAC);
          }
        }, {
          key: "toggleBasket",
          value: function toggleBasket(complex) {
            if (this.isInBasket(complex)) {
              this.removeComplexFromBasket(complex);
            } else {
              this.saveComplex(complex);
            }
          }
        }]);
        return ComplexListComponent;
      }();
      _ComplexListComponent.ctorParameters = function () {
        return [{
          type: _shared_basket_service_basket_service__WEBPACK_IMPORTED_MODULE_2__.BasketService
        }];
      };
      _ComplexListComponent.propDecorators = {
        complexSearch: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }]
      };
      _ComplexListComponent = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'cp-complex-list',
        template: _Users_jmedina_IdeaProjects_ComplexPortal_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_complex_list_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_complex_list_component_css__WEBPACK_IMPORTED_MODULE_1__]
      })], _ComplexListComponent);

      /***/
    },

    /***/88628:
    /*!**************************************************************************************************************************!*\
      !*** ./src/app/complex/complex-results/complex-navigator/complex-navigator-rating/complex-navigator-rating.component.ts ***!
      \**************************************************************************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"ComplexNavigatorRatingComponent": function ComplexNavigatorRatingComponent() {
          return (/* binding */_ComplexNavigatorRatingComponent
          );
        }
        /* harmony export */
      });
      /* harmony import */
      var _Users_jmedina_IdeaProjects_ComplexPortal_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_complex_navigator_rating_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./complex-navigator-rating.component.html */45831);
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
        template: _Users_jmedina_IdeaProjects_ComplexPortal_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_complex_navigator_rating_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_complex_navigator_rating_component_css__WEBPACK_IMPORTED_MODULE_1__]
      })], _ComplexNavigatorRatingComponent);

      /***/
    },

    /***/80556:
    /*!******************************************************************************************!*\
      !*** ./src/app/complex/complex-results/complex-paginator/complex-paginator.component.ts ***!
      \******************************************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"ComplexPaginatorComponent": function ComplexPaginatorComponent() {
          return (/* binding */_ComplexPaginatorComponent
          );
        }
        /* harmony export */
      });
      /* harmony import */
      var _Users_jmedina_IdeaProjects_ComplexPortal_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_complex_paginator_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./complex-paginator.component.html */65123);
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
        template: _Users_jmedina_IdeaProjects_ComplexPortal_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_complex_paginator_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_complex_paginator_component_css__WEBPACK_IMPORTED_MODULE_1__]
      })], _ComplexPaginatorComponent);

      /***/
    },

    /***/50967:
    /*!**********************************************************************!*\
      !*** ./src/app/complex/complex-results/complex-results.component.ts ***!
      \**********************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"ComplexResultsComponent": function ComplexResultsComponent() {
          return (/* binding */_ComplexResultsComponent
          );
        }
        /* harmony export */
      });
      /* harmony import */
      var _Users_jmedina_IdeaProjects_ComplexPortal_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_complex_results_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./complex-results.component.html */13182);
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
      var _shared_notification_service_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ../../shared/notification/service/notification.service */30048);
      /* harmony import */
      var _complex_navigator_complex_list_display_buttons_complex_list_display_buttons_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./complex-navigator/complex-list-display-buttons/complex-list-display-buttons.component */99915);
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
          this.allInteractorsInComplexSearch = [];
          this._listPageSize = 15; // This is where we set the size of the pages for list view
          this._navigatorPageSize = 20; // This is where we set the size of the pages for navigator view
        }
        _createClass(ComplexResultsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;
            this.titleService.setTitle('Complex Portal - Results');
            this.allInteractorsInComplexSearch = [];
            this.route.fragment.subscribe(function (fragment) {
              if (fragment === _complex_navigator_complex_list_display_buttons_complex_list_display_buttons_component__WEBPACK_IMPORTED_MODULE_6__.COMPLEX_NAVIGATOR_VIEW) {
                _this2.DisplayType = _complex_navigator_complex_list_display_buttons_complex_list_display_buttons_component__WEBPACK_IMPORTED_MODULE_6__.COMPLEX_NAVIGATOR_VIEW;
              } else if (fragment === _complex_navigator_complex_list_display_buttons_complex_list_display_buttons_component__WEBPACK_IMPORTED_MODULE_6__.LIST_VIEW) {
                _this2.DisplayType = _complex_navigator_complex_list_display_buttons_complex_list_display_buttons_component__WEBPACK_IMPORTED_MODULE_6__.LIST_VIEW;
              }
              _this2.route.queryParams.subscribe(function (queryParams) {
                _this2.query = queryParams['query'];
                _this2.spicesFilter = queryParams['species'] ? queryParams['species'].split('+') : [];
                _this2.bioRoleFilter = queryParams['bioRole'] ? queryParams['bioRole'].split('+') : [];
                _this2.interactorTypeFilter = queryParams['interactorType'] ? queryParams['interactorType'].split('+') : [];
                _this2.predictedFilter = queryParams['predicted'] ? queryParams['predicted'].split('+') : [];
                _this2.evidenceTypeFilter = queryParams['evidenceType'] ? queryParams['evidenceType'].split('+') : [];
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
            this.complexPortalService.findComplex(this.query, this.spicesFilter, this.bioRoleFilter, this.interactorTypeFilter, this.predictedFilter, this.evidenceTypeFilter, this.currentPageIndex, this.pageSize).subscribe(function (complexSearch) {
              _this3.complexSearch = complexSearch;
              _this3.processSearchResults();
              _this3.allInteractorsInComplexSearch = [];
              if (_this3.complexSearch.totalNumberOfResults !== 0) {
                _this3.lastPageIndex = Math.ceil(complexSearch.totalNumberOfResults / _this3.pageSize);
                for (var i = 0; i < complexSearch.elements.length; i++) {
                  var _iterator = _createForOfIteratorHelper(complexSearch.elements[i].interactors),
                    _step;
                  try {
                    var _loop = function _loop() {
                      var component = _step.value;
                      if (!_this3.allInteractorsInComplexSearch.some(function (interactor) {
                        return interactor.identifier === component.identifier;
                      })) {
                        _this3.allInteractorsInComplexSearch.push(component);
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
            queryParams['query'] = this.query;
            queryParams['page'] = this.currentPageIndex;
            if (this.spicesFilter !== undefined && this.spicesFilter.length !== 0) {
              queryParams['species'] = this.prepareFiltersForParams(this.spicesFilter);
            }
            if (this.bioRoleFilter !== undefined && this.bioRoleFilter.length !== 0) {
              queryParams['bioRole'] = this.prepareFiltersForParams(this.bioRoleFilter);
            }
            if (this.interactorTypeFilter !== undefined && this.interactorTypeFilter.length !== 0) {
              queryParams['interactorType'] = this.prepareFiltersForParams(this.interactorTypeFilter);
            }
            if (this.predictedFilter !== undefined && this.predictedFilter.length !== 0) {
              queryParams['predicted'] = this.prepareFiltersForParams(this.predictedFilter);
            }
            if (this.evidenceTypeFilter !== undefined && this.evidenceTypeFilter.length !== 0) {
              queryParams['evidenceType'] = this.prepareFiltersForParams(this.evidenceTypeFilter);
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
            return this.spicesFilter.length + this.interactorTypeFilter.length + this.bioRoleFilter.length + this.predictedFilter.length + this.evidenceTypeFilter.length;
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
            this.predictedFilter = [];
            this.evidenceTypeFilter = [];
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
          key: "onPredictedFilterChanged",
          value: function onPredictedFilterChanged(filter) {
            this.predictedFilter = filter;
            this.currentPageIndex = 1;
            this.reloadPage();
          }
        }, {
          key: "onEvidenceTypeFilterChanged",
          value: function onEvidenceTypeFilterChanged(filter) {
            this.evidenceTypeFilter = filter;
            this.currentPageIndex = 1;
            this.reloadPage();
          }
        }, {
          key: "currentPageIndex",
          get: function get() {
            if (this.DisplayType === _complex_navigator_complex_list_display_buttons_complex_list_display_buttons_component__WEBPACK_IMPORTED_MODULE_6__.COMPLEX_NAVIGATOR_VIEW) {
              return this._navigatorCurrentPage;
            } else {
              return this._listCurrentPage;
            }
          },
          set: function set(value) {
            if (this.DisplayType === _complex_navigator_complex_list_display_buttons_complex_list_display_buttons_component__WEBPACK_IMPORTED_MODULE_6__.COMPLEX_NAVIGATOR_VIEW) {
              this._navigatorCurrentPage = value;
            } else {
              this._listCurrentPage = value;
            }
          }
        }, {
          key: "lastPageIndex",
          get: function get() {
            if (this.DisplayType === _complex_navigator_complex_list_display_buttons_complex_list_display_buttons_component__WEBPACK_IMPORTED_MODULE_6__.COMPLEX_NAVIGATOR_VIEW) {
              return this._navigatorLastPageIndex;
            } else {
              return this._listLastPageIndex;
            }
          },
          set: function set(value) {
            if (this.DisplayType === _complex_navigator_complex_list_display_buttons_complex_list_display_buttons_component__WEBPACK_IMPORTED_MODULE_6__.COMPLEX_NAVIGATOR_VIEW) {
              this._navigatorLastPageIndex = value;
            } else {
              this._listLastPageIndex = value;
            }
          }
        }, {
          key: "pageSize",
          get: function get() {
            if (this.DisplayType === _complex_navigator_complex_list_display_buttons_complex_list_display_buttons_component__WEBPACK_IMPORTED_MODULE_6__.COMPLEX_NAVIGATOR_VIEW) {
              return this._navigatorPageSize;
            } else {
              return this._listPageSize;
            }
          }
        }, {
          key: "onDisplayTypeChange",
          value: function onDisplayTypeChange(displayType) {
            if (this.DisplayType !== displayType) {
              this.DisplayType = displayType;
              if (displayType === _complex_navigator_complex_list_display_buttons_complex_list_display_buttons_component__WEBPACK_IMPORTED_MODULE_6__.LIST_VIEW) {
                this.setListView();
              } else if (displayType === _complex_navigator_complex_list_display_buttons_complex_list_display_buttons_component__WEBPACK_IMPORTED_MODULE_6__.COMPLEX_NAVIGATOR_VIEW) {
                this.setComplexNavigatorView();
              }
            }
          }
        }, {
          key: "isDisplayComplexNavigatorView",
          value: function isDisplayComplexNavigatorView() {
            return this.DisplayType === _complex_navigator_complex_list_display_buttons_complex_list_display_buttons_component__WEBPACK_IMPORTED_MODULE_6__.COMPLEX_NAVIGATOR_VIEW;
          }
        }, {
          key: "setListView",
          value: function setListView() {
            this._toast = this.notificationService.complexNavigatorAnnouncement();
            this.reloadPage();
          }
        }, {
          key: "setComplexNavigatorView",
          value: function setComplexNavigatorView() {
            if (!!this._toast) {
              this.notificationService.closeAnnouncement(this._toast.toastId);
              this._toast = null;
            }
            this.reloadPage();
          }
        }, {
          key: "processSearchResults",
          value: function processSearchResults() {
            // No filters and only one result, then we redirect to complex details page
            // This allows users to enable filters to see even one result without redirecting them out from the results page,
            // but we ensure redirection of a new search has only one result.
            if (this.getFilterCount() === 0 && this.complexSearch.totalNumberOfResults === 1) {
              var complexId = this.complexSearch.elements[0].complexAC;
              if (!!complexId) {
                // For some reason this is needed so the navigate call works
                this.router.routeReuseStrategy.shouldReuseRoute = function () {
                  return false;
                };
                this.router.navigate(['/complex', complexId]);
              }
            } else if (!this.DisplayType) {
              // Currently the list view is the default, as we are just launching the navigator view
              // Later on we can change the default view to be the list or navigator view based on number of results
              if (this.complexSearch.totalNumberOfResults <= this._navigatorPageSize) {
                this.setComplexNavigatorView();
              } else {
                this.setListView();
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
          type: _shared_notification_service_notification_service__WEBPACK_IMPORTED_MODULE_5__.NotificationService
        }];
      };
      _ComplexResultsComponent = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'cp-complex-results',
        template: _Users_jmedina_IdeaProjects_ComplexPortal_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_complex_results_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_complex_results_component_css__WEBPACK_IMPORTED_MODULE_1__]
      })], _ComplexResultsComponent);

      /***/
    },

    /***/79555:
    /*!*******************************************************************!*\
      !*** ./src/app/complex/complex-results/complex-results.module.ts ***!
      \*******************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"ComplexResultsModule": function ComplexResultsModule() {
          return (/* binding */_ComplexResultsModule
          );
        }
        /* harmony export */
      });
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! @angular/core */2316);
      /* harmony import */
      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! @angular/common */54364);
      /* harmony import */
      var _complex_results_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./complex-results.component */50967);
      /* harmony import */
      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! @angular/router */71258);
      /* harmony import */
      var _complex_paginator_complex_paginator_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./complex-paginator/complex-paginator.component */80556);
      /* harmony import */
      var _complex_filter_complex_filter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./complex-filter/complex-filter.component */16778);
      /* harmony import */
      var _complex_list_complex_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./complex-list/complex-list.component */57991);
      /* harmony import */
      var _shared_loading_indicators_progress_spinner_progress_spinner_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ../../shared/loading-indicators/progress-spinner/progress-spinner.module */45103);
      /* harmony import */
      var ngx_markdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! ngx-markdown */36731);
      /* harmony import */
      var _complex_navigator_complex_navigator_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./complex-navigator/complex-navigator.module */60090);
      /* harmony import */
      var _complex_navigator_complex_navigator_rating_complex_navigator_rating_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./complex-navigator/complex-navigator-rating/complex-navigator-rating.component */88628);
      /* harmony import */
      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__( /*! @angular/material/tooltip */50298);
      /* harmony import */
      var _complex_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ../complex.module */26330);
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
      _ComplexResultsModule = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild([{
          path: '',
          component: _complex_results_component__WEBPACK_IMPORTED_MODULE_0__.ComplexResultsComponent
        }]), _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _shared_loading_indicators_progress_spinner_progress_spinner_module__WEBPACK_IMPORTED_MODULE_4__.ProgressSpinnerModule, ngx_markdown__WEBPACK_IMPORTED_MODULE_11__.MarkdownModule, _complex_navigator_complex_navigator_module__WEBPACK_IMPORTED_MODULE_5__.ComplexNavigatorModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__.MatTooltipModule, _complex_module__WEBPACK_IMPORTED_MODULE_7__.ComplexModule],
        exports: [],
        declarations: [_complex_results_component__WEBPACK_IMPORTED_MODULE_0__.ComplexResultsComponent, _complex_list_complex_list_component__WEBPACK_IMPORTED_MODULE_3__.ComplexListComponent, _complex_filter_complex_filter_component__WEBPACK_IMPORTED_MODULE_2__.ComplexFilterComponent, _complex_paginator_complex_paginator_component__WEBPACK_IMPORTED_MODULE_1__.ComplexPaginatorComponent, _complex_navigator_complex_navigator_rating_complex_navigator_rating_component__WEBPACK_IMPORTED_MODULE_6__.ComplexNavigatorRatingComponent]
      })], _ComplexResultsModule);

      /***/
    },

    /***/22830:
    /*!*****************************************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/complex/complex-results/complex-filter/complex-filter.component.html ***!
      \*****************************************************************************************************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */
      __webpack_exports__["default"] = "<div class=\"filters row\">\n  <div class=\"columns medium-6\"><h3>Filters</h3></div>\n  <div class=\"columns medium-6\">\n    <div *ngIf=\"anyFiltersSelected()\">\n      <a class=\"button\" (click)=\"resetAllFilters()\"><i class=\"icon icon-common\" data-icon=\"\"></i> Reset filters</a>\n    </div>\n  </div>\n  <div class=\"columns medium-12\">\n    <div *ngIf=\"facets.predicted_complex_f\">\n      <b>Complex Type</b>\n      <ul class=\"no-bullet\">\n        <li *ngFor=\"let facet of facets.predicted_complex_f\" [class.predicted]=\"facet.name === 'true'\">\n          <label>\n            <input type=\"checkbox\" #filter value=\"{{facet.name}}\"\n                   (change)=\"changePredictedFilter(filter.value, filter.checked)\"\n                   [checked]=\"isSelected(facet.name, predictedFilter)\">\n            <span class=\"tag\">{{ formatPredictedFacetValue(facet.name) }}</span><span class=\"count\">{{ facet.count }}</span>\n          </label>\n        </li>\n      </ul>\n    </div>\n\n    <div *ngIf=\"facets.species_f\">\n      <b>Species</b>\n      <ul class=\"no-bullet\">\n        <li *ngFor=\"let facet of facets.species_f\">\n          <label [matTooltip]=\"facet.name\">\n            <input type=\"checkbox\" #filter value=\"{{facet.name}}\"\n                   (change)=\"changeSpeciesFilter(filter.value, filter.checked)\"\n                   [checked]=\"isSelected(facet.name, spicesFilter)\">\n\n            <span>\n              <i *ngIf=\"facetOrganismIcon(facet.name).startsWith('icon'); else img\"\n                 [ngClass]=\"facetOrganismIcon(facet.name)\" style=\"font-size: large;\"></i>\n            <ng-template #img>\n              <img [src]=\"facetOrganismIcon(facet.name)\" alt=\"\" width=\"18px\" height=\"18px\"/>\n            </ng-template>\n            </span>\n\n            {{ facet.name | species:true }} <span class=\"count\">{{ facet.count }}</span>\n          </label>\n        </li>\n      </ul>\n    </div>\n\n    <div *ngIf=\"facets.pbiorole_f\">\n      <b>Biological Role</b>\n      <ul class=\"no-bullet\">\n        <li *ngFor=\"let facet of facets.pbiorole_f\">\n          <label>\n            <input type=\"checkbox\" #filter value=\"{{facet.name}}\"\n                   (change)=\"changeBiologicalRoleFilter(filter.value, filter.checked)\"\n                   [checked]=\"isSelected(facet.name, bioRoleFilter)\">\n\n            {{ facet.name }} <span class=\"count\">{{ facet.count }}</span>\n          </label>\n        </li>\n      </ul>\n    </div>\n\n    <div *ngIf=\"facets.ptype_f\">\n      <b>Component Type</b>\n      <ul class=\"no-bullet\">\n        <li *ngFor=\"let facet of facets.ptype_f\">\n          <label>\n            <input type=\"checkbox\" #filter value=\"{{facet.name}}\"\n                   (change)=\"changeInteractorTypeFilter(filter.value, filter.checked)\"\n                   [checked]=\"isSelected(facet.name, interactorTypeFilter)\">\n\n            <span >\n              <i [ngClass]=\"facetTypeIcon(facet.name)\" style=\"font-size: large;\"></i>\n            </span>\n            {{ facet.name }} <span class=\"count\">{{ facet.count }}</span>\n          </label>\n        </li>\n      </ul>\n    </div>\n\n    <div *ngIf=\"facets.evidence_type_f\">\n      <b>Evidence Type</b>\n      <ul class=\"no-bullet\">\n        <li *ngFor=\"let facet of facets.evidence_type_f\">\n          <label>\n            <input type=\"checkbox\" #filter value=\"{{facet.name}}\"\n                   (change)=\"changeEvidenceTypeFilter(filter.value, filter.checked)\"\n                   [checked]=\"isSelected(facet.name, evidenceTypeFilter)\">\n\n            {{ formatEvidenceTypeFacetValue(facet.name) }} <span class=\"count\">{{ facet.count }}</span>\n          </label>\n        </li>\n      </ul>\n    </div>\n\n    <div *ngIf=\"!facets.species_f && !facets.pbiorole_f && !facets.ptype_f && !facets.predicted_complex_f && !facets.evidence_type_f\">\n      <h6>No filters available</h6>\n    </div>\n  </div>\n</div>\n";

      /***/
    },

    /***/3122:
    /*!*************************************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/complex/complex-results/complex-list/complex-list.component.html ***!
      \*************************************************************************************************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */
      __webpack_exports__["default"] = "<ul class=\"no-bullet\">\n  <li *ngFor=\"let complex of complexSearch.elements\" [class.predicted]=\"complex.predictedComplex\">\n    <div class=\"container\">\n      <div class=\"basketButtonContainer\"\n           [matTooltip]=\"isInBasket(complex) ? 'Remove from basket' : 'Add to basket'\">\n        <a class=\"button\" (click)=\"toggleBasket(complex)\">\n          <i class=\"icon icon-common\" [attr.data-icon]=\"isInBasket(complex) ? '':''\"></i>\n        </a>\n      </div>\n      <div class=\"complexesAndDescription\">\n        <h3>\n          <a [routerLink]=\"['/complex', complex.complexAC]\">{{ complex.complexName }}</a></h3>\n        <div class=\"description\" style=\"background-color: white\">\n          <b>Complex AC:</b> {{ complex.complexAC }} · <b>Organism:</b> {{ complex.organismName | species }}\n          · <b class=\"tag\">{{ !complex.predictedComplex ? 'Curated' : 'Predicted'}} complex</b>\n          <br>\n          <ng-container *ngIf=\"complex.description\">\n            <b>Description:</b>\n            <div *ngIf=\"complex.description.length <= 250\">\n              {{ complex.description }}<a [routerLink]=\"['/complex', complex.complexAC]\">...</a>\n            </div>\n            <div *ngIf=\"complex.description.length > 250\">\n              {{ complex.description.substr(0, 250) }}<a [routerLink]=\"['/complex', complex.complexAC]\">...</a>\n            </div>\n          </ng-container>\n        </div>\n      </div>\n    </div>\n  </li>\n</ul>\n";

      /***/
    },

    /***/45831:
    /*!*******************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/complex/complex-results/complex-navigator/complex-navigator-rating/complex-navigator-rating.component.html ***!
      \*******************************************************************************************************************************************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */
      __webpack_exports__["default"] = "<div class=\"ratingComponent\" *ngIf=\"!hidden\">\n  <div class=\"buttonContainer\">\n    <button class=\"close\" id=\"closePopup\" (click)=\"hidden = true\">&times;</button>\n  </div>\n  <div class=\"text\">\n    <p>Tell us about your experience with the Complex Navigator!</p>\n  </div>\n  <div class=\"ratingComponentStars\">\n    <span class=\"star\" [ngClass]=\"{'selected': selectedRating >= 1}\" (click)=\"selectRating(1)\"> &#9733; </span>\n    <span class=\"star\" [ngClass]=\"{'selected': selectedRating >= 2}\" (click)=\"selectRating(2)\"> &#9733; </span>\n    <span class=\"star\" [ngClass]=\"{'selected': selectedRating >= 3}\" (click)=\"selectRating(3)\"> &#9733; </span>\n    <span class=\"star\" [ngClass]=\"{'selected': selectedRating >= 4}\" (click)=\"selectRating(4)\"> &#9733; </span>\n    <span class=\"star\" [ngClass]=\"{'selected': selectedRating >= 5}\" (click)=\"selectRating(5)\"> &#9733; </span>\n  </div>\n</div>\n";

      /***/
    },

    /***/65123:
    /*!***********************************************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/complex/complex-results/complex-paginator/complex-paginator.component.html ***!
      \***********************************************************************************************************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */
      __webpack_exports__["default"] = "<div>\n  <h5 class=\"text-center\">{{ currentPageIndex }} of {{ lastPageIndex }}</h5>\n  <ul class=\"pagination text-center\" role=\"navigation\" aria-label=\"Pagination\">\n    <li class=\"arrow unavailable\" *ngIf=\"currentPageIndex != 1\" aria-disabled=\"true\"><a\n      (click)=\"getFirstPage()\">&Lang; First</a></li>\n    <li class=\"arrow unavailable\" *ngIf=\"currentPageIndex != 1\" aria-disabled=\"true\"><a\n      (click)=\"getPreviousPage()\">&lang; Previous</a></li>\n    <ng-container *ngFor=\"let index of pagination\">\n      <li *ngIf=\"index[1] == 'true'\" class=\"current\"><span class=\"show-for-sr\">You're on page</span>{{ index[0] }}</li>\n      <li *ngIf=\"index[1] == 'false'\"><a (click)=\"getPage(index[0])\">{{ index[0] }}</a></li>\n    </ng-container>\n    <li class=\"arrow\" *ngIf=\"currentPageIndex != lastPageIndex\"><a (click)=\"getNextPage()\">Next &rang;</a></li>\n    <li class=\"arrow\" *ngIf=\"currentPageIndex != lastPageIndex\"><a (click)=\"getLastPage()\">Last &Rang;</a></li>\n  </ul>\n</div>\n";

      /***/
    },

    /***/13182:
    /*!***************************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/complex/complex-results/complex-results.component.html ***!
      \***************************************************************************************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */
      __webpack_exports__["default"] = "<div class=\"margin-top-large margin-bottom-large row expanded\">\n  <ng-container *ngIf=\"complexSearch;else loadingSpinner\">\n    <div class=\"columns medium-12\" *ngIf=\"complexSearch.totalNumberOfResults !== 0\">\n      <h2 class=\"padding-left-large\">Total number of results: {{ complexSearch.totalNumberOfResults }} </h2>\n      <div class=\"row expanded\">\n        <div class=\"columns medium-12\">\n          <cp-complex-navigator-rating *ngIf=\"isDisplayComplexNavigatorView()\">\n          </cp-complex-navigator-rating>\n\n        </div>\n\n        <div class=\"columns medium-12 large-2 no-padding\">\n          <cp-complex-filter *ngIf=\"spicesFilter && bioRoleFilter && interactorTypeFilter && predictedFilter && evidenceTypeFilter\"\n                             [spicesFilter]=\"spicesFilter\"\n                             [bioRoleFilter]=\"bioRoleFilter\"\n                             [interactorTypeFilter]=\"interactorTypeFilter\"\n                             [predictedFilter]=\"predictedFilter\"\n                             [evidenceTypeFilter]=\"evidenceTypeFilter\"\n                             [facets]=\"complexSearch.facets\"\n                             (onResetAllFilters)=\"onResetAllFilters()\"\n                             (onSpicesFilterChanged)=\"onSpicesFilterChanged($event)\"\n                             (onBiologicalRoleFilterChanged)=\"onBiologicalRoleFilterChanged($event)\"\n                             (onInteractorTypeFilterChanged)=\"onInteractorTypeFilterChanged($event)\"\n                             (onPredictedFilterChanged)=\"onPredictedFilterChanged($event)\"\n                             (onEvidenceTypeFilterChanged)=\"onEvidenceTypeFilterChanged($event)\">\n          </cp-complex-filter>\n        </div>\n        <div class=\"columns medium-12 large-10\">\n          <div class=\"paginatorAndDisplay\">\n            <cp-complex-list-display-buttons\n              [displayType]=\"DisplayType\"\n              (displayTypeChange)=\"onDisplayTypeChange($event)\">\n            </cp-complex-list-display-buttons>\n            <cp-complex-paginator class=\"paginator\"\n                                  [currentPageIndex]=\"currentPageIndex\"\n                                  [lastPageIndex]=\"lastPageIndex\"\n                                  (onPageChange)=\"onPageChange($event)\">\n            </cp-complex-paginator>\n          </div>\n          <div class=\"listOfResults\">\n            <cp-complex-list *ngIf=\"!isDisplayComplexNavigatorView()\"\n                             [complexSearch]=\"complexSearch\">\n            </cp-complex-list>\n          </div>\n          <div class=\"ComplexNavigator\" *ngIf=\"isDisplayComplexNavigatorView()\"\n               [ngClass]=\"complexSearch.totalNumberOfResults <=6 ? 'smallCN' : 'largeCN'\">\n            <cp-complex-navigator class=\"Complex-navigator\"\n                                  [complexSearch]=\"complexSearch\"\n                                  [interactors]=\"allInteractorsInComplexSearch\"\n                                  [canAddComplexesToBasket]=\"true\"\n                                  [canRemoveComplexesFromBasket]=\"false\">\n            </cp-complex-navigator>\n          </div>\n          <cp-complex-paginator class=\"paginator\"\n                                [currentPageIndex]=\"currentPageIndex\"\n                                [lastPageIndex]=\"lastPageIndex\"\n                                (onPageChange)=\"onPageChange($event)\"></cp-complex-paginator>\n        </div>\n      </div>\n    </div>\n\n\n    <div class=\"columns medium-12 callout alert\" *ngIf=\"complexSearch.totalNumberOfResults === 0\">\n      <h2>No Complex Portal results found</h2>\n      <h3>We're sorry but we couldn't find anything that matched your search for: <b>{{ query }}</b></h3>\n      <h4>Please consider refining your terms:</h4>\n      <ul>\n        <li>Make sure all words are spelled correctly</li>\n        <li>Try different keywords</li>\n        <li>Be more precise: use gene or protein IDs, e.g. Ndc80 or Q04571</li>\n        <li>Remove quotes around phrases to search for each word individually. bike shed will often show more results\n          than\n          \"bike shed\"\n        </li>\n      </ul>\n    </div>\n  </ng-container>\n  <ng-template #loadingSpinner>\n    <cp-progress-spinner [query]=\"query\"></cp-progress-spinner>\n  </ng-template>\n</div>\n";

      /***/
    },

    /***/87165:
    /*!*************************************************************************************!*\
      !*** ./src/app/complex/complex-results/complex-filter/complex-filter.component.css ***!
      \*************************************************************************************/
    /***/
    function _(module) {
      module.exports = "input {\n  margin: 0;\n  vertical-align: middle;\n}\n\n.icon, img {\n  vertical-align: middle;\n  margin: 0 2px;\n}\n\nlabel {\n  line-height: 1.8;\n  vertical-align: middle;\n}\n\n.count {\n  padding: 0 4px;\n  border-radius: 50px;\n  border: 1px solid black;\n  font-size: small;\n}\n\n.tag ~ .count {\n  margin-left: 6px;\n}\n\n.predicted .count {\n  border: 1px solid black;\n}\n\ninput:checked ~ .count {\n  background: var(--primary);\n  color: var(--on-primary);\n  font-weight: bold;\n  border: 1px solid var(--primary);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBsZXgtZmlsdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFTO0VBQ1Qsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBR0E7RUFDRSwwQkFBMEI7RUFDMUIsd0JBQXdCO0VBQ3hCLGlCQUFpQjtFQUNqQixnQ0FBZ0M7QUFDbEMiLCJmaWxlIjoiY29tcGxleC1maWx0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0IHtcbiAgbWFyZ2luOiAwO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uaWNvbiwgaW1nIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWFyZ2luOiAwIDJweDtcbn1cblxubGFiZWwge1xuICBsaW5lLWhlaWdodDogMS44O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uY291bnQge1xuICBwYWRkaW5nOiAwIDRweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG59XG5cbi50YWcgfiAuY291bnQge1xuICBtYXJnaW4tbGVmdDogNnB4O1xufVxuXG4ucHJlZGljdGVkIC5jb3VudCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG5cbmlucHV0OmNoZWNrZWQgfiAuY291bnQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcbiAgY29sb3I6IHZhcigtLW9uLXByaW1hcnkpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeSk7XG59XG4iXX0= */";

      /***/
    },

    /***/17554:
    /*!*********************************************************************************!*\
      !*** ./src/app/complex/complex-results/complex-list/complex-list.component.css ***!
      \*********************************************************************************/
    /***/
    function _(module) {
      module.exports = ".description {\n  width: 90%;\n  text-align: justify;\n}\n\n.container {\n  display: inline-flex;\n  width: -webkit-fill-available;\n}\n\n.complexesAndDescription {\n  padding: 10px;\n  width: 95%;\n}\n\n.basketButtonContainer {\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin-top: 10px;\n}\n\n.basket-icons {\n  margin-left: 5px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBsZXgtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsVUFBVTtBQUNaOztBQUVBO0VBQ0UsdUJBQWtCO0VBQWxCLGtCQUFrQjtFQUNsQix3QkFBbUI7RUFBbkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJjb21wbGV4LWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXNjcmlwdGlvbiB7XG4gIHdpZHRoOiA5MCU7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG59XG5cbi5jb21wbGV4ZXNBbmREZXNjcmlwdGlvbiB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHdpZHRoOiA5NSU7XG59XG5cbi5iYXNrZXRCdXR0b25Db250YWluZXIge1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5iYXNrZXQtaWNvbnMge1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4iXX0= */";

      /***/
    },

    /***/2405:
    /*!***************************************************************************************************************************!*\
      !*** ./src/app/complex/complex-results/complex-navigator/complex-navigator-rating/complex-navigator-rating.component.css ***!
      \***************************************************************************************************************************/
    /***/
    function _(module) {
      module.exports = ".star {\n  font-size: 1.5em;\n  cursor: pointer;\n  color: white;\n}\n\n.star.selected {\n  color: gold;\n}\n\n.ratingComponent {\n  background-color: var(--primary);\n  padding: 5px;\n  width: 350px;\n  text-align: center;\n  position: fixed;\n  z-index: 5;\n  top: 54vh;\n  right: -350px;\n  border: 1px solid white;\n  visibility: hidden;\n  animation: ratingComponentMove 1s forwards 7s;\n}\n\n.ratingComponent input {\n  background-color: white;\n  color: var(--primary);\n}\n\n.text {\n  display: -webkit-box;\n  color: white;\n  width: 96%;\n  text-align: -webkit-center;\n  padding-left: 10px;\n  margin-bottom: -15px;\n}\n\n@keyframes ratingComponentMove {\n  from {\n    right: -10vw;\n    visibility: visible;\n  }\n  to {\n    right: 4vw;\n    visibility: visible;\n  }\n}\n\n.buttonContainer {\n  width: 100%;\n  height: 1ch;\n  text-align: end;\n  padding-right: 5px;\n}\n\n.close {\n  color: white;\n}\n\n.ratingComponentStars {\n  padding-bottom: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBsZXgtbmF2aWdhdG9yLXJhdGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFVBQVU7RUFDVixTQUFTO0VBQ1QsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsNkNBQTZDO0FBQy9DOztBQUdBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osVUFBVTtFQUNWLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0lBQ1osbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsbUJBQW1CO0VBQ3JCO0FBQ0Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckIiLCJmaWxlIjoiY29tcGxleC1uYXZpZ2F0b3ItcmF0aW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RhciB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc3Rhci5zZWxlY3RlZCB7XG4gIGNvbG9yOiBnb2xkO1xufVxuXG4ucmF0aW5nQ29tcG9uZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIHBhZGRpbmc6IDVweDtcbiAgd2lkdGg6IDM1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogNTtcbiAgdG9wOiA1NHZoO1xuICByaWdodDogLTM1MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBhbmltYXRpb246IHJhdGluZ0NvbXBvbmVudE1vdmUgMXMgZm9yd2FyZHMgN3M7XG59XG5cblxuLnJhdGluZ0NvbXBvbmVudCBpbnB1dCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG59XG5cbi50ZXh0IHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDk2JTtcbiAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogLTE1cHg7XG59XG5cbkBrZXlmcmFtZXMgcmF0aW5nQ29tcG9uZW50TW92ZSB7XG4gIGZyb20ge1xuICAgIHJpZ2h0OiAtMTB2dztcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG4gIHRvIHtcbiAgICByaWdodDogNHZ3O1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIH1cbn1cblxuLmJ1dHRvbkNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDFjaDtcbiAgdGV4dC1hbGlnbjogZW5kO1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cbi5jbG9zZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnJhdGluZ0NvbXBvbmVudFN0YXJzIHtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cbiJdfQ== */";

      /***/
    },

    /***/71945:
    /*!*******************************************************************************************!*\
      !*** ./src/app/complex/complex-results/complex-paginator/complex-paginator.component.css ***!
      \*******************************************************************************************/
    /***/
    function _(module) {
      module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wbGV4LXBhZ2luYXRvci5jb21wb25lbnQuY3NzIn0= */";

      /***/
    },

    /***/23654:
    /*!***********************************************************************!*\
      !*** ./src/app/complex/complex-results/complex-results.component.css ***!
      \***********************************************************************/
    /***/
    function _(module) {
      module.exports = ".listOfResults {\n  width: 70%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBsZXgtcmVzdWx0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEIiLCJmaWxlIjoiY29tcGxleC1yZXN1bHRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdE9mUmVzdWx0cyB7XG4gIHdpZHRoOiA3MCU7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4iXX0= */";

      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_complex_complex-results_complex-results_module_ts-es5.js.map