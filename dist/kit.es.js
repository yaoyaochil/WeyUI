import { ref, reactive, inject, computed, getCurrentInstance, cloneVNode, defineComponent, openBlock, createElementBlock, normalizeClass, renderSlot, normalizeStyle, createElementVNode, resolveComponent, createBlock, createCommentVNode, toRef, toRefs, watch, createVNode, mergeProps, createTextVNode, nextTick, provide, Fragment, createSlots, withCtx, withModifiers, onMounted, onUpdated, onBeforeUnmount, readonly, onDeactivated, Teleport, Transition, withDirectives, vShow, onUnmounted, toDisplayString, resolveDynamicComponent, renderList, render, unref, pushScopeId, popScopeId } from "vue";
var index$8 = "";
var index$7 = "";
var index$6 = "";
var index$5 = "";
var index$4 = "";
var index$3 = "";
var index$2 = "";
const opt$1 = Object.prototype.toString;
function isArray$1(obj) {
  return opt$1.call(obj) === "[object Array]";
}
function isNull(obj) {
  return opt$1.call(obj) === "[object Null]";
}
function isBoolean$1(obj) {
  return opt$1.call(obj) === "[object Boolean]";
}
function isObject$1(obj) {
  return opt$1.call(obj) === "[object Object]";
}
const isPromise = (obj) => {
  return opt$1.call(obj) === "[object Promise]";
};
function isString$1(obj) {
  return opt$1.call(obj) === "[object String]";
}
function isNumber$1(obj) {
  return opt$1.call(obj) === "[object Number]" && obj === obj;
}
function isUndefined(obj) {
  return obj === void 0;
}
function isFunction$1(obj) {
  return typeof obj === "function";
}
const configProviderInjectionKey = Symbol("ArcoConfigProvider");
const calendarLang = {
  formatYear: "YYYY \u5E74",
  formatMonth: "YYYY \u5E74 MM \u6708",
  today: "\u4ECA\u5929",
  view: {
    month: "\u6708",
    year: "\u5E74",
    week: "\u5468",
    day: "\u65E5"
  },
  month: {
    long: {
      January: "\u4E00\u6708",
      February: "\u4E8C\u6708",
      March: "\u4E09\u6708",
      April: "\u56DB\u6708",
      May: "\u4E94\u6708",
      June: "\u516D\u6708",
      July: "\u4E03\u6708",
      August: "\u516B\u6708",
      September: "\u4E5D\u6708",
      October: "\u5341\u6708",
      November: "\u5341\u4E00\u6708",
      December: "\u5341\u4E8C\u6708"
    },
    short: {
      January: "\u4E00\u6708",
      February: "\u4E8C\u6708",
      March: "\u4E09\u6708",
      April: "\u56DB\u6708",
      May: "\u4E94\u6708",
      June: "\u516D\u6708",
      July: "\u4E03\u6708",
      August: "\u516B\u6708",
      September: "\u4E5D\u6708",
      October: "\u5341\u6708",
      November: "\u5341\u4E00\u6708",
      December: "\u5341\u4E8C\u6708"
    }
  },
  week: {
    long: {
      self: "\u5468",
      monday: "\u5468\u4E00",
      tuesday: "\u5468\u4E8C",
      wednesday: "\u5468\u4E09",
      thursday: "\u5468\u56DB",
      friday: "\u5468\u4E94",
      saturday: "\u5468\u516D",
      sunday: "\u5468\u65E5"
    },
    short: {
      self: "\u5468",
      monday: "\u4E00",
      tuesday: "\u4E8C",
      wednesday: "\u4E09",
      thursday: "\u56DB",
      friday: "\u4E94",
      saturday: "\u516D",
      sunday: "\u65E5"
    }
  }
};
const lang = {
  locale: "zh-CN",
  empty: {
    description: "\u6682\u65E0\u6570\u636E"
  },
  drawer: {
    okText: "\u786E\u5B9A",
    cancelText: "\u53D6\u6D88"
  },
  popconfirm: {
    okText: "\u786E\u5B9A",
    cancelText: "\u53D6\u6D88"
  },
  modal: {
    okText: "\u786E\u5B9A",
    cancelText: "\u53D6\u6D88"
  },
  pagination: {
    goto: "\u524D\u5F80",
    page: "\u9875",
    countPerPage: "\u6761/\u9875",
    total: "\u5171 {0} \u6761"
  },
  table: {
    okText: "\u786E\u5B9A",
    resetText: "\u91CD\u7F6E"
  },
  upload: {
    start: "\u5F00\u59CB",
    cancel: "\u53D6\u6D88",
    delete: "\u5220\u9664",
    retry: "\u70B9\u51FB\u91CD\u8BD5",
    buttonText: "\u70B9\u51FB\u4E0A\u4F20",
    preview: "\u9884\u89C8",
    drag: "\u70B9\u51FB\u6216\u62D6\u62FD\u6587\u4EF6\u5230\u6B64\u5904\u4E0A\u4F20",
    dragHover: "\u91CA\u653E\u6587\u4EF6\u5E76\u5F00\u59CB\u4E0A\u4F20",
    error: "\u4E0A\u4F20\u5931\u8D25"
  },
  calendar: calendarLang,
  datePicker: {
    view: calendarLang.view,
    month: calendarLang.month,
    week: calendarLang.week,
    placeholder: {
      date: "\u8BF7\u9009\u62E9\u65E5\u671F",
      week: "\u8BF7\u9009\u62E9\u5468",
      month: "\u8BF7\u9009\u62E9\u6708\u4EFD",
      year: "\u8BF7\u9009\u62E9\u5E74\u4EFD",
      quarter: "\u8BF7\u9009\u62E9\u5B63\u5EA6",
      time: "\u8BF7\u9009\u62E9\u65F6\u95F4"
    },
    rangePlaceholder: {
      date: ["\u5F00\u59CB\u65E5\u671F", "\u7ED3\u675F\u65E5\u671F"],
      week: ["\u5F00\u59CB\u5468", "\u7ED3\u675F\u5468"],
      month: ["\u5F00\u59CB\u6708\u4EFD", "\u7ED3\u675F\u6708\u4EFD"],
      year: ["\u5F00\u59CB\u5E74\u4EFD", "\u7ED3\u675F\u5E74\u4EFD"],
      quarter: ["\u5F00\u59CB\u5B63\u5EA6", "\u7ED3\u675F\u5B63\u5EA6"],
      time: ["\u5F00\u59CB\u65F6\u95F4", "\u7ED3\u675F\u65F6\u95F4"]
    },
    selectTime: "\u9009\u62E9\u65F6\u95F4",
    today: "\u4ECA\u5929",
    now: "\u6B64\u523B",
    ok: "\u786E\u5B9A"
  },
  image: {
    loading: "\u52A0\u8F7D\u4E2D"
  },
  imagePreview: {
    fullScreen: "\u5168\u5C4F",
    rotateRight: "\u5411\u53F3\u65CB\u8F6C",
    rotateLeft: "\u5411\u5DE6\u65CB\u8F6C",
    zoomIn: "\u653E\u5927",
    zoomOut: "\u7F29\u5C0F",
    originalSize: "\u539F\u59CB\u5C3A\u5BF8"
  },
  typography: {
    copied: "\u5DF2\u590D\u5236",
    copy: "\u590D\u5236",
    expand: "\u5C55\u5F00",
    collapse: "\u6298\u53E0",
    edit: "\u7F16\u8F91"
  },
  form: {
    validateMessages: {
      required: "#{field} \u662F\u5FC5\u586B\u9879",
      type: {
        string: "#{field} \u4E0D\u662F\u5408\u6CD5\u7684\u6587\u672C\u7C7B\u578B",
        number: "#{field} \u4E0D\u662F\u5408\u6CD5\u7684\u6570\u5B57\u7C7B\u578B",
        boolean: "#{field} \u4E0D\u662F\u5408\u6CD5\u7684\u5E03\u5C14\u7C7B\u578B",
        array: "#{field} \u4E0D\u662F\u5408\u6CD5\u7684\u6570\u7EC4\u7C7B\u578B",
        object: "#{field} \u4E0D\u662F\u5408\u6CD5\u7684\u5BF9\u8C61\u7C7B\u578B",
        url: "#{field} \u4E0D\u662F\u5408\u6CD5\u7684 url \u5730\u5740",
        email: "#{field} \u4E0D\u662F\u5408\u6CD5\u7684\u90AE\u7BB1\u5730\u5740",
        ip: "#{field} \u4E0D\u662F\u5408\u6CD5\u7684 IP \u5730\u5740"
      },
      number: {
        min: "`#{value}` \u5C0F\u4E8E\u6700\u5C0F\u503C `#{min}`",
        max: "`#{value}` \u5927\u4E8E\u6700\u5927\u503C `#{max}`",
        equal: "`#{value}` \u4E0D\u7B49\u4E8E `#{equal}`",
        range: "`#{value}` \u4E0D\u5728 `#{min} ~ #{max}` \u8303\u56F4\u5185",
        positive: "`#{value}` \u4E0D\u662F\u6B63\u6570",
        negative: "`#{value}` \u4E0D\u662F\u8D1F\u6570"
      },
      array: {
        length: "`#{field}` \u4E2A\u6570\u4E0D\u7B49\u4E8E #{length}",
        minLength: "`#{field}` \u4E2A\u6570\u6700\u5C11\u4E3A #{minLength}",
        maxLength: "`#{field}` \u4E2A\u6570\u6700\u591A\u4E3A #{maxLength}",
        includes: "#{field} \u4E0D\u5305\u542B #{includes}",
        deepEqual: "#{field} \u4E0D\u7B49\u4E8E #{deepEqual}",
        empty: "`#{field}` \u4E0D\u662F\u7A7A\u6570\u7EC4"
      },
      string: {
        minLength: "\u5B57\u7B26\u6570\u6700\u5C11\u4E3A #{minLength}",
        maxLength: "\u5B57\u7B26\u6570\u6700\u591A\u4E3A #{maxLength}",
        length: "\u5B57\u7B26\u6570\u5FC5\u987B\u662F #{length}",
        match: "`#{value}` \u4E0D\u7B26\u5408\u6A21\u5F0F #{pattern}",
        uppercase: "`#{value}` \u5FC5\u987B\u5168\u5927\u5199",
        lowercase: "`#{value}` \u5FC5\u987B\u5168\u5C0F\u5199"
      },
      object: {
        deepEqual: "`#{field}` \u4E0D\u7B49\u4E8E\u671F\u671B\u503C",
        hasKeys: "`#{field}` \u4E0D\u5305\u542B\u5FC5\u987B\u5B57\u6BB5",
        empty: "`#{field}` \u4E0D\u662F\u5BF9\u8C61"
      },
      boolean: {
        true: "\u671F\u671B\u662F `true`",
        false: "\u671F\u671B\u662F `false`"
      }
    }
  }
};
const LOCALE = ref("zh-CN");
const I18N_MESSAGES = reactive({
  "zh-CN": lang
});
const useI18n = () => {
  const configProvider = inject(configProviderInjectionKey, void 0);
  const i18nMessage = computed(() => {
    var _a;
    return (_a = configProvider == null ? void 0 : configProvider.locale) != null ? _a : I18N_MESSAGES[LOCALE.value];
  });
  const locale = computed(() => i18nMessage.value.locale);
  const transform = (key, ...args) => {
    const keyArray = key.split(".");
    let temp = i18nMessage.value;
    for (const keyItem of keyArray) {
      if (!temp[keyItem]) {
        return key;
      }
      temp = temp[keyItem];
    }
    if (isString$1(temp)) {
      if (args.length > 0) {
        return temp.replace(/{(\d+)}/g, (sub, index2) => {
          var _a;
          return (_a = args[index2]) != null ? _a : sub;
        });
      }
      return temp;
    }
    return temp;
  };
  return {
    i18nMessage,
    locale,
    t: transform
  };
};
var __defProp$b = Object.defineProperty;
var __defProps$3 = Object.defineProperties;
var __getOwnPropDescs$3 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$b = Object.getOwnPropertySymbols;
var __hasOwnProp$b = Object.prototype.hasOwnProperty;
var __propIsEnum$b = Object.prototype.propertyIsEnumerable;
var __defNormalProp$b = (obj, key, value) => key in obj ? __defProp$b(obj, key, {
  enumerable: true,
  configurable: true,
  writable: true,
  value
}) : obj[key] = value;
var __spreadValues$b = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$b.call(b, prop))
      __defNormalProp$b(a, prop, b[prop]);
  if (__getOwnPropSymbols$b)
    for (var prop of __getOwnPropSymbols$b(b)) {
      if (__propIsEnum$b.call(b, prop))
        __defNormalProp$b(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$3 = (a, b) => __defProps$3(a, __getOwnPropDescs$3(b));
const COMPONENT_PREFIX = "A";
const CLASS_PREFIX = "arco";
const GLOBAL_CONFIG_NAME = "$arco";
const getComponentPrefix = (options) => {
  var _a;
  return (_a = options == null ? void 0 : options.componentPrefix) != null ? _a : COMPONENT_PREFIX;
};
const setGlobalConfig = (app, options) => {
  var _a;
  if (options && options.classPrefix) {
    app.config.globalProperties[GLOBAL_CONFIG_NAME] = __spreadProps$3(__spreadValues$b({}, (_a = app.config.globalProperties[GLOBAL_CONFIG_NAME]) != null ? _a : {}), {
      classPrefix: options.classPrefix
    });
  }
};
const getPrefixCls = (componentName) => {
  var _a, _b, _c;
  const instance = getCurrentInstance();
  const configProvider = inject(configProviderInjectionKey, void 0);
  const prefix = (_c = (_b = configProvider == null ? void 0 : configProvider.prefixCls) != null ? _b : (_a = instance == null ? void 0 : instance.appContext.config.globalProperties[GLOBAL_CONFIG_NAME]) == null ? void 0 : _a.classPrefix) != null ? _c : CLASS_PREFIX;
  if (componentName) {
    return `${prefix}-${componentName}`;
  }
  return prefix;
};
var MapShim = function() {
  if (typeof Map !== "undefined") {
    return Map;
  }
  function getIndex(arr, key) {
    var result = -1;
    arr.some(function(entry, index2) {
      if (entry[0] === key) {
        result = index2;
        return true;
      }
      return false;
    });
    return result;
  }
  return function() {
    function class_1() {
      this.__entries__ = [];
    }
    Object.defineProperty(class_1.prototype, "size", {
      get: function() {
        return this.__entries__.length;
      },
      enumerable: true,
      configurable: true
    });
    class_1.prototype.get = function(key) {
      var index2 = getIndex(this.__entries__, key);
      var entry = this.__entries__[index2];
      return entry && entry[1];
    };
    class_1.prototype.set = function(key, value) {
      var index2 = getIndex(this.__entries__, key);
      if (~index2) {
        this.__entries__[index2][1] = value;
      } else {
        this.__entries__.push([key, value]);
      }
    };
    class_1.prototype.delete = function(key) {
      var entries = this.__entries__;
      var index2 = getIndex(entries, key);
      if (~index2) {
        entries.splice(index2, 1);
      }
    };
    class_1.prototype.has = function(key) {
      return !!~getIndex(this.__entries__, key);
    };
    class_1.prototype.clear = function() {
      this.__entries__.splice(0);
    };
    class_1.prototype.forEach = function(callback, ctx) {
      if (ctx === void 0) {
        ctx = null;
      }
      for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
        var entry = _a[_i];
        callback.call(ctx, entry[1], entry[0]);
      }
    };
    return class_1;
  }();
}();
var isBrowser = typeof window !== "undefined" && typeof document !== "undefined" && window.document === document;
var global$1 = function() {
  if (typeof global !== "undefined" && global.Math === Math) {
    return global;
  }
  if (typeof self !== "undefined" && self.Math === Math) {
    return self;
  }
  if (typeof window !== "undefined" && window.Math === Math) {
    return window;
  }
  return Function("return this")();
}();
var requestAnimationFrame$1 = function() {
  if (typeof requestAnimationFrame === "function") {
    return requestAnimationFrame.bind(global$1);
  }
  return function(callback) {
    return setTimeout(function() {
      return callback(Date.now());
    }, 1e3 / 60);
  };
}();
var trailingTimeout = 2;
function throttle(callback, delay) {
  var leadingCall = false, trailingCall = false, lastCallTime = 0;
  function resolvePending() {
    if (leadingCall) {
      leadingCall = false;
      callback();
    }
    if (trailingCall) {
      proxy();
    }
  }
  function timeoutCallback() {
    requestAnimationFrame$1(resolvePending);
  }
  function proxy() {
    var timeStamp = Date.now();
    if (leadingCall) {
      if (timeStamp - lastCallTime < trailingTimeout) {
        return;
      }
      trailingCall = true;
    } else {
      leadingCall = true;
      trailingCall = false;
      setTimeout(timeoutCallback, delay);
    }
    lastCallTime = timeStamp;
  }
  return proxy;
}
var REFRESH_DELAY = 20;
var transitionKeys = ["top", "right", "bottom", "left", "width", "height", "size", "weight"];
var mutationObserverSupported = typeof MutationObserver !== "undefined";
var ResizeObserverController = function() {
  function ResizeObserverController2() {
    this.connected_ = false;
    this.mutationEventsAdded_ = false;
    this.mutationsObserver_ = null;
    this.observers_ = [];
    this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
    this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
  }
  ResizeObserverController2.prototype.addObserver = function(observer) {
    if (!~this.observers_.indexOf(observer)) {
      this.observers_.push(observer);
    }
    if (!this.connected_) {
      this.connect_();
    }
  };
  ResizeObserverController2.prototype.removeObserver = function(observer) {
    var observers2 = this.observers_;
    var index2 = observers2.indexOf(observer);
    if (~index2) {
      observers2.splice(index2, 1);
    }
    if (!observers2.length && this.connected_) {
      this.disconnect_();
    }
  };
  ResizeObserverController2.prototype.refresh = function() {
    var changesDetected = this.updateObservers_();
    if (changesDetected) {
      this.refresh();
    }
  };
  ResizeObserverController2.prototype.updateObservers_ = function() {
    var activeObservers = this.observers_.filter(function(observer) {
      return observer.gatherActive(), observer.hasActive();
    });
    activeObservers.forEach(function(observer) {
      return observer.broadcastActive();
    });
    return activeObservers.length > 0;
  };
  ResizeObserverController2.prototype.connect_ = function() {
    if (!isBrowser || this.connected_) {
      return;
    }
    document.addEventListener("transitionend", this.onTransitionEnd_);
    window.addEventListener("resize", this.refresh);
    if (mutationObserverSupported) {
      this.mutationsObserver_ = new MutationObserver(this.refresh);
      this.mutationsObserver_.observe(document, {
        attributes: true,
        childList: true,
        characterData: true,
        subtree: true
      });
    } else {
      document.addEventListener("DOMSubtreeModified", this.refresh);
      this.mutationEventsAdded_ = true;
    }
    this.connected_ = true;
  };
  ResizeObserverController2.prototype.disconnect_ = function() {
    if (!isBrowser || !this.connected_) {
      return;
    }
    document.removeEventListener("transitionend", this.onTransitionEnd_);
    window.removeEventListener("resize", this.refresh);
    if (this.mutationsObserver_) {
      this.mutationsObserver_.disconnect();
    }
    if (this.mutationEventsAdded_) {
      document.removeEventListener("DOMSubtreeModified", this.refresh);
    }
    this.mutationsObserver_ = null;
    this.mutationEventsAdded_ = false;
    this.connected_ = false;
  };
  ResizeObserverController2.prototype.onTransitionEnd_ = function(_a) {
    var _b = _a.propertyName, propertyName = _b === void 0 ? "" : _b;
    var isReflowProperty = transitionKeys.some(function(key) {
      return !!~propertyName.indexOf(key);
    });
    if (isReflowProperty) {
      this.refresh();
    }
  };
  ResizeObserverController2.getInstance = function() {
    if (!this.instance_) {
      this.instance_ = new ResizeObserverController2();
    }
    return this.instance_;
  };
  ResizeObserverController2.instance_ = null;
  return ResizeObserverController2;
}();
var defineConfigurable = function(target2, props) {
  for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
    var key = _a[_i];
    Object.defineProperty(target2, key, {
      value: props[key],
      enumerable: false,
      writable: false,
      configurable: true
    });
  }
  return target2;
};
var getWindowOf = function(target2) {
  var ownerGlobal = target2 && target2.ownerDocument && target2.ownerDocument.defaultView;
  return ownerGlobal || global$1;
};
var emptyRect = createRectInit(0, 0, 0, 0);
function toFloat(value) {
  return parseFloat(value) || 0;
}
function getBordersSize(styles) {
  var positions = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    positions[_i - 1] = arguments[_i];
  }
  return positions.reduce(function(size, position) {
    var value = styles["border-" + position + "-width"];
    return size + toFloat(value);
  }, 0);
}
function getPaddings(styles) {
  var positions = ["top", "right", "bottom", "left"];
  var paddings = {};
  for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
    var position = positions_1[_i];
    var value = styles["padding-" + position];
    paddings[position] = toFloat(value);
  }
  return paddings;
}
function getSVGContentRect(target2) {
  var bbox = target2.getBBox();
  return createRectInit(0, 0, bbox.width, bbox.height);
}
function getHTMLElementContentRect(target2) {
  var clientWidth = target2.clientWidth, clientHeight = target2.clientHeight;
  if (!clientWidth && !clientHeight) {
    return emptyRect;
  }
  var styles = getWindowOf(target2).getComputedStyle(target2);
  var paddings = getPaddings(styles);
  var horizPad = paddings.left + paddings.right;
  var vertPad = paddings.top + paddings.bottom;
  var width = toFloat(styles.width), height = toFloat(styles.height);
  if (styles.boxSizing === "border-box") {
    if (Math.round(width + horizPad) !== clientWidth) {
      width -= getBordersSize(styles, "left", "right") + horizPad;
    }
    if (Math.round(height + vertPad) !== clientHeight) {
      height -= getBordersSize(styles, "top", "bottom") + vertPad;
    }
  }
  if (!isDocumentElement(target2)) {
    var vertScrollbar = Math.round(width + horizPad) - clientWidth;
    var horizScrollbar = Math.round(height + vertPad) - clientHeight;
    if (Math.abs(vertScrollbar) !== 1) {
      width -= vertScrollbar;
    }
    if (Math.abs(horizScrollbar) !== 1) {
      height -= horizScrollbar;
    }
  }
  return createRectInit(paddings.left, paddings.top, width, height);
}
var isSVGGraphicsElement = function() {
  if (typeof SVGGraphicsElement !== "undefined") {
    return function(target2) {
      return target2 instanceof getWindowOf(target2).SVGGraphicsElement;
    };
  }
  return function(target2) {
    return target2 instanceof getWindowOf(target2).SVGElement && typeof target2.getBBox === "function";
  };
}();
function isDocumentElement(target2) {
  return target2 === getWindowOf(target2).document.documentElement;
}
function getContentRect(target2) {
  if (!isBrowser) {
    return emptyRect;
  }
  if (isSVGGraphicsElement(target2)) {
    return getSVGContentRect(target2);
  }
  return getHTMLElementContentRect(target2);
}
function createReadOnlyRect(_a) {
  var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
  var Constr = typeof DOMRectReadOnly !== "undefined" ? DOMRectReadOnly : Object;
  var rect = Object.create(Constr.prototype);
  defineConfigurable(rect, {
    x,
    y,
    width,
    height,
    top: y,
    right: x + width,
    bottom: height + y,
    left: x
  });
  return rect;
}
function createRectInit(x, y, width, height) {
  return {
    x,
    y,
    width,
    height
  };
}
var ResizeObservation = function() {
  function ResizeObservation2(target2) {
    this.broadcastWidth = 0;
    this.broadcastHeight = 0;
    this.contentRect_ = createRectInit(0, 0, 0, 0);
    this.target = target2;
  }
  ResizeObservation2.prototype.isActive = function() {
    var rect = getContentRect(this.target);
    this.contentRect_ = rect;
    return rect.width !== this.broadcastWidth || rect.height !== this.broadcastHeight;
  };
  ResizeObservation2.prototype.broadcastRect = function() {
    var rect = this.contentRect_;
    this.broadcastWidth = rect.width;
    this.broadcastHeight = rect.height;
    return rect;
  };
  return ResizeObservation2;
}();
var ResizeObserverEntry = function() {
  function ResizeObserverEntry2(target2, rectInit) {
    var contentRect = createReadOnlyRect(rectInit);
    defineConfigurable(this, {
      target: target2,
      contentRect
    });
  }
  return ResizeObserverEntry2;
}();
var ResizeObserverSPI = function() {
  function ResizeObserverSPI2(callback, controller, callbackCtx) {
    this.activeObservations_ = [];
    this.observations_ = new MapShim();
    if (typeof callback !== "function") {
      throw new TypeError("The callback provided as parameter 1 is not a function.");
    }
    this.callback_ = callback;
    this.controller_ = controller;
    this.callbackCtx_ = callbackCtx;
  }
  ResizeObserverSPI2.prototype.observe = function(target2) {
    if (!arguments.length) {
      throw new TypeError("1 argument required, but only 0 present.");
    }
    if (typeof Element === "undefined" || !(Element instanceof Object)) {
      return;
    }
    if (!(target2 instanceof getWindowOf(target2).Element)) {
      throw new TypeError('parameter 1 is not of type "Element".');
    }
    var observations = this.observations_;
    if (observations.has(target2)) {
      return;
    }
    observations.set(target2, new ResizeObservation(target2));
    this.controller_.addObserver(this);
    this.controller_.refresh();
  };
  ResizeObserverSPI2.prototype.unobserve = function(target2) {
    if (!arguments.length) {
      throw new TypeError("1 argument required, but only 0 present.");
    }
    if (typeof Element === "undefined" || !(Element instanceof Object)) {
      return;
    }
    if (!(target2 instanceof getWindowOf(target2).Element)) {
      throw new TypeError('parameter 1 is not of type "Element".');
    }
    var observations = this.observations_;
    if (!observations.has(target2)) {
      return;
    }
    observations.delete(target2);
    if (!observations.size) {
      this.controller_.removeObserver(this);
    }
  };
  ResizeObserverSPI2.prototype.disconnect = function() {
    this.clearActive();
    this.observations_.clear();
    this.controller_.removeObserver(this);
  };
  ResizeObserverSPI2.prototype.gatherActive = function() {
    var _this = this;
    this.clearActive();
    this.observations_.forEach(function(observation) {
      if (observation.isActive()) {
        _this.activeObservations_.push(observation);
      }
    });
  };
  ResizeObserverSPI2.prototype.broadcastActive = function() {
    if (!this.hasActive()) {
      return;
    }
    var ctx = this.callbackCtx_;
    var entries = this.activeObservations_.map(function(observation) {
      return new ResizeObserverEntry(observation.target, observation.broadcastRect());
    });
    this.callback_.call(ctx, entries, ctx);
    this.clearActive();
  };
  ResizeObserverSPI2.prototype.clearActive = function() {
    this.activeObservations_.splice(0);
  };
  ResizeObserverSPI2.prototype.hasActive = function() {
    return this.activeObservations_.length > 0;
  };
  return ResizeObserverSPI2;
}();
var observers = typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : new MapShim();
var ResizeObserver$1 = function() {
  function ResizeObserver2(callback) {
    if (!(this instanceof ResizeObserver2)) {
      throw new TypeError("Cannot call a class as a function.");
    }
    if (!arguments.length) {
      throw new TypeError("1 argument required, but only 0 present.");
    }
    var controller = ResizeObserverController.getInstance();
    var observer = new ResizeObserverSPI(callback, controller, this);
    observers.set(this, observer);
  }
  return ResizeObserver2;
}();
["observe", "unobserve", "disconnect"].forEach(function(method) {
  ResizeObserver$1.prototype[method] = function() {
    var _a;
    return (_a = observers.get(this))[method].apply(_a, arguments);
  };
});
var index$1 = function() {
  if (typeof global$1.ResizeObserver !== "undefined") {
    return global$1.ResizeObserver;
  }
  return ResizeObserver$1;
}();
var ShapeFlags;
(function(ShapeFlags2) {
  ShapeFlags2[ShapeFlags2["ELEMENT"] = 1] = "ELEMENT";
  ShapeFlags2[ShapeFlags2["FUNCTIONAL_COMPONENT"] = 2] = "FUNCTIONAL_COMPONENT";
  ShapeFlags2[ShapeFlags2["STATEFUL_COMPONENT"] = 4] = "STATEFUL_COMPONENT";
  ShapeFlags2[ShapeFlags2["COMPONENT"] = 6] = "COMPONENT";
  ShapeFlags2[ShapeFlags2["TEXT_CHILDREN"] = 8] = "TEXT_CHILDREN";
  ShapeFlags2[ShapeFlags2["ARRAY_CHILDREN"] = 16] = "ARRAY_CHILDREN";
  ShapeFlags2[ShapeFlags2["SLOTS_CHILDREN"] = 32] = "SLOTS_CHILDREN";
  ShapeFlags2[ShapeFlags2["TELEPORT"] = 64] = "TELEPORT";
  ShapeFlags2[ShapeFlags2["SUSPENSE"] = 128] = "SUSPENSE";
  ShapeFlags2[ShapeFlags2["COMPONENT_SHOULD_KEEP_ALIVE"] = 256] = "COMPONENT_SHOULD_KEEP_ALIVE";
  ShapeFlags2[ShapeFlags2["COMPONENT_KEPT_ALIVE"] = 512] = "COMPONENT_KEPT_ALIVE";
})(ShapeFlags || (ShapeFlags = {}));
var PatchFlags;
(function(PatchFlags2) {
  PatchFlags2[PatchFlags2["TEXT"] = 1] = "TEXT";
  PatchFlags2[PatchFlags2["CLASS"] = 2] = "CLASS";
  PatchFlags2[PatchFlags2["STYLE"] = 4] = "STYLE";
  PatchFlags2[PatchFlags2["PROPS"] = 8] = "PROPS";
  PatchFlags2[PatchFlags2["FULL_PROPS"] = 16] = "FULL_PROPS";
  PatchFlags2[PatchFlags2["HYDRATE_EVENTS"] = 32] = "HYDRATE_EVENTS";
  PatchFlags2[PatchFlags2["STABLE_FRAGMENT"] = 64] = "STABLE_FRAGMENT";
  PatchFlags2[PatchFlags2["KEYED_FRAGMENT"] = 128] = "KEYED_FRAGMENT";
  PatchFlags2[PatchFlags2["UNKEYED_FRAGMENT"] = 256] = "UNKEYED_FRAGMENT";
  PatchFlags2[PatchFlags2["NEED_PATCH"] = 512] = "NEED_PATCH";
  PatchFlags2[PatchFlags2["DYNAMIC_SLOTS"] = 1024] = "DYNAMIC_SLOTS";
  PatchFlags2[PatchFlags2["DEV_ROOT_FRAGMENT"] = 2048] = "DEV_ROOT_FRAGMENT";
  PatchFlags2[PatchFlags2["HOISTED"] = -1] = "HOISTED";
  PatchFlags2[PatchFlags2["BAIL"] = -2] = "BAIL";
})(PatchFlags || (PatchFlags = {}));
const isElement = (vn) => {
  return Boolean(vn && vn.shapeFlag & 1);
};
const isComponent = (vn, type) => {
  return Boolean(vn && vn.shapeFlag & 6);
};
const isArrayChildren = (vn, children) => {
  return Boolean(vn && vn.shapeFlag & 16);
};
const isEmptyChildren = (children) => {
  if (!children) {
    return true;
  }
  for (const item of children) {
    if (item.children) {
      return false;
    }
  }
  return true;
};
const mergeFirstChild = (children, extraProps) => {
  if (children && children.length > 0) {
    for (let i2 = 0; i2 < children.length; i2++) {
      const child = children[i2];
      if (isElement(child) || isComponent(child)) {
        const props = isFunction$1(extraProps) ? extraProps(child) : extraProps;
        children[i2] = cloneVNode(child, props, true);
        return true;
      }
      const _children = getChildrenArray(child);
      if (_children && _children.length > 0) {
        const result = mergeFirstChild(_children, extraProps);
        if (result)
          return true;
      }
    }
  }
  return false;
};
const getChildrenArray = (vn) => {
  if (isArrayChildren(vn, vn.children)) {
    return vn.children;
  }
  if (isArray$1(vn)) {
    return vn;
  }
  return void 0;
};
const getFirstElementFromVNode = (vn) => {
  var _a, _b;
  if (isElement(vn)) {
    return vn.el;
  }
  if (isComponent(vn)) {
    if (((_a = vn.el) == null ? void 0 : _a.nodeType) === 1) {
      return vn.el;
    }
    if ((_b = vn.component) == null ? void 0 : _b.subTree) {
      const ele = getFirstElementFromVNode(vn.component.subTree);
      if (ele)
        return ele;
    }
  } else {
    const children = getChildrenArray(vn);
    return getFirstElementFromChildren(children);
  }
  return void 0;
};
const getFirstElementFromChildren = (children) => {
  if (children && children.length > 0) {
    for (const child of children) {
      const element = getFirstElementFromVNode(child);
      if (element)
        return element;
    }
  }
  return void 0;
};
const getSlotFunction = (param) => {
  if (param) {
    if (isFunction$1(param))
      return param;
    return () => param;
  }
  return void 0;
};
const target = typeof window === "undefined" ? global : window;
const raf = target.requestAnimationFrame;
const caf = target.cancelAnimationFrame;
function throttleByRaf(cb) {
  let timer = 0;
  const throttle2 = (...args) => {
    if (timer) {
      caf(timer);
    }
    timer = raf(() => {
      cb(...args);
      timer = 0;
    });
  };
  throttle2.cancel = () => {
    caf(timer);
    timer = 0;
  };
  return throttle2;
}
const NOOP = () => {
  return void 0;
};
const getDocumentSize = () => {
  const {
    body
  } = document;
  const html = document.documentElement;
  let topBody;
  try {
    const topWindow = window.top || window.self || window;
    topBody = topWindow.document.body;
  } catch {
  }
  return {
    height: Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight, (topBody == null ? void 0 : topBody.scrollHeight) || 0, (topBody == null ? void 0 : topBody.clientHeight) || 0),
    width: Math.max(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth, (topBody == null ? void 0 : topBody.scrollWidth) || 0, (topBody == null ? void 0 : topBody.clientWidth) || 0)
  };
};
const isServerRendering = (() => {
  try {
    return !(typeof window !== "undefined" && document !== void 0);
  } catch (e2) {
    return true;
  }
})();
const on = (() => {
  if (isServerRendering) {
    return NOOP;
  }
  return (element, event, handler, options = false) => {
    element.addEventListener(event, handler, options);
  };
})();
const off = (() => {
  if (isServerRendering) {
    return NOOP;
  }
  return (element, type, handler, options = false) => {
    element.removeEventListener(type, handler, options);
  };
})();
const contains = (root, ele) => {
  if (!root || !ele) {
    return false;
  }
  let node = ele;
  while (node) {
    if (node === root) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
};
const getOverlay = (type) => {
  const popper = document.createElement("div");
  popper.setAttribute("class", `arco-overlay arco-overlay-${type}`);
  return popper;
};
const querySelector = (selectors, container) => {
  var _a;
  if (isServerRendering) {
    return NOOP();
  }
  return (_a = (container != null ? container : document).querySelector(selectors)) != null ? _a : void 0;
};
const getElement = (target2, container) => {
  if (isString$1(target2)) {
    const selector = target2[0] === "#" ? `[id='${target2.slice(1)}']` : target2;
    return querySelector(selector, container);
  }
  return target2;
};
const isScroll = (element) => {
  return element.tagName === "BODY" ? document.documentElement.scrollHeight > window.innerHeight : element.scrollHeight > element.offsetHeight;
};
const getScrollBarWidth = (element) => {
  return element.tagName === "BODY" ? window.innerWidth - getDocumentSize().width : element.offsetWidth - element.clientWidth;
};
var _export_sfc$1 = (sfc, props) => {
  for (const [key, val] of props) {
    sfc[key] = val;
  }
  return sfc;
};
const _sfc_main$r = defineComponent({
  name: "IconHover",
  props: {
    prefix: {
      type: String
    },
    size: {
      type: String,
      default: "medium"
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const prefixCls = getPrefixCls("icon-hover");
    return {
      prefixCls
    };
  }
});
function _sfc_render$q(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", {
    class: normalizeClass([_ctx.prefixCls, {
      [`${_ctx.prefix}-icon-hover`]: _ctx.prefix,
      [`${_ctx.prefixCls}-size-${_ctx.size}`]: _ctx.size !== "medium",
      [`${_ctx.prefixCls}-disabled`]: _ctx.disabled
    }])
  }, [renderSlot(_ctx.$slots, "default")], 2);
}
var IconHover = /* @__PURE__ */ _export_sfc$1(_sfc_main$r, [["render", _sfc_render$q]]);
const _sfc_main$q = defineComponent({
  name: "IconClose",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (value) => {
        return ["butt", "round", "square"].includes(value);
      }
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (value) => {
        return ["arcs", "bevel", "miter", "miter-clip", "round"].includes(value);
      }
    },
    rotate: Number,
    spin: Boolean
  },
  emits: {
    click: (ev) => true
  },
  setup(props, {
    emit
  }) {
    const prefixCls = getPrefixCls("icon");
    const cls = computed(() => [prefixCls, `${prefixCls}-close`, {
      [`${prefixCls}-spin`]: props.spin
    }]);
    const innerStyle = computed(() => {
      const styles = {};
      if (props.size) {
        styles.fontSize = isNumber$1(props.size) ? `${props.size}px` : props.size;
      }
      if (props.rotate) {
        styles.transform = `rotate(${props.rotate}deg)`;
      }
      return styles;
    });
    const onClick = (ev) => {
      emit("click", ev);
    };
    return {
      cls,
      innerStyle,
      onClick
    };
  }
});
const _hoisted_1$f = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
const _hoisted_2$e = /* @__PURE__ */ createElementVNode("path", {
  d: "M9.857 9.858 24 24m0 0 14.142 14.142M24 24 38.142 9.858M24 24 9.857 38.142"
}, null, -1);
const _hoisted_3$d = [_hoisted_2$e];
function _sfc_render$p(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: normalizeClass(_ctx.cls),
    style: normalizeStyle(_ctx.innerStyle),
    "stroke-width": _ctx.strokeWidth,
    "stroke-linecap": _ctx.strokeLinecap,
    "stroke-linejoin": _ctx.strokeLinejoin,
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClick && _ctx.onClick(...args))
  }, _hoisted_3$d, 14, _hoisted_1$f);
}
var _IconClose = /* @__PURE__ */ _export_sfc$1(_sfc_main$q, [["render", _sfc_render$p]]);
const IconClose = Object.assign(_IconClose, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconClose.name, _IconClose);
  }
});
const _sfc_main$p = defineComponent({
  name: "IconInfoCircleFill",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (value) => {
        return ["butt", "round", "square"].includes(value);
      }
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (value) => {
        return ["arcs", "bevel", "miter", "miter-clip", "round"].includes(value);
      }
    },
    rotate: Number,
    spin: Boolean
  },
  emits: {
    click: (ev) => true
  },
  setup(props, {
    emit
  }) {
    const prefixCls = getPrefixCls("icon");
    const cls = computed(() => [prefixCls, `${prefixCls}-info-circle-fill`, {
      [`${prefixCls}-spin`]: props.spin
    }]);
    const innerStyle = computed(() => {
      const styles = {};
      if (props.size) {
        styles.fontSize = isNumber$1(props.size) ? `${props.size}px` : props.size;
      }
      if (props.rotate) {
        styles.transform = `rotate(${props.rotate}deg)`;
      }
      return styles;
    });
    const onClick = (ev) => {
      emit("click", ev);
    };
    return {
      cls,
      innerStyle,
      onClick
    };
  }
});
const _hoisted_1$e = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
const _hoisted_2$d = /* @__PURE__ */ createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm2-30a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2Zm0 17h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h1v-8a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v11Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1);
const _hoisted_3$c = [_hoisted_2$d];
function _sfc_render$o(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: normalizeClass(_ctx.cls),
    style: normalizeStyle(_ctx.innerStyle),
    "stroke-width": _ctx.strokeWidth,
    "stroke-linecap": _ctx.strokeLinecap,
    "stroke-linejoin": _ctx.strokeLinejoin,
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClick && _ctx.onClick(...args))
  }, _hoisted_3$c, 14, _hoisted_1$e);
}
var _IconInfoCircleFill = /* @__PURE__ */ _export_sfc$1(_sfc_main$p, [["render", _sfc_render$o]]);
const IconInfoCircleFill = Object.assign(_IconInfoCircleFill, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconInfoCircleFill.name, _IconInfoCircleFill);
  }
});
const _sfc_main$o = defineComponent({
  name: "IconCheckCircleFill",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (value) => {
        return ["butt", "round", "square"].includes(value);
      }
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (value) => {
        return ["arcs", "bevel", "miter", "miter-clip", "round"].includes(value);
      }
    },
    rotate: Number,
    spin: Boolean
  },
  emits: {
    click: (ev) => true
  },
  setup(props, {
    emit
  }) {
    const prefixCls = getPrefixCls("icon");
    const cls = computed(() => [prefixCls, `${prefixCls}-check-circle-fill`, {
      [`${prefixCls}-spin`]: props.spin
    }]);
    const innerStyle = computed(() => {
      const styles = {};
      if (props.size) {
        styles.fontSize = isNumber$1(props.size) ? `${props.size}px` : props.size;
      }
      if (props.rotate) {
        styles.transform = `rotate(${props.rotate}deg)`;
      }
      return styles;
    });
    const onClick = (ev) => {
      emit("click", ev);
    };
    return {
      cls,
      innerStyle,
      onClick
    };
  }
});
const _hoisted_1$d = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
const _hoisted_2$c = /* @__PURE__ */ createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm10.207-24.379a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0L22 26.172l-4.878-4.88a1 1 0 0 0-1.415 0l-1.414 1.415a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414 0l11.5-11.5Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1);
const _hoisted_3$b = [_hoisted_2$c];
function _sfc_render$n(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: normalizeClass(_ctx.cls),
    style: normalizeStyle(_ctx.innerStyle),
    "stroke-width": _ctx.strokeWidth,
    "stroke-linecap": _ctx.strokeLinecap,
    "stroke-linejoin": _ctx.strokeLinejoin,
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClick && _ctx.onClick(...args))
  }, _hoisted_3$b, 14, _hoisted_1$d);
}
var _IconCheckCircleFill = /* @__PURE__ */ _export_sfc$1(_sfc_main$o, [["render", _sfc_render$n]]);
const IconCheckCircleFill = Object.assign(_IconCheckCircleFill, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconCheckCircleFill.name, _IconCheckCircleFill);
  }
});
const _sfc_main$n = defineComponent({
  name: "IconExclamationCircleFill",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (value) => {
        return ["butt", "round", "square"].includes(value);
      }
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (value) => {
        return ["arcs", "bevel", "miter", "miter-clip", "round"].includes(value);
      }
    },
    rotate: Number,
    spin: Boolean
  },
  emits: {
    click: (ev) => true
  },
  setup(props, {
    emit
  }) {
    const prefixCls = getPrefixCls("icon");
    const cls = computed(() => [prefixCls, `${prefixCls}-exclamation-circle-fill`, {
      [`${prefixCls}-spin`]: props.spin
    }]);
    const innerStyle = computed(() => {
      const styles = {};
      if (props.size) {
        styles.fontSize = isNumber$1(props.size) ? `${props.size}px` : props.size;
      }
      if (props.rotate) {
        styles.transform = `rotate(${props.rotate}deg)`;
      }
      return styles;
    });
    const onClick = (ev) => {
      emit("click", ev);
    };
    return {
      cls,
      innerStyle,
      onClick
    };
  }
});
const _hoisted_1$c = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
const _hoisted_2$b = /* @__PURE__ */ createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm-2-11a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2Zm4-18a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V15Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1);
const _hoisted_3$a = [_hoisted_2$b];
function _sfc_render$m(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: normalizeClass(_ctx.cls),
    style: normalizeStyle(_ctx.innerStyle),
    "stroke-width": _ctx.strokeWidth,
    "stroke-linecap": _ctx.strokeLinecap,
    "stroke-linejoin": _ctx.strokeLinejoin,
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClick && _ctx.onClick(...args))
  }, _hoisted_3$a, 14, _hoisted_1$c);
}
var _IconExclamationCircleFill = /* @__PURE__ */ _export_sfc$1(_sfc_main$n, [["render", _sfc_render$m]]);
const IconExclamationCircleFill = Object.assign(_IconExclamationCircleFill, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconExclamationCircleFill.name, _IconExclamationCircleFill);
  }
});
const _sfc_main$m = defineComponent({
  name: "IconCloseCircleFill",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (value) => {
        return ["butt", "round", "square"].includes(value);
      }
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (value) => {
        return ["arcs", "bevel", "miter", "miter-clip", "round"].includes(value);
      }
    },
    rotate: Number,
    spin: Boolean
  },
  emits: {
    click: (ev) => true
  },
  setup(props, {
    emit
  }) {
    const prefixCls = getPrefixCls("icon");
    const cls = computed(() => [prefixCls, `${prefixCls}-close-circle-fill`, {
      [`${prefixCls}-spin`]: props.spin
    }]);
    const innerStyle = computed(() => {
      const styles = {};
      if (props.size) {
        styles.fontSize = isNumber$1(props.size) ? `${props.size}px` : props.size;
      }
      if (props.rotate) {
        styles.transform = `rotate(${props.rotate}deg)`;
      }
      return styles;
    });
    const onClick = (ev) => {
      emit("click", ev);
    };
    return {
      cls,
      innerStyle,
      onClick
    };
  }
});
const _hoisted_1$b = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
const _hoisted_2$a = /* @__PURE__ */ createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm4.955-27.771-4.95 4.95-4.95-4.95a1 1 0 0 0-1.414 0l-1.414 1.414a1 1 0 0 0 0 1.414l4.95 4.95-4.95 4.95a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l4.95-4.95 4.95 4.95a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-4.95-4.95 4.95-4.95a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1);
const _hoisted_3$9 = [_hoisted_2$a];
function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: normalizeClass(_ctx.cls),
    style: normalizeStyle(_ctx.innerStyle),
    "stroke-width": _ctx.strokeWidth,
    "stroke-linecap": _ctx.strokeLinecap,
    "stroke-linejoin": _ctx.strokeLinejoin,
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClick && _ctx.onClick(...args))
  }, _hoisted_3$9, 14, _hoisted_1$b);
}
var _IconCloseCircleFill = /* @__PURE__ */ _export_sfc$1(_sfc_main$m, [["render", _sfc_render$l]]);
const IconCloseCircleFill = Object.assign(_IconCloseCircleFill, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconCloseCircleFill.name, _IconCloseCircleFill);
  }
});
function t(t2) {
  return "object" == typeof t2 && null != t2 && 1 === t2.nodeType;
}
function e(t2, e2) {
  return (!e2 || "hidden" !== t2) && "visible" !== t2 && "clip" !== t2;
}
function n(t2, n2) {
  if (t2.clientHeight < t2.scrollHeight || t2.clientWidth < t2.scrollWidth) {
    var r2 = getComputedStyle(t2, null);
    return e(r2.overflowY, n2) || e(r2.overflowX, n2) || function(t3) {
      var e2 = function(t4) {
        if (!t4.ownerDocument || !t4.ownerDocument.defaultView)
          return null;
        try {
          return t4.ownerDocument.defaultView.frameElement;
        } catch (t5) {
          return null;
        }
      }(t3);
      return !!e2 && (e2.clientHeight < t3.scrollHeight || e2.clientWidth < t3.scrollWidth);
    }(t2);
  }
  return false;
}
function r(t2, e2, n2, r2, i2, o, l, d) {
  return o < t2 && l > e2 || o > t2 && l < e2 ? 0 : o <= t2 && d <= n2 || l >= e2 && d >= n2 ? o - t2 - r2 : l > e2 && d < n2 || o < t2 && d > n2 ? l - e2 + i2 : 0;
}
var i = function(e2, i2) {
  var o = window, l = i2.scrollMode, d = i2.block, f = i2.inline, h = i2.boundary, u = i2.skipOverflowHiddenElements, s = "function" == typeof h ? h : function(t2) {
    return t2 !== h;
  };
  if (!t(e2))
    throw new TypeError("Invalid target");
  for (var a, c, g = document.scrollingElement || document.documentElement, p = [], m = e2; t(m) && s(m); ) {
    if ((m = null == (c = (a = m).parentElement) ? a.getRootNode().host || null : c) === g) {
      p.push(m);
      break;
    }
    null != m && m === document.body && n(m) && !n(document.documentElement) || null != m && n(m, u) && p.push(m);
  }
  for (var w = o.visualViewport ? o.visualViewport.width : innerWidth, v = o.visualViewport ? o.visualViewport.height : innerHeight, W = window.scrollX || pageXOffset, H = window.scrollY || pageYOffset, b = e2.getBoundingClientRect(), y = b.height, E = b.width, M = b.top, V = b.right, x = b.bottom, I = b.left, C = "start" === d || "nearest" === d ? M : "end" === d ? x : M + y / 2, R = "center" === f ? I + E / 2 : "end" === f ? V : I, T = [], k = 0; k < p.length; k++) {
    var B = p[k], D = B.getBoundingClientRect(), O = D.height, X = D.width, Y = D.top, L = D.right, S = D.bottom, j = D.left;
    if ("if-needed" === l && M >= 0 && I >= 0 && x <= v && V <= w && M >= Y && x <= S && I >= j && V <= L)
      return T;
    var N = getComputedStyle(B), q = parseInt(N.borderLeftWidth, 10), z = parseInt(N.borderTopWidth, 10), A = parseInt(N.borderRightWidth, 10), F = parseInt(N.borderBottomWidth, 10), G = 0, J = 0, K = "offsetWidth" in B ? B.offsetWidth - B.clientWidth - q - A : 0, P = "offsetHeight" in B ? B.offsetHeight - B.clientHeight - z - F : 0, Q = "offsetWidth" in B ? 0 === B.offsetWidth ? 0 : X / B.offsetWidth : 0, U = "offsetHeight" in B ? 0 === B.offsetHeight ? 0 : O / B.offsetHeight : 0;
    if (g === B)
      G = "start" === d ? C : "end" === d ? C - v : "nearest" === d ? r(H, H + v, v, z, F, H + C, H + C + y, y) : C - v / 2, J = "start" === f ? R : "center" === f ? R - w / 2 : "end" === f ? R - w : r(W, W + w, w, q, A, W + R, W + R + E, E), G = Math.max(0, G + H), J = Math.max(0, J + W);
    else {
      G = "start" === d ? C - Y - z : "end" === d ? C - S + F + P : "nearest" === d ? r(Y, S, O, z, F + P, C, C + y, y) : C - (Y + O / 2) + P / 2, J = "start" === f ? R - j - q : "center" === f ? R - (j + X / 2) + K / 2 : "end" === f ? R - L + A + K : r(j, L, X, q, A + K, R, R + E, E);
      var Z = B.scrollLeft, $ = B.scrollTop;
      C += $ - (G = Math.max(0, Math.min($ + G / U, B.scrollHeight - O / U + P))), R += Z - (J = Math.max(0, Math.min(Z + J / Q, B.scrollWidth - X / Q + K)));
    }
    T.push({ el: B, top: G, left: J });
  }
  return T;
};
const MESSAGE_TYPES = ["info", "success", "warning", "error"];
const INPUT_EVENTS = ["onFocus", "onFocusin", "onFocusout", "onBlur", "onChange", "onBeforeinput", "onInput", "onReset", "onSubmit", "onInvalid", "onKeydown", "onKeypress", "onKeyup", "onCopy", "onCut", "onPaste", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onSelect", "autocomplete", "autofocus", "maxlength", "minlength", "name", "pattern", "readonly", "required"];
const _sfc_main$l = defineComponent({
  name: "IconLoading",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (value) => {
        return ["butt", "round", "square"].includes(value);
      }
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (value) => {
        return ["arcs", "bevel", "miter", "miter-clip", "round"].includes(value);
      }
    },
    rotate: Number,
    spin: Boolean
  },
  emits: {
    click: (ev) => true
  },
  setup(props, {
    emit
  }) {
    const prefixCls = getPrefixCls("icon");
    const cls = computed(() => [prefixCls, `${prefixCls}-loading`, {
      [`${prefixCls}-spin`]: props.spin
    }]);
    const innerStyle = computed(() => {
      const styles = {};
      if (props.size) {
        styles.fontSize = isNumber$1(props.size) ? `${props.size}px` : props.size;
      }
      if (props.rotate) {
        styles.transform = `rotate(${props.rotate}deg)`;
      }
      return styles;
    });
    const onClick = (ev) => {
      emit("click", ev);
    };
    return {
      cls,
      innerStyle,
      onClick
    };
  }
});
const _hoisted_1$a = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
const _hoisted_2$9 = /* @__PURE__ */ createElementVNode("path", {
  d: "M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6"
}, null, -1);
const _hoisted_3$8 = [_hoisted_2$9];
function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: normalizeClass(_ctx.cls),
    style: normalizeStyle(_ctx.innerStyle),
    "stroke-width": _ctx.strokeWidth,
    "stroke-linecap": _ctx.strokeLinecap,
    "stroke-linejoin": _ctx.strokeLinejoin,
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClick && _ctx.onClick(...args))
  }, _hoisted_3$8, 14, _hoisted_1$a);
}
var _IconLoading = /* @__PURE__ */ _export_sfc$1(_sfc_main$l, [["render", _sfc_render$k]]);
const IconLoading = Object.assign(_IconLoading, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconLoading.name, _IconLoading);
  }
});
const _sfc_main$k = defineComponent({
  name: "FeedbackIcon",
  components: {
    IconLoading,
    IconCheckCircleFill,
    IconExclamationCircleFill,
    IconCloseCircleFill
  },
  props: {
    type: {
      type: String
    }
  },
  setup(props) {
    const prefixCls = getPrefixCls("feedback-icon");
    const cls = computed(() => [prefixCls, `${prefixCls}-status-${props.type}`]);
    return {
      cls
    };
  }
});
function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_icon_loading = resolveComponent("icon-loading");
  const _component_icon_check_circle_fill = resolveComponent("icon-check-circle-fill");
  const _component_icon_exclamation_circle_fill = resolveComponent("icon-exclamation-circle-fill");
  const _component_icon_close_circle_fill = resolveComponent("icon-close-circle-fill");
  return openBlock(), createElementBlock("span", {
    class: normalizeClass(_ctx.cls)
  }, [_ctx.type === "validating" ? (openBlock(), createBlock(_component_icon_loading, {
    key: 0
  })) : _ctx.type === "success" ? (openBlock(), createBlock(_component_icon_check_circle_fill, {
    key: 1
  })) : _ctx.type === "warning" ? (openBlock(), createBlock(_component_icon_exclamation_circle_fill, {
    key: 2
  })) : _ctx.type === "error" ? (openBlock(), createBlock(_component_icon_close_circle_fill, {
    key: 3
  })) : createCommentVNode("v-if", true)], 2);
}
var FeedbackIcon = /* @__PURE__ */ _export_sfc$1(_sfc_main$k, [["render", _sfc_render$j]]);
const Enter = {
  key: "Enter",
  code: "Enter"
};
var __defProp$a = Object.defineProperty;
var __getOwnPropSymbols$a = Object.getOwnPropertySymbols;
var __hasOwnProp$a = Object.prototype.hasOwnProperty;
var __propIsEnum$a = Object.prototype.propertyIsEnumerable;
var __defNormalProp$a = (obj, key, value) => key in obj ? __defProp$a(obj, key, {
  enumerable: true,
  configurable: true,
  writable: true,
  value
}) : obj[key] = value;
var __spreadValues$a = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$a.call(b, prop))
      __defNormalProp$a(a, prop, b[prop]);
  if (__getOwnPropSymbols$a)
    for (var prop of __getOwnPropSymbols$a(b)) {
      if (__propIsEnum$a.call(b, prop))
        __defNormalProp$a(a, prop, b[prop]);
    }
  return a;
};
const omit = (object, path) => {
  const result = __spreadValues$a({}, object);
  for (const item of path) {
    if (item in result) {
      delete result[item];
    }
  }
  return result;
};
function pick(obj, keys) {
  const clone = {};
  keys.forEach((key) => {
    const k = key;
    if (key in obj) {
      clone[k] = obj[k];
    }
  });
  return clone;
}
const formItemInjectionKey = Symbol("ArcoFormItemContext");
const formInjectionKey = Symbol("ArcoFormContext");
const useFormItem = ({
  size,
  disabled,
  error,
  uninject
} = {}) => {
  const formItemCtx = !uninject ? inject(formItemInjectionKey, {}) : {};
  const mergedSize = computed(() => {
    var _a;
    return (_a = size == null ? void 0 : size.value) != null ? _a : formItemCtx.size;
  });
  const mergedDisabled = computed(() => (disabled == null ? void 0 : disabled.value) || formItemCtx.disabled);
  const mergedError = computed(() => (error == null ? void 0 : error.value) || formItemCtx.error);
  const feedback = toRef(formItemCtx, "feedback");
  const eventHandlers = toRef(formItemCtx, "eventHandlers");
  return {
    formItemCtx,
    mergedSize,
    mergedDisabled,
    mergedError,
    feedback,
    eventHandlers
  };
};
const useSize = (size, {
  defaultValue = "medium"
} = {}) => {
  const configProviderCtx = inject(configProviderInjectionKey, void 0);
  const mergedSize = computed(() => {
    var _a, _b;
    return (_b = (_a = size == null ? void 0 : size.value) != null ? _a : configProviderCtx == null ? void 0 : configProviderCtx.size) != null ? _b : defaultValue;
  });
  return {
    mergedSize
  };
};
function useCursor(input) {
  const selectionRef = ref();
  function recordCursor() {
    if (!input.value)
      return;
    const {
      selectionStart,
      selectionEnd,
      value
    } = input.value;
    if (selectionStart == null || selectionEnd == null)
      return;
    const beforeTxt = value.slice(0, Math.max(0, selectionStart));
    const afterTxt = value.slice(Math.max(0, selectionEnd));
    selectionRef.value = {
      selectionStart,
      selectionEnd,
      value,
      beforeTxt,
      afterTxt
    };
  }
  function setCursor() {
    if (!input.value || !selectionRef.value)
      return;
    const {
      value
    } = input.value;
    const {
      beforeTxt,
      afterTxt,
      selectionStart
    } = selectionRef.value;
    if (!beforeTxt || !afterTxt || !selectionStart)
      return;
    let startPos = value.length;
    if (value.endsWith(afterTxt)) {
      startPos = value.length - afterTxt.length;
    } else if (value.startsWith(beforeTxt)) {
      startPos = beforeTxt.length;
    } else {
      const beforeLastChar = beforeTxt[selectionStart - 1];
      const newIndex = value.indexOf(beforeLastChar, selectionStart - 1);
      if (newIndex !== -1) {
        startPos = newIndex + 1;
      }
    }
    input.value.setSelectionRange(startPos, startPos);
  }
  return [recordCursor, setCursor];
}
var __defProp$9 = Object.defineProperty;
var __getOwnPropSymbols$9 = Object.getOwnPropertySymbols;
var __hasOwnProp$9 = Object.prototype.hasOwnProperty;
var __propIsEnum$9 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$9 = (obj, key, value) => key in obj ? __defProp$9(obj, key, {
  enumerable: true,
  configurable: true,
  writable: true,
  value
}) : obj[key] = value;
var __spreadValues$9 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$9.call(b, prop))
      __defNormalProp$9(a, prop, b[prop]);
  if (__getOwnPropSymbols$9)
    for (var prop of __getOwnPropSymbols$9(b)) {
      if (__propIsEnum$9.call(b, prop))
        __defNormalProp$9(a, prop, b[prop]);
    }
  return a;
};
var _Input = defineComponent({
  name: "Input",
  inheritAttrs: false,
  props: {
    modelValue: String,
    defaultValue: {
      type: String,
      default: ""
    },
    size: {
      type: String
    },
    allowClear: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: Boolean,
      default: false
    },
    placeholder: String,
    maxLength: {
      type: [Number, Object],
      default: 0
    },
    showWordLimit: {
      type: Boolean,
      default: false
    },
    wordLength: {
      type: Function
    },
    wordSlice: {
      type: Function
    },
    inputAttrs: {
      type: Object
    },
    type: {
      type: String,
      default: "text"
    }
  },
  emits: {
    "update:modelValue": (value) => true,
    "input": (value, ev) => true,
    "change": (value, ev) => true,
    "pressEnter": (ev) => true,
    "clear": (ev) => true,
    "focus": (ev) => true,
    "blur": (ev) => true
  },
  setup(props, {
    emit,
    slots,
    attrs
  }) {
    const {
      size,
      disabled,
      error,
      modelValue
    } = toRefs(props);
    const prefixCls = getPrefixCls("input");
    const inputRef = ref();
    const {
      mergedSize: _mergedSize,
      mergedDisabled,
      mergedError: _mergedError,
      feedback,
      eventHandlers
    } = useFormItem({
      size,
      disabled,
      error
    });
    const {
      mergedSize
    } = useSize(_mergedSize);
    const [recordCursor, setCursor] = useCursor(inputRef);
    const _value = ref(props.defaultValue);
    const computedValue = computed(() => {
      var _a;
      return (_a = props.modelValue) != null ? _a : _value.value;
    });
    watch(modelValue, (value) => {
      if (isUndefined(value) || isNull(value)) {
        _value.value = "";
      }
    });
    let preValue = computedValue.value;
    const focused = ref(false);
    const showClearBtn = computed(() => props.allowClear && !mergedDisabled.value && Boolean(computedValue.value));
    const isComposition = ref(false);
    const compositionValue = ref("");
    const getValueLength = (value) => {
      var _a;
      if (isFunction$1(props.wordLength)) {
        return props.wordLength(value);
      }
      return (_a = value.length) != null ? _a : 0;
    };
    const valueLength = computed(() => getValueLength(computedValue.value));
    const mergedError = computed(() => _mergedError.value || Boolean(isObject$1(props.maxLength) && props.maxLength.errorOnly && valueLength.value > maxLength.value));
    const maxLengthErrorOnly = computed(() => isObject$1(props.maxLength) && Boolean(props.maxLength.errorOnly));
    const maxLength = computed(() => {
      if (isObject$1(props.maxLength)) {
        return props.maxLength.length;
      }
      return props.maxLength;
    });
    const defaultMaxLength = computed(() => {
      const bytePerChar = getValueLength("a");
      return Math.floor(maxLength.value / bytePerChar);
    });
    const updateValue = (value) => {
      var _a, _b;
      if (maxLength.value && !maxLengthErrorOnly.value && getValueLength(value) > maxLength.value) {
        value = (_b = (_a = props.wordSlice) == null ? void 0 : _a.call(props, value, maxLength.value)) != null ? _b : value.slice(0, defaultMaxLength.value);
      }
      _value.value = value;
      emit("update:modelValue", value);
    };
    const handleMousedown = (e2) => {
      if (inputRef.value && e2.target !== inputRef.value) {
        e2.preventDefault();
        inputRef.value.focus();
      }
    };
    const emitChange = (value, ev) => {
      var _a, _b;
      if (value !== preValue) {
        preValue = value;
        emit("change", value, ev);
        (_b = (_a = eventHandlers.value) == null ? void 0 : _a.onChange) == null ? void 0 : _b.call(_a, ev);
      }
    };
    const handleFocus = (ev) => {
      var _a, _b;
      focused.value = true;
      preValue = computedValue.value;
      emit("focus", ev);
      (_b = (_a = eventHandlers.value) == null ? void 0 : _a.onFocus) == null ? void 0 : _b.call(_a, ev);
    };
    const handleBlur = (ev) => {
      var _a, _b;
      focused.value = false;
      emitChange(computedValue.value, ev);
      emit("blur", ev);
      (_b = (_a = eventHandlers.value) == null ? void 0 : _a.onBlur) == null ? void 0 : _b.call(_a, ev);
    };
    const handleComposition = (e2) => {
      var _a, _b, _c;
      const {
        value,
        selectionStart,
        selectionEnd
      } = e2.target;
      if (e2.type === "compositionend") {
        isComposition.value = false;
        compositionValue.value = "";
        if (maxLength.value && !maxLengthErrorOnly.value && valueLength.value >= maxLength.value && getValueLength(value) > maxLength.value && selectionStart === selectionEnd) {
          keepControl();
          return;
        }
        updateValue(value);
        emit("input", value, e2);
        (_b = (_a = eventHandlers.value) == null ? void 0 : _a.onInput) == null ? void 0 : _b.call(_a, e2);
        keepControl();
      } else {
        isComposition.value = true;
        compositionValue.value = computedValue.value + ((_c = e2.data) != null ? _c : "");
      }
    };
    const keepControl = () => {
      recordCursor();
      nextTick(() => {
        if (inputRef.value && computedValue.value !== inputRef.value.value) {
          inputRef.value.value = computedValue.value;
          setCursor();
        }
      });
    };
    const handleInput = (e2) => {
      var _a, _b;
      const {
        value
      } = e2.target;
      if (!isComposition.value) {
        if (maxLength.value && !maxLengthErrorOnly.value && valueLength.value >= maxLength.value && getValueLength(value) > maxLength.value && e2.inputType === "insertText") {
          keepControl();
          return;
        }
        updateValue(value);
        emit("input", value, e2);
        (_b = (_a = eventHandlers.value) == null ? void 0 : _a.onInput) == null ? void 0 : _b.call(_a, e2);
        keepControl();
      }
    };
    const handleClear = (ev) => {
      updateValue("");
      emitChange("", ev);
      emit("clear", ev);
    };
    const handleKeyDown = (e2) => {
      const keyCode = e2.key || e2.code;
      if (!isComposition.value && keyCode === Enter.key) {
        emitChange(computedValue.value, e2);
        emit("pressEnter", e2);
      }
    };
    const outerCls = computed(() => [`${prefixCls}-outer`, `${prefixCls}-outer-size-${mergedSize.value}`, {
      [`${prefixCls}-outer-has-suffix`]: Boolean(slots.suffix),
      [`${prefixCls}-outer-disabled`]: mergedDisabled.value
    }]);
    const wrapperCls = computed(() => [`${prefixCls}-wrapper`, {
      [`${prefixCls}-error`]: mergedError.value,
      [`${prefixCls}-disabled`]: mergedDisabled.value,
      [`${prefixCls}-focus`]: focused.value
    }]);
    const cls = computed(() => [prefixCls, `${prefixCls}-size-${mergedSize.value}`]);
    const wrapperAttrs = computed(() => omit(attrs, INPUT_EVENTS));
    const inputAttrs = computed(() => pick(attrs, INPUT_EVENTS));
    const mergeInputAttrs = computed(() => {
      const attrs2 = __spreadValues$9(__spreadValues$9({}, inputAttrs.value), props.inputAttrs);
      if (mergedError.value) {
        attrs2["aria-invalid"] = true;
      }
      return attrs2;
    });
    const renderInput = (hasOuter) => {
      var _a;
      return createVNode("span", mergeProps({
        "class": wrapperCls.value,
        "onMousedown": handleMousedown
      }, !hasOuter ? wrapperAttrs.value : void 0), [slots.prefix && createVNode("span", {
        "class": `${prefixCls}-prefix`
      }, [slots.prefix()]), createVNode("input", mergeProps({
        "ref": inputRef,
        "class": cls.value,
        "value": computedValue.value,
        "type": props.type,
        "placeholder": props.placeholder,
        "readonly": props.readonly,
        "disabled": mergedDisabled.value,
        "onInput": handleInput,
        "onKeydown": handleKeyDown,
        "onFocus": handleFocus,
        "onBlur": handleBlur,
        "onCompositionstart": handleComposition,
        "onCompositionupdate": handleComposition,
        "onCompositionend": handleComposition
      }, mergeInputAttrs.value), null), showClearBtn.value && createVNode(IconHover, {
        "prefix": prefixCls,
        "class": `${prefixCls}-clear-btn`,
        "onClick": handleClear
      }, {
        default: () => [createVNode(IconClose, null, null)]
      }), (slots.suffix || Boolean(props.maxLength) && props.showWordLimit || Boolean(feedback.value)) && createVNode("span", {
        "class": [`${prefixCls}-suffix`, {
          [`${prefixCls}-suffix-has-feedback`]: feedback.value
        }]
      }, [Boolean(props.maxLength) && props.showWordLimit && createVNode("span", {
        "class": `${prefixCls}-word-limit`
      }, [valueLength.value, createTextVNode("/"), maxLength.value]), (_a = slots.suffix) == null ? void 0 : _a.call(slots), Boolean(feedback.value) && createVNode(FeedbackIcon, {
        "type": feedback.value
      }, null)])]);
    };
    const render2 = () => {
      if (slots.prepend || slots.append) {
        return createVNode("span", mergeProps({
          "class": outerCls.value
        }, wrapperAttrs.value), [slots.prepend && createVNode("span", {
          "class": `${prefixCls}-prepend`
        }, [slots.prepend()]), renderInput(true), slots.append && createVNode("span", {
          "class": `${prefixCls}-append`
        }, [slots.append()])]);
      }
      return renderInput();
    };
    return {
      inputRef,
      render: render2
    };
  },
  methods: {
    focus() {
      var _a;
      (_a = this.inputRef) == null ? void 0 : _a.focus();
    },
    blur() {
      var _a;
      (_a = this.inputRef) == null ? void 0 : _a.blur();
    }
  },
  render() {
    return this.render();
  }
});
const _sfc_main$j = defineComponent({
  name: "IconSearch",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (value) => {
        return ["butt", "round", "square"].includes(value);
      }
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (value) => {
        return ["arcs", "bevel", "miter", "miter-clip", "round"].includes(value);
      }
    },
    rotate: Number,
    spin: Boolean
  },
  emits: {
    click: (ev) => true
  },
  setup(props, {
    emit
  }) {
    const prefixCls = getPrefixCls("icon");
    const cls = computed(() => [prefixCls, `${prefixCls}-search`, {
      [`${prefixCls}-spin`]: props.spin
    }]);
    const innerStyle = computed(() => {
      const styles = {};
      if (props.size) {
        styles.fontSize = isNumber$1(props.size) ? `${props.size}px` : props.size;
      }
      if (props.rotate) {
        styles.transform = `rotate(${props.rotate}deg)`;
      }
      return styles;
    });
    const onClick = (ev) => {
      emit("click", ev);
    };
    return {
      cls,
      innerStyle,
      onClick
    };
  }
});
const _hoisted_1$9 = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
const _hoisted_2$8 = /* @__PURE__ */ createElementVNode("path", {
  d: "M33.072 33.071c6.248-6.248 6.248-16.379 0-22.627-6.249-6.249-16.38-6.249-22.628 0-6.248 6.248-6.248 16.379 0 22.627 6.248 6.248 16.38 6.248 22.628 0Zm0 0 8.485 8.485"
}, null, -1);
const _hoisted_3$7 = [_hoisted_2$8];
function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: normalizeClass(_ctx.cls),
    style: normalizeStyle(_ctx.innerStyle),
    "stroke-width": _ctx.strokeWidth,
    "stroke-linecap": _ctx.strokeLinecap,
    "stroke-linejoin": _ctx.strokeLinejoin,
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClick && _ctx.onClick(...args))
  }, _hoisted_3$7, 14, _hoisted_1$9);
}
var _IconSearch = /* @__PURE__ */ _export_sfc$1(_sfc_main$j, [["render", _sfc_render$i]]);
const IconSearch = Object.assign(_IconSearch, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconSearch.name, _IconSearch);
  }
});
const buttonGroupInjectionKey = Symbol("ArcoButtonGroup");
const _sfc_main$i = defineComponent({
  name: "Button",
  components: {
    IconLoading
  },
  props: {
    type: {
      type: String
    },
    shape: {
      type: String
    },
    status: {
      type: String
    },
    size: {
      type: String
    },
    long: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean
    },
    htmlType: {
      type: String,
      default: "button"
    },
    href: String
  },
  emits: {
    click: (ev) => true
  },
  setup(props, {
    emit
  }) {
    const {
      size,
      disabled
    } = toRefs(props);
    const prefixCls = getPrefixCls("btn");
    const groupContext = inject(buttonGroupInjectionKey, void 0);
    const _size = computed(() => {
      var _a;
      return (_a = size.value) != null ? _a : groupContext == null ? void 0 : groupContext.size;
    });
    const _disabled = computed(() => Boolean(disabled.value || (groupContext == null ? void 0 : groupContext.disabled)));
    const {
      mergedSize: _mergedSize,
      mergedDisabled
    } = useFormItem({
      size: _size,
      disabled: _disabled
    });
    const {
      mergedSize
    } = useSize(_mergedSize);
    const cls = computed(() => {
      var _a, _b, _c, _d, _e, _f;
      return [prefixCls, `${prefixCls}-${(_b = (_a = props.type) != null ? _a : groupContext == null ? void 0 : groupContext.type) != null ? _b : "secondary"}`, `${prefixCls}-shape-${(_d = (_c = props.shape) != null ? _c : groupContext == null ? void 0 : groupContext.shape) != null ? _d : "square"}`, `${prefixCls}-size-${mergedSize.value}`, `${prefixCls}-status-${(_f = (_e = props.status) != null ? _e : groupContext == null ? void 0 : groupContext.status) != null ? _f : "normal"}`, {
        [`${prefixCls}-long`]: props.long,
        [`${prefixCls}-loading`]: props.loading,
        [`${prefixCls}-disabled`]: mergedDisabled.value,
        [`${prefixCls}-link`]: isString$1(props.href)
      }];
    });
    const handleClick = (ev) => {
      if (props.disabled || props.loading) {
        ev.preventDefault();
        return;
      }
      emit("click", ev);
    };
    return {
      prefixCls,
      cls,
      mergedDisabled,
      handleClick
    };
  }
});
const _hoisted_1$8 = ["href"];
const _hoisted_2$7 = ["type", "disabled"];
function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_icon_loading = resolveComponent("icon-loading");
  return _ctx.href ? (openBlock(), createElementBlock("a", {
    key: 0,
    class: normalizeClass([_ctx.cls, {
      [`${_ctx.prefixCls}-only-icon`]: _ctx.$slots.icon && !_ctx.$slots.default
    }]),
    href: _ctx.mergedDisabled || _ctx.loading ? void 0 : _ctx.href,
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
  }, [_ctx.loading || _ctx.$slots.icon ? (openBlock(), createElementBlock("span", {
    key: 0,
    class: normalizeClass(`${_ctx.prefixCls}-icon`)
  }, [_ctx.loading ? (openBlock(), createBlock(_component_icon_loading, {
    key: 0,
    spin: "true"
  })) : renderSlot(_ctx.$slots, "icon", {
    key: 1
  })], 2)) : createCommentVNode("v-if", true), renderSlot(_ctx.$slots, "default")], 10, _hoisted_1$8)) : (openBlock(), createElementBlock("button", {
    key: 1,
    class: normalizeClass([_ctx.cls, {
      [`${_ctx.prefixCls}-only-icon`]: _ctx.$slots.icon && !_ctx.$slots.default
    }]),
    type: _ctx.htmlType,
    disabled: _ctx.mergedDisabled,
    onClick: _cache[1] || (_cache[1] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
  }, [_ctx.loading || _ctx.$slots.icon ? (openBlock(), createElementBlock("span", {
    key: 0,
    class: normalizeClass(`${_ctx.prefixCls}-icon`)
  }, [_ctx.loading ? (openBlock(), createBlock(_component_icon_loading, {
    key: 0,
    spin: true
  })) : renderSlot(_ctx.$slots, "icon", {
    key: 1
  })], 2)) : createCommentVNode("v-if", true), renderSlot(_ctx.$slots, "default")], 10, _hoisted_2$7));
}
var _Button = /* @__PURE__ */ _export_sfc$1(_sfc_main$i, [["render", _sfc_render$h]]);
const _sfc_main$h = defineComponent({
  name: "ButtonGroup",
  props: {
    type: {
      type: String
    },
    status: {
      type: String
    },
    shape: {
      type: String
    },
    size: {
      type: String
    },
    disabled: {
      type: Boolean
    }
  },
  setup(props) {
    const {
      type,
      size,
      status,
      disabled,
      shape
    } = toRefs(props);
    const prefixCls = getPrefixCls("btn-group");
    provide(buttonGroupInjectionKey, reactive({
      type,
      size,
      shape,
      status,
      disabled
    }));
    return {
      prefixCls
    };
  }
});
function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.prefixCls)
  }, [renderSlot(_ctx.$slots, "default")], 2);
}
var ButtonGroup = /* @__PURE__ */ _export_sfc$1(_sfc_main$h, [["render", _sfc_render$g]]);
const Button = Object.assign(_Button, {
  Group: ButtonGroup,
  install: (app, options) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);
    app.component(componentPrefix + _Button.name, _Button);
    app.component(componentPrefix + ButtonGroup.name, ButtonGroup);
  }
});
var InputSearch = defineComponent({
  name: "InputSearch",
  props: {
    searchButton: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String
    },
    buttonText: {
      type: String
    },
    buttonProps: {
      type: Object
    }
  },
  emits: {
    search: (value, ev) => true
  },
  setup(props, {
    emit,
    slots
  }) {
    const {
      size
    } = toRefs(props);
    const prefixCls = getPrefixCls("input-search");
    const {
      mergedSize
    } = useSize(size);
    const inputRef = ref();
    const handleClick = (e2) => {
      if (inputRef.value.inputRef) {
        emit("search", inputRef.value.inputRef.value, e2);
      }
    };
    const renderSuffix = () => {
      var _a;
      return createVNode(Fragment, null, [props.loading ? createVNode(IconLoading, null, null) : createVNode(IconHover, {
        "onClick": handleClick
      }, {
        default: () => [createVNode(IconSearch, null, null)]
      }), (_a = slots.suffix) == null ? void 0 : _a.call(slots)]);
    };
    const renderButton = () => {
      var _a;
      let _slots = {};
      if (props.buttonText || slots["button-default"] || slots["button-icon"]) {
        _slots = {
          default: (_a = slots["button-default"]) != null ? _a : props.buttonText ? () => props.buttonText : void 0,
          icon: slots["button-icon"]
        };
      } else {
        _slots = {
          icon: () => createVNode(IconSearch, null, null)
        };
      }
      return createVNode(Button, mergeProps({
        "type": "primary",
        "class": `${prefixCls}-btn`,
        "disabled": props.disabled,
        "size": mergedSize.value,
        "loading": props.loading
      }, props.buttonProps, {
        "onClick": handleClick
      }), _slots);
    };
    const render2 = () => createVNode(_Input, {
      "ref": inputRef,
      "class": prefixCls,
      "size": mergedSize.value,
      "disabled": props.disabled
    }, {
      prepend: slots.prepend,
      prefix: slots.prefix,
      suffix: props.searchButton ? slots.suffix : renderSuffix,
      append: props.searchButton ? renderButton : slots.append
    });
    return {
      inputRef,
      render: render2
    };
  },
  methods: {
    focus() {
      var _a;
      (_a = this.inputRef) == null ? void 0 : _a.focus();
    },
    blur() {
      var _a;
      (_a = this.inputRef) == null ? void 0 : _a.blur();
    }
  },
  render() {
    return this.render();
  }
});
const _sfc_main$g = defineComponent({
  name: "IconEye",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (value) => {
        return ["butt", "round", "square"].includes(value);
      }
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (value) => {
        return ["arcs", "bevel", "miter", "miter-clip", "round"].includes(value);
      }
    },
    rotate: Number,
    spin: Boolean
  },
  emits: {
    click: (ev) => true
  },
  setup(props, {
    emit
  }) {
    const prefixCls = getPrefixCls("icon");
    const cls = computed(() => [prefixCls, `${prefixCls}-eye`, {
      [`${prefixCls}-spin`]: props.spin
    }]);
    const innerStyle = computed(() => {
      const styles = {};
      if (props.size) {
        styles.fontSize = isNumber$1(props.size) ? `${props.size}px` : props.size;
      }
      if (props.rotate) {
        styles.transform = `rotate(${props.rotate}deg)`;
      }
      return styles;
    });
    const onClick = (ev) => {
      emit("click", ev);
    };
    return {
      cls,
      innerStyle,
      onClick
    };
  }
});
const _hoisted_1$7 = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
const _hoisted_2$6 = /* @__PURE__ */ createElementVNode("path", {
  "clip-rule": "evenodd",
  d: "M24 37c6.627 0 12.627-4.333 18-13-5.373-8.667-11.373-13-18-13-6.627 0-12.627 4.333-18 13 5.373 8.667 11.373 13 18 13Z"
}, null, -1);
const _hoisted_3$6 = /* @__PURE__ */ createElementVNode("path", {
  d: "M29 24a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
}, null, -1);
const _hoisted_4$4 = [_hoisted_2$6, _hoisted_3$6];
function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: normalizeClass(_ctx.cls),
    style: normalizeStyle(_ctx.innerStyle),
    "stroke-width": _ctx.strokeWidth,
    "stroke-linecap": _ctx.strokeLinecap,
    "stroke-linejoin": _ctx.strokeLinejoin,
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClick && _ctx.onClick(...args))
  }, _hoisted_4$4, 14, _hoisted_1$7);
}
var _IconEye = /* @__PURE__ */ _export_sfc$1(_sfc_main$g, [["render", _sfc_render$f]]);
const IconEye = Object.assign(_IconEye, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconEye.name, _IconEye);
  }
});
const _sfc_main$f = defineComponent({
  name: "IconEyeInvisible",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (value) => {
        return ["butt", "round", "square"].includes(value);
      }
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (value) => {
        return ["arcs", "bevel", "miter", "miter-clip", "round"].includes(value);
      }
    },
    rotate: Number,
    spin: Boolean
  },
  emits: {
    click: (ev) => true
  },
  setup(props, {
    emit
  }) {
    const prefixCls = getPrefixCls("icon");
    const cls = computed(() => [prefixCls, `${prefixCls}-eye-invisible`, {
      [`${prefixCls}-spin`]: props.spin
    }]);
    const innerStyle = computed(() => {
      const styles = {};
      if (props.size) {
        styles.fontSize = isNumber$1(props.size) ? `${props.size}px` : props.size;
      }
      if (props.rotate) {
        styles.transform = `rotate(${props.rotate}deg)`;
      }
      return styles;
    });
    const onClick = (ev) => {
      emit("click", ev);
    };
    return {
      cls,
      innerStyle,
      onClick
    };
  }
});
const _hoisted_1$6 = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
const _hoisted_2$5 = /* @__PURE__ */ createElementVNode("path", {
  d: "M14 14.5c-2.69 2-5.415 5.33-8 9.5 5.373 8.667 11.373 13 18 13 3.325 0 6.491-1.09 9.5-3.271M17.463 12.5C19 11 21.75 11 24 11c6.627 0 12.627 4.333 18 13-1.766 2.848-3.599 5.228-5.5 7.14"
}, null, -1);
const _hoisted_3$5 = /* @__PURE__ */ createElementVNode("path", {
  d: "M29 24a5 5 0 1 1-10 0 5 5 0 0 1 10 0ZM6.852 7.103l34.294 34.294"
}, null, -1);
const _hoisted_4$3 = [_hoisted_2$5, _hoisted_3$5];
function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: normalizeClass(_ctx.cls),
    style: normalizeStyle(_ctx.innerStyle),
    "stroke-width": _ctx.strokeWidth,
    "stroke-linecap": _ctx.strokeLinecap,
    "stroke-linejoin": _ctx.strokeLinejoin,
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClick && _ctx.onClick(...args))
  }, _hoisted_4$3, 14, _hoisted_1$6);
}
var _IconEyeInvisible = /* @__PURE__ */ _export_sfc$1(_sfc_main$f, [["render", _sfc_render$e]]);
const IconEyeInvisible = Object.assign(_IconEyeInvisible, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconEyeInvisible.name, _IconEyeInvisible);
  }
});
const _sfc_main$e = defineComponent({
  name: "InputPassword",
  components: {
    IconEye,
    IconEyeInvisible,
    AIconHover: IconHover,
    AInput: _Input
  },
  props: {
    invisibleButton: {
      type: Boolean,
      default: true
    }
  },
  setup() {
    const inputRef = ref();
    const invisible = ref(true);
    const handleInvisible = () => {
      invisible.value = !invisible.value;
    };
    return {
      inputRef,
      invisible,
      handleInvisible
    };
  },
  methods: {
    focus() {
      var _a;
      (_a = this.inputRef) == null ? void 0 : _a.focus();
    },
    blur() {
      var _a;
      (_a = this.inputRef) == null ? void 0 : _a.blur();
    }
  }
});
function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_icon_eye = resolveComponent("icon-eye");
  const _component_icon_eye_invisible = resolveComponent("icon-eye-invisible");
  const _component_a_icon_hover = resolveComponent("a-icon-hover");
  const _component_a_input = resolveComponent("a-input");
  return openBlock(), createBlock(_component_a_input, {
    ref: "inputRef",
    type: _ctx.invisible ? "password" : "text"
  }, createSlots({
    _: 2
  }, [_ctx.$slots.prepend ? {
    name: "prepend",
    fn: withCtx(() => [renderSlot(_ctx.$slots, "prepend")])
  } : void 0, _ctx.$slots.prefix ? {
    name: "prefix",
    fn: withCtx(() => [renderSlot(_ctx.$slots, "prefix")])
  } : void 0, _ctx.invisibleButton || _ctx.$slots.suffix ? {
    name: "suffix",
    fn: withCtx(() => [_ctx.invisibleButton ? (openBlock(), createBlock(_component_a_icon_hover, {
      key: 0,
      onClick: _ctx.handleInvisible,
      onMousedown: _cache[0] || (_cache[0] = withModifiers(() => {
      }, ["prevent"])),
      onMouseup: _cache[1] || (_cache[1] = withModifiers(() => {
      }, ["prevent"]))
    }, {
      default: withCtx(() => [!_ctx.invisible ? (openBlock(), createBlock(_component_icon_eye, {
        key: 0
      })) : (openBlock(), createBlock(_component_icon_eye_invisible, {
        key: 1
      }))]),
      _: 1
    }, 8, ["onClick"])) : createCommentVNode("v-if", true), renderSlot(_ctx.$slots, "suffix")])
  } : void 0, _ctx.$slots.append ? {
    name: "append",
    fn: withCtx(() => [renderSlot(_ctx.$slots, "append")])
  } : void 0]), 1032, ["type"]);
}
var InputPassword = /* @__PURE__ */ _export_sfc$1(_sfc_main$e, [["render", _sfc_render$d]]);
const _sfc_main$d = defineComponent({
  name: "InputGroup",
  setup() {
    const prefixCls = getPrefixCls("input-group");
    return {
      prefixCls
    };
  }
});
function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.prefixCls)
  }, [renderSlot(_ctx.$slots, "default")], 2);
}
var InputGroup = /* @__PURE__ */ _export_sfc$1(_sfc_main$d, [["render", _sfc_render$c]]);
const Input = Object.assign(_Input, {
  Search: InputSearch,
  Password: InputPassword,
  Group: InputGroup,
  install: (app, options) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);
    app.component(componentPrefix + _Input.name, _Input);
    app.component(componentPrefix + InputGroup.name, InputGroup);
    app.component(componentPrefix + InputSearch.name, InputSearch);
    app.component(componentPrefix + InputPassword.name, InputPassword);
  }
});
var __defProp$8 = Object.defineProperty;
var __getOwnPropSymbols$8 = Object.getOwnPropertySymbols;
var __hasOwnProp$8 = Object.prototype.hasOwnProperty;
var __propIsEnum$8 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$8 = (obj, key, value) => key in obj ? __defProp$8(obj, key, {
  enumerable: true,
  configurable: true,
  writable: true,
  value
}) : obj[key] = value;
var __spreadValues$8 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$8.call(b, prop))
      __defNormalProp$8(a, prop, b[prop]);
  if (__getOwnPropSymbols$8)
    for (var prop of __getOwnPropSymbols$8(b)) {
      if (__propIsEnum$8.call(b, prop))
        __defNormalProp$8(a, prop, b[prop]);
    }
  return a;
};
const getViewPortSize = () => {
  const {
    height,
    width
  } = getDocumentSize();
  return {
    width: Math.min(width, window.innerWidth),
    height: Math.min(height, window.innerHeight)
  };
};
const getElementScrollRect = (element, containerRect) => {
  var _a, _b;
  const rect = element.getBoundingClientRect();
  return {
    top: rect.top,
    bottom: rect.bottom,
    left: rect.left,
    right: rect.right,
    scrollTop: rect.top - containerRect.top,
    scrollBottom: rect.bottom - containerRect.top,
    scrollLeft: rect.left - containerRect.left,
    scrollRight: rect.right - containerRect.left,
    width: (_a = element.offsetWidth) != null ? _a : element.clientWidth,
    height: (_b = element.offsetHeight) != null ? _b : element.clientHeight
  };
};
const getBoundaryPosition = (position) => {
  switch (position) {
    case "top":
    case "tl":
    case "tr":
      return "top";
    case "bottom":
    case "bl":
    case "br":
      return "bottom";
    case "left":
    case "lt":
    case "lb":
      return "left";
    case "right":
    case "rt":
    case "rb":
      return "right";
    default:
      return "top";
  }
};
const changePosition = (position, direction) => {
  switch (direction) {
    case "top":
      switch (position) {
        case "bottom":
          return "top";
        case "bl":
          return "tl";
        case "br":
          return "tr";
        default:
          return position;
      }
    case "bottom":
      switch (position) {
        case "top":
          return "bottom";
        case "tl":
          return "bl";
        case "tr":
          return "br";
        default:
          return position;
      }
    case "left":
      switch (position) {
        case "right":
          return "left";
        case "rt":
          return "lt";
        case "rb":
          return "lb";
        default:
          return position;
      }
    case "right":
      switch (position) {
        case "left":
          return "right";
        case "lt":
          return "rt";
        case "lb":
          return "rb";
        default:
          return position;
      }
    default:
      return position;
  }
};
const getFitPosition = (position, popupPosition, {
  containerRect,
  triggerRect,
  popupRect,
  offset,
  translate
}) => {
  const direction = getBoundaryPosition(position);
  const viewPortSize = getViewPortSize();
  const viewPortBoundary = {
    top: containerRect.top + popupPosition.top,
    bottom: viewPortSize.height - (containerRect.top + popupPosition.top + popupRect.height),
    left: containerRect.left + popupPosition.left,
    right: viewPortSize.width - (containerRect.left + popupPosition.left + popupRect.width)
  };
  let finalPosition = position;
  if (direction === "top" && viewPortBoundary.top < 0) {
    if (triggerRect.top > popupRect.height) {
      popupPosition.top = -containerRect.top;
    } else {
      const fitPosition = getPopupOffset("bottom", triggerRect, popupRect, {
        offset,
        translate
      });
      if (viewPortSize.height - (containerRect.top + fitPosition.top + popupRect.height) > 0) {
        finalPosition = changePosition(position, "bottom");
        popupPosition.top = fitPosition.top;
      }
    }
  }
  if (direction === "bottom" && viewPortBoundary.bottom < 0) {
    if (viewPortSize.height - triggerRect.bottom > popupRect.height) {
      popupPosition.top = -containerRect.top + (viewPortSize.height - popupRect.height);
    } else {
      const fitPosition = getPopupOffset("top", triggerRect, popupRect, {
        offset,
        translate
      });
      if (containerRect.top + fitPosition.top > 0) {
        finalPosition = changePosition(position, "top");
        popupPosition.top = fitPosition.top;
      }
    }
  }
  if (direction === "left" && viewPortBoundary.left < 0) {
    if (triggerRect.left > popupRect.width) {
      popupPosition.left = -containerRect.left;
    } else {
      const fitPosition = getPopupOffset("right", triggerRect, popupRect, {
        offset,
        translate
      });
      if (viewPortSize.width - (containerRect.left + fitPosition.left + popupRect.width) > 0) {
        finalPosition = changePosition(position, "right");
        popupPosition.left = fitPosition.left;
      }
    }
  }
  if (direction === "right" && viewPortBoundary.right < 0) {
    if (viewPortSize.width - triggerRect.right > popupRect.width) {
      popupPosition.left = -containerRect.left + (viewPortSize.width - popupRect.width);
    } else {
      const fitPosition = getPopupOffset("left", triggerRect, popupRect, {
        offset,
        translate
      });
      if (containerRect.left + fitPosition.left > 0) {
        finalPosition = changePosition(position, "left");
        popupPosition.left = fitPosition.left;
      }
    }
  }
  if (direction === "top" || direction === "bottom") {
    if (viewPortBoundary.left < 0) {
      popupPosition.left = -containerRect.left;
    } else if (viewPortBoundary.right < 0) {
      popupPosition.left = -containerRect.left + (viewPortSize.width - popupRect.width);
    }
  }
  if (direction === "left" || direction === "right") {
    if (viewPortBoundary.top < 0) {
      popupPosition.top = -containerRect.top;
    } else if (viewPortBoundary.bottom < 0) {
      popupPosition.top = -containerRect.top + (viewPortSize.height - popupRect.height);
    }
  }
  return {
    popupPosition,
    position: finalPosition
  };
};
const getPopupOffset = (position, triggerRect, popupRect, {
  offset = 0,
  translate = [0, 0]
} = {}) => {
  var _a;
  const _translate = (_a = isArray$1(translate) ? translate : translate[position]) != null ? _a : [0, 0];
  switch (position) {
    case "top":
      return {
        left: triggerRect.scrollLeft + Math.round(triggerRect.width / 2) - Math.round(popupRect.width / 2) + _translate[0],
        top: triggerRect.scrollTop - popupRect.height - offset + _translate[1]
      };
    case "tl":
      return {
        left: triggerRect.scrollLeft + _translate[0],
        top: triggerRect.scrollTop - popupRect.height - offset + _translate[1]
      };
    case "tr":
      return {
        left: triggerRect.scrollRight - popupRect.width + _translate[0],
        top: triggerRect.scrollTop - popupRect.height - offset + _translate[1]
      };
    case "bottom":
      return {
        left: triggerRect.scrollLeft + Math.round(triggerRect.width / 2) - Math.round(popupRect.width / 2) + _translate[0],
        top: triggerRect.scrollBottom + offset + _translate[1]
      };
    case "bl":
      return {
        left: triggerRect.scrollLeft + _translate[0],
        top: triggerRect.scrollBottom + offset + _translate[1]
      };
    case "br":
      return {
        left: triggerRect.scrollRight - popupRect.width + _translate[0],
        top: triggerRect.scrollBottom + offset + _translate[1]
      };
    case "left":
      return {
        left: triggerRect.scrollLeft - popupRect.width - offset + _translate[0],
        top: triggerRect.scrollTop + Math.round(triggerRect.height / 2) - Math.round(popupRect.height / 2) + _translate[1]
      };
    case "lt":
      return {
        left: triggerRect.scrollLeft - popupRect.width - offset + _translate[0],
        top: triggerRect.scrollTop + _translate[1]
      };
    case "lb":
      return {
        left: triggerRect.scrollLeft - popupRect.width - offset + _translate[0],
        top: triggerRect.scrollBottom - popupRect.height + _translate[1]
      };
    case "right":
      return {
        left: triggerRect.scrollRight + offset + _translate[0],
        top: triggerRect.scrollTop + Math.round(triggerRect.height / 2) - Math.round(popupRect.height / 2) + _translate[1]
      };
    case "rt":
      return {
        left: triggerRect.scrollRight + offset + _translate[0],
        top: triggerRect.scrollTop + _translate[1]
      };
    case "rb":
      return {
        left: triggerRect.scrollRight + offset + _translate[0],
        top: triggerRect.scrollBottom - popupRect.height + _translate[1]
      };
    default:
      return {
        left: 0,
        top: 0
      };
  }
};
const getTransformOrigin = (position) => {
  let originX = "0";
  if (["top", "bottom"].includes(position)) {
    originX = "50%";
  } else if (["left", "lt", "lb", "tr", "br"].includes(position)) {
    originX = "100%";
  }
  let originY = "0";
  if (["left", "right"].includes(position)) {
    originY = "50%";
  } else if (["top", "tl", "tr", "lt", "rt"].includes(position)) {
    originY = "100%";
  }
  return `${originX} ${originY}`;
};
const getPopupStyle = (position, containerRect, triggerRect, popupRect, {
  offset = 0,
  translate = [0, 0],
  customStyle = {},
  autoFitPosition = false
} = {}) => {
  let finalPosition = position;
  let popupPosition = getPopupOffset(position, triggerRect, popupRect, {
    offset,
    translate
  });
  if (autoFitPosition) {
    const result = getFitPosition(position, popupPosition, {
      containerRect,
      popupRect,
      triggerRect,
      offset,
      translate
    });
    popupPosition = result.popupPosition;
    finalPosition = result.position;
  }
  const style = __spreadValues$8({
    left: `${popupPosition.left}px`,
    top: `${popupPosition.top}px`
  }, customStyle);
  return {
    style,
    position: finalPosition
  };
};
const getArrowStyle = (position, triggerRect, popupRect, {
  customStyle = {}
}) => {
  if (["top", "tl", "tr", "bottom", "bl", "br"].includes(position)) {
    let offsetLeft = Math.abs(triggerRect.scrollLeft + triggerRect.width / 2 - popupRect.scrollLeft);
    if (offsetLeft > popupRect.width - 8) {
      if (triggerRect.width > popupRect.width) {
        offsetLeft = popupRect.width / 2;
      } else {
        offsetLeft = popupRect.width - 8;
      }
    }
    if (["top", "tl", "tr"].includes(position)) {
      return __spreadValues$8({
        left: `${offsetLeft}px`,
        bottom: "0",
        transform: "translate(-50%,50%) rotate(45deg)"
      }, customStyle);
    }
    return __spreadValues$8({
      left: `${offsetLeft}px`,
      top: "0",
      transform: "translate(-50%,-50%) rotate(45deg)"
    }, customStyle);
  }
  let offsetTop = Math.abs(triggerRect.scrollTop + triggerRect.height / 2 - popupRect.scrollTop);
  if (offsetTop > popupRect.height - 8) {
    if (triggerRect.height > popupRect.height) {
      offsetTop = popupRect.height / 2;
    } else {
      offsetTop = popupRect.height - 8;
    }
  }
  if (["left", "lt", "lb"].includes(position)) {
    return __spreadValues$8({
      top: `${offsetTop}px`,
      right: "0",
      transform: "translate(50%,-50%) rotate(45deg)"
    }, customStyle);
  }
  return __spreadValues$8({
    top: `${offsetTop}px`,
    left: "0",
    transform: "translate(-50%,-50%) rotate(45deg)"
  }, customStyle);
};
const isScrollElement = (element) => {
  return element.scrollHeight > element.offsetHeight || element.scrollWidth > element.offsetWidth;
};
const getScrollElements = (container) => {
  var _a;
  const scrollElements = [];
  let element = container;
  while (element && element !== document.documentElement) {
    if (isScrollElement(element)) {
      scrollElements.push(element);
    }
    element = (_a = element.parentElement) != null ? _a : void 0;
  }
  return scrollElements;
};
const useFirstElement = () => {
  const children = {};
  const firstElement = ref();
  const getFirstElement = () => {
    const element = getFirstElementFromChildren(children.value);
    if (element !== firstElement.value) {
      firstElement.value = element;
    }
  };
  onMounted(() => getFirstElement());
  onUpdated(() => getFirstElement());
  return {
    children,
    firstElement
  };
};
var ResizeObserver = defineComponent({
  name: "ResizeObserver",
  props: {
    watchOnUpdated: Boolean
  },
  emits: ["resize"],
  setup(props, {
    emit,
    slots
  }) {
    const {
      children,
      firstElement
    } = useFirstElement();
    let resizeObserver;
    const createResizeObserver = (target2) => {
      if (!target2)
        return;
      resizeObserver = new index$1((entries) => {
        const entry = entries[0];
        emit("resize", entry);
      });
      resizeObserver.observe(target2);
    };
    const destroyResizeObserver = () => {
      if (resizeObserver) {
        resizeObserver.disconnect();
        resizeObserver = null;
      }
    };
    watch(firstElement, (element) => {
      if (resizeObserver)
        destroyResizeObserver();
      if (element) {
        createResizeObserver(element);
      }
    });
    onBeforeUnmount(() => {
      if (resizeObserver)
        destroyResizeObserver();
    });
    return () => {
      var _a;
      children.value = (_a = slots.default) == null ? void 0 : _a.call(slots);
      return children.value;
    };
  }
});
function usePickSlots(slots, slotName) {
  const slot = ref(slots[slotName]);
  onUpdated(() => {
    const newSlot = slots[slotName];
    if (slot.value !== newSlot) {
      slot.value = newSlot;
    }
  });
  return slot;
}
const triggerInjectionKey = Symbol("ArcoTrigger");
const POPUP_BASE_Z_INDEX = 1e3;
const MESSAGE_BASE_Z_INDEX = 5e3;
const Z_INDEX_STEP = 1;
class PopupManager {
  constructor() {
    this.popupStack = {
      popup: /* @__PURE__ */ new Set(),
      dialog: /* @__PURE__ */ new Set(),
      message: /* @__PURE__ */ new Set()
    };
    this.getNextZIndex = (type) => {
      const current = type === "message" ? Array.from(this.popupStack.message).pop() || MESSAGE_BASE_Z_INDEX : Array.from(this.popupStack.popup).pop() || POPUP_BASE_Z_INDEX;
      return current + Z_INDEX_STEP;
    };
    this.add = (type) => {
      const zIndex = this.getNextZIndex(type);
      this.popupStack[type].add(zIndex);
      if (type === "dialog") {
        this.popupStack.popup.add(zIndex);
      }
      return zIndex;
    };
    this.delete = (zIndex, type) => {
      this.popupStack[type].delete(zIndex);
      if (type === "dialog") {
        this.popupStack.popup.delete(zIndex);
      }
    };
    this.isLastDialog = (zIndex) => {
      if (this.popupStack.dialog.size > 1) {
        return zIndex === Array.from(this.popupStack.dialog).pop();
      }
      return true;
    };
  }
}
const popupManager = new PopupManager();
function usePopupManager(type, {
  visible,
  runOnMounted
} = {}) {
  const zIndex = ref(0);
  const open2 = () => {
    zIndex.value = popupManager.add(type);
  };
  const close = () => {
    popupManager.delete(zIndex.value, type);
  };
  const isLastDialog = () => {
    if (type === "dialog") {
      return popupManager.isLastDialog(zIndex.value);
    }
    return false;
  };
  watch(() => visible == null ? void 0 : visible.value, (visible2) => {
    if (visible2) {
      open2();
    } else {
      close();
    }
  }, {
    immediate: true
  });
  if (runOnMounted) {
    onMounted(() => {
      open2();
    });
    onBeforeUnmount(() => {
      close();
    });
  }
  return {
    zIndex: readonly(zIndex),
    open: open2,
    close,
    isLastDialog
  };
}
const useResizeObserver = ({
  elementRef,
  onResize
}) => {
  let resizeObserver;
  const createResizeObserver = () => {
    if (!elementRef.value)
      return;
    resizeObserver = new index$1((entries) => {
      const entry = entries[0];
      isFunction$1(onResize) && onResize(entry);
    });
    resizeObserver.observe(elementRef.value);
  };
  const destroyResizeObserver = () => {
    if (resizeObserver) {
      resizeObserver.disconnect();
      resizeObserver = null;
    }
  };
  return {
    createResizeObserver,
    destroyResizeObserver
  };
};
var ClientOnly = defineComponent({
  name: "ClientOnly",
  setup(_, {
    slots
  }) {
    const mounted = ref(false);
    onMounted(() => mounted.value = true);
    return () => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      return null;
    };
  }
});
const useTeleportContainer = ({
  popupContainer,
  visible,
  defaultContainer = "body",
  documentContainer
}) => {
  const teleportContainer = ref(popupContainer.value);
  const containerRef = ref();
  const getContainer = () => {
    const element = getElement(popupContainer.value);
    const _teleportContainer = element ? popupContainer.value : defaultContainer;
    const _containerElement = element != null ? element : documentContainer ? document.documentElement : getElement(defaultContainer);
    if (_teleportContainer !== teleportContainer.value) {
      teleportContainer.value = _teleportContainer;
    }
    if (_containerElement !== containerRef.value) {
      containerRef.value = _containerElement;
    }
  };
  onMounted(() => getContainer());
  watch(visible, (visible2) => {
    if (teleportContainer.value !== popupContainer.value && visible2) {
      getContainer();
    }
  });
  return {
    teleportContainer,
    containerRef
  };
};
var __defProp$7 = Object.defineProperty;
var __defProps$2 = Object.defineProperties;
var __getOwnPropDescs$2 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$7 = Object.getOwnPropertySymbols;
var __hasOwnProp$7 = Object.prototype.hasOwnProperty;
var __propIsEnum$7 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$7 = (obj, key, value) => key in obj ? __defProp$7(obj, key, {
  enumerable: true,
  configurable: true,
  writable: true,
  value
}) : obj[key] = value;
var __spreadValues$7 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$7.call(b, prop))
      __defNormalProp$7(a, prop, b[prop]);
  if (__getOwnPropSymbols$7)
    for (var prop of __getOwnPropSymbols$7(b)) {
      if (__propIsEnum$7.call(b, prop))
        __defNormalProp$7(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$2 = (a, b) => __defProps$2(a, __getOwnPropDescs$2(b));
const TRIGGER_EVENTS = ["onClick", "onMouseenter", "onMouseleave", "onFocusin", "onFocusout", "onContextmenu"];
var _Trigger = defineComponent({
  name: "Trigger",
  inheritAttrs: false,
  props: {
    popupVisible: {
      type: Boolean,
      default: void 0
    },
    defaultPopupVisible: {
      type: Boolean,
      default: false
    },
    trigger: {
      type: [String, Array],
      default: "hover"
    },
    position: {
      type: String,
      default: "bottom"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    popupOffset: {
      type: Number,
      default: 0
    },
    popupTranslate: {
      type: [Array, Object]
    },
    showArrow: {
      type: Boolean,
      default: false
    },
    alignPoint: {
      type: Boolean,
      default: false
    },
    popupHoverStay: {
      type: Boolean,
      default: true
    },
    blurToClose: {
      type: Boolean,
      default: true
    },
    clickToClose: {
      type: Boolean,
      default: true
    },
    clickOutsideToClose: {
      type: Boolean,
      default: true
    },
    unmountOnClose: {
      type: Boolean,
      default: true
    },
    contentClass: {
      type: [String, Array, Object]
    },
    contentStyle: {
      type: Object
    },
    arrowClass: {
      type: [String, Array, Object]
    },
    arrowStyle: {
      type: Object
    },
    popupStyle: {
      type: Object
    },
    animationName: {
      type: String,
      default: "fade-in"
    },
    duration: {
      type: [Number, Object]
    },
    mouseEnterDelay: {
      type: Number,
      default: 100
    },
    mouseLeaveDelay: {
      type: Number,
      default: 100
    },
    focusDelay: {
      type: Number,
      default: 0
    },
    autoFitPopupWidth: {
      type: Boolean,
      default: false
    },
    autoFitPopupMinWidth: {
      type: Boolean,
      default: false
    },
    autoFixPosition: {
      type: Boolean,
      default: true
    },
    popupContainer: {
      type: [String, Object]
    },
    updateAtScroll: {
      type: Boolean,
      default: false
    },
    autoFitTransformOrigin: {
      type: Boolean,
      default: false
    },
    hideEmpty: {
      type: Boolean,
      default: false
    },
    openedClass: {
      type: [String, Array, Object]
    },
    autoFitPosition: {
      type: Boolean,
      default: true
    },
    renderToBody: {
      type: Boolean,
      default: true
    },
    preventFocus: {
      type: Boolean,
      default: false
    },
    scrollToClose: {
      type: Boolean,
      default: false
    },
    scrollToCloseDistance: {
      type: Number,
      default: 0
    }
  },
  emits: {
    "update:popupVisible": (visible) => true,
    "popupVisibleChange": (visible) => true,
    "show": () => true,
    "hide": () => true,
    "resize": () => true
  },
  setup(props, {
    emit,
    slots,
    attrs
  }) {
    const {
      popupContainer
    } = toRefs(props);
    const prefixCls = getPrefixCls("trigger");
    const popupAttrs = computed(() => omit(attrs, TRIGGER_EVENTS));
    const configCtx = inject(configProviderInjectionKey, void 0);
    const triggerMethods = computed(() => [].concat(props.trigger));
    const childrenRefs = /* @__PURE__ */ new Set();
    const triggerCtx = inject(triggerInjectionKey, void 0);
    const {
      children,
      firstElement
    } = useFirstElement();
    const popupRef = ref();
    const popupVisible = ref(props.defaultPopupVisible);
    const popupPosition = ref(props.position);
    const popupStyle = ref({});
    const transformStyle = ref({});
    const arrowStyle = ref({});
    const arrowRef = ref();
    const mousePosition = ref({
      top: 0,
      left: 0
    });
    let scrollPosition = null;
    let windowScrollPosition = null;
    const computedVisible = computed(() => {
      var _a;
      return (_a = props.popupVisible) != null ? _a : popupVisible.value;
    });
    const {
      teleportContainer,
      containerRef
    } = useTeleportContainer({
      popupContainer,
      visible: computedVisible,
      documentContainer: true
    });
    const {
      zIndex
    } = usePopupManager("popup", {
      visible: computedVisible
    });
    let delayTimer = 0;
    let outsideListener = false;
    let windowListener = false;
    const cleanDelayTimer = () => {
      if (delayTimer) {
        window.clearTimeout(delayTimer);
        delayTimer = 0;
      }
    };
    const updateMousePosition = (e2) => {
      if (props.alignPoint) {
        const {
          pageX,
          pageY
        } = e2;
        mousePosition.value = {
          top: pageY,
          left: pageX
        };
      }
    };
    const updatePopupStyle = () => {
      if (!firstElement.value || !popupRef.value || !containerRef.value) {
        return;
      }
      const containerRect = containerRef.value.getBoundingClientRect();
      const triggerRect = props.alignPoint ? {
        top: mousePosition.value.top,
        bottom: mousePosition.value.top,
        left: mousePosition.value.left,
        right: mousePosition.value.left,
        scrollTop: mousePosition.value.top,
        scrollBottom: mousePosition.value.top,
        scrollLeft: mousePosition.value.left,
        scrollRight: mousePosition.value.left,
        width: 0,
        height: 0
      } : getElementScrollRect(firstElement.value, containerRect);
      const getPopupRect = () => getElementScrollRect(popupRef.value, containerRect);
      const popupRect = getPopupRect();
      const {
        style,
        position
      } = getPopupStyle(props.position, containerRect, triggerRect, popupRect, {
        offset: props.popupOffset,
        translate: props.popupTranslate,
        customStyle: props.popupStyle,
        autoFitPosition: props.autoFitPosition
      });
      if (props.autoFitTransformOrigin) {
        transformStyle.value = {
          transformOrigin: getTransformOrigin(position)
        };
      }
      if (props.autoFitPopupMinWidth) {
        style.minWidth = `${triggerRect.width}px`;
      } else if (props.autoFitPopupWidth) {
        style.width = `${triggerRect.width}px`;
      }
      if (popupPosition.value !== position) {
        popupPosition.value = position;
      }
      popupStyle.value = style;
      if (props.showArrow) {
        nextTick(() => {
          arrowStyle.value = getArrowStyle(position, triggerRect, getPopupRect(), {
            customStyle: props.arrowStyle
          });
        });
      }
    };
    const changeVisible = (visible, delay) => {
      if (visible === computedVisible.value && delayTimer === 0) {
        return;
      }
      const update = () => {
        popupVisible.value = visible;
        emit("update:popupVisible", visible);
        emit("popupVisibleChange", visible);
        if (visible) {
          nextTick(() => {
            updatePopupStyle();
          });
        }
      };
      if (!visible) {
        scrollPosition = null;
        windowScrollPosition = null;
      }
      if (delay) {
        cleanDelayTimer();
        if (visible !== computedVisible.value) {
          delayTimer = window.setTimeout(update, delay);
        }
      } else {
        update();
      }
    };
    const handleClick = (e2) => {
      var _a;
      (_a = attrs.onClick) == null ? void 0 : _a.call(attrs, e2);
      if (props.disabled || computedVisible.value && !props.clickToClose) {
        return;
      }
      if (triggerMethods.value.includes("click")) {
        updateMousePosition(e2);
        changeVisible(!computedVisible.value);
      } else if (triggerMethods.value.includes("contextMenu") && computedVisible.value) {
        changeVisible(false);
      }
    };
    const handleMouseEnter = (e2) => {
      var _a;
      (_a = attrs.onMouseenter) == null ? void 0 : _a.call(attrs, e2);
      if (props.disabled || !triggerMethods.value.includes("hover")) {
        return;
      }
      updateMousePosition(e2);
      changeVisible(true, props.mouseEnterDelay);
    };
    const handleMouseEnterWithContext = (e2) => {
      triggerCtx == null ? void 0 : triggerCtx.onMouseenter(e2);
      handleMouseEnter(e2);
    };
    const handleMouseLeave = (e2) => {
      var _a;
      (_a = attrs.onMouseleave) == null ? void 0 : _a.call(attrs, e2);
      if (props.disabled || !triggerMethods.value.includes("hover")) {
        return;
      }
      changeVisible(false, props.mouseLeaveDelay);
    };
    const handleMouseLeaveWithContext = (e2) => {
      triggerCtx == null ? void 0 : triggerCtx.onMouseleave(e2);
      handleMouseLeave(e2);
    };
    const handleFocusin = (e2) => {
      var _a;
      (_a = attrs.onFocusin) == null ? void 0 : _a.call(attrs, e2);
      if (props.disabled || !triggerMethods.value.includes("focus")) {
        return;
      }
      changeVisible(true, props.focusDelay);
    };
    const handleFocusout = (e2) => {
      var _a;
      (_a = attrs.onFocusout) == null ? void 0 : _a.call(attrs, e2);
      if (props.disabled || !triggerMethods.value.includes("focus")) {
        return;
      }
      if (!props.blurToClose) {
        return;
      }
      changeVisible(false);
    };
    const handleContextmenu = (e2) => {
      var _a;
      (_a = attrs.onContextmenu) == null ? void 0 : _a.call(attrs, e2);
      if (props.disabled || !triggerMethods.value.includes("contextMenu") || computedVisible.value && !props.clickToClose) {
        return;
      }
      updateMousePosition(e2);
      changeVisible(!computedVisible.value);
      e2.preventDefault();
    };
    const addChildRef = (ref2) => {
      childrenRefs.add(ref2);
      triggerCtx == null ? void 0 : triggerCtx.addChildRef(ref2);
    };
    const removeChildRef = (ref2) => {
      childrenRefs.delete(ref2);
      triggerCtx == null ? void 0 : triggerCtx.removeChildRef(ref2);
    };
    provide(triggerInjectionKey, reactive({
      onMouseenter: handleMouseEnterWithContext,
      onMouseleave: handleMouseLeaveWithContext,
      addChildRef,
      removeChildRef
    }));
    const removeOutsideListener = () => {
      off(document.documentElement, "mousedown", handleOutsideClick);
      outsideListener = false;
    };
    const contentSlot = usePickSlots(slots, "content");
    const hidePopup = computed(() => {
      var _a;
      return props.hideEmpty && isEmptyChildren((_a = contentSlot.value) == null ? void 0 : _a.call(contentSlot));
    });
    const handleOutsideClick = (e2) => {
      var _a, _b, _c;
      if (((_a = firstElement.value) == null ? void 0 : _a.contains(e2.target)) || ((_b = popupRef.value) == null ? void 0 : _b.contains(e2.target))) {
        return;
      }
      for (const item of childrenRefs) {
        if ((_c = item.value) == null ? void 0 : _c.contains(e2.target)) {
          return;
        }
      }
      removeOutsideListener();
      changeVisible(false);
    };
    const isExceedThreshold = (oldPosition, element) => {
      const [scrollTop, scrollLeft] = oldPosition;
      const {
        scrollTop: newScrollTop,
        scrollLeft: newScrollLeft
      } = element;
      return Math.abs(newScrollTop - scrollTop) >= props.scrollToCloseDistance || Math.abs(newScrollLeft - scrollLeft) >= props.scrollToCloseDistance;
    };
    const handleScroll = throttleByRaf((e2) => {
      if (computedVisible.value) {
        if (props.scrollToClose || (configCtx == null ? void 0 : configCtx.scrollToClose)) {
          const element = e2.target;
          if (!scrollPosition) {
            scrollPosition = [element.scrollTop, element.scrollLeft];
          }
          if (isExceedThreshold(scrollPosition, element)) {
            changeVisible(false);
          } else {
            updatePopupStyle();
          }
        } else {
          updatePopupStyle();
        }
      }
    });
    const removeWindowScroll = () => {
      off(window, "scroll", onWindowScroll);
      windowListener = false;
    };
    const onWindowScroll = throttleByRaf((e2) => {
      const element = e2.target.documentElement;
      if (!windowScrollPosition) {
        windowScrollPosition = [element.scrollTop, element.scrollLeft];
      }
      if (isExceedThreshold(windowScrollPosition, element)) {
        changeVisible(false);
        removeWindowScroll();
      }
    });
    const handleResize = () => {
      if (computedVisible.value) {
        updatePopupStyle();
      }
    };
    const onTargetResize = () => {
      handleResize();
      emit("resize");
    };
    const handlePopupMouseDown = (e2) => {
      if (props.preventFocus) {
        e2.preventDefault();
      }
    };
    triggerCtx == null ? void 0 : triggerCtx.addChildRef(popupRef);
    const triggerCls = computed(() => {
      return computedVisible.value ? props.openedClass : void 0;
    });
    let scrollElements;
    watch(computedVisible, (value) => {
      if (props.clickOutsideToClose) {
        if (!value && outsideListener) {
          removeOutsideListener();
        } else if (value && !outsideListener) {
          on(document.documentElement, "mousedown", handleOutsideClick);
          outsideListener = true;
        }
      }
      if (props.scrollToClose || (configCtx == null ? void 0 : configCtx.scrollToClose)) {
        on(window, "scroll", onWindowScroll);
        windowListener = true;
      }
      if (props.updateAtScroll || (configCtx == null ? void 0 : configCtx.updateAtScroll)) {
        if (value) {
          scrollElements = getScrollElements(firstElement.value);
          for (const item of scrollElements) {
            item.addEventListener("scroll", handleScroll);
          }
        } else if (scrollElements) {
          for (const item of scrollElements) {
            item.removeEventListener("scroll", handleScroll);
          }
          scrollElements = void 0;
        }
      }
      if (value) {
        mounted.value = true;
      }
    });
    watch(() => [props.autoFitPopupWidth, props.autoFitPopupMinWidth], () => {
      if (computedVisible.value) {
        updatePopupStyle();
      }
    });
    const {
      createResizeObserver,
      destroyResizeObserver
    } = useResizeObserver({
      elementRef: containerRef,
      onResize: handleResize
    });
    onMounted(() => {
      createResizeObserver();
      if (computedVisible.value) {
        updatePopupStyle();
        if (props.clickOutsideToClose && !outsideListener) {
          on(document.documentElement, "mousedown", handleOutsideClick);
          outsideListener = true;
        }
        if (props.updateAtScroll || (configCtx == null ? void 0 : configCtx.updateAtScroll)) {
          scrollElements = getScrollElements(firstElement.value);
          for (const item of scrollElements) {
            item.addEventListener("scroll", handleScroll);
          }
        }
      }
    });
    onUpdated(() => {
      if (computedVisible.value) {
        updatePopupStyle();
      }
    });
    onDeactivated(() => {
      changeVisible(false);
    });
    onBeforeUnmount(() => {
      triggerCtx == null ? void 0 : triggerCtx.removeChildRef(popupRef);
      destroyResizeObserver();
      if (outsideListener) {
        removeOutsideListener();
      }
      if (windowListener) {
        removeWindowScroll();
      }
      if (scrollElements) {
        for (const item of scrollElements) {
          item.removeEventListener("scroll", handleScroll);
        }
        scrollElements = void 0;
      }
    });
    const mounted = ref(computedVisible.value);
    const isAnimation = ref(false);
    const onAnimationStart = () => {
      isAnimation.value = true;
    };
    const handleShow = () => {
      isAnimation.value = false;
      if (computedVisible.value) {
        emit("show");
      }
    };
    const handleHide = () => {
      isAnimation.value = false;
      if (!computedVisible.value) {
        mounted.value = false;
        emit("hide");
      }
    };
    return () => {
      var _a, _b;
      children.value = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) != null ? _b : [];
      mergeFirstChild(children.value, {
        class: triggerCls.value,
        onClick: handleClick,
        onMouseenter: handleMouseEnter,
        onMouseleave: handleMouseLeave,
        onFocusin: handleFocusin,
        onFocusout: handleFocusout,
        onContextmenu: handleContextmenu
      });
      return createVNode(Fragment, null, [props.autoFixPosition ? createVNode(ResizeObserver, {
        "onResize": onTargetResize
      }, {
        default: () => [children.value]
      }) : children.value, createVNode(ClientOnly, null, {
        default: () => [createVNode(Teleport, {
          "to": teleportContainer.value,
          "disabled": !props.renderToBody
        }, {
          default: () => [(!props.unmountOnClose || computedVisible.value || mounted.value) && !hidePopup.value && createVNode(ResizeObserver, {
            "onResize": handleResize
          }, {
            default: () => [createVNode("div", mergeProps({
              "ref": popupRef,
              "class": [`${prefixCls}-popup`, `${prefixCls}-position-${popupPosition.value}`],
              "style": __spreadProps$2(__spreadValues$7({}, popupStyle.value), {
                zIndex: zIndex.value,
                pointerEvents: isAnimation.value ? "none" : "auto"
              }),
              "trigger-placement": popupPosition.value,
              "onMouseenter": handleMouseEnterWithContext,
              "onMouseleave": handleMouseLeaveWithContext,
              "onMousedown": handlePopupMouseDown
            }, popupAttrs.value), [createVNode(Transition, {
              "name": props.animationName,
              "duration": props.duration,
              "appear": true,
              "onBeforeEnter": onAnimationStart,
              "onAfterEnter": handleShow,
              "onBeforeLeave": onAnimationStart,
              "onAfterLeave": handleHide
            }, {
              default: () => {
                var _a2;
                return [withDirectives(createVNode("div", {
                  "class": `${prefixCls}-popup-wrapper`,
                  "style": transformStyle.value
                }, [createVNode("div", {
                  "class": [`${prefixCls}-content`, props.contentClass],
                  "style": props.contentStyle
                }, [(_a2 = slots.content) == null ? void 0 : _a2.call(slots)]), props.showArrow && createVNode("div", {
                  "ref": arrowRef,
                  "class": [`${prefixCls}-arrow`, props.arrowClass],
                  "style": arrowStyle.value
                }, null)]), [[vShow, computedVisible.value]])];
              }
            })])]
          })]
        })]
      })]);
    };
  }
});
const Trigger = Object.assign(_Trigger, {
  install: (app, options) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);
    app.component(componentPrefix + _Trigger.name, _Trigger);
  }
});
const _sfc_main$c = defineComponent({
  name: "IconEmpty",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (value) => {
        return ["butt", "round", "square"].includes(value);
      }
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (value) => {
        return ["arcs", "bevel", "miter", "miter-clip", "round"].includes(value);
      }
    },
    rotate: Number,
    spin: Boolean
  },
  emits: {
    click: (ev) => true
  },
  setup(props, {
    emit
  }) {
    const prefixCls = getPrefixCls("icon");
    const cls = computed(() => [prefixCls, `${prefixCls}-empty`, {
      [`${prefixCls}-spin`]: props.spin
    }]);
    const innerStyle = computed(() => {
      const styles = {};
      if (props.size) {
        styles.fontSize = isNumber$1(props.size) ? `${props.size}px` : props.size;
      }
      if (props.rotate) {
        styles.transform = `rotate(${props.rotate}deg)`;
      }
      return styles;
    });
    const onClick = (ev) => {
      emit("click", ev);
    };
    return {
      cls,
      innerStyle,
      onClick
    };
  }
});
const _hoisted_1$5 = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
const _hoisted_2$4 = /* @__PURE__ */ createElementVNode("path", {
  d: "M24 5v6m7 1 4-4m-18 4-4-4m28.5 22H28s-1 3-4 3-4-3-4-3H6.5M40 41H8a2 2 0 0 1-2-2v-8.46a2 2 0 0 1 .272-1.007l6.15-10.54A2 2 0 0 1 14.148 18H33.85a2 2 0 0 1 1.728.992l6.149 10.541A2 2 0 0 1 42 30.541V39a2 2 0 0 1-2 2Z"
}, null, -1);
const _hoisted_3$4 = [_hoisted_2$4];
function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: normalizeClass(_ctx.cls),
    style: normalizeStyle(_ctx.innerStyle),
    "stroke-width": _ctx.strokeWidth,
    "stroke-linecap": _ctx.strokeLinecap,
    "stroke-linejoin": _ctx.strokeLinejoin,
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClick && _ctx.onClick(...args))
  }, _hoisted_3$4, 14, _hoisted_1$5);
}
var _IconEmpty = /* @__PURE__ */ _export_sfc$1(_sfc_main$c, [["render", _sfc_render$b]]);
const IconEmpty = Object.assign(_IconEmpty, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconEmpty.name, _IconEmpty);
  }
});
var Empty$1 = defineComponent({
  name: "Empty",
  props: {
    description: String,
    imgSrc: String,
    inConfigProvider: {
      type: Boolean,
      default: false
    }
  },
  setup(props, {
    slots
  }) {
    const prefixCls = getPrefixCls("empty");
    const {
      t: t2
    } = useI18n();
    const configCtx = inject(configProviderInjectionKey, void 0);
    return () => {
      var _a, _b, _c, _d;
      if (!props.inConfigProvider && (configCtx == null ? void 0 : configCtx.slots.empty) && !(slots.image || props.imgSrc || props.description)) {
        return configCtx.slots.empty({
          component: "empty"
        });
      }
      return createVNode("div", {
        "class": prefixCls
      }, [createVNode("div", {
        "class": `${prefixCls}-image`
      }, [(_b = (_a = slots.image) == null ? void 0 : _a.call(slots)) != null ? _b : props.imgSrc ? createVNode("img", {
        "src": props.imgSrc,
        "alt": props.description || "empty"
      }, null) : createVNode(IconEmpty, null, null)]), createVNode("div", {
        "class": `${prefixCls}-description`
      }, [(_d = (_c = slots.default) == null ? void 0 : _c.call(slots)) != null ? _d : props.description || t2("empty.description")])]);
    };
  }
});
const Empty = Object.assign(Empty$1, {
  install: (app, options) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);
    app.component(componentPrefix + Empty$1.name, Empty$1);
  }
});
const KEYBOARD_KEY = {
  ENTER: "Enter",
  ESC: "Escape",
  BACKSPACE: "Backspace",
  TAB: "Tab",
  SPACE: " ",
  ARROW_UP: "ArrowUp",
  ARROW_DOWN: "ArrowDown",
  ARROW_LEFT: "ArrowLeft",
  ARROW_RIGHT: "ArrowRight"
};
const radioGroupKey = Symbol("RadioGroup");
var _Radio = defineComponent({
  name: "Radio",
  components: {
    IconHover
  },
  props: {
    modelValue: {
      type: [String, Number, Boolean],
      default: void 0
    },
    defaultChecked: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number, Boolean],
      default: true
    },
    type: {
      type: String,
      default: "radio"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    uninjectGroupContext: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    "update:modelValue": (value) => true,
    "change": (value, ev) => true
  },
  setup(props, {
    emit,
    slots
  }) {
    const prefixCls = getPrefixCls("radio");
    const {
      modelValue
    } = toRefs(props);
    const radioGroupCtx = !props.uninjectGroupContext ? inject(radioGroupKey, void 0) : void 0;
    const {
      mergedDisabled: _mergedDisabled,
      eventHandlers
    } = useFormItem({
      disabled: toRef(props, "disabled")
    });
    const inputRef = ref(null);
    const _checked = ref(props.defaultChecked);
    const isGroup = computed(() => (radioGroupCtx == null ? void 0 : radioGroupCtx.name) === "ArcoRadioGroup");
    const mergedType = computed(() => {
      var _a;
      return (_a = radioGroupCtx == null ? void 0 : radioGroupCtx.type) != null ? _a : props.type;
    });
    const mergedDisabled = computed(() => (radioGroupCtx == null ? void 0 : radioGroupCtx.disabled) || _mergedDisabled.value);
    const computedChecked = computed(() => {
      var _a, _b;
      if (isGroup.value) {
        return (radioGroupCtx == null ? void 0 : radioGroupCtx.value) === ((_a = props.value) != null ? _a : true);
      }
      if (!isUndefined(props.modelValue)) {
        return props.modelValue === ((_b = props.value) != null ? _b : true);
      }
      return _checked.value;
    });
    watch(modelValue, (value) => {
      if (isUndefined(value) || isNull(value)) {
        _checked.value = false;
      }
    });
    watch(computedChecked, (curValue, preValue) => {
      if (curValue !== preValue) {
        _checked.value = curValue;
        if (inputRef.value) {
          inputRef.value.checked = curValue;
        }
      }
    });
    const handleFocus = (ev) => {
      var _a, _b;
      (_b = (_a = eventHandlers.value) == null ? void 0 : _a.onFocus) == null ? void 0 : _b.call(_a, ev);
    };
    const handleBlur = (ev) => {
      var _a, _b;
      (_b = (_a = eventHandlers.value) == null ? void 0 : _a.onBlur) == null ? void 0 : _b.call(_a, ev);
    };
    const handleClick = (ev) => {
      ev.stopPropagation();
    };
    const handleChange = (e2) => {
      var _a, _b, _c, _d, _e;
      _checked.value = true;
      if (isGroup.value) {
        radioGroupCtx == null ? void 0 : radioGroupCtx.handleChange((_a = props.value) != null ? _a : true, e2);
      } else {
        emit("update:modelValue", (_b = props.value) != null ? _b : true);
        emit("change", (_c = props.value) != null ? _c : true, e2);
        (_e = (_d = eventHandlers.value) == null ? void 0 : _d.onChange) == null ? void 0 : _e.call(_d, e2);
      }
      nextTick(() => {
        if (inputRef.value && inputRef.value.checked !== computedChecked.value) {
          inputRef.value.checked = computedChecked.value;
        }
      });
    };
    const cls = computed(() => [`${mergedType.value === "button" ? `${prefixCls}-button` : prefixCls}`, {
      [`${prefixCls}-checked`]: computedChecked.value,
      [`${prefixCls}-disabled`]: mergedDisabled.value
    }]);
    const defaultRadio = () => createVNode(Fragment, null, [createVNode(resolveComponent("icon-hover"), {
      "class": `${prefixCls}-icon-hover`,
      "disabled": mergedDisabled.value || computedChecked.value
    }, {
      default: () => [createVNode("span", {
        "class": `${prefixCls}-icon`
      }, null)]
    }), slots.default && createVNode("span", {
      "class": `${prefixCls}-label`
    }, [slots.default()])]);
    return () => {
      var _a, _b, _c, _d;
      return createVNode("label", {
        "class": cls.value
      }, [createVNode("input", {
        "ref": inputRef,
        "type": "radio",
        "checked": computedChecked.value,
        "value": props.value,
        "class": `${prefixCls}-target`,
        "disabled": mergedDisabled.value,
        "onClick": handleClick,
        "onChange": handleChange,
        "onFocus": handleFocus,
        "onBlur": handleBlur
      }, null), mergedType.value === "radio" ? (_d = (_c = (_b = slots.radio) != null ? _b : (_a = radioGroupCtx == null ? void 0 : radioGroupCtx.slots) == null ? void 0 : _a.radio) == null ? void 0 : _c({
        checked: computedChecked.value,
        disabled: mergedDisabled.value
      })) != null ? _d : defaultRadio() : createVNode("span", {
        "class": `${prefixCls}-button-content`
      }, [slots.default && slots.default()])]);
    };
  }
});
var RadioGroup = defineComponent({
  name: "RadioGroup",
  props: {
    modelValue: {
      type: [String, Number, Boolean],
      default: void 0
    },
    defaultValue: {
      type: [String, Number, Boolean],
      default: ""
    },
    type: {
      type: String,
      default: "radio"
    },
    size: {
      type: String
    },
    options: {
      type: Array
    },
    direction: {
      type: String,
      default: "horizontal"
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    "update:modelValue": (value) => true,
    "change": (value, ev) => true
  },
  setup(props, {
    emit,
    slots
  }) {
    const prefixCls = getPrefixCls("radio-group");
    const {
      size,
      type,
      disabled,
      modelValue
    } = toRefs(props);
    const {
      mergedDisabled,
      mergedSize,
      eventHandlers
    } = useFormItem({
      size,
      disabled
    });
    const _value = ref(props.defaultValue);
    const computedValue = computed(() => {
      var _a;
      return (_a = props.modelValue) != null ? _a : _value.value;
    });
    const options = computed(() => {
      var _a;
      return ((_a = props.options) != null ? _a : []).map((option) => {
        if (isString$1(option) || isNumber$1(option)) {
          return {
            label: option,
            value: option
          };
        }
        return option;
      });
    });
    const handleChange = (value, e2) => {
      var _a, _b;
      _value.value = value;
      emit("update:modelValue", value);
      emit("change", value, e2);
      (_b = (_a = eventHandlers.value) == null ? void 0 : _a.onChange) == null ? void 0 : _b.call(_a, e2);
    };
    provide(radioGroupKey, reactive({
      name: "ArcoRadioGroup",
      value: computedValue,
      size: mergedSize,
      type,
      disabled: mergedDisabled,
      slots,
      handleChange
    }));
    watch(computedValue, (cur) => {
      if (_value.value !== cur) {
        _value.value = cur;
      }
    });
    watch(modelValue, (val) => {
      if (isUndefined(val) || isNull(val)) {
        _value.value = "";
      }
    });
    const cls = computed(() => [`${prefixCls}${props.type === "button" ? "-button" : ""}`, `${prefixCls}-size-${mergedSize.value}`, `${prefixCls}-direction-${props.direction}`, {
      [`${prefixCls}-disabled`]: mergedDisabled.value
    }]);
    const renderOptions = () => {
      return options.value.map((option) => createVNode(_Radio, {
        "key": option.value,
        "value": option.value,
        "disabled": option.disabled,
        "modelValue": computedValue.value === option.value
      }, {
        default: () => [slots.label ? slots.label({
          data: option
        }) : isFunction$1(option.label) ? option.label() : option.label]
      }));
    };
    return () => {
      var _a;
      return createVNode("span", {
        "class": cls.value
      }, [options.value.length > 0 ? renderOptions() : (_a = slots.default) == null ? void 0 : _a.call(slots)]);
    };
  }
});
const getValueByPath = (obj, path) => {
  if (!obj || !path) {
    return void 0;
  }
  path = path.replace(/\[(\w+)\]/g, ".$1");
  const keys = path.split(".");
  if (keys.length === 0) {
    return void 0;
  }
  let temp = obj;
  for (let i2 = 0; i2 < keys.length; i2++) {
    if (!isObject$1(temp) && !isArray$1(temp) || !keys[i2]) {
      return void 0;
    }
    if (i2 !== keys.length - 1) {
      temp = temp[keys[i2]];
    } else {
      return temp[keys[i2]];
    }
  }
  return void 0;
};
const setValueByPath = (obj, path, value, {
  addPath
} = {}) => {
  if (!obj || !path) {
    return;
  }
  path = path.replace(/\[(\w+)\]/g, ".$1");
  const keys = path.split(".");
  if (keys.length === 0) {
    return;
  }
  let temp = obj;
  for (let i2 = 0; i2 < keys.length; i2++) {
    if (!isObject$1(temp) && !isArray$1(temp) || !keys[i2]) {
      return;
    }
    if (i2 !== keys.length - 1) {
      if (addPath && isUndefined(temp[keys[i2]])) {
        temp[keys[i2]] = {};
      }
      temp = temp[keys[i2]];
    } else {
      temp[keys[i2]] = value;
    }
  }
};
var __defProp$6 = Object.defineProperty;
var __defProps$1 = Object.defineProperties;
var __getOwnPropDescs$1 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$6 = Object.getOwnPropertySymbols;
var __hasOwnProp$6 = Object.prototype.hasOwnProperty;
var __propIsEnum$6 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$6 = (obj, key, value) => key in obj ? __defProp$6(obj, key, {
  enumerable: true,
  configurable: true,
  writable: true,
  value
}) : obj[key] = value;
var __spreadValues$6 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$6.call(b, prop))
      __defNormalProp$6(a, prop, b[prop]);
  if (__getOwnPropSymbols$6)
    for (var prop of __getOwnPropSymbols$6(b)) {
      if (__propIsEnum$6.call(b, prop))
        __defNormalProp$6(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$1 = (a, b) => __defProps$1(a, __getOwnPropDescs$1(b));
const responsiveArray = ["xxl", "xl", "lg", "md", "sm", "xs"];
const responsiveMap = {
  xs: "(max-width: 575px)",
  sm: "(min-width: 576px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 992px)",
  xl: "(min-width: 1200px)",
  xxl: "(min-width: 1600px)"
};
let subscribers = [];
let subUid = -1;
let screens = {};
const responsiveObserve = {
  matchHandlers: {},
  dispatch(pointMap, breakpointChecked) {
    screens = pointMap;
    if (subscribers.length < 1) {
      return false;
    }
    subscribers.forEach((item) => {
      item.func(screens, breakpointChecked);
    });
    return true;
  },
  subscribe(func) {
    if (subscribers.length === 0) {
      this.register();
    }
    const token = (++subUid).toString();
    subscribers.push({
      token,
      func
    });
    func(screens, null);
    return token;
  },
  unsubscribe(token) {
    subscribers = subscribers.filter((item) => item.token !== token);
    if (subscribers.length === 0) {
      this.unregister();
    }
  },
  unregister() {
    Object.keys(responsiveMap).forEach((screen) => {
      const matchMediaQuery = responsiveMap[screen];
      if (!matchMediaQuery)
        return;
      const handler = this.matchHandlers[matchMediaQuery];
      if (handler && handler.mql && handler.listener) {
        if (handler.mql.removeEventListener) {
          handler.mql.removeEventListener("change", handler.listener);
        } else {
          handler.mql.removeListener(handler.listener);
        }
      }
    });
  },
  register() {
    Object.keys(responsiveMap).forEach((screen) => {
      const matchMediaQuery = responsiveMap[screen];
      if (!matchMediaQuery)
        return;
      const listener = ({
        matches
      }) => {
        this.dispatch(__spreadProps$1(__spreadValues$6({}, screens), {
          [screen]: matches
        }), screen);
      };
      const mql = window.matchMedia(matchMediaQuery);
      if (mql.addEventListener) {
        mql.addEventListener("change", listener);
      } else {
        mql.addListener(listener);
      }
      this.matchHandlers[matchMediaQuery] = {
        mql,
        listener
      };
      listener(mql);
    });
  }
};
function isResponsiveValue(val) {
  return isObject$1(val);
}
function useResponsiveState(val, defaultVal, fallbackToXs = false) {
  const screens2 = ref({
    xs: true,
    sm: true,
    md: true,
    lg: true,
    xl: true,
    xxl: true
  });
  const result = computed(() => {
    let res = defaultVal;
    if (isResponsiveValue(val.value)) {
      for (let i2 = 0; i2 < responsiveArray.length; i2++) {
        const breakpoint = responsiveArray[i2];
        if ((screens2.value[breakpoint] || breakpoint === "xs" && fallbackToXs) && val.value[breakpoint] !== void 0) {
          res = val.value[breakpoint];
          break;
        }
      }
    } else {
      res = val.value;
    }
    return res;
  });
  let subscribeToken = "";
  onMounted(() => {
    subscribeToken = responsiveObserve.subscribe((screensVal) => {
      if (isResponsiveValue(val.value)) {
        screens2.value = screensVal;
      }
    });
  });
  onUnmounted(() => {
    if (subscribeToken) {
      responsiveObserve.unsubscribe(subscribeToken);
    }
  });
  return result;
}
const useOverflow = (elementRef) => {
  const isSetOverflow = ref(false);
  const originStyle = {
    overflow: "",
    width: "",
    boxSizing: ""
  };
  const setOverflowHidden = () => {
    if (elementRef.value) {
      const element = elementRef.value;
      if (!isSetOverflow.value && element.style.overflow !== "hidden") {
        const scrollBarWidth = getScrollBarWidth(element);
        if (scrollBarWidth > 0 || isScroll(element)) {
          originStyle.overflow = element.style.overflow;
          originStyle.width = element.style.width;
          originStyle.boxSizing = element.style.boxSizing;
          element.style.overflow = "hidden";
          element.style.width = `${element.offsetWidth - scrollBarWidth}px`;
          element.style.boxSizing = "border-box";
          isSetOverflow.value = true;
        }
      }
    }
  };
  const resetOverflow = () => {
    if (elementRef.value && isSetOverflow.value) {
      const element = elementRef.value;
      element.style.overflow = originStyle.overflow;
      element.style.width = originStyle.width;
      element.style.boxSizing = originStyle.boxSizing;
      isSetOverflow.value = false;
    }
  };
  return {
    setOverflowHidden,
    resetOverflow
  };
};
function isOptionsObject(options) {
  return options === Object(options) && Object.keys(options).length !== 0;
}
function defaultBehavior(actions, behavior) {
  if (behavior === void 0) {
    behavior = "auto";
  }
  var canSmoothScroll = "scrollBehavior" in document.body.style;
  actions.forEach(function(_ref) {
    var el = _ref.el, top = _ref.top, left = _ref.left;
    if (el.scroll && canSmoothScroll) {
      el.scroll({
        top,
        left,
        behavior
      });
    } else {
      el.scrollTop = top;
      el.scrollLeft = left;
    }
  });
}
function getOptions(options) {
  if (options === false) {
    return {
      block: "end",
      inline: "nearest"
    };
  }
  if (isOptionsObject(options)) {
    return options;
  }
  return {
    block: "start",
    inline: "nearest"
  };
}
function scrollIntoView(target2, options) {
  var isTargetAttached = target2.isConnected || target2.ownerDocument.documentElement.contains(target2);
  if (isOptionsObject(options) && typeof options.behavior === "function") {
    return options.behavior(isTargetAttached ? i(target2, options) : []);
  }
  if (!isTargetAttached) {
    return;
  }
  var computeOptions = getOptions(options);
  return defaultBehavior(i(target2, computeOptions), computeOptions.behavior);
}
const VALIDATE_STATUSES = ["success", "warning", "error", "validating"];
const getFinalValidateStatus = (validateStatus) => {
  let status = "";
  for (const key of Object.keys(validateStatus)) {
    const _status = validateStatus[key];
    if (_status) {
      if (!status || VALIDATE_STATUSES.indexOf(_status) > VALIDATE_STATUSES.indexOf(status)) {
        status = validateStatus[key];
      }
    }
  }
  return status;
};
const getFinalValidateMessage = (validateMessage) => {
  const messages2 = [];
  for (const key of Object.keys(validateMessage)) {
    const _message = validateMessage[key];
    if (_message) {
      messages2.push(_message);
    }
  }
  return messages2;
};
const getFormElementId = (prefix, field) => {
  const id = field.replace(/[[.]/g, "_").replace(/\]/g, "");
  return prefix ? `${prefix}-${id}` : `${id}`;
};
var __defProp$5 = Object.defineProperty;
var __getOwnPropSymbols$5 = Object.getOwnPropertySymbols;
var __hasOwnProp$5 = Object.prototype.hasOwnProperty;
var __propIsEnum$5 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$5 = (obj, key, value) => key in obj ? __defProp$5(obj, key, {
  enumerable: true,
  configurable: true,
  writable: true,
  value
}) : obj[key] = value;
var __spreadValues$5 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$5.call(b, prop))
      __defNormalProp$5(a, prop, b[prop]);
  if (__getOwnPropSymbols$5)
    for (var prop of __getOwnPropSymbols$5(b)) {
      if (__propIsEnum$5.call(b, prop))
        __defNormalProp$5(a, prop, b[prop]);
    }
  return a;
};
const _sfc_main$b = defineComponent({
  name: "Form",
  props: {
    model: {
      type: Object,
      required: true
    },
    layout: {
      type: String,
      default: "horizontal"
    },
    size: {
      type: String
    },
    labelColProps: {
      type: Object,
      default: () => ({
        span: 5,
        offset: 0
      })
    },
    wrapperColProps: {
      type: Object,
      default: () => ({
        span: 19,
        offset: 0
      })
    },
    labelColStyle: Object,
    wrapperColStyle: Object,
    labelAlign: {
      type: String,
      default: "right"
    },
    disabled: {
      type: Boolean,
      default: void 0
    },
    rules: {
      type: Object
    },
    autoLabelWidth: {
      type: Boolean,
      default: false
    },
    id: {
      type: String
    },
    scrollToFirstError: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    submit: (data, ev) => true,
    submitSuccess: (values, ev) => true,
    submitFailed: (data, ev) => true
  },
  setup(props, {
    emit
  }) {
    const prefixCls = getPrefixCls("form");
    const formRef = ref();
    const {
      id,
      model,
      layout,
      disabled,
      labelAlign,
      labelColProps,
      wrapperColProps,
      labelColStyle,
      wrapperColStyle,
      size,
      rules
    } = toRefs(props);
    const {
      mergedSize
    } = useSize(size);
    const autoLabelWidth = computed(() => props.layout === "horizontal" && props.autoLabelWidth);
    const fields = [];
    const touchedFields = [];
    const labelWidth = reactive({});
    const maxLabelWidth = computed(() => Math.max(...Object.values(labelWidth)));
    const addField = (formItemInfo) => {
      if (formItemInfo && formItemInfo.field) {
        fields.push(formItemInfo);
      }
    };
    const removeField = (formItemInfo) => {
      if (formItemInfo && formItemInfo.field) {
        fields.splice(fields.indexOf(formItemInfo), 1);
      }
    };
    const setFields = (data) => {
      fields.forEach((field) => {
        if (data[field.field]) {
          field.setField(data[field.field]);
        }
      });
    };
    const setLabelWidth = (width, uid) => {
      if (uid && labelWidth[uid] !== width) {
        labelWidth[uid] = width;
      }
    };
    const removeLabelWidth = (uid) => {
      if (uid) {
        delete labelWidth[uid];
      }
    };
    const resetFields = (field) => {
      const _fields = field ? [].concat(field) : [];
      fields.forEach((field2) => {
        if (_fields.length === 0 || _fields.includes(field2.field)) {
          field2.resetField();
        }
      });
    };
    const clearValidate = (field) => {
      const _fields = field ? [].concat(field) : [];
      fields.forEach((field2) => {
        if (_fields.length === 0 || _fields.includes(field2.field)) {
          field2.clearValidate();
        }
      });
    };
    const scrollToField = (field, options) => {
      const node = formRef.value || document.body;
      const fieldNode = node.querySelector(`#${getFormElementId(props.id, field)}`);
      if (fieldNode) {
        scrollIntoView(fieldNode, __spreadValues$5({
          behavior: "smooth",
          block: "nearest",
          scrollMode: "if-needed"
        }, options));
      }
    };
    const scrollToFirstError = (field) => {
      const options = !isBoolean$1(props.scrollToFirstError) ? props.scrollToFirstError : void 0;
      scrollToField(field, options);
    };
    const validate3 = (callback) => {
      const list = [];
      fields.forEach((field) => {
        list.push(field.validate());
      });
      return Promise.all(list).then((result) => {
        const errors = {};
        let hasError = false;
        result.forEach((item) => {
          if (item) {
            hasError = true;
            errors[item.field] = item;
          }
        });
        if (hasError && props.scrollToFirstError) {
          scrollToFirstError(Object.keys(errors)[0]);
        }
        if (isFunction$1(callback)) {
          callback(hasError ? errors : void 0);
        }
        return hasError ? errors : void 0;
      });
    };
    const validateField = (field, callback) => {
      const list = [];
      for (const ctx of fields) {
        if (isArray$1(field) && field.includes(ctx.field) || field === ctx.field) {
          list.push(ctx.validate());
        }
      }
      return Promise.all(list).then((result) => {
        const errors = {};
        let hasError = false;
        result.forEach((item) => {
          if (item) {
            hasError = true;
            errors[item.field] = item;
          }
        });
        if (hasError && props.scrollToFirstError) {
          scrollToFirstError(Object.keys(errors)[0]);
        }
        if (isFunction$1(callback)) {
          callback(hasError ? errors : void 0);
        }
        return hasError ? errors : void 0;
      });
    };
    const handleSubmit = (e2) => {
      const list = [];
      fields.forEach((field) => {
        list.push(field.validate());
      });
      Promise.all(list).then((result) => {
        const errors = {};
        let hasError = false;
        result.forEach((item) => {
          if (item) {
            hasError = true;
            errors[item.field] = item;
          }
        });
        if (hasError) {
          props.scrollToFirstError && scrollToFirstError(Object.keys(errors)[0]);
          emit("submitFailed", {
            values: model.value,
            errors
          }, e2);
        } else {
          emit("submitSuccess", model.value, e2);
        }
        emit("submit", {
          values: model.value,
          errors: hasError ? errors : void 0
        }, e2);
      });
    };
    provide(formInjectionKey, reactive({
      id,
      layout,
      disabled,
      labelAlign,
      labelColProps,
      wrapperColProps,
      labelColStyle,
      wrapperColStyle,
      model,
      size: mergedSize,
      rules,
      fields,
      touchedFields,
      addField,
      removeField,
      validateField,
      setLabelWidth,
      removeLabelWidth,
      maxLabelWidth,
      autoLabelWidth
    }));
    const cls = computed(() => [prefixCls, `${prefixCls}-layout-${props.layout}`, `${prefixCls}-size-${mergedSize.value}`, {
      [`${prefixCls}-auto-label-width`]: props.autoLabelWidth
    }]);
    return {
      cls,
      formRef,
      handleSubmit,
      innerValidate: validate3,
      innerValidateField: validateField,
      innerResetFields: resetFields,
      innerClearValidate: clearValidate,
      innerSetFields: setFields,
      innerScrollToField: scrollToField
    };
  },
  methods: {
    validate(callback) {
      return this.innerValidate(callback);
    },
    validateField(field, callback) {
      return this.innerValidateField(field, callback);
    },
    resetFields(field) {
      return this.innerResetFields(field);
    },
    clearValidate(field) {
      return this.innerClearValidate(field);
    },
    setFields(data) {
      return this.innerSetFields(data);
    },
    scrollToField(field) {
      return this.innerScrollToField(field);
    }
  }
});
function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("form", {
    ref: "formRef",
    class: normalizeClass(_ctx.cls),
    onSubmit: _cache[0] || (_cache[0] = withModifiers((...args) => _ctx.handleSubmit && _ctx.handleSubmit(...args), ["prevent"]))
  }, [renderSlot(_ctx.$slots, "default")], 34);
}
var _Form = /* @__PURE__ */ _export_sfc$1(_sfc_main$b, [["render", _sfc_render$a]]);
var opt = Object.prototype.toString;
function isArray(obj) {
  return opt.call(obj) === "[object Array]";
}
function isObject(obj) {
  return opt.call(obj) === "[object Object]";
}
function isString(obj) {
  return opt.call(obj) === "[object String]";
}
function isNumber(obj) {
  return opt.call(obj) === "[object Number]" && obj === obj;
}
function isBoolean(obj) {
  return opt.call(obj) === "[object Boolean]";
}
function isFunction(obj) {
  return opt.call(obj) === "[object Function]";
}
function isEmptyObject(obj) {
  return isObject(obj) && Object.keys(obj).length === 0;
}
function isEmptyValue(obj) {
  return obj === void 0 || obj === null || obj === "";
}
function isEmptyArray(obj) {
  return isArray(obj) && !obj.length;
}
var isEqual = function(obj, other) {
  if (typeof obj !== "object" || typeof other !== "object") {
    return obj === other;
  }
  if (isFunction(obj) && isFunction(other)) {
    return obj === other || obj.toString() === other.toString();
  }
  if (Object.keys(obj).length !== Object.keys(other).length) {
    return false;
  }
  for (var key in obj) {
    var result = isEqual(obj[key], other[key]);
    if (!result) {
      return false;
    }
  }
  return true;
};
var mergeTemplate = function(defaultValidateMessages, validateMessages) {
  var result = Object.assign({}, defaultValidateMessages);
  Object.keys(validateMessages || {}).forEach(function(key) {
    var defaultValue = result[key];
    var newValue = validateMessages === null || validateMessages === void 0 ? void 0 : validateMessages[key];
    result[key] = isObject(defaultValue) ? Object.assign(Object.assign({}, defaultValue), newValue) : newValue || defaultValue;
  });
  return result;
};
var getTemplate = function(validateMessages, keyPath) {
  var keys = keyPath.split(".");
  var result = validateMessages;
  for (var i2 = 0; i2 < keys.length; i2++) {
    result = result && result[keys[i2]];
    if (result === void 0) {
      return result;
    }
  }
  return result;
};
var defaultTypeTemplate = "#{field} is not a #{type} type";
var defaultValidateLocale = {
  required: "#{field} is required",
  type: {
    ip: defaultTypeTemplate,
    email: defaultTypeTemplate,
    url: defaultTypeTemplate,
    string: defaultTypeTemplate,
    number: defaultTypeTemplate,
    array: defaultTypeTemplate,
    object: defaultTypeTemplate,
    boolean: defaultTypeTemplate
  },
  number: {
    min: "`#{value}` is not greater than `#{min}`",
    max: "`#{value}` is not less than `#{max}`",
    equal: "`#{value}` is not equal to `#{equal}`",
    range: "`#{value}` is not in range `#{min} ~ #{max}`",
    positive: "`#{value}` is not a positive number",
    negative: "`#{value}` is not a negative number"
  },
  string: {
    maxLength: "#{field} cannot be longer than #{maxLength} characters",
    minLength: "#{field} must be at least #{minLength} characters",
    length: "#{field} must be exactly #{length} characters",
    match: "`#{value}` does not match pattern #{pattern}",
    uppercase: "`#{value}` must be all uppercase",
    lowercase: "`#{value}` must be all lowercased"
  },
  array: {
    length: "#{field} must be exactly #{length} in length",
    minLength: "#{field} cannot be less than #{minLength} in length",
    maxLength: "#{field} cannot be greater than #{maxLength} in length",
    includes: "#{field} is not includes #{includes}",
    deepEqual: "#{field} is not deep equal with #{deepEqual}",
    empty: "#{field} is not an empty array"
  },
  object: {
    deepEqual: "#{field} is not deep equal to expected value",
    hasKeys: "#{field} does not contain required fields",
    empty: "#{field} is not an empty object"
  },
  boolean: {
    true: "Expect true but got `#{value}`",
    false: "Expect false but got `#{value}`"
  }
};
var Base = function Base2(obj, options) {
  var this$1$1 = this;
  this.getValidateMsg = function(keyPath, info) {
    if (info === void 0)
      info = {};
    var data = Object.assign(Object.assign({}, info), {
      value: this$1$1.obj,
      field: this$1$1.field,
      type: this$1$1.type
    });
    var template = getTemplate(this$1$1.validateMessages, keyPath);
    if (isFunction(template)) {
      return template(data);
    }
    if (isString(template)) {
      return template.replace(/\#\{.+?\}/g, function(variable) {
        var key = variable.slice(2, -1);
        if (key in data) {
          if (isObject(data[key]) || isArray(data[key])) {
            try {
              return JSON.stringify(data[key]);
            } catch (_) {
              return data[key];
            }
          }
          return String(data[key]);
        }
        return variable;
      });
    }
    return template;
  };
  if (isObject(options) && isString(obj) && options.trim) {
    this.obj = obj.trim();
  } else if (isObject(options) && options.ignoreEmptyString && obj === "") {
    this.obj = void 0;
  } else {
    this.obj = obj;
  }
  this.message = options.message;
  this.type = options.type;
  this.error = null;
  this.field = options.field || options.type;
  this.validateMessages = mergeTemplate(defaultValidateLocale, options.validateMessages);
};
var prototypeAccessors = {
  not: {
    configurable: true
  },
  isRequired: {
    configurable: true
  },
  end: {
    configurable: true
  }
};
prototypeAccessors.not.get = function() {
  this._not = !this._not;
  return this;
};
prototypeAccessors.isRequired.get = function() {
  if (isEmptyValue(this.obj) || isEmptyArray(this.obj)) {
    var message = this.getValidateMsg("required");
    this.error = {
      value: this.obj,
      type: this.type,
      requiredError: true,
      message: this.message || (isObject(message) ? message : (this._not ? "[NOT MODE]:" : "") + message)
    };
  }
  return this;
};
prototypeAccessors.end.get = function() {
  return this.error;
};
Base.prototype.addError = function addError(message) {
  if (!this.error && message) {
    this.error = {
      value: this.obj,
      type: this.type,
      message: this.message || (isObject(message) ? message : (this._not ? "[NOT MODE]:" : "") + message)
    };
  }
};
Base.prototype.validate = function validate(expression, errorMessage) {
  var _expression = this._not ? expression : !expression;
  if (_expression) {
    this.addError(errorMessage);
  }
  return this;
};
Base.prototype.collect = function collect(callback) {
  callback && callback(this.error);
};
Object.defineProperties(Base.prototype, prototypeAccessors);
var StringValidator = /* @__PURE__ */ function(Base3) {
  function StringValidator2(obj, options) {
    Base3.call(this, obj, Object.assign(Object.assign({}, options), {
      type: "string"
    }));
    this.validate(options && options.strict ? isString(this.obj) : true, this.getValidateMsg("type.string"));
  }
  if (Base3)
    StringValidator2.__proto__ = Base3;
  StringValidator2.prototype = Object.create(Base3 && Base3.prototype);
  StringValidator2.prototype.constructor = StringValidator2;
  var prototypeAccessors2 = {
    uppercase: {
      configurable: true
    },
    lowercase: {
      configurable: true
    }
  };
  StringValidator2.prototype.maxLength = function maxLength(length) {
    return this.obj ? this.validate(this.obj.length <= length, this.getValidateMsg("string.maxLength", {
      maxLength: length
    })) : this;
  };
  StringValidator2.prototype.minLength = function minLength(length) {
    return this.obj ? this.validate(this.obj.length >= length, this.getValidateMsg("string.minLength", {
      minLength: length
    })) : this;
  };
  StringValidator2.prototype.length = function length(length$1) {
    return this.obj ? this.validate(this.obj.length === length$1, this.getValidateMsg("string.length", {
      length: length$1
    })) : this;
  };
  StringValidator2.prototype.match = function match(pattern) {
    var isRegex = pattern instanceof RegExp;
    if (isRegex) {
      pattern.lastIndex = 0;
    }
    return this.validate(this.obj === void 0 || isRegex && pattern.test(this.obj), this.getValidateMsg("string.match", {
      pattern
    }));
  };
  prototypeAccessors2.uppercase.get = function() {
    return this.obj ? this.validate(this.obj.toUpperCase() === this.obj, this.getValidateMsg("string.uppercase")) : this;
  };
  prototypeAccessors2.lowercase.get = function() {
    return this.obj ? this.validate(this.obj.toLowerCase() === this.obj, this.getValidateMsg("string.lowercase")) : this;
  };
  Object.defineProperties(StringValidator2.prototype, prototypeAccessors2);
  return StringValidator2;
}(Base);
var NumberValidator = /* @__PURE__ */ function(Base3) {
  function NumberValidator2(obj, options) {
    Base3.call(this, obj, Object.assign(Object.assign({}, options), {
      type: "number"
    }));
    this.validate(options && options.strict ? isNumber(this.obj) : true, this.getValidateMsg("type.number"));
  }
  if (Base3)
    NumberValidator2.__proto__ = Base3;
  NumberValidator2.prototype = Object.create(Base3 && Base3.prototype);
  NumberValidator2.prototype.constructor = NumberValidator2;
  var prototypeAccessors2 = {
    positive: {
      configurable: true
    },
    negative: {
      configurable: true
    }
  };
  NumberValidator2.prototype.min = function min(num) {
    return !isEmptyValue(this.obj) ? this.validate(this.obj >= num, this.getValidateMsg("number.min", {
      min: num
    })) : this;
  };
  NumberValidator2.prototype.max = function max(num) {
    return !isEmptyValue(this.obj) ? this.validate(this.obj <= num, this.getValidateMsg("number.max", {
      max: num
    })) : this;
  };
  NumberValidator2.prototype.equal = function equal(num) {
    return !isEmptyValue(this.obj) ? this.validate(this.obj === num, this.getValidateMsg("number.equal", {
      equal: num
    })) : this;
  };
  NumberValidator2.prototype.range = function range(min, max) {
    return !isEmptyValue(this.obj) ? this.validate(this.obj >= min && this.obj <= max, this.getValidateMsg("number.range", {
      min,
      max
    })) : this;
  };
  prototypeAccessors2.positive.get = function() {
    return !isEmptyValue(this.obj) ? this.validate(this.obj > 0, this.getValidateMsg("number.positive")) : this;
  };
  prototypeAccessors2.negative.get = function() {
    return !isEmptyValue(this.obj) ? this.validate(this.obj < 0, this.getValidateMsg("number.negative")) : this;
  };
  Object.defineProperties(NumberValidator2.prototype, prototypeAccessors2);
  return NumberValidator2;
}(Base);
var ArrayValidator = /* @__PURE__ */ function(Base3) {
  function ArrayValidator2(obj, options) {
    Base3.call(this, obj, Object.assign(Object.assign({}, options), {
      type: "array"
    }));
    this.validate(options && options.strict ? isArray(this.obj) : true, this.getValidateMsg("type.array", {
      value: this.obj,
      type: this.type
    }));
  }
  if (Base3)
    ArrayValidator2.__proto__ = Base3;
  ArrayValidator2.prototype = Object.create(Base3 && Base3.prototype);
  ArrayValidator2.prototype.constructor = ArrayValidator2;
  var prototypeAccessors2 = {
    empty: {
      configurable: true
    }
  };
  ArrayValidator2.prototype.length = function length(num) {
    return this.obj ? this.validate(this.obj.length === num, this.getValidateMsg("array.length", {
      value: this.obj,
      length: num
    })) : this;
  };
  ArrayValidator2.prototype.minLength = function minLength(num) {
    return this.obj ? this.validate(this.obj.length >= num, this.getValidateMsg("array.minLength", {
      value: this.obj,
      minLength: num
    })) : this;
  };
  ArrayValidator2.prototype.maxLength = function maxLength(num) {
    return this.obj ? this.validate(this.obj.length <= num, this.getValidateMsg("array.maxLength", {
      value: this.obj,
      maxLength: num
    })) : this;
  };
  ArrayValidator2.prototype.includes = function includes(arrays) {
    var this$1$1 = this;
    return this.obj ? this.validate(arrays.every(function(el) {
      return this$1$1.obj.indexOf(el) !== -1;
    }), this.getValidateMsg("array.includes", {
      value: this.obj,
      includes: arrays
    })) : this;
  };
  ArrayValidator2.prototype.deepEqual = function deepEqual(other) {
    return this.obj ? this.validate(isEqual(this.obj, other), this.getValidateMsg("array.deepEqual", {
      value: this.obj,
      deepEqual: other
    })) : this;
  };
  prototypeAccessors2.empty.get = function() {
    return this.validate(isEmptyArray(this.obj), this.getValidateMsg("array.empty", {
      value: this.obj
    }));
  };
  Object.defineProperties(ArrayValidator2.prototype, prototypeAccessors2);
  return ArrayValidator2;
}(Base);
var ObjectValidator = /* @__PURE__ */ function(Base3) {
  function ObjectValidator2(obj, options) {
    Base3.call(this, obj, Object.assign(Object.assign({}, options), {
      type: "object"
    }));
    this.validate(options && options.strict ? isObject(this.obj) : true, this.getValidateMsg("type.object"));
  }
  if (Base3)
    ObjectValidator2.__proto__ = Base3;
  ObjectValidator2.prototype = Object.create(Base3 && Base3.prototype);
  ObjectValidator2.prototype.constructor = ObjectValidator2;
  var prototypeAccessors2 = {
    empty: {
      configurable: true
    }
  };
  ObjectValidator2.prototype.deepEqual = function deepEqual(other) {
    return this.obj ? this.validate(isEqual(this.obj, other), this.getValidateMsg("object.deepEqual", {
      deepEqual: other
    })) : this;
  };
  ObjectValidator2.prototype.hasKeys = function hasKeys(keys) {
    var this$1$1 = this;
    return this.obj ? this.validate(keys.every(function(el) {
      return this$1$1.obj[el];
    }), this.getValidateMsg("object.hasKeys", {
      keys
    })) : this;
  };
  prototypeAccessors2.empty.get = function() {
    return this.validate(isEmptyObject(this.obj), this.getValidateMsg("object.empty"));
  };
  Object.defineProperties(ObjectValidator2.prototype, prototypeAccessors2);
  return ObjectValidator2;
}(Base);
var BooleanValidator = /* @__PURE__ */ function(Base3) {
  function BooleanValidator2(obj, options) {
    Base3.call(this, obj, Object.assign(Object.assign({}, options), {
      type: "boolean"
    }));
    this.validate(options && options.strict ? isBoolean(this.obj) : true, this.getValidateMsg("type.boolean"));
  }
  if (Base3)
    BooleanValidator2.__proto__ = Base3;
  BooleanValidator2.prototype = Object.create(Base3 && Base3.prototype);
  BooleanValidator2.prototype.constructor = BooleanValidator2;
  var prototypeAccessors2 = {
    true: {
      configurable: true
    },
    false: {
      configurable: true
    }
  };
  prototypeAccessors2.true.get = function() {
    return this.validate(this.obj === true, this.getValidateMsg("boolean.true"));
  };
  prototypeAccessors2.false.get = function() {
    return this.validate(this.obj === false, this.getValidateMsg("boolean.false"));
  };
  Object.defineProperties(BooleanValidator2.prototype, prototypeAccessors2);
  return BooleanValidator2;
}(Base);
var regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var regexUrl = new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$", "i");
var regexIp = /^(2(5[0-5]{1}|[0-4]\d{1})|[0-1]?\d{1,2})(\.(2(5[0-5]{1}|[0-4]\d{1})|[0-1]?\d{1,2})){3}$/;
var TypeValidator = /* @__PURE__ */ function(Base3) {
  function TypeValidator2(obj, options) {
    Base3.call(this, obj, Object.assign(Object.assign({}, options), {
      type: "type"
    }));
  }
  if (Base3)
    TypeValidator2.__proto__ = Base3;
  TypeValidator2.prototype = Object.create(Base3 && Base3.prototype);
  TypeValidator2.prototype.constructor = TypeValidator2;
  var prototypeAccessors2 = {
    email: {
      configurable: true
    },
    url: {
      configurable: true
    },
    ip: {
      configurable: true
    }
  };
  prototypeAccessors2.email.get = function() {
    this.type = "email";
    return this.validate(this.obj === void 0 || regexEmail.test(this.obj), this.getValidateMsg("type.email"));
  };
  prototypeAccessors2.url.get = function() {
    this.type = "url";
    return this.validate(this.obj === void 0 || regexUrl.test(this.obj), this.getValidateMsg("type.url"));
  };
  prototypeAccessors2.ip.get = function() {
    this.type = "ip";
    return this.validate(this.obj === void 0 || regexIp.test(this.obj), this.getValidateMsg("type.ip"));
  };
  Object.defineProperties(TypeValidator2.prototype, prototypeAccessors2);
  return TypeValidator2;
}(Base);
var CustomValidator = /* @__PURE__ */ function(Base3) {
  function CustomValidator2(obj, options) {
    Base3.call(this, obj, Object.assign(Object.assign({}, options), {
      type: "custom"
    }));
  }
  if (Base3)
    CustomValidator2.__proto__ = Base3;
  CustomValidator2.prototype = Object.create(Base3 && Base3.prototype);
  CustomValidator2.prototype.constructor = CustomValidator2;
  var prototypeAccessors2 = {
    validate: {
      configurable: true
    }
  };
  prototypeAccessors2.validate.get = function() {
    var _this = this;
    return function(validator, callback) {
      var ret;
      if (validator) {
        ret = validator(_this.obj, _this.addError.bind(_this));
        if (ret && ret.then) {
          if (callback) {
            ret.then(function() {
              callback && callback(_this.error);
            }, function(e2) {
              console.error(e2);
            });
          }
          return [ret, _this];
        } else {
          callback && callback(_this.error);
          return _this.error;
        }
      }
    };
  };
  Object.defineProperties(CustomValidator2.prototype, prototypeAccessors2);
  return CustomValidator2;
}(Base);
var BValidate = function(obj, options) {
  return new Validate(obj, Object.assign({
    field: "value"
  }, options));
};
BValidate.globalConfig = {};
BValidate.setGlobalConfig = function(options) {
  BValidate.globalConfig = options || {};
};
var Validate = function Validate2(obj, _options) {
  var globalConfig = BValidate.globalConfig;
  var options = Object.assign(Object.assign(Object.assign({}, globalConfig), _options), {
    validateMessages: mergeTemplate(globalConfig.validateMessages, _options.validateMessages)
  });
  this.string = new StringValidator(obj, options);
  this.number = new NumberValidator(obj, options);
  this.array = new ArrayValidator(obj, options);
  this.object = new ObjectValidator(obj, options);
  this.boolean = new BooleanValidator(obj, options);
  this.type = new TypeValidator(obj, options);
  this.custom = new CustomValidator(obj, options);
};
var Schema = function Schema2(schema, options) {
  if (options === void 0)
    options = {};
  this.schema = schema;
  this.options = options;
};
Schema.prototype.messages = function messages(validateMessages) {
  this.options = Object.assign(Object.assign({}, this.options), {
    validateMessages: mergeTemplate(this.options.validateMessages, validateMessages)
  });
};
Schema.prototype.validate = function validate2(values, callback) {
  var this$1$1 = this;
  if (!isObject(values)) {
    return;
  }
  var promises = [];
  var errors = null;
  function setError(key, error) {
    if (!errors) {
      errors = {};
    }
    if (!errors[key] || error.requiredError) {
      errors[key] = error;
    }
  }
  if (this.schema) {
    Object.keys(this.schema).forEach(function(key) {
      if (isArray(this$1$1.schema[key])) {
        var loop = function(i3) {
          var rule = this$1$1.schema[key][i3];
          var type = rule.type;
          var message = rule.message;
          if (!type && !rule.validator) {
            throw "You must specify a type to field " + key + "!";
          }
          var _options = Object.assign(Object.assign({}, this$1$1.options), {
            message,
            field: key
          });
          if ("ignoreEmptyString" in rule) {
            _options.ignoreEmptyString = rule.ignoreEmptyString;
          }
          if ("strict" in rule) {
            _options.strict = rule.strict;
          }
          var validator = new Validate(values[key], _options);
          var bv = validator.type[type] || null;
          if (!bv) {
            if (rule.validator) {
              bv = validator.custom.validate(rule.validator);
              if (Object.prototype.toString.call(bv) === "[object Array]" && bv[0].then) {
                promises.push({
                  function: bv[0],
                  _this: bv[1],
                  key
                });
              } else if (bv) {
                setError(key, bv);
              }
              return;
            } else {
              bv = validator[type];
            }
          }
          Object.keys(rule).forEach(function(r2) {
            if (rule.required) {
              bv = bv.isRequired;
            }
            if (r2 !== "message" && bv[r2] && rule[r2] && typeof bv[r2] === "object") {
              bv = bv[r2];
            }
            if (bv[r2] && rule[r2] !== void 0 && typeof bv[r2] === "function") {
              bv = bv[r2](rule[r2]);
            }
          });
          bv.collect(function(error) {
            if (error) {
              setError(key, error);
            }
          });
          if (errors) {
            return "break";
          }
        };
        for (var i2 = 0; i2 < this$1$1.schema[key].length; i2++) {
          var returned = loop(i2);
          if (returned === "break")
            break;
        }
      }
    });
  }
  if (promises.length > 0) {
    Promise.all(promises.map(function(a) {
      return a.function;
    })).then(function() {
      promises.forEach(function(promise) {
        if (promise._this.error) {
          setError(promise.key, promise._this.error);
        }
      });
      callback && callback(errors);
    });
  } else {
    callback && callback(errors);
  }
};
const RowContextInjectionKey = Symbol("RowContextInjectionKey");
const _sfc_main$a = defineComponent({
  name: "Row",
  props: {
    gutter: {
      type: [Number, Object, Array],
      default: 0
    },
    justify: {
      type: String,
      default: "start"
    },
    align: {
      type: String,
      default: "start"
    },
    div: {
      type: Boolean
    },
    wrap: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {
    const {
      gutter,
      align,
      justify,
      div,
      wrap
    } = toRefs(props);
    const prefixCls = getPrefixCls("row");
    const classNames = computed(() => {
      return {
        [`${prefixCls}`]: !div.value,
        [`${prefixCls}-nowrap`]: !wrap.value,
        [`${prefixCls}-align-${align.value}`]: align.value,
        [`${prefixCls}-justify-${justify.value}`]: justify.value
      };
    });
    const propGutterHorizontal = computed(() => Array.isArray(gutter.value) ? gutter.value[0] : gutter.value);
    const propGutterVertical = computed(() => Array.isArray(gutter.value) ? gutter.value[1] : 0);
    const gutterHorizontal = useResponsiveState(propGutterHorizontal, 0);
    const gutterVertical = useResponsiveState(propGutterVertical, 0);
    const styles = computed(() => {
      const result = {};
      if ((gutterHorizontal.value || gutterVertical.value) && !div.value) {
        const marginHorizontal = -gutterHorizontal.value / 2;
        const marginVertical = -gutterVertical.value / 2;
        if (marginHorizontal) {
          result.marginLeft = `${marginHorizontal}px`;
          result.marginRight = `${marginHorizontal}px`;
        }
        if (marginVertical) {
          result.marginTop = `${marginVertical}px`;
          result.marginBottom = `${marginVertical}px`;
        }
      }
      return result;
    });
    const resultGutter = computed(() => [gutterHorizontal.value, gutterVertical.value]);
    provide(RowContextInjectionKey, reactive({
      gutter: resultGutter,
      div
    }));
    return {
      classNames,
      styles
    };
  }
});
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.classNames),
    style: normalizeStyle(_ctx.styles)
  }, [renderSlot(_ctx.$slots, "default")], 6);
}
var Row = /* @__PURE__ */ _export_sfc$1(_sfc_main$a, [["render", _sfc_render$9]]);
function useResponsiveValue(props) {
  const value = computed(() => {
    const {
      val,
      key,
      xs,
      sm,
      md,
      lg,
      xl,
      xxl
    } = props.value;
    if (!xs && !sm && !md && !lg && !xl && !xxl) {
      return val;
    }
    const result = {};
    responsiveArray.forEach((breakpoint) => {
      const config = props.value[breakpoint];
      if (isNumber$1(config)) {
        result[breakpoint] = config;
      } else if (isObject$1(config) && isNumber$1(config[key])) {
        result[breakpoint] = config[key];
      }
    });
    return result;
  });
  return value;
}
var __defProp$4 = Object.defineProperty;
var __getOwnPropSymbols$4 = Object.getOwnPropertySymbols;
var __hasOwnProp$4 = Object.prototype.hasOwnProperty;
var __propIsEnum$4 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$4 = (obj, key, value) => key in obj ? __defProp$4(obj, key, {
  enumerable: true,
  configurable: true,
  writable: true,
  value
}) : obj[key] = value;
var __spreadValues$4 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$4.call(b, prop))
      __defNormalProp$4(a, prop, b[prop]);
  if (__getOwnPropSymbols$4)
    for (var prop of __getOwnPropSymbols$4(b)) {
      if (__propIsEnum$4.call(b, prop))
        __defNormalProp$4(a, prop, b[prop]);
    }
  return a;
};
function getAllowableFlexValue(flexValue) {
  if (isString$1(flexValue) && (["initial", "auto", "none"].includes(flexValue) || /^\d+$/.test(flexValue)) || isNumber$1(flexValue)) {
    return flexValue;
  }
  if (isString$1(flexValue) && /^\d+(px|em|rem|%)$/.test(flexValue)) {
    return `0 0 ${flexValue}`;
  }
  return void 0;
}
const _sfc_main$9 = defineComponent({
  name: "Col",
  props: {
    span: {
      type: Number,
      default: 24
    },
    offset: {
      type: Number
    },
    order: {
      type: Number
    },
    xs: {
      type: [Number, Object]
    },
    sm: {
      type: [Number, Object]
    },
    md: {
      type: [Number, Object]
    },
    lg: {
      type: [Number, Object]
    },
    xl: {
      type: [Number, Object]
    },
    xxl: {
      type: [Number, Object]
    },
    flex: {
      type: [Number, String]
    }
  },
  setup(props) {
    const prefixCls = getPrefixCls("col");
    const rowContext = inject(RowContextInjectionKey, {});
    const flexValue = computed(() => getAllowableFlexValue(props.flex));
    const mergeClassName = computed(() => {
      const {
        div
      } = rowContext;
      const {
        span: span2,
        offset,
        order,
        xs,
        sm,
        md,
        lg,
        xl,
        xxl
      } = props;
      const result = {
        [`${prefixCls}`]: !div,
        [`${prefixCls}-order-${order}`]: order,
        [`${prefixCls}-${span2}`]: !div && !xs && !sm && !md && !lg && !xl && !xxl,
        [`${prefixCls}-offset-${offset}`]: offset && offset > 0
      };
      const screenList = {
        xs,
        sm,
        md,
        lg,
        xl,
        xxl
      };
      Object.keys(screenList).forEach((screen) => {
        const screenValue = screenList[screen];
        if (screenValue && isNumber$1(screenValue)) {
          result[`${prefixCls}-${screen}-${screenValue}`] = true;
        } else if (screenValue && isObject$1(screenValue)) {
          result[`${prefixCls}-${screen}-${screenValue.span}`] = screenValue.span;
          result[`${prefixCls}-${screen}-offset-${screenValue.offset}`] = screenValue.offset;
          result[`${prefixCls}-${screen}-order-${screenValue.order}`] = screenValue.order;
        }
      });
      return result;
    });
    const classNames = computed(() => {
      return flexValue.value ? prefixCls : mergeClassName.value;
    });
    const paddingStyles = computed(() => {
      const {
        gutter,
        div
      } = rowContext;
      const result = {};
      if (Array.isArray(gutter) && !div) {
        const paddingHorizontal = gutter[0] && gutter[0] / 2 || 0;
        const paddingVertical = gutter[1] && gutter[1] / 2 || 0;
        if (paddingHorizontal) {
          result.paddingLeft = `${paddingHorizontal}px`;
          result.paddingRight = `${paddingHorizontal}px`;
        }
        if (paddingVertical) {
          result.paddingTop = `${paddingVertical}px`;
          result.paddingBottom = `${paddingVertical}px`;
        }
      }
      return result;
    });
    const flexStyles = computed(() => flexValue.value ? {
      flex: flexValue.value
    } : {});
    const responsiveConfig = computed(() => pick(props, responsiveArray));
    const propSpan = useResponsiveValue(computed(() => __spreadValues$4({
      val: props.span,
      key: "span"
    }, responsiveConfig.value)));
    const span = useResponsiveState(propSpan, 24, true);
    return {
      visible: computed(() => !!span.value),
      classNames,
      styles: computed(() => __spreadValues$4(__spreadValues$4({}, paddingStyles.value), flexStyles.value))
    };
  }
});
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return _ctx.visible ? (openBlock(), createElementBlock("div", {
    key: 0,
    class: normalizeClass(_ctx.classNames),
    style: normalizeStyle(_ctx.styles)
  }, [renderSlot(_ctx.$slots, "default")], 6)) : createCommentVNode("v-if", true);
}
var Col = /* @__PURE__ */ _export_sfc$1(_sfc_main$9, [["render", _sfc_render$8]]);
var __defProp$3 = Object.defineProperty;
var __getOwnPropSymbols$3 = Object.getOwnPropertySymbols;
var __hasOwnProp$3 = Object.prototype.hasOwnProperty;
var __propIsEnum$3 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3 = (obj, key, value) => key in obj ? __defProp$3(obj, key, {
  enumerable: true,
  configurable: true,
  writable: true,
  value
}) : obj[key] = value;
var __spreadValues$3 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3.call(b, prop))
      __defNormalProp$3(a, prop, b[prop]);
  if (__getOwnPropSymbols$3)
    for (var prop of __getOwnPropSymbols$3(b)) {
      if (__propIsEnum$3.call(b, prop))
        __defNormalProp$3(a, prop, b[prop]);
    }
  return a;
};
const _sfc_main$8 = defineComponent({
  name: "Tooltip",
  components: {
    Trigger
  },
  props: {
    popupVisible: {
      type: Boolean,
      default: void 0
    },
    defaultPopupVisible: {
      type: Boolean,
      default: false
    },
    content: String,
    position: {
      type: String,
      default: "top"
    },
    mini: {
      type: Boolean,
      default: false
    },
    backgroundColor: {
      type: String
    },
    contentClass: {
      type: [String, Array, Object]
    },
    contentStyle: {
      type: Object
    },
    arrowClass: {
      type: [String, Array, Object]
    },
    arrowStyle: {
      type: Object
    },
    popupContainer: {
      type: [String, Object]
    }
  },
  emits: {
    "update:popupVisible": (visible) => true,
    "popupVisibleChange": (visible) => true
  },
  setup(props, {
    emit
  }) {
    const prefixCls = getPrefixCls("tooltip");
    const _popupVisible = ref(props.defaultPopupVisible);
    const computedPopupVisible = computed(() => {
      var _a;
      return (_a = props.popupVisible) != null ? _a : _popupVisible.value;
    });
    const handlePopupVisibleChange = (visible) => {
      _popupVisible.value = visible;
      emit("update:popupVisible", visible);
      emit("popupVisibleChange", visible);
    };
    const contentCls = computed(() => [`${prefixCls}-content`, props.contentClass, {
      [`${prefixCls}-mini`]: props.mini
    }]);
    const computedContentStyle = computed(() => {
      if (props.backgroundColor || props.contentStyle) {
        return __spreadValues$3({
          backgroundColor: props.backgroundColor
        }, props.contentStyle);
      }
      return void 0;
    });
    const arrowCls = computed(() => [`${prefixCls}-popup-arrow`, props.arrowClass]);
    const computedArrowStyle = computed(() => {
      if (props.backgroundColor || props.arrowStyle) {
        return __spreadValues$3({
          backgroundColor: props.backgroundColor
        }, props.arrowStyle);
      }
      return void 0;
    });
    return {
      prefixCls,
      computedPopupVisible,
      contentCls,
      computedContentStyle,
      arrowCls,
      computedArrowStyle,
      handlePopupVisibleChange
    };
  }
});
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Trigger = resolveComponent("Trigger");
  return openBlock(), createBlock(_component_Trigger, {
    class: normalizeClass(_ctx.prefixCls),
    trigger: "hover",
    position: _ctx.position,
    "popup-visible": _ctx.computedPopupVisible,
    "popup-offset": 10,
    "show-arrow": "",
    "content-class": _ctx.contentCls,
    "content-style": _ctx.computedContentStyle,
    "arrow-class": _ctx.arrowCls,
    "arrow-style": _ctx.computedArrowStyle,
    "popup-container": _ctx.popupContainer,
    "animation-name": "zoom-in-fade-out",
    "auto-fit-transform-origin": "",
    role: "tooltip",
    onPopupVisibleChange: _ctx.handlePopupVisibleChange
  }, {
    content: withCtx(() => [renderSlot(_ctx.$slots, "content", {}, () => [createTextVNode(toDisplayString(_ctx.content), 1)])]),
    default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
    _: 3
  }, 8, ["class", "position", "popup-visible", "content-class", "content-style", "arrow-class", "arrow-style", "popup-container", "onPopupVisibleChange"]);
}
var _Tooltip = /* @__PURE__ */ _export_sfc$1(_sfc_main$8, [["render", _sfc_render$7]]);
const Tooltip = Object.assign(_Tooltip, {
  install: (app, options) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);
    app.component(componentPrefix + _Tooltip.name, _Tooltip);
  }
});
const _sfc_main$7 = defineComponent({
  name: "IconQuestionCircle",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (value) => {
        return ["butt", "round", "square"].includes(value);
      }
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (value) => {
        return ["arcs", "bevel", "miter", "miter-clip", "round"].includes(value);
      }
    },
    rotate: Number,
    spin: Boolean
  },
  emits: {
    click: (ev) => true
  },
  setup(props, {
    emit
  }) {
    const prefixCls = getPrefixCls("icon");
    const cls = computed(() => [prefixCls, `${prefixCls}-question-circle`, {
      [`${prefixCls}-spin`]: props.spin
    }]);
    const innerStyle = computed(() => {
      const styles = {};
      if (props.size) {
        styles.fontSize = isNumber$1(props.size) ? `${props.size}px` : props.size;
      }
      if (props.rotate) {
        styles.transform = `rotate(${props.rotate}deg)`;
      }
      return styles;
    });
    const onClick = (ev) => {
      emit("click", ev);
    };
    return {
      cls,
      innerStyle,
      onClick
    };
  }
});
const _hoisted_1$4 = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
const _hoisted_2$3 = /* @__PURE__ */ createElementVNode("path", {
  d: "M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6s18 8.059 18 18Z"
}, null, -1);
const _hoisted_3$3 = /* @__PURE__ */ createElementVNode("path", {
  d: "M24.006 31v4.008m0-6.008L24 28c0-3 3-4 4.78-6.402C30.558 19.195 28.288 15 23.987 15c-4.014 0-5.382 2.548-5.388 4.514v.465"
}, null, -1);
const _hoisted_4$2 = [_hoisted_2$3, _hoisted_3$3];
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: normalizeClass(_ctx.cls),
    style: normalizeStyle(_ctx.innerStyle),
    "stroke-width": _ctx.strokeWidth,
    "stroke-linecap": _ctx.strokeLinecap,
    "stroke-linejoin": _ctx.strokeLinejoin,
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClick && _ctx.onClick(...args))
  }, _hoisted_4$2, 14, _hoisted_1$4);
}
var _IconQuestionCircle = /* @__PURE__ */ _export_sfc$1(_sfc_main$7, [["render", _sfc_render$6]]);
const IconQuestionCircle = Object.assign(_IconQuestionCircle, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconQuestionCircle.name, _IconQuestionCircle);
  }
});
const _sfc_main$6 = defineComponent({
  name: "FormItemLabel",
  components: {
    ResizeObserver,
    Tooltip,
    IconQuestionCircle
  },
  props: {
    required: {
      type: Boolean,
      default: false
    },
    showColon: {
      type: Boolean,
      default: false
    },
    component: {
      type: String,
      default: "label"
    },
    asteriskPosition: {
      type: String,
      default: "start"
    },
    tooltip: {
      type: String
    },
    attrs: Object
  },
  setup() {
    const prefixCls = getPrefixCls("form-item-label");
    const formCtx = inject(formInjectionKey, void 0);
    const instance = getCurrentInstance();
    const labelRef = ref();
    const handleResize = () => {
      if (labelRef.value && isNumber$1(labelRef.value.offsetWidth)) {
        formCtx == null ? void 0 : formCtx.setLabelWidth(labelRef.value.offsetWidth, instance == null ? void 0 : instance.uid);
      }
    };
    onMounted(() => {
      if (labelRef.value && isNumber$1(labelRef.value.offsetWidth)) {
        formCtx == null ? void 0 : formCtx.setLabelWidth(labelRef.value.offsetWidth, instance == null ? void 0 : instance.uid);
      }
    });
    onBeforeUnmount(() => {
      formCtx == null ? void 0 : formCtx.removeLabelWidth(instance == null ? void 0 : instance.uid);
    });
    return {
      prefixCls,
      labelRef,
      handleResize
    };
  }
});
const _hoisted_1$3 = /* @__PURE__ */ createElementVNode("svg", {
  fill: "currentColor",
  viewBox: "0 0 1024 1024",
  width: "1em",
  height: "1em"
}, [/* @__PURE__ */ createElementVNode("path", {
  d: "M583.338667 17.066667c18.773333 0 34.133333 15.36 34.133333 34.133333v349.013333l313.344-101.888a34.133333 34.133333 0 0 1 43.008 22.016l42.154667 129.706667a34.133333 34.133333 0 0 1-21.845334 43.178667l-315.733333 102.4 208.896 287.744a34.133333 34.133333 0 0 1-7.509333 47.786666l-110.421334 80.213334a34.133333 34.133333 0 0 1-47.786666-7.509334L505.685333 706.218667 288.426667 1005.226667a34.133333 34.133333 0 0 1-47.786667 7.509333l-110.421333-80.213333a34.133333 34.133333 0 0 1-7.509334-47.786667l214.186667-295.253333L29.013333 489.813333a34.133333 34.133333 0 0 1-22.016-43.008l42.154667-129.877333a34.133333 34.133333 0 0 1 43.008-22.016l320.512 104.106667L412.672 51.2c0-18.773333 15.36-34.133333 34.133333-34.133333h136.533334z"
})], -1);
const _hoisted_2$2 = [_hoisted_1$3];
const _hoisted_3$2 = /* @__PURE__ */ createElementVNode("svg", {
  fill: "currentColor",
  viewBox: "0 0 1024 1024",
  width: "1em",
  height: "1em"
}, [/* @__PURE__ */ createElementVNode("path", {
  d: "M583.338667 17.066667c18.773333 0 34.133333 15.36 34.133333 34.133333v349.013333l313.344-101.888a34.133333 34.133333 0 0 1 43.008 22.016l42.154667 129.706667a34.133333 34.133333 0 0 1-21.845334 43.178667l-315.733333 102.4 208.896 287.744a34.133333 34.133333 0 0 1-7.509333 47.786666l-110.421334 80.213334a34.133333 34.133333 0 0 1-47.786666-7.509334L505.685333 706.218667 288.426667 1005.226667a34.133333 34.133333 0 0 1-47.786667 7.509333l-110.421333-80.213333a34.133333 34.133333 0 0 1-7.509334-47.786667l214.186667-295.253333L29.013333 489.813333a34.133333 34.133333 0 0 1-22.016-43.008l42.154667-129.877333a34.133333 34.133333 0 0 1 43.008-22.016l320.512 104.106667L412.672 51.2c0-18.773333 15.36-34.133333 34.133333-34.133333h136.533334z"
})], -1);
const _hoisted_4$1 = [_hoisted_3$2];
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_icon_question_circle = resolveComponent("icon-question-circle");
  const _component_Tooltip = resolveComponent("Tooltip");
  const _component_ResizeObserver = resolveComponent("ResizeObserver");
  return openBlock(), createBlock(_component_ResizeObserver, {
    onResize: _ctx.handleResize
  }, {
    default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(_ctx.component), mergeProps({
      ref: "labelRef",
      class: _ctx.prefixCls
    }, _ctx.attrs), {
      default: withCtx(() => [_ctx.required && _ctx.asteriskPosition === "start" ? (openBlock(), createElementBlock("strong", {
        key: 0,
        class: normalizeClass(`${_ctx.prefixCls}-required-symbol`)
      }, _hoisted_2$2, 2)) : createCommentVNode("v-if", true), renderSlot(_ctx.$slots, "default"), _ctx.tooltip ? (openBlock(), createBlock(_component_Tooltip, {
        key: 1,
        content: _ctx.tooltip
      }, {
        default: withCtx(() => [createVNode(_component_icon_question_circle, {
          class: normalizeClass(`${_ctx.prefixCls}-tooltip`)
        }, null, 8, ["class"])]),
        _: 1
      }, 8, ["content"])) : createCommentVNode("v-if", true), _ctx.required && _ctx.asteriskPosition === "end" ? (openBlock(), createElementBlock("strong", {
        key: 2,
        class: normalizeClass(`${_ctx.prefixCls}-required-symbol`)
      }, _hoisted_4$1, 2)) : createCommentVNode("v-if", true), createTextVNode(" " + toDisplayString(_ctx.showColon ? ":" : ""), 1)]),
      _: 3
    }, 16, ["class"]))]),
    _: 3
  }, 8, ["onResize"]);
}
var FormItemLabel = /* @__PURE__ */ _export_sfc$1(_sfc_main$6, [["render", _sfc_render$5]]);
const _sfc_main$5 = defineComponent({
  name: "FormItemMessage",
  props: {
    error: {
      type: Array,
      default: () => []
    },
    help: String
  },
  setup() {
    const prefixCls = getPrefixCls("form-item-message");
    return {
      prefixCls
    };
  }
});
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return _ctx.error.length > 0 ? (openBlock(true), createElementBlock(Fragment, {
    key: 0
  }, renderList(_ctx.error, (item) => {
    return openBlock(), createBlock(Transition, {
      key: item,
      name: "form-blink",
      appear: ""
    }, {
      default: withCtx(() => [createElementVNode("div", {
        role: "alert",
        class: normalizeClass([_ctx.prefixCls])
      }, toDisplayString(item), 3)]),
      _: 2
    }, 1024);
  }), 128)) : _ctx.help || _ctx.$slots.help ? (openBlock(), createBlock(Transition, {
    key: 1,
    name: "form-blink",
    appear: ""
  }, {
    default: withCtx(() => [createElementVNode("div", {
      class: normalizeClass([_ctx.prefixCls, `${_ctx.prefixCls}-help`])
    }, [renderSlot(_ctx.$slots, "help", {}, () => [createTextVNode(toDisplayString(_ctx.help), 1)])], 2)]),
    _: 3
  })) : createCommentVNode("v-if", true);
}
var FormItemMessage = /* @__PURE__ */ _export_sfc$1(_sfc_main$5, [["render", _sfc_render$4]]);
var __defProp$2 = Object.defineProperty;
var __getOwnPropSymbols$2 = Object.getOwnPropertySymbols;
var __hasOwnProp$2 = Object.prototype.hasOwnProperty;
var __propIsEnum$2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, {
  enumerable: true,
  configurable: true,
  writable: true,
  value
}) : obj[key] = value;
var __spreadValues$2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2.call(b, prop))
      __defNormalProp$2(a, prop, b[prop]);
  if (__getOwnPropSymbols$2)
    for (var prop of __getOwnPropSymbols$2(b)) {
      if (__propIsEnum$2.call(b, prop))
        __defNormalProp$2(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target2 = {};
  for (var prop in source)
    if (__hasOwnProp$2.call(source, prop) && exclude.indexOf(prop) < 0)
      target2[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$2)
    for (var prop of __getOwnPropSymbols$2(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$2.call(source, prop))
        target2[prop] = source[prop];
    }
  return target2;
};
const _sfc_main$4 = defineComponent({
  name: "FormItem",
  components: {
    ArcoRow: Row,
    ArcoCol: Col,
    FormItemLabel,
    FormItemMessage
  },
  props: {
    field: {
      type: String,
      default: ""
    },
    label: String,
    tooltip: {
      type: String
    },
    showColon: {
      type: Boolean,
      default: false
    },
    noStyle: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: void 0
    },
    help: String,
    extra: String,
    required: {
      type: Boolean,
      default: false
    },
    asteriskPosition: {
      type: String,
      default: "start"
    },
    rules: {
      type: [Object, Array]
    },
    validateStatus: {
      type: String
    },
    validateTrigger: {
      type: [String, Array],
      default: "change"
    },
    labelColProps: Object,
    wrapperColProps: Object,
    hideLabel: {
      type: Boolean,
      default: false
    },
    hideAsterisk: {
      type: Boolean,
      default: false
    },
    labelColStyle: Object,
    wrapperColStyle: Object,
    rowProps: Object,
    rowClass: [String, Array, Object],
    contentClass: [String, Array, Object],
    contentFlex: {
      type: Boolean,
      default: true
    },
    mergeProps: {
      type: [Boolean, Function],
      default: true
    },
    labelColFlex: {
      type: [Number, String]
    },
    feedback: {
      type: Boolean,
      default: false
    },
    labelComponent: {
      type: String,
      default: "label"
    },
    labelAttrs: Object
  },
  setup(props) {
    const prefixCls = getPrefixCls("form-item");
    const {
      field
    } = toRefs(props);
    const formCtx = inject(formInjectionKey, {});
    const {
      autoLabelWidth,
      layout
    } = toRefs(formCtx);
    const {
      i18nMessage
    } = useI18n();
    const mergedLabelCol = computed(() => {
      var _a;
      const colProps = __spreadValues$2({}, (_a = props.labelColProps) != null ? _a : formCtx.labelColProps);
      if (props.labelColFlex) {
        colProps.flex = props.labelColFlex;
      } else if (formCtx.autoLabelWidth) {
        colProps.flex = `${formCtx.maxLabelWidth}px`;
      }
      return colProps;
    });
    const mergedWrapperCol = computed(() => {
      var _a;
      const colProps = __spreadValues$2({}, (_a = props.wrapperColProps) != null ? _a : formCtx.wrapperColProps);
      if (field.value) {
        colProps.id = getFormElementId(formCtx.id, field.value);
      }
      if (props.labelColFlex || formCtx.autoLabelWidth) {
        colProps.flex = "auto";
      }
      return colProps;
    });
    const mergedLabelStyle = computed(() => {
      var _a;
      return (_a = props.labelColStyle) != null ? _a : formCtx.labelColStyle;
    });
    const mergedWrapperStyle = computed(() => {
      var _a;
      return (_a = props.wrapperColStyle) != null ? _a : formCtx.wrapperColStyle;
    });
    const initialValue = getValueByPath(formCtx.model, props.field);
    const validateStatus = reactive({});
    const validateMessage = reactive({});
    const finalStatus = computed(() => getFinalValidateStatus(validateStatus));
    const finalMessage = computed(() => getFinalValidateMessage(validateMessage));
    const validateDisabled = ref(false);
    const fieldValue = computed(() => getValueByPath(formCtx.model, props.field));
    const computedDisabled = computed(() => {
      var _a;
      return Boolean((_a = props.disabled) != null ? _a : formCtx == null ? void 0 : formCtx.disabled);
    });
    const computedValidateStatus = computed(() => {
      var _a;
      return (_a = props.validateStatus) != null ? _a : finalStatus.value;
    });
    const isError = computed(() => computedValidateStatus.value === "error");
    const mergedRules = computed(() => {
      var _a, _b, _c;
      const baseRules = [].concat((_c = (_b = props.rules) != null ? _b : (_a = formCtx == null ? void 0 : formCtx.rules) == null ? void 0 : _a[props.field]) != null ? _c : []);
      const hasRequiredRule = baseRules.some((item) => item.required);
      if (props.required && !hasRequiredRule) {
        return [{
          required: true
        }].concat(baseRules);
      }
      return baseRules;
    });
    const isRequired = computed(() => mergedRules.value.some((item) => item.required));
    const formItemCtx = props.noStyle ? inject(formItemInjectionKey, void 0) : void 0;
    const updateValidateState = (field2, {
      status,
      message
    }) => {
      validateStatus[field2] = status;
      validateMessage[field2] = message;
      if (props.noStyle) {
        formItemCtx == null ? void 0 : formItemCtx.updateValidateState(field2, {
          status,
          message
        });
      }
    };
    const computedFeedback = computed(() => props.feedback && computedValidateStatus.value ? computedValidateStatus.value : void 0);
    const validateField = () => {
      var _b;
      if (validateDisabled.value) {
        return Promise.resolve();
      }
      const rules = mergedRules.value;
      if (!field.value || rules.length === 0) {
        if (finalStatus.value) {
          clearValidate();
        }
        return Promise.resolve();
      }
      const _field = field.value;
      const _value = fieldValue.value;
      updateValidateState(_field, {
        status: "",
        message: ""
      });
      const schema = new Schema({
        [_field]: rules.map((_a) => {
          var rule = __objRest(_a, []);
          if (!rule.type && !rule.validator) {
            rule.type = "string";
          }
          return rule;
        })
      }, {
        ignoreEmptyString: true,
        validateMessages: (_b = i18nMessage.value.form) == null ? void 0 : _b.validateMessages
      });
      return new Promise((resolve) => {
        schema.validate({
          [_field]: _value
        }, (err) => {
          var _a;
          const isError2 = Boolean(err == null ? void 0 : err[_field]);
          updateValidateState(_field, {
            status: isError2 ? "error" : "",
            message: (_a = err == null ? void 0 : err[_field].message) != null ? _a : ""
          });
          const error = isError2 ? {
            label: props.label,
            field: field.value,
            value: err[_field].value,
            type: err[_field].type,
            isRequiredError: Boolean(err[_field].requiredError),
            message: err[_field].message
          } : void 0;
          resolve(error);
        });
      });
    };
    const validateTriggers = computed(() => [].concat(props.validateTrigger));
    const eventHandlers = computed(() => validateTriggers.value.reduce((event, trigger) => {
      switch (trigger) {
        case "change":
          event.onChange = () => {
            validateField();
          };
          return event;
        case "input":
          event.onInput = () => {
            nextTick(() => {
              validateField();
            });
          };
          return event;
        case "focus":
          event.onFocus = () => {
            validateField();
          };
          return event;
        case "blur":
          event.onBlur = () => {
            validateField();
          };
          return event;
        default:
          return event;
      }
    }, {}));
    provide(formItemInjectionKey, reactive({
      eventHandlers,
      size: formCtx && toRef(formCtx, "size"),
      disabled: computedDisabled,
      error: isError,
      feedback: computedFeedback,
      updateValidateState
    }));
    const clearValidate = () => {
      if (field.value) {
        updateValidateState(field.value, {
          status: "",
          message: ""
        });
      }
    };
    const setField = (data) => {
      var _a, _b;
      if (field.value) {
        validateDisabled.value = true;
        if ("value" in data && (formCtx == null ? void 0 : formCtx.model) && field.value) {
          setValueByPath(formCtx.model, field.value, data.value);
        }
        if (data.status || data.message) {
          updateValidateState(field.value, {
            status: (_a = data.status) != null ? _a : "",
            message: (_b = data.message) != null ? _b : ""
          });
        }
        nextTick(() => {
          validateDisabled.value = false;
        });
      }
    };
    const resetField = () => {
      clearValidate();
      validateDisabled.value = true;
      if ((formCtx == null ? void 0 : formCtx.model) && field.value) {
        setValueByPath(formCtx.model, field.value, initialValue);
      }
      nextTick(() => {
        validateDisabled.value = false;
      });
    };
    const formItemInfo = reactive({
      field,
      disabled: computedDisabled,
      error: isError,
      validate: validateField,
      clearValidate,
      resetField,
      setField
    });
    onMounted(() => {
      var _a;
      if (formItemInfo.field) {
        (_a = formCtx.addField) == null ? void 0 : _a.call(formCtx, formItemInfo);
      }
    });
    onBeforeUnmount(() => {
      var _a;
      if (formItemInfo.field) {
        (_a = formCtx.removeField) == null ? void 0 : _a.call(formCtx, formItemInfo);
      }
    });
    const cls = computed(() => [prefixCls, `${prefixCls}-layout-${formCtx.layout}`, {
      [`${prefixCls}-error`]: isError.value,
      [`${prefixCls}-status-${computedValidateStatus.value}`]: Boolean(computedValidateStatus.value)
    }, props.rowClass]);
    const labelColCls = computed(() => [`${prefixCls}-label-col`, {
      [`${prefixCls}-label-col-left`]: formCtx.labelAlign === "left",
      [`${prefixCls}-label-col-flex`]: formCtx.autoLabelWidth || props.labelColFlex
    }]);
    const wrapperColCls = computed(() => [`${prefixCls}-wrapper-col`, {
      [`${prefixCls}-wrapper-col-flex`]: !mergedWrapperCol.value
    }]);
    return {
      prefixCls,
      cls,
      isRequired,
      isError,
      finalMessage,
      mergedLabelCol,
      mergedWrapperCol,
      labelColCls,
      autoLabelWidth,
      layout,
      mergedLabelStyle,
      wrapperColCls,
      mergedWrapperStyle
    };
  }
});
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  var _a;
  const _component_FormItemLabel = resolveComponent("FormItemLabel");
  const _component_ArcoCol = resolveComponent("ArcoCol");
  const _component_FormItemMessage = resolveComponent("FormItemMessage");
  const _component_ArcoRow = resolveComponent("ArcoRow");
  return _ctx.noStyle ? renderSlot(_ctx.$slots, "default", {
    key: 0
  }) : (openBlock(), createBlock(_component_ArcoRow, mergeProps({
    key: 1,
    class: [_ctx.cls, {
      [`${_ctx.prefixCls}-has-help`]: Boolean((_a = _ctx.$slots.help) != null ? _a : _ctx.help)
    }],
    wrap: !(_ctx.labelColFlex || _ctx.autoLabelWidth),
    div: _ctx.layout !== "horizontal" || _ctx.hideLabel
  }, _ctx.rowProps), {
    default: withCtx(() => [!_ctx.hideLabel ? (openBlock(), createBlock(_component_ArcoCol, mergeProps({
      key: 0,
      class: _ctx.labelColCls,
      style: _ctx.mergedLabelStyle
    }, _ctx.mergedLabelCol), {
      default: withCtx(() => [createVNode(_component_FormItemLabel, {
        required: _ctx.hideAsterisk ? false : _ctx.isRequired,
        "show-colon": _ctx.showColon,
        "asterisk-position": _ctx.asteriskPosition,
        component: _ctx.labelComponent,
        attrs: _ctx.labelAttrs,
        tooltip: _ctx.tooltip
      }, {
        default: withCtx(() => [_ctx.$slots.label || _ctx.label ? renderSlot(_ctx.$slots, "label", {
          key: 0
        }, () => [createTextVNode(toDisplayString(_ctx.label), 1)]) : createCommentVNode("v-if", true)]),
        _: 3
      }, 8, ["required", "show-colon", "asterisk-position", "component", "attrs", "tooltip"])]),
      _: 3
    }, 16, ["class", "style"])) : createCommentVNode("v-if", true), createVNode(_component_ArcoCol, mergeProps({
      class: _ctx.wrapperColCls,
      style: _ctx.mergedWrapperStyle
    }, _ctx.mergedWrapperCol), {
      default: withCtx(() => [createElementVNode("div", {
        class: normalizeClass(`${_ctx.prefixCls}-content-wrapper`)
      }, [createElementVNode("div", {
        class: normalizeClass([`${_ctx.prefixCls}-content`, {
          [`${_ctx.prefixCls}-content-flex`]: _ctx.contentFlex
        }, _ctx.contentClass])
      }, [renderSlot(_ctx.$slots, "default")], 2)], 2), _ctx.isError || _ctx.$slots.help || _ctx.help ? (openBlock(), createBlock(_component_FormItemMessage, {
        key: 0,
        error: _ctx.finalMessage,
        help: _ctx.help
      }, createSlots({
        _: 2
      }, [_ctx.$slots.help ? {
        name: "help",
        fn: withCtx(() => [renderSlot(_ctx.$slots, "help")])
      } : void 0]), 1032, ["error", "help"])) : createCommentVNode("v-if", true), _ctx.$slots.extra || _ctx.extra ? (openBlock(), createElementBlock("div", {
        key: 1,
        class: normalizeClass(`${_ctx.prefixCls}-extra`)
      }, [renderSlot(_ctx.$slots, "extra", {}, () => [createTextVNode(toDisplayString(_ctx.extra), 1)])], 2)) : createCommentVNode("v-if", true)]),
      _: 3
    }, 16, ["class", "style"])]),
    _: 3
  }, 16, ["class", "wrap", "div"]));
}
var FormItem = /* @__PURE__ */ _export_sfc$1(_sfc_main$4, [["render", _sfc_render$3]]);
const Form = Object.assign(_Form, {
  Item: FormItem,
  install: (app, options) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);
    app.component(componentPrefix + _Form.name, _Form);
    app.component(componentPrefix + FormItem.name, FormItem);
  }
});
const _sfc_main$3 = defineComponent({
  name: "IconPlus",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (value) => {
        return ["butt", "round", "square"].includes(value);
      }
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (value) => {
        return ["arcs", "bevel", "miter", "miter-clip", "round"].includes(value);
      }
    },
    rotate: Number,
    spin: Boolean
  },
  emits: {
    click: (ev) => true
  },
  setup(props, {
    emit
  }) {
    const prefixCls = getPrefixCls("icon");
    const cls = computed(() => [prefixCls, `${prefixCls}-plus`, {
      [`${prefixCls}-spin`]: props.spin
    }]);
    const innerStyle = computed(() => {
      const styles = {};
      if (props.size) {
        styles.fontSize = isNumber$1(props.size) ? `${props.size}px` : props.size;
      }
      if (props.rotate) {
        styles.transform = `rotate(${props.rotate}deg)`;
      }
      return styles;
    });
    const onClick = (ev) => {
      emit("click", ev);
    };
    return {
      cls,
      innerStyle,
      onClick
    };
  }
});
const _hoisted_1$2 = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
const _hoisted_2$1 = /* @__PURE__ */ createElementVNode("path", {
  d: "M5 24h38M24 5v38"
}, null, -1);
const _hoisted_3$1 = [_hoisted_2$1];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: normalizeClass(_ctx.cls),
    style: normalizeStyle(_ctx.innerStyle),
    "stroke-width": _ctx.strokeWidth,
    "stroke-linecap": _ctx.strokeLinecap,
    "stroke-linejoin": _ctx.strokeLinejoin,
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClick && _ctx.onClick(...args))
  }, _hoisted_3$1, 14, _hoisted_1$2);
}
var _IconPlus = /* @__PURE__ */ _export_sfc$1(_sfc_main$3, [["render", _sfc_render$2]]);
const IconPlus = Object.assign(_IconPlus, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconPlus.name, _IconPlus);
  }
});
const useDraggable = ({
  modalRef,
  wrapperRef,
  draggable,
  alignCenter
}) => {
  const isDragging = ref(false);
  const startMouse = ref([0, 0]);
  const initialPosition = ref([0, 0]);
  const position = ref();
  const minPosition = ref([0, 0]);
  const maxPosition = ref([0, 0]);
  const getInitialPosition = () => {
    var _a, _b, _c;
    if (wrapperRef.value && modalRef.value) {
      const {
        top: wrapperTop,
        left: wrapperLeft
      } = wrapperRef.value.getBoundingClientRect();
      const {
        clientWidth: wrapperWidth,
        clientHeight: wrapperHeight
      } = wrapperRef.value;
      const {
        top,
        left,
        width,
        height
      } = modalRef.value.getBoundingClientRect();
      const offsetTop = alignCenter.value ? 0 : (_a = modalRef.value) == null ? void 0 : _a.offsetTop;
      const initialX = left - wrapperLeft;
      const initialY = top - wrapperTop - offsetTop;
      if (initialX !== ((_b = initialPosition.value) == null ? void 0 : _b[0]) || initialY !== ((_c = initialPosition.value) == null ? void 0 : _c[1])) {
        initialPosition.value = [initialX, initialY];
      }
      const maxX = wrapperWidth > width ? wrapperWidth - width : 0;
      const maxY = wrapperHeight > height ? wrapperHeight - height - offsetTop : 0;
      if (maxX !== maxPosition.value[0] || maxY !== maxPosition.value[1]) {
        maxPosition.value = [maxX, maxY];
      }
      if (offsetTop) {
        minPosition.value = [0, 0 - offsetTop];
      }
    }
  };
  const handleMoveDown = (ev) => {
    if (draggable.value) {
      ev.preventDefault();
      isDragging.value = true;
      getInitialPosition();
      startMouse.value = [ev.x, ev.y];
      on(window, "mousemove", handleMouseMove);
      on(window, "mouseup", handleMouseUp);
      on(window, "contextmenu", handleMouseUp);
    }
  };
  const handleMouseMove = (ev) => {
    if (isDragging.value) {
      const diffX = ev.x - startMouse.value[0];
      const diffY = ev.y - startMouse.value[1];
      let x = initialPosition.value[0] + diffX;
      let y = initialPosition.value[1] + diffY;
      if (x < minPosition.value[0])
        x = minPosition.value[0];
      if (x > maxPosition.value[0])
        x = maxPosition.value[0];
      if (y < minPosition.value[1])
        y = minPosition.value[1];
      if (y > maxPosition.value[1])
        y = maxPosition.value[1];
      position.value = [x, y];
    }
  };
  const handleMouseUp = () => {
    isDragging.value = false;
    off(window, "mousemove", handleMouseMove);
    off(window, "mouseup", handleMouseUp);
  };
  return {
    position,
    handleMoveDown
  };
};
var __defProp$1 = Object.defineProperty;
var __getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
var __propIsEnum$1 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, {
  enumerable: true,
  configurable: true,
  writable: true,
  value
}) : obj[key] = value;
var __spreadValues$1 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1.call(b, prop))
      __defNormalProp$1(a, prop, b[prop]);
  if (__getOwnPropSymbols$1)
    for (var prop of __getOwnPropSymbols$1(b)) {
      if (__propIsEnum$1.call(b, prop))
        __defNormalProp$1(a, prop, b[prop]);
    }
  return a;
};
var _sfc_main$2 = defineComponent({
  name: "Modal",
  components: {
    ClientOnly,
    ArcoButton: Button,
    IconHover,
    IconClose,
    IconInfoCircleFill,
    IconCheckCircleFill,
    IconExclamationCircleFill,
    IconCloseCircleFill
  },
  inheritAttrs: false,
  props: {
    visible: {
      type: Boolean,
      default: void 0
    },
    defaultVisible: {
      type: Boolean,
      default: false
    },
    width: {
      type: [Number, String]
    },
    top: {
      type: [Number, String]
    },
    mask: {
      type: Boolean,
      default: true
    },
    title: {
      type: String
    },
    titleAlign: {
      type: String,
      default: "center"
    },
    alignCenter: {
      type: Boolean,
      default: true
    },
    unmountOnClose: Boolean,
    maskClosable: {
      type: Boolean,
      default: true
    },
    hideCancel: {
      type: Boolean,
      default: false
    },
    simple: {
      type: Boolean,
      default: (props) => {
        return props.notice;
      }
    },
    closable: {
      type: Boolean,
      default: true
    },
    okText: String,
    cancelText: String,
    okLoading: {
      type: Boolean,
      default: false
    },
    okButtonProps: {
      type: Object
    },
    cancelButtonProps: {
      type: Object
    },
    footer: {
      type: Boolean,
      default: true
    },
    renderToBody: {
      type: Boolean,
      default: true
    },
    popupContainer: {
      type: [String, Object],
      default: "body"
    },
    maskStyle: {
      type: Object
    },
    modalClass: {
      type: [String, Array]
    },
    modalStyle: {
      type: Object
    },
    onBeforeOk: {
      type: Function
    },
    onBeforeCancel: {
      type: Function
    },
    escToClose: {
      type: Boolean,
      default: true
    },
    draggable: {
      type: Boolean,
      default: false
    },
    fullscreen: {
      type: Boolean,
      default: false
    },
    maskAnimationName: {
      type: String,
      default: (props) => {
        if (props.fullscreen) {
          return "fade-in-standard";
        }
        return "fade-modal";
      }
    },
    modalAnimationName: {
      type: String,
      default: (props) => {
        if (props.fullscreen) {
          return "zoom-in";
        }
        return "zoom-modal";
      }
    },
    bodyClass: {
      type: [String, Array]
    },
    bodyStyle: {
      type: [String, Object, Array]
    },
    messageType: {
      type: String
    },
    hideTitle: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    "update:visible": (visible) => true,
    "ok": (e2) => true,
    "cancel": (e2) => true,
    "open": () => true,
    "close": () => true,
    "beforeOpen": () => true,
    "beforeClose": () => true
  },
  setup(props, {
    emit
  }) {
    const {
      fullscreen,
      popupContainer,
      alignCenter
    } = toRefs(props);
    const prefixCls = getPrefixCls("modal");
    const {
      t: t2
    } = useI18n();
    const wrapperRef = ref();
    const modalRef = ref();
    const _visible = ref(props.defaultVisible);
    const computedVisible = computed(() => {
      var _a;
      return (_a = props.visible) != null ? _a : _visible.value;
    });
    const _okLoading = ref(false);
    const mergedOkLoading = computed(() => props.okLoading || _okLoading.value);
    const mergedDraggable = computed(() => props.draggable && !props.fullscreen);
    const {
      teleportContainer,
      containerRef
    } = useTeleportContainer({
      popupContainer,
      visible: computedVisible
    });
    const mounted = ref(computedVisible.value);
    const okDisplayText = computed(() => props.okText || t2("modal.okText"));
    const cancelDisplayText = computed(() => props.cancelText || t2("modal.cancelText"));
    const {
      zIndex,
      isLastDialog
    } = usePopupManager("dialog", {
      visible: computedVisible
    });
    let globalKeyDownListener = false;
    const handleGlobalKeyDown = (ev) => {
      if (props.escToClose && ev.key === KEYBOARD_KEY.ESC && isLastDialog()) {
        handleCancel(ev);
      }
    };
    const addGlobalKeyDownListener = () => {
      if (props.escToClose && !globalKeyDownListener) {
        globalKeyDownListener = true;
        on(document.documentElement, "keydown", handleGlobalKeyDown);
      }
    };
    const removeGlobalKeyDownListener = () => {
      globalKeyDownListener = false;
      off(document.documentElement, "keydown", handleGlobalKeyDown);
    };
    let promiseNumber = 0;
    const {
      position,
      handleMoveDown
    } = useDraggable({
      wrapperRef,
      modalRef,
      draggable: mergedDraggable,
      alignCenter
    });
    const close = () => {
      promiseNumber++;
      if (_okLoading.value) {
        _okLoading.value = false;
      }
      _visible.value = false;
      emit("update:visible", false);
    };
    const handleOk = async (e2) => {
      const currentPromiseNumber = promiseNumber;
      const closed = await new Promise(async (resolve) => {
        var _a;
        if (isFunction$1(props.onBeforeOk)) {
          let result = props.onBeforeOk((closed2 = true) => resolve(closed2));
          if (isPromise(result) || !isBoolean$1(result)) {
            _okLoading.value = true;
          }
          if (isPromise(result)) {
            try {
              result = (_a = await result) != null ? _a : true;
            } catch (error) {
              result = false;
            }
          }
          if (isBoolean$1(result)) {
            resolve(result);
          }
        } else {
          resolve(true);
        }
      });
      if (currentPromiseNumber === promiseNumber) {
        if (closed) {
          emit("ok", e2);
          close();
        } else if (_okLoading.value) {
          _okLoading.value = false;
        }
      }
    };
    const handleCancel = (e2) => {
      var _a;
      let result = true;
      if (isFunction$1(props.onBeforeCancel)) {
        result = (_a = props.onBeforeCancel()) != null ? _a : false;
      }
      if (result) {
        emit("cancel", e2);
        close();
      }
    };
    const currentIsMask = ref(false);
    const handleMaskMouseDown = (ev) => {
      if (ev.target === wrapperRef.value) {
        currentIsMask.value = true;
      }
    };
    const handleMaskClick = (e2) => {
      if (props.mask && props.maskClosable && currentIsMask.value) {
        handleCancel(e2);
      }
    };
    const handleOpen = () => {
      if (computedVisible.value) {
        if (!contains(wrapperRef.value, document.activeElement) && document.activeElement instanceof HTMLElement) {
          document.activeElement.blur();
        }
        emit("open");
      }
    };
    const handleClose = () => {
      if (!computedVisible.value) {
        if (mergedDraggable.value) {
          position.value = void 0;
        }
        mounted.value = false;
        resetOverflow();
        emit("close");
      }
    };
    const {
      setOverflowHidden,
      resetOverflow
    } = useOverflow(containerRef);
    onMounted(() => {
      containerRef.value = getElement(props.popupContainer);
      if (computedVisible.value) {
        setOverflowHidden();
        if (props.escToClose) {
          addGlobalKeyDownListener();
        }
      }
    });
    onBeforeUnmount(() => {
      resetOverflow();
      removeGlobalKeyDownListener();
    });
    watch(computedVisible, (value) => {
      if (_visible.value !== value) {
        _visible.value = value;
      }
      if (value) {
        emit("beforeOpen");
        mounted.value = true;
        currentIsMask.value = false;
        setOverflowHidden();
        addGlobalKeyDownListener();
      } else {
        emit("beforeClose");
        removeGlobalKeyDownListener();
      }
    });
    watch(fullscreen, () => {
      if (position.value) {
        position.value = void 0;
      }
    });
    const wrapperCls = computed(() => [`${prefixCls}-wrapper`, {
      [`${prefixCls}-wrapper-align-center`]: props.alignCenter && !props.fullscreen,
      [`${prefixCls}-wrapper-moved`]: Boolean(position.value)
    }]);
    const modalCls = computed(() => [`${prefixCls}`, props.modalClass, {
      [`${prefixCls}-simple`]: props.simple,
      [`${prefixCls}-draggable`]: mergedDraggable.value,
      [`${prefixCls}-fullscreen`]: props.fullscreen
    }]);
    const mergedModalStyle = computed(() => {
      var _a;
      const style = __spreadValues$1({}, (_a = props.modalStyle) != null ? _a : {});
      if (props.width && !props.fullscreen) {
        style.width = isNumber$1(props.width) ? `${props.width}px` : props.width;
      }
      if (!props.alignCenter && props.top) {
        style.top = isNumber$1(props.top) ? `${props.top}px` : props.top;
      }
      if (position.value) {
        style.transform = `translate(${position.value[0]}px, ${position.value[1]}px)`;
      }
      return style;
    });
    return {
      prefixCls,
      mounted,
      computedVisible,
      containerRef,
      wrapperRef,
      mergedModalStyle,
      okDisplayText,
      cancelDisplayText,
      zIndex,
      handleOk,
      handleCancel,
      handleMaskClick,
      handleMaskMouseDown,
      handleOpen,
      handleClose,
      mergedOkLoading,
      modalRef,
      wrapperCls,
      modalCls,
      teleportContainer,
      handleMoveDown
    };
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_icon_info_circle_fill = resolveComponent("icon-info-circle-fill");
  const _component_icon_check_circle_fill = resolveComponent("icon-check-circle-fill");
  const _component_icon_exclamation_circle_fill = resolveComponent("icon-exclamation-circle-fill");
  const _component_icon_close_circle_fill = resolveComponent("icon-close-circle-fill");
  const _component_icon_close = resolveComponent("icon-close");
  const _component_icon_hover = resolveComponent("icon-hover");
  const _component_arco_button = resolveComponent("arco-button");
  const _component_client_only = resolveComponent("client-only");
  return openBlock(), createBlock(_component_client_only, null, {
    default: withCtx(() => [(openBlock(), createBlock(Teleport, {
      to: _ctx.teleportContainer,
      disabled: !_ctx.renderToBody
    }, [!_ctx.unmountOnClose || _ctx.computedVisible || _ctx.mounted ? withDirectives((openBlock(), createElementBlock("div", mergeProps({
      key: 0,
      class: `${_ctx.prefixCls}-container`,
      style: {
        zIndex: _ctx.zIndex
      }
    }, _ctx.$attrs), [createVNode(Transition, {
      name: _ctx.maskAnimationName,
      appear: ""
    }, {
      default: withCtx(() => [_ctx.mask ? withDirectives((openBlock(), createElementBlock("div", {
        key: 0,
        ref: "maskRef",
        class: normalizeClass(`${_ctx.prefixCls}-mask`),
        style: normalizeStyle(_ctx.maskStyle)
      }, null, 6)), [[vShow, _ctx.computedVisible]]) : createCommentVNode("v-if", true)]),
      _: 1
    }, 8, ["name"]), createElementVNode("div", {
      ref: "wrapperRef",
      class: normalizeClass(_ctx.wrapperCls),
      onClick: _cache[2] || (_cache[2] = withModifiers((...args) => _ctx.handleMaskClick && _ctx.handleMaskClick(...args), ["self"])),
      onMousedown: _cache[3] || (_cache[3] = withModifiers((...args) => _ctx.handleMaskMouseDown && _ctx.handleMaskMouseDown(...args), ["self"]))
    }, [createVNode(Transition, {
      name: _ctx.modalAnimationName,
      appear: "",
      onAfterEnter: _ctx.handleOpen,
      onAfterLeave: _ctx.handleClose
    }, {
      default: withCtx(() => [withDirectives(createElementVNode("div", {
        ref: "modalRef",
        class: normalizeClass(_ctx.modalCls),
        style: normalizeStyle(_ctx.mergedModalStyle)
      }, [!_ctx.hideTitle && (_ctx.$slots.title || _ctx.title || _ctx.closable) ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(`${_ctx.prefixCls}-header`),
        onMousedown: _cache[1] || (_cache[1] = (...args) => _ctx.handleMoveDown && _ctx.handleMoveDown(...args))
      }, [_ctx.$slots.title || _ctx.title ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass([`${_ctx.prefixCls}-title`, `${_ctx.prefixCls}-title-align-${_ctx.titleAlign}`])
      }, [_ctx.messageType ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(`${_ctx.prefixCls}-title-icon`)
      }, [_ctx.messageType === "info" ? (openBlock(), createBlock(_component_icon_info_circle_fill, {
        key: 0
      })) : createCommentVNode("v-if", true), _ctx.messageType === "success" ? (openBlock(), createBlock(_component_icon_check_circle_fill, {
        key: 1
      })) : createCommentVNode("v-if", true), _ctx.messageType === "warning" ? (openBlock(), createBlock(_component_icon_exclamation_circle_fill, {
        key: 2
      })) : createCommentVNode("v-if", true), _ctx.messageType === "error" ? (openBlock(), createBlock(_component_icon_close_circle_fill, {
        key: 3
      })) : createCommentVNode("v-if", true)], 2)) : createCommentVNode("v-if", true), renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString(_ctx.title), 1)])], 2)) : createCommentVNode("v-if", true), !_ctx.simple && _ctx.closable ? (openBlock(), createElementBlock("div", {
        key: 1,
        tabindex: "-1",
        role: "button",
        "aria-label": "Close",
        class: normalizeClass(`${_ctx.prefixCls}-close-btn`),
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleCancel && _ctx.handleCancel(...args))
      }, [createVNode(_component_icon_hover, null, {
        default: withCtx(() => [createVNode(_component_icon_close)]),
        _: 1
      })], 2)) : createCommentVNode("v-if", true)], 34)) : createCommentVNode("v-if", true), createElementVNode("div", {
        class: normalizeClass([`${_ctx.prefixCls}-body`, _ctx.bodyClass]),
        style: normalizeStyle(_ctx.bodyStyle)
      }, [renderSlot(_ctx.$slots, "default")], 6), _ctx.footer ? (openBlock(), createElementBlock("div", {
        key: 1,
        class: normalizeClass(`${_ctx.prefixCls}-footer`)
      }, [renderSlot(_ctx.$slots, "footer", {}, () => [!_ctx.hideCancel ? (openBlock(), createBlock(_component_arco_button, mergeProps({
        key: 0
      }, _ctx.cancelButtonProps, {
        onClick: _ctx.handleCancel
      }), {
        default: withCtx(() => [createTextVNode(toDisplayString(_ctx.cancelDisplayText), 1)]),
        _: 1
      }, 16, ["onClick"])) : createCommentVNode("v-if", true), createVNode(_component_arco_button, mergeProps({
        type: "primary"
      }, _ctx.okButtonProps, {
        loading: _ctx.mergedOkLoading,
        onClick: _ctx.handleOk
      }), {
        default: withCtx(() => [createTextVNode(toDisplayString(_ctx.okDisplayText), 1)]),
        _: 1
      }, 16, ["loading", "onClick"])])], 2)) : createCommentVNode("v-if", true)], 6), [[vShow, _ctx.computedVisible]])]),
      _: 3
    }, 8, ["name", "onAfterEnter", "onAfterLeave"])], 34)], 16)), [[vShow, _ctx.computedVisible || _ctx.mounted]]) : createCommentVNode("v-if", true)], 8, ["to", "disabled"]))]),
    _: 3
  });
}
var _Modal = /* @__PURE__ */ _export_sfc$1(_sfc_main$2, [["render", _sfc_render$1]]);
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
  enumerable: true,
  configurable: true,
  writable: true,
  value
}) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
const open = (config, appContext) => {
  let container = getOverlay("modal");
  const handleOk = () => {
    if (vm.component) {
      vm.component.props.visible = false;
    }
    if (isFunction$1(config.onOk)) {
      config.onOk();
    }
  };
  const handleCancel = () => {
    if (vm.component) {
      vm.component.props.visible = false;
    }
    if (isFunction$1(config.onCancel)) {
      config.onCancel();
    }
  };
  const handleClose = async () => {
    await nextTick();
    if (container) {
      render(null, container);
      document.body.removeChild(container);
    }
    container = null;
    if (isFunction$1(config.onClose)) {
      config.onClose();
    }
  };
  const handleReturnClose = () => {
    if (vm.component) {
      vm.component.props.visible = false;
    }
  };
  const handleUpdateConfig = (config2) => {
    if (vm.component) {
      Object.entries(config2).forEach(([key, value]) => {
        vm.component.props[key] = value;
      });
    }
  };
  const defaultConfig = {
    visible: true,
    renderToBody: false,
    unmountOnClose: true,
    onOk: handleOk,
    onCancel: handleCancel,
    onClose: handleClose
  };
  const vm = createVNode(_Modal, __spreadValues(__spreadValues(__spreadValues({}, defaultConfig), omit(config, ["content", "title", "footer", "visible", "unmountOnClose", "onOk", "onCancel", "onClose"])), {
    footer: typeof config.footer === "boolean" ? config.footer : void 0
  }), {
    default: getSlotFunction(config.content),
    title: getSlotFunction(config.title),
    footer: typeof config.footer !== "boolean" ? getSlotFunction(config.footer) : void 0
  });
  if (appContext != null ? appContext : Modal._context) {
    vm.appContext = appContext != null ? appContext : Modal._context;
  }
  render(vm, container);
  document.body.appendChild(container);
  return {
    close: handleReturnClose,
    update: handleUpdateConfig
  };
};
const modal = __spreadValues({
  open,
  confirm: (config, appContext) => {
    const _config = __spreadValues({
      simple: true,
      messageType: "warning"
    }, config);
    return open(_config, appContext);
  }
}, MESSAGE_TYPES.reduce((pre, value) => {
  pre[value] = (config, appContext) => {
    const _config = __spreadValues({
      simple: true,
      hideCancel: true,
      messageType: value
    }, config);
    return open(_config, appContext);
  };
  return pre;
}, {}));
const Modal = Object.assign(_Modal, __spreadProps(__spreadValues({}, modal), {
  install: (app, options) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);
    app.component(componentPrefix + _Modal.name, _Modal);
    const modalWithContext = {};
    for (const key of Object.keys(modal)) {
      modalWithContext[key] = (config, appContext = app._context) => modal[key](config, appContext);
    }
    app.config.globalProperties.$modal = modalWithContext;
  },
  _context: null
}));
var index = "";
var arco = "";
var index_vue_vue_type_style_index_0_scoped_true_lang$1 = "";
var _export_sfc = (sfc, props) => {
  const target2 = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target2[key] = val;
  }
  return target2;
};
const _withScopeId = (n2) => (pushScopeId("data-v-0d715043"), n2 = n2(), popScopeId(), n2);
const _hoisted_1$1 = {
  style: {
    "display": "block",
    "flex": "1",
    "height": "100%"
  }
};
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("div", {
  class: "header-box"
}, [/* @__PURE__ */ createElementVNode("div", {
  class: "info_tips_wrap"
}, [/* @__PURE__ */ createElementVNode("div", {
  class: "icon suc_icon"
})]), /* @__PURE__ */ createElementVNode("div", {
  class: "content"
}, [/* @__PURE__ */ createElementVNode("div", {
  class: "in-content"
}, [/* @__PURE__ */ createElementVNode("p", {
  class: "title"
}, "\u83DC\u5355\u5DF2\u53D1\u5E03"), /* @__PURE__ */ createElementVNode("p", {
  class: "title"
}, [/* @__PURE__ */ createTextVNode("\u53EF\u5728\u624B\u673A\u67E5\u770B\u83DC\u5355\u5185\u5BB9\uFF0C\u82E5\u5C1A\u672A\u751F\u6548\uFF0C\u8BF7\u7A0D\u540E\u67E5\u770B\u3002\u82E5\u505C\u7528\u83DC\u5355\uFF0C "), /* @__PURE__ */ createElementVNode("a", {
  style: {
    "color": "rgba(13,132,255,0.79)"
  },
  href: "https://mp.weixin.qq.com/",
  target: "_blank"
}, "\u8BF7\u524D\u5F80\u5FAE\u4FE1\u5B98\u65B9\u516C\u4F17\u5E73\u53F0")])])])], -1));
const _hoisted_3 = {
  class: "container-box"
};
const _hoisted_4 = {
  class: "phone-box"
};
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("div", {
  class: "menu__preview-hd"
}, null, -1));
const _hoisted_6 = {
  class: "menu__preview-bd"
};
const _hoisted_7 = {
  class: "menu__preview-bottom"
};
const _hoisted_8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("div", {
  class: "menu__keyboard"
}, [/* @__PURE__ */ createElementVNode("div", {
  class: "menu__keyboard-icon"
})], -1));
const _hoisted_9 = {
  class: "menu-list"
};
const _hoisted_10 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("div", {
  class: "add-no-menu"
}, [/* @__PURE__ */ createElementVNode("div", {
  class: "menu__add-icon"
}), /* @__PURE__ */ createElementVNode("span", null, "\u6DFB\u52A0\u83DC\u5355")], -1));
const _hoisted_11 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("div", {
  class: "menu__preview-line"
}, null, -1));
const _hoisted_12 = ["onClick"];
const _hoisted_13 = {
  key: 0,
  class: "submenu"
};
const _hoisted_14 = ["onClick"];
const _hoisted_15 = {
  class: "sub-menu-bar"
};
const _hoisted_16 = {
  key: 0,
  class: "sub-menu-bar-box"
};
const _hoisted_17 = {
  key: 0,
  class: "add-button-sub"
};
const _hoisted_18 = /* @__PURE__ */ createTextVNode("\u6DFB\u52A0");
const _hoisted_19 = {
  class: "menu-bar"
};
const _hoisted_20 = {
  key: 2,
  class: "add-button"
};
const _hoisted_21 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("div", {
  class: "menu_button_preview-line"
}, null, -1));
const _hoisted_22 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("i", {
  class: "icon14_menu_add"
}, null, -1));
const _hoisted_23 = {
  class: "right-editor-box"
};
const _hoisted_24 = {
  key: 0,
  class: "attribute-box"
};
const _hoisted_25 = {
  key: 0,
  class: "custom-no-have-menu-box"
};
const _hoisted_26 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("h3", {
  style: {
    "padding-bottom": "25px"
  }
}, "\u83DC\u5355\u4FE1\u606F", -1));
const _hoisted_27 = {
  class: "custom-menu-name"
};
const _hoisted_28 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("div", null, "\u4EC5\u652F\u6301\u4E2D\u82F1\u6587\u548C\u6570\u5B57\uFF0C\u5B57\u6570\u4E0D\u8D85\u8FC74\u4E2A\u6C49\u5B57\u62168\u4E2A\u5B57\u6BCD\u3002", -1));
const _hoisted_29 = {
  class: "custom-menu-type"
};
const _hoisted_30 = {
  key: 0,
  class: "custom-menu-content"
};
const _hoisted_31 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("div", null, "key\u503C\u4E3A\u7BA1\u7406\u5E73\u53F0\u521B\u5EFA\u597D\u7684\u529F\u80FDkey", -1));
const _hoisted_32 = {
  key: 1,
  class: "custom-menu-content"
};
const _hoisted_33 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("div", null, "\u8DF3\u8F6C\u8FDE\u63A5\u63A8\u8350\u4F7F\u7528\u5B89\u5168\u57DF\u540Dhttps://", -1));
const _hoisted_34 = {
  key: 2,
  class: "custom-menu-content"
};
const _hoisted_35 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("div", null, "\u8F93\u5165\u5BF9\u5E94\u7684\u5C0F\u7A0B\u5E8FAppid \u793A\u4F8B\uFF1Awxd027d2b162044fd5", -1));
const _hoisted_36 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("div", null, "\u8F93\u5165\u5BF9\u5E94\u7684\u5C0F\u7A0B\u5E8F\u9875\u9762\u8DEF\u5F84 \u793A\u4F8B\uFF1A/pages/index/index", -1));
const _hoisted_37 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("div", {
  class: "custom-menu-delete"
}, [/* @__PURE__ */ createElementVNode("div", {
  class: "input-title"
}, [/* @__PURE__ */ createElementVNode("div", {
  class: "delete-btn"
}, "\u5220\u9664\u83DC\u5355")])], -1));
const _hoisted_38 = {
  key: 1,
  class: "custom-have-menu-box"
};
const _hoisted_39 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("h3", {
  style: {
    "padding-bottom": "25px"
  }
}, "\u83DC\u5355\u4FE1\u606F", -1));
const _hoisted_40 = {
  class: "custom-menu-name"
};
const _hoisted_41 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("div", null, "\u4EC5\u652F\u6301\u4E2D\u82F1\u6587\u548C\u6570\u5B57\uFF0C\u5B57\u6570\u4E0D\u8D85\u8FC74\u4E2A\u6C49\u5B57\u62168\u4E2A\u5B57\u6BCD\u3002", -1));
const _hoisted_42 = {
  class: "custom-menu-delete"
};
const _hoisted_43 = {
  class: "input-title"
};
const _hoisted_44 = /* @__PURE__ */ createTextVNode("\u5220\u9664\u83DC\u5355");
const _hoisted_45 = {
  key: 1,
  class: "attribute-box"
};
const _hoisted_46 = {
  class: "menu__edit-action-bar"
};
const _hoisted_47 = {
  class: "menu__edit-action-inner"
};
const _hoisted_48 = {
  class: "menu__edit-button"
};
const _hoisted_49 = /* @__PURE__ */ createTextVNode("\u9884\u89C8");
const _hoisted_50 = /* @__PURE__ */ createTextVNode("\u4FDD\u5B58");
const _hoisted_51 = /* @__PURE__ */ createTextVNode("\u4FDD\u5B58\u5E76\u53D1\u5E03");
const __default__ = {
  name: "customMenu",
  components: {
    "a-button": Button,
    "a-empty": Empty
  }
};
function setup(__props, {
  emit: emits
}) {
  const select_menu_id = ref(0);
  const select_menu_sub_id = ref(0);
  const menu_type = ref("");
  const menu_type_options = ref([{
    label: "\u63A8\u9001\u4E8B\u4EF6\u6D88\u606F",
    value: "click"
  }, {
    label: "\u7F51\u9875\u8DF3\u8F6C",
    value: "view"
  }, {
    label: "\u5C0F\u7A0B\u5E8F\u8DF3\u8F6C",
    value: "miniprogram"
  }]);
  const formData = ref({});
  const rule = ref({
    name: [{
      required: true,
      message: "\u8BF7\u8F93\u5165\u83DC\u5355\u540D\u79F0",
      trigger: "blur"
    }, {
      minLength: 2,
      message: "\u8BF7\u8F93\u5165\u83DC\u5355\u540D\u79F0 \u6700\u4F4E5\u4F4D\u5B57\u7B26",
      trigger: "blur"
    }, {
      maxLength: 4,
      message: "\u8BF7\u8F93\u5165\u83DC\u5355\u540D\u79F0 \u6700\u591A4\u4F4D\u5B57\u7B26",
      trigger: "blur"
    }],
    url: [{
      required: true,
      message: "\u8BF7\u8F93\u5165\u7F51\u9875\u94FE\u63A5",
      trigger: "blur"
    }, {
      match: /^(http|https):\/\//,
      message: "\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u7F51\u9875\u94FE\u63A5",
      trigger: "blur"
    }],
    appid: [{
      required: true,
      message: "\u8BF7\u8F93\u5165\u5C0F\u7A0B\u5E8FAppid",
      trigger: "blur"
    }, {
      match: /^[a-zA-Z0-9]{18}$/,
      message: "\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u5C0F\u7A0B\u5E8FAppid",
      trigger: "blur"
    }],
    pagepath: [{
      required: true,
      message: "\u8BF7\u8F93\u5165\u9875\u9762\u8DEF\u5F84",
      trigger: "blur"
    }, {
      match: /^\/pages\/[a-zA-Z0-9]+\/[a-zA-Z0-9]+$/,
      message: "\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u9875\u9762\u8DEF\u5F84",
      trigger: "blur"
    }],
    key: [{
      required: true,
      message: "\u8BF7\u8F93\u5165\u83DC\u5355\u5185\u5BB9"
    }]
  });
  const menu_data = ref({
    button: [],
    matchrule: {
      tag_id: "2",
      sex: "1",
      country: "\u4E2D\u56FD",
      province: "\u5E7F\u4E1C",
      city: "\u5E7F\u5DDE",
      language: "zh_CN"
    }
  });
  const saveMenu = async () => {
    if (select_menu_id.value === 0) {
      return;
    }
    const menu = menu_data.value.button.find((item) => item.id === select_menu_id.value);
    if (select_menu_sub_id.value === 0) {
      if (menu.sub_button.length === 0) {
        menu.name = formData.value.name;
        menu.type = menu_type.value;
        switch (menu_type.value) {
          case "click":
            menu.key = formData.value.key;
            const {
              name,
              sub_button,
              id,
              type,
              key
            } = menu;
            menu_data.value.button.splice(menu_data.value.button.findIndex((item) => item.id === select_menu_id.value), 1, {
              name,
              sub_button,
              id,
              type,
              key
            });
            break;
          case "view":
            menu.url = formData.value.url;
            const {
              name: name1,
              sub_button: sub_button1,
              id: id1,
              type: type1,
              url
            } = menu;
            menu_data.value.button.splice(menu_data.value.button.findIndex((item) => item.id === select_menu_id.value), 1, {
              name: name1,
              sub_button: sub_button1,
              id: id1,
              type: type1,
              url
            });
            break;
          case "miniprogram":
            menu.appid = formData.value.appid;
            menu.pagepath = formData.value.pagepath;
            const {
              name: name2,
              sub_button: sub_button2,
              id: id2,
              type: type2,
              appid,
              pagepath
            } = menu;
            menu_data.value.button.splice(menu_data.value.button.findIndex((item) => item.id === select_menu_id.value), 1, {
              name: name2,
              sub_button: sub_button2,
              id: id2,
              type: type2,
              appid,
              pagepath
            });
            break;
        }
      } else {
        menu.name = formData.value.name;
      }
    } else {
      const sub_menu = menu.sub_button.find((item) => item.id === select_menu_sub_id.value);
      sub_menu.name = formData.value.name;
      sub_menu.type = menu_type.value;
      switch (menu_type.value) {
        case "click":
          sub_menu.key = formData.value.key;
          const {
            name,
            id,
            type,
            key
          } = sub_menu;
          menu.sub_button.splice(menu.sub_button.findIndex((item) => item.id === select_menu_sub_id.value), 1, {
            name,
            id,
            type,
            key
          });
          break;
        case "view":
          sub_menu.url = formData.value.url;
          const {
            name: name1,
            id: id1,
            type: type1,
            url
          } = sub_menu;
          menu.sub_button.splice(menu.sub_button.findIndex((item) => item.id === select_menu_sub_id.value), 1, {
            name: name1,
            id: id1,
            type: type1,
            url
          });
          break;
        case "miniprogram":
          sub_menu.appid = formData.value.appid;
          sub_menu.pagepath = formData.value.pagepath;
          const {
            name: name2,
            id: id2,
            type: type2,
            appid,
            pagepath
          } = sub_menu;
          menu.sub_button.splice(menu.sub_button.findIndex((item) => item.id === select_menu_sub_id.value), 1, {
            name: name2,
            id: id2,
            type: type2,
            appid,
            pagepath
          });
          break;
      }
    }
  };
  const submitMenuData = async () => {
    if (menu_data.value.button.length === 0) {
      Modal.info({
        title: "\u63D0\u9192",
        content: "\u8BF7\u5148\u6DFB\u52A0\u83DC\u5355"
      });
      return;
    }
    await saveMenu();
    emits("submitData", menu_data.value);
  };
  const preview = () => {
    Modal.info({
      title: "\u63D0\u9192",
      content: "\u5F00\u6E90\u7248\u4E0D\u652F\u6301\u9884\u89C8\n\u5982\u6709\u9700\u8981\u4E13\u4E1A\u7248\u672C\u8BF7\u8054\u7CFB\u4F5C\u8005"
    });
  };
  const isHaveSubMenu = () => {
    if (menu_data.value.button.length > 0) {
      const menu_id = select_menu_id.value;
      const menu = menu_data.value.button.find((item) => item.id === menu_id);
      if (menu.sub_button && menu.sub_button.length > 0) {
        return true;
      } else {
        return false;
      }
    }
  };
  const addMainMenu = async () => {
    formData.value = {};
    if (menu_data.value.button.length < 3) {
      let menu_id = 0;
      if (menu_data.value.button.length === 0) {
        menu_id = 1;
      } else {
        menu_id = menu_data.value.button[menu_data.value.button.length - 1].id + 1;
      }
      menu_data.value.button.push({
        id: menu_id,
        name: "\u83DC\u5355\u540D\u79F0",
        type: "click",
        key: "",
        sub_button: []
      });
      select_menu_id.value = menu_id;
      await selectMenu(select_menu_id.value);
    } else {
      console.log("\u6700\u591A\u53EA\u80FD\u6DFB\u52A0\u4E09\u4E2A\u4E00\u7EA7\u83DC\u5355");
    }
  };
  const addMSubMenu = async () => {
    formData.value = {};
    const menu_id = select_menu_id.value;
    const menu = menu_data.value.button.find((item) => item.id === menu_id);
    if (menu.sub_button.length < 5) {
      let sub_menu_id = 0;
      if (menu.sub_button.length === 0) {
        sub_menu_id = 1;
      } else {
        sub_menu_id = menu.sub_button[menu.sub_button.length - 1].id + 1;
      }
      menu.sub_button.push({
        id: menu.sub_button.length + 1,
        name: "\u5B50\u83DC\u5355\u540D\u79F0",
        type: "click",
        key: ""
      });
      select_menu_sub_id.value = sub_menu_id;
      await selectSubMenu(select_menu_sub_id.value);
      const {
        name,
        sub_button,
        id
      } = menu;
      menu_data.value.button.splice(menu_data.value.button.findIndex((item) => item.id === menu_id), 1, {
        name,
        sub_button,
        id
      });
    } else {
      console.log("\u6700\u591A\u53EA\u80FD\u6DFB\u52A0\u4E94\u4E2A\u4E8C\u7EA7\u83DC\u5355");
    }
  };
  const selectMenu = async (item) => {
    formData.value = {};
    select_menu_id.value = item;
    select_menu_sub_id.value = 0;
    const menu = menu_data.value.button.find((item2) => item2.id === select_menu_id.value);
    if (menu_data.value.button.find((item2) => item2.id === select_menu_id.value).sub_button.length === 0) {
      formData.value.name = menu.name;
      menu_type.value = menu.type;
      switch (menu_type.value) {
        case "click":
          formData.value.key = menu.key;
          break;
        case "view":
          formData.value.url = menu.url;
          break;
        case "miniprogram":
          formData.value.appid = menu.appid;
          formData.value.pagepath = menu.pagepath;
          break;
      }
    } else {
      formData.value.name = menu.name;
    }
  };
  const selectSubMenu = async (item) => {
    formData.value = {};
    select_menu_sub_id.value = item;
    const menu = menu_data.value.button.find((item2) => item2.id === select_menu_id.value);
    const sub_menu = menu.sub_button.find((item2) => item2.id === select_menu_sub_id.value);
    formData.value.name = sub_menu.name;
    switch (sub_menu.type) {
      case "click":
        menu_type.value = "click";
        formData.value.key = sub_menu.key;
        break;
      case "view":
        menu_type.value = "view";
        formData.value.url = sub_menu.url;
        break;
      case "miniprogram":
        menu_type.value = "miniprogram";
        formData.value.appid = sub_menu.appid;
        formData.value.pagepath = sub_menu.pagepath;
        break;
    }
  };
  const onLeftMove = async () => {
    let previousId = null;
    for (let i2 = 0; i2 < menu_data.value.button.length; i2++) {
      if (menu_data.value.button[i2].id === select_menu_id.value) {
        if (i2 > 0) {
          previousId = menu_data.value.button[i2 - 1].id;
        }
        break;
      }
    }
    await selectMenu(previousId);
  };
  const onDelete = async () => {
    const menu_id = select_menu_id.value;
    for (let i2 = 0; i2 < menu_data.value.button.length; i2++) {
      if (menu_data.value.button[i2].id === menu_id) {
        menu_data.value.button.splice(i2, 1);
        break;
      }
    }
  };
  const onDeleteSub = async () => {
    const menu_id = select_menu_id.value;
    const sub_menu_id = select_menu_sub_id.value;
    for (let i2 = 0; i2 < menu_data.value.button.length; i2++) {
      if (menu_data.value.button[i2].id === menu_id) {
        for (let j = 0; j < menu_data.value.button[i2].sub_button.length; j++) {
          if (menu_data.value.button[i2].sub_button[j].id === sub_menu_id) {
            menu_data.value.button[i2].sub_button.splice(j, 1);
            if (menu_data.value.button[i2].sub_button.length === 0) {
              select_menu_id.value = menu_id;
              await selectMenu(select_menu_id.value);
            } else {
              if (j === menu_data.value.button[i2].sub_button.length) {
                select_menu_sub_id.value = menu_data.value.button[i2].sub_button[j - 1].id;
                await selectSubMenu(select_menu_sub_id.value);
              } else {
                select_menu_sub_id.value = menu_data.value.button[i2].sub_button[j].id;
                await selectSubMenu(select_menu_sub_id.value);
              }
            }
            break;
          }
        }
      }
    }
  };
  const onRightMove = async () => {
    let nextId = null;
    for (let i2 = 0; i2 < menu_data.value.button.length; i2++) {
      if (menu_data.value.button[i2].id === select_menu_id.value) {
        if (i2 < menu_data.value.button.length - 1) {
          nextId = menu_data.value.button[i2 + 1].id;
        }
        break;
      }
    }
    await selectMenu(nextId);
  };
  return (_ctx, _cache) => {
    const _component_a_col = Col;
    const _component_a_row = Row;
    const _component_a_button = Button;
    const _component_a_input = Input;
    const _component_a_form_item = FormItem;
    const _component_a_radio_group = RadioGroup;
    const _component_a_form = Form;
    const _component_a_empty = Empty;
    return openBlock(), createElementBlock("div", _hoisted_1$1, [createVNode(_component_a_row, null, {
      default: withCtx(() => [createVNode(_component_a_col, {
        span: 24
      }, {
        default: withCtx(() => [_hoisted_2]),
        _: 1
      })]),
      _: 1
    }), createVNode(_component_a_row, null, {
      default: withCtx(() => [createVNode(_component_a_col, {
        span: 24
      }, {
        default: withCtx(() => [createElementVNode("div", _hoisted_3, [createElementVNode("div", _hoisted_4, [_hoisted_5, createElementVNode("div", _hoisted_6, [createElementVNode("div", _hoisted_7, [_hoisted_8, createElementVNode("div", _hoisted_9, [menu_data.value.button.length <= 0 ? (openBlock(), createBlock(_component_a_button, {
          key: 0,
          type: "text",
          class: "menu-add-no-menu",
          onClick: addMainMenu
        }, {
          default: withCtx(() => [_hoisted_10]),
          _: 1
        })) : (openBlock(true), createElementBlock(Fragment, {
          key: 1
        }, renderList(menu_data.value.button, (item) => {
          return openBlock(), createElementBlock("div", {
            key: item.id,
            class: normalizeClass(`menu-list-item ${select_menu_id.value === item.id && select_menu_sub_id.value === 0 ? "menu-box-shadow" : ""}`)
          }, [_hoisted_11, createElementVNode("div", {
            class: normalizeClass(`menu-item ${select_menu_id.value === item.id && select_menu_sub_id.value === 0 ? "menu-item-color" : ""}`),
            onClick: ($event) => selectMenu(item.id)
          }, toDisplayString(item.name), 11, _hoisted_12), select_menu_id.value === item.id ? (openBlock(), createElementBlock("div", _hoisted_13, [(openBlock(true), createElementBlock(Fragment, null, renderList(item.sub_button, (sub_item) => {
            return openBlock(), createElementBlock("div", {
              key: sub_item.id,
              class: normalizeClass(`menu-item-sub ${select_menu_sub_id.value === sub_item.id ? "menu-box-shadow menu-item-color" : ""} ${select_menu_sub_id.value !== sub_item.id ? "menu-item-border-color" : ""}`)
            }, [createElementVNode("span", {
              style: {
                "flex": "1",
                "height": "100%",
                "display": "flex",
                "justify-content": "center",
                "align-items": "center"
              },
              onClick: ($event) => selectSubMenu(sub_item.id)
            }, toDisplayString(sub_item.name), 9, _hoisted_14), createElementVNode("div", _hoisted_15, [select_menu_sub_id.value === sub_item.id ? (openBlock(), createElementBlock("div", _hoisted_16, [createElementVNode("div", {
              class: "sub-center-bar bar-hover",
              onClick: onDeleteSub
            })])) : createCommentVNode("", true)])], 2);
          }), 128)), item.sub_button.length < 5 ? (openBlock(), createElementBlock("div", _hoisted_17, [createVNode(_component_a_button, {
            type: "text",
            title: "\u6700\u591A\u6DFB\u52A05\u4E2A\u5B50\u83DC\u5355",
            onClick: addMSubMenu
          }, {
            icon: withCtx(() => [createVNode(unref(IconPlus))]),
            default: withCtx(() => [_hoisted_18]),
            _: 1
          })])) : createCommentVNode("", true), createElementVNode("i", {
            class: normalizeClass(`arrow arrow_out ${select_menu_sub_id.value === 5 && item.sub_button.length === 5 ? "arrow_out_select" : ""}`)
          }, null, 2), createElementVNode("i", {
            class: normalizeClass(`arrow arrow_in ${select_menu_sub_id.value === 5 && item.sub_button.length === 5 ? "arrow_in_select" : ""}`)
          }, null, 2)])) : createCommentVNode("", true), createElementVNode("div", _hoisted_19, [select_menu_id.value === item.id ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(`menu-bar-box ${menu_data.value.button.length > 1 ? "bar-padding" : ""}`)
          }, [item.id !== menu_data.value.button[0].id ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "left-bar bar-hover",
            onClick: onLeftMove
          })) : createCommentVNode("", true), createElementVNode("div", {
            class: "center-bar bar-hover",
            onClick: onDelete
          }), menu_data.value.button[1] && item.id !== menu_data.value.button[1].id && menu_data.value.button.length === 2 ? (openBlock(), createElementBlock("div", {
            key: 1,
            class: "right-bar bar-hover",
            onClick: onRightMove
          })) : createCommentVNode("", true), menu_data.value.button.length > 2 && item.id !== menu_data.value.button[2].id ? (openBlock(), createElementBlock("div", {
            key: 2,
            class: "right-bar bar-hover",
            onClick: onRightMove
          })) : createCommentVNode("", true)], 2)) : createCommentVNode("", true)])], 2);
        }), 128)), menu_data.value.button.length < 3 && menu_data.value.button.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_20, [_hoisted_21, createVNode(_component_a_button, {
          type: "text",
          onClick: addMainMenu
        }, {
          default: withCtx(() => [_hoisted_22]),
          _: 1
        })])) : createCommentVNode("", true)])])])]), createElementVNode("div", _hoisted_23, [menu_data.value.button.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_24, [isHaveSubMenu() === false && select_menu_id.value !== 0 || select_menu_sub_id.value !== 0 ? (openBlock(), createElementBlock("div", _hoisted_25, [_hoisted_26, createVNode(_component_a_form, {
          ref: (_value, _refs) => {
            _refs["formVisible"] = _value;
          },
          model: formData.value,
          rules: rule.value,
          style: {
            width: "600px"
          }
        }, {
          default: withCtx(() => [createElementVNode("div", _hoisted_27, [createVNode(_component_a_form_item, {
            label: "\u540D\u79F0",
            field: "name",
            required: ""
          }, {
            extra: withCtx(() => [_hoisted_28]),
            default: withCtx(() => [createVNode(_component_a_input, {
              modelValue: formData.value.name,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => formData.value.name = $event),
              placeholder: "\u4EC5\u652F\u6301\u4E2D\u6587\u6216\u6570\u5B57"
            }, null, 8, ["modelValue"])]),
            _: 1
          })]), createElementVNode("div", _hoisted_29, [createVNode(_component_a_form_item, {
            label: "\u6D88\u606F\u7C7B\u578B"
          }, {
            default: withCtx(() => [createVNode(_component_a_radio_group, {
              modelValue: menu_type.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => menu_type.value = $event),
              "default-value": menu_type.value,
              options: menu_type_options.value,
              class: "ml-4"
            }, null, 8, ["modelValue", "default-value", "options"])]),
            _: 1
          })]), menu_type.value === "click" ? (openBlock(), createElementBlock("div", _hoisted_30, [createVNode(_component_a_form_item, {
            label: "\u83DC\u5355\u5185\u5BB9",
            field: "key",
            required: ""
          }, {
            extra: withCtx(() => [_hoisted_31]),
            default: withCtx(() => [createVNode(_component_a_input, {
              modelValue: formData.value.key,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => formData.value.key = $event),
              placeholder: "\u4EC5\u652F\u6301\u4E2D\u6587\u6216\u6570\u5B57"
            }, null, 8, ["modelValue"])]),
            _: 1
          })])) : createCommentVNode("", true), menu_type.value === "view" ? (openBlock(), createElementBlock("div", _hoisted_32, [createVNode(_component_a_form_item, {
            label: "\u7F51\u9875\u94FE\u63A5",
            field: "url",
            required: ""
          }, {
            extra: withCtx(() => [_hoisted_33]),
            default: withCtx(() => [createVNode(_component_a_input, {
              modelValue: formData.value.url,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => formData.value.url = $event),
              placeholder: "\u516C\u4F17\u53F7\u94FE\u63A5"
            }, null, 8, ["modelValue"])]),
            _: 1
          })])) : createCommentVNode("", true), menu_type.value === "miniprogram" ? (openBlock(), createElementBlock("div", _hoisted_34, [createVNode(_component_a_form_item, {
            label: "Appid",
            field: "appid",
            required: ""
          }, {
            extra: withCtx(() => [_hoisted_35]),
            default: withCtx(() => [createVNode(_component_a_input, {
              modelValue: formData.value.appid,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => formData.value.appid = $event),
              placeholder: "\u5C0F\u7A0B\u5E8FAppid"
            }, null, 8, ["modelValue"])]),
            _: 1
          }), createVNode(_component_a_form_item, {
            label: "\u9875\u9762\u8DEF\u5F84",
            field: "pagepath",
            required: ""
          }, {
            extra: withCtx(() => [_hoisted_36]),
            default: withCtx(() => [createVNode(_component_a_input, {
              modelValue: formData.value.pagepath,
              "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => formData.value.pagepath = $event),
              placeholder: "\u9875\u9762\u8DEF\u5F84"
            }, null, 8, ["modelValue"])]),
            _: 1
          })])) : createCommentVNode("", true)]),
          _: 1
        }, 8, ["model", "rules"]), _hoisted_37])) : createCommentVNode("", true), isHaveSubMenu() === true && select_menu_id.value !== 0 && select_menu_sub_id.value === 0 ? (openBlock(), createElementBlock("div", _hoisted_38, [_hoisted_39, createVNode(_component_a_form, {
          ref: (_value, _refs) => {
            _refs["formVisible"] = _value;
          },
          model: formData.value,
          rules: rule.value
        }, {
          default: withCtx(() => [createElementVNode("div", _hoisted_40, [createVNode(_component_a_form_item, {
            label: "\u540D\u79F0",
            field: "name",
            required: ""
          }, {
            extra: withCtx(() => [_hoisted_41]),
            default: withCtx(() => [createVNode(_component_a_input, {
              modelValue: formData.value.name,
              "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => formData.value.name = $event),
              placeholder: "\u4EC5\u652F\u6301\u4E2D\u6587\u6216\u6570\u5B57"
            }, null, 8, ["modelValue"])]),
            _: 1
          })]), createElementVNode("div", _hoisted_42, [createElementVNode("div", _hoisted_43, [createVNode(_component_a_button, {
            type: "text",
            class: "delete-btn"
          }, {
            default: withCtx(() => [_hoisted_44]),
            _: 1
          })])])]),
          _: 1
        }, 8, ["model", "rules"])])) : createCommentVNode("", true)])) : createCommentVNode("", true), menu_data.value.button.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_45, [createVNode(_component_a_empty, {
          description: "\u4F60\u672A\u6DFB\u52A0\u81EA\u5B9A\u4E49\u83DC\u5355\uFF0C\u70B9\u51FB\u5DE6\u4FA7\u6DFB\u52A0\u83DC\u5355\u4E3A\u516C\u4F17\u53F7\u521B\u5EFA\u83DC\u5355\u680F\u3002"
        })])) : createCommentVNode("", true), createElementVNode("div", _hoisted_46, [createElementVNode("div", _hoisted_47, [createElementVNode("div", _hoisted_48, [createVNode(_component_a_button, {
          onClick: preview
        }, {
          default: withCtx(() => [_hoisted_49]),
          _: 1
        }), createVNode(_component_a_button, {
          type: "primary",
          onClick: saveMenu
        }, {
          default: withCtx(() => [_hoisted_50]),
          _: 1
        }), createVNode(_component_a_button, {
          type: "primary",
          onClick: submitMenuData
        }, {
          default: withCtx(() => [_hoisted_51]),
          _: 1
        })])])])])])]),
        _: 1
      })]),
      _: 1
    })]);
  };
}
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...__default__,
  emits: ["submitData"],
  setup
});
var CustomMenu = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-0d715043"]]);
const CustomMenuPlugin = {
  install(app) {
    app.component("custom-menu", CustomMenu);
  }
};
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = {};
const _hoisted_1 = {
  class: "custom-media"
};
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1, " \u6211\u662F\u7D20\u6750\u7BA1\u7406\u7EC4\u4EF6 ");
}
var CustomMedia = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-3a9ea020"]]);
const CustomMediaPlugin = {
  install(app) {
    app.component("custom-media", CustomMedia);
  }
};
const ComponentsPlugin = {
  install(app) {
    var _a, _b;
    (_a = CustomMenuPlugin.install) == null ? void 0 : _a.call(CustomMenuPlugin, app);
    (_b = CustomMediaPlugin.install) == null ? void 0 : _b.call(CustomMediaPlugin, app);
  }
};
export { CustomMedia, CustomMediaPlugin, CustomMenu, CustomMenuPlugin, ComponentsPlugin as default };
