import {
  AnalyticsService
} from "./chunk-VAAOO3WK.js";
import {
  SpeciesPipe
} from "./chunk-JD75RUVK.js";
import {
  ANIMATION_MODULE_TYPE,
  ApplicationRef,
  Component,
  ComponentFactoryResolver$1,
  DOCUMENT,
  Directive,
  DomSanitizer,
  ElementRef,
  EventEmitter,
  FactoryTarget,
  HostBinding,
  HostListener,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  NgIf,
  NgModule,
  NgZone,
  RendererFactory2,
  RuntimeError,
  SecurityContext,
  Subject,
  ViewEncapsulation$1,
  __publicField,
  __spreadProps,
  __spreadValues,
  core_exports,
  inject,
  makeEnvironmentProviders,
  ɵɵngDeclareClassMetadata,
  ɵɵngDeclareComponent,
  ɵɵngDeclareDirective,
  ɵɵngDeclareFactory,
  ɵɵngDeclareInjectable,
  ɵɵngDeclareInjector,
  ɵɵngDeclareNgModule
} from "./chunk-I4WWFSLP.js";

// node_modules/@angular/animations/fesm2022/animations.mjs
var AnimationMetadataType;
(function(AnimationMetadataType2) {
  AnimationMetadataType2[AnimationMetadataType2["State"] = 0] = "State";
  AnimationMetadataType2[AnimationMetadataType2["Transition"] = 1] = "Transition";
  AnimationMetadataType2[AnimationMetadataType2["Sequence"] = 2] = "Sequence";
  AnimationMetadataType2[AnimationMetadataType2["Group"] = 3] = "Group";
  AnimationMetadataType2[AnimationMetadataType2["Animate"] = 4] = "Animate";
  AnimationMetadataType2[AnimationMetadataType2["Keyframes"] = 5] = "Keyframes";
  AnimationMetadataType2[AnimationMetadataType2["Style"] = 6] = "Style";
  AnimationMetadataType2[AnimationMetadataType2["Trigger"] = 7] = "Trigger";
  AnimationMetadataType2[AnimationMetadataType2["Reference"] = 8] = "Reference";
  AnimationMetadataType2[AnimationMetadataType2["AnimateChild"] = 9] = "AnimateChild";
  AnimationMetadataType2[AnimationMetadataType2["AnimateRef"] = 10] = "AnimateRef";
  AnimationMetadataType2[AnimationMetadataType2["Query"] = 11] = "Query";
  AnimationMetadataType2[AnimationMetadataType2["Stagger"] = 12] = "Stagger";
})(AnimationMetadataType || (AnimationMetadataType = {}));
var AUTO_STYLE = "*";
function trigger(name, definitions) {
  return {
    type: AnimationMetadataType.Trigger,
    name,
    definitions,
    options: {}
  };
}
function animate(timings, styles = null) {
  return {
    type: AnimationMetadataType.Animate,
    styles,
    timings
  };
}
function sequence(steps, options = null) {
  return {
    type: AnimationMetadataType.Sequence,
    steps,
    options
  };
}
function style(tokens) {
  return {
    type: AnimationMetadataType.Style,
    styles: tokens,
    offset: null
  };
}
function state(name, styles, options) {
  return {
    type: AnimationMetadataType.State,
    name,
    styles,
    options
  };
}
function transition(stateChangeExpr, steps, options = null) {
  return {
    type: AnimationMetadataType.Transition,
    expr: stateChangeExpr,
    animation: steps,
    options
  };
}
var _AnimationBuilder = class _AnimationBuilder {
};
_AnimationBuilder.\u0275fac = \u0275\u0275ngDeclareFactory({
  minVersion: "12.0.0",
  version: "18.1.4",
  ngImport: core_exports,
  type: _AnimationBuilder,
  deps: [],
  target: FactoryTarget.Injectable
});
_AnimationBuilder.\u0275prov = \u0275\u0275ngDeclareInjectable({
  minVersion: "12.0.0",
  version: "18.1.4",
  ngImport: core_exports,
  type: _AnimationBuilder,
  providedIn: "root",
  useFactory: () => inject(BrowserAnimationBuilder)
});
var AnimationBuilder = _AnimationBuilder;
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.1.4",
  ngImport: core_exports,
  type: AnimationBuilder,
  decorators: [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => inject(BrowserAnimationBuilder)
    }]
  }]
});
var AnimationFactory = class {
};
var _BrowserAnimationBuilder = class _BrowserAnimationBuilder extends AnimationBuilder {
  constructor(rootRenderer, doc) {
    super();
    this.animationModuleType = inject(ANIMATION_MODULE_TYPE, {
      optional: true
    });
    this._nextAnimationId = 0;
    const typeData = {
      id: "0",
      encapsulation: ViewEncapsulation$1.None,
      styles: [],
      data: {
        animation: []
      }
    };
    this._renderer = rootRenderer.createRenderer(doc.body, typeData);
    if (this.animationModuleType === null && !isAnimationRenderer(this._renderer)) {
      throw new RuntimeError(3600, (typeof ngDevMode === "undefined" || ngDevMode) && "Angular detected that the `AnimationBuilder` was injected, but animation support was not enabled. Please make sure that you enable animations in your application by calling `provideAnimations()` or `provideAnimationsAsync()` function.");
    }
  }
  build(animation) {
    const id = this._nextAnimationId;
    this._nextAnimationId++;
    const entry = Array.isArray(animation) ? sequence(animation) : animation;
    issueAnimationCommand(this._renderer, null, id, "register", [entry]);
    return new BrowserAnimationFactory(id, this._renderer);
  }
};
_BrowserAnimationBuilder.\u0275fac = \u0275\u0275ngDeclareFactory({
  minVersion: "12.0.0",
  version: "18.1.4",
  ngImport: core_exports,
  type: _BrowserAnimationBuilder,
  deps: [{
    token: RendererFactory2
  }, {
    token: DOCUMENT
  }],
  target: FactoryTarget.Injectable
});
_BrowserAnimationBuilder.\u0275prov = \u0275\u0275ngDeclareInjectable({
  minVersion: "12.0.0",
  version: "18.1.4",
  ngImport: core_exports,
  type: _BrowserAnimationBuilder,
  providedIn: "root"
});
var BrowserAnimationBuilder = _BrowserAnimationBuilder;
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.1.4",
  ngImport: core_exports,
  type: BrowserAnimationBuilder,
  decorators: [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }],
  ctorParameters: () => [{
    type: RendererFactory2
  }, {
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }]
});
var BrowserAnimationFactory = class extends AnimationFactory {
  constructor(_id, _renderer) {
    super();
    this._id = _id;
    this._renderer = _renderer;
  }
  create(element, options) {
    return new RendererAnimationPlayer(this._id, element, options || {}, this._renderer);
  }
};
var RendererAnimationPlayer = class {
  constructor(id, element, options, _renderer) {
    this.id = id;
    this.element = element;
    this._renderer = _renderer;
    this.parentPlayer = null;
    this._started = false;
    this.totalTime = 0;
    this._command("create", options);
  }
  _listen(eventName, callback) {
    return this._renderer.listen(this.element, `@@${this.id}:${eventName}`, callback);
  }
  _command(command, ...args) {
    issueAnimationCommand(this._renderer, this.element, this.id, command, args);
  }
  onDone(fn) {
    this._listen("done", fn);
  }
  onStart(fn) {
    this._listen("start", fn);
  }
  onDestroy(fn) {
    this._listen("destroy", fn);
  }
  init() {
    this._command("init");
  }
  hasStarted() {
    return this._started;
  }
  play() {
    this._command("play");
    this._started = true;
  }
  pause() {
    this._command("pause");
  }
  restart() {
    this._command("restart");
  }
  finish() {
    this._command("finish");
  }
  destroy() {
    this._command("destroy");
  }
  reset() {
    this._command("reset");
    this._started = false;
  }
  setPosition(p) {
    this._command("setPosition", p);
  }
  getPosition() {
    return unwrapAnimationRenderer(this._renderer)?.engine?.players[this.id]?.getPosition() ?? 0;
  }
};
function issueAnimationCommand(renderer, element, id, command, args) {
  renderer.setProperty(element, `@@${id}:${command}`, args);
}
function unwrapAnimationRenderer(renderer) {
  const type = renderer.\u0275type;
  if (type === 0) {
    return renderer;
  } else if (type === 1) {
    return renderer.animationRenderer;
  }
  return null;
}
function isAnimationRenderer(renderer) {
  const type = renderer.\u0275type;
  return type === 0 || type === 1;
}
var NoopAnimationPlayer = class {
  constructor(duration = 0, delay = 0) {
    this._onDoneFns = [];
    this._onStartFns = [];
    this._onDestroyFns = [];
    this._originalOnDoneFns = [];
    this._originalOnStartFns = [];
    this._started = false;
    this._destroyed = false;
    this._finished = false;
    this._position = 0;
    this.parentPlayer = null;
    this.totalTime = duration + delay;
  }
  _onFinish() {
    if (!this._finished) {
      this._finished = true;
      this._onDoneFns.forEach((fn) => fn());
      this._onDoneFns = [];
    }
  }
  onStart(fn) {
    this._originalOnStartFns.push(fn);
    this._onStartFns.push(fn);
  }
  onDone(fn) {
    this._originalOnDoneFns.push(fn);
    this._onDoneFns.push(fn);
  }
  onDestroy(fn) {
    this._onDestroyFns.push(fn);
  }
  hasStarted() {
    return this._started;
  }
  init() {
  }
  play() {
    if (!this.hasStarted()) {
      this._onStart();
      this.triggerMicrotask();
    }
    this._started = true;
  }
  /** @internal */
  triggerMicrotask() {
    queueMicrotask(() => this._onFinish());
  }
  _onStart() {
    this._onStartFns.forEach((fn) => fn());
    this._onStartFns = [];
  }
  pause() {
  }
  restart() {
  }
  finish() {
    this._onFinish();
  }
  destroy() {
    if (!this._destroyed) {
      this._destroyed = true;
      if (!this.hasStarted()) {
        this._onStart();
      }
      this.finish();
      this._onDestroyFns.forEach((fn) => fn());
      this._onDestroyFns = [];
    }
  }
  reset() {
    this._started = false;
    this._finished = false;
    this._onStartFns = this._originalOnStartFns;
    this._onDoneFns = this._originalOnDoneFns;
  }
  setPosition(position) {
    this._position = this.totalTime ? position * this.totalTime : 1;
  }
  getPosition() {
    return this.totalTime ? this._position / this.totalTime : 1;
  }
  /** @internal */
  triggerCallback(phaseName) {
    const methods = phaseName == "start" ? this._onStartFns : this._onDoneFns;
    methods.forEach((fn) => fn());
    methods.length = 0;
  }
};
var AnimationGroupPlayer = class {
  constructor(_players) {
    this._onDoneFns = [];
    this._onStartFns = [];
    this._finished = false;
    this._started = false;
    this._destroyed = false;
    this._onDestroyFns = [];
    this.parentPlayer = null;
    this.totalTime = 0;
    this.players = _players;
    let doneCount = 0;
    let destroyCount = 0;
    let startCount = 0;
    const total = this.players.length;
    if (total == 0) {
      queueMicrotask(() => this._onFinish());
    } else {
      this.players.forEach((player) => {
        player.onDone(() => {
          if (++doneCount == total) {
            this._onFinish();
          }
        });
        player.onDestroy(() => {
          if (++destroyCount == total) {
            this._onDestroy();
          }
        });
        player.onStart(() => {
          if (++startCount == total) {
            this._onStart();
          }
        });
      });
    }
    this.totalTime = this.players.reduce((time, player) => Math.max(time, player.totalTime), 0);
  }
  _onFinish() {
    if (!this._finished) {
      this._finished = true;
      this._onDoneFns.forEach((fn) => fn());
      this._onDoneFns = [];
    }
  }
  init() {
    this.players.forEach((player) => player.init());
  }
  onStart(fn) {
    this._onStartFns.push(fn);
  }
  _onStart() {
    if (!this.hasStarted()) {
      this._started = true;
      this._onStartFns.forEach((fn) => fn());
      this._onStartFns = [];
    }
  }
  onDone(fn) {
    this._onDoneFns.push(fn);
  }
  onDestroy(fn) {
    this._onDestroyFns.push(fn);
  }
  hasStarted() {
    return this._started;
  }
  play() {
    if (!this.parentPlayer) {
      this.init();
    }
    this._onStart();
    this.players.forEach((player) => player.play());
  }
  pause() {
    this.players.forEach((player) => player.pause());
  }
  restart() {
    this.players.forEach((player) => player.restart());
  }
  finish() {
    this._onFinish();
    this.players.forEach((player) => player.finish());
  }
  destroy() {
    this._onDestroy();
  }
  _onDestroy() {
    if (!this._destroyed) {
      this._destroyed = true;
      this._onFinish();
      this.players.forEach((player) => player.destroy());
      this._onDestroyFns.forEach((fn) => fn());
      this._onDestroyFns = [];
    }
  }
  reset() {
    this.players.forEach((player) => player.reset());
    this._destroyed = false;
    this._finished = false;
    this._started = false;
  }
  setPosition(p) {
    const timeAtPosition = p * this.totalTime;
    this.players.forEach((player) => {
      const position = player.totalTime ? Math.min(1, timeAtPosition / player.totalTime) : 1;
      player.setPosition(position);
    });
  }
  getPosition() {
    const longestPlayer = this.players.reduce((longestSoFar, player) => {
      const newPlayerIsLongest = longestSoFar === null || player.totalTime > longestSoFar.totalTime;
      return newPlayerIsLongest ? player : longestSoFar;
    }, null);
    return longestPlayer != null ? longestPlayer.getPosition() : 0;
  }
  beforeDestroy() {
    this.players.forEach((player) => {
      if (player.beforeDestroy) {
        player.beforeDestroy();
      }
    });
  }
  /** @internal */
  triggerCallback(phaseName) {
    const methods = phaseName == "start" ? this._onStartFns : this._onDoneFns;
    methods.forEach((fn) => fn());
    methods.length = 0;
  }
};
var \u0275PRE_STYLE = "!";

