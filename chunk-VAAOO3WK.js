import {
  ANIMATION_MODULE_TYPE,
  APP_BOOTSTRAP_LISTENER,
  APP_ID,
  APP_INITIALIZER,
  BehaviorSubject,
  CSP_NONCE,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  DOCUMENT,
  Directive,
  ElementRef,
  EventEmitter,
  FactoryTarget,
  Host,
  HttpClient,
  HttpParams,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  LOCALE_ID,
  NavigationEnd,
  NgModule,
  NgTemplateOutlet,
  NgZone,
  Observable,
  Optional,
  Output,
  PLATFORM_ID,
  Router,
  Subject,
  Version,
  ViewChild,
  ViewEncapsulation$1,
  __async,
  __commonJS,
  __publicField,
  __spreadProps,
  __spreadValues,
  __toESM,
  afterNextRender,
  booleanAttribute,
  catchError,
  combineLatest,
  concat,
  core_exports,
  debounceTime,
  distinctUntilChanged,
  filter,
  fromEvent,
  inject,
  isDevMode,
  isPlatformBrowser,
  map,
  numberAttribute,
  of,
  skip,
  startWith,
  take,
  takeUntil,
  ɵɵngDeclareClassMetadata,
  ɵɵngDeclareComponent,
  ɵɵngDeclareDirective,
  ɵɵngDeclareFactory,
  ɵɵngDeclareInjectable,
  ɵɵngDeclareInjector,
  ɵɵngDeclareNgModule
} from "./chunk-I4WWFSLP.js";

// node_modules/rxjs/internal/util/isFunction.js
var require_isFunction = __commonJS({
  "node_modules/rxjs/internal/util/isFunction.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function isFunction(x) {
      return typeof x === "function";
    }
    exports.isFunction = isFunction;
  }
});

// node_modules/rxjs/internal/config.js
var require_config = __commonJS({
  "node_modules/rxjs/internal/config.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _enable_super_gross_mode_that_will_cause_bad_things = false;
    exports.config = {
      Promise: void 0,
      set useDeprecatedSynchronousErrorHandling(value) {
        if (value) {
          var error = new Error();
          console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n" + error.stack);
        } else if (_enable_super_gross_mode_that_will_cause_bad_things) {
          console.log("RxJS: Back to a better error behavior. Thank you. <3");
        }
        _enable_super_gross_mode_that_will_cause_bad_things = value;
      },
      get useDeprecatedSynchronousErrorHandling() {
        return _enable_super_gross_mode_that_will_cause_bad_things;
      }
    };
  }
});

// node_modules/rxjs/internal/util/hostReportError.js
var require_hostReportError = __commonJS({
  "node_modules/rxjs/internal/util/hostReportError.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function hostReportError(err) {
      setTimeout(function() {
        throw err;
      }, 0);
    }
    exports.hostReportError = hostReportError;
  }
});

// node_modules/rxjs/internal/Observer.js
var require_Observer = __commonJS({
  "node_modules/rxjs/internal/Observer.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var config_1 = require_config();
    var hostReportError_1 = require_hostReportError();
    exports.empty = {
      closed: true,
      next: function(value) {
      },
      error: function(err) {
        if (config_1.config.useDeprecatedSynchronousErrorHandling) {
          throw err;
        } else {
          hostReportError_1.hostReportError(err);
        }
      },
      complete: function() {
      }
    };
  }
});

// node_modules/rxjs/internal/util/isArray.js
var require_isArray = __commonJS({
  "node_modules/rxjs/internal/util/isArray.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.isArray = function() {
      return Array.isArray || function(x) {
        return x && typeof x.length === "number";
      };
    }();
  }
});

// node_modules/rxjs/internal/util/isObject.js
var require_isObject = __commonJS({
  "node_modules/rxjs/internal/util/isObject.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function isObject(x) {
      return x !== null && typeof x === "object";
    }
    exports.isObject = isObject;
  }
});

// node_modules/rxjs/internal/util/UnsubscriptionError.js
var require_UnsubscriptionError = __commonJS({
  "node_modules/rxjs/internal/util/UnsubscriptionError.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var UnsubscriptionErrorImpl = function() {
      function UnsubscriptionErrorImpl2(errors) {
        Error.call(this);
        this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function(err, i) {
          return i + 1 + ") " + err.toString();
        }).join("\n  ") : "";
        this.name = "UnsubscriptionError";
        this.errors = errors;
        return this;
      }
      UnsubscriptionErrorImpl2.prototype = Object.create(Error.prototype);
      return UnsubscriptionErrorImpl2;
    }();
    exports.UnsubscriptionError = UnsubscriptionErrorImpl;
  }
});

// node_modules/rxjs/internal/Subscription.js
var require_Subscription = __commonJS({
  "node_modules/rxjs/internal/Subscription.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var isArray_1 = require_isArray();
    var isObject_1 = require_isObject();
    var isFunction_1 = require_isFunction();
    var UnsubscriptionError_1 = require_UnsubscriptionError();
    var Subscription2 = function() {
      function Subscription3(unsubscribe) {
        this.closed = false;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (unsubscribe) {
          this._ctorUnsubscribe = true;
          this._unsubscribe = unsubscribe;
        }
      }
      Subscription3.prototype.unsubscribe = function() {
        var errors;
        if (this.closed) {
          return;
        }
        var _a5 = this, _parentOrParents = _a5._parentOrParents, _ctorUnsubscribe = _a5._ctorUnsubscribe, _unsubscribe = _a5._unsubscribe, _subscriptions = _a5._subscriptions;
        this.closed = true;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (_parentOrParents instanceof Subscription3) {
          _parentOrParents.remove(this);
        } else if (_parentOrParents !== null) {
          for (var index = 0; index < _parentOrParents.length; ++index) {
            var parent_1 = _parentOrParents[index];
            parent_1.remove(this);
          }
        }
        if (isFunction_1.isFunction(_unsubscribe)) {
          if (_ctorUnsubscribe) {
            this._unsubscribe = void 0;
          }
          try {
            _unsubscribe.call(this);
          } catch (e) {
            errors = e instanceof UnsubscriptionError_1.UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [e];
          }
        }
        if (isArray_1.isArray(_subscriptions)) {
          var index = -1;
          var len = _subscriptions.length;
          while (++index < len) {
            var sub = _subscriptions[index];
            if (isObject_1.isObject(sub)) {
              try {
                sub.unsubscribe();
              } catch (e) {
                errors = errors || [];
                if (e instanceof UnsubscriptionError_1.UnsubscriptionError) {
                  errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
                } else {
                  errors.push(e);
                }
              }
            }
          }
        }
        if (errors) {
          throw new UnsubscriptionError_1.UnsubscriptionError(errors);
        }
      };
      Subscription3.prototype.add = function(teardown) {
        var subscription = teardown;
        if (!teardown) {
          return Subscription3.EMPTY;
        }
        switch (typeof teardown) {
          case "function":
            subscription = new Subscription3(teardown);
          case "object":
            if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== "function") {
              return subscription;
            } else if (this.closed) {
              subscription.unsubscribe();
              return subscription;
            } else if (!(subscription instanceof Subscription3)) {
              var tmp = subscription;
              subscription = new Subscription3();
              subscription._subscriptions = [tmp];
            }
            break;
          default: {
            throw new Error("unrecognized teardown " + teardown + " added to Subscription.");
          }
        }
        var _parentOrParents = subscription._parentOrParents;
        if (_parentOrParents === null) {
          subscription._parentOrParents = this;
        } else if (_parentOrParents instanceof Subscription3) {
          if (_parentOrParents === this) {
            return subscription;
          }
          subscription._parentOrParents = [_parentOrParents, this];
        } else if (_parentOrParents.indexOf(this) === -1) {
          _parentOrParents.push(this);
        } else {
          return subscription;
        }
        var subscriptions = this._subscriptions;
        if (subscriptions === null) {
          this._subscriptions = [subscription];
        } else {
          subscriptions.push(subscription);
        }
        return subscription;
      };
      Subscription3.prototype.remove = function(subscription) {
        var subscriptions = this._subscriptions;
        if (subscriptions) {
          var subscriptionIndex = subscriptions.indexOf(subscription);
          if (subscriptionIndex !== -1) {
            subscriptions.splice(subscriptionIndex, 1);
          }
        }
      };
      Subscription3.EMPTY = function(empty) {
        empty.closed = true;
        return empty;
      }(new Subscription3());
      return Subscription3;
    }();
    exports.Subscription = Subscription2;
    function flattenUnsubscriptionErrors(errors) {
      return errors.reduce(function(errs, err) {
        return errs.concat(err instanceof UnsubscriptionError_1.UnsubscriptionError ? err.errors : err);
      }, []);
    }
  }
});

// node_modules/rxjs/internal/symbol/rxSubscriber.js
var require_rxSubscriber = __commonJS({
  "node_modules/rxjs/internal/symbol/rxSubscriber.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.rxSubscriber = function() {
      return typeof Symbol === "function" ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random();
    }();
    exports.$$rxSubscriber = exports.rxSubscriber;
  }
});

// node_modules/rxjs/internal/Subscriber.js
var require_Subscriber = __commonJS({
  "node_modules/rxjs/internal/Subscriber.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || /* @__PURE__ */ function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var isFunction_1 = require_isFunction();
    var Observer_1 = require_Observer();
    var Subscription_1 = require_Subscription();
    var rxSubscriber_1 = require_rxSubscriber();
    var config_1 = require_config();
    var hostReportError_1 = require_hostReportError();
    var Subscriber = function(_super) {
      __extends(Subscriber2, _super);
      function Subscriber2(destinationOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this.syncErrorValue = null;
        _this.syncErrorThrown = false;
        _this.syncErrorThrowable = false;
        _this.isStopped = false;
        switch (arguments.length) {
          case 0:
            _this.destination = Observer_1.empty;
            break;
          case 1:
            if (!destinationOrNext) {
              _this.destination = Observer_1.empty;
              break;
            }
            if (typeof destinationOrNext === "object") {
              if (destinationOrNext instanceof Subscriber2) {
                _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                _this.destination = destinationOrNext;
                destinationOrNext.add(_this);
              } else {
                _this.syncErrorThrowable = true;
                _this.destination = new SafeSubscriber(_this, destinationOrNext);
              }
              break;
            }
          default:
            _this.syncErrorThrowable = true;
            _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
            break;
        }
        return _this;
      }
      Subscriber2.prototype[rxSubscriber_1.rxSubscriber] = function() {
        return this;
      };
      Subscriber2.create = function(next, error, complete) {
        var subscriber = new Subscriber2(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
      };
      Subscriber2.prototype.next = function(value) {
        if (!this.isStopped) {
          this._next(value);
        }
      };
      Subscriber2.prototype.error = function(err) {
        if (!this.isStopped) {
          this.isStopped = true;
          this._error(err);
        }
      };
      Subscriber2.prototype.complete = function() {
        if (!this.isStopped) {
          this.isStopped = true;
          this._complete();
        }
      };
      Subscriber2.prototype.unsubscribe = function() {
        if (this.closed) {
          return;
        }
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
      };
      Subscriber2.prototype._next = function(value) {
        this.destination.next(value);
      };
      Subscriber2.prototype._error = function(err) {
        this.destination.error(err);
        this.unsubscribe();
      };
      Subscriber2.prototype._complete = function() {
        this.destination.complete();
        this.unsubscribe();
      };
      Subscriber2.prototype._unsubscribeAndRecycle = function() {
        var _parentOrParents = this._parentOrParents;
        this._parentOrParents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parentOrParents = _parentOrParents;
        return this;
      };
      return Subscriber2;
    }(Subscription_1.Subscription);
    exports.Subscriber = Subscriber;
    var SafeSubscriber = function(_super) {
      __extends(SafeSubscriber2, _super);
      function SafeSubscriber2(_parentSubscriber, observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this._parentSubscriber = _parentSubscriber;
        var next;
        var context = _this;
        if (isFunction_1.isFunction(observerOrNext)) {
          next = observerOrNext;
        } else if (observerOrNext) {
          next = observerOrNext.next;
          error = observerOrNext.error;
          complete = observerOrNext.complete;
          if (observerOrNext !== Observer_1.empty) {
            context = Object.create(observerOrNext);
            if (isFunction_1.isFunction(context.unsubscribe)) {
              _this.add(context.unsubscribe.bind(context));
            }
            context.unsubscribe = _this.unsubscribe.bind(_this);
          }
        }
        _this._context = context;
        _this._next = next;
        _this._error = error;
        _this._complete = complete;
        return _this;
      }
      SafeSubscriber2.prototype.next = function(value) {
        if (!this.isStopped && this._next) {
          var _parentSubscriber = this._parentSubscriber;
          if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
            this.__tryOrUnsub(this._next, value);
          } else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
            this.unsubscribe();
          }
        }
      };
      SafeSubscriber2.prototype.error = function(err) {
        if (!this.isStopped) {
          var _parentSubscriber = this._parentSubscriber;
          var useDeprecatedSynchronousErrorHandling = config_1.config.useDeprecatedSynchronousErrorHandling;
          if (this._error) {
            if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
              this.__tryOrUnsub(this._error, err);
              this.unsubscribe();
            } else {
              this.__tryOrSetError(_parentSubscriber, this._error, err);
              this.unsubscribe();
            }
          } else if (!_parentSubscriber.syncErrorThrowable) {
            this.unsubscribe();
            if (useDeprecatedSynchronousErrorHandling) {
              throw err;
            }
            hostReportError_1.hostReportError(err);
          } else {
            if (useDeprecatedSynchronousErrorHandling) {
              _parentSubscriber.syncErrorValue = err;
              _parentSubscriber.syncErrorThrown = true;
            } else {
              hostReportError_1.hostReportError(err);
            }
            this.unsubscribe();
          }
        }
      };
      SafeSubscriber2.prototype.complete = function() {
        var _this = this;
        if (!this.isStopped) {
          var _parentSubscriber = this._parentSubscriber;
          if (this._complete) {
            var wrappedComplete = function() {
              return _this._complete.call(_this._context);
            };
            if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
              this.__tryOrUnsub(wrappedComplete);
              this.unsubscribe();
            } else {
              this.__tryOrSetError(_parentSubscriber, wrappedComplete);
              this.unsubscribe();
            }
          } else {
            this.unsubscribe();
          }
        }
      };
      SafeSubscriber2.prototype.__tryOrUnsub = function(fn, value) {
        try {
          fn.call(this._context, value);
        } catch (err) {
          this.unsubscribe();
          if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            throw err;
          } else {
            hostReportError_1.hostReportError(err);
          }
        }
      };
      SafeSubscriber2.prototype.__tryOrSetError = function(parent, fn, value) {
        if (!config_1.config.useDeprecatedSynchronousErrorHandling) {
          throw new Error("bad call");
        }
        try {
          fn.call(this._context, value);
        } catch (err) {
          if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            parent.syncErrorValue = err;
            parent.syncErrorThrown = true;
            return true;
          } else {
            hostReportError_1.hostReportError(err);
            return true;
          }
        }
        return false;
      };
      SafeSubscriber2.prototype._unsubscribe = function() {
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;
        _parentSubscriber.unsubscribe();
      };
      return SafeSubscriber2;
    }(Subscriber);
    exports.SafeSubscriber = SafeSubscriber;
  }
});

// node_modules/rxjs/internal/util/canReportError.js
var require_canReportError = __commonJS({
  "node_modules/rxjs/internal/util/canReportError.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Subscriber_1 = require_Subscriber();
    function canReportError(observer) {
      while (observer) {
        var _a5 = observer, closed_1 = _a5.closed, destination = _a5.destination, isStopped = _a5.isStopped;
        if (closed_1 || isStopped) {
          return false;
        } else if (destination && destination instanceof Subscriber_1.Subscriber) {
          observer = destination;
        } else {
          observer = null;
        }
      }
      return true;
    }
    exports.canReportError = canReportError;
  }
});

// node_modules/rxjs/internal/util/toSubscriber.js
var require_toSubscriber = __commonJS({
  "node_modules/rxjs/internal/util/toSubscriber.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Subscriber_1 = require_Subscriber();
    var rxSubscriber_1 = require_rxSubscriber();
    var Observer_1 = require_Observer();
    function toSubscriber(nextOrObserver, error, complete) {
      if (nextOrObserver) {
        if (nextOrObserver instanceof Subscriber_1.Subscriber) {
          return nextOrObserver;
        }
        if (nextOrObserver[rxSubscriber_1.rxSubscriber]) {
          return nextOrObserver[rxSubscriber_1.rxSubscriber]();
        }
      }
      if (!nextOrObserver && !error && !complete) {
        return new Subscriber_1.Subscriber(Observer_1.empty);
      }
      return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
    }
    exports.toSubscriber = toSubscriber;
  }
});

// node_modules/rxjs/internal/symbol/observable.js
var require_observable = __commonJS({
  "node_modules/rxjs/internal/symbol/observable.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.observable = function() {
      return typeof Symbol === "function" && Symbol.observable || "@@observable";
    }();
  }
});

// node_modules/rxjs/internal/util/identity.js
var require_identity = __commonJS({
  "node_modules/rxjs/internal/util/identity.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function identity(x) {
      return x;
    }
    exports.identity = identity;
  }
});

// node_modules/rxjs/internal/util/pipe.js
var require_pipe = __commonJS({
  "node_modules/rxjs/internal/util/pipe.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var identity_1 = require_identity();
    function pipe() {
      var fns = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
      }
      return pipeFromArray(fns);
    }
    exports.pipe = pipe;
    function pipeFromArray(fns) {
      if (fns.length === 0) {
        return identity_1.identity;
      }
      if (fns.length === 1) {
        return fns[0];
      }
      return function piped(input) {
        return fns.reduce(function(prev, fn) {
          return fn(prev);
        }, input);
      };
    }
    exports.pipeFromArray = pipeFromArray;
  }
});

// node_modules/rxjs/internal/Observable.js
var require_Observable = __commonJS({
  "node_modules/rxjs/internal/Observable.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var canReportError_1 = require_canReportError();
    var toSubscriber_1 = require_toSubscriber();
    var observable_1 = require_observable();
    var pipe_1 = require_pipe();
    var config_1 = require_config();
    var Observable2 = function() {
      function Observable3(subscribe) {
        this._isScalar = false;
        if (subscribe) {
          this._subscribe = subscribe;
        }
      }
      Observable3.prototype.lift = function(operator) {
        var observable = new Observable3();
        observable.source = this;
        observable.operator = operator;
        return observable;
      };
      Observable3.prototype.subscribe = function(observerOrNext, error, complete) {
        var operator = this.operator;
        var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);
        if (operator) {
          sink.add(operator.call(sink, this.source));
        } else {
          sink.add(this.source || config_1.config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable ? this._subscribe(sink) : this._trySubscribe(sink));
        }
        if (config_1.config.useDeprecatedSynchronousErrorHandling) {
          if (sink.syncErrorThrowable) {
            sink.syncErrorThrowable = false;
            if (sink.syncErrorThrown) {
              throw sink.syncErrorValue;
            }
          }
        }
        return sink;
      };
      Observable3.prototype._trySubscribe = function(sink) {
        try {
          return this._subscribe(sink);
        } catch (err) {
          if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            sink.syncErrorThrown = true;
            sink.syncErrorValue = err;
          }
          if (canReportError_1.canReportError(sink)) {
            sink.error(err);
          } else {
            console.warn(err);
          }
        }
      };
      Observable3.prototype.forEach = function(next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function(resolve, reject) {
          var subscription;
          subscription = _this.subscribe(function(value) {
            try {
              next(value);
            } catch (err) {
              reject(err);
              if (subscription) {
                subscription.unsubscribe();
              }
            }
          }, reject, resolve);
        });
      };
      Observable3.prototype._subscribe = function(subscriber) {
        var source = this.source;
        return source && source.subscribe(subscriber);
      };
      Observable3.prototype[observable_1.observable] = function() {
        return this;
      };
      Observable3.prototype.pipe = function() {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          operations[_i] = arguments[_i];
        }
        if (operations.length === 0) {
          return this;
        }
        return pipe_1.pipeFromArray(operations)(this);
      };
      Observable3.prototype.toPromise = function(promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function(resolve, reject) {
          var value;
          _this.subscribe(function(x) {
            return value = x;
          }, function(err) {
            return reject(err);
          }, function() {
            return resolve(value);
          });
        });
      };
      Observable3.create = function(subscribe) {
        return new Observable3(subscribe);
      };
      return Observable3;
    }();
    exports.Observable = Observable2;
    function getPromiseCtor(promiseCtor) {
      if (!promiseCtor) {
        promiseCtor = config_1.config.Promise || Promise;
      }
      if (!promiseCtor) {
        throw new Error("no Promise impl found");
      }
      return promiseCtor;
    }
  }
});

// node_modules/rxjs/internal/observable/throwError.js
var require_throwError = __commonJS({
  "node_modules/rxjs/internal/observable/throwError.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Observable_1 = require_Observable();
    function throwError2(error, scheduler) {
      if (!scheduler) {
        return new Observable_1.Observable(function(subscriber) {
          return subscriber.error(error);
        });
      } else {
        return new Observable_1.Observable(function(subscriber) {
          return scheduler.schedule(dispatch, 0, {
            error,
            subscriber
          });
        });
      }
    }
    exports.throwError = throwError2;
    function dispatch(_a5) {
      var error = _a5.error, subscriber = _a5.subscriber;
      subscriber.error(error);
    }
  }
});

// src/environments/environment.ts
var EBI_BASE_URL = "https://www.ebi.ac.uk/";
var COMPLEX_BASE_URL = "https://wwwdev.ebi.ac.uk/";
var LICENSE_URL = "https://creativecommons.org/licenses/by/4.0/";
var REACTOME_BASE_URL = "https://reactome.org";
var INTACT_FTP_BASE_URL = "ftp://ftp.ebi.ac.uk/pub/databases/intact/";
var COMPLEX__FTP_BASE_URL = INTACT_FTP_BASE_URL + "complex/";
var COMPLEX_PORTAL_DOCUMENTATION_URL = "https://raw.githubusercontent.com/Complex-Portal/complex-portal-documentation/uniplex-import/";
var INTACT_PORTAL_DOCUMENTATION_URL = "https://raw.githubusercontent.com/Intact-Portal/intact-portal-documentation/master/";
var environment = {
  production: false,
  evn: "test",
  analytics_id: "UA-672146-13",
  ebi_base_url: EBI_BASE_URL,
  license_url: LICENSE_URL,
  complex_portal_documentation_url: COMPLEX_PORTAL_DOCUMENTATION_URL,
  intact_portal_documentation_url: INTACT_PORTAL_DOCUMENTATION_URL,
  complex_ws_base_url: COMPLEX_BASE_URL + "intact/complex-ws",
  europepmc_base_url: EBI_BASE_URL + "europepmc",
  pdb_base_url: EBI_BASE_URL + "pdbe",
  ols_base_url: EBI_BASE_URL + "ols4/api/ontologies",
  ols_go_url: EBI_BASE_URL + "ols4/ontologies/go/terms?obo_id=",
  ols_eco_url: EBI_BASE_URL + "ols4/ontologies/eco/terms?obo_id=",
  complex_current: COMPLEX__FTP_BASE_URL + "current",
  complex_tab: COMPLEX__FTP_BASE_URL + "current/complextab/",
  complex_tab_readme: COMPLEX__FTP_BASE_URL + "current/complextab/README.htm",
  complex_psi25: COMPLEX__FTP_BASE_URL + "current/psi25/",
  complex_psi30: COMPLEX__FTP_BASE_URL + "current/psi30/",
  intact_base_url: EBI_BASE_URL + "intact",
  complex_portal_support_url: EBI_BASE_URL + "support/complexportal",
  training_url: EBI_BASE_URL + "training/search-results?query=complex%20portal",
  reactome_base_url: REACTOME_BASE_URL
};

// src/app/complex/shared/service/complex-portal.service.ts
var import_throwError = __toESM(require_throwError());
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ComplexPortalService_1;
var baseURL = environment.complex_ws_base_url;
var _a;
var ComplexPortalService = (_a = class {
  constructor(http) {
    __publicField(this, "http");
    this.http = http;
  }
  /**
   * Get a specific complex from the WS
   * @param ac
   * @returns {Observable<ComplexDetails>}
   */
  getComplex(ac) {
    const url = `${baseURL}/details/${ac}`;
    return this.http.get(url).pipe(catchError(this.handleError));
  }
  /**
   * Get a specific complex from the WS
   * @param complexAc
   * @returns {Observable<ComplexDetails>}
   */
  getComplexAc(complexAc) {
    const url = `${baseURL}/complex/${complexAc}`;
    return this.http.get(url).pipe(catchError(this.handleError));
  }
  /**
   *
   * @returns {Observable<Facet[]>}
   */
  getComplexOrganisms() {
    return this.findComplex("*").pipe(map((complexSearchResult) => {
      return complexSearchResult.facets["species_f"];
    }));
  }
  /**
   * Get a specif complex from the WS
   * @param ac
   * @returns {Observable<any>}
   * TODO: Define MI-JSON maybe, but as we don't work with it and only pass it on we never implemented the model
   */
  getComplexMIJSON(ac) {
    return this.http.get(baseURL + "/export/" + ac).pipe(catchError(this.handleError));
  }
  findComplexNoFilters(query, currentPageIndex = 1, pageSize = 10, format = "json") {
    return this.findComplex(query, [], [], [], [], [], currentPageIndex, pageSize, format);
  }
  /**
   * Find a complex based on indexed term
   * @param query
   * @param speciesFilter
   * @param bioRoleFilter
   * @param interactorTypeFilter
   * @param predictedFilter
   * @param confidenceScoreFilter
   * @param currentPageIndex
   * @param pageSize
   * @param format
   * @returns {Observable<ComplexSearchResult>}
   */
  findComplex(query, speciesFilter = [], bioRoleFilter = [], interactorTypeFilter = [], predictedFilter = [], confidenceScoreFilter = [], currentPageIndex = 1, pageSize = 10, format = "json") {
    let filters = "";
    if (speciesFilter.length !== 0) {
      filters += this.buildFilterParam(ComplexPortalService_1.SPECIES_FACET_FIELD, speciesFilter);
    }
    if (bioRoleFilter.length !== 0) {
      filters += this.buildFilterParam(ComplexPortalService_1.BIO_ROLE_FACET_FIELD, bioRoleFilter);
    }
    if (interactorTypeFilter.length !== 0) {
      filters += this.buildFilterParam(ComplexPortalService_1.COMPONENT_TYPE_FACET_FIELD, interactorTypeFilter);
    }
    if (predictedFilter.length !== 0) {
      filters += this.buildFilterParam(ComplexPortalService_1.PREDICTED_FACET_FIELD, predictedFilter);
    }
    if (confidenceScoreFilter.length !== 0) {
      filters += this.buildFilterParam(ComplexPortalService_1.CONFIDENCE_SCORE_FACET_FIELD, confidenceScoreFilter);
    }
    const params = new HttpParams().set("first", (currentPageIndex * pageSize - pageSize).toString()).set("number", pageSize.toString()).set("format", format).set("facets", ComplexPortalService_1.FACETS).set("filters", filters);
    return this.http.get(baseURL + "/search/" + query, { params }).pipe(catchError(this.handleError));
  }
  buildFilterParam(filterField, filterValues) {
    return filterField + ':("' + filterValues.join('"OR"') + '"),';
  }
  handleError(err) {
    if (err.error instanceof Error) {
      return (0, import_throwError.throwError)(err);
    } else {
      console.error(err.message ? err.message : err.toString());
    }
  }
  getSimplifiedComplex(complexAc) {
    const url = `${baseURL}/complex-simplified/${complexAc}`;
    return this.http.get(url).pipe(catchError(this.handleError));
  }
}, ComplexPortalService_1 = _a, __publicField(_a, "SPECIES_FACET_FIELD", "species_f"), __publicField(_a, "COMPONENT_TYPE_FACET_FIELD", "ptype_f"), __publicField(_a, "BIO_ROLE_FACET_FIELD", "pbiorole_f"), __publicField(_a, "PREDICTED_FACET_FIELD", "predicted_complex_f"), __publicField(_a, "CONFIDENCE_SCORE_FACET_FIELD", "confidence_score_f"), __publicField(_a, "FACETS", [
  ComplexPortalService_1.SPECIES_FACET_FIELD,
  ComplexPortalService_1.COMPONENT_TYPE_FACET_FIELD,
  ComplexPortalService_1.BIO_ROLE_FACET_FIELD,
  ComplexPortalService_1.PREDICTED_FACET_FIELD,
  ComplexPortalService_1.CONFIDENCE_SCORE_FACET_FIELD
].join(",")), __publicField(_a, "ctorParameters", () => [
  { type: HttpClient }
]), _a);
ComplexPortalService = ComplexPortalService_1 = __decorate([
  Injectable()
], ComplexPortalService);

// angular:jit:template:file:src/app/shared/loading-indicators/progress-spinner/progress-spinner.component.html
var progress_spinner_component_default = '<div class="small-5 small-centered columns">\n  <mat-spinner style="margin:0 auto;"\n               [mode]="mode"\n               [color]="color">\n  </mat-spinner>\n\n  <div style="text-align: center">\n    <h4>Loading {{ query }}</h4>\n    <p *ngIf="takesLonger">This takes longer than usual. Bear with us!</p>\n  </div>\n</div>\n';

// angular:jit:style:file:src/app/shared/loading-indicators/progress-spinner/progress-spinner.component.css
var progress_spinner_component_default2 = "/* src/app/shared/loading-indicators/progress-spinner/progress-spinner.component.css */\n/*# sourceMappingURL=progress-spinner.component.css.map */\n";

