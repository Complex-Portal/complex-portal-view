(function () {
  "use strict";

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkcomplex_portal_view"] = self["webpackChunkcomplex_portal_view"] || []).push([["src_app_complex_complex-organisms_complex-organisms_module_ts"], {
    /***/
    70781:
    /*!************************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MatAnchor": function MatAnchor() {
          return (
            /* binding */
            _MatAnchor
          );
        },

        /* harmony export */
        "MatButton": function MatButton() {
          return (
            /* binding */
            _MatButton
          );
        },

        /* harmony export */
        "MatButtonModule": function MatButtonModule() {
          return (
            /* binding */
            _MatButtonModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/material/core */
      32220);
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      51606);
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      20718);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Default color palette for round buttons (mat-fab and mat-mini-fab) */


      var _c0 = ["mat-button", ""];
      var _c1 = ["*"];
      var _c2 = ".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:.04}@media(hover: none){.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-icon-button,.mat-stroked-button,.mat-flat-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-button.mat-button-disabled,.mat-icon-button.mat-button-disabled,.mat-stroked-button.mat-button-disabled,.mat-flat-button.mat-button-disabled{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button.mat-button-disabled{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-ripple.mat-ripple,.mat-stroked-button .mat-button-focus-overlay{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab.mat-button-disabled{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab.mat-button-disabled{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button i,.mat-icon-button .mat-icon{line-height:24px}.mat-button-ripple.mat-ripple,.mat-button-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1),background-color 200ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:inline-flex;justify-content:center;align-items:center;font-size:inherit;width:2.5em;height:2.5em}.cdk-high-contrast-active .mat-button,.cdk-high-contrast-active .mat-flat-button,.cdk-high-contrast-active .mat-raised-button,.cdk-high-contrast-active .mat-icon-button,.cdk-high-contrast-active .mat-fab,.cdk-high-contrast-active .mat-mini-fab{outline:solid 1px}.cdk-high-contrast-active .mat-button-base.cdk-keyboard-focused,.cdk-high-contrast-active .mat-button-base.cdk-program-focused{outline:solid 3px}\n";
      var DEFAULT_ROUND_BUTTON_COLOR = 'accent';
      /**
       * List of classes to add to MatButton instances based on host attributes to
       * style as different variants.
       */

      var BUTTON_HOST_ATTRIBUTES = ['mat-button', 'mat-flat-button', 'mat-icon-button', 'mat-raised-button', 'mat-stroked-button', 'mat-mini-fab', 'mat-fab']; // Boilerplate for applying mixins to MatButton.

      var _MatButtonBase = (0, _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.mixinColor)((0, _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.mixinDisabled)((0, _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.mixinDisableRipple)( /*#__PURE__*/function () {
        function _class(_elementRef) {
          _classCallCheck(this, _class);

          this._elementRef = _elementRef;
        }

        return _class;
      }())));
      /**
       * Material design button.
       */


      var _MatButton = /*#__PURE__*/function (_MatButtonBase2) {
        _inherits(_MatButton, _MatButtonBase2);

        var _super = _createSuper(_MatButton);

        function _MatButton(elementRef, _focusMonitor, _animationMode) {
          var _this;

          _classCallCheck(this, _MatButton);

          _this = _super.call(this, elementRef);
          _this._focusMonitor = _focusMonitor;
          _this._animationMode = _animationMode;
          /** Whether the button is round. */

          _this.isRoundButton = _this._hasHostAttributes('mat-fab', 'mat-mini-fab');
          /** Whether the button is icon button. */

          _this.isIconButton = _this._hasHostAttributes('mat-icon-button'); // For each of the variant selectors that is present in the button's host
          // attributes, add the correct corresponding class.

          var _iterator = _createForOfIteratorHelper(BUTTON_HOST_ATTRIBUTES),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var attr = _step.value;

              if (_this._hasHostAttributes(attr)) {
                _this._getHostElement().classList.add(attr);
              }
            } // Add a class that applies to all buttons. This makes it easier to target if somebody
            // wants to target all Material buttons. We do it here rather than `host` to ensure that
            // the class is applied to derived classes.

          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          elementRef.nativeElement.classList.add('mat-button-base');

          if (_this.isRoundButton) {
            _this.color = DEFAULT_ROUND_BUTTON_COLOR;
          }

          return _this;
        }

        _createClass(_MatButton, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this._focusMonitor.monitor(this._elementRef, true);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._focusMonitor.stopMonitoring(this._elementRef);
          }
          /** Focuses the button. */

        }, {
          key: "focus",
          value: function focus(origin, options) {
            if (origin) {
              this._focusMonitor.focusVia(this._getHostElement(), origin, options);
            } else {
              this._getHostElement().focus(options);
            }
          }
        }, {
          key: "_getHostElement",
          value: function _getHostElement() {
            return this._elementRef.nativeElement;
          }
        }, {
          key: "_isRippleDisabled",
          value: function _isRippleDisabled() {
            return this.disableRipple || this.disabled;
          }
          /** Gets whether the button has one of the given attributes. */

        }, {
          key: "_hasHostAttributes",
          value: function _hasHostAttributes() {
            var _this2 = this;

            for (var _len = arguments.length, attributes = new Array(_len), _key = 0; _key < _len; _key++) {
              attributes[_key] = arguments[_key];
            }

            return attributes.some(function (attribute) {
              return _this2._getHostElement().hasAttribute(attribute);
            });
          }
        }]);

        return _MatButton;
      }(_MatButtonBase);

      _MatButton.ɵfac = function MatButton_Factory(t) {
        return new (t || _MatButton)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__.ANIMATION_MODULE_TYPE, 8));
      };

      _MatButton.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _MatButton,
        selectors: [["button", "mat-button", ""], ["button", "mat-raised-button", ""], ["button", "mat-icon-button", ""], ["button", "mat-fab", ""], ["button", "mat-mini-fab", ""], ["button", "mat-stroked-button", ""], ["button", "mat-flat-button", ""]],
        viewQuery: function MatButton_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatRipple, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.ripple = _t.first);
          }
        },
        hostAttrs: [1, "mat-focus-indicator"],
        hostVars: 5,
        hostBindings: function MatButton_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", ctx.disabled || null);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations")("mat-button-disabled", ctx.disabled);
          }
        },
        inputs: {
          disabled: "disabled",
          disableRipple: "disableRipple",
          color: "color"
        },
        exportAs: ["matButton"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
        attrs: _c0,
        ngContentSelectors: _c1,
        decls: 4,
        vars: 5,
        consts: [[1, "mat-button-wrapper"], ["matRipple", "", 1, "mat-button-ripple", 3, "matRippleDisabled", "matRippleCentered", "matRippleTrigger"], [1, "mat-button-focus-overlay"]],
        template: function MatButton_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "span", 2);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-button-ripple-round", ctx.isRoundButton || ctx.isIconButton);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRippleDisabled", ctx._isRippleDisabled())("matRippleCentered", ctx.isIconButton)("matRippleTrigger", ctx._getHostElement());
          }
        },
        directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatRipple],
        styles: [_c2],
        encapsulation: 2,
        changeDetection: 0
      });

      _MatButton.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.FocusMonitor
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__.ANIMATION_MODULE_TYPE]
          }]
        }];
      };

      _MatButton.propDecorators = {
        ripple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
          args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatRipple]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](_MatButton, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
          args: [{
            selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],\n             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],\n             button[mat-flat-button]",
            exportAs: 'matButton',
            host: {
              '[attr.disabled]': 'disabled || null',
              '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
              // Add a class for disabled button styling instead of the using attribute
              // selector or pseudo-selector.  This allows users to create focusabled
              // disabled buttons without recreating the styles.
              '[class.mat-button-disabled]': 'disabled',
              'class': 'mat-focus-indicator'
            },
            template: "<span class=\"mat-button-wrapper\"><ng-content></ng-content></span>\n<span matRipple class=\"mat-button-ripple\"\n      [class.mat-button-ripple-round]=\"isRoundButton || isIconButton\"\n      [matRippleDisabled]=\"_isRippleDisabled()\"\n      [matRippleCentered]=\"isIconButton\"\n      [matRippleTrigger]=\"_getHostElement()\"></span>\n<span class=\"mat-button-focus-overlay\"></span>\n",
            inputs: ['disabled', 'disableRipple', 'color'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
            styles: [".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:.04}@media(hover: none){.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-icon-button,.mat-stroked-button,.mat-flat-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-button.mat-button-disabled,.mat-icon-button.mat-button-disabled,.mat-stroked-button.mat-button-disabled,.mat-flat-button.mat-button-disabled{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button.mat-button-disabled{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-ripple.mat-ripple,.mat-stroked-button .mat-button-focus-overlay{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab.mat-button-disabled{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab.mat-button-disabled{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button i,.mat-icon-button .mat-icon{line-height:24px}.mat-button-ripple.mat-ripple,.mat-button-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1),background-color 200ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:inline-flex;justify-content:center;align-items:center;font-size:inherit;width:2.5em;height:2.5em}.cdk-high-contrast-active .mat-button,.cdk-high-contrast-active .mat-flat-button,.cdk-high-contrast-active .mat-raised-button,.cdk-high-contrast-active .mat-icon-button,.cdk-high-contrast-active .mat-fab,.cdk-high-contrast-active .mat-mini-fab{outline:solid 1px}.cdk-high-contrast-active .mat-button-base.cdk-keyboard-focused,.cdk-high-contrast-active .mat-button-base.cdk-program-focused{outline:solid 3px}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
          }, {
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.FocusMonitor
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__.ANIMATION_MODULE_TYPE]
            }]
          }];
        }, {
          ripple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatRipple]
          }]
        });
      })();
      /**
       * Material design anchor button.
       */


      var _MatAnchor = /*#__PURE__*/function (_MatButton2) {
        _inherits(_MatAnchor, _MatButton2);

        var _super2 = _createSuper(_MatAnchor);

        function _MatAnchor(focusMonitor, elementRef, animationMode) {
          _classCallCheck(this, _MatAnchor);

          return _super2.call(this, elementRef, focusMonitor, animationMode);
        }

        _createClass(_MatAnchor, [{
          key: "_haltDisabledEvents",
          value: function _haltDisabledEvents(event) {
            // A disabled button shouldn't apply any actions
            if (this.disabled) {
              event.preventDefault();
              event.stopImmediatePropagation();
            }
          }
        }]);

        return _MatAnchor;
      }(_MatButton);

      _MatAnchor.ɵfac = function MatAnchor_Factory(t) {
        return new (t || _MatAnchor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__.ANIMATION_MODULE_TYPE, 8));
      };

      _MatAnchor.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _MatAnchor,
        selectors: [["a", "mat-button", ""], ["a", "mat-raised-button", ""], ["a", "mat-icon-button", ""], ["a", "mat-fab", ""], ["a", "mat-mini-fab", ""], ["a", "mat-stroked-button", ""], ["a", "mat-flat-button", ""]],
        hostAttrs: [1, "mat-focus-indicator"],
        hostVars: 7,
        hostBindings: function MatAnchor_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MatAnchor_click_HostBindingHandler($event) {
              return ctx._haltDisabledEvents($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("tabindex", ctx.disabled ? -1 : ctx.tabIndex || 0)("disabled", ctx.disabled || null)("aria-disabled", ctx.disabled.toString());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations")("mat-button-disabled", ctx.disabled);
          }
        },
        inputs: {
          disabled: "disabled",
          disableRipple: "disableRipple",
          color: "color",
          tabIndex: "tabIndex"
        },
        exportAs: ["matButton", "matAnchor"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
        attrs: _c0,
        ngContentSelectors: _c1,
        decls: 4,
        vars: 5,
        consts: [[1, "mat-button-wrapper"], ["matRipple", "", 1, "mat-button-ripple", 3, "matRippleDisabled", "matRippleCentered", "matRippleTrigger"], [1, "mat-button-focus-overlay"]],
        template: function MatAnchor_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "span", 2);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-button-ripple-round", ctx.isRoundButton || ctx.isIconButton);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRippleDisabled", ctx._isRippleDisabled())("matRippleCentered", ctx.isIconButton)("matRippleTrigger", ctx._getHostElement());
          }
        },
        directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatRipple],
        styles: [_c2],
        encapsulation: 2,
        changeDetection: 0
      });

      _MatAnchor.ctorParameters = function () {
        return [{
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.FocusMonitor
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__.ANIMATION_MODULE_TYPE]
          }]
        }];
      };

      _MatAnchor.propDecorators = {
        tabIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](_MatAnchor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
          args: [{
            selector: "a[mat-button], a[mat-raised-button], a[mat-icon-button], a[mat-fab],\n             a[mat-mini-fab], a[mat-stroked-button], a[mat-flat-button]",
            exportAs: 'matButton, matAnchor',
            host: {
              // Note that we ignore the user-specified tabindex when it's disabled for
              // consistency with the `mat-button` applied on native buttons where even
              // though they have an index, they're not tabbable.
              '[attr.tabindex]': 'disabled ? -1 : (tabIndex || 0)',
              '[attr.disabled]': 'disabled || null',
              '[attr.aria-disabled]': 'disabled.toString()',
              '(click)': '_haltDisabledEvents($event)',
              '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
              '[class.mat-button-disabled]': 'disabled',
              'class': 'mat-focus-indicator'
            },
            inputs: ['disabled', 'disableRipple', 'color'],
            template: "<span class=\"mat-button-wrapper\"><ng-content></ng-content></span>\n<span matRipple class=\"mat-button-ripple\"\n      [class.mat-button-ripple-round]=\"isRoundButton || isIconButton\"\n      [matRippleDisabled]=\"_isRippleDisabled()\"\n      [matRippleCentered]=\"isIconButton\"\n      [matRippleTrigger]=\"_getHostElement()\"></span>\n<span class=\"mat-button-focus-overlay\"></span>\n",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
            styles: [".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:.04}@media(hover: none){.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-icon-button,.mat-stroked-button,.mat-flat-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-button.mat-button-disabled,.mat-icon-button.mat-button-disabled,.mat-stroked-button.mat-button-disabled,.mat-flat-button.mat-button-disabled{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button.mat-button-disabled{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-ripple.mat-ripple,.mat-stroked-button .mat-button-focus-overlay{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab.mat-button-disabled{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab.mat-button-disabled{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button i,.mat-icon-button .mat-icon{line-height:24px}.mat-button-ripple.mat-ripple,.mat-button-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1),background-color 200ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:inline-flex;justify-content:center;align-items:center;font-size:inherit;width:2.5em;height:2.5em}.cdk-high-contrast-active .mat-button,.cdk-high-contrast-active .mat-flat-button,.cdk-high-contrast-active .mat-raised-button,.cdk-high-contrast-active .mat-icon-button,.cdk-high-contrast-active .mat-fab,.cdk-high-contrast-active .mat-mini-fab{outline:solid 1px}.cdk-high-contrast-active .mat-button-base.cdk-keyboard-focused,.cdk-high-contrast-active .mat-button-base.cdk-program-focused{outline:solid 3px}\n"]
          }]
        }], function () {
          return [{
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.FocusMonitor
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__.ANIMATION_MODULE_TYPE]
            }]
          }];
        }, {
          tabIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var _MatButtonModule = function _MatButtonModule() {
        _classCallCheck(this, _MatButtonModule);
      };

      _MatButtonModule.ɵfac = function MatButtonModule_Factory(t) {
        return new (t || _MatButtonModule)();
      };

      _MatButtonModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _MatButtonModule
      });
      _MatButtonModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule], _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](_MatButtonModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
          args: [{
            imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule],
            exports: [_MatButton, _MatAnchor, _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule],
            declarations: [_MatButton, _MatAnchor]
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_MatButtonModule, {
          declarations: function declarations() {
            return [_MatButton, _MatAnchor];
          },
          imports: function imports() {
            return [_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule];
          },
          exports: function exports() {
            return [_MatButton, _MatAnchor, _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule];
          }
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */

      /***/

    },

    /***/
    26807:
    /*!******************************************************************************************!*\
      !*** ./src/app/complex/complex-organisms/complex-organism/complex-organism.component.ts ***!
      \******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ComplexOrganismComponent": function ComplexOrganismComponent() {
          return (
            /* binding */
            _ComplexOrganismComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _Users_eragueneau_WebstormProjects_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_complex_organism_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./complex-organism.component.html */
      22675);
      /* harmony import */


      var _complex_organism_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./complex-organism.component.css */
      22137);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _shared_google_analytics_service_analytics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../shared/google-analytics/service/analytics.service */
      96242);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _shared_google_analytics_types_category_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../shared/google-analytics/types/category.enum */
      86335);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../environments/environment */
      92340);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      54364);

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var _ComplexOrganismComponent = /*#__PURE__*/function () {
        function ComplexOrganismComponent(router, googleAnalyticsService, _baseHref) {
          _classCallCheck(this, ComplexOrganismComponent);

          this.router = router;
          this.googleAnalyticsService = googleAnalyticsService;
          this._baseHref = _baseHref;
        }

        _createClass(ComplexOrganismComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "search",
          value: function search(specieName) {
            this.googleAnalyticsService.fireSearchTermEvent(_shared_google_analytics_types_category_enum__WEBPACK_IMPORTED_MODULE_3__.Category.organisms, specieName);
            this.router.navigate(['complex/search'], {
              queryParams: {
                query: '*',
                species: specieName,
                page: 1
              }
            });
          }
        }, {
          key: "organism",
          get: function get() {
            return this._organism;
          },
          set: function set(value) {
            this._organism = value;
          }
        }, {
          key: "goToComplexPSI25",
          value: function goToComplexPSI25() {
            this.googleAnalyticsService.fireDownloadResourceEvent(_shared_google_analytics_types_category_enum__WEBPACK_IMPORTED_MODULE_3__.Category.organisms, 'PSIXML25');
            window.open(_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.complex_psi25 + this.organism.psi25, '_blank');
          }
        }, {
          key: "goToComplexPSI30",
          value: function goToComplexPSI30() {
            this.googleAnalyticsService.fireDownloadResourceEvent(_shared_google_analytics_types_category_enum__WEBPACK_IMPORTED_MODULE_3__.Category.organisms, 'PSIXML30');
            window.open(_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.complex_psi30 + this.organism.psi30, '_blank');
          }
        }, {
          key: "goToComplexTAB",
          value: function goToComplexTAB() {
            this.googleAnalyticsService.fireDownloadResourceEvent(_shared_google_analytics_types_category_enum__WEBPACK_IMPORTED_MODULE_3__.Category.organisms, 'ComplexTAB');
            window.open(_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.complex_tab + this.organism.complextab + '.tsv', '_blank');
          }
        }, {
          key: "maskStyle",
          get: function get() {
            return "mask: url(".concat(this._baseHref).concat(this._organism.symbol, ") no-repeat center; -webkit-mask: url(").concat(this._baseHref).concat(this._organism.symbol, ") no-repeat center");
          }
        }]);

        return ComplexOrganismComponent;
      }();

      _ComplexOrganismComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
        }, {
          type: _shared_google_analytics_service_analytics_service__WEBPACK_IMPORTED_MODULE_2__.AnalyticsService
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Inject,
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.APP_BASE_HREF]
          }]
        }];
      };

      _ComplexOrganismComponent.propDecorators = {
        organism: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
        }]
      };
      _ComplexOrganismComponent = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'cp-complex-organism',
        template: _Users_eragueneau_WebstormProjects_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_complex_organism_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_complex_organism_component_css__WEBPACK_IMPORTED_MODULE_1__]
      })], _ComplexOrganismComponent);
      /***/
    },

    /***/
    95970:
    /*!**************************************************************************!*\
      !*** ./src/app/complex/complex-organisms/complex-organisms.component.ts ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ComplexOrganismsComponent": function ComplexOrganismsComponent() {
          return (
            /* binding */
            _ComplexOrganismsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _Users_eragueneau_WebstormProjects_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_complex_organisms_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./complex-organisms.component.html */
      92673);
      /* harmony import */


      var _complex_organisms_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./complex-organisms.component.css */
      26201);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _shared_loading_indicators_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../shared/loading-indicators/progress-bar/progress-bar.component */
      57040);
      /* harmony import */


      var _shared_service_complex_portal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../shared/service/complex-portal.service */
      20658);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      71570);

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var _ComplexOrganismsComponent = /*#__PURE__*/function () {
        function ComplexOrganismsComponent(complexPortalService, titleService) {
          _classCallCheck(this, ComplexOrganismsComponent);

          this.complexPortalService = complexPortalService;
          this.titleService = titleService;
          this._query = 'organisms';
        }

        _createClass(ComplexOrganismsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.titleService.setTitle('Complex Portal - Organisms');
            this.requestComplexOrganisms();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            _shared_loading_indicators_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_2__.ProgressBarComponent.hide();
          }
        }, {
          key: "requestComplexOrganisms",
          value: function requestComplexOrganisms() {
            var _this3 = this;

            // TODO: This needs to be looked at, once ftp and WS are able to take care of this.
            // TODO: When new species in CP, we need to add it here to at the image.
            // TODO: Currently we the organism name and count from species facets doing a * search.
            // TODO: The ComplexOrganisms object extends the facet object.
            this.complexPortalService.getComplexOrganisms().subscribe(function (speciesFacets) {
              var organisms = speciesFacets;

              for (var i = 0; i < organisms.length; i++) {
                switch (organisms[i].name) {
                  case 'Homo sapiens':
                    organisms[i].scientificName = organisms[i].name;
                    organisms[i].nameDetails = '';
                    organisms[i].symbol = 'H';
                    organisms[i].type = 'animal';
                    organisms[i].psi25 = 'Homo_sapiens';
                    organisms[i].psi30 = 'human';
                    organisms[i].complextab = '9606';
                    organisms[i].taxid = '9606';
                    break;

                  case 'Mus musculus':
                    organisms[i].scientificName = organisms[i].name;
                    organisms[i].nameDetails = '';
                    organisms[i].symbol = 'M';
                    organisms[i].type = 'animal';
                    organisms[i].psi25 = 'Mus_musculus';
                    organisms[i].psi30 = 'mouse';
                    organisms[i].complextab = '10090';
                    organisms[i].taxid = '10090';
                    break;

                  case 'Saccharomyces cerevisiae (strain ATCC 204508 / S288c)':
                    organisms[i].scientificName = 'Saccharomyces cerevisiae';
                    organisms[i].nameDetails = 'strain ATCC 204508 / S288c';
                    organisms[i].symbol = 'Y';
                    organisms[i].type = 'plant';
                    organisms[i].psi25 = 'Saccharomyces_cerevisiae';
                    organisms[i].psi30 = 'yeast';
                    organisms[i].complextab = '559292';
                    organisms[i].taxid = '559292';
                    break;

                  case 'Escherichia coli (strain K12)':
                    organisms[i].scientificName = 'Escherichia coli';
                    organisms[i].nameDetails = 'strain K12';
                    organisms[i].symbol = 'L';
                    organisms[i].type = 'animal';
                    organisms[i].psi25 = 'Escherichia_coli';
                    organisms[i].psi30 = 'ecoli';
                    organisms[i].complextab = '83333';
                    organisms[i].taxid = '83333';
                    break;

                  case 'Escherichia coli':
                    organisms[i].scientificName = organisms[i].name;
                    organisms[i].nameDetails = '';
                    organisms[i].symbol = 'L';
                    organisms[i].type = 'animal';
                    organisms[i].psi25 = 'Escherichia_coli';
                    organisms[i].psi30 = 'ecolx';
                    organisms[i].complextab = '562';
                    organisms[i].taxid = '562';
                    break;

                  case 'Rattus norvegicus':
                    organisms[i].scientificName = organisms[i].name;
                    organisms[i].nameDetails = '';
                    organisms[i].symbol = 'R';
                    organisms[i].type = 'animal';
                    organisms[i].psi25 = 'Rattus_norvegicus';
                    organisms[i].psi30 = 'rat';
                    organisms[i].complextab = '10116';
                    organisms[i].taxid = '10116';
                    break;

                  case 'Caenorhabditis elegans':
                    organisms[i].scientificName = organisms[i].name;
                    organisms[i].nameDetails = '';
                    organisms[i].symbol = 'W';
                    organisms[i].type = 'animal';
                    organisms[i].psi25 = 'Caenorhabditis_elegans';
                    organisms[i].psi30 = 'caeel';
                    organisms[i].complextab = '6239';
                    organisms[i].taxid = '6239';
                    break;

                  case 'Gallus gallus':
                    organisms[i].scientificName = organisms[i].name;
                    organisms[i].nameDetails = '';
                    organisms[i].symbol = 'k';
                    organisms[i].type = 'animal';
                    organisms[i].psi25 = 'Gallus_gallus';
                    organisms[i].psi30 = 'chick';
                    organisms[i].complextab = '9031';
                    organisms[i].taxid = '9031';
                    break;

                  case 'Drosophila melanogaster':
                    organisms[i].scientificName = organisms[i].name;
                    organisms[i].nameDetails = '';
                    organisms[i].symbol = 'F';
                    organisms[i].type = 'animal';
                    organisms[i].psi25 = 'Drosophila_melanogaster';
                    organisms[i].psi30 = 'drome';
                    organisms[i].complextab = '7227';
                    organisms[i].taxid = '7227';
                    break;

                  case 'Bos taurus':
                    organisms[i].scientificName = organisms[i].name;
                    organisms[i].nameDetails = '';
                    organisms[i].symbol = 'C';
                    organisms[i].type = 'animal';
                    organisms[i].psi25 = 'Bos_taurus';
                    organisms[i].psi30 = 'bovin';
                    organisms[i].complextab = '9913';
                    organisms[i].taxid = '9913';
                    break;

                  case 'Oryctolagus cuniculus':
                    organisms[i].scientificName = organisms[i].name;
                    organisms[i].nameDetails = '';
                    organisms[i].symbol = 't';
                    organisms[i].type = 'animal';
                    organisms[i].psi25 = 'Oryctolagus_cuniculus';
                    organisms[i].psi30 = 'rabit';
                    organisms[i].complextab = '9986';
                    organisms[i].taxid = '9986';
                    break;

                  case 'Ovis aries':
                    organisms[i].scientificName = organisms[i].name;
                    organisms[i].nameDetails = '';
                    organisms[i].symbol = 'x';
                    organisms[i].type = 'animal';
                    organisms[i].psi25 = 'Ovis_aries';
                    organisms[i].psi30 = 'sheep';
                    organisms[i].complextab = '9940';
                    organisms[i].taxid = '9940';
                    break;

                  case 'Xenopus laevis':
                    organisms[i].scientificName = organisms[i].name;
                    organisms[i].nameDetails = '';
                    organisms[i].symbol = 'f';
                    organisms[i].type = 'animal';
                    organisms[i].psi25 = 'Xenopus_laevis';
                    organisms[i].psi30 = 'xenla';
                    organisms[i].complextab = '8355';
                    organisms[i].taxid = '8355';
                    break;

                  case 'Canis lupus familiaris':
                    organisms[i].scientificName = organisms[i].name;
                    organisms[i].nameDetails = '';
                    organisms[i].symbol = 'd';
                    organisms[i].type = 'animal';
                    organisms[i].psi25 = 'Canis_familiaris';
                    organisms[i].psi30 = 'canlf';
                    organisms[i].complextab = '9615';
                    organisms[i].taxid = '9615';
                    break;

                  case 'Schizosaccharomyces pombe (strain 972 / ATCC 24843)':
                    organisms[i].scientificName = 'Schizosaccharomyces pombe';
                    organisms[i].nameDetails = 'strain 972 / ATCC 24843';
                    organisms[i].symbol = 'Y';
                    organisms[i].type = 'animal';
                    organisms[i].psi25 = 'Schizosaccharomyces_pombe';
                    organisms[i].psi30 = 'schpo';
                    organisms[i].complextab = '284812';
                    organisms[i].taxid = '284812';
                    break;

                  case 'Vibrio cholerae serotype O1 (strain ATCC 39315 / El Tor Inaba N16961)':
                    organisms[i].scientificName = 'Vibrio cholerae serotype O1';
                    organisms[i].nameDetails = 'strain ATCC 39315 / El Tor Inaba N16961';
                    organisms[i].symbol = 'assets/images/EMBL_Species_Vibrio_cholerae.svg';
                    organisms[i].type = 'animal';
                    organisms[i].psi25 = 'Vibrio_cholerae';
                    organisms[i].psi30 = 'vibch';
                    organisms[i].complextab = '243277';
                    organisms[i].taxid = '243277';
                    break;

                  case 'Crotalus durissus terrificus':
                    organisms[i].scientificName = 'Crotalus durissus terrificus';
                    organisms[i].nameDetails = '';
                    organisms[i].symbol = 'assets/images/EMBL_Species_RattleSnake.svg';
                    organisms[i].type = 'animal';
                    organisms[i].psi25 = 'Crotalus_durissus_terrificus';
                    organisms[i].psi30 = 'crodu';
                    organisms[i].complextab = '8732';
                    organisms[i].taxid = '8732';
                    break;

                  case 'Sus scrofa':
                    organisms[i].scientificName = organisms[i].name;
                    organisms[i].nameDetails = '';
                    organisms[i].symbol = 'p';
                    organisms[i].type = 'animal';
                    organisms[i].psi25 = 'Sus_scrofa';
                    organisms[i].psi30 = 'pig';
                    organisms[i].complextab = '9823';
                    organisms[i].taxid = '9823';
                    break;

                  case 'Pseudomonas aeruginosa (strain ATCC 15692 / DSM 22644 / CIP 104116 ' + '/ JCM 14847 / LMG 12228 / 1C / PRS 101 / PAO1)':
                    organisms[i].scientificName = 'Pseudomonas aeruginosa';
                    organisms[i].nameDetails = 'strain ATCC 15692';
                    organisms[i].symbol = 'L';
                    organisms[i].type = 'animal';
                    organisms[i].psi25 = 'Pseudomonas_aeruginosa';
                    organisms[i].psi30 = 'pseae';
                    organisms[i].complextab = '208964';
                    organisms[i].taxid = '208964';
                    break;

                  case 'Torpedo marmorata':
                    organisms[i].scientificName = organisms[i].name;
                    organisms[i].nameDetails = '';
                    organisms[i].symbol = '+';
                    organisms[i].type = 'animal';
                    organisms[i].psi25 = 'Torpedo_marmorata';
                    organisms[i].psi30 = 'torma';
                    organisms[i].complextab = '7788';
                    organisms[i].taxid = '7788';
                    break;

                  case 'Tetronarce californica':
                    organisms[i].scientificName = organisms[i].name;
                    organisms[i].nameDetails = '';
                    organisms[i].symbol = '+';
                    organisms[i].type = 'animal';
                    organisms[i].psi25 = 'Torpedo_californica';
                    organisms[i].psi30 = 'torca';
                    organisms[i].complextab = '7787';
                    organisms[i].taxid = '7787';
                    break;

                  case 'Lymnaea stagnalis':
                    organisms[i].scientificName = organisms[i].name;
                    organisms[i].nameDetails = '';
                    organisms[i].symbol = '\'';
                    organisms[i].type = 'animal';
                    organisms[i].psi25 = 'Lymnaea_stagnalis';
                    organisms[i].psi30 = 'lymst';
                    organisms[i].complextab = '6523';
                    organisms[i].taxid = '6523';
                    break;

                  case 'Arabidopsis thaliana':
                    organisms[i].scientificName = organisms[i].name;
                    organisms[i].nameDetails = '';
                    organisms[i].symbol = 'B';
                    organisms[i].type = 'plant';
                    organisms[i].psi25 = 'arabidopsis_thaliana';
                    organisms[i].psi30 = 'arath';
                    organisms[i].complextab = '3702';
                    organisms[i].taxid = '3702';
                    break;

                  case 'Danio rerio':
                    organisms[i].scientificName = organisms[i].name;
                    organisms[i].nameDetails = '';
                    organisms[i].symbol = 'Z';
                    organisms[i].type = 'animal';
                    organisms[i].psi25 = 'danio_rerio';
                    organisms[i].psi30 = 'danre';
                    organisms[i].complextab = '7955';
                    organisms[i].taxid = '7955';
                    break;

                  case 'Severe acute respiratory syndrome coronavirus':
                    organisms[i].scientificName = organisms[i].name;
                    organisms[i].nameDetails = '';
                    organisms[i].symbol = 'v';
                    organisms[i].type = 'virus';
                    organisms[i].psi25 = 'Human_SARS_coronavirus';
                    organisms[i].psi30 = 'sars-cov';
                    organisms[i].complextab = '694009';
                    organisms[i].taxid = '694009';
                    break;

                  case 'Severe acute respiratory syndrome coronavirus 2':
                    organisms[i].scientificName = organisms[i].name;
                    organisms[i].nameDetails = '';
                    organisms[i].symbol = 'v';
                    organisms[i].type = 'virus';
                    organisms[i].psi25 = 'SARS-CoV-2';
                    organisms[i].psi30 = 'SARS-CoV-2';
                    organisms[i].complextab = '2697049';
                    organisms[i].taxid = '2697049';
                    break;

                  case 'Middle East respiratory syndrome-related coronavirus (isolate United Kingdom/H123990006/2012)':
                    organisms[i].scientificName = 'Middle East respiratory syndrome-related coronavirus';
                    organisms[i].nameDetails = 'isolate United Kingdom/H123990006/2012';
                    organisms[i].symbol = 'v';
                    organisms[i].type = 'virus';
                    organisms[i].psi25 = 'Middle_East_respiratory_syndrome-related_coronavirus';
                    organisms[i].psi30 = 'cvemc';
                    organisms[i].complextab = '1263720';
                    organisms[i].taxid = '1263720';
                    break;

                  case 'Human betacoronavirus 2c EMC/2012':
                    organisms[i].scientificName = organisms[i].name;
                    organisms[i].nameDetails = '';
                    organisms[i].symbol = 'v';
                    organisms[i].type = 'virus';
                    organisms[i].psi25 = 'Human_betacoronavirus_2c_EMC_2012';
                    organisms[i].psi30 = 'cv2ce';
                    organisms[i].complextab = '1235996';
                    organisms[i].taxid = '1235996';
                    break;

                  default:
                    organisms[i].scientificName = organisms[i].name;
                    organisms[i].nameDetails = '';
                    organisms[i].symbol = '?';
                    organisms[i].type = 'none';
                    organisms[i].psi25 = '';
                    organisms[i].psi30 = '';
                    organisms[i].complextab = '';
                    organisms[i].taxid = '';
                }
              }

              _this3._organisms = organisms;
            });
          }
        }, {
          key: "organisms",
          get: function get() {
            return this._organisms;
          }
        }, {
          key: "query",
          get: function get() {
            return this._query;
          }
        }]);

        return ComplexOrganismsComponent;
      }();

      _ComplexOrganismsComponent.ctorParameters = function () {
        return [{
          type: _shared_service_complex_portal_service__WEBPACK_IMPORTED_MODULE_3__.ComplexPortalService
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.Title
        }];
      };

      _ComplexOrganismsComponent = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'cp-complex-organisms',
        template: _Users_eragueneau_WebstormProjects_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_complex_organisms_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_complex_organisms_component_css__WEBPACK_IMPORTED_MODULE_1__]
      })], _ComplexOrganismsComponent);
      /***/
    },

    /***/
    15563:
    /*!***********************************************************************!*\
      !*** ./src/app/complex/complex-organisms/complex-organisms.module.ts ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ComplexOrganismsModule": function ComplexOrganismsModule() {
          return (
            /* binding */
            _ComplexOrganismsModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _complex_organism_complex_organism_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./complex-organism/complex-organism.component */
      26807);
      /* harmony import */


      var _complex_organisms_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./complex-organisms.component */
      95970);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _shared_loading_indicators_progress_spinner_progress_spinner_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../shared/loading-indicators/progress-spinner/progress-spinner.module */
      45103);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      70781);

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var _ComplexOrganismsModule = function ComplexOrganismsModule() {
        _classCallCheck(this, ComplexOrganismsModule);
      };

      _ComplexOrganismsModule = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild([{
          path: '',
          component: _complex_organisms_component__WEBPACK_IMPORTED_MODULE_1__.ComplexOrganismsComponent
        }]), _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _shared_loading_indicators_progress_spinner_progress_spinner_module__WEBPACK_IMPORTED_MODULE_2__.ProgressSpinnerModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule],
        declarations: [_complex_organisms_component__WEBPACK_IMPORTED_MODULE_1__.ComplexOrganismsComponent, _complex_organism_complex_organism_component__WEBPACK_IMPORTED_MODULE_0__.ComplexOrganismComponent]
      })], _ComplexOrganismsModule);
      /***/
    },

    /***/
    22675:
    /*!***********************************************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/complex/complex-organisms/complex-organism/complex-organism.component.html ***!
      \***********************************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"card\" *ngIf=\"organism.symbol\">\n  <div class=\"medium-12\">\n    <b>{{organism.scientificName}}</b><br>\n    {{organism.nameDetails}}\n  </div>\n  <a href=\"https://www.uniprot.org/taxonomy/{{organism.taxid}}\" target=\"_blank\">{{organism.taxid}}</a>\n\n  <div class=\"flex-spacer\"></div>\n\n  <div class=\"medium-12\" style=\"text-align: center\">\n    <button (click)=\"search(organism.name)\" class=\"species-button\">\n      <div class=\"icon asset-icon\" *ngIf=\"organism.symbol.startsWith('assets'); else fontIcon\"\n           [style]=\"maskStyle\">\n\n      </div>\n      <ng-template #fontIcon style=\"mask: 5px; accent-color: #0a0a0a\">\n        <span [attr.data-icon]=\"organism.symbol\" style=\"color: var(--primary)\"\n              [ngClass]=\"{'icon ': true,'icon-species': organism.symbol !== '?', 'icon-functional': organism.symbol === '?'}\">\n        </span>\n      </ng-template>\n\n      <br>{{organism.count}}\n    </button>\n  </div>\n  <div class=\"actions\">\n    <button mat-raised-button color=\"primary\" (click)=\"goToComplexPSI25()\">miXML 2.5</button>\n    <button mat-raised-button color=\"primary\" (click)=\"goToComplexPSI30()\">miXML 3.0</button>\n  </div>\n  <div class=\"actions margin-top-small\">\n    <button mat-raised-button color=\"primary\" (click)=\"goToComplexTAB()\">ComplexTab</button>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    92673:
    /*!*******************************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/complex/complex-organisms/complex-organisms.component.html ***!
      \*******************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"columns margin-top-large margin-bottom-large\">\n  <h1>Organisms</h1>\n  <ng-container *ngIf=\"organisms;else loadingSpinner\">\n    <div class=\"columns medium-12\" style=\"display: grid; grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr)); grid-gap: 1rem;\">\n      <div class=\"medium-12\" *ngFor=\"let organism of organisms\" style=\"break-inside: avoid-column\">\n        <cp-complex-organism [organism]=\"organism\"></cp-complex-organism>\n      </div>\n    </div>\n  </ng-container>\n  <ng-template #loadingSpinner>\n    <cp-progress-spinner [query]=\"query\"></cp-progress-spinner>\n  </ng-template>\n</div>\n\n";
      /***/
    },

    /***/
    22137:
    /*!*******************************************************************************************!*\
      !*** ./src/app/complex/complex-organisms/complex-organism/complex-organism.component.css ***!
      \*******************************************************************************************/

    /***/
    function _(module) {
      module.exports = ".icon {\n  font-size: 100px;\n  color: var(--primary);\n}\n\n.asset-icon {\n  width: 100px;\n  height: 101px;\n  background-color: var(--primary);\n}\n\na {\n  align-self: center;\n}\n\n.card {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);\n  padding: 1.5em 1em;\n  border-radius: 12px;\n  height: 100%;\n}\n\n.flex-spacer {\n  flex: 1;\n}\n\ndiv.actions {\n  text-align: center;\n}\n\n.species-button {\n  padding: 1em;\n  color: var(--primary);\n  border-radius: 20%;\n  margin: 1em;\n  border: none;\n  cursor: pointer;\n}\n\n.species-button:hover {\n  opacity: 0.9;\n  box-shadow: 0 0 20px var(--primary);\n}\n\nbutton.download-button {\n  border: 2px solid var(--primary);\n  border-radius: 25px;\n  color: var(--primary);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBsZXgtb3JnYW5pc20uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHdDQUF3QztFQUN4QyxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLE9BQU87QUFDVDs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJjb21wbGV4LW9yZ2FuaXNtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWNvbiB7XG4gIGZvbnQtc2l6ZTogMTAwcHg7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbn1cblxuLmFzc2V0LWljb24ge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xufVxuXG5hIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4uY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMCAwIDVweCAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgcGFkZGluZzogMS41ZW0gMWVtO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5mbGV4LXNwYWNlciB7XG4gIGZsZXg6IDE7XG59XG5cbmRpdi5hY3Rpb25zIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc3BlY2llcy1idXR0b24ge1xuICBwYWRkaW5nOiAxZW07XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czogMjAlO1xuICBtYXJnaW46IDFlbTtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zcGVjaWVzLWJ1dHRvbjpob3ZlciB7XG4gIG9wYWNpdHk6IDAuOTtcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggdmFyKC0tcHJpbWFyeSk7XG59XG5cbmJ1dHRvbi5kb3dubG9hZC1idXR0b24ge1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xufVxuIl19 */";
      /***/
    },

    /***/
    26201:
    /*!***************************************************************************!*\
      !*** ./src/app/complex/complex-organisms/complex-organisms.component.css ***!
      \***************************************************************************/

    /***/
    function _(module) {
      module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wbGV4LW9yZ2FuaXNtcy5jb21wb25lbnQuY3NzIn0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_complex_complex-organisms_complex-organisms_module_ts-es5.js.map