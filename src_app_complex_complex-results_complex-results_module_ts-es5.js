(function () {
  "use strict";

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  (self["webpackChunkcomplex_portal_view"] = self["webpackChunkcomplex_portal_view"] || []).push([["src_app_complex_complex-results_complex-results_module_ts"], {
    /***/82682: (
    /*!*************************************************!*\
      !*** ./src/app/complex/complex-portal-utils.ts ***!
      \*************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"interactorTypeIcon": function interactorTypeIcon() {
          return /* binding */_interactorTypeIcon;
        },
        /* harmony export */"organismIcon": function organismIcon() {
          return /* binding */_organismIcon;
        }
        /* harmony export */
      });
      function _interactorTypeIcon(type) {
        switch (type) {
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
      function _organismIcon(organism) {
        var formattedName = formatOrganismName(organism);
        switch (formattedName) {
          case 'Homo sapiens':
          case 'Homo sapiens; 9606':
            return 'icon icon-species icon-human';
          case 'Mus musculus':
          case 'Mus musculus; 10090':
            return 'icon icon-species icon-mouse';
          case 'Saccharomyces cerevisiae (strain ATCC 204508 / S288c)':
          case 'Schizosaccharomyces pombe (strain 972 / ATCC 24843)':
          case 'Saccharomyces cerevisiae; 559292':
            return 'icon icon-species icon-yeast';
          case 'Escherichia coli (strain K12)':
          case 'Escherichia coli':
          case 'Escherichia coli (strain K12); 83333':
          case 'Escherichia coli; 562':
          case 'Pseudomonas aeruginosa (strain ATCC 15692 / DSM 22644 / CIP 104116 ' + '/ JCM 14847 / LMG 12228 / 1C / PRS 101 / PAO1)':
          case 'Pseudomonas aeruginosa (strain ATCC 15692 / PAO1 / 1C / PRS 101 / LMG 12228); 208964':
            return 'icon icon-species icon-ecoli';
          case 'Rattus norvegicus':
          case 'Rattus norvegicus (Rat)':
          case 'Rattus norvegicus (Rat); 10116':
            return 'icon icon-species icon-rat';
          case 'Caenorhabditis elegans':
          case 'Caenorhabditis elegans; 6239':
            return 'icon icon-species icon-c-elegans';
          case 'Gallus gallus':
          case 'Gallus gallus (Chicken); 9031':
            return 'icon icon-species icon-chicken';
          case 'Drosophila melanogaster':
          case 'Drosophila melanogaster (Fruit fly); 7227':
            return 'icon icon-species icon-fly';
          case 'Bos taurus':
          case 'Bos taurus (Bovine); 9913':
            return 'icon icon-species icon-cow';
          case 'Oryctolagus cuniculus':
          case 'Oryctolagus cuniculus (Rabbit); 9986':
            return 'icon icon-species icon-rabbit';
          case 'Ovis aries':
          case 'Ovis aries (Sheep); 9940':
            return 'icon icon-species icon-sheep';
          case 'Xenopus laevis':
          case 'Xenopus laevis (African clawed frog); 8355':
            return 'icon icon-species icon-frog';
          case 'Canis lupus familiaris':
          case 'Canis familiaris (dog); 9615':
            return 'icon icon-species icon-dog';
          case 'Vibrio cholerae serotype O1 (strain ATCC 39315 / El Tor Inaba N16961)':
          case 'Vibrio cholerae; 243277':
            return 'assets/images/EMBL_Species_Vibrio_cholerae.svg';
          case 'Crotalus durissus terrificus':
          case 'Crotalus durissus terrificus; 8732':
            return 'assets/images/EMBL_Species_RattleSnake.svg';
          case 'Sus scrofa':
          case 'Sus scrofa (Pig); 9823':
            return 'icon icon-species icon-pig';
          case 'Torpedo marmorata':
          case 'Tetronarce californica':
          case 'Torpedo marmorata; 7788':
          case 'Torpedo californica (Pacific electric ray); 7787':
            return 'icon icon-species icon-ray';
          case 'Lymnaea stagnalis':
          case 'Lymnaea stagnalis; 6523':
            return 'icon icon-species icon-snail';
          case 'Arabidopsis thaliana':
          case 'Arabidopsis thaliana (Mouse-ear cress); 3702':
            return 'icon icon-species icon-brassica';
          case 'Danio rerio':
          case 'Danio rerio (Zebrafish); 7955':
            return 'icon icon-species icon-zebrafish';
          case 'Severe acute respiratory syndrome coronavirus':
          case 'Human SARS coronavirus; 694009':
          case 'SARS-CoV-2; 2697049':
          case 'Severe acute respiratory syndrome coronavirus 2':
          case 'Middle East respiratory syndrome-related coronavirus (isolate United Kingdom/H123990006/2012)':
          case 'Middle East respiratory syndrome-related coronavirus (isolate United Kingdom/H123990006/2012) (Betacoronavirus England 1); 1263720':
          case 'Human betacoronavirus 2c EMC/2012':
          case 'Human betacoronavirus 2c EMC/2012; 1235996':
            return 'icon icon-species icon-virus';
        }
        return ' ';
      }
      function formatOrganismName(name) {
        if (name.includes(';')) {
          var end = name.indexOf(';');
          return name.substring(0, end);
        }
        return name;
      }

      /***/
    }),
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
    /***/8507: (
    /*!**********************************************************************************************************!*\
      !*** ./src/app/complex/complex-results/complex-navigator-buttons/complex-navigator-buttons.component.ts ***!
      \**********************************************************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"ComplexNavigatorButtonsComponent": function ComplexNavigatorButtonsComponent() {
          return /* binding */_ComplexNavigatorButtonsComponent;
        }
        /* harmony export */
      });
      /* harmony import */
      var _Users_susiehuget_Documents_GitHub_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_complex_navigator_buttons_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./complex-navigator-buttons.component.html */53226);
      /* harmony import */
      var _complex_navigator_buttons_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./complex-navigator-buttons.component.css */1604);
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/core */2316);
      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      var _ComplexNavigatorButtonsComponent = /*#__PURE__*/function () {
        function ComplexNavigatorButtonsComponent() {
          _classCallCheck(this, ComplexNavigatorButtonsComponent);
          this.interactorsSortingChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          this.organismIconDisplayChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          this.interactorTypeDisplayChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          this.IDDisplayChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        }
        _createClass(ComplexNavigatorButtonsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.updateDisplay();
          }
        }, {
          key: "InteractorsSortingChanges",
          value: function InteractorsSortingChanges(typeOfSorting) {
            this.interactorsSortingChange.emit(typeOfSorting);
            if (this.typeOfDisplay === 'detailed') {
              if (typeOfSorting === 'Type') {
                this.interactorTypeDisplay = false;
                this.organismIconDisplay = true;
              } else if (typeOfSorting === 'Organism') {
                this.organismIconDisplay = false;
                this.interactorTypeDisplay = true;
              }
              this.updateDisplay();
            }
          }
        }, {
          key: "DisplayingOrganism",
          value: function DisplayingOrganism() {
            this.organismIconDisplay = !this.organismIconDisplay;
            this.updateDisplay();
          }
        }, {
          key: "DisplayingType",
          value: function DisplayingType() {
            this.interactorTypeDisplay = !this.interactorTypeDisplay;
            this.updateDisplay();
          }
        }, {
          key: "DisplayingID",
          value: function DisplayingID() {
            this.IDDisplay = !this.IDDisplay;
            this.updateDisplay();
          }
        }, {
          key: "setDisplayType",
          value: function setDisplayType(type) {
            if (type === 'compact') {
              this.compactDisplay();
            } else if (type === 'detailed') {
              this.detailedDisplay();
            }
          }
        }, {
          key: "compactDisplay",
          value: function compactDisplay() {
            this.organismIconDisplay = false;
            this.interactorTypeDisplay = false;
            this.IDDisplay = false;
            this.typeOfDisplay = 'compact';
            this.changesEmitter();
          }
        }, {
          key: "detailedDisplay",
          value: function detailedDisplay() {
            this.organismIconDisplay = true;
            this.interactorTypeDisplay = true;
            this.IDDisplay = true;
            this.typeOfDisplay = 'detailed';
            this.changesEmitter();
          }
        }, {
          key: "updateDisplay",
          value: function updateDisplay() {
            if (this.organismIconDisplay || this.interactorTypeDisplay || this.IDDisplay) {
              this.typeOfDisplay = 'detailed';
            } else {
              this.typeOfDisplay = 'compact';
            }
            this.changesEmitter();
          }
        }, {
          key: "changesEmitter",
          value: function changesEmitter() {
            this.organismIconDisplayChange.emit(this.organismIconDisplay);
            this.interactorTypeDisplayChange.emit(this.interactorTypeDisplay);
            this.IDDisplayChange.emit(this.IDDisplay);
          }
        }]);
        return ComplexNavigatorButtonsComponent;
      }();
      _ComplexNavigatorButtonsComponent.propDecorators = {
        interactorsSortingChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }],
        organismIconDisplayChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }],
        interactorTypeDisplayChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }],
        IDDisplayChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }],
        interactorsSorting: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        organismIconDisplay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        interactorTypeDisplay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        IDDisplay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }]
      };
      _ComplexNavigatorButtonsComponent = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'cp-complex-navigator-buttons',
        template: _Users_susiehuget_Documents_GitHub_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_complex_navigator_buttons_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_complex_navigator_buttons_component_css__WEBPACK_IMPORTED_MODULE_1__]
      })], _ComplexNavigatorButtonsComponent);

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
      var _ComplexNavigatorRatingComponent = /*#__PURE__*/function () {
        function ComplexNavigatorRatingComponent(analyticsService) {
          _classCallCheck(this, ComplexNavigatorRatingComponent);
          this.analyticsService = analyticsService;
          this.visible = true;
        }
        _createClass(ComplexNavigatorRatingComponent, [{
          key: "selectRating",
          value: function selectRating(rating) {
            this.selectedRating = rating;
            // console.log(`Selected rating: ${rating}`);
            this.analyticsService.rateComplexNavigator(this.selectedRating);
            this.ratingVisibility();
          }
        }, {
          key: "ratingVisibility",
          value: function ratingVisibility() {
            this.visible = false;
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
      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/core */2316);
      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      var _ComplexNavigatorComponent = /*#__PURE__*/_createClass(function ComplexNavigatorComponent() {
        _classCallCheck(this, ComplexNavigatorComponent);
        this.interactorsSorting = 'Occurrence';
        this.organismIconDisplay = true;
        this.interactorTypeDisplay = true;
        this.IDDisplay = true;
      });
      _ComplexNavigatorComponent.propDecorators = {
        complexSearch: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        interactors: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }]
      };
      _ComplexNavigatorComponent = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
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
      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/core */2316);
      /* harmony import */
      var _complex_portal_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../../../complex-portal-utils */82682);
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
          key: "isInteractorSortingSet",
          value: function isInteractorSortingSet() {
            return this.interactorsSorting === 'Type' || this.interactorsSorting === 'Organism';
          }
        }, {
          key: "iconOrganism",
          value: function iconOrganism(organismName) {
            return (0, _complex_portal_utils__WEBPACK_IMPORTED_MODULE_2__.organismIcon)(organismName);
          }
        }]);
        return TableHeaderComponent;
      }();
      _TableHeaderComponent.propDecorators = {
        complexes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }],
        interactorsSorting: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }]
      };
      _TableHeaderComponent = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'cp-table-header',
        template: _Users_susiehuget_Documents_GitHub_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_table_header_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_table_header_component_css__WEBPACK_IMPORTED_MODULE_1__]
      })], _TableHeaderComponent);

      /***/
    }),
    /***/65766: (
    /*!******************************************************************************************************************************!*\
      !*** ./src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/complex-navigator-utils.ts ***!
      \******************************************************************************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"ComponentWithStoichiometry": function ComponentWithStoichiometry() {
          return /* binding */_ComponentWithStoichiometry;
        },
        /* harmony export */"findInteractorInComplex": function findInteractorInComplex() {
          return /* binding */_findInteractorInComplex;
        }
        /* harmony export */
      });
      var _ComponentWithStoichiometry = /*#__PURE__*/_createClass(function _ComponentWithStoichiometry() {
        _classCallCheck(this, _ComponentWithStoichiometry);
      });
      function _findInteractorInComplex(complex, interactorId, enrichedInteractors) {
        var interactor = findInteractorInComplexComponents(complex.interactors, interactorId, enrichedInteractors);
        if (!!interactor) {
          return {
            identifier: interactor.identifier,
            stochiometryValue: interactor.stochiometryValue,
            stochiometryText: getStoichiometryText(interactor.stochiometryValue),
            stochiometryValueFormatted: formatStoichiometryValues(interactor.stochiometryValue)
          };
        }
        return null;
      }
      // Private functions
      function findInteractorInComplexComponents(complexComponents, interactorId, enrichedInteractors) {
        // We look for the interactor in the complex, as one of the components, or as part of any subcomplex of the complex, recursively.
        // Even if we find a match for the interactor as one of the complex components, we keep looking at other components, as the interactor
        // could also be part of a subcomplex, so the stoichiometry would need to be added for all matches.
        var interactorFound = false;
        var stoichiometry = null;
        // We iterate through all the components of the complex to find matches
        var _iterator = _createForOfIteratorHelper(complexComponents),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var complexComponent = _step.value;
            var interactorMatch = findInteractorInComplexComponent(complexComponent, interactorId, enrichedInteractors);
            if (!!interactorMatch) {
              // We found a match for the interactor, on this component, or on a subcomponent of it in the case of a subcomplex
              interactorFound = true;
              // If we have any stoichiometry for the component, we add it to the total stoichiometry
              if (!!interactorMatch.stochiometryValue) {
                if (!!stoichiometry) {
                  stoichiometry = [stoichiometry[0] + interactorMatch.stochiometryValue[0], stoichiometry[1] + interactorMatch.stochiometryValue[1]];
                } else {
                  stoichiometry = [interactorMatch.stochiometryValue[0], interactorMatch.stochiometryValue[1]];
                }
              }
            }
          }
          // If we have found the interactor as part of one of the complex components, or part of a subcomplex, we return it
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        if (interactorFound) {
          return {
            identifier: interactorId,
            stochiometryValue: stoichiometry
          };
        }
        return null;
      }
      function findInteractorInComplexComponent(complexComponent, interactorId, enrichedInteractors) {
        var componentStoichiometry = parseStoichiometryValues(complexComponent.stochiometry);
        if (complexComponent.identifier === interactorId) {
          // The interactor is the complex component we are currently checking
          return {
            identifier: interactorId,
            stochiometryValue: componentStoichiometry
          };
        }
        if (complexComponent.interactorType === 'stable complex') {
          // If the id does not match, and the component is a subcomplex, then we can look for the interactor in the subcomplex components
          var complexComponentInteractor = enrichedInteractors.find(function (interactor) {
            return interactor.interactor.identifier === complexComponent.identifier;
          });
          if (!!complexComponentInteractor && !!complexComponentInteractor.subComponents) {
            var subComponentsMatch = findInteractorInComplexComponents(complexComponentInteractor.subComponents, interactorId, enrichedInteractors);
            if (!!subComponentsMatch) {
              // We have found the interactor in the subcomplex
              if (!!subComponentsMatch.stochiometryValue) {
                if (!!componentStoichiometry) {
                  // If we have stoichiometry for both the component and the subcomponent, we add both
                  return {
                    identifier: interactorId,
                    stochiometryValue: [componentStoichiometry[0] * subComponentsMatch.stochiometryValue[0], componentStoichiometry[1] * subComponentsMatch.stochiometryValue[1]]
                  };
                } else {
                  // If we only have stoichiometry for the subcomponent, we use that stoichiometry
                  return {
                    identifier: interactorId,
                    stochiometryValue: subComponentsMatch.stochiometryValue
                  };
                }
              } else {
                // If we only have stoichiometry for the component, we use that stoichiometry
                return {
                  identifier: interactorId,
                  stochiometryValue: componentStoichiometry
                };
              }
            }
          }
        }
        return null;
      }
      function fetchValuesFromStoichiometry(stoichiometry) {
        var pattern = 'minValue: ([0-9+]), maxValue: ([0-9+])';
        return stoichiometry.match(pattern);
      }
      function parseStoichiometryValues(stoichiometry) {
        if (!!stoichiometry) {
          var matchedStoichiometry = fetchValuesFromStoichiometry(stoichiometry);
          if (!!matchedStoichiometry) {
            var minValue = parseInt(matchedStoichiometry[1], 10);
            var maxValue = parseInt(matchedStoichiometry[2], 10);
            if (!isNaN(minValue) && !isNaN(maxValue)) {
              return [minValue, maxValue];
            }
          }
        }
        return null;
      }
      function formatStoichiometryValues(stoichiometry) {
        if (!!stoichiometry) {
          var minValue = stoichiometry[0];
          var maxValue = stoichiometry[1];
          if (minValue === maxValue) {
            return minValue.toString();
          } else {
            return "".concat(minValue, "-").concat(maxValue);
          }
        }
        return ' '; // sometimes we don't have the stoichiometry value
      }
      function getStoichiometryText(stoichiometry) {
        if (!!stoichiometry) {
          return 'Stoichiometry values: minValue: ' + stoichiometry[0] + ', maxValue: ' + stoichiometry[1];
        } else {
          return 'No stoichiometry data available'; // sometimes we don't have the stoichiometry value
        }
      }

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
        /* harmony export */"EnrichedInteractor": function EnrichedInteractor() {
          return /* binding */_EnrichedInteractor;
        },
        /* harmony export */"EnrichedComplex": function EnrichedComplex() {
          return /* binding */_EnrichedComplex;
        },
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
      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! rxjs */81134);
      /* harmony import */
      var _shared_service_complex_portal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../../../shared/service/complex-portal.service */20658);
      /* harmony import */
      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! rxjs/operators */33927);
      /* harmony import */
      var _complex_navigator_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./complex-navigator-utils */65766);
      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      var _EnrichedInteractor = /*#__PURE__*/_createClass(function _EnrichedInteractor() {
        _classCallCheck(this, _EnrichedInteractor);
      });
      var _EnrichedComplex = /*#__PURE__*/_createClass(function _EnrichedComplex() {
        _classCallCheck(this, _EnrichedComplex);
      });
      var _TableInteractorColumnComponent = /*#__PURE__*/function () {
        function TableInteractorColumnComponent(complexPortalService) {
          _classCallCheck(this, TableInteractorColumnComponent);
          this.complexPortalService = complexPortalService;
        }
        _createClass(TableInteractorColumnComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (!!changes['interactors']) {
              this.enrichInteractors();
            }
            this.classifyInteractors();
            this.calculateAllStartAndEndIndexes();
          }
        }, {
          key: "classifyInteractors",
          value: function classifyInteractors() {
            if (!!this.interactorsSorting && !!this.enrichedInteractors && this.enrichedInteractors.length > 0) {
              if (this.interactorsSorting === 'Type') {
                this.classifyInteractorsByType();
              } else if (this.interactorsSorting === 'Organism') {
                this.classifyInteractorsByOrganism();
              } else {
                this.classifyInteractorsByOccurrence();
              }
            }
          }
        }, {
          key: "enrichInteractors",
          value: function enrichInteractors() {
            var _this = this;
            this.enrichedInteractors = [];
            var _iterator2 = _createForOfIteratorHelper(this.interactors),
              _step2;
            try {
              var _loop = function _loop() {
                var interactor = _step2.value;
                var isSubComplex = interactor.interactorType === 'stable complex';
                var newEnrichedInteractor = {
                  interactor: interactor,
                  hidden: false,
                  isSubComplex: isSubComplex,
                  expanded: false,
                  subComponents: null,
                  partOfComplex: [],
                  timesAppearing: 0
                };
                if (isSubComplex) {
                  _this.loadSubInteractors(newEnrichedInteractor).subscribe(function (subComponents) {
                    return newEnrichedInteractor.subComponents = subComponents;
                  });
                }
                _this.enrichedInteractors.push(newEnrichedInteractor);
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
        }, {
          key: "toggleSubcomplexExpandable",
          value: function toggleSubcomplexExpandable(i) {
            this.enrichedInteractors[i].expanded = !this.enrichedInteractors[i].expanded;
            if (this.enrichedInteractors[i].expanded) {
              // EnrichedInteractor has been expanded, we need to:
              // 1. Collapse the other ones, in case there is any other expanded
              for (var j = 0; j < this.enrichedInteractors.length; j++) {
                if (i !== j) {
                  this.enrichedInteractors[j].expanded = false;
                }
              }
              // 2. Hide any interactor now displayed in the expanded section
              if (!!this.enrichedInteractors[i].subComponents) {
                var subInteractorIds = this.enrichedInteractors[i].subComponents.map(function (component) {
                  return component.identifier;
                });
                for (var _j = 0; _j < this.enrichedInteractors.length; _j++) {
                  if (i !== _j) {
                    this.enrichedInteractors[_j].hidden = !!subInteractorIds.includes(this.enrichedInteractors[_j].interactor.identifier);
                  }
                }
              }
            } else {
              // EnrichedInteractor has been collapsed, we need to:
              // 1. Display any interactor previously hidden
              for (var _j2 = 0; _j2 < this.enrichedInteractors.length; _j2++) {
                this.enrichedInteractors[_j2].hidden = false;
              }
            }
            // Something has been expanded or collapsed, we need to recalculate the start and end indexes for the lines
            this.classifyInteractors();
            this.calculateAllStartAndEndIndexes();
            console.log('Done');
          }
        }, {
          key: "loadSubInteractors",
          value: function loadSubInteractors(interactor) {
            // this function returns the list of subcomponents of an interactor of type stable complex
            var foundComplex = this.complexes.find(function (complex) {
              return complex.complexAC === interactor.interactor.identifier;
            });
            if (!!foundComplex) {
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(foundComplex.interactors);
            } else {
              // Actually call the back-end to fetch these
              return this.complexPortalService.getSimplifiedComplex(interactor.interactor.identifier).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(function (complex) {
                return complex === null || complex === void 0 ? void 0 : complex.interactors;
              }));
            }
          }
        }, {
          key: "calculateAllStartAndEndIndexes",
          value: function calculateAllStartAndEndIndexes() {
            this.enrichedComplexes = [];
            var _iterator3 = _createForOfIteratorHelper(this.complexes),
              _step3;
            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var complex = _step3.value;
                this.enrichedComplexes.push(this.calculateStartAndEndIndexes(complex));
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
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
            var enrichedComplex = {
              complex: complex,
              startInteractorIndex: null,
              endInteractorIndex: null,
              startSubComponentIndex: null,
              endSubComponentIndex: null,
              startInteractorIncludedWhenExpanded: true
            };
            // We iterate through the interactors to find the first and last one part of the complex
            // We do this to be able to draw a line connecting all interactors in the complex
            for (var i = 0; i < this.enrichedInteractors.length; i++) {
              if (!this.enrichedInteractors[i].hidden) {
                if (!!(0, _complex_navigator_utils__WEBPACK_IMPORTED_MODULE_3__.findInteractorInComplex)(complex, this.enrichedInteractors[i].interactor.identifier, this.enrichedInteractors)) {
                  // The interactor is part of the complex, we update the start and end indices for the interactors
                  // line as it may start in this interactor
                  enrichedComplex.startInteractorIndex = this.getMinValue(enrichedComplex.startInteractorIndex, i);
                  if (enrichedComplex.startInteractorIndex === i) {
                    // The line starts in this interactor, so the line always starts in this interactor, even when expanded
                    enrichedComplex.startInteractorIncludedWhenExpanded = true;
                  }
                  enrichedComplex.endInteractorIndex = this.getMaxValue(enrichedComplex.endInteractorIndex, i);
                  // The interactor is a subcomplex
                  if (this.enrichedInteractors[i].isSubComplex && !!this.enrichedInteractors[i].subComponents) {
                    if (this.enrichedInteractors[i].expanded) {
                      // If the subcomplex is expanded, as the subcomplex is part of the complex, all its subcomponents are also part
                      // of it. That means we need a line connecting all the subcomponents.
                      // That line must also connect to the subcomplex, so we start it at -1 to make sure it starts at the interactor cell
                      // and not at the first subcomponent
                      enrichedComplex.startSubComponentIndex = -1;
                      enrichedComplex.endSubComponentIndex = this.enrichedInteractors[i].subComponents.length - 1;
                    }
                  }
                } else if (this.enrichedInteractors[i].isSubComplex && !!this.enrichedInteractors[i].subComponents && this.enrichedInteractors[i].expanded) {
                  // The interactor is not part of the complex, but it is a subcomplex, and it is expanded.
                  // This means the subcomponents of the subcomplex are visible, and any of them could be part of the complex.
                  // In that case, the line could start or end on any of those subcomponents
                  for (var k = 0; k < this.enrichedInteractors[i].subComponents.length; k++) {
                    if (!!(0, _complex_navigator_utils__WEBPACK_IMPORTED_MODULE_3__.findInteractorInComplex)(complex, this.enrichedInteractors[i].subComponents[k].identifier, this.enrichedInteractors)) {
                      // The subcomponent of this interactor is part of the complex, we update the start and end indices for the interactors
                      // line as it may start in this interactor
                      enrichedComplex.startInteractorIndex = this.getMinValue(enrichedComplex.startInteractorIndex, i);
                      if (enrichedComplex.startInteractorIndex === i) {
                        // The line starts in a subcomponent of the interactor, but not on the interactor itself,
                        // so the line does not start in the interactor when expanded
                        enrichedComplex.startInteractorIncludedWhenExpanded = false;
                      }
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
            return enrichedComplex;
          }
        }, {
          key: "classifyInteractorsByOrganism",
          value: function classifyInteractorsByOrganism() {
            this.enrichedInteractors.sort(function (a, b) {
              return b.interactor.organismName.localeCompare(a.interactor.organismName);
            });
            this.rangeOfInteractorOrganism();
          }
        }, {
          key: "classifyInteractorsByType",
          value: function classifyInteractorsByType() {
            this.enrichedInteractors.sort(function (a, b) {
              return b.interactor.interactorType.localeCompare(a.interactor.interactorType);
            });
            this.rangeOfInteractorType();
          }
        }, {
          key: "classifyInteractorsByOccurrence",
          value: function classifyInteractorsByOccurrence() {
            var _iterator4 = _createForOfIteratorHelper(this.enrichedInteractors),
              _step4;
            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var oneInteractor = _step4.value;
                var _iterator5 = _createForOfIteratorHelper(this.complexes),
                  _step5;
                try {
                  for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                    var complex = _step5.value;
                    var match = (0, _complex_navigator_utils__WEBPACK_IMPORTED_MODULE_3__.findInteractorInComplex)(complex, oneInteractor.interactor.identifier, this.enrichedInteractors);
                    if (!!match) {
                      if (!!match.stochiometryValue) {
                        oneInteractor.timesAppearing += match.stochiometryValue[0];
                      } else {
                        oneInteractor.timesAppearing += 1;
                      }
                    }
                  }
                } catch (err) {
                  _iterator5.e(err);
                } finally {
                  _iterator5.f();
                }
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
            this.enrichedInteractors.sort(function (a, b) {
              return b.timesAppearing - a.timesAppearing;
            });
            this.ranges = [];
          }
        }, {
          key: "rangeOfInteractorType",
          value: function rangeOfInteractorType() {
            var ranges = []; // [type of interactor, first occurrence, last occurrence, length of the occurrence]
            var length = 0;
            var start = null;
            for (var i = 0; i < this.enrichedInteractors.length; i++) {
              var oneType = [];
              if (!this.enrichedInteractors[i].hidden) {
                length += 1;
                if (start === null) {
                  start = i;
                }
              }
              if (!this.enrichedInteractors[i + 1] || this.enrichedInteractors[i].isSubComplex && this.enrichedInteractors[i].expanded || this.enrichedInteractors[i].interactor.interactorType !== this.enrichedInteractors[i + 1].interactor.interactorType) {
                if (start !== null) {
                  oneType.push(this.enrichedInteractors[i].interactor.interactorType, length, start);
                  ranges.push(oneType);
                  start = null;
                }
                length = 0;
              }
            }
            this.ranges = ranges;
          }
        }, {
          key: "rangeOfInteractorOrganism",
          value: function rangeOfInteractorOrganism() {
            var ranges = []; // [type of interactor, first occurrence, last occurrence, length of the occurrence]
            var length = 0;
            var start = null;
            for (var i = 0; i < this.enrichedInteractors.length; i++) {
              var oneType = [];
              if (!this.enrichedInteractors[i].hidden) {
                length += 1;
                if (start === null) {
                  start = i;
                }
              }
              if (!this.enrichedInteractors[i + 1] || this.enrichedInteractors[i].isSubComplex && this.enrichedInteractors[i].expanded || this.enrichedInteractors[i].interactor.organismName !== this.enrichedInteractors[i + 1].interactor.organismName) {
                if (start !== null) {
                  oneType.push(this.enrichedInteractors[i].interactor.organismName, length, start);
                  ranges.push(oneType);
                  start = null;
                }
                length = 0;
              }
            }
            this.ranges = ranges;
          }
        }, {
          key: "isInteractorSortingSet",
          value: function isInteractorSortingSet() {
            return this.interactorsSorting === 'Type' || this.interactorsSorting === 'Organism';
          }
        }]);
        return TableInteractorColumnComponent;
      }();
      _TableInteractorColumnComponent.ctorParameters = function () {
        return [{
          type: _shared_service_complex_portal_service__WEBPACK_IMPORTED_MODULE_2__.ComplexPortalService
        }];
      };
      _TableInteractorColumnComponent.propDecorators = {
        complexes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
        }],
        interactorsSorting: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
        }],
        interactors: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
        }],
        organismIconDisplay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
        }],
        interactorTypeDisplay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
        }],
        IDDisplay: [{
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
    /***/42423: (
    /*!******************************************************************************************************************************************************************************!*\
      !*** ./src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-interactor-external-link/table-interactor-external-link.component.ts ***!
      \******************************************************************************************************************************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"TableInteractorExternalLinkComponent": function TableInteractorExternalLinkComponent() {
          return /* binding */_TableInteractorExternalLinkComponent;
        }
        /* harmony export */
      });
      /* harmony import */
      var _Users_susiehuget_Documents_GitHub_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_table_interactor_external_link_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./table-interactor-external-link.component.html */60908);
      /* harmony import */
      var _table_interactor_external_link_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./table-interactor-external-link.component.css */52504);
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/core */2316);
      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      var _TableInteractorExternalLinkComponent = /*#__PURE__*/function () {
        function TableInteractorExternalLinkComponent() {
          _classCallCheck(this, TableInteractorExternalLinkComponent);
          this.externalLinkVisible = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        }
        _createClass(TableInteractorExternalLinkComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.showExternalLink();
          }
        }, {
          key: "showExternalLink",
          value: function showExternalLink() {
            if (this.isMainInteractor && this.interactorType === 'stable complex') {
              this.externalLinkVisible.emit(false);
              return false;
            }
            this.externalLinkVisible.emit(!!this.identifierLink);
            return !!this.identifierLink;
          }
        }]);
        return TableInteractorExternalLinkComponent;
      }();
      _TableInteractorExternalLinkComponent.propDecorators = {
        interactorId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        identifierLink: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        interactorType: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        isMainInteractor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        IDDisplay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        externalLinkVisible: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }]
      };
      _TableInteractorExternalLinkComponent = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'cp-table-interactor-external-link',
        template: _Users_susiehuget_Documents_GitHub_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_table_interactor_external_link_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_table_interactor_external_link_component_css__WEBPACK_IMPORTED_MODULE_1__]
      })], _TableInteractorExternalLinkComponent);

      /***/
    }),
    /***/84768: (
    /*!************************************************************************************************************************************************************!*\
      !*** ./src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-interactor-name/table-interactor-name.component.ts ***!
      \************************************************************************************************************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"TableInteractorNameComponent": function TableInteractorNameComponent() {
          return /* binding */_TableInteractorNameComponent;
        }
        /* harmony export */
      });
      /* harmony import */
      var _Users_susiehuget_Documents_GitHub_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_table_interactor_name_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./table-interactor-name.component.html */41087);
      /* harmony import */
      var _table_interactor_name_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./table-interactor-name.component.css */57324);
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/core */2316);
      /* harmony import */
      var _complex_portal_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../../../../complex-portal-utils */82682);
      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      var _TableInteractorNameComponent = /*#__PURE__*/function () {
        function TableInteractorNameComponent() {
          _classCallCheck(this, TableInteractorNameComponent);
        }
        _createClass(TableInteractorNameComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.interactorTypeIcon = (0, _complex_portal_utils__WEBPACK_IMPORTED_MODULE_2__.interactorTypeIcon)(this.interactorType);
            this.interactorOrganismIcon = (0, _complex_portal_utils__WEBPACK_IMPORTED_MODULE_2__.organismIcon)(this.interactorOrganism);
          }
        }, {
          key: "externalLinkVisibleHandler",
          value: function externalLinkVisibleHandler(isVisible) {
            this.externalLinkVisible = isVisible;
          }
        }]);
        return TableInteractorNameComponent;
      }();
      _TableInteractorNameComponent.propDecorators = {
        interactorName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }],
        interactorType: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }],
        interactorId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }],
        interactorOrganism: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }],
        identifierLink: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }],
        organismIconDisplay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }],
        interactorTypeDisplay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }],
        IDDisplay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }],
        isMainInteractor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }]
      };
      _TableInteractorNameComponent = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'cp-table-interactor-name',
        template: _Users_susiehuget_Documents_GitHub_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_table_interactor_name_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_table_interactor_name_component_css__WEBPACK_IMPORTED_MODULE_1__]
      })], _TableInteractorNameComponent);

      /***/
    }),
    /***/50048: (
    /*!******************************************************************************************************************************************************************************!*\
      !*** ./src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-interactor-stoichiometry/table-interactor-stoichiometry.component.ts ***!
      \******************************************************************************************************************************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"TableInteractorStoichiometryComponent": function TableInteractorStoichiometryComponent() {
          return /* binding */_TableInteractorStoichiometryComponent;
        }
        /* harmony export */
      });
      /* harmony import */
      var _Users_susiehuget_Documents_GitHub_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_table_interactor_stoichiometry_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./table-interactor-stoichiometry.component.html */32716);
      /* harmony import */
      var _table_interactor_stoichiometry_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./table-interactor-stoichiometry.component.css */90745);
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/core */2316);
      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      var _TableInteractorStoichiometryComponent = /*#__PURE__*/_createClass(function TableInteractorStoichiometryComponent() {
        _classCallCheck(this, TableInteractorStoichiometryComponent);
      });
      _TableInteractorStoichiometryComponent.propDecorators = {
        stoichiometryText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        stoichiometryValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }]
      };
      _TableInteractorStoichiometryComponent = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'cp-table-interactor-stoichiometry',
        template: _Users_susiehuget_Documents_GitHub_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_table_interactor_stoichiometry_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_table_interactor_stoichiometry_component_css__WEBPACK_IMPORTED_MODULE_1__]
      })], _TableInteractorStoichiometryComponent);

      /***/
    }),
    /***/37161: (
    /*!************************************************************************************************************************************************************!*\
      !*** ./src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-main-interactor/table-main-interactor.component.ts ***!
      \************************************************************************************************************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"TableMainInteractorComponent": function TableMainInteractorComponent() {
          return /* binding */_TableMainInteractorComponent;
        }
        /* harmony export */
      });
      /* harmony import */
      var _Users_susiehuget_Documents_GitHub_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_table_main_interactor_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./table-main-interactor.component.html */16865);
      /* harmony import */
      var _table_main_interactor_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./table-main-interactor.component.css */96532);
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/core */2316);
      /* harmony import */
      var _complex_navigator_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../complex-navigator-utils */65766);
      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      var _TableMainInteractorComponent = /*#__PURE__*/function () {
        function TableMainInteractorComponent() {
          _classCallCheck(this, TableMainInteractorComponent);
        }
        _createClass(TableMainInteractorComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this.interactorComponent = (0, _complex_navigator_utils__WEBPACK_IMPORTED_MODULE_2__.findInteractorInComplex)(this.complex.complex, this.interactor.interactor.identifier, this.enrichedInteractors);
            this.topLineClass = this.displayTopLineClas2(this.complex, this.i);
            this.bottomLineClass = this.displayBottomLineClass(this.complex, this.i);
          }
        }, {
          key: "interactor",
          get: function get() {
            return this.enrichedInteractors[this.i];
          }
        }, {
          key: "displayTopLineClas2",
          value: function displayTopLineClas2(complex, interactorIndex) {
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
                // the line does not end in this interactor, and it must cross through the interactor cell to the subcomponents
                if (this.enrichedInteractors[interactorIndex].isSubComplex && this.enrichedInteractors[interactorIndex].expanded) {
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
            // The line starts at this interactor or on any of its subcomponents
            if (complex.startInteractorIndex != null && complex.startInteractorIndex === interactorIndex) {
              if (!this.enrichedInteractors[interactorIndex].isSubComplex) {
                // If the interactor is not a subcomplex, then the interactor has no subcomponents and the line starts in it
                return true;
              }
              // If the interactor is a subcomplex.
              // If the interactor is actually part of the complex, the line starts in this interactor
              // Otherwise, the line actually starts on one of the subcomponents of the complex, but not on the interactor itself, as it is
              // not part of the complex.
              if (complex.startInteractorIncludedWhenExpanded) {
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
              // the line does not end in this interactor, and it must cross through to the subcomponents
              if (this.enrichedInteractors[interactorIndex].isSubComplex && this.enrichedInteractors[interactorIndex].expanded) {
                if (complex.startSubComponentIndex != null && complex.endSubComponentIndex != null) {
                  return false;
                }
              }
              return true;
            }
            return false;
          }
        }]);
        return TableMainInteractorComponent;
      }();
      _TableMainInteractorComponent.propDecorators = {
        complex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }],
        i: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }],
        enrichedInteractors: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }]
      };
      _TableMainInteractorComponent = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'cp-table-main-interactor',
        template: _Users_susiehuget_Documents_GitHub_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_table_main_interactor_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_table_main_interactor_component_css__WEBPACK_IMPORTED_MODULE_1__]
      })], _TableMainInteractorComponent);

      /***/
    }),
    /***/68677: (
    /*!****************************************************************************************************************************************************************************!*\
      !*** ./src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-subcomponent-interactor/table-subcomponent-interactor.component.ts ***!
      \****************************************************************************************************************************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"TableSubcomponentInteractorComponent": function TableSubcomponentInteractorComponent() {
          return /* binding */_TableSubcomponentInteractorComponent;
        }
        /* harmony export */
      });
      /* harmony import */
      var _Users_susiehuget_Documents_GitHub_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_table_subcomponent_interactor_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./table-subcomponent-interactor.component.html */59270);
      /* harmony import */
      var _table_subcomponent_interactor_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./table-subcomponent-interactor.component.css */85339);
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/core */2316);
      /* harmony import */
      var _complex_navigator_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../complex-navigator-utils */65766);
      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      var _TableSubcomponentInteractorComponent = /*#__PURE__*/function () {
        function TableSubcomponentInteractorComponent() {
          _classCallCheck(this, TableSubcomponentInteractorComponent);
        }
        _createClass(TableSubcomponentInteractorComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this.interactorComponent = (0, _complex_navigator_utils__WEBPACK_IMPORTED_MODULE_2__.findInteractorInComplex)(this.complex.complex, this.el.identifier, this.enrichedInteractors);
            this.displayTopLineClass = this.displayTopLineClassExpanded(this.complex, this.i, this.j);
            this.displayBottomLineClass = this.displayBottomLineClassExpanded(this.complex, this.i, this.j);
          }
        }, {
          key: "interactor",
          get: function get() {
            return this.enrichedInteractors[this.i];
          }
        }, {
          key: "el",
          get: function get() {
            return this.enrichedInteractors[this.i].subComponents[this.j];
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
                // The line started before this interactor, and it ends on a later subcomponent, so it crosses through this subcomponent
                if (complex.startInteractorIndex < interactorIndex && complex.endSubComponentIndex > subComponentIndex) {
                  return true;
                }
                // The line started before this subcomponent, and it ends on a later interactor, so it crosses through this subcomponent
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
            var _this2 = this;
            // The line starts at this interactor or on any of its subcomponents
            if (complex.startInteractorIndex != null && complex.startInteractorIndex === interactorIndex) {
              if (complex.startSubComponentIndex != null && complex.startSubComponentIndex === subComponentIndex) {
                // If the subcomplex is a component of the complex, the line starts in the cell of the interactor, meaning it cannot
                // start on any subcomponent.
                // Otherwise, it starts on the subcomponent with the index subComponentIndex
                return !complex.complex.interactors.some(function (component) {
                  return _this2.enrichedInteractors[interactorIndex].interactor.identifier === component.identifier;
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
        }]);
        return TableSubcomponentInteractorComponent;
      }();
      _TableSubcomponentInteractorComponent.propDecorators = {
        complex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }],
        i: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }],
        j: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }],
        enrichedInteractors: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }]
      };
      _TableSubcomponentInteractorComponent = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'cp-table-subcomponent-interactor',
        template: _Users_susiehuget_Documents_GitHub_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_table_subcomponent_interactor_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_table_subcomponent_interactor_component_css__WEBPACK_IMPORTED_MODULE_1__]
      })], _TableSubcomponentInteractorComponent);

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
      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/core */2316);
      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      var _TableStructureComponent = /*#__PURE__*/function () {
        function TableStructureComponent() {
          _classCallCheck(this, TableStructureComponent);
          this.sortedComplexes = [];
        }
        _createClass(TableStructureComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this.classifyComplexesSize(); // ensure to always have the same base of comparison
            this.sortedComplexes = this.classifyComplexesSimilarities(this.complexSearch.elements);
          }
        }, {
          key: "classifyComplexesSize",
          value: function classifyComplexesSize() {
            var searchResult = _toConsumableArray(this.complexSearch.elements);
            var complexesAndSizes = [];
            var _iterator6 = _createForOfIteratorHelper(searchResult),
              _step6;
            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var complex = _step6.value;
                var totalLength = complex.interactors.length;
                var _iterator7 = _createForOfIteratorHelper(complex.interactors),
                  _step7;
                try {
                  var _loop2 = function _loop2() {
                    var complexInteractorChecked = _step7.value;
                    if (complexInteractorChecked.interactorType === 'stable complex') {
                      var subComplex = searchResult.find(function (c) {
                        return c.complexAC === complexInteractorChecked.identifier;
                      });
                      if (!!subComplex) {
                        totalLength += subComplex.interactors.length;
                      }
                    }
                  };
                  for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                    _loop2();
                  }
                } catch (err) {
                  _iterator7.e(err);
                } finally {
                  _iterator7.f();
                }
                complexesAndSizes.push([complex, totalLength]);
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }
            complexesAndSizes.sort(function (a, b) {
              return b[1] - a[1];
            });
            for (var i = 0; i < searchResult.length; i++) {
              this.complexSearch.elements[i] = complexesAndSizes[i][0];
            }
          }
        }, {
          key: "calculateSimilarity",
          value: function calculateSimilarity(complex1, complex2) {
            var _this3 = this;
            var similarities = 0;
            var _iterator8 = _createForOfIteratorHelper(complex1.interactors),
              _step8;
            try {
              var _loop3 = function _loop3() {
                var complex1Interactor = _step8.value;
                // The interactor of complex 1 is a subcomplex
                if (complex1Interactor.interactorType === 'stable complex') {
                  // The subcomplex is exactly complex 2, so we add the number of interactors of complex 2 to the similarities
                  if (complex2.complexAC === complex1Interactor.identifier) {
                    similarities += complex2.interactors.length;
                  } else {
                    var subComplex = _this3.complexSearch.elements.find(function (complex) {
                      return complex.complexAC === complex1Interactor.identifier;
                    });
                    if (!!subComplex) {
                      var complex2MatchingInteractor = complex2.interactors.find(function (interactor) {
                        return interactor.identifier === complex1Interactor.identifier;
                      });
                      if (!!complex2MatchingInteractor) {
                        // Complex 2 also has the same subcomplex as an interactor, so we add all the interactors in the subcomplex
                        // to the similarities, as the two complexes have all those interactors in common
                        similarities += subComplex.interactors.length;
                      } else {
                        // Complex 2 does not have the same subcomplex as interactor, so we need to compare interactors
                        // of the subcomplex and complex 2 to find any matches
                        var _iterator9 = _createForOfIteratorHelper(subComplex.interactors),
                          _step9;
                        try {
                          for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                            var subComplexInteractor = _step9.value;
                            var _iterator10 = _createForOfIteratorHelper(complex2.interactors),
                              _step10;
                            try {
                              for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                                var complex2Interactor = _step10.value;
                                if (subComplexInteractor.identifier === complex2Interactor.identifier) {
                                  similarities++;
                                }
                              }
                            } catch (err) {
                              _iterator10.e(err);
                            } finally {
                              _iterator10.f();
                            }
                          }
                        } catch (err) {
                          _iterator9.e(err);
                        } finally {
                          _iterator9.f();
                        }
                      }
                    }
                  }
                } else {
                  // The interactor of complex 1 is not a subcomplex
                  var _iterator11 = _createForOfIteratorHelper(complex2.interactors),
                    _step11;
                  try {
                    var _loop4 = function _loop4() {
                      var complex2Interactor = _step11.value;
                      // The interactor of complex 2 is a subcomplex
                      if (complex2Interactor.interactorType === 'stable complex') {
                        var _subComplex = _this3.complexSearch.elements.find(function (complex) {
                          return complex.complexAC === complex2Interactor.identifier;
                        });
                        if (!!_subComplex) {
                          // Complex 2 interactor is a subcomplex, so we need to compare the complex 1 interactor with interactors of this
                          // subcomplex to find any matches
                          var _iterator12 = _createForOfIteratorHelper(_subComplex.interactors),
                            _step12;
                          try {
                            for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                              var _subComplexInteractor = _step12.value;
                              if (_subComplexInteractor.identifier === complex1Interactor.identifier) {
                                similarities++;
                              }
                            }
                          } catch (err) {
                            _iterator12.e(err);
                          } finally {
                            _iterator12.f();
                          }
                        }
                      } else if (complex1Interactor.identifier === complex2Interactor.identifier) {
                        // The interactors of complex 1 and complex 2 are not subcomplexes, and they have the same id, so we add to the similarities
                        similarities++;
                      }
                    };
                    for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                      _loop4();
                    }
                  } catch (err) {
                    _iterator11.e(err);
                  } finally {
                    _iterator11.f();
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
          value: function classifyComplexesSimilarities(bigComplexes) {
            var classifiedList = [];
            // multidimensional array containing groups of complexes having similar interactors
            var _iterator13 = _createForOfIteratorHelper(bigComplexes),
              _step13;
            try {
              for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                var _complex = _step13.value;
                var similarInteractorFound = false;
                var _iterator15 = _createForOfIteratorHelper(classifiedList),
                  _step15;
                try {
                  for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
                    var _classification = _step15.value;
                    var comparedComplex = _classification[0];
                    var similarity = this.calculateSimilarity(_complex, comparedComplex);
                    if (similarity >= 1) {
                      _classification.push(_complex);
                      similarInteractorFound = true; // goes to the next complex
                    }
                  }
                } catch (err) {
                  _iterator15.e(err);
                } finally {
                  _iterator15.f();
                }
                if (!similarInteractorFound) {
                  classifiedList.push([_complex]); // fill classifiedList with arrays of all the complexes in the list
                }
              }
            } catch (err) {
              _iterator13.e(err);
            } finally {
              _iterator13.f();
            }
            var unique = [];
            for (var _i = 0, _classifiedList = classifiedList; _i < _classifiedList.length; _i++) {
              var classification = _classifiedList[_i];
              var _iterator14 = _createForOfIteratorHelper(classification),
                _step14;
              try {
                for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
                  var complex = _step14.value;
                  if (!unique.includes(complex)) {
                    unique.push(complex);
                  }
                }
              } catch (err) {
                _iterator14.e(err);
              } finally {
                _iterator14.f();
              }
            }
            return unique;
          }
        }]);
        return TableStructureComponent;
      }();
      _TableStructureComponent.propDecorators = {
        complexSearch: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        interactors: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        interactorsSorting: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        organismIconDisplay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        interactorTypeDisplay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        IDDisplay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }]
      };
      _TableStructureComponent = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
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
          this._navigatorPageSize = 15; // This is where we set the size of the pages for navigator view
        }
        _createClass(ComplexResultsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;
            this.titleService.setTitle('Complex Portal - Results');
            this._allInteractorsInComplexSearch = [];
            this.route.fragment.subscribe(function (fragment) {
              if (fragment === _this4.COMPLEX_NAVIGATOR_VIEW) {
                _this4.DisplayType = _this4.COMPLEX_NAVIGATOR_VIEW;
              } else if (fragment === _this4.LIST_VIEW) {
                _this4.DisplayType = _this4.LIST_VIEW;
              }
              _this4.route.queryParams.subscribe(function (queryParams) {
                _this4._query = queryParams['query'];
                _this4._spicesFilter = queryParams['species'] ? queryParams['species'].split('+') : [];
                _this4._bioRoleFilter = queryParams['bioRole'] ? queryParams['bioRole'].split('+') : [];
                _this4._interactorTypeFilter = queryParams['interactorType'] ? queryParams['interactorType'].split('+') : [];
                _this4.currentPageIndex = queryParams['page'] ? Number(queryParams['page']) : 1;
                // TODO This is out for now, but CP-84 (JIRA )should fix that!!
                // this.pageSize = queryParams['size'] ? Number(queryParams['size']) : 10;
                _this4.requestComplexResults();
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
            var _this5 = this;
            this.complexPortalService.findComplex(this.query, this.spicesFilter, this.bioRoleFilter, this.interactorTypeFilter, this.currentPageIndex, this.pageSize).subscribe(function (complexSearch) {
              _this5.complexSearch = complexSearch;
              _this5._allInteractorsInComplexSearch = [];
              if (_this5.complexSearch.totalNumberOfResults !== 0) {
                _this5.lastPageIndex = Math.ceil(complexSearch.totalNumberOfResults / _this5.pageSize);
                for (var i = 0; i < complexSearch.elements.length; i++) {
                  var _iterator16 = _createForOfIteratorHelper(complexSearch.elements[i].interactors),
                    _step16;
                  try {
                    var _loop5 = function _loop5() {
                      var component = _step16.value;
                      if (!_this5._allInteractorsInComplexSearch.some(function (interactor) {
                        return interactor.identifier === component.identifier;
                      })) {
                        _this5._allInteractorsInComplexSearch.push(new _shared_model_complex_results_interactor_model__WEBPACK_IMPORTED_MODULE_5__.Interactor(component.identifier, component.identifierLink, component.name, component.description, component.interactorType, component.organismName));
                      }
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
            this.setFirstDisplayType(); // if only one complex is in the search result, the display is list
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
      var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__( /*! @angular/core */2316);
      /* harmony import */
      var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__( /*! @angular/common */54364);
      /* harmony import */
      var _complex_results_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./complex-results.component */50967);
      /* harmony import */
      var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__( /*! @angular/router */71258);
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
      /* harmony import */
      var _complex_navigator_table_structure_table_interactor_column_table_interactor_name_table_interactor_name_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ./complex-navigator/table-structure/table-interactor-column/table-interactor-name/table-interactor-name.component */84768);
      /* harmony import */
      var _complex_navigator_table_structure_table_interactor_column_table_interactor_external_link_table_interactor_external_link_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! ./complex-navigator/table-structure/table-interactor-column/table-interactor-external-link/table-interactor-external-link.component */42423);
      /* harmony import */
      var _complex_navigator_table_structure_table_interactor_column_table_interactor_stoichiometry_table_interactor_stoichiometry_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! ./complex-navigator/table-structure/table-interactor-column/table-interactor-stoichiometry/table-interactor-stoichiometry.component */50048);
      /* harmony import */
      var _complex_navigator_table_structure_table_interactor_column_table_main_interactor_table_main_interactor_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__( /*! ./complex-navigator/table-structure/table-interactor-column/table-main-interactor/table-main-interactor.component */37161);
      /* harmony import */
      var _complex_navigator_table_structure_table_interactor_column_table_subcomponent_interactor_table_subcomponent_interactor_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__( /*! ./complex-navigator/table-structure/table-interactor-column/table-subcomponent-interactor/table-subcomponent-interactor.component */68677);
      /* harmony import */
      var _complex_navigator_buttons_complex_navigator_buttons_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__( /*! ./complex-navigator-buttons/complex-navigator-buttons.component */8507);
      /* harmony import */
      var ngx_markdown__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__( /*! ngx-markdown */36731);
      /* harmony import */
      var _complex_navigator_complex_navigator_rating_complex_navigator_rating_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__( /*! ./complex-navigator/complex-navigator-rating/complex-navigator-rating.component */88628);
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
      _ComplexResultsModule = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_16__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule.forChild([{
          path: '',
          component: _complex_results_component__WEBPACK_IMPORTED_MODULE_0__.ComplexResultsComponent
        }]), _angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule, _shared_loading_indicators_progress_spinner_progress_spinner_module__WEBPACK_IMPORTED_MODULE_4__.ProgressSpinnerModule, ngx_markdown__WEBPACK_IMPORTED_MODULE_19__.MarkdownModule],
        exports: [_complex_navigator_table_structure_table_structure_component__WEBPACK_IMPORTED_MODULE_6__.TableStructureComponent],
        declarations: [_complex_results_component__WEBPACK_IMPORTED_MODULE_0__.ComplexResultsComponent, _complex_list_complex_list_component__WEBPACK_IMPORTED_MODULE_3__.ComplexListComponent, _complex_filter_complex_filter_component__WEBPACK_IMPORTED_MODULE_2__.ComplexFilterComponent, _complex_paginator_complex_paginator_component__WEBPACK_IMPORTED_MODULE_1__.ComplexPaginatorComponent, _complex_navigator_complex_navigator_component__WEBPACK_IMPORTED_MODULE_5__.ComplexNavigatorComponent, _complex_navigator_table_structure_table_structure_component__WEBPACK_IMPORTED_MODULE_6__.TableStructureComponent, _complex_navigator_table_structure_table_header_table_header_component__WEBPACK_IMPORTED_MODULE_7__.TableHeaderComponent, _complex_navigator_table_structure_table_interactor_column_table_interactor_column_component__WEBPACK_IMPORTED_MODULE_8__.TableInteractorColumnComponent, _complex_navigator_table_structure_table_interactor_column_table_interactor_name_table_interactor_name_component__WEBPACK_IMPORTED_MODULE_9__.TableInteractorNameComponent, _complex_navigator_table_structure_table_interactor_column_table_interactor_external_link_table_interactor_external_link_component__WEBPACK_IMPORTED_MODULE_10__.TableInteractorExternalLinkComponent, _complex_navigator_table_structure_table_interactor_column_table_interactor_stoichiometry_table_interactor_stoichiometry_component__WEBPACK_IMPORTED_MODULE_11__.TableInteractorStoichiometryComponent, _complex_navigator_table_structure_table_interactor_column_table_main_interactor_table_main_interactor_component__WEBPACK_IMPORTED_MODULE_12__.TableMainInteractorComponent, _complex_navigator_table_structure_table_interactor_column_table_subcomponent_interactor_table_subcomponent_interactor_component__WEBPACK_IMPORTED_MODULE_13__.TableSubcomponentInteractorComponent, _complex_navigator_buttons_complex_navigator_buttons_component__WEBPACK_IMPORTED_MODULE_14__.ComplexNavigatorButtonsComponent, _complex_navigator_complex_navigator_rating_complex_navigator_rating_component__WEBPACK_IMPORTED_MODULE_15__.ComplexNavigatorRatingComponent]
      })], _ComplexResultsModule);

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
        function _Interactor(identifier, identifierLink, name, description, interactorType, organismName) {
          _classCallCheck(this, _Interactor);
          this._identifier = identifier;
          this._identifierLink = identifierLink;
          this._name = name;
          this._description = description;
          this._interactorType = interactorType;
          this._organismName = organismName;
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
        }, {
          key: "organismName",
          get: function get() {
            return this._organismName;
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
      __webpack_exports__["default"] = "<div class=\"filters row\">\n  <div class=\"columns medium-6\"><h3>Filters</h3></div>\n  <div class=\"columns medium-6\">\n    <div *ngIf=\"anyFiltersSelected()\">\n      <a class=\"button\" (click)=\"resetAllFilters()\"><i class=\"icon icon-functional\" data-icon=\"d\"></i> Reset filters</a>\n    </div>\n  </div>\n  <div class=\"columns medium-12\">\n    <div *ngIf=\"facets.species_f\">\n      <b>Species</b>\n      <ul class=\"no-bullet\">\n        <li *ngFor=\"let facet of facets.species_f\">\n          <div [ngSwitch]=\"isSelected(facet.name, spicesFilter)\">\n            <div *ngSwitchCase=\"true\">\n              <input type=\"checkbox\" #filter value=\"{{facet.name}}\"\n                     (change)=\"changeSpeciesFilter(filter.value, filter.checked)\" checked>\n              {{ facet.name }}\n              ({{ facet.count }})\n              <i class=\"{{ facetOrganismIcon(facet.name) }}\"\n                 style=\"font-size: large;\"></i>\n            </div>\n            <div *ngSwitchDefault>\n              <input type=\"checkbox\" #filter value=\"{{facet.name}}\"\n                     (change)=\"changeSpeciesFilter(filter.value, filter.checked)\"> {{ facet.name }} ({{ facet.count }})\n\n              <i class=\"{{ facetOrganismIcon(facet.name) }}\"\n                 style=\"font-size: large;\"></i>\n            </div>\n          </div>\n        </li>\n      </ul>\n    </div>\n\n    <div *ngIf=\"facets.pbiorole_f\">\n      <b>Biological Role</b>\n      <ul class=\"no-bullet\">\n        <li *ngFor=\"let facet of facets.pbiorole_f\">\n          <div [ngSwitch]=\"isSelected(facet.name, bioRoleFilter)\">\n            <div *ngSwitchCase=\"true\">\n              <input type=\"checkbox\" #filter value=\"{{facet.name}}\"\n                     (change)=\"changeBiologicalRoleFilter(filter.value, filter.checked)\" checked> {{ facet.name }}\n              ({{ facet.count }})\n            </div>\n            <div *ngSwitchDefault>\n              <input type=\"checkbox\" #filter value=\"{{facet.name}}\"\n                     (change)=\"changeBiologicalRoleFilter(filter.value, filter.checked)\"> {{ facet.name }}\n              ({{ facet.count }})\n            </div>\n          </div>\n        </li>\n      </ul>\n    </div>\n\n\n    <div *ngIf=\"facets.ptype_f\">\n      <b>Interactor Type</b>\n      <ul class=\"no-bullet\">\n        <li *ngFor=\"let facet of facets.ptype_f\">\n          <div [ngSwitch]=\"isSelected(facet.name, interactorTypeFilter)\">\n            <div *ngSwitchCase=\"true\">\n              <input type=\"checkbox\" #filter value=\"{{facet.name}}\"\n                     (change)=\"changeInteractorTypeFilter(filter.value, filter.checked)\" checked> {{ facet.name }}\n              ({{ facet.count }})\n              <i class=\"{{ facetTypeIcon(facet) }}\"\n                 style=\"font-size: large;\"></i>\n            </div>\n            <div *ngSwitchDefault>\n              <input type=\"checkbox\" #filter value=\"{{facet.name}}\"\n                     (change)=\"changeInteractorTypeFilter(filter.value, filter.checked)\"> {{ facet.name }}\n              ({{ facet.count }})\n              <i class=\"{{ facetTypeIcon(facet) }}\"\n                 style=\"font-size: large;\"></i>\n            </div>\n          </div>\n        </li>\n      </ul>\n    </div>\n    <div *ngIf=\"!facets.species_f && !facets.pbiorole_f && !facets.ptype_f\">\n      <h6>No filters available</h6>\n    </div>\n  </div>\n</div>\n";

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
    /***/53226: (
    /*!***************************************************************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/complex/complex-results/complex-navigator-buttons/complex-navigator-buttons.component.html ***!
      \***************************************************************************************************************************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */
      __webpack_exports__["default"] = "<div class=\"filters\">\n  <div class=\"sortingInteractors\">\n    <input type=\"submit\" name=\"classificationButton\" value=\"Sort interactors\" class=\"button\">\n    <div class=\"typeOfSorting\">\n      <input type=\"submit\" name=\"occurrenceClassification\" value=\"Occurrence\" class=\"button\"\n             (click)=\"InteractorsSortingChanges('Occurrence')\">\n      <input type=\"submit\" name=\"typeClassification\" value=\"Type\" class=\"button\"\n             (click)=\"InteractorsSortingChanges('Type')\">\n      <input type=\"submit\" name=\"organismClassification\" value=\"Organism\" class=\"button\"\n             (click)=\"InteractorsSortingChanges('Organism')\">\n      <!--      <input type=\"submit\" name=\"geneClassification\" value=\"Orthology (Not available yet)\" class=\"button\"-->\n      <!--             (click)=\"InteractorsSortingChanges('Orthology')\">-->\n    </div>\n  </div>\n\n  <div class=\"dropdown\">\n    <input type=\"submit\" name=\"classificationButton\" value=\"Display Options\" class=\"button\">\n    <ul class=\"displaySize\">\n      <li>\n        <input type=\"radio\" name=\"displayType\" value=\"Compact\" class=\"checkbox compact\"\n               (click)=\"setDisplayType('compact')\" [checked]=\"typeOfDisplay === 'compact'\">\n        Compact display\n      </li>\n      <li class=\"detailedDisplay\">\n        <input type=\"radio\" name=\"displayType\" value=\"Detailed\" class=\"checkbox detailed\"\n               (click)=\"setDisplayType('detailed')\" [checked]=\"typeOfDisplay === 'detailed'\">\n        Detailed display\n        <ul class=\"detailedDisplayOptions\">\n          <li>\n            <input type=\"checkbox\" name=\"organism\" value=\"organism\" class=\"checkbox\" [checked]=\"organismIconDisplay\"\n                   (change)=\"DisplayingOrganism()\">\n            Organism\n          </li>\n          <li>\n            <input type=\"checkbox\" name=\"type\" value=\"type\" class=\"checkbox\" [checked]=\"interactorTypeDisplay\"\n                   (change)=\"DisplayingType()\">\n            Type\n          </li>\n          <li>\n            <input type=\"checkbox\" name=\"id\" value=\"id\" class=\"checkbox\" [checked]=\"IDDisplay\"\n                   (change)=\"DisplayingID()\">\n            Interactor ID\n          </li>\n        </ul>\n      </li>\n    </ul>\n  </div>\n</div>\n";

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
      __webpack_exports__["default"] = "<div class=\"ratingComponent\" *ngIf=\"visible===true\">\n  <div class=\"buttonContainer\">\n    <button class=\"close\" id=\"closePopup\" (click)=\"ratingVisibility()\">&times;</button>\n  </div>\n  <div class=\"text\">\n    <p>Tell us about your experience with the Complex Navigator!</p>\n  </div>\n  <div class=\"ratingComponentStars\">\n    <span class=\"star\" [ngClass]=\"{'selected': selectedRating >= 1}\" (click)=\"selectRating(1)\"> &#9733; </span>\n    <span class=\"star\" [ngClass]=\"{'selected': selectedRating >= 2}\" (click)=\"selectRating(2)\"> &#9733; </span>\n    <span class=\"star\" [ngClass]=\"{'selected': selectedRating >= 3}\" (click)=\"selectRating(3)\"> &#9733; </span>\n    <span class=\"star\" [ngClass]=\"{'selected': selectedRating >= 4}\" (click)=\"selectRating(4)\"> &#9733; </span>\n    <span class=\"star\" [ngClass]=\"{'selected': selectedRating >= 5}\" (click)=\"selectRating(5)\"> &#9733; </span>\n  </div>\n</div>\n";

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
      __webpack_exports__["default"] = "<div class=\"ComplexNavigator\">\n  <div class=\"Buttons\">\n    <cp-complex-navigator-buttons\n      [(interactorsSorting)]=\"interactorsSorting\"\n      [(organismIconDisplay)]=\"organismIconDisplay\"\n      [(interactorTypeDisplay)]=\"interactorTypeDisplay\"\n      [(IDDisplay)]=\"IDDisplay\">\n    </cp-complex-navigator-buttons>\n  </div>\n  <cp-table-structure [complexSearch]=\"complexSearch\"\n                      [interactors]=\"interactors\"\n                      [interactorsSorting]=\"interactorsSorting\"\n                      [organismIconDisplay]=\"organismIconDisplay\"\n                      [interactorTypeDisplay]=\"interactorTypeDisplay\"\n                      [IDDisplay]=\"IDDisplay\">\n  </cp-table-structure>\n</div>\n\n";

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
      __webpack_exports__["default"] = "<div class=\"Complex-navigator\">\n  <table class=\"table CN-table\">\n    <!-- When table is not overflowing -->\n    <thead class=\"tableHead\" *ngIf=\"complexes.length<=6\">\n    <tr>\n      <th *ngIf=\"isInteractorSortingSet()\" class=\"spaceHolderSorting\"></th>\n      <th class=\"interactorsHeader horizontal\">\n        Interactor\n      </th>\n      <th class=\"horizontal\" *ngFor=\"let complex of complexes\">\n        <a [routerLink]=\"['/complex', complex.complexAC]\"\n           title=\"{{complex.complexAC}}\"\n           target=\"_blank\">\n          <div>\n            <span title=\"{{ complex.complexName }} - {{ complex.complexAC}}\">\n              <div class=\"line\"></div>\n                <div class=\"horizontal-label\">\n                  <i class=\"{{iconOrganism(complex.organismName)}}\"></i>\n                  <i class=\"icon icon-generic small\" data-icon=\"x\"></i>\n                  {{ complex.complexName }}\n                </div>\n            </span>\n          </div>\n        </a>\n      </th>\n    </tr>\n    </thead>\n    <!-- When table is overflowing -->\n    <thead class=\"tableHeadOverflow\" *ngIf=\"complexes.length>6\">\n    <tr [style.--cols]=\"complexes.length\"\n        [style.--intHeader]=\"isInteractorSortingSet() ? '156px':''\"\n        [style.--sizeSpaceHolder]=\"complexes.length>15 ? '185px':''\">\n      <th class=\"spaceHolderHeaderOverflow\"\n          [style]=\"isInteractorSortingSet() ? 'min-width: 156px; max-width: 156px;':''\">\n      </th>\n      <th class=\"rotate\" *ngFor=\"let complex of complexes\"\n          title=\"{{ complex.complexName }} - {{ complex.complexAC}}\"\n          [style.--cols]=\"complexes.length\">\n        <a [routerLink]=\"['/complex', complex.complexAC]\"\n           title=\"{{ complex.complexName }} - {{ complex.complexAC}}\"\n           target=\"_blank\">\n          <div>\n            <span>\n              <div class=\"tilted-label\" title=\"{{ complex.complexName }} - {{ complex.complexAC}}\">\n                <i class=\"icon icon-generic small\" data-icon=\"x\"\n                   title=\"{{ complex.complexName }} - {{ complex.complexAC}}\"></i>\n                {{ complex.complexName }}\n              </div>\n            </span>\n          </div>\n        </a>\n      </th>\n      <div class=\"spaceHolder\" [style]=\"complexes.length<15 ? 'max-width: inherit;min-width: inherit':''\"></div>\n    </tr>\n    <!-- icons row -->\n    <tr [style.--cols]=\"complexes.length\"\n        [style.--intHeader]=\"isInteractorSortingSet() ? '156px':''\"\n        [style.--sizeSpaceHolder]=\"complexes.length>15 ? '185px':''\">\n      <th class=\"interactorsHeader overflow\"\n          [style]=\"isInteractorSortingSet() ? 'min-width: 156px; max-width: 156px;':''\">\n        Interactors\n      </th>\n      <ng-container *ngFor=\" let complex of complexes;\">\n        <th class=\"iconOrganism\"><i class=\"{{iconOrganism(complex.organismName)}}\" title=\"{{complex.organismName}}\"></i>\n        </th>\n      </ng-container>\n      <div class=\"spaceHolder\" [style]=\"complexes.length<15 ? 'max-width: inherit;min-width: inherit':''\"></div>\n    </tr>\n    </thead>\n  </table>\n</div>\n\n\n";

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
      __webpack_exports__["default"] = "<div class=\"Complex-navigator\">\n  <table class=\"interactors-table\"\n         [style.--cols]=\"complexes.length\">\n    <!--         [style]=\"complexes.length>8 ? 'width: calc(130px + 70px * var(&#45;&#45;cols) + 183px)':''\">-->\n    <ng-container *ngFor=\" let interactor of enrichedInteractors; let i=index\">\n      <tr *ngIf=\"!interactor.hidden\">\n        <ng-container *ngFor=\"let oneType of ranges\" class=\"interactorsOrdering\">\n          <td *ngIf=\"oneType[2]===i\" [attr.rowspan]=\"oneType[1]\" class=\"interactorSeparation\"\n              title=\"{{oneType[0]}}\">\n            <div class=\"interactorNameContainer\" [style.--rowspanSize]=\"oneType[1]\">\n              {{ oneType[0] }}\n            </div>\n          </td>\n        </ng-container>\n        <td class=\"interactorsColumn\"\n            [ngClass]=\"complexes.length<=6 ? 'horizontalHeader' : 'interactorsColumnFixedWidth'\"\n            [style]=\"ranges.length!=0 ? 'left:3ch':''\">\n          <cp-table-interactor-name\n            [interactorName]=\"interactor.interactor.name\"\n            [interactorType]=\"interactor.interactor.interactorType\"\n            [interactorId]=\"interactor.interactor.identifier\"\n            [interactorOrganism]=\"interactor.interactor.organismName\"\n            [identifierLink]=\"interactor.interactor.identifierLink\"\n            [organismIconDisplay]=\"organismIconDisplay\"\n            [interactorTypeDisplay]=\"interactorTypeDisplay\"\n            [IDDisplay]=\"IDDisplay\"\n          ></cp-table-interactor-name>\n          <!-- Icon for the expandable -->\n          <div class=\"container\" *ngIf=\"interactor.isSubComplex\">\n            <a title=\"{{ interactor.interactor.name }} interactors\" (click)=\"toggleSubcomplexExpandable(i)\">\n              Interactors\n              <i class=\"icon icon-common\" data-icon=\"&#xf078;\"\n                 style=\"font-size:small;\n                \"></i>\n            </a>\n          </div>\n        </td>\n        <!-- Interactors' stoichiometry -->\n        <ng-container *ngFor=\"let complex of enrichedComplexes\">\n          <td class=\"intStoich\" [ngClass]=\"{'intStoichFixedWidth': complexes.length > 6}\">\n            <cp-table-main-interactor\n              [complex]=\"complex\"\n              [i]=\"i\"\n              [enrichedInteractors]=\"enrichedInteractors\"\n            ></cp-table-main-interactor>\n          </td>\n        </ng-container>\n        <div class=\"spaceHolder\" *ngIf=\"complexes.length>6\"\n             [ngClass]=\"isInteractorSortingSet() ? 'spaceHolderWithSorting' : 'spaceHolder'\"></div>\n      </tr>\n      <!-- Expandable menu for subcomplexes -->\n      <ng-container *ngIf=\"interactor.expanded\">\n        <ng-container *ngIf=\"!!interactor.subComponents\">\n          <tr *ngFor=\"let el of interactor.subComponents; let j=index\"\n              class=\"expandedRows\"\n              [ngClass]=\"{'firstExpandedRow': j === 0, 'lastExpandedRow': j === interactor.subComponents.length - 1}\">\n            <td [attr.rowspan]=\"interactor.subComponents.length\" class=\"interactorSeparation\"\n                title=\"{{interactor.interactor.name}} interactors\"\n                *ngIf=\"j === 0 && (interactorsSorting === 'Type' || interactorsSorting === 'Organism')\">\n              <div class=\"interactorSeparationName\"\n                   [style.--rowspanSize]=\"interactor.subComponents.length\"> {{ interactor.interactor.name }} interactors\n              </div>\n            </td>\n            <td class=\"subComponentColumn\"\n                [ngClass]=\"complexes.length<=6 ? 'horizontalHeader' : 'interactorsColumnFixedWidth'\">\n              <div>\n                <cp-table-interactor-name\n                  [interactorName]=\"el.name\"\n                  [interactorType]=\"el.interactorType\"\n                  [interactorId]=\"el.identifier\"\n                  [interactorOrganism]=\"interactor.interactor.organismName\"\n                  [identifierLink]=\"el.identifierLink\"\n                  [organismIconDisplay]=\"organismIconDisplay\"\n                  [interactorTypeDisplay]=\"interactorTypeDisplay\"\n                  [IDDisplay]=\"IDDisplay\"\n                ></cp-table-interactor-name>\n              </div>\n            </td>\n            <ng-container *ngFor=\"let complex of enrichedComplexes\">\n              <td class=\"intStoich\" [ngClass]=\"{'intStoichFixedWidth': complexes.length > 6}\">\n                <cp-table-subcomponent-interactor\n                  [complex]=\"complex\"\n                  [i]=\"i\"\n                  [j]=\"j\"\n                  [enrichedInteractors]=\"enrichedInteractors\"\n                ></cp-table-subcomponent-interactor>\n              </td>\n            </ng-container>\n            <div class=\"spaceHolder\" *ngIf=\"enrichedComplexes.length > 6\"></div>\n          </tr>\n        </ng-container>\n      </ng-container>\n    </ng-container>\n  </table>\n</div>\n";

      /***/
    }),
    /***/60908: (
    /*!***********************************************************************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-interactor-external-link/table-interactor-external-link.component.html ***!
      \***********************************************************************************************************************************************************************************************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */
      __webpack_exports__["default"] = "<div class=\"externalLinkContainer\" title=\"More information about {{interactorId}}\">\n  <a *ngIf=\"externalLinkVisible\" href=\"{{identifierLink}}\" target=\"_blank\" class=\"externalLinkContainer\">\n    <span *ngIf=\"IDDisplay\">{{ interactorId }}</span>\n    <i class=\"icon icon-generic small\" data-icon=\"x\" title=\"More information about {{ interactorId }}\"></i>\n  </a>\n</div>\n";

      /***/
    }),
    /***/41087: (
    /*!*****************************************************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-interactor-name/table-interactor-name.component.html ***!
      \*****************************************************************************************************************************************************************************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */
      __webpack_exports__["default"] = "<div class=\"container\">\n  <div class=\"nameAndIcons\" [ngClass]=\"{inlineDisplay: interactorType==='stable complex'}\">\n    <i *ngIf=\"organismIconDisplay\"\n       class=\"{{interactorOrganismIcon}}\"\n       title=\"{{interactorOrganism}}\"></i>\n\n    <i *ngIf=\"interactorTypeDisplay\"\n       class=\"{{interactorTypeIcon}}\"\n       title=\"{{interactorType}}\"></i>\n\n    <div class=\"name\" title=\"{{interactorId}}\" *ngIf=\"IDDisplay\"> {{ interactorName }}\n    </div>\n    <a *ngIf=\"IDDisplay\"\n       [routerLink]=\"['/complex/search']\"\n       [queryParams]=\"{query: interactorId, page: 1}\"\n       target=\"_blank\">\n      <i class=\"icon icon-functional small\" data-icon=\"1\"\n         title=\"More complexes containing {{interactorName}}\"></i>\n    </a>\n\n    <div class=\"nameCompact\" *ngIf=\"!IDDisplay\">\n      <div class=\"name\" title=\"More complexes containing {{interactorName}}\" *ngIf=\"!IDDisplay\">\n        <a *ngIf=\"!IDDisplay\"\n           [routerLink]=\"['/complex/search']\"\n           [queryParams]=\"{query: interactorId, page: 1}\"\n           target=\"_blank\">\n          {{ interactorName }}\n        </a>\n      </div>\n      <cp-table-interactor-external-link\n        *ngIf=\"!IDDisplay\"\n        [interactorId]=\"interactorId\"\n        [identifierLink]=\"identifierLink\"\n        [interactorType]=\"interactorType\"\n        [isMainInteractor]=\"isMainInteractor\"\n        [IDDisplay]=\"IDDisplay\"\n        (externalLinkVisible)=\"externalLinkVisibleHandler($event)\">\n      </cp-table-interactor-external-link>\n    </div>\n  </div>\n\n  <cp-table-interactor-external-link\n    *ngIf=\"IDDisplay\"\n    [interactorId]=\"interactorId\"\n    [identifierLink]=\"identifierLink\"\n    [interactorType]=\"interactorType\"\n    [isMainInteractor]=\"isMainInteractor\"\n    [IDDisplay]=\"IDDisplay\"\n    (externalLinkVisible)=\"externalLinkVisibleHandler($event)\">\n  </cp-table-interactor-external-link>\n</div>\n";

      /***/
    }),
    /***/32716: (
    /*!***********************************************************************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-interactor-stoichiometry/table-interactor-stoichiometry.component.html ***!
      \***********************************************************************************************************************************************************************************************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */
      __webpack_exports__["default"] = "<ng-container>\n  <div class=\"stoichNum\" title=\"{{ stoichiometryText }}\">\n    {{ stoichiometryValue }}\n  </div>\n</ng-container>\n";

      /***/
    }),
    /***/16865: (
    /*!*****************************************************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-main-interactor/table-main-interactor.component.html ***!
      \*****************************************************************************************************************************************************************************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */
      __webpack_exports__["default"] = "<div [ngClass]=\"topLineClass\"></div>\n<cp-table-interactor-stoichiometry\n  *ngIf=\"!!interactorComponent\"\n  [stoichiometryText]=\"interactorComponent.stochiometryText\"\n  [stoichiometryValue]=\"interactorComponent.stochiometryValueFormatted\"\n></cp-table-interactor-stoichiometry>\n<div [ngClass]=\"bottomLineClass\"></div>\n";

      /***/
    }),
    /***/59270: (
    /*!*********************************************************************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-subcomponent-interactor/table-subcomponent-interactor.component.html ***!
      \*********************************************************************************************************************************************************************************************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */
      __webpack_exports__["default"] = "<div [ngClass]=\"displayTopLineClass\"></div>\n<cp-table-interactor-stoichiometry\n  *ngIf=\"!!interactorComponent\"\n  [stoichiometryText]=\"interactorComponent.stochiometryText\"\n  [stoichiometryValue]=\"interactorComponent.stochiometryValueFormatted\"\n></cp-table-interactor-stoichiometry>\n<div [ngClass]=\"displayBottomLineClass\"></div>\n";

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
      __webpack_exports__["default"] = "<div class=\"complexNavigatorTable\">\n  <div class=\"header\"\n       (scroll)=\"body.scrollLeft = header.scrollLeft\" #header>\n\n    <cp-table-header [complexes]=\"sortedComplexes\"\n                     [interactorsSorting]=\"interactorsSorting\">\n    </cp-table-header>\n  </div>\n  <div class=\"interactors\"\n       (scroll)=\"header.scrollLeft = body.scrollLeft\" #body>\n    <cp-table-interactor-column\n      [complexes]=\"sortedComplexes\"\n      [interactors]=\"interactors\"\n      [interactorsSorting]=\"interactorsSorting\"\n      [organismIconDisplay]=\"organismIconDisplay\"\n      [interactorTypeDisplay]=\"interactorTypeDisplay\"\n      [IDDisplay]=\"IDDisplay\">\n    </cp-table-interactor-column>\n  </div>\n  <div class=\"spaceHolder\"></div>\n</div>\n\n";

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
      __webpack_exports__["default"] = "<div class=\"margin-top-large margin-bottom-large row\">\n  <ng-container *ngIf=\"complexSearch;else loadingSpinner\">\n    <div class=\"columns medium-12\" *ngIf=\"complexSearch.totalNumberOfResults !== 0\">\n      <h2 class=\"padding-left-large leftAligned\">Total number of\n        results: {{ complexSearch.totalNumberOfResults }} </h2>\n      <div class=\"row\">\n        <cp-complex-navigator-rating *ngIf=\"DisplayType=== COMPLEX_NAVIGATOR_VIEW\">\n        </cp-complex-navigator-rating>\n        <div class=\"displayButton columns medium-8\" style=\"text-align: center; padding-left: 10px\">\n          <button type=\"submit\" name=\"submit\" class=\"button view-button\"\n                  (click)=\"setListView()\" [ngClass]=\"{'selected': DisplayType === LIST_VIEW}\">\n            View list\n          </button>\n          <button type=\"submit\" name=\"submit\" class=\"button view-button cnButton\"\n                  (click)=\"setComplexNavigatorView()\" [ngClass]=\"{'selected': DisplayType === COMPLEX_NAVIGATOR_VIEW}\">\n            View Complex Navigator\n            <span class=\"new-tag\" [ngClass]=\"{'new-tag-selected': DisplayType === COMPLEX_NAVIGATOR_VIEW}\">NEW!</span>\n          </button>\n        </div>\n      </div>\n      <div class=\"columns medium-4 filterColumn leftAligned\">\n        <cp-complex-filter *ngIf=\"spicesFilter && bioRoleFilter && interactorTypeFilter\"\n                           [spicesFilter]=\"spicesFilter\"\n                           [bioRoleFilter]=\"bioRoleFilter\"\n                           [interactorTypeFilter]=\"interactorTypeFilter\" [facets]=\"complexSearch.facets\"\n                           (onResetAllFilters)=\"onResetAllFilters()\"\n                           (onSpicesFilterChanged)=\"onSpicesFilterChanged($event)\"\n                           (onBiologicalRoleFilterChanged)=\"onBiologicalRoleFilterChanged($event)\"\n                           (onInteractorTypeFilterChanged)=\"onInteractorTypeFilterChanged($event)\">\n        </cp-complex-filter>\n      </div>\n      <div class=\"columns medium-8\">\n        <cp-complex-paginator [currentPageIndex]=\"currentPageIndex\"\n                              [lastPageIndex]=\"lastPageIndex\"\n                              (onPageChange)=\"onPageChange($event)\">\n        </cp-complex-paginator>\n        <cp-complex-list class=\"listOfResults\" *ngIf=\"DisplayType===LIST_VIEW\"\n                         [complexSearch]=\"complexSearch\">\n        </cp-complex-list>\n        <cp-complex-navigator class=\"Complex-navigator\" *ngIf=\"DisplayType===COMPLEX_NAVIGATOR_VIEW\"\n                              [complexSearch]=\"complexSearch\"\n                              [interactors]=\"allInteractorsInComplexSearch\">\n        </cp-complex-navigator>\n        <cp-complex-paginator [currentPageIndex]=\"currentPageIndex\"\n                              [lastPageIndex]=\"lastPageIndex\"\n                              (onPageChange)=\"onPageChange($event)\"></cp-complex-paginator>\n      </div>\n    </div>\n\n    <div class=\"columns medium-12 callout alert\" *ngIf=\"complexSearch.totalNumberOfResults === 0\">\n      <h2>No Complex Portal results found</h2>\n      <h3>We're sorry but we couldn't find anything that matched your search for: <b>{{ query }}</b></h3>\n      <h4>Please consider refining your terms:</h4>\n      <ul>\n        <li>Make sure all words are spelled correctly</li>\n        <li>Try different keywords</li>\n        <li>Be more precise: use gene or protein IDs, e.g. Ndc80 or Q04571</li>\n        <li>Remove quotes around phrases to search for each word individually. bike shed will often show more results\n          than\n          \"bike shed\"\n        </li>\n      </ul>\n    </div>\n  </ng-container>\n  <ng-template #loadingSpinner>\n    <cp-progress-spinner [query]=\"query\"></cp-progress-spinner>\n  </ng-template>\n</div>\n";

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
    /***/1604: (
    /*!***********************************************************************************************************!*\
      !*** ./src/app/complex/complex-results/complex-navigator-buttons/complex-navigator-buttons.component.css ***!
      \***********************************************************************************************************/
    /***/
    function _(module) {
      module.exports = ".typeOfSorting {\n  display: none;\n}\n\n.sortingInteractors:hover .typeOfSorting {\n  display: flex;\n  margin-top: -15px;\n  flex-direction: row;\n  position: absolute;\n  z-index: 5;\n}\n\n.typeOfSorting .button {\n  border-right: 1px solid white;\n  font-size: 14px;\n}\n\n.filters {\n  width: 120.5%;\n  display: flex;\n  justify-content: center;\n  grid-gap: 10px;\n  height: 67px;\n  z-index: 5;\n  text-align: center;\n}\n\n.displaySize {\n  display: none;\n}\n\n.detailedDisplayOptions {\n  display: none;\n}\n\n.dropdown:hover .displaySize {\n  display: flex;\n  list-style: none;\n  width: 300px;\n  background-color: #007c82;\n  color: white;\n  margin-top: -15px;\n  flex-direction: row;\n  position: absolute;\n  height: 40px;\n  align-content: center;\n  z-index: 5;\n}\n\n.dropdown:hover .displaySize li {\n  width: 200px;\n  background-color: #007c82;\n  margin-left: -21px;\n  text-align: left;\n  padding-left: 6px;\n  z-index: 5;\n}\n\nli {\n  text-align: center;\n  align-items: center;\n  font-size: 14px;\n  border-left: 1px solid white;\n  padding-top: 10px;\n  max-width: 171px;\n}\n\n.detailedDisplay:hover .detailedDisplayOptions {\n  display: flex;\n  list-style: none;\n  align-content: baseline;\n  flex-direction: column;\n  position: absolute;\n  z-index: 5;\n  margin-left: 14px;\n}\n\n.detailedDisplayOptions li {\n  text-align: left;\n  z-index: 5;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBsZXgtbmF2aWdhdG9yLWJ1dHRvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxZQUFZO0VBQ1osVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLDRCQUE0QjtFQUM1QixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWiIsImZpbGUiOiJjb21wbGV4LW5hdmlnYXRvci1idXR0b25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHlwZU9mU29ydGluZyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zb3J0aW5nSW50ZXJhY3RvcnM6aG92ZXIgLnR5cGVPZlNvcnRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiAtMTVweDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA1O1xufVxuXG4udHlwZU9mU29ydGluZyAuYnV0dG9uIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmZpbHRlcnMge1xuICB3aWR0aDogMTIwLjUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ3JpZC1nYXA6IDEwcHg7XG4gIGhlaWdodDogNjdweDtcbiAgei1pbmRleDogNTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZGlzcGxheVNpemUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uZGV0YWlsZWREaXNwbGF5T3B0aW9ucyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5kcm9wZG93bjpob3ZlciAuZGlzcGxheVNpemUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICB3aWR0aDogMzAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdjODI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogLTE1cHg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIHotaW5kZXg6IDU7XG59XG5cbi5kcm9wZG93bjpob3ZlciAuZGlzcGxheVNpemUgbGkge1xuICB3aWR0aDogMjAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdjODI7XG4gIG1hcmdpbi1sZWZ0OiAtMjFweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy1sZWZ0OiA2cHg7XG4gIHotaW5kZXg6IDU7XG59XG5cbmxpIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgd2hpdGU7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBtYXgtd2lkdGg6IDE3MXB4O1xufVxuXG4uZGV0YWlsZWREaXNwbGF5OmhvdmVyIC5kZXRhaWxlZERpc3BsYXlPcHRpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgYWxpZ24tY29udGVudDogYmFzZWxpbmU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogNTtcbiAgbWFyZ2luLWxlZnQ6IDE0cHg7XG59XG5cbi5kZXRhaWxlZERpc3BsYXlPcHRpb25zIGxpIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgei1pbmRleDogNTtcbn1cbiJdfQ== */";

      /***/
    }),
    /***/2405: (
    /*!***************************************************************************************************************************!*\
      !*** ./src/app/complex/complex-results/complex-navigator/complex-navigator-rating/complex-navigator-rating.component.css ***!
      \***************************************************************************************************************************/
    /***/
    function _(module) {
      module.exports = ".star {\n  font-size: 1.5em;\n  cursor: pointer;\n  color: white;\n}\n\n.star.selected {\n  color: gold;\n}\n\n.ratingComponent {\n  background-color: #007c82;\n  padding: 5px;\n  width: 20%;\n  text-align: center;\n  margin-left: 92%;\n  margin-top: -5%;\n  position: fixed;\n  z-index: 5;\n  top: 20em;\n  left: -13%;\n  border: 1px solid white;\n  animation-name: ratingComponentMove;\n  animation-duration: 1s;\n}\n\n.ratingComponent input {\n  background-color: white;\n  color: #007c82;\n}\n\n.text {\n  display: -webkit-box;\n  color: white;\n  width: 96%;\n  text-align: -webkit-center;\n  padding-left: 10px;\n  margin-bottom: -15px;\n}\n\n@keyframes ratingComponentMove {\n  from {\n    left: 10%;\n  }\n  to {\n    left: -13%;\n  }\n}\n\n.buttonContainer {\n  width: 100%;\n  height: 1ch;\n  text-align: end;\n  padding-right: 5px;\n}\n\n.close {\n  color: white;\n}\n\n.ratingComponentStars {\n  padding-bottom: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBsZXgtbmF2aWdhdG9yLXJhdGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixlQUFlO0VBQ2YsVUFBVTtFQUNWLFNBQVM7RUFDVCxVQUFVO0VBQ1YsdUJBQXVCO0VBQ3ZCLG1DQUFtQztFQUNuQyxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osVUFBVTtFQUNWLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0U7SUFDRSxTQUFTO0VBQ1g7RUFDQTtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6ImNvbXBsZXgtbmF2aWdhdG9yLXJhdGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0YXIge1xuICBmb250LXNpemU6IDEuNWVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnN0YXIuc2VsZWN0ZWQge1xuICBjb2xvcjogZ29sZDtcbn1cblxuLnJhdGluZ0NvbXBvbmVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdjODI7XG4gIHBhZGRpbmc6IDVweDtcbiAgd2lkdGg6IDIwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogOTIlO1xuICBtYXJnaW4tdG9wOiAtNSU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogNTtcbiAgdG9wOiAyMGVtO1xuICBsZWZ0OiAtMTMlO1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgYW5pbWF0aW9uLW5hbWU6IHJhdGluZ0NvbXBvbmVudE1vdmU7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG59XG5cbi5yYXRpbmdDb21wb25lbnQgaW5wdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6ICMwMDdjODI7XG59XG5cbi50ZXh0IHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDk2JTtcbiAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogLTE1cHg7XG59XG5cbkBrZXlmcmFtZXMgcmF0aW5nQ29tcG9uZW50TW92ZSB7XG4gIGZyb20ge1xuICAgIGxlZnQ6IDEwJTtcbiAgfVxuICB0byB7XG4gICAgbGVmdDogLTEzJTtcbiAgfVxufVxuXG4uYnV0dG9uQ29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMWNoO1xuICB0ZXh0LWFsaWduOiBlbmQ7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxuLmNsb3NlIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ucmF0aW5nQ29tcG9uZW50U3RhcnMge1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuIl19 */";

      /***/
    }),
    /***/14332: (
    /*!*******************************************************************************************!*\
      !*** ./src/app/complex/complex-results/complex-navigator/complex-navigator.component.css ***!
      \*******************************************************************************************/
    /***/
    function _(module) {
      module.exports = ".ComplexNavigator {\n  width: calc(100rem * 0.71); /* the px value corresponds to the width of the facets column + the margin */\n  margin-left: calc(-100rem * 0.17)\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBsZXgtbmF2aWdhdG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBMEIsRUFBRSw0RUFBNEU7RUFDeEc7QUFDRiIsImZpbGUiOiJjb21wbGV4LW5hdmlnYXRvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLkNvbXBsZXhOYXZpZ2F0b3Ige1xuICB3aWR0aDogY2FsYygxMDByZW0gKiAwLjcxKTsgLyogdGhlIHB4IHZhbHVlIGNvcnJlc3BvbmRzIHRvIHRoZSB3aWR0aCBvZiB0aGUgZmFjZXRzIGNvbHVtbiArIHRoZSBtYXJnaW4gKi9cbiAgbWFyZ2luLWxlZnQ6IGNhbGMoLTEwMHJlbSAqIDAuMTcpXG59XG5cbiJdfQ== */";

      /***/
    }),
    /***/32149: (
    /*!*******************************************************************************************************************!*\
      !*** ./src/app/complex/complex-results/complex-navigator/table-structure/table-header/table-header.component.css ***!
      \*******************************************************************************************************************/
    /***/
    function _(module) {
      module.exports = ".CN-table {\n  transform: rotateX(180deg); /* rotate the header's content to make it it the right sense (when removes, it is upside down) */\n}\n\nthead {\n  border: 0;\n  background-color: white;\n  border-right: 0 solid white;\n  overflow: scroll;\n\n}\n\n.CN-table {\n  -webkit-clip-path: fill-box;\n          clip-path: fill-box;\n  overflow: scroll;\n}\n\n.spaceHolderSorting {\n  width: 3ch;\n  border-bottom: 3px solid #007c82;\n}\n\n/* Rotated complexes names */\n\n.spaceHolderHeaderOverflow {\n  min-width: 130px;\n  max-width: 130px;\n  position: sticky;\n  left: 0;\n  z-index: 4;\n  color: #007c82;\n  background-color: white;\n  padding-top: 173px;\n  text-align: right;\n}\n\n.iconOrganism {\n  position: sticky;\n  text-align: center;\n  background-color: #007c82;\n  color: white;\n  border-left: 1px solid white;\n  font-size: medium;\n  height: 35px;\n}\n\n.tilted-label {\n  text-overflow: ellipsis;\n  width: 28ch;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.CN-table .tableHeadOverflow tr {\n  --cols: 1;\n  --intHeader: 130px;\n  --parentWidth: 100%;\n  --sizeSpaceHolder: calc(var(--parentWidth) - 70px * var(--cols) - var(--intHeader));\n  display: grid;\n  grid-template-columns: var(--intHeader) repeat(auto-fit, 70px);\n  width: calc(var(--intHeader) + 70px * var(--cols) + var(--sizeSpaceHolder));\n  overflow: hidden;\n}\n\n.CN-table .tableHeadOverflow th.rotate {\n  position: relative;\n  width: 350px;\n  height: 51px !important;\n  color: white;\n  font-size: 14px;\n  text-align: left;\n  border: 1px solid white;\n  top: 70px;\n  left: -52px;\n  display: flex;\n  align-items: center;\n  align-content: center;\n  padding: 0;\n  transform: rotate(-45deg);\n  border-collapse: collapse;\n}\n\n.CN-table .tableHeadOverflow th.rotate a {\n  width: 100%;\n  height: 100%;\n  align-content: center;\n  background-color: #007c82;\n  padding: 0 0 0 70px;\n  border: none;\n}\n\n.spaceHolder {\n  width: 1000px;\n  background-color: #007c82;\n  border-left: 1px solid white;\n}\n\n.interactorsHeader.overflow {\n  min-width: 130px;\n  max-width: 130px;\n  width: 130px;\n  position: sticky;\n  left: 0;\n  z-index: 4;\n  background-color: white;\n  border-bottom: 3px solid #007c82;\n  height: 35px;\n  text-align: right;\n  color: #007c82;\n}\n\n/* Horizontal complexes name */\n\n.CN-table th.horizontal.interactorsHeader {\n  padding: 5px;\n  min-width: 130px;\n  max-width: 130px;\n  font-size: medium;\n  border-left: none;\n  text-align: right;\n  color: #007c82;\n  background-color: white;\n  border-bottom: 3px solid #007c82;\n}\n\n.horizontal-label {\n  text-align: center;\n  text-overflow: ellipsis;\n  width: 90%;\n  white-space: nowrap;\n  overflow: hidden;\n  margin: auto;\n}\n\n.CN-table th.horizontal {\n  color: white;\n  background-color: #007c82;\n  border-left: 1px solid white;\n  min-width: 80px;\n  max-width: 80px;\n  height: 35px;\n  font-size: 15px;\n}\n\na:visited {\n  color: white;\n}\n\na {\n  color: white;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlLWhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQTBCLEVBQUUsZ0dBQWdHO0FBQzlIOztBQUVBO0VBQ0UsU0FBUztFQUNULHVCQUF1QjtFQUN2QiwyQkFBMkI7RUFDM0IsZ0JBQWdCOztBQUVsQjs7QUFFQTtFQUNFLDJCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGdDQUFnQztBQUNsQzs7QUFFQSw0QkFBNEI7O0FBRTVCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsT0FBTztFQUNQLFVBQVU7RUFDVixjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBR0E7RUFDRSxTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixtRkFBbUY7RUFDbkYsYUFBYTtFQUNiLDhEQUE4RDtFQUM5RCwyRUFBMkU7RUFDM0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsVUFBVTtFQUNWLHlCQUF5QjtFQUN6Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLE9BQU87RUFDUCxVQUFVO0VBQ1YsdUJBQXVCO0VBQ3ZCLGdDQUFnQztFQUNoQyxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUEsOEJBQThCOztBQUU5QjtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLDRCQUE0QjtFQUM1QixlQUFlO0VBQ2YsZUFBZTtFQUNmLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InRhYmxlLWhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLkNOLXRhYmxlIHtcbiAgdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7IC8qIHJvdGF0ZSB0aGUgaGVhZGVyJ3MgY29udGVudCB0byBtYWtlIGl0IGl0IHRoZSByaWdodCBzZW5zZSAod2hlbiByZW1vdmVzLCBpdCBpcyB1cHNpZGUgZG93bikgKi9cbn1cblxudGhlYWQge1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmlnaHQ6IDAgc29saWQgd2hpdGU7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG5cbn1cblxuLkNOLXRhYmxlIHtcbiAgY2xpcC1wYXRoOiBmaWxsLWJveDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cblxuLnNwYWNlSG9sZGVyU29ydGluZyB7XG4gIHdpZHRoOiAzY2g7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMDA3YzgyO1xufVxuXG4vKiBSb3RhdGVkIGNvbXBsZXhlcyBuYW1lcyAqL1xuXG4uc3BhY2VIb2xkZXJIZWFkZXJPdmVyZmxvdyB7XG4gIG1pbi13aWR0aDogMTMwcHg7XG4gIG1heC13aWR0aDogMTMwcHg7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDQ7XG4gIGNvbG9yOiAjMDA3YzgyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy10b3A6IDE3M3B4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmljb25PcmdhbmlzbSB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2M4MjtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHdoaXRlO1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgaGVpZ2h0OiAzNXB4O1xufVxuXG4udGlsdGVkLWxhYmVsIHtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdpZHRoOiAyOGNoO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5cbi5DTi10YWJsZSAudGFibGVIZWFkT3ZlcmZsb3cgdHIge1xuICAtLWNvbHM6IDE7XG4gIC0taW50SGVhZGVyOiAxMzBweDtcbiAgLS1wYXJlbnRXaWR0aDogMTAwJTtcbiAgLS1zaXplU3BhY2VIb2xkZXI6IGNhbGModmFyKC0tcGFyZW50V2lkdGgpIC0gNzBweCAqIHZhcigtLWNvbHMpIC0gdmFyKC0taW50SGVhZGVyKSk7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogdmFyKC0taW50SGVhZGVyKSByZXBlYXQoYXV0by1maXQsIDcwcHgpO1xuICB3aWR0aDogY2FsYyh2YXIoLS1pbnRIZWFkZXIpICsgNzBweCAqIHZhcigtLWNvbHMpICsgdmFyKC0tc2l6ZVNwYWNlSG9sZGVyKSk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5DTi10YWJsZSAudGFibGVIZWFkT3ZlcmZsb3cgdGgucm90YXRlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMzUwcHg7XG4gIGhlaWdodDogNTFweCAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIHRvcDogNzBweDtcbiAgbGVmdDogLTUycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cblxuLkNOLXRhYmxlIC50YWJsZUhlYWRPdmVyZmxvdyB0aC5yb3RhdGUgYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2M4MjtcbiAgcGFkZGluZzogMCAwIDAgNzBweDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uc3BhY2VIb2xkZXIge1xuICB3aWR0aDogMTAwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YzgyO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHdoaXRlO1xufVxuXG4uaW50ZXJhY3RvcnNIZWFkZXIub3ZlcmZsb3cge1xuICBtaW4td2lkdGg6IDEzMHB4O1xuICBtYXgtd2lkdGg6IDEzMHB4O1xuICB3aWR0aDogMTMwcHg7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzAwN2M4MjtcbiAgaGVpZ2h0OiAzNXB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgY29sb3I6ICMwMDdjODI7XG59XG5cbi8qIEhvcml6b250YWwgY29tcGxleGVzIG5hbWUgKi9cblxuLkNOLXRhYmxlIHRoLmhvcml6b250YWwuaW50ZXJhY3RvcnNIZWFkZXIge1xuICBwYWRkaW5nOiA1cHg7XG4gIG1pbi13aWR0aDogMTMwcHg7XG4gIG1heC13aWR0aDogMTMwcHg7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGNvbG9yOiAjMDA3YzgyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMwMDdjODI7XG59XG5cbi5ob3Jpem9udGFsLWxhYmVsIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2lkdGg6IDkwJTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uQ04tdGFibGUgdGguaG9yaXpvbnRhbCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2M4MjtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB3aGl0ZTtcbiAgbWluLXdpZHRoOiA4MHB4O1xuICBtYXgtd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogMzVweDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG5hOnZpc2l0ZWQge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmEge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbiJdfQ== */";

      /***/
    }),
    /***/88066: (
    /*!*****************************************************************************************************************************************!*\
      !*** ./src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-interactor-column.component.css ***!
      \*****************************************************************************************************************************************/
    /***/
    function _(module) {
      module.exports = "table {\n  --cols: 1;\n  height: 1px;\n  width: calc(var(130px) + 70px * var(--cols) + 183px);\n  overflow: scroll;\n}\n\n/* interactors column */\n\n.interactorsColumn {\n  position: sticky;\n  left: 0;\n  z-index: 5;\n  max-height: 45px;\n  min-height: 45px;\n  min-width: 130px;\n  max-width: 130px;\n  padding: 5px;\n  text-align: end;\n  color: #0e6f76;\n  font-weight: bold;\n  background: inherit;\n}\n\n.interactorsColumnFixedWidth {\n  width: 130px;\n}\n\n.interactorsColumn a {\n  font-weight: normal;\n}\n\n.intStoich {\n  height: 45px;\n  max-width: 70px;\n  min-width: 70px;\n  font-size: medium;\n  text-align: end;\n  z-index: 1;\n}\n\n.intStoichFixedWidth {\n  width: 70px;\n}\n\ni:not(.small) {\n  font-size: large;\n}\n\ntr:nth-child(even) {\n  background-color: #dfeced;\n}\n\ntr:nth-child(odd) {\n  background-color: #f7f9fa;\n}\n\na, a:visited {\n  color: #0e6f76;\n}\n\n.spaceHolder {\n  width: 183px;\n}\n\n.subComponentColumn {\n  left: 0;\n  z-index: 30;\n  max-height: 45px;\n  min-height: 45px;\n  min-width: 130px;\n  max-width: 130px;\n  padding: 5px;\n  text-align: end;\n  color: #0e6f76;\n  font-weight: bold;\n  background: inherit;\n  position: sticky\n}\n\n.expandedRows {\n  color: #0e6f76;\n  position: relative;\n}\n\n.firstExpandedRow:after {\n  z-index: 40;\n  content: '';\n  position: absolute;\n  inset: -2px -1px -2px -1px;\n  pointer-events: none;\n  background: linear-gradient(180deg, #0e6f7696 0px, transparent 10px);\n}\n\n.lastExpandedRow:after {\n  z-index: 40;\n  content: '';\n  position: absolute;\n  inset: -2px -1px -2px -1px;\n  pointer-events: none;\n  background: linear-gradient(0deg, #0e6f7696 0px, transparent 10px);\n}\n\n/* Interactors sorting label*/\n\n.interactorSeparation {\n  max-width: 3ch;\n  min-width: 3ch;\n  background-color: #0e6f76;\n  border: 1px solid white;\n  overflow: hidden;\n  width: 1%;\n  text-align: -webkit-center;\n  position: sticky;\n  z-index: 4;\n  left: 0;\n}\n\n.interactorNameContainer,\n.interactorSeparationName {\n  --rowspanSize: 1;\n  writing-mode: vertical-rl;\n  transform: rotate(-180deg);\n  font-size: small;\n  color: white;\n  line-height: 0.8;\n  text-align: center;\n\n\n  text-overflow: ellipsis;\n  height: calc(var(--rowspanSize) * 48px);\n  white-space: nowrap;\n  overflow: hidden;\n\n}\n\n.container {\n  font-size: 14px;\n}\n\n.horizontalHeader {\n  min-width: 114px;\n  max-width: 114px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlLWludGVyYWN0b3ItY29sdW1uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFTO0VBQ1QsV0FBVztFQUNYLG9EQUFvRDtFQUNwRCxnQkFBZ0I7QUFDbEI7O0FBRUEsdUJBQXVCOztBQUN2QjtFQUNFLGdCQUFnQjtFQUNoQixPQUFPO0VBQ1AsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZUFBZTtFQUNmLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsT0FBTztFQUNQLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGVBQWU7RUFDZixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQjtBQUNGOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQixvQkFBb0I7RUFDcEIsb0VBQW9FO0FBQ3RFOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLG9CQUFvQjtFQUNwQixrRUFBa0U7QUFDcEU7O0FBRUEsNkJBQTZCOztBQUU3QjtFQUNFLGNBQWM7RUFDZCxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsU0FBUztFQUNULDBCQUEwQjtFQUMxQixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLE9BQU87QUFDVDs7QUFFQTs7RUFFRSxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLDBCQUEwQjtFQUMxQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7OztFQUdsQix1QkFBdUI7RUFDdkIsdUNBQXVDO0VBQ3ZDLG1CQUFtQjtFQUNuQixnQkFBZ0I7O0FBRWxCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoidGFibGUtaW50ZXJhY3Rvci1jb2x1bW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgLS1jb2xzOiAxO1xuICBoZWlnaHQ6IDFweDtcbiAgd2lkdGg6IGNhbGModmFyKDEzMHB4KSArIDcwcHggKiB2YXIoLS1jb2xzKSArIDE4M3B4KTtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cblxuLyogaW50ZXJhY3RvcnMgY29sdW1uICovXG4uaW50ZXJhY3RvcnNDb2x1bW4ge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiA1O1xuICBtYXgtaGVpZ2h0OiA0NXB4O1xuICBtaW4taGVpZ2h0OiA0NXB4O1xuICBtaW4td2lkdGg6IDEzMHB4O1xuICBtYXgtd2lkdGg6IDEzMHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIHRleHQtYWxpZ246IGVuZDtcbiAgY29sb3I6ICMwZTZmNzY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xufVxuXG4uaW50ZXJhY3RvcnNDb2x1bW5GaXhlZFdpZHRoIHtcbiAgd2lkdGg6IDEzMHB4O1xufVxuXG4uaW50ZXJhY3RvcnNDb2x1bW4gYSB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi5pbnRTdG9pY2gge1xuICBoZWlnaHQ6IDQ1cHg7XG4gIG1heC13aWR0aDogNzBweDtcbiAgbWluLXdpZHRoOiA3MHB4O1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgdGV4dC1hbGlnbjogZW5kO1xuICB6LWluZGV4OiAxO1xufVxuXG4uaW50U3RvaWNoRml4ZWRXaWR0aCB7XG4gIHdpZHRoOiA3MHB4O1xufVxuXG5pOm5vdCguc21hbGwpIHtcbiAgZm9udC1zaXplOiBsYXJnZTtcbn1cblxudHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RmZWNlZDtcbn1cblxudHI6bnRoLWNoaWxkKG9kZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmOWZhO1xufVxuXG5hLCBhOnZpc2l0ZWQge1xuICBjb2xvcjogIzBlNmY3Njtcbn1cblxuLnNwYWNlSG9sZGVyIHtcbiAgd2lkdGg6IDE4M3B4O1xufVxuXG4uc3ViQ29tcG9uZW50Q29sdW1uIHtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMzA7XG4gIG1heC1oZWlnaHQ6IDQ1cHg7XG4gIG1pbi1oZWlnaHQ6IDQ1cHg7XG4gIG1pbi13aWR0aDogMTMwcHg7XG4gIG1heC13aWR0aDogMTMwcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgdGV4dC1hbGlnbjogZW5kO1xuICBjb2xvcjogIzBlNmY3NjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gIHBvc2l0aW9uOiBzdGlja3lcbn1cblxuLmV4cGFuZGVkUm93cyB7XG4gIGNvbG9yOiAjMGU2Zjc2O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5maXJzdEV4cGFuZGVkUm93OmFmdGVyIHtcbiAgei1pbmRleDogNDA7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGluc2V0OiAtMnB4IC0xcHggLTJweCAtMXB4O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzBlNmY3Njk2IDBweCwgdHJhbnNwYXJlbnQgMTBweCk7XG59XG5cbi5sYXN0RXhwYW5kZWRSb3c6YWZ0ZXIge1xuICB6LWluZGV4OiA0MDtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaW5zZXQ6IC0ycHggLTFweCAtMnB4IC0xcHg7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgIzBlNmY3Njk2IDBweCwgdHJhbnNwYXJlbnQgMTBweCk7XG59XG5cbi8qIEludGVyYWN0b3JzIHNvcnRpbmcgbGFiZWwqL1xuXG4uaW50ZXJhY3RvclNlcGFyYXRpb24ge1xuICBtYXgtd2lkdGg6IDNjaDtcbiAgbWluLXdpZHRoOiAzY2g7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZTZmNzY7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMSU7XG4gIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB6LWluZGV4OiA0O1xuICBsZWZ0OiAwO1xufVxuXG4uaW50ZXJhY3Rvck5hbWVDb250YWluZXIsXG4uaW50ZXJhY3RvclNlcGFyYXRpb25OYW1lIHtcbiAgLS1yb3dzcGFuU2l6ZTogMTtcbiAgd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1ybDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbGluZS1oZWlnaHQ6IDAuODtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG5cbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGhlaWdodDogY2FsYyh2YXIoLS1yb3dzcGFuU2l6ZSkgKiA0OHB4KTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxufVxuXG4uY29udGFpbmVyIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uaG9yaXpvbnRhbEhlYWRlciB7XG4gIG1pbi13aWR0aDogMTE0cHg7XG4gIG1heC13aWR0aDogMTE0cHg7XG59XG5cbiJdfQ== */";

      /***/
    }),
    /***/52504: (
    /*!*******************************************************************************************************************************************************************************!*\
      !*** ./src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-interactor-external-link/table-interactor-external-link.component.css ***!
      \*******************************************************************************************************************************************************************************/
    /***/
    function _(module) {
      module.exports = "a {\n  font-weight: normal;\n}\n\na, a:visited {\n  color: #0e6f76;\n}\n\ni:not(.small) {\n  font-size: large;\n}\n\n.externalLinkContainer {\n  justify-content: end;\n  grid-gap: 5px;\n  font-size: 14px;\n  line-break: anywhere;\n  word-break: break-word;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlLWludGVyYWN0b3ItZXh0ZXJuYWwtbGluay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixzQkFBc0I7QUFDeEIiLCJmaWxlIjoidGFibGUtaW50ZXJhY3Rvci1leHRlcm5hbC1saW5rLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuYSwgYTp2aXNpdGVkIHtcbiAgY29sb3I6ICMwZTZmNzY7XG59XG5cbmk6bm90KC5zbWFsbCkge1xuICBmb250LXNpemU6IGxhcmdlO1xufVxuXG4uZXh0ZXJuYWxMaW5rQ29udGFpbmVyIHtcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gIGdyaWQtZ2FwOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1icmVhazogYW55d2hlcmU7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG59XG4iXX0= */";

      /***/
    }),
    /***/57324: (
    /*!*************************************************************************************************************************************************************!*\
      !*** ./src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-interactor-name/table-interactor-name.component.css ***!
      \*************************************************************************************************************************************************************/
    /***/
    function _(module) {
      module.exports = "a {\n  font-weight: bold;\n}\n\na, a:visited {\n  color: #0e6f76;\n}\n\ni:not(.small) {\n  font-size: medium;\n}\n\n.nameAndIcons {\n  font-size: 14px;\n  display: flex;\n  width: inherit;\n  justify-content: end;\n}\n\n.inlineDisplay {\n  display: flex;\n  justify-content: end;\n}\n\n.name {\n  width: inherit;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  text-wrap: nowrap;\n  text-align: end;\n  padding-right: 5px;\n  /*display: inline;*/\n}\n\n.nameCompact {\n  display: inline-flex;\n  width: -webkit-fill-available;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlLWludGVyYWN0b3ItbmFtZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsY0FBYztFQUNkLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsNkJBQTZCO0FBQy9CIiwiZmlsZSI6InRhYmxlLWludGVyYWN0b3ItbmFtZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5hLCBhOnZpc2l0ZWQge1xuICBjb2xvcjogIzBlNmY3Njtcbn1cblxuaTpub3QoLnNtYWxsKSB7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xufVxuXG4ubmFtZUFuZEljb25zIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogaW5oZXJpdDtcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XG59XG5cbi5pbmxpbmVEaXNwbGF5IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XG59XG5cbi5uYW1lIHtcbiAgd2lkdGg6IGluaGVyaXQ7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LXdyYXA6IG5vd3JhcDtcbiAgdGV4dC1hbGlnbjogZW5kO1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIC8qZGlzcGxheTogaW5saW5lOyovXG59XG5cbi5uYW1lQ29tcGFjdCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbn1cbiJdfQ== */";

      /***/
    }),
    /***/90745: (
    /*!*******************************************************************************************************************************************************************************!*\
      !*** ./src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-interactor-stoichiometry/table-interactor-stoichiometry.component.css ***!
      \*******************************************************************************************************************************************************************************/
    /***/
    function _(module) {
      module.exports = "\n.stoichNum {\n  width: 4ch;\n  height: 4ch;\n  border-radius: 4ch;\n  background-color: #0e6f76;\n  text-align: center;\n  padding-top: 0.5ch;\n  color: white;\n  font-size: small;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlLWludGVyYWN0b3Itc3RvaWNoaW9tZXRyeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJ0YWJsZS1pbnRlcmFjdG9yLXN0b2ljaGlvbWV0cnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnN0b2ljaE51bSB7XG4gIHdpZHRoOiA0Y2g7XG4gIGhlaWdodDogNGNoO1xuICBib3JkZXItcmFkaXVzOiA0Y2g7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZTZmNzY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDAuNWNoO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4iXX0= */";

      /***/
    }),
    /***/96532: (
    /*!*************************************************************************************************************************************************************!*\
      !*** ./src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-main-interactor/table-main-interactor.component.css ***!
      \*************************************************************************************************************************************************************/
    /***/
    function _(module) {
      module.exports = ".verticalLine, .transparentVerticalLine {\n  margin-left: auto;\n  margin-right: auto;\n  min-width: 1%;\n  max-width: 1%;\n  max-height: 80%;\n  min-height: 80%;\n  z-index: 0;\n}\n\n.verticalLine {\n  border-right: 3px solid #0e6f76;\n}\n\n.transparentVerticalLine {\n  border-right: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlLW1haW4taW50ZXJhY3Rvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsYUFBYTtFQUNiLGVBQWU7RUFDZixlQUFlO0VBQ2YsVUFBVTtBQUNaOztBQUVBO0VBQ0UsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJ0YWJsZS1tYWluLWludGVyYWN0b3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi52ZXJ0aWNhbExpbmUsIC50cmFuc3BhcmVudFZlcnRpY2FsTGluZSB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1pbi13aWR0aDogMSU7XG4gIG1heC13aWR0aDogMSU7XG4gIG1heC1oZWlnaHQ6IDgwJTtcbiAgbWluLWhlaWdodDogODAlO1xuICB6LWluZGV4OiAwO1xufVxuXG4udmVydGljYWxMaW5lIHtcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgIzBlNmY3Njtcbn1cblxuLnRyYW5zcGFyZW50VmVydGljYWxMaW5lIHtcbiAgYm9yZGVyLXJpZ2h0OiAwO1xufVxuIl19 */";

      /***/
    }),
    /***/85339: (
    /*!*****************************************************************************************************************************************************************************!*\
      !*** ./src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-subcomponent-interactor/table-subcomponent-interactor.component.css ***!
      \*****************************************************************************************************************************************************************************/
    /***/
    function _(module) {
      module.exports = ".verticalLine, .transparentVerticalLine {\n  margin-left: auto;\n  margin-right: auto;\n  min-width: 1%;\n  max-width: 1%;\n  max-height: 50%;\n  min-height: 50%;\n  z-index: 0;\n}\n\n.verticalLine {\n  border-right: 3px solid #0e6f76;\n}\n\n.transparentVerticalLine {\n  border-right: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlLXN1YmNvbXBvbmVudC1pbnRlcmFjdG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixhQUFhO0VBQ2IsZUFBZTtFQUNmLGVBQWU7RUFDZixVQUFVO0FBQ1o7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6InRhYmxlLXN1YmNvbXBvbmVudC1pbnRlcmFjdG9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmVydGljYWxMaW5lLCAudHJhbnNwYXJlbnRWZXJ0aWNhbExpbmUge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtaW4td2lkdGg6IDElO1xuICBtYXgtd2lkdGg6IDElO1xuICBtYXgtaGVpZ2h0OiA1MCU7XG4gIG1pbi1oZWlnaHQ6IDUwJTtcbiAgei1pbmRleDogMDtcbn1cblxuLnZlcnRpY2FsTGluZSB7XG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICMwZTZmNzY7XG59XG5cbi50cmFuc3BhcmVudFZlcnRpY2FsTGluZSB7XG4gIGJvcmRlci1yaWdodDogMDtcbn1cbiJdfQ== */";

      /***/
    }),
    /***/71108: (
    /*!*********************************************************************************************************!*\
      !*** ./src/app/complex/complex-results/complex-navigator/table-structure/table-structure.component.css ***!
      \*********************************************************************************************************/
    /***/
    function _(module) {
      module.exports = ".complexNavigatorTable {\n  border-collapse: separate;\n  height: 100%;\n  width: 120%;\n}\n\n.header {\n  position: sticky;\n  top: 20px;\n  z-index: 2;\n  overflow-x: auto;\n  overflow-y: hidden;\n  transform: rotateX(180deg);\n}\n\n.interactors {\n  z-index: 1;\n  position: relative;\n  overflow-y: hidden;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlLXN0cnVjdHVyZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsU0FBUztFQUNULFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InRhYmxlLXN0cnVjdHVyZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbXBsZXhOYXZpZ2F0b3JUYWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEyMCU7XG59XG5cbi5oZWFkZXIge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDIwcHg7XG4gIHotaW5kZXg6IDI7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7XG59XG5cbi5pbnRlcmFjdG9ycyB7XG4gIHotaW5kZXg6IDE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xufVxuIl19 */";

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
      module.exports = ".displayButton {\n  float: right;\n}\n\n.view-button {\n  float: unset;\n  width: 225px;\n  margin-right: 5px;\n  background-color: white;\n  color: #555;\n  border: 1px dotted #007c82;\n}\n\n.view-button:hover {\n  color: #007c82;\n  background-color: rgb(234, 234, 234);\n  border: transparent;\n  border-bottom: 1px dotted #007c82;\n}\n\n.selected,\n.selected:hover {\n  background-color: #007c82;\n  color: white;\n  opacity: 100%;\n}\n\n.new-tag {\n  color: red;\n  font-weight: bold;\n  font-size: x-small;\n}\n\n.new-tag-selected {\n  color: yellow;\n}\n\n.filterColumn {\n  width: calc(100rem * 0.22);\n}\n\n.leftAligned {\n  --global-margin: calc((100vw - 80rem) / -2);\n  --min-margin-left: calc(-100rem * 0.17);\n  margin-left: max(var(--global-margin), var(--min-margin-left));\n}\n\n.cnButton {\n  outline-offset: 0;\n  outline: rgba(0, 124, 130, 0.75) solid 1px;\n  animation: animateOutline 4s ease infinite;\n}\n\n@keyframes animateOutline {\n  0% {\n    outline-width: 1px;\n    outline-offset: 0;\n    outline-color: rgba(0, 124, 130, 0);\n  }\n\n  10% {\n    outline-color: rgba(0, 124, 130, 0.75);\n  }\n\n  50% {\n    outline-width: 6px;\n    outline-offset: 4px;\n    outline-color: rgba(0, 124, 130, 0);\n  }\n\n  100% {\n    outline-width: 6px;\n    outline-offset: 4px;\n    outline-color: rgba(102, 102, 102, 0);\n  }\n}\n\n.cnButton.selected {\n  animation: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBsZXgtcmVzdWx0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsb0NBQW9DO0VBQ3BDLG1CQUFtQjtFQUNuQixpQ0FBaUM7QUFDbkM7O0FBRUE7O0VBRUUseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLDJDQUEyQztFQUMzQyx1Q0FBdUM7RUFDdkMsOERBQThEO0FBQ2hFOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLDBDQUEwQztFQUMxQywwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRTtJQUNFLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsbUNBQW1DO0VBQ3JDOztFQUVBO0lBQ0Usc0NBQXNDO0VBQ3hDOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixtQ0FBbUM7RUFDckM7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHFDQUFxQztFQUN2QztBQUNGOztBQUVBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJjb21wbGV4LXJlc3VsdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXNwbGF5QnV0dG9uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4udmlldy1idXR0b24ge1xuICBmbG9hdDogdW5zZXQ7XG4gIHdpZHRoOiAyMjVweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogIzU1NTtcbiAgYm9yZGVyOiAxcHggZG90dGVkICMwMDdjODI7XG59XG5cbi52aWV3LWJ1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiAjMDA3YzgyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM0LCAyMzQsIDIzNCk7XG4gIGJvcmRlcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgIzAwN2M4Mjtcbn1cblxuLnNlbGVjdGVkLFxuLnNlbGVjdGVkOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2M4MjtcbiAgY29sb3I6IHdoaXRlO1xuICBvcGFjaXR5OiAxMDAlO1xufVxuXG4ubmV3LXRhZyB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IHgtc21hbGw7XG59XG5cbi5uZXctdGFnLXNlbGVjdGVkIHtcbiAgY29sb3I6IHllbGxvdztcbn1cblxuLmZpbHRlckNvbHVtbiB7XG4gIHdpZHRoOiBjYWxjKDEwMHJlbSAqIDAuMjIpO1xufVxuXG4ubGVmdEFsaWduZWQge1xuICAtLWdsb2JhbC1tYXJnaW46IGNhbGMoKDEwMHZ3IC0gODByZW0pIC8gLTIpO1xuICAtLW1pbi1tYXJnaW4tbGVmdDogY2FsYygtMTAwcmVtICogMC4xNyk7XG4gIG1hcmdpbi1sZWZ0OiBtYXgodmFyKC0tZ2xvYmFsLW1hcmdpbiksIHZhcigtLW1pbi1tYXJnaW4tbGVmdCkpO1xufVxuXG4uY25CdXR0b24ge1xuICBvdXRsaW5lLW9mZnNldDogMDtcbiAgb3V0bGluZTogcmdiYSgwLCAxMjQsIDEzMCwgMC43NSkgc29saWQgMXB4O1xuICBhbmltYXRpb246IGFuaW1hdGVPdXRsaW5lIDRzIGVhc2UgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgYW5pbWF0ZU91dGxpbmUge1xuICAwJSB7XG4gICAgb3V0bGluZS13aWR0aDogMXB4O1xuICAgIG91dGxpbmUtb2Zmc2V0OiAwO1xuICAgIG91dGxpbmUtY29sb3I6IHJnYmEoMCwgMTI0LCAxMzAsIDApO1xuICB9XG5cbiAgMTAlIHtcbiAgICBvdXRsaW5lLWNvbG9yOiByZ2JhKDAsIDEyNCwgMTMwLCAwLjc1KTtcbiAgfVxuXG4gIDUwJSB7XG4gICAgb3V0bGluZS13aWR0aDogNnB4O1xuICAgIG91dGxpbmUtb2Zmc2V0OiA0cHg7XG4gICAgb3V0bGluZS1jb2xvcjogcmdiYSgwLCAxMjQsIDEzMCwgMCk7XG4gIH1cblxuICAxMDAlIHtcbiAgICBvdXRsaW5lLXdpZHRoOiA2cHg7XG4gICAgb3V0bGluZS1vZmZzZXQ6IDRweDtcbiAgICBvdXRsaW5lLWNvbG9yOiByZ2JhKDEwMiwgMTAyLCAxMDIsIDApO1xuICB9XG59XG5cbi5jbkJ1dHRvbi5zZWxlY3RlZCB7XG4gIGFuaW1hdGlvbjogbm9uZTtcbn1cbiJdfQ== */";

      /***/
    })
  }]);
})();
//# sourceMappingURL=src_app_complex_complex-results_complex-results_module_ts-es5.js.map