// node_modules/@angular/cdk/fesm2022/platform.mjs
var hasV8BreakIterator;
try {
  hasV8BreakIterator = typeof Intl !== "undefined" && Intl.v8BreakIterator;
} catch {
  hasV8BreakIterator = false;
}
var _Platform = class _Platform {
  constructor(_platformId) {
    this._platformId = _platformId;
    this.isBrowser = this._platformId ? isPlatformBrowser(this._platformId) : typeof document === "object" && !!document;
    this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
    this.TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
    this.BLINK = this.isBrowser && !!(window.chrome || hasV8BreakIterator) && typeof CSS !== "undefined" && !this.EDGE && !this.TRIDENT;
    this.WEBKIT = this.isBrowser && /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
    this.IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !("MSStream" in window);
    this.FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
    this.ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT;
    this.SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
  }
};
_Platform.\u0275fac = \u0275\u0275ngDeclareFactory({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _Platform,
  deps: [{
    token: PLATFORM_ID
  }],
  target: FactoryTarget.Injectable
});
_Platform.\u0275prov = \u0275\u0275ngDeclareInjectable({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _Platform,
  providedIn: "root"
});
var Platform = _Platform;
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: Platform,
  decorators: [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }],
  ctorParameters: () => [{
    type: Object,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }]
});
var _PlatformModule = class _PlatformModule {
};
_PlatformModule.\u0275fac = \u0275\u0275ngDeclareFactory({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _PlatformModule,
  deps: [],
  target: FactoryTarget.NgModule
});
_PlatformModule.\u0275mod = \u0275\u0275ngDeclareNgModule({
  minVersion: "14.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _PlatformModule
});
_PlatformModule.\u0275inj = \u0275\u0275ngDeclareInjector({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _PlatformModule
});
var PlatformModule = _PlatformModule;
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: PlatformModule,
  decorators: [{
    type: NgModule,
    args: [{}]
  }]
});
var supportsPassiveEvents;
function supportsPassiveEventListeners() {
  if (supportsPassiveEvents == null && typeof window !== "undefined") {
    try {
      window.addEventListener("test", null, Object.defineProperty({}, "passive", {
        get: () => supportsPassiveEvents = true
      }));
    } finally {
      supportsPassiveEvents = supportsPassiveEvents || false;
    }
  }
  return supportsPassiveEvents;
}
function normalizePassiveListenerOptions(options) {
  return supportsPassiveEventListeners() ? options : !!options.capture;
}
var RtlScrollAxisType;
(function(RtlScrollAxisType2) {
  RtlScrollAxisType2[RtlScrollAxisType2["NORMAL"] = 0] = "NORMAL";
  RtlScrollAxisType2[RtlScrollAxisType2["NEGATED"] = 1] = "NEGATED";
  RtlScrollAxisType2[RtlScrollAxisType2["INVERTED"] = 2] = "INVERTED";
})(RtlScrollAxisType || (RtlScrollAxisType = {}));
var rtlScrollAxisType;
var scrollBehaviorSupported;
function supportsScrollBehavior() {
  if (scrollBehaviorSupported == null) {
    if (typeof document !== "object" || !document || typeof Element !== "function" || !Element) {
      scrollBehaviorSupported = false;
      return scrollBehaviorSupported;
    }
    if ("scrollBehavior" in document.documentElement.style) {
      scrollBehaviorSupported = true;
    } else {
      const scrollToFunction = Element.prototype.scrollTo;
      if (scrollToFunction) {
        scrollBehaviorSupported = !/\{\s*\[native code\]\s*\}/.test(scrollToFunction.toString());
      } else {
        scrollBehaviorSupported = false;
      }
    }
  }
  return scrollBehaviorSupported;
}
function getRtlScrollAxisType() {
  if (typeof document !== "object" || !document) {
    return RtlScrollAxisType.NORMAL;
  }
  if (rtlScrollAxisType == null) {
    const scrollContainer = document.createElement("div");
    const containerStyle = scrollContainer.style;
    scrollContainer.dir = "rtl";
    containerStyle.width = "1px";
    containerStyle.overflow = "auto";
    containerStyle.visibility = "hidden";
    containerStyle.pointerEvents = "none";
    containerStyle.position = "absolute";
    const content = document.createElement("div");
    const contentStyle = content.style;
    contentStyle.width = "2px";
    contentStyle.height = "1px";
    scrollContainer.appendChild(content);
    document.body.appendChild(scrollContainer);
    rtlScrollAxisType = RtlScrollAxisType.NORMAL;
    if (scrollContainer.scrollLeft === 0) {
      scrollContainer.scrollLeft = 1;
      rtlScrollAxisType = scrollContainer.scrollLeft === 0 ? RtlScrollAxisType.NEGATED : RtlScrollAxisType.INVERTED;
    }
    scrollContainer.remove();
  }
  return rtlScrollAxisType;
}
var shadowDomIsSupported;
function _supportsShadowDom() {
  if (shadowDomIsSupported == null) {
    const head = typeof document !== "undefined" ? document.head : null;
    shadowDomIsSupported = !!(head && (head.createShadowRoot || head.attachShadow));
  }
  return shadowDomIsSupported;
}
function _getShadowRoot(element) {
  if (_supportsShadowDom()) {
    const rootNode = element.getRootNode ? element.getRootNode() : null;
    if (typeof ShadowRoot !== "undefined" && ShadowRoot && rootNode instanceof ShadowRoot) {
      return rootNode;
    }
  }
  return null;
}
function _getFocusedElementPierceShadowDom() {
  let activeElement = typeof document !== "undefined" && document ? document.activeElement : null;
  while (activeElement && activeElement.shadowRoot) {
    const newActiveElement = activeElement.shadowRoot.activeElement;
    if (newActiveElement === activeElement) {
      break;
    } else {
      activeElement = newActiveElement;
    }
  }
  return activeElement;
}
function _getEventTarget(event) {
  return event.composedPath ? event.composedPath()[0] : event.target;
}
function _isTestEnvironment() {
  return (
    // @ts-ignore
    typeof __karma__ !== "undefined" && !!__karma__ || // @ts-ignore
    typeof jasmine !== "undefined" && !!jasmine || // @ts-ignore
    typeof jest !== "undefined" && !!jest || // @ts-ignore
    typeof Mocha !== "undefined" && !!Mocha
  );
}

// node_modules/@angular/cdk/fesm2022/keycodes.mjs
var ENTER = 13;
var SHIFT = 16;
var CONTROL = 17;
var ALT = 18;
var ESCAPE = 27;
var SPACE = 32;
var META = 91;
var MAC_META = 224;
function hasModifierKey(event, ...modifiers) {
  if (modifiers.length) {
    return modifiers.some((modifier) => event[modifier]);
  }
  return event.altKey || event.shiftKey || event.ctrlKey || event.metaKey;
}

// node_modules/@angular/cdk/fesm2022/coercion.mjs
function coerceBooleanProperty(value) {
  return value != null && `${value}` !== "false";
}
function coerceNumberProperty(value, fallbackValue = 0) {
  if (_isNumberValue(value)) {
    return Number(value);
  }
  return arguments.length === 2 ? fallbackValue : 0;
}
function _isNumberValue(value) {
  return !isNaN(parseFloat(value)) && !isNaN(Number(value));
}
function coerceArray(value) {
  return Array.isArray(value) ? value : [value];
}
function coerceCssPixelValue(value) {
  if (value == null) {
    return "";
  }
  return typeof value === "string" ? value : `${value}px`;
}
function coerceElement(elementOrRef) {
  return elementOrRef instanceof ElementRef ? elementOrRef.nativeElement : elementOrRef;
}

// node_modules/@angular/cdk/fesm2022/observers.mjs
function shouldIgnoreRecord(record) {
  if (record.type === "characterData" && record.target instanceof Comment) {
    return true;
  }
  if (record.type === "childList") {
    for (let i = 0; i < record.addedNodes.length; i++) {
      if (!(record.addedNodes[i] instanceof Comment)) {
        return false;
      }
    }
    for (let i = 0; i < record.removedNodes.length; i++) {
      if (!(record.removedNodes[i] instanceof Comment)) {
        return false;
      }
    }
    return true;
  }
  return false;
}
var _MutationObserverFactory = class _MutationObserverFactory {
  create(callback) {
    return typeof MutationObserver === "undefined" ? null : new MutationObserver(callback);
  }
};
_MutationObserverFactory.\u0275fac = \u0275\u0275ngDeclareFactory({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _MutationObserverFactory,
  deps: [],
  target: FactoryTarget.Injectable
});
_MutationObserverFactory.\u0275prov = \u0275\u0275ngDeclareInjectable({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _MutationObserverFactory,
  providedIn: "root"
});
var MutationObserverFactory = _MutationObserverFactory;
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: MutationObserverFactory,
  decorators: [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }]
});
var _ContentObserver = class _ContentObserver {
  constructor(_mutationObserverFactory) {
    this._mutationObserverFactory = _mutationObserverFactory;
    this._observedElements = /* @__PURE__ */ new Map();
    this._ngZone = inject(NgZone);
  }
  ngOnDestroy() {
    this._observedElements.forEach((_, element) => this._cleanupObserver(element));
  }
  observe(elementOrRef) {
    const element = coerceElement(elementOrRef);
    return new Observable((observer) => {
      const stream = this._observeElement(element);
      const subscription = stream.pipe(map((records) => records.filter((record) => !shouldIgnoreRecord(record))), filter((records) => !!records.length)).subscribe((records) => {
        this._ngZone.run(() => {
          observer.next(records);
        });
      });
      return () => {
        subscription.unsubscribe();
        this._unobserveElement(element);
      };
    });
  }
  /**
   * Observes the given element by using the existing MutationObserver if available, or creating a
   * new one if not.
   */
  _observeElement(element) {
    return this._ngZone.runOutsideAngular(() => {
      if (!this._observedElements.has(element)) {
        const stream = new Subject();
        const observer = this._mutationObserverFactory.create((mutations) => stream.next(mutations));
        if (observer) {
          observer.observe(element, {
            characterData: true,
            childList: true,
            subtree: true
          });
        }
        this._observedElements.set(element, {
          observer,
          stream,
          count: 1
        });
      } else {
        this._observedElements.get(element).count++;
      }
      return this._observedElements.get(element).stream;
    });
  }
  /**
   * Un-observes the given element and cleans up the underlying MutationObserver if nobody else is
   * observing this element.
   */
  _unobserveElement(element) {
    if (this._observedElements.has(element)) {
      this._observedElements.get(element).count--;
      if (!this._observedElements.get(element).count) {
        this._cleanupObserver(element);
      }
    }
  }
  /** Clean up the underlying MutationObserver for the specified element. */
  _cleanupObserver(element) {
    if (this._observedElements.has(element)) {
      const {
        observer,
        stream
      } = this._observedElements.get(element);
      if (observer) {
        observer.disconnect();
      }
      stream.complete();
      this._observedElements.delete(element);
    }
  }
};
_ContentObserver.\u0275fac = \u0275\u0275ngDeclareFactory({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _ContentObserver,
  deps: [{
    token: MutationObserverFactory
  }],
  target: FactoryTarget.Injectable
});
_ContentObserver.\u0275prov = \u0275\u0275ngDeclareInjectable({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _ContentObserver,
  providedIn: "root"
});
var ContentObserver = _ContentObserver;
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: ContentObserver,
  decorators: [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }],
  ctorParameters: () => [{
    type: MutationObserverFactory
  }]
});
var _CdkObserveContent = class _CdkObserveContent {
  /**
   * Whether observing content is disabled. This option can be used
   * to disconnect the underlying MutationObserver until it is needed.
   */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = value;
    this._disabled ? this._unsubscribe() : this._subscribe();
  }
  /** Debounce interval for emitting the changes. */
  get debounce() {
    return this._debounce;
  }
  set debounce(value) {
    this._debounce = coerceNumberProperty(value);
    this._subscribe();
  }
  constructor(_contentObserver, _elementRef) {
    this._contentObserver = _contentObserver;
    this._elementRef = _elementRef;
    this.event = new EventEmitter();
    this._disabled = false;
    this._currentSubscription = null;
  }
  ngAfterContentInit() {
    if (!this._currentSubscription && !this.disabled) {
      this._subscribe();
    }
  }
  ngOnDestroy() {
    this._unsubscribe();
  }
  _subscribe() {
    this._unsubscribe();
    const stream = this._contentObserver.observe(this._elementRef);
    this._currentSubscription = (this.debounce ? stream.pipe(debounceTime(this.debounce)) : stream).subscribe(this.event);
  }
  _unsubscribe() {
    this._currentSubscription?.unsubscribe();
  }
};
_CdkObserveContent.\u0275fac = \u0275\u0275ngDeclareFactory({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _CdkObserveContent,
  deps: [{
    token: ContentObserver
  }, {
    token: ElementRef
  }],
  target: FactoryTarget.Directive
});
_CdkObserveContent.\u0275dir = \u0275\u0275ngDeclareDirective({
  minVersion: "16.1.0",
  version: "18.2.0-next.2",
  type: _CdkObserveContent,
  isStandalone: true,
  selector: "[cdkObserveContent]",
  inputs: {
    disabled: ["cdkObserveContentDisabled", "disabled", booleanAttribute],
    debounce: "debounce"
  },
  outputs: {
    event: "cdkObserveContent"
  },
  exportAs: ["cdkObserveContent"],
  ngImport: core_exports
});
var CdkObserveContent = _CdkObserveContent;
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: CdkObserveContent,
  decorators: [{
    type: Directive,
    args: [{
      selector: "[cdkObserveContent]",
      exportAs: "cdkObserveContent",
      standalone: true
    }]
  }],
  ctorParameters: () => [{
    type: ContentObserver
  }, {
    type: ElementRef
  }],
  propDecorators: {
    event: [{
      type: Output,
      args: ["cdkObserveContent"]
    }],
    disabled: [{
      type: Input,
      args: [{
        alias: "cdkObserveContentDisabled",
        transform: booleanAttribute
      }]
    }],
    debounce: [{
      type: Input
    }]
  }
});
var _ObserversModule = class _ObserversModule {
};
_ObserversModule.\u0275fac = \u0275\u0275ngDeclareFactory({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _ObserversModule,
  deps: [],
  target: FactoryTarget.NgModule
});
_ObserversModule.\u0275mod = \u0275\u0275ngDeclareNgModule({
  minVersion: "14.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _ObserversModule,
  imports: [CdkObserveContent],
  exports: [CdkObserveContent]
});
_ObserversModule.\u0275inj = \u0275\u0275ngDeclareInjector({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _ObserversModule,
  providers: [MutationObserverFactory]
});
var ObserversModule = _ObserversModule;
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: ObserversModule,
  decorators: [{
    type: NgModule,
    args: [{
      imports: [CdkObserveContent],
      exports: [CdkObserveContent],
      providers: [MutationObserverFactory]
    }]
  }]
});

// node_modules/@angular/cdk/fesm2022/layout.mjs
var _LayoutModule = class _LayoutModule {
};
_LayoutModule.\u0275fac = \u0275\u0275ngDeclareFactory({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _LayoutModule,
  deps: [],
  target: FactoryTarget.NgModule
});
_LayoutModule.\u0275mod = \u0275\u0275ngDeclareNgModule({
  minVersion: "14.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _LayoutModule
});
_LayoutModule.\u0275inj = \u0275\u0275ngDeclareInjector({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _LayoutModule
});
var LayoutModule = _LayoutModule;
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: LayoutModule,
  decorators: [{
    type: NgModule,
    args: [{}]
  }]
});
var mediaQueriesForWebkitCompatibility = /* @__PURE__ */ new Set();
var mediaQueryStyleNode;
var _MediaMatcher = class _MediaMatcher {
  constructor(_platform, _nonce) {
    this._platform = _platform;
    this._nonce = _nonce;
    this._matchMedia = this._platform.isBrowser && window.matchMedia ? (
      // matchMedia is bound to the window scope intentionally as it is an illegal invocation to
      // call it from a different scope.
      window.matchMedia.bind(window)
    ) : noopMatchMedia;
  }
  /**
   * Evaluates the given media query and returns the native MediaQueryList from which results
   * can be retrieved.
   * Confirms the layout engine will trigger for the selector query provided and returns the
   * MediaQueryList for the query provided.
   */
  matchMedia(query) {
    if (this._platform.WEBKIT || this._platform.BLINK) {
      createEmptyStyleRule(query, this._nonce);
    }
    return this._matchMedia(query);
  }
};
_MediaMatcher.\u0275fac = \u0275\u0275ngDeclareFactory({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _MediaMatcher,
  deps: [{
    token: Platform
  }, {
    token: CSP_NONCE,
    optional: true
  }],
  target: FactoryTarget.Injectable
});
_MediaMatcher.\u0275prov = \u0275\u0275ngDeclareInjectable({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _MediaMatcher,
  providedIn: "root"
});
var MediaMatcher = _MediaMatcher;
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: MediaMatcher,
  decorators: [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }],
  ctorParameters: () => [{
    type: Platform
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CSP_NONCE]
    }]
  }]
});
function createEmptyStyleRule(query, nonce) {
  if (mediaQueriesForWebkitCompatibility.has(query)) {
    return;
  }
  try {
    if (!mediaQueryStyleNode) {
      mediaQueryStyleNode = document.createElement("style");
      if (nonce) {
        mediaQueryStyleNode.setAttribute("nonce", nonce);
      }
      mediaQueryStyleNode.setAttribute("type", "text/css");
      document.head.appendChild(mediaQueryStyleNode);
    }
    if (mediaQueryStyleNode.sheet) {
      mediaQueryStyleNode.sheet.insertRule(`@media ${query} {body{ }}`, 0);
      mediaQueriesForWebkitCompatibility.add(query);
    }
  } catch (e) {
    console.error(e);
  }
}
function noopMatchMedia(query) {
  return {
    matches: query === "all" || query === "",
    media: query,
    addListener: () => {
    },
    removeListener: () => {
    }
  };
}
var _BreakpointObserver = class _BreakpointObserver {
  constructor(_mediaMatcher, _zone) {
    this._mediaMatcher = _mediaMatcher;
    this._zone = _zone;
    this._queries = /* @__PURE__ */ new Map();
    this._destroySubject = new Subject();
  }
  /** Completes the active subject, signalling to all other observables to complete. */
  ngOnDestroy() {
    this._destroySubject.next();
    this._destroySubject.complete();
  }
  /**
   * Whether one or more media queries match the current viewport size.
   * @param value One or more media queries to check.
   * @returns Whether any of the media queries match.
   */
  isMatched(value) {
    const queries = splitQueries(coerceArray(value));
    return queries.some((mediaQuery) => this._registerQuery(mediaQuery).mql.matches);
  }
  /**
   * Gets an observable of results for the given queries that will emit new results for any changes
   * in matching of the given queries.
   * @param value One or more media queries to check.
   * @returns A stream of matches for the given queries.
   */
  observe(value) {
    const queries = splitQueries(coerceArray(value));
    const observables = queries.map((query) => this._registerQuery(query).observable);
    let stateObservable = combineLatest(observables);
    stateObservable = concat(stateObservable.pipe(take(1)), stateObservable.pipe(skip(1), debounceTime(0)));
    return stateObservable.pipe(map((breakpointStates) => {
      const response = {
        matches: false,
        breakpoints: {}
      };
      breakpointStates.forEach(({
        matches,
        query
      }) => {
        response.matches = response.matches || matches;
        response.breakpoints[query] = matches;
      });
      return response;
    }));
  }
  /** Registers a specific query to be listened for. */
  _registerQuery(query) {
    if (this._queries.has(query)) {
      return this._queries.get(query);
    }
    const mql = this._mediaMatcher.matchMedia(query);
    const queryObservable = new Observable((observer) => {
      const handler = (e) => this._zone.run(() => observer.next(e));
      mql.addListener(handler);
      return () => {
        mql.removeListener(handler);
      };
    }).pipe(startWith(mql), map(({
      matches
    }) => ({
      query,
      matches
    })), takeUntil(this._destroySubject));
    const output = {
      observable: queryObservable,
      mql
    };
    this._queries.set(query, output);
    return output;
  }
};
_BreakpointObserver.\u0275fac = \u0275\u0275ngDeclareFactory({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _BreakpointObserver,
  deps: [{
    token: MediaMatcher
  }, {
    token: NgZone
  }],
  target: FactoryTarget.Injectable
});
_BreakpointObserver.\u0275prov = \u0275\u0275ngDeclareInjectable({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _BreakpointObserver,
  providedIn: "root"
});
var BreakpointObserver = _BreakpointObserver;
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: BreakpointObserver,
  decorators: [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }],
  ctorParameters: () => [{
    type: MediaMatcher
  }, {
    type: NgZone
  }]
});
function splitQueries(queries) {
  return queries.map((query) => query.split(",")).reduce((a1, a2) => a1.concat(a2)).map((query) => query.trim());
}

