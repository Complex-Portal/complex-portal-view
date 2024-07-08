(function () {
  "use strict";

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
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
  (self["webpackChunkcomplex_portal_view"] = self["webpackChunkcomplex_portal_view"] || []).push([["default-src_app_complex_complex-results_complex-navigator_complex-navigator_module_ts-src_app-a63446"], {
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
          case 'Saccharomyces cerevisiae':
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
          case 'Gallus gallus (Chicken)':
            return 'icon icon-species icon-chicken';
          case 'Drosophila melanogaster':
          case 'Drosophila melanogaster (Fruit fly); 7227':
          case 'Drosophila melanogaster (Fruit fly)':
            return 'icon icon-species icon-fly';
          case 'Bos taurus':
          case 'Bos taurus (Bovine); 9913':
          case 'Bos taurus (Bovine)':
            return 'icon icon-species icon-cow';
          case 'Oryctolagus cuniculus':
          case 'Oryctolagus cuniculus (Rabbit); 9986':
          case 'Oryctolagus cuniculus (Rabbit)':
            return 'icon icon-species icon-rabbit';
          case 'Ovis aries':
          case 'Ovis aries (Sheep); 9940':
          case 'Ovis aries (Sheep)':
            return 'icon icon-species icon-sheep';
          case 'Xenopus laevis':
          case 'Xenopus laevis (African clawed frog); 8355':
          case 'Xenopus laevis (African clawed frog)':
            return 'icon icon-species icon-frog';
          case 'Canis lupus familiaris':
          case 'Canis familiaris (dog); 9615':
          case 'Canis familiaris (dog)':
            return 'icon icon-species icon-dog';
          case 'Vibrio cholerae serotype O1 (strain ATCC 39315 / El Tor Inaba N16961)':
          case 'Vibrio cholerae; 243277':
            return 'assets/images/EMBL_Species_Vibrio_cholerae.svg';
          case 'Crotalus durissus terrificus':
          case 'Crotalus durissus terrificus; 8732':
            return 'assets/images/EMBL_Species_RattleSnake.svg';
          case 'Sus scrofa':
          case 'Sus scrofa (Pig); 9823':
          case 'Sus scrofa (Pig)':
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
          case 'Arabidopsis thaliana (Mouse-ear cress)':
            return 'icon icon-species icon-brassica';
          case 'Danio rerio':
          case 'Danio rerio (Zebrafish); 7955':
          case 'Danio rerio (Zebrafish)':
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
        if (!!name && name.includes(';')) {
          var end = name.indexOf(';');
          return name.substring(0, end);
        }
        return name;
      }

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
          key: "interactorsSortingChanges",
          value: function interactorsSortingChanges(typeOfSorting) {
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
    /***/99915: (
    /*!**********************************************************************************************************************************!*\
      !*** ./src/app/complex/complex-results/complex-navigator/complex-list-display-buttons/complex-list-display-buttons.component.ts ***!
      \**********************************************************************************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"LIST_VIEW": function LIST_VIEW() {
          return /* binding */_LIST_VIEW;
        },
        /* harmony export */"COMPLEX_NAVIGATOR_VIEW": function COMPLEX_NAVIGATOR_VIEW() {
          return /* binding */_COMPLEX_NAVIGATOR_VIEW;
        },
        /* harmony export */"ComplexListDisplayButtonsComponent": function ComplexListDisplayButtonsComponent() {
          return /* binding */_ComplexListDisplayButtonsComponent;
        }
        /* harmony export */
      });
      /* harmony import */
      var _Users_susiehuget_Documents_GitHub_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_complex_list_display_buttons_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./complex-list-display-buttons.component.html */5869);
      /* harmony import */
      var _complex_list_display_buttons_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./complex-list-display-buttons.component.css */16794);
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/core */2316);
      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      var _LIST_VIEW = 'view_list';
      var _COMPLEX_NAVIGATOR_VIEW = 'view_complex_navigator';
      var _ComplexListDisplayButtonsComponent = /*#__PURE__*/function () {
        function ComplexListDisplayButtonsComponent() {
          _classCallCheck(this, ComplexListDisplayButtonsComponent);
          this.displayTypeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        }
        _createClass(ComplexListDisplayButtonsComponent, [{
          key: "setListView",
          value: function setListView() {
            this.displayType = _LIST_VIEW;
            this.displayTypeChange.emit(this.displayType);
          }
        }, {
          key: "setComplexNavigatorView",
          value: function setComplexNavigatorView() {
            this.displayType = _COMPLEX_NAVIGATOR_VIEW;
            this.displayTypeChange.emit(this.displayType);
          }
        }, {
          key: "isDisplayComplexNavigatorView",
          value: function isDisplayComplexNavigatorView() {
            return this.displayType === _COMPLEX_NAVIGATOR_VIEW;
          }
        }]);
        return ComplexListDisplayButtonsComponent;
      }();
      _ComplexListDisplayButtonsComponent.propDecorators = {
        displayType: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        displayTypeChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }]
      };
      _ComplexListDisplayButtonsComponent = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'cp-complex-list-display-buttons',
        template: _Users_susiehuget_Documents_GitHub_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_complex_list_display_buttons_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_complex_list_display_buttons_component_css__WEBPACK_IMPORTED_MODULE_1__]
      })], _ComplexListDisplayButtonsComponent);

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
        this.onComplexRemovedFromBasket = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
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
        }],
        canAddComplexesToBasket: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        canRemoveComplexesFromBasket: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        onComplexRemovedFromBasket: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }]
      };
      _ComplexNavigatorComponent = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'cp-complex-navigator',
        template: _Users_susiehuget_Documents_GitHub_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_complex_navigator_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_complex_navigator_component_css__WEBPACK_IMPORTED_MODULE_1__]
      })], _ComplexNavigatorComponent);

      /***/
    }),
    /***/60090: (
    /*!***************************************************************************************!*\
      !*** ./src/app/complex/complex-results/complex-navigator/complex-navigator.module.ts ***!
      \***************************************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"ComplexNavigatorModule": function ComplexNavigatorModule() {
          return /* binding */_ComplexNavigatorModule;
        }
        /* harmony export */
      });
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__( /*! @angular/core */2316);
      /* harmony import */
      var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__( /*! @angular/common */54364);
      /* harmony import */
      var ngx_markdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__( /*! ngx-markdown */36731);
      /* harmony import */
      var _complex_navigator_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./complex-navigator.component */76549);
      /* harmony import */
      var _table_structure_table_structure_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./table-structure/table-structure.component */14915);
      /* harmony import */
      var _table_structure_table_header_table_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./table-structure/table-header/table-header.component */40969);
      /* harmony import */
      var _table_structure_table_interactor_column_table_interactor_column_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./table-structure/table-interactor-column/table-interactor-column.component */48774);
      /* harmony import */
      var _table_structure_table_interactor_column_table_interactor_name_table_interactor_name_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./table-structure/table-interactor-column/table-interactor-name/table-interactor-name.component */84768);
      /* harmony import */
      var _table_structure_table_interactor_column_table_interactor_external_link_table_interactor_external_link_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./table-structure/table-interactor-column/table-interactor-external-link/table-interactor-external-link.component */42423);
      /* harmony import */
      var _table_structure_table_interactor_column_table_interactor_stoichiometry_table_interactor_stoichiometry_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./table-structure/table-interactor-column/table-interactor-stoichiometry/table-interactor-stoichiometry.component */50048);
      /* harmony import */
      var _table_structure_table_interactor_column_table_main_interactor_table_main_interactor_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ./table-structure/table-interactor-column/table-main-interactor/table-main-interactor.component */37161);
      /* harmony import */
      var _table_structure_table_interactor_column_table_subcomponent_interactor_table_subcomponent_interactor_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ./table-structure/table-interactor-column/table-subcomponent-interactor/table-subcomponent-interactor.component */68677);
      /* harmony import */
      var _complex_navigator_buttons_complex_navigator_buttons_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ../complex-navigator-buttons/complex-navigator-buttons.component */8507);
      /* harmony import */
      var _shared_loading_indicators_progress_spinner_progress_spinner_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! ../../../shared/loading-indicators/progress-spinner/progress-spinner.module */45103);
      /* harmony import */
      var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__( /*! @angular/router */71258);
      /* harmony import */
      var _complex_list_display_buttons_complex_list_display_buttons_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! ./complex-list-display-buttons/complex-list-display-buttons.component */99915);
      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      var _ComplexNavigatorModule = /*#__PURE__*/_createClass(function ComplexNavigatorModule() {
        _classCallCheck(this, ComplexNavigatorModule);
      });
      _ComplexNavigatorModule = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_12__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule, _angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule, _shared_loading_indicators_progress_spinner_progress_spinner_module__WEBPACK_IMPORTED_MODULE_10__.ProgressSpinnerModule, ngx_markdown__WEBPACK_IMPORTED_MODULE_15__.MarkdownModule],
        exports: [_complex_navigator_component__WEBPACK_IMPORTED_MODULE_0__.ComplexNavigatorComponent, _complex_list_display_buttons_complex_list_display_buttons_component__WEBPACK_IMPORTED_MODULE_11__.ComplexListDisplayButtonsComponent],
        declarations: [_complex_navigator_component__WEBPACK_IMPORTED_MODULE_0__.ComplexNavigatorComponent, _table_structure_table_structure_component__WEBPACK_IMPORTED_MODULE_1__.TableStructureComponent, _table_structure_table_header_table_header_component__WEBPACK_IMPORTED_MODULE_2__.TableHeaderComponent, _table_structure_table_interactor_column_table_interactor_column_component__WEBPACK_IMPORTED_MODULE_3__.TableInteractorColumnComponent, _table_structure_table_interactor_column_table_interactor_name_table_interactor_name_component__WEBPACK_IMPORTED_MODULE_4__.TableInteractorNameComponent, _table_structure_table_interactor_column_table_interactor_external_link_table_interactor_external_link_component__WEBPACK_IMPORTED_MODULE_5__.TableInteractorExternalLinkComponent, _table_structure_table_interactor_column_table_interactor_stoichiometry_table_interactor_stoichiometry_component__WEBPACK_IMPORTED_MODULE_6__.TableInteractorStoichiometryComponent, _table_structure_table_interactor_column_table_main_interactor_table_main_interactor_component__WEBPACK_IMPORTED_MODULE_7__.TableMainInteractorComponent, _table_structure_table_interactor_column_table_subcomponent_interactor_table_subcomponent_interactor_component__WEBPACK_IMPORTED_MODULE_8__.TableSubcomponentInteractorComponent, _complex_navigator_buttons_complex_navigator_buttons_component__WEBPACK_IMPORTED_MODULE_9__.ComplexNavigatorButtonsComponent, _complex_list_display_buttons_complex_list_display_buttons_component__WEBPACK_IMPORTED_MODULE_11__.ComplexListDisplayButtonsComponent]
      })], _ComplexNavigatorModule);

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
      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/core */2316);
      /* harmony import */
      var _complex_portal_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../../../complex-portal-utils */82682);
      /* harmony import */
      var _shared_basket_service_basket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../../../../../shared/basket/service/basket.service */69510);
      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      var _TableHeaderComponent = /*#__PURE__*/function () {
        function TableHeaderComponent(basketService) {
          _classCallCheck(this, TableHeaderComponent);
          this.basketService = basketService;
          this.onComplexRemovedFromBasket = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
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
        }, {
          key: "saveComplex",
          value: function saveComplex(complexName, complexAC, complexOrganism) {
            this.basketService.saveInBasket(complexName, complexAC, complexOrganism);
          }
        }, {
          key: "removeComplex",
          value: function removeComplex(complexAC) {
            var key = this.basketService.getKey(complexAC);
            this.basketService.deleteFromBasket(key);
            this.onComplexRemovedFromBasket.emit(complexAC);
          }
        }, {
          key: "isInBasket",
          value: function isInBasket(complexAC) {
            return this.basketService.isInBasket(complexAC);
          }
        }]);
        return TableHeaderComponent;
      }();
      _TableHeaderComponent.ctorParameters = function () {
        return [{
          type: _shared_basket_service_basket_service__WEBPACK_IMPORTED_MODULE_3__.BasketService
        }];
      };
      _TableHeaderComponent.propDecorators = {
        complexes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
        }],
        interactorsSorting: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
        }],
        canAddComplexesToBasket: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
        }],
        canRemoveComplexesFromBasket: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
        }],
        onComplexRemovedFromBasket: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
        }]
      };
      _TableHeaderComponent = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
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
              this.calculateTimesAppearing();
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
            var _this2 = this;
            this.enrichedInteractors.sort(function (a, b) {
              if (b.interactor.organismName === a.interactor.organismName) {
                return b.timesAppearing - a.timesAppearing;
              } else {
                var organismBTimesAppearing = _this2._timesAppearingByOrganism.get(b.interactor.organismName);
                var organismATimesAppearing = _this2._timesAppearingByOrganism.get(a.interactor.organismName);
                if (organismBTimesAppearing === organismATimesAppearing) {
                  return b.interactor.organismName.localeCompare(a.interactor.organismName);
                } else {
                  return organismBTimesAppearing - organismATimesAppearing;
                }
              }
            });
            this.rangeOfInteractorOrganism();
          }
        }, {
          key: "classifyInteractorsByType",
          value: function classifyInteractorsByType() {
            var _this3 = this;
            this.enrichedInteractors.sort(function (a, b) {
              if (b.interactor.interactorType === a.interactor.interactorType) {
                return b.timesAppearing - a.timesAppearing;
              } else {
                var typeBTimesAppearing = _this3._timesAppearingByType.get(b.interactor.interactorType);
                var typeATimesAppearing = _this3._timesAppearingByType.get(a.interactor.interactorType);
                if (typeBTimesAppearing === typeATimesAppearing) {
                  return b.interactor.interactorType.localeCompare(a.interactor.interactorType);
                } else {
                  return typeBTimesAppearing - typeATimesAppearing;
                }
              }
            });
            this.rangeOfInteractorType();
          }
        }, {
          key: "classifyInteractorsByOccurrence",
          value: function classifyInteractorsByOccurrence() {
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
        }, {
          key: "getExpandedRowClass",
          value: function getExpandedRowClass(i, length) {
            if (i === 0) {
              if (length === 1) {
                return 'singleExpandedRow';
              } else {
                return 'firstExpandedRow';
              }
            } else if (i === length - 1) {
              return 'lastExpandedRow';
            }
            return null;
          }
        }, {
          key: "calculateTimesAppearing",
          value: function calculateTimesAppearing() {
            // Initialise times appearing by type or organism
            this._timesAppearingByType = new Map();
            this._timesAppearingByOrganism = new Map();
            var _iterator4 = _createForOfIteratorHelper(this.enrichedInteractors),
              _step4;
            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var oneInteractor = _step4.value;
                // Initialise times appearing for each interactor
                oneInteractor.timesAppearing = 0;
                var _iterator5 = _createForOfIteratorHelper(this.complexes),
                  _step5;
                try {
                  for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                    var complex = _step5.value;
                    var match = (0, _complex_navigator_utils__WEBPACK_IMPORTED_MODULE_3__.findInteractorInComplex)(complex, oneInteractor.interactor.identifier, this.enrichedInteractors);
                    if (!!match) {
                      // Update times appearing for the interactor
                      oneInteractor.timesAppearing += 1;
                      // Update times appearing for the interactor type
                      this._timesAppearingByType.set(oneInteractor.interactor.interactorType, (this._timesAppearingByType.get(oneInteractor.interactor.interactorType) || 0) + 1);
                      // Update times appearing for the interactor organism
                      this._timesAppearingByOrganism.set(oneInteractor.interactor.organismName, (this._timesAppearingByOrganism.get(oneInteractor.interactor.organismName) || 0) + 1);
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
            this.topLineClass = this.displayTopLineClass(this.complex, this.i);
            this.bottomLineClass = this.displayBottomLineClass(this.complex, this.i);
          }
        }, {
          key: "interactor",
          get: function get() {
            return this.enrichedInteractors[this.i];
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
            var _this4 = this;
            // The line starts at this interactor or on any of its subcomponents
            if (complex.startInteractorIndex != null && complex.startInteractorIndex === interactorIndex) {
              if (complex.startSubComponentIndex != null && complex.startSubComponentIndex === subComponentIndex) {
                // If the subcomplex is a component of the complex, the line starts in the cell of the interactor, meaning it cannot
                // start on any subcomponent.
                // Otherwise, it starts on the subcomponent with the index subComponentIndex
                return !complex.complex.interactors.some(function (component) {
                  return _this4.enrichedInteractors[interactorIndex].interactor.identifier === component.identifier;
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
          this.onComplexRemovedFromBasket = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          this.sortedComplexes = [];
        }
        _createClass(TableStructureComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this.sortedComplexes = this.classifyComplexesSimilaritiesV2(this.complexSearch.elements);
          }
        }, {
          key: "getComponentAsComplex",
          value: function getComponentAsComplex(component) {
            return this.complexSearch.elements.find(function (interactor) {
              return interactor.complexAC === component.identifier;
            });
          }
        }, {
          key: "getAllComponents",
          value: function getAllComponents(complex) {
            var components = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
            var _iterator6 = _createForOfIteratorHelper(complex.interactors),
              _step6;
            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var component = _step6.value;
                if (component.interactorType === 'stable complex') {
                  var subComplex = this.getComponentAsComplex(component);
                  if (subComplex) {
                    components.push.apply(components, _toConsumableArray(this.getAllComponents(subComplex)));
                  } else {
                    components.push(component);
                  }
                } else {
                  components.push(component);
                }
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }
            return components;
          }
        }, {
          key: "calculateSimilarity",
          value: function calculateSimilarity(complex1, complex2) {
            var _this5 = this;
            if (complex1 === complex2) {
              return new Set(this.getAllComponents(complex1)).size;
            }
            var _map = [complex1, complex2].map(function (complex) {
                return new Set(_this5.getAllComponents(complex).map(function (c) {
                  return c.identifier;
                }));
              }),
              _map2 = _slicedToArray(_map, 2),
              components1 = _map2[0],
              components2 = _map2[1];
            return _toConsumableArray(components1.values()).reduce(function (s, c1) {
              return components2.has(c1) ? s + 1 : s;
            }, 0);
          }
        }, {
          key: "classifyComplexesSimilaritiesV2",
          value: function classifyComplexesSimilaritiesV2(complexesList) {
            var comparedComplexes = [];
            var _iterator7 = _createForOfIteratorHelper(complexesList),
              _step7;
            try {
              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                var complex = _step7.value;
                var _iterator8 = _createForOfIteratorHelper(complexesList),
                  _step8;
                try {
                  for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                    var comparedComplex = _step8.value;
                    // for unique comparison
                    if (complex.complexAC >= comparedComplex.complexAC) {
                      comparedComplexes.push([complex, comparedComplex, this.calculateSimilarity(complex, comparedComplex)]);
                    }
                  }
                } catch (err) {
                  _iterator8.e(err);
                } finally {
                  _iterator8.f();
                }
              }
            } catch (err) {
              _iterator7.e(err);
            } finally {
              _iterator7.f();
            }
            comparedComplexes.sort(function (a, b) {
              return b[2] - a[2];
            }); // sorting by similarityScore
            var complexesOrderedSet = this.uniqueComplexesListOrderedBySimilarity(comparedComplexes);
            // to be used in the table as a 1D array
            return Array.from(complexesOrderedSet);
          }
        }, {
          key: "uniqueComplexesListOrderedBySimilarity",
          value: function uniqueComplexesListOrderedBySimilarity(complexesListSimilarities) {
            var complexesOrderedSet = new Set();
            for (var i = 0; i < complexesListSimilarities.length; i++) {
              var _complexesListSimilar = _slicedToArray(complexesListSimilarities[i], 3),
                complex1 = _complexesListSimilar[0],
                complex2 = _complexesListSimilar[1],
                similarityScore = _complexesListSimilar[2];
              if (similarityScore !== 0) {
                complexesOrderedSet.add(complex1);
                complexesOrderedSet.add(complex2);
                for (var j = i + 1; j < complexesListSimilarities.length; j++) {
                  var _complexesListSimilar2 = _slicedToArray(complexesListSimilarities[j], 3),
                    complex3 = _complexesListSimilar2[0],
                    complex4 = _complexesListSimilar2[1],
                    similarityScore2nd = _complexesListSimilar2[2];
                  if (complex1 === complex3 && similarityScore2nd !== 0) {
                    complexesOrderedSet.add(complex4);
                  }
                }
                if (complexesOrderedSet.size === this.complexSearch.elements.length) {
                  // All complexes have been added, we can return and stop the loops
                  return complexesOrderedSet;
                }
              }
              if (complexesOrderedSet.size === this.complexSearch.elements.length) {
                // All complexes have been added, we can return and stop the loops
                return complexesOrderedSet;
              }
            }
            return complexesOrderedSet;
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
        }],
        canAddComplexesToBasket: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        canRemoveComplexesFromBasket: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        onComplexRemovedFromBasket: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }]
      };
      _TableStructureComponent = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'cp-table-structure',
        template: _Users_susiehuget_Documents_GitHub_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_table_structure_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_table_structure_component_css__WEBPACK_IMPORTED_MODULE_1__]
      })], _TableStructureComponent);

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
    /***/53226: (
    /*!***************************************************************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/complex/complex-results/complex-navigator-buttons/complex-navigator-buttons.component.html ***!
      \***************************************************************************************************************************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */
      __webpack_exports__["default"] = "<div class=\"filters\">\n  <div class=\"sortingInteractors\">\n    <input type=\"submit\" name=\"classificationButton\" value=\"Sort components\" class=\"button\">\n    <div class=\"typeOfSorting\">\n      <input type=\"button\" name=\"occurrenceClassification\" value=\"Occurrence\" class=\"button\"\n             (click)=\"interactorsSortingChanges('Occurrence')\">\n      <input type=\"button\" name=\"typeClassification\" value=\"Type\" class=\"button\"\n             (click)=\"interactorsSortingChanges('Type')\">\n      <input type=\"button\" name=\"organismClassification\" value=\"Organism\" class=\"button\"\n             (click)=\"interactorsSortingChanges('Organism')\">\n      <!--      <input type=\"submit\" name=\"geneClassification\" value=\"Orthology (Not available yet)\" class=\"button\"-->\n      <!--             (click)=\"InteractorsSortingChanges('Orthology')\">-->\n    </div>\n  </div>\n\n  <div class=\"dropdown\">\n    <input type=\"submit\" name=\"classificationButton\" value=\"Display Options\" class=\"button\">\n    <ul class=\"displaySize\">\n      <li>\n        <label>\n          <input type=\"radio\" name=\"displayType\" value=\"Compact\" class=\"checkbox compact\"\n                 (click)=\"setDisplayType('compact')\" [checked]=\"typeOfDisplay === 'compact'\">\n          Compact display\n        </label>\n      </li>\n      <li class=\"detailedDisplay\">\n        <label>\n          <input type=\"radio\" name=\"displayType\" value=\"Detailed\" class=\"checkbox detailed\"\n                 (click)=\"setDisplayType('detailed')\" [checked]=\"typeOfDisplay === 'detailed'\">\n          Detailed display\n        </label>\n        <ul class=\"detailedDisplayOptions\">\n          <li>\n            <input type=\"checkbox\" name=\"organism\" value=\"organism\" class=\"checkbox\" [checked]=\"organismIconDisplay\"\n                   (change)=\"DisplayingOrganism()\">\n            Organism\n          </li>\n          <li>\n            <input type=\"checkbox\" name=\"type\" value=\"type\" class=\"checkbox\" [checked]=\"interactorTypeDisplay\"\n                   (change)=\"DisplayingType()\">\n            Type\n          </li>\n          <li>\n            <input type=\"checkbox\" name=\"id\" value=\"id\" class=\"checkbox\" [checked]=\"IDDisplay\"\n                   (change)=\"DisplayingID()\">\n            Interactor ID\n          </li>\n        </ul>\n      </li>\n    </ul>\n  </div>\n</div>\n";

      /***/
    }),
    /***/5869: (
    /*!***************************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/complex/complex-results/complex-navigator/complex-list-display-buttons/complex-list-display-buttons.component.html ***!
      \***************************************************************************************************************************************************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */
      __webpack_exports__["default"] = "<div class=\"displayButton columns medium-8\">\n  <button type=\"submit\" name=\"submit\" class=\"button view-button\"\n          (click)=\"setListView()\" [ngClass]=\"{'selected': !isDisplayComplexNavigatorView()}\">\n    View list\n  </button>\n  <button type=\"submit\" name=\"submit\" class=\"button view-button cnButton\"\n          (click)=\"setComplexNavigatorView()\" [ngClass]=\"{'selected': isDisplayComplexNavigatorView()}\">\n    View Complex Navigator\n    <span class=\"new-tag\" [ngClass]=\"{'new-tag-selected': displayType === isDisplayComplexNavigatorView()}\">NEW!</span>\n  </button>\n</div>\n";

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
      __webpack_exports__["default"] = "<div class=\"ComplexNavigator\">\n  <div class=\"Buttons\" [ngClass]=\"complexSearch.totalNumberOfResults <=6 ? 'smallCNButtons' : ''\">\n    <cp-complex-navigator-buttons\n      [(interactorsSorting)]=\"interactorsSorting\"\n      [(organismIconDisplay)]=\"organismIconDisplay\"\n      [(interactorTypeDisplay)]=\"interactorTypeDisplay\"\n      [(IDDisplay)]=\"IDDisplay\">\n    </cp-complex-navigator-buttons>\n  </div>\n  <cp-table-structure [complexSearch]=\"complexSearch\"\n                      [interactors]=\"interactors\"\n                      [interactorsSorting]=\"interactorsSorting\"\n                      [organismIconDisplay]=\"organismIconDisplay\"\n                      [interactorTypeDisplay]=\"interactorTypeDisplay\"\n                      [IDDisplay]=\"IDDisplay\"\n                      [canAddComplexesToBasket]=\"canAddComplexesToBasket\"\n                      [canRemoveComplexesFromBasket]=\"canRemoveComplexesFromBasket\"\n                      (onComplexRemovedFromBasket)=\"onComplexRemovedFromBasket.emit($event)\">\n  </cp-table-structure>\n</div>\n\n";

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
      __webpack_exports__["default"] = "<div class=\"Complex-navigator\">\n  <table class=\"table CN-table\">\n    <!-- When table is not overflowing -->\n    <thead class=\"tableHead\" *ngIf=\"complexes.length<=6\">\n    <tr>\n      <th *ngIf=\"isInteractorSortingSet()\" class=\"spaceHolderSorting\"></th>\n      <th class=\"interactorsHeader horizontal\">\n        Components\n      </th>\n      <th class=\"horizontal\" *ngFor=\"let complex of complexes\">\n        <div class=\"horizontal-label\">\n          <a [routerLink]=\"['/complex', complex.complexAC]\"\n             title=\"{{complex.complexAC}}\"\n             target=\"_blank\">\n            <div>\n              <span title=\"{{ complex.complexName }} - {{ complex.complexAC}}\">\n                <div class=\"line\"></div>\n                <i class=\"{{iconOrganism(complex.organismName)}}\"></i>\n                <i class=\"icon icon-generic small\" data-icon=\"x\"></i>\n                {{ complex.complexName }}\n              </span>\n            </div>\n          </a>\n          <a class=\"button basketButtonActive\"\n             [ngClass]=\"{'hidden':isInBasket(complex.complexAC)}\"\n             (click)=\"saveComplex(complex.complexName,complex.complexAC,complex.organismName)\"><span\n            class=\"icon icon-generic medium \"\n            data-icon=\"b\"\n            title=\"Add complex to basket\"></span></a>\n          <a class=\"button\"\n             *ngIf=\"isInBasket(complex.complexAC)\"\n             [ngClass]=\"{'hidden':!isInBasket(complex.complexAC)}\"\n             (click)=\"removeComplex(complex.complexAC)\"><span class=\"icon icon-functional medium \"\n                                                              data-icon=\"d\"\n                                                              title=\"Remove complex from basket\"></span></a>\n        </div>\n      </th>\n    </tr>\n    </thead>\n    <!-- When table is overflowing -->\n    <thead class=\"tableHeadOverflow\" *ngIf=\"complexes.length>6\"\n           [ngClass]=\"isInteractorSortingSet() ? 'tableHeadOverflowWithSorting' : 'tableHeadOverflow'\">\n    <tr [style.--cols]=\"complexes.length\"\n        [style.--intHeader]=\"isInteractorSortingSet() ? '156px':''\"\n        [style.--sizeSpaceHolder]=\"complexes.length>15 ? '185px':''\">\n      <th class=\"spaceHolderHeaderOverflow\"\n          [style]=\"isInteractorSortingSet() ? 'min-width: 156px; max-width: 156px;':''\">\n      </th>\n      <th class=\"rotate\" *ngFor=\"let complex of complexes\"\n          title=\"{{ complex.complexName }} - {{ complex.complexAC}}\"\n          [style.--cols]=\"complexes.length\">\n        <a [routerLink]=\"['/complex', complex.complexAC]\"\n           title=\"{{ complex.complexName }} - {{ complex.complexAC}}\"\n           target=\"_blank\">\n          <div>\n            <span>\n              <div class=\"tilted-label\" title=\"{{ complex.complexName }} - {{ complex.complexAC}}\">\n                <i class=\"icon icon-generic small\" data-icon=\"x\"\n                   title=\"{{ complex.complexName }} - {{ complex.complexAC}}\"></i>\n                {{ complex.complexName }}\n              </div>\n            </span>\n          </div>\n        </a>\n      </th>\n      <div class=\"spaceHolder\" [style]=\"complexes.length<15 ? 'max-width: inherit;min-width: inherit':''\"></div>\n    </tr>\n    <!-- icons row -->\n    <tr [style.--cols]=\"complexes.length\"\n        [style.--intHeader]=\"isInteractorSortingSet() ? '156px':''\"\n        [style.--sizeSpaceHolder]=\"complexes.length>15 ? '185px':''\">\n      <th class=\"interactorsHeader overflow\"\n          [style]=\"isInteractorSortingSet() ? 'min-width: 156px; max-width: 156px;':''\">\n        Components\n      </th>\n      <ng-container *ngFor=\" let complex of complexes;\">\n        <th class=\"iconOrganism\">\n          <div>\n            <a class=\"button basketButtonActive\"\n               [ngClass]=\"{'hidden':isInBasket(complex.complexAC)}\"\n               (click)=\"saveComplex(complex.complexName,complex.complexAC,complex.organismName)\"><span\n              class=\"icon icon-generic medium \"\n              data-icon=\"b\"\n              title=\"Add complex to basket\"></span></a>\n            <a class=\"button\"\n               *ngIf=\"isInBasket(complex.complexAC)\"\n               [ngClass]=\"{'hidden':!isInBasket(complex.complexAC)}\"\n               (click)=\"removeComplex(complex.complexAC)\"><span class=\"icon icon-functional medium \"\n                                                                data-icon=\"d\" title=\"Remove complex from basket\"></span></a>\n          </div>\n          <div>\n            <i class=\"{{iconOrganism(complex.organismName)}}\" title=\"{{complex.organismName}}\"></i>\n          </div>\n        </th>\n      </ng-container>\n      <div class=\"spaceHolder\" [style]=\"complexes.length<15 ? 'max-width: inherit;min-width: inherit':''\"></div>\n    </tr>\n    </thead>\n  </table>\n</div>\n\n\n";

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
      __webpack_exports__["default"] = "<div class=\"Complex-navigator\">\n  <table class=\"interactors-table\"\n         [style.--cols]=\"complexes.length\">\n    <ng-container *ngFor=\" let interactor of enrichedInteractors; let i=index\">\n      <tr *ngIf=\"!interactor.hidden\">\n        <ng-container *ngFor=\"let oneType of ranges\" class=\"interactorsOrdering\">\n          <td *ngIf=\"oneType[2]===i\" [attr.rowspan]=\"oneType[1]\" class=\"interactorSeparation\"\n              title=\"{{oneType[0]}}\">\n            <div class=\"interactorNameContainer\" [style.--rowspanSize]=\"oneType[1]\">\n              {{ oneType[0] }}\n            </div>\n          </td>\n        </ng-container>\n        <td class=\"interactorsColumn\"\n            [ngClass]=\"complexes.length<=6 ? 'horizontalHeader' : 'interactorsColumnFixedWidth'\"\n            [style]=\"ranges.length!=0 ? 'left:3ch':''\">\n          <cp-table-interactor-name\n            [interactorName]=\"interactor.interactor.name\"\n            [interactorType]=\"interactor.interactor.interactorType\"\n            [interactorId]=\"interactor.interactor.identifier\"\n            [interactorOrganism]=\"interactor.interactor.organismName\"\n            [identifierLink]=\"interactor.interactor.identifierLink\"\n            [organismIconDisplay]=\"organismIconDisplay\"\n            [interactorTypeDisplay]=\"interactorTypeDisplay\"\n            [IDDisplay]=\"IDDisplay\"\n          ></cp-table-interactor-name>\n          <!-- Icon for the expandable -->\n          <div class=\"container\" *ngIf=\"interactor.isSubComplex\">\n            <a title=\"{{ interactor.interactor.name }} components\" (click)=\"toggleSubcomplexExpandable(i)\">\n              Components\n              <i class=\"icon icon-common\" data-icon=\"&#xf078;\"\n                 style=\"font-size:small;\n                \"></i>\n            </a>\n          </div>\n        </td>\n        <!-- Interactors' stoichiometry -->\n        <ng-container *ngFor=\"let complex of enrichedComplexes\">\n          <td class=\"intStoich\" [ngClass]=\"{'intStoichFixedWidth': complexes.length > 6}\">\n            <cp-table-main-interactor\n              [complex]=\"complex\"\n              [i]=\"i\"\n              [enrichedInteractors]=\"enrichedInteractors\"\n            ></cp-table-main-interactor>\n          </td>\n        </ng-container>\n        <div *ngIf=\"complexes.length>6\"\n             [ngClass]=\"isInteractorSortingSet() ? 'spaceHolderWithSorting' : 'spaceHolder'\"></div>\n      </tr>\n      <!-- Expandable menu for subcomplexes -->\n      <ng-container *ngIf=\"interactor.expanded\">\n        <ng-container *ngIf=\"!!interactor.subComponents\">\n          <tr *ngFor=\"let el of interactor.subComponents; let j=index\"\n              class=\"expandedRows\"\n              [ngClass]=\"getExpandedRowClass(j, interactor.subComponents.length)\">\n            <td [attr.rowspan]=\"interactor.subComponents.length\" class=\"interactorSeparation\"\n                title=\"{{interactor.interactor.name}} components\"\n                *ngIf=\"j === 0 && (interactorsSorting === 'Type' || interactorsSorting === 'Organism')\">\n              <div class=\"interactorSeparationName\"\n                   [style.--rowspanSize]=\"interactor.subComponents.length\"> {{ interactor.interactor.name }} components\n              </div>\n            </td>\n            <td class=\"subComponentColumn\"\n                [ngClass]=\"complexes.length<=6 ? 'horizontalHeader' : 'interactorsColumnFixedWidth'\"\n                [style]=\"ranges.length!=0 ? 'left:3ch':''\">\n              <div>\n                <cp-table-interactor-name\n                  [interactorName]=\"el.name\"\n                  [interactorType]=\"el.interactorType\"\n                  [interactorId]=\"el.identifier\"\n                  [interactorOrganism]=\"interactor.interactor.organismName\"\n                  [identifierLink]=\"el.identifierLink\"\n                  [organismIconDisplay]=\"organismIconDisplay\"\n                  [interactorTypeDisplay]=\"interactorTypeDisplay\"\n                  [IDDisplay]=\"IDDisplay\"\n                ></cp-table-interactor-name>\n              </div>\n            </td>\n            <ng-container *ngFor=\"let complex of enrichedComplexes\">\n              <td class=\"intStoich\" [ngClass]=\"{'intStoichFixedWidth': complexes.length > 6}\">\n                <cp-table-subcomponent-interactor\n                  [complex]=\"complex\"\n                  [i]=\"i\"\n                  [j]=\"j\"\n                  [enrichedInteractors]=\"enrichedInteractors\"\n                ></cp-table-subcomponent-interactor>\n              </td>\n            </ng-container>\n            <div class=\"spaceHolder\" *ngIf=\"enrichedComplexes.length > 6\"></div>\n          </tr>\n        </ng-container>\n      </ng-container>\n    </ng-container>\n  </table>\n</div>\n";

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
      __webpack_exports__["default"] = "<div class=\"externalLinkContainer\" title=\"More information about {{interactorId}}\">\n  <a *ngIf=\"externalLinkVisible\" href=\"{{identifierLink}}\" target=\"_blank\" class=\"externalLinkContainer\">\n    {{ interactorId }}\n    <i class=\"icon icon-generic small\" data-icon=\"x\" title=\"More information about {{ interactorId }}\"></i>\n  </a>\n</div>\n";

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
      __webpack_exports__["default"] = "<div class=\"container\">\n  <div class=\"nameAndIcons\" [ngClass]=\"{inlineDisplay: interactorType==='stable complex'}\">\n    <i *ngIf=\"organismIconDisplay\"\n       class=\"{{interactorOrganismIcon}}\"\n       title=\"{{interactorOrganism}}\"></i>\n\n    <i *ngIf=\"interactorTypeDisplay\"\n       class=\"{{interactorTypeIcon}}\"\n       title=\"{{interactorType}}\"></i>\n\n    <div class=\"name\" title=\"{{interactorId}}\" *ngIf=\"IDDisplay\"> {{ interactorName }}\n    </div>\n    <a *ngIf=\"IDDisplay\"\n       [routerLink]=\"['/complex/search']\"\n       [queryParams]=\"{query: interactorId, page: 1}\"\n       target=\"_blank\">\n      <i class=\"icon icon-functional small\" data-icon=\"1\"\n         title=\"More complexes containing {{interactorName}}\"></i>\n    </a>\n\n    <div class=\"nameCompact\" *ngIf=\"!IDDisplay\">\n      <div class=\"name\" title=\"More information about {{interactorName}}\" *ngIf=\"!IDDisplay\">\n        <a *ngIf=\"!!identifierLink\" href=\"{{identifierLink}}\" target=\"_blank\" class=\"externalLinkContainer\">\n          {{ interactorName }}\n        </a>\n      </div>\n      <a [routerLink]=\"['/complex/search']\"\n         [queryParams]=\"{query: interactorId, page: 1}\"\n         target=\"_blank\">\n        <i class=\"icon icon-functional small\" data-icon=\"1\"\n           title=\"More complexes containing {{interactorName}}\"></i>\n      </a>\n    </div>\n  </div>\n  <cp-table-interactor-external-link\n    *ngIf=\"IDDisplay\"\n    [interactorId]=\"interactorId\"\n    [identifierLink]=\"identifierLink\"\n    [interactorType]=\"interactorType\"\n    [isMainInteractor]=\"isMainInteractor\"\n    [IDDisplay]=\"IDDisplay\"\n    (externalLinkVisible)=\"externalLinkVisibleHandler($event)\">\n  </cp-table-interactor-external-link>\n</div>\n";

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
      __webpack_exports__["default"] = "<div class=\"complexNavigatorTable\">\n  <div class=\"header\"\n       (scroll)=\"body.scrollLeft = header.scrollLeft\" #header>\n\n    <cp-table-header [complexes]=\"sortedComplexes\"\n                     [interactorsSorting]=\"interactorsSorting\"\n                     [canAddComplexesToBasket]=\"canAddComplexesToBasket\"\n                     [canRemoveComplexesFromBasket]=\"canRemoveComplexesFromBasket\"\n                     (onComplexRemovedFromBasket)=\"onComplexRemovedFromBasket.emit($event)\">\n    </cp-table-header>\n  </div>\n  <div class=\"interactors\"\n       (scroll)=\"header.scrollLeft = body.scrollLeft\" #body>\n    <cp-table-interactor-column\n      [complexes]=\"sortedComplexes\"\n      [interactors]=\"interactors\"\n      [interactorsSorting]=\"interactorsSorting\"\n      [organismIconDisplay]=\"organismIconDisplay\"\n      [interactorTypeDisplay]=\"interactorTypeDisplay\"\n      [IDDisplay]=\"IDDisplay\">\n    </cp-table-interactor-column>\n  </div>\n  <div class=\"spaceHolder\"></div>\n</div>\n\n";

      /***/
    }),
    /***/1604: (
    /*!***********************************************************************************************************!*\
      !*** ./src/app/complex/complex-results/complex-navigator-buttons/complex-navigator-buttons.component.css ***!
      \***********************************************************************************************************/
    /***/
    function _(module) {
      module.exports = ".typeOfSorting {\n  display: none;\n}\n\n.sortingInteractors:hover .typeOfSorting {\n  display: flex;\n  margin-top: -15px;\n  flex-direction: row;\n  position: absolute;\n  z-index: 5;\n}\n\n.typeOfSorting .button {\n  border-right: 1px solid white;\n  font-size: 14px;\n}\n\n.filters {\n  /*width: 120.5%;*/\n\n  display: flex;\n  justify-content: center;\n  grid-gap: 10px;\n  height: 67px;\n  z-index: 5;\n  text-align: center;\n}\n\n.displaySize {\n  display: none;\n}\n\n.detailedDisplayOptions {\n  display: none;\n}\n\nlabel {\n  color: white;\n}\n\n.dropdown:hover .displaySize {\n  display: flex;\n  list-style: none;\n  width: 300px;\n  background-color: #007c82;\n  color: white;\n  margin-top: -15px;\n  flex-direction: row;\n  position: absolute;\n  height: 40px;\n  align-content: center;\n  z-index: 5;\n}\n\n.dropdown:hover .displaySize li {\n  width: 200px;\n  background-color: #007c82;\n  margin-left: -21px;\n  text-align: left;\n  padding-left: 6px;\n  z-index: 5;\n}\n\nli {\n  text-align: center;\n  align-items: center;\n  font-size: 14px;\n  border-left: 1px solid white;\n  padding-top: 10px;\n  max-width: 171px;\n}\n\n.detailedDisplay:hover .detailedDisplayOptions {\n  display: flex;\n  list-style: none;\n  align-content: baseline;\n  flex-direction: column;\n  position: absolute;\n  z-index: 5;\n  margin-left: 14px;\n}\n\n.detailedDisplayOptions li {\n  text-align: left;\n  z-index: 5;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBsZXgtbmF2aWdhdG9yLWJ1dHRvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjs7RUFFakIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsWUFBWTtFQUNaLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZiw0QkFBNEI7RUFDNUIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1oiLCJmaWxlIjoiY29tcGxleC1uYXZpZ2F0b3ItYnV0dG9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnR5cGVPZlNvcnRpbmcge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc29ydGluZ0ludGVyYWN0b3JzOmhvdmVyIC50eXBlT2ZTb3J0aW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXRvcDogLTE1cHg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogNTtcbn1cblxuLnR5cGVPZlNvcnRpbmcgLmJ1dHRvbiB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHdoaXRlO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5maWx0ZXJzIHtcbiAgLyp3aWR0aDogMTIwLjUlOyovXG5cbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdyaWQtZ2FwOiAxMHB4O1xuICBoZWlnaHQ6IDY3cHg7XG4gIHotaW5kZXg6IDU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmRpc3BsYXlTaXplIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmRldGFpbGVkRGlzcGxheU9wdGlvbnMge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5sYWJlbCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmRyb3Bkb3duOmhvdmVyIC5kaXNwbGF5U2l6ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHdpZHRoOiAzMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2M4MjtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiAtMTVweDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgei1pbmRleDogNTtcbn1cblxuLmRyb3Bkb3duOmhvdmVyIC5kaXNwbGF5U2l6ZSBsaSB7XG4gIHdpZHRoOiAyMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2M4MjtcbiAgbWFyZ2luLWxlZnQ6IC0yMXB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLWxlZnQ6IDZweDtcbiAgei1pbmRleDogNTtcbn1cblxubGkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB3aGl0ZTtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIG1heC13aWR0aDogMTcxcHg7XG59XG5cbi5kZXRhaWxlZERpc3BsYXk6aG92ZXIgLmRldGFpbGVkRGlzcGxheU9wdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBhbGlnbi1jb250ZW50OiBiYXNlbGluZTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA1O1xuICBtYXJnaW4tbGVmdDogMTRweDtcbn1cblxuLmRldGFpbGVkRGlzcGxheU9wdGlvbnMgbGkge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB6LWluZGV4OiA1O1xufVxuIl19 */";

      /***/
    }),
    /***/16794: (
    /*!***********************************************************************************************************************************!*\
      !*** ./src/app/complex/complex-results/complex-navigator/complex-list-display-buttons/complex-list-display-buttons.component.css ***!
      \***********************************************************************************************************************************/
    /***/
    function _(module) {
      module.exports = ".displayButton {\n  text-align: center;\n  width: 100%;\n}\n\n.view-button {\n  width: 225px;\n  margin-right: 5px;\n  background-color: white;\n  color: #555;\n  border: 1px dotted #007c82;\n  float: unset;\n}\n\n.view-button:hover {\n  color: #007c82;\n  background-color: rgb(234, 234, 234);\n  border: transparent;\n  border-bottom: 1px dotted #007c82;\n}\n\n.selected,\n.selected:hover {\n  background-color: #007c82;\n  color: white;\n}\n\n.new-tag {\n  color: red;\n  font-weight: bold;\n  font-size: x-small;\n}\n\n.new-tag-selected {\n  color: yellow;\n}\n\n.cnButton {\n  outline-offset: 0;\n  outline: rgba(0, 124, 130, 0.75) solid 1px;\n  animation: animateOutline 4s ease infinite;\n}\n\n.cnButton.selected {\n  animation: none;\n}\n\n@keyframes animateOutline {\n  0%,\n  50%,\n  100% {\n    outline-width: 6px;\n    outline-offset: 4px;\n    outline-color: rgba(0, 124, 130, 0);\n  }\n  10% {\n    outline-color: rgba(0, 124, 130, 0.75);\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBsZXgtbGlzdC1kaXNwbGF5LWJ1dHRvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsMEJBQTBCO0VBQzFCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxvQ0FBb0M7RUFDcEMsbUJBQW1CO0VBQ25CLGlDQUFpQztBQUNuQzs7QUFFQTs7RUFFRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsMENBQTBDO0VBQzFDLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRTs7O0lBR0Usa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixtQ0FBbUM7RUFDckM7RUFDQTtJQUNFLHNDQUFzQztFQUN4QztBQUNGIiwiZmlsZSI6ImNvbXBsZXgtbGlzdC1kaXNwbGF5LWJ1dHRvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXNwbGF5QnV0dG9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnZpZXctYnV0dG9uIHtcbiAgd2lkdGg6IDIyNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiAjNTU1O1xuICBib3JkZXI6IDFweCBkb3R0ZWQgIzAwN2M4MjtcbiAgZmxvYXQ6IHVuc2V0O1xufVxuXG4udmlldy1idXR0b246aG92ZXIge1xuICBjb2xvcjogIzAwN2M4MjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNCwgMjM0LCAyMzQpO1xuICBib3JkZXI6IHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkICMwMDdjODI7XG59XG5cbi5zZWxlY3RlZCxcbi5zZWxlY3RlZDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdjODI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm5ldy10YWcge1xuICBjb2xvcjogcmVkO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiB4LXNtYWxsO1xufVxuXG4ubmV3LXRhZy1zZWxlY3RlZCB7XG4gIGNvbG9yOiB5ZWxsb3c7XG59XG5cbi5jbkJ1dHRvbiB7XG4gIG91dGxpbmUtb2Zmc2V0OiAwO1xuICBvdXRsaW5lOiByZ2JhKDAsIDEyNCwgMTMwLCAwLjc1KSBzb2xpZCAxcHg7XG4gIGFuaW1hdGlvbjogYW5pbWF0ZU91dGxpbmUgNHMgZWFzZSBpbmZpbml0ZTtcbn1cblxuLmNuQnV0dG9uLnNlbGVjdGVkIHtcbiAgYW5pbWF0aW9uOiBub25lO1xufVxuXG5Aa2V5ZnJhbWVzIGFuaW1hdGVPdXRsaW5lIHtcbiAgMCUsXG4gIDUwJSxcbiAgMTAwJSB7XG4gICAgb3V0bGluZS13aWR0aDogNnB4O1xuICAgIG91dGxpbmUtb2Zmc2V0OiA0cHg7XG4gICAgb3V0bGluZS1jb2xvcjogcmdiYSgwLCAxMjQsIDEzMCwgMCk7XG4gIH1cbiAgMTAlIHtcbiAgICBvdXRsaW5lLWNvbG9yOiByZ2JhKDAsIDEyNCwgMTMwLCAwLjc1KTtcbiAgfVxufVxuIl19 */";

      /***/
    }),
    /***/14332: (
    /*!*******************************************************************************************!*\
      !*** ./src/app/complex/complex-results/complex-navigator/complex-navigator.component.css ***!
      \*******************************************************************************************/
    /***/
    function _(module) {
      module.exports = "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wbGV4LW5hdmlnYXRvci5jb21wb25lbnQuY3NzIn0= */";

      /***/
    }),
    /***/32149: (
    /*!*******************************************************************************************************************!*\
      !*** ./src/app/complex/complex-results/complex-navigator/table-structure/table-header/table-header.component.css ***!
      \*******************************************************************************************************************/
    /***/
    function _(module) {
      module.exports = ".CN-table {\n  transform: rotateX(180deg); /* rotate the header's content to make it it the right sense (when removes, it is upside down) */\n}\n\nthead {\n  border: 0;\n  background-color: white;\n  border-right: 0 solid white;\n  overflow: scroll;\n\n}\n\n.CN-table {\n  -webkit-clip-path: fill-box;\n          clip-path: fill-box;\n  overflow: scroll;\n}\n\n.spaceHolderSorting {\n  width: 3ch;\n  border-bottom: 3px solid #007c82;\n}\n\n/* Rotated complexes names */\n\n.spaceHolderHeaderOverflow {\n  min-width: 130px;\n  max-width: 130px;\n  position: sticky;\n  left: 0;\n  z-index: 4;\n  color: #007c82;\n  background-color: white;\n  padding-top: 173px;\n  text-align: right;\n}\n\n.iconOrganism {\n  position: sticky;\n  text-align: center;\n  background-color: #007c82;\n  color: white;\n  border-left: 1px solid white;\n  font-size: medium;\n  height: 60px;\n}\n\n.tilted-label {\n  text-overflow: ellipsis;\n  width: 28ch;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.CN-table .tableHeadOverflow tr {\n  --cols: 1;\n  --intHeader: 130px;\n  --parentWidth: 100%;\n  --sizeSpaceHolder: calc(var(--parentWidth) - 70px * var(--cols) - var(--intHeader));\n  display: grid;\n  grid-template-columns: var(--intHeader) repeat(auto-fit, 70px);\n  width: calc(var(--intHeader) + 70px * var(--cols) + var(--sizeSpaceHolder));\n  overflow: hidden;\n}\n\n.CN-table .tableHeadOverflowWithSorting tr {\n  --cols: 1;\n  --intHeader: 130px;\n  --parentWidth: 100%;\n  --sizeSpaceHolder: calc(var(--parentWidth) - 70px * var(--cols) - var(--intHeader));\n  display: grid;\n  grid-template-columns: var(--intHeader) repeat(auto-fit, 70px);\n  width: calc(var(--intHeader) + 70px * var(--cols) + var(--sizeSpaceHolder) - 3ch);\n  overflow: hidden;\n}\n\n.CN-table .tableHeadOverflow th.rotate {\n  position: relative;\n  width: 350px;\n  height: 51px !important;\n  color: white;\n  font-size: 14px;\n  text-align: left;\n  border: 1px solid white;\n  top: 70px;\n  left: -52px;\n  display: flex;\n  align-items: center;\n  align-content: center;\n  padding: 0;\n  transform: rotate(-45deg);\n  border-collapse: collapse;\n}\n\n.CN-table .tableHeadOverflow th.rotate a {\n  width: 100%;\n  height: 100%;\n  align-content: center;\n  background-color: #007c82;\n  padding: 0 0 0 70px;\n  border: none;\n}\n\n.spaceHolder {\n  width: 1000px;\n  background-color: #007c82;\n  border-left: 1px solid white;\n}\n\n.interactorsHeader.overflow {\n  min-width: 130px;\n  max-width: 130px;\n  width: 130px;\n  position: sticky;\n  left: 0;\n  z-index: 4;\n  background-color: white;\n  border-bottom: 3px solid #007c82;\n  height: 60px;\n  line-height: 70px;\n  text-align: right;\n  color: #007c82;\n}\n\n/* Horizontal complexes name */\n\n.CN-table th.horizontal.interactorsHeader {\n  padding: 5px;\n  min-width: 130px;\n  max-width: 130px;\n  font-size: medium;\n  border-left: none;\n  text-align: right;\n  color: #007c82;\n  background-color: white;\n  border-bottom: 3px solid #007c82;\n}\n\n.horizontal-label {\n  text-align: center;\n  text-overflow: ellipsis;\n  width: 90%;\n  white-space: nowrap;\n  overflow: hidden;\n  margin: auto;\n}\n\n.CN-table th.horizontal {\n  color: white;\n  background-color: #007c82;\n  border-left: 1px solid white;\n  min-width: 80px;\n  max-width: 80px;\n  height: 35px;\n  font-size: 15px;\n}\n\na:visited {\n  color: white;\n}\n\na {\n  color: white;\n}\n\n.basketButton {\n  padding: 0;\n  margin: 0;\n}\n\n.hidden {\n  display: none;\n}\n\n.button {\n  padding: 0;\n  margin: 0;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlLWhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQTBCLEVBQUUsZ0dBQWdHO0FBQzlIOztBQUVBO0VBQ0UsU0FBUztFQUNULHVCQUF1QjtFQUN2QiwyQkFBMkI7RUFDM0IsZ0JBQWdCOztBQUVsQjs7QUFFQTtFQUNFLDJCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGdDQUFnQztBQUNsQzs7QUFFQSw0QkFBNEI7O0FBRTVCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsT0FBTztFQUNQLFVBQVU7RUFDVixjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixtRkFBbUY7RUFDbkYsYUFBYTtFQUNiLDhEQUE4RDtFQUM5RCwyRUFBMkU7RUFDM0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsU0FBUztFQUNULGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsbUZBQW1GO0VBQ25GLGFBQWE7RUFDYiw4REFBOEQ7RUFDOUQsaUZBQWlGO0VBQ2pGLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixTQUFTO0VBQ1QsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVix5QkFBeUI7RUFDekIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixPQUFPO0VBQ1AsVUFBVTtFQUNWLHVCQUF1QjtFQUN2QixnQ0FBZ0M7RUFDaEMsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFFQSw4QkFBOEI7O0FBRTlCO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsNEJBQTRCO0VBQzVCLGVBQWU7RUFDZixlQUFlO0VBQ2YsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUdBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7QUFDWCIsImZpbGUiOiJ0YWJsZS1oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5DTi10YWJsZSB7XG4gIHRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpOyAvKiByb3RhdGUgdGhlIGhlYWRlcidzIGNvbnRlbnQgdG8gbWFrZSBpdCBpdCB0aGUgcmlnaHQgc2Vuc2UgKHdoZW4gcmVtb3ZlcywgaXQgaXMgdXBzaWRlIGRvd24pICovXG59XG5cbnRoZWFkIHtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJpZ2h0OiAwIHNvbGlkIHdoaXRlO1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuXG59XG5cbi5DTi10YWJsZSB7XG4gIGNsaXAtcGF0aDogZmlsbC1ib3g7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG59XG5cbi5zcGFjZUhvbGRlclNvcnRpbmcge1xuICB3aWR0aDogM2NoO1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzAwN2M4Mjtcbn1cblxuLyogUm90YXRlZCBjb21wbGV4ZXMgbmFtZXMgKi9cblxuLnNwYWNlSG9sZGVySGVhZGVyT3ZlcmZsb3cge1xuICBtaW4td2lkdGg6IDEzMHB4O1xuICBtYXgtd2lkdGg6IDEzMHB4O1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiA0O1xuICBjb2xvcjogIzAwN2M4MjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctdG9wOiAxNzNweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5pY29uT3JnYW5pc20ge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdjODI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB3aGl0ZTtcbiAgZm9udC1zaXplOiBtZWRpdW07XG4gIGhlaWdodDogNjBweDtcbn1cblxuLnRpbHRlZC1sYWJlbCB7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aWR0aDogMjhjaDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLkNOLXRhYmxlIC50YWJsZUhlYWRPdmVyZmxvdyB0ciB7XG4gIC0tY29sczogMTtcbiAgLS1pbnRIZWFkZXI6IDEzMHB4O1xuICAtLXBhcmVudFdpZHRoOiAxMDAlO1xuICAtLXNpemVTcGFjZUhvbGRlcjogY2FsYyh2YXIoLS1wYXJlbnRXaWR0aCkgLSA3MHB4ICogdmFyKC0tY29scykgLSB2YXIoLS1pbnRIZWFkZXIpKTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiB2YXIoLS1pbnRIZWFkZXIpIHJlcGVhdChhdXRvLWZpdCwgNzBweCk7XG4gIHdpZHRoOiBjYWxjKHZhcigtLWludEhlYWRlcikgKyA3MHB4ICogdmFyKC0tY29scykgKyB2YXIoLS1zaXplU3BhY2VIb2xkZXIpKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLkNOLXRhYmxlIC50YWJsZUhlYWRPdmVyZmxvd1dpdGhTb3J0aW5nIHRyIHtcbiAgLS1jb2xzOiAxO1xuICAtLWludEhlYWRlcjogMTMwcHg7XG4gIC0tcGFyZW50V2lkdGg6IDEwMCU7XG4gIC0tc2l6ZVNwYWNlSG9sZGVyOiBjYWxjKHZhcigtLXBhcmVudFdpZHRoKSAtIDcwcHggKiB2YXIoLS1jb2xzKSAtIHZhcigtLWludEhlYWRlcikpO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHZhcigtLWludEhlYWRlcikgcmVwZWF0KGF1dG8tZml0LCA3MHB4KTtcbiAgd2lkdGg6IGNhbGModmFyKC0taW50SGVhZGVyKSArIDcwcHggKiB2YXIoLS1jb2xzKSArIHZhcigtLXNpemVTcGFjZUhvbGRlcikgLSAzY2gpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uQ04tdGFibGUgLnRhYmxlSGVhZE92ZXJmbG93IHRoLnJvdGF0ZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDM1MHB4O1xuICBoZWlnaHQ6IDUxcHggIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICB0b3A6IDcwcHg7XG4gIGxlZnQ6IC01MnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDA7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG5cbi5DTi10YWJsZSAudGFibGVIZWFkT3ZlcmZsb3cgdGgucm90YXRlIGEge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdjODI7XG4gIHBhZGRpbmc6IDAgMCAwIDcwcHg7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLnNwYWNlSG9sZGVyIHtcbiAgd2lkdGg6IDEwMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2M4MjtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB3aGl0ZTtcbn1cblxuLmludGVyYWN0b3JzSGVhZGVyLm92ZXJmbG93IHtcbiAgbWluLXdpZHRoOiAxMzBweDtcbiAgbWF4LXdpZHRoOiAxMzBweDtcbiAgd2lkdGg6IDEzMHB4O1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiA0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMwMDdjODI7XG4gIGhlaWdodDogNjBweDtcbiAgbGluZS1oZWlnaHQ6IDcwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBjb2xvcjogIzAwN2M4Mjtcbn1cblxuLyogSG9yaXpvbnRhbCBjb21wbGV4ZXMgbmFtZSAqL1xuXG4uQ04tdGFibGUgdGguaG9yaXpvbnRhbC5pbnRlcmFjdG9yc0hlYWRlciB7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWluLXdpZHRoOiAxMzBweDtcbiAgbWF4LXdpZHRoOiAxMzBweDtcbiAgZm9udC1zaXplOiBtZWRpdW07XG4gIGJvcmRlci1sZWZ0OiBub25lO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgY29sb3I6ICMwMDdjODI7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzAwN2M4Mjtcbn1cblxuLmhvcml6b250YWwtbGFiZWwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aWR0aDogOTAlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5DTi10YWJsZSB0aC5ob3Jpem9udGFsIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YzgyO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHdoaXRlO1xuICBtaW4td2lkdGg6IDgwcHg7XG4gIG1heC13aWR0aDogODBweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbmE6dmlzaXRlZCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJhc2tldEJ1dHRvbiB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuXG4uaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmJ1dHRvbiB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuIl19 */";

      /***/
    }),
    /***/88066: (
    /*!*****************************************************************************************************************************************!*\
      !*** ./src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-interactor-column.component.css ***!
      \*****************************************************************************************************************************************/
    /***/
    function _(module) {
      module.exports = "table {\n  --cols: 1;\n  height: 1px;\n  /*width: calc(130px + 70px * var(--cols) + 183px);*/\n  overflow: scroll;\n}\n\n/* interactors column */\n\n.interactorsColumn {\n  position: sticky;\n  left: 0;\n  z-index: 5;\n  height: 45px;\n  min-width: 130px;\n  max-width: 130px;\n  padding: 5px;\n  text-align: end;\n  color: #0e6f76;\n  font-weight: bold;\n  background: inherit;\n}\n\n.interactorsColumnFixedWidth {\n  width: 130px;\n}\n\n.interactorsColumn a {\n  font-weight: normal;\n}\n\n.intStoich {\n  height: 100%;\n  max-width: 70px;\n  min-width: 70px;\n  font-size: medium;\n  text-align: end;\n  z-index: 1;\n}\n\n.intStoichFixedWidth {\n  width: 70px;\n}\n\ni:not(.small) {\n  font-size: large;\n}\n\ntr:nth-child(even) {\n  background-color: #dfeced;\n}\n\ntr:nth-child(odd) {\n  background-color: #f7f9fa;\n}\n\na, a:visited {\n  color: #0e6f76;\n}\n\n.spaceHolder {\n  width: 183px;\n}\n\n.subComponentColumn {\n  left: 0;\n  z-index: 30;\n  height: 45px;\n  min-width: 130px;\n  max-width: 130px;\n  padding: 5px;\n  text-align: end;\n  color: #0e6f76;\n  font-weight: bold;\n  background: inherit;\n  position: sticky\n}\n\n.expandedRows {\n  color: #0e6f76;\n  position: relative;\n}\n\n.firstExpandedRow:after {\n  z-index: 40;\n  content: '';\n  position: absolute;\n  inset: -2px -1px -2px -1px;\n  pointer-events: none;\n  background: linear-gradient(180deg, #0e6f7696 0px, transparent 10px);\n}\n\n.lastExpandedRow:after {\n  z-index: 40;\n  content: '';\n  position: absolute;\n  inset: -2px -1px -2px -1px;\n  pointer-events: none;\n  background: linear-gradient(0deg, #0e6f7696 0px, transparent 10px);\n}\n\n.singleExpandedRow:after {\n  z-index: 40;\n  content: '';\n  position: absolute;\n  inset: -2px -1px -2px -1px;\n  pointer-events: none;\n  background: linear-gradient(180deg, #0e6f7696 0px, transparent 10px), linear-gradient(0deg, #0e6f7696 0px, transparent 10px);\n}\n\n/* Interactors sorting label*/\n\n.interactorSeparation {\n  max-width: 3ch;\n  min-width: 3ch;\n  background-color: #0e6f76;\n  border: 1px solid white;\n  overflow: hidden;\n  width: 1%;\n  text-align: -webkit-center;\n  position: sticky;\n  z-index: 31;\n  left: 0;\n}\n\n.interactorNameContainer,\n.interactorSeparationName {\n  --rowspanSize: 1;\n  writing-mode: vertical-rl;\n  transform: rotate(-180deg);\n  font-size: small;\n  color: white;\n  line-height: 0.8;\n  text-align: center;\n\n  text-overflow: ellipsis;\n  height: calc(var(--rowspanSize) * 48px);\n  white-space: nowrap;\n  overflow: hidden;\n\n}\n\n.container {\n  font-size: 14px;\n}\n\n.horizontalHeader {\n  min-width: 114px;\n  max-width: 114px;\n}\n\n/*/* NEEDED FOR SAFARI BROWSER*/\n\n@supports (-webkit-hyphens:none) {\n  .interactorsColumn {\n    height: 45px !important;\n  }\n\n  .intStoich {\n    height: 45px;\n    overflow-y: visible;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlLWludGVyYWN0b3ItY29sdW1uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFTO0VBQ1QsV0FBVztFQUNYLG1EQUFtRDtFQUNuRCxnQkFBZ0I7QUFDbEI7O0FBRUEsdUJBQXVCOztBQUN2QjtFQUNFLGdCQUFnQjtFQUNoQixPQUFPO0VBQ1AsVUFBVTtFQUNWLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixlQUFlO0VBQ2YsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixlQUFlO0VBQ2YsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkI7QUFDRjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsb0JBQW9CO0VBQ3BCLG9FQUFvRTtBQUN0RTs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQixvQkFBb0I7RUFDcEIsa0VBQWtFO0FBQ3BFOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLG9CQUFvQjtFQUNwQiw0SEFBNEg7QUFDOUg7O0FBRUEsNkJBQTZCOztBQUU3QjtFQUNFLGNBQWM7RUFDZCxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsU0FBUztFQUNULDBCQUEwQjtFQUMxQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLE9BQU87QUFDVDs7QUFFQTs7RUFFRSxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLDBCQUEwQjtFQUMxQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7O0VBRWxCLHVCQUF1QjtFQUN2Qix1Q0FBdUM7RUFDdkMsbUJBQW1CO0VBQ25CLGdCQUFnQjs7QUFFbEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQSwrQkFBK0I7O0FBQy9CO0VBQ0U7SUFDRSx1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osbUJBQW1CO0VBQ3JCO0FBQ0YiLCJmaWxlIjoidGFibGUtaW50ZXJhY3Rvci1jb2x1bW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgLS1jb2xzOiAxO1xuICBoZWlnaHQ6IDFweDtcbiAgLyp3aWR0aDogY2FsYygxMzBweCArIDcwcHggKiB2YXIoLS1jb2xzKSArIDE4M3B4KTsqL1xuICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuXG4vKiBpbnRlcmFjdG9ycyBjb2x1bW4gKi9cbi5pbnRlcmFjdG9yc0NvbHVtbiB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDU7XG4gIGhlaWdodDogNDVweDtcbiAgbWluLXdpZHRoOiAxMzBweDtcbiAgbWF4LXdpZHRoOiAxMzBweDtcbiAgcGFkZGluZzogNXB4O1xuICB0ZXh0LWFsaWduOiBlbmQ7XG4gIGNvbG9yOiAjMGU2Zjc2O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbn1cblxuLmludGVyYWN0b3JzQ29sdW1uRml4ZWRXaWR0aCB7XG4gIHdpZHRoOiAxMzBweDtcbn1cblxuLmludGVyYWN0b3JzQ29sdW1uIGEge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4uaW50U3RvaWNoIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtd2lkdGg6IDcwcHg7XG4gIG1pbi13aWR0aDogNzBweDtcbiAgZm9udC1zaXplOiBtZWRpdW07XG4gIHRleHQtYWxpZ246IGVuZDtcbiAgei1pbmRleDogMTtcbn1cblxuLmludFN0b2ljaEZpeGVkV2lkdGgge1xuICB3aWR0aDogNzBweDtcbn1cblxuaTpub3QoLnNtYWxsKSB7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG59XG5cbnRyOm50aC1jaGlsZChldmVuKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZmVjZWQ7XG59XG5cbnRyOm50aC1jaGlsZChvZGQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjlmYTtcbn1cblxuYSwgYTp2aXNpdGVkIHtcbiAgY29sb3I6ICMwZTZmNzY7XG59XG5cbi5zcGFjZUhvbGRlciB7XG4gIHdpZHRoOiAxODNweDtcbn1cblxuLnN1YkNvbXBvbmVudENvbHVtbiB7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDMwO1xuICBoZWlnaHQ6IDQ1cHg7XG4gIG1pbi13aWR0aDogMTMwcHg7XG4gIG1heC13aWR0aDogMTMwcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgdGV4dC1hbGlnbjogZW5kO1xuICBjb2xvcjogIzBlNmY3NjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gIHBvc2l0aW9uOiBzdGlja3lcbn1cblxuLmV4cGFuZGVkUm93cyB7XG4gIGNvbG9yOiAjMGU2Zjc2O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5maXJzdEV4cGFuZGVkUm93OmFmdGVyIHtcbiAgei1pbmRleDogNDA7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGluc2V0OiAtMnB4IC0xcHggLTJweCAtMXB4O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzBlNmY3Njk2IDBweCwgdHJhbnNwYXJlbnQgMTBweCk7XG59XG5cbi5sYXN0RXhwYW5kZWRSb3c6YWZ0ZXIge1xuICB6LWluZGV4OiA0MDtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaW5zZXQ6IC0ycHggLTFweCAtMnB4IC0xcHg7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgIzBlNmY3Njk2IDBweCwgdHJhbnNwYXJlbnQgMTBweCk7XG59XG5cbi5zaW5nbGVFeHBhbmRlZFJvdzphZnRlciB7XG4gIHotaW5kZXg6IDQwO1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBpbnNldDogLTJweCAtMXB4IC0ycHggLTFweDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMwZTZmNzY5NiAwcHgsIHRyYW5zcGFyZW50IDEwcHgpLCBsaW5lYXItZ3JhZGllbnQoMGRlZywgIzBlNmY3Njk2IDBweCwgdHJhbnNwYXJlbnQgMTBweCk7XG59XG5cbi8qIEludGVyYWN0b3JzIHNvcnRpbmcgbGFiZWwqL1xuXG4uaW50ZXJhY3RvclNlcGFyYXRpb24ge1xuICBtYXgtd2lkdGg6IDNjaDtcbiAgbWluLXdpZHRoOiAzY2g7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZTZmNzY7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMSU7XG4gIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB6LWluZGV4OiAzMTtcbiAgbGVmdDogMDtcbn1cblxuLmludGVyYWN0b3JOYW1lQ29udGFpbmVyLFxuLmludGVyYWN0b3JTZXBhcmF0aW9uTmFtZSB7XG4gIC0tcm93c3BhblNpemU6IDE7XG4gIHdyaXRpbmctbW9kZTogdmVydGljYWwtcmw7XG4gIHRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xuICBmb250LXNpemU6IHNtYWxsO1xuICBjb2xvcjogd2hpdGU7XG4gIGxpbmUtaGVpZ2h0OiAwLjg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLXJvd3NwYW5TaXplKSAqIDQ4cHgpO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG59XG5cbi5jb250YWluZXIge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5ob3Jpem9udGFsSGVhZGVyIHtcbiAgbWluLXdpZHRoOiAxMTRweDtcbiAgbWF4LXdpZHRoOiAxMTRweDtcbn1cblxuLyovKiBORUVERUQgRk9SIFNBRkFSSSBCUk9XU0VSKi9cbkBzdXBwb3J0cyAoLXdlYmtpdC1oeXBoZW5zOm5vbmUpIHtcbiAgLmludGVyYWN0b3JzQ29sdW1uIHtcbiAgICBoZWlnaHQ6IDQ1cHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pbnRTdG9pY2gge1xuICAgIGhlaWdodDogNDVweDtcbiAgICBvdmVyZmxvdy15OiB2aXNpYmxlO1xuICB9XG59XG4iXX0= */";

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
      module.exports = "a {\n  font-weight: bold;\n}\n\na, a:visited {\n  color: #0e6f76;\n}\n\ni:not(.small) {\n  font-size: medium;\n}\n\n.nameAndIcons {\n  font-size: 14px;\n  display: flex;\n  width: inherit;\n  justify-content: end;\n}\n\n.inlineDisplay {\n  display: flex;\n  justify-content: end;\n}\n\n.name {\n  width: inherit;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  text-wrap: nowrap;\n  text-align: end;\n  padding-right: 5px;\n}\n\n.nameCompact {\n  display: inline-flex;\n  width: -webkit-fill-available;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlLWludGVyYWN0b3ItbmFtZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsY0FBYztFQUNkLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQiw2QkFBNkI7QUFDL0IiLCJmaWxlIjoidGFibGUtaW50ZXJhY3Rvci1uYW1lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmEsIGE6dmlzaXRlZCB7XG4gIGNvbG9yOiAjMGU2Zjc2O1xufVxuXG5pOm5vdCguc21hbGwpIHtcbiAgZm9udC1zaXplOiBtZWRpdW07XG59XG5cbi5uYW1lQW5kSWNvbnMge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiBpbmhlcml0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbn1cblxuLmlubGluZURpc3BsYXkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbn1cblxuLm5hbWUge1xuICB3aWR0aDogaW5oZXJpdDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtd3JhcDogbm93cmFwO1xuICB0ZXh0LWFsaWduOiBlbmQ7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxuLm5hbWVDb21wYWN0IHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xufVxuIl19 */";

      /***/
    }),
    /***/90745: (
    /*!*******************************************************************************************************************************************************************************!*\
      !*** ./src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-interactor-stoichiometry/table-interactor-stoichiometry.component.css ***!
      \*******************************************************************************************************************************************************************************/
    /***/
    function _(module) {
      module.exports = "\n.stoichNum {\n  width: 4ch;\n  height: 4ch;\n  border-radius: 4ch;\n  background-color: #0e6f76;\n  text-align: center;\n  padding-top: 0.5ch;\n  color: white;\n  font-size: small;\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  z-index: 1;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlLWludGVyYWN0b3Itc3RvaWNoaW9tZXRyeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaIiwiZmlsZSI6InRhYmxlLWludGVyYWN0b3Itc3RvaWNoaW9tZXRyeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uc3RvaWNoTnVtIHtcbiAgd2lkdGg6IDRjaDtcbiAgaGVpZ2h0OiA0Y2g7XG4gIGJvcmRlci1yYWRpdXM6IDRjaDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBlNmY3NjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMC41Y2g7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xufVxuIl19 */";

      /***/
    }),
    /***/96532: (
    /*!*************************************************************************************************************************************************************!*\
      !*** ./src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-main-interactor/table-main-interactor.component.css ***!
      \*************************************************************************************************************************************************************/
    /***/
    function _(module) {
      module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n  flex-wrap: nowrap;\n\n  * {\n    flex: 1\n  }\n}\n\n.verticalLine, .transparentVerticalLine {\n  margin-left: auto;\n  margin-right: auto;\n  min-width: 1%;\n  max-width: 1%;\n  min-height: 50%;\n  z-index: 0;\n  position: relative;\n  height: 50%;\n}\n\n.verticalLine {\n  border-right: 3px solid #0e6f76;\n}\n\n.transparentVerticalLine {\n  border-right: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlLW1haW4taW50ZXJhY3Rvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsaUJBQWlCOztFQUVqQjtJQUNFO0VBQ0Y7QUFDRjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGFBQWE7RUFDYixlQUFlO0VBQ2YsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6InRhYmxlLW1haW4taW50ZXJhY3Rvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuXG4gICoge1xuICAgIGZsZXg6IDFcbiAgfVxufVxuXG4udmVydGljYWxMaW5lLCAudHJhbnNwYXJlbnRWZXJ0aWNhbExpbmUge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtaW4td2lkdGg6IDElO1xuICBtYXgtd2lkdGg6IDElO1xuICBtaW4taGVpZ2h0OiA1MCU7XG4gIHotaW5kZXg6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA1MCU7XG59XG5cbi52ZXJ0aWNhbExpbmUge1xuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAjMGU2Zjc2O1xufVxuXG4udHJhbnNwYXJlbnRWZXJ0aWNhbExpbmUge1xuICBib3JkZXItcmlnaHQ6IDA7XG59XG4iXX0= */";

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
      module.exports = ".complexNavigatorTable {\n  border-collapse: separate;\n  height: 100%;\n}\n\n.header {\n  position: sticky;\n  top: 20px;\n  z-index: 2;\n  overflow-x: auto;\n  overflow-y: hidden;\n  transform: rotateX(180deg);\n}\n\n.interactors {\n  z-index: 1;\n  position: relative;\n  overflow-y: hidden;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlLXN0cnVjdHVyZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEIiLCJmaWxlIjoidGFibGUtc3RydWN0dXJlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29tcGxleE5hdmlnYXRvclRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uaGVhZGVyIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAyMHB4O1xuICB6LWluZGV4OiAyO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIHRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpO1xufVxuXG4uaW50ZXJhY3RvcnMge1xuICB6LWluZGV4OiAxO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbn1cbiJdfQ== */";

      /***/
    })
  }]);
})();
//# sourceMappingURL=default-src_app_complex_complex-results_complex-navigator_complex-navigator_module_ts-src_app-a63446-es5.js.map