// node_modules/ngx-toastr/fesm2022/ngx-toastr.mjs
var _ToastContainerDirective = class _ToastContainerDirective {
  constructor(el) {
    __publicField(this, "el");
    this.el = el;
  }
  getContainerElement() {
    return this.el.nativeElement;
  }
};
__publicField(_ToastContainerDirective, "\u0275fac", \u0275\u0275ngDeclareFactory({
  minVersion: "12.0.0",
  version: "17.0.3",
  ngImport: core_exports,
  type: _ToastContainerDirective,
  deps: [{
    token: ElementRef
  }],
  target: FactoryTarget.Directive
}));
__publicField(_ToastContainerDirective, "\u0275dir", \u0275\u0275ngDeclareDirective({
  minVersion: "14.0.0",
  version: "17.0.3",
  type: _ToastContainerDirective,
  isStandalone: true,
  selector: "[toastContainer]",
  exportAs: ["toastContainer"],
  ngImport: core_exports
}));
var ToastContainerDirective = _ToastContainerDirective;
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "17.0.3",
  ngImport: core_exports,
  type: ToastContainerDirective,
  decorators: [{
    type: Directive,
    args: [{
      selector: "[toastContainer]",
      exportAs: "toastContainer",
      standalone: true
    }]
  }],
  ctorParameters: () => [{
    type: ElementRef
  }]
});
var ComponentPortal = class {
  constructor(component, injector) {
    __publicField(this, "_attachedHost");
    /** The type of the component that will be instantiated for attachment. */
    __publicField(this, "component");
    /**
     * [Optional] Where the attached component should live in Angular's *logical* component tree.
     * This is different from where the component *renders*, which is determined by the PortalHost.
     * The origin necessary when the host is outside of the Angular application context.
     */
    __publicField(this, "viewContainerRef");
    /** Injector used for the instantiation of the component. */
    __publicField(this, "injector");
    this.component = component;
    this.injector = injector;
  }
  /** Attach this portal to a host. */
  attach(host, newestOnTop) {
    this._attachedHost = host;
    return host.attach(this, newestOnTop);
  }
  /** Detach this portal from its host */
  detach() {
    const host = this._attachedHost;
    if (host) {
      this._attachedHost = void 0;
      return host.detach();
    }
  }
  /** Whether this portal is attached to a host. */
  get isAttached() {
    return this._attachedHost != null;
  }
  /**
   * Sets the PortalHost reference without performing `attach()`. This is used directly by
   * the PortalHost when it is performing an `attach()` or `detach()`.
   */
  setAttachedHost(host) {
    this._attachedHost = host;
  }
};
var BasePortalHost = class {
  constructor() {
    /** The portal currently attached to the host. */
    __publicField(this, "_attachedPortal");
    /** A function that will permanently dispose this host. */
    __publicField(this, "_disposeFn");
  }
  attach(portal, newestOnTop) {
    this._attachedPortal = portal;
    return this.attachComponentPortal(portal, newestOnTop);
  }
  detach() {
    if (this._attachedPortal) {
      this._attachedPortal.setAttachedHost();
    }
    this._attachedPortal = void 0;
    if (this._disposeFn) {
      this._disposeFn();
      this._disposeFn = void 0;
    }
  }
  setDisposeFn(fn) {
    this._disposeFn = fn;
  }
};
var ToastRef = class {
  constructor(_overlayRef) {
    __publicField(this, "_overlayRef");
    /** The instance of component opened into the toast. */
    __publicField(this, "componentInstance");
    /** Count of duplicates of this toast */
    __publicField(this, "duplicatesCount", 0);
    /** Subject for notifying the user that the toast has finished closing. */
    __publicField(this, "_afterClosed", new Subject());
    /** triggered when toast is activated */
    __publicField(this, "_activate", new Subject());
    /** notifies the toast that it should close before the timeout */
    __publicField(this, "_manualClose", new Subject());
    /** notifies the toast that it should reset the timeouts */
    __publicField(this, "_resetTimeout", new Subject());
    /** notifies the toast that it should count a duplicate toast */
    __publicField(this, "_countDuplicate", new Subject());
    this._overlayRef = _overlayRef;
  }
  manualClose() {
    this._manualClose.next();
    this._manualClose.complete();
  }
  manualClosed() {
    return this._manualClose.asObservable();
  }
  timeoutReset() {
    return this._resetTimeout.asObservable();
  }
  countDuplicate() {
    return this._countDuplicate.asObservable();
  }
  /**
   * Close the toast.
   */
  close() {
    this._overlayRef.detach();
    this._afterClosed.next();
    this._manualClose.next();
    this._afterClosed.complete();
    this._manualClose.complete();
    this._activate.complete();
    this._resetTimeout.complete();
    this._countDuplicate.complete();
  }
  /** Gets an observable that is notified when the toast is finished closing. */
  afterClosed() {
    return this._afterClosed.asObservable();
  }
  isInactive() {
    return this._activate.isStopped;
  }
  activate() {
    this._activate.next();
    this._activate.complete();
  }
  /** Gets an observable that is notified when the toast has started opening. */
  afterActivate() {
    return this._activate.asObservable();
  }
  /** Reset the toast timouts and count duplicates */
  onDuplicate(resetTimeout, countDuplicate) {
    if (resetTimeout) {
      this._resetTimeout.next();
    }
    if (countDuplicate) {
      this._countDuplicate.next(++this.duplicatesCount);
    }
  }
};
var ToastPackage = class {
  constructor(toastId, config, message, title, toastType, toastRef) {
    __publicField(this, "toastId");
    __publicField(this, "config");
    __publicField(this, "message");
    __publicField(this, "title");
    __publicField(this, "toastType");
    __publicField(this, "toastRef");
    __publicField(this, "_onTap", new Subject());
    __publicField(this, "_onAction", new Subject());
    this.toastId = toastId;
    this.config = config;
    this.message = message;
    this.title = title;
    this.toastType = toastType;
    this.toastRef = toastRef;
    this.toastRef.afterClosed().subscribe(() => {
      this._onAction.complete();
      this._onTap.complete();
    });
  }
  /** Fired on click */
  triggerTap() {
    this._onTap.next();
    if (this.config.tapToDismiss) {
      this._onTap.complete();
    }
  }
  onTap() {
    return this._onTap.asObservable();
  }
  /** available for use in custom toast */
  triggerAction(action) {
    this._onAction.next(action);
  }
  onAction() {
    return this._onAction.asObservable();
  }
};
var DefaultNoComponentGlobalConfig = {
  maxOpened: 0,
  autoDismiss: false,
  newestOnTop: true,
  preventDuplicates: false,
  countDuplicates: false,
  resetTimeoutOnDuplicate: false,
  includeTitleDuplicates: false,
  iconClasses: {
    error: "toast-error",
    info: "toast-info",
    success: "toast-success",
    warning: "toast-warning"
  },
  // Individual
  closeButton: false,
  disableTimeOut: false,
  timeOut: 5e3,
  extendedTimeOut: 1e3,
  enableHtml: false,
  progressBar: false,
  toastClass: "ngx-toastr",
  positionClass: "toast-top-right",
  titleClass: "toast-title",
  messageClass: "toast-message",
  easing: "ease-in",
  easeTime: 300,
  tapToDismiss: true,
  onActivateTick: false,
  progressAnimation: "decreasing"
};
var TOAST_CONFIG = new InjectionToken("ToastConfig");
var DomPortalHost = class extends BasePortalHost {
  constructor(_hostDomElement, _componentFactoryResolver, _appRef) {
    super();
    __publicField(this, "_hostDomElement");
    __publicField(this, "_componentFactoryResolver");
    __publicField(this, "_appRef");
    this._hostDomElement = _hostDomElement;
    this._componentFactoryResolver = _componentFactoryResolver;
    this._appRef = _appRef;
  }
  /**
   * Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver.
   * @param portal Portal to be attached
   */
  attachComponentPortal(portal, newestOnTop) {
    const componentFactory = this._componentFactoryResolver.resolveComponentFactory(portal.component);
    let componentRef;
    componentRef = componentFactory.create(portal.injector);
    this._appRef.attachView(componentRef.hostView);
    this.setDisposeFn(() => {
      this._appRef.detachView(componentRef.hostView);
      componentRef.destroy();
    });
    if (newestOnTop) {
      this._hostDomElement.insertBefore(this._getComponentRootNode(componentRef), this._hostDomElement.firstChild);
    } else {
      this._hostDomElement.appendChild(this._getComponentRootNode(componentRef));
    }
    return componentRef;
  }
  /** Gets the root HTMLElement for an instantiated component. */
  _getComponentRootNode(componentRef) {
    return componentRef.hostView.rootNodes[0];
  }
};
var _OverlayContainer = class _OverlayContainer {
  constructor() {
    __publicField(this, "_document", inject(DOCUMENT));
    __publicField(this, "_containerElement");
  }
  ngOnDestroy() {
    if (this._containerElement && this._containerElement.parentNode) {
      this._containerElement.parentNode.removeChild(this._containerElement);
    }
  }
  /**
   * This method returns the overlay container element. It will lazily
   * create the element the first time  it is called to facilitate using
   * the container in non-browser environments.
   * @returns the container element
   */
  getContainerElement() {
    if (!this._containerElement) {
      this._createContainer();
    }
    return this._containerElement;
  }
  /**
   * Create the overlay container element, which is simply a div
   * with the 'cdk-overlay-container' class on the document body
   * and 'aria-live="polite"'
   */
  _createContainer() {
    const container = this._document.createElement("div");
    container.classList.add("overlay-container");
    container.setAttribute("aria-live", "polite");
    this._document.body.appendChild(container);
    this._containerElement = container;
  }
};
__publicField(_OverlayContainer, "\u0275fac", \u0275\u0275ngDeclareFactory({
  minVersion: "12.0.0",
  version: "17.0.3",
  ngImport: core_exports,
  type: _OverlayContainer,
  deps: [],
  target: FactoryTarget.Injectable
}));
__publicField(_OverlayContainer, "\u0275prov", \u0275\u0275ngDeclareInjectable({
  minVersion: "12.0.0",
  version: "17.0.3",
  ngImport: core_exports,
  type: _OverlayContainer,
  providedIn: "root"
}));
var OverlayContainer = _OverlayContainer;
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "17.0.3",
  ngImport: core_exports,
  type: OverlayContainer,
  decorators: [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }]
});
var OverlayRef = class {
  constructor(_portalHost) {
    __publicField(this, "_portalHost");
    this._portalHost = _portalHost;
  }
  attach(portal, newestOnTop = true) {
    return this._portalHost.attach(portal, newestOnTop);
  }
  /**
   * Detaches an overlay from a portal.
   * @returns Resolves when the overlay has been detached.
   */
  detach() {
    return this._portalHost.detach();
  }
};
var _Overlay = class _Overlay {
  constructor() {
    __publicField(this, "_overlayContainer", inject(OverlayContainer));
    __publicField(this, "_componentFactoryResolver", inject(ComponentFactoryResolver$1));
    __publicField(this, "_appRef", inject(ApplicationRef));
    __publicField(this, "_document", inject(DOCUMENT));
    // Namespace panes by overlay container
    __publicField(this, "_paneElements", /* @__PURE__ */ new Map());
  }
  /**
   * Creates an overlay.
   * @returns A reference to the created overlay.
   */
  create(positionClass, overlayContainer) {
    return this._createOverlayRef(this.getPaneElement(positionClass, overlayContainer));
  }
  getPaneElement(positionClass = "", overlayContainer) {
    if (!this._paneElements.get(overlayContainer)) {
      this._paneElements.set(overlayContainer, {});
    }
    if (!this._paneElements.get(overlayContainer)[positionClass]) {
      this._paneElements.get(overlayContainer)[positionClass] = this._createPaneElement(positionClass, overlayContainer);
    }
    return this._paneElements.get(overlayContainer)[positionClass];
  }
  /**
   * Creates the DOM element for an overlay and appends it to the overlay container.
   * @returns Newly-created pane element
   */
  _createPaneElement(positionClass, overlayContainer) {
    const pane = this._document.createElement("div");
    pane.id = "toast-container";
    pane.classList.add(positionClass);
    pane.classList.add("toast-container");
    if (!overlayContainer) {
      this._overlayContainer.getContainerElement().appendChild(pane);
    } else {
      overlayContainer.getContainerElement().appendChild(pane);
    }
    return pane;
  }
  /**
   * Create a DomPortalHost into which the overlay content can be loaded.
   * @param pane The DOM element to turn into a portal host.
   * @returns A portal host for the given DOM element.
   */
  _createPortalHost(pane) {
    return new DomPortalHost(pane, this._componentFactoryResolver, this._appRef);
  }
  /**
   * Creates an OverlayRef for an overlay in the given DOM element.
   * @param pane DOM element for the overlay
   */
  _createOverlayRef(pane) {
    return new OverlayRef(this._createPortalHost(pane));
  }
};
__publicField(_Overlay, "\u0275fac", \u0275\u0275ngDeclareFactory({
  minVersion: "12.0.0",
  version: "17.0.3",
  ngImport: core_exports,
  type: _Overlay,
  deps: [],
  target: FactoryTarget.Injectable
}));
__publicField(_Overlay, "\u0275prov", \u0275\u0275ngDeclareInjectable({
  minVersion: "12.0.0",
  version: "17.0.3",
  ngImport: core_exports,
  type: _Overlay,
  providedIn: "root"
}));
var Overlay = _Overlay;
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "17.0.3",
  ngImport: core_exports,
  type: Overlay,
  decorators: [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }]
});
var _ToastrService = class _ToastrService {
  constructor(token, overlay, _injector, sanitizer, ngZone) {
    __publicField(this, "overlay");
    __publicField(this, "_injector");
    __publicField(this, "sanitizer");
    __publicField(this, "ngZone");
    __publicField(this, "toastrConfig");
    __publicField(this, "currentlyActive", 0);
    __publicField(this, "toasts", []);
    __publicField(this, "overlayContainer");
    __publicField(this, "previousToastMessage");
    __publicField(this, "index", 0);
    this.overlay = overlay;
    this._injector = _injector;
    this.sanitizer = sanitizer;
    this.ngZone = ngZone;
    this.toastrConfig = __spreadValues(__spreadValues({}, token.default), token.config);
    if (token.config.iconClasses) {
      this.toastrConfig.iconClasses = __spreadValues(__spreadValues({}, token.default.iconClasses), token.config.iconClasses);
    }
  }
  /** show toast */
  show(message, title, override = {}, type = "") {
    return this._preBuildNotification(type, message, title, this.applyConfig(override));
  }
  /** show successful toast */
  success(message, title, override = {}) {
    const type = this.toastrConfig.iconClasses.success || "";
    return this._preBuildNotification(type, message, title, this.applyConfig(override));
  }
  /** show error toast */
  error(message, title, override = {}) {
    const type = this.toastrConfig.iconClasses.error || "";
    return this._preBuildNotification(type, message, title, this.applyConfig(override));
  }
  /** show info toast */
  info(message, title, override = {}) {
    const type = this.toastrConfig.iconClasses.info || "";
    return this._preBuildNotification(type, message, title, this.applyConfig(override));
  }
  /** show warning toast */
  warning(message, title, override = {}) {
    const type = this.toastrConfig.iconClasses.warning || "";
    return this._preBuildNotification(type, message, title, this.applyConfig(override));
  }
  /**
   * Remove all or a single toast by id
   */
  clear(toastId) {
    for (const toast of this.toasts) {
      if (toastId !== void 0) {
        if (toast.toastId === toastId) {
          toast.toastRef.manualClose();
          return;
        }
      } else {
        toast.toastRef.manualClose();
      }
    }
  }
  /**
   * Remove and destroy a single toast by id
   */
  remove(toastId) {
    const found = this._findToast(toastId);
    if (!found) {
      return false;
    }
    found.activeToast.toastRef.close();
    this.toasts.splice(found.index, 1);
    this.currentlyActive = this.currentlyActive - 1;
    if (!this.toastrConfig.maxOpened || !this.toasts.length) {
      return false;
    }
    if (this.currentlyActive < this.toastrConfig.maxOpened && this.toasts[this.currentlyActive]) {
      const p = this.toasts[this.currentlyActive].toastRef;
      if (!p.isInactive()) {
        this.currentlyActive = this.currentlyActive + 1;
        p.activate();
      }
    }
    return true;
  }
  /**
   * Determines if toast message is already shown
   */
  findDuplicate(title = "", message = "", resetOnDuplicate, countDuplicates) {
    const {
      includeTitleDuplicates
    } = this.toastrConfig;
    for (const toast of this.toasts) {
      const hasDuplicateTitle = includeTitleDuplicates && toast.title === title;
      if ((!includeTitleDuplicates || hasDuplicateTitle) && toast.message === message) {
        toast.toastRef.onDuplicate(resetOnDuplicate, countDuplicates);
        return toast;
      }
    }
    return null;
  }
  /** create a clone of global config and apply individual settings */
  applyConfig(override = {}) {
    return __spreadValues(__spreadValues({}, this.toastrConfig), override);
  }
  /**
   * Find toast object by id
   */
  _findToast(toastId) {
    for (let i = 0; i < this.toasts.length; i++) {
      if (this.toasts[i].toastId === toastId) {
        return {
          index: i,
          activeToast: this.toasts[i]
        };
      }
    }
    return null;
  }
  /**
   * Determines the need to run inside angular's zone then builds the toast
   */
  _preBuildNotification(toastType, message, title, config) {
    if (config.onActivateTick) {
      return this.ngZone.run(() => this._buildNotification(toastType, message, title, config));
    }
    return this._buildNotification(toastType, message, title, config);
  }
  /**
   * Creates and attaches toast data to component
   * returns the active toast, or in case preventDuplicates is enabled the original/non-duplicate active toast.
   */
  _buildNotification(toastType, message, title, config) {
    if (!config.toastComponent) {
      throw new Error("toastComponent required");
    }
    const duplicate = this.findDuplicate(title, message, this.toastrConfig.resetTimeoutOnDuplicate && config.timeOut > 0, this.toastrConfig.countDuplicates);
    if ((this.toastrConfig.includeTitleDuplicates && title || message) && this.toastrConfig.preventDuplicates && duplicate !== null) {
      return duplicate;
    }
    this.previousToastMessage = message;
    let keepInactive = false;
    if (this.toastrConfig.maxOpened && this.currentlyActive >= this.toastrConfig.maxOpened) {
      keepInactive = true;
      if (this.toastrConfig.autoDismiss) {
        this.clear(this.toasts[0].toastId);
      }
    }
    const overlayRef = this.overlay.create(config.positionClass, this.overlayContainer);
    this.index = this.index + 1;
    let sanitizedMessage = message;
    if (message && config.enableHtml) {
      sanitizedMessage = this.sanitizer.sanitize(SecurityContext.HTML, message);
    }
    const toastRef = new ToastRef(overlayRef);
    const toastPackage = new ToastPackage(this.index, config, sanitizedMessage, title, toastType, toastRef);
    const providers = [{
      provide: ToastPackage,
      useValue: toastPackage
    }];
    const toastInjector = Injector.create({
      providers,
      parent: this._injector
    });
    const component = new ComponentPortal(config.toastComponent, toastInjector);
    const portal = overlayRef.attach(component, config.newestOnTop);
    toastRef.componentInstance = portal.instance;
    const ins = {
      toastId: this.index,
      title: title || "",
      message: message || "",
      toastRef,
      onShown: toastRef.afterActivate(),
      onHidden: toastRef.afterClosed(),
      onTap: toastPackage.onTap(),
      onAction: toastPackage.onAction(),
      portal
    };
    if (!keepInactive) {
      this.currentlyActive = this.currentlyActive + 1;
      setTimeout(() => {
        ins.toastRef.activate();
      });
    }
    this.toasts.push(ins);
    return ins;
  }
};
__publicField(_ToastrService, "\u0275fac", \u0275\u0275ngDeclareFactory({
  minVersion: "12.0.0",
  version: "17.0.3",
  ngImport: core_exports,
  type: _ToastrService,
  deps: [{
    token: TOAST_CONFIG
  }, {
    token: Overlay
  }, {
    token: Injector
  }, {
    token: DomSanitizer
  }, {
    token: NgZone
  }],
  target: FactoryTarget.Injectable
}));
__publicField(_ToastrService, "\u0275prov", \u0275\u0275ngDeclareInjectable({
  minVersion: "12.0.0",
  version: "17.0.3",
  ngImport: core_exports,
  type: _ToastrService,
  providedIn: "root"
}));
var ToastrService = _ToastrService;
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "17.0.3",
  ngImport: core_exports,
  type: ToastrService,
  decorators: [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }],
  ctorParameters: () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [TOAST_CONFIG]
    }]
  }, {
    type: Overlay
  }, {
    type: Injector
  }, {
    type: DomSanitizer
  }, {
    type: NgZone
  }]
});
var _Toast = class _Toast {
  constructor(toastrService, toastPackage, ngZone) {
    __publicField(this, "toastrService");
    __publicField(this, "toastPackage");
    __publicField(this, "ngZone");
    __publicField(this, "message");
    __publicField(this, "title");
    __publicField(this, "options");
    __publicField(this, "duplicatesCount");
    __publicField(this, "originalTimeout");
    /** width of progress bar */
    __publicField(this, "width", -1);
    /** a combination of toast type and options.toastClass */
    __publicField(this, "toastClasses", "");
    /** controls animation */
    __publicField(this, "state");
    __publicField(this, "timeout");
    __publicField(this, "intervalId");
    __publicField(this, "hideTime");
    __publicField(this, "sub");
    __publicField(this, "sub1");
    __publicField(this, "sub2");
    __publicField(this, "sub3");
    this.toastrService = toastrService;
    this.toastPackage = toastPackage;
    this.ngZone = ngZone;
    this.message = toastPackage.message;
    this.title = toastPackage.title;
    this.options = toastPackage.config;
    this.originalTimeout = toastPackage.config.timeOut;
    this.toastClasses = `${toastPackage.toastType} ${toastPackage.config.toastClass}`;
    this.sub = toastPackage.toastRef.afterActivate().subscribe(() => {
      this.activateToast();
    });
    this.sub1 = toastPackage.toastRef.manualClosed().subscribe(() => {
      this.remove();
    });
    this.sub2 = toastPackage.toastRef.timeoutReset().subscribe(() => {
      this.resetTimeout();
    });
    this.sub3 = toastPackage.toastRef.countDuplicate().subscribe((count) => {
      this.duplicatesCount = count;
    });
    this.state = {
      value: "inactive",
      params: {
        easeTime: this.toastPackage.config.easeTime,
        easing: "ease-in"
      }
    };
  }
  /** hides component when waiting to be displayed */
  get displayStyle() {
    if (this.state.value === "inactive") {
      return "none";
    }
    return;
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
    this.sub1.unsubscribe();
    this.sub2.unsubscribe();
    this.sub3.unsubscribe();
    clearInterval(this.intervalId);
    clearTimeout(this.timeout);
  }
  /**
   * activates toast and sets timeout
   */
  activateToast() {
    this.state = __spreadProps(__spreadValues({}, this.state), {
      value: "active"
    });
    if (!(this.options.disableTimeOut === true || this.options.disableTimeOut === "timeOut") && this.options.timeOut) {
      this.outsideTimeout(() => this.remove(), this.options.timeOut);
      this.hideTime = (/* @__PURE__ */ new Date()).getTime() + this.options.timeOut;
      if (this.options.progressBar) {
        this.outsideInterval(() => this.updateProgress(), 10);
      }
    }
  }
  /**
   * updates progress bar width
   */
  updateProgress() {
    if (this.width === 0 || this.width === 100 || !this.options.timeOut) {
      return;
    }
    const now = (/* @__PURE__ */ new Date()).getTime();
    const remaining = this.hideTime - now;
    this.width = remaining / this.options.timeOut * 100;
    if (this.options.progressAnimation === "increasing") {
      this.width = 100 - this.width;
    }
    if (this.width <= 0) {
      this.width = 0;
    }
    if (this.width >= 100) {
      this.width = 100;
    }
  }
  resetTimeout() {
    clearTimeout(this.timeout);
    clearInterval(this.intervalId);
    this.state = __spreadProps(__spreadValues({}, this.state), {
      value: "active"
    });
    this.outsideTimeout(() => this.remove(), this.originalTimeout);
    this.options.timeOut = this.originalTimeout;
    this.hideTime = (/* @__PURE__ */ new Date()).getTime() + (this.options.timeOut || 0);
    this.width = -1;
    if (this.options.progressBar) {
      this.outsideInterval(() => this.updateProgress(), 10);
    }
  }
  /**
   * tells toastrService to remove this toast after animation time
   */
  remove() {
    if (this.state.value === "removed") {
      return;
    }
    clearTimeout(this.timeout);
    this.state = __spreadProps(__spreadValues({}, this.state), {
      value: "removed"
    });
    this.outsideTimeout(() => this.toastrService.remove(this.toastPackage.toastId), +this.toastPackage.config.easeTime);
  }
  tapToast() {
    if (this.state.value === "removed") {
      return;
    }
    this.toastPackage.triggerTap();
    if (this.options.tapToDismiss) {
      this.remove();
    }
  }
  stickAround() {
    if (this.state.value === "removed") {
      return;
    }
    if (this.options.disableTimeOut !== "extendedTimeOut") {
      clearTimeout(this.timeout);
      this.options.timeOut = 0;
      this.hideTime = 0;
      clearInterval(this.intervalId);
      this.width = 0;
    }
  }
  delayedHideToast() {
    if (this.options.disableTimeOut === true || this.options.disableTimeOut === "extendedTimeOut" || this.options.extendedTimeOut === 0 || this.state.value === "removed") {
      return;
    }
    this.outsideTimeout(() => this.remove(), this.options.extendedTimeOut);
    this.options.timeOut = this.options.extendedTimeOut;
    this.hideTime = (/* @__PURE__ */ new Date()).getTime() + (this.options.timeOut || 0);
    this.width = -1;
    if (this.options.progressBar) {
      this.outsideInterval(() => this.updateProgress(), 10);
    }
  }
  outsideTimeout(func, timeout) {
    if (this.ngZone) {
      this.ngZone.runOutsideAngular(() => this.timeout = setTimeout(() => this.runInsideAngular(func), timeout));
    } else {
      this.timeout = setTimeout(() => func(), timeout);
    }
  }
  outsideInterval(func, timeout) {
    if (this.ngZone) {
      this.ngZone.runOutsideAngular(() => this.intervalId = setInterval(() => this.runInsideAngular(func), timeout));
    } else {
      this.intervalId = setInterval(() => func(), timeout);
    }
  }
  runInsideAngular(func) {
    if (this.ngZone) {
      this.ngZone.run(() => func());
    } else {
      func();
    }
  }
};
__publicField(_Toast, "\u0275fac", \u0275\u0275ngDeclareFactory({
  minVersion: "12.0.0",
  version: "17.0.3",
  ngImport: core_exports,
  type: _Toast,
  deps: [{
    token: ToastrService
  }, {
    token: ToastPackage
  }, {
    token: NgZone
  }],
  target: FactoryTarget.Component
}));
__publicField(_Toast, "\u0275cmp", \u0275\u0275ngDeclareComponent({
  minVersion: "14.0.0",
  version: "17.0.3",
  type: _Toast,
  isStandalone: true,
  selector: "[toast-component]",
  host: {
    listeners: {
      "click": "tapToast()",
      "mouseenter": "stickAround()",
      "mouseleave": "delayedHideToast()"
    },
    properties: {
      "class": "this.toastClasses",
      "@flyInOut": "this.state",
      "style.display": "this.displayStyle"
    }
  },
  ngImport: core_exports,
  template: `
  <button *ngIf="options.closeButton" (click)="remove()" type="button" class="toast-close-button" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
  <div *ngIf="title" [class]="options.titleClass" [attr.aria-label]="title">
    {{ title }} <ng-container *ngIf="duplicatesCount">[{{ duplicatesCount + 1 }}]</ng-container>
  </div>
  <div *ngIf="message && options.enableHtml" role="alert"
    [class]="options.messageClass" [innerHTML]="message">
  </div>
  <div *ngIf="message && !options.enableHtml" role="alert"
    [class]="options.messageClass" [attr.aria-label]="message">
    {{ message }}
  </div>
  <div *ngIf="options.progressBar">
    <div class="toast-progress" [style.width]="width + '%'"></div>
  </div>
  `,
  isInline: true,
  dependencies: [{
    kind: "directive",
    type: NgIf,
    selector: "[ngIf]",
    inputs: ["ngIf", "ngIfThen", "ngIfElse"]
  }],
  animations: [trigger("flyInOut", [state("inactive", style({
    opacity: 0
  })), state("active", style({
    opacity: 1
  })), state("removed", style({
    opacity: 0
  })), transition("inactive => active", animate("{{ easeTime }}ms {{ easing }}")), transition("active => removed", animate("{{ easeTime }}ms {{ easing }}"))])]
}));
var Toast = _Toast;
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "17.0.3",
  ngImport: core_exports,
  type: Toast,
  decorators: [{
    type: Component,
    args: [{
      selector: "[toast-component]",
      template: `
  <button *ngIf="options.closeButton" (click)="remove()" type="button" class="toast-close-button" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
  <div *ngIf="title" [class]="options.titleClass" [attr.aria-label]="title">
    {{ title }} <ng-container *ngIf="duplicatesCount">[{{ duplicatesCount + 1 }}]</ng-container>
  </div>
  <div *ngIf="message && options.enableHtml" role="alert"
    [class]="options.messageClass" [innerHTML]="message">
  </div>
  <div *ngIf="message && !options.enableHtml" role="alert"
    [class]="options.messageClass" [attr.aria-label]="message">
    {{ message }}
  </div>
  <div *ngIf="options.progressBar">
    <div class="toast-progress" [style.width]="width + '%'"></div>
  </div>
  `,
      animations: [trigger("flyInOut", [state("inactive", style({
        opacity: 0
      })), state("active", style({
        opacity: 1
      })), state("removed", style({
        opacity: 0
      })), transition("inactive => active", animate("{{ easeTime }}ms {{ easing }}")), transition("active => removed", animate("{{ easeTime }}ms {{ easing }}"))])],
      preserveWhitespaces: false,
      standalone: true,
      imports: [NgIf]
    }]
  }],
  ctorParameters: () => [{
    type: ToastrService
  }, {
    type: ToastPackage
  }, {
    type: NgZone
  }],
  propDecorators: {
    toastClasses: [{
      type: HostBinding,
      args: ["class"]
    }],
    state: [{
      type: HostBinding,
      args: ["@flyInOut"]
    }],
    displayStyle: [{
      type: HostBinding,
      args: ["style.display"]
    }],
    tapToast: [{
      type: HostListener,
      args: ["click"]
    }],
    stickAround: [{
      type: HostListener,
      args: ["mouseenter"]
    }],
    delayedHideToast: [{
      type: HostListener,
      args: ["mouseleave"]
    }]
  }
});
var DefaultGlobalConfig = __spreadProps(__spreadValues({}, DefaultNoComponentGlobalConfig), {
  toastComponent: Toast
});
var provideToastr = (config = {}) => {
  const providers = [{
    provide: TOAST_CONFIG,
    useValue: {
      default: DefaultGlobalConfig,
      config
    }
  }];
  return makeEnvironmentProviders(providers);
};
var _ToastrModule = class _ToastrModule {
  static forRoot(config = {}) {
    return {
      ngModule: _ToastrModule,
      providers: [provideToastr(config)]
    };
  }
};
__publicField(_ToastrModule, "\u0275fac", \u0275\u0275ngDeclareFactory({
  minVersion: "12.0.0",
  version: "17.0.3",
  ngImport: core_exports,
  type: _ToastrModule,
  deps: [],
  target: FactoryTarget.NgModule
}));
__publicField(_ToastrModule, "\u0275mod", \u0275\u0275ngDeclareNgModule({
  minVersion: "14.0.0",
  version: "17.0.3",
  ngImport: core_exports,
  type: _ToastrModule,
  imports: [Toast],
  exports: [Toast]
}));
__publicField(_ToastrModule, "\u0275inj", \u0275\u0275ngDeclareInjector({
  minVersion: "12.0.0",
  version: "17.0.3",
  ngImport: core_exports,
  type: _ToastrModule
}));
var ToastrModule = _ToastrModule;
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "17.0.3",
  ngImport: core_exports,
  type: ToastrModule,
  decorators: [{
    type: NgModule,
    args: [{
      imports: [Toast],
      exports: [Toast]
    }]
  }]
});
var _ToastrComponentlessModule = class _ToastrComponentlessModule {
  static forRoot(config = {}) {
    return {
      ngModule: ToastrModule,
      providers: [{
        provide: TOAST_CONFIG,
        useValue: {
          default: DefaultNoComponentGlobalConfig,
          config
        }
      }]
    };
  }
};
__publicField(_ToastrComponentlessModule, "\u0275fac", \u0275\u0275ngDeclareFactory({
  minVersion: "12.0.0",
  version: "17.0.3",
  ngImport: core_exports,
  type: _ToastrComponentlessModule,
  deps: [],
  target: FactoryTarget.NgModule
}));
__publicField(_ToastrComponentlessModule, "\u0275mod", \u0275\u0275ngDeclareNgModule({
  minVersion: "14.0.0",
  version: "17.0.3",
  ngImport: core_exports,
  type: _ToastrComponentlessModule
}));
__publicField(_ToastrComponentlessModule, "\u0275inj", \u0275\u0275ngDeclareInjector({
  minVersion: "12.0.0",
  version: "17.0.3",
  ngImport: core_exports,
  type: _ToastrComponentlessModule
}));
var ToastrComponentlessModule = _ToastrComponentlessModule;
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "17.0.3",
  ngImport: core_exports,
  type: ToastrComponentlessModule,
  decorators: [{
    type: NgModule,
    args: [{}]
  }]
});
var _ToastNoAnimation = class _ToastNoAnimation {
  constructor(toastrService, toastPackage, appRef) {
    __publicField(this, "toastrService");
    __publicField(this, "toastPackage");
    __publicField(this, "appRef");
    __publicField(this, "message");
    __publicField(this, "title");
    __publicField(this, "options");
    __publicField(this, "duplicatesCount");
    __publicField(this, "originalTimeout");
    /** width of progress bar */
    __publicField(this, "width", -1);
    /** a combination of toast type and options.toastClass */
    __publicField(this, "toastClasses", "");
    /** controls animation */
    __publicField(this, "state", "inactive");
    __publicField(this, "timeout");
    __publicField(this, "intervalId");
    __publicField(this, "hideTime");
    __publicField(this, "sub");
    __publicField(this, "sub1");
    __publicField(this, "sub2");
    __publicField(this, "sub3");
    this.toastrService = toastrService;
    this.toastPackage = toastPackage;
    this.appRef = appRef;
    this.message = toastPackage.message;
    this.title = toastPackage.title;
    this.options = toastPackage.config;
    this.originalTimeout = toastPackage.config.timeOut;
    this.toastClasses = `${toastPackage.toastType} ${toastPackage.config.toastClass}`;
    this.sub = toastPackage.toastRef.afterActivate().subscribe(() => {
      this.activateToast();
    });
    this.sub1 = toastPackage.toastRef.manualClosed().subscribe(() => {
      this.remove();
    });
    this.sub2 = toastPackage.toastRef.timeoutReset().subscribe(() => {
      this.resetTimeout();
    });
    this.sub3 = toastPackage.toastRef.countDuplicate().subscribe((count) => {
      this.duplicatesCount = count;
    });
  }
  /** hides component when waiting to be displayed */
  get displayStyle() {
    if (this.state === "inactive") {
      return "none";
    }
    return null;
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
    this.sub1.unsubscribe();
    this.sub2.unsubscribe();
    this.sub3.unsubscribe();
    clearInterval(this.intervalId);
    clearTimeout(this.timeout);
  }
  /**
   * activates toast and sets timeout
   */
  activateToast() {
    this.state = "active";
    if (!(this.options.disableTimeOut === true || this.options.disableTimeOut === "timeOut") && this.options.timeOut) {
      this.timeout = setTimeout(() => {
        this.remove();
      }, this.options.timeOut);
      this.hideTime = (/* @__PURE__ */ new Date()).getTime() + this.options.timeOut;
      if (this.options.progressBar) {
        this.intervalId = setInterval(() => this.updateProgress(), 10);
      }
    }
    if (this.options.onActivateTick) {
      this.appRef.tick();
    }
  }
  /**
   * updates progress bar width
   */
  updateProgress() {
    if (this.width === 0 || this.width === 100 || !this.options.timeOut) {
      return;
    }
    const now = (/* @__PURE__ */ new Date()).getTime();
    const remaining = this.hideTime - now;
    this.width = remaining / this.options.timeOut * 100;
    if (this.options.progressAnimation === "increasing") {
      this.width = 100 - this.width;
    }
    if (this.width <= 0) {
      this.width = 0;
    }
    if (this.width >= 100) {
      this.width = 100;
    }
  }
  resetTimeout() {
    clearTimeout(this.timeout);
    clearInterval(this.intervalId);
    this.state = "active";
    this.options.timeOut = this.originalTimeout;
    this.timeout = setTimeout(() => this.remove(), this.originalTimeout);
    this.hideTime = (/* @__PURE__ */ new Date()).getTime() + (this.originalTimeout || 0);
    this.width = -1;
    if (this.options.progressBar) {
      this.intervalId = setInterval(() => this.updateProgress(), 10);
    }
  }
  /**
   * tells toastrService to remove this toast after animation time
   */
  remove() {
    if (this.state === "removed") {
      return;
    }
    clearTimeout(this.timeout);
    this.state = "removed";
    this.timeout = setTimeout(() => this.toastrService.remove(this.toastPackage.toastId));
  }
  tapToast() {
    if (this.state === "removed") {
      return;
    }
    this.toastPackage.triggerTap();
    if (this.options.tapToDismiss) {
      this.remove();
    }
  }
  stickAround() {
    if (this.state === "removed") {
      return;
    }
    clearTimeout(this.timeout);
    this.options.timeOut = 0;
    this.hideTime = 0;
    clearInterval(this.intervalId);
    this.width = 0;
  }
  delayedHideToast() {
    if (this.options.disableTimeOut === true || this.options.disableTimeOut === "extendedTimeOut" || this.options.extendedTimeOut === 0 || this.state === "removed") {
      return;
    }
    this.timeout = setTimeout(() => this.remove(), this.options.extendedTimeOut);
    this.options.timeOut = this.options.extendedTimeOut;
    this.hideTime = (/* @__PURE__ */ new Date()).getTime() + (this.options.timeOut || 0);
    this.width = -1;
    if (this.options.progressBar) {
      this.intervalId = setInterval(() => this.updateProgress(), 10);
    }
  }
};
__publicField(_ToastNoAnimation, "\u0275fac", \u0275\u0275ngDeclareFactory({
  minVersion: "12.0.0",
  version: "17.0.3",
  ngImport: core_exports,
  type: _ToastNoAnimation,
  deps: [{
    token: ToastrService
  }, {
    token: ToastPackage
  }, {
    token: ApplicationRef
  }],
  target: FactoryTarget.Component
}));
__publicField(_ToastNoAnimation, "\u0275cmp", \u0275\u0275ngDeclareComponent({
  minVersion: "14.0.0",
  version: "17.0.3",
  type: _ToastNoAnimation,
  isStandalone: true,
  selector: "[toast-component]",
  host: {
    listeners: {
      "click": "tapToast()",
      "mouseenter": "stickAround()",
      "mouseleave": "delayedHideToast()"
    },
    properties: {
      "class": "this.toastClasses",
      "style.display": "this.displayStyle"
    }
  },
  ngImport: core_exports,
  template: `
  <button *ngIf="options.closeButton" (click)="remove()" type="button" class="toast-close-button" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
  <div *ngIf="title" [class]="options.titleClass" [attr.aria-label]="title">
    {{ title }} <ng-container *ngIf="duplicatesCount">[{{ duplicatesCount + 1 }}]</ng-container>
  </div>
  <div *ngIf="message && options.enableHtml" role="alert"
    [class]="options.messageClass" [innerHTML]="message">
  </div>
  <div *ngIf="message && !options.enableHtml" role="alert"
    [class]="options.messageClass" [attr.aria-label]="message">
    {{ message }}
  </div>
  <div *ngIf="options.progressBar">
    <div class="toast-progress" [style.width]="width + '%'"></div>
  </div>
  `,
  isInline: true,
  dependencies: [{
    kind: "directive",
    type: NgIf,
    selector: "[ngIf]",
    inputs: ["ngIf", "ngIfThen", "ngIfElse"]
  }]
}));
var ToastNoAnimation = _ToastNoAnimation;
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "17.0.3",
  ngImport: core_exports,
  type: ToastNoAnimation,
  decorators: [{
    type: Component,
    args: [{
      selector: "[toast-component]",
      template: `
  <button *ngIf="options.closeButton" (click)="remove()" type="button" class="toast-close-button" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
  <div *ngIf="title" [class]="options.titleClass" [attr.aria-label]="title">
    {{ title }} <ng-container *ngIf="duplicatesCount">[{{ duplicatesCount + 1 }}]</ng-container>
  </div>
  <div *ngIf="message && options.enableHtml" role="alert"
    [class]="options.messageClass" [innerHTML]="message">
  </div>
  <div *ngIf="message && !options.enableHtml" role="alert"
    [class]="options.messageClass" [attr.aria-label]="message">
    {{ message }}
  </div>
  <div *ngIf="options.progressBar">
    <div class="toast-progress" [style.width]="width + '%'"></div>
  </div>
  `,
      standalone: true,
      imports: [NgIf]
    }]
  }],
  ctorParameters: () => [{
    type: ToastrService
  }, {
    type: ToastPackage
  }, {
    type: ApplicationRef
  }],
  propDecorators: {
    toastClasses: [{
      type: HostBinding,
      args: ["class"]
    }],
    displayStyle: [{
      type: HostBinding,
      args: ["style.display"]
    }],
    tapToast: [{
      type: HostListener,
      args: ["click"]
    }],
    stickAround: [{
      type: HostListener,
      args: ["mouseenter"]
    }],
    delayedHideToast: [{
      type: HostListener,
      args: ["mouseleave"]
    }]
  }
});
var DefaultNoAnimationsGlobalConfig = __spreadProps(__spreadValues({}, DefaultNoComponentGlobalConfig), {
  toastComponent: ToastNoAnimation
});
var _ToastNoAnimationModule = class _ToastNoAnimationModule {
  static forRoot(config = {}) {
    return {
      ngModule: _ToastNoAnimationModule,
      providers: [{
        provide: TOAST_CONFIG,
        useValue: {
          default: DefaultNoAnimationsGlobalConfig,
          config
        }
      }]
    };
  }
};
__publicField(_ToastNoAnimationModule, "\u0275fac", \u0275\u0275ngDeclareFactory({
  minVersion: "12.0.0",
  version: "17.0.3",
  ngImport: core_exports,
  type: _ToastNoAnimationModule,
  deps: [],
  target: FactoryTarget.NgModule
}));
__publicField(_ToastNoAnimationModule, "\u0275mod", \u0275\u0275ngDeclareNgModule({
  minVersion: "14.0.0",
  version: "17.0.3",
  ngImport: core_exports,
  type: _ToastNoAnimationModule,
  imports: [ToastNoAnimation],
  exports: [ToastNoAnimation]
}));
__publicField(_ToastNoAnimationModule, "\u0275inj", \u0275\u0275ngDeclareInjector({
  minVersion: "12.0.0",
  version: "17.0.3",
  ngImport: core_exports,
  type: _ToastNoAnimationModule
}));
var ToastNoAnimationModule = _ToastNoAnimationModule;
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "17.0.3",
  ngImport: core_exports,
  type: ToastNoAnimationModule,
  decorators: [{
    type: NgModule,
    args: [{
      imports: [ToastNoAnimation],
      exports: [ToastNoAnimation]
    }]
  }]
});