// node_modules/@angular/cdk/fesm2022/a11y.mjs
var ID_DELIMITER = " ";
function addAriaReferencedId(el, attr, id) {
  const ids = getAriaReferenceIds(el, attr);
  id = id.trim();
  if (ids.some((existingId) => existingId.trim() === id)) {
    return;
  }
  ids.push(id);
  el.setAttribute(attr, ids.join(ID_DELIMITER));
}
function removeAriaReferencedId(el, attr, id) {
  const ids = getAriaReferenceIds(el, attr);
  id = id.trim();
  const filteredIds = ids.filter((val) => val !== id);
  if (filteredIds.length) {
    el.setAttribute(attr, filteredIds.join(ID_DELIMITER));
  } else {
    el.removeAttribute(attr);
  }
}
function getAriaReferenceIds(el, attr) {
  const attrValue = el.getAttribute(attr);
  return attrValue?.match(/\S+/g) ?? [];
}
var CDK_DESCRIBEDBY_ID_PREFIX = "cdk-describedby-message";
var CDK_DESCRIBEDBY_HOST_ATTRIBUTE = "cdk-describedby-host";
var nextId = 0;
var _AriaDescriber = class _AriaDescriber {
  constructor(_document, _platform) {
    this._platform = _platform;
    this._messageRegistry = /* @__PURE__ */ new Map();
    this._messagesContainer = null;
    this._id = `${nextId++}`;
    this._document = _document;
    this._id = inject(APP_ID) + "-" + nextId++;
  }
  describe(hostElement, message, role) {
    if (!this._canBeDescribed(hostElement, message)) {
      return;
    }
    const key = getKey(message, role);
    if (typeof message !== "string") {
      setMessageId(message, this._id);
      this._messageRegistry.set(key, {
        messageElement: message,
        referenceCount: 0
      });
    } else if (!this._messageRegistry.has(key)) {
      this._createMessageElement(message, role);
    }
    if (!this._isElementDescribedByMessage(hostElement, key)) {
      this._addMessageReference(hostElement, key);
    }
  }
  removeDescription(hostElement, message, role) {
    if (!message || !this._isElementNode(hostElement)) {
      return;
    }
    const key = getKey(message, role);
    if (this._isElementDescribedByMessage(hostElement, key)) {
      this._removeMessageReference(hostElement, key);
    }
    if (typeof message === "string") {
      const registeredMessage = this._messageRegistry.get(key);
      if (registeredMessage && registeredMessage.referenceCount === 0) {
        this._deleteMessageElement(key);
      }
    }
    if (this._messagesContainer?.childNodes.length === 0) {
      this._messagesContainer.remove();
      this._messagesContainer = null;
    }
  }
  /** Unregisters all created message elements and removes the message container. */
  ngOnDestroy() {
    const describedElements = this._document.querySelectorAll(`[${CDK_DESCRIBEDBY_HOST_ATTRIBUTE}="${this._id}"]`);
    for (let i = 0; i < describedElements.length; i++) {
      this._removeCdkDescribedByReferenceIds(describedElements[i]);
      describedElements[i].removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
    }
    this._messagesContainer?.remove();
    this._messagesContainer = null;
    this._messageRegistry.clear();
  }
  /**
   * Creates a new element in the visually hidden message container element with the message
   * as its content and adds it to the message registry.
   */
  _createMessageElement(message, role) {
    const messageElement = this._document.createElement("div");
    setMessageId(messageElement, this._id);
    messageElement.textContent = message;
    if (role) {
      messageElement.setAttribute("role", role);
    }
    this._createMessagesContainer();
    this._messagesContainer.appendChild(messageElement);
    this._messageRegistry.set(getKey(message, role), {
      messageElement,
      referenceCount: 0
    });
  }
  /** Deletes the message element from the global messages container. */
  _deleteMessageElement(key) {
    this._messageRegistry.get(key)?.messageElement?.remove();
    this._messageRegistry.delete(key);
  }
  /** Creates the global container for all aria-describedby messages. */
  _createMessagesContainer() {
    if (this._messagesContainer) {
      return;
    }
    const containerClassName = "cdk-describedby-message-container";
    const serverContainers = this._document.querySelectorAll(`.${containerClassName}[platform="server"]`);
    for (let i = 0; i < serverContainers.length; i++) {
      serverContainers[i].remove();
    }
    const messagesContainer = this._document.createElement("div");
    messagesContainer.style.visibility = "hidden";
    messagesContainer.classList.add(containerClassName);
    messagesContainer.classList.add("cdk-visually-hidden");
    if (this._platform && !this._platform.isBrowser) {
      messagesContainer.setAttribute("platform", "server");
    }
    this._document.body.appendChild(messagesContainer);
    this._messagesContainer = messagesContainer;
  }
  /** Removes all cdk-describedby messages that are hosted through the element. */
  _removeCdkDescribedByReferenceIds(element) {
    const originalReferenceIds = getAriaReferenceIds(element, "aria-describedby").filter((id) => id.indexOf(CDK_DESCRIBEDBY_ID_PREFIX) != 0);
    element.setAttribute("aria-describedby", originalReferenceIds.join(" "));
  }
  /**
   * Adds a message reference to the element using aria-describedby and increments the registered
   * message's reference count.
   */
  _addMessageReference(element, key) {
    const registeredMessage = this._messageRegistry.get(key);
    addAriaReferencedId(element, "aria-describedby", registeredMessage.messageElement.id);
    element.setAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE, this._id);
    registeredMessage.referenceCount++;
  }
  /**
   * Removes a message reference from the element using aria-describedby
   * and decrements the registered message's reference count.
   */
  _removeMessageReference(element, key) {
    const registeredMessage = this._messageRegistry.get(key);
    registeredMessage.referenceCount--;
    removeAriaReferencedId(element, "aria-describedby", registeredMessage.messageElement.id);
    element.removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
  }
  /** Returns true if the element has been described by the provided message ID. */
  _isElementDescribedByMessage(element, key) {
    const referenceIds = getAriaReferenceIds(element, "aria-describedby");
    const registeredMessage = this._messageRegistry.get(key);
    const messageId = registeredMessage && registeredMessage.messageElement.id;
    return !!messageId && referenceIds.indexOf(messageId) != -1;
  }
  /** Determines whether a message can be described on a particular element. */
  _canBeDescribed(element, message) {
    if (!this._isElementNode(element)) {
      return false;
    }
    if (message && typeof message === "object") {
      return true;
    }
    const trimmedMessage = message == null ? "" : `${message}`.trim();
    const ariaLabel = element.getAttribute("aria-label");
    return trimmedMessage ? !ariaLabel || ariaLabel.trim() !== trimmedMessage : false;
  }
  /** Checks whether a node is an Element node. */
  _isElementNode(element) {
    return element.nodeType === this._document.ELEMENT_NODE;
  }
};
_AriaDescriber.\u0275fac = \u0275\u0275ngDeclareFactory({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _AriaDescriber,
  deps: [{
    token: DOCUMENT
  }, {
    token: Platform
  }],
  target: FactoryTarget.Injectable
});
_AriaDescriber.\u0275prov = \u0275\u0275ngDeclareInjectable({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _AriaDescriber,
  providedIn: "root"
});
var AriaDescriber = _AriaDescriber;
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: AriaDescriber,
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
      args: [DOCUMENT]
    }]
  }, {
    type: Platform
  }]
});
function getKey(message, role) {
  return typeof message === "string" ? `${role || ""}/${message}` : message;
}
function setMessageId(element, serviceId) {
  if (!element.id) {
    element.id = `${CDK_DESCRIBEDBY_ID_PREFIX}-${serviceId}-${nextId++}`;
  }
}
var _InteractivityChecker = class _InteractivityChecker {
  constructor(_platform) {
    this._platform = _platform;
  }
  /**
   * Gets whether an element is disabled.
   *
   * @param element Element to be checked.
   * @returns Whether the element is disabled.
   */
  isDisabled(element) {
    return element.hasAttribute("disabled");
  }
  /**
   * Gets whether an element is visible for the purposes of interactivity.
   *
   * This will capture states like `display: none` and `visibility: hidden`, but not things like
   * being clipped by an `overflow: hidden` parent or being outside the viewport.
   *
   * @returns Whether the element is visible.
   */
  isVisible(element) {
    return hasGeometry(element) && getComputedStyle(element).visibility === "visible";
  }
  /**
   * Gets whether an element can be reached via Tab key.
   * Assumes that the element has already been checked with isFocusable.
   *
   * @param element Element to be checked.
   * @returns Whether the element is tabbable.
   */
  isTabbable(element) {
    if (!this._platform.isBrowser) {
      return false;
    }
    const frameElement = getFrameElement(getWindow(element));
    if (frameElement) {
      if (getTabIndexValue(frameElement) === -1) {
        return false;
      }
      if (!this.isVisible(frameElement)) {
        return false;
      }
    }
    let nodeName = element.nodeName.toLowerCase();
    let tabIndexValue = getTabIndexValue(element);
    if (element.hasAttribute("contenteditable")) {
      return tabIndexValue !== -1;
    }
    if (nodeName === "iframe" || nodeName === "object") {
      return false;
    }
    if (this._platform.WEBKIT && this._platform.IOS && !isPotentiallyTabbableIOS(element)) {
      return false;
    }
    if (nodeName === "audio") {
      if (!element.hasAttribute("controls")) {
        return false;
      }
      return tabIndexValue !== -1;
    }
    if (nodeName === "video") {
      if (tabIndexValue === -1) {
        return false;
      }
      if (tabIndexValue !== null) {
        return true;
      }
      return this._platform.FIREFOX || element.hasAttribute("controls");
    }
    return element.tabIndex >= 0;
  }
  /**
   * Gets whether an element can be focused by the user.
   *
   * @param element Element to be checked.
   * @param config The config object with options to customize this method's behavior
   * @returns Whether the element is focusable.
   */
  isFocusable(element, config) {
    return isPotentiallyFocusable(element) && !this.isDisabled(element) && (config?.ignoreVisibility || this.isVisible(element));
  }
};
_InteractivityChecker.\u0275fac = \u0275\u0275ngDeclareFactory({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _InteractivityChecker,
  deps: [{
    token: Platform
  }],
  target: FactoryTarget.Injectable
});
_InteractivityChecker.\u0275prov = \u0275\u0275ngDeclareInjectable({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _InteractivityChecker,
  providedIn: "root"
});
var InteractivityChecker = _InteractivityChecker;
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: InteractivityChecker,
  decorators: [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }],
  ctorParameters: () => [{
    type: Platform
  }]
});
function getFrameElement(window2) {
  try {
    return window2.frameElement;
  } catch {
    return null;
  }
}
function hasGeometry(element) {
  return !!(element.offsetWidth || element.offsetHeight || typeof element.getClientRects === "function" && element.getClientRects().length);
}
function isNativeFormElement(element) {
  let nodeName = element.nodeName.toLowerCase();
  return nodeName === "input" || nodeName === "select" || nodeName === "button" || nodeName === "textarea";
}
function isHiddenInput(element) {
  return isInputElement(element) && element.type == "hidden";
}
function isAnchorWithHref(element) {
  return isAnchorElement(element) && element.hasAttribute("href");
}
function isInputElement(element) {
  return element.nodeName.toLowerCase() == "input";
}
function isAnchorElement(element) {
  return element.nodeName.toLowerCase() == "a";
}
function hasValidTabIndex(element) {
  if (!element.hasAttribute("tabindex") || element.tabIndex === void 0) {
    return false;
  }
  let tabIndex = element.getAttribute("tabindex");
  return !!(tabIndex && !isNaN(parseInt(tabIndex, 10)));
}
function getTabIndexValue(element) {
  if (!hasValidTabIndex(element)) {
    return null;
  }
  const tabIndex = parseInt(element.getAttribute("tabindex") || "", 10);
  return isNaN(tabIndex) ? -1 : tabIndex;
}
function isPotentiallyTabbableIOS(element) {
  let nodeName = element.nodeName.toLowerCase();
  let inputType = nodeName === "input" && element.type;
  return inputType === "text" || inputType === "password" || nodeName === "select" || nodeName === "textarea";
}
function isPotentiallyFocusable(element) {
  if (isHiddenInput(element)) {
    return false;
  }
  return isNativeFormElement(element) || isAnchorWithHref(element) || element.hasAttribute("contenteditable") || hasValidTabIndex(element);
}
function getWindow(node) {
  return node.ownerDocument && node.ownerDocument.defaultView || window;
}
var FocusTrap = class {
  /** Whether the focus trap is active. */
  get enabled() {
    return this._enabled;
  }
  set enabled(value) {
    this._enabled = value;
    if (this._startAnchor && this._endAnchor) {
      this._toggleAnchorTabIndex(value, this._startAnchor);
      this._toggleAnchorTabIndex(value, this._endAnchor);
    }
  }
  constructor(_element, _checker, _ngZone, _document, deferAnchors = false, _injector) {
    this._element = _element;
    this._checker = _checker;
    this._ngZone = _ngZone;
    this._document = _document;
    this._injector = _injector;
    this._hasAttached = false;
    this.startAnchorListener = () => this.focusLastTabbableElement();
    this.endAnchorListener = () => this.focusFirstTabbableElement();
    this._enabled = true;
    if (!deferAnchors) {
      this.attachAnchors();
    }
  }
  /** Destroys the focus trap by cleaning up the anchors. */
  destroy() {
    const startAnchor = this._startAnchor;
    const endAnchor = this._endAnchor;
    if (startAnchor) {
      startAnchor.removeEventListener("focus", this.startAnchorListener);
      startAnchor.remove();
    }
    if (endAnchor) {
      endAnchor.removeEventListener("focus", this.endAnchorListener);
      endAnchor.remove();
    }
    this._startAnchor = this._endAnchor = null;
    this._hasAttached = false;
  }
  /**
   * Inserts the anchors into the DOM. This is usually done automatically
   * in the constructor, but can be deferred for cases like directives with `*ngIf`.
   * @returns Whether the focus trap managed to attach successfully. This may not be the case
   * if the target element isn't currently in the DOM.
   */
  attachAnchors() {
    if (this._hasAttached) {
      return true;
    }
    this._ngZone.runOutsideAngular(() => {
      if (!this._startAnchor) {
        this._startAnchor = this._createAnchor();
        this._startAnchor.addEventListener("focus", this.startAnchorListener);
      }
      if (!this._endAnchor) {
        this._endAnchor = this._createAnchor();
        this._endAnchor.addEventListener("focus", this.endAnchorListener);
      }
    });
    if (this._element.parentNode) {
      this._element.parentNode.insertBefore(this._startAnchor, this._element);
      this._element.parentNode.insertBefore(this._endAnchor, this._element.nextSibling);
      this._hasAttached = true;
    }
    return this._hasAttached;
  }
  /**
   * Waits for the zone to stabilize, then focuses the first tabbable element.
   * @returns Returns a promise that resolves with a boolean, depending
   * on whether focus was moved successfully.
   */
  focusInitialElementWhenReady(options) {
    return new Promise((resolve) => {
      this._executeOnStable(() => resolve(this.focusInitialElement(options)));
    });
  }
  /**
   * Waits for the zone to stabilize, then focuses
   * the first tabbable element within the focus trap region.
   * @returns Returns a promise that resolves with a boolean, depending
   * on whether focus was moved successfully.
   */
  focusFirstTabbableElementWhenReady(options) {
    return new Promise((resolve) => {
      this._executeOnStable(() => resolve(this.focusFirstTabbableElement(options)));
    });
  }
  /**
   * Waits for the zone to stabilize, then focuses
   * the last tabbable element within the focus trap region.
   * @returns Returns a promise that resolves with a boolean, depending
   * on whether focus was moved successfully.
   */
  focusLastTabbableElementWhenReady(options) {
    return new Promise((resolve) => {
      this._executeOnStable(() => resolve(this.focusLastTabbableElement(options)));
    });
  }
  /**
   * Get the specified boundary element of the trapped region.
   * @param bound The boundary to get (start or end of trapped region).
   * @returns The boundary element.
   */
  _getRegionBoundary(bound) {
    const markers = this._element.querySelectorAll(`[cdk-focus-region-${bound}], [cdkFocusRegion${bound}], [cdk-focus-${bound}]`);
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      for (let i = 0; i < markers.length; i++) {
        if (markers[i].hasAttribute(`cdk-focus-${bound}`)) {
          console.warn(`Found use of deprecated attribute 'cdk-focus-${bound}', use 'cdkFocusRegion${bound}' instead. The deprecated attribute will be removed in 8.0.0.`, markers[i]);
        } else if (markers[i].hasAttribute(`cdk-focus-region-${bound}`)) {
          console.warn(`Found use of deprecated attribute 'cdk-focus-region-${bound}', use 'cdkFocusRegion${bound}' instead. The deprecated attribute will be removed in 8.0.0.`, markers[i]);
        }
      }
    }
    if (bound == "start") {
      return markers.length ? markers[0] : this._getFirstTabbableElement(this._element);
    }
    return markers.length ? markers[markers.length - 1] : this._getLastTabbableElement(this._element);
  }
  /**
   * Focuses the element that should be focused when the focus trap is initialized.
   * @returns Whether focus was moved successfully.
   */
  focusInitialElement(options) {
    const redirectToElement = this._element.querySelector(`[cdk-focus-initial], [cdkFocusInitial]`);
    if (redirectToElement) {
      if ((typeof ngDevMode === "undefined" || ngDevMode) && redirectToElement.hasAttribute(`cdk-focus-initial`)) {
        console.warn(`Found use of deprecated attribute 'cdk-focus-initial', use 'cdkFocusInitial' instead. The deprecated attribute will be removed in 8.0.0`, redirectToElement);
      }
      if ((typeof ngDevMode === "undefined" || ngDevMode) && !this._checker.isFocusable(redirectToElement)) {
        console.warn(`Element matching '[cdkFocusInitial]' is not focusable.`, redirectToElement);
      }
      if (!this._checker.isFocusable(redirectToElement)) {
        const focusableChild = this._getFirstTabbableElement(redirectToElement);
        focusableChild?.focus(options);
        return !!focusableChild;
      }
      redirectToElement.focus(options);
      return true;
    }
    return this.focusFirstTabbableElement(options);
  }
  /**
   * Focuses the first tabbable element within the focus trap region.
   * @returns Whether focus was moved successfully.
   */
  focusFirstTabbableElement(options) {
    const redirectToElement = this._getRegionBoundary("start");
    if (redirectToElement) {
      redirectToElement.focus(options);
    }
    return !!redirectToElement;
  }
  /**
   * Focuses the last tabbable element within the focus trap region.
   * @returns Whether focus was moved successfully.
   */
  focusLastTabbableElement(options) {
    const redirectToElement = this._getRegionBoundary("end");
    if (redirectToElement) {
      redirectToElement.focus(options);
    }
    return !!redirectToElement;
  }
  /**
   * Checks whether the focus trap has successfully been attached.
   */
  hasAttached() {
    return this._hasAttached;
  }
  /** Get the first tabbable element from a DOM subtree (inclusive). */
  _getFirstTabbableElement(root) {
    if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
      return root;
    }
    const children = root.children;
    for (let i = 0; i < children.length; i++) {
      const tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ? this._getFirstTabbableElement(children[i]) : null;
      if (tabbableChild) {
        return tabbableChild;
      }
    }
    return null;
  }
  /** Get the last tabbable element from a DOM subtree (inclusive). */
  _getLastTabbableElement(root) {
    if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
      return root;
    }
    const children = root.children;
    for (let i = children.length - 1; i >= 0; i--) {
      const tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ? this._getLastTabbableElement(children[i]) : null;
      if (tabbableChild) {
        return tabbableChild;
      }
    }
    return null;
  }
  /** Creates an anchor element. */
  _createAnchor() {
    const anchor = this._document.createElement("div");
    this._toggleAnchorTabIndex(this._enabled, anchor);
    anchor.classList.add("cdk-visually-hidden");
    anchor.classList.add("cdk-focus-trap-anchor");
    anchor.setAttribute("aria-hidden", "true");
    return anchor;
  }
  /**
   * Toggles the `tabindex` of an anchor, based on the enabled state of the focus trap.
   * @param isEnabled Whether the focus trap is enabled.
   * @param anchor Anchor on which to toggle the tabindex.
   */
  _toggleAnchorTabIndex(isEnabled, anchor) {
    isEnabled ? anchor.setAttribute("tabindex", "0") : anchor.removeAttribute("tabindex");
  }
  /**
   * Toggles the`tabindex` of both anchors to either trap Tab focus or allow it to escape.
   * @param enabled: Whether the anchors should trap Tab.
   */
  toggleAnchors(enabled) {
    if (this._startAnchor && this._endAnchor) {
      this._toggleAnchorTabIndex(enabled, this._startAnchor);
      this._toggleAnchorTabIndex(enabled, this._endAnchor);
    }
  }
  /** Executes a function when the zone is stable. */
  _executeOnStable(fn) {
    if (this._injector) {
      afterNextRender(fn, {
        injector: this._injector
      });
    } else {
      setTimeout(fn);
    }
  }
};
var _FocusTrapFactory = class _FocusTrapFactory {
  constructor(_checker, _ngZone, _document) {
    this._checker = _checker;
    this._ngZone = _ngZone;
    this._injector = inject(Injector);
    this._document = _document;
  }
  /**
   * Creates a focus-trapped region around the given element.
   * @param element The element around which focus will be trapped.
   * @param deferCaptureElements Defers the creation of focus-capturing elements to be done
   *     manually by the user.
   * @returns The created focus trap instance.
   */
  create(element, deferCaptureElements = false) {
    return new FocusTrap(element, this._checker, this._ngZone, this._document, deferCaptureElements, this._injector);
  }
};
_FocusTrapFactory.\u0275fac = \u0275\u0275ngDeclareFactory({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _FocusTrapFactory,
  deps: [{
    token: InteractivityChecker
  }, {
    token: NgZone
  }, {
    token: DOCUMENT
  }],
  target: FactoryTarget.Injectable
});
_FocusTrapFactory.\u0275prov = \u0275\u0275ngDeclareInjectable({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _FocusTrapFactory,
  providedIn: "root"
});
var FocusTrapFactory = _FocusTrapFactory;
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: FocusTrapFactory,
  decorators: [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }],
  ctorParameters: () => [{
    type: InteractivityChecker
  }, {
    type: NgZone
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }]
});
var _CdkTrapFocus = class _CdkTrapFocus {
  /** Whether the focus trap is active. */
  get enabled() {
    return this.focusTrap?.enabled || false;
  }
  set enabled(value) {
    if (this.focusTrap) {
      this.focusTrap.enabled = value;
    }
  }
  constructor(_elementRef, _focusTrapFactory, _document) {
    this._elementRef = _elementRef;
    this._focusTrapFactory = _focusTrapFactory;
    this._previouslyFocusedElement = null;
    const platform = inject(Platform);
    if (platform.isBrowser) {
      this.focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement, true);
    }
  }
  ngOnDestroy() {
    this.focusTrap?.destroy();
    if (this._previouslyFocusedElement) {
      this._previouslyFocusedElement.focus();
      this._previouslyFocusedElement = null;
    }
  }
  ngAfterContentInit() {
    this.focusTrap?.attachAnchors();
    if (this.autoCapture) {
      this._captureFocus();
    }
  }
  ngDoCheck() {
    if (this.focusTrap && !this.focusTrap.hasAttached()) {
      this.focusTrap.attachAnchors();
    }
  }
  ngOnChanges(changes) {
    const autoCaptureChange = changes["autoCapture"];
    if (autoCaptureChange && !autoCaptureChange.firstChange && this.autoCapture && this.focusTrap?.hasAttached()) {
      this._captureFocus();
    }
  }
  _captureFocus() {
    this._previouslyFocusedElement = _getFocusedElementPierceShadowDom();
    this.focusTrap?.focusInitialElementWhenReady();
  }
};
_CdkTrapFocus.\u0275fac = \u0275\u0275ngDeclareFactory({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _CdkTrapFocus,
  deps: [{
    token: ElementRef
  }, {
    token: FocusTrapFactory
  }, {
    token: DOCUMENT
  }],
  target: FactoryTarget.Directive
});
_CdkTrapFocus.\u0275dir = \u0275\u0275ngDeclareDirective({
  minVersion: "16.1.0",
  version: "18.2.0-next.2",
  type: _CdkTrapFocus,
  isStandalone: true,
  selector: "[cdkTrapFocus]",
  inputs: {
    enabled: ["cdkTrapFocus", "enabled", booleanAttribute],
    autoCapture: ["cdkTrapFocusAutoCapture", "autoCapture", booleanAttribute]
  },
  exportAs: ["cdkTrapFocus"],
  usesOnChanges: true,
  ngImport: core_exports
});
var CdkTrapFocus = _CdkTrapFocus;
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: CdkTrapFocus,
  decorators: [{
    type: Directive,
    args: [{
      selector: "[cdkTrapFocus]",
      exportAs: "cdkTrapFocus",
      standalone: true
    }]
  }],
  ctorParameters: () => [{
    type: ElementRef
  }, {
    type: FocusTrapFactory
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }],
  propDecorators: {
    enabled: [{
      type: Input,
      args: [{
        alias: "cdkTrapFocus",
        transform: booleanAttribute
      }]
    }],
    autoCapture: [{
      type: Input,
      args: [{
        alias: "cdkTrapFocusAutoCapture",
        transform: booleanAttribute
      }]
    }]
  }
});
var ConfigurableFocusTrap = class extends FocusTrap {
  /** Whether the FocusTrap is enabled. */
  get enabled() {
    return this._enabled;
  }
  set enabled(value) {
    this._enabled = value;
    if (this._enabled) {
      this._focusTrapManager.register(this);
    } else {
      this._focusTrapManager.deregister(this);
    }
  }
  constructor(_element, _checker, _ngZone, _document, _focusTrapManager, _inertStrategy, config, injector) {
    super(_element, _checker, _ngZone, _document, config.defer, injector);
    this._focusTrapManager = _focusTrapManager;
    this._inertStrategy = _inertStrategy;
    this._focusTrapManager.register(this);
  }
  /** Notifies the FocusTrapManager that this FocusTrap will be destroyed. */
  destroy() {
    this._focusTrapManager.deregister(this);
    super.destroy();
  }
  /** @docs-private Implemented as part of ManagedFocusTrap. */
  _enable() {
    this._inertStrategy.preventFocus(this);
    this.toggleAnchors(true);
  }
  /** @docs-private Implemented as part of ManagedFocusTrap. */
  _disable() {
    this._inertStrategy.allowFocus(this);
    this.toggleAnchors(false);
  }
};
var EventListenerFocusTrapInertStrategy = class {
  constructor() {
    this._listener = null;
  }
  /** Adds a document event listener that keeps focus inside the FocusTrap. */
  preventFocus(focusTrap) {
    if (this._listener) {
      focusTrap._document.removeEventListener("focus", this._listener, true);
    }
    this._listener = (e) => this._trapFocus(focusTrap, e);
    focusTrap._ngZone.runOutsideAngular(() => {
      focusTrap._document.addEventListener("focus", this._listener, true);
    });
  }
  /** Removes the event listener added in preventFocus. */
  allowFocus(focusTrap) {
    if (!this._listener) {
      return;
    }
    focusTrap._document.removeEventListener("focus", this._listener, true);
    this._listener = null;
  }
  /**
   * Refocuses the first element in the FocusTrap if the focus event target was outside
   * the FocusTrap.
   *
   * This is an event listener callback. The event listener is added in runOutsideAngular,
   * so all this code runs outside Angular as well.
   */
  _trapFocus(focusTrap, event) {
    const target = event.target;
    const focusTrapRoot = focusTrap._element;
    if (target && !focusTrapRoot.contains(target) && !target.closest?.("div.cdk-overlay-pane")) {
      setTimeout(() => {
        if (focusTrap.enabled && !focusTrapRoot.contains(focusTrap._document.activeElement)) {
          focusTrap.focusFirstTabbableElement();
        }
      });
    }
  }
};
var FOCUS_TRAP_INERT_STRATEGY = new InjectionToken("FOCUS_TRAP_INERT_STRATEGY");
var _FocusTrapManager = class _FocusTrapManager {
  constructor() {
    this._focusTrapStack = [];
  }
  /**
   * Disables the FocusTrap at the top of the stack, and then pushes
   * the new FocusTrap onto the stack.
   */
  register(focusTrap) {
    this._focusTrapStack = this._focusTrapStack.filter((ft) => ft !== focusTrap);
    let stack = this._focusTrapStack;
    if (stack.length) {
      stack[stack.length - 1]._disable();
    }
    stack.push(focusTrap);
    focusTrap._enable();
  }
  /**
   * Removes the FocusTrap from the stack, and activates the
   * FocusTrap that is the new top of the stack.
   */
  deregister(focusTrap) {
    focusTrap._disable();
    const stack = this._focusTrapStack;
    const i = stack.indexOf(focusTrap);
    if (i !== -1) {
      stack.splice(i, 1);
      if (stack.length) {
        stack[stack.length - 1]._enable();
      }
    }
  }
};
_FocusTrapManager.\u0275fac = \u0275\u0275ngDeclareFactory({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _FocusTrapManager,
  deps: [],
  target: FactoryTarget.Injectable
});
_FocusTrapManager.\u0275prov = \u0275\u0275ngDeclareInjectable({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _FocusTrapManager,
  providedIn: "root"
});
var FocusTrapManager = _FocusTrapManager;
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: FocusTrapManager,
  decorators: [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }]
});
var _ConfigurableFocusTrapFactory = class _ConfigurableFocusTrapFactory {
  constructor(_checker, _ngZone, _focusTrapManager, _document, _inertStrategy) {
    this._checker = _checker;
    this._ngZone = _ngZone;
    this._focusTrapManager = _focusTrapManager;
    this._injector = inject(Injector);
    this._document = _document;
    this._inertStrategy = _inertStrategy || new EventListenerFocusTrapInertStrategy();
  }
  create(element, config = {
    defer: false
  }) {
    let configObject;
    if (typeof config === "boolean") {
      configObject = {
        defer: config
      };
    } else {
      configObject = config;
    }
    return new ConfigurableFocusTrap(element, this._checker, this._ngZone, this._document, this._focusTrapManager, this._inertStrategy, configObject, this._injector);
  }
};
_ConfigurableFocusTrapFactory.\u0275fac = \u0275\u0275ngDeclareFactory({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _ConfigurableFocusTrapFactory,
  deps: [{
    token: InteractivityChecker
  }, {
    token: NgZone
  }, {
    token: FocusTrapManager
  }, {
    token: DOCUMENT
  }, {
    token: FOCUS_TRAP_INERT_STRATEGY,
    optional: true
  }],
  target: FactoryTarget.Injectable
});
_ConfigurableFocusTrapFactory.\u0275prov = \u0275\u0275ngDeclareInjectable({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _ConfigurableFocusTrapFactory,
  providedIn: "root"
});
var ConfigurableFocusTrapFactory = _ConfigurableFocusTrapFactory;
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: ConfigurableFocusTrapFactory,
  decorators: [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }],
  ctorParameters: () => [{
    type: InteractivityChecker
  }, {
    type: NgZone
  }, {
    type: FocusTrapManager
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [FOCUS_TRAP_INERT_STRATEGY]
    }]
  }]
});
function isFakeMousedownFromScreenReader(event) {
  return event.buttons === 0 || event.detail === 0;
}
function isFakeTouchstartFromScreenReader(event) {
  const touch = event.touches && event.touches[0] || event.changedTouches && event.changedTouches[0];
  return !!touch && touch.identifier === -1 && (touch.radiusX == null || touch.radiusX === 1) && (touch.radiusY == null || touch.radiusY === 1);
}
var INPUT_MODALITY_DETECTOR_OPTIONS = new InjectionToken("cdk-input-modality-detector-options");
var INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS = {
  ignoreKeys: [ALT, CONTROL, MAC_META, META, SHIFT]
};
var TOUCH_BUFFER_MS = 650;
var modalityEventListenerOptions = normalizePassiveListenerOptions({
  passive: true,
  capture: true
});
var _InputModalityDetector = class _InputModalityDetector {
  /** The most recently detected input modality. */
  get mostRecentModality() {
    return this._modality.value;
  }
  constructor(_platform, ngZone, document2, options) {
    this._platform = _platform;
    this._mostRecentTarget = null;
    this._modality = new BehaviorSubject(null);
    this._lastTouchMs = 0;
    this._onKeydown = (event) => {
      if (this._options?.ignoreKeys?.some((keyCode) => keyCode === event.keyCode)) {
        return;
      }
      this._modality.next("keyboard");
      this._mostRecentTarget = _getEventTarget(event);
    };
    this._onMousedown = (event) => {
      if (Date.now() - this._lastTouchMs < TOUCH_BUFFER_MS) {
        return;
      }
      this._modality.next(isFakeMousedownFromScreenReader(event) ? "keyboard" : "mouse");
      this._mostRecentTarget = _getEventTarget(event);
    };
    this._onTouchstart = (event) => {
      if (isFakeTouchstartFromScreenReader(event)) {
        this._modality.next("keyboard");
        return;
      }
      this._lastTouchMs = Date.now();
      this._modality.next("touch");
      this._mostRecentTarget = _getEventTarget(event);
    };
    this._options = __spreadValues(__spreadValues({}, INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS), options);
    this.modalityDetected = this._modality.pipe(skip(1));
    this.modalityChanged = this.modalityDetected.pipe(distinctUntilChanged());
    if (_platform.isBrowser) {
      ngZone.runOutsideAngular(() => {
        document2.addEventListener("keydown", this._onKeydown, modalityEventListenerOptions);
        document2.addEventListener("mousedown", this._onMousedown, modalityEventListenerOptions);
        document2.addEventListener("touchstart", this._onTouchstart, modalityEventListenerOptions);
      });
    }
  }
  ngOnDestroy() {
    this._modality.complete();
    if (this._platform.isBrowser) {
      document.removeEventListener("keydown", this._onKeydown, modalityEventListenerOptions);
      document.removeEventListener("mousedown", this._onMousedown, modalityEventListenerOptions);
      document.removeEventListener("touchstart", this._onTouchstart, modalityEventListenerOptions);
    }
  }
};
_InputModalityDetector.\u0275fac = \u0275\u0275ngDeclareFactory({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _InputModalityDetector,
  deps: [{
    token: Platform
  }, {
    token: NgZone
  }, {
    token: DOCUMENT
  }, {
    token: INPUT_MODALITY_DETECTOR_OPTIONS,
    optional: true
  }],
  target: FactoryTarget.Injectable
});
_InputModalityDetector.\u0275prov = \u0275\u0275ngDeclareInjectable({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _InputModalityDetector,
  providedIn: "root"
});
var InputModalityDetector = _InputModalityDetector;
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: InputModalityDetector,
  decorators: [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }],
  ctorParameters: () => [{
    type: Platform
  }, {
    type: NgZone
  }, {
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [INPUT_MODALITY_DETECTOR_OPTIONS]
    }]
  }]
});
var LIVE_ANNOUNCER_ELEMENT_TOKEN = new InjectionToken("liveAnnouncerElement", {
  providedIn: "root",
  factory: LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY
});
function LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY() {
  return null;
}
var LIVE_ANNOUNCER_DEFAULT_OPTIONS = new InjectionToken("LIVE_ANNOUNCER_DEFAULT_OPTIONS");
var uniqueIds = 0;
var _LiveAnnouncer = class _LiveAnnouncer {
  constructor(elementToken, _ngZone, _document, _defaultOptions) {
    this._ngZone = _ngZone;
    this._defaultOptions = _defaultOptions;
    this._document = _document;
    this._liveElement = elementToken || this._createLiveElement();
  }
  announce(message, ...args) {
    const defaultOptions = this._defaultOptions;
    let politeness;
    let duration;
    if (args.length === 1 && typeof args[0] === "number") {
      duration = args[0];
    } else {
      [politeness, duration] = args;
    }
    this.clear();
    clearTimeout(this._previousTimeout);
    if (!politeness) {
      politeness = defaultOptions && defaultOptions.politeness ? defaultOptions.politeness : "polite";
    }
    if (duration == null && defaultOptions) {
      duration = defaultOptions.duration;
    }
    this._liveElement.setAttribute("aria-live", politeness);
    if (this._liveElement.id) {
      this._exposeAnnouncerToModals(this._liveElement.id);
    }
    return this._ngZone.runOutsideAngular(() => {
      if (!this._currentPromise) {
        this._currentPromise = new Promise((resolve) => this._currentResolve = resolve);
      }
      clearTimeout(this._previousTimeout);
      this._previousTimeout = setTimeout(() => {
        this._liveElement.textContent = message;
        if (typeof duration === "number") {
          this._previousTimeout = setTimeout(() => this.clear(), duration);
        }
        this._currentResolve?.();
        this._currentPromise = this._currentResolve = void 0;
      }, 100);
      return this._currentPromise;
    });
  }
  /**
   * Clears the current text from the announcer element. Can be used to prevent
   * screen readers from reading the text out again while the user is going
   * through the page landmarks.
   */
  clear() {
    if (this._liveElement) {
      this._liveElement.textContent = "";
    }
  }
  ngOnDestroy() {
    clearTimeout(this._previousTimeout);
    this._liveElement?.remove();
    this._liveElement = null;
    this._currentResolve?.();
    this._currentPromise = this._currentResolve = void 0;
  }
  _createLiveElement() {
    const elementClass = "cdk-live-announcer-element";
    const previousElements = this._document.getElementsByClassName(elementClass);
    const liveEl = this._document.createElement("div");
    for (let i = 0; i < previousElements.length; i++) {
      previousElements[i].remove();
    }
    liveEl.classList.add(elementClass);
    liveEl.classList.add("cdk-visually-hidden");
    liveEl.setAttribute("aria-atomic", "true");
    liveEl.setAttribute("aria-live", "polite");
    liveEl.id = `cdk-live-announcer-${uniqueIds++}`;
    this._document.body.appendChild(liveEl);
    return liveEl;
  }
  /**
   * Some browsers won't expose the accessibility node of the live announcer element if there is an
   * `aria-modal` and the live announcer is outside of it. This method works around the issue by
   * pointing the `aria-owns` of all modals to the live announcer element.
   */
  _exposeAnnouncerToModals(id) {
    const modals = this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');
    for (let i = 0; i < modals.length; i++) {
      const modal = modals[i];
      const ariaOwns = modal.getAttribute("aria-owns");
      if (!ariaOwns) {
        modal.setAttribute("aria-owns", id);
      } else if (ariaOwns.indexOf(id) === -1) {
        modal.setAttribute("aria-owns", ariaOwns + " " + id);
      }
    }
  }
};
_LiveAnnouncer.\u0275fac = \u0275\u0275ngDeclareFactory({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _LiveAnnouncer,
  deps: [{
    token: LIVE_ANNOUNCER_ELEMENT_TOKEN,
    optional: true
  }, {
    token: NgZone
  }, {
    token: DOCUMENT
  }, {
    token: LIVE_ANNOUNCER_DEFAULT_OPTIONS,
    optional: true
  }],
  target: FactoryTarget.Injectable
});
_LiveAnnouncer.\u0275prov = \u0275\u0275ngDeclareInjectable({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _LiveAnnouncer,
  providedIn: "root"
});
var LiveAnnouncer = _LiveAnnouncer;
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: LiveAnnouncer,
  decorators: [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }],
  ctorParameters: () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [LIVE_ANNOUNCER_ELEMENT_TOKEN]
    }]
  }, {
    type: NgZone
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [LIVE_ANNOUNCER_DEFAULT_OPTIONS]
    }]
  }]
});
var _CdkAriaLive = class _CdkAriaLive {
  /** The aria-live politeness level to use when announcing messages. */
  get politeness() {
    return this._politeness;
  }
  set politeness(value) {
    this._politeness = value === "off" || value === "assertive" ? value : "polite";
    if (this._politeness === "off") {
      if (this._subscription) {
        this._subscription.unsubscribe();
        this._subscription = null;
      }
    } else if (!this._subscription) {
      this._subscription = this._ngZone.runOutsideAngular(() => {
        return this._contentObserver.observe(this._elementRef).subscribe(() => {
          const elementText = this._elementRef.nativeElement.textContent;
          if (elementText !== this._previousAnnouncedText) {
            this._liveAnnouncer.announce(elementText, this._politeness, this.duration);
            this._previousAnnouncedText = elementText;
          }
        });
      });
    }
  }
  constructor(_elementRef, _liveAnnouncer, _contentObserver, _ngZone) {
    this._elementRef = _elementRef;
    this._liveAnnouncer = _liveAnnouncer;
    this._contentObserver = _contentObserver;
    this._ngZone = _ngZone;
    this._politeness = "polite";
  }
  ngOnDestroy() {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }
};
_CdkAriaLive.\u0275fac = \u0275\u0275ngDeclareFactory({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _CdkAriaLive,
  deps: [{
    token: ElementRef
  }, {
    token: LiveAnnouncer
  }, {
    token: ContentObserver
  }, {
    token: NgZone
  }],
  target: FactoryTarget.Directive
});
_CdkAriaLive.\u0275dir = \u0275\u0275ngDeclareDirective({
  minVersion: "14.0.0",
  version: "18.2.0-next.2",
  type: _CdkAriaLive,
  isStandalone: true,
  selector: "[cdkAriaLive]",
  inputs: {
    politeness: ["cdkAriaLive", "politeness"],
    duration: ["cdkAriaLiveDuration", "duration"]
  },
  exportAs: ["cdkAriaLive"],
  ngImport: core_exports
});
var CdkAriaLive = _CdkAriaLive;
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: CdkAriaLive,
  decorators: [{
    type: Directive,
    args: [{
      selector: "[cdkAriaLive]",
      exportAs: "cdkAriaLive",
      standalone: true
    }]
  }],
  ctorParameters: () => [{
    type: ElementRef
  }, {
    type: LiveAnnouncer
  }, {
    type: ContentObserver
  }, {
    type: NgZone
  }],
  propDecorators: {
    politeness: [{
      type: Input,
      args: ["cdkAriaLive"]
    }],
    duration: [{
      type: Input,
      args: ["cdkAriaLiveDuration"]
    }]
  }
});
var FocusMonitorDetectionMode;
(function(FocusMonitorDetectionMode2) {
  FocusMonitorDetectionMode2[FocusMonitorDetectionMode2["IMMEDIATE"] = 0] = "IMMEDIATE";
  FocusMonitorDetectionMode2[FocusMonitorDetectionMode2["EVENTUAL"] = 1] = "EVENTUAL";
})(FocusMonitorDetectionMode || (FocusMonitorDetectionMode = {}));
var FOCUS_MONITOR_DEFAULT_OPTIONS = new InjectionToken("cdk-focus-monitor-default-options");
var captureEventListenerOptions = normalizePassiveListenerOptions({
  passive: true,
  capture: true
});
var _FocusMonitor = class _FocusMonitor {
  constructor(_ngZone, _platform, _inputModalityDetector, document2, options) {
    this._ngZone = _ngZone;
    this._platform = _platform;
    this._inputModalityDetector = _inputModalityDetector;
    this._origin = null;
    this._windowFocused = false;
    this._originFromTouchInteraction = false;
    this._elementInfo = /* @__PURE__ */ new Map();
    this._monitoredElementCount = 0;
    this._rootNodeFocusListenerCount = /* @__PURE__ */ new Map();
    this._windowFocusListener = () => {
      this._windowFocused = true;
      this._windowFocusTimeoutId = window.setTimeout(() => this._windowFocused = false);
    };
    this._stopInputModalityDetector = new Subject();
    this._rootNodeFocusAndBlurListener = (event) => {
      const target = _getEventTarget(event);
      for (let element = target; element; element = element.parentElement) {
        if (event.type === "focus") {
          this._onFocus(event, element);
        } else {
          this._onBlur(event, element);
        }
      }
    };
    this._document = document2;
    this._detectionMode = options?.detectionMode || FocusMonitorDetectionMode.IMMEDIATE;
  }
  monitor(element, checkChildren = false) {
    const nativeElement = coerceElement(element);
    if (!this._platform.isBrowser || nativeElement.nodeType !== 1) {
      return of();
    }
    const rootNode = _getShadowRoot(nativeElement) || this._getDocument();
    const cachedInfo = this._elementInfo.get(nativeElement);
    if (cachedInfo) {
      if (checkChildren) {
        cachedInfo.checkChildren = true;
      }
      return cachedInfo.subject;
    }
    const info = {
      checkChildren,
      subject: new Subject(),
      rootNode
    };
    this._elementInfo.set(nativeElement, info);
    this._registerGlobalListeners(info);
    return info.subject;
  }
  stopMonitoring(element) {
    const nativeElement = coerceElement(element);
    const elementInfo = this._elementInfo.get(nativeElement);
    if (elementInfo) {
      elementInfo.subject.complete();
      this._setClasses(nativeElement);
      this._elementInfo.delete(nativeElement);
      this._removeGlobalListeners(elementInfo);
    }
  }
  focusVia(element, origin, options) {
    const nativeElement = coerceElement(element);
    const focusedElement = this._getDocument().activeElement;
    if (nativeElement === focusedElement) {
      this._getClosestElementsInfo(nativeElement).forEach(([currentElement, info]) => this._originChanged(currentElement, origin, info));
    } else {
      this._setOrigin(origin);
      if (typeof nativeElement.focus === "function") {
        nativeElement.focus(options);
      }
    }
  }
  ngOnDestroy() {
    this._elementInfo.forEach((_info, element) => this.stopMonitoring(element));
  }
  /** Access injected document if available or fallback to global document reference */
  _getDocument() {
    return this._document || document;
  }
  /** Use defaultView of injected document if available or fallback to global window reference */
  _getWindow() {
    const doc = this._getDocument();
    return doc.defaultView || window;
  }
  _getFocusOrigin(focusEventTarget) {
    if (this._origin) {
      if (this._originFromTouchInteraction) {
        return this._shouldBeAttributedToTouch(focusEventTarget) ? "touch" : "program";
      } else {
        return this._origin;
      }
    }
    if (this._windowFocused && this._lastFocusOrigin) {
      return this._lastFocusOrigin;
    }
    if (focusEventTarget && this._isLastInteractionFromInputLabel(focusEventTarget)) {
      return "mouse";
    }
    return "program";
  }
  /**
   * Returns whether the focus event should be attributed to touch. Recall that in IMMEDIATE mode, a
   * touch origin isn't immediately reset at the next tick (see _setOrigin). This means that when we
   * handle a focus event following a touch interaction, we need to determine whether (1) the focus
   * event was directly caused by the touch interaction or (2) the focus event was caused by a
   * subsequent programmatic focus call triggered by the touch interaction.
   * @param focusEventTarget The target of the focus event under examination.
   */
  _shouldBeAttributedToTouch(focusEventTarget) {
    return this._detectionMode === FocusMonitorDetectionMode.EVENTUAL || !!focusEventTarget?.contains(this._inputModalityDetector._mostRecentTarget);
  }
  /**
   * Sets the focus classes on the element based on the given focus origin.
   * @param element The element to update the classes on.
   * @param origin The focus origin.
   */
  _setClasses(element, origin) {
    element.classList.toggle("cdk-focused", !!origin);
    element.classList.toggle("cdk-touch-focused", origin === "touch");
    element.classList.toggle("cdk-keyboard-focused", origin === "keyboard");
    element.classList.toggle("cdk-mouse-focused", origin === "mouse");
    element.classList.toggle("cdk-program-focused", origin === "program");
  }
  /**
   * Updates the focus origin. If we're using immediate detection mode, we schedule an async
   * function to clear the origin at the end of a timeout. The duration of the timeout depends on
   * the origin being set.
   * @param origin The origin to set.
   * @param isFromInteraction Whether we are setting the origin from an interaction event.
   */
  _setOrigin(origin, isFromInteraction = false) {
    this._ngZone.runOutsideAngular(() => {
      this._origin = origin;
      this._originFromTouchInteraction = origin === "touch" && isFromInteraction;
      if (this._detectionMode === FocusMonitorDetectionMode.IMMEDIATE) {
        clearTimeout(this._originTimeoutId);
        const ms = this._originFromTouchInteraction ? TOUCH_BUFFER_MS : 1;
        this._originTimeoutId = setTimeout(() => this._origin = null, ms);
      }
    });
  }
  /**
   * Handles focus events on a registered element.
   * @param event The focus event.
   * @param element The monitored element.
   */
  _onFocus(event, element) {
    const elementInfo = this._elementInfo.get(element);
    const focusEventTarget = _getEventTarget(event);
    if (!elementInfo || !elementInfo.checkChildren && element !== focusEventTarget) {
      return;
    }
    this._originChanged(element, this._getFocusOrigin(focusEventTarget), elementInfo);
  }
  /**
   * Handles blur events on a registered element.
   * @param event The blur event.
   * @param element The monitored element.
   */
  _onBlur(event, element) {
    const elementInfo = this._elementInfo.get(element);
    if (!elementInfo || elementInfo.checkChildren && event.relatedTarget instanceof Node && element.contains(event.relatedTarget)) {
      return;
    }
    this._setClasses(element);
    this._emitOrigin(elementInfo, null);
  }
  _emitOrigin(info, origin) {
    if (info.subject.observers.length) {
      this._ngZone.run(() => info.subject.next(origin));
    }
  }
  _registerGlobalListeners(elementInfo) {
    if (!this._platform.isBrowser) {
      return;
    }
    const rootNode = elementInfo.rootNode;
    const rootNodeFocusListeners = this._rootNodeFocusListenerCount.get(rootNode) || 0;
    if (!rootNodeFocusListeners) {
      this._ngZone.runOutsideAngular(() => {
        rootNode.addEventListener("focus", this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
        rootNode.addEventListener("blur", this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
      });
    }
    this._rootNodeFocusListenerCount.set(rootNode, rootNodeFocusListeners + 1);
    if (++this._monitoredElementCount === 1) {
      this._ngZone.runOutsideAngular(() => {
        const window2 = this._getWindow();
        window2.addEventListener("focus", this._windowFocusListener);
      });
      this._inputModalityDetector.modalityDetected.pipe(takeUntil(this._stopInputModalityDetector)).subscribe((modality) => {
        this._setOrigin(
          modality,
          true
          /* isFromInteraction */
        );
      });
    }
  }
  _removeGlobalListeners(elementInfo) {
    const rootNode = elementInfo.rootNode;
    if (this._rootNodeFocusListenerCount.has(rootNode)) {
      const rootNodeFocusListeners = this._rootNodeFocusListenerCount.get(rootNode);
      if (rootNodeFocusListeners > 1) {
        this._rootNodeFocusListenerCount.set(rootNode, rootNodeFocusListeners - 1);
      } else {
        rootNode.removeEventListener("focus", this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
        rootNode.removeEventListener("blur", this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
        this._rootNodeFocusListenerCount.delete(rootNode);
      }
    }
    if (!--this._monitoredElementCount) {
      const window2 = this._getWindow();
      window2.removeEventListener("focus", this._windowFocusListener);
      this._stopInputModalityDetector.next();
      clearTimeout(this._windowFocusTimeoutId);
      clearTimeout(this._originTimeoutId);
    }
  }
  /** Updates all the state on an element once its focus origin has changed. */
  _originChanged(element, origin, elementInfo) {
    this._setClasses(element, origin);
    this._emitOrigin(elementInfo, origin);
    this._lastFocusOrigin = origin;
  }
  /**
   * Collects the `MonitoredElementInfo` of a particular element and
   * all of its ancestors that have enabled `checkChildren`.
   * @param element Element from which to start the search.
   */
  _getClosestElementsInfo(element) {
    const results = [];
    this._elementInfo.forEach((info, currentElement) => {
      if (currentElement === element || info.checkChildren && currentElement.contains(element)) {
        results.push([currentElement, info]);
      }
    });
    return results;
  }
  /**
   * Returns whether an interaction is likely to have come from the user clicking the `label` of
   * an `input` or `textarea` in order to focus it.
   * @param focusEventTarget Target currently receiving focus.
   */
  _isLastInteractionFromInputLabel(focusEventTarget) {
    const {
      _mostRecentTarget: mostRecentTarget,
      mostRecentModality
    } = this._inputModalityDetector;
    if (mostRecentModality !== "mouse" || !mostRecentTarget || mostRecentTarget === focusEventTarget || focusEventTarget.nodeName !== "INPUT" && focusEventTarget.nodeName !== "TEXTAREA" || focusEventTarget.disabled) {
      return false;
    }
    const labels = focusEventTarget.labels;
    if (labels) {
      for (let i = 0; i < labels.length; i++) {
        if (labels[i].contains(mostRecentTarget)) {
          return true;
        }
      }
    }
    return false;
  }
};
_FocusMonitor.\u0275fac = \u0275\u0275ngDeclareFactory({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _FocusMonitor,
  deps: [{
    token: NgZone
  }, {
    token: Platform
  }, {
    token: InputModalityDetector
  }, {
    token: DOCUMENT,
    optional: true
  }, {
    token: FOCUS_MONITOR_DEFAULT_OPTIONS,
    optional: true
  }],
  target: FactoryTarget.Injectable
});
_FocusMonitor.\u0275prov = \u0275\u0275ngDeclareInjectable({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _FocusMonitor,
  providedIn: "root"
});
var FocusMonitor = _FocusMonitor;
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: FocusMonitor,
  decorators: [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }],
  ctorParameters: () => [{
    type: NgZone
  }, {
    type: Platform
  }, {
    type: InputModalityDetector
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [FOCUS_MONITOR_DEFAULT_OPTIONS]
    }]
  }]
});
var _CdkMonitorFocus = class _CdkMonitorFocus {
  constructor(_elementRef, _focusMonitor) {
    this._elementRef = _elementRef;
    this._focusMonitor = _focusMonitor;
    this._focusOrigin = null;
    this.cdkFocusChange = new EventEmitter();
  }
  get focusOrigin() {
    return this._focusOrigin;
  }
  ngAfterViewInit() {
    const element = this._elementRef.nativeElement;
    this._monitorSubscription = this._focusMonitor.monitor(element, element.nodeType === 1 && element.hasAttribute("cdkMonitorSubtreeFocus")).subscribe((origin) => {
      this._focusOrigin = origin;
      this.cdkFocusChange.emit(origin);
    });
  }
  ngOnDestroy() {
    this._focusMonitor.stopMonitoring(this._elementRef);
    if (this._monitorSubscription) {
      this._monitorSubscription.unsubscribe();
    }
  }
};
_CdkMonitorFocus.\u0275fac = \u0275\u0275ngDeclareFactory({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _CdkMonitorFocus,
  deps: [{
    token: ElementRef
  }, {
    token: FocusMonitor
  }],
  target: FactoryTarget.Directive
});
_CdkMonitorFocus.\u0275dir = \u0275\u0275ngDeclareDirective({
  minVersion: "14.0.0",
  version: "18.2.0-next.2",
  type: _CdkMonitorFocus,
  isStandalone: true,
  selector: "[cdkMonitorElementFocus], [cdkMonitorSubtreeFocus]",
  outputs: {
    cdkFocusChange: "cdkFocusChange"
  },
  exportAs: ["cdkMonitorFocus"],
  ngImport: core_exports
});
var CdkMonitorFocus = _CdkMonitorFocus;
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: CdkMonitorFocus,
  decorators: [{
    type: Directive,
    args: [{
      selector: "[cdkMonitorElementFocus], [cdkMonitorSubtreeFocus]",
      exportAs: "cdkMonitorFocus",
      standalone: true
    }]
  }],
  ctorParameters: () => [{
    type: ElementRef
  }, {
    type: FocusMonitor
  }],
  propDecorators: {
    cdkFocusChange: [{
      type: Output
    }]
  }
});
var HighContrastMode;
(function(HighContrastMode2) {
  HighContrastMode2[HighContrastMode2["NONE"] = 0] = "NONE";
  HighContrastMode2[HighContrastMode2["BLACK_ON_WHITE"] = 1] = "BLACK_ON_WHITE";
  HighContrastMode2[HighContrastMode2["WHITE_ON_BLACK"] = 2] = "WHITE_ON_BLACK";
})(HighContrastMode || (HighContrastMode = {}));
var BLACK_ON_WHITE_CSS_CLASS = "cdk-high-contrast-black-on-white";
var WHITE_ON_BLACK_CSS_CLASS = "cdk-high-contrast-white-on-black";
var HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS = "cdk-high-contrast-active";
var _HighContrastModeDetector = class _HighContrastModeDetector {
  constructor(_platform, document2) {
    this._platform = _platform;
    this._document = document2;
    this._breakpointSubscription = inject(BreakpointObserver).observe("(forced-colors: active)").subscribe(() => {
      if (this._hasCheckedHighContrastMode) {
        this._hasCheckedHighContrastMode = false;
        this._applyBodyHighContrastModeCssClasses();
      }
    });
  }
  /** Gets the current high-contrast-mode for the page. */
  getHighContrastMode() {
    if (!this._platform.isBrowser) {
      return HighContrastMode.NONE;
    }
    const testElement = this._document.createElement("div");
    testElement.style.backgroundColor = "rgb(1,2,3)";
    testElement.style.position = "absolute";
    this._document.body.appendChild(testElement);
    const documentWindow = this._document.defaultView || window;
    const computedStyle = documentWindow && documentWindow.getComputedStyle ? documentWindow.getComputedStyle(testElement) : null;
    const computedColor = (computedStyle && computedStyle.backgroundColor || "").replace(/ /g, "");
    testElement.remove();
    switch (computedColor) {
      case "rgb(0,0,0)":
      case "rgb(45,50,54)":
      case "rgb(32,32,32)":
        return HighContrastMode.WHITE_ON_BLACK;
      case "rgb(255,255,255)":
      case "rgb(255,250,239)":
        return HighContrastMode.BLACK_ON_WHITE;
    }
    return HighContrastMode.NONE;
  }
  ngOnDestroy() {
    this._breakpointSubscription.unsubscribe();
  }
  /** Applies CSS classes indicating high-contrast mode to document body (browser-only). */
  _applyBodyHighContrastModeCssClasses() {
    if (!this._hasCheckedHighContrastMode && this._platform.isBrowser && this._document.body) {
      const bodyClasses = this._document.body.classList;
      bodyClasses.remove(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS, BLACK_ON_WHITE_CSS_CLASS, WHITE_ON_BLACK_CSS_CLASS);
      this._hasCheckedHighContrastMode = true;
      const mode = this.getHighContrastMode();
      if (mode === HighContrastMode.BLACK_ON_WHITE) {
        bodyClasses.add(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS, BLACK_ON_WHITE_CSS_CLASS);
      } else if (mode === HighContrastMode.WHITE_ON_BLACK) {
        bodyClasses.add(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS, WHITE_ON_BLACK_CSS_CLASS);
      }
    }
  }
};
_HighContrastModeDetector.\u0275fac = \u0275\u0275ngDeclareFactory({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _HighContrastModeDetector,
  deps: [{
    token: Platform
  }, {
    token: DOCUMENT
  }],
  target: FactoryTarget.Injectable
});
_HighContrastModeDetector.\u0275prov = \u0275\u0275ngDeclareInjectable({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _HighContrastModeDetector,
  providedIn: "root"
});
var HighContrastModeDetector = _HighContrastModeDetector;
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: HighContrastModeDetector,
  decorators: [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }],
  ctorParameters: () => [{
    type: Platform
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }]
});
var _A11yModule = class _A11yModule {
  constructor(highContrastModeDetector) {
    highContrastModeDetector._applyBodyHighContrastModeCssClasses();
  }
};
_A11yModule.\u0275fac = \u0275\u0275ngDeclareFactory({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _A11yModule,
  deps: [{
    token: HighContrastModeDetector
  }],
  target: FactoryTarget.NgModule
});
_A11yModule.\u0275mod = \u0275\u0275ngDeclareNgModule({
  minVersion: "14.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _A11yModule,
  imports: [ObserversModule, CdkAriaLive, CdkTrapFocus, CdkMonitorFocus],
  exports: [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus]
});
_A11yModule.\u0275inj = \u0275\u0275ngDeclareInjector({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _A11yModule,
  imports: [ObserversModule]
});
var A11yModule = _A11yModule;
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: A11yModule,
  decorators: [{
    type: NgModule,
    args: [{
      imports: [ObserversModule, CdkAriaLive, CdkTrapFocus, CdkMonitorFocus],
      exports: [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus]
    }]
  }],
  ctorParameters: () => [{
    type: HighContrastModeDetector
  }]
});

