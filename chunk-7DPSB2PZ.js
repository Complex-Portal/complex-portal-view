import {
  environment,
  require_throwError
} from "./chunk-VAAOO3WK.js";
import {
  FactoryTarget,
  HttpClient,
  Inject,
  Injectable,
  InjectionToken,
  NgModule,
  __publicField,
  __spreadValues,
  __toESM,
  catchError,
  core_exports,
  isDevMode,
  map,
  ɵɵngDeclareClassMetadata,
  ɵɵngDeclareFactory,
  ɵɵngDeclareInjectable,
  ɵɵngDeclareInjector,
  ɵɵngDeclareNgModule
} from "./chunk-I4WWFSLP.js";

// src/app/complex/complex-details/complex-references/euro-pmc-crossreferences/service/euro-pmc.service.ts
var import_throwError = __toESM(require_throwError());
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var baseURL = environment.europepmc_base_url;
var _a;
var EuroPmcService = (_a = class {
  constructor(http) {
    __publicField(this, "http");
    this.http = http;
  }
  getPublicationInformation(id) {
    return this.http.get(baseURL + "/webservices/rest/search?query=ext_id:" + id + "%20src:med&format=json").pipe(catchError(this.handleError));
  }
  handleError(err) {
    if (err.error instanceof Error) {
      return (0, import_throwError.throwError)(err);
    } else {
      console.error(err.message ? err.message : err.toString());
    }
  }
}, __publicField(_a, "ctorParameters", () => [
  { type: HttpClient }
]), _a);
EuroPmcService = __decorate([
  Injectable()
], EuroPmcService);

// src/app/complex/complex-details/complex-function/reactome-crossreferences/service/reactome.service.ts
var import_throwError2 = __toESM(require_throwError());
var __decorate2 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var baseURL2 = environment.reactome_base_url;
var _a2;
var ReactomeService = (_a2 = class {
  constructor(http) {
    __publicField(this, "http");
    this.http = http;
  }
  /**
   * Returns all related pathways for a given complex stable identifier
   * @param id - a reactome stable identifier
   * @returns {Observable<R|T>}
   */
  findRelatedPathways(id) {
    return this.http.get(baseURL2 + "/ContentService/data/pathways/low/entity/" + id).pipe(catchError(this.handleError));
  }
  /**
   * Returns the name of a complex by a given complex stable identifier
   * @param id - a complex stable identifier
   * @returns {Observable<R|T>}
   */
  getComplexName(id) {
    return this.http.get(baseURL2 + "/ContentService/data/query/" + id + "/displayName", { observe: "body", responseType: "text" }).pipe(catchError(this.handleError));
  }
  handleError(err) {
    if (err.error instanceof Error) {
      return (0, import_throwError2.throwError)(err);
    } else {
      console.error(err.message ? err.message : err.toString());
    }
  }
}, __publicField(_a2, "ctorParameters", () => [
  { type: HttpClient }
]), _a2);
ReactomeService = __decorate2([
  Injectable()
], ReactomeService);

// src/app/shared/ols/service/ols.service.ts
var import_throwError3 = __toESM(require_throwError());
var __decorate3 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var baseURL3 = environment.ols_base_url;
var _a3;
var OlsService = (_a3 = class {
  constructor(http) {
    __publicField(this, "http");
    this.http = http;
  }
  /**
   * Get a name of efo xref
   * @param id
   * @returns {Observable<R>}
   */
  getOrphaNetName(id) {
    return this.http.get(baseURL3 + "/ordo/terms?iri=http://www.orpha.net/ORDO/" + id.replace(":", "_")).pipe(map((response) => response), catchError(this.handleError));
  }
  /**
   * Get a name of efo xref
   * @param id
   * @returns {Observable<R>}
   */
  getEfoName(id) {
    return this.http.get(baseURL3 + "/efo/terms?iri=http://www.ebi.ac.uk/efo/" + id.replace(":", "_")).pipe(catchError(this.handleError));
  }
  /**
   * Get a name of mondo xref
   * @param id
   * @returns {Observable<R>}
   */
  getOboName(id) {
    return this.http.get(baseURL3 + "/efo/terms?iri=http://purl.obolibrary.org/obo/" + id.replace(":", "_")).pipe(catchError(this.handleError));
  }
  handleError(err) {
    if (err.error instanceof Error) {
      return (0, import_throwError3.throwError)(err);
    } else {
      console.error(err.message ? err.message : err.toString());
    }
  }
}, __publicField(_a3, "ctorParameters", () => [
  { type: HttpClient }
]), _a3);
OlsService = __decorate3([
  Injectable()
], OlsService);

