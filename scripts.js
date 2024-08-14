/*!
 * jQuery JavaScript Library v3.7.1 -ajax,-ajax/jsonp,-ajax/load,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-deprecated/ajax-event-alias,-effects,-effects/animatedSelector,-effects/Tween
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */
(function(global, factory) {
  "use strict";
  if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = global.document ? factory(global, true) : function(w) {
      if (!w.document) {
        throw new Error("jQuery requires a window with a document");
      }
      return factory(w);
    };
  } else {
    factory(global);
  }
})(typeof window !== "undefined" ? window : this, function(window2, noGlobal) {
  "use strict";
  var arr = [];
  var getProto = Object.getPrototypeOf;
  var slice = arr.slice;
  var flat = arr.flat ? function(array) {
    return arr.flat.call(array);
  } : function(array) {
    return arr.concat.apply([], array);
  };
  var push = arr.push;
  var indexOf = arr.indexOf;
  var class2type = {};
  var toString = class2type.toString;
  var hasOwn = class2type.hasOwnProperty;
  var fnToString = hasOwn.toString;
  var ObjectFunctionString = fnToString.call(Object);
  var support = {};
  var isFunction = function isFunction2(obj) {
    return typeof obj === "function" && typeof obj.nodeType !== "number" && typeof obj.item !== "function";
  };
  var isWindow = function isWindow2(obj) {
    return obj != null && obj === obj.window;
  };
  var document2 = window2.document;
  var preservedScriptAttributes = {
    type: true,
    src: true,
    nonce: true,
    noModule: true
  };
  function DOMEval(code, node, doc) {
    doc = doc || document2;
    var i, val, script = doc.createElement("script");
    script.text = code;
    if (node) {
      for (i in preservedScriptAttributes) {
        val = node[i] || node.getAttribute && node.getAttribute(i);
        if (val) {
          script.setAttribute(i, val);
        }
      }
    }
    doc.head.appendChild(script).parentNode.removeChild(script);
  }
  function toType(obj) {
    if (obj == null) {
      return obj + "";
    }
    return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
  }
  var version = "3.7.1 -ajax,-ajax/jsonp,-ajax/load,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-deprecated/ajax-event-alias,-effects,-effects/animatedSelector,-effects/Tween", rhtmlSuffix = /HTML$/i, jQuery2 = function(selector, context) {
    return new jQuery2.fn.init(selector, context);
  };
  jQuery2.fn = jQuery2.prototype = {
    // The current version of jQuery being used
    jquery: version,
    constructor: jQuery2,
    // The default length of a jQuery object is 0
    length: 0,
    toArray: function() {
      return slice.call(this);
    },
    // Get the Nth element in the matched element set OR
    // Get the whole matched element set as a clean array
    get: function(num) {
      if (num == null) {
        return slice.call(this);
      }
      return num < 0 ? this[num + this.length] : this[num];
    },
    // Take an array of elements and push it onto the stack
    // (returning the new matched element set)
    pushStack: function(elems) {
      var ret = jQuery2.merge(this.constructor(), elems);
      ret.prevObject = this;
      return ret;
    },
    // Execute a callback for every element in the matched set.
    each: function(callback) {
      return jQuery2.each(this, callback);
    },
    map: function(callback) {
      return this.pushStack(jQuery2.map(this, function(elem2, i) {
        return callback.call(elem2, i, elem2);
      }));
    },
    slice: function() {
      return this.pushStack(slice.apply(this, arguments));
    },
    first: function() {
      return this.eq(0);
    },
    last: function() {
      return this.eq(-1);
    },
    even: function() {
      return this.pushStack(jQuery2.grep(this, function(_elem, i) {
        return (i + 1) % 2;
      }));
    },
    odd: function() {
      return this.pushStack(jQuery2.grep(this, function(_elem, i) {
        return i % 2;
      }));
    },
    eq: function(i) {
      var len = this.length, j = +i + (i < 0 ? len : 0);
      return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
    },
    end: function() {
      return this.prevObject || this.constructor();
    },
    // For internal use only.
    // Behaves like an Array's method, not like a jQuery method.
    push,
    sort: arr.sort,
    splice: arr.splice
  };
  jQuery2.extend = jQuery2.fn.extend = function() {
    var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = false;
    if (typeof target === "boolean") {
      deep = target;
      target = arguments[i] || {};
      i++;
    }
    if (typeof target !== "object" && !isFunction(target)) {
      target = {};
    }
    if (i === length) {
      target = this;
      i--;
    }
    for (; i < length; i++) {
      if ((options = arguments[i]) != null) {
        for (name in options) {
          copy = options[name];
          if (name === "__proto__" || target === copy) {
            continue;
          }
          if (deep && copy && (jQuery2.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
            src = target[name];
            if (copyIsArray && !Array.isArray(src)) {
              clone = [];
            } else if (!copyIsArray && !jQuery2.isPlainObject(src)) {
              clone = {};
            } else {
              clone = src;
            }
            copyIsArray = false;
            target[name] = jQuery2.extend(deep, clone, copy);
          } else if (copy !== void 0) {
            target[name] = copy;
          }
        }
      }
    }
    return target;
  };
  jQuery2.extend({
    // Unique for each copy of jQuery on the page
    expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
    // Assume jQuery is ready without the ready module
    isReady: true,
    error: function(msg) {
      throw new Error(msg);
    },
    noop: function() {
    },
    isPlainObject: function(obj) {
      var proto, Ctor;
      if (!obj || toString.call(obj) !== "[object Object]") {
        return false;
      }
      proto = getProto(obj);
      if (!proto) {
        return true;
      }
      Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
      return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
    },
    isEmptyObject: function(obj) {
      var name;
      for (name in obj) {
        return false;
      }
      return true;
    },
    // Evaluates a script in a provided context; falls back to the global one
    // if not specified.
    globalEval: function(code, options, doc) {
      DOMEval(code, { nonce: options && options.nonce }, doc);
    },
    each: function(obj, callback) {
      var length, i = 0;
      if (isArrayLike(obj)) {
        length = obj.length;
        for (; i < length; i++) {
          if (callback.call(obj[i], i, obj[i]) === false) {
            break;
          }
        }
      } else {
        for (i in obj) {
          if (callback.call(obj[i], i, obj[i]) === false) {
            break;
          }
        }
      }
      return obj;
    },
    // Retrieve the text value of an array of DOM nodes
    text: function(elem2) {
      var node, ret = "", i = 0, nodeType = elem2.nodeType;
      if (!nodeType) {
        while (node = elem2[i++]) {
          ret += jQuery2.text(node);
        }
      }
      if (nodeType === 1 || nodeType === 11) {
        return elem2.textContent;
      }
      if (nodeType === 9) {
        return elem2.documentElement.textContent;
      }
      if (nodeType === 3 || nodeType === 4) {
        return elem2.nodeValue;
      }
      return ret;
    },
    // results is for internal usage only
    makeArray: function(arr2, results) {
      var ret = results || [];
      if (arr2 != null) {
        if (isArrayLike(Object(arr2))) {
          jQuery2.merge(
            ret,
            typeof arr2 === "string" ? [arr2] : arr2
          );
        } else {
          push.call(ret, arr2);
        }
      }
      return ret;
    },
    inArray: function(elem2, arr2, i) {
      return arr2 == null ? -1 : indexOf.call(arr2, elem2, i);
    },
    isXMLDoc: function(elem2) {
      var namespace = elem2 && elem2.namespaceURI, docElem = elem2 && (elem2.ownerDocument || elem2).documentElement;
      return !rhtmlSuffix.test(namespace || docElem && docElem.nodeName || "HTML");
    },
    // Support: Android <=4.0 only, PhantomJS 1 only
    // push.apply(_, arraylike) throws on ancient WebKit
    merge: function(first, second) {
      var len = +second.length, j = 0, i = first.length;
      for (; j < len; j++) {
        first[i++] = second[j];
      }
      first.length = i;
      return first;
    },
    grep: function(elems, callback, invert) {
      var callbackInverse, matches = [], i = 0, length = elems.length, callbackExpect = !invert;
      for (; i < length; i++) {
        callbackInverse = !callback(elems[i], i);
        if (callbackInverse !== callbackExpect) {
          matches.push(elems[i]);
        }
      }
      return matches;
    },
    // arg is for internal usage only
    map: function(elems, callback, arg) {
      var length, value, i = 0, ret = [];
      if (isArrayLike(elems)) {
        length = elems.length;
        for (; i < length; i++) {
          value = callback(elems[i], i, arg);
          if (value != null) {
            ret.push(value);
          }
        }
      } else {
        for (i in elems) {
          value = callback(elems[i], i, arg);
          if (value != null) {
            ret.push(value);
          }
        }
      }
      return flat(ret);
    },
    // A global GUID counter for objects
    guid: 1,
    // jQuery.support is not used in Core but other projects attach their
    // properties to it so it needs to exist.
    support
  });
  if (typeof Symbol === "function") {
    jQuery2.fn[Symbol.iterator] = arr[Symbol.iterator];
  }
  jQuery2.each(
    "Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
    function(_i, name) {
      class2type["[object " + name + "]"] = name.toLowerCase();
    }
  );
  function isArrayLike(obj) {
    var length = !!obj && "length" in obj && obj.length, type = toType(obj);
    if (isFunction(obj) || isWindow(obj)) {
      return false;
    }
    return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
  }
  function nodeName(elem2, name) {
    return elem2.nodeName && elem2.nodeName.toLowerCase() === name.toLowerCase();
  }
  var pop = arr.pop;
  var sort = arr.sort;
  var splice = arr.splice;
  var whitespace = "[\\x20\\t\\r\\n\\f]";
  var rtrimCSS = new RegExp(
    "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$",
    "g"
  );
  jQuery2.contains = function(a, b) {
    var bup = b && b.parentNode;
    return a === bup || !!(bup && bup.nodeType === 1 && // Support: IE 9 - 11+
    // IE doesn't have `contains` on SVG.
    (a.contains ? a.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
  };
  var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
  function fcssescape(ch, asCodePoint) {
    if (asCodePoint) {
      if (ch === "\0") {
        return "\uFFFD";
      }
      return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
    }
    return "\\" + ch;
  }
  jQuery2.escapeSelector = function(sel) {
    return (sel + "").replace(rcssescape, fcssescape);
  };
  var preferredDoc = document2, pushNative = push;
  (function() {
    var i, Expr, outermostContext, sortInput, hasDuplicate, push2 = pushNative, document3, documentElement2, documentIsHTML, rbuggyQSA, matches, expando = jQuery2.expando, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), nonnativeSelectorCache = createCache(), sortOrder = function(a, b) {
      if (a === b) {
        hasDuplicate = true;
      }
      return 0;
    }, booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + // Operator (capture 2)
    "*([*^$|!~]?=)" + whitespace + // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
    `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + identifier + "))|)" + whitespace + "*\\]", pseudos = ":(" + identifier + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + attributes + ")*)|.*)\\)|)", rwhitespace = new RegExp(whitespace + "+", "g"), rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"), rleadingCombinator = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"), rdescend = new RegExp(whitespace + "|>"), rpseudo = new RegExp(pseudos), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = {
      ID: new RegExp("^#(" + identifier + ")"),
      CLASS: new RegExp("^\\.(" + identifier + ")"),
      TAG: new RegExp("^(" + identifier + "|[*])"),
      ATTR: new RegExp("^" + attributes),
      PSEUDO: new RegExp("^" + pseudos),
      CHILD: new RegExp(
        "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)",
        "i"
      ),
      bool: new RegExp("^(?:" + booleans + ")$", "i"),
      // For use in libraries implementing .is()
      // We use this for POS matching in `select`
      needsContext: new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
    }, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rquickExpr2 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rsibling = /[+~]/, runescape = new RegExp("\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g"), funescape = function(escape2, nonHex) {
      var high = "0x" + escape2.slice(1) - 65536;
      if (nonHex) {
        return nonHex;
      }
      return high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320);
    }, unloadHandler = function() {
      setDocument();
    }, inDisabledFieldset = addCombinator(
      function(elem2) {
        return elem2.disabled === true && nodeName(elem2, "fieldset");
      },
      { dir: "parentNode", next: "legend" }
    );
    function safeActiveElement() {
      try {
        return document3.activeElement;
      } catch (err) {
      }
    }
    try {
      push2.apply(
        arr = slice.call(preferredDoc.childNodes),
        preferredDoc.childNodes
      );
      arr[preferredDoc.childNodes.length].nodeType;
    } catch (e2) {
      push2 = {
        apply: function(target, els) {
          pushNative.apply(target, slice.call(els));
        },
        call: function(target) {
          pushNative.apply(target, slice.call(arguments, 1));
        }
      };
    }
    function find(selector, context, results, seed) {
      var m2, i2, elem2, nid, match, groups, newSelector, newContext = context && context.ownerDocument, nodeType = context ? context.nodeType : 9;
      results = results || [];
      if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
        return results;
      }
      if (!seed) {
        setDocument(context);
        context = context || document3;
        if (documentIsHTML) {
          if (nodeType !== 11 && (match = rquickExpr2.exec(selector))) {
            if (m2 = match[1]) {
              if (nodeType === 9) {
                if (elem2 = context.getElementById(m2)) {
                  if (elem2.id === m2) {
                    push2.call(results, elem2);
                    return results;
                  }
                } else {
                  return results;
                }
              } else {
                if (newContext && (elem2 = newContext.getElementById(m2)) && find.contains(context, elem2) && elem2.id === m2) {
                  push2.call(results, elem2);
                  return results;
                }
              }
            } else if (match[2]) {
              push2.apply(results, context.getElementsByTagName(selector));
              return results;
            } else if ((m2 = match[3]) && context.getElementsByClassName) {
              push2.apply(results, context.getElementsByClassName(m2));
              return results;
            }
          }
          if (!nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
            newSelector = selector;
            newContext = context;
            if (nodeType === 1 && (rdescend.test(selector) || rleadingCombinator.test(selector))) {
              newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
              if (newContext != context || !support.scope) {
                if (nid = context.getAttribute("id")) {
                  nid = jQuery2.escapeSelector(nid);
                } else {
                  context.setAttribute("id", nid = expando);
                }
              }
              groups = tokenize(selector);
              i2 = groups.length;
              while (i2--) {
                groups[i2] = (nid ? "#" + nid : ":scope") + " " + toSelector(groups[i2]);
              }
              newSelector = groups.join(",");
            }
            try {
              push2.apply(
                results,
                newContext.querySelectorAll(newSelector)
              );
              return results;
            } catch (qsaError) {
              nonnativeSelectorCache(selector, true);
            } finally {
              if (nid === expando) {
                context.removeAttribute("id");
              }
            }
          }
        }
      }
      return select(selector.replace(rtrimCSS, "$1"), context, results, seed);
    }
    function createCache() {
      var keys = [];
      function cache(key, value) {
        if (keys.push(key + " ") > Expr.cacheLength) {
          delete cache[keys.shift()];
        }
        return cache[key + " "] = value;
      }
      return cache;
    }
    function markFunction(fn) {
      fn[expando] = true;
      return fn;
    }
    function assert(fn) {
      var el = document3.createElement("fieldset");
      try {
        return !!fn(el);
      } catch (e2) {
        return false;
      } finally {
        if (el.parentNode) {
          el.parentNode.removeChild(el);
        }
        el = null;
      }
    }
    function createInputPseudo(type) {
      return function(elem2) {
        return nodeName(elem2, "input") && elem2.type === type;
      };
    }
    function createButtonPseudo(type) {
      return function(elem2) {
        return (nodeName(elem2, "input") || nodeName(elem2, "button")) && elem2.type === type;
      };
    }
    function createDisabledPseudo(disabled) {
      return function(elem2) {
        if ("form" in elem2) {
          if (elem2.parentNode && elem2.disabled === false) {
            if ("label" in elem2) {
              if ("label" in elem2.parentNode) {
                return elem2.parentNode.disabled === disabled;
              } else {
                return elem2.disabled === disabled;
              }
            }
            return elem2.isDisabled === disabled || // Where there is no isDisabled, check manually
            elem2.isDisabled !== !disabled && inDisabledFieldset(elem2) === disabled;
          }
          return elem2.disabled === disabled;
        } else if ("label" in elem2) {
          return elem2.disabled === disabled;
        }
        return false;
      };
    }
    function createPositionalPseudo(fn) {
      return markFunction(function(argument) {
        argument = +argument;
        return markFunction(function(seed, matches2) {
          var j, matchIndexes = fn([], seed.length, argument), i2 = matchIndexes.length;
          while (i2--) {
            if (seed[j = matchIndexes[i2]]) {
              seed[j] = !(matches2[j] = seed[j]);
            }
          }
        });
      });
    }
    function testContext(context) {
      return context && typeof context.getElementsByTagName !== "undefined" && context;
    }
    function setDocument(node) {
      var subWindow, doc = node ? node.ownerDocument || node : preferredDoc;
      if (doc == document3 || doc.nodeType !== 9 || !doc.documentElement) {
        return document3;
      }
      document3 = doc;
      documentElement2 = document3.documentElement;
      documentIsHTML = !jQuery2.isXMLDoc(document3);
      matches = documentElement2.matches || documentElement2.webkitMatchesSelector || documentElement2.msMatchesSelector;
      if (documentElement2.msMatchesSelector && // Support: IE 11+, Edge 17 - 18+
      // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
      // two documents; shallow comparisons work.
      // eslint-disable-next-line eqeqeq
      preferredDoc != document3 && (subWindow = document3.defaultView) && subWindow.top !== subWindow) {
        subWindow.addEventListener("unload", unloadHandler);
      }
      support.getById = assert(function(el) {
        documentElement2.appendChild(el).id = jQuery2.expando;
        return !document3.getElementsByName || !document3.getElementsByName(jQuery2.expando).length;
      });
      support.disconnectedMatch = assert(function(el) {
        return matches.call(el, "*");
      });
      support.scope = assert(function() {
        return document3.querySelectorAll(":scope");
      });
      support.cssHas = assert(function() {
        try {
          document3.querySelector(":has(*,:jqfake)");
          return false;
        } catch (e2) {
          return true;
        }
      });
      if (support.getById) {
        Expr.filter.ID = function(id) {
          var attrId = id.replace(runescape, funescape);
          return function(elem2) {
            return elem2.getAttribute("id") === attrId;
          };
        };
        Expr.find.ID = function(id, context) {
          if (typeof context.getElementById !== "undefined" && documentIsHTML) {
            var elem2 = context.getElementById(id);
            return elem2 ? [elem2] : [];
          }
        };
      } else {
        Expr.filter.ID = function(id) {
          var attrId = id.replace(runescape, funescape);
          return function(elem2) {
            var node2 = typeof elem2.getAttributeNode !== "undefined" && elem2.getAttributeNode("id");
            return node2 && node2.value === attrId;
          };
        };
        Expr.find.ID = function(id, context) {
          if (typeof context.getElementById !== "undefined" && documentIsHTML) {
            var node2, i2, elems, elem2 = context.getElementById(id);
            if (elem2) {
              node2 = elem2.getAttributeNode("id");
              if (node2 && node2.value === id) {
                return [elem2];
              }
              elems = context.getElementsByName(id);
              i2 = 0;
              while (elem2 = elems[i2++]) {
                node2 = elem2.getAttributeNode("id");
                if (node2 && node2.value === id) {
                  return [elem2];
                }
              }
            }
            return [];
          }
        };
      }
      Expr.find.TAG = function(tag, context) {
        if (typeof context.getElementsByTagName !== "undefined") {
          return context.getElementsByTagName(tag);
        } else {
          return context.querySelectorAll(tag);
        }
      };
      Expr.find.CLASS = function(className, context) {
        if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
          return context.getElementsByClassName(className);
        }
      };
      rbuggyQSA = [];
      assert(function(el) {
        var input;
        documentElement2.appendChild(el).innerHTML = "<a id='" + expando + "' href='' disabled='disabled'></a><select id='" + expando + "-\r\\' disabled='disabled'><option selected=''></option></select>";
        if (!el.querySelectorAll("[selected]").length) {
          rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
        }
        if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
          rbuggyQSA.push("~=");
        }
        if (!el.querySelectorAll("a#" + expando + "+*").length) {
          rbuggyQSA.push(".#.+[+~]");
        }
        if (!el.querySelectorAll(":checked").length) {
          rbuggyQSA.push(":checked");
        }
        input = document3.createElement("input");
        input.setAttribute("type", "hidden");
        el.appendChild(input).setAttribute("name", "D");
        documentElement2.appendChild(el).disabled = true;
        if (el.querySelectorAll(":disabled").length !== 2) {
          rbuggyQSA.push(":enabled", ":disabled");
        }
        input = document3.createElement("input");
        input.setAttribute("name", "");
        el.appendChild(input);
        if (!el.querySelectorAll("[name='']").length) {
          rbuggyQSA.push("\\[" + whitespace + "*name" + whitespace + "*=" + whitespace + `*(?:''|"")`);
        }
      });
      if (!support.cssHas) {
        rbuggyQSA.push(":has");
      }
      rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
      sortOrder = function(a, b) {
        if (a === b) {
          hasDuplicate = true;
          return 0;
        }
        var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
        if (compare) {
          return compare;
        }
        compare = (a.ownerDocument || a) == (b.ownerDocument || b) ? a.compareDocumentPosition(b) : (
          // Otherwise we know they are disconnected
          1
        );
        if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
          if (a === document3 || a.ownerDocument == preferredDoc && find.contains(preferredDoc, a)) {
            return -1;
          }
          if (b === document3 || b.ownerDocument == preferredDoc && find.contains(preferredDoc, b)) {
            return 1;
          }
          return sortInput ? indexOf.call(sortInput, a) - indexOf.call(sortInput, b) : 0;
        }
        return compare & 4 ? -1 : 1;
      };
      return document3;
    }
    find.matches = function(expr, elements) {
      return find(expr, null, null, elements);
    };
    find.matchesSelector = function(elem2, expr) {
      setDocument(elem2);
      if (documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
        try {
          var ret = matches.call(elem2, expr);
          if (ret || support.disconnectedMatch || // As well, disconnected nodes are said to be in a document
          // fragment in IE 9
          elem2.document && elem2.document.nodeType !== 11) {
            return ret;
          }
        } catch (e2) {
          nonnativeSelectorCache(expr, true);
        }
      }
      return find(expr, document3, null, [elem2]).length > 0;
    };
    find.contains = function(context, elem2) {
      if ((context.ownerDocument || context) != document3) {
        setDocument(context);
      }
      return jQuery2.contains(context, elem2);
    };
    find.attr = function(elem2, name) {
      if ((elem2.ownerDocument || elem2) != document3) {
        setDocument(elem2);
      }
      var fn = Expr.attrHandle[name.toLowerCase()], val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem2, name, !documentIsHTML) : void 0;
      if (val !== void 0) {
        return val;
      }
      return elem2.getAttribute(name);
    };
    find.error = function(msg) {
      throw new Error("Syntax error, unrecognized expression: " + msg);
    };
    jQuery2.uniqueSort = function(results) {
      var elem2, duplicates = [], j = 0, i2 = 0;
      hasDuplicate = !support.sortStable;
      sortInput = !support.sortStable && slice.call(results, 0);
      sort.call(results, sortOrder);
      if (hasDuplicate) {
        while (elem2 = results[i2++]) {
          if (elem2 === results[i2]) {
            j = duplicates.push(i2);
          }
        }
        while (j--) {
          splice.call(results, duplicates[j], 1);
        }
      }
      sortInput = null;
      return results;
    };
    jQuery2.fn.uniqueSort = function() {
      return this.pushStack(jQuery2.uniqueSort(slice.apply(this)));
    };
    Expr = jQuery2.expr = {
      // Can be adjusted by the user
      cacheLength: 50,
      createPseudo: markFunction,
      match: matchExpr,
      attrHandle: {},
      find: {},
      relative: {
        ">": { dir: "parentNode", first: true },
        " ": { dir: "parentNode" },
        "+": { dir: "previousSibling", first: true },
        "~": { dir: "previousSibling" }
      },
      preFilter: {
        ATTR: function(match) {
          match[1] = match[1].replace(runescape, funescape);
          match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
          if (match[2] === "~=") {
            match[3] = " " + match[3] + " ";
          }
          return match.slice(0, 4);
        },
        CHILD: function(match) {
          match[1] = match[1].toLowerCase();
          if (match[1].slice(0, 3) === "nth") {
            if (!match[3]) {
              find.error(match[0]);
            }
            match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
            match[5] = +(match[7] + match[8] || match[3] === "odd");
          } else if (match[3]) {
            find.error(match[0]);
          }
          return match;
        },
        PSEUDO: function(match) {
          var excess, unquoted = !match[6] && match[2];
          if (matchExpr.CHILD.test(match[0])) {
            return null;
          }
          if (match[3]) {
            match[2] = match[4] || match[5] || "";
          } else if (unquoted && rpseudo.test(unquoted) && // Get excess from tokenize (recursively)
          (excess = tokenize(unquoted, true)) && // advance to the next closing parenthesis
          (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
            match[0] = match[0].slice(0, excess);
            match[2] = unquoted.slice(0, excess);
          }
          return match.slice(0, 3);
        }
      },
      filter: {
        TAG: function(nodeNameSelector) {
          var expectedNodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
          return nodeNameSelector === "*" ? function() {
            return true;
          } : function(elem2) {
            return nodeName(elem2, expectedNodeName);
          };
        },
        CLASS: function(className) {
          var pattern = classCache[className + " "];
          return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem2) {
            return pattern.test(
              typeof elem2.className === "string" && elem2.className || typeof elem2.getAttribute !== "undefined" && elem2.getAttribute("class") || ""
            );
          });
        },
        ATTR: function(name, operator, check) {
          return function(elem2) {
            var result = find.attr(elem2, name);
            if (result == null) {
              return operator === "!=";
            }
            if (!operator) {
              return true;
            }
            result += "";
            if (operator === "=") {
              return result === check;
            }
            if (operator === "!=") {
              return result !== check;
            }
            if (operator === "^=") {
              return check && result.indexOf(check) === 0;
            }
            if (operator === "*=") {
              return check && result.indexOf(check) > -1;
            }
            if (operator === "$=") {
              return check && result.slice(-check.length) === check;
            }
            if (operator === "~=") {
              return (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1;
            }
            if (operator === "|=") {
              return result === check || result.slice(0, check.length + 1) === check + "-";
            }
            return false;
          };
        },
        CHILD: function(type, what, _argument, first, last) {
          var simple = type.slice(0, 3) !== "nth", forward = type.slice(-4) !== "last", ofType = what === "of-type";
          return first === 1 && last === 0 ? (
            // Shortcut for :nth-*(n)
            function(elem2) {
              return !!elem2.parentNode;
            }
          ) : function(elem2, _context, xml) {
            var cache, outerCache, node, nodeIndex, start, dir2 = simple !== forward ? "nextSibling" : "previousSibling", parent = elem2.parentNode, name = ofType && elem2.nodeName.toLowerCase(), useCache = !xml && !ofType, diff = false;
            if (parent) {
              if (simple) {
                while (dir2) {
                  node = elem2;
                  while (node = node[dir2]) {
                    if (ofType ? nodeName(node, name) : node.nodeType === 1) {
                      return false;
                    }
                  }
                  start = dir2 = type === "only" && !start && "nextSibling";
                }
                return true;
              }
              start = [forward ? parent.firstChild : parent.lastChild];
              if (forward && useCache) {
                outerCache = parent[expando] || (parent[expando] = {});
                cache = outerCache[type] || [];
                nodeIndex = cache[0] === dirruns && cache[1];
                diff = nodeIndex && cache[2];
                node = nodeIndex && parent.childNodes[nodeIndex];
                while (node = ++nodeIndex && node && node[dir2] || // Fallback to seeking `elem` from the start
                (diff = nodeIndex = 0) || start.pop()) {
                  if (node.nodeType === 1 && ++diff && node === elem2) {
                    outerCache[type] = [dirruns, nodeIndex, diff];
                    break;
                  }
                }
              } else {
                if (useCache) {
                  outerCache = elem2[expando] || (elem2[expando] = {});
                  cache = outerCache[type] || [];
                  nodeIndex = cache[0] === dirruns && cache[1];
                  diff = nodeIndex;
                }
                if (diff === false) {
                  while (node = ++nodeIndex && node && node[dir2] || (diff = nodeIndex = 0) || start.pop()) {
                    if ((ofType ? nodeName(node, name) : node.nodeType === 1) && ++diff) {
                      if (useCache) {
                        outerCache = node[expando] || (node[expando] = {});
                        outerCache[type] = [dirruns, diff];
                      }
                      if (node === elem2) {
                        break;
                      }
                    }
                  }
                }
              }
              diff -= last;
              return diff === first || diff % first === 0 && diff / first >= 0;
            }
          };
        },
        PSEUDO: function(pseudo, argument) {
          var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || find.error("unsupported pseudo: " + pseudo);
          if (fn[expando]) {
            return fn(argument);
          }
          if (fn.length > 1) {
            args = [pseudo, pseudo, "", argument];
            return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches2) {
              var idx, matched = fn(seed, argument), i2 = matched.length;
              while (i2--) {
                idx = indexOf.call(seed, matched[i2]);
                seed[idx] = !(matches2[idx] = matched[i2]);
              }
            }) : function(elem2) {
              return fn(elem2, 0, args);
            };
          }
          return fn;
        }
      },
      pseudos: {
        // Potentially complex pseudos
        not: markFunction(function(selector) {
          var input = [], results = [], matcher = compile(selector.replace(rtrimCSS, "$1"));
          return matcher[expando] ? markFunction(function(seed, matches2, _context, xml) {
            var elem2, unmatched = matcher(seed, null, xml, []), i2 = seed.length;
            while (i2--) {
              if (elem2 = unmatched[i2]) {
                seed[i2] = !(matches2[i2] = elem2);
              }
            }
          }) : function(elem2, _context, xml) {
            input[0] = elem2;
            matcher(input, null, xml, results);
            input[0] = null;
            return !results.pop();
          };
        }),
        has: markFunction(function(selector) {
          return function(elem2) {
            return find(selector, elem2).length > 0;
          };
        }),
        contains: markFunction(function(text) {
          text = text.replace(runescape, funescape);
          return function(elem2) {
            return (elem2.textContent || jQuery2.text(elem2)).indexOf(text) > -1;
          };
        }),
        // "Whether an element is represented by a :lang() selector
        // is based solely on the element's language value
        // being equal to the identifier C,
        // or beginning with the identifier C immediately followed by "-".
        // The matching of C against the element's language value is performed case-insensitively.
        // The identifier C does not have to be a valid language name."
        // https://www.w3.org/TR/selectors/#lang-pseudo
        lang: markFunction(function(lang) {
          if (!ridentifier.test(lang || "")) {
            find.error("unsupported lang: " + lang);
          }
          lang = lang.replace(runescape, funescape).toLowerCase();
          return function(elem2) {
            var elemLang;
            do {
              if (elemLang = documentIsHTML ? elem2.lang : elem2.getAttribute("xml:lang") || elem2.getAttribute("lang")) {
                elemLang = elemLang.toLowerCase();
                return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
              }
            } while ((elem2 = elem2.parentNode) && elem2.nodeType === 1);
            return false;
          };
        }),
        // Miscellaneous
        target: function(elem2) {
          var hash = window2.location && window2.location.hash;
          return hash && hash.slice(1) === elem2.id;
        },
        root: function(elem2) {
          return elem2 === documentElement2;
        },
        focus: function(elem2) {
          return elem2 === safeActiveElement() && document3.hasFocus() && !!(elem2.type || elem2.href || ~elem2.tabIndex);
        },
        // Boolean properties
        enabled: createDisabledPseudo(false),
        disabled: createDisabledPseudo(true),
        checked: function(elem2) {
          return nodeName(elem2, "input") && !!elem2.checked || nodeName(elem2, "option") && !!elem2.selected;
        },
        selected: function(elem2) {
          if (elem2.parentNode) {
            elem2.parentNode.selectedIndex;
          }
          return elem2.selected === true;
        },
        // Contents
        empty: function(elem2) {
          for (elem2 = elem2.firstChild; elem2; elem2 = elem2.nextSibling) {
            if (elem2.nodeType < 6) {
              return false;
            }
          }
          return true;
        },
        parent: function(elem2) {
          return !Expr.pseudos.empty(elem2);
        },
        // Element/input types
        header: function(elem2) {
          return rheader.test(elem2.nodeName);
        },
        input: function(elem2) {
          return rinputs.test(elem2.nodeName);
        },
        button: function(elem2) {
          return nodeName(elem2, "input") && elem2.type === "button" || nodeName(elem2, "button");
        },
        text: function(elem2) {
          var attr;
          return nodeName(elem2, "input") && elem2.type === "text" && // Support: IE <10 only
          // New HTML5 attribute values (e.g., "search") appear
          // with elem.type === "text"
          ((attr = elem2.getAttribute("type")) == null || attr.toLowerCase() === "text");
        },
        // Position-in-collection
        first: createPositionalPseudo(function() {
          return [0];
        }),
        last: createPositionalPseudo(function(_matchIndexes, length) {
          return [length - 1];
        }),
        eq: createPositionalPseudo(function(_matchIndexes, length, argument) {
          return [argument < 0 ? argument + length : argument];
        }),
        even: createPositionalPseudo(function(matchIndexes, length) {
          var i2 = 0;
          for (; i2 < length; i2 += 2) {
            matchIndexes.push(i2);
          }
          return matchIndexes;
        }),
        odd: createPositionalPseudo(function(matchIndexes, length) {
          var i2 = 1;
          for (; i2 < length; i2 += 2) {
            matchIndexes.push(i2);
          }
          return matchIndexes;
        }),
        lt: createPositionalPseudo(function(matchIndexes, length, argument) {
          var i2;
          if (argument < 0) {
            i2 = argument + length;
          } else if (argument > length) {
            i2 = length;
          } else {
            i2 = argument;
          }
          for (; --i2 >= 0; ) {
            matchIndexes.push(i2);
          }
          return matchIndexes;
        }),
        gt: createPositionalPseudo(function(matchIndexes, length, argument) {
          var i2 = argument < 0 ? argument + length : argument;
          for (; ++i2 < length; ) {
            matchIndexes.push(i2);
          }
          return matchIndexes;
        })
      }
    };
    Expr.pseudos.nth = Expr.pseudos.eq;
    for (i in { radio: true, checkbox: true, file: true, password: true, image: true }) {
      Expr.pseudos[i] = createInputPseudo(i);
    }
    for (i in { submit: true, reset: true }) {
      Expr.pseudos[i] = createButtonPseudo(i);
    }
    function setFilters() {
    }
    setFilters.prototype = Expr.filters = Expr.pseudos;
    Expr.setFilters = new setFilters();
    function tokenize(selector, parseOnly) {
      var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
      if (cached) {
        return parseOnly ? 0 : cached.slice(0);
      }
      soFar = selector;
      groups = [];
      preFilters = Expr.preFilter;
      while (soFar) {
        if (!matched || (match = rcomma.exec(soFar))) {
          if (match) {
            soFar = soFar.slice(match[0].length) || soFar;
          }
          groups.push(tokens = []);
        }
        matched = false;
        if (match = rleadingCombinator.exec(soFar)) {
          matched = match.shift();
          tokens.push({
            value: matched,
            // Cast descendant combinators to space
            type: match[0].replace(rtrimCSS, " ")
          });
          soFar = soFar.slice(matched.length);
        }
        for (type in Expr.filter) {
          if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
            matched = match.shift();
            tokens.push({
              value: matched,
              type,
              matches: match
            });
            soFar = soFar.slice(matched.length);
          }
        }
        if (!matched) {
          break;
        }
      }
      if (parseOnly) {
        return soFar.length;
      }
      return soFar ? find.error(selector) : (
        // Cache the tokens
        tokenCache(selector, groups).slice(0)
      );
    }
    function toSelector(tokens) {
      var i2 = 0, len = tokens.length, selector = "";
      for (; i2 < len; i2++) {
        selector += tokens[i2].value;
      }
      return selector;
    }
    function addCombinator(matcher, combinator, base) {
      var dir2 = combinator.dir, skip = combinator.next, key = skip || dir2, checkNonElements = base && key === "parentNode", doneName = done++;
      return combinator.first ? (
        // Check against closest ancestor/preceding element
        function(elem2, context, xml) {
          while (elem2 = elem2[dir2]) {
            if (elem2.nodeType === 1 || checkNonElements) {
              return matcher(elem2, context, xml);
            }
          }
          return false;
        }
      ) : (
        // Check against all ancestor/preceding elements
        function(elem2, context, xml) {
          var oldCache, outerCache, newCache = [dirruns, doneName];
          if (xml) {
            while (elem2 = elem2[dir2]) {
              if (elem2.nodeType === 1 || checkNonElements) {
                if (matcher(elem2, context, xml)) {
                  return true;
                }
              }
            }
          } else {
            while (elem2 = elem2[dir2]) {
              if (elem2.nodeType === 1 || checkNonElements) {
                outerCache = elem2[expando] || (elem2[expando] = {});
                if (skip && nodeName(elem2, skip)) {
                  elem2 = elem2[dir2] || elem2;
                } else if ((oldCache = outerCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                  return newCache[2] = oldCache[2];
                } else {
                  outerCache[key] = newCache;
                  if (newCache[2] = matcher(elem2, context, xml)) {
                    return true;
                  }
                }
              }
            }
          }
          return false;
        }
      );
    }
    function elementMatcher(matchers) {
      return matchers.length > 1 ? function(elem2, context, xml) {
        var i2 = matchers.length;
        while (i2--) {
          if (!matchers[i2](elem2, context, xml)) {
            return false;
          }
        }
        return true;
      } : matchers[0];
    }
    function multipleContexts(selector, contexts, results) {
      var i2 = 0, len = contexts.length;
      for (; i2 < len; i2++) {
        find(selector, contexts[i2], results);
      }
      return results;
    }
    function condense(unmatched, map, filter, context, xml) {
      var elem2, newUnmatched = [], i2 = 0, len = unmatched.length, mapped = map != null;
      for (; i2 < len; i2++) {
        if (elem2 = unmatched[i2]) {
          if (!filter || filter(elem2, context, xml)) {
            newUnmatched.push(elem2);
            if (mapped) {
              map.push(i2);
            }
          }
        }
      }
      return newUnmatched;
    }
    function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
      if (postFilter && !postFilter[expando]) {
        postFilter = setMatcher(postFilter);
      }
      if (postFinder && !postFinder[expando]) {
        postFinder = setMatcher(postFinder, postSelector);
      }
      return markFunction(function(seed, results, context, xml) {
        var temp, i2, elem2, matcherOut, preMap = [], postMap = [], preexisting = results.length, elems = seed || multipleContexts(
          selector || "*",
          context.nodeType ? [context] : context,
          []
        ), matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems;
        if (matcher) {
          matcherOut = postFinder || (seed ? preFilter : preexisting || postFilter) ? (
            // ...intermediate processing is necessary
            []
          ) : (
            // ...otherwise use results directly
            results
          );
          matcher(matcherIn, matcherOut, context, xml);
        } else {
          matcherOut = matcherIn;
        }
        if (postFilter) {
          temp = condense(matcherOut, postMap);
          postFilter(temp, [], context, xml);
          i2 = temp.length;
          while (i2--) {
            if (elem2 = temp[i2]) {
              matcherOut[postMap[i2]] = !(matcherIn[postMap[i2]] = elem2);
            }
          }
        }
        if (seed) {
          if (postFinder || preFilter) {
            if (postFinder) {
              temp = [];
              i2 = matcherOut.length;
              while (i2--) {
                if (elem2 = matcherOut[i2]) {
                  temp.push(matcherIn[i2] = elem2);
                }
              }
              postFinder(null, matcherOut = [], temp, xml);
            }
            i2 = matcherOut.length;
            while (i2--) {
              if ((elem2 = matcherOut[i2]) && (temp = postFinder ? indexOf.call(seed, elem2) : preMap[i2]) > -1) {
                seed[temp] = !(results[temp] = elem2);
              }
            }
          }
        } else {
          matcherOut = condense(
            matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut
          );
          if (postFinder) {
            postFinder(null, results, matcherOut, xml);
          } else {
            push2.apply(results, matcherOut);
          }
        }
      });
    }
    function matcherFromTokens(tokens) {
      var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i2 = leadingRelative ? 1 : 0, matchContext = addCombinator(function(elem2) {
        return elem2 === checkContext;
      }, implicitRelative, true), matchAnyContext = addCombinator(function(elem2) {
        return indexOf.call(checkContext, elem2) > -1;
      }, implicitRelative, true), matchers = [function(elem2, context, xml) {
        var ret = !leadingRelative && (xml || context != outermostContext) || ((checkContext = context).nodeType ? matchContext(elem2, context, xml) : matchAnyContext(elem2, context, xml));
        checkContext = null;
        return ret;
      }];
      for (; i2 < len; i2++) {
        if (matcher = Expr.relative[tokens[i2].type]) {
          matchers = [addCombinator(elementMatcher(matchers), matcher)];
        } else {
          matcher = Expr.filter[tokens[i2].type].apply(null, tokens[i2].matches);
          if (matcher[expando]) {
            j = ++i2;
            for (; j < len; j++) {
              if (Expr.relative[tokens[j].type]) {
                break;
              }
            }
            return setMatcher(
              i2 > 1 && elementMatcher(matchers),
              i2 > 1 && toSelector(
                // If the preceding token was a descendant combinator, insert an implicit any-element `*`
                tokens.slice(0, i2 - 1).concat({ value: tokens[i2 - 2].type === " " ? "*" : "" })
              ).replace(rtrimCSS, "$1"),
              matcher,
              i2 < j && matcherFromTokens(tokens.slice(i2, j)),
              j < len && matcherFromTokens(tokens = tokens.slice(j)),
              j < len && toSelector(tokens)
            );
          }
          matchers.push(matcher);
        }
      }
      return elementMatcher(matchers);
    }
    function matcherFromGroupMatchers(elementMatchers, setMatchers) {
      var bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function(seed, context, xml, results, outermost) {
        var elem2, j, matcher, matchedCount = 0, i2 = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, elems = seed || byElement && Expr.find.TAG("*", outermost), dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1, len = elems.length;
        if (outermost) {
          outermostContext = context == document3 || context || outermost;
        }
        for (; i2 !== len && (elem2 = elems[i2]) != null; i2++) {
          if (byElement && elem2) {
            j = 0;
            if (!context && elem2.ownerDocument != document3) {
              setDocument(elem2);
              xml = !documentIsHTML;
            }
            while (matcher = elementMatchers[j++]) {
              if (matcher(elem2, context || document3, xml)) {
                push2.call(results, elem2);
                break;
              }
            }
            if (outermost) {
              dirruns = dirrunsUnique;
            }
          }
          if (bySet) {
            if (elem2 = !matcher && elem2) {
              matchedCount--;
            }
            if (seed) {
              unmatched.push(elem2);
            }
          }
        }
        matchedCount += i2;
        if (bySet && i2 !== matchedCount) {
          j = 0;
          while (matcher = setMatchers[j++]) {
            matcher(unmatched, setMatched, context, xml);
          }
          if (seed) {
            if (matchedCount > 0) {
              while (i2--) {
                if (!(unmatched[i2] || setMatched[i2])) {
                  setMatched[i2] = pop.call(results);
                }
              }
            }
            setMatched = condense(setMatched);
          }
          push2.apply(results, setMatched);
          if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
            jQuery2.uniqueSort(results);
          }
        }
        if (outermost) {
          dirruns = dirrunsUnique;
          outermostContext = contextBackup;
        }
        return unmatched;
      };
      return bySet ? markFunction(superMatcher) : superMatcher;
    }
    function compile(selector, match) {
      var i2, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
      if (!cached) {
        if (!match) {
          match = tokenize(selector);
        }
        i2 = match.length;
        while (i2--) {
          cached = matcherFromTokens(match[i2]);
          if (cached[expando]) {
            setMatchers.push(cached);
          } else {
            elementMatchers.push(cached);
          }
        }
        cached = compilerCache(
          selector,
          matcherFromGroupMatchers(elementMatchers, setMatchers)
        );
        cached.selector = selector;
      }
      return cached;
    }
    function select(selector, context, results, seed) {
      var i2, tokens, token, type, find2, compiled = typeof selector === "function" && selector, match = !seed && tokenize(selector = compiled.selector || selector);
      results = results || [];
      if (match.length === 1) {
        tokens = match[0] = match[0].slice(0);
        if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
          context = (Expr.find.ID(
            token.matches[0].replace(runescape, funescape),
            context
          ) || [])[0];
          if (!context) {
            return results;
          } else if (compiled) {
            context = context.parentNode;
          }
          selector = selector.slice(tokens.shift().value.length);
        }
        i2 = matchExpr.needsContext.test(selector) ? 0 : tokens.length;
        while (i2--) {
          token = tokens[i2];
          if (Expr.relative[type = token.type]) {
            break;
          }
          if (find2 = Expr.find[type]) {
            if (seed = find2(
              token.matches[0].replace(runescape, funescape),
              rsibling.test(tokens[0].type) && testContext(context.parentNode) || context
            )) {
              tokens.splice(i2, 1);
              selector = seed.length && toSelector(tokens);
              if (!selector) {
                push2.apply(results, seed);
                return results;
              }
              break;
            }
          }
        }
      }
      (compiled || compile(selector, match))(
        seed,
        context,
        !documentIsHTML,
        results,
        !context || rsibling.test(selector) && testContext(context.parentNode) || context
      );
      return results;
    }
    support.sortStable = expando.split("").sort(sortOrder).join("") === expando;
    setDocument();
    support.sortDetached = assert(function(el) {
      return el.compareDocumentPosition(document3.createElement("fieldset")) & 1;
    });
    jQuery2.find = find;
    jQuery2.expr[":"] = jQuery2.expr.pseudos;
    jQuery2.unique = jQuery2.uniqueSort;
    find.compile = compile;
    find.select = select;
    find.setDocument = setDocument;
    find.tokenize = tokenize;
    find.escape = jQuery2.escapeSelector;
    find.getText = jQuery2.text;
    find.isXML = jQuery2.isXMLDoc;
    find.selectors = jQuery2.expr;
    find.support = jQuery2.support;
    find.uniqueSort = jQuery2.uniqueSort;
  })();
  var dir = function(elem2, dir2, until) {
    var matched = [], truncate = until !== void 0;
    while ((elem2 = elem2[dir2]) && elem2.nodeType !== 9) {
      if (elem2.nodeType === 1) {
        if (truncate && jQuery2(elem2).is(until)) {
          break;
        }
        matched.push(elem2);
      }
    }
    return matched;
  };
  var siblings = function(n, elem2) {
    var matched = [];
    for (; n; n = n.nextSibling) {
      if (n.nodeType === 1 && n !== elem2) {
        matched.push(n);
      }
    }
    return matched;
  };
  var rneedsContext = jQuery2.expr.match.needsContext;
  var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function winnow(elements, qualifier, not) {
    if (isFunction(qualifier)) {
      return jQuery2.grep(elements, function(elem2, i) {
        return !!qualifier.call(elem2, i, elem2) !== not;
      });
    }
    if (qualifier.nodeType) {
      return jQuery2.grep(elements, function(elem2) {
        return elem2 === qualifier !== not;
      });
    }
    if (typeof qualifier !== "string") {
      return jQuery2.grep(elements, function(elem2) {
        return indexOf.call(qualifier, elem2) > -1 !== not;
      });
    }
    return jQuery2.filter(qualifier, elements, not);
  }
  jQuery2.filter = function(expr, elems, not) {
    var elem2 = elems[0];
    if (not) {
      expr = ":not(" + expr + ")";
    }
    if (elems.length === 1 && elem2.nodeType === 1) {
      return jQuery2.find.matchesSelector(elem2, expr) ? [elem2] : [];
    }
    return jQuery2.find.matches(expr, jQuery2.grep(elems, function(elem3) {
      return elem3.nodeType === 1;
    }));
  };
  jQuery2.fn.extend({
    find: function(selector) {
      var i, ret, len = this.length, self = this;
      if (typeof selector !== "string") {
        return this.pushStack(jQuery2(selector).filter(function() {
          for (i = 0; i < len; i++) {
            if (jQuery2.contains(self[i], this)) {
              return true;
            }
          }
        }));
      }
      ret = this.pushStack([]);
      for (i = 0; i < len; i++) {
        jQuery2.find(selector, self[i], ret);
      }
      return len > 1 ? jQuery2.uniqueSort(ret) : ret;
    },
    filter: function(selector) {
      return this.pushStack(winnow(this, selector || [], false));
    },
    not: function(selector) {
      return this.pushStack(winnow(this, selector || [], true));
    },
    is: function(selector) {
      return !!winnow(
        this,
        // If this is a positional/relative selector, check membership in the returned set
        // so $("p:first").is("p:last") won't return true for a doc with two "p".
        typeof selector === "string" && rneedsContext.test(selector) ? jQuery2(selector) : selector || [],
        false
      ).length;
    }
  });
  var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, init2 = jQuery2.fn.init = function(selector, context, root) {
    var match, elem2;
    if (!selector) {
      return this;
    }
    root = root || rootjQuery;
    if (typeof selector === "string") {
      if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
        match = [null, selector, null];
      } else {
        match = rquickExpr.exec(selector);
      }
      if (match && (match[1] || !context)) {
        if (match[1]) {
          context = context instanceof jQuery2 ? context[0] : context;
          jQuery2.merge(this, jQuery2.parseHTML(
            match[1],
            context && context.nodeType ? context.ownerDocument || context : document2,
            true
          ));
          if (rsingleTag.test(match[1]) && jQuery2.isPlainObject(context)) {
            for (match in context) {
              if (isFunction(this[match])) {
                this[match](context[match]);
              } else {
                this.attr(match, context[match]);
              }
            }
          }
          return this;
        } else {
          elem2 = document2.getElementById(match[2]);
          if (elem2) {
            this[0] = elem2;
            this.length = 1;
          }
          return this;
        }
      } else if (!context || context.jquery) {
        return (context || root).find(selector);
      } else {
        return this.constructor(context).find(selector);
      }
    } else if (selector.nodeType) {
      this[0] = selector;
      this.length = 1;
      return this;
    } else if (isFunction(selector)) {
      return root.ready !== void 0 ? root.ready(selector) : (
        // Execute immediately if ready is not present
        selector(jQuery2)
      );
    }
    return jQuery2.makeArray(selector, this);
  };
  init2.prototype = jQuery2.fn;
  rootjQuery = jQuery2(document2);
  var rparentsprev = /^(?:parents|prev(?:Until|All))/, guaranteedUnique = {
    children: true,
    contents: true,
    next: true,
    prev: true
  };
  jQuery2.fn.extend({
    has: function(target) {
      var targets = jQuery2(target, this), l = targets.length;
      return this.filter(function() {
        var i = 0;
        for (; i < l; i++) {
          if (jQuery2.contains(this, targets[i])) {
            return true;
          }
        }
      });
    },
    closest: function(selectors, context) {
      var cur, i = 0, l = this.length, matched = [], targets = typeof selectors !== "string" && jQuery2(selectors);
      if (!rneedsContext.test(selectors)) {
        for (; i < l; i++) {
          for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
            if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : (
              // Don't pass non-elements to jQuery#find
              cur.nodeType === 1 && jQuery2.find.matchesSelector(cur, selectors)
            ))) {
              matched.push(cur);
              break;
            }
          }
        }
      }
      return this.pushStack(matched.length > 1 ? jQuery2.uniqueSort(matched) : matched);
    },
    // Determine the position of an element within the set
    index: function(elem2) {
      if (!elem2) {
        return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
      }
      if (typeof elem2 === "string") {
        return indexOf.call(jQuery2(elem2), this[0]);
      }
      return indexOf.call(
        this,
        // If it receives a jQuery object, the first element is used
        elem2.jquery ? elem2[0] : elem2
      );
    },
    add: function(selector, context) {
      return this.pushStack(
        jQuery2.uniqueSort(
          jQuery2.merge(this.get(), jQuery2(selector, context))
        )
      );
    },
    addBack: function(selector) {
      return this.add(
        selector == null ? this.prevObject : this.prevObject.filter(selector)
      );
    }
  });
  function sibling(cur, dir2) {
    while ((cur = cur[dir2]) && cur.nodeType !== 1) {
    }
    return cur;
  }
  jQuery2.each({
    parent: function(elem2) {
      var parent = elem2.parentNode;
      return parent && parent.nodeType !== 11 ? parent : null;
    },
    parents: function(elem2) {
      return dir(elem2, "parentNode");
    },
    parentsUntil: function(elem2, _i, until) {
      return dir(elem2, "parentNode", until);
    },
    next: function(elem2) {
      return sibling(elem2, "nextSibling");
    },
    prev: function(elem2) {
      return sibling(elem2, "previousSibling");
    },
    nextAll: function(elem2) {
      return dir(elem2, "nextSibling");
    },
    prevAll: function(elem2) {
      return dir(elem2, "previousSibling");
    },
    nextUntil: function(elem2, _i, until) {
      return dir(elem2, "nextSibling", until);
    },
    prevUntil: function(elem2, _i, until) {
      return dir(elem2, "previousSibling", until);
    },
    siblings: function(elem2) {
      return siblings((elem2.parentNode || {}).firstChild, elem2);
    },
    children: function(elem2) {
      return siblings(elem2.firstChild);
    },
    contents: function(elem2) {
      if (elem2.contentDocument != null && // Support: IE 11+
      // <object> elements with no `data` attribute has an object
      // `contentDocument` with a `null` prototype.
      getProto(elem2.contentDocument)) {
        return elem2.contentDocument;
      }
      if (nodeName(elem2, "template")) {
        elem2 = elem2.content || elem2;
      }
      return jQuery2.merge([], elem2.childNodes);
    }
  }, function(name, fn) {
    jQuery2.fn[name] = function(until, selector) {
      var matched = jQuery2.map(this, fn, until);
      if (name.slice(-5) !== "Until") {
        selector = until;
      }
      if (selector && typeof selector === "string") {
        matched = jQuery2.filter(selector, matched);
      }
      if (this.length > 1) {
        if (!guaranteedUnique[name]) {
          jQuery2.uniqueSort(matched);
        }
        if (rparentsprev.test(name)) {
          matched.reverse();
        }
      }
      return this.pushStack(matched);
    };
  });
  var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;
  function createOptions(options) {
    var object = {};
    jQuery2.each(options.match(rnothtmlwhite) || [], function(_, flag) {
      object[flag] = true;
    });
    return object;
  }
  jQuery2.Callbacks = function(options) {
    options = typeof options === "string" ? createOptions(options) : jQuery2.extend({}, options);
    var firing, memory, fired, locked, list = [], queue = [], firingIndex = -1, fire = function() {
      locked = locked || options.once;
      fired = firing = true;
      for (; queue.length; firingIndex = -1) {
        memory = queue.shift();
        while (++firingIndex < list.length) {
          if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
            firingIndex = list.length;
            memory = false;
          }
        }
      }
      if (!options.memory) {
        memory = false;
      }
      firing = false;
      if (locked) {
        if (memory) {
          list = [];
        } else {
          list = "";
        }
      }
    }, self = {
      // Add a callback or a collection of callbacks to the list
      add: function() {
        if (list) {
          if (memory && !firing) {
            firingIndex = list.length - 1;
            queue.push(memory);
          }
          (function add(args) {
            jQuery2.each(args, function(_, arg) {
              if (isFunction(arg)) {
                if (!options.unique || !self.has(arg)) {
                  list.push(arg);
                }
              } else if (arg && arg.length && toType(arg) !== "string") {
                add(arg);
              }
            });
          })(arguments);
          if (memory && !firing) {
            fire();
          }
        }
        return this;
      },
      // Remove a callback from the list
      remove: function() {
        jQuery2.each(arguments, function(_, arg) {
          var index;
          while ((index = jQuery2.inArray(arg, list, index)) > -1) {
            list.splice(index, 1);
            if (index <= firingIndex) {
              firingIndex--;
            }
          }
        });
        return this;
      },
      // Check if a given callback is in the list.
      // If no argument is given, return whether or not list has callbacks attached.
      has: function(fn) {
        return fn ? jQuery2.inArray(fn, list) > -1 : list.length > 0;
      },
      // Remove all callbacks from the list
      empty: function() {
        if (list) {
          list = [];
        }
        return this;
      },
      // Disable .fire and .add
      // Abort any current/pending executions
      // Clear all callbacks and values
      disable: function() {
        locked = queue = [];
        list = memory = "";
        return this;
      },
      disabled: function() {
        return !list;
      },
      // Disable .fire
      // Also disable .add unless we have memory (since it would have no effect)
      // Abort any pending executions
      lock: function() {
        locked = queue = [];
        if (!memory && !firing) {
          list = memory = "";
        }
        return this;
      },
      locked: function() {
        return !!locked;
      },
      // Call all callbacks with the given context and arguments
      fireWith: function(context, args) {
        if (!locked) {
          args = args || [];
          args = [context, args.slice ? args.slice() : args];
          queue.push(args);
          if (!firing) {
            fire();
          }
        }
        return this;
      },
      // Call all the callbacks with the given arguments
      fire: function() {
        self.fireWith(this, arguments);
        return this;
      },
      // To know if the callbacks have already been called at least once
      fired: function() {
        return !!fired;
      }
    };
    return self;
  };
  function Identity(v) {
    return v;
  }
  function Thrower(ex) {
    throw ex;
  }
  function adoptValue(value, resolve, reject, noValue) {
    var method;
    try {
      if (value && isFunction(method = value.promise)) {
        method.call(value).done(resolve).fail(reject);
      } else if (value && isFunction(method = value.then)) {
        method.call(value, resolve, reject);
      } else {
        resolve.apply(void 0, [value].slice(noValue));
      }
    } catch (value2) {
      reject.apply(void 0, [value2]);
    }
  }
  jQuery2.extend({
    Deferred: function(func) {
      var tuples = [
        // action, add listener, callbacks,
        // ... .then handlers, argument index, [final state]
        [
          "notify",
          "progress",
          jQuery2.Callbacks("memory"),
          jQuery2.Callbacks("memory"),
          2
        ],
        [
          "resolve",
          "done",
          jQuery2.Callbacks("once memory"),
          jQuery2.Callbacks("once memory"),
          0,
          "resolved"
        ],
        [
          "reject",
          "fail",
          jQuery2.Callbacks("once memory"),
          jQuery2.Callbacks("once memory"),
          1,
          "rejected"
        ]
      ], state = "pending", promise = {
        state: function() {
          return state;
        },
        always: function() {
          deferred.done(arguments).fail(arguments);
          return this;
        },
        "catch": function(fn) {
          return promise.then(null, fn);
        },
        // Keep pipe for back-compat
        pipe: function() {
          var fns = arguments;
          return jQuery2.Deferred(function(newDefer) {
            jQuery2.each(tuples, function(_i, tuple) {
              var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]];
              deferred[tuple[1]](function() {
                var returned = fn && fn.apply(this, arguments);
                if (returned && isFunction(returned.promise)) {
                  returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                } else {
                  newDefer[tuple[0] + "With"](
                    this,
                    fn ? [returned] : arguments
                  );
                }
              });
            });
            fns = null;
          }).promise();
        },
        then: function(onFulfilled, onRejected, onProgress) {
          var maxDepth = 0;
          function resolve(depth, deferred2, handler, special) {
            return function() {
              var that = this, args = arguments, mightThrow = function() {
                var returned, then;
                if (depth < maxDepth) {
                  return;
                }
                returned = handler.apply(that, args);
                if (returned === deferred2.promise()) {
                  throw new TypeError("Thenable self-resolution");
                }
                then = returned && // Support: Promises/A+ section 2.3.4
                // https://promisesaplus.com/#point-64
                // Only check objects and functions for thenability
                (typeof returned === "object" || typeof returned === "function") && returned.then;
                if (isFunction(then)) {
                  if (special) {
                    then.call(
                      returned,
                      resolve(maxDepth, deferred2, Identity, special),
                      resolve(maxDepth, deferred2, Thrower, special)
                    );
                  } else {
                    maxDepth++;
                    then.call(
                      returned,
                      resolve(maxDepth, deferred2, Identity, special),
                      resolve(maxDepth, deferred2, Thrower, special),
                      resolve(
                        maxDepth,
                        deferred2,
                        Identity,
                        deferred2.notifyWith
                      )
                    );
                  }
                } else {
                  if (handler !== Identity) {
                    that = void 0;
                    args = [returned];
                  }
                  (special || deferred2.resolveWith)(that, args);
                }
              }, process = special ? mightThrow : function() {
                try {
                  mightThrow();
                } catch (e2) {
                  if (jQuery2.Deferred.exceptionHook) {
                    jQuery2.Deferred.exceptionHook(
                      e2,
                      process.error
                    );
                  }
                  if (depth + 1 >= maxDepth) {
                    if (handler !== Thrower) {
                      that = void 0;
                      args = [e2];
                    }
                    deferred2.rejectWith(that, args);
                  }
                }
              };
              if (depth) {
                process();
              } else {
                if (jQuery2.Deferred.getErrorHook) {
                  process.error = jQuery2.Deferred.getErrorHook();
                } else if (jQuery2.Deferred.getStackHook) {
                  process.error = jQuery2.Deferred.getStackHook();
                }
                window2.setTimeout(process);
              }
            };
          }
          return jQuery2.Deferred(function(newDefer) {
            tuples[0][3].add(
              resolve(
                0,
                newDefer,
                isFunction(onProgress) ? onProgress : Identity,
                newDefer.notifyWith
              )
            );
            tuples[1][3].add(
              resolve(
                0,
                newDefer,
                isFunction(onFulfilled) ? onFulfilled : Identity
              )
            );
            tuples[2][3].add(
              resolve(
                0,
                newDefer,
                isFunction(onRejected) ? onRejected : Thrower
              )
            );
          }).promise();
        },
        // Get a promise for this deferred
        // If obj is provided, the promise aspect is added to the object
        promise: function(obj) {
          return obj != null ? jQuery2.extend(obj, promise) : promise;
        }
      }, deferred = {};
      jQuery2.each(tuples, function(i, tuple) {
        var list = tuple[2], stateString = tuple[5];
        promise[tuple[1]] = list.add;
        if (stateString) {
          list.add(
            function() {
              state = stateString;
            },
            // rejected_callbacks.disable
            // fulfilled_callbacks.disable
            tuples[3 - i][2].disable,
            // rejected_handlers.disable
            // fulfilled_handlers.disable
            tuples[3 - i][3].disable,
            // progress_callbacks.lock
            tuples[0][2].lock,
            // progress_handlers.lock
            tuples[0][3].lock
          );
        }
        list.add(tuple[3].fire);
        deferred[tuple[0]] = function() {
          deferred[tuple[0] + "With"](this === deferred ? void 0 : this, arguments);
          return this;
        };
        deferred[tuple[0] + "With"] = list.fireWith;
      });
      promise.promise(deferred);
      if (func) {
        func.call(deferred, deferred);
      }
      return deferred;
    },
    // Deferred helper
    when: function(singleValue) {
      var remaining = arguments.length, i = remaining, resolveContexts = Array(i), resolveValues = slice.call(arguments), primary = jQuery2.Deferred(), updateFunc = function(i2) {
        return function(value) {
          resolveContexts[i2] = this;
          resolveValues[i2] = arguments.length > 1 ? slice.call(arguments) : value;
          if (!--remaining) {
            primary.resolveWith(resolveContexts, resolveValues);
          }
        };
      };
      if (remaining <= 1) {
        adoptValue(
          singleValue,
          primary.done(updateFunc(i)).resolve,
          primary.reject,
          !remaining
        );
        if (primary.state() === "pending" || isFunction(resolveValues[i] && resolveValues[i].then)) {
          return primary.then();
        }
      }
      while (i--) {
        adoptValue(resolveValues[i], updateFunc(i), primary.reject);
      }
      return primary.promise();
    }
  });
  var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  jQuery2.Deferred.exceptionHook = function(error, asyncError) {
    if (window2.console && window2.console.warn && error && rerrorNames.test(error.name)) {
      window2.console.warn(
        "jQuery.Deferred exception: " + error.message,
        error.stack,
        asyncError
      );
    }
  };
  jQuery2.readyException = function(error) {
    window2.setTimeout(function() {
      throw error;
    });
  };
  var readyList = jQuery2.Deferred();
  jQuery2.fn.ready = function(fn) {
    readyList.then(fn).catch(function(error) {
      jQuery2.readyException(error);
    });
    return this;
  };
  jQuery2.extend({
    // Is the DOM ready to be used? Set to true once it occurs.
    isReady: false,
    // A counter to track how many items to wait for before
    // the ready event fires. See trac-6781
    readyWait: 1,
    // Handle when the DOM is ready
    ready: function(wait) {
      if (wait === true ? --jQuery2.readyWait : jQuery2.isReady) {
        return;
      }
      jQuery2.isReady = true;
      if (wait !== true && --jQuery2.readyWait > 0) {
        return;
      }
      readyList.resolveWith(document2, [jQuery2]);
    }
  });
  jQuery2.ready.then = readyList.then;
  function completed() {
    document2.removeEventListener("DOMContentLoaded", completed);
    window2.removeEventListener("load", completed);
    jQuery2.ready();
  }
  if (document2.readyState === "complete" || document2.readyState !== "loading" && !document2.documentElement.doScroll) {
    window2.setTimeout(jQuery2.ready);
  } else {
    document2.addEventListener("DOMContentLoaded", completed);
    window2.addEventListener("load", completed);
  }
  var access = function(elems, fn, key, value, chainable, emptyGet, raw) {
    var i = 0, len = elems.length, bulk = key == null;
    if (toType(key) === "object") {
      chainable = true;
      for (i in key) {
        access(elems, fn, i, key[i], true, emptyGet, raw);
      }
    } else if (value !== void 0) {
      chainable = true;
      if (!isFunction(value)) {
        raw = true;
      }
      if (bulk) {
        if (raw) {
          fn.call(elems, value);
          fn = null;
        } else {
          bulk = fn;
          fn = function(elem2, _key, value2) {
            return bulk.call(jQuery2(elem2), value2);
          };
        }
      }
      if (fn) {
        for (; i < len; i++) {
          fn(
            elems[i],
            key,
            raw ? value : value.call(elems[i], i, fn(elems[i], key))
          );
        }
      }
    }
    if (chainable) {
      return elems;
    }
    if (bulk) {
      return fn.call(elems);
    }
    return len ? fn(elems[0], key) : emptyGet;
  };
  var rmsPrefix = /^-ms-/, rdashAlpha = /-([a-z])/g;
  function fcamelCase(_all, letter) {
    return letter.toUpperCase();
  }
  function camelCase(string) {
    return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
  }
  var acceptData = function(owner) {
    return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
  };
  function Data() {
    this.expando = jQuery2.expando + Data.uid++;
  }
  Data.uid = 1;
  Data.prototype = {
    cache: function(owner) {
      var value = owner[this.expando];
      if (!value) {
        value = {};
        if (acceptData(owner)) {
          if (owner.nodeType) {
            owner[this.expando] = value;
          } else {
            Object.defineProperty(owner, this.expando, {
              value,
              configurable: true
            });
          }
        }
      }
      return value;
    },
    set: function(owner, data, value) {
      var prop, cache = this.cache(owner);
      if (typeof data === "string") {
        cache[camelCase(data)] = value;
      } else {
        for (prop in data) {
          cache[camelCase(prop)] = data[prop];
        }
      }
      return cache;
    },
    get: function(owner, key) {
      return key === void 0 ? this.cache(owner) : (
        // Always use camelCase key (gh-2257)
        owner[this.expando] && owner[this.expando][camelCase(key)]
      );
    },
    access: function(owner, key, value) {
      if (key === void 0 || key && typeof key === "string" && value === void 0) {
        return this.get(owner, key);
      }
      this.set(owner, key, value);
      return value !== void 0 ? value : key;
    },
    remove: function(owner, key) {
      var i, cache = owner[this.expando];
      if (cache === void 0) {
        return;
      }
      if (key !== void 0) {
        if (Array.isArray(key)) {
          key = key.map(camelCase);
        } else {
          key = camelCase(key);
          key = key in cache ? [key] : key.match(rnothtmlwhite) || [];
        }
        i = key.length;
        while (i--) {
          delete cache[key[i]];
        }
      }
      if (key === void 0 || jQuery2.isEmptyObject(cache)) {
        if (owner.nodeType) {
          owner[this.expando] = void 0;
        } else {
          delete owner[this.expando];
        }
      }
    },
    hasData: function(owner) {
      var cache = owner[this.expando];
      return cache !== void 0 && !jQuery2.isEmptyObject(cache);
    }
  };
  var dataPriv = new Data();
  var dataUser = new Data();
  var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, rmultiDash = /[A-Z]/g;
  function getData(data) {
    if (data === "true") {
      return true;
    }
    if (data === "false") {
      return false;
    }
    if (data === "null") {
      return null;
    }
    if (data === +data + "") {
      return +data;
    }
    if (rbrace.test(data)) {
      return JSON.parse(data);
    }
    return data;
  }
  function dataAttr(elem2, key, data) {
    var name;
    if (data === void 0 && elem2.nodeType === 1) {
      name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
      data = elem2.getAttribute(name);
      if (typeof data === "string") {
        try {
          data = getData(data);
        } catch (e2) {
        }
        dataUser.set(elem2, key, data);
      } else {
        data = void 0;
      }
    }
    return data;
  }
  jQuery2.extend({
    hasData: function(elem2) {
      return dataUser.hasData(elem2) || dataPriv.hasData(elem2);
    },
    data: function(elem2, name, data) {
      return dataUser.access(elem2, name, data);
    },
    removeData: function(elem2, name) {
      dataUser.remove(elem2, name);
    },
    // TODO: Now that all calls to _data and _removeData have been replaced
    // with direct calls to dataPriv methods, these can be deprecated.
    _data: function(elem2, name, data) {
      return dataPriv.access(elem2, name, data);
    },
    _removeData: function(elem2, name) {
      dataPriv.remove(elem2, name);
    }
  });
  jQuery2.fn.extend({
    data: function(key, value) {
      var i, name, data, elem2 = this[0], attrs = elem2 && elem2.attributes;
      if (key === void 0) {
        if (this.length) {
          data = dataUser.get(elem2);
          if (elem2.nodeType === 1 && !dataPriv.get(elem2, "hasDataAttrs")) {
            i = attrs.length;
            while (i--) {
              if (attrs[i]) {
                name = attrs[i].name;
                if (name.indexOf("data-") === 0) {
                  name = camelCase(name.slice(5));
                  dataAttr(elem2, name, data[name]);
                }
              }
            }
            dataPriv.set(elem2, "hasDataAttrs", true);
          }
        }
        return data;
      }
      if (typeof key === "object") {
        return this.each(function() {
          dataUser.set(this, key);
        });
      }
      return access(this, function(value2) {
        var data2;
        if (elem2 && value2 === void 0) {
          data2 = dataUser.get(elem2, key);
          if (data2 !== void 0) {
            return data2;
          }
          data2 = dataAttr(elem2, key);
          if (data2 !== void 0) {
            return data2;
          }
          return;
        }
        this.each(function() {
          dataUser.set(this, key, value2);
        });
      }, null, value, arguments.length > 1, null, true);
    },
    removeData: function(key) {
      return this.each(function() {
        dataUser.remove(this, key);
      });
    }
  });
  jQuery2.extend({
    queue: function(elem2, type, data) {
      var queue;
      if (elem2) {
        type = (type || "fx") + "queue";
        queue = dataPriv.get(elem2, type);
        if (data) {
          if (!queue || Array.isArray(data)) {
            queue = dataPriv.access(elem2, type, jQuery2.makeArray(data));
          } else {
            queue.push(data);
          }
        }
        return queue || [];
      }
    },
    dequeue: function(elem2, type) {
      type = type || "fx";
      var queue = jQuery2.queue(elem2, type), startLength = queue.length, fn = queue.shift(), hooks = jQuery2._queueHooks(elem2, type), next = function() {
        jQuery2.dequeue(elem2, type);
      };
      if (fn === "inprogress") {
        fn = queue.shift();
        startLength--;
      }
      if (fn) {
        if (type === "fx") {
          queue.unshift("inprogress");
        }
        delete hooks.stop;
        fn.call(elem2, next, hooks);
      }
      if (!startLength && hooks) {
        hooks.empty.fire();
      }
    },
    // Not public - generate a queueHooks object, or return the current one
    _queueHooks: function(elem2, type) {
      var key = type + "queueHooks";
      return dataPriv.get(elem2, key) || dataPriv.access(elem2, key, {
        empty: jQuery2.Callbacks("once memory").add(function() {
          dataPriv.remove(elem2, [type + "queue", key]);
        })
      });
    }
  });
  jQuery2.fn.extend({
    queue: function(type, data) {
      var setter = 2;
      if (typeof type !== "string") {
        data = type;
        type = "fx";
        setter--;
      }
      if (arguments.length < setter) {
        return jQuery2.queue(this[0], type);
      }
      return data === void 0 ? this : this.each(function() {
        var queue = jQuery2.queue(this, type, data);
        jQuery2._queueHooks(this, type);
        if (type === "fx" && queue[0] !== "inprogress") {
          jQuery2.dequeue(this, type);
        }
      });
    },
    dequeue: function(type) {
      return this.each(function() {
        jQuery2.dequeue(this, type);
      });
    },
    clearQueue: function(type) {
      return this.queue(type || "fx", []);
    },
    // Get a promise resolved when queues of a certain type
    // are emptied (fx is the type by default)
    promise: function(type, obj) {
      var tmp, count = 1, defer = jQuery2.Deferred(), elements = this, i = this.length, resolve = function() {
        if (!--count) {
          defer.resolveWith(elements, [elements]);
        }
      };
      if (typeof type !== "string") {
        obj = type;
        type = void 0;
      }
      type = type || "fx";
      while (i--) {
        tmp = dataPriv.get(elements[i], type + "queueHooks");
        if (tmp && tmp.empty) {
          count++;
          tmp.empty.add(resolve);
        }
      }
      resolve();
      return defer.promise(obj);
    }
  });
  var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
  var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
  var cssExpand = ["Top", "Right", "Bottom", "Left"];
  var documentElement = document2.documentElement;
  var isAttached = function(elem2) {
    return jQuery2.contains(elem2.ownerDocument, elem2);
  }, composed = { composed: true };
  if (documentElement.getRootNode) {
    isAttached = function(elem2) {
      return jQuery2.contains(elem2.ownerDocument, elem2) || elem2.getRootNode(composed) === elem2.ownerDocument;
    };
  }
  var isHiddenWithinTree = function(elem2, el) {
    elem2 = el || elem2;
    return elem2.style.display === "none" || elem2.style.display === "" && // Otherwise, check computed style
    // Support: Firefox <=43 - 45
    // Disconnected elements can have computed display: none, so first confirm that elem is
    // in the document.
    isAttached(elem2) && jQuery2.css(elem2, "display") === "none";
  };
  function adjustCSS(elem2, prop, valueParts, tween) {
    var adjusted, scale, maxIterations = 20, currentValue = tween ? function() {
      return tween.cur();
    } : function() {
      return jQuery2.css(elem2, prop, "");
    }, initial = currentValue(), unit = valueParts && valueParts[3] || (jQuery2.cssNumber[prop] ? "" : "px"), initialInUnit = elem2.nodeType && (jQuery2.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery2.css(elem2, prop));
    if (initialInUnit && initialInUnit[3] !== unit) {
      initial = initial / 2;
      unit = unit || initialInUnit[3];
      initialInUnit = +initial || 1;
      while (maxIterations--) {
        jQuery2.style(elem2, prop, initialInUnit + unit);
        if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {
          maxIterations = 0;
        }
        initialInUnit = initialInUnit / scale;
      }
      initialInUnit = initialInUnit * 2;
      jQuery2.style(elem2, prop, initialInUnit + unit);
      valueParts = valueParts || [];
    }
    if (valueParts) {
      initialInUnit = +initialInUnit || +initial || 0;
      adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
      if (tween) {
        tween.unit = unit;
        tween.start = initialInUnit;
        tween.end = adjusted;
      }
    }
    return adjusted;
  }
  var defaultDisplayMap = {};
  function getDefaultDisplay(elem2) {
    var temp, doc = elem2.ownerDocument, nodeName2 = elem2.nodeName, display = defaultDisplayMap[nodeName2];
    if (display) {
      return display;
    }
    temp = doc.body.appendChild(doc.createElement(nodeName2));
    display = jQuery2.css(temp, "display");
    temp.parentNode.removeChild(temp);
    if (display === "none") {
      display = "block";
    }
    defaultDisplayMap[nodeName2] = display;
    return display;
  }
  function showHide(elements, show) {
    var display, elem2, values = [], index = 0, length = elements.length;
    for (; index < length; index++) {
      elem2 = elements[index];
      if (!elem2.style) {
        continue;
      }
      display = elem2.style.display;
      if (show) {
        if (display === "none") {
          values[index] = dataPriv.get(elem2, "display") || null;
          if (!values[index]) {
            elem2.style.display = "";
          }
        }
        if (elem2.style.display === "" && isHiddenWithinTree(elem2)) {
          values[index] = getDefaultDisplay(elem2);
        }
      } else {
        if (display !== "none") {
          values[index] = "none";
          dataPriv.set(elem2, "display", display);
        }
      }
    }
    for (index = 0; index < length; index++) {
      if (values[index] != null) {
        elements[index].style.display = values[index];
      }
    }
    return elements;
  }
  jQuery2.fn.extend({
    show: function() {
      return showHide(this, true);
    },
    hide: function() {
      return showHide(this);
    },
    toggle: function(state) {
      if (typeof state === "boolean") {
        return state ? this.show() : this.hide();
      }
      return this.each(function() {
        if (isHiddenWithinTree(this)) {
          jQuery2(this).show();
        } else {
          jQuery2(this).hide();
        }
      });
    }
  });
  var rcheckableType = /^(?:checkbox|radio)$/i;
  var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
  var rscriptType = /^$|^module$|\/(?:java|ecma)script/i;
  (function() {
    var fragment = document2.createDocumentFragment(), div = fragment.appendChild(document2.createElement("div")), input = document2.createElement("input");
    input.setAttribute("type", "radio");
    input.setAttribute("checked", "checked");
    input.setAttribute("name", "t");
    div.appendChild(input);
    support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
    div.innerHTML = "<textarea>x</textarea>";
    support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
    div.innerHTML = "<option></option>";
    support.option = !!div.lastChild;
  })();
  var wrapMap = {
    // XHTML parsers do not magically insert elements in the
    // same way that tag soup parsers do. So we cannot shorten
    // this by omitting <tbody> or other required elements.
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };
  wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
  wrapMap.th = wrapMap.td;
  if (!support.option) {
    wrapMap.optgroup = wrapMap.option = [1, "<select multiple='multiple'>", "</select>"];
  }
  function getAll(context, tag) {
    var ret;
    if (typeof context.getElementsByTagName !== "undefined") {
      ret = context.getElementsByTagName(tag || "*");
    } else if (typeof context.querySelectorAll !== "undefined") {
      ret = context.querySelectorAll(tag || "*");
    } else {
      ret = [];
    }
    if (tag === void 0 || tag && nodeName(context, tag)) {
      return jQuery2.merge([context], ret);
    }
    return ret;
  }
  function setGlobalEval(elems, refElements) {
    var i = 0, l = elems.length;
    for (; i < l; i++) {
      dataPriv.set(
        elems[i],
        "globalEval",
        !refElements || dataPriv.get(refElements[i], "globalEval")
      );
    }
  }
  var rhtml = /<|&#?\w+;/;
  function buildFragment(elems, context, scripts, selection, ignored) {
    var elem2, tmp, tag, wrap, attached, j, fragment = context.createDocumentFragment(), nodes = [], i = 0, l = elems.length;
    for (; i < l; i++) {
      elem2 = elems[i];
      if (elem2 || elem2 === 0) {
        if (toType(elem2) === "object") {
          jQuery2.merge(nodes, elem2.nodeType ? [elem2] : elem2);
        } else if (!rhtml.test(elem2)) {
          nodes.push(context.createTextNode(elem2));
        } else {
          tmp = tmp || fragment.appendChild(context.createElement("div"));
          tag = (rtagName.exec(elem2) || ["", ""])[1].toLowerCase();
          wrap = wrapMap[tag] || wrapMap._default;
          tmp.innerHTML = wrap[1] + jQuery2.htmlPrefilter(elem2) + wrap[2];
          j = wrap[0];
          while (j--) {
            tmp = tmp.lastChild;
          }
          jQuery2.merge(nodes, tmp.childNodes);
          tmp = fragment.firstChild;
          tmp.textContent = "";
        }
      }
    }
    fragment.textContent = "";
    i = 0;
    while (elem2 = nodes[i++]) {
      if (selection && jQuery2.inArray(elem2, selection) > -1) {
        if (ignored) {
          ignored.push(elem2);
        }
        continue;
      }
      attached = isAttached(elem2);
      tmp = getAll(fragment.appendChild(elem2), "script");
      if (attached) {
        setGlobalEval(tmp);
      }
      if (scripts) {
        j = 0;
        while (elem2 = tmp[j++]) {
          if (rscriptType.test(elem2.type || "")) {
            scripts.push(elem2);
          }
        }
      }
    }
    return fragment;
  }
  var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
  function returnTrue() {
    return true;
  }
  function returnFalse() {
    return false;
  }
  function on(elem2, types, selector, data, fn, one) {
    var origFn, type;
    if (typeof types === "object") {
      if (typeof selector !== "string") {
        data = data || selector;
        selector = void 0;
      }
      for (type in types) {
        on(elem2, type, selector, data, types[type], one);
      }
      return elem2;
    }
    if (data == null && fn == null) {
      fn = selector;
      data = selector = void 0;
    } else if (fn == null) {
      if (typeof selector === "string") {
        fn = data;
        data = void 0;
      } else {
        fn = data;
        data = selector;
        selector = void 0;
      }
    }
    if (fn === false) {
      fn = returnFalse;
    } else if (!fn) {
      return elem2;
    }
    if (one === 1) {
      origFn = fn;
      fn = function(event2) {
        jQuery2().off(event2);
        return origFn.apply(this, arguments);
      };
      fn.guid = origFn.guid || (origFn.guid = jQuery2.guid++);
    }
    return elem2.each(function() {
      jQuery2.event.add(this, types, fn, data, selector);
    });
  }
  jQuery2.event = {
    global: {},
    add: function(elem2, types, handler, data, selector) {
      var handleObjIn, eventHandle, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.get(elem2);
      if (!acceptData(elem2)) {
        return;
      }
      if (handler.handler) {
        handleObjIn = handler;
        handler = handleObjIn.handler;
        selector = handleObjIn.selector;
      }
      if (selector) {
        jQuery2.find.matchesSelector(documentElement, selector);
      }
      if (!handler.guid) {
        handler.guid = jQuery2.guid++;
      }
      if (!(events = elemData.events)) {
        events = elemData.events = /* @__PURE__ */ Object.create(null);
      }
      if (!(eventHandle = elemData.handle)) {
        eventHandle = elemData.handle = function(e2) {
          return typeof jQuery2 !== "undefined" && jQuery2.event.triggered !== e2.type ? jQuery2.event.dispatch.apply(elem2, arguments) : void 0;
        };
      }
      types = (types || "").match(rnothtmlwhite) || [""];
      t = types.length;
      while (t--) {
        tmp = rtypenamespace.exec(types[t]) || [];
        type = origType = tmp[1];
        namespaces = (tmp[2] || "").split(".").sort();
        if (!type) {
          continue;
        }
        special = jQuery2.event.special[type] || {};
        type = (selector ? special.delegateType : special.bindType) || type;
        special = jQuery2.event.special[type] || {};
        handleObj = jQuery2.extend({
          type,
          origType,
          data,
          handler,
          guid: handler.guid,
          selector,
          needsContext: selector && jQuery2.expr.match.needsContext.test(selector),
          namespace: namespaces.join(".")
        }, handleObjIn);
        if (!(handlers = events[type])) {
          handlers = events[type] = [];
          handlers.delegateCount = 0;
          if (!special.setup || special.setup.call(elem2, data, namespaces, eventHandle) === false) {
            if (elem2.addEventListener) {
              elem2.addEventListener(type, eventHandle);
            }
          }
        }
        if (special.add) {
          special.add.call(elem2, handleObj);
          if (!handleObj.handler.guid) {
            handleObj.handler.guid = handler.guid;
          }
        }
        if (selector) {
          handlers.splice(handlers.delegateCount++, 0, handleObj);
        } else {
          handlers.push(handleObj);
        }
        jQuery2.event.global[type] = true;
      }
    },
    // Detach an event or set of events from an element
    remove: function(elem2, types, handler, selector, mappedTypes) {
      var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.hasData(elem2) && dataPriv.get(elem2);
      if (!elemData || !(events = elemData.events)) {
        return;
      }
      types = (types || "").match(rnothtmlwhite) || [""];
      t = types.length;
      while (t--) {
        tmp = rtypenamespace.exec(types[t]) || [];
        type = origType = tmp[1];
        namespaces = (tmp[2] || "").split(".").sort();
        if (!type) {
          for (type in events) {
            jQuery2.event.remove(elem2, type + types[t], handler, selector, true);
          }
          continue;
        }
        special = jQuery2.event.special[type] || {};
        type = (selector ? special.delegateType : special.bindType) || type;
        handlers = events[type] || [];
        tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
        origCount = j = handlers.length;
        while (j--) {
          handleObj = handlers[j];
          if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
            handlers.splice(j, 1);
            if (handleObj.selector) {
              handlers.delegateCount--;
            }
            if (special.remove) {
              special.remove.call(elem2, handleObj);
            }
          }
        }
        if (origCount && !handlers.length) {
          if (!special.teardown || special.teardown.call(elem2, namespaces, elemData.handle) === false) {
            jQuery2.removeEvent(elem2, type, elemData.handle);
          }
          delete events[type];
        }
      }
      if (jQuery2.isEmptyObject(events)) {
        dataPriv.remove(elem2, "handle events");
      }
    },
    dispatch: function(nativeEvent) {
      var i, j, ret, matched, handleObj, handlerQueue, args = new Array(arguments.length), event2 = jQuery2.event.fix(nativeEvent), handlers = (dataPriv.get(this, "events") || /* @__PURE__ */ Object.create(null))[event2.type] || [], special = jQuery2.event.special[event2.type] || {};
      args[0] = event2;
      for (i = 1; i < arguments.length; i++) {
        args[i] = arguments[i];
      }
      event2.delegateTarget = this;
      if (special.preDispatch && special.preDispatch.call(this, event2) === false) {
        return;
      }
      handlerQueue = jQuery2.event.handlers.call(this, event2, handlers);
      i = 0;
      while ((matched = handlerQueue[i++]) && !event2.isPropagationStopped()) {
        event2.currentTarget = matched.elem;
        j = 0;
        while ((handleObj = matched.handlers[j++]) && !event2.isImmediatePropagationStopped()) {
          if (!event2.rnamespace || handleObj.namespace === false || event2.rnamespace.test(handleObj.namespace)) {
            event2.handleObj = handleObj;
            event2.data = handleObj.data;
            ret = ((jQuery2.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
            if (ret !== void 0) {
              if ((event2.result = ret) === false) {
                event2.preventDefault();
                event2.stopPropagation();
              }
            }
          }
        }
      }
      if (special.postDispatch) {
        special.postDispatch.call(this, event2);
      }
      return event2.result;
    },
    handlers: function(event2, handlers) {
      var i, handleObj, sel, matchedHandlers, matchedSelectors, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event2.target;
      if (delegateCount && // Support: IE <=9
      // Black-hole SVG <use> instance trees (trac-13180)
      cur.nodeType && // Support: Firefox <=42
      // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
      // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
      // Support: IE 11 only
      // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
      !(event2.type === "click" && event2.button >= 1)) {
        for (; cur !== this; cur = cur.parentNode || this) {
          if (cur.nodeType === 1 && !(event2.type === "click" && cur.disabled === true)) {
            matchedHandlers = [];
            matchedSelectors = {};
            for (i = 0; i < delegateCount; i++) {
              handleObj = handlers[i];
              sel = handleObj.selector + " ";
              if (matchedSelectors[sel] === void 0) {
                matchedSelectors[sel] = handleObj.needsContext ? jQuery2(sel, this).index(cur) > -1 : jQuery2.find(sel, this, null, [cur]).length;
              }
              if (matchedSelectors[sel]) {
                matchedHandlers.push(handleObj);
              }
            }
            if (matchedHandlers.length) {
              handlerQueue.push({ elem: cur, handlers: matchedHandlers });
            }
          }
        }
      }
      cur = this;
      if (delegateCount < handlers.length) {
        handlerQueue.push({ elem: cur, handlers: handlers.slice(delegateCount) });
      }
      return handlerQueue;
    },
    addProp: function(name, hook) {
      Object.defineProperty(jQuery2.Event.prototype, name, {
        enumerable: true,
        configurable: true,
        get: isFunction(hook) ? function() {
          if (this.originalEvent) {
            return hook(this.originalEvent);
          }
        } : function() {
          if (this.originalEvent) {
            return this.originalEvent[name];
          }
        },
        set: function(value) {
          Object.defineProperty(this, name, {
            enumerable: true,
            configurable: true,
            writable: true,
            value
          });
        }
      });
    },
    fix: function(originalEvent) {
      return originalEvent[jQuery2.expando] ? originalEvent : new jQuery2.Event(originalEvent);
    },
    special: {
      load: {
        // Prevent triggered image.load events from bubbling to window.load
        noBubble: true
      },
      click: {
        // Utilize native event to ensure correct state for checkable inputs
        setup: function(data) {
          var el = this || data;
          if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
            leverageNative(el, "click", true);
          }
          return false;
        },
        trigger: function(data) {
          var el = this || data;
          if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
            leverageNative(el, "click");
          }
          return true;
        },
        // For cross-browser consistency, suppress native .click() on links
        // Also prevent it if we're currently inside a leveraged native-event stack
        _default: function(event2) {
          var target = event2.target;
          return rcheckableType.test(target.type) && target.click && nodeName(target, "input") && dataPriv.get(target, "click") || nodeName(target, "a");
        }
      },
      beforeunload: {
        postDispatch: function(event2) {
          if (event2.result !== void 0 && event2.originalEvent) {
            event2.originalEvent.returnValue = event2.result;
          }
        }
      }
    }
  };
  function leverageNative(el, type, isSetup) {
    if (!isSetup) {
      if (dataPriv.get(el, type) === void 0) {
        jQuery2.event.add(el, type, returnTrue);
      }
      return;
    }
    dataPriv.set(el, type, false);
    jQuery2.event.add(el, type, {
      namespace: false,
      handler: function(event2) {
        var result, saved = dataPriv.get(this, type);
        if (event2.isTrigger & 1 && this[type]) {
          if (!saved) {
            saved = slice.call(arguments);
            dataPriv.set(this, type, saved);
            this[type]();
            result = dataPriv.get(this, type);
            dataPriv.set(this, type, false);
            if (saved !== result) {
              event2.stopImmediatePropagation();
              event2.preventDefault();
              return result;
            }
          } else if ((jQuery2.event.special[type] || {}).delegateType) {
            event2.stopPropagation();
          }
        } else if (saved) {
          dataPriv.set(this, type, jQuery2.event.trigger(
            saved[0],
            saved.slice(1),
            this
          ));
          event2.stopPropagation();
          event2.isImmediatePropagationStopped = returnTrue;
        }
      }
    });
  }
  jQuery2.removeEvent = function(elem2, type, handle) {
    if (elem2.removeEventListener) {
      elem2.removeEventListener(type, handle);
    }
  };
  jQuery2.Event = function(src, props) {
    if (!(this instanceof jQuery2.Event)) {
      return new jQuery2.Event(src, props);
    }
    if (src && src.type) {
      this.originalEvent = src;
      this.type = src.type;
      this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === void 0 && // Support: Android <=2.3 only
      src.returnValue === false ? returnTrue : returnFalse;
      this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;
      this.currentTarget = src.currentTarget;
      this.relatedTarget = src.relatedTarget;
    } else {
      this.type = src;
    }
    if (props) {
      jQuery2.extend(this, props);
    }
    this.timeStamp = src && src.timeStamp || Date.now();
    this[jQuery2.expando] = true;
  };
  jQuery2.Event.prototype = {
    constructor: jQuery2.Event,
    isDefaultPrevented: returnFalse,
    isPropagationStopped: returnFalse,
    isImmediatePropagationStopped: returnFalse,
    isSimulated: false,
    preventDefault: function() {
      var e2 = this.originalEvent;
      this.isDefaultPrevented = returnTrue;
      if (e2 && !this.isSimulated) {
        e2.preventDefault();
      }
    },
    stopPropagation: function() {
      var e2 = this.originalEvent;
      this.isPropagationStopped = returnTrue;
      if (e2 && !this.isSimulated) {
        e2.stopPropagation();
      }
    },
    stopImmediatePropagation: function() {
      var e2 = this.originalEvent;
      this.isImmediatePropagationStopped = returnTrue;
      if (e2 && !this.isSimulated) {
        e2.stopImmediatePropagation();
      }
      this.stopPropagation();
    }
  };
  jQuery2.each({
    altKey: true,
    bubbles: true,
    cancelable: true,
    changedTouches: true,
    ctrlKey: true,
    detail: true,
    eventPhase: true,
    metaKey: true,
    pageX: true,
    pageY: true,
    shiftKey: true,
    view: true,
    "char": true,
    code: true,
    charCode: true,
    key: true,
    keyCode: true,
    button: true,
    buttons: true,
    clientX: true,
    clientY: true,
    offsetX: true,
    offsetY: true,
    pointerId: true,
    pointerType: true,
    screenX: true,
    screenY: true,
    targetTouches: true,
    toElement: true,
    touches: true,
    which: true
  }, jQuery2.event.addProp);
  jQuery2.each({ focus: "focusin", blur: "focusout" }, function(type, delegateType) {
    function focusMappedHandler(nativeEvent) {
      if (document2.documentMode) {
        var handle = dataPriv.get(this, "handle"), event2 = jQuery2.event.fix(nativeEvent);
        event2.type = nativeEvent.type === "focusin" ? "focus" : "blur";
        event2.isSimulated = true;
        handle(nativeEvent);
        if (event2.target === event2.currentTarget) {
          handle(event2);
        }
      } else {
        jQuery2.event.simulate(
          delegateType,
          nativeEvent.target,
          jQuery2.event.fix(nativeEvent)
        );
      }
    }
    jQuery2.event.special[type] = {
      // Utilize native event if possible so blur/focus sequence is correct
      setup: function() {
        var attaches;
        leverageNative(this, type, true);
        if (document2.documentMode) {
          attaches = dataPriv.get(this, delegateType);
          if (!attaches) {
            this.addEventListener(delegateType, focusMappedHandler);
          }
          dataPriv.set(this, delegateType, (attaches || 0) + 1);
        } else {
          return false;
        }
      },
      trigger: function() {
        leverageNative(this, type);
        return true;
      },
      teardown: function() {
        var attaches;
        if (document2.documentMode) {
          attaches = dataPriv.get(this, delegateType) - 1;
          if (!attaches) {
            this.removeEventListener(delegateType, focusMappedHandler);
            dataPriv.remove(this, delegateType);
          } else {
            dataPriv.set(this, delegateType, attaches);
          }
        } else {
          return false;
        }
      },
      // Suppress native focus or blur if we're currently inside
      // a leveraged native-event stack
      _default: function(event2) {
        return dataPriv.get(event2.target, type);
      },
      delegateType
    };
    jQuery2.event.special[delegateType] = {
      setup: function() {
        var doc = this.ownerDocument || this.document || this, dataHolder = document2.documentMode ? this : doc, attaches = dataPriv.get(dataHolder, delegateType);
        if (!attaches) {
          if (document2.documentMode) {
            this.addEventListener(delegateType, focusMappedHandler);
          } else {
            doc.addEventListener(type, focusMappedHandler, true);
          }
        }
        dataPriv.set(dataHolder, delegateType, (attaches || 0) + 1);
      },
      teardown: function() {
        var doc = this.ownerDocument || this.document || this, dataHolder = document2.documentMode ? this : doc, attaches = dataPriv.get(dataHolder, delegateType) - 1;
        if (!attaches) {
          if (document2.documentMode) {
            this.removeEventListener(delegateType, focusMappedHandler);
          } else {
            doc.removeEventListener(type, focusMappedHandler, true);
          }
          dataPriv.remove(dataHolder, delegateType);
        } else {
          dataPriv.set(dataHolder, delegateType, attaches);
        }
      }
    };
  });
  jQuery2.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function(orig, fix) {
    jQuery2.event.special[orig] = {
      delegateType: fix,
      bindType: fix,
      handle: function(event2) {
        var ret, target = this, related = event2.relatedTarget, handleObj = event2.handleObj;
        if (!related || related !== target && !jQuery2.contains(target, related)) {
          event2.type = handleObj.origType;
          ret = handleObj.handler.apply(this, arguments);
          event2.type = fix;
        }
        return ret;
      }
    };
  });
  jQuery2.fn.extend({
    on: function(types, selector, data, fn) {
      return on(this, types, selector, data, fn);
    },
    one: function(types, selector, data, fn) {
      return on(this, types, selector, data, fn, 1);
    },
    off: function(types, selector, fn) {
      var handleObj, type;
      if (types && types.preventDefault && types.handleObj) {
        handleObj = types.handleObj;
        jQuery2(types.delegateTarget).off(
          handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
          handleObj.selector,
          handleObj.handler
        );
        return this;
      }
      if (typeof types === "object") {
        for (type in types) {
          this.off(type, selector, types[type]);
        }
        return this;
      }
      if (selector === false || typeof selector === "function") {
        fn = selector;
        selector = void 0;
      }
      if (fn === false) {
        fn = returnFalse;
      }
      return this.each(function() {
        jQuery2.event.remove(this, types, fn, selector);
      });
    }
  });
  var rnoInnerhtml = /<script|<style|<link/i, rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rcleanScript = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
  function manipulationTarget(elem2, content) {
    if (nodeName(elem2, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {
      return jQuery2(elem2).children("tbody")[0] || elem2;
    }
    return elem2;
  }
  function disableScript(elem2) {
    elem2.type = (elem2.getAttribute("type") !== null) + "/" + elem2.type;
    return elem2;
  }
  function restoreScript(elem2) {
    if ((elem2.type || "").slice(0, 5) === "true/") {
      elem2.type = elem2.type.slice(5);
    } else {
      elem2.removeAttribute("type");
    }
    return elem2;
  }
  function cloneCopyEvent(src, dest) {
    var i, l, type, pdataOld, udataOld, udataCur, events;
    if (dest.nodeType !== 1) {
      return;
    }
    if (dataPriv.hasData(src)) {
      pdataOld = dataPriv.get(src);
      events = pdataOld.events;
      if (events) {
        dataPriv.remove(dest, "handle events");
        for (type in events) {
          for (i = 0, l = events[type].length; i < l; i++) {
            jQuery2.event.add(dest, type, events[type][i]);
          }
        }
      }
    }
    if (dataUser.hasData(src)) {
      udataOld = dataUser.access(src);
      udataCur = jQuery2.extend({}, udataOld);
      dataUser.set(dest, udataCur);
    }
  }
  function fixInput(src, dest) {
    var nodeName2 = dest.nodeName.toLowerCase();
    if (nodeName2 === "input" && rcheckableType.test(src.type)) {
      dest.checked = src.checked;
    } else if (nodeName2 === "input" || nodeName2 === "textarea") {
      dest.defaultValue = src.defaultValue;
    }
  }
  function domManip(collection, args, callback, ignored) {
    args = flat(args);
    var fragment, first, scripts, hasScripts, node, doc, i = 0, l = collection.length, iNoClone = l - 1, value = args[0], valueIsFunction = isFunction(value);
    if (valueIsFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
      return collection.each(function(index) {
        var self = collection.eq(index);
        if (valueIsFunction) {
          args[0] = value.call(this, index, self.html());
        }
        domManip(self, args, callback, ignored);
      });
    }
    if (l) {
      fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
      first = fragment.firstChild;
      if (fragment.childNodes.length === 1) {
        fragment = first;
      }
      if (first || ignored) {
        scripts = jQuery2.map(getAll(fragment, "script"), disableScript);
        hasScripts = scripts.length;
        for (; i < l; i++) {
          node = fragment;
          if (i !== iNoClone) {
            node = jQuery2.clone(node, true, true);
            if (hasScripts) {
              jQuery2.merge(scripts, getAll(node, "script"));
            }
          }
          callback.call(collection[i], node, i);
        }
        if (hasScripts) {
          doc = scripts[scripts.length - 1].ownerDocument;
          jQuery2.map(scripts, restoreScript);
          for (i = 0; i < hasScripts; i++) {
            node = scripts[i];
            if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery2.contains(doc, node)) {
              if (node.src && (node.type || "").toLowerCase() !== "module") {
                if (jQuery2._evalUrl && !node.noModule) {
                  jQuery2._evalUrl(node.src, {
                    nonce: node.nonce || node.getAttribute("nonce")
                  }, doc);
                }
              } else {
                DOMEval(node.textContent.replace(rcleanScript, ""), node, doc);
              }
            }
          }
        }
      }
    }
    return collection;
  }
  function remove(elem2, selector, keepData) {
    var node, nodes = selector ? jQuery2.filter(selector, elem2) : elem2, i = 0;
    for (; (node = nodes[i]) != null; i++) {
      if (!keepData && node.nodeType === 1) {
        jQuery2.cleanData(getAll(node));
      }
      if (node.parentNode) {
        if (keepData && isAttached(node)) {
          setGlobalEval(getAll(node, "script"));
        }
        node.parentNode.removeChild(node);
      }
    }
    return elem2;
  }
  jQuery2.extend({
    htmlPrefilter: function(html) {
      return html;
    },
    clone: function(elem2, dataAndEvents, deepDataAndEvents) {
      var i, l, srcElements, destElements, clone = elem2.cloneNode(true), inPage = isAttached(elem2);
      if (!support.noCloneChecked && (elem2.nodeType === 1 || elem2.nodeType === 11) && !jQuery2.isXMLDoc(elem2)) {
        destElements = getAll(clone);
        srcElements = getAll(elem2);
        for (i = 0, l = srcElements.length; i < l; i++) {
          fixInput(srcElements[i], destElements[i]);
        }
      }
      if (dataAndEvents) {
        if (deepDataAndEvents) {
          srcElements = srcElements || getAll(elem2);
          destElements = destElements || getAll(clone);
          for (i = 0, l = srcElements.length; i < l; i++) {
            cloneCopyEvent(srcElements[i], destElements[i]);
          }
        } else {
          cloneCopyEvent(elem2, clone);
        }
      }
      destElements = getAll(clone, "script");
      if (destElements.length > 0) {
        setGlobalEval(destElements, !inPage && getAll(elem2, "script"));
      }
      return clone;
    },
    cleanData: function(elems) {
      var data, elem2, type, special = jQuery2.event.special, i = 0;
      for (; (elem2 = elems[i]) !== void 0; i++) {
        if (acceptData(elem2)) {
          if (data = elem2[dataPriv.expando]) {
            if (data.events) {
              for (type in data.events) {
                if (special[type]) {
                  jQuery2.event.remove(elem2, type);
                } else {
                  jQuery2.removeEvent(elem2, type, data.handle);
                }
              }
            }
            elem2[dataPriv.expando] = void 0;
          }
          if (elem2[dataUser.expando]) {
            elem2[dataUser.expando] = void 0;
          }
        }
      }
    }
  });
  jQuery2.fn.extend({
    detach: function(selector) {
      return remove(this, selector, true);
    },
    remove: function(selector) {
      return remove(this, selector);
    },
    text: function(value) {
      return access(this, function(value2) {
        return value2 === void 0 ? jQuery2.text(this) : this.empty().each(function() {
          if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
            this.textContent = value2;
          }
        });
      }, null, value, arguments.length);
    },
    append: function() {
      return domManip(this, arguments, function(elem2) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var target = manipulationTarget(this, elem2);
          target.appendChild(elem2);
        }
      });
    },
    prepend: function() {
      return domManip(this, arguments, function(elem2) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var target = manipulationTarget(this, elem2);
          target.insertBefore(elem2, target.firstChild);
        }
      });
    },
    before: function() {
      return domManip(this, arguments, function(elem2) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem2, this);
        }
      });
    },
    after: function() {
      return domManip(this, arguments, function(elem2) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem2, this.nextSibling);
        }
      });
    },
    empty: function() {
      var elem2, i = 0;
      for (; (elem2 = this[i]) != null; i++) {
        if (elem2.nodeType === 1) {
          jQuery2.cleanData(getAll(elem2, false));
          elem2.textContent = "";
        }
      }
      return this;
    },
    clone: function(dataAndEvents, deepDataAndEvents) {
      dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
      deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
      return this.map(function() {
        return jQuery2.clone(this, dataAndEvents, deepDataAndEvents);
      });
    },
    html: function(value) {
      return access(this, function(value2) {
        var elem2 = this[0] || {}, i = 0, l = this.length;
        if (value2 === void 0 && elem2.nodeType === 1) {
          return elem2.innerHTML;
        }
        if (typeof value2 === "string" && !rnoInnerhtml.test(value2) && !wrapMap[(rtagName.exec(value2) || ["", ""])[1].toLowerCase()]) {
          value2 = jQuery2.htmlPrefilter(value2);
          try {
            for (; i < l; i++) {
              elem2 = this[i] || {};
              if (elem2.nodeType === 1) {
                jQuery2.cleanData(getAll(elem2, false));
                elem2.innerHTML = value2;
              }
            }
            elem2 = 0;
          } catch (e2) {
          }
        }
        if (elem2) {
          this.empty().append(value2);
        }
      }, null, value, arguments.length);
    },
    replaceWith: function() {
      var ignored = [];
      return domManip(this, arguments, function(elem2) {
        var parent = this.parentNode;
        if (jQuery2.inArray(this, ignored) < 0) {
          jQuery2.cleanData(getAll(this));
          if (parent) {
            parent.replaceChild(elem2, this);
          }
        }
      }, ignored);
    }
  });
  jQuery2.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function(name, original) {
    jQuery2.fn[name] = function(selector) {
      var elems, ret = [], insert = jQuery2(selector), last = insert.length - 1, i = 0;
      for (; i <= last; i++) {
        elems = i === last ? this : this.clone(true);
        jQuery2(insert[i])[original](elems);
        push.apply(ret, elems.get());
      }
      return this.pushStack(ret);
    };
  });
  var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
  var rcustomProp = /^--/;
  var getStyles = function(elem2) {
    var view = elem2.ownerDocument.defaultView;
    if (!view || !view.opener) {
      view = window2;
    }
    return view.getComputedStyle(elem2);
  };
  var swap = function(elem2, options, callback) {
    var ret, name, old = {};
    for (name in options) {
      old[name] = elem2.style[name];
      elem2.style[name] = options[name];
    }
    ret = callback.call(elem2);
    for (name in options) {
      elem2.style[name] = old[name];
    }
    return ret;
  };
  var rboxStyle = new RegExp(cssExpand.join("|"), "i");
  (function() {
    function computeStyleTests() {
      if (!div) {
        return;
      }
      container.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
      div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
      documentElement.appendChild(container).appendChild(div);
      var divStyle = window2.getComputedStyle(div);
      pixelPositionVal = divStyle.top !== "1%";
      reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12;
      div.style.right = "60%";
      pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36;
      boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36;
      div.style.position = "absolute";
      scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;
      documentElement.removeChild(container);
      div = null;
    }
    function roundPixelMeasures(measure) {
      return Math.round(parseFloat(measure));
    }
    var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal, reliableTrDimensionsVal, reliableMarginLeftVal, container = document2.createElement("div"), div = document2.createElement("div");
    if (!div.style) {
      return;
    }
    div.style.backgroundClip = "content-box";
    div.cloneNode(true).style.backgroundClip = "";
    support.clearCloneStyle = div.style.backgroundClip === "content-box";
    jQuery2.extend(support, {
      boxSizingReliable: function() {
        computeStyleTests();
        return boxSizingReliableVal;
      },
      pixelBoxStyles: function() {
        computeStyleTests();
        return pixelBoxStylesVal;
      },
      pixelPosition: function() {
        computeStyleTests();
        return pixelPositionVal;
      },
      reliableMarginLeft: function() {
        computeStyleTests();
        return reliableMarginLeftVal;
      },
      scrollboxSize: function() {
        computeStyleTests();
        return scrollboxSizeVal;
      },
      // Support: IE 9 - 11+, Edge 15 - 18+
      // IE/Edge misreport `getComputedStyle` of table rows with width/height
      // set in CSS while `offset*` properties report correct values.
      // Behavior in IE 9 is more subtle than in newer versions & it passes
      // some versions of this test; make sure not to make it pass there!
      //
      // Support: Firefox 70+
      // Only Firefox includes border widths
      // in computed dimensions. (gh-4529)
      reliableTrDimensions: function() {
        var table, tr, trChild, trStyle;
        if (reliableTrDimensionsVal == null) {
          table = document2.createElement("table");
          tr = document2.createElement("tr");
          trChild = document2.createElement("div");
          table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
          tr.style.cssText = "box-sizing:content-box;border:1px solid";
          tr.style.height = "1px";
          trChild.style.height = "9px";
          trChild.style.display = "block";
          documentElement.appendChild(table).appendChild(tr).appendChild(trChild);
          trStyle = window2.getComputedStyle(tr);
          reliableTrDimensionsVal = parseInt(trStyle.height, 10) + parseInt(trStyle.borderTopWidth, 10) + parseInt(trStyle.borderBottomWidth, 10) === tr.offsetHeight;
          documentElement.removeChild(table);
        }
        return reliableTrDimensionsVal;
      }
    });
  })();
  function curCSS(elem2, name, computed) {
    var width, minWidth, maxWidth, ret, isCustomProp = rcustomProp.test(name), style = elem2.style;
    computed = computed || getStyles(elem2);
    if (computed) {
      ret = computed.getPropertyValue(name) || computed[name];
      if (isCustomProp && ret) {
        ret = ret.replace(rtrimCSS, "$1") || void 0;
      }
      if (ret === "" && !isAttached(elem2)) {
        ret = jQuery2.style(elem2, name);
      }
      if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
        width = style.width;
        minWidth = style.minWidth;
        maxWidth = style.maxWidth;
        style.minWidth = style.maxWidth = style.width = ret;
        ret = computed.width;
        style.width = width;
        style.minWidth = minWidth;
        style.maxWidth = maxWidth;
      }
    }
    return ret !== void 0 ? (
      // Support: IE <=9 - 11 only
      // IE returns zIndex value as an integer.
      ret + ""
    ) : ret;
  }
  function addGetHookIf(conditionFn, hookFn) {
    return {
      get: function() {
        if (conditionFn()) {
          delete this.get;
          return;
        }
        return (this.get = hookFn).apply(this, arguments);
      }
    };
  }
  var cssPrefixes = ["Webkit", "Moz", "ms"], emptyStyle = document2.createElement("div").style, vendorProps = {};
  function vendorPropName(name) {
    var capName = name[0].toUpperCase() + name.slice(1), i = cssPrefixes.length;
    while (i--) {
      name = cssPrefixes[i] + capName;
      if (name in emptyStyle) {
        return name;
      }
    }
  }
  function finalPropName(name) {
    var final = jQuery2.cssProps[name] || vendorProps[name];
    if (final) {
      return final;
    }
    if (name in emptyStyle) {
      return name;
    }
    return vendorProps[name] = vendorPropName(name) || name;
  }
  var rdisplayswap = /^(none|table(?!-c[ea]).+)/, cssShow = { position: "absolute", visibility: "hidden", display: "block" }, cssNormalTransform = {
    letterSpacing: "0",
    fontWeight: "400"
  };
  function setPositiveNumber(_elem, value, subtract) {
    var matches = rcssNum.exec(value);
    return matches ? (
      // Guard against undefined "subtract", e.g., when used as in cssHooks
      Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px")
    ) : value;
  }
  function boxModelAdjustment(elem2, dimension, box, isBorderBox, styles, computedVal) {
    var i = dimension === "width" ? 1 : 0, extra = 0, delta = 0, marginDelta = 0;
    if (box === (isBorderBox ? "border" : "content")) {
      return 0;
    }
    for (; i < 4; i += 2) {
      if (box === "margin") {
        marginDelta += jQuery2.css(elem2, box + cssExpand[i], true, styles);
      }
      if (!isBorderBox) {
        delta += jQuery2.css(elem2, "padding" + cssExpand[i], true, styles);
        if (box !== "padding") {
          delta += jQuery2.css(elem2, "border" + cssExpand[i] + "Width", true, styles);
        } else {
          extra += jQuery2.css(elem2, "border" + cssExpand[i] + "Width", true, styles);
        }
      } else {
        if (box === "content") {
          delta -= jQuery2.css(elem2, "padding" + cssExpand[i], true, styles);
        }
        if (box !== "margin") {
          delta -= jQuery2.css(elem2, "border" + cssExpand[i] + "Width", true, styles);
        }
      }
    }
    if (!isBorderBox && computedVal >= 0) {
      delta += Math.max(0, Math.ceil(
        elem2["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - 0.5
        // If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
        // Use an explicit zero to avoid NaN (gh-3964)
      )) || 0;
    }
    return delta + marginDelta;
  }
  function getWidthOrHeight(elem2, dimension, extra) {
    var styles = getStyles(elem2), boxSizingNeeded = !support.boxSizingReliable() || extra, isBorderBox = boxSizingNeeded && jQuery2.css(elem2, "boxSizing", false, styles) === "border-box", valueIsBorderBox = isBorderBox, val = curCSS(elem2, dimension, styles), offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1);
    if (rnumnonpx.test(val)) {
      if (!extra) {
        return val;
      }
      val = "auto";
    }
    if ((!support.boxSizingReliable() && isBorderBox || // Support: IE 10 - 11+, Edge 15 - 18+
    // IE/Edge misreport `getComputedStyle` of table rows with width/height
    // set in CSS while `offset*` properties report correct values.
    // Interestingly, in some cases IE 9 doesn't suffer from this issue.
    !support.reliableTrDimensions() && nodeName(elem2, "tr") || // Fall back to offsetWidth/offsetHeight when value is "auto"
    // This happens for inline elements with no explicit setting (gh-3571)
    val === "auto" || // Support: Android <=4.1 - 4.3 only
    // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
    !parseFloat(val) && jQuery2.css(elem2, "display", false, styles) === "inline") && // Make sure the element is visible & connected
    elem2.getClientRects().length) {
      isBorderBox = jQuery2.css(elem2, "boxSizing", false, styles) === "border-box";
      valueIsBorderBox = offsetProp in elem2;
      if (valueIsBorderBox) {
        val = elem2[offsetProp];
      }
    }
    val = parseFloat(val) || 0;
    return val + boxModelAdjustment(
      elem2,
      dimension,
      extra || (isBorderBox ? "border" : "content"),
      valueIsBorderBox,
      styles,
      // Provide the current computed size to request scroll gutter calculation (gh-3589)
      val
    ) + "px";
  }
  jQuery2.extend({
    // Add in style property hooks for overriding the default
    // behavior of getting and setting a style property
    cssHooks: {
      opacity: {
        get: function(elem2, computed) {
          if (computed) {
            var ret = curCSS(elem2, "opacity");
            return ret === "" ? "1" : ret;
          }
        }
      }
    },
    // Don't automatically add "px" to these possibly-unitless properties
    cssNumber: {
      animationIterationCount: true,
      aspectRatio: true,
      borderImageSlice: true,
      columnCount: true,
      flexGrow: true,
      flexShrink: true,
      fontWeight: true,
      gridArea: true,
      gridColumn: true,
      gridColumnEnd: true,
      gridColumnStart: true,
      gridRow: true,
      gridRowEnd: true,
      gridRowStart: true,
      lineHeight: true,
      opacity: true,
      order: true,
      orphans: true,
      scale: true,
      widows: true,
      zIndex: true,
      zoom: true,
      // SVG-related
      fillOpacity: true,
      floodOpacity: true,
      stopOpacity: true,
      strokeMiterlimit: true,
      strokeOpacity: true
    },
    // Add in properties whose names you wish to fix before
    // setting or getting the value
    cssProps: {},
    // Get and set the style property on a DOM Node
    style: function(elem2, name, value, extra) {
      if (!elem2 || elem2.nodeType === 3 || elem2.nodeType === 8 || !elem2.style) {
        return;
      }
      var ret, type, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name), style = elem2.style;
      if (!isCustomProp) {
        name = finalPropName(origName);
      }
      hooks = jQuery2.cssHooks[name] || jQuery2.cssHooks[origName];
      if (value !== void 0) {
        type = typeof value;
        if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
          value = adjustCSS(elem2, name, ret);
          type = "number";
        }
        if (value == null || value !== value) {
          return;
        }
        if (type === "number" && !isCustomProp) {
          value += ret && ret[3] || (jQuery2.cssNumber[origName] ? "" : "px");
        }
        if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
          style[name] = "inherit";
        }
        if (!hooks || !("set" in hooks) || (value = hooks.set(elem2, value, extra)) !== void 0) {
          if (isCustomProp) {
            style.setProperty(name, value);
          } else {
            style[name] = value;
          }
        }
      } else {
        if (hooks && "get" in hooks && (ret = hooks.get(elem2, false, extra)) !== void 0) {
          return ret;
        }
        return style[name];
      }
    },
    css: function(elem2, name, extra, styles) {
      var val, num, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name);
      if (!isCustomProp) {
        name = finalPropName(origName);
      }
      hooks = jQuery2.cssHooks[name] || jQuery2.cssHooks[origName];
      if (hooks && "get" in hooks) {
        val = hooks.get(elem2, true, extra);
      }
      if (val === void 0) {
        val = curCSS(elem2, name, styles);
      }
      if (val === "normal" && name in cssNormalTransform) {
        val = cssNormalTransform[name];
      }
      if (extra === "" || extra) {
        num = parseFloat(val);
        return extra === true || isFinite(num) ? num || 0 : val;
      }
      return val;
    }
  });
  jQuery2.each(["height", "width"], function(_i, dimension) {
    jQuery2.cssHooks[dimension] = {
      get: function(elem2, computed, extra) {
        if (computed) {
          return rdisplayswap.test(jQuery2.css(elem2, "display")) && // Support: Safari 8+
          // Table columns in Safari have non-zero offsetWidth & zero
          // getBoundingClientRect().width unless display is changed.
          // Support: IE <=11 only
          // Running getBoundingClientRect on a disconnected node
          // in IE throws an error.
          (!elem2.getClientRects().length || !elem2.getBoundingClientRect().width) ? swap(elem2, cssShow, function() {
            return getWidthOrHeight(elem2, dimension, extra);
          }) : getWidthOrHeight(elem2, dimension, extra);
        }
      },
      set: function(elem2, value, extra) {
        var matches, styles = getStyles(elem2), scrollboxSizeBuggy = !support.scrollboxSize() && styles.position === "absolute", boxSizingNeeded = scrollboxSizeBuggy || extra, isBorderBox = boxSizingNeeded && jQuery2.css(elem2, "boxSizing", false, styles) === "border-box", subtract = extra ? boxModelAdjustment(
          elem2,
          dimension,
          extra,
          isBorderBox,
          styles
        ) : 0;
        if (isBorderBox && scrollboxSizeBuggy) {
          subtract -= Math.ceil(
            elem2["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem2, dimension, "border", false, styles) - 0.5
          );
        }
        if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
          elem2.style[dimension] = value;
          value = jQuery2.css(elem2, dimension);
        }
        return setPositiveNumber(elem2, value, subtract);
      }
    };
  });
  jQuery2.cssHooks.marginLeft = addGetHookIf(
    support.reliableMarginLeft,
    function(elem2, computed) {
      if (computed) {
        return (parseFloat(curCSS(elem2, "marginLeft")) || elem2.getBoundingClientRect().left - swap(elem2, { marginLeft: 0 }, function() {
          return elem2.getBoundingClientRect().left;
        })) + "px";
      }
    }
  );
  jQuery2.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function(prefix, suffix) {
    jQuery2.cssHooks[prefix + suffix] = {
      expand: function(value) {
        var i = 0, expanded = {}, parts = typeof value === "string" ? value.split(" ") : [value];
        for (; i < 4; i++) {
          expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
        }
        return expanded;
      }
    };
    if (prefix !== "margin") {
      jQuery2.cssHooks[prefix + suffix].set = setPositiveNumber;
    }
  });
  jQuery2.fn.extend({
    css: function(name, value) {
      return access(this, function(elem2, name2, value2) {
        var styles, len, map = {}, i = 0;
        if (Array.isArray(name2)) {
          styles = getStyles(elem2);
          len = name2.length;
          for (; i < len; i++) {
            map[name2[i]] = jQuery2.css(elem2, name2[i], false, styles);
          }
          return map;
        }
        return value2 !== void 0 ? jQuery2.style(elem2, name2, value2) : jQuery2.css(elem2, name2);
      }, name, value, arguments.length > 1);
    }
  });
  jQuery2.fn.delay = function(time, type) {
    time = jQuery2.fx ? jQuery2.fx.speeds[time] || time : time;
    type = type || "fx";
    return this.queue(type, function(next, hooks) {
      var timeout = window2.setTimeout(next, time);
      hooks.stop = function() {
        window2.clearTimeout(timeout);
      };
    });
  };
  (function() {
    var input = document2.createElement("input"), select = document2.createElement("select"), opt = select.appendChild(document2.createElement("option"));
    input.type = "checkbox";
    support.checkOn = input.value !== "";
    support.optSelected = opt.selected;
    input = document2.createElement("input");
    input.value = "t";
    input.type = "radio";
    support.radioValue = input.value === "t";
  })();
  var boolHook, attrHandle = jQuery2.expr.attrHandle;
  jQuery2.fn.extend({
    attr: function(name, value) {
      return access(this, jQuery2.attr, name, value, arguments.length > 1);
    },
    removeAttr: function(name) {
      return this.each(function() {
        jQuery2.removeAttr(this, name);
      });
    }
  });
  jQuery2.extend({
    attr: function(elem2, name, value) {
      var ret, hooks, nType = elem2.nodeType;
      if (nType === 3 || nType === 8 || nType === 2) {
        return;
      }
      if (typeof elem2.getAttribute === "undefined") {
        return jQuery2.prop(elem2, name, value);
      }
      if (nType !== 1 || !jQuery2.isXMLDoc(elem2)) {
        hooks = jQuery2.attrHooks[name.toLowerCase()] || (jQuery2.expr.match.bool.test(name) ? boolHook : void 0);
      }
      if (value !== void 0) {
        if (value === null) {
          jQuery2.removeAttr(elem2, name);
          return;
        }
        if (hooks && "set" in hooks && (ret = hooks.set(elem2, value, name)) !== void 0) {
          return ret;
        }
        elem2.setAttribute(name, value + "");
        return value;
      }
      if (hooks && "get" in hooks && (ret = hooks.get(elem2, name)) !== null) {
        return ret;
      }
      ret = jQuery2.find.attr(elem2, name);
      return ret == null ? void 0 : ret;
    },
    attrHooks: {
      type: {
        set: function(elem2, value) {
          if (!support.radioValue && value === "radio" && nodeName(elem2, "input")) {
            var val = elem2.value;
            elem2.setAttribute("type", value);
            if (val) {
              elem2.value = val;
            }
            return value;
          }
        }
      }
    },
    removeAttr: function(elem2, value) {
      var name, i = 0, attrNames = value && value.match(rnothtmlwhite);
      if (attrNames && elem2.nodeType === 1) {
        while (name = attrNames[i++]) {
          elem2.removeAttribute(name);
        }
      }
    }
  });
  boolHook = {
    set: function(elem2, value, name) {
      if (value === false) {
        jQuery2.removeAttr(elem2, name);
      } else {
        elem2.setAttribute(name, name);
      }
      return name;
    }
  };
  jQuery2.each(jQuery2.expr.match.bool.source.match(/\w+/g), function(_i, name) {
    var getter = attrHandle[name] || jQuery2.find.attr;
    attrHandle[name] = function(elem2, name2, isXML) {
      var ret, handle, lowercaseName = name2.toLowerCase();
      if (!isXML) {
        handle = attrHandle[lowercaseName];
        attrHandle[lowercaseName] = ret;
        ret = getter(elem2, name2, isXML) != null ? lowercaseName : null;
        attrHandle[lowercaseName] = handle;
      }
      return ret;
    };
  });
  var rfocusable = /^(?:input|select|textarea|button)$/i, rclickable = /^(?:a|area)$/i;
  jQuery2.fn.extend({
    prop: function(name, value) {
      return access(this, jQuery2.prop, name, value, arguments.length > 1);
    },
    removeProp: function(name) {
      return this.each(function() {
        delete this[jQuery2.propFix[name] || name];
      });
    }
  });
  jQuery2.extend({
    prop: function(elem2, name, value) {
      var ret, hooks, nType = elem2.nodeType;
      if (nType === 3 || nType === 8 || nType === 2) {
        return;
      }
      if (nType !== 1 || !jQuery2.isXMLDoc(elem2)) {
        name = jQuery2.propFix[name] || name;
        hooks = jQuery2.propHooks[name];
      }
      if (value !== void 0) {
        if (hooks && "set" in hooks && (ret = hooks.set(elem2, value, name)) !== void 0) {
          return ret;
        }
        return elem2[name] = value;
      }
      if (hooks && "get" in hooks && (ret = hooks.get(elem2, name)) !== null) {
        return ret;
      }
      return elem2[name];
    },
    propHooks: {
      tabIndex: {
        get: function(elem2) {
          var tabindex = jQuery2.find.attr(elem2, "tabindex");
          if (tabindex) {
            return parseInt(tabindex, 10);
          }
          if (rfocusable.test(elem2.nodeName) || rclickable.test(elem2.nodeName) && elem2.href) {
            return 0;
          }
          return -1;
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  });
  if (!support.optSelected) {
    jQuery2.propHooks.selected = {
      get: function(elem2) {
        var parent = elem2.parentNode;
        if (parent && parent.parentNode) {
          parent.parentNode.selectedIndex;
        }
        return null;
      },
      set: function(elem2) {
        var parent = elem2.parentNode;
        if (parent) {
          parent.selectedIndex;
          if (parent.parentNode) {
            parent.parentNode.selectedIndex;
          }
        }
      }
    };
  }
  jQuery2.each([
    "tabIndex",
    "readOnly",
    "maxLength",
    "cellSpacing",
    "cellPadding",
    "rowSpan",
    "colSpan",
    "useMap",
    "frameBorder",
    "contentEditable"
  ], function() {
    jQuery2.propFix[this.toLowerCase()] = this;
  });
  function stripAndCollapse(value) {
    var tokens = value.match(rnothtmlwhite) || [];
    return tokens.join(" ");
  }
  function getClass(elem2) {
    return elem2.getAttribute && elem2.getAttribute("class") || "";
  }
  function classesToArray(value) {
    if (Array.isArray(value)) {
      return value;
    }
    if (typeof value === "string") {
      return value.match(rnothtmlwhite) || [];
    }
    return [];
  }
  jQuery2.fn.extend({
    addClass: function(value) {
      var classNames, cur, curValue, className, i, finalValue;
      if (isFunction(value)) {
        return this.each(function(j) {
          jQuery2(this).addClass(value.call(this, j, getClass(this)));
        });
      }
      classNames = classesToArray(value);
      if (classNames.length) {
        return this.each(function() {
          curValue = getClass(this);
          cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
          if (cur) {
            for (i = 0; i < classNames.length; i++) {
              className = classNames[i];
              if (cur.indexOf(" " + className + " ") < 0) {
                cur += className + " ";
              }
            }
            finalValue = stripAndCollapse(cur);
            if (curValue !== finalValue) {
              this.setAttribute("class", finalValue);
            }
          }
        });
      }
      return this;
    },
    removeClass: function(value) {
      var classNames, cur, curValue, className, i, finalValue;
      if (isFunction(value)) {
        return this.each(function(j) {
          jQuery2(this).removeClass(value.call(this, j, getClass(this)));
        });
      }
      if (!arguments.length) {
        return this.attr("class", "");
      }
      classNames = classesToArray(value);
      if (classNames.length) {
        return this.each(function() {
          curValue = getClass(this);
          cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
          if (cur) {
            for (i = 0; i < classNames.length; i++) {
              className = classNames[i];
              while (cur.indexOf(" " + className + " ") > -1) {
                cur = cur.replace(" " + className + " ", " ");
              }
            }
            finalValue = stripAndCollapse(cur);
            if (curValue !== finalValue) {
              this.setAttribute("class", finalValue);
            }
          }
        });
      }
      return this;
    },
    toggleClass: function(value, stateVal) {
      var classNames, className, i, self, type = typeof value, isValidValue = type === "string" || Array.isArray(value);
      if (isFunction(value)) {
        return this.each(function(i2) {
          jQuery2(this).toggleClass(
            value.call(this, i2, getClass(this), stateVal),
            stateVal
          );
        });
      }
      if (typeof stateVal === "boolean" && isValidValue) {
        return stateVal ? this.addClass(value) : this.removeClass(value);
      }
      classNames = classesToArray(value);
      return this.each(function() {
        if (isValidValue) {
          self = jQuery2(this);
          for (i = 0; i < classNames.length; i++) {
            className = classNames[i];
            if (self.hasClass(className)) {
              self.removeClass(className);
            } else {
              self.addClass(className);
            }
          }
        } else if (value === void 0 || type === "boolean") {
          className = getClass(this);
          if (className) {
            dataPriv.set(this, "__className__", className);
          }
          if (this.setAttribute) {
            this.setAttribute(
              "class",
              className || value === false ? "" : dataPriv.get(this, "__className__") || ""
            );
          }
        }
      });
    },
    hasClass: function(selector) {
      var className, elem2, i = 0;
      className = " " + selector + " ";
      while (elem2 = this[i++]) {
        if (elem2.nodeType === 1 && (" " + stripAndCollapse(getClass(elem2)) + " ").indexOf(className) > -1) {
          return true;
        }
      }
      return false;
    }
  });
  var rreturn = /\r/g;
  jQuery2.fn.extend({
    val: function(value) {
      var hooks, ret, valueIsFunction, elem2 = this[0];
      if (!arguments.length) {
        if (elem2) {
          hooks = jQuery2.valHooks[elem2.type] || jQuery2.valHooks[elem2.nodeName.toLowerCase()];
          if (hooks && "get" in hooks && (ret = hooks.get(elem2, "value")) !== void 0) {
            return ret;
          }
          ret = elem2.value;
          if (typeof ret === "string") {
            return ret.replace(rreturn, "");
          }
          return ret == null ? "" : ret;
        }
        return;
      }
      valueIsFunction = isFunction(value);
      return this.each(function(i) {
        var val;
        if (this.nodeType !== 1) {
          return;
        }
        if (valueIsFunction) {
          val = value.call(this, i, jQuery2(this).val());
        } else {
          val = value;
        }
        if (val == null) {
          val = "";
        } else if (typeof val === "number") {
          val += "";
        } else if (Array.isArray(val)) {
          val = jQuery2.map(val, function(value2) {
            return value2 == null ? "" : value2 + "";
          });
        }
        hooks = jQuery2.valHooks[this.type] || jQuery2.valHooks[this.nodeName.toLowerCase()];
        if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === void 0) {
          this.value = val;
        }
      });
    }
  });
  jQuery2.extend({
    valHooks: {
      option: {
        get: function(elem2) {
          var val = jQuery2.find.attr(elem2, "value");
          return val != null ? val : (
            // Support: IE <=10 - 11 only
            // option.text throws exceptions (trac-14686, trac-14858)
            // Strip and collapse whitespace
            // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
            stripAndCollapse(jQuery2.text(elem2))
          );
        }
      },
      select: {
        get: function(elem2) {
          var value, option, i, options = elem2.options, index = elem2.selectedIndex, one = elem2.type === "select-one", values = one ? null : [], max = one ? index + 1 : options.length;
          if (index < 0) {
            i = max;
          } else {
            i = one ? index : 0;
          }
          for (; i < max; i++) {
            option = options[i];
            if ((option.selected || i === index) && // Don't return options that are disabled or in a disabled optgroup
            !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
              value = jQuery2(option).val();
              if (one) {
                return value;
              }
              values.push(value);
            }
          }
          return values;
        },
        set: function(elem2, value) {
          var optionSet, option, options = elem2.options, values = jQuery2.makeArray(value), i = options.length;
          while (i--) {
            option = options[i];
            if (option.selected = jQuery2.inArray(jQuery2.valHooks.option.get(option), values) > -1) {
              optionSet = true;
            }
          }
          if (!optionSet) {
            elem2.selectedIndex = -1;
          }
          return values;
        }
      }
    }
  });
  jQuery2.each(["radio", "checkbox"], function() {
    jQuery2.valHooks[this] = {
      set: function(elem2, value) {
        if (Array.isArray(value)) {
          return elem2.checked = jQuery2.inArray(jQuery2(elem2).val(), value) > -1;
        }
      }
    };
    if (!support.checkOn) {
      jQuery2.valHooks[this].get = function(elem2) {
        return elem2.getAttribute("value") === null ? "on" : elem2.value;
      };
    }
  });
  jQuery2.parseXML = function(data) {
    var xml, parserErrorElem;
    if (!data || typeof data !== "string") {
      return null;
    }
    try {
      xml = new window2.DOMParser().parseFromString(data, "text/xml");
    } catch (e2) {
    }
    parserErrorElem = xml && xml.getElementsByTagName("parsererror")[0];
    if (!xml || parserErrorElem) {
      jQuery2.error("Invalid XML: " + (parserErrorElem ? jQuery2.map(parserErrorElem.childNodes, function(el) {
        return el.textContent;
      }).join("\n") : data));
    }
    return xml;
  };
  var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, stopPropagationCallback = function(e2) {
    e2.stopPropagation();
  };
  jQuery2.extend(jQuery2.event, {
    trigger: function(event2, data, elem2, onlyHandlers) {
      var i, cur, tmp, bubbleType, ontype, handle, special, lastElement, eventPath = [elem2 || document2], type = hasOwn.call(event2, "type") ? event2.type : event2, namespaces = hasOwn.call(event2, "namespace") ? event2.namespace.split(".") : [];
      cur = lastElement = tmp = elem2 = elem2 || document2;
      if (elem2.nodeType === 3 || elem2.nodeType === 8) {
        return;
      }
      if (rfocusMorph.test(type + jQuery2.event.triggered)) {
        return;
      }
      if (type.indexOf(".") > -1) {
        namespaces = type.split(".");
        type = namespaces.shift();
        namespaces.sort();
      }
      ontype = type.indexOf(":") < 0 && "on" + type;
      event2 = event2[jQuery2.expando] ? event2 : new jQuery2.Event(type, typeof event2 === "object" && event2);
      event2.isTrigger = onlyHandlers ? 2 : 3;
      event2.namespace = namespaces.join(".");
      event2.rnamespace = event2.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
      event2.result = void 0;
      if (!event2.target) {
        event2.target = elem2;
      }
      data = data == null ? [event2] : jQuery2.makeArray(data, [event2]);
      special = jQuery2.event.special[type] || {};
      if (!onlyHandlers && special.trigger && special.trigger.apply(elem2, data) === false) {
        return;
      }
      if (!onlyHandlers && !special.noBubble && !isWindow(elem2)) {
        bubbleType = special.delegateType || type;
        if (!rfocusMorph.test(bubbleType + type)) {
          cur = cur.parentNode;
        }
        for (; cur; cur = cur.parentNode) {
          eventPath.push(cur);
          tmp = cur;
        }
        if (tmp === (elem2.ownerDocument || document2)) {
          eventPath.push(tmp.defaultView || tmp.parentWindow || window2);
        }
      }
      i = 0;
      while ((cur = eventPath[i++]) && !event2.isPropagationStopped()) {
        lastElement = cur;
        event2.type = i > 1 ? bubbleType : special.bindType || type;
        handle = (dataPriv.get(cur, "events") || /* @__PURE__ */ Object.create(null))[event2.type] && dataPriv.get(cur, "handle");
        if (handle) {
          handle.apply(cur, data);
        }
        handle = ontype && cur[ontype];
        if (handle && handle.apply && acceptData(cur)) {
          event2.result = handle.apply(cur, data);
          if (event2.result === false) {
            event2.preventDefault();
          }
        }
      }
      event2.type = type;
      if (!onlyHandlers && !event2.isDefaultPrevented()) {
        if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem2)) {
          if (ontype && isFunction(elem2[type]) && !isWindow(elem2)) {
            tmp = elem2[ontype];
            if (tmp) {
              elem2[ontype] = null;
            }
            jQuery2.event.triggered = type;
            if (event2.isPropagationStopped()) {
              lastElement.addEventListener(type, stopPropagationCallback);
            }
            elem2[type]();
            if (event2.isPropagationStopped()) {
              lastElement.removeEventListener(type, stopPropagationCallback);
            }
            jQuery2.event.triggered = void 0;
            if (tmp) {
              elem2[ontype] = tmp;
            }
          }
        }
      }
      return event2.result;
    },
    // Piggyback on a donor event to simulate a different one
    // Used only for `focus(in | out)` events
    simulate: function(type, elem2, event2) {
      var e2 = jQuery2.extend(
        new jQuery2.Event(),
        event2,
        {
          type,
          isSimulated: true
        }
      );
      jQuery2.event.trigger(e2, null, elem2);
    }
  });
  jQuery2.fn.extend({
    trigger: function(type, data) {
      return this.each(function() {
        jQuery2.event.trigger(type, data, this);
      });
    },
    triggerHandler: function(type, data) {
      var elem2 = this[0];
      if (elem2) {
        return jQuery2.event.trigger(type, data, elem2, true);
      }
    }
  });
  var rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
  function buildParams(prefix, obj, traditional, add) {
    var name;
    if (Array.isArray(obj)) {
      jQuery2.each(obj, function(i, v) {
        if (traditional || rbracket.test(prefix)) {
          add(prefix, v);
        } else {
          buildParams(
            prefix + "[" + (typeof v === "object" && v != null ? i : "") + "]",
            v,
            traditional,
            add
          );
        }
      });
    } else if (!traditional && toType(obj) === "object") {
      for (name in obj) {
        buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
      }
    } else {
      add(prefix, obj);
    }
  }
  jQuery2.param = function(a, traditional) {
    var prefix, s = [], add = function(key, valueOrFunction) {
      var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
      s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
    };
    if (a == null) {
      return "";
    }
    if (Array.isArray(a) || a.jquery && !jQuery2.isPlainObject(a)) {
      jQuery2.each(a, function() {
        add(this.name, this.value);
      });
    } else {
      for (prefix in a) {
        buildParams(prefix, a[prefix], traditional, add);
      }
    }
    return s.join("&");
  };
  jQuery2.fn.extend({
    serialize: function() {
      return jQuery2.param(this.serializeArray());
    },
    serializeArray: function() {
      return this.map(function() {
        var elements = jQuery2.prop(this, "elements");
        return elements ? jQuery2.makeArray(elements) : this;
      }).filter(function() {
        var type = this.type;
        return this.name && !jQuery2(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
      }).map(function(_i, elem2) {
        var val = jQuery2(this).val();
        if (val == null) {
          return null;
        }
        if (Array.isArray(val)) {
          return jQuery2.map(val, function(val2) {
            return { name: elem2.name, value: val2.replace(rCRLF, "\r\n") };
          });
        }
        return { name: elem2.name, value: val.replace(rCRLF, "\r\n") };
      }).get();
    }
  });
  jQuery2.fn.extend({
    wrapAll: function(html) {
      var wrap;
      if (this[0]) {
        if (isFunction(html)) {
          html = html.call(this[0]);
        }
        wrap = jQuery2(html, this[0].ownerDocument).eq(0).clone(true);
        if (this[0].parentNode) {
          wrap.insertBefore(this[0]);
        }
        wrap.map(function() {
          var elem2 = this;
          while (elem2.firstElementChild) {
            elem2 = elem2.firstElementChild;
          }
          return elem2;
        }).append(this);
      }
      return this;
    },
    wrapInner: function(html) {
      if (isFunction(html)) {
        return this.each(function(i) {
          jQuery2(this).wrapInner(html.call(this, i));
        });
      }
      return this.each(function() {
        var self = jQuery2(this), contents = self.contents();
        if (contents.length) {
          contents.wrapAll(html);
        } else {
          self.append(html);
        }
      });
    },
    wrap: function(html) {
      var htmlIsFunction = isFunction(html);
      return this.each(function(i) {
        jQuery2(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
      });
    },
    unwrap: function(selector) {
      this.parent(selector).not("body").each(function() {
        jQuery2(this).replaceWith(this.childNodes);
      });
      return this;
    }
  });
  jQuery2.expr.pseudos.hidden = function(elem2) {
    return !jQuery2.expr.pseudos.visible(elem2);
  };
  jQuery2.expr.pseudos.visible = function(elem2) {
    return !!(elem2.offsetWidth || elem2.offsetHeight || elem2.getClientRects().length);
  };
  support.createHTMLDocument = function() {
    var body = document2.implementation.createHTMLDocument("").body;
    body.innerHTML = "<form></form><form></form>";
    return body.childNodes.length === 2;
  }();
  jQuery2.parseHTML = function(data, context, keepScripts) {
    if (typeof data !== "string") {
      return [];
    }
    if (typeof context === "boolean") {
      keepScripts = context;
      context = false;
    }
    var base, parsed, scripts;
    if (!context) {
      if (support.createHTMLDocument) {
        context = document2.implementation.createHTMLDocument("");
        base = context.createElement("base");
        base.href = document2.location.href;
        context.head.appendChild(base);
      } else {
        context = document2;
      }
    }
    parsed = rsingleTag.exec(data);
    scripts = !keepScripts && [];
    if (parsed) {
      return [context.createElement(parsed[1])];
    }
    parsed = buildFragment([data], context, scripts);
    if (scripts && scripts.length) {
      jQuery2(scripts).remove();
    }
    return jQuery2.merge([], parsed.childNodes);
  };
  jQuery2.offset = {
    setOffset: function(elem2, options, i) {
      var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery2.css(elem2, "position"), curElem = jQuery2(elem2), props = {};
      if (position === "static") {
        elem2.style.position = "relative";
      }
      curOffset = curElem.offset();
      curCSSTop = jQuery2.css(elem2, "top");
      curCSSLeft = jQuery2.css(elem2, "left");
      calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
      if (calculatePosition) {
        curPosition = curElem.position();
        curTop = curPosition.top;
        curLeft = curPosition.left;
      } else {
        curTop = parseFloat(curCSSTop) || 0;
        curLeft = parseFloat(curCSSLeft) || 0;
      }
      if (isFunction(options)) {
        options = options.call(elem2, i, jQuery2.extend({}, curOffset));
      }
      if (options.top != null) {
        props.top = options.top - curOffset.top + curTop;
      }
      if (options.left != null) {
        props.left = options.left - curOffset.left + curLeft;
      }
      if ("using" in options) {
        options.using.call(elem2, props);
      } else {
        curElem.css(props);
      }
    }
  };
  jQuery2.fn.extend({
    // offset() relates an element's border box to the document origin
    offset: function(options) {
      if (arguments.length) {
        return options === void 0 ? this : this.each(function(i) {
          jQuery2.offset.setOffset(this, options, i);
        });
      }
      var rect, win, elem2 = this[0];
      if (!elem2) {
        return;
      }
      if (!elem2.getClientRects().length) {
        return { top: 0, left: 0 };
      }
      rect = elem2.getBoundingClientRect();
      win = elem2.ownerDocument.defaultView;
      return {
        top: rect.top + win.pageYOffset,
        left: rect.left + win.pageXOffset
      };
    },
    // position() relates an element's margin box to its offset parent's padding box
    // This corresponds to the behavior of CSS absolute positioning
    position: function() {
      if (!this[0]) {
        return;
      }
      var offsetParent, offset, doc, elem2 = this[0], parentOffset = { top: 0, left: 0 };
      if (jQuery2.css(elem2, "position") === "fixed") {
        offset = elem2.getBoundingClientRect();
      } else {
        offset = this.offset();
        doc = elem2.ownerDocument;
        offsetParent = elem2.offsetParent || doc.documentElement;
        while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && jQuery2.css(offsetParent, "position") === "static") {
          offsetParent = offsetParent.parentNode;
        }
        if (offsetParent && offsetParent !== elem2 && offsetParent.nodeType === 1) {
          parentOffset = jQuery2(offsetParent).offset();
          parentOffset.top += jQuery2.css(offsetParent, "borderTopWidth", true);
          parentOffset.left += jQuery2.css(offsetParent, "borderLeftWidth", true);
        }
      }
      return {
        top: offset.top - parentOffset.top - jQuery2.css(elem2, "marginTop", true),
        left: offset.left - parentOffset.left - jQuery2.css(elem2, "marginLeft", true)
      };
    },
    // This method will return documentElement in the following cases:
    // 1) For the element inside the iframe without offsetParent, this method will return
    //    documentElement of the parent window
    // 2) For the hidden or detached element
    // 3) For body or html element, i.e. in case of the html node - it will return itself
    //
    // but those exceptions were never presented as a real life use-cases
    // and might be considered as more preferable results.
    //
    // This logic, however, is not guaranteed and can change at any point in the future
    offsetParent: function() {
      return this.map(function() {
        var offsetParent = this.offsetParent;
        while (offsetParent && jQuery2.css(offsetParent, "position") === "static") {
          offsetParent = offsetParent.offsetParent;
        }
        return offsetParent || documentElement;
      });
    }
  });
  jQuery2.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(method, prop) {
    var top = "pageYOffset" === prop;
    jQuery2.fn[method] = function(val) {
      return access(this, function(elem2, method2, val2) {
        var win;
        if (isWindow(elem2)) {
          win = elem2;
        } else if (elem2.nodeType === 9) {
          win = elem2.defaultView;
        }
        if (val2 === void 0) {
          return win ? win[prop] : elem2[method2];
        }
        if (win) {
          win.scrollTo(
            !top ? val2 : win.pageXOffset,
            top ? val2 : win.pageYOffset
          );
        } else {
          elem2[method2] = val2;
        }
      }, method, val, arguments.length);
    };
  });
  jQuery2.each(["top", "left"], function(_i, prop) {
    jQuery2.cssHooks[prop] = addGetHookIf(
      support.pixelPosition,
      function(elem2, computed) {
        if (computed) {
          computed = curCSS(elem2, prop);
          return rnumnonpx.test(computed) ? jQuery2(elem2).position()[prop] + "px" : computed;
        }
      }
    );
  });
  jQuery2.each({ Height: "height", Width: "width" }, function(name, type) {
    jQuery2.each({
      padding: "inner" + name,
      content: type,
      "": "outer" + name
    }, function(defaultExtra, funcName) {
      jQuery2.fn[funcName] = function(margin, value) {
        var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"), extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
        return access(this, function(elem2, type2, value2) {
          var doc;
          if (isWindow(elem2)) {
            return funcName.indexOf("outer") === 0 ? elem2["inner" + name] : elem2.document.documentElement["client" + name];
          }
          if (elem2.nodeType === 9) {
            doc = elem2.documentElement;
            return Math.max(
              elem2.body["scroll" + name],
              doc["scroll" + name],
              elem2.body["offset" + name],
              doc["offset" + name],
              doc["client" + name]
            );
          }
          return value2 === void 0 ? (
            // Get width or height on the element, requesting but not forcing parseFloat
            jQuery2.css(elem2, type2, extra)
          ) : (
            // Set width or height on the element
            jQuery2.style(elem2, type2, value2, extra)
          );
        }, type, chainable ? margin : void 0, chainable);
      };
    });
  });
  jQuery2.fn.extend({
    bind: function(types, data, fn) {
      return this.on(types, null, data, fn);
    },
    unbind: function(types, fn) {
      return this.off(types, null, fn);
    },
    delegate: function(selector, types, data, fn) {
      return this.on(types, selector, data, fn);
    },
    undelegate: function(selector, types, fn) {
      return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
    },
    hover: function(fnOver, fnOut) {
      return this.on("mouseenter", fnOver).on("mouseleave", fnOut || fnOver);
    }
  });
  jQuery2.each(
    "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),
    function(_i, name) {
      jQuery2.fn[name] = function(data, fn) {
        return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
      };
    }
  );
  var rtrim = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
  jQuery2.proxy = function(fn, context) {
    var tmp, args, proxy;
    if (typeof context === "string") {
      tmp = fn[context];
      context = fn;
      fn = tmp;
    }
    if (!isFunction(fn)) {
      return void 0;
    }
    args = slice.call(arguments, 2);
    proxy = function() {
      return fn.apply(context || this, args.concat(slice.call(arguments)));
    };
    proxy.guid = fn.guid = fn.guid || jQuery2.guid++;
    return proxy;
  };
  jQuery2.holdReady = function(hold) {
    if (hold) {
      jQuery2.readyWait++;
    } else {
      jQuery2.ready(true);
    }
  };
  jQuery2.isArray = Array.isArray;
  jQuery2.parseJSON = JSON.parse;
  jQuery2.nodeName = nodeName;
  jQuery2.isFunction = isFunction;
  jQuery2.isWindow = isWindow;
  jQuery2.camelCase = camelCase;
  jQuery2.type = toType;
  jQuery2.now = Date.now;
  jQuery2.isNumeric = function(obj) {
    var type = jQuery2.type(obj);
    return (type === "number" || type === "string") && // parseFloat NaNs numeric-cast false positives ("")
    // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
    // subtraction forces infinities to NaN
    !isNaN(obj - parseFloat(obj));
  };
  jQuery2.trim = function(text) {
    return text == null ? "" : (text + "").replace(rtrim, "$1");
  };
  if (typeof define === "function" && define.amd) {
    define("jquery", [], function() {
      return jQuery2;
    });
  }
  var _jQuery = window2.jQuery, _$ = window2.$;
  jQuery2.noConflict = function(deep) {
    if (window2.$ === jQuery2) {
      window2.$ = _$;
    }
    if (deep && window2.jQuery === jQuery2) {
      window2.jQuery = _jQuery;
    }
    return jQuery2;
  };
  if (typeof noGlobal === "undefined") {
    window2.jQuery = window2.$ = jQuery2;
  }
  return jQuery2;
});
(function(modules) {
  var installedModules = {};
  function __webpack_require__(moduleId) {
    if (installedModules[moduleId]) {
      return installedModules[moduleId].exports;
    }
    var module2 = installedModules[moduleId] = {
      /******/
      i: moduleId,
      /******/
      l: false,
      /******/
      exports: {}
      /******/
    };
    modules[moduleId].call(module2.exports, module2, module2.exports, __webpack_require__);
    module2.l = true;
    return module2.exports;
  }
  __webpack_require__.m = modules;
  __webpack_require__.c = installedModules;
  __webpack_require__.i = function(value) {
    return value;
  };
  __webpack_require__.d = function(exports, name, getter) {
    if (!__webpack_require__.o(exports, name)) {
      Object.defineProperty(exports, name, {
        /******/
        configurable: false,
        /******/
        enumerable: true,
        /******/
        get: getter
        /******/
      });
    }
  };
  __webpack_require__.n = function(module2) {
    var getter = module2 && module2.__esModule ? (
      /******/
      function getDefault() {
        return module2["default"];
      }
    ) : (
      /******/
      function getModuleExports() {
        return module2;
      }
    );
    __webpack_require__.d(getter, "a", getter);
    return getter;
  };
  __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  __webpack_require__.p = "";
  return __webpack_require__(__webpack_require__.s = 36);
})([
  /* 0 */
  /***/
  function(module2, exports) {
    module2.exports = jQuery;
  },
  /* 1 */
  /***/
  function(module2, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.d(__webpack_exports__, "a", function() {
      return rtl;
    });
    __webpack_require__.d(__webpack_exports__, "b", function() {
      return GetYoDigits;
    });
    __webpack_require__.d(__webpack_exports__, "c", function() {
      return transitionend;
    });
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
    var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
    function rtl() {
      return __WEBPACK_IMPORTED_MODULE_0_jquery___default()("html").attr("dir") === "rtl";
    }
    function GetYoDigits(length, namespace) {
      length = length || 6;
      return Math.round(Math.pow(36, length + 1) - Math.random() * Math.pow(36, length)).toString(36).slice(1) + (namespace ? "-" + namespace : "");
    }
    function transitionend($elem) {
      var transitions = {
        "transition": "transitionend",
        "WebkitTransition": "webkitTransitionEnd",
        "MozTransition": "transitionend",
        "OTransition": "otransitionend"
      };
      var elem2 = document.createElement("div"), end;
      for (var t in transitions) {
        if (typeof elem2.style[t] !== "undefined") {
          end = transitions[t];
        }
      }
      if (end) {
        return end;
      } else {
        end = setTimeout(function() {
          $elem.triggerHandler("transitionend", [$elem]);
        }, 1);
        return "transitionend";
      }
    }
  },
  /* 2 */
  /***/
  function(module2, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.d(__webpack_exports__, "a", function() {
      return Plugin;
    });
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
    var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
    var __WEBPACK_IMPORTED_MODULE_1__foundation_util_core__ = __webpack_require__(1);
    var _createClass = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var Plugin = function() {
      function Plugin2(element, options) {
        _classCallCheck(this, Plugin2);
        this._setup(element, options);
        var pluginName = getPluginName(this);
        this.uuid = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__foundation_util_core__[
          "b"
          /* GetYoDigits */
        ])(6, pluginName);
        if (!this.$element.attr("data-" + pluginName)) {
          this.$element.attr("data-" + pluginName, this.uuid);
        }
        if (!this.$element.data("zfPlugin")) {
          this.$element.data("zfPlugin", this);
        }
        this.$element.trigger("init.zf." + pluginName);
      }
      _createClass(Plugin2, [{
        key: "destroy",
        value: function destroy() {
          this._destroy();
          var pluginName = getPluginName(this);
          this.$element.removeAttr("data-" + pluginName).removeData("zfPlugin").trigger("destroyed.zf." + pluginName);
          for (var prop in this) {
            this[prop] = null;
          }
        }
      }]);
      return Plugin2;
    }();
    function hyphenate(str) {
      return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
    }
    function getPluginName(obj) {
      if (typeof obj.constructor.name !== "undefined") {
        return hyphenate(obj.constructor.name);
      } else {
        return hyphenate(obj.className);
      }
    }
  },
  /* 3 */
  /***/
  function(module2, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.d(__webpack_exports__, "a", function() {
      return Keyboard;
    });
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
    var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
    var __WEBPACK_IMPORTED_MODULE_1__foundation_util_core__ = __webpack_require__(1);
    var keyCodes = {
      9: "TAB",
      13: "ENTER",
      27: "ESCAPE",
      32: "SPACE",
      35: "END",
      36: "HOME",
      37: "ARROW_LEFT",
      38: "ARROW_UP",
      39: "ARROW_RIGHT",
      40: "ARROW_DOWN"
    };
    var commands = {};
    function findFocusable($element) {
      if (!$element) {
        return false;
      }
      return $element.find("a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]").filter(function() {
        if (!__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).is(":visible") || __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).attr("tabindex") < 0) {
          return false;
        }
        return true;
      });
    }
    function parseKey(event2) {
      var key = keyCodes[event2.which || event2.keyCode] || String.fromCharCode(event2.which).toUpperCase();
      key = key.replace(/\W+/, "");
      if (event2.shiftKey) key = "SHIFT_" + key;
      if (event2.ctrlKey) key = "CTRL_" + key;
      if (event2.altKey) key = "ALT_" + key;
      key = key.replace(/_$/, "");
      return key;
    }
    var Keyboard = {
      keys: getKeyCodes(keyCodes),
      /**
       * Parses the (keyboard) event and returns a String that represents its key
       * Can be used like Foundation.parseKey(event) === Foundation.keys.SPACE
       * @param {Event} event - the event generated by the event handler
       * @return String key - String that represents the key pressed
       */
      parseKey,
      /**
       * Handles the given (keyboard) event
       * @param {Event} event - the event generated by the event handler
       * @param {String} component - Foundation component's name, e.g. Slider or Reveal
       * @param {Objects} functions - collection of functions that are to be executed
       */
      handleKey: function(event2, component, functions) {
        var commandList = commands[component], keyCode = this.parseKey(event2), cmds, command, fn;
        if (!commandList) return console.warn("Component not defined!");
        if (typeof commandList.ltr === "undefined") {
          cmds = commandList;
        } else {
          if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__foundation_util_core__[
            "a"
            /* rtl */
          ])()) cmds = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend({}, commandList.ltr, commandList.rtl);
          else cmds = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend({}, commandList.rtl, commandList.ltr);
        }
        command = cmds[keyCode];
        fn = functions[command];
        if (fn && typeof fn === "function") {
          var returnValue = fn.apply();
          if (functions.handled || typeof functions.handled === "function") {
            functions.handled(returnValue);
          }
        } else {
          if (functions.unhandled || typeof functions.unhandled === "function") {
            functions.unhandled();
          }
        }
      },
      /**
       * Finds all focusable elements within the given `$element`
       * @param {jQuery} $element - jQuery object to search within
       * @return {jQuery} $focusable - all focusable elements within `$element`
       */
      findFocusable,
      /**
       * Returns the component name name
       * @param {Object} component - Foundation component, e.g. Slider or Reveal
       * @return String componentName
       */
      register: function(componentName, cmds) {
        commands[componentName] = cmds;
      },
      // TODO9438: These references to Keyboard need to not require global. Will 'this' work in this context?
      //
      /**
       * Traps the focus in the given element.
       * @param  {jQuery} $element  jQuery object to trap the foucs into.
       */
      trapFocus: function($element) {
        var $focusable = findFocusable($element), $firstFocusable = $focusable.eq(0), $lastFocusable = $focusable.eq(-1);
        $element.on("keydown.zf.trapfocus", function(event2) {
          if (event2.target === $lastFocusable[0] && parseKey(event2) === "TAB") {
            event2.preventDefault();
            $firstFocusable.focus();
          } else if (event2.target === $firstFocusable[0] && parseKey(event2) === "SHIFT_TAB") {
            event2.preventDefault();
            $lastFocusable.focus();
          }
        });
      },
      /**
       * Releases the trapped focus from the given element.
       * @param  {jQuery} $element  jQuery object to release the focus for.
       */
      releaseFocus: function($element) {
        $element.off("keydown.zf.trapfocus");
      }
    };
    function getKeyCodes(kcs) {
      var k = {};
      for (var kc in kcs) {
        k[kcs[kc]] = kcs[kc];
      }
      return k;
    }
  },
  /* 4 */
  /***/
  function(module2, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.d(__webpack_exports__, "a", function() {
      return MediaQuery;
    });
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
    var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
    var defaultQueries = {
      "default": "only screen",
      landscape: "only screen and (orientation: landscape)",
      portrait: "only screen and (orientation: portrait)",
      retina: "only screen and (-webkit-min-device-pixel-ratio: 2),only screen and (min--moz-device-pixel-ratio: 2),only screen and (-o-min-device-pixel-ratio: 2/1),only screen and (min-device-pixel-ratio: 2),only screen and (min-resolution: 192dpi),only screen and (min-resolution: 2dppx)"
    };
    var matchMedia = window.matchMedia || function() {
      "use strict";
      var styleMedia = window.styleMedia || window.media;
      if (!styleMedia) {
        var style = document.createElement("style"), script = document.getElementsByTagName("script")[0], info = null;
        style.type = "text/css";
        style.id = "matchmediajs-test";
        script && script.parentNode && script.parentNode.insertBefore(style, script);
        info = "getComputedStyle" in window && window.getComputedStyle(style, null) || style.currentStyle;
        styleMedia = {
          matchMedium: function(media) {
            var text = "@media " + media + "{ #matchmediajs-test { width: 1px; } }";
            if (style.styleSheet) {
              style.styleSheet.cssText = text;
            } else {
              style.textContent = text;
            }
            return info.width === "1px";
          }
        };
      }
      return function(media) {
        return {
          matches: styleMedia.matchMedium(media || "all"),
          media: media || "all"
        };
      };
    }();
    var MediaQuery = {
      queries: [],
      current: "",
      /**
       * Initializes the media query helper, by extracting the breakpoint list from the CSS and activating the breakpoint watcher.
       * @function
       * @private
       */
      _init: function() {
        var self = this;
        var $meta = __WEBPACK_IMPORTED_MODULE_0_jquery___default()("meta.foundation-mq");
        if (!$meta.length) {
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()('<meta class="foundation-mq">').appendTo(document.head);
        }
        var extractedStyles = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(".foundation-mq").css("font-family");
        var namedQueries;
        namedQueries = parseStyleToObject(extractedStyles);
        for (var key in namedQueries) {
          if (namedQueries.hasOwnProperty(key)) {
            self.queries.push({
              name: key,
              value: "only screen and (min-width: " + namedQueries[key] + ")"
            });
          }
        }
        this.current = this._getCurrentSize();
        this._watcher();
      },
      /**
       * Checks if the screen is at least as wide as a breakpoint.
       * @function
       * @param {String} size - Name of the breakpoint to check.
       * @returns {Boolean} `true` if the breakpoint matches, `false` if it's smaller.
       */
      atLeast: function(size) {
        var query = this.get(size);
        if (query) {
          return matchMedia(query).matches;
        }
        return false;
      },
      /**
       * Checks if the screen matches to a breakpoint.
       * @function
       * @param {String} size - Name of the breakpoint to check, either 'small only' or 'small'. Omitting 'only' falls back to using atLeast() method.
       * @returns {Boolean} `true` if the breakpoint matches, `false` if it does not.
       */
      is: function(size) {
        size = size.trim().split(" ");
        if (size.length > 1 && size[1] === "only") {
          if (size[0] === this._getCurrentSize()) return true;
        } else {
          return this.atLeast(size[0]);
        }
        return false;
      },
      /**
       * Gets the media query of a breakpoint.
       * @function
       * @param {String} size - Name of the breakpoint to get.
       * @returns {String|null} - The media query of the breakpoint, or `null` if the breakpoint doesn't exist.
       */
      get: function(size) {
        for (var i in this.queries) {
          if (this.queries.hasOwnProperty(i)) {
            var query = this.queries[i];
            if (size === query.name) return query.value;
          }
        }
        return null;
      },
      /**
       * Gets the current breakpoint name by testing every breakpoint and returning the last one to match (the biggest one).
       * @function
       * @private
       * @returns {String} Name of the current breakpoint.
       */
      _getCurrentSize: function() {
        var matched;
        for (var i = 0; i < this.queries.length; i++) {
          var query = this.queries[i];
          if (matchMedia(query.value).matches) {
            matched = query;
          }
        }
        if (typeof matched === "object") {
          return matched.name;
        } else {
          return matched;
        }
      },
      /**
       * Activates the breakpoint watcher, which fires an event on the window whenever the breakpoint changes.
       * @function
       * @private
       */
      _watcher: function() {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).off("resize.zf.mediaquery").on("resize.zf.mediaquery", function() {
          var newSize = _this._getCurrentSize(), currentSize = _this.current;
          if (newSize !== currentSize) {
            _this.current = newSize;
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).trigger("changed.zf.mediaquery", [newSize, currentSize]);
          }
        });
      }
    };
    function parseStyleToObject(str) {
      var styleObject = {};
      if (typeof str !== "string") {
        return styleObject;
      }
      str = str.trim().slice(1, -1);
      if (!str) {
        return styleObject;
      }
      styleObject = str.split("&").reduce(function(ret, param) {
        var parts = param.replace(/\+/g, " ").split("=");
        var key = parts[0];
        var val = parts[1];
        key = decodeURIComponent(key);
        val = val === void 0 ? null : decodeURIComponent(val);
        if (!ret.hasOwnProperty(key)) {
          ret[key] = val;
        } else if (Array.isArray(ret[key])) {
          ret[key].push(val);
        } else {
          ret[key] = [ret[key], val];
        }
        return ret;
      }, {});
      return styleObject;
    }
  },
  /* 5 */
  /***/
  function(module2, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.d(__webpack_exports__, "a", function() {
      return Triggers;
    });
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
    var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
    var __WEBPACK_IMPORTED_MODULE_1__foundation_util_motion__ = __webpack_require__(6);
    var MutationObserver = function() {
      var prefixes = ["WebKit", "Moz", "O", "Ms", ""];
      for (var i = 0; i < prefixes.length; i++) {
        if (prefixes[i] + "MutationObserver" in window) {
          return window[prefixes[i] + "MutationObserver"];
        }
      }
      return false;
    }();
    var triggers = function(el, type) {
      el.data(type).split(" ").forEach(function(id) {
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()("#" + id)[type === "close" ? "trigger" : "triggerHandler"](type + ".zf.trigger", [el]);
      });
    };
    var Triggers = {
      Listeners: {
        Basic: {},
        Global: {}
      },
      Initializers: {}
    };
    Triggers.Listeners.Basic = {
      openListener: function() {
        triggers(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this), "open");
      },
      closeListener: function() {
        var id = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).data("close");
        if (id) {
          triggers(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this), "close");
        } else {
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).trigger("close.zf.trigger");
        }
      },
      toggleListener: function() {
        var id = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).data("toggle");
        if (id) {
          triggers(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this), "toggle");
        } else {
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).trigger("toggle.zf.trigger");
        }
      },
      closeableListener: function(e2) {
        e2.stopPropagation();
        var animation = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).data("closable");
        if (animation !== "") {
          __WEBPACK_IMPORTED_MODULE_1__foundation_util_motion__[
            "a"
            /* Motion */
          ].animateOut(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this), animation, function() {
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).trigger("closed.zf");
          });
        } else {
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).fadeOut().trigger("closed.zf");
        }
      },
      toggleFocusListener: function() {
        var id = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).data("toggle-focus");
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()("#" + id).triggerHandler("toggle.zf.trigger", [__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this)]);
      }
    };
    Triggers.Initializers.addOpenListener = function($elem) {
      $elem.off("click.zf.trigger", Triggers.Listeners.Basic.openListener);
      $elem.on("click.zf.trigger", "[data-open]", Triggers.Listeners.Basic.openListener);
    };
    Triggers.Initializers.addCloseListener = function($elem) {
      $elem.off("click.zf.trigger", Triggers.Listeners.Basic.closeListener);
      $elem.on("click.zf.trigger", "[data-close]", Triggers.Listeners.Basic.closeListener);
    };
    Triggers.Initializers.addToggleListener = function($elem) {
      $elem.off("click.zf.trigger", Triggers.Listeners.Basic.toggleListener);
      $elem.on("click.zf.trigger", "[data-toggle]", Triggers.Listeners.Basic.toggleListener);
    };
    Triggers.Initializers.addCloseableListener = function($elem) {
      $elem.off("close.zf.trigger", Triggers.Listeners.Basic.closeableListener);
      $elem.on("close.zf.trigger", "[data-closeable], [data-closable]", Triggers.Listeners.Basic.closeableListener);
    };
    Triggers.Initializers.addToggleFocusListener = function($elem) {
      $elem.off("focus.zf.trigger blur.zf.trigger", Triggers.Listeners.Basic.toggleFocusListener);
      $elem.on("focus.zf.trigger blur.zf.trigger", "[data-toggle-focus]", Triggers.Listeners.Basic.toggleFocusListener);
    };
    Triggers.Listeners.Global = {
      resizeListener: function($nodes) {
        if (!MutationObserver) {
          $nodes.each(function() {
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).triggerHandler("resizeme.zf.trigger");
          });
        }
        $nodes.attr("data-events", "resize");
      },
      scrollListener: function($nodes) {
        if (!MutationObserver) {
          $nodes.each(function() {
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).triggerHandler("scrollme.zf.trigger");
          });
        }
        $nodes.attr("data-events", "scroll");
      },
      closeMeListener: function(e2, pluginId) {
        var plugin = e2.namespace.split(".")[0];
        var plugins = __WEBPACK_IMPORTED_MODULE_0_jquery___default()("[data-" + plugin + "]").not('[data-yeti-box="' + pluginId + '"]');
        plugins.each(function() {
          var _this = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this);
          _this.triggerHandler("close.zf.trigger", [_this]);
        });
      }
      // Global, parses whole document.
    };
    Triggers.Initializers.addClosemeListener = function(pluginName) {
      var yetiBoxes = __WEBPACK_IMPORTED_MODULE_0_jquery___default()("[data-yeti-box]"), plugNames = ["dropdown", "tooltip", "reveal"];
      if (pluginName) {
        if (typeof pluginName === "string") {
          plugNames.push(pluginName);
        } else if (typeof pluginName === "object" && typeof pluginName[0] === "string") {
          plugNames.concat(pluginName);
        } else {
          console.error("Plugin names must be strings");
        }
      }
      if (yetiBoxes.length) {
        var listeners = plugNames.map(function(name) {
          return "closeme.zf." + name;
        }).join(" ");
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).off(listeners).on(listeners, Triggers.Listeners.Global.closeMeListener);
      }
    };
    function debounceGlobalListener(debounce, trigger, listener) {
      var timer = void 0, args = Array.prototype.slice.call(arguments, 3);
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).off(trigger).on(trigger, function(e2) {
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(function() {
          listener.apply(null, args);
        }, debounce || 10);
      });
    }
    Triggers.Initializers.addResizeListener = function(debounce) {
      var $nodes = __WEBPACK_IMPORTED_MODULE_0_jquery___default()("[data-resize]");
      if ($nodes.length) {
        debounceGlobalListener(debounce, "resize.zf.trigger", Triggers.Listeners.Global.resizeListener, $nodes);
      }
    };
    Triggers.Initializers.addScrollListener = function(debounce) {
      var $nodes = __WEBPACK_IMPORTED_MODULE_0_jquery___default()("[data-scroll]");
      if ($nodes.length) {
        debounceGlobalListener(debounce, "scroll.zf.trigger", Triggers.Listeners.Global.scrollListener, $nodes);
      }
    };
    Triggers.Initializers.addMutationEventsListener = function($elem) {
      if (!MutationObserver) {
        return false;
      }
      var $nodes = $elem.find("[data-resize], [data-scroll], [data-mutate]");
      var listeningElementsMutation = function(mutationRecordsList) {
        var $target = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(mutationRecordsList[0].target);
        switch (mutationRecordsList[0].type) {
          case "attributes":
            if ($target.attr("data-events") === "scroll" && mutationRecordsList[0].attributeName === "data-events") {
              $target.triggerHandler("scrollme.zf.trigger", [$target, window.pageYOffset]);
            }
            if ($target.attr("data-events") === "resize" && mutationRecordsList[0].attributeName === "data-events") {
              $target.triggerHandler("resizeme.zf.trigger", [$target]);
            }
            if (mutationRecordsList[0].attributeName === "style") {
              $target.closest("[data-mutate]").attr("data-events", "mutate");
              $target.closest("[data-mutate]").triggerHandler("mutateme.zf.trigger", [$target.closest("[data-mutate]")]);
            }
            break;
          case "childList":
            $target.closest("[data-mutate]").attr("data-events", "mutate");
            $target.closest("[data-mutate]").triggerHandler("mutateme.zf.trigger", [$target.closest("[data-mutate]")]);
            break;
          default:
            return false;
        }
      };
      if ($nodes.length) {
        for (var i = 0; i <= $nodes.length - 1; i++) {
          var elementObserver = new MutationObserver(listeningElementsMutation);
          elementObserver.observe($nodes[i], { attributes: true, childList: true, characterData: false, subtree: true, attributeFilter: ["data-events", "style"] });
        }
      }
    };
    Triggers.Initializers.addSimpleListeners = function() {
      var $document = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(document);
      Triggers.Initializers.addOpenListener($document);
      Triggers.Initializers.addCloseListener($document);
      Triggers.Initializers.addToggleListener($document);
      Triggers.Initializers.addCloseableListener($document);
      Triggers.Initializers.addToggleFocusListener($document);
    };
    Triggers.Initializers.addGlobalListeners = function() {
      var $document = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(document);
      Triggers.Initializers.addMutationEventsListener($document);
      Triggers.Initializers.addResizeListener();
      Triggers.Initializers.addScrollListener();
      Triggers.Initializers.addClosemeListener();
    };
    Triggers.init = function($, Foundation2) {
      if (typeof $.triggersInitialized === "undefined") {
        var $document = $(document);
        if (document.readyState === "complete") {
          Triggers.Initializers.addSimpleListeners();
          Triggers.Initializers.addGlobalListeners();
        } else {
          $(window).on("load", function() {
            Triggers.Initializers.addSimpleListeners();
            Triggers.Initializers.addGlobalListeners();
          });
        }
        $.triggersInitialized = true;
      }
      if (Foundation2) {
        Foundation2.Triggers = Triggers;
        Foundation2.IHearYou = Triggers.Initializers.addGlobalListeners;
      }
    };
  },
  /* 6 */
  /***/
  function(module2, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.d(__webpack_exports__, "b", function() {
      return Move;
    });
    __webpack_require__.d(__webpack_exports__, "a", function() {
      return Motion;
    });
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
    var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
    var __WEBPACK_IMPORTED_MODULE_1__foundation_util_core__ = __webpack_require__(1);
    var initClasses = ["mui-enter", "mui-leave"];
    var activeClasses = ["mui-enter-active", "mui-leave-active"];
    var Motion = {
      animateIn: function(element, animation, cb) {
        animate(true, element, animation, cb);
      },
      animateOut: function(element, animation, cb) {
        animate(false, element, animation, cb);
      }
    };
    function Move(duration, elem2, fn) {
      var anim, prog, start = null;
      if (duration === 0) {
        fn.apply(elem2);
        elem2.trigger("finished.zf.animate", [elem2]).triggerHandler("finished.zf.animate", [elem2]);
        return;
      }
      function move(ts) {
        if (!start) start = ts;
        prog = ts - start;
        fn.apply(elem2);
        if (prog < duration) {
          anim = window.requestAnimationFrame(move, elem2);
        } else {
          window.cancelAnimationFrame(anim);
          elem2.trigger("finished.zf.animate", [elem2]).triggerHandler("finished.zf.animate", [elem2]);
        }
      }
      anim = window.requestAnimationFrame(move);
    }
    function animate(isIn, element, animation, cb) {
      element = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(element).eq(0);
      if (!element.length) return;
      var initClass = isIn ? initClasses[0] : initClasses[1];
      var activeClass = isIn ? activeClasses[0] : activeClasses[1];
      reset();
      element.addClass(animation).css("transition", "none");
      requestAnimationFrame(function() {
        element.addClass(initClass);
        if (isIn) element.show();
      });
      requestAnimationFrame(function() {
        element[0].offsetWidth;
        element.css("transition", "").addClass(activeClass);
      });
      element.one(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__foundation_util_core__[
        "c"
        /* transitionend */
      ])(element), finish);
      function finish() {
        if (!isIn) element.hide();
        reset();
        if (cb) cb.apply(element);
      }
      function reset() {
        element[0].style.transitionDuration = 0;
        element.removeClass(initClass + " " + activeClass + " " + animation);
      }
    }
  },
  /* 7 */
  /***/
  function(module2, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.d(__webpack_exports__, "a", function() {
      return Box;
    });
    var __WEBPACK_IMPORTED_MODULE_0__foundation_util_core__ = __webpack_require__(1);
    var Box = {
      ImNotTouchingYou,
      OverlapArea,
      GetDimensions,
      GetOffsets,
      GetExplicitOffsets
      /**
       * Compares the dimensions of an element to a container and determines collision events with container.
       * @function
       * @param {jQuery} element - jQuery object to test for collisions.
       * @param {jQuery} parent - jQuery object to use as bounding container.
       * @param {Boolean} lrOnly - set to true to check left and right values only.
       * @param {Boolean} tbOnly - set to true to check top and bottom values only.
       * @default if no parent object passed, detects collisions with `window`.
       * @returns {Boolean} - true if collision free, false if a collision in any direction.
       */
    };
    function ImNotTouchingYou(element, parent, lrOnly, tbOnly, ignoreBottom) {
      return OverlapArea(element, parent, lrOnly, tbOnly, ignoreBottom) === 0;
    }
    ;
    function OverlapArea(element, parent, lrOnly, tbOnly, ignoreBottom) {
      var eleDims = GetDimensions(element), topOver, bottomOver, leftOver, rightOver;
      if (parent) {
        var parDims = GetDimensions(parent);
        bottomOver = parDims.height + parDims.offset.top - (eleDims.offset.top + eleDims.height);
        topOver = eleDims.offset.top - parDims.offset.top;
        leftOver = eleDims.offset.left - parDims.offset.left;
        rightOver = parDims.width + parDims.offset.left - (eleDims.offset.left + eleDims.width);
      } else {
        bottomOver = eleDims.windowDims.height + eleDims.windowDims.offset.top - (eleDims.offset.top + eleDims.height);
        topOver = eleDims.offset.top - eleDims.windowDims.offset.top;
        leftOver = eleDims.offset.left - eleDims.windowDims.offset.left;
        rightOver = eleDims.windowDims.width - (eleDims.offset.left + eleDims.width);
      }
      bottomOver = ignoreBottom ? 0 : Math.min(bottomOver, 0);
      topOver = Math.min(topOver, 0);
      leftOver = Math.min(leftOver, 0);
      rightOver = Math.min(rightOver, 0);
      if (lrOnly) {
        return leftOver + rightOver;
      }
      if (tbOnly) {
        return topOver + bottomOver;
      }
      return Math.sqrt(topOver * topOver + bottomOver * bottomOver + leftOver * leftOver + rightOver * rightOver);
    }
    function GetDimensions(elem2) {
      elem2 = elem2.length ? elem2[0] : elem2;
      if (elem2 === window || elem2 === document) {
        throw new Error("I'm sorry, Dave. I'm afraid I can't do that.");
      }
      var rect = elem2.getBoundingClientRect(), parRect = elem2.parentNode.getBoundingClientRect(), winRect = document.body.getBoundingClientRect(), winY = window.pageYOffset, winX = window.pageXOffset;
      return {
        width: rect.width,
        height: rect.height,
        offset: {
          top: rect.top + winY,
          left: rect.left + winX
        },
        parentDims: {
          width: parRect.width,
          height: parRect.height,
          offset: {
            top: parRect.top + winY,
            left: parRect.left + winX
          }
        },
        windowDims: {
          width: winRect.width,
          height: winRect.height,
          offset: {
            top: winY,
            left: winX
          }
        }
      };
    }
    function GetOffsets(element, anchor, position, vOffset, hOffset, isOverflow) {
      console.log("NOTE: GetOffsets is deprecated in favor of GetExplicitOffsets and will be removed in 6.5");
      switch (position) {
        case "top":
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__foundation_util_core__[
            "a"
            /* rtl */
          ])() ? GetExplicitOffsets(element, anchor, "top", "left", vOffset, hOffset, isOverflow) : GetExplicitOffsets(element, anchor, "top", "right", vOffset, hOffset, isOverflow);
        case "bottom":
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__foundation_util_core__[
            "a"
            /* rtl */
          ])() ? GetExplicitOffsets(element, anchor, "bottom", "left", vOffset, hOffset, isOverflow) : GetExplicitOffsets(element, anchor, "bottom", "right", vOffset, hOffset, isOverflow);
        case "center top":
          return GetExplicitOffsets(element, anchor, "top", "center", vOffset, hOffset, isOverflow);
        case "center bottom":
          return GetExplicitOffsets(element, anchor, "bottom", "center", vOffset, hOffset, isOverflow);
        case "center left":
          return GetExplicitOffsets(element, anchor, "left", "center", vOffset, hOffset, isOverflow);
        case "center right":
          return GetExplicitOffsets(element, anchor, "right", "center", vOffset, hOffset, isOverflow);
        case "left bottom":
          return GetExplicitOffsets(element, anchor, "bottom", "left", vOffset, hOffset, isOverflow);
        case "right bottom":
          return GetExplicitOffsets(element, anchor, "bottom", "right", vOffset, hOffset, isOverflow);
        case "center":
          return {
            left: $eleDims.windowDims.offset.left + $eleDims.windowDims.width / 2 - $eleDims.width / 2 + hOffset,
            top: $eleDims.windowDims.offset.top + $eleDims.windowDims.height / 2 - ($eleDims.height / 2 + vOffset)
          };
        case "reveal":
          return {
            left: ($eleDims.windowDims.width - $eleDims.width) / 2 + hOffset,
            top: $eleDims.windowDims.offset.top + vOffset
          };
        case "reveal full":
          return {
            left: $eleDims.windowDims.offset.left,
            top: $eleDims.windowDims.offset.top
          };
          break;
        default:
          return {
            left: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__foundation_util_core__[
              "a"
              /* rtl */
            ])() ? $anchorDims.offset.left - $eleDims.width + $anchorDims.width - hOffset : $anchorDims.offset.left + hOffset,
            top: $anchorDims.offset.top + $anchorDims.height + vOffset
          };
      }
    }
    function GetExplicitOffsets(element, anchor, position, alignment, vOffset, hOffset, isOverflow) {
      var $eleDims2 = GetDimensions(element), $anchorDims2 = anchor ? GetDimensions(anchor) : null;
      var topVal, leftVal;
      switch (position) {
        case "top":
          topVal = $anchorDims2.offset.top - ($eleDims2.height + vOffset);
          break;
        case "bottom":
          topVal = $anchorDims2.offset.top + $anchorDims2.height + vOffset;
          break;
        case "left":
          leftVal = $anchorDims2.offset.left - ($eleDims2.width + hOffset);
          break;
        case "right":
          leftVal = $anchorDims2.offset.left + $anchorDims2.width + hOffset;
          break;
      }
      switch (position) {
        case "top":
        case "bottom":
          switch (alignment) {
            case "left":
              leftVal = $anchorDims2.offset.left + hOffset;
              break;
            case "right":
              leftVal = $anchorDims2.offset.left - $eleDims2.width + $anchorDims2.width - hOffset;
              break;
            case "center":
              leftVal = isOverflow ? hOffset : $anchorDims2.offset.left + $anchorDims2.width / 2 - $eleDims2.width / 2 + hOffset;
              break;
          }
          break;
        case "right":
        case "left":
          switch (alignment) {
            case "bottom":
              topVal = $anchorDims2.offset.top - vOffset + $anchorDims2.height - $eleDims2.height;
              break;
            case "top":
              topVal = $anchorDims2.offset.top + vOffset;
              break;
            case "center":
              topVal = $anchorDims2.offset.top + vOffset + $anchorDims2.height / 2 - $eleDims2.height / 2;
              break;
          }
          break;
      }
      return { top: topVal, left: leftVal };
    }
  },
  /* 8 */
  /***/
  function(module2, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.d(__webpack_exports__, "a", function() {
      return onImagesLoaded;
    });
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
    var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
    function onImagesLoaded(images, callback) {
      var self = this, unloaded = images.length;
      if (unloaded === 0) {
        callback();
      }
      images.each(function() {
        if (this.complete && this.naturalWidth !== void 0) {
          singleImageLoaded();
        } else {
          var image = new Image();
          var events = "load.zf.images error.zf.images";
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()(image).one(events, function me(event2) {
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).off(events, me);
            singleImageLoaded();
          });
          image.src = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).attr("src");
        }
      });
      function singleImageLoaded() {
        unloaded--;
        if (unloaded === 0) {
          callback();
        }
      }
    }
  },
  /* 9 */
  /***/
  function(module2, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.d(__webpack_exports__, "a", function() {
      return Nest;
    });
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
    var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
    var Nest = {
      Feather: function(menu) {
        var type = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "zf";
        menu.attr("role", "menubar");
        var items = menu.find("li").attr({ "role": "menuitem" }), subMenuClass = "is-" + type + "-submenu", subItemClass = subMenuClass + "-item", hasSubClass = "is-" + type + "-submenu-parent", applyAria = type !== "accordion";
        items.each(function() {
          var $item = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this), $sub = $item.children("ul");
          if ($sub.length) {
            $item.addClass(hasSubClass);
            $sub.addClass("submenu " + subMenuClass).attr({ "data-submenu": "" });
            if (applyAria) {
              $item.attr({
                "aria-haspopup": true,
                "aria-label": $item.children("a:first").text()
              });
              if (type === "drilldown") {
                $item.attr({ "aria-expanded": false });
              }
            }
            $sub.addClass("submenu " + subMenuClass).attr({
              "data-submenu": "",
              "role": "menu"
            });
            if (type === "drilldown") {
              $sub.attr({ "aria-hidden": true });
            }
          }
          if ($item.parent("[data-submenu]").length) {
            $item.addClass("is-submenu-item " + subItemClass);
          }
        });
        return;
      },
      Burn: function(menu, type) {
        var subMenuClass = "is-" + type + "-submenu", subItemClass = subMenuClass + "-item", hasSubClass = "is-" + type + "-submenu-parent";
        menu.find(">li, .menu, .menu > li").removeClass(subMenuClass + " " + subItemClass + " " + hasSubClass + " is-submenu-item submenu is-active").removeAttr("data-submenu").css("display", "");
      }
    };
  },
  /* 10 */
  /***/
  function(module2, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.d(__webpack_exports__, "a", function() {
      return Touch;
    });
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
    var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
    var _createClass = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var Touch = {};
    var startPosX, startPosY, startTime, elapsedTime, isMoving = false;
    function onTouchEnd() {
      this.removeEventListener("touchmove", onTouchMove);
      this.removeEventListener("touchend", onTouchEnd);
      isMoving = false;
    }
    function onTouchMove(e2) {
      if (__WEBPACK_IMPORTED_MODULE_0_jquery___default.a.spotSwipe.preventDefault) {
        e2.preventDefault();
      }
      if (isMoving) {
        var x = e2.touches[0].pageX;
        var y = e2.touches[0].pageY;
        var dx = startPosX - x;
        var dy = startPosY - y;
        var dir;
        elapsedTime = (/* @__PURE__ */ new Date()).getTime() - startTime;
        if (Math.abs(dx) >= __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.spotSwipe.moveThreshold && elapsedTime <= __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.spotSwipe.timeThreshold) {
          dir = dx > 0 ? "left" : "right";
        }
        if (dir) {
          e2.preventDefault();
          onTouchEnd.call(this);
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).trigger("swipe", dir).trigger("swipe" + dir);
        }
      }
    }
    function onTouchStart(e2) {
      if (e2.touches.length == 1) {
        startPosX = e2.touches[0].pageX;
        startPosY = e2.touches[0].pageY;
        isMoving = true;
        startTime = (/* @__PURE__ */ new Date()).getTime();
        this.addEventListener("touchmove", onTouchMove, false);
        this.addEventListener("touchend", onTouchEnd, false);
      }
    }
    function init2() {
      this.addEventListener && this.addEventListener("touchstart", onTouchStart, false);
    }
    function teardown() {
      this.removeEventListener("touchstart", onTouchStart);
    }
    var SpotSwipe = function() {
      function SpotSwipe2($) {
        _classCallCheck(this, SpotSwipe2);
        this.version = "1.0.0";
        this.enabled = "ontouchstart" in document.documentElement;
        this.preventDefault = false;
        this.moveThreshold = 75;
        this.timeThreshold = 200;
        this.$ = $;
        this._init();
      }
      _createClass(SpotSwipe2, [{
        key: "_init",
        value: function _init() {
          var $ = this.$;
          $.event.special.swipe = { setup: init2 };
          $.each(["left", "up", "down", "right"], function() {
            $.event.special["swipe" + this] = { setup: function() {
              $(this).on("swipe", $.noop);
            } };
          });
        }
      }]);
      return SpotSwipe2;
    }();
    Touch.setupSpotSwipe = function($) {
      $.spotSwipe = new SpotSwipe($);
    };
    Touch.setupTouchHandler = function($) {
      $.fn.addTouch = function() {
        this.each(function(i, el) {
          $(el).bind("touchstart touchmove touchend touchcancel", function() {
            handleTouch(event);
          });
        });
        var handleTouch = function(event2) {
          var touches = event2.changedTouches, first = touches[0], eventTypes = {
            touchstart: "mousedown",
            touchmove: "mousemove",
            touchend: "mouseup"
          }, type = eventTypes[event2.type], simulatedEvent;
          if ("MouseEvent" in window && typeof window.MouseEvent === "function") {
            simulatedEvent = new window.MouseEvent(type, {
              "bubbles": true,
              "cancelable": true,
              "screenX": first.screenX,
              "screenY": first.screenY,
              "clientX": first.clientX,
              "clientY": first.clientY
            });
          } else {
            simulatedEvent = document.createEvent("MouseEvent");
            simulatedEvent.initMouseEvent(type, true, true, window, 1, first.screenX, first.screenY, first.clientX, first.clientY, false, false, false, false, 0, null);
          }
          first.target.dispatchEvent(simulatedEvent);
        };
      };
    };
    Touch.init = function($) {
      if (typeof $.spotSwipe === "undefined") {
        Touch.setupSpotSwipe($);
        Touch.setupTouchHandler($);
      }
    };
  },
  /* 11 */
  /***/
  function(module2, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.d(__webpack_exports__, "a", function() {
      return Accordion;
    });
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
    var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
    var __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__ = __webpack_require__(3);
    var __WEBPACK_IMPORTED_MODULE_2__foundation_util_core__ = __webpack_require__(1);
    var __WEBPACK_IMPORTED_MODULE_3__foundation_plugin__ = __webpack_require__(2);
    var _createClass = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var Accordion = function(_Plugin) {
      _inherits(Accordion2, _Plugin);
      function Accordion2() {
        _classCallCheck(this, Accordion2);
        return _possibleConstructorReturn(this, (Accordion2.__proto__ || Object.getPrototypeOf(Accordion2)).apply(this, arguments));
      }
      _createClass(Accordion2, [{
        key: "_setup",
        /**
         * Creates a new instance of an accordion.
         * @class
         * @name Accordion
         * @fires Accordion#init
         * @param {jQuery} element - jQuery object to make into an accordion.
         * @param {Object} options - a plain object with settings to override the default options.
         */
        value: function _setup(element, options) {
          this.$element = element;
          this.options = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend({}, Accordion2.defaults, this.$element.data(), options);
          this.className = "Accordion";
          this._init();
          __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__[
            "a"
            /* Keyboard */
          ].register("Accordion", {
            "ENTER": "toggle",
            "SPACE": "toggle",
            "ARROW_DOWN": "next",
            "ARROW_UP": "previous"
          });
        }
        /**
         * Initializes the accordion by animating the preset active pane(s).
         * @private
         */
      }, {
        key: "_init",
        value: function _init() {
          var _this3 = this;
          this.$element.attr("role", "tablist");
          this.$tabs = this.$element.children("[data-accordion-item]");
          this.$tabs.each(function(idx, el) {
            var $el = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(el), $content = $el.children("[data-tab-content]"), id = $content[0].id || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__foundation_util_core__[
              "b"
              /* GetYoDigits */
            ])(6, "accordion"), linkId = el.id || id + "-label";
            $el.find("a:first").attr({
              "aria-controls": id,
              "role": "tab",
              "id": linkId,
              "aria-expanded": false,
              "aria-selected": false
            });
            $content.attr({ "role": "tabpanel", "aria-labelledby": linkId, "aria-hidden": true, "id": id });
          });
          var $initActive = this.$element.find(".is-active").children("[data-tab-content]");
          this.firstTimeInit = true;
          if ($initActive.length) {
            this.down($initActive, this.firstTimeInit);
            this.firstTimeInit = false;
          }
          this._checkDeepLink = function() {
            var anchor = window.location.hash;
            if (anchor.length) {
              var $link = _this3.$element.find('[href$="' + anchor + '"]'), $anchor = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(anchor);
              if ($link.length && $anchor) {
                if (!$link.parent("[data-accordion-item]").hasClass("is-active")) {
                  _this3.down($anchor, _this3.firstTimeInit);
                  _this3.firstTimeInit = false;
                }
                ;
                if (_this3.options.deepLinkSmudge) {
                  var _this = _this3;
                  __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).load(function() {
                    var offset = _this.$element.offset();
                    __WEBPACK_IMPORTED_MODULE_0_jquery___default()("html, body").animate({ scrollTop: offset.top }, _this.options.deepLinkSmudgeDelay);
                  });
                }
                _this3.$element.trigger("deeplink.zf.accordion", [$link, $anchor]);
              }
            }
          };
          if (this.options.deepLink) {
            this._checkDeepLink();
          }
          this._events();
        }
        /**
         * Adds event handlers for items within the accordion.
         * @private
         */
      }, {
        key: "_events",
        value: function _events() {
          var _this = this;
          this.$tabs.each(function() {
            var $elem = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this);
            var $tabContent = $elem.children("[data-tab-content]");
            if ($tabContent.length) {
              $elem.children("a").off("click.zf.accordion keydown.zf.accordion").on("click.zf.accordion", function(e2) {
                e2.preventDefault();
                _this.toggle($tabContent);
              }).on("keydown.zf.accordion", function(e2) {
                __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__[
                  "a"
                  /* Keyboard */
                ].handleKey(e2, "Accordion", {
                  toggle: function() {
                    _this.toggle($tabContent);
                  },
                  next: function() {
                    var $a = $elem.next().find("a").focus();
                    if (!_this.options.multiExpand) {
                      $a.trigger("click.zf.accordion");
                    }
                  },
                  previous: function() {
                    var $a = $elem.prev().find("a").focus();
                    if (!_this.options.multiExpand) {
                      $a.trigger("click.zf.accordion");
                    }
                  },
                  handled: function() {
                    e2.preventDefault();
                    e2.stopPropagation();
                  }
                });
              });
            }
          });
          if (this.options.deepLink) {
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).on("popstate", this._checkDeepLink);
          }
        }
        /**
         * Toggles the selected content pane's open/close state.
         * @param {jQuery} $target - jQuery object of the pane to toggle (`.accordion-content`).
         * @function
         */
      }, {
        key: "toggle",
        value: function toggle($target) {
          if ($target.closest("[data-accordion]").is("[disabled]")) {
            console.info("Cannot toggle an accordion that is disabled.");
            return;
          }
          if ($target.parent().hasClass("is-active")) {
            this.up($target);
          } else {
            this.down($target);
          }
          if (this.options.deepLink) {
            var anchor = $target.prev("a").attr("href");
            if (this.options.updateHistory) {
              history.pushState({}, "", anchor);
            } else {
              history.replaceState({}, "", anchor);
            }
          }
        }
        /**
         * Opens the accordion tab defined by `$target`.
         * @param {jQuery} $target - Accordion pane to open (`.accordion-content`).
         * @param {Boolean} firstTime - flag to determine if reflow should happen.
         * @fires Accordion#down
         * @function
         */
      }, {
        key: "down",
        value: function down($target, firstTime) {
          var _this4 = this;
          if ($target.closest("[data-accordion]").is("[disabled]") && !firstTime) {
            console.info("Cannot call down on an accordion that is disabled.");
            return;
          }
          $target.attr("aria-hidden", false).parent("[data-tab-content]").addBack().parent().addClass("is-active");
          if (!this.options.multiExpand && !firstTime) {
            var $currentActive = this.$element.children(".is-active").children("[data-tab-content]");
            if ($currentActive.length) {
              this.up($currentActive.not($target));
            }
          }
          $target.slideDown(this.options.slideSpeed, function() {
            _this4.$element.trigger("down.zf.accordion", [$target]);
          });
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()("#" + $target.attr("aria-labelledby")).attr({
            "aria-expanded": true,
            "aria-selected": true
          });
        }
        /**
         * Closes the tab defined by `$target`.
         * @param {jQuery} $target - Accordion tab to close (`.accordion-content`).
         * @fires Accordion#up
         * @function
         */
      }, {
        key: "up",
        value: function up($target) {
          if ($target.closest("[data-accordion]").is("[disabled]")) {
            console.info("Cannot call up on an accordion that is disabled.");
            return;
          }
          var $aunts = $target.parent().siblings(), _this = this;
          if (!this.options.allowAllClosed && !$aunts.hasClass("is-active") || !$target.parent().hasClass("is-active")) {
            return;
          }
          $target.slideUp(_this.options.slideSpeed, function() {
            _this.$element.trigger("up.zf.accordion", [$target]);
          });
          $target.attr("aria-hidden", true).parent().removeClass("is-active");
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()("#" + $target.attr("aria-labelledby")).attr({
            "aria-expanded": false,
            "aria-selected": false
          });
        }
        /**
         * Destroys an instance of an accordion.
         * @fires Accordion#destroyed
         * @function
         */
      }, {
        key: "_destroy",
        value: function _destroy() {
          this.$element.find("[data-tab-content]").stop(true).slideUp(0).css("display", "");
          this.$element.find("a").off(".zf.accordion");
          if (this.options.deepLink) {
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).off("popstate", this._checkDeepLink);
          }
        }
      }]);
      return Accordion2;
    }(__WEBPACK_IMPORTED_MODULE_3__foundation_plugin__[
      "a"
      /* Plugin */
    ]);
    Accordion.defaults = {
      /**
       * Amount of time to animate the opening of an accordion pane.
       * @option
       * @type {number}
       * @default 250
       */
      slideSpeed: 250,
      /**
       * Allow the accordion to have multiple open panes.
       * @option
       * @type {boolean}
       * @default false
       */
      multiExpand: false,
      /**
       * Allow the accordion to close all panes.
       * @option
       * @type {boolean}
       * @default false
       */
      allowAllClosed: false,
      /**
       * Allows the window to scroll to content of pane specified by hash anchor
       * @option
       * @type {boolean}
       * @default false
       */
      deepLink: false,
      /**
       * Adjust the deep link scroll to make sure the top of the accordion panel is visible
       * @option
       * @type {boolean}
       * @default false
       */
      deepLinkSmudge: false,
      /**
       * Animation time (ms) for the deep link adjustment
       * @option
       * @type {number}
       * @default 300
       */
      deepLinkSmudgeDelay: 300,
      /**
       * Update the browser history with the open accordion
       * @option
       * @type {boolean}
       * @default false
       */
      updateHistory: false
    };
  },
  /* 12 */
  /***/
  function(module2, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.d(__webpack_exports__, "a", function() {
      return AccordionMenu;
    });
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
    var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
    var __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__ = __webpack_require__(3);
    var __WEBPACK_IMPORTED_MODULE_2__foundation_util_nest__ = __webpack_require__(9);
    var __WEBPACK_IMPORTED_MODULE_3__foundation_util_core__ = __webpack_require__(1);
    var __WEBPACK_IMPORTED_MODULE_4__foundation_plugin__ = __webpack_require__(2);
    var _createClass = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var AccordionMenu = function(_Plugin) {
      _inherits(AccordionMenu2, _Plugin);
      function AccordionMenu2() {
        _classCallCheck(this, AccordionMenu2);
        return _possibleConstructorReturn(this, (AccordionMenu2.__proto__ || Object.getPrototypeOf(AccordionMenu2)).apply(this, arguments));
      }
      _createClass(AccordionMenu2, [{
        key: "_setup",
        /**
         * Creates a new instance of an accordion menu.
         * @class
         * @name AccordionMenu
         * @fires AccordionMenu#init
         * @param {jQuery} element - jQuery object to make into an accordion menu.
         * @param {Object} options - Overrides to the default plugin settings.
         */
        value: function _setup(element, options) {
          this.$element = element;
          this.options = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend({}, AccordionMenu2.defaults, this.$element.data(), options);
          this.className = "AccordionMenu";
          this._init();
          __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__[
            "a"
            /* Keyboard */
          ].register("AccordionMenu", {
            "ENTER": "toggle",
            "SPACE": "toggle",
            "ARROW_RIGHT": "open",
            "ARROW_UP": "up",
            "ARROW_DOWN": "down",
            "ARROW_LEFT": "close",
            "ESCAPE": "closeAll"
          });
        }
        /**
         * Initializes the accordion menu by hiding all nested menus.
         * @private
         */
      }, {
        key: "_init",
        value: function _init() {
          __WEBPACK_IMPORTED_MODULE_2__foundation_util_nest__[
            "a"
            /* Nest */
          ].Feather(this.$element, "accordion");
          var _this = this;
          this.$element.find("[data-submenu]").not(".is-active").slideUp(0);
          this.$element.attr({
            "role": "tree",
            "aria-multiselectable": this.options.multiOpen
          });
          this.$menuLinks = this.$element.find(".is-accordion-submenu-parent");
          this.$menuLinks.each(function() {
            var linkId = this.id || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__foundation_util_core__[
              "b"
              /* GetYoDigits */
            ])(6, "acc-menu-link"), $elem = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this), $sub = $elem.children("[data-submenu]"), subId = $sub[0].id || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__foundation_util_core__[
              "b"
              /* GetYoDigits */
            ])(6, "acc-menu"), isActive = $sub.hasClass("is-active");
            if (_this.options.submenuToggle) {
              $elem.addClass("has-submenu-toggle");
              $elem.children("a").after('<button id="' + linkId + '" class="submenu-toggle" aria-controls="' + subId + '" aria-expanded="' + isActive + '" title="' + _this.options.submenuToggleText + '"><span class="submenu-toggle-text">' + _this.options.submenuToggleText + "</span></button>");
            } else {
              $elem.attr({
                "aria-controls": subId,
                "aria-expanded": isActive,
                "id": linkId
              });
            }
            $sub.attr({
              "aria-labelledby": linkId,
              "aria-hidden": !isActive,
              "role": "group",
              "id": subId
            });
          });
          this.$element.find("li").attr({
            "role": "treeitem"
          });
          var initPanes = this.$element.find(".is-active");
          if (initPanes.length) {
            var _this = this;
            initPanes.each(function() {
              _this.down(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this));
            });
          }
          this._events();
        }
        /**
         * Adds event handlers for items within the menu.
         * @private
         */
      }, {
        key: "_events",
        value: function _events() {
          var _this = this;
          this.$element.find("li").each(function() {
            var $submenu = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).children("[data-submenu]");
            if ($submenu.length) {
              if (_this.options.submenuToggle) {
                __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).children(".submenu-toggle").off("click.zf.accordionMenu").on("click.zf.accordionMenu", function(e2) {
                  _this.toggle($submenu);
                });
              } else {
                __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).children("a").off("click.zf.accordionMenu").on("click.zf.accordionMenu", function(e2) {
                  e2.preventDefault();
                  _this.toggle($submenu);
                });
              }
            }
          }).on("keydown.zf.accordionmenu", function(e2) {
            var $element = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this), $elements = $element.parent("ul").children("li"), $prevElement, $nextElement, $target = $element.children("[data-submenu]");
            $elements.each(function(i) {
              if (__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).is($element)) {
                $prevElement = $elements.eq(Math.max(0, i - 1)).find("a").first();
                $nextElement = $elements.eq(Math.min(i + 1, $elements.length - 1)).find("a").first();
                if (__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).children("[data-submenu]:visible").length) {
                  $nextElement = $element.find("li:first-child").find("a").first();
                }
                if (__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).is(":first-child")) {
                  $prevElement = $element.parents("li").first().find("a").first();
                } else if ($prevElement.parents("li").first().children("[data-submenu]:visible").length) {
                  $prevElement = $prevElement.parents("li").find("li:last-child").find("a").first();
                }
                if (__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).is(":last-child")) {
                  $nextElement = $element.parents("li").first().next("li").find("a").first();
                }
                return;
              }
            });
            __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__[
              "a"
              /* Keyboard */
            ].handleKey(e2, "AccordionMenu", {
              open: function() {
                if ($target.is(":hidden")) {
                  _this.down($target);
                  $target.find("li").first().find("a").first().focus();
                }
              },
              close: function() {
                if ($target.length && !$target.is(":hidden")) {
                  _this.up($target);
                } else if ($element.parent("[data-submenu]").length) {
                  _this.up($element.parent("[data-submenu]"));
                  $element.parents("li").first().find("a").first().focus();
                }
              },
              up: function() {
                $prevElement.focus();
                return true;
              },
              down: function() {
                $nextElement.focus();
                return true;
              },
              toggle: function() {
                if (_this.options.submenuToggle) {
                  return false;
                }
                if ($element.children("[data-submenu]").length) {
                  _this.toggle($element.children("[data-submenu]"));
                  return true;
                }
              },
              closeAll: function() {
                _this.hideAll();
              },
              handled: function(preventDefault) {
                if (preventDefault) {
                  e2.preventDefault();
                }
                e2.stopImmediatePropagation();
              }
            });
          });
        }
        /**
         * Closes all panes of the menu.
         * @function
         */
      }, {
        key: "hideAll",
        value: function hideAll() {
          this.up(this.$element.find("[data-submenu]"));
        }
        /**
         * Opens all panes of the menu.
         * @function
         */
      }, {
        key: "showAll",
        value: function showAll() {
          this.down(this.$element.find("[data-submenu]"));
        }
        /**
         * Toggles the open/close state of a submenu.
         * @function
         * @param {jQuery} $target - the submenu to toggle
         */
      }, {
        key: "toggle",
        value: function toggle($target) {
          if (!$target.is(":animated")) {
            if (!$target.is(":hidden")) {
              this.up($target);
            } else {
              this.down($target);
            }
          }
        }
        /**
         * Opens the sub-menu defined by `$target`.
         * @param {jQuery} $target - Sub-menu to open.
         * @fires AccordionMenu#down
         */
      }, {
        key: "down",
        value: function down($target) {
          var _this = this;
          if (!this.options.multiOpen) {
            this.up(this.$element.find(".is-active").not($target.parentsUntil(this.$element).add($target)));
          }
          $target.addClass("is-active").attr({ "aria-hidden": false });
          if (this.options.submenuToggle) {
            $target.prev(".submenu-toggle").attr({ "aria-expanded": true });
          } else {
            $target.parent(".is-accordion-submenu-parent").attr({ "aria-expanded": true });
          }
          $target.slideDown(_this.options.slideSpeed, function() {
            _this.$element.trigger("down.zf.accordionMenu", [$target]);
          });
        }
        /**
         * Closes the sub-menu defined by `$target`. All sub-menus inside the target will be closed as well.
         * @param {jQuery} $target - Sub-menu to close.
         * @fires AccordionMenu#up
         */
      }, {
        key: "up",
        value: function up($target) {
          var _this = this;
          $target.slideUp(_this.options.slideSpeed, function() {
            _this.$element.trigger("up.zf.accordionMenu", [$target]);
          });
          var $menus = $target.find("[data-submenu]").slideUp(0).addBack().attr("aria-hidden", true);
          if (this.options.submenuToggle) {
            $menus.prev(".submenu-toggle").attr("aria-expanded", false);
          } else {
            $menus.parent(".is-accordion-submenu-parent").attr("aria-expanded", false);
          }
        }
        /**
         * Destroys an instance of accordion menu.
         * @fires AccordionMenu#destroyed
         */
      }, {
        key: "_destroy",
        value: function _destroy() {
          this.$element.find("[data-submenu]").slideDown(0).css("display", "");
          this.$element.find("a").off("click.zf.accordionMenu");
          if (this.options.submenuToggle) {
            this.$element.find(".has-submenu-toggle").removeClass("has-submenu-toggle");
            this.$element.find(".submenu-toggle").remove();
          }
          __WEBPACK_IMPORTED_MODULE_2__foundation_util_nest__[
            "a"
            /* Nest */
          ].Burn(this.$element, "accordion");
        }
      }]);
      return AccordionMenu2;
    }(__WEBPACK_IMPORTED_MODULE_4__foundation_plugin__[
      "a"
      /* Plugin */
    ]);
    AccordionMenu.defaults = {
      /**
       * Amount of time to animate the opening of a submenu in ms.
       * @option
       * @type {number}
       * @default 250
       */
      slideSpeed: 250,
      /**
       * Adds a separate submenu toggle button. This allows the parent item to have a link.
       * @option
       * @example true
       */
      submenuToggle: false,
      /**
       * The text used for the submenu toggle if enabled. This is used for screen readers only.
       * @option
       * @example true
       */
      submenuToggleText: "Toggle menu",
      /**
       * Allow the menu to have multiple open panes.
       * @option
       * @type {boolean}
       * @default true
       */
      multiOpen: true
    };
  },
  /* 13 */
  /***/
  function(module2, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.d(__webpack_exports__, "a", function() {
      return Drilldown;
    });
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
    var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
    var __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__ = __webpack_require__(3);
    var __WEBPACK_IMPORTED_MODULE_2__foundation_util_nest__ = __webpack_require__(9);
    var __WEBPACK_IMPORTED_MODULE_3__foundation_util_core__ = __webpack_require__(1);
    var __WEBPACK_IMPORTED_MODULE_4__foundation_util_box__ = __webpack_require__(7);
    var __WEBPACK_IMPORTED_MODULE_5__foundation_plugin__ = __webpack_require__(2);
    var _createClass = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var Drilldown = function(_Plugin) {
      _inherits(Drilldown2, _Plugin);
      function Drilldown2() {
        _classCallCheck(this, Drilldown2);
        return _possibleConstructorReturn(this, (Drilldown2.__proto__ || Object.getPrototypeOf(Drilldown2)).apply(this, arguments));
      }
      _createClass(Drilldown2, [{
        key: "_setup",
        /**
         * Creates a new instance of a drilldown menu.
         * @class
         * @name Drilldown
         * @param {jQuery} element - jQuery object to make into an accordion menu.
         * @param {Object} options - Overrides to the default plugin settings.
         */
        value: function _setup(element, options) {
          this.$element = element;
          this.options = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend({}, Drilldown2.defaults, this.$element.data(), options);
          this.className = "Drilldown";
          this._init();
          __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__[
            "a"
            /* Keyboard */
          ].register("Drilldown", {
            "ENTER": "open",
            "SPACE": "open",
            "ARROW_RIGHT": "next",
            "ARROW_UP": "up",
            "ARROW_DOWN": "down",
            "ARROW_LEFT": "previous",
            "ESCAPE": "close",
            "TAB": "down",
            "SHIFT_TAB": "up"
          });
        }
        /**
         * Initializes the drilldown by creating jQuery collections of elements
         * @private
         */
      }, {
        key: "_init",
        value: function _init() {
          __WEBPACK_IMPORTED_MODULE_2__foundation_util_nest__[
            "a"
            /* Nest */
          ].Feather(this.$element, "drilldown");
          if (this.options.autoApplyClass) {
            this.$element.addClass("drilldown");
          }
          this.$element.attr({
            "role": "tree",
            "aria-multiselectable": false
          });
          this.$submenuAnchors = this.$element.find("li.is-drilldown-submenu-parent").children("a");
          this.$submenus = this.$submenuAnchors.parent("li").children("[data-submenu]").attr("role", "group");
          this.$menuItems = this.$element.find("li").not(".js-drilldown-back").attr("role", "treeitem").find("a");
          this.$element.attr("data-mutate", this.$element.attr("data-drilldown") || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__foundation_util_core__[
            "b"
            /* GetYoDigits */
          ])(6, "drilldown"));
          this._prepareMenu();
          this._registerEvents();
          this._keyboardEvents();
        }
        /**
         * prepares drilldown menu by setting attributes to links and elements
         * sets a min height to prevent content jumping
         * wraps the element if not already wrapped
         * @private
         * @function
         */
      }, {
        key: "_prepareMenu",
        value: function _prepareMenu() {
          var _this = this;
          this.$submenuAnchors.each(function() {
            var $link = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this);
            var $sub = $link.parent();
            if (_this.options.parentLink) {
              $link.clone().prependTo($sub.children("[data-submenu]")).wrap('<li class="is-submenu-parent-item is-submenu-item is-drilldown-submenu-item" role="menuitem"></li>');
            }
            $link.data("savedHref", $link.attr("href")).removeAttr("href").attr("tabindex", 0);
            $link.children("[data-submenu]").attr({
              "aria-hidden": true,
              "tabindex": 0,
              "role": "group"
            });
            _this._events($link);
          });
          this.$submenus.each(function() {
            var $menu = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this), $back = $menu.find(".js-drilldown-back");
            if (!$back.length) {
              switch (_this.options.backButtonPosition) {
                case "bottom":
                  $menu.append(_this.options.backButton);
                  break;
                case "top":
                  $menu.prepend(_this.options.backButton);
                  break;
                default:
                  console.error("Unsupported backButtonPosition value '" + _this.options.backButtonPosition + "'");
              }
            }
            _this._back($menu);
          });
          this.$submenus.addClass("invisible");
          if (!this.options.autoHeight) {
            this.$submenus.addClass("drilldown-submenu-cover-previous");
          }
          if (!this.$element.parent().hasClass("is-drilldown")) {
            this.$wrapper = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this.options.wrapper).addClass("is-drilldown");
            if (this.options.animateHeight) this.$wrapper.addClass("animate-height");
            this.$element.wrap(this.$wrapper);
          }
          this.$wrapper = this.$element.parent();
          this.$wrapper.css(this._getMaxDims());
        }
      }, {
        key: "_resize",
        value: function _resize() {
          this.$wrapper.css({ "max-width": "none", "min-height": "none" });
          this.$wrapper.css(this._getMaxDims());
        }
        /**
         * Adds event handlers to elements in the menu.
         * @function
         * @private
         * @param {jQuery} $elem - the current menu item to add handlers to.
         */
      }, {
        key: "_events",
        value: function _events($elem) {
          var _this = this;
          $elem.off("click.zf.drilldown").on("click.zf.drilldown", function(e2) {
            if (__WEBPACK_IMPORTED_MODULE_0_jquery___default()(e2.target).parentsUntil("ul", "li").hasClass("is-drilldown-submenu-parent")) {
              e2.stopImmediatePropagation();
              e2.preventDefault();
            }
            _this._show($elem.parent("li"));
            if (_this.options.closeOnClick) {
              var $body = __WEBPACK_IMPORTED_MODULE_0_jquery___default()("body");
              $body.off(".zf.drilldown").on("click.zf.drilldown", function(e3) {
                if (e3.target === _this.$element[0] || __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.contains(_this.$element[0], e3.target)) {
                  return;
                }
                e3.preventDefault();
                _this._hideAll();
                $body.off(".zf.drilldown");
              });
            }
          });
        }
        /**
         * Adds event handlers to the menu element.
         * @function
         * @private
         */
      }, {
        key: "_registerEvents",
        value: function _registerEvents() {
          if (this.options.scrollTop) {
            this._bindHandler = this._scrollTop.bind(this);
            this.$element.on("open.zf.drilldown hide.zf.drilldown closed.zf.drilldown", this._bindHandler);
          }
          this.$element.on("mutateme.zf.trigger", this._resize.bind(this));
        }
        /**
         * Scroll to Top of Element or data-scroll-top-element
         * @function
         * @fires Drilldown#scrollme
         */
      }, {
        key: "_scrollTop",
        value: function _scrollTop() {
          var _this = this;
          var $scrollTopElement = _this.options.scrollTopElement != "" ? __WEBPACK_IMPORTED_MODULE_0_jquery___default()(_this.options.scrollTopElement) : _this.$element, scrollPos = parseInt($scrollTopElement.offset().top + _this.options.scrollTopOffset, 10);
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()("html, body").stop(true).animate({ scrollTop: scrollPos }, _this.options.animationDuration, _this.options.animationEasing, function() {
            if (this === __WEBPACK_IMPORTED_MODULE_0_jquery___default()("html")[0]) _this.$element.trigger("scrollme.zf.drilldown");
          });
        }
        /**
         * Adds keydown event listener to `li`'s in the menu.
         * @private
         */
      }, {
        key: "_keyboardEvents",
        value: function _keyboardEvents() {
          var _this = this;
          this.$menuItems.add(this.$element.find(".js-drilldown-back > a, .is-submenu-parent-item > a")).on("keydown.zf.drilldown", function(e2) {
            var $element = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this), $elements = $element.parent("li").parent("ul").children("li").children("a"), $prevElement, $nextElement;
            $elements.each(function(i) {
              if (__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).is($element)) {
                $prevElement = $elements.eq(Math.max(0, i - 1));
                $nextElement = $elements.eq(Math.min(i + 1, $elements.length - 1));
                return;
              }
            });
            __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__[
              "a"
              /* Keyboard */
            ].handleKey(e2, "Drilldown", {
              next: function() {
                if ($element.is(_this.$submenuAnchors)) {
                  _this._show($element.parent("li"));
                  $element.parent("li").one(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__foundation_util_core__[
                    "c"
                    /* transitionend */
                  ])($element), function() {
                    $element.parent("li").find("ul li a").filter(_this.$menuItems).first().focus();
                  });
                  return true;
                }
              },
              previous: function() {
                _this._hide($element.parent("li").parent("ul"));
                $element.parent("li").parent("ul").one(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__foundation_util_core__[
                  "c"
                  /* transitionend */
                ])($element), function() {
                  setTimeout(function() {
                    $element.parent("li").parent("ul").parent("li").children("a").first().focus();
                  }, 1);
                });
                return true;
              },
              up: function() {
                $prevElement.focus();
                return !$element.is(_this.$element.find("> li:first-child > a"));
              },
              down: function() {
                $nextElement.focus();
                return !$element.is(_this.$element.find("> li:last-child > a"));
              },
              close: function() {
                if (!$element.is(_this.$element.find("> li > a"))) {
                  _this._hide($element.parent().parent());
                  $element.parent().parent().siblings("a").focus();
                }
              },
              open: function() {
                if (!$element.is(_this.$menuItems)) {
                  _this._hide($element.parent("li").parent("ul"));
                  $element.parent("li").parent("ul").one(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__foundation_util_core__[
                    "c"
                    /* transitionend */
                  ])($element), function() {
                    setTimeout(function() {
                      $element.parent("li").parent("ul").parent("li").children("a").first().focus();
                    }, 1);
                  });
                  return true;
                } else if ($element.is(_this.$submenuAnchors)) {
                  _this._show($element.parent("li"));
                  $element.parent("li").one(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__foundation_util_core__[
                    "c"
                    /* transitionend */
                  ])($element), function() {
                    $element.parent("li").find("ul li a").filter(_this.$menuItems).first().focus();
                  });
                  return true;
                }
              },
              handled: function(preventDefault) {
                if (preventDefault) {
                  e2.preventDefault();
                }
                e2.stopImmediatePropagation();
              }
            });
          });
        }
        /**
         * Closes all open elements, and returns to root menu.
         * @function
         * @fires Drilldown#closed
         */
      }, {
        key: "_hideAll",
        value: function _hideAll() {
          var $elem = this.$element.find(".is-drilldown-submenu.is-active").addClass("is-closing");
          if (this.options.autoHeight) this.$wrapper.css({ height: $elem.parent().closest("ul").data("calcHeight") });
          $elem.one(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__foundation_util_core__[
            "c"
            /* transitionend */
          ])($elem), function(e2) {
            $elem.removeClass("is-active is-closing");
          });
          this.$element.trigger("closed.zf.drilldown");
        }
        /**
         * Adds event listener for each `back` button, and closes open menus.
         * @function
         * @fires Drilldown#back
         * @param {jQuery} $elem - the current sub-menu to add `back` event.
         */
      }, {
        key: "_back",
        value: function _back($elem) {
          var _this = this;
          $elem.off("click.zf.drilldown");
          $elem.children(".js-drilldown-back").on("click.zf.drilldown", function(e2) {
            e2.stopImmediatePropagation();
            _this._hide($elem);
            var parentSubMenu = $elem.parent("li").parent("ul").parent("li");
            if (parentSubMenu.length) {
              _this._show(parentSubMenu);
            }
          });
        }
        /**
         * Adds event listener to menu items w/o submenus to close open menus on click.
         * @function
         * @private
         */
      }, {
        key: "_menuLinkEvents",
        value: function _menuLinkEvents() {
          var _this = this;
          this.$menuItems.not(".is-drilldown-submenu-parent").off("click.zf.drilldown").on("click.zf.drilldown", function(e2) {
            setTimeout(function() {
              _this._hideAll();
            }, 0);
          });
        }
        /**
         * Opens a submenu.
         * @function
         * @fires Drilldown#open
         * @param {jQuery} $elem - the current element with a submenu to open, i.e. the `li` tag.
         */
      }, {
        key: "_show",
        value: function _show($elem) {
          if (this.options.autoHeight) this.$wrapper.css({ height: $elem.children("[data-submenu]").data("calcHeight") });
          $elem.attr("aria-expanded", true);
          $elem.children("[data-submenu]").addClass("is-active").removeClass("invisible").attr("aria-hidden", false);
          this.$element.trigger("open.zf.drilldown", [$elem]);
        }
      }, {
        key: "_hide",
        /**
         * Hides a submenu
         * @function
         * @fires Drilldown#hide
         * @param {jQuery} $elem - the current sub-menu to hide, i.e. the `ul` tag.
         */
        value: function _hide($elem) {
          if (this.options.autoHeight) this.$wrapper.css({ height: $elem.parent().closest("ul").data("calcHeight") });
          var _this = this;
          $elem.parent("li").attr("aria-expanded", false);
          $elem.attr("aria-hidden", true).addClass("is-closing");
          $elem.addClass("is-closing").one(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__foundation_util_core__[
            "c"
            /* transitionend */
          ])($elem), function() {
            $elem.removeClass("is-active is-closing");
            $elem.blur().addClass("invisible");
          });
          $elem.trigger("hide.zf.drilldown", [$elem]);
        }
        /**
         * Iterates through the nested menus to calculate the min-height, and max-width for the menu.
         * Prevents content jumping.
         * @function
         * @private
         */
      }, {
        key: "_getMaxDims",
        value: function _getMaxDims() {
          var maxHeight = 0, result = {}, _this = this;
          this.$submenus.add(this.$element).each(function() {
            var numOfElems = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).children("li").length;
            var height = __WEBPACK_IMPORTED_MODULE_4__foundation_util_box__[
              "a"
              /* Box */
            ].GetDimensions(this).height;
            maxHeight = height > maxHeight ? height : maxHeight;
            if (_this.options.autoHeight) {
              __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).data("calcHeight", height);
              if (!__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).hasClass("is-drilldown-submenu")) result["height"] = height;
            }
          });
          if (!this.options.autoHeight) result["min-height"] = maxHeight + "px";
          result["max-width"] = this.$element[0].getBoundingClientRect().width + "px";
          return result;
        }
        /**
         * Destroys the Drilldown Menu
         * @function
         */
      }, {
        key: "_destroy",
        value: function _destroy() {
          if (this.options.scrollTop) this.$element.off(".zf.drilldown", this._bindHandler);
          this._hideAll();
          this.$element.off("mutateme.zf.trigger");
          __WEBPACK_IMPORTED_MODULE_2__foundation_util_nest__[
            "a"
            /* Nest */
          ].Burn(this.$element, "drilldown");
          this.$element.unwrap().find(".js-drilldown-back, .is-submenu-parent-item").remove().end().find(".is-active, .is-closing, .is-drilldown-submenu").removeClass("is-active is-closing is-drilldown-submenu").end().find("[data-submenu]").removeAttr("aria-hidden tabindex role");
          this.$submenuAnchors.each(function() {
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).off(".zf.drilldown");
          });
          this.$submenus.removeClass("drilldown-submenu-cover-previous invisible");
          this.$element.find("a").each(function() {
            var $link = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this);
            $link.removeAttr("tabindex");
            if ($link.data("savedHref")) {
              $link.attr("href", $link.data("savedHref")).removeData("savedHref");
            } else {
              return;
            }
          });
        }
      }]);
      return Drilldown2;
    }(__WEBPACK_IMPORTED_MODULE_5__foundation_plugin__[
      "a"
      /* Plugin */
    ]);
    Drilldown.defaults = {
      /**
       * Drilldowns depend on styles in order to function properly; in the default build of Foundation these are
       * on the `drilldown` class. This option auto-applies this class to the drilldown upon initialization.
       * @option
       * @type {boolian}
       * @default true
       */
      autoApplyClass: true,
      /**
       * Markup used for JS generated back button. Prepended  or appended (see backButtonPosition) to submenu lists and deleted on `destroy` method, 'js-drilldown-back' class required. Remove the backslash (`\`) if copy and pasting.
       * @option
       * @type {string}
       * @default '<li class="js-drilldown-back"><a tabindex="0">Back</a></li>'
       */
      backButton: '<li class="js-drilldown-back"><a tabindex="0">Back</a></li>',
      /**
       * Position the back button either at the top or bottom of drilldown submenus. Can be `'left'` or `'bottom'`.
       * @option
       * @type {string}
       * @default top
       */
      backButtonPosition: "top",
      /**
       * Markup used to wrap drilldown menu. Use a class name for independent styling; the JS applied class: `is-drilldown` is required. Remove the backslash (`\`) if copy and pasting.
       * @option
       * @type {string}
       * @default '<div></div>'
       */
      wrapper: "<div></div>",
      /**
       * Adds the parent link to the submenu.
       * @option
       * @type {boolean}
       * @default false
       */
      parentLink: false,
      /**
       * Allow the menu to return to root list on body click.
       * @option
       * @type {boolean}
       * @default false
       */
      closeOnClick: false,
      /**
       * Allow the menu to auto adjust height.
       * @option
       * @type {boolean}
       * @default false
       */
      autoHeight: false,
      /**
       * Animate the auto adjust height.
       * @option
       * @type {boolean}
       * @default false
       */
      animateHeight: false,
      /**
       * Scroll to the top of the menu after opening a submenu or navigating back using the menu back button
       * @option
       * @type {boolean}
       * @default false
       */
      scrollTop: false,
      /**
       * String jquery selector (for example 'body') of element to take offset().top from, if empty string the drilldown menu offset().top is taken
       * @option
       * @type {string}
       * @default ''
       */
      scrollTopElement: "",
      /**
       * ScrollTop offset
       * @option
       * @type {number}
       * @default 0
       */
      scrollTopOffset: 0,
      /**
       * Scroll animation duration
       * @option
       * @type {number}
       * @default 500
       */
      animationDuration: 500,
      /**
       * Scroll animation easing. Can be `'swing'` or `'linear'`.
       * @option
       * @type {string}
       * @see {@link https://api.jquery.com/animate|JQuery animate}
       * @default 'swing'
       */
      animationEasing: "swing"
      // holdOpen: false
    };
  },
  /* 14 */
  /***/
  function(module2, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.d(__webpack_exports__, "a", function() {
      return DropdownMenu;
    });
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
    var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
    var __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__ = __webpack_require__(3);
    var __WEBPACK_IMPORTED_MODULE_2__foundation_util_nest__ = __webpack_require__(9);
    var __WEBPACK_IMPORTED_MODULE_3__foundation_util_box__ = __webpack_require__(7);
    var __WEBPACK_IMPORTED_MODULE_4__foundation_util_core__ = __webpack_require__(1);
    var __WEBPACK_IMPORTED_MODULE_5__foundation_plugin__ = __webpack_require__(2);
    var _createClass = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var DropdownMenu = function(_Plugin) {
      _inherits(DropdownMenu2, _Plugin);
      function DropdownMenu2() {
        _classCallCheck(this, DropdownMenu2);
        return _possibleConstructorReturn(this, (DropdownMenu2.__proto__ || Object.getPrototypeOf(DropdownMenu2)).apply(this, arguments));
      }
      _createClass(DropdownMenu2, [{
        key: "_setup",
        /**
         * Creates a new instance of DropdownMenu.
         * @class
         * @name DropdownMenu
         * @fires DropdownMenu#init
         * @param {jQuery} element - jQuery object to make into a dropdown menu.
         * @param {Object} options - Overrides to the default plugin settings.
         */
        value: function _setup(element, options) {
          this.$element = element;
          this.options = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend({}, DropdownMenu2.defaults, this.$element.data(), options);
          this.className = "DropdownMenu";
          this._init();
          __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__[
            "a"
            /* Keyboard */
          ].register("DropdownMenu", {
            "ENTER": "open",
            "SPACE": "open",
            "ARROW_RIGHT": "next",
            "ARROW_UP": "up",
            "ARROW_DOWN": "down",
            "ARROW_LEFT": "previous",
            "ESCAPE": "close"
          });
        }
        /**
         * Initializes the plugin, and calls _prepareMenu
         * @private
         * @function
         */
      }, {
        key: "_init",
        value: function _init() {
          __WEBPACK_IMPORTED_MODULE_2__foundation_util_nest__[
            "a"
            /* Nest */
          ].Feather(this.$element, "dropdown");
          var subs = this.$element.find("li.is-dropdown-submenu-parent");
          this.$element.children(".is-dropdown-submenu-parent").children(".is-dropdown-submenu").addClass("first-sub");
          this.$menuItems = this.$element.find('[role="menuitem"]');
          this.$tabs = this.$element.children('[role="menuitem"]');
          this.$tabs.find("ul.is-dropdown-submenu").addClass(this.options.verticalClass);
          if (this.options.alignment === "auto") {
            if (this.$element.hasClass(this.options.rightClass) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__foundation_util_core__[
              "a"
              /* rtl */
            ])() || this.$element.parents(".top-bar-right").is("*")) {
              this.options.alignment = "right";
              subs.addClass("opens-left");
            } else {
              this.options.alignment = "left";
              subs.addClass("opens-right");
            }
          } else {
            if (this.options.alignment === "right") {
              subs.addClass("opens-left");
            } else {
              subs.addClass("opens-right");
            }
          }
          this.changed = false;
          this._events();
        }
      }, {
        key: "_isVertical",
        value: function _isVertical() {
          return this.$tabs.css("display") === "block" || this.$element.css("flex-direction") === "column";
        }
      }, {
        key: "_isRtl",
        value: function _isRtl() {
          return this.$element.hasClass("align-right") || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__foundation_util_core__[
            "a"
            /* rtl */
          ])() && !this.$element.hasClass("align-left");
        }
        /**
         * Adds event listeners to elements within the menu
         * @private
         * @function
         */
      }, {
        key: "_events",
        value: function _events() {
          var _this = this, hasTouch = "ontouchstart" in window || typeof window.ontouchstart !== "undefined", parClass = "is-dropdown-submenu-parent";
          var handleClickFn = function(e2) {
            var $elem = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(e2.target).parentsUntil("ul", "." + parClass), hasSub = $elem.hasClass(parClass), hasClicked = $elem.attr("data-is-click") === "true", $sub = $elem.children(".is-dropdown-submenu");
            if (hasSub) {
              if (hasClicked) {
                if (!_this.options.closeOnClick || !_this.options.clickOpen && !hasTouch || _this.options.forceFollow && hasTouch) {
                  return;
                } else {
                  e2.stopImmediatePropagation();
                  e2.preventDefault();
                  _this._hide($elem);
                }
              } else {
                e2.preventDefault();
                e2.stopImmediatePropagation();
                _this._show($sub);
                $elem.add($elem.parentsUntil(_this.$element, "." + parClass)).attr("data-is-click", true);
              }
            }
          };
          if (this.options.clickOpen || hasTouch) {
            this.$menuItems.on("click.zf.dropdownmenu touchstart.zf.dropdownmenu", handleClickFn);
          }
          if (_this.options.closeOnClickInside) {
            this.$menuItems.on("click.zf.dropdownmenu", function(e2) {
              var $elem = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this), hasSub = $elem.hasClass(parClass);
              if (!hasSub) {
                _this._hide();
              }
            });
          }
          if (!this.options.disableHover) {
            this.$menuItems.on("mouseenter.zf.dropdownmenu", function(e2) {
              var $elem = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this), hasSub = $elem.hasClass(parClass);
              if (hasSub) {
                clearTimeout($elem.data("_delay"));
                $elem.data("_delay", setTimeout(function() {
                  _this._show($elem.children(".is-dropdown-submenu"));
                }, _this.options.hoverDelay));
              }
            }).on("mouseleave.zf.dropdownmenu", function(e2) {
              var $elem = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this), hasSub = $elem.hasClass(parClass);
              if (hasSub && _this.options.autoclose) {
                if ($elem.attr("data-is-click") === "true" && _this.options.clickOpen) {
                  return false;
                }
                clearTimeout($elem.data("_delay"));
                $elem.data("_delay", setTimeout(function() {
                  _this._hide($elem);
                }, _this.options.closingTime));
              }
            });
          }
          this.$menuItems.on("keydown.zf.dropdownmenu", function(e2) {
            var $element = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(e2.target).parentsUntil("ul", '[role="menuitem"]'), isTab = _this.$tabs.index($element) > -1, $elements = isTab ? _this.$tabs : $element.siblings("li").add($element), $prevElement, $nextElement;
            $elements.each(function(i) {
              if (__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).is($element)) {
                $prevElement = $elements.eq(i - 1);
                $nextElement = $elements.eq(i + 1);
                return;
              }
            });
            var nextSibling = function() {
              $nextElement.children("a:first").focus();
              e2.preventDefault();
            }, prevSibling = function() {
              $prevElement.children("a:first").focus();
              e2.preventDefault();
            }, openSub = function() {
              var $sub = $element.children("ul.is-dropdown-submenu");
              if ($sub.length) {
                _this._show($sub);
                $element.find("li > a:first").focus();
                e2.preventDefault();
              } else {
                return;
              }
            }, closeSub = function() {
              var close = $element.parent("ul").parent("li");
              close.children("a:first").focus();
              _this._hide(close);
              e2.preventDefault();
            };
            var functions = {
              open: openSub,
              close: function() {
                _this._hide(_this.$element);
                _this.$menuItems.eq(0).children("a").focus();
                e2.preventDefault();
              },
              handled: function() {
                e2.stopImmediatePropagation();
              }
            };
            if (isTab) {
              if (_this._isVertical()) {
                if (_this._isRtl()) {
                  __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend(functions, {
                    down: nextSibling,
                    up: prevSibling,
                    next: closeSub,
                    previous: openSub
                  });
                } else {
                  __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend(functions, {
                    down: nextSibling,
                    up: prevSibling,
                    next: openSub,
                    previous: closeSub
                  });
                }
              } else {
                if (_this._isRtl()) {
                  __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend(functions, {
                    next: prevSibling,
                    previous: nextSibling,
                    down: openSub,
                    up: closeSub
                  });
                } else {
                  __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend(functions, {
                    next: nextSibling,
                    previous: prevSibling,
                    down: openSub,
                    up: closeSub
                  });
                }
              }
            } else {
              if (_this._isRtl()) {
                __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend(functions, {
                  next: closeSub,
                  previous: openSub,
                  down: nextSibling,
                  up: prevSibling
                });
              } else {
                __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend(functions, {
                  next: openSub,
                  previous: closeSub,
                  down: nextSibling,
                  up: prevSibling
                });
              }
            }
            __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__[
              "a"
              /* Keyboard */
            ].handleKey(e2, "DropdownMenu", functions);
          });
        }
        /**
         * Adds an event handler to the body to close any dropdowns on a click.
         * @function
         * @private
         */
      }, {
        key: "_addBodyHandler",
        value: function _addBodyHandler() {
          var $body = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(document.body), _this = this;
          $body.off("mouseup.zf.dropdownmenu touchend.zf.dropdownmenu").on("mouseup.zf.dropdownmenu touchend.zf.dropdownmenu", function(e2) {
            var $link = _this.$element.find(e2.target);
            if ($link.length) {
              return;
            }
            _this._hide();
            $body.off("mouseup.zf.dropdownmenu touchend.zf.dropdownmenu");
          });
        }
        /**
         * Opens a dropdown pane, and checks for collisions first.
         * @param {jQuery} $sub - ul element that is a submenu to show
         * @function
         * @private
         * @fires DropdownMenu#show
         */
      }, {
        key: "_show",
        value: function _show($sub) {
          var idx = this.$tabs.index(this.$tabs.filter(function(i, el) {
            return __WEBPACK_IMPORTED_MODULE_0_jquery___default()(el).find($sub).length > 0;
          }));
          var $sibs = $sub.parent("li.is-dropdown-submenu-parent").siblings("li.is-dropdown-submenu-parent");
          this._hide($sibs, idx);
          $sub.css("visibility", "hidden").addClass("js-dropdown-active").parent("li.is-dropdown-submenu-parent").addClass("is-active");
          var clear = __WEBPACK_IMPORTED_MODULE_3__foundation_util_box__[
            "a"
            /* Box */
          ].ImNotTouchingYou($sub, null, true);
          if (!clear) {
            var oldClass = this.options.alignment === "left" ? "-right" : "-left", $parentLi = $sub.parent(".is-dropdown-submenu-parent");
            $parentLi.removeClass("opens" + oldClass).addClass("opens-" + this.options.alignment);
            clear = __WEBPACK_IMPORTED_MODULE_3__foundation_util_box__[
              "a"
              /* Box */
            ].ImNotTouchingYou($sub, null, true);
            if (!clear) {
              $parentLi.removeClass("opens-" + this.options.alignment).addClass("opens-inner");
            }
            this.changed = true;
          }
          $sub.css("visibility", "");
          if (this.options.closeOnClick) {
            this._addBodyHandler();
          }
          this.$element.trigger("show.zf.dropdownmenu", [$sub]);
        }
        /**
         * Hides a single, currently open dropdown pane, if passed a parameter, otherwise, hides everything.
         * @function
         * @param {jQuery} $elem - element with a submenu to hide
         * @param {Number} idx - index of the $tabs collection to hide
         * @private
         */
      }, {
        key: "_hide",
        value: function _hide($elem, idx) {
          var $toClose;
          if ($elem && $elem.length) {
            $toClose = $elem;
          } else if (idx !== void 0) {
            $toClose = this.$tabs.not(function(i, el) {
              return i === idx;
            });
          } else {
            $toClose = this.$element;
          }
          var somethingToClose = $toClose.hasClass("is-active") || $toClose.find(".is-active").length > 0;
          if (somethingToClose) {
            $toClose.find("li.is-active").add($toClose).attr({
              "data-is-click": false
            }).removeClass("is-active");
            $toClose.find("ul.js-dropdown-active").removeClass("js-dropdown-active");
            if (this.changed || $toClose.find("opens-inner").length) {
              var oldClass = this.options.alignment === "left" ? "right" : "left";
              $toClose.find("li.is-dropdown-submenu-parent").add($toClose).removeClass("opens-inner opens-" + this.options.alignment).addClass("opens-" + oldClass);
              this.changed = false;
            }
            this.$element.trigger("hide.zf.dropdownmenu", [$toClose]);
          }
        }
        /**
         * Destroys the plugin.
         * @function
         */
      }, {
        key: "_destroy",
        value: function _destroy() {
          this.$menuItems.off(".zf.dropdownmenu").removeAttr("data-is-click").removeClass("is-right-arrow is-left-arrow is-down-arrow opens-right opens-left opens-inner");
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()(document.body).off(".zf.dropdownmenu");
          __WEBPACK_IMPORTED_MODULE_2__foundation_util_nest__[
            "a"
            /* Nest */
          ].Burn(this.$element, "dropdown");
        }
      }]);
      return DropdownMenu2;
    }(__WEBPACK_IMPORTED_MODULE_5__foundation_plugin__[
      "a"
      /* Plugin */
    ]);
    DropdownMenu.defaults = {
      /**
       * Disallows hover events from opening submenus
       * @option
       * @type {boolean}
       * @default false
       */
      disableHover: false,
      /**
       * Allow a submenu to automatically close on a mouseleave event, if not clicked open.
       * @option
       * @type {boolean}
       * @default true
       */
      autoclose: true,
      /**
       * Amount of time to delay opening a submenu on hover event.
       * @option
       * @type {number}
       * @default 50
       */
      hoverDelay: 50,
      /**
       * Allow a submenu to open/remain open on parent click event. Allows cursor to move away from menu.
       * @option
       * @type {boolean}
       * @default false
       */
      clickOpen: false,
      /**
       * Amount of time to delay closing a submenu on a mouseleave event.
       * @option
       * @type {number}
       * @default 500
       */
      closingTime: 500,
      /**
       * Position of the menu relative to what direction the submenus should open. Handled by JS. Can be `'auto'`, `'left'` or `'right'`.
       * @option
       * @type {string}
       * @default 'auto'
       */
      alignment: "auto",
      /**
       * Allow clicks on the body to close any open submenus.
       * @option
       * @type {boolean}
       * @default true
       */
      closeOnClick: true,
      /**
       * Allow clicks on leaf anchor links to close any open submenus.
       * @option
       * @type {boolean}
       * @default true
       */
      closeOnClickInside: true,
      /**
       * Class applied to vertical oriented menus, Foundation default is `vertical`. Update this if using your own class.
       * @option
       * @type {string}
       * @default 'vertical'
       */
      verticalClass: "vertical",
      /**
       * Class applied to right-side oriented menus, Foundation default is `align-right`. Update this if using your own class.
       * @option
       * @type {string}
       * @default 'align-right'
       */
      rightClass: "align-right",
      /**
       * Boolean to force overide the clicking of links to perform default action, on second touch event for mobile.
       * @option
       * @type {boolean}
       * @default true
       */
      forceFollow: true
    };
  },
  /* 15 */
  /***/
  function(module2, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.d(__webpack_exports__, "a", function() {
      return Positionable;
    });
    var __WEBPACK_IMPORTED_MODULE_0__foundation_util_box__ = __webpack_require__(7);
    var __WEBPACK_IMPORTED_MODULE_1__foundation_plugin__ = __webpack_require__(2);
    var __WEBPACK_IMPORTED_MODULE_2__foundation_util_core__ = __webpack_require__(1);
    var _createClass = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var POSITIONS = ["left", "right", "top", "bottom"];
    var VERTICAL_ALIGNMENTS = ["top", "bottom", "center"];
    var HORIZONTAL_ALIGNMENTS = ["left", "right", "center"];
    var ALIGNMENTS = {
      "left": VERTICAL_ALIGNMENTS,
      "right": VERTICAL_ALIGNMENTS,
      "top": HORIZONTAL_ALIGNMENTS,
      "bottom": HORIZONTAL_ALIGNMENTS
    };
    function nextItem(item, array) {
      var currentIdx = array.indexOf(item);
      if (currentIdx === array.length - 1) {
        return array[0];
      } else {
        return array[currentIdx + 1];
      }
    }
    var Positionable = function(_Plugin) {
      _inherits(Positionable2, _Plugin);
      function Positionable2() {
        _classCallCheck(this, Positionable2);
        return _possibleConstructorReturn(this, (Positionable2.__proto__ || Object.getPrototypeOf(Positionable2)).apply(this, arguments));
      }
      _createClass(Positionable2, [{
        key: "_init",
        /**
         * Abstract class encapsulating the tether-like explicit positioning logic
         * including repositioning based on overlap.
         * Expects classes to define defaults for vOffset, hOffset, position,
         * alignment, allowOverlap, and allowBottomOverlap. They can do this by
         * extending the defaults, or (for now recommended due to the way docs are
         * generated) by explicitly declaring them.
         *
         **/
        value: function _init() {
          this.triedPositions = {};
          this.position = this.options.position === "auto" ? this._getDefaultPosition() : this.options.position;
          this.alignment = this.options.alignment === "auto" ? this._getDefaultAlignment() : this.options.alignment;
        }
      }, {
        key: "_getDefaultPosition",
        value: function _getDefaultPosition() {
          return "bottom";
        }
      }, {
        key: "_getDefaultAlignment",
        value: function _getDefaultAlignment() {
          switch (this.position) {
            case "bottom":
            case "top":
              return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__foundation_util_core__[
                "a"
                /* rtl */
              ])() ? "right" : "left";
            case "left":
            case "right":
              return "bottom";
          }
        }
        /**
         * Adjusts the positionable possible positions by iterating through alignments
         * and positions.
         * @function
         * @private
         */
      }, {
        key: "_reposition",
        value: function _reposition() {
          if (this._alignmentsExhausted(this.position)) {
            this.position = nextItem(this.position, POSITIONS);
            this.alignment = ALIGNMENTS[this.position][0];
          } else {
            this._realign();
          }
        }
        /**
         * Adjusts the dropdown pane possible positions by iterating through alignments
         * on the current position.
         * @function
         * @private
         */
      }, {
        key: "_realign",
        value: function _realign() {
          this._addTriedPosition(this.position, this.alignment);
          this.alignment = nextItem(this.alignment, ALIGNMENTS[this.position]);
        }
      }, {
        key: "_addTriedPosition",
        value: function _addTriedPosition(position, alignment) {
          this.triedPositions[position] = this.triedPositions[position] || [];
          this.triedPositions[position].push(alignment);
        }
      }, {
        key: "_positionsExhausted",
        value: function _positionsExhausted() {
          var isExhausted = true;
          for (var i = 0; i < POSITIONS.length; i++) {
            isExhausted = isExhausted && this._alignmentsExhausted(POSITIONS[i]);
          }
          return isExhausted;
        }
      }, {
        key: "_alignmentsExhausted",
        value: function _alignmentsExhausted(position) {
          return this.triedPositions[position] && this.triedPositions[position].length == ALIGNMENTS[position].length;
        }
        // When we're trying to center, we don't want to apply offset that's going to
        // take us just off center, so wrap around to return 0 for the appropriate
        // offset in those alignments.  TODO: Figure out if we want to make this
        // configurable behavior... it feels more intuitive, especially for tooltips, but
        // it's possible someone might actually want to start from center and then nudge
        // slightly off.
      }, {
        key: "_getVOffset",
        value: function _getVOffset() {
          return this.options.vOffset;
        }
      }, {
        key: "_getHOffset",
        value: function _getHOffset() {
          return this.options.hOffset;
        }
      }, {
        key: "_setPosition",
        value: function _setPosition($anchor, $element, $parent) {
          if ($anchor.attr("aria-expanded") === "false") {
            return false;
          }
          var $eleDims2 = __WEBPACK_IMPORTED_MODULE_0__foundation_util_box__[
            "a"
            /* Box */
          ].GetDimensions($element), $anchorDims2 = __WEBPACK_IMPORTED_MODULE_0__foundation_util_box__[
            "a"
            /* Box */
          ].GetDimensions($anchor);
          $element.offset(__WEBPACK_IMPORTED_MODULE_0__foundation_util_box__[
            "a"
            /* Box */
          ].GetExplicitOffsets($element, $anchor, this.position, this.alignment, this._getVOffset(), this._getHOffset()));
          if (!this.options.allowOverlap) {
            var overlaps = {};
            var minOverlap = 1e8;
            var minCoordinates = { position: this.position, alignment: this.alignment };
            while (!this._positionsExhausted()) {
              var overlap = __WEBPACK_IMPORTED_MODULE_0__foundation_util_box__[
                "a"
                /* Box */
              ].OverlapArea($element, $parent, false, false, this.options.allowBottomOverlap);
              if (overlap === 0) {
                return;
              }
              if (overlap < minOverlap) {
                minOverlap = overlap;
                minCoordinates = { position: this.position, alignment: this.alignment };
              }
              this._reposition();
              $element.offset(__WEBPACK_IMPORTED_MODULE_0__foundation_util_box__[
                "a"
                /* Box */
              ].GetExplicitOffsets($element, $anchor, this.position, this.alignment, this._getVOffset(), this._getHOffset()));
            }
            this.position = minCoordinates.position;
            this.alignment = minCoordinates.alignment;
            $element.offset(__WEBPACK_IMPORTED_MODULE_0__foundation_util_box__[
              "a"
              /* Box */
            ].GetExplicitOffsets($element, $anchor, this.position, this.alignment, this._getVOffset(), this._getHOffset()));
          }
        }
      }]);
      return Positionable2;
    }(__WEBPACK_IMPORTED_MODULE_1__foundation_plugin__[
      "a"
      /* Plugin */
    ]);
    Positionable.defaults = {
      /**
       * Position of positionable relative to anchor. Can be left, right, bottom, top, or auto.
       * @option
       * @type {string}
       * @default 'auto'
       */
      position: "auto",
      /**
       * Alignment of positionable relative to anchor. Can be left, right, bottom, top, center, or auto.
       * @option
       * @type {string}
       * @default 'auto'
       */
      alignment: "auto",
      /**
       * Allow overlap of container/window. If false, dropdown positionable first
       * try to position as defined by data-position and data-alignment, but
       * reposition if it would cause an overflow.
       * @option
       * @type {boolean}
       * @default false
       */
      allowOverlap: false,
      /**
       * Allow overlap of only the bottom of the container. This is the most common
       * behavior for dropdowns, allowing the dropdown to extend the bottom of the
       * screen but not otherwise influence or break out of the container.
       * @option
       * @type {boolean}
       * @default true
       */
      allowBottomOverlap: true,
      /**
       * Number of pixels the positionable should be separated vertically from anchor
       * @option
       * @type {number}
       * @default 0
       */
      vOffset: 0,
      /**
       * Number of pixels the positionable should be separated horizontally from anchor
       * @option
       * @type {number}
       * @default 0
       */
      hOffset: 0
    };
  },
  /* 16 */
  /***/
  function(module2, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.d(__webpack_exports__, "a", function() {
      return SmoothScroll;
    });
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
    var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
    var __WEBPACK_IMPORTED_MODULE_1__foundation_util_core__ = __webpack_require__(1);
    var __WEBPACK_IMPORTED_MODULE_2__foundation_plugin__ = __webpack_require__(2);
    var _createClass = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var SmoothScroll = function(_Plugin) {
      _inherits(SmoothScroll2, _Plugin);
      function SmoothScroll2() {
        _classCallCheck(this, SmoothScroll2);
        return _possibleConstructorReturn(this, (SmoothScroll2.__proto__ || Object.getPrototypeOf(SmoothScroll2)).apply(this, arguments));
      }
      _createClass(SmoothScroll2, [{
        key: "_setup",
        /**
         * Creates a new instance of SmoothScroll.
         * @class
         * @name SmoothScroll
         * @fires SmoothScroll#init
         * @param {Object} element - jQuery object to add the trigger to.
         * @param {Object} options - Overrides to the default plugin settings.
         */
        value: function _setup(element, options) {
          this.$element = element;
          this.options = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend({}, SmoothScroll2.defaults, this.$element.data(), options);
          this.className = "SmoothScroll";
          this._init();
        }
        /**
         * Initialize the SmoothScroll plugin
         * @private
         */
      }, {
        key: "_init",
        value: function _init() {
          var id = this.$element[0].id || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__foundation_util_core__[
            "b"
            /* GetYoDigits */
          ])(6, "smooth-scroll");
          var _this = this;
          this.$element.attr({
            "id": id
          });
          this._events();
        }
        /**
         * Initializes events for SmoothScroll.
         * @private
         */
      }, {
        key: "_events",
        value: function _events() {
          var _this = this;
          var handleLinkClick = function(e2) {
            if (!__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).is('a[href^="#"]')) {
              return false;
            }
            var arrival = this.getAttribute("href");
            _this._inTransition = true;
            SmoothScroll2.scrollToLoc(arrival, _this.options, function() {
              _this._inTransition = false;
            });
            e2.preventDefault();
          };
          this.$element.on("click.zf.smoothScroll", handleLinkClick);
          this.$element.on("click.zf.smoothScroll", 'a[href^="#"]', handleLinkClick);
        }
        /**
         * Function to scroll to a given location on the page.
         * @param {String} loc - A properly formatted jQuery id selector. Example: '#foo'
         * @param {Object} options - The options to use.
         * @param {Function} callback - The callback function.
         * @static
         * @function
         */
      }], [{
        key: "scrollToLoc",
        value: function scrollToLoc(loc) {
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : SmoothScroll2.defaults;
          var callback = arguments[2];
          if (!__WEBPACK_IMPORTED_MODULE_0_jquery___default()(loc).length) {
            return false;
          }
          var scrollPos = Math.round(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(loc).offset().top - options.threshold / 2 - options.offset);
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()("html, body").stop(true).animate({ scrollTop: scrollPos }, options.animationDuration, options.animationEasing, function() {
            if (callback && typeof callback == "function") {
              callback();
            }
          });
        }
      }]);
      return SmoothScroll2;
    }(__WEBPACK_IMPORTED_MODULE_2__foundation_plugin__[
      "a"
      /* Plugin */
    ]);
    SmoothScroll.defaults = {
      /**
       * Amount of time, in ms, the animated scrolling should take between locations.
       * @option
       * @type {number}
       * @default 500
       */
      animationDuration: 500,
      /**
       * Animation style to use when scrolling between locations. Can be `'swing'` or `'linear'`.
       * @option
       * @type {string}
       * @default 'linear'
       * @see {@link https://api.jquery.com/animate|Jquery animate}
       */
      animationEasing: "linear",
      /**
       * Number of pixels to use as a marker for location changes.
       * @option
       * @type {number}
       * @default 50
       */
      threshold: 50,
      /**
       * Number of pixels to offset the scroll of the page on item click if using a sticky nav bar.
       * @option
       * @type {number}
       * @default 0
       */
      offset: 0
    };
  },
  /* 17 */
  /***/
  function(module2, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.d(__webpack_exports__, "a", function() {
      return Tabs;
    });
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
    var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
    var __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__ = __webpack_require__(3);
    var __WEBPACK_IMPORTED_MODULE_2__foundation_util_imageLoader__ = __webpack_require__(8);
    var __WEBPACK_IMPORTED_MODULE_3__foundation_plugin__ = __webpack_require__(2);
    var _createClass = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var Tabs = function(_Plugin) {
      _inherits(Tabs2, _Plugin);
      function Tabs2() {
        _classCallCheck(this, Tabs2);
        return _possibleConstructorReturn(this, (Tabs2.__proto__ || Object.getPrototypeOf(Tabs2)).apply(this, arguments));
      }
      _createClass(Tabs2, [{
        key: "_setup",
        /**
         * Creates a new instance of tabs.
         * @class
         * @name Tabs
         * @fires Tabs#init
         * @param {jQuery} element - jQuery object to make into tabs.
         * @param {Object} options - Overrides to the default plugin settings.
         */
        value: function _setup(element, options) {
          this.$element = element;
          this.options = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend({}, Tabs2.defaults, this.$element.data(), options);
          this.className = "Tabs";
          this._init();
          __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__[
            "a"
            /* Keyboard */
          ].register("Tabs", {
            "ENTER": "open",
            "SPACE": "open",
            "ARROW_RIGHT": "next",
            "ARROW_UP": "previous",
            "ARROW_DOWN": "next",
            "ARROW_LEFT": "previous"
            // 'TAB': 'next',
            // 'SHIFT_TAB': 'previous'
          });
        }
        /**
         * Initializes the tabs by showing and focusing (if autoFocus=true) the preset active tab.
         * @private
         */
      }, {
        key: "_init",
        value: function _init() {
          var _this3 = this;
          var _this = this;
          this.$element.attr({ "role": "tablist" });
          this.$tabTitles = this.$element.find("." + this.options.linkClass);
          this.$tabContent = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('[data-tabs-content="' + this.$element[0].id + '"]');
          this.$tabTitles.each(function() {
            var $elem = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this), $link = $elem.find("a"), isActive = $elem.hasClass("" + _this.options.linkActiveClass), hash = $link.attr("data-tabs-target") || $link[0].hash.slice(1), linkId = $link[0].id ? $link[0].id : hash + "-label", $tabContent = __WEBPACK_IMPORTED_MODULE_0_jquery___default()("#" + hash);
            $elem.attr({ "role": "presentation" });
            $link.attr({
              "role": "tab",
              "aria-controls": hash,
              "aria-selected": isActive,
              "id": linkId,
              "tabindex": isActive ? "0" : "-1"
            });
            $tabContent.attr({
              "role": "tabpanel",
              "aria-labelledby": linkId
            });
            if (!isActive) {
              $tabContent.attr("aria-hidden", "true");
            }
            if (isActive && _this.options.autoFocus) {
              __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).load(function() {
                __WEBPACK_IMPORTED_MODULE_0_jquery___default()("html, body").animate({ scrollTop: $elem.offset().top }, _this.options.deepLinkSmudgeDelay, function() {
                  $link.focus();
                });
              });
            }
          });
          if (this.options.matchHeight) {
            var $images = this.$tabContent.find("img");
            if ($images.length) {
              __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__foundation_util_imageLoader__[
                "a"
                /* onImagesLoaded */
              ])($images, this._setHeight.bind(this));
            } else {
              this._setHeight();
            }
          }
          this._checkDeepLink = function() {
            var anchor = window.location.hash;
            if (anchor.length) {
              var $link = _this3.$element.find('[href$="' + anchor + '"]');
              if ($link.length) {
                _this3.selectTab(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(anchor), true);
                if (_this3.options.deepLinkSmudge) {
                  var offset = _this3.$element.offset();
                  __WEBPACK_IMPORTED_MODULE_0_jquery___default()("html, body").animate({ scrollTop: offset.top }, _this3.options.deepLinkSmudgeDelay);
                }
                _this3.$element.trigger("deeplink.zf.tabs", [$link, __WEBPACK_IMPORTED_MODULE_0_jquery___default()(anchor)]);
              }
            }
          };
          if (this.options.deepLink) {
            this._checkDeepLink();
          }
          this._events();
        }
        /**
         * Adds event handlers for items within the tabs.
         * @private
         */
      }, {
        key: "_events",
        value: function _events() {
          this._addKeyHandler();
          this._addClickHandler();
          this._setHeightMqHandler = null;
          if (this.options.matchHeight) {
            this._setHeightMqHandler = this._setHeight.bind(this);
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).on("changed.zf.mediaquery", this._setHeightMqHandler);
          }
          if (this.options.deepLink) {
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).on("popstate", this._checkDeepLink);
          }
        }
        /**
         * Adds click handlers for items within the tabs.
         * @private
         */
      }, {
        key: "_addClickHandler",
        value: function _addClickHandler() {
          var _this = this;
          this.$element.off("click.zf.tabs").on("click.zf.tabs", "." + this.options.linkClass, function(e2) {
            e2.preventDefault();
            e2.stopPropagation();
            _this._handleTabChange(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this));
          });
        }
        /**
         * Adds keyboard event handlers for items within the tabs.
         * @private
         */
      }, {
        key: "_addKeyHandler",
        value: function _addKeyHandler() {
          var _this = this;
          this.$tabTitles.off("keydown.zf.tabs").on("keydown.zf.tabs", function(e2) {
            if (e2.which === 9) return;
            var $element = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this), $elements = $element.parent("ul").children("li"), $prevElement, $nextElement;
            $elements.each(function(i) {
              if (__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).is($element)) {
                if (_this.options.wrapOnKeys) {
                  $prevElement = i === 0 ? $elements.last() : $elements.eq(i - 1);
                  $nextElement = i === $elements.length - 1 ? $elements.first() : $elements.eq(i + 1);
                } else {
                  $prevElement = $elements.eq(Math.max(0, i - 1));
                  $nextElement = $elements.eq(Math.min(i + 1, $elements.length - 1));
                }
                return;
              }
            });
            __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__[
              "a"
              /* Keyboard */
            ].handleKey(e2, "Tabs", {
              open: function() {
                $element.find('[role="tab"]').focus();
                _this._handleTabChange($element);
              },
              previous: function() {
                $prevElement.find('[role="tab"]').focus();
                _this._handleTabChange($prevElement);
              },
              next: function() {
                $nextElement.find('[role="tab"]').focus();
                _this._handleTabChange($nextElement);
              },
              handled: function() {
                e2.stopPropagation();
                e2.preventDefault();
              }
            });
          });
        }
        /**
         * Opens the tab `$targetContent` defined by `$target`. Collapses active tab.
         * @param {jQuery} $target - Tab to open.
         * @param {boolean} historyHandled - browser has already handled a history update
         * @fires Tabs#change
         * @function
         */
      }, {
        key: "_handleTabChange",
        value: function _handleTabChange($target, historyHandled) {
          if ($target.hasClass("" + this.options.linkActiveClass)) {
            if (this.options.activeCollapse) {
              this._collapseTab($target);
              this.$element.trigger("collapse.zf.tabs", [$target]);
            }
            return;
          }
          var $oldTab = this.$element.find("." + this.options.linkClass + "." + this.options.linkActiveClass), $tabLink = $target.find('[role="tab"]'), hash = $tabLink.attr("data-tabs-target") || $tabLink[0].hash.slice(1), $targetContent = this.$tabContent.find("#" + hash);
          this._collapseTab($oldTab);
          this._openTab($target);
          if (this.options.deepLink && !historyHandled) {
            var anchor = $target.find("a").attr("href");
            if (this.options.updateHistory) {
              history.pushState({}, "", anchor);
            } else {
              history.replaceState({}, "", anchor);
            }
          }
          this.$element.trigger("change.zf.tabs", [$target, $targetContent]);
          $targetContent.find("[data-mutate]").trigger("mutateme.zf.trigger");
        }
        /**
         * Opens the tab `$targetContent` defined by `$target`.
         * @param {jQuery} $target - Tab to Open.
         * @function
         */
      }, {
        key: "_openTab",
        value: function _openTab($target) {
          var $tabLink = $target.find('[role="tab"]'), hash = $tabLink.attr("data-tabs-target") || $tabLink[0].hash.slice(1), $targetContent = this.$tabContent.find("#" + hash);
          $target.addClass("" + this.options.linkActiveClass);
          $tabLink.attr({
            "aria-selected": "true",
            "tabindex": "0"
          });
          $targetContent.addClass("" + this.options.panelActiveClass).removeAttr("aria-hidden");
        }
        /**
         * Collapses `$targetContent` defined by `$target`.
         * @param {jQuery} $target - Tab to Open.
         * @function
         */
      }, {
        key: "_collapseTab",
        value: function _collapseTab($target) {
          var $target_anchor = $target.removeClass("" + this.options.linkActiveClass).find('[role="tab"]').attr({
            "aria-selected": "false",
            "tabindex": -1
          });
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()("#" + $target_anchor.attr("aria-controls")).removeClass("" + this.options.panelActiveClass).attr({ "aria-hidden": "true" });
        }
        /**
         * Public method for selecting a content pane to display.
         * @param {jQuery | String} elem - jQuery object or string of the id of the pane to display.
         * @param {boolean} historyHandled - browser has already handled a history update
         * @function
         */
      }, {
        key: "selectTab",
        value: function selectTab(elem2, historyHandled) {
          var idStr;
          if (typeof elem2 === "object") {
            idStr = elem2[0].id;
          } else {
            idStr = elem2;
          }
          if (idStr.indexOf("#") < 0) {
            idStr = "#" + idStr;
          }
          var $target = this.$tabTitles.find('[href$="' + idStr + '"]').parent("." + this.options.linkClass);
          this._handleTabChange($target, historyHandled);
        }
      }, {
        key: "_setHeight",
        /**
         * Sets the height of each panel to the height of the tallest panel.
         * If enabled in options, gets called on media query change.
         * If loading content via external source, can be called directly or with _reflow.
         * If enabled with `data-match-height="true"`, tabs sets to equal height
         * @function
         * @private
         */
        value: function _setHeight() {
          var max = 0, _this = this;
          this.$tabContent.find("." + this.options.panelClass).css("height", "").each(function() {
            var panel = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this), isActive = panel.hasClass("" + _this.options.panelActiveClass);
            if (!isActive) {
              panel.css({ "visibility": "hidden", "display": "block" });
            }
            var temp = this.getBoundingClientRect().height;
            if (!isActive) {
              panel.css({
                "visibility": "",
                "display": ""
              });
            }
            max = temp > max ? temp : max;
          }).css("height", max + "px");
        }
        /**
         * Destroys an instance of an tabs.
         * @fires Tabs#destroyed
         */
      }, {
        key: "_destroy",
        value: function _destroy() {
          this.$element.find("." + this.options.linkClass).off(".zf.tabs").hide().end().find("." + this.options.panelClass).hide();
          if (this.options.matchHeight) {
            if (this._setHeightMqHandler != null) {
              __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).off("changed.zf.mediaquery", this._setHeightMqHandler);
            }
          }
          if (this.options.deepLink) {
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).off("popstate", this._checkDeepLink);
          }
        }
      }]);
      return Tabs2;
    }(__WEBPACK_IMPORTED_MODULE_3__foundation_plugin__[
      "a"
      /* Plugin */
    ]);
    Tabs.defaults = {
      /**
       * Allows the window to scroll to content of pane specified by hash anchor
       * @option
       * @type {boolean}
       * @default false
       */
      deepLink: false,
      /**
       * Adjust the deep link scroll to make sure the top of the tab panel is visible
       * @option
       * @type {boolean}
       * @default false
       */
      deepLinkSmudge: false,
      /**
       * Animation time (ms) for the deep link adjustment
       * @option
       * @type {number}
       * @default 300
       */
      deepLinkSmudgeDelay: 300,
      /**
       * Update the browser history with the open tab
       * @option
       * @type {boolean}
       * @default false
       */
      updateHistory: false,
      /**
       * Allows the window to scroll to content of active pane on load if set to true.
       * Not recommended if more than one tab panel per page.
       * @option
       * @type {boolean}
       * @default false
       */
      autoFocus: false,
      /**
       * Allows keyboard input to 'wrap' around the tab links.
       * @option
       * @type {boolean}
       * @default true
       */
      wrapOnKeys: true,
      /**
       * Allows the tab content panes to match heights if set to true.
       * @option
       * @type {boolean}
       * @default false
       */
      matchHeight: false,
      /**
       * Allows active tabs to collapse when clicked.
       * @option
       * @type {boolean}
       * @default false
       */
      activeCollapse: false,
      /**
       * Class applied to `li`'s in tab link list.
       * @option
       * @type {string}
       * @default 'tabs-title'
       */
      linkClass: "tabs-title",
      /**
       * Class applied to the active `li` in tab link list.
       * @option
       * @type {string}
       * @default 'is-active'
       */
      linkActiveClass: "is-active",
      /**
       * Class applied to the content containers.
       * @option
       * @type {string}
       * @default 'tabs-panel'
       */
      panelClass: "tabs-panel",
      /**
       * Class applied to the active content container.
       * @option
       * @type {string}
       * @default 'is-active'
       */
      panelActiveClass: "is-active"
    };
  },
  /* 18 */
  /***/
  function(module2, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.d(__webpack_exports__, "a", function() {
      return Timer;
    });
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
    var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
    function Timer(elem2, options, cb) {
      var _this = this, duration = options.duration, nameSpace = Object.keys(elem2.data())[0] || "timer", remain = -1, start, timer;
      this.isPaused = false;
      this.restart = function() {
        remain = -1;
        clearTimeout(timer);
        this.start();
      };
      this.start = function() {
        this.isPaused = false;
        clearTimeout(timer);
        remain = remain <= 0 ? duration : remain;
        elem2.data("paused", false);
        start = Date.now();
        timer = setTimeout(function() {
          if (options.infinite) {
            _this.restart();
          }
          if (cb && typeof cb === "function") {
            cb();
          }
        }, remain);
        elem2.trigger("timerstart.zf." + nameSpace);
      };
      this.pause = function() {
        this.isPaused = true;
        clearTimeout(timer);
        elem2.data("paused", true);
        var end = Date.now();
        remain = remain - (end - start);
        elem2.trigger("timerpaused.zf." + nameSpace);
      };
    }
  },
  /* 19 */
  /***/
  function(module2, __webpack_exports__, __webpack_require__) {
    "use strict";
    Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
    var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
    var __WEBPACK_IMPORTED_MODULE_1__foundation_core__ = __webpack_require__(21);
    var __WEBPACK_IMPORTED_MODULE_2__foundation_util_core__ = __webpack_require__(1);
    var __WEBPACK_IMPORTED_MODULE_3__foundation_util_box__ = __webpack_require__(7);
    var __WEBPACK_IMPORTED_MODULE_4__foundation_util_imageLoader__ = __webpack_require__(8);
    var __WEBPACK_IMPORTED_MODULE_5__foundation_util_keyboard__ = __webpack_require__(3);
    var __WEBPACK_IMPORTED_MODULE_6__foundation_util_mediaQuery__ = __webpack_require__(4);
    var __WEBPACK_IMPORTED_MODULE_7__foundation_util_motion__ = __webpack_require__(6);
    var __WEBPACK_IMPORTED_MODULE_8__foundation_util_nest__ = __webpack_require__(9);
    var __WEBPACK_IMPORTED_MODULE_9__foundation_util_timer__ = __webpack_require__(18);
    var __WEBPACK_IMPORTED_MODULE_10__foundation_util_touch__ = __webpack_require__(10);
    var __WEBPACK_IMPORTED_MODULE_11__foundation_util_triggers__ = __webpack_require__(5);
    var __WEBPACK_IMPORTED_MODULE_12__foundation_abide__ = __webpack_require__(20);
    var __WEBPACK_IMPORTED_MODULE_13__foundation_accordion__ = __webpack_require__(11);
    var __WEBPACK_IMPORTED_MODULE_14__foundation_accordionMenu__ = __webpack_require__(12);
    var __WEBPACK_IMPORTED_MODULE_15__foundation_drilldown__ = __webpack_require__(13);
    var __WEBPACK_IMPORTED_MODULE_16__foundation_dropdown__ = __webpack_require__(22);
    var __WEBPACK_IMPORTED_MODULE_17__foundation_dropdownMenu__ = __webpack_require__(14);
    var __WEBPACK_IMPORTED_MODULE_18__foundation_equalizer__ = __webpack_require__(23);
    var __WEBPACK_IMPORTED_MODULE_19__foundation_interchange__ = __webpack_require__(24);
    var __WEBPACK_IMPORTED_MODULE_20__foundation_magellan__ = __webpack_require__(25);
    var __WEBPACK_IMPORTED_MODULE_21__foundation_offcanvas__ = __webpack_require__(26);
    var __WEBPACK_IMPORTED_MODULE_22__foundation_orbit__ = __webpack_require__(27);
    var __WEBPACK_IMPORTED_MODULE_23__foundation_responsiveMenu__ = __webpack_require__(29);
    var __WEBPACK_IMPORTED_MODULE_24__foundation_responsiveToggle__ = __webpack_require__(30);
    var __WEBPACK_IMPORTED_MODULE_25__foundation_reveal__ = __webpack_require__(31);
    var __WEBPACK_IMPORTED_MODULE_26__foundation_slider__ = __webpack_require__(32);
    var __WEBPACK_IMPORTED_MODULE_27__foundation_smoothScroll__ = __webpack_require__(16);
    var __WEBPACK_IMPORTED_MODULE_28__foundation_sticky__ = __webpack_require__(33);
    var __WEBPACK_IMPORTED_MODULE_29__foundation_tabs__ = __webpack_require__(17);
    var __WEBPACK_IMPORTED_MODULE_30__foundation_toggler__ = __webpack_require__(34);
    var __WEBPACK_IMPORTED_MODULE_31__foundation_tooltip__ = __webpack_require__(35);
    var __WEBPACK_IMPORTED_MODULE_32__foundation_responsiveAccordionTabs__ = __webpack_require__(28);
    __WEBPACK_IMPORTED_MODULE_1__foundation_core__[
      "a"
      /* Foundation */
    ].addToJquery(__WEBPACK_IMPORTED_MODULE_0_jquery___default.a);
    __WEBPACK_IMPORTED_MODULE_1__foundation_core__[
      "a"
      /* Foundation */
    ].rtl = __WEBPACK_IMPORTED_MODULE_2__foundation_util_core__[
      "a"
      /* rtl */
    ];
    __WEBPACK_IMPORTED_MODULE_1__foundation_core__[
      "a"
      /* Foundation */
    ].GetYoDigits = __WEBPACK_IMPORTED_MODULE_2__foundation_util_core__[
      "b"
      /* GetYoDigits */
    ];
    __WEBPACK_IMPORTED_MODULE_1__foundation_core__[
      "a"
      /* Foundation */
    ].transitionend = __WEBPACK_IMPORTED_MODULE_2__foundation_util_core__[
      "c"
      /* transitionend */
    ];
    __WEBPACK_IMPORTED_MODULE_1__foundation_core__[
      "a"
      /* Foundation */
    ].Box = __WEBPACK_IMPORTED_MODULE_3__foundation_util_box__[
      "a"
      /* Box */
    ];
    __WEBPACK_IMPORTED_MODULE_1__foundation_core__[
      "a"
      /* Foundation */
    ].onImagesLoaded = __WEBPACK_IMPORTED_MODULE_4__foundation_util_imageLoader__[
      "a"
      /* onImagesLoaded */
    ];
    __WEBPACK_IMPORTED_MODULE_1__foundation_core__[
      "a"
      /* Foundation */
    ].Keyboard = __WEBPACK_IMPORTED_MODULE_5__foundation_util_keyboard__[
      "a"
      /* Keyboard */
    ];
    __WEBPACK_IMPORTED_MODULE_1__foundation_core__[
      "a"
      /* Foundation */
    ].MediaQuery = __WEBPACK_IMPORTED_MODULE_6__foundation_util_mediaQuery__[
      "a"
      /* MediaQuery */
    ];
    __WEBPACK_IMPORTED_MODULE_1__foundation_core__[
      "a"
      /* Foundation */
    ].Motion = __WEBPACK_IMPORTED_MODULE_7__foundation_util_motion__[
      "a"
      /* Motion */
    ];
    __WEBPACK_IMPORTED_MODULE_1__foundation_core__[
      "a"
      /* Foundation */
    ].Move = __WEBPACK_IMPORTED_MODULE_7__foundation_util_motion__[
      "b"
      /* Move */
    ];
    __WEBPACK_IMPORTED_MODULE_1__foundation_core__[
      "a"
      /* Foundation */
    ].Nest = __WEBPACK_IMPORTED_MODULE_8__foundation_util_nest__[
      "a"
      /* Nest */
    ];
    __WEBPACK_IMPORTED_MODULE_1__foundation_core__[
      "a"
      /* Foundation */
    ].Timer = __WEBPACK_IMPORTED_MODULE_9__foundation_util_timer__[
      "a"
      /* Timer */
    ];
    __WEBPACK_IMPORTED_MODULE_10__foundation_util_touch__[
      "a"
      /* Touch */
    ].init(__WEBPACK_IMPORTED_MODULE_0_jquery___default.a);
    __WEBPACK_IMPORTED_MODULE_11__foundation_util_triggers__[
      "a"
      /* Triggers */
    ].init(__WEBPACK_IMPORTED_MODULE_0_jquery___default.a, __WEBPACK_IMPORTED_MODULE_1__foundation_core__[
      "a"
      /* Foundation */
    ]);
    __WEBPACK_IMPORTED_MODULE_1__foundation_core__[
      "a"
      /* Foundation */
    ].plugin(__WEBPACK_IMPORTED_MODULE_12__foundation_abide__[
      "a"
      /* Abide */
    ], "Abide");
    __WEBPACK_IMPORTED_MODULE_1__foundation_core__[
      "a"
      /* Foundation */
    ].plugin(__WEBPACK_IMPORTED_MODULE_13__foundation_accordion__[
      "a"
      /* Accordion */
    ], "Accordion");
    __WEBPACK_IMPORTED_MODULE_1__foundation_core__[
      "a"
      /* Foundation */
    ].plugin(__WEBPACK_IMPORTED_MODULE_14__foundation_accordionMenu__[
      "a"
      /* AccordionMenu */
    ], "AccordionMenu");
    __WEBPACK_IMPORTED_MODULE_1__foundation_core__[
      "a"
      /* Foundation */
    ].plugin(__WEBPACK_IMPORTED_MODULE_15__foundation_drilldown__[
      "a"
      /* Drilldown */
    ], "Drilldown");
    __WEBPACK_IMPORTED_MODULE_1__foundation_core__[
      "a"
      /* Foundation */
    ].plugin(__WEBPACK_IMPORTED_MODULE_16__foundation_dropdown__[
      "a"
      /* Dropdown */
    ], "Dropdown");
    __WEBPACK_IMPORTED_MODULE_1__foundation_core__[
      "a"
      /* Foundation */
    ].plugin(__WEBPACK_IMPORTED_MODULE_17__foundation_dropdownMenu__[
      "a"
      /* DropdownMenu */
    ], "DropdownMenu");
    __WEBPACK_IMPORTED_MODULE_1__foundation_core__[
      "a"
      /* Foundation */
    ].plugin(__WEBPACK_IMPORTED_MODULE_18__foundation_equalizer__[
      "a"
      /* Equalizer */
    ], "Equalizer");
    __WEBPACK_IMPORTED_MODULE_1__foundation_core__[
      "a"
      /* Foundation */
    ].plugin(__WEBPACK_IMPORTED_MODULE_19__foundation_interchange__[
      "a"
      /* Interchange */
    ], "Interchange");
    __WEBPACK_IMPORTED_MODULE_1__foundation_core__[
      "a"
      /* Foundation */
    ].plugin(__WEBPACK_IMPORTED_MODULE_20__foundation_magellan__[
      "a"
      /* Magellan */
    ], "Magellan");
    __WEBPACK_IMPORTED_MODULE_1__foundation_core__[
      "a"
      /* Foundation */
    ].plugin(__WEBPACK_IMPORTED_MODULE_21__foundation_offcanvas__[
      "a"
      /* OffCanvas */
    ], "OffCanvas");
    __WEBPACK_IMPORTED_MODULE_1__foundation_core__[
      "a"
      /* Foundation */
    ].plugin(__WEBPACK_IMPORTED_MODULE_22__foundation_orbit__[
      "a"
      /* Orbit */
    ], "Orbit");
    __WEBPACK_IMPORTED_MODULE_1__foundation_core__[
      "a"
      /* Foundation */
    ].plugin(__WEBPACK_IMPORTED_MODULE_23__foundation_responsiveMenu__[
      "a"
      /* ResponsiveMenu */
    ], "ResponsiveMenu");
    __WEBPACK_IMPORTED_MODULE_1__foundation_core__[
      "a"
      /* Foundation */
    ].plugin(__WEBPACK_IMPORTED_MODULE_24__foundation_responsiveToggle__[
      "a"
      /* ResponsiveToggle */
    ], "ResponsiveToggle");
    __WEBPACK_IMPORTED_MODULE_1__foundation_core__[
      "a"
      /* Foundation */
    ].plugin(__WEBPACK_IMPORTED_MODULE_25__foundation_reveal__[
      "a"
      /* Reveal */
    ], "Reveal");
    __WEBPACK_IMPORTED_MODULE_1__foundation_core__[
      "a"
      /* Foundation */
    ].plugin(__WEBPACK_IMPORTED_MODULE_26__foundation_slider__[
      "a"
      /* Slider */
    ], "Slider");
    __WEBPACK_IMPORTED_MODULE_1__foundation_core__[
      "a"
      /* Foundation */
    ].plugin(__WEBPACK_IMPORTED_MODULE_27__foundation_smoothScroll__[
      "a"
      /* SmoothScroll */
    ], "SmoothScroll");
    __WEBPACK_IMPORTED_MODULE_1__foundation_core__[
      "a"
      /* Foundation */
    ].plugin(__WEBPACK_IMPORTED_MODULE_28__foundation_sticky__[
      "a"
      /* Sticky */
    ], "Sticky");
    __WEBPACK_IMPORTED_MODULE_1__foundation_core__[
      "a"
      /* Foundation */
    ].plugin(__WEBPACK_IMPORTED_MODULE_29__foundation_tabs__[
      "a"
      /* Tabs */
    ], "Tabs");
    __WEBPACK_IMPORTED_MODULE_1__foundation_core__[
      "a"
      /* Foundation */
    ].plugin(__WEBPACK_IMPORTED_MODULE_30__foundation_toggler__[
      "a"
      /* Toggler */
    ], "Toggler");
    __WEBPACK_IMPORTED_MODULE_1__foundation_core__[
      "a"
      /* Foundation */
    ].plugin(__WEBPACK_IMPORTED_MODULE_31__foundation_tooltip__[
      "a"
      /* Tooltip */
    ], "Tooltip");
    __WEBPACK_IMPORTED_MODULE_1__foundation_core__[
      "a"
      /* Foundation */
    ].plugin(__WEBPACK_IMPORTED_MODULE_32__foundation_responsiveAccordionTabs__[
      "a"
      /* ResponsiveAccordionTabs */
    ], "ResponsiveAccordionTabs");
  },
  /* 20 */
  /***/
  function(module2, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.d(__webpack_exports__, "a", function() {
      return Abide;
    });
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
    var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
    var __WEBPACK_IMPORTED_MODULE_1__foundation_plugin__ = __webpack_require__(2);
    var _createClass = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var Abide = function(_Plugin) {
      _inherits(Abide2, _Plugin);
      function Abide2() {
        _classCallCheck(this, Abide2);
        return _possibleConstructorReturn(this, (Abide2.__proto__ || Object.getPrototypeOf(Abide2)).apply(this, arguments));
      }
      _createClass(Abide2, [{
        key: "_setup",
        /**
         * Creates a new instance of Abide.
         * @class
         * @name Abide
         * @fires Abide#init
         * @param {Object} element - jQuery object to add the trigger to.
         * @param {Object} options - Overrides to the default plugin settings.
         */
        value: function _setup(element) {
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          this.$element = element;
          this.options = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend(true, {}, Abide2.defaults, this.$element.data(), options);
          this.className = "Abide";
          this._init();
        }
        /**
         * Initializes the Abide plugin and calls functions to get Abide functioning on load.
         * @private
         */
      }, {
        key: "_init",
        value: function _init() {
          this.$inputs = this.$element.find("input, textarea, select");
          this._events();
        }
        /**
         * Initializes events for Abide.
         * @private
         */
      }, {
        key: "_events",
        value: function _events() {
          var _this3 = this;
          this.$element.off(".abide").on("reset.zf.abide", function() {
            _this3.resetForm();
          }).on("submit.zf.abide", function() {
            return _this3.validateForm();
          });
          if (this.options.validateOn === "fieldChange") {
            this.$inputs.off("change.zf.abide").on("change.zf.abide", function(e2) {
              _this3.validateInput(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(e2.target));
            });
          }
          if (this.options.liveValidate) {
            this.$inputs.off("input.zf.abide").on("input.zf.abide", function(e2) {
              _this3.validateInput(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(e2.target));
            });
          }
          if (this.options.validateOnBlur) {
            this.$inputs.off("blur.zf.abide").on("blur.zf.abide", function(e2) {
              _this3.validateInput(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(e2.target));
            });
          }
        }
        /**
         * Calls necessary functions to update Abide upon DOM change
         * @private
         */
      }, {
        key: "_reflow",
        value: function _reflow() {
          this._init();
        }
        /**
         * Checks whether or not a form element has the required attribute and if it's checked or not
         * @param {Object} element - jQuery object to check for required attribute
         * @returns {Boolean} Boolean value depends on whether or not attribute is checked or empty
         */
      }, {
        key: "requiredCheck",
        value: function requiredCheck($el) {
          if (!$el.attr("required")) return true;
          var isGood = true;
          switch ($el[0].type) {
            case "checkbox":
              isGood = $el[0].checked;
              break;
            case "select":
            case "select-one":
            case "select-multiple":
              var opt = $el.find("option:selected");
              if (!opt.length || !opt.val()) isGood = false;
              break;
            default:
              if (!$el.val() || !$el.val().length) isGood = false;
          }
          return isGood;
        }
        /**
         * Get:
         * - Based on $el, the first element(s) corresponding to `formErrorSelector` in this order:
         *   1. The element's direct sibling('s).
         *   2. The element's parent's children.
         * - Element(s) with the attribute `[data-form-error-for]` set with the element's id.
         *
         * This allows for multiple form errors per input, though if none are found, no form errors will be shown.
         *
         * @param {Object} $el - jQuery object to use as reference to find the form error selector.
         * @returns {Object} jQuery object with the selector.
         */
      }, {
        key: "findFormError",
        value: function findFormError($el) {
          var id = $el[0].id;
          var $error = $el.siblings(this.options.formErrorSelector);
          if (!$error.length) {
            $error = $el.parent().find(this.options.formErrorSelector);
          }
          $error = $error.add(this.$element.find('[data-form-error-for="' + id + '"]'));
          return $error;
        }
        /**
         * Get the first element in this order:
         * 2. The <label> with the attribute `[for="someInputId"]`
         * 3. The `.closest()` <label>
         *
         * @param {Object} $el - jQuery object to check for required attribute
         * @returns {Boolean} Boolean value depends on whether or not attribute is checked or empty
         */
      }, {
        key: "findLabel",
        value: function findLabel($el) {
          var id = $el[0].id;
          var $label = this.$element.find('label[for="' + id + '"]');
          if (!$label.length) {
            return $el.closest("label");
          }
          return $label;
        }
        /**
         * Get the set of labels associated with a set of radio els in this order
         * 2. The <label> with the attribute `[for="someInputId"]`
         * 3. The `.closest()` <label>
         *
         * @param {Object} $el - jQuery object to check for required attribute
         * @returns {Boolean} Boolean value depends on whether or not attribute is checked or empty
         */
      }, {
        key: "findRadioLabels",
        value: function findRadioLabels($els) {
          var _this4 = this;
          var labels = $els.map(function(i, el) {
            var id = el.id;
            var $label = _this4.$element.find('label[for="' + id + '"]');
            if (!$label.length) {
              $label = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(el).closest("label");
            }
            return $label[0];
          });
          return __WEBPACK_IMPORTED_MODULE_0_jquery___default()(labels);
        }
        /**
         * Adds the CSS error class as specified by the Abide settings to the label, input, and the form
         * @param {Object} $el - jQuery object to add the class to
         */
      }, {
        key: "addErrorClasses",
        value: function addErrorClasses($el) {
          var $label = this.findLabel($el);
          var $formError = this.findFormError($el);
          if ($label.length) {
            $label.addClass(this.options.labelErrorClass);
          }
          if ($formError.length) {
            $formError.addClass(this.options.formErrorClass);
          }
          $el.addClass(this.options.inputErrorClass).attr("data-invalid", "");
        }
        /**
         * Remove CSS error classes etc from an entire radio button group
         * @param {String} groupName - A string that specifies the name of a radio button group
         *
         */
      }, {
        key: "removeRadioErrorClasses",
        value: function removeRadioErrorClasses(groupName) {
          var $els = this.$element.find(':radio[name="' + groupName + '"]');
          var $labels = this.findRadioLabels($els);
          var $formErrors = this.findFormError($els);
          if ($labels.length) {
            $labels.removeClass(this.options.labelErrorClass);
          }
          if ($formErrors.length) {
            $formErrors.removeClass(this.options.formErrorClass);
          }
          $els.removeClass(this.options.inputErrorClass).removeAttr("data-invalid");
        }
        /**
         * Removes CSS error class as specified by the Abide settings from the label, input, and the form
         * @param {Object} $el - jQuery object to remove the class from
         */
      }, {
        key: "removeErrorClasses",
        value: function removeErrorClasses($el) {
          if ($el[0].type == "radio") {
            return this.removeRadioErrorClasses($el.attr("name"));
          }
          var $label = this.findLabel($el);
          var $formError = this.findFormError($el);
          if ($label.length) {
            $label.removeClass(this.options.labelErrorClass);
          }
          if ($formError.length) {
            $formError.removeClass(this.options.formErrorClass);
          }
          $el.removeClass(this.options.inputErrorClass).removeAttr("data-invalid");
        }
        /**
         * Goes through a form to find inputs and proceeds to validate them in ways specific to their type.
         * Ignores inputs with data-abide-ignore, type="hidden" or disabled attributes set
         * @fires Abide#invalid
         * @fires Abide#valid
         * @param {Object} element - jQuery object to validate, should be an HTML input
         * @returns {Boolean} goodToGo - If the input is valid or not.
         */
      }, {
        key: "validateInput",
        value: function validateInput($el) {
          var clearRequire = this.requiredCheck($el), validated = false, customValidator = true, validator = $el.attr("data-validator"), equalTo = true;
          if ($el.is("[data-abide-ignore]") || $el.is('[type="hidden"]') || $el.is("[disabled]")) {
            return true;
          }
          switch ($el[0].type) {
            case "radio":
              validated = this.validateRadio($el.attr("name"));
              break;
            case "checkbox":
              validated = clearRequire;
              break;
            case "select":
            case "select-one":
            case "select-multiple":
              validated = clearRequire;
              break;
            default:
              validated = this.validateText($el);
          }
          if (validator) {
            customValidator = this.matchValidation($el, validator, $el.attr("required"));
          }
          if ($el.attr("data-equalto")) {
            equalTo = this.options.validators.equalTo($el);
          }
          var goodToGo = [clearRequire, validated, customValidator, equalTo].indexOf(false) === -1;
          var message = (goodToGo ? "valid" : "invalid") + ".zf.abide";
          if (goodToGo) {
            var dependentElements = this.$element.find('[data-equalto="' + $el.attr("id") + '"]');
            if (dependentElements.length) {
              var _this = this;
              dependentElements.each(function() {
                if (__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).val()) {
                  _this.validateInput(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this));
                }
              });
            }
          }
          this[goodToGo ? "removeErrorClasses" : "addErrorClasses"]($el);
          $el.trigger(message, [$el]);
          return goodToGo;
        }
        /**
         * Goes through a form and if there are any invalid inputs, it will display the form error element
         * @returns {Boolean} noError - true if no errors were detected...
         * @fires Abide#formvalid
         * @fires Abide#forminvalid
         */
      }, {
        key: "validateForm",
        value: function validateForm() {
          var acc = [];
          var _this = this;
          this.$inputs.each(function() {
            acc.push(_this.validateInput(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this)));
          });
          var noError = acc.indexOf(false) === -1;
          this.$element.find("[data-abide-error]").css("display", noError ? "none" : "block");
          this.$element.trigger((noError ? "formvalid" : "forminvalid") + ".zf.abide", [this.$element]);
          return noError;
        }
        /**
         * Determines whether or a not a text input is valid based on the pattern specified in the attribute. If no matching pattern is found, returns true.
         * @param {Object} $el - jQuery object to validate, should be a text input HTML element
         * @param {String} pattern - string value of one of the RegEx patterns in Abide.options.patterns
         * @returns {Boolean} Boolean value depends on whether or not the input value matches the pattern specified
         */
      }, {
        key: "validateText",
        value: function validateText($el, pattern) {
          pattern = pattern || $el.attr("pattern") || $el.attr("type");
          var inputText = $el.val();
          var valid = false;
          if (inputText.length) {
            if (this.options.patterns.hasOwnProperty(pattern)) {
              valid = this.options.patterns[pattern].test(inputText);
            } else if (pattern !== $el.attr("type")) {
              valid = new RegExp(pattern).test(inputText);
            } else {
              valid = true;
            }
          } else if (!$el.prop("required")) {
            valid = true;
          }
          return valid;
        }
        /**
         * Determines whether or a not a radio input is valid based on whether or not it is required and selected. Although the function targets a single `<input>`, it validates by checking the `required` and `checked` properties of all radio buttons in its group.
         * @param {String} groupName - A string that specifies the name of a radio button group
         * @returns {Boolean} Boolean value depends on whether or not at least one radio input has been selected (if it's required)
         */
      }, {
        key: "validateRadio",
        value: function validateRadio(groupName) {
          var $group = this.$element.find(':radio[name="' + groupName + '"]');
          var valid = false, required = false;
          $group.each(function(i, e2) {
            if (__WEBPACK_IMPORTED_MODULE_0_jquery___default()(e2).attr("required")) {
              required = true;
            }
          });
          if (!required) valid = true;
          if (!valid) {
            $group.each(function(i, e2) {
              if (__WEBPACK_IMPORTED_MODULE_0_jquery___default()(e2).prop("checked")) {
                valid = true;
              }
            });
          }
          ;
          return valid;
        }
        /**
         * Determines if a selected input passes a custom validation function. Multiple validations can be used, if passed to the element with `data-validator="foo bar baz"` in a space separated listed.
         * @param {Object} $el - jQuery input element.
         * @param {String} validators - a string of function names matching functions in the Abide.options.validators object.
         * @param {Boolean} required - self explanatory?
         * @returns {Boolean} - true if validations passed.
         */
      }, {
        key: "matchValidation",
        value: function matchValidation($el, validators, required) {
          var _this5 = this;
          required = required ? true : false;
          var clear = validators.split(" ").map(function(v) {
            return _this5.options.validators[v]($el, required, $el.parent());
          });
          return clear.indexOf(false) === -1;
        }
        /**
         * Resets form inputs and styles
         * @fires Abide#formreset
         */
      }, {
        key: "resetForm",
        value: function resetForm() {
          var $form = this.$element, opts = this.options;
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()("." + opts.labelErrorClass, $form).not("small").removeClass(opts.labelErrorClass);
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()("." + opts.inputErrorClass, $form).not("small").removeClass(opts.inputErrorClass);
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()(opts.formErrorSelector + "." + opts.formErrorClass).removeClass(opts.formErrorClass);
          $form.find("[data-abide-error]").css("display", "none");
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()(":input", $form).not(":button, :submit, :reset, :hidden, :radio, :checkbox, [data-abide-ignore]").val("").removeAttr("data-invalid");
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()(":input:radio", $form).not("[data-abide-ignore]").prop("checked", false).removeAttr("data-invalid");
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()(":input:checkbox", $form).not("[data-abide-ignore]").prop("checked", false).removeAttr("data-invalid");
          $form.trigger("formreset.zf.abide", [$form]);
        }
        /**
         * Destroys an instance of Abide.
         * Removes error styles and classes from elements, without resetting their values.
         */
      }, {
        key: "_destroy",
        value: function _destroy() {
          var _this = this;
          this.$element.off(".abide").find("[data-abide-error]").css("display", "none");
          this.$inputs.off(".abide").each(function() {
            _this.removeErrorClasses(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this));
          });
        }
      }]);
      return Abide2;
    }(__WEBPACK_IMPORTED_MODULE_1__foundation_plugin__[
      "a"
      /* Plugin */
    ]);
    Abide.defaults = {
      /**
       * The default event to validate inputs. Checkboxes and radios validate immediately.
       * Remove or change this value for manual validation.
       * @option
       * @type {?string}
       * @default 'fieldChange'
       */
      validateOn: "fieldChange",
      /**
       * Class to be applied to input labels on failed validation.
       * @option
       * @type {string}
       * @default 'is-invalid-label'
       */
      labelErrorClass: "is-invalid-label",
      /**
       * Class to be applied to inputs on failed validation.
       * @option
       * @type {string}
       * @default 'is-invalid-input'
       */
      inputErrorClass: "is-invalid-input",
      /**
       * Class selector to use to target Form Errors for show/hide.
       * @option
       * @type {string}
       * @default '.form-error'
       */
      formErrorSelector: ".form-error",
      /**
       * Class added to Form Errors on failed validation.
       * @option
       * @type {string}
       * @default 'is-visible'
       */
      formErrorClass: "is-visible",
      /**
       * Set to true to validate text inputs on any value change.
       * @option
       * @type {boolean}
       * @default false
       */
      liveValidate: false,
      /**
       * Set to true to validate inputs on blur.
       * @option
       * @type {boolean}
       * @default false
       */
      validateOnBlur: false,
      patterns: {
        alpha: /^[a-zA-Z]+$/,
        alpha_numeric: /^[a-zA-Z0-9]+$/,
        integer: /^[-+]?\d+$/,
        number: /^[-+]?\d*(?:[\.\,]\d+)?$/,
        // amex, visa, diners
        card: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(?:222[1-9]|2[3-6][0-9]{2}|27[0-1][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
        cvv: /^([0-9]){3,4}$/,
        // http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#valid-e-mail-address
        email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,
        url: /^(https?|ftp|file|ssh):\/\/(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/,
        // abc.de
        domain: /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,8}$/,
        datetime: /^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,
        // YYYY-MM-DD
        date: /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,
        // HH:MM:SS
        time: /^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,
        dateISO: /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,
        // MM/DD/YYYY
        month_day_year: /^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,
        // DD/MM/YYYY
        day_month_year: /^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,
        // #FFF or #FFFFFF
        color: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,
        // Domain || URL
        website: {
          test: function(text) {
            return Abide.defaults.patterns["domain"].test(text) || Abide.defaults.patterns["url"].test(text);
          }
        }
      },
      /**
       * Optional validation functions to be used. `equalTo` being the only default included function.
       * Functions should return only a boolean if the input is valid or not. Functions are given the following arguments:
       * el : The jQuery element to validate.
       * required : Boolean value of the required attribute be present or not.
       * parent : The direct parent of the input.
       * @option
       */
      validators: {
        equalTo: function(el, required, parent) {
          return __WEBPACK_IMPORTED_MODULE_0_jquery___default()("#" + el.attr("data-equalto")).val() === el.val();
        }
      }
    };
  },
  /* 21 */
  /***/
  function(module2, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.d(__webpack_exports__, "a", function() {
      return Foundation2;
    });
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
    var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
    var __WEBPACK_IMPORTED_MODULE_1__foundation_util_core__ = __webpack_require__(1);
    var __WEBPACK_IMPORTED_MODULE_2__foundation_util_mediaQuery__ = __webpack_require__(4);
    var FOUNDATION_VERSION = "6.4.2";
    var Foundation2 = {
      version: FOUNDATION_VERSION,
      /**
       * Stores initialized plugins.
       */
      _plugins: {},
      /**
       * Stores generated unique ids for plugin instances
       */
      _uuids: [],
      /**
       * Defines a Foundation plugin, adding it to the `Foundation` namespace and the list of plugins to initialize when reflowing.
       * @param {Object} plugin - The constructor of the plugin.
       */
      plugin: function(plugin, name) {
        var className = name || functionName(plugin);
        var attrName = hyphenate(className);
        this._plugins[attrName] = this[className] = plugin;
      },
      /**
       * @function
       * Populates the _uuids array with pointers to each individual plugin instance.
       * Adds the `zfPlugin` data-attribute to programmatically created plugins to allow use of $(selector).foundation(method) calls.
       * Also fires the initialization event for each plugin, consolidating repetitive code.
       * @param {Object} plugin - an instance of a plugin, usually `this` in context.
       * @param {String} name - the name of the plugin, passed as a camelCased string.
       * @fires Plugin#init
       */
      registerPlugin: function(plugin, name) {
        var pluginName = name ? hyphenate(name) : functionName(plugin.constructor).toLowerCase();
        plugin.uuid = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__foundation_util_core__[
          "b"
          /* GetYoDigits */
        ])(6, pluginName);
        if (!plugin.$element.attr("data-" + pluginName)) {
          plugin.$element.attr("data-" + pluginName, plugin.uuid);
        }
        if (!plugin.$element.data("zfPlugin")) {
          plugin.$element.data("zfPlugin", plugin);
        }
        plugin.$element.trigger("init.zf." + pluginName);
        this._uuids.push(plugin.uuid);
        return;
      },
      /**
       * @function
       * Removes the plugins uuid from the _uuids array.
       * Removes the zfPlugin data attribute, as well as the data-plugin-name attribute.
       * Also fires the destroyed event for the plugin, consolidating repetitive code.
       * @param {Object} plugin - an instance of a plugin, usually `this` in context.
       * @fires Plugin#destroyed
       */
      unregisterPlugin: function(plugin) {
        var pluginName = hyphenate(functionName(plugin.$element.data("zfPlugin").constructor));
        this._uuids.splice(this._uuids.indexOf(plugin.uuid), 1);
        plugin.$element.removeAttr("data-" + pluginName).removeData("zfPlugin").trigger("destroyed.zf." + pluginName);
        for (var prop in plugin) {
          plugin[prop] = null;
        }
        return;
      },
      /**
       * @function
       * Causes one or more active plugins to re-initialize, resetting event listeners, recalculating positions, etc.
       * @param {String} plugins - optional string of an individual plugin key, attained by calling `$(element).data('pluginName')`, or string of a plugin class i.e. `'dropdown'`
       * @default If no argument is passed, reflow all currently active plugins.
       */
      reInit: function(plugins) {
        var isJQ = plugins instanceof __WEBPACK_IMPORTED_MODULE_0_jquery___default.a;
        try {
          if (isJQ) {
            plugins.each(function() {
              __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).data("zfPlugin")._init();
            });
          } else {
            var type = typeof plugins, _this = this, fns = {
              "object": function(plgs) {
                plgs.forEach(function(p) {
                  p = hyphenate(p);
                  __WEBPACK_IMPORTED_MODULE_0_jquery___default()("[data-" + p + "]").foundation("_init");
                });
              },
              "string": function() {
                plugins = hyphenate(plugins);
                __WEBPACK_IMPORTED_MODULE_0_jquery___default()("[data-" + plugins + "]").foundation("_init");
              },
              "undefined": function() {
                this["object"](Object.keys(_this._plugins));
              }
            };
            fns[type](plugins);
          }
        } catch (err) {
          console.error(err);
        } finally {
          return plugins;
        }
      },
      /**
       * Initialize plugins on any elements within `elem` (and `elem` itself) that aren't already initialized.
       * @param {Object} elem - jQuery object containing the element to check inside. Also checks the element itself, unless it's the `document` object.
       * @param {String|Array} plugins - A list of plugins to initialize. Leave this out to initialize everything.
       */
      reflow: function(elem2, plugins) {
        if (typeof plugins === "undefined") {
          plugins = Object.keys(this._plugins);
        } else if (typeof plugins === "string") {
          plugins = [plugins];
        }
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.each(plugins, function(i, name) {
          var plugin = _this._plugins[name];
          var $elem = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(elem2).find("[data-" + name + "]").addBack("[data-" + name + "]");
          $elem.each(function() {
            var $el = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this), opts = {};
            if ($el.data("zfPlugin")) {
              console.warn("Tried to initialize " + name + " on an element that already has a Foundation plugin.");
              return;
            }
            if ($el.attr("data-options")) {
              var thing = $el.attr("data-options").split(";").forEach(function(e2, i2) {
                var opt = e2.split(":").map(function(el) {
                  return el.trim();
                });
                if (opt[0]) opts[opt[0]] = parseValue(opt[1]);
              });
            }
            try {
              $el.data("zfPlugin", new plugin(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this), opts));
            } catch (er) {
              console.error(er);
            } finally {
              return;
            }
          });
        });
      },
      getFnName: functionName,
      addToJquery: function($) {
        var foundation = function(method) {
          var type = typeof method, $noJS = $(".no-js");
          if ($noJS.length) {
            $noJS.removeClass("no-js");
          }
          if (type === "undefined") {
            __WEBPACK_IMPORTED_MODULE_2__foundation_util_mediaQuery__[
              "a"
              /* MediaQuery */
            ]._init();
            Foundation2.reflow(this);
          } else if (type === "string") {
            var args = Array.prototype.slice.call(arguments, 1);
            var plugClass = this.data("zfPlugin");
            if (plugClass !== void 0 && plugClass[method] !== void 0) {
              if (this.length === 1) {
                plugClass[method].apply(plugClass, args);
              } else {
                this.each(function(i, el) {
                  plugClass[method].apply($(el).data("zfPlugin"), args);
                });
              }
            } else {
              throw new ReferenceError("We're sorry, '" + method + "' is not an available method for " + (plugClass ? functionName(plugClass) : "this element") + ".");
            }
          } else {
            throw new TypeError("We're sorry, " + type + " is not a valid parameter. You must use a string representing the method you wish to invoke.");
          }
          return this;
        };
        $.fn.foundation = foundation;
        return $;
      }
    };
    Foundation2.util = {
      /**
       * Function for applying a debounce effect to a function call.
       * @function
       * @param {Function} func - Function to be called at end of timeout.
       * @param {Number} delay - Time in ms to delay the call of `func`.
       * @returns function
       */
      throttle: function(func, delay) {
        var timer = null;
        return function() {
          var context = this, args = arguments;
          if (timer === null) {
            timer = setTimeout(function() {
              func.apply(context, args);
              timer = null;
            }, delay);
          }
        };
      }
    };
    window.Foundation = Foundation2;
    (function() {
      if (!Date.now || !window.Date.now) window.Date.now = Date.now = function() {
        return (/* @__PURE__ */ new Date()).getTime();
      };
      var vendors = ["webkit", "moz"];
      for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
        var vp = vendors[i];
        window.requestAnimationFrame = window[vp + "RequestAnimationFrame"];
        window.cancelAnimationFrame = window[vp + "CancelAnimationFrame"] || window[vp + "CancelRequestAnimationFrame"];
      }
      if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
        var lastTime = 0;
        window.requestAnimationFrame = function(callback) {
          var now = Date.now();
          var nextTime = Math.max(lastTime + 16, now);
          return setTimeout(function() {
            callback(lastTime = nextTime);
          }, nextTime - now);
        };
        window.cancelAnimationFrame = clearTimeout;
      }
      if (!window.performance || !window.performance.now) {
        window.performance = {
          start: Date.now(),
          now: function() {
            return Date.now() - this.start;
          }
        };
      }
    })();
    if (!Function.prototype.bind) {
      Function.prototype.bind = function(oThis) {
        if (typeof this !== "function") {
          throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        }
        var aArgs = Array.prototype.slice.call(arguments, 1), fToBind = this, fNOP = function() {
        }, fBound = function() {
          return fToBind.apply(this instanceof fNOP ? this : oThis, aArgs.concat(Array.prototype.slice.call(arguments)));
        };
        if (this.prototype) {
          fNOP.prototype = this.prototype;
        }
        fBound.prototype = new fNOP();
        return fBound;
      };
    }
    function functionName(fn) {
      if (Function.prototype.name === void 0) {
        var funcNameRegex = /function\s([^(]{1,})\(/;
        var results = funcNameRegex.exec(fn.toString());
        return results && results.length > 1 ? results[1].trim() : "";
      } else if (fn.prototype === void 0) {
        return fn.constructor.name;
      } else {
        return fn.prototype.constructor.name;
      }
    }
    function parseValue(str) {
      if ("true" === str) return true;
      else if ("false" === str) return false;
      else if (!isNaN(str * 1)) return parseFloat(str);
      return str;
    }
    function hyphenate(str) {
      return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
    }
  },
  /* 22 */
  /***/
  function(module2, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.d(__webpack_exports__, "a", function() {
      return Dropdown;
    });
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
    var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
    var __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__ = __webpack_require__(3);
    var __WEBPACK_IMPORTED_MODULE_2__foundation_util_core__ = __webpack_require__(1);
    var __WEBPACK_IMPORTED_MODULE_3__foundation_positionable__ = __webpack_require__(15);
    var __WEBPACK_IMPORTED_MODULE_4__foundation_util_triggers__ = __webpack_require__(5);
    var _createClass = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _get = function get(object, property, receiver) {
      if (object === null) object = Function.prototype;
      var desc = Object.getOwnPropertyDescriptor(object, property);
      if (desc === void 0) {
        var parent = Object.getPrototypeOf(object);
        if (parent === null) {
          return void 0;
        } else {
          return get(parent, property, receiver);
        }
      } else if ("value" in desc) {
        return desc.value;
      } else {
        var getter = desc.get;
        if (getter === void 0) {
          return void 0;
        }
        return getter.call(receiver);
      }
    };
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var Dropdown = function(_Positionable) {
      _inherits(Dropdown2, _Positionable);
      function Dropdown2() {
        _classCallCheck(this, Dropdown2);
        return _possibleConstructorReturn(this, (Dropdown2.__proto__ || Object.getPrototypeOf(Dropdown2)).apply(this, arguments));
      }
      _createClass(Dropdown2, [{
        key: "_setup",
        /**
         * Creates a new instance of a dropdown.
         * @class
         * @name Dropdown
         * @param {jQuery} element - jQuery object to make into a dropdown.
         *        Object should be of the dropdown panel, rather than its anchor.
         * @param {Object} options - Overrides to the default plugin settings.
         */
        value: function _setup(element, options) {
          this.$element = element;
          this.options = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend({}, Dropdown2.defaults, this.$element.data(), options);
          this.className = "Dropdown";
          __WEBPACK_IMPORTED_MODULE_4__foundation_util_triggers__[
            "a"
            /* Triggers */
          ].init(__WEBPACK_IMPORTED_MODULE_0_jquery___default.a);
          this._init();
          __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__[
            "a"
            /* Keyboard */
          ].register("Dropdown", {
            "ENTER": "open",
            "SPACE": "open",
            "ESCAPE": "close"
          });
        }
        /**
         * Initializes the plugin by setting/checking options and attributes, adding helper variables, and saving the anchor.
         * @function
         * @private
         */
      }, {
        key: "_init",
        value: function _init() {
          var $id = this.$element.attr("id");
          this.$anchors = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('[data-toggle="' + $id + '"]').length ? __WEBPACK_IMPORTED_MODULE_0_jquery___default()('[data-toggle="' + $id + '"]') : __WEBPACK_IMPORTED_MODULE_0_jquery___default()('[data-open="' + $id + '"]');
          this.$anchors.attr({
            "aria-controls": $id,
            "data-is-focus": false,
            "data-yeti-box": $id,
            "aria-haspopup": true,
            "aria-expanded": false
          });
          this._setCurrentAnchor(this.$anchors.first());
          if (this.options.parentClass) {
            this.$parent = this.$element.parents("." + this.options.parentClass);
          } else {
            this.$parent = null;
          }
          this.$element.attr({
            "aria-hidden": "true",
            "data-yeti-box": $id,
            "data-resize": $id,
            "aria-labelledby": this.$currentAnchor.id || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__foundation_util_core__[
              "b"
              /* GetYoDigits */
            ])(6, "dd-anchor")
          });
          _get(Dropdown2.prototype.__proto__ || Object.getPrototypeOf(Dropdown2.prototype), "_init", this).call(this);
          this._events();
        }
      }, {
        key: "_getDefaultPosition",
        value: function _getDefaultPosition() {
          var position = this.$element[0].className.match(/(top|left|right|bottom)/g);
          if (position) {
            return position[0];
          } else {
            return "bottom";
          }
        }
      }, {
        key: "_getDefaultAlignment",
        value: function _getDefaultAlignment() {
          var horizontalPosition = /float-(\S+)/.exec(this.$currentAnchor.className);
          if (horizontalPosition) {
            return horizontalPosition[1];
          }
          return _get(Dropdown2.prototype.__proto__ || Object.getPrototypeOf(Dropdown2.prototype), "_getDefaultAlignment", this).call(this);
        }
        /**
         * Sets the position and orientation of the dropdown pane, checks for collisions if allow-overlap is not true.
         * Recursively calls itself if a collision is detected, with a new position class.
         * @function
         * @private
         */
      }, {
        key: "_setPosition",
        value: function _setPosition() {
          _get(Dropdown2.prototype.__proto__ || Object.getPrototypeOf(Dropdown2.prototype), "_setPosition", this).call(this, this.$currentAnchor, this.$element, this.$parent);
        }
        /**
         * Make it a current anchor.
         * Current anchor as the reference for the position of Dropdown panes.
         * @param {HTML} el - DOM element of the anchor.
         * @function
         * @private
         */
      }, {
        key: "_setCurrentAnchor",
        value: function _setCurrentAnchor(el) {
          this.$currentAnchor = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(el);
        }
        /**
         * Adds event listeners to the element utilizing the triggers utility library.
         * @function
         * @private
         */
      }, {
        key: "_events",
        value: function _events() {
          var _this = this;
          this.$element.on({
            "open.zf.trigger": this.open.bind(this),
            "close.zf.trigger": this.close.bind(this),
            "toggle.zf.trigger": this.toggle.bind(this),
            "resizeme.zf.trigger": this._setPosition.bind(this)
          });
          this.$anchors.off("click.zf.trigger").on("click.zf.trigger", function() {
            _this._setCurrentAnchor(this);
          });
          if (this.options.hover) {
            this.$anchors.off("mouseenter.zf.dropdown mouseleave.zf.dropdown").on("mouseenter.zf.dropdown", function() {
              _this._setCurrentAnchor(this);
              var bodyData = __WEBPACK_IMPORTED_MODULE_0_jquery___default()("body").data();
              if (typeof bodyData.whatinput === "undefined" || bodyData.whatinput === "mouse") {
                clearTimeout(_this.timeout);
                _this.timeout = setTimeout(function() {
                  _this.open();
                  _this.$anchors.data("hover", true);
                }, _this.options.hoverDelay);
              }
            }).on("mouseleave.zf.dropdown", function() {
              clearTimeout(_this.timeout);
              _this.timeout = setTimeout(function() {
                _this.close();
                _this.$anchors.data("hover", false);
              }, _this.options.hoverDelay);
            });
            if (this.options.hoverPane) {
              this.$element.off("mouseenter.zf.dropdown mouseleave.zf.dropdown").on("mouseenter.zf.dropdown", function() {
                clearTimeout(_this.timeout);
              }).on("mouseleave.zf.dropdown", function() {
                clearTimeout(_this.timeout);
                _this.timeout = setTimeout(function() {
                  _this.close();
                  _this.$anchors.data("hover", false);
                }, _this.options.hoverDelay);
              });
            }
          }
          this.$anchors.add(this.$element).on("keydown.zf.dropdown", function(e2) {
            var $target = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this), visibleFocusableElements = __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__[
              "a"
              /* Keyboard */
            ].findFocusable(_this.$element);
            __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__[
              "a"
              /* Keyboard */
            ].handleKey(e2, "Dropdown", {
              open: function() {
                if ($target.is(_this.$anchors)) {
                  _this.open();
                  _this.$element.attr("tabindex", -1).focus();
                  e2.preventDefault();
                }
              },
              close: function() {
                _this.close();
                _this.$anchors.focus();
              }
            });
          });
        }
        /**
         * Adds an event handler to the body to close any dropdowns on a click.
         * @function
         * @private
         */
      }, {
        key: "_addBodyHandler",
        value: function _addBodyHandler() {
          var $body = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(document.body).not(this.$element), _this = this;
          $body.off("click.zf.dropdown").on("click.zf.dropdown", function(e2) {
            if (_this.$anchors.is(e2.target) || _this.$anchors.find(e2.target).length) {
              return;
            }
            if (_this.$element.find(e2.target).length) {
              return;
            }
            _this.close();
            $body.off("click.zf.dropdown");
          });
        }
        /**
         * Opens the dropdown pane, and fires a bubbling event to close other dropdowns.
         * @function
         * @fires Dropdown#closeme
         * @fires Dropdown#show
         */
      }, {
        key: "open",
        value: function open() {
          this.$element.trigger("closeme.zf.dropdown", this.$element.attr("id"));
          this.$anchors.addClass("hover").attr({ "aria-expanded": true });
          this.$element.addClass("is-opening");
          this._setPosition();
          this.$element.removeClass("is-opening").addClass("is-open").attr({ "aria-hidden": false });
          if (this.options.autoFocus) {
            var $focusable = __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__[
              "a"
              /* Keyboard */
            ].findFocusable(this.$element);
            if ($focusable.length) {
              $focusable.eq(0).focus();
            }
          }
          if (this.options.closeOnClick) {
            this._addBodyHandler();
          }
          if (this.options.trapFocus) {
            __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__[
              "a"
              /* Keyboard */
            ].trapFocus(this.$element);
          }
          this.$element.trigger("show.zf.dropdown", [this.$element]);
        }
        /**
         * Closes the open dropdown pane.
         * @function
         * @fires Dropdown#hide
         */
      }, {
        key: "close",
        value: function close() {
          if (!this.$element.hasClass("is-open")) {
            return false;
          }
          this.$element.removeClass("is-open").attr({ "aria-hidden": true });
          this.$anchors.removeClass("hover").attr("aria-expanded", false);
          this.$element.trigger("hide.zf.dropdown", [this.$element]);
          if (this.options.trapFocus) {
            __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__[
              "a"
              /* Keyboard */
            ].releaseFocus(this.$element);
          }
        }
        /**
         * Toggles the dropdown pane's visibility.
         * @function
         */
      }, {
        key: "toggle",
        value: function toggle() {
          if (this.$element.hasClass("is-open")) {
            if (this.$anchors.data("hover")) return;
            this.close();
          } else {
            this.open();
          }
        }
        /**
         * Destroys the dropdown.
         * @function
         */
      }, {
        key: "_destroy",
        value: function _destroy() {
          this.$element.off(".zf.trigger").hide();
          this.$anchors.off(".zf.dropdown");
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()(document.body).off("click.zf.dropdown");
        }
      }]);
      return Dropdown2;
    }(__WEBPACK_IMPORTED_MODULE_3__foundation_positionable__[
      "a"
      /* Positionable */
    ]);
    Dropdown.defaults = {
      /**
       * Class that designates bounding container of Dropdown (default: window)
       * @option
       * @type {?string}
       * @default null
       */
      parentClass: null,
      /**
       * Amount of time to delay opening a submenu on hover event.
       * @option
       * @type {number}
       * @default 250
       */
      hoverDelay: 250,
      /**
       * Allow submenus to open on hover events
       * @option
       * @type {boolean}
       * @default false
       */
      hover: false,
      /**
       * Don't close dropdown when hovering over dropdown pane
       * @option
       * @type {boolean}
       * @default false
       */
      hoverPane: false,
      /**
       * Number of pixels between the dropdown pane and the triggering element on open.
       * @option
       * @type {number}
       * @default 0
       */
      vOffset: 0,
      /**
       * Number of pixels between the dropdown pane and the triggering element on open.
       * @option
       * @type {number}
       * @default 0
       */
      hOffset: 0,
      /**
       * DEPRECATED: Class applied to adjust open position.
       * @option
       * @type {string}
       * @default ''
       */
      positionClass: "",
      /**
       * Position of dropdown. Can be left, right, bottom, top, or auto.
       * @option
       * @type {string}
       * @default 'auto'
       */
      position: "auto",
      /**
       * Alignment of dropdown relative to anchor. Can be left, right, bottom, top, center, or auto.
       * @option
       * @type {string}
       * @default 'auto'
       */
      alignment: "auto",
      /**
       * Allow overlap of container/window. If false, dropdown will first try to position as defined by data-position and data-alignment, but reposition if it would cause an overflow.
       * @option
       * @type {boolean}
       * @default false
       */
      allowOverlap: false,
      /**
       * Allow overlap of only the bottom of the container. This is the most common
       * behavior for dropdowns, allowing the dropdown to extend the bottom of the
       * screen but not otherwise influence or break out of the container.
       * @option
       * @type {boolean}
       * @default true
       */
      allowBottomOverlap: true,
      /**
       * Allow the plugin to trap focus to the dropdown pane if opened with keyboard commands.
       * @option
       * @type {boolean}
       * @default false
       */
      trapFocus: false,
      /**
       * Allow the plugin to set focus to the first focusable element within the pane, regardless of method of opening.
       * @option
       * @type {boolean}
       * @default false
       */
      autoFocus: false,
      /**
       * Allows a click on the body to close the dropdown.
       * @option
       * @type {boolean}
       * @default false
       */
      closeOnClick: false
    };
  },
  /* 23 */
  /***/
  function(module2, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.d(__webpack_exports__, "a", function() {
      return Equalizer;
    });
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
    var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
    var __WEBPACK_IMPORTED_MODULE_1__foundation_util_mediaQuery__ = __webpack_require__(4);
    var __WEBPACK_IMPORTED_MODULE_2__foundation_util_imageLoader__ = __webpack_require__(8);
    var __WEBPACK_IMPORTED_MODULE_3__foundation_util_core__ = __webpack_require__(1);
    var __WEBPACK_IMPORTED_MODULE_4__foundation_plugin__ = __webpack_require__(2);
    var _createClass = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var Equalizer = function(_Plugin) {
      _inherits(Equalizer2, _Plugin);
      function Equalizer2() {
        _classCallCheck(this, Equalizer2);
        return _possibleConstructorReturn(this, (Equalizer2.__proto__ || Object.getPrototypeOf(Equalizer2)).apply(this, arguments));
      }
      _createClass(Equalizer2, [{
        key: "_setup",
        /**
         * Creates a new instance of Equalizer.
         * @class
         * @name Equalizer
         * @fires Equalizer#init
         * @param {Object} element - jQuery object to add the trigger to.
         * @param {Object} options - Overrides to the default plugin settings.
         */
        value: function _setup(element, options) {
          this.$element = element;
          this.options = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend({}, Equalizer2.defaults, this.$element.data(), options);
          this.className = "Equalizer";
          this._init();
        }
        /**
         * Initializes the Equalizer plugin and calls functions to get equalizer functioning on load.
         * @private
         */
      }, {
        key: "_init",
        value: function _init() {
          var eqId = this.$element.attr("data-equalizer") || "";
          var $watched = this.$element.find('[data-equalizer-watch="' + eqId + '"]');
          __WEBPACK_IMPORTED_MODULE_1__foundation_util_mediaQuery__[
            "a"
            /* MediaQuery */
          ]._init();
          this.$watched = $watched.length ? $watched : this.$element.find("[data-equalizer-watch]");
          this.$element.attr("data-resize", eqId || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__foundation_util_core__[
            "b"
            /* GetYoDigits */
          ])(6, "eq"));
          this.$element.attr("data-mutate", eqId || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__foundation_util_core__[
            "b"
            /* GetYoDigits */
          ])(6, "eq"));
          this.hasNested = this.$element.find("[data-equalizer]").length > 0;
          this.isNested = this.$element.parentsUntil(document.body, "[data-equalizer]").length > 0;
          this.isOn = false;
          this._bindHandler = {
            onResizeMeBound: this._onResizeMe.bind(this),
            onPostEqualizedBound: this._onPostEqualized.bind(this)
          };
          var imgs = this.$element.find("img");
          var tooSmall;
          if (this.options.equalizeOn) {
            tooSmall = this._checkMQ();
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).on("changed.zf.mediaquery", this._checkMQ.bind(this));
          } else {
            this._events();
          }
          if (tooSmall !== void 0 && tooSmall === false || tooSmall === void 0) {
            if (imgs.length) {
              __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__foundation_util_imageLoader__[
                "a"
                /* onImagesLoaded */
              ])(imgs, this._reflow.bind(this));
            } else {
              this._reflow();
            }
          }
        }
        /**
         * Removes event listeners if the breakpoint is too small.
         * @private
         */
      }, {
        key: "_pauseEvents",
        value: function _pauseEvents() {
          this.isOn = false;
          this.$element.off({
            ".zf.equalizer": this._bindHandler.onPostEqualizedBound,
            "resizeme.zf.trigger": this._bindHandler.onResizeMeBound,
            "mutateme.zf.trigger": this._bindHandler.onResizeMeBound
          });
        }
        /**
         * function to handle $elements resizeme.zf.trigger, with bound this on _bindHandler.onResizeMeBound
         * @private
         */
      }, {
        key: "_onResizeMe",
        value: function _onResizeMe(e2) {
          this._reflow();
        }
        /**
         * function to handle $elements postequalized.zf.equalizer, with bound this on _bindHandler.onPostEqualizedBound
         * @private
         */
      }, {
        key: "_onPostEqualized",
        value: function _onPostEqualized(e2) {
          if (e2.target !== this.$element[0]) {
            this._reflow();
          }
        }
        /**
         * Initializes events for Equalizer.
         * @private
         */
      }, {
        key: "_events",
        value: function _events() {
          var _this = this;
          this._pauseEvents();
          if (this.hasNested) {
            this.$element.on("postequalized.zf.equalizer", this._bindHandler.onPostEqualizedBound);
          } else {
            this.$element.on("resizeme.zf.trigger", this._bindHandler.onResizeMeBound);
            this.$element.on("mutateme.zf.trigger", this._bindHandler.onResizeMeBound);
          }
          this.isOn = true;
        }
        /**
         * Checks the current breakpoint to the minimum required size.
         * @private
         */
      }, {
        key: "_checkMQ",
        value: function _checkMQ() {
          var tooSmall = !__WEBPACK_IMPORTED_MODULE_1__foundation_util_mediaQuery__[
            "a"
            /* MediaQuery */
          ].is(this.options.equalizeOn);
          if (tooSmall) {
            if (this.isOn) {
              this._pauseEvents();
              this.$watched.css("height", "auto");
            }
          } else {
            if (!this.isOn) {
              this._events();
            }
          }
          return tooSmall;
        }
        /**
         * A noop version for the plugin
         * @private
         */
      }, {
        key: "_killswitch",
        value: function _killswitch() {
          return;
        }
        /**
         * Calls necessary functions to update Equalizer upon DOM change
         * @private
         */
      }, {
        key: "_reflow",
        value: function _reflow() {
          if (!this.options.equalizeOnStack) {
            if (this._isStacked()) {
              this.$watched.css("height", "auto");
              return false;
            }
          }
          if (this.options.equalizeByRow) {
            this.getHeightsByRow(this.applyHeightByRow.bind(this));
          } else {
            this.getHeights(this.applyHeight.bind(this));
          }
        }
        /**
         * Manually determines if the first 2 elements are *NOT* stacked.
         * @private
         */
      }, {
        key: "_isStacked",
        value: function _isStacked() {
          if (!this.$watched[0] || !this.$watched[1]) {
            return true;
          }
          return this.$watched[0].getBoundingClientRect().top !== this.$watched[1].getBoundingClientRect().top;
        }
        /**
         * Finds the outer heights of children contained within an Equalizer parent and returns them in an array
         * @param {Function} cb - A non-optional callback to return the heights array to.
         * @returns {Array} heights - An array of heights of children within Equalizer container
         */
      }, {
        key: "getHeights",
        value: function getHeights(cb) {
          var heights = [];
          for (var i = 0, len = this.$watched.length; i < len; i++) {
            this.$watched[i].style.height = "auto";
            heights.push(this.$watched[i].offsetHeight);
          }
          cb(heights);
        }
        /**
         * Finds the outer heights of children contained within an Equalizer parent and returns them in an array
         * @param {Function} cb - A non-optional callback to return the heights array to.
         * @returns {Array} groups - An array of heights of children within Equalizer container grouped by row with element,height and max as last child
         */
      }, {
        key: "getHeightsByRow",
        value: function getHeightsByRow(cb) {
          var lastElTopOffset = this.$watched.length ? this.$watched.first().offset().top : 0, groups = [], group = 0;
          groups[group] = [];
          for (var i = 0, len = this.$watched.length; i < len; i++) {
            this.$watched[i].style.height = "auto";
            var elOffsetTop = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this.$watched[i]).offset().top;
            if (elOffsetTop != lastElTopOffset) {
              group++;
              groups[group] = [];
              lastElTopOffset = elOffsetTop;
            }
            groups[group].push([this.$watched[i], this.$watched[i].offsetHeight]);
          }
          for (var j = 0, ln = groups.length; j < ln; j++) {
            var heights = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(groups[j]).map(function() {
              return this[1];
            }).get();
            var max = Math.max.apply(null, heights);
            groups[j].push(max);
          }
          cb(groups);
        }
        /**
         * Changes the CSS height property of each child in an Equalizer parent to match the tallest
         * @param {array} heights - An array of heights of children within Equalizer container
         * @fires Equalizer#preequalized
         * @fires Equalizer#postequalized
         */
      }, {
        key: "applyHeight",
        value: function applyHeight(heights) {
          var max = Math.max.apply(null, heights);
          this.$element.trigger("preequalized.zf.equalizer");
          this.$watched.css("height", max);
          this.$element.trigger("postequalized.zf.equalizer");
        }
        /**
         * Changes the CSS height property of each child in an Equalizer parent to match the tallest by row
         * @param {array} groups - An array of heights of children within Equalizer container grouped by row with element,height and max as last child
         * @fires Equalizer#preequalized
         * @fires Equalizer#preequalizedrow
         * @fires Equalizer#postequalizedrow
         * @fires Equalizer#postequalized
         */
      }, {
        key: "applyHeightByRow",
        value: function applyHeightByRow(groups) {
          this.$element.trigger("preequalized.zf.equalizer");
          for (var i = 0, len = groups.length; i < len; i++) {
            var groupsILength = groups[i].length, max = groups[i][groupsILength - 1];
            if (groupsILength <= 2) {
              __WEBPACK_IMPORTED_MODULE_0_jquery___default()(groups[i][0][0]).css({ "height": "auto" });
              continue;
            }
            this.$element.trigger("preequalizedrow.zf.equalizer");
            for (var j = 0, lenJ = groupsILength - 1; j < lenJ; j++) {
              __WEBPACK_IMPORTED_MODULE_0_jquery___default()(groups[i][j][0]).css({ "height": max });
            }
            this.$element.trigger("postequalizedrow.zf.equalizer");
          }
          this.$element.trigger("postequalized.zf.equalizer");
        }
        /**
         * Destroys an instance of Equalizer.
         * @function
         */
      }, {
        key: "_destroy",
        value: function _destroy() {
          this._pauseEvents();
          this.$watched.css("height", "auto");
        }
      }]);
      return Equalizer2;
    }(__WEBPACK_IMPORTED_MODULE_4__foundation_plugin__[
      "a"
      /* Plugin */
    ]);
    Equalizer.defaults = {
      /**
       * Enable height equalization when stacked on smaller screens.
       * @option
       * @type {boolean}
       * @default false
       */
      equalizeOnStack: false,
      /**
       * Enable height equalization row by row.
       * @option
       * @type {boolean}
       * @default false
       */
      equalizeByRow: false,
      /**
       * String representing the minimum breakpoint size the plugin should equalize heights on.
       * @option
       * @type {string}
       * @default ''
       */
      equalizeOn: ""
    };
  },
  /* 24 */
  /***/
  function(module2, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.d(__webpack_exports__, "a", function() {
      return Interchange;
    });
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
    var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
    var __WEBPACK_IMPORTED_MODULE_1__foundation_util_mediaQuery__ = __webpack_require__(4);
    var __WEBPACK_IMPORTED_MODULE_2__foundation_plugin__ = __webpack_require__(2);
    var __WEBPACK_IMPORTED_MODULE_3__foundation_util_core__ = __webpack_require__(1);
    var _createClass = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var Interchange = function(_Plugin) {
      _inherits(Interchange2, _Plugin);
      function Interchange2() {
        _classCallCheck(this, Interchange2);
        return _possibleConstructorReturn(this, (Interchange2.__proto__ || Object.getPrototypeOf(Interchange2)).apply(this, arguments));
      }
      _createClass(Interchange2, [{
        key: "_setup",
        /**
         * Creates a new instance of Interchange.
         * @class
         * @name Interchange
         * @fires Interchange#init
         * @param {Object} element - jQuery object to add the trigger to.
         * @param {Object} options - Overrides to the default plugin settings.
         */
        value: function _setup(element, options) {
          this.$element = element;
          this.options = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend({}, Interchange2.defaults, options);
          this.rules = [];
          this.currentPath = "";
          this.className = "Interchange";
          this._init();
          this._events();
        }
        /**
         * Initializes the Interchange plugin and calls functions to get interchange functioning on load.
         * @function
         * @private
         */
      }, {
        key: "_init",
        value: function _init() {
          __WEBPACK_IMPORTED_MODULE_1__foundation_util_mediaQuery__[
            "a"
            /* MediaQuery */
          ]._init();
          var id = this.$element[0].id || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__foundation_util_core__[
            "b"
            /* GetYoDigits */
          ])(6, "interchange");
          this.$element.attr({
            "data-resize": id,
            "id": id
          });
          this._addBreakpoints();
          this._generateRules();
          this._reflow();
        }
        /**
         * Initializes events for Interchange.
         * @function
         * @private
         */
      }, {
        key: "_events",
        value: function _events() {
          var _this3 = this;
          this.$element.off("resizeme.zf.trigger").on("resizeme.zf.trigger", function() {
            return _this3._reflow();
          });
        }
        /**
         * Calls necessary functions to update Interchange upon DOM change
         * @function
         * @private
         */
      }, {
        key: "_reflow",
        value: function _reflow() {
          var match;
          for (var i in this.rules) {
            if (this.rules.hasOwnProperty(i)) {
              var rule = this.rules[i];
              if (window.matchMedia(rule.query).matches) {
                match = rule;
              }
            }
          }
          if (match) {
            this.replace(match.path);
          }
        }
        /**
         * Gets the Foundation breakpoints and adds them to the Interchange.SPECIAL_QUERIES object.
         * @function
         * @private
         */
      }, {
        key: "_addBreakpoints",
        value: function _addBreakpoints() {
          for (var i in __WEBPACK_IMPORTED_MODULE_1__foundation_util_mediaQuery__[
            "a"
            /* MediaQuery */
          ].queries) {
            if (__WEBPACK_IMPORTED_MODULE_1__foundation_util_mediaQuery__[
              "a"
              /* MediaQuery */
            ].queries.hasOwnProperty(i)) {
              var query = __WEBPACK_IMPORTED_MODULE_1__foundation_util_mediaQuery__[
                "a"
                /* MediaQuery */
              ].queries[i];
              Interchange2.SPECIAL_QUERIES[query.name] = query.value;
            }
          }
        }
        /**
         * Checks the Interchange element for the provided media query + content pairings
         * @function
         * @private
         * @param {Object} element - jQuery object that is an Interchange instance
         * @returns {Array} scenarios - Array of objects that have 'mq' and 'path' keys with corresponding keys
         */
      }, {
        key: "_generateRules",
        value: function _generateRules(element) {
          var rulesList = [];
          var rules;
          if (this.options.rules) {
            rules = this.options.rules;
          } else {
            rules = this.$element.data("interchange");
          }
          rules = typeof rules === "string" ? rules.match(/\[.*?\]/g) : rules;
          for (var i in rules) {
            if (rules.hasOwnProperty(i)) {
              var rule = rules[i].slice(1, -1).split(", ");
              var path = rule.slice(0, -1).join("");
              var query = rule[rule.length - 1];
              if (Interchange2.SPECIAL_QUERIES[query]) {
                query = Interchange2.SPECIAL_QUERIES[query];
              }
              rulesList.push({
                path,
                query
              });
            }
          }
          this.rules = rulesList;
        }
        /**
         * Update the `src` property of an image, or change the HTML of a container, to the specified path.
         * @function
         * @param {String} path - Path to the image or HTML partial.
         * @fires Interchange#replaced
         */
      }, {
        key: "replace",
        value: function replace(path) {
          if (this.currentPath === path) return;
          var _this = this, trigger = "replaced.zf.interchange";
          if (this.$element[0].nodeName === "IMG") {
            this.$element.attr("src", path).on("load", function() {
              _this.currentPath = path;
            }).trigger(trigger);
          } else if (path.match(/\.(gif|jpg|jpeg|png|svg|tiff)([?#].*)?/i)) {
            path = path.replace(/\(/g, "%28").replace(/\)/g, "%29");
            this.$element.css({ "background-image": "url(" + path + ")" }).trigger(trigger);
          } else {
            __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.get(path, function(response) {
              _this.$element.html(response).trigger(trigger);
              __WEBPACK_IMPORTED_MODULE_0_jquery___default()(response).foundation();
              _this.currentPath = path;
            });
          }
        }
        /**
         * Destroys an instance of interchange.
         * @function
         */
      }, {
        key: "_destroy",
        value: function _destroy() {
          this.$element.off("resizeme.zf.trigger");
        }
      }]);
      return Interchange2;
    }(__WEBPACK_IMPORTED_MODULE_2__foundation_plugin__[
      "a"
      /* Plugin */
    ]);
    Interchange.defaults = {
      /**
       * Rules to be applied to Interchange elements. Set with the `data-interchange` array notation.
       * @option
       * @type {?array}
       * @default null
       */
      rules: null
    };
    Interchange.SPECIAL_QUERIES = {
      "landscape": "screen and (orientation: landscape)",
      "portrait": "screen and (orientation: portrait)",
      "retina": "only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx)"
    };
  },
  /* 25 */
  /***/
  function(module2, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.d(__webpack_exports__, "a", function() {
      return Magellan;
    });
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
    var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
    var __WEBPACK_IMPORTED_MODULE_1__foundation_util_core__ = __webpack_require__(1);
    var __WEBPACK_IMPORTED_MODULE_2__foundation_plugin__ = __webpack_require__(2);
    var __WEBPACK_IMPORTED_MODULE_3__foundation_smoothScroll__ = __webpack_require__(16);
    var _createClass = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var Magellan = function(_Plugin) {
      _inherits(Magellan2, _Plugin);
      function Magellan2() {
        _classCallCheck(this, Magellan2);
        return _possibleConstructorReturn(this, (Magellan2.__proto__ || Object.getPrototypeOf(Magellan2)).apply(this, arguments));
      }
      _createClass(Magellan2, [{
        key: "_setup",
        /**
         * Creates a new instance of Magellan.
         * @class
         * @name Magellan
         * @fires Magellan#init
         * @param {Object} element - jQuery object to add the trigger to.
         * @param {Object} options - Overrides to the default plugin settings.
         */
        value: function _setup(element, options) {
          this.$element = element;
          this.options = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend({}, Magellan2.defaults, this.$element.data(), options);
          this.className = "Magellan";
          this._init();
          this.calcPoints();
        }
        /**
         * Initializes the Magellan plugin and calls functions to get equalizer functioning on load.
         * @private
         */
      }, {
        key: "_init",
        value: function _init() {
          var id = this.$element[0].id || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__foundation_util_core__[
            "b"
            /* GetYoDigits */
          ])(6, "magellan");
          var _this = this;
          this.$targets = __WEBPACK_IMPORTED_MODULE_0_jquery___default()("[data-magellan-target]");
          this.$links = this.$element.find("a");
          this.$element.attr({
            "data-resize": id,
            "data-scroll": id,
            "id": id
          });
          this.$active = __WEBPACK_IMPORTED_MODULE_0_jquery___default()();
          this.scrollPos = parseInt(window.pageYOffset, 10);
          this._events();
        }
        /**
         * Calculates an array of pixel values that are the demarcation lines between locations on the page.
         * Can be invoked if new elements are added or the size of a location changes.
         * @function
         */
      }, {
        key: "calcPoints",
        value: function calcPoints() {
          var _this = this, body = document.body, html = document.documentElement;
          this.points = [];
          this.winHeight = Math.round(Math.max(window.innerHeight, html.clientHeight));
          this.docHeight = Math.round(Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight));
          this.$targets.each(function() {
            var $tar = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this), pt = Math.round($tar.offset().top - _this.options.threshold);
            $tar.targetPoint = pt;
            _this.points.push(pt);
          });
        }
        /**
         * Initializes events for Magellan.
         * @private
         */
      }, {
        key: "_events",
        value: function _events() {
          var _this = this, $body = __WEBPACK_IMPORTED_MODULE_0_jquery___default()("html, body"), opts = {
            duration: _this.options.animationDuration,
            easing: _this.options.animationEasing
          };
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).one("load", function() {
            if (_this.options.deepLinking) {
              if (location.hash) {
                _this.scrollToLoc(location.hash);
              }
            }
            _this.calcPoints();
            _this._updateActive();
          });
          this.$element.on({
            "resizeme.zf.trigger": this.reflow.bind(this),
            "scrollme.zf.trigger": this._updateActive.bind(this)
          }).on("click.zf.magellan", 'a[href^="#"]', function(e2) {
            e2.preventDefault();
            var arrival = this.getAttribute("href");
            _this.scrollToLoc(arrival);
          });
          this._deepLinkScroll = function(e2) {
            if (_this.options.deepLinking) {
              _this.scrollToLoc(window.location.hash);
            }
          };
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).on("popstate", this._deepLinkScroll);
        }
        /**
         * Function to scroll to a given location on the page.
         * @param {String} loc - a properly formatted jQuery id selector. Example: '#foo'
         * @function
         */
      }, {
        key: "scrollToLoc",
        value: function scrollToLoc(loc) {
          this._inTransition = true;
          var _this = this;
          var options = {
            animationEasing: this.options.animationEasing,
            animationDuration: this.options.animationDuration,
            threshold: this.options.threshold,
            offset: this.options.offset
          };
          __WEBPACK_IMPORTED_MODULE_3__foundation_smoothScroll__[
            "a"
            /* SmoothScroll */
          ].scrollToLoc(loc, options, function() {
            _this._inTransition = false;
            _this._updateActive();
          });
        }
        /**
         * Calls necessary functions to update Magellan upon DOM change
         * @function
         */
      }, {
        key: "reflow",
        value: function reflow() {
          this.calcPoints();
          this._updateActive();
        }
        /**
         * Updates the visibility of an active location link, and updates the url hash for the page, if deepLinking enabled.
         * @private
         * @function
         * @fires Magellan#update
         */
      }, {
        key: "_updateActive",
        value: function _updateActive() {
          if (this._inTransition) {
            return;
          }
          var winPos = (
            /*scrollPos ||*/
            parseInt(window.pageYOffset, 10)
          ), curIdx;
          if (winPos + this.winHeight === this.docHeight) {
            curIdx = this.points.length - 1;
          } else if (winPos < this.points[0]) {
            curIdx = void 0;
          } else {
            var isDown = this.scrollPos < winPos, _this = this, curVisible = this.points.filter(function(p, i) {
              return isDown ? p - _this.options.offset <= winPos : p - _this.options.offset - _this.options.threshold <= winPos;
            });
            curIdx = curVisible.length ? curVisible.length - 1 : 0;
          }
          this.$active.removeClass(this.options.activeClass);
          this.$active = this.$links.filter('[href="#' + this.$targets.eq(curIdx).data("magellan-target") + '"]').addClass(this.options.activeClass);
          if (this.options.deepLinking) {
            var hash = "";
            if (curIdx != void 0) {
              hash = this.$active[0].getAttribute("href");
            }
            if (hash !== window.location.hash) {
              if (window.history.pushState) {
                window.history.pushState(null, null, hash);
              } else {
                window.location.hash = hash;
              }
            }
          }
          this.scrollPos = winPos;
          this.$element.trigger("update.zf.magellan", [this.$active]);
        }
        /**
         * Destroys an instance of Magellan and resets the url of the window.
         * @function
         */
      }, {
        key: "_destroy",
        value: function _destroy() {
          this.$element.off(".zf.trigger .zf.magellan").find("." + this.options.activeClass).removeClass(this.options.activeClass);
          if (this.options.deepLinking) {
            var hash = this.$active[0].getAttribute("href");
            window.location.hash.replace(hash, "");
          }
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).off("popstate", this._deepLinkScroll);
        }
      }]);
      return Magellan2;
    }(__WEBPACK_IMPORTED_MODULE_2__foundation_plugin__[
      "a"
      /* Plugin */
    ]);
    Magellan.defaults = {
      /**
       * Amount of time, in ms, the animated scrolling should take between locations.
       * @option
       * @type {number}
       * @default 500
       */
      animationDuration: 500,
      /**
       * Animation style to use when scrolling between locations. Can be `'swing'` or `'linear'`.
       * @option
       * @type {string}
       * @default 'linear'
       * @see {@link https://api.jquery.com/animate|Jquery animate}
       */
      animationEasing: "linear",
      /**
       * Number of pixels to use as a marker for location changes.
       * @option
       * @type {number}
       * @default 50
       */
      threshold: 50,
      /**
       * Class applied to the active locations link on the magellan container.
       * @option
       * @type {string}
       * @default 'is-active'
       */
      activeClass: "is-active",
      /**
       * Allows the script to manipulate the url of the current page, and if supported, alter the history.
       * @option
       * @type {boolean}
       * @default false
       */
      deepLinking: false,
      /**
       * Number of pixels to offset the scroll of the page on item click if using a sticky nav bar.
       * @option
       * @type {number}
       * @default 0
       */
      offset: 0
    };
  },
  /* 26 */
  /***/
  function(module2, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.d(__webpack_exports__, "a", function() {
      return OffCanvas;
    });
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
    var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
    var __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__ = __webpack_require__(3);
    var __WEBPACK_IMPORTED_MODULE_2__foundation_util_mediaQuery__ = __webpack_require__(4);
    var __WEBPACK_IMPORTED_MODULE_3__foundation_util_core__ = __webpack_require__(1);
    var __WEBPACK_IMPORTED_MODULE_4__foundation_plugin__ = __webpack_require__(2);
    var __WEBPACK_IMPORTED_MODULE_5__foundation_util_triggers__ = __webpack_require__(5);
    var _createClass = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var OffCanvas = function(_Plugin) {
      _inherits(OffCanvas2, _Plugin);
      function OffCanvas2() {
        _classCallCheck(this, OffCanvas2);
        return _possibleConstructorReturn(this, (OffCanvas2.__proto__ || Object.getPrototypeOf(OffCanvas2)).apply(this, arguments));
      }
      _createClass(OffCanvas2, [{
        key: "_setup",
        /**
         * Creates a new instance of an off-canvas wrapper.
         * @class
         * @name OffCanvas
         * @fires OffCanvas#init
         * @param {Object} element - jQuery object to initialize.
         * @param {Object} options - Overrides to the default plugin settings.
         */
        value: function _setup(element, options) {
          var _this3 = this;
          this.className = "OffCanvas";
          this.$element = element;
          this.options = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend({}, OffCanvas2.defaults, this.$element.data(), options);
          this.contentClasses = { base: [], reveal: [] };
          this.$lastTrigger = __WEBPACK_IMPORTED_MODULE_0_jquery___default()();
          this.$triggers = __WEBPACK_IMPORTED_MODULE_0_jquery___default()();
          this.position = "left";
          this.$content = __WEBPACK_IMPORTED_MODULE_0_jquery___default()();
          this.nested = !!this.options.nested;
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()(["push", "overlap"]).each(function(index, val) {
            _this3.contentClasses.base.push("has-transition-" + val);
          });
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()(["left", "right", "top", "bottom"]).each(function(index, val) {
            _this3.contentClasses.base.push("has-position-" + val);
            _this3.contentClasses.reveal.push("has-reveal-" + val);
          });
          __WEBPACK_IMPORTED_MODULE_5__foundation_util_triggers__[
            "a"
            /* Triggers */
          ].init(__WEBPACK_IMPORTED_MODULE_0_jquery___default.a);
          __WEBPACK_IMPORTED_MODULE_2__foundation_util_mediaQuery__[
            "a"
            /* MediaQuery */
          ]._init();
          this._init();
          this._events();
          __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__[
            "a"
            /* Keyboard */
          ].register("OffCanvas", {
            "ESCAPE": "close"
          });
        }
        /**
         * Initializes the off-canvas wrapper by adding the exit overlay (if needed).
         * @function
         * @private
         */
      }, {
        key: "_init",
        value: function _init() {
          var id = this.$element.attr("id");
          this.$element.attr("aria-hidden", "true");
          if (this.options.contentId) {
            this.$content = __WEBPACK_IMPORTED_MODULE_0_jquery___default()("#" + this.options.contentId);
          } else if (this.$element.siblings("[data-off-canvas-content]").length) {
            this.$content = this.$element.siblings("[data-off-canvas-content]").first();
          } else {
            this.$content = this.$element.closest("[data-off-canvas-content]").first();
          }
          if (!this.options.contentId) {
            this.nested = this.$element.siblings("[data-off-canvas-content]").length === 0;
          } else if (this.options.contentId && this.options.nested === null) {
            console.warn("Remember to use the nested option if using the content ID option!");
          }
          if (this.nested === true) {
            this.options.transition = "overlap";
            this.$element.removeClass("is-transition-push");
          }
          this.$element.addClass("is-transition-" + this.options.transition + " is-closed");
          this.$triggers = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(document).find('[data-open="' + id + '"], [data-close="' + id + '"], [data-toggle="' + id + '"]').attr("aria-expanded", "false").attr("aria-controls", id);
          this.position = this.$element.is(".position-left, .position-top, .position-right, .position-bottom") ? this.$element.attr("class").match(/position\-(left|top|right|bottom)/)[1] : this.position;
          if (this.options.contentOverlay === true) {
            var overlay = document.createElement("div");
            var overlayPosition = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this.$element).css("position") === "fixed" ? "is-overlay-fixed" : "is-overlay-absolute";
            overlay.setAttribute("class", "js-off-canvas-overlay " + overlayPosition);
            this.$overlay = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(overlay);
            if (overlayPosition === "is-overlay-fixed") {
              __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this.$overlay).insertAfter(this.$element);
            } else {
              this.$content.append(this.$overlay);
            }
          }
          this.options.isRevealed = this.options.isRevealed || new RegExp(this.options.revealClass, "g").test(this.$element[0].className);
          if (this.options.isRevealed === true) {
            this.options.revealOn = this.options.revealOn || this.$element[0].className.match(/(reveal-for-medium|reveal-for-large)/g)[0].split("-")[2];
            this._setMQChecker();
          }
          if (this.options.transitionTime) {
            this.$element.css("transition-duration", this.options.transitionTime);
          }
          this._removeContentClasses();
        }
        /**
         * Adds event handlers to the off-canvas wrapper and the exit overlay.
         * @function
         * @private
         */
      }, {
        key: "_events",
        value: function _events() {
          this.$element.off(".zf.trigger .zf.offcanvas").on({
            "open.zf.trigger": this.open.bind(this),
            "close.zf.trigger": this.close.bind(this),
            "toggle.zf.trigger": this.toggle.bind(this),
            "keydown.zf.offcanvas": this._handleKeyboard.bind(this)
          });
          if (this.options.closeOnClick === true) {
            var $target = this.options.contentOverlay ? this.$overlay : this.$content;
            $target.on({ "click.zf.offcanvas": this.close.bind(this) });
          }
        }
        /**
         * Applies event listener for elements that will reveal at certain breakpoints.
         * @private
         */
      }, {
        key: "_setMQChecker",
        value: function _setMQChecker() {
          var _this = this;
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).on("changed.zf.mediaquery", function() {
            if (__WEBPACK_IMPORTED_MODULE_2__foundation_util_mediaQuery__[
              "a"
              /* MediaQuery */
            ].atLeast(_this.options.revealOn)) {
              _this.reveal(true);
            } else {
              _this.reveal(false);
            }
          }).one("load.zf.offcanvas", function() {
            if (__WEBPACK_IMPORTED_MODULE_2__foundation_util_mediaQuery__[
              "a"
              /* MediaQuery */
            ].atLeast(_this.options.revealOn)) {
              _this.reveal(true);
            }
          });
        }
        /**
         * Removes the CSS transition/position classes of the off-canvas content container.
         * Removing the classes is important when another off-canvas gets opened that uses the same content container.
         * @param {Boolean} hasReveal - true if related off-canvas element is revealed.
         * @private
         */
      }, {
        key: "_removeContentClasses",
        value: function _removeContentClasses(hasReveal) {
          if (typeof hasReveal !== "boolean") {
            this.$content.removeClass(this.contentClasses.base.join(" "));
          } else if (hasReveal === false) {
            this.$content.removeClass("has-reveal-" + this.position);
          }
        }
        /**
         * Adds the CSS transition/position classes of the off-canvas content container, based on the opening off-canvas element.
         * Beforehand any transition/position class gets removed.
         * @param {Boolean} hasReveal - true if related off-canvas element is revealed.
         * @private
         */
      }, {
        key: "_addContentClasses",
        value: function _addContentClasses(hasReveal) {
          this._removeContentClasses(hasReveal);
          if (typeof hasReveal !== "boolean") {
            this.$content.addClass("has-transition-" + this.options.transition + " has-position-" + this.position);
          } else if (hasReveal === true) {
            this.$content.addClass("has-reveal-" + this.position);
          }
        }
        /**
         * Handles the revealing/hiding the off-canvas at breakpoints, not the same as open.
         * @param {Boolean} isRevealed - true if element should be revealed.
         * @function
         */
      }, {
        key: "reveal",
        value: function reveal(isRevealed) {
          if (isRevealed) {
            this.close();
            this.isRevealed = true;
            this.$element.attr("aria-hidden", "false");
            this.$element.off("open.zf.trigger toggle.zf.trigger");
            this.$element.removeClass("is-closed");
          } else {
            this.isRevealed = false;
            this.$element.attr("aria-hidden", "true");
            this.$element.off("open.zf.trigger toggle.zf.trigger").on({
              "open.zf.trigger": this.open.bind(this),
              "toggle.zf.trigger": this.toggle.bind(this)
            });
            this.$element.addClass("is-closed");
          }
          this._addContentClasses(isRevealed);
        }
        /**
         * Stops scrolling of the body when offcanvas is open on mobile Safari and other troublesome browsers.
         * @private
         */
      }, {
        key: "_stopScrolling",
        value: function _stopScrolling(event2) {
          return false;
        }
        // Taken and adapted from http://stackoverflow.com/questions/16889447/prevent-full-page-scrolling-ios
        // Only really works for y, not sure how to extend to x or if we need to.
      }, {
        key: "_recordScrollable",
        value: function _recordScrollable(event2) {
          var elem2 = this;
          if (elem2.scrollHeight !== elem2.clientHeight) {
            if (elem2.scrollTop === 0) {
              elem2.scrollTop = 1;
            }
            if (elem2.scrollTop === elem2.scrollHeight - elem2.clientHeight) {
              elem2.scrollTop = elem2.scrollHeight - elem2.clientHeight - 1;
            }
          }
          elem2.allowUp = elem2.scrollTop > 0;
          elem2.allowDown = elem2.scrollTop < elem2.scrollHeight - elem2.clientHeight;
          elem2.lastY = event2.originalEvent.pageY;
        }
      }, {
        key: "_stopScrollPropagation",
        value: function _stopScrollPropagation(event2) {
          var elem2 = this;
          var up = event2.pageY < elem2.lastY;
          var down = !up;
          elem2.lastY = event2.pageY;
          if (up && elem2.allowUp || down && elem2.allowDown) {
            event2.stopPropagation();
          } else {
            event2.preventDefault();
          }
        }
        /**
         * Opens the off-canvas menu.
         * @function
         * @param {Object} event - Event object passed from listener.
         * @param {jQuery} trigger - element that triggered the off-canvas to open.
         * @fires OffCanvas#opened
         */
      }, {
        key: "open",
        value: function open(event2, trigger) {
          if (this.$element.hasClass("is-open") || this.isRevealed) {
            return;
          }
          var _this = this;
          if (trigger) {
            this.$lastTrigger = trigger;
          }
          if (this.options.forceTo === "top") {
            window.scrollTo(0, 0);
          } else if (this.options.forceTo === "bottom") {
            window.scrollTo(0, document.body.scrollHeight);
          }
          if (this.options.transitionTime && this.options.transition !== "overlap") {
            this.$element.siblings("[data-off-canvas-content]").css("transition-duration", this.options.transitionTime);
          } else {
            this.$element.siblings("[data-off-canvas-content]").css("transition-duration", "");
          }
          this.$element.addClass("is-open").removeClass("is-closed");
          this.$triggers.attr("aria-expanded", "true");
          this.$element.attr("aria-hidden", "false").trigger("opened.zf.offcanvas");
          this.$content.addClass("is-open-" + this.position);
          if (this.options.contentScroll === false) {
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()("body").addClass("is-off-canvas-open").on("touchmove", this._stopScrolling);
            this.$element.on("touchstart", this._recordScrollable);
            this.$element.on("touchmove", this._stopScrollPropagation);
          }
          if (this.options.contentOverlay === true) {
            this.$overlay.addClass("is-visible");
          }
          if (this.options.closeOnClick === true && this.options.contentOverlay === true) {
            this.$overlay.addClass("is-closable");
          }
          if (this.options.autoFocus === true) {
            this.$element.one(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__foundation_util_core__[
              "c"
              /* transitionend */
            ])(this.$element), function() {
              if (!_this.$element.hasClass("is-open")) {
                return;
              }
              var canvasFocus = _this.$element.find("[data-autofocus]");
              if (canvasFocus.length) {
                canvasFocus.eq(0).focus();
              } else {
                _this.$element.find("a, button").eq(0).focus();
              }
            });
          }
          if (this.options.trapFocus === true) {
            this.$content.attr("tabindex", "-1");
            __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__[
              "a"
              /* Keyboard */
            ].trapFocus(this.$element);
          }
          this._addContentClasses();
        }
        /**
         * Closes the off-canvas menu.
         * @function
         * @param {Function} cb - optional cb to fire after closure.
         * @fires OffCanvas#closed
         */
      }, {
        key: "close",
        value: function close(cb) {
          if (!this.$element.hasClass("is-open") || this.isRevealed) {
            return;
          }
          var _this = this;
          this.$element.removeClass("is-open");
          this.$element.attr("aria-hidden", "true").trigger("closed.zf.offcanvas");
          this.$content.removeClass("is-open-left is-open-top is-open-right is-open-bottom");
          if (this.options.contentScroll === false) {
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()("body").removeClass("is-off-canvas-open").off("touchmove", this._stopScrolling);
            this.$element.off("touchstart", this._recordScrollable);
            this.$element.off("touchmove", this._stopScrollPropagation);
          }
          if (this.options.contentOverlay === true) {
            this.$overlay.removeClass("is-visible");
          }
          if (this.options.closeOnClick === true && this.options.contentOverlay === true) {
            this.$overlay.removeClass("is-closable");
          }
          this.$triggers.attr("aria-expanded", "false");
          if (this.options.trapFocus === true) {
            this.$content.removeAttr("tabindex");
            __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__[
              "a"
              /* Keyboard */
            ].releaseFocus(this.$element);
          }
          this.$element.one(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__foundation_util_core__[
            "c"
            /* transitionend */
          ])(this.$element), function(e2) {
            _this.$element.addClass("is-closed");
            _this._removeContentClasses();
          });
        }
        /**
         * Toggles the off-canvas menu open or closed.
         * @function
         * @param {Object} event - Event object passed from listener.
         * @param {jQuery} trigger - element that triggered the off-canvas to open.
         */
      }, {
        key: "toggle",
        value: function toggle(event2, trigger) {
          if (this.$element.hasClass("is-open")) {
            this.close(event2, trigger);
          } else {
            this.open(event2, trigger);
          }
        }
        /**
         * Handles keyboard input when detected. When the escape key is pressed, the off-canvas menu closes, and focus is restored to the element that opened the menu.
         * @function
         * @private
         */
      }, {
        key: "_handleKeyboard",
        value: function _handleKeyboard(e2) {
          var _this4 = this;
          __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__[
            "a"
            /* Keyboard */
          ].handleKey(e2, "OffCanvas", {
            close: function() {
              _this4.close();
              _this4.$lastTrigger.focus();
              return true;
            },
            handled: function() {
              e2.stopPropagation();
              e2.preventDefault();
            }
          });
        }
        /**
         * Destroys the offcanvas plugin.
         * @function
         */
      }, {
        key: "_destroy",
        value: function _destroy() {
          this.close();
          this.$element.off(".zf.trigger .zf.offcanvas");
          this.$overlay.off(".zf.offcanvas");
        }
      }]);
      return OffCanvas2;
    }(__WEBPACK_IMPORTED_MODULE_4__foundation_plugin__[
      "a"
      /* Plugin */
    ]);
    OffCanvas.defaults = {
      /**
       * Allow the user to click outside of the menu to close it.
       * @option
       * @type {boolean}
       * @default true
       */
      closeOnClick: true,
      /**
       * Adds an overlay on top of `[data-off-canvas-content]`.
       * @option
       * @type {boolean}
       * @default true
       */
      contentOverlay: true,
      /**
       * Target an off-canvas content container by ID that may be placed anywhere. If null the closest content container will be taken.
       * @option
       * @type {?string}
       * @default null
       */
      contentId: null,
      /**
       * Define the off-canvas element is nested in an off-canvas content. This is required when using the contentId option for a nested element.
       * @option
       * @type {boolean}
       * @default null
       */
      nested: null,
      /**
       * Enable/disable scrolling of the main content when an off canvas panel is open.
       * @option
       * @type {boolean}
       * @default true
       */
      contentScroll: true,
      /**
       * Amount of time in ms the open and close transition requires. If none selected, pulls from body style.
       * @option
       * @type {number}
       * @default null
       */
      transitionTime: null,
      /**
       * Type of transition for the offcanvas menu. Options are 'push', 'detached' or 'slide'.
       * @option
       * @type {string}
       * @default push
       */
      transition: "push",
      /**
       * Force the page to scroll to top or bottom on open.
       * @option
       * @type {?string}
       * @default null
       */
      forceTo: null,
      /**
       * Allow the offcanvas to remain open for certain breakpoints.
       * @option
       * @type {boolean}
       * @default false
       */
      isRevealed: false,
      /**
       * Breakpoint at which to reveal. JS will use a RegExp to target standard classes, if changing classnames, pass your class with the `revealClass` option.
       * @option
       * @type {?string}
       * @default null
       */
      revealOn: null,
      /**
       * Force focus to the offcanvas on open. If true, will focus the opening trigger on close.
       * @option
       * @type {boolean}
       * @default true
       */
      autoFocus: true,
      /**
       * Class used to force an offcanvas to remain open. Foundation defaults for this are `reveal-for-large` & `reveal-for-medium`.
       * @option
       * @type {string}
       * @default reveal-for-
       * @todo improve the regex testing for this.
       */
      revealClass: "reveal-for-",
      /**
       * Triggers optional focus trapping when opening an offcanvas. Sets tabindex of [data-off-canvas-content] to -1 for accessibility purposes.
       * @option
       * @type {boolean}
       * @default false
       */
      trapFocus: false
    };
  },
  /* 27 */
  /***/
  function(module2, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.d(__webpack_exports__, "a", function() {
      return Orbit;
    });
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
    var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
    var __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__ = __webpack_require__(3);
    var __WEBPACK_IMPORTED_MODULE_2__foundation_util_motion__ = __webpack_require__(6);
    var __WEBPACK_IMPORTED_MODULE_3__foundation_util_timer__ = __webpack_require__(18);
    var __WEBPACK_IMPORTED_MODULE_4__foundation_util_imageLoader__ = __webpack_require__(8);
    var __WEBPACK_IMPORTED_MODULE_5__foundation_util_core__ = __webpack_require__(1);
    var __WEBPACK_IMPORTED_MODULE_6__foundation_plugin__ = __webpack_require__(2);
    var __WEBPACK_IMPORTED_MODULE_7__foundation_util_touch__ = __webpack_require__(10);
    var _createClass = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var Orbit = function(_Plugin) {
      _inherits(Orbit2, _Plugin);
      function Orbit2() {
        _classCallCheck(this, Orbit2);
        return _possibleConstructorReturn(this, (Orbit2.__proto__ || Object.getPrototypeOf(Orbit2)).apply(this, arguments));
      }
      _createClass(Orbit2, [{
        key: "_setup",
        /**
        * Creates a new instance of an orbit carousel.
        * @class
        * @name Orbit
        * @param {jQuery} element - jQuery object to make into an Orbit Carousel.
        * @param {Object} options - Overrides to the default plugin settings.
        */
        value: function _setup(element, options) {
          this.$element = element;
          this.options = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend({}, Orbit2.defaults, this.$element.data(), options);
          this.className = "Orbit";
          __WEBPACK_IMPORTED_MODULE_7__foundation_util_touch__[
            "a"
            /* Touch */
          ].init(__WEBPACK_IMPORTED_MODULE_0_jquery___default.a);
          this._init();
          __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__[
            "a"
            /* Keyboard */
          ].register("Orbit", {
            "ltr": {
              "ARROW_RIGHT": "next",
              "ARROW_LEFT": "previous"
            },
            "rtl": {
              "ARROW_LEFT": "next",
              "ARROW_RIGHT": "previous"
            }
          });
        }
        /**
        * Initializes the plugin by creating jQuery collections, setting attributes, and starting the animation.
        * @function
        * @private
        */
      }, {
        key: "_init",
        value: function _init() {
          this._reset();
          this.$wrapper = this.$element.find("." + this.options.containerClass);
          this.$slides = this.$element.find("." + this.options.slideClass);
          var $images = this.$element.find("img"), initActive = this.$slides.filter(".is-active"), id = this.$element[0].id || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__foundation_util_core__[
            "b"
            /* GetYoDigits */
          ])(6, "orbit");
          this.$element.attr({
            "data-resize": id,
            "id": id
          });
          if (!initActive.length) {
            this.$slides.eq(0).addClass("is-active");
          }
          if (!this.options.useMUI) {
            this.$slides.addClass("no-motionui");
          }
          if ($images.length) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__foundation_util_imageLoader__[
              "a"
              /* onImagesLoaded */
            ])($images, this._prepareForOrbit.bind(this));
          } else {
            this._prepareForOrbit();
          }
          if (this.options.bullets) {
            this._loadBullets();
          }
          this._events();
          if (this.options.autoPlay && this.$slides.length > 1) {
            this.geoSync();
          }
          if (this.options.accessible) {
            this.$wrapper.attr("tabindex", 0);
          }
        }
        /**
        * Creates a jQuery collection of bullets, if they are being used.
        * @function
        * @private
        */
      }, {
        key: "_loadBullets",
        value: function _loadBullets() {
          this.$bullets = this.$element.find("." + this.options.boxOfBullets).find("button");
        }
        /**
        * Sets a `timer` object on the orbit, and starts the counter for the next slide.
        * @function
        */
      }, {
        key: "geoSync",
        value: function geoSync() {
          var _this = this;
          this.timer = new __WEBPACK_IMPORTED_MODULE_3__foundation_util_timer__[
            "a"
            /* Timer */
          ](this.$element, {
            duration: this.options.timerDelay,
            infinite: false
          }, function() {
            _this.changeSlide(true);
          });
          this.timer.start();
        }
        /**
        * Sets wrapper and slide heights for the orbit.
        * @function
        * @private
        */
      }, {
        key: "_prepareForOrbit",
        value: function _prepareForOrbit() {
          var _this = this;
          this._setWrapperHeight();
        }
        /**
        * Calulates the height of each slide in the collection, and uses the tallest one for the wrapper height.
        * @function
        * @private
        * @param {Function} cb - a callback function to fire when complete.
        */
      }, {
        key: "_setWrapperHeight",
        value: function _setWrapperHeight(cb) {
          var max = 0, temp, counter = 0, _this = this;
          this.$slides.each(function() {
            temp = this.getBoundingClientRect().height;
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).attr("data-slide", counter);
            if (!/mui/g.test(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this)[0].className) && _this.$slides.filter(".is-active")[0] !== _this.$slides.eq(counter)[0]) {
              __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).css({ "position": "relative", "display": "none" });
            }
            max = temp > max ? temp : max;
            counter++;
          });
          if (counter === this.$slides.length) {
            this.$wrapper.css({ "height": max });
            if (cb) {
              cb(max);
            }
          }
        }
        /**
        * Sets the max-height of each slide.
        * @function
        * @private
        */
      }, {
        key: "_setSlideHeight",
        value: function _setSlideHeight(height) {
          this.$slides.each(function() {
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).css("max-height", height);
          });
        }
        /**
        * Adds event listeners to basically everything within the element.
        * @function
        * @private
        */
      }, {
        key: "_events",
        value: function _events() {
          var _this = this;
          this.$element.off(".resizeme.zf.trigger").on({
            "resizeme.zf.trigger": this._prepareForOrbit.bind(this)
          });
          if (this.$slides.length > 1) {
            if (this.options.swipe) {
              this.$slides.off("swipeleft.zf.orbit swiperight.zf.orbit").on("swipeleft.zf.orbit", function(e2) {
                e2.preventDefault();
                _this.changeSlide(true);
              }).on("swiperight.zf.orbit", function(e2) {
                e2.preventDefault();
                _this.changeSlide(false);
              });
            }
            if (this.options.autoPlay) {
              this.$slides.on("click.zf.orbit", function() {
                _this.$element.data("clickedOn", _this.$element.data("clickedOn") ? false : true);
                _this.timer[_this.$element.data("clickedOn") ? "pause" : "start"]();
              });
              if (this.options.pauseOnHover) {
                this.$element.on("mouseenter.zf.orbit", function() {
                  _this.timer.pause();
                }).on("mouseleave.zf.orbit", function() {
                  if (!_this.$element.data("clickedOn")) {
                    _this.timer.start();
                  }
                });
              }
            }
            if (this.options.navButtons) {
              var $controls = this.$element.find("." + this.options.nextClass + ", ." + this.options.prevClass);
              $controls.attr("tabindex", 0).on("click.zf.orbit touchend.zf.orbit", function(e2) {
                e2.preventDefault();
                _this.changeSlide(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).hasClass(_this.options.nextClass));
              });
            }
            if (this.options.bullets) {
              this.$bullets.on("click.zf.orbit touchend.zf.orbit", function() {
                if (/is-active/g.test(this.className)) {
                  return false;
                }
                var idx = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).data("slide"), ltr = idx > _this.$slides.filter(".is-active").data("slide"), $slide = _this.$slides.eq(idx);
                _this.changeSlide(ltr, $slide, idx);
              });
            }
            if (this.options.accessible) {
              this.$wrapper.add(this.$bullets).on("keydown.zf.orbit", function(e2) {
                __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__[
                  "a"
                  /* Keyboard */
                ].handleKey(e2, "Orbit", {
                  next: function() {
                    _this.changeSlide(true);
                  },
                  previous: function() {
                    _this.changeSlide(false);
                  },
                  handled: function() {
                    if (__WEBPACK_IMPORTED_MODULE_0_jquery___default()(e2.target).is(_this.$bullets)) {
                      _this.$bullets.filter(".is-active").focus();
                    }
                  }
                });
              });
            }
          }
        }
        /**
         * Resets Orbit so it can be reinitialized
         */
      }, {
        key: "_reset",
        value: function _reset() {
          if (typeof this.$slides == "undefined") {
            return;
          }
          if (this.$slides.length > 1) {
            this.$element.off(".zf.orbit").find("*").off(".zf.orbit");
            if (this.options.autoPlay) {
              this.timer.restart();
            }
            this.$slides.each(function(el) {
              __WEBPACK_IMPORTED_MODULE_0_jquery___default()(el).removeClass("is-active is-active is-in").removeAttr("aria-live").hide();
            });
            this.$slides.first().addClass("is-active").show();
            this.$element.trigger("slidechange.zf.orbit", [this.$slides.first()]);
            if (this.options.bullets) {
              this._updateBullets(0);
            }
          }
        }
        /**
        * Changes the current slide to a new one.
        * @function
        * @param {Boolean} isLTR - flag if the slide should move left to right.
        * @param {jQuery} chosenSlide - the jQuery element of the slide to show next, if one is selected.
        * @param {Number} idx - the index of the new slide in its collection, if one chosen.
        * @fires Orbit#slidechange
        */
      }, {
        key: "changeSlide",
        value: function changeSlide(isLTR, chosenSlide, idx) {
          if (!this.$slides) {
            return;
          }
          var $curSlide = this.$slides.filter(".is-active").eq(0);
          if (/mui/g.test($curSlide[0].className)) {
            return false;
          }
          var $firstSlide = this.$slides.first(), $lastSlide = this.$slides.last(), dirIn = isLTR ? "Right" : "Left", dirOut = isLTR ? "Left" : "Right", _this = this, $newSlide;
          if (!chosenSlide) {
            $newSlide = isLTR ? (
              //if wrapping enabled, check to see if there is a `next` or `prev` sibling, if not, select the first or last slide to fill in. if wrapping not enabled, attempt to select `next` or `prev`, if there's nothing there, the function will kick out on next step. CRAZY NESTED TERNARIES!!!!!
              this.options.infiniteWrap ? $curSlide.next("." + this.options.slideClass).length ? $curSlide.next("." + this.options.slideClass) : $firstSlide : $curSlide.next("." + this.options.slideClass)
            ) : (
              //pick next slide if moving left to right
              this.options.infiniteWrap ? $curSlide.prev("." + this.options.slideClass).length ? $curSlide.prev("." + this.options.slideClass) : $lastSlide : $curSlide.prev("." + this.options.slideClass)
            );
          } else {
            $newSlide = chosenSlide;
          }
          if ($newSlide.length) {
            this.$element.trigger("beforeslidechange.zf.orbit", [$curSlide, $newSlide]);
            if (this.options.bullets) {
              idx = idx || this.$slides.index($newSlide);
              this._updateBullets(idx);
            }
            if (this.options.useMUI && !this.$element.is(":hidden")) {
              __WEBPACK_IMPORTED_MODULE_2__foundation_util_motion__[
                "a"
                /* Motion */
              ].animateIn($newSlide.addClass("is-active").css({ "position": "absolute", "top": 0 }), this.options["animInFrom" + dirIn], function() {
                $newSlide.css({ "position": "relative", "display": "block" }).attr("aria-live", "polite");
              });
              __WEBPACK_IMPORTED_MODULE_2__foundation_util_motion__[
                "a"
                /* Motion */
              ].animateOut($curSlide.removeClass("is-active"), this.options["animOutTo" + dirOut], function() {
                $curSlide.removeAttr("aria-live");
                if (_this.options.autoPlay && !_this.timer.isPaused) {
                  _this.timer.restart();
                }
              });
            } else {
              $curSlide.removeClass("is-active is-in").removeAttr("aria-live").hide();
              $newSlide.addClass("is-active is-in").attr("aria-live", "polite").show();
              if (this.options.autoPlay && !this.timer.isPaused) {
                this.timer.restart();
              }
            }
            this.$element.trigger("slidechange.zf.orbit", [$newSlide]);
          }
        }
        /**
        * Updates the active state of the bullets, if displayed.
        * @function
        * @private
        * @param {Number} idx - the index of the current slide.
        */
      }, {
        key: "_updateBullets",
        value: function _updateBullets(idx) {
          var $oldBullet = this.$element.find("." + this.options.boxOfBullets).find(".is-active").removeClass("is-active").blur(), span = $oldBullet.find("span:last").detach(), $newBullet = this.$bullets.eq(idx).addClass("is-active").append(span);
        }
        /**
        * Destroys the carousel and hides the element.
        * @function
        */
      }, {
        key: "_destroy",
        value: function _destroy() {
          this.$element.off(".zf.orbit").find("*").off(".zf.orbit").end().hide();
        }
      }]);
      return Orbit2;
    }(__WEBPACK_IMPORTED_MODULE_6__foundation_plugin__[
      "a"
      /* Plugin */
    ]);
    Orbit.defaults = {
      /**
      * Tells the JS to look for and loadBullets.
      * @option
       * @type {boolean}
      * @default true
      */
      bullets: true,
      /**
      * Tells the JS to apply event listeners to nav buttons
      * @option
       * @type {boolean}
      * @default true
      */
      navButtons: true,
      /**
      * motion-ui animation class to apply
      * @option
       * @type {string}
      * @default 'slide-in-right'
      */
      animInFromRight: "slide-in-right",
      /**
      * motion-ui animation class to apply
      * @option
       * @type {string}
      * @default 'slide-out-right'
      */
      animOutToRight: "slide-out-right",
      /**
      * motion-ui animation class to apply
      * @option
       * @type {string}
      * @default 'slide-in-left'
      *
      */
      animInFromLeft: "slide-in-left",
      /**
      * motion-ui animation class to apply
      * @option
       * @type {string}
      * @default 'slide-out-left'
      */
      animOutToLeft: "slide-out-left",
      /**
      * Allows Orbit to automatically animate on page load.
      * @option
       * @type {boolean}
      * @default true
      */
      autoPlay: true,
      /**
      * Amount of time, in ms, between slide transitions
      * @option
       * @type {number}
      * @default 5000
      */
      timerDelay: 5e3,
      /**
      * Allows Orbit to infinitely loop through the slides
      * @option
       * @type {boolean}
      * @default true
      */
      infiniteWrap: true,
      /**
      * Allows the Orbit slides to bind to swipe events for mobile, requires an additional util library
      * @option
       * @type {boolean}
      * @default true
      */
      swipe: true,
      /**
      * Allows the timing function to pause animation on hover.
      * @option
       * @type {boolean}
      * @default true
      */
      pauseOnHover: true,
      /**
      * Allows Orbit to bind keyboard events to the slider, to animate frames with arrow keys
      * @option
       * @type {boolean}
      * @default true
      */
      accessible: true,
      /**
      * Class applied to the container of Orbit
      * @option
       * @type {string}
      * @default 'orbit-container'
      */
      containerClass: "orbit-container",
      /**
      * Class applied to individual slides.
      * @option
       * @type {string}
      * @default 'orbit-slide'
      */
      slideClass: "orbit-slide",
      /**
      * Class applied to the bullet container. You're welcome.
      * @option
       * @type {string}
      * @default 'orbit-bullets'
      */
      boxOfBullets: "orbit-bullets",
      /**
      * Class applied to the `next` navigation button.
      * @option
       * @type {string}
      * @default 'orbit-next'
      */
      nextClass: "orbit-next",
      /**
      * Class applied to the `previous` navigation button.
      * @option
       * @type {string}
      * @default 'orbit-previous'
      */
      prevClass: "orbit-previous",
      /**
      * Boolean to flag the js to use motion ui classes or not. Default to true for backwards compatability.
      * @option
       * @type {boolean}
      * @default true
      */
      useMUI: true
    };
  },
  /* 28 */
  /***/
  function(module2, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.d(__webpack_exports__, "a", function() {
      return ResponsiveAccordionTabs;
    });
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
    var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
    var __WEBPACK_IMPORTED_MODULE_1__foundation_util_mediaQuery__ = __webpack_require__(4);
    var __WEBPACK_IMPORTED_MODULE_2__foundation_util_core__ = __webpack_require__(1);
    var __WEBPACK_IMPORTED_MODULE_3__foundation_plugin__ = __webpack_require__(2);
    var __WEBPACK_IMPORTED_MODULE_4__foundation_accordion__ = __webpack_require__(11);
    var __WEBPACK_IMPORTED_MODULE_5__foundation_tabs__ = __webpack_require__(17);
    var _createClass = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var MenuPlugins = {
      tabs: {
        cssClass: "tabs",
        plugin: __WEBPACK_IMPORTED_MODULE_5__foundation_tabs__[
          "a"
          /* Tabs */
        ]
      },
      accordion: {
        cssClass: "accordion",
        plugin: __WEBPACK_IMPORTED_MODULE_4__foundation_accordion__[
          "a"
          /* Accordion */
        ]
      }
    };
    var ResponsiveAccordionTabs = function(_Plugin) {
      _inherits(ResponsiveAccordionTabs2, _Plugin);
      function ResponsiveAccordionTabs2() {
        _classCallCheck(this, ResponsiveAccordionTabs2);
        return _possibleConstructorReturn(this, (ResponsiveAccordionTabs2.__proto__ || Object.getPrototypeOf(ResponsiveAccordionTabs2)).apply(this, arguments));
      }
      _createClass(ResponsiveAccordionTabs2, [{
        key: "_setup",
        /**
         * Creates a new instance of a responsive accordion tabs.
         * @class
         * @name ResponsiveAccordionTabs
         * @fires ResponsiveAccordionTabs#init
         * @param {jQuery} element - jQuery object to make into Responsive Accordion Tabs.
         * @param {Object} options - Overrides to the default plugin settings.
         */
        value: function _setup(element, options) {
          this.$element = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(element);
          this.options = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend({}, this.$element.data(), options);
          this.rules = this.$element.data("responsive-accordion-tabs");
          this.currentMq = null;
          this.currentPlugin = null;
          this.className = "ResponsiveAccordionTabs";
          if (!this.$element.attr("id")) {
            this.$element.attr("id", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__foundation_util_core__[
              "b"
              /* GetYoDigits */
            ])(6, "responsiveaccordiontabs"));
          }
          ;
          this._init();
          this._events();
        }
        /**
         * Initializes the Menu by parsing the classes from the 'data-responsive-accordion-tabs' attribute on the element.
         * @function
         * @private
         */
      }, {
        key: "_init",
        value: function _init() {
          __WEBPACK_IMPORTED_MODULE_1__foundation_util_mediaQuery__[
            "a"
            /* MediaQuery */
          ]._init();
          if (typeof this.rules === "string") {
            var rulesTree = {};
            var rules = this.rules.split(" ");
            for (var i = 0; i < rules.length; i++) {
              var rule = rules[i].split("-");
              var ruleSize = rule.length > 1 ? rule[0] : "small";
              var rulePlugin = rule.length > 1 ? rule[1] : rule[0];
              if (MenuPlugins[rulePlugin] !== null) {
                rulesTree[ruleSize] = MenuPlugins[rulePlugin];
              }
            }
            this.rules = rulesTree;
          }
          this._getAllOptions();
          if (!__WEBPACK_IMPORTED_MODULE_0_jquery___default.a.isEmptyObject(this.rules)) {
            this._checkMediaQueries();
          }
        }
      }, {
        key: "_getAllOptions",
        value: function _getAllOptions() {
          var _this = this;
          _this.allOptions = {};
          for (var key in MenuPlugins) {
            if (MenuPlugins.hasOwnProperty(key)) {
              var obj = MenuPlugins[key];
              try {
                var dummyPlugin = __WEBPACK_IMPORTED_MODULE_0_jquery___default()("<ul></ul>");
                var tmpPlugin = new obj.plugin(dummyPlugin, _this.options);
                for (var keyKey in tmpPlugin.options) {
                  if (tmpPlugin.options.hasOwnProperty(keyKey) && keyKey !== "zfPlugin") {
                    var objObj = tmpPlugin.options[keyKey];
                    _this.allOptions[keyKey] = objObj;
                  }
                }
                tmpPlugin.destroy();
              } catch (e2) {
              }
            }
          }
        }
        /**
         * Initializes events for the Menu.
         * @function
         * @private
         */
      }, {
        key: "_events",
        value: function _events() {
          var _this = this;
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).on("changed.zf.mediaquery", function() {
            _this._checkMediaQueries();
          });
        }
        /**
         * Checks the current screen width against available media queries. If the media query has changed, and the plugin needed has changed, the plugins will swap out.
         * @function
         * @private
         */
      }, {
        key: "_checkMediaQueries",
        value: function _checkMediaQueries() {
          var matchedMq, _this = this;
          __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.each(this.rules, function(key) {
            if (__WEBPACK_IMPORTED_MODULE_1__foundation_util_mediaQuery__[
              "a"
              /* MediaQuery */
            ].atLeast(key)) {
              matchedMq = key;
            }
          });
          if (!matchedMq) return;
          if (this.currentPlugin instanceof this.rules[matchedMq].plugin) return;
          __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.each(MenuPlugins, function(key, value) {
            _this.$element.removeClass(value.cssClass);
          });
          this.$element.addClass(this.rules[matchedMq].cssClass);
          if (this.currentPlugin) {
            if (!this.currentPlugin.$element.data("zfPlugin") && this.storezfData) this.currentPlugin.$element.data("zfPlugin", this.storezfData);
            this.currentPlugin.destroy();
          }
          this._handleMarkup(this.rules[matchedMq].cssClass);
          this.currentPlugin = new this.rules[matchedMq].plugin(this.$element, {});
          this.storezfData = this.currentPlugin.$element.data("zfPlugin");
        }
      }, {
        key: "_handleMarkup",
        value: function _handleMarkup(toSet) {
          var _this = this, fromString = "accordion";
          var $panels = __WEBPACK_IMPORTED_MODULE_0_jquery___default()("[data-tabs-content=" + this.$element.attr("id") + "]");
          if ($panels.length) fromString = "tabs";
          if (fromString === toSet) {
            return;
          }
          ;
          var tabsTitle = _this.allOptions.linkClass ? _this.allOptions.linkClass : "tabs-title";
          var tabsPanel = _this.allOptions.panelClass ? _this.allOptions.panelClass : "tabs-panel";
          this.$element.removeAttr("role");
          var $liHeads = this.$element.children("." + tabsTitle + ",[data-accordion-item]").removeClass(tabsTitle).removeClass("accordion-item").removeAttr("data-accordion-item");
          var $liHeadsA = $liHeads.children("a").removeClass("accordion-title");
          if (fromString === "tabs") {
            $panels = $panels.children("." + tabsPanel).removeClass(tabsPanel).removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby");
            $panels.children("a").removeAttr("role").removeAttr("aria-controls").removeAttr("aria-selected");
          } else {
            $panels = $liHeads.children("[data-tab-content]").removeClass("accordion-content");
          }
          ;
          $panels.css({ display: "", visibility: "" });
          $liHeads.css({ display: "", visibility: "" });
          if (toSet === "accordion") {
            $panels.each(function(key, value) {
              __WEBPACK_IMPORTED_MODULE_0_jquery___default()(value).appendTo($liHeads.get(key)).addClass("accordion-content").attr("data-tab-content", "").removeClass("is-active").css({ height: "" });
              __WEBPACK_IMPORTED_MODULE_0_jquery___default()("[data-tabs-content=" + _this.$element.attr("id") + "]").after('<div id="tabs-placeholder-' + _this.$element.attr("id") + '"></div>').detach();
              $liHeads.addClass("accordion-item").attr("data-accordion-item", "");
              $liHeadsA.addClass("accordion-title");
            });
          } else if (toSet === "tabs") {
            var $tabsContent = __WEBPACK_IMPORTED_MODULE_0_jquery___default()("[data-tabs-content=" + _this.$element.attr("id") + "]");
            var $placeholder = __WEBPACK_IMPORTED_MODULE_0_jquery___default()("#tabs-placeholder-" + _this.$element.attr("id"));
            if ($placeholder.length) {
              $tabsContent = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('<div class="tabs-content"></div>').insertAfter($placeholder).attr("data-tabs-content", _this.$element.attr("id"));
              $placeholder.remove();
            } else {
              $tabsContent = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('<div class="tabs-content"></div>').insertAfter(_this.$element).attr("data-tabs-content", _this.$element.attr("id"));
            }
            ;
            $panels.each(function(key, value) {
              var tempValue = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(value).appendTo($tabsContent).addClass(tabsPanel);
              var hash = $liHeadsA.get(key).hash.slice(1);
              var id = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(value).attr("id") || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__foundation_util_core__[
                "b"
                /* GetYoDigits */
              ])(6, "accordion");
              if (hash !== id) {
                if (hash !== "") {
                  __WEBPACK_IMPORTED_MODULE_0_jquery___default()(value).attr("id", hash);
                } else {
                  hash = id;
                  __WEBPACK_IMPORTED_MODULE_0_jquery___default()(value).attr("id", hash);
                  __WEBPACK_IMPORTED_MODULE_0_jquery___default()($liHeadsA.get(key)).attr("href", __WEBPACK_IMPORTED_MODULE_0_jquery___default()($liHeadsA.get(key)).attr("href").replace("#", "") + "#" + hash);
                }
                ;
              }
              ;
              var isActive = __WEBPACK_IMPORTED_MODULE_0_jquery___default()($liHeads.get(key)).hasClass("is-active");
              if (isActive) {
                tempValue.addClass("is-active");
              }
              ;
            });
            $liHeads.addClass(tabsTitle);
          }
          ;
        }
        /**
         * Destroys the instance of the current plugin on this element, as well as the window resize handler that switches the plugins out.
         * @function
         */
      }, {
        key: "_destroy",
        value: function _destroy() {
          if (this.currentPlugin) this.currentPlugin.destroy();
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).off(".zf.ResponsiveAccordionTabs");
        }
      }]);
      return ResponsiveAccordionTabs2;
    }(__WEBPACK_IMPORTED_MODULE_3__foundation_plugin__[
      "a"
      /* Plugin */
    ]);
    ResponsiveAccordionTabs.defaults = {};
  },
  /* 29 */
  /***/
  function(module2, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.d(__webpack_exports__, "a", function() {
      return ResponsiveMenu;
    });
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
    var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
    var __WEBPACK_IMPORTED_MODULE_1__foundation_util_mediaQuery__ = __webpack_require__(4);
    var __WEBPACK_IMPORTED_MODULE_2__foundation_util_core__ = __webpack_require__(1);
    var __WEBPACK_IMPORTED_MODULE_3__foundation_plugin__ = __webpack_require__(2);
    var __WEBPACK_IMPORTED_MODULE_4__foundation_dropdownMenu__ = __webpack_require__(14);
    var __WEBPACK_IMPORTED_MODULE_5__foundation_drilldown__ = __webpack_require__(13);
    var __WEBPACK_IMPORTED_MODULE_6__foundation_accordionMenu__ = __webpack_require__(12);
    var _createClass = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var MenuPlugins = {
      dropdown: {
        cssClass: "dropdown",
        plugin: __WEBPACK_IMPORTED_MODULE_4__foundation_dropdownMenu__[
          "a"
          /* DropdownMenu */
        ]
      },
      drilldown: {
        cssClass: "drilldown",
        plugin: __WEBPACK_IMPORTED_MODULE_5__foundation_drilldown__[
          "a"
          /* Drilldown */
        ]
      },
      accordion: {
        cssClass: "accordion-menu",
        plugin: __WEBPACK_IMPORTED_MODULE_6__foundation_accordionMenu__[
          "a"
          /* AccordionMenu */
        ]
      }
    };
    var ResponsiveMenu = function(_Plugin) {
      _inherits(ResponsiveMenu2, _Plugin);
      function ResponsiveMenu2() {
        _classCallCheck(this, ResponsiveMenu2);
        return _possibleConstructorReturn(this, (ResponsiveMenu2.__proto__ || Object.getPrototypeOf(ResponsiveMenu2)).apply(this, arguments));
      }
      _createClass(ResponsiveMenu2, [{
        key: "_setup",
        /**
         * Creates a new instance of a responsive menu.
         * @class
         * @name ResponsiveMenu
         * @fires ResponsiveMenu#init
         * @param {jQuery} element - jQuery object to make into a dropdown menu.
         * @param {Object} options - Overrides to the default plugin settings.
         */
        value: function _setup(element, options) {
          this.$element = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(element);
          this.rules = this.$element.data("responsive-menu");
          this.currentMq = null;
          this.currentPlugin = null;
          this.className = "ResponsiveMenu";
          this._init();
          this._events();
        }
        /**
         * Initializes the Menu by parsing the classes from the 'data-ResponsiveMenu' attribute on the element.
         * @function
         * @private
         */
      }, {
        key: "_init",
        value: function _init() {
          __WEBPACK_IMPORTED_MODULE_1__foundation_util_mediaQuery__[
            "a"
            /* MediaQuery */
          ]._init();
          if (typeof this.rules === "string") {
            var rulesTree = {};
            var rules = this.rules.split(" ");
            for (var i = 0; i < rules.length; i++) {
              var rule = rules[i].split("-");
              var ruleSize = rule.length > 1 ? rule[0] : "small";
              var rulePlugin = rule.length > 1 ? rule[1] : rule[0];
              if (MenuPlugins[rulePlugin] !== null) {
                rulesTree[ruleSize] = MenuPlugins[rulePlugin];
              }
            }
            this.rules = rulesTree;
          }
          if (!__WEBPACK_IMPORTED_MODULE_0_jquery___default.a.isEmptyObject(this.rules)) {
            this._checkMediaQueries();
          }
          this.$element.attr("data-mutate", this.$element.attr("data-mutate") || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__foundation_util_core__[
            "b"
            /* GetYoDigits */
          ])(6, "responsive-menu"));
        }
        /**
         * Initializes events for the Menu.
         * @function
         * @private
         */
      }, {
        key: "_events",
        value: function _events() {
          var _this = this;
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).on("changed.zf.mediaquery", function() {
            _this._checkMediaQueries();
          });
        }
        /**
         * Checks the current screen width against available media queries. If the media query has changed, and the plugin needed has changed, the plugins will swap out.
         * @function
         * @private
         */
      }, {
        key: "_checkMediaQueries",
        value: function _checkMediaQueries() {
          var matchedMq, _this = this;
          __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.each(this.rules, function(key) {
            if (__WEBPACK_IMPORTED_MODULE_1__foundation_util_mediaQuery__[
              "a"
              /* MediaQuery */
            ].atLeast(key)) {
              matchedMq = key;
            }
          });
          if (!matchedMq) return;
          if (this.currentPlugin instanceof this.rules[matchedMq].plugin) return;
          __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.each(MenuPlugins, function(key, value) {
            _this.$element.removeClass(value.cssClass);
          });
          this.$element.addClass(this.rules[matchedMq].cssClass);
          if (this.currentPlugin) this.currentPlugin.destroy();
          this.currentPlugin = new this.rules[matchedMq].plugin(this.$element, {});
        }
        /**
         * Destroys the instance of the current plugin on this element, as well as the window resize handler that switches the plugins out.
         * @function
         */
      }, {
        key: "_destroy",
        value: function _destroy() {
          this.currentPlugin.destroy();
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).off(".zf.ResponsiveMenu");
        }
      }]);
      return ResponsiveMenu2;
    }(__WEBPACK_IMPORTED_MODULE_3__foundation_plugin__[
      "a"
      /* Plugin */
    ]);
    ResponsiveMenu.defaults = {};
  },
  /* 30 */
  /***/
  function(module2, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.d(__webpack_exports__, "a", function() {
      return ResponsiveToggle;
    });
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
    var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
    var __WEBPACK_IMPORTED_MODULE_1__foundation_util_mediaQuery__ = __webpack_require__(4);
    var __WEBPACK_IMPORTED_MODULE_2__foundation_util_motion__ = __webpack_require__(6);
    var __WEBPACK_IMPORTED_MODULE_3__foundation_plugin__ = __webpack_require__(2);
    var _createClass = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var ResponsiveToggle = function(_Plugin) {
      _inherits(ResponsiveToggle2, _Plugin);
      function ResponsiveToggle2() {
        _classCallCheck(this, ResponsiveToggle2);
        return _possibleConstructorReturn(this, (ResponsiveToggle2.__proto__ || Object.getPrototypeOf(ResponsiveToggle2)).apply(this, arguments));
      }
      _createClass(ResponsiveToggle2, [{
        key: "_setup",
        /**
         * Creates a new instance of Tab Bar.
         * @class
         * @name ResponsiveToggle
         * @fires ResponsiveToggle#init
         * @param {jQuery} element - jQuery object to attach tab bar functionality to.
         * @param {Object} options - Overrides to the default plugin settings.
         */
        value: function _setup(element, options) {
          this.$element = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(element);
          this.options = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend({}, ResponsiveToggle2.defaults, this.$element.data(), options);
          this.className = "ResponsiveToggle";
          this._init();
          this._events();
        }
        /**
         * Initializes the tab bar by finding the target element, toggling element, and running update().
         * @function
         * @private
         */
      }, {
        key: "_init",
        value: function _init() {
          __WEBPACK_IMPORTED_MODULE_1__foundation_util_mediaQuery__[
            "a"
            /* MediaQuery */
          ]._init();
          var targetID = this.$element.data("responsive-toggle");
          if (!targetID) {
            console.error("Your tab bar needs an ID of a Menu as the value of data-tab-bar.");
          }
          this.$targetMenu = __WEBPACK_IMPORTED_MODULE_0_jquery___default()("#" + targetID);
          this.$toggler = this.$element.find("[data-toggle]").filter(function() {
            var target = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).data("toggle");
            return target === targetID || target === "";
          });
          this.options = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend({}, this.options, this.$targetMenu.data());
          if (this.options.animate) {
            var input = this.options.animate.split(" ");
            this.animationIn = input[0];
            this.animationOut = input[1] || null;
          }
          this._update();
        }
        /**
         * Adds necessary event handlers for the tab bar to work.
         * @function
         * @private
         */
      }, {
        key: "_events",
        value: function _events() {
          var _this = this;
          this._updateMqHandler = this._update.bind(this);
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).on("changed.zf.mediaquery", this._updateMqHandler);
          this.$toggler.on("click.zf.responsiveToggle", this.toggleMenu.bind(this));
        }
        /**
         * Checks the current media query to determine if the tab bar should be visible or hidden.
         * @function
         * @private
         */
      }, {
        key: "_update",
        value: function _update() {
          if (!__WEBPACK_IMPORTED_MODULE_1__foundation_util_mediaQuery__[
            "a"
            /* MediaQuery */
          ].atLeast(this.options.hideFor)) {
            this.$element.show();
            this.$targetMenu.hide();
          } else {
            this.$element.hide();
            this.$targetMenu.show();
          }
        }
        /**
         * Toggles the element attached to the tab bar. The toggle only happens if the screen is small enough to allow it.
         * @function
         * @fires ResponsiveToggle#toggled
         */
      }, {
        key: "toggleMenu",
        value: function toggleMenu() {
          var _this3 = this;
          if (!__WEBPACK_IMPORTED_MODULE_1__foundation_util_mediaQuery__[
            "a"
            /* MediaQuery */
          ].atLeast(this.options.hideFor)) {
            if (this.options.animate) {
              if (this.$targetMenu.is(":hidden")) {
                __WEBPACK_IMPORTED_MODULE_2__foundation_util_motion__[
                  "a"
                  /* Motion */
                ].animateIn(this.$targetMenu, this.animationIn, function() {
                  _this3.$element.trigger("toggled.zf.responsiveToggle");
                  _this3.$targetMenu.find("[data-mutate]").triggerHandler("mutateme.zf.trigger");
                });
              } else {
                __WEBPACK_IMPORTED_MODULE_2__foundation_util_motion__[
                  "a"
                  /* Motion */
                ].animateOut(this.$targetMenu, this.animationOut, function() {
                  _this3.$element.trigger("toggled.zf.responsiveToggle");
                });
              }
            } else {
              this.$targetMenu.toggle(0);
              this.$targetMenu.find("[data-mutate]").trigger("mutateme.zf.trigger");
              this.$element.trigger("toggled.zf.responsiveToggle");
            }
          }
        }
      }, {
        key: "_destroy",
        value: function _destroy() {
          this.$element.off(".zf.responsiveToggle");
          this.$toggler.off(".zf.responsiveToggle");
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).off("changed.zf.mediaquery", this._updateMqHandler);
        }
      }]);
      return ResponsiveToggle2;
    }(__WEBPACK_IMPORTED_MODULE_3__foundation_plugin__[
      "a"
      /* Plugin */
    ]);
    ResponsiveToggle.defaults = {
      /**
       * The breakpoint after which the menu is always shown, and the tab bar is hidden.
       * @option
       * @type {string}
       * @default 'medium'
       */
      hideFor: "medium",
      /**
       * To decide if the toggle should be animated or not.
       * @option
       * @type {boolean}
       * @default false
       */
      animate: false
    };
  },
  /* 31 */
  /***/
  function(module2, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.d(__webpack_exports__, "a", function() {
      return Reveal;
    });
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
    var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
    var __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__ = __webpack_require__(3);
    var __WEBPACK_IMPORTED_MODULE_2__foundation_util_mediaQuery__ = __webpack_require__(4);
    var __WEBPACK_IMPORTED_MODULE_3__foundation_util_motion__ = __webpack_require__(6);
    var __WEBPACK_IMPORTED_MODULE_4__foundation_plugin__ = __webpack_require__(2);
    var __WEBPACK_IMPORTED_MODULE_5__foundation_util_triggers__ = __webpack_require__(5);
    var _createClass = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var Reveal = function(_Plugin) {
      _inherits(Reveal2, _Plugin);
      function Reveal2() {
        _classCallCheck(this, Reveal2);
        return _possibleConstructorReturn(this, (Reveal2.__proto__ || Object.getPrototypeOf(Reveal2)).apply(this, arguments));
      }
      _createClass(Reveal2, [{
        key: "_setup",
        /**
         * Creates a new instance of Reveal.
         * @class
         * @name Reveal
         * @param {jQuery} element - jQuery object to use for the modal.
         * @param {Object} options - optional parameters.
         */
        value: function _setup(element, options) {
          this.$element = element;
          this.options = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend({}, Reveal2.defaults, this.$element.data(), options);
          this.className = "Reveal";
          this._init();
          __WEBPACK_IMPORTED_MODULE_5__foundation_util_triggers__[
            "a"
            /* Triggers */
          ].init(__WEBPACK_IMPORTED_MODULE_0_jquery___default.a);
          __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__[
            "a"
            /* Keyboard */
          ].register("Reveal", {
            "ESCAPE": "close"
          });
        }
        /**
         * Initializes the modal by adding the overlay and close buttons, (if selected).
         * @private
         */
      }, {
        key: "_init",
        value: function _init() {
          __WEBPACK_IMPORTED_MODULE_2__foundation_util_mediaQuery__[
            "a"
            /* MediaQuery */
          ]._init();
          this.id = this.$element.attr("id");
          this.isActive = false;
          this.cached = { mq: __WEBPACK_IMPORTED_MODULE_2__foundation_util_mediaQuery__[
            "a"
            /* MediaQuery */
          ].current };
          this.isMobile = mobileSniff();
          this.$anchor = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('[data-open="' + this.id + '"]').length ? __WEBPACK_IMPORTED_MODULE_0_jquery___default()('[data-open="' + this.id + '"]') : __WEBPACK_IMPORTED_MODULE_0_jquery___default()('[data-toggle="' + this.id + '"]');
          this.$anchor.attr({
            "aria-controls": this.id,
            "aria-haspopup": true,
            "tabindex": 0
          });
          if (this.options.fullScreen || this.$element.hasClass("full")) {
            this.options.fullScreen = true;
            this.options.overlay = false;
          }
          if (this.options.overlay && !this.$overlay) {
            this.$overlay = this._makeOverlay(this.id);
          }
          this.$element.attr({
            "role": "dialog",
            "aria-hidden": true,
            "data-yeti-box": this.id,
            "data-resize": this.id
          });
          if (this.$overlay) {
            this.$element.detach().appendTo(this.$overlay);
          } else {
            this.$element.detach().appendTo(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this.options.appendTo));
            this.$element.addClass("without-overlay");
          }
          this._events();
          if (this.options.deepLink && window.location.hash === "#" + this.id) {
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).one("load.zf.reveal", this.open.bind(this));
          }
        }
        /**
         * Creates an overlay div to display behind the modal.
         * @private
         */
      }, {
        key: "_makeOverlay",
        value: function _makeOverlay() {
          var additionalOverlayClasses = "";
          if (this.options.additionalOverlayClasses) {
            additionalOverlayClasses = " " + this.options.additionalOverlayClasses;
          }
          return __WEBPACK_IMPORTED_MODULE_0_jquery___default()("<div></div>").addClass("reveal-overlay" + additionalOverlayClasses).appendTo(this.options.appendTo);
        }
        /**
         * Updates position of modal
         * TODO:  Figure out if we actually need to cache these values or if it doesn't matter
         * @private
         */
      }, {
        key: "_updatePosition",
        value: function _updatePosition() {
          var width = this.$element.outerWidth();
          var outerWidth = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).width();
          var height = this.$element.outerHeight();
          var outerHeight = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).height();
          var left, top;
          if (this.options.hOffset === "auto") {
            left = parseInt((outerWidth - width) / 2, 10);
          } else {
            left = parseInt(this.options.hOffset, 10);
          }
          if (this.options.vOffset === "auto") {
            if (height > outerHeight) {
              top = parseInt(Math.min(100, outerHeight / 10), 10);
            } else {
              top = parseInt((outerHeight - height) / 4, 10);
            }
          } else {
            top = parseInt(this.options.vOffset, 10);
          }
          this.$element.css({ top: top + "px" });
          if (!this.$overlay || this.options.hOffset !== "auto") {
            this.$element.css({ left: left + "px" });
            this.$element.css({ margin: "0px" });
          }
        }
        /**
         * Adds event handlers for the modal.
         * @private
         */
      }, {
        key: "_events",
        value: function _events() {
          var _this3 = this;
          var _this = this;
          this.$element.on({
            "open.zf.trigger": this.open.bind(this),
            "close.zf.trigger": function(event2, $element) {
              if (event2.target === _this.$element[0] || __WEBPACK_IMPORTED_MODULE_0_jquery___default()(event2.target).parents("[data-closable]")[0] === $element) {
                return _this3.close.apply(_this3);
              }
            },
            "toggle.zf.trigger": this.toggle.bind(this),
            "resizeme.zf.trigger": function() {
              _this._updatePosition();
            }
          });
          if (this.options.closeOnClick && this.options.overlay) {
            this.$overlay.off(".zf.reveal").on("click.zf.reveal", function(e2) {
              if (e2.target === _this.$element[0] || __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.contains(_this.$element[0], e2.target) || !__WEBPACK_IMPORTED_MODULE_0_jquery___default.a.contains(document, e2.target)) {
                return;
              }
              _this.close();
            });
          }
          if (this.options.deepLink) {
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).on("popstate.zf.reveal:" + this.id, this._handleState.bind(this));
          }
        }
        /**
         * Handles modal methods on back/forward button clicks or any other event that triggers popstate.
         * @private
         */
      }, {
        key: "_handleState",
        value: function _handleState(e2) {
          if (window.location.hash === "#" + this.id && !this.isActive) {
            this.open();
          } else {
            this.close();
          }
        }
        /**
         * Opens the modal controlled by `this.$anchor`, and closes all others by default.
         * @function
         * @fires Reveal#closeme
         * @fires Reveal#open
         */
      }, {
        key: "open",
        value: function open() {
          var _this4 = this;
          if (this.options.deepLink) {
            var hash = "#" + this.id;
            if (window.history.pushState) {
              if (this.options.updateHistory) {
                window.history.pushState({}, "", hash);
              } else {
                window.history.replaceState({}, "", hash);
              }
            } else {
              window.location.hash = hash;
            }
          }
          this.isActive = true;
          this.$element.css({ "visibility": "hidden" }).show().scrollTop(0);
          if (this.options.overlay) {
            this.$overlay.css({ "visibility": "hidden" }).show();
          }
          this._updatePosition();
          this.$element.hide().css({ "visibility": "" });
          if (this.$overlay) {
            this.$overlay.css({ "visibility": "" }).hide();
            if (this.$element.hasClass("fast")) {
              this.$overlay.addClass("fast");
            } else if (this.$element.hasClass("slow")) {
              this.$overlay.addClass("slow");
            }
          }
          if (!this.options.multipleOpened) {
            this.$element.trigger("closeme.zf.reveal", this.id);
          }
          var _this = this;
          function addRevealOpenClasses() {
            if (_this.isMobile) {
              if (!_this.originalScrollPos) {
                _this.originalScrollPos = window.pageYOffset;
              }
              __WEBPACK_IMPORTED_MODULE_0_jquery___default()("html, body").addClass("is-reveal-open");
            } else {
              __WEBPACK_IMPORTED_MODULE_0_jquery___default()("body").addClass("is-reveal-open");
            }
          }
          if (this.options.animationIn) {
            var afterAnimation = function() {
              _this.$element.attr({
                "aria-hidden": false,
                "tabindex": -1
              }).focus();
              addRevealOpenClasses();
              __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__[
                "a"
                /* Keyboard */
              ].trapFocus(_this.$element);
            };
            if (this.options.overlay) {
              __WEBPACK_IMPORTED_MODULE_3__foundation_util_motion__[
                "a"
                /* Motion */
              ].animateIn(this.$overlay, "fade-in");
            }
            __WEBPACK_IMPORTED_MODULE_3__foundation_util_motion__[
              "a"
              /* Motion */
            ].animateIn(this.$element, this.options.animationIn, function() {
              if (_this4.$element) {
                _this4.focusableElements = __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__[
                  "a"
                  /* Keyboard */
                ].findFocusable(_this4.$element);
                afterAnimation();
              }
            });
          } else {
            if (this.options.overlay) {
              this.$overlay.show(0);
            }
            this.$element.show(this.options.showDelay);
          }
          this.$element.attr({
            "aria-hidden": false,
            "tabindex": -1
          }).focus();
          __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__[
            "a"
            /* Keyboard */
          ].trapFocus(this.$element);
          addRevealOpenClasses();
          this._extraHandlers();
          this.$element.trigger("open.zf.reveal");
        }
        /**
         * Adds extra event handlers for the body and window if necessary.
         * @private
         */
      }, {
        key: "_extraHandlers",
        value: function _extraHandlers() {
          var _this = this;
          if (!this.$element) {
            return;
          }
          this.focusableElements = __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__[
            "a"
            /* Keyboard */
          ].findFocusable(this.$element);
          if (!this.options.overlay && this.options.closeOnClick && !this.options.fullScreen) {
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()("body").on("click.zf.reveal", function(e2) {
              if (e2.target === _this.$element[0] || __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.contains(_this.$element[0], e2.target) || !__WEBPACK_IMPORTED_MODULE_0_jquery___default.a.contains(document, e2.target)) {
                return;
              }
              _this.close();
            });
          }
          if (this.options.closeOnEsc) {
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).on("keydown.zf.reveal", function(e2) {
              __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__[
                "a"
                /* Keyboard */
              ].handleKey(e2, "Reveal", {
                close: function() {
                  if (_this.options.closeOnEsc) {
                    _this.close();
                  }
                }
              });
            });
          }
        }
        /**
         * Closes the modal.
         * @function
         * @fires Reveal#closed
         */
      }, {
        key: "close",
        value: function close() {
          if (!this.isActive || !this.$element.is(":visible")) {
            return false;
          }
          var _this = this;
          if (this.options.animationOut) {
            if (this.options.overlay) {
              __WEBPACK_IMPORTED_MODULE_3__foundation_util_motion__[
                "a"
                /* Motion */
              ].animateOut(this.$overlay, "fade-out");
            }
            __WEBPACK_IMPORTED_MODULE_3__foundation_util_motion__[
              "a"
              /* Motion */
            ].animateOut(this.$element, this.options.animationOut, finishUp);
          } else {
            this.$element.hide(this.options.hideDelay);
            if (this.options.overlay) {
              this.$overlay.hide(0, finishUp);
            } else {
              finishUp();
            }
          }
          if (this.options.closeOnEsc) {
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).off("keydown.zf.reveal");
          }
          if (!this.options.overlay && this.options.closeOnClick) {
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()("body").off("click.zf.reveal");
          }
          this.$element.off("keydown.zf.reveal");
          function finishUp() {
            if (_this.isMobile) {
              if (__WEBPACK_IMPORTED_MODULE_0_jquery___default()(".reveal:visible").length === 0) {
                __WEBPACK_IMPORTED_MODULE_0_jquery___default()("html, body").removeClass("is-reveal-open");
              }
              if (_this.originalScrollPos) {
                __WEBPACK_IMPORTED_MODULE_0_jquery___default()("body").scrollTop(_this.originalScrollPos);
                _this.originalScrollPos = null;
              }
            } else {
              if (__WEBPACK_IMPORTED_MODULE_0_jquery___default()(".reveal:visible").length === 0) {
                __WEBPACK_IMPORTED_MODULE_0_jquery___default()("body").removeClass("is-reveal-open");
              }
            }
            __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__[
              "a"
              /* Keyboard */
            ].releaseFocus(_this.$element);
            _this.$element.attr("aria-hidden", true);
            _this.$element.trigger("closed.zf.reveal");
          }
          if (this.options.resetOnClose) {
            this.$element.html(this.$element.html());
          }
          this.isActive = false;
          if (_this.options.deepLink) {
            if (window.history.replaceState) {
              window.history.replaceState("", document.title, window.location.href.replace("#" + this.id, ""));
            } else {
              window.location.hash = "";
            }
          }
          this.$anchor.focus();
        }
        /**
         * Toggles the open/closed state of a modal.
         * @function
         */
      }, {
        key: "toggle",
        value: function toggle() {
          if (this.isActive) {
            this.close();
          } else {
            this.open();
          }
        }
      }, {
        key: "_destroy",
        /**
         * Destroys an instance of a modal.
         * @function
         */
        value: function _destroy() {
          if (this.options.overlay) {
            this.$element.appendTo(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this.options.appendTo));
            this.$overlay.hide().off().remove();
          }
          this.$element.hide().off();
          this.$anchor.off(".zf");
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).off(".zf.reveal:" + this.id);
        }
      }]);
      return Reveal2;
    }(__WEBPACK_IMPORTED_MODULE_4__foundation_plugin__[
      "a"
      /* Plugin */
    ]);
    Reveal.defaults = {
      /**
       * Motion-UI class to use for animated elements. If none used, defaults to simple show/hide.
       * @option
       * @type {string}
       * @default ''
       */
      animationIn: "",
      /**
       * Motion-UI class to use for animated elements. If none used, defaults to simple show/hide.
       * @option
       * @type {string}
       * @default ''
       */
      animationOut: "",
      /**
       * Time, in ms, to delay the opening of a modal after a click if no animation used.
       * @option
       * @type {number}
       * @default 0
       */
      showDelay: 0,
      /**
       * Time, in ms, to delay the closing of a modal after a click if no animation used.
       * @option
       * @type {number}
       * @default 0
       */
      hideDelay: 0,
      /**
       * Allows a click on the body/overlay to close the modal.
       * @option
       * @type {boolean}
       * @default true
       */
      closeOnClick: true,
      /**
       * Allows the modal to close if the user presses the `ESCAPE` key.
       * @option
       * @type {boolean}
       * @default true
       */
      closeOnEsc: true,
      /**
       * If true, allows multiple modals to be displayed at once.
       * @option
       * @type {boolean}
       * @default false
       */
      multipleOpened: false,
      /**
       * Distance, in pixels, the modal should push down from the top of the screen.
       * @option
       * @type {number|string}
       * @default auto
       */
      vOffset: "auto",
      /**
       * Distance, in pixels, the modal should push in from the side of the screen.
       * @option
       * @type {number|string}
       * @default auto
       */
      hOffset: "auto",
      /**
       * Allows the modal to be fullscreen, completely blocking out the rest of the view. JS checks for this as well.
       * @option
       * @type {boolean}
       * @default false
       */
      fullScreen: false,
      /**
       * Percentage of screen height the modal should push up from the bottom of the view.
       * @option
       * @type {number}
       * @default 10
       */
      btmOffsetPct: 10,
      /**
       * Allows the modal to generate an overlay div, which will cover the view when modal opens.
       * @option
       * @type {boolean}
       * @default true
       */
      overlay: true,
      /**
       * Allows the modal to remove and reinject markup on close. Should be true if using video elements w/o using provider's api, otherwise, videos will continue to play in the background.
       * @option
       * @type {boolean}
       * @default false
       */
      resetOnClose: false,
      /**
       * Allows the modal to alter the url on open/close, and allows the use of the `back` button to close modals. ALSO, allows a modal to auto-maniacally open on page load IF the hash === the modal's user-set id.
       * @option
       * @type {boolean}
       * @default false
       */
      deepLink: false,
      /**
       * Update the browser history with the open modal
       * @option
       * @default false
       */
      updateHistory: false,
      /**
      * Allows the modal to append to custom div.
      * @option
      * @type {string}
      * @default "body"
      */
      appendTo: "body",
      /**
       * Allows adding additional class names to the reveal overlay.
       * @option
       * @type {string}
       * @default ''
       */
      additionalOverlayClasses: ""
    };
    function iPhoneSniff() {
      return /iP(ad|hone|od).*OS/.test(window.navigator.userAgent);
    }
    function androidSniff() {
      return /Android/.test(window.navigator.userAgent);
    }
    function mobileSniff() {
      return iPhoneSniff() || androidSniff();
    }
  },
  /* 32 */
  /***/
  function(module2, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.d(__webpack_exports__, "a", function() {
      return Slider;
    });
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
    var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
    var __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__ = __webpack_require__(3);
    var __WEBPACK_IMPORTED_MODULE_2__foundation_util_motion__ = __webpack_require__(6);
    var __WEBPACK_IMPORTED_MODULE_3__foundation_util_core__ = __webpack_require__(1);
    var __WEBPACK_IMPORTED_MODULE_4__foundation_plugin__ = __webpack_require__(2);
    var __WEBPACK_IMPORTED_MODULE_5__foundation_util_touch__ = __webpack_require__(10);
    var __WEBPACK_IMPORTED_MODULE_6__foundation_util_triggers__ = __webpack_require__(5);
    var _createClass = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var Slider = function(_Plugin) {
      _inherits(Slider2, _Plugin);
      function Slider2() {
        _classCallCheck(this, Slider2);
        return _possibleConstructorReturn(this, (Slider2.__proto__ || Object.getPrototypeOf(Slider2)).apply(this, arguments));
      }
      _createClass(Slider2, [{
        key: "_setup",
        /**
         * Creates a new instance of a slider control.
         * @class
         * @name Slider
         * @param {jQuery} element - jQuery object to make into a slider control.
         * @param {Object} options - Overrides to the default plugin settings.
         */
        value: function _setup(element, options) {
          this.$element = element;
          this.options = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend({}, Slider2.defaults, this.$element.data(), options);
          this.className = "Slider";
          __WEBPACK_IMPORTED_MODULE_5__foundation_util_touch__[
            "a"
            /* Touch */
          ].init(__WEBPACK_IMPORTED_MODULE_0_jquery___default.a);
          __WEBPACK_IMPORTED_MODULE_6__foundation_util_triggers__[
            "a"
            /* Triggers */
          ].init(__WEBPACK_IMPORTED_MODULE_0_jquery___default.a);
          this._init();
          __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__[
            "a"
            /* Keyboard */
          ].register("Slider", {
            "ltr": {
              "ARROW_RIGHT": "increase",
              "ARROW_UP": "increase",
              "ARROW_DOWN": "decrease",
              "ARROW_LEFT": "decrease",
              "SHIFT_ARROW_RIGHT": "increase_fast",
              "SHIFT_ARROW_UP": "increase_fast",
              "SHIFT_ARROW_DOWN": "decrease_fast",
              "SHIFT_ARROW_LEFT": "decrease_fast",
              "HOME": "min",
              "END": "max"
            },
            "rtl": {
              "ARROW_LEFT": "increase",
              "ARROW_RIGHT": "decrease",
              "SHIFT_ARROW_LEFT": "increase_fast",
              "SHIFT_ARROW_RIGHT": "decrease_fast"
            }
          });
        }
        /**
         * Initilizes the plugin by reading/setting attributes, creating collections and setting the initial position of the handle(s).
         * @function
         * @private
         */
      }, {
        key: "_init",
        value: function _init() {
          this.inputs = this.$element.find("input");
          this.handles = this.$element.find("[data-slider-handle]");
          this.$handle = this.handles.eq(0);
          this.$input = this.inputs.length ? this.inputs.eq(0) : __WEBPACK_IMPORTED_MODULE_0_jquery___default()("#" + this.$handle.attr("aria-controls"));
          this.$fill = this.$element.find("[data-slider-fill]").css(this.options.vertical ? "height" : "width", 0);
          var isDbl = false, _this = this;
          if (this.options.disabled || this.$element.hasClass(this.options.disabledClass)) {
            this.options.disabled = true;
            this.$element.addClass(this.options.disabledClass);
          }
          if (!this.inputs.length) {
            this.inputs = __WEBPACK_IMPORTED_MODULE_0_jquery___default()().add(this.$input);
            this.options.binding = true;
          }
          this._setInitAttr(0);
          if (this.handles[1]) {
            this.options.doubleSided = true;
            this.$handle2 = this.handles.eq(1);
            this.$input2 = this.inputs.length > 1 ? this.inputs.eq(1) : __WEBPACK_IMPORTED_MODULE_0_jquery___default()("#" + this.$handle2.attr("aria-controls"));
            if (!this.inputs[1]) {
              this.inputs = this.inputs.add(this.$input2);
            }
            isDbl = true;
            this._setInitAttr(1);
          }
          this.setHandles();
          this._events();
        }
      }, {
        key: "setHandles",
        value: function setHandles() {
          var _this3 = this;
          if (this.handles[1]) {
            this._setHandlePos(this.$handle, this.inputs.eq(0).val(), true, function() {
              _this3._setHandlePos(_this3.$handle2, _this3.inputs.eq(1).val(), true);
            });
          } else {
            this._setHandlePos(this.$handle, this.inputs.eq(0).val(), true);
          }
        }
      }, {
        key: "_reflow",
        value: function _reflow() {
          this.setHandles();
        }
        /**
        * @function
        * @private
        * @param {Number} value - floating point (the value) to be transformed using to a relative position on the slider (the inverse of _value)
        */
      }, {
        key: "_pctOfBar",
        value: function _pctOfBar(value) {
          var pctOfBar = percent(value - this.options.start, this.options.end - this.options.start);
          switch (this.options.positionValueFunction) {
            case "pow":
              pctOfBar = this._logTransform(pctOfBar);
              break;
            case "log":
              pctOfBar = this._powTransform(pctOfBar);
              break;
          }
          return pctOfBar.toFixed(2);
        }
        /**
        * @function
        * @private
        * @param {Number} pctOfBar - floating point, the relative position of the slider (typically between 0-1) to be transformed to a value
        */
      }, {
        key: "_value",
        value: function _value(pctOfBar) {
          switch (this.options.positionValueFunction) {
            case "pow":
              pctOfBar = this._powTransform(pctOfBar);
              break;
            case "log":
              pctOfBar = this._logTransform(pctOfBar);
              break;
          }
          var value = (this.options.end - this.options.start) * pctOfBar + this.options.start;
          return value;
        }
        /**
        * @function
        * @private
        * @param {Number} value - floating point (typically between 0-1) to be transformed using the log function
        */
      }, {
        key: "_logTransform",
        value: function _logTransform(value) {
          return baseLog(this.options.nonLinearBase, value * (this.options.nonLinearBase - 1) + 1);
        }
        /**
        * @function
        * @private
        * @param {Number} value - floating point (typically between 0-1) to be transformed using the power function
        */
      }, {
        key: "_powTransform",
        value: function _powTransform(value) {
          return (Math.pow(this.options.nonLinearBase, value) - 1) / (this.options.nonLinearBase - 1);
        }
        /**
         * Sets the position of the selected handle and fill bar.
         * @function
         * @private
         * @param {jQuery} $hndl - the selected handle to move.
         * @param {Number} location - floating point between the start and end values of the slider bar.
         * @param {Function} cb - callback function to fire on completion.
         * @fires Slider#moved
         * @fires Slider#changed
         */
      }, {
        key: "_setHandlePos",
        value: function _setHandlePos($hndl, location2, noInvert, cb) {
          if (this.$element.hasClass(this.options.disabledClass)) {
            return;
          }
          location2 = parseFloat(location2);
          if (location2 < this.options.start) {
            location2 = this.options.start;
          } else if (location2 > this.options.end) {
            location2 = this.options.end;
          }
          var isDbl = this.options.doubleSided;
          if (this.options.vertical && !noInvert) {
            location2 = this.options.end - location2;
          }
          if (isDbl) {
            if (this.handles.index($hndl) === 0) {
              var h2Val = parseFloat(this.$handle2.attr("aria-valuenow"));
              location2 = location2 >= h2Val ? h2Val - this.options.step : location2;
            } else {
              var h1Val = parseFloat(this.$handle.attr("aria-valuenow"));
              location2 = location2 <= h1Val ? h1Val + this.options.step : location2;
            }
          }
          var _this = this, vert = this.options.vertical, hOrW = vert ? "height" : "width", lOrT = vert ? "top" : "left", handleDim = $hndl[0].getBoundingClientRect()[hOrW], elemDim = this.$element[0].getBoundingClientRect()[hOrW], pctOfBar = this._pctOfBar(location2), pxToMove = (elemDim - handleDim) * pctOfBar, movement = (percent(pxToMove, elemDim) * 100).toFixed(this.options.decimal);
          location2 = parseFloat(location2.toFixed(this.options.decimal));
          var css = {};
          this._setValues($hndl, location2);
          if (isDbl) {
            var isLeftHndl = this.handles.index($hndl) === 0, dim, handlePct = ~~(percent(handleDim, elemDim) * 100);
            if (isLeftHndl) {
              css[lOrT] = movement + "%";
              dim = parseFloat(this.$handle2[0].style[lOrT]) - movement + handlePct;
              if (cb && typeof cb === "function") {
                cb();
              }
            } else {
              var handlePos = parseFloat(this.$handle[0].style[lOrT]);
              dim = movement - (isNaN(handlePos) ? (this.options.initialStart - this.options.start) / ((this.options.end - this.options.start) / 100) : handlePos) + handlePct;
            }
            css["min-" + hOrW] = dim + "%";
          }
          this.$element.one("finished.zf.animate", function() {
            _this.$element.trigger("moved.zf.slider", [$hndl]);
          });
          var moveTime = this.$element.data("dragging") ? 1e3 / 60 : this.options.moveTime;
          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__foundation_util_motion__[
            "b"
            /* Move */
          ])(moveTime, $hndl, function() {
            if (isNaN(movement)) {
              $hndl.css(lOrT, pctOfBar * 100 + "%");
            } else {
              $hndl.css(lOrT, movement + "%");
            }
            if (!_this.options.doubleSided) {
              _this.$fill.css(hOrW, pctOfBar * 100 + "%");
            } else {
              _this.$fill.css(css);
            }
          });
          clearTimeout(_this.timeout);
          _this.timeout = setTimeout(function() {
            _this.$element.trigger("changed.zf.slider", [$hndl]);
          }, _this.options.changedDelay);
        }
        /**
         * Sets the initial attribute for the slider element.
         * @function
         * @private
         * @param {Number} idx - index of the current handle/input to use.
         */
      }, {
        key: "_setInitAttr",
        value: function _setInitAttr(idx) {
          var initVal = idx === 0 ? this.options.initialStart : this.options.initialEnd;
          var id = this.inputs.eq(idx).attr("id") || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__foundation_util_core__[
            "b"
            /* GetYoDigits */
          ])(6, "slider");
          this.inputs.eq(idx).attr({
            "id": id,
            "max": this.options.end,
            "min": this.options.start,
            "step": this.options.step
          });
          this.inputs.eq(idx).val(initVal);
          this.handles.eq(idx).attr({
            "role": "slider",
            "aria-controls": id,
            "aria-valuemax": this.options.end,
            "aria-valuemin": this.options.start,
            "aria-valuenow": initVal,
            "aria-orientation": this.options.vertical ? "vertical" : "horizontal",
            "tabindex": 0
          });
        }
        /**
         * Sets the input and `aria-valuenow` values for the slider element.
         * @function
         * @private
         * @param {jQuery} $handle - the currently selected handle.
         * @param {Number} val - floating point of the new value.
         */
      }, {
        key: "_setValues",
        value: function _setValues($handle, val) {
          var idx = this.options.doubleSided ? this.handles.index($handle) : 0;
          this.inputs.eq(idx).val(val);
          $handle.attr("aria-valuenow", val);
        }
        /**
         * Handles events on the slider element.
         * Calculates the new location of the current handle.
         * If there are two handles and the bar was clicked, it determines which handle to move.
         * @function
         * @private
         * @param {Object} e - the `event` object passed from the listener.
         * @param {jQuery} $handle - the current handle to calculate for, if selected.
         * @param {Number} val - floating point number for the new value of the slider.
         * TODO clean this up, there's a lot of repeated code between this and the _setHandlePos fn.
         */
      }, {
        key: "_handleEvent",
        value: function _handleEvent(e2, $handle, val) {
          var value, hasVal;
          if (!val) {
            e2.preventDefault();
            var _this = this, vertical = this.options.vertical, param = vertical ? "height" : "width", direction = vertical ? "top" : "left", eventOffset = vertical ? e2.pageY : e2.pageX, halfOfHandle = this.$handle[0].getBoundingClientRect()[param] / 2, barDim = this.$element[0].getBoundingClientRect()[param], windowScroll = vertical ? __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).scrollTop() : __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).scrollLeft();
            var elemOffset = this.$element.offset()[direction];
            if (e2.clientY === e2.pageY) {
              eventOffset = eventOffset + windowScroll;
            }
            var eventFromBar = eventOffset - elemOffset;
            var barXY;
            if (eventFromBar < 0) {
              barXY = 0;
            } else if (eventFromBar > barDim) {
              barXY = barDim;
            } else {
              barXY = eventFromBar;
            }
            var offsetPct = percent(barXY, barDim);
            value = this._value(offsetPct);
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__foundation_util_core__[
              "a"
              /* rtl */
            ])() && !this.options.vertical) {
              value = this.options.end - value;
            }
            value = _this._adjustValue(null, value);
            hasVal = false;
            if (!$handle) {
              var firstHndlPos = absPosition(this.$handle, direction, barXY, param), secndHndlPos = absPosition(this.$handle2, direction, barXY, param);
              $handle = firstHndlPos <= secndHndlPos ? this.$handle : this.$handle2;
            }
          } else {
            value = this._adjustValue(null, val);
            hasVal = true;
          }
          this._setHandlePos($handle, value, hasVal);
        }
        /**
         * Adjustes value for handle in regard to step value. returns adjusted value
         * @function
         * @private
         * @param {jQuery} $handle - the selected handle.
         * @param {Number} value - value to adjust. used if $handle is falsy
         */
      }, {
        key: "_adjustValue",
        value: function _adjustValue($handle, value) {
          var val, step = this.options.step, div = parseFloat(step / 2), left, prev_val, next_val;
          if (!!$handle) {
            val = parseFloat($handle.attr("aria-valuenow"));
          } else {
            val = value;
          }
          left = val % step;
          prev_val = val - left;
          next_val = prev_val + step;
          if (left === 0) {
            return val;
          }
          val = val >= prev_val + div ? next_val : prev_val;
          return val;
        }
        /**
         * Adds event listeners to the slider elements.
         * @function
         * @private
         */
      }, {
        key: "_events",
        value: function _events() {
          this._eventsForHandle(this.$handle);
          if (this.handles[1]) {
            this._eventsForHandle(this.$handle2);
          }
        }
        /**
         * Adds event listeners a particular handle
         * @function
         * @private
         * @param {jQuery} $handle - the current handle to apply listeners to.
         */
      }, {
        key: "_eventsForHandle",
        value: function _eventsForHandle($handle) {
          var _this = this, curHandle, timer;
          this.inputs.off("change.zf.slider").on("change.zf.slider", function(e2) {
            var idx = _this.inputs.index(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this));
            _this._handleEvent(e2, _this.handles.eq(idx), __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).val());
          });
          if (this.options.clickSelect) {
            this.$element.off("click.zf.slider").on("click.zf.slider", function(e2) {
              if (_this.$element.data("dragging")) {
                return false;
              }
              if (!__WEBPACK_IMPORTED_MODULE_0_jquery___default()(e2.target).is("[data-slider-handle]")) {
                if (_this.options.doubleSided) {
                  _this._handleEvent(e2);
                } else {
                  _this._handleEvent(e2, _this.$handle);
                }
              }
            });
          }
          if (this.options.draggable) {
            this.handles.addTouch();
            var $body = __WEBPACK_IMPORTED_MODULE_0_jquery___default()("body");
            $handle.off("mousedown.zf.slider").on("mousedown.zf.slider", function(e2) {
              $handle.addClass("is-dragging");
              _this.$fill.addClass("is-dragging");
              _this.$element.data("dragging", true);
              curHandle = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(e2.currentTarget);
              $body.on("mousemove.zf.slider", function(e3) {
                e3.preventDefault();
                _this._handleEvent(e3, curHandle);
              }).on("mouseup.zf.slider", function(e3) {
                _this._handleEvent(e3, curHandle);
                $handle.removeClass("is-dragging");
                _this.$fill.removeClass("is-dragging");
                _this.$element.data("dragging", false);
                $body.off("mousemove.zf.slider mouseup.zf.slider");
              });
            }).on("selectstart.zf.slider touchmove.zf.slider", function(e2) {
              e2.preventDefault();
            });
          }
          $handle.off("keydown.zf.slider").on("keydown.zf.slider", function(e2) {
            var _$handle = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this), idx = _this.options.doubleSided ? _this.handles.index(_$handle) : 0, oldValue = parseFloat(_this.inputs.eq(idx).val()), newValue;
            __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__[
              "a"
              /* Keyboard */
            ].handleKey(e2, "Slider", {
              decrease: function() {
                newValue = oldValue - _this.options.step;
              },
              increase: function() {
                newValue = oldValue + _this.options.step;
              },
              decrease_fast: function() {
                newValue = oldValue - _this.options.step * 10;
              },
              increase_fast: function() {
                newValue = oldValue + _this.options.step * 10;
              },
              min: function() {
                newValue = _this.options.start;
              },
              max: function() {
                newValue = _this.options.end;
              },
              handled: function() {
                e2.preventDefault();
                _this._setHandlePos(_$handle, newValue, true);
              }
            });
          });
        }
        /**
         * Destroys the slider plugin.
         */
      }, {
        key: "_destroy",
        value: function _destroy() {
          this.handles.off(".zf.slider");
          this.inputs.off(".zf.slider");
          this.$element.off(".zf.slider");
          clearTimeout(this.timeout);
        }
      }]);
      return Slider2;
    }(__WEBPACK_IMPORTED_MODULE_4__foundation_plugin__[
      "a"
      /* Plugin */
    ]);
    Slider.defaults = {
      /**
       * Minimum value for the slider scale.
       * @option
       * @type {number}
       * @default 0
       */
      start: 0,
      /**
       * Maximum value for the slider scale.
       * @option
       * @type {number}
       * @default 100
       */
      end: 100,
      /**
       * Minimum value change per change event.
       * @option
       * @type {number}
       * @default 1
       */
      step: 1,
      /**
       * Value at which the handle/input *(left handle/first input)* should be set to on initialization.
       * @option
       * @type {number}
       * @default 0
       */
      initialStart: 0,
      /**
       * Value at which the right handle/second input should be set to on initialization.
       * @option
       * @type {number}
       * @default 100
       */
      initialEnd: 100,
      /**
       * Allows the input to be located outside the container and visible. Set to by the JS
       * @option
       * @type {boolean}
       * @default false
       */
      binding: false,
      /**
       * Allows the user to click/tap on the slider bar to select a value.
       * @option
       * @type {boolean}
       * @default true
       */
      clickSelect: true,
      /**
       * Set to true and use the `vertical` class to change alignment to vertical.
       * @option
       * @type {boolean}
       * @default false
       */
      vertical: false,
      /**
       * Allows the user to drag the slider handle(s) to select a value.
       * @option
       * @type {boolean}
       * @default true
       */
      draggable: true,
      /**
       * Disables the slider and prevents event listeners from being applied. Double checked by JS with `disabledClass`.
       * @option
       * @type {boolean}
       * @default false
       */
      disabled: false,
      /**
       * Allows the use of two handles. Double checked by the JS. Changes some logic handling.
       * @option
       * @type {boolean}
       * @default false
       */
      doubleSided: false,
      /**
       * Potential future feature.
       */
      // steps: 100,
      /**
       * Number of decimal places the plugin should go to for floating point precision.
       * @option
       * @type {number}
       * @default 2
       */
      decimal: 2,
      /**
       * Time delay for dragged elements.
       */
      // dragDelay: 0,
      /**
       * Time, in ms, to animate the movement of a slider handle if user clicks/taps on the bar. Needs to be manually set if updating the transition time in the Sass settings.
       * @option
       * @type {number}
       * @default 200
       */
      moveTime: 200,
      //update this if changing the transition time in the sass
      /**
       * Class applied to disabled sliders.
       * @option
       * @type {string}
       * @default 'disabled'
       */
      disabledClass: "disabled",
      /**
       * Will invert the default layout for a vertical<span data-tooltip title="who would do this???"> </span>slider.
       * @option
       * @type {boolean}
       * @default false
       */
      invertVertical: false,
      /**
       * Milliseconds before the `changed.zf-slider` event is triggered after value change.
       * @option
       * @type {number}
       * @default 500
       */
      changedDelay: 500,
      /**
      * Basevalue for non-linear sliders
      * @option
      * @type {number}
      * @default 5
      */
      nonLinearBase: 5,
      /**
      * Basevalue for non-linear sliders, possible values are: `'linear'`, `'pow'` & `'log'`. Pow and Log use the nonLinearBase setting.
      * @option
      * @type {string}
      * @default 'linear'
      */
      positionValueFunction: "linear"
    };
    function percent(frac, num) {
      return frac / num;
    }
    function absPosition($handle, dir, clickPos, param) {
      return Math.abs($handle.position()[dir] + $handle[param]() / 2 - clickPos);
    }
    function baseLog(base, value) {
      return Math.log(value) / Math.log(base);
    }
  },
  /* 33 */
  /***/
  function(module2, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.d(__webpack_exports__, "a", function() {
      return Sticky;
    });
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
    var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
    var __WEBPACK_IMPORTED_MODULE_1__foundation_util_core__ = __webpack_require__(1);
    var __WEBPACK_IMPORTED_MODULE_2__foundation_util_mediaQuery__ = __webpack_require__(4);
    var __WEBPACK_IMPORTED_MODULE_3__foundation_plugin__ = __webpack_require__(2);
    var __WEBPACK_IMPORTED_MODULE_4__foundation_util_triggers__ = __webpack_require__(5);
    var _createClass = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var Sticky = function(_Plugin) {
      _inherits(Sticky2, _Plugin);
      function Sticky2() {
        _classCallCheck(this, Sticky2);
        return _possibleConstructorReturn(this, (Sticky2.__proto__ || Object.getPrototypeOf(Sticky2)).apply(this, arguments));
      }
      _createClass(Sticky2, [{
        key: "_setup",
        /**
         * Creates a new instance of a sticky thing.
         * @class
         * @name Sticky
         * @param {jQuery} element - jQuery object to make sticky.
         * @param {Object} options - options object passed when creating the element programmatically.
         */
        value: function _setup(element, options) {
          this.$element = element;
          this.options = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend({}, Sticky2.defaults, this.$element.data(), options);
          this.className = "Sticky";
          __WEBPACK_IMPORTED_MODULE_4__foundation_util_triggers__[
            "a"
            /* Triggers */
          ].init(__WEBPACK_IMPORTED_MODULE_0_jquery___default.a);
          this._init();
        }
        /**
         * Initializes the sticky element by adding classes, getting/setting dimensions, breakpoints and attributes
         * @function
         * @private
         */
      }, {
        key: "_init",
        value: function _init() {
          __WEBPACK_IMPORTED_MODULE_2__foundation_util_mediaQuery__[
            "a"
            /* MediaQuery */
          ]._init();
          var $parent = this.$element.parent("[data-sticky-container]"), id = this.$element[0].id || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__foundation_util_core__[
            "b"
            /* GetYoDigits */
          ])(6, "sticky"), _this = this;
          if ($parent.length) {
            this.$container = $parent;
          } else {
            this.wasWrapped = true;
            this.$element.wrap(this.options.container);
            this.$container = this.$element.parent();
          }
          this.$container.addClass(this.options.containerClass);
          this.$element.addClass(this.options.stickyClass).attr({ "data-resize": id, "data-mutate": id });
          if (this.options.anchor !== "") {
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()("#" + _this.options.anchor).attr({ "data-mutate": id });
          }
          this.scrollCount = this.options.checkEvery;
          this.isStuck = false;
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).one("load.zf.sticky", function() {
            _this.containerHeight = _this.$element.css("display") == "none" ? 0 : _this.$element[0].getBoundingClientRect().height;
            _this.$container.css("height", _this.containerHeight);
            _this.elemHeight = _this.containerHeight;
            if (_this.options.anchor !== "") {
              _this.$anchor = __WEBPACK_IMPORTED_MODULE_0_jquery___default()("#" + _this.options.anchor);
            } else {
              _this._parsePoints();
            }
            _this._setSizes(function() {
              var scroll = window.pageYOffset;
              _this._calc(false, scroll);
              if (!_this.isStuck) {
                _this._removeSticky(scroll >= _this.topPoint ? false : true);
              }
            });
            _this._events(id.split("-").reverse().join("-"));
          });
        }
        /**
         * If using multiple elements as anchors, calculates the top and bottom pixel values the sticky thing should stick and unstick on.
         * @function
         * @private
         */
      }, {
        key: "_parsePoints",
        value: function _parsePoints() {
          var top = this.options.topAnchor == "" ? 1 : this.options.topAnchor, btm = this.options.btmAnchor == "" ? document.documentElement.scrollHeight : this.options.btmAnchor, pts = [top, btm], breaks = {};
          for (var i = 0, len = pts.length; i < len && pts[i]; i++) {
            var pt;
            if (typeof pts[i] === "number") {
              pt = pts[i];
            } else {
              var place = pts[i].split(":"), anchor = __WEBPACK_IMPORTED_MODULE_0_jquery___default()("#" + place[0]);
              pt = anchor.offset().top;
              if (place[1] && place[1].toLowerCase() === "bottom") {
                pt += anchor[0].getBoundingClientRect().height;
              }
            }
            breaks[i] = pt;
          }
          this.points = breaks;
          return;
        }
        /**
         * Adds event handlers for the scrolling element.
         * @private
         * @param {String} id - pseudo-random id for unique scroll event listener.
         */
      }, {
        key: "_events",
        value: function _events(id) {
          var _this = this, scrollListener = this.scrollListener = "scroll.zf." + id;
          if (this.isOn) {
            return;
          }
          if (this.canStick) {
            this.isOn = true;
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).off(scrollListener).on(scrollListener, function(e2) {
              if (_this.scrollCount === 0) {
                _this.scrollCount = _this.options.checkEvery;
                _this._setSizes(function() {
                  _this._calc(false, window.pageYOffset);
                });
              } else {
                _this.scrollCount--;
                _this._calc(false, window.pageYOffset);
              }
            });
          }
          this.$element.off("resizeme.zf.trigger").on("resizeme.zf.trigger", function(e2, el) {
            _this._eventsHandler(id);
          });
          this.$element.on("mutateme.zf.trigger", function(e2, el) {
            _this._eventsHandler(id);
          });
          if (this.$anchor) {
            this.$anchor.on("mutateme.zf.trigger", function(e2, el) {
              _this._eventsHandler(id);
            });
          }
        }
        /**
         * Handler for events.
         * @private
         * @param {String} id - pseudo-random id for unique scroll event listener.
         */
      }, {
        key: "_eventsHandler",
        value: function _eventsHandler(id) {
          var _this = this, scrollListener = this.scrollListener = "scroll.zf." + id;
          _this._setSizes(function() {
            _this._calc(false);
            if (_this.canStick) {
              if (!_this.isOn) {
                _this._events(id);
              }
            } else if (_this.isOn) {
              _this._pauseListeners(scrollListener);
            }
          });
        }
        /**
         * Removes event handlers for scroll and change events on anchor.
         * @fires Sticky#pause
         * @param {String} scrollListener - unique, namespaced scroll listener attached to `window`
         */
      }, {
        key: "_pauseListeners",
        value: function _pauseListeners(scrollListener) {
          this.isOn = false;
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).off(scrollListener);
          this.$element.trigger("pause.zf.sticky");
        }
        /**
         * Called on every `scroll` event and on `_init`
         * fires functions based on booleans and cached values
         * @param {Boolean} checkSizes - true if plugin should recalculate sizes and breakpoints.
         * @param {Number} scroll - current scroll position passed from scroll event cb function. If not passed, defaults to `window.pageYOffset`.
         */
      }, {
        key: "_calc",
        value: function _calc(checkSizes, scroll) {
          if (checkSizes) {
            this._setSizes();
          }
          if (!this.canStick) {
            if (this.isStuck) {
              this._removeSticky(true);
            }
            return false;
          }
          if (!scroll) {
            scroll = window.pageYOffset;
          }
          if (scroll >= this.topPoint) {
            if (scroll <= this.bottomPoint) {
              if (!this.isStuck) {
                this._setSticky();
              }
            } else {
              if (this.isStuck) {
                this._removeSticky(false);
              }
            }
          } else {
            if (this.isStuck) {
              this._removeSticky(true);
            }
          }
        }
        /**
         * Causes the $element to become stuck.
         * Adds `position: fixed;`, and helper classes.
         * @fires Sticky#stuckto
         * @function
         * @private
         */
      }, {
        key: "_setSticky",
        value: function _setSticky() {
          var _this = this, stickTo = this.options.stickTo, mrgn = stickTo === "top" ? "marginTop" : "marginBottom", notStuckTo = stickTo === "top" ? "bottom" : "top", css = {};
          css[mrgn] = this.options[mrgn] + "em";
          css[stickTo] = 0;
          css[notStuckTo] = "auto";
          this.isStuck = true;
          this.$element.removeClass("is-anchored is-at-" + notStuckTo).addClass("is-stuck is-at-" + stickTo).css(css).trigger("sticky.zf.stuckto:" + stickTo);
          this.$element.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function() {
            _this._setSizes();
          });
        }
        /**
         * Causes the $element to become unstuck.
         * Removes `position: fixed;`, and helper classes.
         * Adds other helper classes.
         * @param {Boolean} isTop - tells the function if the $element should anchor to the top or bottom of its $anchor element.
         * @fires Sticky#unstuckfrom
         * @private
         */
      }, {
        key: "_removeSticky",
        value: function _removeSticky(isTop) {
          var stickTo = this.options.stickTo, stickToTop = stickTo === "top", css = {}, anchorPt = (this.points ? this.points[1] - this.points[0] : this.anchorHeight) - this.elemHeight, mrgn = stickToTop ? "marginTop" : "marginBottom", notStuckTo = stickToTop ? "bottom" : "top", topOrBottom = isTop ? "top" : "bottom";
          css[mrgn] = 0;
          css["bottom"] = "auto";
          if (isTop) {
            css["top"] = 0;
          } else {
            css["top"] = anchorPt;
          }
          this.isStuck = false;
          this.$element.removeClass("is-stuck is-at-" + stickTo).addClass("is-anchored is-at-" + topOrBottom).css(css).trigger("sticky.zf.unstuckfrom:" + topOrBottom);
        }
        /**
         * Sets the $element and $container sizes for plugin.
         * Calls `_setBreakPoints`.
         * @param {Function} cb - optional callback function to fire on completion of `_setBreakPoints`.
         * @private
         */
      }, {
        key: "_setSizes",
        value: function _setSizes(cb) {
          this.canStick = __WEBPACK_IMPORTED_MODULE_2__foundation_util_mediaQuery__[
            "a"
            /* MediaQuery */
          ].is(this.options.stickyOn);
          if (!this.canStick) {
            if (cb && typeof cb === "function") {
              cb();
            }
          }
          var _this = this, newElemWidth = this.$container[0].getBoundingClientRect().width, comp = window.getComputedStyle(this.$container[0]), pdngl = parseInt(comp["padding-left"], 10), pdngr = parseInt(comp["padding-right"], 10);
          if (this.$anchor && this.$anchor.length) {
            this.anchorHeight = this.$anchor[0].getBoundingClientRect().height;
          } else {
            this._parsePoints();
          }
          this.$element.css({
            "max-width": newElemWidth - pdngl - pdngr + "px"
          });
          var newContainerHeight = this.$element[0].getBoundingClientRect().height || this.containerHeight;
          if (this.$element.css("display") == "none") {
            newContainerHeight = 0;
          }
          this.containerHeight = newContainerHeight;
          this.$container.css({
            height: newContainerHeight
          });
          this.elemHeight = newContainerHeight;
          if (!this.isStuck) {
            if (this.$element.hasClass("is-at-bottom")) {
              var anchorPt = (this.points ? this.points[1] - this.$container.offset().top : this.anchorHeight) - this.elemHeight;
              this.$element.css("top", anchorPt);
            }
          }
          this._setBreakPoints(newContainerHeight, function() {
            if (cb && typeof cb === "function") {
              cb();
            }
          });
        }
        /**
         * Sets the upper and lower breakpoints for the element to become sticky/unsticky.
         * @param {Number} elemHeight - px value for sticky.$element height, calculated by `_setSizes`.
         * @param {Function} cb - optional callback function to be called on completion.
         * @private
         */
      }, {
        key: "_setBreakPoints",
        value: function _setBreakPoints(elemHeight, cb) {
          if (!this.canStick) {
            if (cb && typeof cb === "function") {
              cb();
            } else {
              return false;
            }
          }
          var mTop = emCalc(this.options.marginTop), mBtm = emCalc(this.options.marginBottom), topPoint = this.points ? this.points[0] : this.$anchor.offset().top, bottomPoint = this.points ? this.points[1] : topPoint + this.anchorHeight, winHeight = window.innerHeight;
          if (this.options.stickTo === "top") {
            topPoint -= mTop;
            bottomPoint -= elemHeight + mTop;
          } else if (this.options.stickTo === "bottom") {
            topPoint -= winHeight - (elemHeight + mBtm);
            bottomPoint -= winHeight - mBtm;
          } else {
          }
          this.topPoint = topPoint;
          this.bottomPoint = bottomPoint;
          if (cb && typeof cb === "function") {
            cb();
          }
        }
        /**
         * Destroys the current sticky element.
         * Resets the element to the top position first.
         * Removes event listeners, JS-added css properties and classes, and unwraps the $element if the JS added the $container.
         * @function
         */
      }, {
        key: "_destroy",
        value: function _destroy() {
          this._removeSticky(true);
          this.$element.removeClass(this.options.stickyClass + " is-anchored is-at-top").css({
            height: "",
            top: "",
            bottom: "",
            "max-width": ""
          }).off("resizeme.zf.trigger").off("mutateme.zf.trigger");
          if (this.$anchor && this.$anchor.length) {
            this.$anchor.off("change.zf.sticky");
          }
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).off(this.scrollListener);
          if (this.wasWrapped) {
            this.$element.unwrap();
          } else {
            this.$container.removeClass(this.options.containerClass).css({
              height: ""
            });
          }
        }
      }]);
      return Sticky2;
    }(__WEBPACK_IMPORTED_MODULE_3__foundation_plugin__[
      "a"
      /* Plugin */
    ]);
    Sticky.defaults = {
      /**
       * Customizable container template. Add your own classes for styling and sizing.
       * @option
       * @type {string}
       * @default '&lt;div data-sticky-container&gt;&lt;/div&gt;'
       */
      container: "<div data-sticky-container></div>",
      /**
       * Location in the view the element sticks to. Can be `'top'` or `'bottom'`.
       * @option
       * @type {string}
       * @default 'top'
       */
      stickTo: "top",
      /**
       * If anchored to a single element, the id of that element.
       * @option
       * @type {string}
       * @default ''
       */
      anchor: "",
      /**
       * If using more than one element as anchor points, the id of the top anchor.
       * @option
       * @type {string}
       * @default ''
       */
      topAnchor: "",
      /**
       * If using more than one element as anchor points, the id of the bottom anchor.
       * @option
       * @type {string}
       * @default ''
       */
      btmAnchor: "",
      /**
       * Margin, in `em`'s to apply to the top of the element when it becomes sticky.
       * @option
       * @type {number}
       * @default 1
       */
      marginTop: 1,
      /**
       * Margin, in `em`'s to apply to the bottom of the element when it becomes sticky.
       * @option
       * @type {number}
       * @default 1
       */
      marginBottom: 1,
      /**
       * Breakpoint string that is the minimum screen size an element should become sticky.
       * @option
       * @type {string}
       * @default 'medium'
       */
      stickyOn: "medium",
      /**
       * Class applied to sticky element, and removed on destruction. Foundation defaults to `sticky`.
       * @option
       * @type {string}
       * @default 'sticky'
       */
      stickyClass: "sticky",
      /**
       * Class applied to sticky container. Foundation defaults to `sticky-container`.
       * @option
       * @type {string}
       * @default 'sticky-container'
       */
      containerClass: "sticky-container",
      /**
       * Number of scroll events between the plugin's recalculating sticky points. Setting it to `0` will cause it to recalc every scroll event, setting it to `-1` will prevent recalc on scroll.
       * @option
       * @type {number}
       * @default -1
       */
      checkEvery: -1
    };
    function emCalc(em) {
      return parseInt(window.getComputedStyle(document.body, null).fontSize, 10) * em;
    }
  },
  /* 34 */
  /***/
  function(module2, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.d(__webpack_exports__, "a", function() {
      return Toggler;
    });
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
    var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
    var __WEBPACK_IMPORTED_MODULE_1__foundation_util_motion__ = __webpack_require__(6);
    var __WEBPACK_IMPORTED_MODULE_2__foundation_plugin__ = __webpack_require__(2);
    var __WEBPACK_IMPORTED_MODULE_3__foundation_util_triggers__ = __webpack_require__(5);
    var _createClass = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var Toggler = function(_Plugin) {
      _inherits(Toggler2, _Plugin);
      function Toggler2() {
        _classCallCheck(this, Toggler2);
        return _possibleConstructorReturn(this, (Toggler2.__proto__ || Object.getPrototypeOf(Toggler2)).apply(this, arguments));
      }
      _createClass(Toggler2, [{
        key: "_setup",
        /**
         * Creates a new instance of Toggler.
         * @class
         * @name Toggler
         * @fires Toggler#init
         * @param {Object} element - jQuery object to add the trigger to.
         * @param {Object} options - Overrides to the default plugin settings.
         */
        value: function _setup(element, options) {
          this.$element = element;
          this.options = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend({}, Toggler2.defaults, element.data(), options);
          this.className = "";
          this.className = "Toggler";
          __WEBPACK_IMPORTED_MODULE_3__foundation_util_triggers__[
            "a"
            /* Triggers */
          ].init(__WEBPACK_IMPORTED_MODULE_0_jquery___default.a);
          this._init();
          this._events();
        }
        /**
         * Initializes the Toggler plugin by parsing the toggle class from data-toggler, or animation classes from data-animate.
         * @function
         * @private
         */
      }, {
        key: "_init",
        value: function _init() {
          var input;
          if (this.options.animate) {
            input = this.options.animate.split(" ");
            this.animationIn = input[0];
            this.animationOut = input[1] || null;
          } else {
            input = this.$element.data("toggler");
            this.className = input[0] === "." ? input.slice(1) : input;
          }
          var id = this.$element[0].id;
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()('[data-open="' + id + '"], [data-close="' + id + '"], [data-toggle="' + id + '"]').attr("aria-controls", id);
          this.$element.attr("aria-expanded", this.$element.is(":hidden") ? false : true);
        }
        /**
         * Initializes events for the toggle trigger.
         * @function
         * @private
         */
      }, {
        key: "_events",
        value: function _events() {
          this.$element.off("toggle.zf.trigger").on("toggle.zf.trigger", this.toggle.bind(this));
        }
        /**
         * Toggles the target class on the target element. An event is fired from the original trigger depending on if the resultant state was "on" or "off".
         * @function
         * @fires Toggler#on
         * @fires Toggler#off
         */
      }, {
        key: "toggle",
        value: function toggle() {
          this[this.options.animate ? "_toggleAnimate" : "_toggleClass"]();
        }
      }, {
        key: "_toggleClass",
        value: function _toggleClass() {
          this.$element.toggleClass(this.className);
          var isOn = this.$element.hasClass(this.className);
          if (isOn) {
            this.$element.trigger("on.zf.toggler");
          } else {
            this.$element.trigger("off.zf.toggler");
          }
          this._updateARIA(isOn);
          this.$element.find("[data-mutate]").trigger("mutateme.zf.trigger");
        }
      }, {
        key: "_toggleAnimate",
        value: function _toggleAnimate() {
          var _this = this;
          if (this.$element.is(":hidden")) {
            __WEBPACK_IMPORTED_MODULE_1__foundation_util_motion__[
              "a"
              /* Motion */
            ].animateIn(this.$element, this.animationIn, function() {
              _this._updateARIA(true);
              this.trigger("on.zf.toggler");
              this.find("[data-mutate]").trigger("mutateme.zf.trigger");
            });
          } else {
            __WEBPACK_IMPORTED_MODULE_1__foundation_util_motion__[
              "a"
              /* Motion */
            ].animateOut(this.$element, this.animationOut, function() {
              _this._updateARIA(false);
              this.trigger("off.zf.toggler");
              this.find("[data-mutate]").trigger("mutateme.zf.trigger");
            });
          }
        }
      }, {
        key: "_updateARIA",
        value: function _updateARIA(isOn) {
          this.$element.attr("aria-expanded", isOn ? true : false);
        }
        /**
         * Destroys the instance of Toggler on the element.
         * @function
         */
      }, {
        key: "_destroy",
        value: function _destroy() {
          this.$element.off(".zf.toggler");
        }
      }]);
      return Toggler2;
    }(__WEBPACK_IMPORTED_MODULE_2__foundation_plugin__[
      "a"
      /* Plugin */
    ]);
    Toggler.defaults = {
      /**
       * Tells the plugin if the element should animated when toggled.
       * @option
       * @type {boolean}
       * @default false
       */
      animate: false
    };
  },
  /* 35 */
  /***/
  function(module2, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.d(__webpack_exports__, "a", function() {
      return Tooltip;
    });
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
    var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
    var __WEBPACK_IMPORTED_MODULE_1__foundation_util_core__ = __webpack_require__(1);
    var __WEBPACK_IMPORTED_MODULE_2__foundation_util_mediaQuery__ = __webpack_require__(4);
    var __WEBPACK_IMPORTED_MODULE_3__foundation_util_triggers__ = __webpack_require__(5);
    var __WEBPACK_IMPORTED_MODULE_4__foundation_positionable__ = __webpack_require__(15);
    var _createClass = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _get = function get(object, property, receiver) {
      if (object === null) object = Function.prototype;
      var desc = Object.getOwnPropertyDescriptor(object, property);
      if (desc === void 0) {
        var parent = Object.getPrototypeOf(object);
        if (parent === null) {
          return void 0;
        } else {
          return get(parent, property, receiver);
        }
      } else if ("value" in desc) {
        return desc.value;
      } else {
        var getter = desc.get;
        if (getter === void 0) {
          return void 0;
        }
        return getter.call(receiver);
      }
    };
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var Tooltip = function(_Positionable) {
      _inherits(Tooltip2, _Positionable);
      function Tooltip2() {
        _classCallCheck(this, Tooltip2);
        return _possibleConstructorReturn(this, (Tooltip2.__proto__ || Object.getPrototypeOf(Tooltip2)).apply(this, arguments));
      }
      _createClass(Tooltip2, [{
        key: "_setup",
        /**
         * Creates a new instance of a Tooltip.
         * @class
         * @name Tooltip
         * @fires Tooltip#init
         * @param {jQuery} element - jQuery object to attach a tooltip to.
         * @param {Object} options - object to extend the default configuration.
         */
        value: function _setup(element, options) {
          this.$element = element;
          this.options = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend({}, Tooltip2.defaults, this.$element.data(), options);
          this.className = "Tooltip";
          this.isActive = false;
          this.isClick = false;
          __WEBPACK_IMPORTED_MODULE_3__foundation_util_triggers__[
            "a"
            /* Triggers */
          ].init(__WEBPACK_IMPORTED_MODULE_0_jquery___default.a);
          this._init();
        }
        /**
         * Initializes the tooltip by setting the creating the tip element, adding it's text, setting private variables and setting attributes on the anchor.
         * @private
         */
      }, {
        key: "_init",
        value: function _init() {
          __WEBPACK_IMPORTED_MODULE_2__foundation_util_mediaQuery__[
            "a"
            /* MediaQuery */
          ]._init();
          var elemId = this.$element.attr("aria-describedby") || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__foundation_util_core__[
            "b"
            /* GetYoDigits */
          ])(6, "tooltip");
          this.options.tipText = this.options.tipText || this.$element.attr("title");
          this.template = this.options.template ? __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this.options.template) : this._buildTemplate(elemId);
          if (this.options.allowHtml) {
            this.template.appendTo(document.body).html(this.options.tipText).hide();
          } else {
            this.template.appendTo(document.body).text(this.options.tipText).hide();
          }
          this.$element.attr({
            "title": "",
            "aria-describedby": elemId,
            "data-yeti-box": elemId,
            "data-toggle": elemId,
            "data-resize": elemId
          }).addClass(this.options.triggerClass);
          _get(Tooltip2.prototype.__proto__ || Object.getPrototypeOf(Tooltip2.prototype), "_init", this).call(this);
          this._events();
        }
      }, {
        key: "_getDefaultPosition",
        value: function _getDefaultPosition() {
          var position = this.$element[0].className.match(/\b(top|left|right|bottom)\b/g);
          return position ? position[0] : "top";
        }
      }, {
        key: "_getDefaultAlignment",
        value: function _getDefaultAlignment() {
          return "center";
        }
      }, {
        key: "_getHOffset",
        value: function _getHOffset() {
          if (this.position === "left" || this.position === "right") {
            return this.options.hOffset + this.options.tooltipWidth;
          } else {
            return this.options.hOffset;
          }
        }
      }, {
        key: "_getVOffset",
        value: function _getVOffset() {
          if (this.position === "top" || this.position === "bottom") {
            return this.options.vOffset + this.options.tooltipHeight;
          } else {
            return this.options.vOffset;
          }
        }
        /**
         * builds the tooltip element, adds attributes, and returns the template.
         * @private
         */
      }, {
        key: "_buildTemplate",
        value: function _buildTemplate(id) {
          var templateClasses = (this.options.tooltipClass + " " + this.options.positionClass + " " + this.options.templateClasses).trim();
          var $template = __WEBPACK_IMPORTED_MODULE_0_jquery___default()("<div></div>").addClass(templateClasses).attr({
            "role": "tooltip",
            "aria-hidden": true,
            "data-is-active": false,
            "data-is-focus": false,
            "id": id
          });
          return $template;
        }
        /**
         * sets the position class of an element and recursively calls itself until there are no more possible positions to attempt, or the tooltip element is no longer colliding.
         * if the tooltip is larger than the screen width, default to full width - any user selected margin
         * @private
         */
      }, {
        key: "_setPosition",
        value: function _setPosition() {
          _get(Tooltip2.prototype.__proto__ || Object.getPrototypeOf(Tooltip2.prototype), "_setPosition", this).call(this, this.$element, this.template);
        }
        /**
         * reveals the tooltip, and fires an event to close any other open tooltips on the page
         * @fires Tooltip#closeme
         * @fires Tooltip#show
         * @function
         */
      }, {
        key: "show",
        value: function show() {
          if (this.options.showOn !== "all" && !__WEBPACK_IMPORTED_MODULE_2__foundation_util_mediaQuery__[
            "a"
            /* MediaQuery */
          ].is(this.options.showOn)) {
            return false;
          }
          var _this = this;
          this.template.css("visibility", "hidden").show();
          this._setPosition();
          this.template.removeClass("top bottom left right").addClass(this.position);
          this.template.removeClass("align-top align-bottom align-left align-right align-center").addClass("align-" + this.alignment);
          this.$element.trigger("closeme.zf.tooltip", this.template.attr("id"));
          this.template.attr({
            "data-is-active": true,
            "aria-hidden": false
          });
          _this.isActive = true;
          this.template.stop().hide().css("visibility", "").fadeIn(this.options.fadeInDuration, function() {
          });
          this.$element.trigger("show.zf.tooltip");
        }
        /**
         * Hides the current tooltip, and resets the positioning class if it was changed due to collision
         * @fires Tooltip#hide
         * @function
         */
      }, {
        key: "hide",
        value: function hide() {
          var _this = this;
          this.template.stop().attr({
            "aria-hidden": true,
            "data-is-active": false
          }).fadeOut(this.options.fadeOutDuration, function() {
            _this.isActive = false;
            _this.isClick = false;
          });
          this.$element.trigger("hide.zf.tooltip");
        }
        /**
         * adds event listeners for the tooltip and its anchor
         * TODO combine some of the listeners like focus and mouseenter, etc.
         * @private
         */
      }, {
        key: "_events",
        value: function _events() {
          var _this = this;
          var $template = this.template;
          var isFocus = false;
          if (!this.options.disableHover) {
            this.$element.on("mouseenter.zf.tooltip", function(e2) {
              if (!_this.isActive) {
                _this.timeout = setTimeout(function() {
                  _this.show();
                }, _this.options.hoverDelay);
              }
            }).on("mouseleave.zf.tooltip", function(e2) {
              clearTimeout(_this.timeout);
              if (!isFocus || _this.isClick && !_this.options.clickOpen) {
                _this.hide();
              }
            });
          }
          if (this.options.clickOpen) {
            this.$element.on("mousedown.zf.tooltip", function(e2) {
              e2.stopImmediatePropagation();
              if (_this.isClick) {
              } else {
                _this.isClick = true;
                if ((_this.options.disableHover || !_this.$element.attr("tabindex")) && !_this.isActive) {
                  _this.show();
                }
              }
            });
          } else {
            this.$element.on("mousedown.zf.tooltip", function(e2) {
              e2.stopImmediatePropagation();
              _this.isClick = true;
            });
          }
          if (!this.options.disableForTouch) {
            this.$element.on("tap.zf.tooltip touchend.zf.tooltip", function(e2) {
              _this.isActive ? _this.hide() : _this.show();
            });
          }
          this.$element.on({
            // 'toggle.zf.trigger': this.toggle.bind(this),
            // 'close.zf.trigger': this.hide.bind(this)
            "close.zf.trigger": this.hide.bind(this)
          });
          this.$element.on("focus.zf.tooltip", function(e2) {
            isFocus = true;
            if (_this.isClick) {
              if (!_this.options.clickOpen) {
                isFocus = false;
              }
              return false;
            } else {
              _this.show();
            }
          }).on("focusout.zf.tooltip", function(e2) {
            isFocus = false;
            _this.isClick = false;
            _this.hide();
          }).on("resizeme.zf.trigger", function() {
            if (_this.isActive) {
              _this._setPosition();
            }
          });
        }
        /**
         * adds a toggle method, in addition to the static show() & hide() functions
         * @function
         */
      }, {
        key: "toggle",
        value: function toggle() {
          if (this.isActive) {
            this.hide();
          } else {
            this.show();
          }
        }
        /**
         * Destroys an instance of tooltip, removes template element from the view.
         * @function
         */
      }, {
        key: "_destroy",
        value: function _destroy() {
          this.$element.attr("title", this.template.text()).off(".zf.trigger .zf.tooltip").removeClass("has-tip top right left").removeAttr("aria-describedby aria-haspopup data-disable-hover data-resize data-toggle data-tooltip data-yeti-box");
          this.template.remove();
        }
      }]);
      return Tooltip2;
    }(__WEBPACK_IMPORTED_MODULE_4__foundation_positionable__[
      "a"
      /* Positionable */
    ]);
    Tooltip.defaults = {
      disableForTouch: false,
      /**
       * Time, in ms, before a tooltip should open on hover.
       * @option
       * @type {number}
       * @default 200
       */
      hoverDelay: 200,
      /**
       * Time, in ms, a tooltip should take to fade into view.
       * @option
       * @type {number}
       * @default 150
       */
      fadeInDuration: 150,
      /**
       * Time, in ms, a tooltip should take to fade out of view.
       * @option
       * @type {number}
       * @default 150
       */
      fadeOutDuration: 150,
      /**
       * Disables hover events from opening the tooltip if set to true
       * @option
       * @type {boolean}
       * @default false
       */
      disableHover: false,
      /**
       * Optional addtional classes to apply to the tooltip template on init.
       * @option
       * @type {string}
       * @default ''
       */
      templateClasses: "",
      /**
       * Non-optional class added to tooltip templates. Foundation default is 'tooltip'.
       * @option
       * @type {string}
       * @default 'tooltip'
       */
      tooltipClass: "tooltip",
      /**
       * Class applied to the tooltip anchor element.
       * @option
       * @type {string}
       * @default 'has-tip'
       */
      triggerClass: "has-tip",
      /**
       * Minimum breakpoint size at which to open the tooltip.
       * @option
       * @type {string}
       * @default 'small'
       */
      showOn: "small",
      /**
       * Custom template to be used to generate markup for tooltip.
       * @option
       * @type {string}
       * @default ''
       */
      template: "",
      /**
       * Text displayed in the tooltip template on open.
       * @option
       * @type {string}
       * @default ''
       */
      tipText: "",
      touchCloseText: "Tap to close.",
      /**
       * Allows the tooltip to remain open if triggered with a click or touch event.
       * @option
       * @type {boolean}
       * @default true
       */
      clickOpen: true,
      /**
       * DEPRECATED Additional positioning classes, set by the JS
       * @option
       * @type {string}
       * @default ''
       */
      positionClass: "",
      /**
       * Position of tooltip. Can be left, right, bottom, top, or auto.
       * @option
       * @type {string}
       * @default 'auto'
       */
      position: "auto",
      /**
       * Alignment of tooltip relative to anchor. Can be left, right, bottom, top, center, or auto.
       * @option
       * @type {string}
       * @default 'auto'
       */
      alignment: "auto",
      /**
       * Allow overlap of container/window. If false, tooltip will first try to
       * position as defined by data-position and data-alignment, but reposition if
       * it would cause an overflow.  @option
       * @type {boolean}
       * @default false
       */
      allowOverlap: false,
      /**
       * Allow overlap of only the bottom of the container. This is the most common
       * behavior for dropdowns, allowing the dropdown to extend the bottom of the
       * screen but not otherwise influence or break out of the container.
       * Less common for tooltips.
       * @option
       * @type {boolean}
       * @default false
       */
      allowBottomOverlap: false,
      /**
       * Distance, in pixels, the template should push away from the anchor on the Y axis.
       * @option
       * @type {number}
       * @default 0
       */
      vOffset: 0,
      /**
       * Distance, in pixels, the template should push away from the anchor on the X axis
       * @option
       * @type {number}
       * @default 0
       */
      hOffset: 0,
      /**
       * Distance, in pixels, the template spacing auto-adjust for a vertical tooltip
       * @option
       * @type {number}
       * @default 14
       */
      tooltipHeight: 14,
      /**
       * Distance, in pixels, the template spacing auto-adjust for a horizontal tooltip
       * @option
       * @type {number}
       * @default 12
       */
      tooltipWidth: 12,
      /**
      * Allow HTML in tooltip. Warning: If you are loading user-generated content into tooltips,
      * allowing HTML may open yourself up to XSS attacks.
      * @option
      * @type {boolean}
      * @default false
      */
      allowHtml: false
    };
  },
  /* 36 */
  /***/
  function(module2, exports, __webpack_require__) {
    module2.exports = __webpack_require__(19);
  }
  /******/
]);
function ebiGaIndicateLoaded(numberOfEbiGaChecks, numberOfEbiGaChecksLimit) {
  function ebiGaCheck() {
    numberOfEbiGaChecks++;
    try {
      if (ga && ga.loaded) {
        jQuery("body").addClass("google-analytics-loaded");
        ebiGaInit();
      } else {
        if (numberOfEbiGaChecks <= numberOfEbiGaChecksLimit) {
          setTimeout(ebiGaCheck, 900);
        }
      }
    } catch (err) {
      if (numberOfEbiGaChecks <= numberOfEbiGaChecksLimit) {
        setTimeout(ebiGaCheck, 900);
      }
    }
  }
  ebiGaCheck();
}
ebiGaIndicateLoaded(0, 2);
if (!Array.prototype.ebiLast) {
  Array.prototype.ebiLast = function() {
    return this[this.length - 1];
  };
}
;
var lastGaEventTime = Date.now();
function analyticsTrackInteraction(actedOnItem, parentContainer, customEventName) {
  var customEventName = customEventName || [];
  if (customEventName.length > 0) {
    linkName = customEventName;
  } else {
    var linkName = jQuery(actedOnItem).text().toString();
    if (linkName.length == 0 && jQuery(actedOnItem).attr("src")) linkName = jQuery(actedOnItem).attr("src").split("/").ebiLast();
    if (linkName.length == 0 && jQuery(actedOnItem).val()) linkName = jQuery(actedOnItem).val();
    if (parentContainer == "Global search") {
      linkName = "query: " + jQuery("#global-search input#query").val();
    }
  }
  if (Date.now() - lastGaEventTime > 150) {
    ga && ga("send", "event", "UI", "UI Element / " + parentContainer, linkName);
    lastGaEventTime = Date.now();
    if (jQuery("body").hasClass("verbose-analytics")) {
      console.log("%c Verbose analytics on ", "color: #FFF; background: #111; font-size: .75rem;");
      console.log("clicked on: %o ", actedOnItem);
      console.log("sent to GA: ", "event ->", "UI ->", "UI Element / " + parentContainer + " ->", linkName, "; at: ", lastGaEventTime);
    }
  }
}
function ebiGaInit() {
  jQuery("body.google-analytics-loaded .track-with-analytics-events a").on("mousedown", function(e2) {
    analyticsTrackInteraction(e2.target, "Manually tracked area");
  });
  jQuery("body.google-analytics-loaded .masthead-black-bar").on("mousedown", "a, button", function(e2) {
    analyticsTrackInteraction(e2.target, "Black bar");
  });
  jQuery("body.google-analytics-loaded .masthead").on("mousedown", "a, button", function(e2) {
    analyticsTrackInteraction(e2.target, "Masthead");
  });
  jQuery("body.google-analytics-loaded .related ul").on("mousedown", "li > a", function(e2) {
    analyticsTrackInteraction(e2.target, "Popular");
  });
  jQuery("body.google-analytics-loaded .with-overlay").on("mousedown", "a, button", function(e2) {
    analyticsTrackInteraction(e2.target, "Highlight box");
  });
  jQuery("body.google-analytics-loaded #global-footer").on("mousedown", "a, button", function(e2) {
    analyticsTrackInteraction(e2.target, "Footer");
  });
  jQuery("body.google-analytics-loaded #global-search").on("mousedown", "input", function(e2) {
    analyticsTrackInteraction(e2.target, "Global search");
  });
  jQuery("body.google-analytics-loaded #local-search").on("mousedown", "input", function(e2) {
    analyticsTrackInteraction(e2.target, "Local search");
  });
  jQuery("body.google-analytics-loaded .analytics-content-intro, body.google-analytics-loaded .intro-unit").on("mousedown", "a, button", function(e2) {
    analyticsTrackInteraction(e2.target, "Intro");
  });
  jQuery("body.google-analytics-loaded .analytics-content-sidebar").on("mousedown", "a, button", function(e2) {
    analyticsTrackInteraction(e2.target, "Sidebar");
  });
  jQuery("body.google-analytics-loaded .analytics-content-left").on("mousedown", "a, button", function(e2) {
    analyticsTrackInteraction(e2.target, "Left content");
  });
  jQuery("body.google-analytics-loaded .analytics-content-right").on("mousedown", "a, button", function(e2) {
    analyticsTrackInteraction(e2.target, "Right content");
  });
  jQuery("body.google-analytics-loaded .analytics-content-footer").on("mousedown", "a, button", function(e2) {
    analyticsTrackInteraction(e2.target, "Content footer");
  });
  jQuery("body.google-analytics-loaded #main-content-area, body.google-analytics-loaded .analytics-content-main").on("mousedown", "a, button", function(e2) {
    analyticsTrackInteraction(e2.target, "Main content");
  });
  var keydown = null;
  if (jQuery("body").hasClass("google-analytics-loaded")) {
    jQuery(window).keydown(function(e2) {
      if (e2.keyCode == 70 && (e2.ctrlKey || e2.metaKey) || e2.keyCode == 191) {
        keydown = (/* @__PURE__ */ new Date()).getTime();
      }
      return true;
    }).blur(function() {
      if (keydown !== null) {
        var delta = (/* @__PURE__ */ new Date()).getTime() - keydown;
        if (delta > 0 && delta < 1e3) {
          ga && ga("send", "event", "UI", "UI Element / Keyboard", "Browser in page search");
        }
        keydown = null;
      }
    });
  }
}
function addBlankTargetToExternalLinkEBI(parent) {
  (function($) {
    var parent2 = parent2 || "#content";
    $(parent2 + " a").filter(function() {
      return this.hostname && this.hostname !== location.hostname;
    }).attr("target", "_blank");
  })(jQuery);
}
function addExternalToBlankWindowLinksEBI(parent) {
  (function($) {
    var parent2 = parent2 || "#content";
    $(parent2 + ' a[target="_blank"]').addClass("external");
  })(jQuery);
}
function activateEMBLdropdown(options) {
  (function($) {
    var options2 = options2 || "", dropDownOptions = { closeOnClick: true };
    if (options2 == "reInit") {
      try {
        $("#embl-dropdown").foundation("close");
        $("#embl-dropdown").foundation("destroy");
      } catch (err) {
      }
      ;
      ebiFrameworkInsertEMBLdropdown();
      activateEMBLdropdown();
    } else {
      setTimeout(function() {
        try {
          var dropdownEbiMenu = new Foundation.Dropdown($("#embl-dropdown"), dropDownOptions);
        } catch (err) {
        }
        ;
      }, 200);
    }
  })(jQuery);
}
function smoothScrollAnchorLinksEBI() {
  (function($) {
    function ebiSmoothScroll(hash) {
      var target = $(hash), targetName = hash;
      target = target.length ? target : $("[name=" + targetName.slice(1) + "]");
      if (target.length) {
        $("html,body").animate({
          scrollTop: target.offset().top - 50
        }, {
          duration: 1e3,
          complete: function() {
            window.location.hash = targetName;
          }
        });
        return false;
      }
    }
    if (window.location.hash.length > 0) {
      ebiSmoothScroll(window.location.hash);
    }
    $("a[href*=\\#]:not([href=\\#])").on("click", function() {
      if ($(this).parent().parent().hasClass("tabs")) {
        return true;
      }
      if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
        ebiSmoothScroll(this.hash);
      }
    });
  })(jQuery);
}
function invokeResponsiveMenuEBI() {
  (function($) {
    var desiredStuckMenuHeight = $(".masthead-inner").outerHeight() - $(".masthead-inner > nav > ul.menu").outerHeight();
    $("<style id='dynamic-stuck-height' type='text/css'> .masthead.sticky.is-stuck{ margin-top: -" + desiredStuckMenuHeight + "px !important;} </style>").appendTo("body");
    var localMenuClass = ".masthead-inner > nav > ul.dropdown.menu.float-left";
    if ($(localMenuClass).length > 0) {
      let localNavSpilloverMenu2 = function(changeDirection) {
        var localMenuWidthUsed = 0;
        var localMenuRightSideWidth = $(".masthead-inner > nav ul.float-right.menu").outerWidth();
        localMenuRightSideWidth = localMenuRightSideWidth + 1;
        $(localMenuClass + ' > li:not(".bug-fix-placeholder")').each(function() {
          localMenuWidthUsed = localMenuWidthUsed + $(this).outerWidth();
        });
        localMenuWidthUsed = localMenuWidthUsed + localMenuRightSideWidth;
        if ($(localMenuClass + " li.extra-items-menu").length == 0) {
          var responsiveMenuSubMenuBugFix = '<li class="bug-fix-placeholder" style="display:none !important;"><a href="#">A workaround</a> <ul class="menu"> <li><a href="#">for a bug where the dropdown menu fails sometimes unless there are two submenus in the submenu</a></li></ul>  </li>';
          $(localMenuClass).append('<li class="extra-items-menu" style="display:none;"><a href="#">Also in this section</a><ul class="menu">' + responsiveMenuSubMenuBugFix + "</ul></li>");
          localMenuWidthUsed = localMenuWidthUsed + $(localMenuClass + " > li.extra-items-menu").outerWidth();
          var options = { closeOnClickInside: false, closeOnClick: false };
          var responsiveMenu = new Foundation.DropdownMenu($(localMenuClass), options);
        }
        if (changeDirection == "init" || changeDirection == "decrease") {
          if (localMenuWidthUsed > localMenuWidthAvail) {
            if ($(localMenuClass + " li.extra-items-menu:visible").length == 0) {
              $(localMenuClass + " li.extra-items-menu").show();
            }
            $($(localMenuClass + " > li").get().reverse().slice(1)).each(function() {
              if (localMenuWidthUsed > localMenuWidthAvail) {
                localMenuWidthUsed = localMenuWidthUsed - $(this).outerWidth();
                $(this).detach().prependTo(localMenuClass + " > li.extra-items-menu > ul.menu");
              }
            });
          }
        }
        if (changeDirection == "increase") {
          if ($(localMenuClass + " li.extra-items-menu:visible").length == 1) {
            var spaceToWorkWith = localMenuWidthAvail - localMenuWidthUsed;
            var spaceRequiredForFirstHiddenChild = $(localMenuClass + " > li.extra-items-menu > ul.menu > li:first-child").outerWidth();
            while (spaceToWorkWith > spaceRequiredForFirstHiddenChild) {
              spaceToWorkWith = spaceToWorkWith - spaceRequiredForFirstHiddenChild;
              $(localMenuClass + " > li.extra-items-menu > ul.menu > li:first-child").detach().insertBefore(localMenuClass + " li.extra-items-menu");
              if ($(localMenuClass + ' > li.extra-items-menu > ul.menu > li:not(".bug-fix-placeholder")').length == 0) {
                $(localMenuClass + " li.extra-items-menu").hide();
                break;
              }
            }
          }
        }
      };
      var localNavSpilloverMenu = localNavSpilloverMenu2;
      var localMenuLeftPadding = parseInt($(".masthead-inner > nav ul").css("padding-left"));
      var localMenuWidthAvail = $(".masthead-inner > nav").innerWidth() - localMenuLeftPadding;
      localNavSpilloverMenu2("init");
      $(window).resize(function() {
        var snapshot_localMenuWidthAvail = $(".masthead-inner > nav").innerWidth();
        var widthChangeAmount = snapshot_localMenuWidthAvail - localMenuWidthAvail;
        if (widthChangeAmount != 0) localMenuWidthAvail = snapshot_localMenuWidthAvail;
        if (widthChangeAmount > 1) localNavSpilloverMenu2("increase");
        if (widthChangeAmount < -1) localNavSpilloverMenu2("decrease");
      });
    }
  })(jQuery);
}
(function($) {
  function tog(v) {
    return v ? "addClass" : "removeClass";
  }
  $(document).on("input", ".clearable", function() {
    $(this)[tog(this.value)]("x");
  }).on("mousemove", ".x", function(e2) {
    $(this)[tog(this.offsetWidth - 25 < e2.clientX - this.getBoundingClientRect().left)]("onX");
  }).on("touchstart click", ".onX", function(ev) {
    ev.preventDefault();
    $(this).removeClass("x onX").val("").change().keyup();
  });
  $.fn.foundationExtendEBI = function() {
    if (document.querySelectorAll("body *").length < 5) {
      console.warn("It looks like you've called foundationExtendEBI() before your body element has been populated with content. Most likely this is as you are using a JS framework, so you might want to read the guidance at https://wwwdev.ebi.ac.uk/style-lab/websites/meta-patterns/js-frameworks.html");
    }
    activateEMBLdropdown();
    smoothScrollAnchorLinksEBI();
    invokeResponsiveMenuEBI();
    $('a[data-toggle="search-global-dropdown"]').click(function() {
      if ($(this).is(":not(.hover)")) {
        setTimeout(function() {
          $("input#global-searchbox").focus();
        }, 100);
      }
    });
    $(".with-overlay").on("click", function(e2) {
      var href = $(this).find("a:first").attr("href") || "";
      if (href.length > 0) {
        window.location.href = href;
      }
    });
    $("table.responsive-table").each(function() {
      var columnsToAppend = $(this).find("th");
      for (var i = 0; i < columnsToAppend.length; i++) {
        if ($(columnsToAppend[i]).attr("class")) {
          var position = i + 1;
          $(this).find("td:nth-child(" + position + ")").addClass($(columnsToAppend[i]).attr("class"));
        }
      }
      ;
    });
  };
  var bodyData = $("body").data();
  if (bodyData.foundationInvoke) {
    bodyData.foundationInvoke = bodyData.foundationInvoke || "document";
    if (bodyData.foundationInvoke === "true") bodyData.foundationInvoke = "document";
    $(bodyData.foundationInvoke).foundation();
  }
  if (bodyData.foundationExtendEBI) {
    bodyData.foundationExtendEBI = bodyData.foundationExtendEBI || "document";
    if (bodyData.foundationExtendEBI === "true") bodyData.foundationExtendEBI = "document";
    $(bodyData.foundationExtendEBI).foundationExtendEBI();
  }
  if (bodyData.addExternal) {
    addBlankTargetToExternalLinkEBI();
    addExternalToBlankWindowLinksEBI();
  }
})(jQuery);
function ebiGetParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"), results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
function ebiHasClass(element, cls) {
  return (" " + element.className + " ").indexOf(" " + cls + " ") > -1;
}
function ebiFrameworkExternalLinks() {
  function isOwnDomain(url) {
    return url.indexOf("//") === -1 || url.indexOf("//www.ebi.ac.uk") !== -1 || url.indexOf("//wwwdev.ebi.ac.uk") !== -1 || url.indexOf("//srs.ebi.ac.uk") !== -1 || url.indexOf("//ftp.ebi.ac.uk") !== -1 || url.indexOf("//intranet.ebi.ac.uk") !== -1 || url.indexOf("//pdbe.org") !== -1 || url.indexOf("//" + document.domain) !== -1;
  }
  function isFileType(url, type2) {
    return url.indexOf(type2, url.length - type2.length) !== -1;
  }
  try {
    var alist = document.getElementsByTagName("a");
    var fileTypes = ["pdf", "doc", "txt"];
    var i, icon;
    for (i = 0; i < alist.length; i++) {
      for (var type in fileTypes) {
        if (alist[i].innerHTML.indexOf('<span class="link-' + fileTypes[type] + '"></span>') === -1 && alist[i].innerHTML.indexOf("<img") === -1 && isFileType(alist[i].href, fileTypes[type]) && isOwnDomain(alist[i].href)) {
          icon = document.createElement("span");
          icon.className = "link-" + fileTypes[type];
          alist[i].appendChild(icon);
        }
      }
    }
  } catch (err) {
  }
}
function ebiFrameworkManageGlobalSearch() {
  try {
    var hasLocalSearch = document.getElementById("local-search") !== null;
    var hasLocalEBISearch = document.getElementById("ebi_search") !== null;
    if (hasLocalSearch || hasLocalEBISearch) {
      document.body.className += " no-global-search";
    } else {
      try {
        if ((elem = document.getElementById("search-bar")) !== null) {
          document.getElementById("search-bar").remove();
        }
        var dropdownDiv = document.createElement("div");
        dropdownDiv.innerHTML = '<nav id="search-bar" class="search-bar global-masthead-interactive-banner"><div class="row padding-bottom-medium"><div class="columns padding-top-medium"><button class="close-button" aria-label="Close alert" type="button"><span aria-hidden="true">\xD7</span></button></div></div><div class="row"><form id="global-search" name="global-search" action="/ebisearch/search.ebi" method="GET" class=""><fieldset><div class="input-group"><input type="text" name="query" id="global-searchbox" class="input-group-field" placeholder="Search all of EMBL-EBI"><div class="input-group-button"><input type="submit" name="submit" value="Search" class="button"><input type="hidden" name="db" value="allebi" checked="checked"><input type="hidden" name="requestFrom" value="masthead-black-bar" checked="checked"></div></div></fieldset></form></div></nav>';
        document.getElementById("masthead-black-bar").insertBefore(dropdownDiv, document.getElementById("masthead-black-bar").firstChild);
        var searchBar = document.querySelectorAll(".search-bar")[0];
        var searchBarButton = document.querySelectorAll(".search-toggle")[0];
        var blackBar2 = document.querySelectorAll(".masthead-black-bar")[0];
        searchBarButton.addEventListener("mouseenter", function(event2) {
          if (ebiHasClass(document.querySelectorAll(".search-bar")[0], "active") == false) {
            blackBar2.className += " peek";
          }
        }, false);
        searchBarButton.addEventListener("mouseleave", function(event2) {
          if (ebiHasClass(document.querySelectorAll(".search-bar")[0], "active") == false) {
            blackBar2.classList.remove("peek");
          }
        }, false);
        var searchSelector = document.querySelectorAll(".search-toggle")[0].addEventListener("click", function(event2) {
          ebiToggleClass(searchBar, "active");
          ebiToggleClass(searchBarButton, "active");
          window.scrollTo(0, 0);
        }, false);
        var searchSelectorClose = document.querySelectorAll(".search-bar .close-button")[0].addEventListener("click", function(event2) {
          ebiToggleClass(searchBar, "active");
          ebiToggleClass(searchBarButton, "active");
          window.scrollTo(0, 0);
        }, false);
      } catch (err) {
        setTimeout(init, 500);
      }
    }
  } catch (err) {
  }
}
function ebiFrameworkSearchNullError() {
  try {
    var disabled = document.body.className.indexOf("no-search-error") !== -1;
    var searchBoxes = [
      { inputNode: document.getElementById("global-searchbox") },
      // in global masthead
      { inputNode: document.getElementById("local-searchbox") },
      // in local masthead
      { inputNode: document.body.className.indexOf("front") !== -1 ? document.getElementById("query") : null },
      // on home page
      {
        inputNode: document.getElementById("people-groups") ? document.getElementById("people-groups").getElementsByTagName("input")[0] : null
        // on people and group page
      }
    ];
    if (!disabled) {
      for (searchBox in searchBoxes) {
        var searchInput = searchBoxes[searchBox].inputNode;
        var searchForm = searchInput ? searchInput.form : null;
        var searchInputDefault = searchBoxes[searchBox].defaultText || "";
        var searchError = searchBoxes[searchBox].errorText || "Please enter a search term";
        var searchAction = searchForm ? searchForm.action : "";
        var isEbiSearch = searchAction.indexOf("/ebisearch/") !== -1;
        if (searchForm && searchInput && isEbiSearch) {
          searchForm.searchInput = searchInput;
          searchForm.searchInputDefault = searchInputDefault;
          searchForm.searchError = searchError;
          searchForm.onsubmit = function() {
            searchInput = this.searchInput;
            searchInputDefault = this.searchInputDefault;
            searchError = this.searchError;
            searchInput.value = searchInput.value.trim();
            if (searchInput.value === searchInputDefault || searchInput.value === "") {
              alert(searchError);
              return false;
            }
          };
        }
      }
    }
  } catch (err) {
  }
}
function isIE() {
  var myNav = navigator.userAgent.toLowerCase();
  return myNav.indexOf("msie") != -1 ? parseInt(myNav.split("msie")[1]) : false;
}
function ebiToggleClass(element, toggleClass) {
  var currentClass = element.className;
  var newClass;
  if (currentClass.split(" ").indexOf(toggleClass) > -1) {
    newClass = currentClass.replace(new RegExp("\\b" + toggleClass + "\\b", "g"), "");
  } else {
    newClass = currentClass + " " + toggleClass;
  }
  element.className = newClass.trim();
}
function ebiActivateClass(element, cssClass) {
  element.classList.remove(cssClass);
  element.classList.add(cssClass);
}
function ebiRemoveClass(element, cssClass) {
  element.classList.remove(cssClass);
}
function ebiFrameworkHideGlobalNav() {
  try {
    var hasGlobalMasthead = document.getElementById("masthead-black-bar") !== null;
    var disabled = document.body.className.indexOf("no-global-nav") !== -1;
    var elem2;
    if (hasGlobalMasthead && disabled) {
      if ((elem2 = document.getElementById("global-nav")) !== null) {
        elem2.parentNode.removeChild(elem2);
      }
      if ((elem2 = document.getElementById("global-nav-expanded")) !== null) {
        elem2.parentNode.removeChild(elem2);
      }
    }
  } catch (err) {
  }
}
function ebiFrameworkAssignImageByMetaTags() {
  var masthead = document.getElementById("masthead");
  var mastheadColor = document.querySelector("meta[name='ebi:masthead-color']") || document.querySelector("meta[name='ebi-masthead-color']");
  var mastheadImage = document.querySelector("meta[name='ebi:masthead-image']") || document.querySelector("meta[name='ebi-masthead-image']");
  if (mastheadColor != null) {
    masthead.style.backgroundColor = mastheadColor.getAttribute("content");
    masthead.className += " meta-background-color";
  }
  if (mastheadImage != null) {
    masthead.style.backgroundImage = "url(" + mastheadImage.getAttribute("content") + ")";
    masthead.className += " meta-background-image";
  }
}
function ebiFrameworkPopulateBlackBar() {
  try {
    if ((elem = document.getElementById("masthead-black-bar")) !== null) {
      document.getElementById("masthead-black-bar").innerHTML = "";
    }
    var barContents = document.createElement("div");
    barContents.innerHTML = '<nav class="row"><ul id="global-nav" class="menu global-nav text-right"><li class="home-mobile"><a href="https://www.ebi.ac.uk"></a></li><li class="where embl hide"><a href="http://www.embl.org">EMBL</a></li><li class="where barcelona hide"><a href="#">Barcelona</a></li><li class="where hamburg hide"><a href="#">Hamburg</a></li><li class="where grenoble hide"><a href="#">Heidelberg</a></li><li class="where grenoble hide"><a href="#">Grenoble</a></li><li class="where rome hide"><a href="#">Rome</a></li><li id="embl-selector" class="float-right show-for-medium embl-selector embl-ebi"><button class="button float-right">&nbsp;</button></li><li class="float-right search"><a href="#" class="inline-block collpased float-left search-toggle"><span class="show-for-small-only">Search</span></a></li><li class="what about"><a href="https://www.ebi.ac.uk/about">About us</a></li><li class="what training"><a href="https://www.ebi.ac.uk/training">Training</a></li><li class="what research"><a href="https://www.ebi.ac.uk/research">Research</a></li><li class="what services"><a href="https://www.ebi.ac.uk/services">Services</a></li><li class="where ebi"><a href="https://www.ebi.ac.uk">EMBL-EBI</a></li></ul></nav>';
    document.getElementById("masthead-black-bar").insertBefore(barContents, document.getElementById("masthead-black-bar").firstChild);
    document.body.className += " ebi-black-bar-loaded";
  } catch (err) {
  }
  ;
}
function ebiGetFacet(passedAttribute) {
  var tag = "#masthead-black-bar ." + passedAttribute.toLowerCase();
  return document.querySelectorAll(tag)[0];
}
function ebiFrameworkActivateBlackBar() {
  try {
    var resetBlackBar = function resetBlackBar2() {
      ebiFrameworkActivateBlackBar();
    };
    var metas = document.getElementsByTagName("meta");
    for (var i = 0; i < metas.length; i++) {
      if (metas[i].getAttribute("name") == "embl:active") {
        var targetFacet = ebiGetFacet(metas[i].getAttribute("content").replace(":", "."));
        ebiRemoveClass(targetFacet, "hide");
        ebiActivateClass(targetFacet, "active");
      }
      if (metas[i].getAttribute("name") == "embl:parent-1") {
        var targetFacet = ebiGetFacet(metas[i].getAttribute("content").replace(":", "."));
        ebiRemoveClass(targetFacet, "hide");
        ebiActivateClass(targetFacet, "active");
      }
      if (metas[i].getAttribute("name") == "embl:parent-2") {
        var targetFacet = ebiGetFacet(metas[i].getAttribute("content").replace(":", "."));
        ebiRemoveClass(targetFacet, "hide");
        ebiActivateClass(targetFacet, "active");
      }
    }
    var mouseoutTimer;
    blackBar.addEventListener("mouseenter", function() {
      window.clearTimeout(mouseoutTimer);
    }, false);
    blackBar.addEventListener("mouseleave", function() {
      mouseoutTimer = window.setTimeout(function() {
        resetBlackBar();
      }, 500);
    });
  } catch (err) {
  }
  ;
}
function ebiFrameworkInsertEMBLdropdown() {
  try {
    if ((elem = document.getElementById("embl-bar")) !== null) {
      document.getElementById("embl-bar").remove();
    }
    var dropdownDiv = document.createElement("div");
    dropdownDiv.innerHTML = '<nav id="embl-bar" class="embl-bar global-masthead-interactive-banner"><div class="row padding-bottom-medium"><div class="columns padding-top-medium"><button class="close-button" aria-label="Close alert" type="button"><span aria-hidden="true">\xD7</span></button></div><div class="columns medium-7"><div class="large-10 medium-12"><div class="margin-bottom-large padding-top-xsmall margin-top-large"><h3 class="no-underline inline" style="line-height: 1rem;"><a href="//embl.org">EMBL</a></h3> was set up in 1974 as Europe\u2019s flagship laboratory for the life sciences \u2013 an intergovernmental organisation with more than 80 independent research groups covering the spectrum of molecular biology:</div></div><div class="row large-up-3 medium-up-3 small-up-2 no-underline medium-11"><div class="column padding-bottom-medium"><a class="" href="https://www.embl.de/research/index.php"><h5 class="inline underline">Research:</h5> perform basic research in molecular biology</a></div><div class="column padding-bottom-medium"><a class="" href="https://www.embl.de/services/index.html"><h5 class="inline underline">Services:</h5> offer vital services to scientists in the member states</a></div><div class="column padding-bottom-medium"><a class="" href="https://www.embl.de/training/index.php"><h5 class="inline underline">Training</h5> scientists, students and visitors at all levels</a></div><div class="column padding-bottom-medium"><a class="" href="https://www.embl.de/research/tech_transfer/index.html"><h5 class="inline underline">Transfer</h5> and development of technology</a></div><div class="column padding-bottom-medium"><h5 class="inline underline">Develop</h5> new instruments and methods</div><div class="column padding-bottom-medium"><h5 class="inline underline">Integrating</h5> life science research in Europe</div></div><div class="margin-top-xlarge no-underline"><h3><a href="//embl.org" class="readmore">More about EMBL</a></h3></div></div><div class="columns medium-5"><div class="large-10 medium-12"><h3 class="inline">Six sites</h3><p>represent EMBL in Europe.</p></div><div class="row medium-up-2 small-up-2"><div class="column"><h5 class="inline"><a href="//www.embl-barcelona.es/">Barcelona</a></h5><p class="">Tissue biology and disease modelling</p></div><div class="column"><h5 class="inline"><a href="//www.embl.fr/">Grenoble</a></h5><p class="">Structural biology</p></div><div class="column"><h5 class="inline"><a href="//www.embl-hamburg.de/">Hamburg</a></h5><p class="">Structural biology</p></div><div class="column"><h5 class="inline"><a href="//www.embl.de/">Heidelberg</a></h5><p class="">Main laboratory</p></div><div class="column"><h5 class="inline"><a href="https://www.ebi.ac.uk/">Hinxton</a></h5><p class="margin-bottom-none">EMBL-EBI: European Bioinformatics Institute</p></div><div class="column"><h5 class="inline"><a href="//www.embl.it/">Rome</a></h5><p class="">Epigenetics and neurobiology</p></div></div></div></div></nav>';
    document.getElementById("masthead-black-bar").insertBefore(dropdownDiv, document.getElementById("masthead-black-bar").firstChild);
    var emblBar = document.querySelectorAll(".embl-bar")[0];
    var emblBarButton = document.querySelectorAll(".embl-selector")[0];
    var blackBar2 = document.querySelectorAll(".masthead-black-bar")[0];
    emblBarButton.addEventListener("mouseenter", function(event2) {
      if (ebiHasClass(document.querySelectorAll(".embl-bar")[0], "active") == false) {
        blackBar2.className += " peek";
      }
    }, false);
    emblBarButton.addEventListener("mouseleave", function(event2) {
      if (ebiHasClass(document.querySelectorAll(".embl-bar")[0], "active") == false) {
        blackBar2.classList.remove("peek");
      }
    }, false);
    var emblSelector = document.querySelectorAll(".embl-selector")[0].addEventListener("click", function(event2) {
      ebiToggleClass(emblBar, "active");
      ebiToggleClass(emblBarButton, "active");
      window.scrollTo(0, 0);
    }, false);
    var emblSelectorClose = document.querySelectorAll(".embl-bar .close-button")[0].addEventListener("click", function(event2) {
      ebiToggleClass(emblBar, "active");
      ebiToggleClass(emblBarButton, "active");
      window.scrollTo(0, 0);
    }, false);
  } catch (err) {
  }
  ;
}
function ebiFrameworkUpdateFoot() {
  var html = '<div class="columns small-12"><h4 class="inline-block"><a href="https://www.ebi.ac.uk" class="no-underline" title="EMBL-EBI">EMBL-EBI</a></h4><span class="small inline-block padding-left-large"><a class="readmore" href="http://intranet.ebi.ac.uk"><span class="icon icon-functional" data-icon="L"></span> Intranet for staff</a></span></div><div class="medium-up-5 small-up-2"><div class="column"><h5 class="services"><a class="services-color" href="https://www.ebi.ac.uk/services">Services</a></h5><ul> <li class="first"><a href="https://www.ebi.ac.uk/services">By topic</a></li>  <li><a href="https://www.ebi.ac.uk/services/all">By name (A-Z)</a></li>  <li class="last"><a href="https://www.ebi.ac.uk/support">Help &amp; Support</a></li> </ul></div><div class="column"><h5 class="research"><a class="research-color" href="https://www.ebi.ac.uk/research">Research</a></h5><ul> <li><a href="https://www.ebi.ac.uk/research/publications">Publications</a></li>  <li><a href="https://www.ebi.ac.uk/research/groups">Research groups</a></li>  <li class="last"><a href="https://www.ebi.ac.uk/research/postdocs">Postdocs</a> &amp; <a href="https://www.ebi.ac.uk/research/eipp">PhDs</a></li> </ul></div><div class="column"> <h5 class="training"><a class="training-color" href="https://www.ebi.ac.uk/training">Training</a></h5><ul> <li><a href="https://www.ebi.ac.uk/training/handson">Train at EBI</a></li>  <li><a href="https://www.ebi.ac.uk/training/roadshow">Train outside EBI</a></li>  <li><a href="https://www.ebi.ac.uk/training/online">Train online</a></li>  <li class="last"><a href="https://www.ebi.ac.uk/training/contact-us">Contact organisers</a></li> </ul></div> <div class="column"> <h5 class="industry"><a class="industry-color" href="https://www.ebi.ac.uk/industry">Industry</a></h5><ul> <li><a href="https://www.ebi.ac.uk/industry/private">Members Area</a></li>  <li><a href="https://www.ebi.ac.uk/industry/workshops">Workshops</a></li>  <li><a href="https://www.ebi.ac.uk/industry/sme-forum"><abbr title="Small Medium Enterprise">SME</abbr> Forum</a></li>  <li class="last"><a href="https://www.ebi.ac.uk/industry/contact">Contact Industry programme</a></li> </ul></div> <div class="column"> <h5 class="about"><a class="ebi-color" href="https://www.ebi.ac.uk/about">About</a></h5><ul>  <li><a href="https://www.ebi.ac.uk/about/contact">Contact us</a><li><a href="https://www.ebi.ac.uk/about/events">Events</a></li>  <li><a href="https://www.ebi.ac.uk/about/jobs" title="Jobs, postdocs, PhDs...">Jobs</a></li>  <li class="first"><a href="https://www.ebi.ac.uk/about/news">News</a></li>  <li><a href="https://www.ebi.ac.uk/about/people">People &amp; groups</a></li> </ul></div></div>';
  function init2() {
    try {
      var foot = document.getElementById("global-nav-expanded");
      foot.innerHTML = html;
    } catch (err) {
      setTimeout(init2, 500);
    }
  }
  init2();
}
function ebiFrameworkUpdateFooterMeta() {
  var d = /* @__PURE__ */ new Date();
  var html = '<div class="columns"><p class="address">EMBL-EBI, Wellcome Genome Campus, Hinxton, Cambridgeshire, CB10 1SD, UK. +44 (0)1223 49 44 44</p> <p class="legal">Copyright &copy; EMBL-EBI ' + d.getFullYear() + ' | EMBL-EBI is <a href="http://www.embl.org/">part of the European Molecular Biology Laboratory</a> | <a href="https://www.ebi.ac.uk/about/terms-of-use">Terms of use</a></p></div>';
  function init2() {
    try {
      var foot = document.getElementById("ebi-footer-meta");
      foot.innerHTML = html;
    } catch (err) {
      setTimeout(init2, 500);
    }
  }
  init2();
}
function ebiInjectAnnouncements(message) {
  if (typeof message == "undefined") {
    return false;
  }
  ;
  if (typeof message.processed != "undefined") {
    return true;
  } else {
    message.processed = true;
  }
  var container = document.getElementById("main-content-area") || document.getElementById("main-content") || document.getElementById("main") || document.getElementById("content") || document.getElementById("contentsarea");
  if (container == null) {
    console.warn("A message needs to be shown on this site, but an appropriate container could not be found. \n Message follows:", "\n" + message.headline, "\n" + message.message, "\nPriority:", message.priority);
    return false;
  }
  var banner = document.createElement("div");
  var wrapper = document.createElement("div");
  banner.className = "notifications-js row margin-top-medium";
  wrapper.className = "callout " + (message.priority || "");
  wrapper.innerHTML = "<h3>" + message.headline + "</h3>" + message.message;
  container.insertBefore(banner, container.firstChild);
  banner.appendChild(wrapper);
}
function ebiFrameworkIncludeAnnouncements() {
  function detectAnnouncements(messages) {
    var currentHost = window.location.hostname, currentPath = window.location.pathname;
    currentHost = currentHost.replace(/wwwdev/g, "www");
    ebiInjectAnnouncements(messages[currentHost]);
    ebiInjectAnnouncements(messages[currentHost + "/"]);
    ebiInjectAnnouncements(messages[currentHost + "/*"]);
    if (currentPath.length > 1) {
      var currentPathArray = currentPath.split("/");
      var pathsToMatch = [currentHost + currentPathArray[0]];
      for (var i = 1; i < currentPathArray.length; i++) {
        var tempPath = pathsToMatch[i - 1];
        pathsToMatch.push(tempPath + "/" + currentPathArray[i]);
      }
      for (var i = 0; i < pathsToMatch.length; i++) {
        ebiInjectAnnouncements(messages[pathsToMatch[i]]);
        ebiInjectAnnouncements(messages[pathsToMatch[i] + "*"]);
        ebiInjectAnnouncements(messages[pathsToMatch[i] + "/*"]);
      }
    }
  }
  function loadRemoteAnnouncements(file) {
    if (window.XMLHttpRequest) {
      var xmlhttp = new XMLHttpRequest();
    }
    xmlhttp.open("GET", file, true);
    xmlhttp.onload = function(e) {
      if (xmlhttp.readyState === 4) {
        if (xmlhttp.status === 200) {
          eval(xmlhttp.responseText);
          var m = m || "";
          detectAnnouncements(m);
        } else {
          console.error(xmlhttp.statusText);
        }
      }
    };
    xmlhttp.onerror = function(e2) {
      console.error(xmlhttp.statusText);
    };
    xmlhttp.send(null);
  }
  if (window.location.hostname.indexOf("wwwdev.") === 0) {
    loadRemoteAnnouncements("https://dev.ebi.emblstatic.net/announcements.js");
  } else {
    loadRemoteAnnouncements("https://ebi.emblstatic.net/announcements.js");
  }
}
function ebiFrameworkCreateDataProtectionBanner() {
  var banner = document.createElement("div");
  var wrapper = document.createElement("div");
  var inner = document.createElement("div");
  if (document.getElementById("data-protection-banner") != null) {
    document.getElementById("data-protection-banner").remove();
  }
  banner.id = "data-protection-banner";
  banner.className = "data-protection-banner";
  banner.style.cssText = "position: fixed; background: #111; width: 100%; padding: .75rem 1%; left: 0; bottom: 0; color: #eee; z-index: 10;";
  wrapper.className = "row";
  wrapper.innerHTML = "<div class='columns medium-8 large-9 white-color'>" + dataProtectionSettings.message + "</div><div class='columns medium-4 large-3 text-right white-color'><a id='data-protection-agree' class=''>I agree, dismiss this banner</a></div>";
  document.body.appendChild(banner);
  banner.appendChild(wrapper);
  ebiFrameworkTrackDataProtectionBanner();
  openDataProtectionBanner();
}
function ebiFrameworkTrackDataProtectionBanner() {
  var bannerTrackingEventLoaded = 0;
  if (typeof analyticsTrackInteraction == "function" && typeof jQuery == "function") {
    if (jQuery("body").hasClass("google-analytics-loaded")) {
      bannerTrackingEventLoaded = 1;
      jQuery("body.google-analytics-loaded .data-protection-banner a").on("mousedown", function(e2) {
        analyticsTrackInteraction(e2.target, "Data protection banner");
      });
    } else {
      bannerTrackingEventLoaded = ebiFrameworkRetryTrackDataProtectionBanner(bannerTrackingEventLoaded);
    }
  } else {
    bannerTrackingEventLoaded = ebiFrameworkRetryTrackDataProtectionBanner(bannerTrackingEventLoaded);
  }
}
function ebiFrameworkRetryTrackDataProtectionBanner(bannerTrackingEventLoaded) {
  bannerTrackingEventLoaded--;
  if (bannerTrackingEventLoaded > -3) {
    setTimeout(ebiFrameworkTrackDataProtectionBanner, 900);
  }
  return bannerTrackingEventLoaded;
}
function openDataProtectionBanner() {
  var height = document.getElementById("data-protection-banner").offsetHeight || 0;
  document.getElementById("data-protection-banner").style.display = "block";
  document.body.style.paddingBottom = height + "px";
  document.getElementById("data-protection-agree").onclick = function() {
    closeDataProtectionBanner();
    return false;
  };
}
function closeDataProtectionBanner() {
  var height = document.getElementById("data-protection-banner").offsetHeight;
  document.getElementById("data-protection-banner").style.display = "none";
  document.body.style.paddingBottom = "0";
  ebiFrameworkSetCookie(dataProtectionSettings.cookieName, "true", 90);
}
function ebiFrameworkSetCookie(c_name, value, exdays) {
  var exdate = /* @__PURE__ */ new Date();
  var c_value;
  exdate.setDate(exdate.getDate() + exdays);
  c_value = escape(value) + (exdays === null ? "" : ";expires=" + exdate.toUTCString()) + ";domain=" + document.domain + ";path=/";
  document.cookie = c_name + "=" + c_value;
}
function ebiFrameworkGetCookie(c_name) {
  var i, x, y, ARRcookies = document.cookie.split(";");
  for (i = 0; i < ARRcookies.length; i++) {
    x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
    y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
    x = x.replace(/^\s+|\s+$/g, "");
    if (x === c_name) {
      return unescape(y);
    }
  }
}
var dataProtectionSettings = new Object();
function ebiFrameworkRunDataProtectionBanner(targetedFrameworkVersion) {
  try {
    if (typeof newDataProtectionNotificationBanner !== "undefined") {
      targetedFrameworkVersion = newDataProtectionNotificationBanner.src.split("legacyRequest=")[1] || "generic";
    }
    var compatibilityStyles = document.createElement("style");
    compatibilityStyles.innerHTML = "\n      #cookie-banner {\n        display: none;\n      }\n      .data-protection-banner {\n        box-sizing: border-box;\n      }\n      .data-protection-banner a,\n      .data-protection-banner a:hover {\n        cursor: pointer;\n        color: #fff;\n        border-bottom-width: 1px;\n        border-bottom-style: dotted;\n        border-bottom-color: inherit;\n        text-decoration: none;\n      }\n      .data-protection-banner .medium-8 {\n        width: 75%; margin-left: 1%; float: left;\n      }\n      .data-protection-banner .medium-4 {\n        width: 23%; margin-right: 1%; float: right; text-align: right;\n      }\n    ";
    switch (targetedFrameworkVersion) {
      case "1.1":
      case "1.2":
        if (document.getElementById("cookie-banner") != null) {
          document.getElementById("cookie-banner").remove();
        }
        document.body.style.paddingBottom = 0;
        break;
      case "1.3":
        if (document.getElementById("cookie-banner") != null) {
          document.getElementById("cookie-banner").remove();
        }
        break;
      case "compliance":
        if (document.getElementById("cookie-banner") != null) {
          document.getElementById("cookie-banner").remove();
        }
        document.body.style.paddingTop = 0;
        document.body.appendChild(compatibilityStyles);
        break;
      case "other":
        document.body.appendChild(compatibilityStyles);
        break;
      default:
        console.warn("You should specify the targeted FrameworkVersion (allowed values: 1.1, 1.2, 1.3, compliance, other). You sent: " + targetedFrameworkVersion);
    }
    dataProtectionSettings.message = 'This website requires cookies, and the limited processing of your personal data in order to function. By using the site you are agreeing to this as outlined in our <a target="_blank" href="https://www.ebi.ac.uk/data-protection/privacy-notice/embl-ebi-public-website">Privacy Notice</a> and <a target="_blank" href="https://www.ebi.ac.uk/about/terms-of-use">Terms of Use</a>.';
    dataProtectionSettings.serviceId = "embl-ebi-public-website";
    dataProtectionSettings.dataProtectionVersion = "1.0";
    var divDataProtectionBanner = document.getElementById("data-protection-message-configuration");
    if (divDataProtectionBanner !== null) {
      if (typeof divDataProtectionBanner.dataset.message !== "undefined") {
        dataProtectionSettings.message = divDataProtectionBanner.dataset.message;
      }
      if (typeof divDataProtectionBanner.dataset.serviceId !== "undefined") {
        dataProtectionSettings.serviceId = divDataProtectionBanner.dataset.serviceId;
      }
      if (typeof divDataProtectionBanner.dataset.dataProtectionVersion !== "undefined") {
        dataProtectionSettings.dataProtectionVersion = divDataProtectionBanner.dataset.dataProtectionVersion;
      }
    }
    dataProtectionSettings.cookieName = dataProtectionSettings.serviceId + "-v" + dataProtectionSettings.dataProtectionVersion + "-data-protection-accepted";
    if (ebiFrameworkGetCookie(dataProtectionSettings.cookieName) != "true") {
      ebiFrameworkCreateDataProtectionBanner();
    }
  } catch (err) {
    setTimeout(ebiFrameworkRunDataProtectionBanner, 100);
  }
}
function resetDataProtectionBanner() {
  document.cookie = dataProtectionSettings.cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT;domain=" + document.domain + ";path=/";
  ebiFrameworkRunDataProtectionBanner("1.3");
}
function ebiFrameworkCookieBanner() {
  console.warn("You are calling an old function name, update it to ebiFrameworkRunDataProtectionBanner();");
  ebiFrameworkRunDataProtectionBanner("1.3");
}
function ebiFrameworkInvokeScripts() {
  ebiFrameworkPopulateBlackBar();
  ebiFrameworkActivateBlackBar();
  ebiFrameworkExternalLinks();
  ebiFrameworkManageGlobalSearch();
  ebiFrameworkSearchNullError();
  ebiFrameworkHideGlobalNav();
  ebiFrameworkAssignImageByMetaTags();
  ebiFrameworkInsertEMBLdropdown();
  ebiFrameworkUpdateFoot();
  ebiFrameworkUpdateFooterMeta();
  ebiFrameworkIncludeAnnouncements();
  ebiFrameworkRunDataProtectionBanner("1.3");
}
document.addEventListener("DOMContentLoaded", function(event2) {
  var bodyData = document.body.dataset;
  if (isIE() && isIE() <= 10) {
    bodyData = [];
  }
  if (bodyData["ebiframeworkinvokescripts"] != "false") {
    ebiFrameworkInvokeScripts();
  }
});
//# sourceMappingURL=scripts.js.map