// node_modules/@angular/cdk/fesm2022/bidi.mjs
var DIR_DOCUMENT = new InjectionToken("cdk-dir-doc", {
  providedIn: "root",
  factory: DIR_DOCUMENT_FACTORY
});
function DIR_DOCUMENT_FACTORY() {
  return inject(DOCUMENT);
}
var RTL_LOCALE_PATTERN = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
function _resolveDirectionality(rawValue) {
  const value = rawValue?.toLowerCase() || "";
  if (value === "auto" && typeof navigator !== "undefined" && navigator?.language) {
    return RTL_LOCALE_PATTERN.test(navigator.language) ? "rtl" : "ltr";
  }
  return value === "rtl" ? "rtl" : "ltr";
}
var _Directionality = class _Directionality {
  constructor(_document) {
    this.value = "ltr";
    this.change = new EventEmitter();
    if (_document) {
      const bodyDir = _document.body ? _document.body.dir : null;
      const htmlDir = _document.documentElement ? _document.documentElement.dir : null;
      this.value = _resolveDirectionality(bodyDir || htmlDir || "ltr");
    }
  }
  ngOnDestroy() {
    this.change.complete();
  }
};
_Directionality.\u0275fac = \u0275\u0275ngDeclareFactory({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _Directionality,
  deps: [{
    token: DIR_DOCUMENT,
    optional: true
  }],
  target: FactoryTarget.Injectable
});
_Directionality.\u0275prov = \u0275\u0275ngDeclareInjectable({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _Directionality,
  providedIn: "root"
});
var Directionality = _Directionality;
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: Directionality,
  decorators: [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }],
  ctorParameters: () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [DIR_DOCUMENT]
    }]
  }]
});
var _Dir = class _Dir {
  constructor() {
    this._dir = "ltr";
    this._isInitialized = false;
    this.change = new EventEmitter();
  }
  /** @docs-private */
  get dir() {
    return this._dir;
  }
  set dir(value) {
    const previousValue = this._dir;
    this._dir = _resolveDirectionality(value);
    this._rawDir = value;
    if (previousValue !== this._dir && this._isInitialized) {
      this.change.emit(this._dir);
    }
  }
  /** Current layout direction of the element. */
  get value() {
    return this.dir;
  }
  /** Initialize once default value has been set. */
  ngAfterContentInit() {
    this._isInitialized = true;
  }
  ngOnDestroy() {
    this.change.complete();
  }
};
_Dir.\u0275fac = \u0275\u0275ngDeclareFactory({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _Dir,
  deps: [],
  target: FactoryTarget.Directive
});
_Dir.\u0275dir = \u0275\u0275ngDeclareDirective({
  minVersion: "14.0.0",
  version: "18.2.0-next.2",
  type: _Dir,
  isStandalone: true,
  selector: "[dir]",
  inputs: {
    dir: "dir"
  },
  outputs: {
    change: "dirChange"
  },
  host: {
    properties: {
      "attr.dir": "_rawDir"
    }
  },
  providers: [{
    provide: Directionality,
    useExisting: _Dir
  }],
  exportAs: ["dir"],
  ngImport: core_exports
});
var Dir = _Dir;
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: Dir,
  decorators: [{
    type: Directive,
    args: [{
      selector: "[dir]",
      providers: [{
        provide: Directionality,
        useExisting: Dir
      }],
      host: {
        "[attr.dir]": "_rawDir"
      },
      exportAs: "dir",
      standalone: true
    }]
  }],
  propDecorators: {
    change: [{
      type: Output,
      args: ["dirChange"]
    }],
    dir: [{
      type: Input
    }]
  }
});
var _BidiModule = class _BidiModule {
};
_BidiModule.\u0275fac = \u0275\u0275ngDeclareFactory({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _BidiModule,
  deps: [],
  target: FactoryTarget.NgModule
});
_BidiModule.\u0275mod = \u0275\u0275ngDeclareNgModule({
  minVersion: "14.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _BidiModule,
  imports: [Dir],
  exports: [Dir]
});
_BidiModule.\u0275inj = \u0275\u0275ngDeclareInjector({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _BidiModule
});
var BidiModule = _BidiModule;
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: BidiModule,
  decorators: [{
    type: NgModule,
    args: [{
      imports: [Dir],
      exports: [Dir]
    }]
  }]
});

// node_modules/@angular/cdk/fesm2022/cdk.mjs
var VERSION = new Version("18.1.4");

