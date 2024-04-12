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
      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/core */2316);
      /* harmony import */
      var _shared_google_analytics_service_analytics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../../shared/google-analytics/service/analytics.service */96242);
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
          this.onSpicesFilterChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
          this.onBiologicalRoleFilterChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
          this.onInteractorTypeFilterChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
          this.onResetAllFilters = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
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
          key: "interactorTypeIcon",
          value: function interactorTypeIcon(facet) {
            switch (facet.name) {
              case 'small molecule':
                return 'icon icon-conceptual icon-chemical';
              case 'protein':
              case 'peptide':
                return 'icon icon-conceptual icon-structures-3d';
              case 'stable complex':
                return 'icon icon-conceptual icon-systems';
              case 'molecule set':
                return 'icon icon-generic icon-math';
              case 'single stranded deoxyribonucleic acid':
              case 'double stranded deoxyribonucleic acid':
              case 'small nuclear rna':
              case 'small nucleolar rna':
              case 'ribosomal rna':
              case 'messenger rna':
              case 'transfer rna':
              case 'signal recognition particle rna':
              case 'ribonucleic acid':
              case 'nucleic acid':
              case 'long non-coding ribonucleic acid':
                return 'icon icon-conceptual icon-dna';
            }
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
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
        }],
        onBiologicalRoleFilterChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
        }],
        onInteractorTypeFilterChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
        }],
        onResetAllFilters: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
        }],
        facets: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }],
        spicesFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }],
        bioRoleFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }],
        interactorTypeFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }]
      };
      _ComplexFilterComponent = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
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
    /***/76549: (
    /*!******************************************************************************************!*\
      !*** ./src/app/complex/complex-results/complex-navigator/complex-navigator.component.ts ***!
      \******************************************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"ComplexNavigatorComponent": function ComplexNavigatorComponent() {
          return /* binding */_ComplexNavigatorComponent;
        }
        /* harmony export */
      });
      /* harmony import */
      var _Users_susiehuget_Documents_GitHub_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_complex_navigator_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./complex-navigator.component.html */81779);
      /* harmony import */
      var _complex_navigator_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./complex-navigator.component.css */14332);
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/core */2316);
      /* harmony import */
      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */71258);
      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      var _ComplexNavigatorComponent = /*#__PURE__*/function () {
        function ComplexNavigatorComponent(router) {
          _classCallCheck(this, ComplexNavigatorComponent);
          this.router = router;
        }
        _createClass(ComplexNavigatorComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "interactors",
          get: function get() {
            return this._interactors;
          },
          set: function set(value) {
            this._interactors = value;
          }
        }, {
          key: "interactorsSorting",
          get: function get() {
            return this._interactorsSorting;
          },
          set: function set(value) {
            this._interactorsSorting = value;
          }
        }]);
        return ComplexNavigatorComponent;
      }();
      _ComplexNavigatorComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router
        }];
      };
      _ComplexNavigatorComponent.propDecorators = {
        complexSearch: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }],
        interactors: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }],
        interactorsSorting: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }]
      };
      _ComplexNavigatorComponent = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'cp-complex-navigator',
        template: _Users_susiehuget_Documents_GitHub_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_complex_navigator_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_complex_navigator_component_css__WEBPACK_IMPORTED_MODULE_1__]
      })], _ComplexNavigatorComponent);

      /***/
    }),
    /***/40969: (
    /*!******************************************************************************************************************!*\
      !*** ./src/app/complex/complex-results/complex-navigator/table-structure/table-header/table-header.component.ts ***!
      \******************************************************************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"TableHeaderComponent": function TableHeaderComponent() {
          return /* binding */_TableHeaderComponent;
        }
        /* harmony export */
      });
      /* harmony import */
      var _Users_susiehuget_Documents_GitHub_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_table_header_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./table-header.component.html */92341);
      /* harmony import */
      var _table_header_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./table-header.component.css */32149);
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/core */2316);
      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      var _TableHeaderComponent = /*#__PURE__*/function () {
        function TableHeaderComponent() {
          _classCallCheck(this, TableHeaderComponent);
        }
        _createClass(TableHeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.classifyComplexesSize();
            this.classifyComplexesSimilarities(this.complexSearch);
          }
        }, {
          key: "classifyComplexesSize",
          value: function classifyComplexesSize() {
            var searchResult = this.complexSearch.elements;
            var complexesWithSimilarities = new Map();
            var biggestComplex = [searchResult[0], 0];
            // check which complex is the biggest
            var _iterator = _createForOfIteratorHelper(searchResult),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var complex = _step.value;
                var totalLength = complex.interactors.length;
                var _iterator3 = _createForOfIteratorHelper(complex.interactors),
                  _step3;
                try {
                  var _loop = function _loop() {
                    var complexInteractorChecked = _step3.value;
                    if (complexInteractorChecked.interactorType === 'stable complex') {
                      // tslint:disable-next-line:no-shadowed-variable
                      var subComplex = searchResult.find(function (complex) {
                        return complex.complexAC === complexInteractorChecked.identifier;
                      });
                      totalLength += subComplex.interactors.length;
                    }
                  };
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                    _loop();
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }
                if (totalLength > biggestComplex[1]) {
                  biggestComplex[0] = complex;
                  biggestComplex[1] = totalLength;
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
            var bigComplex = biggestComplex[0]; // access to the complex
            // compare the other complexes with the biggest
            var _iterator2 = _createForOfIteratorHelper(searchResult),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var comparedComplex = _step2.value;
                var similarities = 0;
                var _iterator4 = _createForOfIteratorHelper(bigComplex.interactors),
                  _step4;
                try {
                  var _loop2 = function _loop2() {
                    var biggestComplexInteractor = _step4.value;
                    var _iterator5 = _createForOfIteratorHelper(comparedComplex.interactors),
                      _step5;
                    try {
                      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                        var _complexInteractor = _step5.value;
                        if (biggestComplexInteractor.identifier === _complexInteractor.identifier) {
                          similarities++;
                        }
                      }
                    } catch (err) {
                      _iterator5.e(err);
                    } finally {
                      _iterator5.f();
                    }
                    if (biggestComplexInteractor.interactorType === 'stable complex') {
                      // tslint:disable-next-line:max-line-length
                      var subComplex = searchResult.find(function (complex) {
                        return complex.complexAC === biggestComplexInteractor.identifier;
                      });
                      if (comparedComplex.complexAC === bigComplex.complexAC) {
                        similarities += subComplex.interactors.length;
                      }
                      var _iterator6 = _createForOfIteratorHelper(subComplex.interactors),
                        _step6;
                      try {
                        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                          var subComponent = _step6.value;
                          var _iterator7 = _createForOfIteratorHelper(comparedComplex.interactors),
                            _step7;
                          try {
                            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                              var complexInteractor = _step7.value;
                              if (subComponent.identifier === complexInteractor.identifier) {
                                similarities++;
                              }
                            }
                          } catch (err) {
                            _iterator7.e(err);
                          } finally {
                            _iterator7.f();
                          }
                        }
                      } catch (err) {
                        _iterator6.e(err);
                      } finally {
                        _iterator6.f();
                      }
                    }
                  };
                  for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                    _loop2();
                  }
                } catch (err) {
                  _iterator4.e(err);
                } finally {
                  _iterator4.f();
                }
                complexesWithSimilarities.set(comparedComplex, similarities);
              }
              // sort complexes depending on their similarities with the biggest
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
            this.complexSearch.elements.sort(function (a, b) {
              return complexesWithSimilarities.get(b) - complexesWithSimilarities.get(a);
            });
          }
        }, {
          key: "calculateSimilarity",
          value: function calculateSimilarity(complex1, complex2) {
            var _this = this;
            var similarities = 0;
            var _iterator8 = _createForOfIteratorHelper(complex1.interactors),
              _step8;
            try {
              var _loop3 = function _loop3() {
                var complex1Interactor = _step8.value;
                var _iterator9 = _createForOfIteratorHelper(complex2.interactors),
                  _step9;
                try {
                  for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                    var complex2Interactor = _step9.value;
                    if (complex1Interactor.identifier === complex2Interactor.identifier) {
                      similarities++;
                    }
                  }
                } catch (err) {
                  _iterator9.e(err);
                } finally {
                  _iterator9.f();
                }
                if (complex1Interactor.interactorType === 'stable complex') {
                  // tslint:disable-next-line:max-line-length
                  var subComplex = _this.complexSearch.elements.find(function (complex) {
                    return complex.complexAC === complex1Interactor.identifier;
                  });
                  if (complex2.complexAC === complex1.complexAC) {
                    similarities += subComplex.interactors.length;
                  }
                  var _iterator10 = _createForOfIteratorHelper(subComplex.interactors),
                    _step10;
                  try {
                    for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                      var subComponent = _step10.value;
                      var _iterator11 = _createForOfIteratorHelper(complex2.interactors),
                        _step11;
                      try {
                        for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                          var complexInteractor = _step11.value;
                          if (subComponent.identifier === complexInteractor.identifier) {
                            similarities++;
                          }
                        }
                      } catch (err) {
                        _iterator11.e(err);
                      } finally {
                        _iterator11.f();
                      }
                    }
                  } catch (err) {
                    _iterator10.e(err);
                  } finally {
                    _iterator10.f();
                  }
                }
              };
              for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                _loop3();
              }
            } catch (err) {
              _iterator8.e(err);
            } finally {
              _iterator8.f();
            }
            return similarities;
          }
        }, {
          key: "classifyComplexesSimilarities",
          value: function classifyComplexesSimilarities(complexSearch) {
            var _this2 = this;
            var classifiedList = [];
            complexSearch.elements.forEach(function (complex) {
              var found = false;
              classifiedList.forEach(function (classification) {
                classification.forEach(function (classifiedComplex, index) {
                  var similarity = _this2.calculateSimilarity(complex, classifiedComplex);
                  if (similarity >= 1) {
                    found = true;
                    classification.splice(index + 1, 0, complex);
                  }
                });
              });
              if (!found) {
                // this list is multidimensional (1 list per complex)
                classifiedList.push([complex]);
              }
            });
            // make the array 1D
            var listOfComplex = classifiedList.reduce(function (acc, val) {
              return acc.concat(val);
            }, []);
            // The list which was multidimensional before has duplicates
            var unique = [];
            listOfComplex.forEach(function (element) {
              if (!unique.includes(element)) {
                unique.push(element);
              }
            });
            // sorting by similarities
            this.complexSearch.elements.sort(function (a, b) {
              var indexA = unique.indexOf(a);
              var indexB = unique.indexOf(b);
              if (indexA !== -1 && indexB !== -1) {
                return indexA - indexB; // Sort in ascending order based on the index
              } else if (indexA !== -1) {
                return -1; // Put element a before element b
              } else if (indexB !== -1) {
                return 1; // Put element b before element a
              } else {
                return 0; // Leave the order unchanged if both elements are not found in unique list
              }
            });
          }
        }]);
        return TableHeaderComponent;
      }();
      _TableHeaderComponent.ctorParameters = function () {
        return [];
      };
      _TableHeaderComponent.propDecorators = {
        complexSearch: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        interactorsTable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }]
      };
      _TableHeaderComponent = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'cp-table-header',
        template: _Users_susiehuget_Documents_GitHub_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_table_header_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_table_header_component_css__WEBPACK_IMPORTED_MODULE_1__]
      })], _TableHeaderComponent);

      /***/
    }),
    /***/48774: (
    /*!****************************************************************************************************************************************!*\
      !*** ./src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-interactor-column.component.ts ***!
      \****************************************************************************************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"TableInteractorColumnComponent": function TableInteractorColumnComponent() {
          return /* binding */_TableInteractorColumnComponent;
        }
        /* harmony export */
      });
      /* harmony import */
      var _Users_susiehuget_Documents_GitHub_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_table_interactor_column_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./table-interactor-column.component.html */77194);
      /* harmony import */
      var _table_interactor_column_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./table-interactor-column.component.css */88066);
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! @angular/core */2316);
      /* harmony import */
      var _shared_model_complex_results_complex_component_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../../../shared/model/complex-results/complex-component.model */76572);
      /* harmony import */
      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! rxjs */81134);
      /* harmony import */
      var _shared_service_complex_portal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../../../../shared/service/complex-portal.service */20658);
      /* harmony import */
      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! rxjs/operators */33927);
      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      var EnrichedInteractor = /*#__PURE__*/_createClass(function EnrichedInteractor() {
        _classCallCheck(this, EnrichedInteractor);
      });
      var EnrichedComplex = /*#__PURE__*/_createClass(function EnrichedComplex() {
        _classCallCheck(this, EnrichedComplex);
      });
      var BinaryComponentList = [];
      var _TableInteractorColumnComponent = /*#__PURE__*/function () {
        function TableInteractorColumnComponent(complexPortalService) {
          _classCallCheck(this, TableInteractorColumnComponent);
          this.complexPortalService = complexPortalService;
        }
        _createClass(TableInteractorColumnComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "enrichedInteractors",
          get: function get() {
            return this._enrichedInteractors;
          }
        }, {
          key: "enrichedComplexes",
          get: function get() {
            return this._enrichedComplexes;
          }
        }, {
          key: "interactorsSorting",
          get: function get() {
            return this._interactorsSorting;
          },
          set: function set(value) {
            this._interactorsSorting = value;
          }
        }, {
          key: "interactors",
          set: function set(value) {
            var _this3 = this;
            this._enrichedInteractors = [];
            var _iterator12 = _createForOfIteratorHelper(value),
              _step12;
            try {
              var _loop4 = function _loop4() {
                var interactor = _step12.value;
                var isSubComplex = interactor.interactorType === 'stable complex';
                var newEnrichedInteractor = {
                  interactor: interactor,
                  hidden: false,
                  isSubComplex: isSubComplex,
                  expanded: false,
                  subComponents: null,
                  partOfComplex: [],
                  timesAppearing: 0,
                  organismName: ''
                };
                if (isSubComplex) {
                  _this3.loadSubInteractors(newEnrichedInteractor).subscribe(function (subComponents) {
                    return newEnrichedInteractor.subComponents = subComponents;
                  });
                }
                _this3._enrichedInteractors.push(newEnrichedInteractor);
              };
              for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                _loop4();
              }
            } catch (err) {
              _iterator12.e(err);
            } finally {
              _iterator12.f();
            }
            this.interactorOrganism();
            //////////// CLASSIFICATION BEFORE CALCULATIONS
            this.classificationChosen();
            this.calculateAllStartAndEndIndexes();
          }
        }, {
          key: "findInteractorInComplex",
          value: function findInteractorInComplex(complex, componentId) {
            return complex.interactors.find(function (component) {
              return component.identifier === componentId;
            });
          }
        }, {
          key: "findInteractorsInSubComplex",
          value: function findInteractorsInSubComplex(complex, interactorId) {
            return this._enrichedInteractors
            // filter subcomplexes
            .filter(function (interactor) {
              return interactor.isSubComplex;
            })
            // filter subcomplexes included in complex
            .filter(function (interactor) {
              return complex.interactors.some(function (component) {
                return component.identifier === interactor.interactor.identifier;
              });
            })
            // filter subcomplexes that match the componentId
            .filter(function (interactor) {
              return !!interactor.subComponents;
            }).map(function (interactor) {
              return interactor.subComponents.find(function (subComponent) {
                return subComponent.identifier === interactorId;
              });
            }).filter(function (component) {
              return !!component;
            });
          }
        }, {
          key: "findInteractorInExpandedSubComplex",
          value: function findInteractorInExpandedSubComplex(interactor, complex, interactorId) {
            if (complex.interactors.some(function (component) {
              return component.identifier === interactor.interactor.identifier;
            })) {
              return interactor.subComponents.find(function (component) {
                return component.identifier === interactorId;
              });
            }
            return null;
          }
        }, {
          key: "stochiometryOfInteractors",
          value: function stochiometryOfInteractors(complex, interactorId) {
            var match = this.findInteractorInComplex(complex, interactorId);
            if (!!match) {
              return this.formatStochiometryValues(match.stochiometry);
            }
            return null;
          }
        }, {
          key: "stoichiometryOfInteractorsExpandable",
          value: function stoichiometryOfInteractorsExpandable(interactor, interactorId) {
            var match = this.findInteractorInSubcomplex(interactor, interactorId);
            if (!!match) {
              return this.formatStochiometryValues(match.stochiometry);
            }
            return null;
          }
        }, {
          key: "stoichiometryOfInteractorsMainTable",
          value: function stoichiometryOfInteractorsMainTable(complex, interactorId) {
            var matches = this.findInteractorsInSubComplex(complex, interactorId);
            if (matches.length > 0) {
              var stochiometryValues = this.addedStoichiometryValues(matches);
              if (!!stochiometryValues) {
                if (stochiometryValues[0] === stochiometryValues[1]) {
                  return stochiometryValues[0].toString();
                } else {
                  return "".concat(stochiometryValues[0], ", ").concat(stochiometryValues[1]);
                }
              } else {
                return ' ';
              }
            }
            return null;
          }
        }, {
          key: "getStochiometry",
          value: function getStochiometry(complex, componentId) {
            var match = this.findInteractorInComplex(complex, componentId);
            if (!!match) {
              if (!!match.stochiometry) {
                return 'Stoichiometry values: ' + match.stochiometry;
              } else {
                return 'No stoichiometry data available'; // sometimes we don't have the stoichiometry value
              }
            }
            return null;
          }
        }, {
          key: "getStoichiometrySubComplex",
          value: function getStoichiometrySubComplex(complex, interactorId) {
            var matches = this.findInteractorsInSubComplex(complex, interactorId);
            if (matches.length > 0) {
              var stochiometryValues = this.addedStoichiometryValues(matches);
              if (!!stochiometryValues) {
                return "Stoichiometry values: minValue: ".concat(stochiometryValues[0], ", maxValue: ").concat(stochiometryValues[1]);
              } else {
                return 'No stoichiometry data available'; // sometimes we don't have the stoichiometry value
              }
            }
            return null;
          }
        }, {
          key: "getStochiometryInExpandedSubComplex",
          value: function getStochiometryInExpandedSubComplex(interactor, interactorId) {
            var match = this.findInteractorInSubcomplex(interactor, interactorId);
            if (!!match) {
              if (!!match.stochiometry) {
                return 'Stoichiometry values: ' + match.stochiometry;
              } else {
                return 'No stoichiometry data available'; // sometimes we don't have the stoichiometry value
              }
            }
            return null;
          }
        }, {
          key: "showExternalLink",
          value: function showExternalLink(component) {
            return component.interactorType !== 'stable complex' && !!component.identifierLink;
          }
        }, {
          key: "toggleSubcomplexExpandable",
          value: function toggleSubcomplexExpandable(i) {
            this._enrichedInteractors[i].expanded = !this._enrichedInteractors[i].expanded;
            if (this._enrichedInteractors[i].expanded) {
              // EnrichedInteractor has been expanded, we need to:
              // 1. Collapse the other ones, in case there is any other expanded
              for (var j = 0; j < this._enrichedInteractors.length; j++) {
                if (i !== j) {
                  this._enrichedInteractors[j].expanded = false;
                }
              }
              // 2. Hide any interactor now displayed in the expanded section
              if (!!this._enrichedInteractors[i].subComponents) {
                var subInteractorIds = this._enrichedInteractors[i].subComponents.map(function (component) {
                  return component.identifier;
                });
                for (var _j = 0; _j < this._enrichedInteractors.length; _j++) {
                  if (i !== _j) {
                    this._enrichedInteractors[_j].hidden = !!subInteractorIds.includes(this._enrichedInteractors[_j].interactor.identifier);
                  }
                }
              }
            } else {
              // EnrichedInteractor has been collapsed, we need to:
              // 1. Display any interactor previously hidden
              for (var _j2 = 0; _j2 < this._enrichedInteractors.length; _j2++) {
                this._enrichedInteractors[_j2].hidden = false;
              }
            }
            // Something has been expanded or collapsed, we need to recalculate the start and end indexes for the lines
            this.calculateAllStartAndEndIndexes();
          }
        }, {
          key: "interactorTypeIcon",
          value: function interactorTypeIcon(interactor) {
            switch (interactor.interactorType) {
              case 'small molecule':
                return 'icon icon-conceptual icon-chemical';
              case 'protein':
              case 'peptide':
                return 'icon icon-conceptual icon-structures-3d';
              case 'stable complex':
                return 'icon icon-conceptual icon-systems';
              case 'molecule set':
                return 'icon icon-generic icon-math';
              case 'single stranded deoxyribonucleic acid':
              case 'double stranded deoxyribonucleic acid':
              case 'small nuclear rna':
              case 'small nucleolar rna':
              case 'ribosomal rna':
              case 'messenger rna':
              case 'transfer rna':
              case 'signal recognition particle rna':
              case 'ribonucleic acid':
              case 'nucleic acid':
              case 'long non-coding ribonucleic acid':
                return 'icon icon-conceptual icon-dna';
            }
          }
        }, {
          key: "loadSubInteractors",
          value: function loadSubInteractors(interactor) {
            // this function returns the list of subcomponents of an interactor of type stable complex
            var foundComplex = this.complexSearch.elements.find(function (complex) {
              return complex.complexAC === interactor.interactor.identifier;
            });
            if (!!foundComplex) {
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(foundComplex.interactors);
            } else {
              // Actually call the back-end to fetch these
              return this.complexPortalService.getComplexAc(interactor.interactor.identifier).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(function (complex) {
                return complex.participants.map(function (participant) {
                  return new _shared_model_complex_results_complex_component_model__WEBPACK_IMPORTED_MODULE_2__.ComplexComponent(participant.identifier, participant.identifierLink, participant.name, participant.description, participant.stochiometry, participant.interactorType);
                });
              }));
            }
          }
        }, {
          key: "findInteractorInSubcomplex",
          value: function findInteractorInSubcomplex(interactor, interactorId) {
            return interactor.subComponents.find(function (component) {
              return component.identifier === interactorId;
            });
          }
        }, {
          key: "fetchValuesFromStochiometry",
          value: function fetchValuesFromStochiometry(stochiometry) {
            var pattern = 'minValue: ([0-9+]), maxValue: ([0-9+])';
            return stochiometry.match(pattern);
          }
        }, {
          key: "formatStochiometryValues",
          value: function formatStochiometryValues(stochiometry) {
            if (!!stochiometry) {
              var matchedStochometry = this.fetchValuesFromStochiometry(stochiometry);
              if (!!matchedStochometry) {
                // tslint:disable-next-line:radix
                var minValue = parseInt(matchedStochometry[1]);
                // tslint:disable-next-line:radix
                var maxValue = parseInt(matchedStochometry[2]);
                if (minValue === maxValue) {
                  return minValue.toString();
                } else {
                  return "".concat(minValue, ", ").concat(maxValue);
                }
              }
            }
            return ' '; // sometimes we don't have the stoichiometry value
          }
        }, {
          key: "addedStoichiometryValues",
          value: function addedStoichiometryValues(components) {
            var minValue = null;
            var maxValue = null;
            var _iterator13 = _createForOfIteratorHelper(components),
              _step13;
            try {
              for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                var component = _step13.value;
                if (!!component.stochiometry) {
                  var matchedStochometry = this.fetchValuesFromStochiometry(component.stochiometry);
                  if (!!matchedStochometry) {
                    if (minValue === null) {
                      minValue = 0;
                    }
                    if (maxValue === null) {
                      maxValue = 0;
                    }
                    // tslint:disable-next-line:radix
                    minValue += parseInt(matchedStochometry[1]);
                    // tslint:disable-next-line:radix
                    maxValue += parseInt(matchedStochometry[2]);
                  }
                }
              }
            } catch (err) {
              _iterator13.e(err);
            } finally {
              _iterator13.f();
            }
            if (minValue !== null && maxValue !== null) {
              return [minValue, maxValue];
            }
            return null;
          }
        }, {
          key: "calculateAllStartAndEndIndexes",
          value: function calculateAllStartAndEndIndexes() {
            this._enrichedComplexes = [];
            var _iterator14 = _createForOfIteratorHelper(this.complexSearch.elements),
              _step14;
            try {
              for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
                var complex = _step14.value;
                this._enrichedComplexes.push(this.calculateStartAndEndIndexes(complex));
              }
            } catch (err) {
              _iterator14.e(err);
            } finally {
              _iterator14.f();
            }
          }
        }, {
          key: "getMinValue",
          value: function getMinValue(valueA, valueB) {
            if (valueB === null) {
              return valueA;
            }
            if (valueA === null) {
              return valueB;
            }
            return Math.min(valueA, valueB);
          }
        }, {
          key: "displayTopLineClass",
          value: function displayTopLineClass(complex, interactorIndex) {
            if (this.doesLineCrossInteractorCell(complex, interactorIndex)) {
              return 'verticalLine';
            }
            if (this.doesLineEndOnInteractorCell(complex, interactorIndex) && !this.doesLineStartOnInteractorCell(complex, interactorIndex)) {
              return 'verticalLine';
            }
            return 'transparentVerticalLine';
          }
        }, {
          key: "displayBottomLineClass",
          value: function displayBottomLineClass(complex, interactorIndex) {
            if (this.doesLineCrossInteractorCell(complex, interactorIndex)) {
              return 'verticalLine';
            }
            if (this.doesLineStartOnInteractorCell(complex, interactorIndex) && !this.doesLineEndOnInteractorCell(complex, interactorIndex)) {
              return 'verticalLine';
            }
            return 'transparentVerticalLine';
          }
        }, {
          key: "displayTopLineClassExpanded",
          value: function displayTopLineClassExpanded(complex, interactorIndex, subComponentIndex) {
            if (this.doesLineCrossSubcomponentCell(complex, interactorIndex, subComponentIndex)) {
              return 'verticalLine';
            }
            if (this.doesLineEndOnSubcomponentCell(complex, interactorIndex, subComponentIndex) && !this.doesLineStartOnSubcomponentCell(complex, interactorIndex, subComponentIndex)) {
              return 'verticalLine';
            }
            return 'transparentVerticalLine';
          }
        }, {
          key: "displayBottomLineClassExpanded",
          value: function displayBottomLineClassExpanded(complex, interactorIndex, subComponentIndex) {
            if (this.doesLineCrossSubcomponentCell(complex, interactorIndex, subComponentIndex)) {
              return 'verticalLine';
            }
            if (this.doesLineStartOnSubcomponentCell(complex, interactorIndex, subComponentIndex) && !this.doesLineEndOnSubcomponentCell(complex, interactorIndex, subComponentIndex)) {
              return 'verticalLine';
            }
            return 'transparentVerticalLine';
          }
        }, {
          key: "getMaxValue",
          value: function getMaxValue(valueA, valueB) {
            if (valueB === null) {
              return valueA;
            }
            if (valueA === null) {
              return valueB;
            }
            return Math.max(valueA, valueB);
          }
        }, {
          key: "calculateStartAndEndIndexes",
          value: function calculateStartAndEndIndexes(complex) {
            var subComponentsToCheck = [];
            var enrichedComplex = {
              complex: complex,
              startInteractorIndex: null,
              endInteractorIndex: null,
              startSubComponentIndex: null,
              endSubComponentIndex: null
            };
            // We iterate through the interactors to find the first and last one part of the complex
            // We do this to be able to draw a line connecting all interactors in the complex
            for (var i = 0; i < this._enrichedInteractors.length; i++) {
              if (!this._enrichedInteractors[i].hidden) {
                for (var j = 0; j < complex.interactors.length; j++) {
                  if (complex.interactors[j].identifier === this._enrichedInteractors[i].interactor.identifier) {
                    // The interactor is part of the complex, we update the start and end indices for the interactors
                    // line as it may start in this interactor
                    enrichedComplex.startInteractorIndex = this.getMinValue(enrichedComplex.startInteractorIndex, i);
                    enrichedComplex.endInteractorIndex = this.getMaxValue(enrichedComplex.endInteractorIndex, i);
                    // The interactor is a subcomplex
                    if (this._enrichedInteractors[i].isSubComplex && !!this._enrichedInteractors[i].subComponents) {
                      // The subcomponents of that subcomplex could also be displayed in the table as separate interactors.
                      // In that case, the line could start or end there, so we need to also check the position of those
                      // interactors. We add those subcomponents to 'subComponentsToCheck' to check their position later
                      this._enrichedInteractors[i].subComponents.forEach(function (subComponent) {
                        return subComponentsToCheck.push(subComponent.identifier);
                      });
                      if (this._enrichedInteractors[i].expanded) {
                        // If the subcomplex is expanded, as the subcomplex is part of the complex, all its subcomponents are also part
                        // of it. That means we need a line connecting all the subcomponents.
                        // That line must also connect to the subcomplex, so we start it at -1 to make sure it starts at the interactor cell
                        // and not at the first subcomponent
                        enrichedComplex.startSubComponentIndex = -1;
                        enrichedComplex.endSubComponentIndex = this._enrichedInteractors[i].subComponents.length - 1;
                      }
                    }
                  } else if (this._enrichedInteractors[i].isSubComplex && !!this._enrichedInteractors[i].subComponents && this._enrichedInteractors[i].expanded) {
                    // The interactor is not part of the complex but it is a subcomplex and it is expanded.
                    // This means the subcomponents of the subcomplex are visible, and any of them could be part of the complex.
                    // In that case, the line could start or end on any of those subcomponents
                    for (var k = 0; k < this._enrichedInteractors[i].subComponents.length; k++) {
                      if (complex.interactors[j].identifier === this._enrichedInteractors[i].subComponents[k].identifier) {
                        // The subcomponent of this interactor is part of the complex, we update the start and end indices for the interactors
                        // line as it may start in this interactor
                        enrichedComplex.startInteractorIndex = this.getMinValue(enrichedComplex.startInteractorIndex, i);
                        enrichedComplex.endInteractorIndex = this.getMaxValue(enrichedComplex.endInteractorIndex, i);
                        // The subcomponent of this interactor is part of the complex, we update the start and end indices for the subcomponents
                        // line as it may start in this subcomponent
                        enrichedComplex.startSubComponentIndex = this.getMinValue(enrichedComplex.startSubComponentIndex, k);
                        enrichedComplex.endSubComponentIndex = this.getMaxValue(enrichedComplex.endSubComponentIndex, k);
                      }
                    }
                  }
                }
              }
            }
            // We finally check the position of the subcomponents of subcomplexes part of the complex on the main table.
            // If any is before or after where the lines start and end, then we need to update the start and end indexes,
            // as the line must start or end there
            for (var _i = 0; _i < this._enrichedInteractors.length; _i++) {
              if (!this._enrichedInteractors[_i].hidden) {
                if (subComponentsToCheck.includes(this._enrichedInteractors[_i].interactor.identifier)) {
                  // The interactor is part of a subcomplex that is part of the complex, we update the start and end indices for the interactors
                  // line as it may start in this interactor
                  enrichedComplex.startInteractorIndex = this.getMinValue(enrichedComplex.startInteractorIndex, _i);
                  enrichedComplex.endInteractorIndex = this.getMaxValue(enrichedComplex.endInteractorIndex, _i);
                }
              }
            }
            return enrichedComplex;
          }
        }, {
          key: "doesLineCrossInteractorCell",
          value: function doesLineCrossInteractorCell(complex, interactorIndex) {
            if (complex.startInteractorIndex != null && complex.endInteractorIndex != null) {
              // The line starts before this interactor and ends after, so it crosses through the interactor
              if (complex.startInteractorIndex < interactorIndex && complex.endInteractorIndex > interactorIndex) {
                return true;
              }
              // The line starts before this interactor and end at this interactor or on any of its subcomponents
              if (complex.startInteractorIndex < interactorIndex && complex.endInteractorIndex === interactorIndex) {
                // If the interactor is an expanded subcomplex, and there is any line between the subcomponents, then
                // the line does not end in this interactor and it musy cross through the interactor cell to the subcomponents
                if (this._enrichedInteractors[interactorIndex].isSubComplex && this._enrichedInteractors[interactorIndex].expanded) {
                  if (complex.startSubComponentIndex != null && complex.endSubComponentIndex != null) {
                    return true;
                  }
                }
              }
            }
            return false;
          }
        }, {
          key: "doesLineStartOnInteractorCell",
          value: function doesLineStartOnInteractorCell(complex, interactorIndex) {
            var _this4 = this;
            // The line starts at this interactor or on any of its subcomponents
            if (complex.startInteractorIndex != null && complex.startInteractorIndex === interactorIndex) {
              if (!this._enrichedInteractors[interactorIndex].isSubComplex) {
                // If the interactor is not a subcomplex, then the interactor has no subcomponents and the line starts in it
                return true;
              }
              // If the interactor is a subcomplex.
              // If the interactor is actually part of the complex, the line starts in this interactor
              // Otherwise, the line actually starts on one of the subcomponets of the complex, but not on the interactor itself, as it is
              // not part of the complex.
              if (complex.complex.interactors.some(function (component) {
                return _this4._enrichedInteractors[interactorIndex].interactor.identifier === component.identifier;
              })) {
                return true;
              }
            }
            return false;
          }
        }, {
          key: "doesLineEndOnInteractorCell",
          value: function doesLineEndOnInteractorCell(complex, interactorIndex) {
            // The line ends at this interactor or on any of its subcomponents
            if (complex.endInteractorIndex != null && complex.endInteractorIndex === interactorIndex) {
              // If the interactor is an expanded subcomplex, and there is any line between the subcomponents, then
              // the line does not end in this interactor and it must cross through to the subcomponents
              if (this._enrichedInteractors[interactorIndex].isSubComplex && this._enrichedInteractors[interactorIndex].expanded) {
                if (complex.startSubComponentIndex != null && complex.endSubComponentIndex != null) {
                  return false;
                }
              }
              return true;
            }
            return false;
          }
        }, {
          key: "doesLineCrossSubcomponentCell",
          value: function doesLineCrossSubcomponentCell(complex, interactorIndex, subComponentIndex) {
            if (complex.startInteractorIndex != null && complex.endInteractorIndex != null) {
              // The line starts before this interactor and ends after, so it crosses through all the subcomponents of the interactor
              if (complex.startInteractorIndex < interactorIndex && complex.endInteractorIndex > interactorIndex) {
                return true;
              }
              if (complex.startSubComponentIndex != null && complex.endSubComponentIndex != null) {
                // The line starts before this subcomponent and ends after, so it crosses through the subcomponent
                if (complex.startSubComponentIndex < subComponentIndex && complex.endSubComponentIndex > subComponentIndex) {
                  return true;
                }
                // The line started before this interactor and it ends on a later subcomponent, so it crosses through this subcomponent
                if (complex.startInteractorIndex < interactorIndex && complex.endSubComponentIndex > subComponentIndex) {
                  return true;
                }
                // The line started before this subcomponent and it ends on a later interactor, so it crosses through this subcomponent
                if (complex.startSubComponentIndex < subComponentIndex && complex.endInteractorIndex > interactorIndex) {
                  return true;
                }
              }
            }
            return false;
          }
        }, {
          key: "doesLineStartOnSubcomponentCell",
          value: function doesLineStartOnSubcomponentCell(complex, interactorIndex, subComponentIndex) {
            var _this5 = this;
            // The line starts at this interactor or on any of its subcomponents
            if (complex.startInteractorIndex != null && complex.startInteractorIndex === interactorIndex) {
              if (complex.startSubComponentIndex != null && complex.startSubComponentIndex === subComponentIndex) {
                // If the subcomplex is a component of the complex, the line starts in the cell of the interactor, meaning it cannot
                // start on any subcomponent.
                // Otherwise, it starts on the subcomponent with the index subComponentIndex
                return !complex.complex.interactors.some(function (component) {
                  return _this5._enrichedInteractors[interactorIndex].interactor.identifier === component.identifier;
                });
              }
            }
            return false;
          }
        }, {
          key: "doesLineEndOnSubcomponentCell",
          value: function doesLineEndOnSubcomponentCell(complex, interactorIndex, subComponentIndex) {
            if (complex.endInteractorIndex != null && complex.endInteractorIndex === interactorIndex) {
              // The line ends at this interactor and this subcomponent
              if (complex.endSubComponentIndex != null && complex.endSubComponentIndex === subComponentIndex) {
                return true;
              }
            }
            return false;
          }
        }, {
          key: "interactorOrganism",
          value: function interactorOrganism() {
            var _this6 = this;
            var _iterator15 = _createForOfIteratorHelper(this.complexSearch.elements),
              _step15;
            try {
              for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
                var complex = _step15.value;
                var organismName = complex.organismName;
                var _iterator16 = _createForOfIteratorHelper(complex.interactors),
                  _step16;
                try {
                  var _loop5 = function _loop5() {
                    var complexInteractor = _step16.value;
                    // tslint:disable-next-line:max-line-length
                    var match = _this6._enrichedInteractors.find(function (enrichedInteractor) {
                      return enrichedInteractor.interactor.identifier === complexInteractor.identifier;
                    });
                    match.organismName = organismName;
                  };
                  for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
                    _loop5();
                  }
                } catch (err) {
                  _iterator16.e(err);
                } finally {
                  _iterator16.f();
                }
              }
            } catch (err) {
              _iterator15.e(err);
            } finally {
              _iterator15.f();
            }
          }
        }, {
          key: "classifyInteractorsByOrganism",
          value: function classifyInteractorsByOrganism() {
            this._enrichedInteractors.sort(function (a, b) {
              return b.organismName.localeCompare(a.organismName);
            });
          }
        }, {
          key: "classifyInteractorsByType",
          value: function classifyInteractorsByType() {
            this._enrichedInteractors.sort(function (a, b) {
              return b.interactor.interactorType.localeCompare(a.interactor.interactorType);
            });
          }
        }, {
          key: "classifyInteractorsByOccurence",
          value: function classifyInteractorsByOccurence() {
            var _this7 = this;
            var _iterator17 = _createForOfIteratorHelper(this._enrichedInteractors),
              _step17;
            try {
              for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
                var oneInteractor = _step17.value;
                var _iterator18 = _createForOfIteratorHelper(this.complexSearch.elements),
                  _step18;
                try {
                  for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
                    var complex = _step18.value;
                    var _iterator19 = _createForOfIteratorHelper(complex.interactors),
                      _step19;
                    try {
                      for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
                        var complexesInteractors = _step19.value;
                        if (oneInteractor.interactor.identifier === complexesInteractors.identifier) {
                          // tslint:disable-next-line:radix
                          if (isNaN(parseInt(this.stochiometryOfInteractors(complex, oneInteractor.interactor.identifier)))) {
                            oneInteractor.timesAppearing = oneInteractor.timesAppearing;
                          } else {
                            // tslint:disable-next-line:radix
                            oneInteractor.timesAppearing += parseInt(this.stochiometryOfInteractors(complex, oneInteractor.interactor.identifier));
                          }
                        }
                      }
                    } catch (err) {
                      _iterator19.e(err);
                    } finally {
                      _iterator19.f();
                    }
                    if (oneInteractor.isSubComplex) {
                      // tslint:disable-next-line:no-shadowed-variable
                      var _iterator20 = _createForOfIteratorHelper(oneInteractor.subComponents),
                        _step20;
                      try {
                        var _loop6 = function _loop6() {
                          var subInteractor = _step20.value;
                          // tslint:disable-next-line:max-line-length no-shadowed-variable
                          var enrichedInteractor = _this7._enrichedInteractors.find(function (enrichedInteractor) {
                            return enrichedInteractor.interactor.identifier === subInteractor.identifier;
                          });
                          // tslint:disable-next-line:radix
                          enrichedInteractor.timesAppearing = parseInt(_this7.formatStochiometryValues(subInteractor.stochiometry));
                        };
                        for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
                          _loop6();
                        }
                      } catch (err) {
                        _iterator20.e(err);
                      } finally {
                        _iterator20.f();
                      }
                    }
                  }
                } catch (err) {
                  _iterator18.e(err);
                } finally {
                  _iterator18.f();
                }
              }
              // tslint:disable-next-line:max-line-length
            } catch (err) {
              _iterator17.e(err);
            } finally {
              _iterator17.f();
            }
            this._enrichedInteractors.sort(function (a, b) {
              return b.timesAppearing - a.timesAppearing;
            } /* || a.interactor.name.localeCompare(b.interactor.name) */);
          }
        }, {
          key: "classificationChosen",
          value: function classificationChosen() {
            var type;
            switch (this._interactorsSorting) {
              case 'Type':
                this.classifyInteractorsByType();
                this.calculateAllStartAndEndIndexes();
                this.rangeOfInteractorType();
                type = 'Type';
                break;
              case 'Organism':
                this.classifyInteractorsByOrganism();
                this.calculateAllStartAndEndIndexes();
                this.rangeOfInteractorOrganisms();
                type = 'Organism';
                break;
              case 'Occurrence':
                this.classifyInteractorsByOccurence();
                this.calculateAllStartAndEndIndexes();
                type = 'Occurrence';
                break;
              default:
                this.classifyInteractorsByOccurence();
                this.calculateAllStartAndEndIndexes();
                type = 'Occurrence';
            }
            return type;
          }
        }, {
          key: "rangeOfInteractorType",
          value: function rangeOfInteractorType() {
            var ranges = [];
            var interactorTypesList = this.listOfInteractorTypes();
            var _iterator21 = _createForOfIteratorHelper(interactorTypesList),
              _step21;
            try {
              for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
                var type = _step21.value;
                var rangeOfType = [];
                var listOfInteractors = [];
                var _iterator22 = _createForOfIteratorHelper(this._enrichedInteractors),
                  _step22;
                try {
                  for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
                    var enrichedInteractor = _step22.value;
                    if (enrichedInteractor.interactor.interactorType === type) {
                      var interactorAndIndex = [];
                      interactorAndIndex.push(enrichedInteractor);
                      interactorAndIndex.push(this._enrichedInteractors.indexOf(enrichedInteractor));
                      listOfInteractors.push(interactorAndIndex);
                    }
                  }
                } catch (err) {
                  _iterator22.e(err);
                } finally {
                  _iterator22.f();
                }
                var lengthOfRange = listOfInteractors[listOfInteractors.length - 1][1] + 1 - listOfInteractors[0][1];
                rangeOfType.push(type, listOfInteractors[0][1], listOfInteractors[listOfInteractors.length - 1][1], lengthOfRange);
                ranges.push(rangeOfType);
              }
            } catch (err) {
              _iterator21.e(err);
            } finally {
              _iterator21.f();
            }
            return ranges;
          }
        }, {
          key: "rangeOfInteractorOrganisms",
          value: function rangeOfInteractorOrganisms() {
            var ranges = [];
            var interactorOrganismsList = this.listOfInteractorOrganism();
            var _iterator23 = _createForOfIteratorHelper(interactorOrganismsList),
              _step23;
            try {
              for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
                var organism = _step23.value;
                var rangeOfOrganism = [];
                var listOfInteractors = [];
                var _iterator24 = _createForOfIteratorHelper(this._enrichedInteractors),
                  _step24;
                try {
                  for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
                    var enrichedInteractor = _step24.value;
                    if (enrichedInteractor.organismName === organism) {
                      var interactorAndIndex = [];
                      interactorAndIndex.push(enrichedInteractor);
                      interactorAndIndex.push(this._enrichedInteractors.indexOf(enrichedInteractor));
                      listOfInteractors.push(interactorAndIndex);
                    }
                  }
                } catch (err) {
                  _iterator24.e(err);
                } finally {
                  _iterator24.f();
                }
                var lengthOfRange = listOfInteractors[listOfInteractors.length - 1][1] + 1 - listOfInteractors[0][1];
                // console.log(lengthOfRange);
                rangeOfOrganism.push(organism, listOfInteractors[0][1], listOfInteractors[listOfInteractors.length - 1][1], lengthOfRange);
                ranges.push(rangeOfOrganism);
              }
              // console.log(ranges);
            } catch (err) {
              _iterator23.e(err);
            } finally {
              _iterator23.f();
            }
            return ranges;
          }
        }, {
          key: "listOfInteractorTypes",
          value: function listOfInteractorTypes() {
            var interactorsTypesList = [];
            var _iterator25 = _createForOfIteratorHelper(this._enrichedInteractors),
              _step25;
            try {
              for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
                var enrichedInteractor = _step25.value;
                if (!interactorsTypesList.includes(enrichedInteractor.interactor.interactorType)) {
                  interactorsTypesList.push(enrichedInteractor.interactor.interactorType);
                }
              }
            } catch (err) {
              _iterator25.e(err);
            } finally {
              _iterator25.f();
            }
            return interactorsTypesList;
          }
        }, {
          key: "listOfInteractorOrganism",
          value: function listOfInteractorOrganism() {
            var interactorsOrganismsList = [];
            var _iterator26 = _createForOfIteratorHelper(this._enrichedInteractors),
              _step26;
            try {
              for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
                var enrichedInteractor = _step26.value;
                if (!interactorsOrganismsList.includes(enrichedInteractor.organismName)) {
                  interactorsOrganismsList.push(enrichedInteractor.organismName);
                }
              }
              // console.log(interactorsOrganismsList);
            } catch (err) {
              _iterator26.e(err);
            } finally {
              _iterator26.f();
            }
            return interactorsOrganismsList;
          }
        }, {
          key: "enrichedInteractorsLength",
          get: function get() {
            return this._enrichedInteractors.length + 1;
          }
        }]);
        return TableInteractorColumnComponent;
      }();
      _TableInteractorColumnComponent.ctorParameters = function () {
        return [{
          type: _shared_service_complex_portal_service__WEBPACK_IMPORTED_MODULE_3__.ComplexPortalService
        }];
      };
      _TableInteractorColumnComponent.propDecorators = {
        complexSearch: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
        }],
        _interactorsSorting: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
        }],
        interactorsSorting: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
        }],
        interactors: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
        }]
      };
      _TableInteractorColumnComponent = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'cp-table-interactor-column',
        template: _Users_susiehuget_Documents_GitHub_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_table_interactor_column_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_table_interactor_column_component_css__WEBPACK_IMPORTED_MODULE_1__]
      })], _TableInteractorColumnComponent);

      /***/
    }),
    /***/14915: (
    /*!********************************************************************************************************!*\
      !*** ./src/app/complex/complex-results/complex-navigator/table-structure/table-structure.component.ts ***!
      \********************************************************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"TableStructureComponent": function TableStructureComponent() {
          return /* binding */_TableStructureComponent;
        }
        /* harmony export */
      });
      /* harmony import */
      var _Users_susiehuget_Documents_GitHub_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_table_structure_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./table-structure.component.html */75118);
      /* harmony import */
      var _table_structure_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./table-structure.component.css */71108);
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/core */2316);
      /* harmony import */
      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */71258);
      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      var _TableStructureComponent = /*#__PURE__*/function () {
        // _overFlowing: boolean;
        function TableStructureComponent(router) {
          _classCallCheck(this, TableStructureComponent);
          this.router = router;
        }
        _createClass(TableStructureComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "interactors",
          get: function get() {
            return this._interactors;
          },
          set: function set(value) {
            this._interactors = value;
          }
        }, {
          key: "interactorsSorting",
          get: function get() {
            return this._interactorsSorting;
          },
          set: function set(value) {
            this._interactorsSorting = value;
          }
        }]);
        return TableStructureComponent;
      }();
      _TableStructureComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router
        }];
      };
      _TableStructureComponent.propDecorators = {
        complexSearch: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }],
        interactors: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }],
        interactorsSorting: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }]
      };
      _TableStructureComponent = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'cp-table-structure',
        template: _Users_susiehuget_Documents_GitHub_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_table_structure_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_table_structure_component_css__WEBPACK_IMPORTED_MODULE_1__]
      })], _TableStructureComponent);

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
      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! @angular/core */2316);
      /* harmony import */
      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! @angular/router */71258);
      /* harmony import */
      var _shared_service_complex_portal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../shared/service/complex-portal.service */20658);
      /* harmony import */
      var _shared_loading_indicators_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../../shared/loading-indicators/progress-bar/progress-bar.component */57040);
      /* harmony import */
      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! @angular/platform-browser */71570);
      /* harmony import */
      var _shared_google_analytics_service_analytics_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ../../shared/google-analytics/service/analytics.service */96242);
      /* harmony import */
      var _shared_model_complex_results_interactor_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ../shared/model/complex-results/interactor.model */45178);
      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      var _ComplexResultsComponent = /*#__PURE__*/function () {
        function ComplexResultsComponent(route, router, complexPortalService, titleService, googleAnalyticsService) {
          _classCallCheck(this, ComplexResultsComponent);
          this.route = route;
          this.router = router;
          this.complexPortalService = complexPortalService;
          this.titleService = titleService;
          this.googleAnalyticsService = googleAnalyticsService;
          this._pageSize = 15;
          this._allInteractorsInComplexSearch = [];
          this.DisplayType = true;
          this._interactorsSorting = 'Occurrence';
        }
        _createClass(ComplexResultsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this8 = this;
            this.titleService.setTitle('Complex Portal - Results');
            this._allInteractorsInComplexSearch = [];
            this._interactorsSorting = this.interactorsSorting;
            this.route.queryParams.subscribe(function (queryParams) {
              _this8._query = queryParams['query'];
              _this8._spicesFilter = queryParams['species'] ? queryParams['species'].split('+') : [];
              _this8._bioRoleFilter = queryParams['bioRole'] ? queryParams['bioRole'].split('+') : [];
              _this8._interactorTypeFilter = queryParams['interactorType'] ? queryParams['interactorType'].split('+') : [];
              _this8._currentPageIndex = queryParams['page'] ? Number(queryParams['page']) : 1;
              // TODO This is out for now, but CP-84 (JIRA )should fix that!!
              // this.pageSize = queryParams['size'] ? Number(queryParams['size']) : 10;
              _this8.requestComplexResults();
              document.body.scrollTop = 0;
            });
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {}
        }, {
          key: "requestComplexResults",
          value: function requestComplexResults() {
            var _this9 = this;
            this.complexPortalService.findComplex(this.query, this.spicesFilter, this.bioRoleFilter, this.interactorTypeFilter, this.currentPageIndex, this.pageSize).subscribe(function (complexSearch) {
              _this9.complexSearch = complexSearch;
              _this9._allInteractorsInComplexSearch = [];
              if (_this9.complexSearch.totalNumberOfResults !== 0) {
                _this9.lastPageIndex = Math.ceil(complexSearch.totalNumberOfResults / _this9.pageSize);
                for (var i = 0; i < complexSearch.elements.length; i++) {
                  var _iterator27 = _createForOfIteratorHelper(complexSearch.elements[i].interactors),
                    _step27;
                  try {
                    var _loop7 = function _loop7() {
                      var component = _step27.value;
                      if (!_this9._allInteractorsInComplexSearch.some(function (interactor) {
                        return interactor.identifier === component.identifier;
                      })) {
                        _this9._allInteractorsInComplexSearch.push(new _shared_model_complex_results_interactor_model__WEBPACK_IMPORTED_MODULE_5__.Interactor(component.identifier, component.identifierLink, component.name, component.description, component.interactorType));
                      }
                    };
                    for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
                      _loop7();
                    }
                  } catch (err) {
                    _iterator27.e(err);
                  } finally {
                    _iterator27.f();
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
            queryParams['page'] = this._currentPageIndex;
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
              queryParams: queryParams
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
            return this._currentPageIndex;
          },
          set: function set(value) {
            this._currentPageIndex = value;
          }
        }, {
          key: "complexSearch",
          get: function get() {
            return this._complexSearch;
          },
          set: function set(value) {
            this._complexSearch = value;
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
          key: "pageSize",
          get: function get() {
            return this._pageSize;
          },
          set: function set(value) {
            this._pageSize = value;
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
          },
          set: function set(value) {
            this._allInteractorsInComplexSearch = value;
          }
        }, {
          key: "toggleDisplayType",
          value: function toggleDisplayType() {
            this.DisplayType = !this.DisplayType;
          }
        }, {
          key: "interactorsSorting",
          get: function get() {
            return this._interactorsSorting;
          }
        }, {
          key: "setInteractorsSorting",
          value: function setInteractorsSorting(typeOfSorting) {
            this._interactorsSorting = typeOfSorting;
          }
        }]);
        return ComplexResultsComponent;
      }();
      _ComplexResultsComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
        }, {
          type: _shared_service_complex_portal_service__WEBPACK_IMPORTED_MODULE_2__.ComplexPortalService
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.Title
        }, {
          type: _shared_google_analytics_service_analytics_service__WEBPACK_IMPORTED_MODULE_4__.AnalyticsService
        }];
      };
      _ComplexResultsComponent = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
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
      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! @angular/core */2316);
      /* harmony import */
      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! @angular/common */54364);
      /* harmony import */
      var _complex_results_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./complex-results.component */50967);
      /* harmony import */
      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! @angular/router */71258);
      /* harmony import */
      var _complex_paginator_complex_paginator_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./complex-paginator/complex-paginator.component */80556);
      /* harmony import */
      var _complex_filter_complex_filter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./complex-filter/complex-filter.component */16778);
      /* harmony import */
      var _complex_list_complex_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./complex-list/complex-list.component */57991);
      /* harmony import */
      var _shared_loading_indicators_progress_spinner_progress_spinner_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ../../shared/loading-indicators/progress-spinner/progress-spinner.module */45103);
      /* harmony import */
      var _complex_navigator_complex_navigator_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./complex-navigator/complex-navigator.component */76549);
      /* harmony import */
      var _complex_navigator_table_structure_table_structure_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./complex-navigator/table-structure/table-structure.component */14915);
      /* harmony import */
      var _complex_navigator_table_structure_table_header_table_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ./complex-navigator/table-structure/table-header/table-header.component */40969);
      /* harmony import */
      var _complex_navigator_table_structure_table_interactor_column_table_interactor_column_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ./complex-navigator/table-structure/table-interactor-column/table-interactor-column.component */48774);
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
      _ComplexResultsModule = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild([{
          path: '',
          component: _complex_results_component__WEBPACK_IMPORTED_MODULE_0__.ComplexResultsComponent
        }]), _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _shared_loading_indicators_progress_spinner_progress_spinner_module__WEBPACK_IMPORTED_MODULE_4__.ProgressSpinnerModule],
        exports: [_complex_navigator_table_structure_table_structure_component__WEBPACK_IMPORTED_MODULE_6__.TableStructureComponent],
        declarations: [_complex_results_component__WEBPACK_IMPORTED_MODULE_0__.ComplexResultsComponent, _complex_list_complex_list_component__WEBPACK_IMPORTED_MODULE_3__.ComplexListComponent, _complex_filter_complex_filter_component__WEBPACK_IMPORTED_MODULE_2__.ComplexFilterComponent, _complex_paginator_complex_paginator_component__WEBPACK_IMPORTED_MODULE_1__.ComplexPaginatorComponent, _complex_navigator_complex_navigator_component__WEBPACK_IMPORTED_MODULE_5__.ComplexNavigatorComponent, _complex_navigator_table_structure_table_structure_component__WEBPACK_IMPORTED_MODULE_6__.TableStructureComponent, _complex_navigator_table_structure_table_header_table_header_component__WEBPACK_IMPORTED_MODULE_7__.TableHeaderComponent, _complex_navigator_table_structure_table_interactor_column_table_interactor_column_component__WEBPACK_IMPORTED_MODULE_8__.TableInteractorColumnComponent]
      })], _ComplexResultsModule);

      /***/
    }),
    /***/76572: (
    /*!*********************************************************************************!*\
      !*** ./src/app/complex/shared/model/complex-results/complex-component.model.ts ***!
      \*********************************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"ComplexComponent": function ComplexComponent() {
          return /* binding */_ComplexComponent;
        }
        /* harmony export */
      });
      var _ComplexComponent = /*#__PURE__*/function () {
        function _ComplexComponent(identifier, identifierLink, name, description, stochiometry, interactorType) {
          _classCallCheck(this, _ComplexComponent);
          this._identifier = identifier;
          this._identifierLink = identifierLink;
          this._name = name;
          this._description = description;
          this._stochiometry = stochiometry;
          this._interactorType = interactorType;
        }
        _createClass(_ComplexComponent, [{
          key: "identifier",
          get: function get() {
            return this._identifier;
          }
        }, {
          key: "identifierLink",
          get: function get() {
            return this._identifierLink;
          }
        }, {
          key: "name",
          get: function get() {
            return this._name;
          }
        }, {
          key: "description",
          get: function get() {
            return this._description;
          }
        }, {
          key: "stochiometry",
          get: function get() {
            return this._stochiometry;
          }
        }, {
          key: "interactorType",
          get: function get() {
            return this._interactorType;
          }
        }]);
        return _ComplexComponent;
      }();
      /***/
    }),
    /***/45178: (
    /*!**************************************************************************!*\
      !*** ./src/app/complex/shared/model/complex-results/interactor.model.ts ***!
      \**************************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"Interactor": function Interactor() {
          return /* binding */_Interactor;
        }
        /* harmony export */
      });
      var _Interactor = /*#__PURE__*/function () {
        function _Interactor(identifier, identifierLink, name, description, interactorType) {
          _classCallCheck(this, _Interactor);
          this._identifier = identifier;
          this._identifierLink = identifierLink;
          this._name = name;
          this._description = description;
          this._interactorType = interactorType;
        }
        _createClass(_Interactor, [{
          key: "identifier",
          get: function get() {
            return this._identifier;
          }
        }, {
          key: "identifierLink",
          get: function get() {
            return this._identifierLink;
          }
        }, {
          key: "name",
          get: function get() {
            return this._name;
          }
        }, {
          key: "description",
          get: function get() {
            return this._description;
          }
        }, {
          key: "interactorType",
          get: function get() {
            return this._interactorType;
          }
        }]);
        return _Interactor;
      }();
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
      __webpack_exports__["default"] = "<div class=\"filters row\">\n  <div class=\"columns medium-6\"><h3>Filters</h3></div>\n  <div class=\"columns medium-6\">\n    <div *ngIf=\"anyFiltersSelected()\">\n      <a class=\"button\" (click)=\"resetAllFilters()\"><i class=\"icon icon-functional\" data-icon=\"d\"></i> Reset filters</a>\n    </div>\n  </div>\n  <div class=\"columns medium-12\">\n    <div *ngIf=\"facets.species_f\">\n      <b>Species</b>\n      <ul class=\"no-bullet\">\n        <li *ngFor=\"let facet of facets.species_f\">\n          <div [ngSwitch]=\"isSelected(facet.name, spicesFilter)\">\n            <div *ngSwitchCase=\"true\">\n              <input type=\"checkbox\" #filter value=\"{{facet.name}}\"\n                     (change)=\"changeSpeciesFilter(filter.value, filter.checked)\" checked> {{ facet.name }}\n              ({{ facet.count }})\n            </div>\n            <div *ngSwitchDefault>\n              <input type=\"checkbox\" #filter value=\"{{facet.name}}\"\n                     (change)=\"changeSpeciesFilter(filter.value, filter.checked)\"> {{ facet.name }} ({{ facet.count }})\n            </div>\n          </div>\n        </li>\n      </ul>\n    </div>\n\n    <div *ngIf=\"facets.pbiorole_f\">\n      <b>Biological Role</b>\n      <ul class=\"no-bullet\">\n        <li *ngFor=\"let facet of facets.pbiorole_f\">\n          <div [ngSwitch]=\"isSelected(facet.name, bioRoleFilter)\">\n            <div *ngSwitchCase=\"true\">\n              <input type=\"checkbox\" #filter value=\"{{facet.name}}\"\n                     (change)=\"changeBiologicalRoleFilter(filter.value, filter.checked)\" checked> {{ facet.name }}\n              ({{ facet.count }})\n            </div>\n            <div *ngSwitchDefault>\n              <input type=\"checkbox\" #filter value=\"{{facet.name}}\"\n                     (change)=\"changeBiologicalRoleFilter(filter.value, filter.checked)\"> {{ facet.name }}\n              ({{ facet.count }})\n            </div>\n          </div>\n        </li>\n      </ul>\n    </div>\n\n\n    <div *ngIf=\"facets.ptype_f\">\n      <b>Interactor Type</b>\n      <ul class=\"no-bullet\">\n        <li *ngFor=\"let facet of facets.ptype_f\">\n          <div [ngSwitch]=\"isSelected(facet.name, interactorTypeFilter)\">\n            <div *ngSwitchCase=\"true\">\n              <input type=\"checkbox\" #filter value=\"{{facet.name}}\"\n                     (change)=\"changeInteractorTypeFilter(filter.value, filter.checked)\" checked> {{ facet.name }}\n              ({{ facet.count }})\n              <i class=\"{{ interactorTypeIcon(facet) }}\"\n                 style=\"font-size: large;\"></i>\n            </div>\n            <div *ngSwitchDefault>\n              <input type=\"checkbox\" #filter value=\"{{facet.name}}\"\n                     (change)=\"changeInteractorTypeFilter(filter.value, filter.checked)\"> {{ facet.name }}\n              ({{ facet.count }})\n              <i class=\"{{ interactorTypeIcon(facet) }}\"\n                 style=\"font-size: large;\"></i>\n            </div>\n          </div>\n        </li>\n      </ul>\n    </div>\n    <div *ngIf=\"!facets.species_f && !facets.pbiorole_f && !facets.ptype_f\">\n      <h6>No filters available</h6>\n    </div>\n  </div>\n</div>\n";

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
    /***/81779: (
    /*!***********************************************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/complex/complex-results/complex-navigator/complex-navigator.component.html ***!
      \***********************************************************************************************************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */
      __webpack_exports__["default"] = "<div class=\"ComplexNavigator\">\n  <cp-table-structure [complexSearch]=\"complexSearch\"\n                      [interactors]=\"interactors\"\n                      [interactorsSorting]=\"interactorsSorting\">\n  </cp-table-structure>\n</div>\n";

      /***/
    }),
    /***/92341: (
    /*!***********************************************************************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/complex/complex-results/complex-navigator/table-structure/table-header/table-header.component.html ***!
      \***********************************************************************************************************************************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */
      __webpack_exports__["default"] = "<div class=\"Complex-navigator\">\n  <table class=\"table CN-table\">\n    <!-- When table is not overflowing -->\n    <thead class=\"tableHead\" *ngIf=\"complexSearch.elements.length<=6\">\n    <tr>\n      <th class=\"interactorsHeader horizontal\">Interactors</th>\n      <th class=\"horizontal\" *ngFor=\"let complex of complexSearch.elements\">\n        <a [routerLink]=\"['/complex', complex.complexAC]\"\n           title=\"{{complex.complexAC}}\"\n           target=\"_blank\">\n          <div>\n            <span title=\"{{ complex.complexName }} - {{ complex.complexAC}}\">\n              <div class=\"line\"></div>\n                <div class=\"horizontal-label\">\n                  <i class=\"icon icon-generic small\" data-icon=\"x\"></i>\n                  {{ complex.complexName }}\n                </div>\n            </span>\n          </div>\n        </a>\n      </th>\n    </tr>\n    </thead>\n    <!-- When table is overflowing -->\n    <thead class=\"tableHeadOverflow\" *ngIf=\"complexSearch.elements.length>6\">\n    <tr [style.--cols]=\"complexSearch.elements.length\">\n      <th class=\"interactorsHeader\">Interactors</th>\n      <th class=\"rotate\" *ngFor=\"let complex of complexSearch.elements\">\n\n        <a [routerLink]=\"['/complex', complex.complexAC]\"\n           title=\"{{complex.complexAC}}\"\n           target=\"_blank\">\n          <div>\n            <span title=\"{{ complex.complexName }} - {{ complex.complexAC}}\">\n<!--            <div class=\"line\"></div>-->\n              <div class=\"tilted-label\">\n                <i class=\"icon icon-generic small\" data-icon=\"x\"></i>\n                {{ complex.complexName }}\n              </div>\n            </span>\n          </div>\n        </a>\n\n      </th>\n    </tr>\n    </thead>\n  </table>\n</div>\n\n";

      /***/
    }),
    /***/77194: (
    /*!*********************************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-interactor-column.component.html ***!
      \*********************************************************************************************************************************************************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */
      __webpack_exports__["default"] = "<div class=\"Complex-navigator\">\n  <table class=\"interactors-table\">\n    <!-- Interactors' column -->\n    <ng-container *ngFor=\" let interactor of enrichedInteractors; let i=index\">\n      <tr *ngIf=\"!interactor.hidden\">\n        <ng-container *ngIf=\"classificationChosen()=='Type'\">\n          <ng-container *ngFor=\"let oneType of rangeOfInteractorType()\">\n            <ng-container *ngIf=\"oneType[1]==i\">\n              <td [attr.rowspan]=\"oneType[3]\" class=\"interactorSeparation\" title=\"{{oneType[0]}}\">\n                <div class=\"interactorSeparationName\"> {{ oneType[0] }}</div>\n              </td>\n            </ng-container>\n          </ng-container>\n        </ng-container>\n        <ng-container *ngIf=\"classificationChosen()=='Organism'\">\n          <ng-container *ngFor=\"let oneOrganism of rangeOfInteractorOrganisms()\">\n            <ng-container *ngIf=\"oneOrganism[1]==i\">\n              <td [attr.rowspan]=\"oneOrganism[3]\" class=\"interactorSeparation\" title=\"{{oneOrganism[0]}}\">\n                <div class=\"interactorSeparationName\"> {{ oneOrganism[0] }}</div>\n              </td>\n            </ng-container>\n          </ng-container>\n        </ng-container>\n        <td class=\"interactorsColumn\">\n          <div>\n            {{ interactor.interactor.name }}\n            <i class=\"{{interactorTypeIcon(interactor.interactor)}}\"\n               title=\"{{interactor.interactor.interactorType}}\"></i>\n            <!-- Adding of the icons to access details of the interactor -->\n            <a [routerLink]=\"['/complex/search']\"\n               [queryParams]=\"{query: interactor.interactor.identifier, page: 1}\"\n               target=\"_blank\">\n              <i class=\"icon icon-functional small\" data-icon=\"1\"\n                 title=\"Complexes containing this interactor\"></i>\n            </a>\n          </div>\n          <!-- Icon for the expandable -->\n          <div class=\"container\" *ngIf=\"interactor.isSubComplex\">\n            <a title=\"{{ interactor.interactor.name }}'s interactors\" (click)=\"toggleSubcomplexExpandable(i)\">\n              {{ interactor.interactor.identifier }}\n              <i class=\"icon icon-common\" data-icon=\"&#xf078;\"\n                 style=\"font-size:small; margin-top: 2px\"></i>\n            </a>\n          </div>\n          <div *ngIf=\"showExternalLink(interactor.interactor)\" class=\"interactorType\">\n            <a href=\"{{interactor.interactor.identifierLink}}\"\n               target=\"_blank\">{{ interactor.interactor.identifier }}\n              <i class=\"icon icon-generic small\" data-icon=\"x\"></i>\n            </a>\n          </div>\n        </td>\n        <!-- Interactors' stoichiometry -->\n        <ng-container *ngFor=\"let complex of enrichedComplexes\">\n          <td class=\"intStoich\">\n            <div [ngClass]=\"displayTopLineClass(complex, i)\"></div>\n            <ng-container *ngIf=\"!!findInteractorInComplex(complex.complex, interactor.interactor.identifier)\">\n              <div class=\"stoichNum\"\n                   title=\"{{ getStochiometry(complex.complex, interactor.interactor.identifier) }}\">\n                {{ stochiometryOfInteractors(complex.complex, interactor.interactor.identifier) }}\n              </div>\n            </ng-container>\n            <ng-container class=\"stoichComponent\"\n                          *ngIf=\"findInteractorsInSubComplex(complex.complex, interactor.interactor.identifier).length > 0\">\n              <!-- subcomplexes' interactors' stoichiometry -->\n              <div class=\"stoichNum\"\n                   title=\"{{ getStoichiometrySubComplex(complex.complex, interactor.interactor.identifier) }}\">\n                {{ stoichiometryOfInteractorsMainTable(complex.complex, interactor.interactor.identifier) }}\n              </div>\n            </ng-container>\n            <div [ngClass]=\"displayBottomLineClass(complex, i)\"></div>\n          </td>\n        </ng-container>\n      </tr>\n      <!-- Expandable menu for subcomplexes -->\n      <ng-container *ngIf=\"interactor.expanded\">\n        <ng-container *ngIf=\"!!interactor.subComponents\">\n          <tbody class=\"expandedRows\">\n          <tr class=\"expandedRows\" *ngFor=\"let el of interactor.subComponents; let j=index\">\n            <td class=\"intStoich\">\n              <div style=\"font-weight: bold\">\n                <a [routerLink]=\"['/complex/search']\"\n                   [queryParams]=\"{query: el.identifier, page: 1}\"\n                   target=\"_blank\">\n                  {{ el.name }}\n                  <i class=\"{{interactorTypeIcon(el)}}\"\n                     title=\"{{interactor.interactor.interactorType}}\"></i>\n                  <i class=\"icon icon-functional small\" data-icon=\"1\"\n                     title=\"More complexes containing this interactor\"></i>\n                </a>\n              </div>\n              <div *ngIf=\"showExternalLink(el)\" class=\"interactorType\">\n                <a href=\"{{el.identifierLink}}\" target=\"_blank\">{{ el.identifier }}\n                  <i class=\"icon icon-generic small\" data-icon=\"x\" title=\"More information\"\n                  ></i>\n                </a>\n              </div>\n            </td>\n            <ng-container *ngFor=\"let complex of enrichedComplexes\">\n              <td class=\"intStoich\">\n                <div [ngClass]=\"displayTopLineClassExpanded(complex, i, j)\"></div>\n                <ng-container *ngIf=\"!!findInteractorInComplex(complex.complex, el.identifier)\">\n                  <div class=\"stoichNum\"\n                       title=\"{{ getStochiometry(complex.complex, el.identifier) }}\">\n                    {{ stochiometryOfInteractors(complex.complex, el.identifier) }}\n                  </div>\n                </ng-container>\n                <ng-container\n                  *ngIf=\"!!findInteractorInExpandedSubComplex(interactor, complex.complex, el.identifier)\">\n                  <!-- subcomplexes' interactors' stoichiometry -->\n                  <div class=\"stoichNum\"\n                       title=\"{{ getStochiometryInExpandedSubComplex(interactor, el.identifier) }}\">\n                    {{ stoichiometryOfInteractorsExpandable(interactor, el.identifier) }}\n                  </div>\n                </ng-container>\n                <div [ngClass]=\"displayBottomLineClassExpanded(complex, i, j)\"></div>\n              </td>\n            </ng-container>\n          </tr>\n          </tbody>\n        </ng-container>\n      </ng-container>\n    </ng-container>\n\n  </table>\n</div>\n";

      /***/
    }),
    /***/75118: (
    /*!*************************************************************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/complex/complex-results/complex-navigator/table-structure/table-structure.component.html ***!
      \*************************************************************************************************************************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */
      __webpack_exports__["default"] = "<div class=\"complexNavigatorTable\">\n  <div class=\"header\">\n    <cp-table-header [complexSearch]=\"complexSearch\">\n    </cp-table-header>\n  </div>\n  <div class=\"interactors\">\n    <cp-table-interactor-column\n      [complexSearch]=\"complexSearch\"\n      [interactors]=\"interactors\"\n      [interactorsSorting]=\"interactorsSorting\">\n    </cp-table-interactor-column>\n  </div>\n</div>\n\n";

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
      __webpack_exports__["default"] = "<div>\n  <h5 class=\"text-center\">{{currentPageIndex}} of {{lastPageIndex}}</h5>\n  <ul class=\"pagination text-center\" role=\"navigation\" aria-label=\"Pagination\">\n    <li class=\"arrow unavailable\" *ngIf=\"currentPageIndex != 1\" aria-disabled=\"true\"><a\n      (click)=\"getPreviousPage()\">&laquo; Previous</a></li>\n    <ng-container *ngFor=\"let index of pagination\">\n      <li *ngIf=\"index[1] == 'true'\" class=\"current\"><span class=\"show-for-sr\">You're on page</span>{{index[0]}}</li>\n      <li *ngIf=\"index[1] == 'false'\"><a (click)=\"getPage(index[0])\">{{index[0]}}</a></li>\n    </ng-container>\n    <li class=\"arrow\" *ngIf=\"currentPageIndex != lastPageIndex\"><a (click)=\"getNextPage()\">Next &raquo;</a></li>\n  </ul>\n</div>\n";

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
      __webpack_exports__["default"] = "<div class=\"margin-top-large margin-bottom-large row\">\n  <ng-container *ngIf=\"complexSearch;else loadingSpinner\">\n    <div class=\"columns medium-12\" *ngIf=\"complexSearch.totalNumberOfResults !== 0\">\n      <h2 class=\"padding-left-large\">Total number of results: {{ complexSearch.totalNumberOfResults }} </h2>\n      <div class=\"columns medium-4\">\n        <cp-complex-filter *ngIf=\"spicesFilter && bioRoleFilter && interactorTypeFilter\"\n                           [spicesFilter]=\"spicesFilter\"\n                           [bioRoleFilter]=\"bioRoleFilter\"\n                           [interactorTypeFilter]=\"interactorTypeFilter\" [facets]=\"complexSearch.facets\"\n                           (onResetAllFilters)=\"onResetAllFilters()\"\n                           (onSpicesFilterChanged)=\"onSpicesFilterChanged($event)\"\n                           (onBiologicalRoleFilterChanged)=\"onBiologicalRoleFilterChanged($event)\"\n                           (onInteractorTypeFilterChanged)=\"onInteractorTypeFilterChanged($event)\">\n        </cp-complex-filter>\n      </div>\n      <div class=\"columns medium-8\">\n        <cp-complex-paginator [currentPageIndex]=\"currentPageIndex\"\n                              [lastPageIndex]=\"lastPageIndex\"\n                              (onPageChange)=\"onPageChange($event)\"></cp-complex-paginator>\n        <div class=\"listOfResults\" *ngIf=\"DisplayType==false\">\n          <div class=\"displayButton\" style=\"text-align: center\">\n            <input type=\"submit\" name=\"submit\" value=\"Complex navigator\" class=\"button\"\n                   (click)=\"toggleDisplayType()\">\n          </div>\n          <cp-complex-list [complexSearch]=\"complexSearch\">\n          </cp-complex-list>\n        </div>\n        <div class=\"Complex-navigator\" *ngIf=\"DisplayType\">\n          <div class=\"buttonContainer\">\n            <div class=\"displayButton\" style=\"text-align: center\">\n              <input type=\"submit\" name=\"submit\" value=\"View list\" class=\"button\"\n                     (click)=\"toggleDisplayType()\">\n            </div>\n            <div class=\"sortingInteractors\">\n              <input type=\"submit\" name=\"classificationButton\" value=\"Interactors sorting\" class=\"button\">\n              <div class=\"typeOfSorting\">\n                <input type=\"submit\" name=\"appearanceClassification\" value=\"Occurrence\" class=\"button\"\n                       (click)=\"setInteractorsSorting('Appearance')\">\n                <input type=\"submit\" name=\"typeClassification\" value=\"Type\" class=\"button\"\n                       (click)=\"setInteractorsSorting('Type')\">\n                <input type=\"submit\" name=\"organismClassification\" value=\"Organism\" class=\"button\"\n                       (click)=\"setInteractorsSorting('Organism')\">\n                <input type=\"submit\" name=\"geneClassification\" value=\"Orthology (Not available yet)\" class=\"button\"\n                       (click)=\"setInteractorsSorting('Orthology')\">\n              </div>\n            </div>\n          </div>\n          <div class=\"Matrix\">\n            <cp-complex-navigator [complexSearch]=\"complexSearch\"\n                                  [interactors]=\"allInteractorsInComplexSearch\"\n                                  [interactorsSorting]=\"interactorsSorting\">\n            </cp-complex-navigator>\n          </div>\n        </div>\n        <cp-complex-paginator [currentPageIndex]=\"currentPageIndex\"\n                              [lastPageIndex]=\"lastPageIndex\"\n                              (onPageChange)=\"onPageChange($event)\"></cp-complex-paginator>\n      </div>\n    </div>\n\n    <div class=\"columns medium-12 callout alert\" *ngIf=\"complexSearch.totalNumberOfResults === 0\">\n      <h2>No Complex Portal results found</h2>\n      <h3>We're sorry but we couldn't find anything that matched your search for: <b>{{ query }}</b></h3>\n      <h4>Please consider refining your terms:</h4>\n      <ul>\n        <li>Make sure all words are spelled correctly</li>\n        <li>Try different keywords</li>\n        <li>Be more precise: use gene or protein IDs, e.g. Ndc80 or Q04571</li>\n        <li>Remove quotes around phrases to search for each word individually. bike shed will often show more results\n          than\n          \"bike shed\"\n        </li>\n      </ul>\n    </div>\n  </ng-container>\n  <ng-template #loadingSpinner>\n    <cp-progress-spinner [query]=\"query\"></cp-progress-spinner>\n  </ng-template>\n</div>\n";

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
      module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wbGV4LWxpc3QuY29tcG9uZW50LmNzcyJ9 */";

      /***/
    }),
    /***/14332: (
    /*!*******************************************************************************************!*\
      !*** ./src/app/complex/complex-results/complex-navigator/complex-navigator.component.css ***!
      \*******************************************************************************************/
    /***/
    function _(module) {
      module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wbGV4LW5hdmlnYXRvci5jb21wb25lbnQuY3NzIn0= */";

      /***/
    }),
    /***/32149: (
    /*!*******************************************************************************************************************!*\
      !*** ./src/app/complex/complex-results/complex-navigator/table-structure/table-header/table-header.component.css ***!
      \*******************************************************************************************************************/
    /***/
    function _(module) {
      module.exports = "/* Header */\n\nthead {\n  border: 0;\n  background-color: white;\n  border-right: 0 solid white;\n}\n\n.CN-table {\n  -webkit-clip-path: fill-box;\n          clip-path: fill-box;\n}\n\n/* Rotated complexes names */\n\n.interactorsHeader {\n  min-width: 130px;\n  max-width: 130px;\n  position: sticky;\n  left: 0;\n  z-index: 4;\n  color: #007c82;\n  background-color: white;\n  padding-top: 150px;\n  text-align: right;\n  border-bottom: 3px solid #007c82;\n}\n\n.tilted-label {\n  padding-left: 5px;\n  text-overflow: ellipsis;\n  width: 28ch;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n/*.CN-table {*/\n\n/*  position: relative;*/\n\n/*}*/\n\n.CN-table .tableHeadOverflow tr {\n  --cols: 1;\n  display: grid;\n  grid-template-columns: 130px repeat(auto-fit, 100px);\n  /*grid-auto-flow: column;*/\n  width: calc(130px + 100px * var(--cols) + 185px);\n}\n\n.CN-table .tableHeadOverflow th.rotate {\n  position: relative;\n  width: 340px;\n  height: 72px !important;\n  color: white;\n  /*background-color: #0e6f76;*/\n  font-size: 14px;\n  text-align: left;\n  border-top: 1px solid white;\n  top: 55px;\n  left: -27px;\n  display: flex;\n  align-items: center;\n  align-content: center;\n  padding: 0;\n\n  transform: rotate(-45deg);\n\n\n  /* line */\n  border-top: 1px solid white;\n}\n\n.CN-table .tableHeadOverflow th.rotate a {\n  width: 100%;\n  height: 100%;\n  align-content: center;\n  background-color: #007c82;\n  padding: 0 0 0 70px;\n}\n\n/*.line {*/\n\n/*  position: absolute;*/\n\n/*  top: auto;*/\n\n/*  bottom: auto;*/\n\n/*  background: #0e6f76;*/\n\n/*  margin-top: 7px;*/\n\n/*  left: 0;*/\n\n/*  width: 66px;*/\n\n/*  height: 5px;*/\n\n/*  border-radius: 4px;*/\n\n/*}*/\n\n/* Horizontal complexes name */\n\n.CN-table th.horizontal.interactorsHeader {\n  padding: 5px;\n  min-width: 130px;\n  max-width: 130px;\n  font-size: medium;\n  border-bottom: 3px solid #007c82;\n  border-left: none;\n  text-align: right;\n  color: #007c82;\n  background-color: white;\n}\n\n.horizontal-label {\n  text-align: center;\n  text-overflow: ellipsis;\n  width: 90%;\n  white-space: nowrap;\n  overflow: hidden;\n  margin: auto;\n}\n\n.CN-table th.horizontal {\n  color: white;\n  background-color: #007c82;\n  border: 1px solid white;\n  min-width: 100px;\n  max-width: 100px;\n  height: 50px;\n  font-size: 15px;\n}\n\na:visited {\n  color: white;\n}\n\na {\n  color: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlLWhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFdBQVc7O0FBRVg7RUFDRSxTQUFTO0VBQ1QsdUJBQXVCO0VBQ3ZCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLDJCQUFtQjtVQUFuQixtQkFBbUI7QUFDckI7O0FBRUEsNEJBQTRCOztBQUU1QjtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLE9BQU87RUFDUCxVQUFVO0VBQ1YsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUEsY0FBYzs7QUFDZCx3QkFBd0I7O0FBRXhCLElBQUk7O0FBRUo7RUFDRSxTQUFTO0VBQ1QsYUFBYTtFQUNiLG9EQUFvRDtFQUNwRCwwQkFBMEI7RUFDMUIsZ0RBQWdEO0FBQ2xEOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLDJCQUEyQjtFQUMzQixTQUFTO0VBQ1QsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLFVBQVU7O0VBRVYseUJBQXlCOzs7RUFHekIsU0FBUztFQUNULDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7O0FBR0EsVUFBVTs7QUFDVix3QkFBd0I7O0FBQ3hCLGVBQWU7O0FBQ2Ysa0JBQWtCOztBQUNsQix5QkFBeUI7O0FBQ3pCLHFCQUFxQjs7QUFDckIsYUFBYTs7QUFDYixpQkFBaUI7O0FBQ2pCLGlCQUFpQjs7QUFDakIsd0JBQXdCOztBQUN4QixJQUFJOztBQUVKLDhCQUE4Qjs7QUFFOUI7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZ0NBQWdDO0VBQ2hDLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJ0YWJsZS1oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEhlYWRlciAqL1xuXG50aGVhZCB7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yaWdodDogMCBzb2xpZCB3aGl0ZTtcbn1cblxuLkNOLXRhYmxlIHtcbiAgY2xpcC1wYXRoOiBmaWxsLWJveDtcbn1cblxuLyogUm90YXRlZCBjb21wbGV4ZXMgbmFtZXMgKi9cblxuLmludGVyYWN0b3JzSGVhZGVyIHtcbiAgbWluLXdpZHRoOiAxMzBweDtcbiAgbWF4LXdpZHRoOiAxMzBweDtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogNDtcbiAgY29sb3I6ICMwMDdjODI7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXRvcDogMTUwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzAwN2M4Mjtcbn1cblxuLnRpbHRlZC1sYWJlbCB7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2lkdGg6IDI4Y2g7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi8qLkNOLXRhYmxlIHsqL1xuLyogIHBvc2l0aW9uOiByZWxhdGl2ZTsqL1xuXG4vKn0qL1xuXG4uQ04tdGFibGUgLnRhYmxlSGVhZE92ZXJmbG93IHRyIHtcbiAgLS1jb2xzOiAxO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEzMHB4IHJlcGVhdChhdXRvLWZpdCwgMTAwcHgpO1xuICAvKmdyaWQtYXV0by1mbG93OiBjb2x1bW47Ki9cbiAgd2lkdGg6IGNhbGMoMTMwcHggKyAxMDBweCAqIHZhcigtLWNvbHMpICsgMTg1cHgpO1xufVxuXG4uQ04tdGFibGUgLnRhYmxlSGVhZE92ZXJmbG93IHRoLnJvdGF0ZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDM0MHB4O1xuICBoZWlnaHQ6IDcycHggIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlO1xuICAvKmJhY2tncm91bmQtY29sb3I6ICMwZTZmNzY7Ki9cbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgd2hpdGU7XG4gIHRvcDogNTVweDtcbiAgbGVmdDogLTI3cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMDtcblxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuXG5cbiAgLyogbGluZSAqL1xuICBib3JkZXItdG9wOiAxcHggc29saWQgd2hpdGU7XG59XG5cbi5DTi10YWJsZSAudGFibGVIZWFkT3ZlcmZsb3cgdGgucm90YXRlIGEge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdjODI7XG4gIHBhZGRpbmc6IDAgMCAwIDcwcHg7XG59XG5cblxuLyoubGluZSB7Ki9cbi8qICBwb3NpdGlvbjogYWJzb2x1dGU7Ki9cbi8qICB0b3A6IGF1dG87Ki9cbi8qICBib3R0b206IGF1dG87Ki9cbi8qICBiYWNrZ3JvdW5kOiAjMGU2Zjc2OyovXG4vKiAgbWFyZ2luLXRvcDogN3B4OyovXG4vKiAgbGVmdDogMDsqL1xuLyogIHdpZHRoOiA2NnB4OyovXG4vKiAgaGVpZ2h0OiA1cHg7Ki9cbi8qICBib3JkZXItcmFkaXVzOiA0cHg7Ki9cbi8qfSovXG5cbi8qIEhvcml6b250YWwgY29tcGxleGVzIG5hbWUgKi9cblxuLkNOLXRhYmxlIHRoLmhvcml6b250YWwuaW50ZXJhY3RvcnNIZWFkZXIge1xuICBwYWRkaW5nOiA1cHg7XG4gIG1pbi13aWR0aDogMTMwcHg7XG4gIG1heC13aWR0aDogMTMwcHg7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzAwN2M4MjtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBjb2xvcjogIzAwN2M4MjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5ob3Jpem9udGFsLWxhYmVsIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2lkdGg6IDkwJTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uQ04tdGFibGUgdGguaG9yaXpvbnRhbCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2M4MjtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIG1pbi13aWR0aDogMTAwcHg7XG4gIG1heC13aWR0aDogMTAwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG5hOnZpc2l0ZWQge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmEge1xuICBjb2xvcjogd2hpdGU7XG59XG4iXX0= */";

      /***/
    }),
    /***/88066: (
    /*!*****************************************************************************************************************************************!*\
      !*** ./src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-interactor-column.component.css ***!
      \*****************************************************************************************************************************************/
    /***/
    function _(module) {
      module.exports = "/* interactors column */\n.interactorsColumn {\n  position: sticky;\n  left: 0;\n  z-index: 30;\n  max-height: 50px;\n  min-height: 50px;\n  min-width: 130px;\n  max-width: 130px;\n  padding: 5px;\n  text-align: end;\n  color: #0e6f76;\n  font-weight: bold;\n}\n.interactorsColumn a {\n  font-weight: normal;\n}\n.intStoich {\n  height: 50px;\n  max-width: 100px;\n  min-width: 100px;\n  font-size: medium;\n}\n.stoichNum {\n  width: 4ch;\n  height: 4ch;\n  border-radius: 4ch;\n  background-color: #0e6f76;\n  text-align: center;\n  padding-top: 0.5ch;\n  color: white;\n  font-size: small;\n  margin-left: auto;\n  margin-right: auto;\n}\n.verticalLine, .transparentVerticalLine {\n  margin-left: auto;\n  margin-right: auto;\n  min-width: 1%;\n  max-width: 1%;\n  max-height: 50%;\n  min-height: 50%;\n}\n.verticalLine {\n  border-right: 5px solid #0e6f76;\n}\n.transparentVerticalLine {\n  border-right: 0;\n}\ni:not(.small) {\n  font-size: large;\n}\ntr:nth-child(even) {\n  background-color: #dfeced;\n}\ntr:nth-child(odd) {\n  background-color: #f7f9fa;\n}\ntbody.expandedRows {\n  /*box-shadow: inset 0px 0px 16px 2px #0e6f76;*/\n  color: #0e6f76;\n  position: relative;\n  /*filter: shadow(0.5);*/\n}\ntbody.expandedRows:before {\n  content: '';\n  position: absolute;\n  inset: -2px -1px -2px -1px;\n  /*background: #0e6f7612;*/\n  /*box-shadow: inset 0 0 10px 2px #0e6f7696;*/\n  background: linear-gradient(0deg, #0e6f7696 0px, transparent 10px),\n    /*linear-gradient(90deg, #0e6f7696 0px, transparent 10px),*/ linear-gradient(180deg, #0e6f7696 0px, transparent 10px);\n  /*linear-gradient(270deg, #0e6f7696 0px, transparent 10px);*/\n  /*border-left: 4px solid #0e6f76;*/\n}\na, a:visited {\n  color: #0e6f76;\n}\n.interactorSeparation {\n  min-width: 2ch;\n  max-width: 2ch;\n  background-color: #0e6f76;\n  border: 1px solid white;\n  text-align: left;\n  align-items: start;\n  min-height: 50px;\n  padding-left: auto;\n  padding-right: auto;\n}\n.interactorSeparationName {\n  text-align: center;\n  transform: rotate(-90deg);\n  font-weight: lighter;\n  font-size: small;\n  color: white;\n  line-height: 0.8;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlLWludGVyYWN0b3ItY29sdW1uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdUJBQXVCO0FBQ3ZCO0VBQ0UsZ0JBQWdCO0VBQ2hCLE9BQU87RUFDUCxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixlQUFlO0VBQ2YsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7QUFHQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsYUFBYTtFQUNiLGVBQWU7RUFDZixlQUFlO0FBQ2pCO0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLDhDQUE4QztFQUM5QyxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHVCQUF1QjtBQUN6QjtBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIseUJBQXlCO0VBQ3pCLDRDQUE0QztFQUM1Qzt5SEFDdUg7RUFDdkgsNERBQTREO0VBQzVELGtDQUFrQztBQUNwQztBQUdBO0VBQ0UsY0FBYztBQUNoQjtBQUdBO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InRhYmxlLWludGVyYWN0b3ItY29sdW1uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBpbnRlcmFjdG9ycyBjb2x1bW4gKi9cbi5pbnRlcmFjdG9yc0NvbHVtbiB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDMwO1xuICBtYXgtaGVpZ2h0OiA1MHB4O1xuICBtaW4taGVpZ2h0OiA1MHB4O1xuICBtaW4td2lkdGg6IDEzMHB4O1xuICBtYXgtd2lkdGg6IDEzMHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIHRleHQtYWxpZ246IGVuZDtcbiAgY29sb3I6ICMwZTZmNzY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uaW50ZXJhY3RvcnNDb2x1bW4gYSB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi5pbnRTdG9pY2gge1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1heC13aWR0aDogMTAwcHg7XG4gIG1pbi13aWR0aDogMTAwcHg7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xufVxuXG5cbi5zdG9pY2hOdW0ge1xuICB3aWR0aDogNGNoO1xuICBoZWlnaHQ6IDRjaDtcbiAgYm9yZGVyLXJhZGl1czogNGNoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGU2Zjc2O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAwLjVjaDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IHNtYWxsO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4udmVydGljYWxMaW5lLCAudHJhbnNwYXJlbnRWZXJ0aWNhbExpbmUge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtaW4td2lkdGg6IDElO1xuICBtYXgtd2lkdGg6IDElO1xuICBtYXgtaGVpZ2h0OiA1MCU7XG4gIG1pbi1oZWlnaHQ6IDUwJTtcbn1cblxuLnZlcnRpY2FsTGluZSB7XG4gIGJvcmRlci1yaWdodDogNXB4IHNvbGlkICMwZTZmNzY7XG59XG5cbi50cmFuc3BhcmVudFZlcnRpY2FsTGluZSB7XG4gIGJvcmRlci1yaWdodDogMDtcbn1cblxuaTpub3QoLnNtYWxsKSB7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG59XG5cbnRyOm50aC1jaGlsZChldmVuKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZmVjZWQ7XG59XG5cbnRyOm50aC1jaGlsZChvZGQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjlmYTtcbn1cblxudGJvZHkuZXhwYW5kZWRSb3dzIHtcbiAgLypib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDE2cHggMnB4ICMwZTZmNzY7Ki9cbiAgY29sb3I6ICMwZTZmNzY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLypmaWx0ZXI6IHNoYWRvdygwLjUpOyovXG59XG5cbnRib2R5LmV4cGFuZGVkUm93czpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBpbnNldDogLTJweCAtMXB4IC0ycHggLTFweDtcbiAgLypiYWNrZ3JvdW5kOiAjMGU2Zjc2MTI7Ki9cbiAgLypib3gtc2hhZG93OiBpbnNldCAwIDAgMTBweCAycHggIzBlNmY3Njk2OyovXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjMGU2Zjc2OTYgMHB4LCB0cmFuc3BhcmVudCAxMHB4KSxcbiAgICAvKmxpbmVhci1ncmFkaWVudCg5MGRlZywgIzBlNmY3Njk2IDBweCwgdHJhbnNwYXJlbnQgMTBweCksKi8gbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzBlNmY3Njk2IDBweCwgdHJhbnNwYXJlbnQgMTBweCk7XG4gIC8qbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzBlNmY3Njk2IDBweCwgdHJhbnNwYXJlbnQgMTBweCk7Ki9cbiAgLypib3JkZXItbGVmdDogNHB4IHNvbGlkICMwZTZmNzY7Ki9cbn1cblxuXG5hLCBhOnZpc2l0ZWQge1xuICBjb2xvcjogIzBlNmY3Njtcbn1cblxuXG4uaW50ZXJhY3RvclNlcGFyYXRpb24ge1xuICBtaW4td2lkdGg6IDJjaDtcbiAgbWF4LXdpZHRoOiAyY2g7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZTZmNzY7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gIG1pbi1oZWlnaHQ6IDUwcHg7XG4gIHBhZGRpbmctbGVmdDogYXV0bztcbiAgcGFkZGluZy1yaWdodDogYXV0bztcbn1cblxuLmludGVyYWN0b3JTZXBhcmF0aW9uTmFtZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbGluZS1oZWlnaHQ6IDAuODtcbn1cbiJdfQ== */";

      /***/
    }),
    /***/71108: (
    /*!*********************************************************************************************************!*\
      !*** ./src/app/complex/complex-results/complex-navigator/table-structure/table-structure.component.css ***!
      \*********************************************************************************************************/
    /***/
    function _(module) {
      module.exports = ".complexNavigatorTable {\n  border-collapse: separate;\n  /* overflow-x: scroll;  remove to make the header sticky */\n\n  height: 100%;\n}\n\n.header {\n  position: sticky;\n  top: 38px;\n  z-index: 2;\n\n}\n\n.interactors {\n  top: -21px;\n  z-index: 1;\n  position: relative;\n  border-top: 1px solid black;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlLXN0cnVjdHVyZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLDBEQUEwRDs7RUFFMUQsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxVQUFVOztBQUVaOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsMkJBQTJCO0FBQzdCIiwiZmlsZSI6InRhYmxlLXN0cnVjdHVyZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbXBsZXhOYXZpZ2F0b3JUYWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG4gIC8qIG92ZXJmbG93LXg6IHNjcm9sbDsgIHJlbW92ZSB0byBtYWtlIHRoZSBoZWFkZXIgc3RpY2t5ICovXG5cbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uaGVhZGVyIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAzOHB4O1xuICB6LWluZGV4OiAyO1xuXG59XG5cbi5pbnRlcmFjdG9ycyB7XG4gIHRvcDogLTIxcHg7XG4gIHotaW5kZXg6IDE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xufVxuIl19 */";

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
      module.exports = ".typeOfSorting {\n  display: none;\n}\n\n.sortingInteractors:hover .typeOfSorting {\n  display: flex;\n  margin-top: -16px;\n\n}\n\n.buttonContainer {\n  display: inline-flex;\n  width: 130%;\n  height: 80px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBsZXgtcmVzdWx0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjs7QUFFbkI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsV0FBVztFQUNYLFlBQVk7QUFDZCIsImZpbGUiOiJjb21wbGV4LXJlc3VsdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50eXBlT2ZTb3J0aW5nIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNvcnRpbmdJbnRlcmFjdG9yczpob3ZlciAudHlwZU9mU29ydGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IC0xNnB4O1xuXG59XG5cbi5idXR0b25Db250YWluZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgd2lkdGg6IDEzMCU7XG4gIGhlaWdodDogODBweDtcbn1cbiJdfQ== */";

      /***/
    })
  }]);
})();
//# sourceMappingURL=src_app_complex_complex-results_complex-results_module_ts-es5.js.map