// node_modules/ngx-page-scroll-core/fesm2022/ngx-page-scroll-core.mjs
var PageScrollInstance = class _PageScrollInstance {
  /**
   * Private constructor, requires the properties assumed to be the bare minimum.
   * Use the factory methods to create instances:
   *      {@link PageScrollService#create}
   */
  constructor(pageScrollOptions) {
    this.startScrollPosition = 0;
    this.interruptListenersAttached = false;
    this.timer = null;
    if (!pageScrollOptions.scrollViews || pageScrollOptions.scrollViews.length === 0) {
      pageScrollOptions.scrollViews = [pageScrollOptions.document.documentElement, pageScrollOptions.document.body, pageScrollOptions.document.body.parentNode];
      this.isInlineScrolling = false;
    } else {
      this.isInlineScrolling = true;
    }
    this.pageScrollOptions = pageScrollOptions;
  }
  static getScrollingTargetPosition(pageScrollOptions, scrollTargetElement) {
    const body = pageScrollOptions.document.body;
    const docEl = pageScrollOptions.document.documentElement;
    const windowPageYOffset = pageScrollOptions.document.defaultView && pageScrollOptions.document.defaultView.pageYOffset || void 0;
    const windowPageXOffset = pageScrollOptions.document.defaultView && pageScrollOptions.document.defaultView.pageXOffset || void 0;
    const scrollTop = windowPageYOffset || docEl.scrollTop || body.scrollTop;
    const scrollLeft = windowPageXOffset || docEl.scrollLeft || body.scrollLeft;
    const clientTop = docEl.clientTop || body.clientTop || 0;
    const clientLeft = docEl.clientLeft || body.clientLeft || 0;
    if (scrollTargetElement === void 0 || scrollTargetElement === null) {
      return {
        top: scrollTop,
        left: scrollLeft
      };
    }
    const box = scrollTargetElement.getBoundingClientRect();
    const top = box.top + scrollTop - clientTop;
    const left = box.left + scrollLeft - clientLeft;
    return {
      top: Math.round(top),
      left: Math.round(left)
    };
  }
  static getInlineScrollingTargetPosition(pageScrollOptions, scrollTargetElement) {
    const position = {
      top: scrollTargetElement.offsetTop,
      left: scrollTargetElement.offsetLeft
    };
    if (pageScrollOptions.advancedInlineOffsetCalculation && pageScrollOptions.scrollViews.length === 1) {
      const accumulatedParentsPos = {
        top: 0,
        left: 0
      };
      const theWindow = scrollTargetElement.ownerDocument.defaultView;
      let parentFound = false;
      let parent = scrollTargetElement.parentElement;
      while (!parentFound && parent !== void 0 && parent !== null) {
        if (theWindow.getComputedStyle(parent).getPropertyValue("position") === "relative") {
          accumulatedParentsPos.top += parent.offsetTop;
          accumulatedParentsPos.left += parent.offsetLeft;
        }
        parent = parent.parentElement;
        parentFound = parent === pageScrollOptions.scrollViews[0];
      }
      if (parentFound) {
        position.top += accumulatedParentsPos.top;
        position.left += accumulatedParentsPos.left;
      } else {
      }
    }
    return position;
  }
  getScrollPropertyValue(scrollingView) {
    if (!this.pageScrollOptions.verticalScrolling) {
      return scrollingView.scrollLeft;
    }
    return scrollingView.scrollTop;
  }
  getScrollClientPropertyValue(scrollingView) {
    if (!this.pageScrollOptions.verticalScrolling) {
      return scrollingView.clientWidth;
    }
    return scrollingView.clientHeight;
  }
  /**
   * Extract the exact location of the scrollTarget element.
   *
   * Extract the scrollTarget HTMLElement from the given PageScrollTarget object. The latter one may be
   * a string like "#heading2", then this method returns the corresponding DOM element for that id.
   *
   */
  extractScrollTargetPosition() {
    const scrollTargetElement = this.getScrollTargetElement();
    if (scrollTargetElement === null || scrollTargetElement === void 0) {
      return {
        top: NaN,
        left: NaN
      };
    }
    if (this.isInlineScrolling) {
      return _PageScrollInstance.getInlineScrollingTargetPosition(this.pageScrollOptions, scrollTargetElement);
    }
    return _PageScrollInstance.getScrollingTargetPosition(this.pageScrollOptions, scrollTargetElement);
  }
  /**
   * Get the top offset of the scroll animation.
   * This automatically takes the offset location of the scrolling container/scrolling view
   * into account (for nested/inline scrolling).
   */
  getCurrentOffset() {
    return this.pageScrollOptions.scrollOffset;
  }
  /**
   * Sets the "scrollTop" or "scrollLeft" property for all scrollViews to the provided value
   * @return true if at least for one ScrollTopSource the scrollTop/scrollLeft value could be set and it kept the new value.
   *          false if it failed for all ScrollViews, meaning that we should stop the animation
   *          (probably because we're at the end of the scrolling region)
   */
  setScrollPosition(position) {
    return this.pageScrollOptions.scrollViews.reduce((oneAlreadyWorked, scrollingView) => {
      const startScrollPropertyValue = this.getScrollPropertyValue(scrollingView);
      if (scrollingView && startScrollPropertyValue !== void 0 && startScrollPropertyValue !== null) {
        const scrollDistance = Math.abs(startScrollPropertyValue - position);
        const isSmallMovement = scrollDistance < this.pageScrollOptions._minScrollDistance;
        if (!this.pageScrollOptions.verticalScrolling) {
          scrollingView.scrollLeft = position;
        } else {
          scrollingView.scrollTop = position;
        }
        if (isSmallMovement || scrollDistance > Math.abs(this.getScrollPropertyValue(scrollingView) - position)) {
          return true;
        }
      }
      return oneAlreadyWorked;
    }, false);
  }
  /**
   * Trigger firing a animation finish event
   * @param value Whether the animation finished at the target (true) or got interrupted (false)
   */
  fireEvent(value) {
    if (this.pageScrollOptions.scrollFinishListener) {
      this.pageScrollOptions.scrollFinishListener.emit(value);
    }
  }
  /**
   * Attach the interrupt listeners to the PageScrollInstance body. The given interruptReporter
   * will be called if any of the attached events is fired.
   *
   * Possibly attached interruptListeners are automatically removed from the body before the new one will be attached.
   */
  attachInterruptListeners(interruptReporter) {
    if (this.interruptListenersAttached) {
      this.detachInterruptListeners();
    }
    this.interruptListener = (event) => {
      interruptReporter.report(event, this);
    };
    this.pageScrollOptions.interruptEvents.forEach((event) => this.pageScrollOptions.document.body.addEventListener(event, this.interruptListener));
    this.interruptListenersAttached = true;
  }
  /**
   * Remove event listeners from the body and stop listening for events that might be treated as "animation
   * interrupt" events.
   */
  detachInterruptListeners() {
    this.pageScrollOptions.interruptEvents.forEach((event) => this.pageScrollOptions.document.body.removeEventListener(event, this.interruptListener));
    this.interruptListenersAttached = false;
  }
  getScrollTargetElement() {
    if (typeof this.pageScrollOptions.scrollTarget === "string") {
      const targetSelector = this.pageScrollOptions.scrollTarget;
      if (targetSelector.match(/^#[^\s]+$/g) !== null) {
        return this.pageScrollOptions.document.getElementById(targetSelector.substr(1));
      }
      return this.pageScrollOptions.document.querySelector(targetSelector);
    }
    return this.pageScrollOptions.scrollTarget;
  }
};
var NGXPS_CONFIG = new InjectionToken("ngxps_config");
var defaultPageScrollConfig = {
  _interval: 10,
  _minScrollDistance: 2,
  _logLevel: 1,
  namespace: "default",
  verticalScrolling: true,
  duration: 1250,
  scrollOffset: 0,
  advancedInlineOffsetCalculation: false,
  interruptEvents: ["mousedown", "wheel", "DOMMouseScroll", "mousewheel", "keyup", "touchmove"],
  interruptKeys: [" ", "Escape", "Tab", "Enter", "PageUp", "PageDown", "Home", "End", "ArrowUp", "ArrowRight", "ArrowLeft", "ArrowDown"],
  interruptible: true,
  scrollInView: true,
  easingLogic: (t, b, c, d) => {
    return c * t / d + b;
  }
};
var _PageScrollService = class _PageScrollService {
  stopInternal(interrupted, pageScrollInstance) {
    const index = this.runningInstances.indexOf(pageScrollInstance);
    if (index >= 0) {
      this.runningInstances.splice(index, 1);
    }
    if (pageScrollInstance.interruptListenersAttached) {
      pageScrollInstance.detachInterruptListeners();
    }
    if (pageScrollInstance.timer) {
      clearInterval(pageScrollInstance.timer);
      pageScrollInstance.timer = void 0;
      pageScrollInstance.fireEvent(!interrupted);
      return true;
    }
    return false;
  }
  create(options) {
    return new PageScrollInstance(__spreadValues(__spreadValues({}, this.config), options));
  }
  /**
   * Start a scroll animation. All properties of the animation are stored in the given {@link PageScrollInstance} object.
   *
   * This is the core functionality of the whole library.
   */
  // tslint:disable-next-line:cyclomatic-complexity
  start(pageScrollInstance) {
    pageScrollInstance.pageScrollOptions = __spreadValues(__spreadValues({}, this.config), pageScrollInstance.pageScrollOptions);
    this.stopAll(pageScrollInstance.pageScrollOptions.namespace);
    if (pageScrollInstance.pageScrollOptions.scrollViews === null || pageScrollInstance.pageScrollOptions.scrollViews.length === 0) {
      if (this.config._logLevel >= 2 || this.config._logLevel >= 1 && isDevMode()) {
        console.warn("No scrollViews specified, thus ngx-page-scroll does not know which DOM elements to scroll");
      }
      return;
    }
    let startScrollPositionFound = false;
    let scrollRange = pageScrollInstance.getScrollClientPropertyValue(pageScrollInstance.pageScrollOptions.scrollViews[0]);
    pageScrollInstance.startScrollPosition = 0;
    pageScrollInstance.pageScrollOptions.scrollViews.forEach((scrollingView) => {
      if (scrollingView === void 0 || scrollingView === null) {
        return;
      }
      const scrollPosition = pageScrollInstance.getScrollPropertyValue(scrollingView);
      if (!startScrollPositionFound && scrollPosition) {
        pageScrollInstance.startScrollPosition = scrollPosition;
        startScrollPositionFound = true;
        scrollRange = pageScrollInstance.getScrollClientPropertyValue(scrollingView);
      }
    });
    const pageScrollOffset = pageScrollInstance.getCurrentOffset();
    const scrollTargetPosition = pageScrollInstance.extractScrollTargetPosition();
    pageScrollInstance.targetScrollPosition = Math.round((pageScrollInstance.pageScrollOptions.verticalScrolling ? scrollTargetPosition.top : scrollTargetPosition.left) - pageScrollOffset);
    pageScrollInstance.distanceToScroll = pageScrollInstance.targetScrollPosition - pageScrollInstance.startScrollPosition;
    if (isNaN(pageScrollInstance.distanceToScroll)) {
      if (this.config._logLevel >= 2 || this.config._logLevel >= 1 && isDevMode()) {
        console.log("Scrolling not possible, as we can't find the specified target");
      }
      pageScrollInstance.fireEvent(false);
      return;
    }
    const allReadyAtDestination = Math.abs(pageScrollInstance.distanceToScroll) < pageScrollInstance.pageScrollOptions._minScrollDistance;
    pageScrollInstance.executionDuration = pageScrollInstance.pageScrollOptions.duration;
    if (pageScrollInstance.pageScrollOptions.speed !== void 0 && pageScrollInstance.pageScrollOptions.speed !== null && (pageScrollInstance.pageScrollOptions.duration === void 0 || pageScrollInstance.pageScrollOptions.duration === null)) {
      pageScrollInstance.executionDuration = Math.abs(pageScrollInstance.distanceToScroll) / pageScrollInstance.pageScrollOptions.speed * 1e3;
    }
    const tooShortInterval = pageScrollInstance.executionDuration <= pageScrollInstance.pageScrollOptions._interval;
    if (allReadyAtDestination || tooShortInterval) {
      if (this.config._logLevel >= 2 || this.config._logLevel >= 1 && isDevMode()) {
        if (allReadyAtDestination) {
          console.log("Scrolling not possible, as we can't get any closer to the destination");
        } else {
          console.log("Scroll duration shorter that interval length, jumping to target");
        }
      }
      pageScrollInstance.setScrollPosition(pageScrollInstance.targetScrollPosition);
      pageScrollInstance.fireEvent(true);
      return;
    }
    if (!pageScrollInstance.pageScrollOptions.scrollInView) {
      const alreadyInView = pageScrollInstance.targetScrollPosition > pageScrollInstance.startScrollPosition && pageScrollInstance.targetScrollPosition <= pageScrollInstance.startScrollPosition + scrollRange;
      if (alreadyInView) {
        if (this.config._logLevel >= 2 || this.config._logLevel >= 1 && isDevMode()) {
          console.log("Not scrolling, as target already in view");
        }
        pageScrollInstance.fireEvent(true);
        return;
      }
    }
    if (pageScrollInstance.pageScrollOptions.interruptible) {
      pageScrollInstance.attachInterruptListeners(this.onInterrupted);
    }
    pageScrollInstance.startTime = (/* @__PURE__ */ new Date()).getTime();
    pageScrollInstance.endTime = pageScrollInstance.startTime + pageScrollInstance.executionDuration;
    pageScrollInstance.timer = setInterval((instance) => {
      const currentTime = (/* @__PURE__ */ new Date()).getTime();
      let newScrollPosition;
      let stopNow = false;
      if (instance.endTime <= currentTime) {
        newScrollPosition = instance.targetScrollPosition;
        stopNow = true;
      } else {
        newScrollPosition = Math.round(instance.pageScrollOptions.easingLogic(currentTime - instance.startTime, instance.startScrollPosition, instance.distanceToScroll, instance.executionDuration));
      }
      if (this.config._logLevel >= 5 && isDevMode()) {
        console.warn("Scroll Position: " + newScrollPosition);
      }
      if (!instance.setScrollPosition(newScrollPosition)) {
        stopNow = true;
      }
      if (stopNow) {
        this.stopInternal(false, instance);
      }
    }, this.config._interval, pageScrollInstance);
    this.runningInstances.push(pageScrollInstance);
  }
  scroll(options) {
    this.start(this.create(options));
  }
  /**
   * Stop all running scroll animations. Optionally limit to stop only the ones of specific namespace.
   */
  stopAll(namespace) {
    if (this.runningInstances.length > 0) {
      let stoppedSome = false;
      for (let i = 0; i < this.runningInstances.length; ++i) {
        const pageScrollInstance = this.runningInstances[i];
        if (!namespace || pageScrollInstance.pageScrollOptions.namespace === namespace) {
          stoppedSome = true;
          this.stopInternal(true, pageScrollInstance);
          i--;
        }
      }
      return stoppedSome;
    }
    return false;
  }
  stop(pageScrollInstance) {
    return this.stopInternal(true, pageScrollInstance);
  }
  constructor(customConfig) {
    this.runningInstances = [];
    this.onInterrupted = {
      report: (event, pageScrollInstance) => {
        if (!pageScrollInstance.pageScrollOptions.interruptible) {
          return;
        }
        let shouldStop = true;
        if (event.type === "keyup") {
          if (this.config.interruptKeys.indexOf(event.key) === -1) {
            shouldStop = false;
          }
        } else if (event.type === "mousedown") {
          if (!pageScrollInstance.pageScrollOptions.scrollViews.some((scrollingView) => scrollingView.contains(event.target))) {
            shouldStop = false;
          }
        }
        if (shouldStop) {
          this.stopAll(pageScrollInstance.pageScrollOptions.namespace);
        }
      }
    };
    this.config = __spreadValues(__spreadValues({}, defaultPageScrollConfig), customConfig);
  }
};
_PageScrollService.\u0275fac = \u0275\u0275ngDeclareFactory({
  minVersion: "12.0.0",
  version: "18.1.1",
  ngImport: core_exports,
  type: _PageScrollService,
  deps: [{
    token: NGXPS_CONFIG
  }],
  target: FactoryTarget.Injectable
});
_PageScrollService.\u0275prov = \u0275\u0275ngDeclareInjectable({
  minVersion: "12.0.0",
  version: "18.1.1",
  ngImport: core_exports,
  type: _PageScrollService,
  providedIn: "root"
});
var PageScrollService = _PageScrollService;
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.1.1",
  ngImport: core_exports,
  type: PageScrollService,
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
      args: [NGXPS_CONFIG]
    }]
  }]
});
var _NgxPageScrollCoreModule = class _NgxPageScrollCoreModule {
  static forRoot(config) {
    return {
      ngModule: _NgxPageScrollCoreModule,
      providers: [PageScrollService, {
        provide: NGXPS_CONFIG,
        useValue: config
      }]
    };
  }
};
_NgxPageScrollCoreModule.\u0275fac = \u0275\u0275ngDeclareFactory({
  minVersion: "12.0.0",
  version: "18.1.1",
  ngImport: core_exports,
  type: _NgxPageScrollCoreModule,
  deps: [],
  target: FactoryTarget.NgModule
});
_NgxPageScrollCoreModule.\u0275mod = \u0275\u0275ngDeclareNgModule({
  minVersion: "14.0.0",
  version: "18.1.1",
  ngImport: core_exports,
  type: _NgxPageScrollCoreModule
});
_NgxPageScrollCoreModule.\u0275inj = \u0275\u0275ngDeclareInjector({
  minVersion: "12.0.0",
  version: "18.1.1",
  ngImport: core_exports,
  type: _NgxPageScrollCoreModule,
  providers: [PageScrollService, {
    provide: NGXPS_CONFIG,
    useValue: {}
  }]
});
var NgxPageScrollCoreModule = _NgxPageScrollCoreModule;
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.1.1",
  ngImport: core_exports,
  type: NgxPageScrollCoreModule,
  decorators: [{
    type: NgModule,
    args: [{
      providers: [PageScrollService, {
        provide: NGXPS_CONFIG,
        useValue: {}
      }]
    }]
  }]
});

export {
  EuroPmcService,
  ReactomeService,
  OlsService,
  PageScrollService,
  NgxPageScrollCoreModule
};
//# sourceMappingURL=chunk-7DPSB2PZ.js.map