// node_modules/@angular/material/fesm2022/core.mjs
var VERSION2 = new Version("18.1.4");
var _AnimationCurves = class _AnimationCurves {
};
_AnimationCurves.STANDARD_CURVE = "cubic-bezier(0.4,0.0,0.2,1)";
_AnimationCurves.DECELERATION_CURVE = "cubic-bezier(0.0,0.0,0.2,1)";
_AnimationCurves.ACCELERATION_CURVE = "cubic-bezier(0.4,0.0,1,1)";
_AnimationCurves.SHARP_CURVE = "cubic-bezier(0.4,0.0,0.6,1)";
var AnimationCurves = _AnimationCurves;
var _AnimationDurations = class _AnimationDurations {
};
_AnimationDurations.COMPLEX = "375ms";
_AnimationDurations.ENTERING = "225ms";
_AnimationDurations.EXITING = "195ms";
var AnimationDurations = _AnimationDurations;
function MATERIAL_SANITY_CHECKS_FACTORY() {
  return true;
}
var MATERIAL_SANITY_CHECKS = new InjectionToken("mat-sanity-checks", {
  providedIn: "root",
  factory: MATERIAL_SANITY_CHECKS_FACTORY
});
var _MatCommonModule = class _MatCommonModule {
  constructor(highContrastModeDetector, _sanityChecks, _document) {
    this._sanityChecks = _sanityChecks;
    this._document = _document;
    this._hasDoneGlobalChecks = false;
    highContrastModeDetector._applyBodyHighContrastModeCssClasses();
    if (!this._hasDoneGlobalChecks) {
      this._hasDoneGlobalChecks = true;
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        const platform = inject(Platform, {
          optional: true
        });
        if (this._checkIsEnabled("doctype")) {
          _checkDoctypeIsDefined(this._document);
        }
        if (this._checkIsEnabled("theme")) {
          _checkThemeIsPresent(this._document, !!platform?.isBrowser);
        }
        if (this._checkIsEnabled("version")) {
          _checkCdkVersionMatch();
        }
      }
    }
  }
  /** Gets whether a specific sanity check is enabled. */
  _checkIsEnabled(name) {
    if (_isTestEnvironment()) {
      return false;
    }
    if (typeof this._sanityChecks === "boolean") {
      return this._sanityChecks;
    }
    return !!this._sanityChecks[name];
  }
};
_MatCommonModule.\u0275fac = \u0275\u0275ngDeclareFactory({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _MatCommonModule,
  deps: [{
    token: HighContrastModeDetector
  }, {
    token: MATERIAL_SANITY_CHECKS,
    optional: true
  }, {
    token: DOCUMENT
  }],
  target: FactoryTarget.NgModule
});
_MatCommonModule.\u0275mod = \u0275\u0275ngDeclareNgModule({
  minVersion: "14.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _MatCommonModule,
  imports: [BidiModule],
  exports: [BidiModule]
});
_MatCommonModule.\u0275inj = \u0275\u0275ngDeclareInjector({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _MatCommonModule,
  imports: [BidiModule, BidiModule]
});
var MatCommonModule = _MatCommonModule;
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: MatCommonModule,
  decorators: [{
    type: NgModule,
    args: [{
      imports: [BidiModule],
      exports: [BidiModule]
    }]
  }],
  ctorParameters: () => [{
    type: HighContrastModeDetector
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MATERIAL_SANITY_CHECKS]
    }]
  }, {
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }]
});
function _checkDoctypeIsDefined(doc) {
  if (!doc.doctype) {
    console.warn("Current document does not have a doctype. This may cause some Angular Material components not to behave as expected.");
  }
}
function _checkThemeIsPresent(doc, isBrowser) {
  if (!doc.body || !isBrowser) {
    return;
  }
  const testElement = doc.createElement("div");
  testElement.classList.add("mat-theme-loaded-marker");
  doc.body.appendChild(testElement);
  const computedStyle = getComputedStyle(testElement);
  if (computedStyle && computedStyle.display !== "none") {
    console.warn("Could not find Angular Material core theme. Most Material components may not work as expected. For more info refer to the theming guide: https://material.angular.io/guide/theming");
  }
  testElement.remove();
}
function _checkCdkVersionMatch() {
  if (VERSION2.full !== VERSION.full) {
    console.warn("The Angular Material version (" + VERSION2.full + ") does not match the Angular CDK version (" + VERSION.full + ").\nPlease ensure the versions of these two packages exactly match.");
  }
}
var MAT_DATE_LOCALE = new InjectionToken("MAT_DATE_LOCALE", {
  providedIn: "root",
  factory: MAT_DATE_LOCALE_FACTORY
});
function MAT_DATE_LOCALE_FACTORY() {
  return inject(LOCALE_ID);
}
var DateAdapter = class {
  constructor() {
    this._localeChanges = new Subject();
    this.localeChanges = this._localeChanges;
  }
  /**
   * Given a potential date object, returns that same date object if it is
   * a valid date, or `null` if it's not a valid date.
   * @param obj The object to check.
   * @returns A date or `null`.
   */
  getValidDateOrNull(obj) {
    return this.isDateInstance(obj) && this.isValid(obj) ? obj : null;
  }
  /**
   * Attempts to deserialize a value to a valid date object. This is different from parsing in that
   * deserialize should only accept non-ambiguous, locale-independent formats (e.g. a ISO 8601
   * string). The default implementation does not allow any deserialization, it simply checks that
   * the given value is already a valid date object or null. The `<mat-datepicker>` will call this
   * method on all of its `@Input()` properties that accept dates. It is therefore possible to
   * support passing values from your backend directly to these properties by overriding this method
   * to also deserialize the format used by your backend.
   * @param value The value to be deserialized into a date object.
   * @returns The deserialized date object, either a valid date, null if the value can be
   *     deserialized into a null date (e.g. the empty string), or an invalid date.
   */
  deserialize(value) {
    if (value == null || this.isDateInstance(value) && this.isValid(value)) {
      return value;
    }
    return this.invalid();
  }
  /**
   * Sets the locale used for all dates.
   * @param locale The new locale.
   */
  setLocale(locale) {
    this.locale = locale;
    this._localeChanges.next();
  }
  /**
   * Compares two dates.
   * @param first The first date to compare.
   * @param second The second date to compare.
   * @returns 0 if the dates are equal, a number less than 0 if the first date is earlier,
   *     a number greater than 0 if the first date is later.
   */
  compareDate(first, second) {
    return this.getYear(first) - this.getYear(second) || this.getMonth(first) - this.getMonth(second) || this.getDate(first) - this.getDate(second);
  }
  /**
   * Checks if two dates are equal.
   * @param first The first date to check.
   * @param second The second date to check.
   * @returns Whether the two dates are equal.
   *     Null dates are considered equal to other null dates.
   */
  sameDate(first, second) {
    if (first && second) {
      let firstValid = this.isValid(first);
      let secondValid = this.isValid(second);
      if (firstValid && secondValid) {
        return !this.compareDate(first, second);
      }
      return firstValid == secondValid;
    }
    return first == second;
  }
  /**
   * Clamp the given date between min and max dates.
   * @param date The date to clamp.
   * @param min The minimum value to allow. If null or omitted no min is enforced.
   * @param max The maximum value to allow. If null or omitted no max is enforced.
   * @returns `min` if `date` is less than `min`, `max` if date is greater than `max`,
   *     otherwise `date`.
   */
  clampDate(date, min, max) {
    if (min && this.compareDate(date, min) < 0) {
      return min;
    }
    if (max && this.compareDate(date, max) > 0) {
      return max;
    }
    return date;
  }
};
var MAT_DATE_FORMATS = new InjectionToken("mat-date-formats");
var ISO_8601_REGEX = /^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/;
function range(length, valueFunction) {
  const valuesArray = Array(length);
  for (let i = 0; i < length; i++) {
    valuesArray[i] = valueFunction(i);
  }
  return valuesArray;
}
var _NativeDateAdapter = class _NativeDateAdapter extends DateAdapter {
  constructor(matDateLocale) {
    super();
    this.useUtcForDisplay = false;
    this._matDateLocale = inject(MAT_DATE_LOCALE, {
      optional: true
    });
    if (matDateLocale !== void 0) {
      this._matDateLocale = matDateLocale;
    }
    super.setLocale(this._matDateLocale);
  }
  getYear(date) {
    return date.getFullYear();
  }
  getMonth(date) {
    return date.getMonth();
  }
  getDate(date) {
    return date.getDate();
  }
  getDayOfWeek(date) {
    return date.getDay();
  }
  getMonthNames(style) {
    const dtf = new Intl.DateTimeFormat(this.locale, {
      month: style,
      timeZone: "utc"
    });
    return range(12, (i) => this._format(dtf, new Date(2017, i, 1)));
  }
  getDateNames() {
    const dtf = new Intl.DateTimeFormat(this.locale, {
      day: "numeric",
      timeZone: "utc"
    });
    return range(31, (i) => this._format(dtf, new Date(2017, 0, i + 1)));
  }
  getDayOfWeekNames(style) {
    const dtf = new Intl.DateTimeFormat(this.locale, {
      weekday: style,
      timeZone: "utc"
    });
    return range(7, (i) => this._format(dtf, new Date(2017, 0, i + 1)));
  }
  getYearName(date) {
    const dtf = new Intl.DateTimeFormat(this.locale, {
      year: "numeric",
      timeZone: "utc"
    });
    return this._format(dtf, date);
  }
  getFirstDayOfWeek() {
    return 0;
  }
  getNumDaysInMonth(date) {
    return this.getDate(this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + 1, 0));
  }
  clone(date) {
    return new Date(date.getTime());
  }
  createDate(year, month, date) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (month < 0 || month > 11) {
        throw Error(`Invalid month index "${month}". Month index has to be between 0 and 11.`);
      }
      if (date < 1) {
        throw Error(`Invalid date "${date}". Date has to be greater than 0.`);
      }
    }
    let result = this._createDateWithOverflow(year, month, date);
    if (result.getMonth() != month && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error(`Invalid date "${date}" for month with index "${month}".`);
    }
    return result;
  }
  today() {
    return /* @__PURE__ */ new Date();
  }
  parse(value, parseFormat) {
    if (typeof value == "number") {
      return new Date(value);
    }
    return value ? new Date(Date.parse(value)) : null;
  }
  format(date, displayFormat) {
    if (!this.isValid(date)) {
      throw Error("NativeDateAdapter: Cannot format invalid date.");
    }
    const dtf = new Intl.DateTimeFormat(this.locale, __spreadProps(__spreadValues({}, displayFormat), {
      timeZone: "utc"
    }));
    return this._format(dtf, date);
  }
  addCalendarYears(date, years) {
    return this.addCalendarMonths(date, years * 12);
  }
  addCalendarMonths(date, months) {
    let newDate = this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + months, this.getDate(date));
    if (this.getMonth(newDate) != ((this.getMonth(date) + months) % 12 + 12) % 12) {
      newDate = this._createDateWithOverflow(this.getYear(newDate), this.getMonth(newDate), 0);
    }
    return newDate;
  }
  addCalendarDays(date, days) {
    return this._createDateWithOverflow(this.getYear(date), this.getMonth(date), this.getDate(date) + days);
  }
  toIso8601(date) {
    return [date.getUTCFullYear(), this._2digit(date.getUTCMonth() + 1), this._2digit(date.getUTCDate())].join("-");
  }
  /**
   * Returns the given value if given a valid Date or null. Deserializes valid ISO 8601 strings
   * (https://www.ietf.org/rfc/rfc3339.txt) into valid Dates and empty string into null. Returns an
   * invalid date for all other values.
   */
  deserialize(value) {
    if (typeof value === "string") {
      if (!value) {
        return null;
      }
      if (ISO_8601_REGEX.test(value)) {
        let date = new Date(value);
        if (this.isValid(date)) {
          return date;
        }
      }
    }
    return super.deserialize(value);
  }
  isDateInstance(obj) {
    return obj instanceof Date;
  }
  isValid(date) {
    return !isNaN(date.getTime());
  }
  invalid() {
    return /* @__PURE__ */ new Date(NaN);
  }
  /** Creates a date but allows the month and date to overflow. */
  _createDateWithOverflow(year, month, date) {
    const d = /* @__PURE__ */ new Date();
    d.setFullYear(year, month, date);
    d.setHours(0, 0, 0, 0);
    return d;
  }
  /**
   * Pads a number to make it two digits.
   * @param n The number to pad.
   * @returns The padded number.
   */
  _2digit(n) {
    return ("00" + n).slice(-2);
  }
  /**
   * When converting Date object to string, javascript built-in functions may return wrong
   * results because it applies its internal DST rules. The DST rules around the world change
   * very frequently, and the current valid rule is not always valid in previous years though.
   * We work around this problem building a new Date object which has its internal UTC
   * representation with the local date and time.
   * @param dtf Intl.DateTimeFormat object, containing the desired string format. It must have
   *    timeZone set to 'utc' to work fine.
   * @param date Date from which we want to get the string representation according to dtf
   * @returns A Date object with its UTC representation based on the passed in date info
   */
  _format(dtf, date) {
    const d = /* @__PURE__ */ new Date();
    d.setUTCFullYear(date.getFullYear(), date.getMonth(), date.getDate());
    d.setUTCHours(date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
    return dtf.format(d);
  }
};
_NativeDateAdapter.\u0275fac = \u0275\u0275ngDeclareFactory({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _NativeDateAdapter,
  deps: [{
    token: MAT_DATE_LOCALE,
    optional: true
  }],
  target: FactoryTarget.Injectable
});
_NativeDateAdapter.\u0275prov = \u0275\u0275ngDeclareInjectable({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _NativeDateAdapter
});
var NativeDateAdapter = _NativeDateAdapter;
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: NativeDateAdapter,
  decorators: [{
    type: Injectable
  }],
  ctorParameters: () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_DATE_LOCALE]
    }]
  }]
});
var MAT_NATIVE_DATE_FORMATS = {
  parse: {
    dateInput: null
  },
  display: {
    dateInput: {
      year: "numeric",
      month: "numeric",
      day: "numeric"
    },
    monthYearLabel: {
      year: "numeric",
      month: "short"
    },
    dateA11yLabel: {
      year: "numeric",
      month: "long",
      day: "numeric"
    },
    monthYearA11yLabel: {
      year: "numeric",
      month: "long"
    }
  }
};
var _NativeDateModule = class _NativeDateModule {
};
_NativeDateModule.\u0275fac = \u0275\u0275ngDeclareFactory({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _NativeDateModule,
  deps: [],
  target: FactoryTarget.NgModule
});
_NativeDateModule.\u0275mod = \u0275\u0275ngDeclareNgModule({
  minVersion: "14.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _NativeDateModule
});
_NativeDateModule.\u0275inj = \u0275\u0275ngDeclareInjector({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _NativeDateModule,
  providers: [{
    provide: DateAdapter,
    useClass: NativeDateAdapter
  }]
});
var NativeDateModule = _NativeDateModule;
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: NativeDateModule,
  decorators: [{
    type: NgModule,
    args: [{
      providers: [{
        provide: DateAdapter,
        useClass: NativeDateAdapter
      }]
    }]
  }]
});
var _MatNativeDateModule = class _MatNativeDateModule {
};
_MatNativeDateModule.\u0275fac = \u0275\u0275ngDeclareFactory({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _MatNativeDateModule,
  deps: [],
  target: FactoryTarget.NgModule
});
_MatNativeDateModule.\u0275mod = \u0275\u0275ngDeclareNgModule({
  minVersion: "14.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _MatNativeDateModule
});
_MatNativeDateModule.\u0275inj = \u0275\u0275ngDeclareInjector({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _MatNativeDateModule,
  providers: [provideNativeDateAdapter()]
});
var MatNativeDateModule = _MatNativeDateModule;
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: MatNativeDateModule,
  decorators: [{
    type: NgModule,
    args: [{
      providers: [provideNativeDateAdapter()]
    }]
  }]
});
function provideNativeDateAdapter(formats = MAT_NATIVE_DATE_FORMATS) {
  return [{
    provide: DateAdapter,
    useClass: NativeDateAdapter
  }, {
    provide: MAT_DATE_FORMATS,
    useValue: formats
  }];
}
var _ShowOnDirtyErrorStateMatcher = class _ShowOnDirtyErrorStateMatcher {
  isErrorState(control, form) {
    return !!(control && control.invalid && (control.dirty || form && form.submitted));
  }
};
_ShowOnDirtyErrorStateMatcher.\u0275fac = \u0275\u0275ngDeclareFactory({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _ShowOnDirtyErrorStateMatcher,
  deps: [],
  target: FactoryTarget.Injectable
});
_ShowOnDirtyErrorStateMatcher.\u0275prov = \u0275\u0275ngDeclareInjectable({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _ShowOnDirtyErrorStateMatcher
});
var ShowOnDirtyErrorStateMatcher = _ShowOnDirtyErrorStateMatcher;
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: ShowOnDirtyErrorStateMatcher,
  decorators: [{
    type: Injectable
  }]
});
var _ErrorStateMatcher = class _ErrorStateMatcher {
  isErrorState(control, form) {
    return !!(control && control.invalid && (control.touched || form && form.submitted));
  }
};
_ErrorStateMatcher.\u0275fac = \u0275\u0275ngDeclareFactory({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _ErrorStateMatcher,
  deps: [],
  target: FactoryTarget.Injectable
});
_ErrorStateMatcher.\u0275prov = \u0275\u0275ngDeclareInjectable({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _ErrorStateMatcher,
  providedIn: "root"
});
var ErrorStateMatcher = _ErrorStateMatcher;
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: ErrorStateMatcher,
  decorators: [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }]
});
var _MatLine = class _MatLine {
};
_MatLine.\u0275fac = \u0275\u0275ngDeclareFactory({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _MatLine,
  deps: [],
  target: FactoryTarget.Directive
});
_MatLine.\u0275dir = \u0275\u0275ngDeclareDirective({
  minVersion: "14.0.0",
  version: "18.2.0-next.2",
  type: _MatLine,
  isStandalone: true,
  selector: "[mat-line], [matLine]",
  host: {
    classAttribute: "mat-line"
  },
  ngImport: core_exports
});
var MatLine = _MatLine;
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: MatLine,
  decorators: [{
    type: Directive,
    args: [{
      selector: "[mat-line], [matLine]",
      host: {
        "class": "mat-line"
      },
      standalone: true
    }]
  }]
});
var _MatLineModule = class _MatLineModule {
};
_MatLineModule.\u0275fac = \u0275\u0275ngDeclareFactory({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _MatLineModule,
  deps: [],
  target: FactoryTarget.NgModule
});
_MatLineModule.\u0275mod = \u0275\u0275ngDeclareNgModule({
  minVersion: "14.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _MatLineModule,
  imports: [MatCommonModule, MatLine],
  exports: [MatLine, MatCommonModule]
});
_MatLineModule.\u0275inj = \u0275\u0275ngDeclareInjector({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _MatLineModule,
  imports: [MatCommonModule, MatCommonModule]
});
var MatLineModule = _MatLineModule;
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: MatLineModule,
  decorators: [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, MatLine],
      exports: [MatLine, MatCommonModule]
    }]
  }]
});
var RippleState;
(function(RippleState2) {
  RippleState2[RippleState2["FADING_IN"] = 0] = "FADING_IN";
  RippleState2[RippleState2["VISIBLE"] = 1] = "VISIBLE";
  RippleState2[RippleState2["FADING_OUT"] = 2] = "FADING_OUT";
  RippleState2[RippleState2["HIDDEN"] = 3] = "HIDDEN";
})(RippleState || (RippleState = {}));
var RippleRef = class {
  constructor(_renderer, element, config, _animationForciblyDisabledThroughCss = false) {
    this._renderer = _renderer;
    this.element = element;
    this.config = config;
    this._animationForciblyDisabledThroughCss = _animationForciblyDisabledThroughCss;
    this.state = RippleState.HIDDEN;
  }
  /** Fades out the ripple element. */
  fadeOut() {
    this._renderer.fadeOutRipple(this);
  }
};
var passiveCapturingEventOptions$1 = normalizePassiveListenerOptions({
  passive: true,
  capture: true
});
var RippleEventManager = class {
  constructor() {
    this._events = /* @__PURE__ */ new Map();
    this._delegateEventHandler = (event) => {
      const target = _getEventTarget(event);
      if (target) {
        this._events.get(event.type)?.forEach((handlers, element) => {
          if (element === target || element.contains(target)) {
            handlers.forEach((handler) => handler.handleEvent(event));
          }
        });
      }
    };
  }
  /** Adds an event handler. */
  addHandler(ngZone, name, element, handler) {
    const handlersForEvent = this._events.get(name);
    if (handlersForEvent) {
      const handlersForElement = handlersForEvent.get(element);
      if (handlersForElement) {
        handlersForElement.add(handler);
      } else {
        handlersForEvent.set(element, /* @__PURE__ */ new Set([handler]));
      }
    } else {
      this._events.set(name, /* @__PURE__ */ new Map([[element, /* @__PURE__ */ new Set([handler])]]));
      ngZone.runOutsideAngular(() => {
        document.addEventListener(name, this._delegateEventHandler, passiveCapturingEventOptions$1);
      });
    }
  }
  /** Removes an event handler. */
  removeHandler(name, element, handler) {
    const handlersForEvent = this._events.get(name);
    if (!handlersForEvent) {
      return;
    }
    const handlersForElement = handlersForEvent.get(element);
    if (!handlersForElement) {
      return;
    }
    handlersForElement.delete(handler);
    if (handlersForElement.size === 0) {
      handlersForEvent.delete(element);
    }
    if (handlersForEvent.size === 0) {
      this._events.delete(name);
      document.removeEventListener(name, this._delegateEventHandler, passiveCapturingEventOptions$1);
    }
  }
};
var defaultRippleAnimationConfig = {
  enterDuration: 225,
  exitDuration: 150
};
var ignoreMouseEventsTimeout = 800;
var passiveCapturingEventOptions = normalizePassiveListenerOptions({
  passive: true,
  capture: true
});
var pointerDownEvents = ["mousedown", "touchstart"];
var pointerUpEvents = ["mouseup", "mouseleave", "touchend", "touchcancel"];
var _RippleRenderer = class _RippleRenderer {
  constructor(_target, _ngZone, elementOrElementRef, _platform) {
    this._target = _target;
    this._ngZone = _ngZone;
    this._platform = _platform;
    this._isPointerDown = false;
    this._activeRipples = /* @__PURE__ */ new Map();
    this._pointerUpEventsRegistered = false;
    if (_platform.isBrowser) {
      this._containerElement = coerceElement(elementOrElementRef);
    }
  }
  /**
   * Fades in a ripple at the given coordinates.
   * @param x Coordinate within the element, along the X axis at which to start the ripple.
   * @param y Coordinate within the element, along the Y axis at which to start the ripple.
   * @param config Extra ripple options.
   */
  fadeInRipple(x, y, config = {}) {
    const containerRect = this._containerRect = this._containerRect || this._containerElement.getBoundingClientRect();
    const animationConfig = __spreadValues(__spreadValues({}, defaultRippleAnimationConfig), config.animation);
    if (config.centered) {
      x = containerRect.left + containerRect.width / 2;
      y = containerRect.top + containerRect.height / 2;
    }
    const radius = config.radius || distanceToFurthestCorner(x, y, containerRect);
    const offsetX = x - containerRect.left;
    const offsetY = y - containerRect.top;
    const enterDuration = animationConfig.enterDuration;
    const ripple = document.createElement("div");
    ripple.classList.add("mat-ripple-element");
    ripple.style.left = `${offsetX - radius}px`;
    ripple.style.top = `${offsetY - radius}px`;
    ripple.style.height = `${radius * 2}px`;
    ripple.style.width = `${radius * 2}px`;
    if (config.color != null) {
      ripple.style.backgroundColor = config.color;
    }
    ripple.style.transitionDuration = `${enterDuration}ms`;
    this._containerElement.appendChild(ripple);
    const computedStyles = window.getComputedStyle(ripple);
    const userTransitionProperty = computedStyles.transitionProperty;
    const userTransitionDuration = computedStyles.transitionDuration;
    const animationForciblyDisabledThroughCss = userTransitionProperty === "none" || // Note: The canonical unit for serialized CSS `<time>` properties is seconds. Additionally
    // some browsers expand the duration for every property (in our case `opacity` and `transform`).
    userTransitionDuration === "0s" || userTransitionDuration === "0s, 0s" || // If the container is 0x0, it's likely `display: none`.
    containerRect.width === 0 && containerRect.height === 0;
    const rippleRef = new RippleRef(this, ripple, config, animationForciblyDisabledThroughCss);
    ripple.style.transform = "scale3d(1, 1, 1)";
    rippleRef.state = RippleState.FADING_IN;
    if (!config.persistent) {
      this._mostRecentTransientRipple = rippleRef;
    }
    let eventListeners = null;
    if (!animationForciblyDisabledThroughCss && (enterDuration || animationConfig.exitDuration)) {
      this._ngZone.runOutsideAngular(() => {
        const onTransitionEnd = () => {
          if (eventListeners) {
            eventListeners.fallbackTimer = null;
          }
          clearTimeout(fallbackTimer);
          this._finishRippleTransition(rippleRef);
        };
        const onTransitionCancel = () => this._destroyRipple(rippleRef);
        const fallbackTimer = setTimeout(onTransitionCancel, enterDuration + 100);
        ripple.addEventListener("transitionend", onTransitionEnd);
        ripple.addEventListener("transitioncancel", onTransitionCancel);
        eventListeners = {
          onTransitionEnd,
          onTransitionCancel,
          fallbackTimer
        };
      });
    }
    this._activeRipples.set(rippleRef, eventListeners);
    if (animationForciblyDisabledThroughCss || !enterDuration) {
      this._finishRippleTransition(rippleRef);
    }
    return rippleRef;
  }
  /** Fades out a ripple reference. */
  fadeOutRipple(rippleRef) {
    if (rippleRef.state === RippleState.FADING_OUT || rippleRef.state === RippleState.HIDDEN) {
      return;
    }
    const rippleEl = rippleRef.element;
    const animationConfig = __spreadValues(__spreadValues({}, defaultRippleAnimationConfig), rippleRef.config.animation);
    rippleEl.style.transitionDuration = `${animationConfig.exitDuration}ms`;
    rippleEl.style.opacity = "0";
    rippleRef.state = RippleState.FADING_OUT;
    if (rippleRef._animationForciblyDisabledThroughCss || !animationConfig.exitDuration) {
      this._finishRippleTransition(rippleRef);
    }
  }
  /** Fades out all currently active ripples. */
  fadeOutAll() {
    this._getActiveRipples().forEach((ripple) => ripple.fadeOut());
  }
  /** Fades out all currently active non-persistent ripples. */
  fadeOutAllNonPersistent() {
    this._getActiveRipples().forEach((ripple) => {
      if (!ripple.config.persistent) {
        ripple.fadeOut();
      }
    });
  }
  /** Sets up the trigger event listeners */
  setupTriggerEvents(elementOrElementRef) {
    const element = coerceElement(elementOrElementRef);
    if (!this._platform.isBrowser || !element || element === this._triggerElement) {
      return;
    }
    this._removeTriggerEvents();
    this._triggerElement = element;
    pointerDownEvents.forEach((type) => {
      _RippleRenderer._eventManager.addHandler(this._ngZone, type, element, this);
    });
  }
  /**
   * Handles all registered events.
   * @docs-private
   */
  handleEvent(event) {
    if (event.type === "mousedown") {
      this._onMousedown(event);
    } else if (event.type === "touchstart") {
      this._onTouchStart(event);
    } else {
      this._onPointerUp();
    }
    if (!this._pointerUpEventsRegistered) {
      this._ngZone.runOutsideAngular(() => {
        pointerUpEvents.forEach((type) => {
          this._triggerElement.addEventListener(type, this, passiveCapturingEventOptions);
        });
      });
      this._pointerUpEventsRegistered = true;
    }
  }
  /** Method that will be called if the fade-in or fade-in transition completed. */
  _finishRippleTransition(rippleRef) {
    if (rippleRef.state === RippleState.FADING_IN) {
      this._startFadeOutTransition(rippleRef);
    } else if (rippleRef.state === RippleState.FADING_OUT) {
      this._destroyRipple(rippleRef);
    }
  }
  /**
   * Starts the fade-out transition of the given ripple if it's not persistent and the pointer
   * is not held down anymore.
   */
  _startFadeOutTransition(rippleRef) {
    const isMostRecentTransientRipple = rippleRef === this._mostRecentTransientRipple;
    const {
      persistent
    } = rippleRef.config;
    rippleRef.state = RippleState.VISIBLE;
    if (!persistent && (!isMostRecentTransientRipple || !this._isPointerDown)) {
      rippleRef.fadeOut();
    }
  }
  /** Destroys the given ripple by removing it from the DOM and updating its state. */
  _destroyRipple(rippleRef) {
    const eventListeners = this._activeRipples.get(rippleRef) ?? null;
    this._activeRipples.delete(rippleRef);
    if (!this._activeRipples.size) {
      this._containerRect = null;
    }
    if (rippleRef === this._mostRecentTransientRipple) {
      this._mostRecentTransientRipple = null;
    }
    rippleRef.state = RippleState.HIDDEN;
    if (eventListeners !== null) {
      rippleRef.element.removeEventListener("transitionend", eventListeners.onTransitionEnd);
      rippleRef.element.removeEventListener("transitioncancel", eventListeners.onTransitionCancel);
      if (eventListeners.fallbackTimer !== null) {
        clearTimeout(eventListeners.fallbackTimer);
      }
    }
    rippleRef.element.remove();
  }
  /** Function being called whenever the trigger is being pressed using mouse. */
  _onMousedown(event) {
    const isFakeMousedown = isFakeMousedownFromScreenReader(event);
    const isSyntheticEvent = this._lastTouchStartEvent && Date.now() < this._lastTouchStartEvent + ignoreMouseEventsTimeout;
    if (!this._target.rippleDisabled && !isFakeMousedown && !isSyntheticEvent) {
      this._isPointerDown = true;
      this.fadeInRipple(event.clientX, event.clientY, this._target.rippleConfig);
    }
  }
  /** Function being called whenever the trigger is being pressed using touch. */
  _onTouchStart(event) {
    if (!this._target.rippleDisabled && !isFakeTouchstartFromScreenReader(event)) {
      this._lastTouchStartEvent = Date.now();
      this._isPointerDown = true;
      const touches = event.changedTouches;
      if (touches) {
        for (let i = 0; i < touches.length; i++) {
          this.fadeInRipple(touches[i].clientX, touches[i].clientY, this._target.rippleConfig);
        }
      }
    }
  }
  /** Function being called whenever the trigger is being released. */
  _onPointerUp() {
    if (!this._isPointerDown) {
      return;
    }
    this._isPointerDown = false;
    this._getActiveRipples().forEach((ripple) => {
      const isVisible = ripple.state === RippleState.VISIBLE || ripple.config.terminateOnPointerUp && ripple.state === RippleState.FADING_IN;
      if (!ripple.config.persistent && isVisible) {
        ripple.fadeOut();
      }
    });
  }
  _getActiveRipples() {
    return Array.from(this._activeRipples.keys());
  }
  /** Removes previously registered event listeners from the trigger element. */
  _removeTriggerEvents() {
    const trigger = this._triggerElement;
    if (trigger) {
      pointerDownEvents.forEach((type) => _RippleRenderer._eventManager.removeHandler(type, trigger, this));
      if (this._pointerUpEventsRegistered) {
        pointerUpEvents.forEach((type) => trigger.removeEventListener(type, this, passiveCapturingEventOptions));
        this._pointerUpEventsRegistered = false;
      }
    }
  }
};
_RippleRenderer._eventManager = new RippleEventManager();
var RippleRenderer = _RippleRenderer;
function distanceToFurthestCorner(x, y, rect) {
  const distX = Math.max(Math.abs(x - rect.left), Math.abs(x - rect.right));
  const distY = Math.max(Math.abs(y - rect.top), Math.abs(y - rect.bottom));
  return Math.sqrt(distX * distX + distY * distY);
}
var MAT_RIPPLE_GLOBAL_OPTIONS = new InjectionToken("mat-ripple-global-options");
var _MatRipple = class _MatRipple {
  /**
   * Whether click events will not trigger the ripple. Ripples can be still launched manually
   * by using the `launch()` method.
   */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    if (value) {
      this.fadeOutAllNonPersistent();
    }
    this._disabled = value;
    this._setupTriggerEventsIfEnabled();
  }
  /**
   * The element that triggers the ripple when click events are received.
   * Defaults to the directive's host element.
   */
  get trigger() {
    return this._trigger || this._elementRef.nativeElement;
  }
  set trigger(trigger) {
    this._trigger = trigger;
    this._setupTriggerEventsIfEnabled();
  }
  constructor(_elementRef, ngZone, platform, globalOptions, _animationMode) {
    this._elementRef = _elementRef;
    this._animationMode = _animationMode;
    this.radius = 0;
    this._disabled = false;
    this._isInitialized = false;
    this._globalOptions = globalOptions || {};
    this._rippleRenderer = new RippleRenderer(this, ngZone, _elementRef, platform);
  }
  ngOnInit() {
    this._isInitialized = true;
    this._setupTriggerEventsIfEnabled();
  }
  ngOnDestroy() {
    this._rippleRenderer._removeTriggerEvents();
  }
  /** Fades out all currently showing ripple elements. */
  fadeOutAll() {
    this._rippleRenderer.fadeOutAll();
  }
  /** Fades out all currently showing non-persistent ripple elements. */
  fadeOutAllNonPersistent() {
    this._rippleRenderer.fadeOutAllNonPersistent();
  }
  /**
   * Ripple configuration from the directive's input values.
   * @docs-private Implemented as part of RippleTarget
   */
  get rippleConfig() {
    return {
      centered: this.centered,
      radius: this.radius,
      color: this.color,
      animation: __spreadValues(__spreadValues(__spreadValues({}, this._globalOptions.animation), this._animationMode === "NoopAnimations" ? {
        enterDuration: 0,
        exitDuration: 0
      } : {}), this.animation),
      terminateOnPointerUp: this._globalOptions.terminateOnPointerUp
    };
  }
  /**
   * Whether ripples on pointer-down are disabled or not.
   * @docs-private Implemented as part of RippleTarget
   */
  get rippleDisabled() {
    return this.disabled || !!this._globalOptions.disabled;
  }
  /** Sets up the trigger event listeners if ripples are enabled. */
  _setupTriggerEventsIfEnabled() {
    if (!this.disabled && this._isInitialized) {
      this._rippleRenderer.setupTriggerEvents(this.trigger);
    }
  }
  /** Launches a manual ripple at the specified coordinated or just by the ripple config. */
  launch(configOrX, y = 0, config) {
    if (typeof configOrX === "number") {
      return this._rippleRenderer.fadeInRipple(configOrX, y, __spreadValues(__spreadValues({}, this.rippleConfig), config));
    } else {
      return this._rippleRenderer.fadeInRipple(0, 0, __spreadValues(__spreadValues({}, this.rippleConfig), configOrX));
    }
  }
};
_MatRipple.\u0275fac = \u0275\u0275ngDeclareFactory({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _MatRipple,
  deps: [{
    token: ElementRef
  }, {
    token: NgZone
  }, {
    token: Platform
  }, {
    token: MAT_RIPPLE_GLOBAL_OPTIONS,
    optional: true
  }, {
    token: ANIMATION_MODULE_TYPE,
    optional: true
  }],
  target: FactoryTarget.Directive
});
_MatRipple.\u0275dir = \u0275\u0275ngDeclareDirective({
  minVersion: "14.0.0",
  version: "18.2.0-next.2",
  type: _MatRipple,
  isStandalone: true,
  selector: "[mat-ripple], [matRipple]",
  inputs: {
    color: ["matRippleColor", "color"],
    unbounded: ["matRippleUnbounded", "unbounded"],
    centered: ["matRippleCentered", "centered"],
    radius: ["matRippleRadius", "radius"],
    animation: ["matRippleAnimation", "animation"],
    disabled: ["matRippleDisabled", "disabled"],
    trigger: ["matRippleTrigger", "trigger"]
  },
  host: {
    properties: {
      "class.mat-ripple-unbounded": "unbounded"
    },
    classAttribute: "mat-ripple"
  },
  exportAs: ["matRipple"],
  ngImport: core_exports
});
var MatRipple = _MatRipple;
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: MatRipple,
  decorators: [{
    type: Directive,
    args: [{
      selector: "[mat-ripple], [matRipple]",
      exportAs: "matRipple",
      host: {
        "class": "mat-ripple",
        "[class.mat-ripple-unbounded]": "unbounded"
      },
      standalone: true
    }]
  }],
  ctorParameters: () => [{
    type: ElementRef
  }, {
    type: NgZone
  }, {
    type: Platform
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_RIPPLE_GLOBAL_OPTIONS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ANIMATION_MODULE_TYPE]
    }]
  }],
  propDecorators: {
    color: [{
      type: Input,
      args: ["matRippleColor"]
    }],
    unbounded: [{
      type: Input,
      args: ["matRippleUnbounded"]
    }],
    centered: [{
      type: Input,
      args: ["matRippleCentered"]
    }],
    radius: [{
      type: Input,
      args: ["matRippleRadius"]
    }],
    animation: [{
      type: Input,
      args: ["matRippleAnimation"]
    }],
    disabled: [{
      type: Input,
      args: ["matRippleDisabled"]
    }],
    trigger: [{
      type: Input,
      args: ["matRippleTrigger"]
    }]
  }
});
var _MatRippleModule = class _MatRippleModule {
};
_MatRippleModule.\u0275fac = \u0275\u0275ngDeclareFactory({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _MatRippleModule,
  deps: [],
  target: FactoryTarget.NgModule
});
_MatRippleModule.\u0275mod = \u0275\u0275ngDeclareNgModule({
  minVersion: "14.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _MatRippleModule,
  imports: [MatCommonModule, MatRipple],
  exports: [MatRipple, MatCommonModule]
});
_MatRippleModule.\u0275inj = \u0275\u0275ngDeclareInjector({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _MatRippleModule,
  imports: [MatCommonModule, MatCommonModule]
});
var MatRippleModule = _MatRippleModule;
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: MatRippleModule,
  decorators: [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, MatRipple],
      exports: [MatRipple, MatCommonModule]
    }]
  }]
});
var _MatPseudoCheckbox = class _MatPseudoCheckbox {
  constructor(_animationMode) {
    this._animationMode = _animationMode;
    this.state = "unchecked";
    this.disabled = false;
    this.appearance = "full";
  }
};
_MatPseudoCheckbox.\u0275fac = \u0275\u0275ngDeclareFactory({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _MatPseudoCheckbox,
  deps: [{
    token: ANIMATION_MODULE_TYPE,
    optional: true
  }],
  target: FactoryTarget.Component
});
_MatPseudoCheckbox.\u0275cmp = \u0275\u0275ngDeclareComponent({
  minVersion: "14.0.0",
  version: "18.2.0-next.2",
  type: _MatPseudoCheckbox,
  isStandalone: true,
  selector: "mat-pseudo-checkbox",
  inputs: {
    state: "state",
    disabled: "disabled",
    appearance: "appearance"
  },
  host: {
    properties: {
      "class.mat-pseudo-checkbox-indeterminate": 'state === "indeterminate"',
      "class.mat-pseudo-checkbox-checked": 'state === "checked"',
      "class.mat-pseudo-checkbox-disabled": "disabled",
      "class.mat-pseudo-checkbox-minimal": 'appearance === "minimal"',
      "class.mat-pseudo-checkbox-full": 'appearance === "full"',
      "class._mat-animation-noopable": '_animationMode === "NoopAnimations"'
    },
    classAttribute: "mat-pseudo-checkbox"
  },
  ngImport: core_exports,
  template: "",
  isInline: true,
  styles: ['.mat-pseudo-checkbox{border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1),background-color 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:"";border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox._mat-animation-noopable{transition:none !important;animation:none !important}.mat-pseudo-checkbox._mat-animation-noopable::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{left:1px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{left:1px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after,.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after{color:var(--mat-minimal-pseudo-checkbox-selected-checkmark-color)}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after,.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after{color:var(--mat-minimal-pseudo-checkbox-disabled-selected-checkmark-color)}.mat-pseudo-checkbox-full{border-color:var(--mat-full-pseudo-checkbox-unselected-icon-color);border-width:2px;border-style:solid}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled{border-color:var(--mat-full-pseudo-checkbox-disabled-unselected-icon-color)}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate{background-color:var(--mat-full-pseudo-checkbox-selected-icon-color);border-color:rgba(0,0,0,0)}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after{color:var(--mat-full-pseudo-checkbox-selected-checkmark-color)}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled{background-color:var(--mat-full-pseudo-checkbox-disabled-selected-icon-color)}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after{color:var(--mat-full-pseudo-checkbox-disabled-selected-checkmark-color)}.mat-pseudo-checkbox{width:18px;height:18px}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after{width:14px;height:6px;transform-origin:center;top:-4.2426406871px;left:0;bottom:0;right:0;margin:auto}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after{top:8px;width:16px}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after{width:10px;height:4px;transform-origin:center;top:-2.8284271247px;left:0;bottom:0;right:0;margin:auto}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after{top:6px;width:12px}'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation$1.None
});
var MatPseudoCheckbox = _MatPseudoCheckbox;
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: MatPseudoCheckbox,
  decorators: [{
    type: Component,
    args: [{
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "mat-pseudo-checkbox",
      template: "",
      host: {
        "class": "mat-pseudo-checkbox",
        "[class.mat-pseudo-checkbox-indeterminate]": 'state === "indeterminate"',
        "[class.mat-pseudo-checkbox-checked]": 'state === "checked"',
        "[class.mat-pseudo-checkbox-disabled]": "disabled",
        "[class.mat-pseudo-checkbox-minimal]": 'appearance === "minimal"',
        "[class.mat-pseudo-checkbox-full]": 'appearance === "full"',
        "[class._mat-animation-noopable]": '_animationMode === "NoopAnimations"'
      },
      standalone: true,
      styles: ['.mat-pseudo-checkbox{border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1),background-color 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:"";border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox._mat-animation-noopable{transition:none !important;animation:none !important}.mat-pseudo-checkbox._mat-animation-noopable::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{left:1px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{left:1px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after,.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after{color:var(--mat-minimal-pseudo-checkbox-selected-checkmark-color)}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after,.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after{color:var(--mat-minimal-pseudo-checkbox-disabled-selected-checkmark-color)}.mat-pseudo-checkbox-full{border-color:var(--mat-full-pseudo-checkbox-unselected-icon-color);border-width:2px;border-style:solid}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled{border-color:var(--mat-full-pseudo-checkbox-disabled-unselected-icon-color)}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate{background-color:var(--mat-full-pseudo-checkbox-selected-icon-color);border-color:rgba(0,0,0,0)}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after{color:var(--mat-full-pseudo-checkbox-selected-checkmark-color)}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled{background-color:var(--mat-full-pseudo-checkbox-disabled-selected-icon-color)}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after{color:var(--mat-full-pseudo-checkbox-disabled-selected-checkmark-color)}.mat-pseudo-checkbox{width:18px;height:18px}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after{width:14px;height:6px;transform-origin:center;top:-4.2426406871px;left:0;bottom:0;right:0;margin:auto}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after{top:8px;width:16px}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after{width:10px;height:4px;transform-origin:center;top:-2.8284271247px;left:0;bottom:0;right:0;margin:auto}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after{top:6px;width:12px}']
    }]
  }],
  ctorParameters: () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ANIMATION_MODULE_TYPE]
    }]
  }],
  propDecorators: {
    state: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    appearance: [{
      type: Input
    }]
  }
});
var _MatPseudoCheckboxModule = class _MatPseudoCheckboxModule {
};
_MatPseudoCheckboxModule.\u0275fac = \u0275\u0275ngDeclareFactory({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _MatPseudoCheckboxModule,
  deps: [],
  target: FactoryTarget.NgModule
});
_MatPseudoCheckboxModule.\u0275mod = \u0275\u0275ngDeclareNgModule({
  minVersion: "14.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _MatPseudoCheckboxModule,
  imports: [MatCommonModule, MatPseudoCheckbox],
  exports: [MatPseudoCheckbox]
});
_MatPseudoCheckboxModule.\u0275inj = \u0275\u0275ngDeclareInjector({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _MatPseudoCheckboxModule,
  imports: [MatCommonModule]
});
var MatPseudoCheckboxModule = _MatPseudoCheckboxModule;
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: MatPseudoCheckboxModule,
  decorators: [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, MatPseudoCheckbox],
      exports: [MatPseudoCheckbox]
    }]
  }]
});
var MAT_OPTION_PARENT_COMPONENT = new InjectionToken("MAT_OPTION_PARENT_COMPONENT");
var _uniqueOptgroupIdCounter = 0;
var MAT_OPTGROUP = new InjectionToken("MatOptgroup");
var _MatOptgroup = class _MatOptgroup {
  constructor(parent) {
    this.disabled = false;
    this._labelId = `mat-optgroup-label-${_uniqueOptgroupIdCounter++}`;
    this._inert = parent?.inertGroups ?? false;
  }
};
_MatOptgroup.\u0275fac = \u0275\u0275ngDeclareFactory({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _MatOptgroup,
  deps: [{
    token: MAT_OPTION_PARENT_COMPONENT,
    optional: true
  }],
  target: FactoryTarget.Component
});
_MatOptgroup.\u0275cmp = \u0275\u0275ngDeclareComponent({
  minVersion: "16.1.0",
  version: "18.2.0-next.2",
  type: _MatOptgroup,
  isStandalone: true,
  selector: "mat-optgroup",
  inputs: {
    label: "label",
    disabled: ["disabled", "disabled", booleanAttribute]
  },
  host: {
    properties: {
      "attr.role": '_inert ? null : "group"',
      "attr.aria-disabled": "_inert ? null : disabled.toString()",
      "attr.aria-labelledby": "_inert ? null : _labelId"
    },
    classAttribute: "mat-mdc-optgroup"
  },
  providers: [{
    provide: MAT_OPTGROUP,
    useExisting: _MatOptgroup
  }],
  exportAs: ["matOptgroup"],
  ngImport: core_exports,
  template: '<span\n  class="mat-mdc-optgroup-label"\n  role="presentation"\n  [class.mdc-list-item--disabled]="disabled"\n  [id]="_labelId">\n  <span class="mdc-list-item__primary-text">{{ label }} <ng-content></ng-content></span>\n</span>\n\n<ng-content select="mat-option, ng-container"></ng-content>\n',
  styles: [".mat-mdc-optgroup{color:var(--mat-optgroup-label-text-color);font-family:var(--mat-optgroup-label-text-font);line-height:var(--mat-optgroup-label-text-line-height);font-size:var(--mat-optgroup-label-text-size);letter-spacing:var(--mat-optgroup-label-text-tracking);font-weight:var(--mat-optgroup-label-text-weight)}.mat-mdc-optgroup-label{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;min-height:48px;padding:0 16px;outline:none}.mat-mdc-optgroup-label.mdc-list-item--disabled{opacity:.38}.mat-mdc-optgroup-label .mdc-list-item__primary-text{font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;font-family:inherit;text-decoration:inherit;text-transform:inherit;white-space:normal}"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation$1.None
});
var MatOptgroup = _MatOptgroup;
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: MatOptgroup,
  decorators: [{
    type: Component,
    args: [{
      selector: "mat-optgroup",
      exportAs: "matOptgroup",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "class": "mat-mdc-optgroup",
        "[attr.role]": '_inert ? null : "group"',
        "[attr.aria-disabled]": "_inert ? null : disabled.toString()",
        "[attr.aria-labelledby]": "_inert ? null : _labelId"
      },
      providers: [{
        provide: MAT_OPTGROUP,
        useExisting: MatOptgroup
      }],
      standalone: true,
      template: '<span\n  class="mat-mdc-optgroup-label"\n  role="presentation"\n  [class.mdc-list-item--disabled]="disabled"\n  [id]="_labelId">\n  <span class="mdc-list-item__primary-text">{{ label }} <ng-content></ng-content></span>\n</span>\n\n<ng-content select="mat-option, ng-container"></ng-content>\n',
      styles: [".mat-mdc-optgroup{color:var(--mat-optgroup-label-text-color);font-family:var(--mat-optgroup-label-text-font);line-height:var(--mat-optgroup-label-text-line-height);font-size:var(--mat-optgroup-label-text-size);letter-spacing:var(--mat-optgroup-label-text-tracking);font-weight:var(--mat-optgroup-label-text-weight)}.mat-mdc-optgroup-label{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;min-height:48px;padding:0 16px;outline:none}.mat-mdc-optgroup-label.mdc-list-item--disabled{opacity:.38}.mat-mdc-optgroup-label .mdc-list-item__primary-text{font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;font-family:inherit;text-decoration:inherit;text-transform:inherit;white-space:normal}"]
    }]
  }],
  ctorParameters: () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [MAT_OPTION_PARENT_COMPONENT]
    }, {
      type: Optional
    }]
  }],
  propDecorators: {
    label: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  }
});
var _uniqueIdCounter = 0;
var MatOptionSelectionChange = class {
  constructor(source, isUserInput = false) {
    this.source = source;
    this.isUserInput = isUserInput;
  }
};
var _MatOption = class _MatOption {
  /** Whether the wrapping component is in multiple selection mode. */
  get multiple() {
    return this._parent && this._parent.multiple;
  }
  /** Whether or not the option is currently selected. */
  get selected() {
    return this._selected;
  }
  /** Whether the option is disabled. */
  get disabled() {
    return this.group && this.group.disabled || this._disabled;
  }
  set disabled(value) {
    this._disabled = value;
  }
  /** Whether ripples for the option are disabled. */
  get disableRipple() {
    return !!(this._parent && this._parent.disableRipple);
  }
  /** Whether to display checkmark for single-selection. */
  get hideSingleSelectionIndicator() {
    return !!(this._parent && this._parent.hideSingleSelectionIndicator);
  }
  constructor(_element, _changeDetectorRef, _parent, group) {
    this._element = _element;
    this._changeDetectorRef = _changeDetectorRef;
    this._parent = _parent;
    this.group = group;
    this._selected = false;
    this._active = false;
    this._disabled = false;
    this._mostRecentViewValue = "";
    this.id = `mat-option-${_uniqueIdCounter++}`;
    this.onSelectionChange = new EventEmitter();
    this._stateChanges = new Subject();
  }
  /**
   * Whether or not the option is currently active and ready to be selected.
   * An active option displays styles as if it is focused, but the
   * focus is actually retained somewhere else. This comes in handy
   * for components like autocomplete where focus must remain on the input.
   */
  get active() {
    return this._active;
  }
  /**
   * The displayed value of the option. It is necessary to show the selected option in the
   * select's trigger.
   */
  get viewValue() {
    return (this._text?.nativeElement.textContent || "").trim();
  }
  /** Selects the option. */
  select(emitEvent = true) {
    if (!this._selected) {
      this._selected = true;
      this._changeDetectorRef.markForCheck();
      if (emitEvent) {
        this._emitSelectionChangeEvent();
      }
    }
  }
  /** Deselects the option. */
  deselect(emitEvent = true) {
    if (this._selected) {
      this._selected = false;
      this._changeDetectorRef.markForCheck();
      if (emitEvent) {
        this._emitSelectionChangeEvent();
      }
    }
  }
  /** Sets focus onto this option. */
  focus(_origin, options) {
    const element = this._getHostElement();
    if (typeof element.focus === "function") {
      element.focus(options);
    }
  }
  /**
   * This method sets display styles on the option to make it appear
   * active. This is used by the ActiveDescendantKeyManager so key
   * events will display the proper options as active on arrow key events.
   */
  setActiveStyles() {
    if (!this._active) {
      this._active = true;
      this._changeDetectorRef.markForCheck();
    }
  }
  /**
   * This method removes display styles on the option that made it appear
   * active. This is used by the ActiveDescendantKeyManager so key
   * events will display the proper options as active on arrow key events.
   */
  setInactiveStyles() {
    if (this._active) {
      this._active = false;
      this._changeDetectorRef.markForCheck();
    }
  }
  /** Gets the label to be used when determining whether the option should be focused. */
  getLabel() {
    return this.viewValue;
  }
  /** Ensures the option is selected when activated from the keyboard. */
  _handleKeydown(event) {
    if ((event.keyCode === ENTER || event.keyCode === SPACE) && !hasModifierKey(event)) {
      this._selectViaInteraction();
      event.preventDefault();
    }
  }
  /**
   * `Selects the option while indicating the selection came from the user. Used to
   * determine if the select's view -> model callback should be invoked.`
   */
  _selectViaInteraction() {
    if (!this.disabled) {
      this._selected = this.multiple ? !this._selected : true;
      this._changeDetectorRef.markForCheck();
      this._emitSelectionChangeEvent(true);
    }
  }
  /** Returns the correct tabindex for the option depending on disabled state. */
  // This method is only used by `MatLegacyOption`. Keeping it here to avoid breaking the types.
  // That's because `MatLegacyOption` use `MatOption` type in a few places such as
  // `MatOptionSelectionChange`. It is safe to delete this when `MatLegacyOption` is deleted.
  _getTabIndex() {
    return this.disabled ? "-1" : "0";
  }
  /** Gets the host DOM element. */
  _getHostElement() {
    return this._element.nativeElement;
  }
  ngAfterViewChecked() {
    if (this._selected) {
      const viewValue = this.viewValue;
      if (viewValue !== this._mostRecentViewValue) {
        if (this._mostRecentViewValue) {
          this._stateChanges.next();
        }
        this._mostRecentViewValue = viewValue;
      }
    }
  }
  ngOnDestroy() {
    this._stateChanges.complete();
  }
  /** Emits the selection change event. */
  _emitSelectionChangeEvent(isUserInput = false) {
    this.onSelectionChange.emit(new MatOptionSelectionChange(this, isUserInput));
  }
};
_MatOption.\u0275fac = \u0275\u0275ngDeclareFactory({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _MatOption,
  deps: [{
    token: ElementRef
  }, {
    token: ChangeDetectorRef
  }, {
    token: MAT_OPTION_PARENT_COMPONENT,
    optional: true
  }, {
    token: MAT_OPTGROUP,
    optional: true
  }],
  target: FactoryTarget.Component
});
_MatOption.\u0275cmp = \u0275\u0275ngDeclareComponent({
  minVersion: "17.0.0",
  version: "18.2.0-next.2",
  type: _MatOption,
  isStandalone: true,
  selector: "mat-option",
  inputs: {
    value: "value",
    id: "id",
    disabled: ["disabled", "disabled", booleanAttribute]
  },
  outputs: {
    onSelectionChange: "onSelectionChange"
  },
  host: {
    attributes: {
      "role": "option"
    },
    listeners: {
      "click": "_selectViaInteraction()",
      "keydown": "_handleKeydown($event)"
    },
    properties: {
      "class.mdc-list-item--selected": "selected",
      "class.mat-mdc-option-multiple": "multiple",
      "class.mat-mdc-option-active": "active",
      "class.mdc-list-item--disabled": "disabled",
      "id": "id",
      "attr.aria-selected": "selected",
      "attr.aria-disabled": "disabled.toString()"
    },
    classAttribute: "mat-mdc-option mdc-list-item"
  },
  viewQueries: [{
    propertyName: "_text",
    first: true,
    predicate: ["text"],
    descendants: true,
    static: true
  }],
  exportAs: ["matOption"],
  ngImport: core_exports,
  template: `<!-- Set aria-hidden="true" to this DOM node and other decorative nodes in this file. This might
 be contributing to issue where sometimes VoiceOver focuses on a TextNode in the a11y tree instead
 of the Option node (#23202). Most assistive technology will generally ignore non-role,
 non-text-content elements. Adding aria-hidden seems to make VoiceOver behave more consistently. -->
@if (multiple) {
    <mat-pseudo-checkbox
        class="mat-mdc-option-pseudo-checkbox"
        [disabled]="disabled"
        [state]="selected ? 'checked' : 'unchecked'"
        aria-hidden="true"></mat-pseudo-checkbox>
}

<ng-content select="mat-icon"></ng-content>

<span class="mdc-list-item__primary-text" #text><ng-content></ng-content></span>

<!-- Render checkmark at the end for single-selection. -->
@if (!multiple && selected && !hideSingleSelectionIndicator) {
    <mat-pseudo-checkbox
        class="mat-mdc-option-pseudo-checkbox"
        [disabled]="disabled"
        state="checked"
        aria-hidden="true"
        appearance="minimal"></mat-pseudo-checkbox>
}

<!-- See a11y notes inside optgroup.ts for context behind this element. -->
@if (group && group._inert) {
    <span class="cdk-visually-hidden">({{ group.label }})</span>
}

<div class="mat-mdc-option-ripple mat-mdc-focus-indicator" aria-hidden="true" mat-ripple
     [matRippleTrigger]="_getHostElement()" [matRippleDisabled]="disabled || disableRipple">
</div>
`,
  styles: ['.mat-mdc-option{-webkit-user-select:none;user-select:none;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;min-height:48px;padding:0 16px;cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0);color:var(--mat-option-label-text-color);font-family:var(--mat-option-label-text-font);line-height:var(--mat-option-label-text-line-height);font-size:var(--mat-option-label-text-size);letter-spacing:var(--mat-option-label-text-tracking);font-weight:var(--mat-option-label-text-weight)}.mat-mdc-option:hover:not(.mdc-list-item--disabled){background-color:var(--mat-option-hover-state-layer-color)}.mat-mdc-option:focus.mdc-list-item,.mat-mdc-option.mat-mdc-option-active.mdc-list-item{background-color:var(--mat-option-focus-state-layer-color);outline:0}.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled) .mdc-list-item__primary-text{color:var(--mat-option-selected-state-label-text-color)}.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-multiple){background-color:var(--mat-option-selected-state-layer-color)}.mat-mdc-option.mdc-list-item{align-items:center;background:rgba(0,0,0,0)}.mat-mdc-option.mdc-list-item--disabled{cursor:default;pointer-events:none}.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox,.mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text,.mat-mdc-option.mdc-list-item--disabled>mat-icon{opacity:.38}.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple){padding-left:32px}[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple){padding-left:16px;padding-right:32px}.mat-mdc-option .mat-icon,.mat-mdc-option .mat-pseudo-checkbox-full{margin-right:16px;flex-shrink:0}[dir=rtl] .mat-mdc-option .mat-icon,[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full{margin-right:0;margin-left:16px}.mat-mdc-option .mat-pseudo-checkbox-minimal{margin-left:16px;flex-shrink:0}[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal{margin-right:16px;margin-left:0}.mat-mdc-option .mat-mdc-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-mdc-option .mdc-list-item__primary-text{white-space:normal;font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;font-family:inherit;text-decoration:inherit;text-transform:inherit;margin-right:auto}[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text{margin-right:0;margin-left:auto}.cdk-high-contrast-active .mat-mdc-option.mdc-list-item--selected:not(.mat-mdc-option-multiple)::after{content:"";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}[dir=rtl] .cdk-high-contrast-active .mat-mdc-option.mdc-list-item--selected:not(.mat-mdc-option-multiple)::after{right:auto;left:16px}.mat-mdc-option-multiple{--mdc-list-list-item-selected-container-color:var(--mdc-list-list-item-container-color, transparent)}.mat-mdc-option-active .mat-mdc-focus-indicator::before{content:""}'],
  dependencies: [{
    kind: "component",
    type: MatPseudoCheckbox,
    selector: "mat-pseudo-checkbox",
    inputs: ["state", "disabled", "appearance"]
  }, {
    kind: "directive",
    type: MatRipple,
    selector: "[mat-ripple], [matRipple]",
    inputs: ["matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleRadius", "matRippleAnimation", "matRippleDisabled", "matRippleTrigger"],
    exportAs: ["matRipple"]
  }],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation$1.None
});
var MatOption = _MatOption;
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: MatOption,
  decorators: [{
    type: Component,
    args: [{
      selector: "mat-option",
      exportAs: "matOption",
      host: {
        "role": "option",
        "[class.mdc-list-item--selected]": "selected",
        "[class.mat-mdc-option-multiple]": "multiple",
        "[class.mat-mdc-option-active]": "active",
        "[class.mdc-list-item--disabled]": "disabled",
        "[id]": "id",
        // Set aria-selected to false for non-selected items and true for selected items. Conform to
        // [WAI ARIA Listbox authoring practices guide](
        //  https://www.w3.org/WAI/ARIA/apg/patterns/listbox/), "If any options are selected, each
        // selected option has either aria-selected or aria-checked  set to true. All options that are
        // selectable but not selected have either aria-selected or aria-checked set to false." Align
        // aria-selected implementation of Chips and List components.
        //
        // Set `aria-selected="false"` on not-selected listbox options to fix VoiceOver announcing
        // every option as "selected" (#21491).
        "[attr.aria-selected]": "selected",
        "[attr.aria-disabled]": "disabled.toString()",
        "(click)": "_selectViaInteraction()",
        "(keydown)": "_handleKeydown($event)",
        "class": "mat-mdc-option mdc-list-item"
      },
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      imports: [MatPseudoCheckbox, MatRipple],
      template: `<!-- Set aria-hidden="true" to this DOM node and other decorative nodes in this file. This might
 be contributing to issue where sometimes VoiceOver focuses on a TextNode in the a11y tree instead
 of the Option node (#23202). Most assistive technology will generally ignore non-role,
 non-text-content elements. Adding aria-hidden seems to make VoiceOver behave more consistently. -->
@if (multiple) {
    <mat-pseudo-checkbox
        class="mat-mdc-option-pseudo-checkbox"
        [disabled]="disabled"
        [state]="selected ? 'checked' : 'unchecked'"
        aria-hidden="true"></mat-pseudo-checkbox>
}

<ng-content select="mat-icon"></ng-content>

<span class="mdc-list-item__primary-text" #text><ng-content></ng-content></span>

<!-- Render checkmark at the end for single-selection. -->
@if (!multiple && selected && !hideSingleSelectionIndicator) {
    <mat-pseudo-checkbox
        class="mat-mdc-option-pseudo-checkbox"
        [disabled]="disabled"
        state="checked"
        aria-hidden="true"
        appearance="minimal"></mat-pseudo-checkbox>
}

<!-- See a11y notes inside optgroup.ts for context behind this element. -->
@if (group && group._inert) {
    <span class="cdk-visually-hidden">({{ group.label }})</span>
}

<div class="mat-mdc-option-ripple mat-mdc-focus-indicator" aria-hidden="true" mat-ripple
     [matRippleTrigger]="_getHostElement()" [matRippleDisabled]="disabled || disableRipple">
</div>
`,
      styles: ['.mat-mdc-option{-webkit-user-select:none;user-select:none;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;min-height:48px;padding:0 16px;cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0);color:var(--mat-option-label-text-color);font-family:var(--mat-option-label-text-font);line-height:var(--mat-option-label-text-line-height);font-size:var(--mat-option-label-text-size);letter-spacing:var(--mat-option-label-text-tracking);font-weight:var(--mat-option-label-text-weight)}.mat-mdc-option:hover:not(.mdc-list-item--disabled){background-color:var(--mat-option-hover-state-layer-color)}.mat-mdc-option:focus.mdc-list-item,.mat-mdc-option.mat-mdc-option-active.mdc-list-item{background-color:var(--mat-option-focus-state-layer-color);outline:0}.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled) .mdc-list-item__primary-text{color:var(--mat-option-selected-state-label-text-color)}.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-multiple){background-color:var(--mat-option-selected-state-layer-color)}.mat-mdc-option.mdc-list-item{align-items:center;background:rgba(0,0,0,0)}.mat-mdc-option.mdc-list-item--disabled{cursor:default;pointer-events:none}.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox,.mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text,.mat-mdc-option.mdc-list-item--disabled>mat-icon{opacity:.38}.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple){padding-left:32px}[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple){padding-left:16px;padding-right:32px}.mat-mdc-option .mat-icon,.mat-mdc-option .mat-pseudo-checkbox-full{margin-right:16px;flex-shrink:0}[dir=rtl] .mat-mdc-option .mat-icon,[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full{margin-right:0;margin-left:16px}.mat-mdc-option .mat-pseudo-checkbox-minimal{margin-left:16px;flex-shrink:0}[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal{margin-right:16px;margin-left:0}.mat-mdc-option .mat-mdc-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-mdc-option .mdc-list-item__primary-text{white-space:normal;font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;font-family:inherit;text-decoration:inherit;text-transform:inherit;margin-right:auto}[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text{margin-right:0;margin-left:auto}.cdk-high-contrast-active .mat-mdc-option.mdc-list-item--selected:not(.mat-mdc-option-multiple)::after{content:"";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}[dir=rtl] .cdk-high-contrast-active .mat-mdc-option.mdc-list-item--selected:not(.mat-mdc-option-multiple)::after{right:auto;left:16px}.mat-mdc-option-multiple{--mdc-list-list-item-selected-container-color:var(--mdc-list-list-item-container-color, transparent)}.mat-mdc-option-active .mat-mdc-focus-indicator::before{content:""}']
    }]
  }],
  ctorParameters: () => [{
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_OPTION_PARENT_COMPONENT]
    }]
  }, {
    type: MatOptgroup,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_OPTGROUP]
    }]
  }],
  propDecorators: {
    value: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onSelectionChange: [{
      type: Output
    }],
    _text: [{
      type: ViewChild,
      args: ["text", {
        static: true
      }]
    }]
  }
});
var _MatOptionModule = class _MatOptionModule {
};
_MatOptionModule.\u0275fac = \u0275\u0275ngDeclareFactory({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _MatOptionModule,
  deps: [],
  target: FactoryTarget.NgModule
});
_MatOptionModule.\u0275mod = \u0275\u0275ngDeclareNgModule({
  minVersion: "14.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _MatOptionModule,
  imports: [MatRippleModule, MatCommonModule, MatPseudoCheckboxModule, MatOption, MatOptgroup],
  exports: [MatOption, MatOptgroup]
});
_MatOptionModule.\u0275inj = \u0275\u0275ngDeclareInjector({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _MatOptionModule,
  imports: [MatRippleModule, MatCommonModule, MatPseudoCheckboxModule]
});
var MatOptionModule = _MatOptionModule;
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: MatOptionModule,
  decorators: [{
    type: NgModule,
    args: [{
      imports: [MatRippleModule, MatCommonModule, MatPseudoCheckboxModule, MatOption, MatOptgroup],
      exports: [MatOption, MatOptgroup]
    }]
  }]
});
var eventListenerOptions = {
  capture: true
};
var rippleInteractionEvents = ["focus", "mousedown", "mouseenter", "touchstart"];
var matRippleUninitialized = "mat-ripple-loader-uninitialized";
var matRippleClassName = "mat-ripple-loader-class-name";
var matRippleCentered = "mat-ripple-loader-centered";
var matRippleDisabled = "mat-ripple-loader-disabled";
var _MatRippleLoader = class _MatRippleLoader {
  constructor() {
    this._document = inject(DOCUMENT, {
      optional: true
    });
    this._animationMode = inject(ANIMATION_MODULE_TYPE, {
      optional: true
    });
    this._globalRippleOptions = inject(MAT_RIPPLE_GLOBAL_OPTIONS, {
      optional: true
    });
    this._platform = inject(Platform);
    this._ngZone = inject(NgZone);
    this._hosts = /* @__PURE__ */ new Map();
    this._onInteraction = (event) => {
      const eventTarget = _getEventTarget(event);
      if (eventTarget instanceof HTMLElement) {
        const element = eventTarget.closest(`[${matRippleUninitialized}="${this._globalRippleOptions?.namespace ?? ""}"]`);
        if (element) {
          this._createRipple(element);
        }
      }
    };
    this._ngZone.runOutsideAngular(() => {
      for (const event of rippleInteractionEvents) {
        this._document?.addEventListener(event, this._onInteraction, eventListenerOptions);
      }
    });
  }
  ngOnDestroy() {
    const hosts = this._hosts.keys();
    for (const host of hosts) {
      this.destroyRipple(host);
    }
    for (const event of rippleInteractionEvents) {
      this._document?.removeEventListener(event, this._onInteraction, eventListenerOptions);
    }
  }
  /**
   * Configures the ripple that will be rendered by the ripple loader.
   *
   * Stores the given information about how the ripple should be configured on the host
   * element so that it can later be retrived & used when the ripple is actually created.
   */
  configureRipple(host, config) {
    host.setAttribute(matRippleUninitialized, this._globalRippleOptions?.namespace ?? "");
    if (config.className || !host.hasAttribute(matRippleClassName)) {
      host.setAttribute(matRippleClassName, config.className || "");
    }
    if (config.centered) {
      host.setAttribute(matRippleCentered, "");
    }
    if (config.disabled) {
      host.setAttribute(matRippleDisabled, "");
    }
  }
  /** Returns the ripple instance for the given host element. */
  getRipple(host) {
    const ripple = this._hosts.get(host);
    return ripple || this._createRipple(host);
  }
  /** Sets the disabled state on the ripple instance corresponding to the given host element. */
  setDisabled(host, disabled) {
    const ripple = this._hosts.get(host);
    if (ripple) {
      ripple.disabled = disabled;
      return;
    }
    if (disabled) {
      host.setAttribute(matRippleDisabled, "");
    } else {
      host.removeAttribute(matRippleDisabled);
    }
  }
  /** Creates a MatRipple and appends it to the given element. */
  _createRipple(host) {
    if (!this._document) {
      return;
    }
    const existingRipple = this._hosts.get(host);
    if (existingRipple) {
      return existingRipple;
    }
    host.querySelector(".mat-ripple")?.remove();
    const rippleEl = this._document.createElement("span");
    rippleEl.classList.add("mat-ripple", host.getAttribute(matRippleClassName));
    host.append(rippleEl);
    const ripple = new MatRipple(new ElementRef(rippleEl), this._ngZone, this._platform, this._globalRippleOptions ? this._globalRippleOptions : void 0, this._animationMode ? this._animationMode : void 0);
    ripple._isInitialized = true;
    ripple.trigger = host;
    ripple.centered = host.hasAttribute(matRippleCentered);
    ripple.disabled = host.hasAttribute(matRippleDisabled);
    this.attachRipple(host, ripple);
    return ripple;
  }
  attachRipple(host, ripple) {
    host.removeAttribute(matRippleUninitialized);
    this._hosts.set(host, ripple);
  }
  destroyRipple(host) {
    const ripple = this._hosts.get(host);
    if (ripple) {
      ripple.ngOnDestroy();
      this._hosts.delete(host);
    }
  }
};
_MatRippleLoader.\u0275fac = \u0275\u0275ngDeclareFactory({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _MatRippleLoader,
  deps: [],
  target: FactoryTarget.Injectable
});
_MatRippleLoader.\u0275prov = \u0275\u0275ngDeclareInjectable({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _MatRippleLoader,
  providedIn: "root"
});
var MatRippleLoader = _MatRippleLoader;
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: MatRippleLoader,
  decorators: [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }],
  ctorParameters: () => []
});
var __MatInternalFormField = class __MatInternalFormField {
};
__MatInternalFormField.\u0275fac = \u0275\u0275ngDeclareFactory({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: __MatInternalFormField,
  deps: [],
  target: FactoryTarget.Component
});
__MatInternalFormField.\u0275cmp = \u0275\u0275ngDeclareComponent({
  minVersion: "14.0.0",
  version: "18.2.0-next.2",
  type: __MatInternalFormField,
  isStandalone: true,
  selector: "div[mat-internal-form-field]",
  inputs: {
    labelPosition: "labelPosition"
  },
  host: {
    properties: {
      "class.mdc-form-field--align-end": 'labelPosition === "before"'
    },
    classAttribute: "mdc-form-field mat-internal-form-field"
  },
  ngImport: core_exports,
  template: "<ng-content></ng-content>",
  isInline: true,
  styles: [".mat-internal-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:inline-flex;align-items:center;vertical-align:middle}.mat-internal-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mat-internal-form-field>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0}"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation$1.None
});
var _MatInternalFormField = __MatInternalFormField;
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _MatInternalFormField,
  decorators: [{
    type: Component,
    args: [{
      selector: "div[mat-internal-form-field]",
      standalone: true,
      template: "<ng-content></ng-content>",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "class": "mdc-form-field mat-internal-form-field",
        "[class.mdc-form-field--align-end]": 'labelPosition === "before"'
      },
      styles: [".mat-internal-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:inline-flex;align-items:center;vertical-align:middle}.mat-internal-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mat-internal-form-field>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0}"]
    }]
  }],
  propDecorators: {
    labelPosition: [{
      type: Input,
      args: [{
        required: true
      }]
    }]
  }
});

