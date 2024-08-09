(function () {
  "use strict";

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  (self["webpackChunkcomplex_portal_view"] = self["webpackChunkcomplex_portal_view"] || []).push([["src_app_complex_complex_module_ts"], {
    /***/26330:
    /*!*******************************************!*\
      !*** ./src/app/complex/complex.module.ts ***!
      \*******************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"ComplexModule": function ComplexModule() {
          return (/* binding */_ComplexModule
          );
        }
        /* harmony export */
      });
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */2316);
      /* harmony import */
      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/common */54364);
      /* harmony import */
      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */71258);
      /* harmony import */
      var _shared_pipe_species_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./shared/pipe/species.pipe */6183);
      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      var _ComplexModule = /*#__PURE__*/_createClass(function ComplexModule() {
        _classCallCheck(this, ComplexModule);
      });
      _ComplexModule = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild([{
          path: 'organisms',
          loadChildren: function loadChildren() {
            return Promise.all( /*! import() */[__webpack_require__.e("default-src_app_shared_loading-indicators_progress-spinner_progress-spinner_module_ts"), __webpack_require__.e("src_app_complex_complex-organisms_complex-organisms_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! app/complex/complex-organisms/complex-organisms.module */15563)).then(function (m) {
              return m.ComplexOrganismsModule;
            });
          }
        }, {
          path: 'search',
          loadChildren: function loadChildren() {
            return Promise.all( /*! import() */[__webpack_require__.e("default-src_app_shared_loading-indicators_progress-spinner_progress-spinner_module_ts"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_tooltip_js-src_app_complex_comple-8a6e67"), __webpack_require__.e("default-src_app_complex_complex-results_complex-navigator_complex-navigator_module_ts"), __webpack_require__.e("src_app_complex_complex-results_complex-results_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! app/complex/complex-results/complex-results.module */79555)).then(function (m) {
              return m.ComplexResultsModule;
            });
          }
        }, {
          path: ':id',
          loadChildren: function loadChildren() {
            return Promise.all( /*! import() */[__webpack_require__.e("default-src_app_shared_loading-indicators_progress-spinner_progress-spinner_module_ts"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_tooltip_js-src_app_complex_comple-8a6e67"), __webpack_require__.e("src_app_complex_complex-details_complex-details_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! app/complex/complex-details/complex-details.module */81613)).then(function (m) {
              return m.ComplexDetailsModule;
            });
          }
        }]), _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],
        providers: [{
          provide: _angular_common__WEBPACK_IMPORTED_MODULE_3__.APP_BASE_HREF,
          useFactory: function useFactory(s) {
            return s.getBaseHrefFromDOM();
          },
          deps: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.PlatformLocation]
        }],
        exports: [_shared_pipe_species_pipe__WEBPACK_IMPORTED_MODULE_0__.SpeciesPipe],
        declarations: [_shared_pipe_species_pipe__WEBPACK_IMPORTED_MODULE_0__.SpeciesPipe]
      })], _ComplexModule);

      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_complex_complex_module_ts-es5.js.map