// src/app/shared/notification/service/notification.service.ts
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var _a;
var NotificationService = (_a = class {
  constructor(toastrService) {
    __publicField(this, "toastrService");
    this.toastrService = toastrService;
    toastrService.toastrConfig.closeButton = true;
    toastrService.toastrConfig.timeOut = 5e3;
    toastrService.toastrConfig.preventDuplicates = true;
    toastrService.toastrConfig.progressBar = true;
    toastrService.toastrConfig.tapToDismiss = false;
    toastrService.toastrConfig.enableHtml = true;
  }
  addSuccessNotification(successNotification) {
    this.toastrService.success(successNotification);
  }
  addErrorNotification(errorNotification) {
    this.toastrService.error(errorNotification, "Something went wrong :(");
  }
  addAnnouncementNotification(announcementNotification, options) {
    this.toastrService.info(announcementNotification, "Just to let you know!", options);
  }
  addComplexNavigatorAnnouncementNotification(announcement) {
    return this.toastrService.info(announcement, null, {
      disableTimeOut: false,
      closeButton: true,
      progressBar: false,
      positionClass: "toast-right-under-header"
    });
  }
  addHintNotification(hintNotification) {
    this.toastrService.warning(hintNotification, "Just to let you know!");
  }
  onAPIRequestError(resource) {
    this.addErrorNotification("We couldn't reach the " + resource + " webservice. Please try again later or contact us if issue persists!");
  }
  onAddedComplexToBasket(id) {
    this.addSuccessNotification("Added " + id + " to your basket!");
  }
  onRemovedComplexFromBasket(id) {
    this.addSuccessNotification("Removed " + id + " from your basket!");
  }
  onFeatureNotAvailableYet() {
    this.addHintNotification("This feature is not available yet. But it is coming soon! :-)");
  }
  complexNavigatorAnnouncement() {
    return this.addComplexNavigatorAnnouncementNotification("Try out our new display: \n the Complex Navigator!");
  }
  closeAnnouncement(toastId) {
    this.toastrService.clear(toastId);
  }
}, __publicField(_a, "ctorParameters", () => [
  { type: ToastrService }
]), _a);
NotificationService = __decorate([
  Injectable()
], NotificationService);