// node_modules/@angular/material/fesm2022/progress-spinner.mjs
var MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS = new InjectionToken("mat-progress-spinner-default-options", {
  providedIn: "root",
  factory: MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY
});
function MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY() {
  return {
    diameter: BASE_SIZE
  };
}
var BASE_SIZE = 100;
var BASE_STROKE_WIDTH = 10;
var _MatProgressSpinner = class _MatProgressSpinner {
  // TODO: should be typed as `ThemePalette` but internal apps pass in arbitrary strings.
  /**
   * Theme color of the progress spinner. This API is supported in M2 themes only, it
   * has no effect in M3 themes.
   *
   * For information on applying color variants in M3, see
   * https://material.angular.io/guide/theming#using-component-color-variants.
   */
  get color() {
    return this._color || this._defaultColor;
  }
  set color(value) {
    this._color = value;
  }
  constructor(_elementRef, animationMode, defaults) {
    this._elementRef = _elementRef;
    this._defaultColor = "primary";
    this._value = 0;
    this._diameter = BASE_SIZE;
    this._noopAnimations = animationMode === "NoopAnimations" && !!defaults && !defaults._forceAnimations;
    this.mode = _elementRef.nativeElement.nodeName.toLowerCase() === "mat-spinner" ? "indeterminate" : "determinate";
    if (defaults) {
      if (defaults.color) {
        this.color = this._defaultColor = defaults.color;
      }
      if (defaults.diameter) {
        this.diameter = defaults.diameter;
      }
      if (defaults.strokeWidth) {
        this.strokeWidth = defaults.strokeWidth;
      }
    }
  }
  /** Value of the progress bar. Defaults to zero. Mirrored to aria-valuenow. */
  get value() {
    return this.mode === "determinate" ? this._value : 0;
  }
  set value(v) {
    this._value = Math.max(0, Math.min(100, v || 0));
  }
  /** The diameter of the progress spinner (will set width and height of svg). */
  get diameter() {
    return this._diameter;
  }
  set diameter(size) {
    this._diameter = size || 0;
  }
  /** Stroke width of the progress spinner. */
  get strokeWidth() {
    return this._strokeWidth ?? this.diameter / 10;
  }
  set strokeWidth(value) {
    this._strokeWidth = value || 0;
  }
  /** The radius of the spinner, adjusted for stroke width. */
  _circleRadius() {
    return (this.diameter - BASE_STROKE_WIDTH) / 2;
  }
  /** The view box of the spinner's svg element. */
  _viewBox() {
    const viewBox = this._circleRadius() * 2 + this.strokeWidth;
    return `0 0 ${viewBox} ${viewBox}`;
  }
  /** The stroke circumference of the svg circle. */
  _strokeCircumference() {
    return 2 * Math.PI * this._circleRadius();
  }
  /** The dash offset of the svg circle. */
  _strokeDashOffset() {
    if (this.mode === "determinate") {
      return this._strokeCircumference() * (100 - this._value) / 100;
    }
    return null;
  }
  /** Stroke width of the circle in percent. */
  _circleStrokeWidth() {
    return this.strokeWidth / this.diameter * 100;
  }
};
_MatProgressSpinner.\u0275fac = \u0275\u0275ngDeclareFactory({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _MatProgressSpinner,
  deps: [{
    token: ElementRef
  }, {
    token: ANIMATION_MODULE_TYPE,
    optional: true
  }, {
    token: MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS
  }],
  target: FactoryTarget.Component
});
_MatProgressSpinner.\u0275cmp = \u0275\u0275ngDeclareComponent({
  minVersion: "16.1.0",
  version: "18.2.0-next.2",
  type: _MatProgressSpinner,
  isStandalone: true,
  selector: "mat-progress-spinner, mat-spinner",
  inputs: {
    color: "color",
    mode: "mode",
    value: ["value", "value", numberAttribute],
    diameter: ["diameter", "diameter", numberAttribute],
    strokeWidth: ["strokeWidth", "strokeWidth", numberAttribute]
  },
  host: {
    attributes: {
      "role": "progressbar",
      "tabindex": "-1"
    },
    properties: {
      "class": '"mat-" + color',
      "class._mat-animation-noopable": "_noopAnimations",
      "class.mdc-circular-progress--indeterminate": 'mode === "indeterminate"',
      "style.width.px": "diameter",
      "style.height.px": "diameter",
      "style.--mdc-circular-progress-size": 'diameter + "px"',
      "style.--mdc-circular-progress-active-indicator-width": 'diameter + "px"',
      "attr.aria-valuemin": "0",
      "attr.aria-valuemax": "100",
      "attr.aria-valuenow": 'mode === "determinate" ? value : null',
      "attr.mode": "mode"
    },
    classAttribute: "mat-mdc-progress-spinner mdc-circular-progress"
  },
  viewQueries: [{
    propertyName: "_determinateCircle",
    first: true,
    predicate: ["determinateSpinner"],
    descendants: true
  }],
  exportAs: ["matProgressSpinner"],
  ngImport: core_exports,
  template: '<ng-template #circle>\n  <svg [attr.viewBox]="_viewBox()" class="mdc-circular-progress__indeterminate-circle-graphic"\n       xmlns="http://www.w3.org/2000/svg" focusable="false">\n    <circle [attr.r]="_circleRadius()"\n            [style.stroke-dasharray.px]="_strokeCircumference()"\n            [style.stroke-dashoffset.px]="_strokeCircumference() / 2"\n            [style.stroke-width.%]="_circleStrokeWidth()"\n            cx="50%" cy="50%"/>\n  </svg>\n</ng-template>\n\n<!--\n  All children need to be hidden for screen readers in order to support ChromeVox.\n  More context in the issue: https://github.com/angular/components/issues/22165.\n-->\n<div class="mdc-circular-progress__determinate-container" aria-hidden="true" #determinateSpinner>\n  <svg [attr.viewBox]="_viewBox()" class="mdc-circular-progress__determinate-circle-graphic"\n       xmlns="http://www.w3.org/2000/svg" focusable="false">\n    <circle [attr.r]="_circleRadius()"\n            [style.stroke-dasharray.px]="_strokeCircumference()"\n            [style.stroke-dashoffset.px]="_strokeDashOffset()"\n            [style.stroke-width.%]="_circleStrokeWidth()"\n            class="mdc-circular-progress__determinate-circle"\n            cx="50%" cy="50%"/>\n  </svg>\n</div>\n<!--TODO: figure out why there are 3 separate svgs-->\n<div class="mdc-circular-progress__indeterminate-container" aria-hidden="true">\n  <div class="mdc-circular-progress__spinner-layer">\n    <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-left">\n      <ng-container [ngTemplateOutlet]="circle"></ng-container>\n    </div>\n    <div class="mdc-circular-progress__gap-patch">\n      <ng-container [ngTemplateOutlet]="circle"></ng-container>\n    </div>\n    <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-right">\n      <ng-container [ngTemplateOutlet]="circle"></ng-container>\n    </div>\n  </div>\n</div>\n',
  styles: [".mat-mdc-progress-spinner{display:block;overflow:hidden;line-height:0;position:relative;direction:ltr;transition:opacity 250ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-progress-spinner circle{stroke-width:var(--mdc-circular-progress-active-indicator-width)}.mat-mdc-progress-spinner._mat-animation-noopable,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle{transition:none !important}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container{animation:none !important}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle{stroke-dasharray:0 !important}.cdk-high-contrast-active .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,.cdk-high-contrast-active .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle{stroke:currentColor;stroke:CanvasText}.mdc-circular-progress__determinate-container,.mdc-circular-progress__indeterminate-circle-graphic,.mdc-circular-progress__indeterminate-container,.mdc-circular-progress__spinner-layer{position:absolute;width:100%;height:100%}.mdc-circular-progress__determinate-container{transform:rotate(-90deg)}.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container{opacity:0}.mdc-circular-progress__indeterminate-container{font-size:0;letter-spacing:0;white-space:nowrap;opacity:0}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{opacity:1;animation:mdc-circular-progress-container-rotate 1568.2352941176ms linear infinite}.mdc-circular-progress__determinate-circle-graphic,.mdc-circular-progress__indeterminate-circle-graphic{fill:rgba(0,0,0,0)}.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:var(--mdc-circular-progress-active-indicator-color)}.cdk-high-contrast-active .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.cdk-high-contrast-active .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}.mdc-circular-progress__determinate-circle{transition:stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1)}.mdc-circular-progress__gap-patch{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic{left:-900%;width:2000%;transform:rotate(180deg)}.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic{width:200%}.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{left:-100%}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress__circle-clipper{display:inline-flex;position:relative;width:50%;height:100%;overflow:hidden}.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}@keyframes mdc-circular-progress-container-rotate{to{transform:rotate(360deg)}}@keyframes mdc-circular-progress-spinner-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes mdc-circular-progress-left-spin{from{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes mdc-circular-progress-right-spin{from{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}"],
  dependencies: [{
    kind: "directive",
    type: NgTemplateOutlet,
    selector: "[ngTemplateOutlet]",
    inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"]
  }],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation$1.None
});
var MatProgressSpinner = _MatProgressSpinner;
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: MatProgressSpinner,
  decorators: [{
    type: Component,
    args: [{
      selector: "mat-progress-spinner, mat-spinner",
      exportAs: "matProgressSpinner",
      host: {
        "role": "progressbar",
        "class": "mat-mdc-progress-spinner mdc-circular-progress",
        // set tab index to -1 so screen readers will read the aria-label
        // Note: there is a known issue with JAWS that does not read progressbar aria labels on FireFox
        "tabindex": "-1",
        "[class]": '"mat-" + color',
        "[class._mat-animation-noopable]": `_noopAnimations`,
        "[class.mdc-circular-progress--indeterminate]": 'mode === "indeterminate"',
        "[style.width.px]": "diameter",
        "[style.height.px]": "diameter",
        "[style.--mdc-circular-progress-size]": 'diameter + "px"',
        "[style.--mdc-circular-progress-active-indicator-width]": 'diameter + "px"',
        "[attr.aria-valuemin]": "0",
        "[attr.aria-valuemax]": "100",
        "[attr.aria-valuenow]": 'mode === "determinate" ? value : null',
        "[attr.mode]": "mode"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      standalone: true,
      imports: [NgTemplateOutlet],
      template: '<ng-template #circle>\n  <svg [attr.viewBox]="_viewBox()" class="mdc-circular-progress__indeterminate-circle-graphic"\n       xmlns="http://www.w3.org/2000/svg" focusable="false">\n    <circle [attr.r]="_circleRadius()"\n            [style.stroke-dasharray.px]="_strokeCircumference()"\n            [style.stroke-dashoffset.px]="_strokeCircumference() / 2"\n            [style.stroke-width.%]="_circleStrokeWidth()"\n            cx="50%" cy="50%"/>\n  </svg>\n</ng-template>\n\n<!--\n  All children need to be hidden for screen readers in order to support ChromeVox.\n  More context in the issue: https://github.com/angular/components/issues/22165.\n-->\n<div class="mdc-circular-progress__determinate-container" aria-hidden="true" #determinateSpinner>\n  <svg [attr.viewBox]="_viewBox()" class="mdc-circular-progress__determinate-circle-graphic"\n       xmlns="http://www.w3.org/2000/svg" focusable="false">\n    <circle [attr.r]="_circleRadius()"\n            [style.stroke-dasharray.px]="_strokeCircumference()"\n            [style.stroke-dashoffset.px]="_strokeDashOffset()"\n            [style.stroke-width.%]="_circleStrokeWidth()"\n            class="mdc-circular-progress__determinate-circle"\n            cx="50%" cy="50%"/>\n  </svg>\n</div>\n<!--TODO: figure out why there are 3 separate svgs-->\n<div class="mdc-circular-progress__indeterminate-container" aria-hidden="true">\n  <div class="mdc-circular-progress__spinner-layer">\n    <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-left">\n      <ng-container [ngTemplateOutlet]="circle"></ng-container>\n    </div>\n    <div class="mdc-circular-progress__gap-patch">\n      <ng-container [ngTemplateOutlet]="circle"></ng-container>\n    </div>\n    <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-right">\n      <ng-container [ngTemplateOutlet]="circle"></ng-container>\n    </div>\n  </div>\n</div>\n',
      styles: [".mat-mdc-progress-spinner{display:block;overflow:hidden;line-height:0;position:relative;direction:ltr;transition:opacity 250ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-progress-spinner circle{stroke-width:var(--mdc-circular-progress-active-indicator-width)}.mat-mdc-progress-spinner._mat-animation-noopable,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle{transition:none !important}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container{animation:none !important}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle{stroke-dasharray:0 !important}.cdk-high-contrast-active .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,.cdk-high-contrast-active .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle{stroke:currentColor;stroke:CanvasText}.mdc-circular-progress__determinate-container,.mdc-circular-progress__indeterminate-circle-graphic,.mdc-circular-progress__indeterminate-container,.mdc-circular-progress__spinner-layer{position:absolute;width:100%;height:100%}.mdc-circular-progress__determinate-container{transform:rotate(-90deg)}.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container{opacity:0}.mdc-circular-progress__indeterminate-container{font-size:0;letter-spacing:0;white-space:nowrap;opacity:0}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{opacity:1;animation:mdc-circular-progress-container-rotate 1568.2352941176ms linear infinite}.mdc-circular-progress__determinate-circle-graphic,.mdc-circular-progress__indeterminate-circle-graphic{fill:rgba(0,0,0,0)}.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:var(--mdc-circular-progress-active-indicator-color)}.cdk-high-contrast-active .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.cdk-high-contrast-active .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}.mdc-circular-progress__determinate-circle{transition:stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1)}.mdc-circular-progress__gap-patch{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic{left:-900%;width:2000%;transform:rotate(180deg)}.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic{width:200%}.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{left:-100%}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress__circle-clipper{display:inline-flex;position:relative;width:50%;height:100%;overflow:hidden}.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}@keyframes mdc-circular-progress-container-rotate{to{transform:rotate(360deg)}}@keyframes mdc-circular-progress-spinner-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes mdc-circular-progress-left-spin{from{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes mdc-circular-progress-right-spin{from{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}"]
    }]
  }],
  ctorParameters: () => [{
    type: ElementRef
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ANIMATION_MODULE_TYPE]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS]
    }]
  }],
  propDecorators: {
    color: [{
      type: Input
    }],
    _determinateCircle: [{
      type: ViewChild,
      args: ["determinateSpinner"]
    }],
    mode: [{
      type: Input
    }],
    value: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    diameter: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    strokeWidth: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }]
  }
});
var MatSpinner = MatProgressSpinner;
var _MatProgressSpinnerModule = class _MatProgressSpinnerModule {
};
_MatProgressSpinnerModule.\u0275fac = \u0275\u0275ngDeclareFactory({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _MatProgressSpinnerModule,
  deps: [],
  target: FactoryTarget.NgModule
});
_MatProgressSpinnerModule.\u0275mod = \u0275\u0275ngDeclareNgModule({
  minVersion: "14.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _MatProgressSpinnerModule,
  imports: [CommonModule, MatProgressSpinner, MatSpinner],
  exports: [MatProgressSpinner, MatSpinner, MatCommonModule]
});
_MatProgressSpinnerModule.\u0275inj = \u0275\u0275ngDeclareInjector({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: _MatProgressSpinnerModule,
  imports: [CommonModule, MatCommonModule]
});
var MatProgressSpinnerModule = _MatProgressSpinnerModule;
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: MatProgressSpinnerModule,
  decorators: [{
    type: NgModule,
    args: [{
      imports: [CommonModule, MatProgressSpinner, MatSpinner],
      exports: [MatProgressSpinner, MatSpinner, MatCommonModule]
    }]
  }]
});

// src/app/shared/loading-indicators/progress-spinner/progress-spinner.component.ts
var __decorate2 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ProgressSpinnerComponent_1;
var _a2;
var ProgressSpinnerComponent = (_a2 = class {
  constructor() {
    __publicField(this, "color", "primary");
    __publicField(this, "mode", "indeterminate");
    __publicField(this, "query");
    __publicField(this, "takesLonger");
    ProgressSpinnerComponent_1.show = false;
  }
  static display() {
    ProgressSpinnerComponent_1.show = true;
  }
  static hide() {
    setTimeout(function() {
      ProgressSpinnerComponent_1.show = false;
    }, 1e3);
  }
  ngOnInit() {
    setTimeout(() => this.takesLonger = true, 5e3);
  }
  get isDisplayed() {
    return ProgressSpinnerComponent_1.show;
  }
}, ProgressSpinnerComponent_1 = _a2, __publicField(_a2, "show"), __publicField(_a2, "ctorParameters", () => []), __publicField(_a2, "propDecorators", {
  query: [{ type: Input }]
}), _a2);
ProgressSpinnerComponent = ProgressSpinnerComponent_1 = __decorate2([
  Component({
    standalone: true,
    imports: [CommonModule, MatProgressSpinnerModule],
    selector: "cp-progress-spinner",
    template: progress_spinner_component_default,
    styles: [progress_spinner_component_default2]
  })
], ProgressSpinnerComponent);

// angular:jit:template:file:src/app/shared/loading-indicators/progress-bar/progress-bar.component.html
var progress_bar_component_default = '<mat-progress-bar *ngIf="isDisplayed"\n                 [color]="color"\n                 [mode]="mode">\n</mat-progress-bar>\n\n';

// angular:jit:style:file:src/app/shared/loading-indicators/progress-bar/progress-bar.component.css
var progress_bar_component_default2 = "/* src/app/shared/loading-indicators/progress-bar/progress-bar.component.css */\n/*# sourceMappingURL=progress-bar.component.css.map */\n";

// src/app/shared/loading-indicators/progress-bar/progress-bar.component.ts
var __decorate3 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ProgressBarComponent_1;
var _a3;
var ProgressBarComponent = (_a3 = class {
  constructor() {
    __publicField(this, "_color", "primary");
    __publicField(this, "_mode", "query");
    ProgressBarComponent_1.show = false;
  }
  static display() {
    ProgressBarComponent_1.show = true;
  }
  static hide() {
    setTimeout(function() {
      ProgressBarComponent_1.show = false;
    }, 1e3);
  }
  ngOnInit() {
  }
  get isDisplayed() {
    return ProgressBarComponent_1.show;
  }
  get color() {
    return this._color;
  }
  set color(value) {
    this._color = value;
  }
  get mode() {
    return this._mode;
  }
  set mode(value) {
    this._mode = value;
  }
}, ProgressBarComponent_1 = _a3, __publicField(_a3, "show"), __publicField(_a3, "ctorParameters", () => []), _a3);
ProgressBarComponent = ProgressBarComponent_1 = __decorate3([
  Component({
    selector: "cp-progress-bar",
    template: progress_bar_component_default,
    styles: [progress_bar_component_default2]
  })
], ProgressBarComponent);