// src/app/shared/local-storage/service/local-storage.service.ts
var __decorate2 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var LocalStorageService = class LocalStorageService2 {
  static saveInLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  static getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
  }
};
LocalStorageService = __decorate2([
  Injectable()
], LocalStorageService);

// src/app/shared/basket/service/basket.service.ts
var __decorate3 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var COMPLEX_STORE = "cp_complex_store";
var _a2;
var BasketService = (_a2 = class {
  constructor(notificationService, googleAnalyticsService, species) {
    __publicField(this, "notificationService");
    __publicField(this, "googleAnalyticsService");
    __publicField(this, "species");
    __publicField(this, "_complexBasket", {});
    __publicField(this, "onBasketCountChanged$");
    this.notificationService = notificationService;
    this.googleAnalyticsService = googleAnalyticsService;
    this.species = species;
    this.onBasketCountChanged$ = new EventEmitter();
    this.initialiseBasket();
  }
  initialiseBasket() {
    const complexStore = LocalStorageService.getLocalStorage(COMPLEX_STORE);
    if (!complexStore) {
      LocalStorageService.saveInLocalStorage(COMPLEX_STORE, this._complexBasket);
      this.initialiseBasket();
    } else {
      const keys = Object.keys(complexStore);
      for (let i = 0; i < keys.length; i++) {
        const complex = complexStore[keys[i]];
        if (complex) {
          this._complexBasket[keys[i]] = complex;
        }
      }
    }
  }
  isElement(complex) {
    return complex.complexAC !== void 0;
  }
  saveInBasket(complex) {
    const item = this.isElement(complex) ? {
      id: complex.complexAC,
      name: complex.complexName,
      organism: complex.organismName,
      predicted: complex.predictedComplex,
      date: /* @__PURE__ */ new Date()
    } : {
      id: complex.complexAc,
      name: complex.name,
      organism: complex.species,
      predicted: complex.predictedComplex,
      date: /* @__PURE__ */ new Date()
    };
    item.organism = this.species.transform(item.organism, false);
    if (!this.isInBasket(item.id)) {
      this._complexBasket[item.id] = item;
      LocalStorageService.saveInLocalStorage(COMPLEX_STORE, this._complexBasket);
      this.onBasketCountChanged$.emit(this.getBasketCount());
      this.googleAnalyticsService.fireAddToBasketEvent(item.id);
      this.notificationService.onAddedComplexToBasket(item.id);
    }
  }
  deleteFromBasket(id) {
    delete this._complexBasket[id];
    LocalStorageService.saveInLocalStorage(COMPLEX_STORE, this._complexBasket);
    this.onBasketCountChanged$.emit(this.getBasketCount());
    this.googleAnalyticsService.fireRemoveFromBasketEvent(id);
    this.notificationService.onRemovedComplexFromBasket(id);
  }
  isInBasket(id) {
    return !!this._complexBasket[id];
  }
  get complexBasket() {
    return this._complexBasket;
  }
  getBasketCount() {
    return Object.keys(this._complexBasket).length;
  }
}, __publicField(_a2, "ctorParameters", () => [
  { type: NotificationService },
  { type: AnalyticsService },
  { type: SpeciesPipe }
]), _a2);
BasketService = __decorate3([
  Injectable()
], BasketService);

export {
  AnimationMetadataType,
  AUTO_STYLE,
  trigger,
  animate,
  sequence,
  style,
  state,
  transition,
  NoopAnimationPlayer,
  AnimationGroupPlayer,
  ɵPRE_STYLE,
  ToastrModule,
  NotificationService,
  LocalStorageService,
  BasketService
};
/*! Bundled license information:

@angular/animations/fesm2022/animations.mjs:
  (**
   * @license Angular v18.1.4
   * (c) 2010-2024 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=chunk-2VCLLS4E.js.map