// src/app/shared/google-analytics/types/category.enum.ts
var Category;
(function(Category2) {
  Category2[Category2["reactome"] = 0] = "reactome";
  Category2[Category2["ols_orphanet"] = 1] = "ols_orphanet";
  Category2[Category2["ols_efo"] = 2] = "ols_efo";
  Category2[Category2["complexportal_details"] = 3] = "complexportal_details";
  Category2[Category2["complexportal_mi"] = 4] = "complexportal_mi";
  Category2[Category2["europepmc"] = 5] = "europepmc";
  Category2[Category2["ResultFilter"] = 6] = "ResultFilter";
  Category2[Category2["InteractionViewer_ExportSVG"] = 7] = "InteractionViewer_ExportSVG";
  Category2[Category2["InteractionViewer_SelectedAnno"] = 8] = "InteractionViewer_SelectedAnno";
  Category2[Category2["InteractionViewer_ChangeAnno"] = 9] = "InteractionViewer_ChangeAnno";
  Category2[Category2["InteractionViewer_Reset"] = 10] = "InteractionViewer_Reset";
  Category2[Category2["InteractionViewer_ExpandAll"] = 11] = "InteractionViewer_ExpandAll";
  Category2[Category2["InteractionViewer_Interaction"] = 12] = "InteractionViewer_Interaction";
  Category2[Category2["PathwayDiagram_Interaction"] = 13] = "PathwayDiagram_Interaction";
  Category2[Category2["LiteMolViewer_Interaction"] = 14] = "LiteMolViewer_Interaction";
  Category2[Category2["download"] = 15] = "download";
  Category2[Category2["organisms"] = 16] = "organisms";
  Category2[Category2["species"] = 17] = "species";
  Category2[Category2["header"] = 18] = "header";
  Category2[Category2["home"] = 19] = "home";
  Category2[Category2["details"] = 20] = "details";
  Category2[Category2["basket"] = 21] = "basket";
  Category2[Category2["search"] = 22] = "search";
  Category2[Category2["complexNavigator"] = 23] = "complexNavigator";
  Category2[Category2["ols_obo"] = 24] = "ols_obo";
})(Category || (Category = {}));

// node_modules/ngx-google-analytics/fesm2020/ngx-google-analytics.mjs
var GaEventCategoryDirective = class {
  constructor() {
  }
};
GaEventCategoryDirective.\u0275fac = \u0275\u0275ngDeclareFactory({
  minVersion: "12.0.0",
  version: "14.0.2",
  ngImport: core_exports,
  type: GaEventCategoryDirective,
  deps: [],
  target: FactoryTarget.Directive
});
GaEventCategoryDirective.\u0275dir = \u0275\u0275ngDeclareDirective({
  minVersion: "14.0.0",
  version: "14.0.2",
  type: GaEventCategoryDirective,
  selector: "[gaEvent][gaCategory],\n             [gaCategory]",
  inputs: {
    gaCategory: "gaCategory"
  },
  exportAs: ["gaCategory"],
  ngImport: core_exports
});
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "14.0.2",
  ngImport: core_exports,
  type: GaEventCategoryDirective,
  decorators: [{
    type: Directive,
    args: [{
      selector: `[gaEvent][gaCategory],
             [gaCategory]`,
      exportAs: "gaCategory"
    }]
  }],
  ctorParameters: function() {
    return [];
  },
  propDecorators: {
    gaCategory: [{
      type: Input
    }]
  }
});
var NGX_GOOGLE_ANALYTICS_SETTINGS_TOKEN = new InjectionToken("ngx-google-analytics-settings", {
  factory: () => ({
    trackingCode: "",
    enableTracing: false
  })
});
var NGX_WINDOW = new InjectionToken("ngx-window", {
  providedIn: "root",
  factory: () => {
    const {
      defaultView
    } = inject(DOCUMENT);
    if (!defaultView) {
      throw new Error("Window is not available");
    }
    return defaultView;
  }
});
function getDataLayerFn(window2) {
  return window2 ? window2["dataLayer"] = window2["dataLayer"] || [] : null;
}
var NGX_DATA_LAYER = new InjectionToken("ngx-data-layer", {
  providedIn: "root",
  factory: () => getDataLayerFn(inject(NGX_WINDOW))
});
function getGtagFn(window2, dataLayer) {
  return window2 ? window2["gtag"] = window2["gtag"] || function() {
    dataLayer.push(arguments);
  } : null;
}
var NGX_GTAG_FN = new InjectionToken("ngx-gtag-fn", {
  providedIn: "root",
  factory: () => getGtagFn(inject(NGX_WINDOW), inject(NGX_DATA_LAYER))
});
var GoogleAnalyticsService = class {
  constructor(settings, _document, _gtag) {
    this.settings = settings;
    this._document = _document;
    this._gtag = _gtag;
  }
  get document() {
    return this._document;
  }
  throw(err) {
    if ((this.settings.enableTracing || isDevMode()) && console && console.error) {
      console.error(err);
    }
  }
  /** @todo Change this to `Object.fromEntity()` in the future... */
  toKeyValue(map2) {
    return map2.size > 0 ? Array.from(map2).reduce((obj, [key, value]) => Object.defineProperty(obj, key, {
      value,
      enumerable: true
    }), {}) : void 0;
  }
  /**
   * Call native GA Tag
   */
  gtag(...args) {
    try {
      this._gtag(...args.filter((x) => x !== void 0));
    } catch (err) {
      this.throw(err);
    }
  }
  /**
   * Send an event trigger to GA. It is the same as call:
   * ```js
   * gtag('event', 'video_auto_play_start', {
   *   'event_label': 'My promotional video',
   *   'event_category': 'video_auto_play'
   * });
   * ```
   *
   * @param action 'video_auto_play_start'
   * @param category 'video_auto_play'
   * @param label 'My promotional video'
   * @param value An value to measure something
   * @param interaction If user interaction is performed
   */
  event(action, category, label, value, interaction, options) {
    try {
      const opt = /* @__PURE__ */ new Map();
      if (category) {
        opt.set("event_category", category);
      }
      if (label) {
        opt.set("event_label", label);
      }
      if (value) {
        opt.set("value", value);
      }
      if (interaction !== void 0) {
        opt.set("interaction", interaction);
      }
      if (options) {
        Object.entries(options).map(([key, value2]) => opt.set(key, value2));
      }
      const params = this.toKeyValue(opt);
      if (params) {
        this.gtag("event", action, params);
      } else {
        this.gtag("event", action);
      }
    } catch (error) {
      this.throw(error);
    }
  }
  /**
   * Send an page view event. This is the same as
   *
   * ```js
   * gtag('config', 'GA_TRACKING_ID', {
   *   'page_title' : 'Homepage',
   *   'page_path': '/home'
   * });
   * ```
   *
   * The tracking ID is injected automatically by Inject Token NGX_GOOGLE_ANALYTICS_SETTINGS_TOKEN
   *
   * @param path /home
   * @param title Homepage
   * @param location '{ page_location }'
   * @param options '{ ... custom dimentions }'
   */
  pageView(path, title, location, options) {
    try {
      const opt = /* @__PURE__ */ new Map([["page_path", path]]);
      if (title) {
        opt.set("page_title", title);
      }
      if (location || this.document) {
        opt.set("page_location", location || this.document.location.href);
      }
      if (options) {
        Object.entries(options).map(([key, value]) => opt.set(key, value));
      }
      this.gtag("config", this.settings.trackingCode, this.toKeyValue(opt));
    } catch (error) {
      this.throw(error);
    }
  }
  /**
   * Send an event to report a App Page View. It is the same as
   *
   * ```js
   * gtag('event', 'screen_view', {
   *   'app_name': 'myAppName',
   *   'screen_name' : 'Home'
   * });
   *
   * ```
   *
   * @param screen 'screen_name'
   * @param appName 'app_name'
   * @param appId 'app_id'
   * @param appVersion 'app_version'
   * @param installerId 'app_installer_id'
   */
  appView(screen, appName, appId, appVersion, installerId) {
    try {
      const opt = /* @__PURE__ */ new Map([["screen_name", screen], ["app_name", appName]]);
      if (appId) {
        opt.set("app_id", appId);
      }
      if (appVersion) {
        opt.set("app_version", appVersion);
      }
      if (installerId) {
        opt.set("app_installer_id", installerId);
      }
      this.gtag("event", "screen_view", this.toKeyValue(opt));
    } catch (error) {
      this.throw(error);
    }
  }
  /**
   * Defines persistent values on GoogleAnalytics
   *
   * @see https://developers.google.com/analytics/devguides/collection/gtagjs/setting-values
   *
   * ```js
   * gtag('set', {
   *   'currency': 'USD',
   *   'country': 'US'
   * });
   * ```
   */
  set(...options) {
    try {
      this._gtag("set", ...options);
    } catch (err) {
      this.throw(err);
    }
  }
  /**
   * Send an event to GA to report an application error. It is the same as
   *
   * ```js
   * gtag('event', 'exception', {
   *   'description': 'error_description',
   *   'fatal': false   // set to true if the error is fatal
   * });
   * ```
   *
   * @param description 'error_description'
   * @param fatal set to true if the error is fatal
   */
  exception(description, fatal) {
    try {
      const opt = /* @__PURE__ */ new Map();
      if (description) {
        opt.set("description", description);
      }
      if (fatal) {
        opt.set("fatal", fatal);
      }
      const params = this.toKeyValue(opt);
      if (params) {
        this.gtag("event", "exception", this.toKeyValue(opt));
      } else {
        this.gtag("event", "exception");
      }
    } catch (error) {
      this.throw(error);
    }
  }
};
GoogleAnalyticsService.\u0275fac = \u0275\u0275ngDeclareFactory({
  minVersion: "12.0.0",
  version: "14.0.2",
  ngImport: core_exports,
  type: GoogleAnalyticsService,
  deps: [{
    token: NGX_GOOGLE_ANALYTICS_SETTINGS_TOKEN
  }, {
    token: DOCUMENT
  }, {
    token: NGX_GTAG_FN
  }],
  target: FactoryTarget.Injectable
});
GoogleAnalyticsService.\u0275prov = \u0275\u0275ngDeclareInjectable({
  minVersion: "12.0.0",
  version: "14.0.2",
  ngImport: core_exports,
  type: GoogleAnalyticsService,
  providedIn: "root"
});
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "14.0.2",
  ngImport: core_exports,
  type: GoogleAnalyticsService,
  decorators: [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }],
  ctorParameters: function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: [NGX_GOOGLE_ANALYTICS_SETTINGS_TOKEN]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [NGX_GTAG_FN]
      }]
    }];
  }
});
var GaEventDirective = class {
  constructor(gaCategoryDirective, gaService, settings, el) {
    this.gaCategoryDirective = gaCategoryDirective;
    this.gaService = gaService;
    this.settings = settings;
    this.el = el;
    this.gaBind = "click";
  }
  set gaBind(gaBind) {
    if (this.bindSubscription) {
      this.bindSubscription.unsubscribe();
    }
    this._gaBind = gaBind;
    this.bindSubscription = fromEvent(this.el.nativeElement, gaBind).subscribe(() => this.trigger());
  }
  get gaBind() {
    return this._gaBind;
  }
  ngOnDestroy() {
    if (this.bindSubscription) {
      this.bindSubscription.unsubscribe();
    }
  }
  trigger() {
    try {
      if (!this.gaAction && !this.gaEvent) {
        throw new Error("You must provide a gaAction attribute to identify this event.");
      }
      this.gaService.event(this.gaAction || this.gaEvent, this.gaCategoryDirective ? this.gaCategoryDirective.gaCategory : void 0, this.gaLabel || this.label, this.gaValue, this.gaInteraction);
    } catch (err) {
      this.throw(err);
    }
  }
  throw(err) {
    if ((isDevMode() || this.settings.enableTracing) && console && console.warn) {
      console.warn(err);
    }
  }
};
GaEventDirective.\u0275fac = \u0275\u0275ngDeclareFactory({
  minVersion: "12.0.0",
  version: "14.0.2",
  ngImport: core_exports,
  type: GaEventDirective,
  deps: [{
    token: GaEventCategoryDirective,
    optional: true
  }, {
    token: GoogleAnalyticsService
  }, {
    token: NGX_GOOGLE_ANALYTICS_SETTINGS_TOKEN
  }, {
    token: ElementRef
  }],
  target: FactoryTarget.Directive
});
GaEventDirective.\u0275dir = \u0275\u0275ngDeclareDirective({
  minVersion: "14.0.0",
  version: "14.0.2",
  type: GaEventDirective,
  selector: "[gaEvent]",
  inputs: {
    gaAction: "gaAction",
    gaLabel: "gaLabel",
    label: "label",
    gaValue: "gaValue",
    gaInteraction: "gaInteraction",
    gaEvent: "gaEvent",
    gaBind: "gaBind"
  },
  exportAs: ["gaEvent"],
  ngImport: core_exports
});
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "14.0.2",
  ngImport: core_exports,
  type: GaEventDirective,
  decorators: [{
    type: Directive,
    args: [{
      selector: `[gaEvent]`,
      exportAs: "gaEvent"
    }]
  }],
  ctorParameters: function() {
    return [{
      type: GaEventCategoryDirective,
      decorators: [{
        type: Optional
      }]
    }, {
      type: GoogleAnalyticsService
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [NGX_GOOGLE_ANALYTICS_SETTINGS_TOKEN]
      }]
    }, {
      type: ElementRef
    }];
  },
  propDecorators: {
    gaAction: [{
      type: Input
    }],
    gaLabel: [{
      type: Input
    }],
    label: [{
      type: Input
    }],
    gaValue: [{
      type: Input
    }],
    gaInteraction: [{
      type: Input
    }],
    gaEvent: [{
      type: Input
    }],
    gaBind: [{
      type: Input
    }]
  }
});
var GaEventFormInputDirective = class {
  constructor(gaEvent) {
    this.gaEvent = gaEvent;
    this.gaBind = "focus";
  }
  set gaBind(bind) {
    if (this.gaEvent) {
      this.gaEvent.gaBind = bind;
    }
  }
};
GaEventFormInputDirective.\u0275fac = \u0275\u0275ngDeclareFactory({
  minVersion: "12.0.0",
  version: "14.0.2",
  ngImport: core_exports,
  type: GaEventFormInputDirective,
  deps: [{
    token: GaEventDirective,
    host: true,
    optional: true
  }],
  target: FactoryTarget.Directive
});
GaEventFormInputDirective.\u0275dir = \u0275\u0275ngDeclareDirective({
  minVersion: "14.0.0",
  version: "14.0.2",
  type: GaEventFormInputDirective,
  selector: "input[gaEvent],\n             select[gaEvent],\n             textarea[gaEvent]",
  inputs: {
    gaBind: "gaBind"
  },
  ngImport: core_exports
});
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "14.0.2",
  ngImport: core_exports,
  type: GaEventFormInputDirective,
  decorators: [{
    type: Directive,
    args: [{
      selector: `input[gaEvent],
             select[gaEvent],
             textarea[gaEvent]`
    }]
  }],
  ctorParameters: function() {
    return [{
      type: GaEventDirective,
      decorators: [{
        type: Host
      }, {
        type: Optional
      }]
    }];
  },
  propDecorators: {
    gaBind: [{
      type: Input
    }]
  }
});
var GaActionEnum;
(function(GaActionEnum2) {
  GaActionEnum2["ADD_PAYMENT_INFO"] = "add_payment_info";
  GaActionEnum2["ADD_TO_CART"] = "add_to_cart";
  GaActionEnum2["ADD_TO_WISHLIST"] = "add_to_wishlist";
  GaActionEnum2["BEGIN_CHECKOUT"] = "begin_checkout";
  GaActionEnum2["CHECKOUT_PROGRESS"] = "checkout_progress";
  GaActionEnum2["GENERATE_LEAD"] = "generate_lead";
  GaActionEnum2["LOGIN"] = "login";
  GaActionEnum2["PURCHASE"] = "purchase";
  GaActionEnum2["REFUND"] = "refund";
  GaActionEnum2["REMOVE_FROM_CART"] = "remove_from_cart";
  GaActionEnum2["SEARCH"] = "search";
  GaActionEnum2["SELECT_CONTENT"] = "select_content";
  GaActionEnum2["SET_CHECKOUT_OPTION"] = "set_checkout_option";
  GaActionEnum2["SHARE"] = "share";
  GaActionEnum2["SIGN_UP"] = "sign_up";
  GaActionEnum2["VIEW_ITEM"] = "view_item";
  GaActionEnum2["VIEW_ITEM_LIST"] = "view_item_list";
  GaActionEnum2["VIEW_PROMOTION"] = "view_promotion";
  GaActionEnum2["VIEW_SEARCH_RESULT"] = "view_search_results";
  GaActionEnum2["VIEW_SEARCH_RESULTS"] = "view_search_results";
})(GaActionEnum || (GaActionEnum = {}));
var NGX_GOOGLE_ANALYTICS_INITIALIZER_PROVIDER = {
  provide: APP_INITIALIZER,
  multi: true,
  useFactory: GoogleAnalyticsInitializer,
  deps: [NGX_GOOGLE_ANALYTICS_SETTINGS_TOKEN, NGX_GTAG_FN, DOCUMENT]
};
function GoogleAnalyticsInitializer(settings, gtag, document2) {
  return () => __async(this, null, function* () {
    if (!settings.trackingCode) {
      if (!isDevMode()) {
        console.error("Empty tracking code for Google Analytics. Make sure to provide one when initializing NgxGoogleAnalyticsModule.");
      }
      return;
    }
    if (!gtag) {
      if (!isDevMode()) {
        console.error("Was not possible create or read gtag() fn. Make sure this module is running on a Browser w/ access to Window interface.");
      }
      return;
    }
    if (!document2) {
      if (!isDevMode()) {
        console.error("Was not possible to access Document interface. Make sure this module is running on a Browser w/ access do Document interface.");
      }
    }
    settings.uri = settings.uri || `https://www.googletagmanager.com/gtag/js?id=${settings.trackingCode}`;
    settings.initCommands = settings?.initCommands ?? [];
    if (!settings.initCommands.find((x) => x.command === "config")) {
      settings.initCommands.unshift({
        command: "config",
        values: [settings.trackingCode]
      });
    }
    if (!settings.initCommands.find((x) => x.command === "js")) {
      settings.initCommands.unshift({
        command: "js",
        values: [/* @__PURE__ */ new Date()]
      });
    }
    for (const command of settings.initCommands) {
      gtag(command.command, ...command.values);
    }
    const s = document2.createElement("script");
    s.async = true;
    s.src = settings.uri;
    if (settings.nonce) {
      s.setAttribute("nonce", settings.nonce);
    }
    const head = document2.getElementsByTagName("head")[0];
    head.appendChild(s);
  });
}
var NGX_GOOGLE_ANALYTICS_ROUTING_SETTINGS_TOKEN = new InjectionToken("ngx-google-analytics-routing-settings", {
  factory: () => ({})
});
var NGX_GOOGLE_ANALYTICS_ROUTER_INITIALIZER_PROVIDER = {
  provide: APP_BOOTSTRAP_LISTENER,
  multi: true,
  useFactory: GoogleAnalyticsRouterInitializer,
  deps: [NGX_GOOGLE_ANALYTICS_ROUTING_SETTINGS_TOKEN, GoogleAnalyticsService]
};
function GoogleAnalyticsRouterInitializer(settings, gaService) {
  return (c) => __async(this, null, function* () {
    const router = c.injector.get(Router);
    const {
      include = [],
      exclude = []
    } = settings ?? {};
    const includeRules = normalizePathRules(include);
    const excludeRules = normalizePathRules(exclude);
    const subs = router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      skip(1),
      // Prevend double views on the first tigger (because GA Already send one ping on setup)
      filter((event) => includeRules.length > 0 ? includeRules.some((rule) => rule.test(event.urlAfterRedirects)) : true),
      filter((event) => excludeRules.length > 0 ? !excludeRules.some((rule) => rule.test(event.urlAfterRedirects)) : true)
    ).subscribe((event) => gaService.pageView(event.urlAfterRedirects, void 0));
    c.onDestroy(() => subs.unsubscribe());
  });
}
function normalizePathRules(rules) {
  return rules.map((rule) => rule instanceof RegExp ? rule : new RegExp(`^${rule.replace("*", ".*")}$`, "i"));
}
var NgxGoogleAnalyticsModule = class _NgxGoogleAnalyticsModule {
  /**
   * You should provide a valid Google TrackingCode. This code will be provided to the entire application by
   * `NGX_GOOGLE_ANALYTICS_SETTINGS_TOKEN` token. You can inject this code in you components if you like by
   * use the following injection code `@Inject(NGX_GOOGLE_ANALYTICS_SETTINGS_TOKEN) gaConfig: IGoogleAnalyticsSettings`
   *
   * @param trackingCode The Google Tracking Code
   * @param initCommands When placed, it will run any GA Commands in sequence after setup GA environment.
   * @param uri When placed, it will change the default js URI to the provided one.
   * @param enableTracing When true, trace GA tracking errors on production mode.
   * @param nonce When placed, nonce will be added to script tag.
   */
  static forRoot(trackingCode, initCommands = [], uri, enableTracing, nonce) {
    return {
      ngModule: _NgxGoogleAnalyticsModule,
      providers: [{
        provide: NGX_GOOGLE_ANALYTICS_SETTINGS_TOKEN,
        useValue: {
          trackingCode,
          initCommands,
          uri,
          enableTracing,
          nonce
        }
      }, NGX_GOOGLE_ANALYTICS_INITIALIZER_PROVIDER]
    };
  }
};
NgxGoogleAnalyticsModule.\u0275fac = \u0275\u0275ngDeclareFactory({
  minVersion: "12.0.0",
  version: "14.0.2",
  ngImport: core_exports,
  type: NgxGoogleAnalyticsModule,
  deps: [],
  target: FactoryTarget.NgModule
});
NgxGoogleAnalyticsModule.\u0275mod = \u0275\u0275ngDeclareNgModule({
  minVersion: "14.0.0",
  version: "14.0.2",
  ngImport: core_exports,
  type: NgxGoogleAnalyticsModule,
  declarations: [GaEventDirective, GaEventCategoryDirective, GaEventFormInputDirective],
  exports: [GaEventDirective, GaEventCategoryDirective, GaEventFormInputDirective]
});
NgxGoogleAnalyticsModule.\u0275inj = \u0275\u0275ngDeclareInjector({
  minVersion: "12.0.0",
  version: "14.0.2",
  ngImport: core_exports,
  type: NgxGoogleAnalyticsModule
});
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "14.0.2",
  ngImport: core_exports,
  type: NgxGoogleAnalyticsModule,
  decorators: [{
    type: NgModule,
    args: [{
      imports: [],
      declarations: [GaEventDirective, GaEventCategoryDirective, GaEventFormInputDirective],
      exports: [GaEventDirective, GaEventCategoryDirective, GaEventFormInputDirective]
    }]
  }]
});
var NgxGoogleAnalyticsRouterModule = class _NgxGoogleAnalyticsRouterModule {
  static forRoot(settings) {
    return {
      ngModule: _NgxGoogleAnalyticsRouterModule,
      providers: [{
        provide: NGX_GOOGLE_ANALYTICS_ROUTING_SETTINGS_TOKEN,
        useValue: settings ?? {}
      }]
    };
  }
};
NgxGoogleAnalyticsRouterModule.\u0275fac = \u0275\u0275ngDeclareFactory({
  minVersion: "12.0.0",
  version: "14.0.2",
  ngImport: core_exports,
  type: NgxGoogleAnalyticsRouterModule,
  deps: [],
  target: FactoryTarget.NgModule
});
NgxGoogleAnalyticsRouterModule.\u0275mod = \u0275\u0275ngDeclareNgModule({
  minVersion: "14.0.0",
  version: "14.0.2",
  ngImport: core_exports,
  type: NgxGoogleAnalyticsRouterModule,
  imports: [CommonModule, NgxGoogleAnalyticsModule]
});
NgxGoogleAnalyticsRouterModule.\u0275inj = \u0275\u0275ngDeclareInjector({
  minVersion: "12.0.0",
  version: "14.0.2",
  ngImport: core_exports,
  type: NgxGoogleAnalyticsRouterModule,
  providers: [NGX_GOOGLE_ANALYTICS_ROUTER_INITIALIZER_PROVIDER],
  imports: [CommonModule, NgxGoogleAnalyticsModule]
});
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "14.0.2",
  ngImport: core_exports,
  type: NgxGoogleAnalyticsRouterModule,
  decorators: [{
    type: NgModule,
    args: [{
      imports: [CommonModule, NgxGoogleAnalyticsModule],
      providers: [NGX_GOOGLE_ANALYTICS_ROUTER_INITIALIZER_PROVIDER],
      declarations: []
    }]
  }]
});

// src/app/shared/google-analytics/types/action.enum.ts
var Action;
(function(Action2) {
  Action2[Action2["APIResquestError"] = 0] = "APIResquestError";
  Action2[Action2["ChangeResultPage"] = 1] = "ChangeResultPage";
  Action2[Action2["FilterByMultipleFields"] = 2] = "FilterByMultipleFields";
  Action2[Action2["RemoveResultFilter"] = 3] = "RemoveResultFilter";
  Action2[Action2["AddResultFilter"] = 4] = "AddResultFilter";
  Action2[Action2["ComplexVisualisation"] = 5] = "ComplexVisualisation";
  Action2[Action2["download"] = 6] = "download";
  Action2[Action2["externalLink"] = 7] = "externalLink";
  Action2[Action2["example"] = 8] = "example";
  Action2[Action2["searchInvoker"] = 9] = "searchInvoker";
  Action2[Action2["Tile"] = 10] = "Tile";
  Action2[Action2["RemoveFromBasket"] = 11] = "RemoveFromBasket";
  Action2[Action2["search"] = 12] = "search";
  Action2[Action2["AddToBasket"] = 13] = "AddToBasket";
  Action2[Action2["GoToMenu"] = 14] = "GoToMenu";
  Action2[Action2["RatingComplexNavigator"] = 15] = "RatingComplexNavigator";
})(Action || (Action = {}));

// src/app/shared/google-analytics/service/analytics.service.ts
var __decorate4 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var _a4;
var AnalyticsService = (_a4 = class {
  constructor(analytics) {
    __publicField(this, "analytics");
    this.analytics = analytics;
  }
  invokeCustomEvent(value, category, label) {
    this.analytics.event(Action[value], Category[category], label);
  }
  fireDownloadResourceEvent(site, type) {
    this.invokeCustomEvent(Action.download, site, type);
  }
  fireOpenExternalLinkEvent(site, type) {
    this.invokeCustomEvent(Action.externalLink, site, type);
  }
  fireClickHomeTileEvent(type) {
    this.invokeCustomEvent(Action.Tile, Category.home, type);
  }
  fireGoToDetailsSectionEvent(type) {
    this.invokeCustomEvent(Action.GoToMenu, Category.details, type);
  }
  fireSearchTermEvent(site, type) {
    this.invokeCustomEvent(Action.search, site, type);
  }
  // To identify if user use 'enter' or if they click with the mouse on the magnifier.
  // 'site' is not the actual site, but if it is the homepage or the header search box
  fireSearchInvokerEvent(site, type) {
    this.invokeCustomEvent(Action.searchInvoker, site, type);
  }
  fireAddToBasketEvent(type) {
    this.invokeCustomEvent(Action.AddToBasket, Category.basket, type);
  }
  fireRemoveFromBasketEvent(type) {
    this.invokeCustomEvent(Action.RemoveFromBasket, Category.basket, type);
  }
  fireInteractionWithViewerEvent(viewer, type) {
    this.invokeCustomEvent(Action.ComplexVisualisation, viewer, type);
  }
  fireAddedFilterEvent(type) {
    this.invokeCustomEvent(Action.AddResultFilter, Category.ResultFilter, type);
  }
  fireRemovedFilterEvent(type) {
    this.invokeCustomEvent(Action.RemoveResultFilter, Category.ResultFilter, type);
  }
  fireMultiFilterEvent(type) {
    this.invokeCustomEvent(Action.FilterByMultipleFields, Category.ResultFilter, type);
  }
  fireAPIRequestErrorEvent(api, type) {
    this.invokeCustomEvent(Action.APIResquestError, api, type);
  }
  rateComplexNavigator(rating) {
    this.analytics.event(Action[Action.RatingComplexNavigator], Category[Category.complexNavigator], "rating", rating);
  }
}, __publicField(_a4, "ctorParameters", () => [
  { type: GoogleAnalyticsService }
]), _a4);
AnalyticsService = __decorate4([
  Injectable()
], AnalyticsService);

export {
  environment,
  ProgressBarComponent,
  Category,
  NgxGoogleAnalyticsModule,
  NgxGoogleAnalyticsRouterModule,
  AnalyticsService,
  require_throwError,
  ComplexPortalService,
  Platform,
  normalizePassiveListenerOptions,
  RtlScrollAxisType,
  supportsScrollBehavior,
  getRtlScrollAxisType,
  _getEventTarget,
  _isTestEnvironment,
  ESCAPE,
  hasModifierKey,
  coerceBooleanProperty,
  coerceNumberProperty,
  coerceArray,
  coerceCssPixelValue,
  coerceElement,
  AriaDescriber,
  FocusMonitor,
  A11yModule,
  Directionality,
  BidiModule,
  MatCommonModule,
  MatRippleModule,
  MatRippleLoader,
  ProgressSpinnerComponent
};
//# sourceMappingURL=chunk-VAAOO3WK.js.map
