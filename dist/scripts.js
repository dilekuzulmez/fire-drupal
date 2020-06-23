/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"scripts": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./theme/main.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./theme/assets/scripts/components/analytics.js":
/*!******************************************************!*\
  !*** ./theme/assets/scripts/components/analytics.js ***!
  \******************************************************/
/*! exports provided: FireAnalytics */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FireAnalytics", function() { return FireAnalytics; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Note: Google Analytics should be initiated using a Drupal module
var FireAnalytics = /*#__PURE__*/function () {
  function FireAnalytics() {
    _classCallCheck(this, FireAnalytics);
  }

  _createClass(FireAnalytics, null, [{
    key: "sendEvent",
    value: function sendEvent(category, action, label) {
      if (!FireAnalytics.isSetup) {
        return;
      }

      ga('send', 'event', category, action, label);
    }
  }, {
    key: "isSetup",
    get: function get() {
      return typeof window.ga === 'undefined' ? false : true;
    }
  }, {
    key: "category",
    get: function get() {
      return {
        SLIDERS: 'Sliders',
        MODALS: 'Modals',
        BUTTONS: 'Buttons',
        FORMS: 'Forms',
        ERRORS: 'Errors'
      };
    }
  }, {
    key: "action",
    get: function get() {
      return {
        SUBMIT: 'Submit',
        CLICK: 'Click',
        OPEN: 'Open',
        CLOSE: 'Close',
        ERROR: 'Error'
      };
    }
  }]);

  return FireAnalytics;
}();

/***/ }),

/***/ "./theme/assets/scripts/components/component-record.js":
/*!*************************************************************!*\
  !*** ./theme/assets/scripts/components/component-record.js ***!
  \*************************************************************/
/*! exports provided: FireComponentRecord */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FireComponentRecord", function() { return FireComponentRecord; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utility */ "./theme/assets/scripts/utilities/index.js");
/* harmony import */ var _template_components_site_header_site_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @template/components/site-header/site-header */ "./theme/templates/components/site-header/site-header.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




/**
 * @type class
 * @name FireComponentRecord
 * @description
 *
 * Component record class
 *
 **/

var FireComponentRecord = /*#__PURE__*/function () {
  function FireComponentRecord() {
    _classCallCheck(this, FireComponentRecord);
  }

  _createClass(FireComponentRecord, [{
    key: "_registerComponent",
    // register correct component
    value: function _registerComponent(component, name, id, afterBehaviorHit) {
      // mark as registered
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(component).attr('data-registered', id); // init correct component class

      switch (name) {
        case 'site-header':
          new _template_components_site_header_site_header__WEBPACK_IMPORTED_MODULE_2__["SiteHeader"](id).init();
          break;

        default:
          break;
      }
    }
  }, {
    key: "registerAllComponents",
    value: function registerAllComponents(afterBehaviorHit) {
      var _this = this;

      // loop through all components on the page
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-fire-component]').each(function (index, component) {
        // get name of component
        var names = jquery__WEBPACK_IMPORTED_MODULE_0___default()(component).data('fire-component');
        names = names.split(', '); // generate a unique ID

        var id = Object(_utility__WEBPACK_IMPORTED_MODULE_1__["generateUniqueId"])();

        var _iterator = _createForOfIteratorHelper(names),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var name = _step.value;

            _this._registerComponent(component, name, id, afterBehaviorHit);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      });
    }
  }]);

  return FireComponentRecord;
}();

/***/ }),

/***/ "./theme/assets/scripts/components/component.js":
/*!******************************************************!*\
  !*** ./theme/assets/scripts/components/component.js ***!
  \******************************************************/
/*! exports provided: FireComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FireComponent", function() { return FireComponent; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


/**
 * @type class
 * @name FireComponent
 * @description
 *
 * Component class
 *
 * @param {String} key - a unique identifier for the component
 *
 **/

var FireComponent = /*#__PURE__*/function () {
  function FireComponent(id) {
    _classCallCheck(this, FireComponent);

    // id is generated by FireComponentRecord
    this.id = id;
  } // grab component HTML element and assign to a variable,
  // this is now usable anywhere this Class is extended


  _createClass(FireComponent, [{
    key: "findElement",
    // helper function to find specific child element of component
    value: function findElement(element) {
      return this.$component.find("[data-element=".concat(element, "]"));
    }
  }, {
    key: "$component",
    get: function get() {
      return jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.componentSelector);
    } // helper variable to get component selector

  }, {
    key: "componentSelector",
    get: function get() {
      return "[data-registered=\"".concat(this.id, "\"]");
    } // helper variable to check if the component exists

  }, {
    key: "componentExists",
    get: function get() {
      return this.$component.length !== 0;
    }
  }]);

  return FireComponent;
}();

/***/ }),

/***/ "./theme/assets/scripts/components/convert-to-inline-svg.js":
/*!******************************************************************!*\
  !*** ./theme/assets/scripts/components/convert-to-inline-svg.js ***!
  \******************************************************************/
/*! exports provided: ConvertToInlineSvg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConvertToInlineSvg", function() { return ConvertToInlineSvg; });
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @component */ "./theme/assets/scripts/components/index.js");
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utility */ "./theme/assets/scripts/utilities/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



/**
 * @type public
 * @name ConvertToInlineSvg
 * @description
 *
 * Converts a source into an inline SVG
 * More information: https://github.com/skycatchfire/fire/issues/68
 *
 **/

var ConvertToInlineSvg = /*#__PURE__*/function (_FireComponent) {
  _inherits(ConvertToInlineSvg, _FireComponent);

  var _super = _createSuper(ConvertToInlineSvg);

  function ConvertToInlineSvg(id) {
    _classCallCheck(this, ConvertToInlineSvg);

    return _super.call(this, id);
  }

  _createClass(ConvertToInlineSvg, [{
    key: "init",
    value: function init() {
      if (!this.componentExists) return;
      Object(_utility__WEBPACK_IMPORTED_MODULE_1__["convertSourceToSVG"])(this.$component, this.url, this.color, this.classes);
    }
  }, {
    key: "url",
    get: function get() {
      return this.$component.attr('data-src');
    }
  }, {
    key: "classes",
    get: function get() {
      return this.$component.attr('class');
    }
  }, {
    key: "color",
    get: function get() {
      return this.$component.attr('data-color') ? this.$component.attr('data-color') : null;
    }
  }]);

  return ConvertToInlineSvg;
}(_component__WEBPACK_IMPORTED_MODULE_0__["FireComponent"]);

/***/ }),

/***/ "./theme/assets/scripts/components/detect.js":
/*!***************************************************!*\
  !*** ./theme/assets/scripts/components/detect.js ***!
  \***************************************************/
/*! exports provided: FireDetect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FireDetect", function() { return FireDetect; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/throttle */ "./node_modules/lodash/throttle.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



/**
 * @type class
 * @name FireDetect
 * @description
 *
 * Useful methods used to detect browser, platform, etc
 *
 **/

var FireDetect = /*#__PURE__*/function () {
  function FireDetect() {
    _classCallCheck(this, FireDetect);

    this.browser = this.detectBrowser();
    this.platform = this.detectPlatform();
    this.touch = this.detectTouch();
  }

  _createClass(FireDetect, [{
    key: "detectBrowser",
    value: function detectBrowser() {
      var browserList = {
        safari: /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor),
        chrome: /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor),
        firefox: navigator.userAgent.toLowerCase().indexOf('firefox') > -1,
        edge: /Edge/.test(navigator.userAgent),
        ie11: /Trident/.test(navigator.userAgent) || /MSIE/.test(navigator.userAgent)
      }; // return detected browser

      for (var browser in browserList) {
        if (browserList[browser] === true) return browser;
      }
    }
  }, {
    key: "detectPlatform",
    value: function detectPlatform() {
      var platform = navigator.platform;
      var formattedPlatform = platform.replace(' ', '-'); // replace space with dash if present

      return formattedPlatform;
    }
  }, {
    key: "detectTouch",
    value: function detectTouch() {
      return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
    }
  }, {
    key: "setHtmlClasses",
    value: function setHtmlClasses() {
      var html = document.documentElement;
      html.classList.add("is-".concat(this.browser), "is-".concat(this.platform));

      if (this.touch === true) {
        html.classList.add('has-touch-support');
      }
    }
  }, {
    key: "detectTrueViewHeight",
    value: function detectTrueViewHeight() {
      var vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('resize', lodash_throttle__WEBPACK_IMPORTED_MODULE_1___default()(function () {
        vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
      }, 1000));
    }
  }]);

  return FireDetect;
}();

/***/ }),

/***/ "./theme/assets/scripts/components/index.js":
/*!**************************************************!*\
  !*** ./theme/assets/scripts/components/index.js ***!
  \**************************************************/
/*! exports provided: FireAnalytics, FireComponent, FireComponentRecord, ConvertToInlineSvg, FireDetect, FireLazyLoader, SocialShare, FireStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _analytics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./analytics */ "./theme/assets/scripts/components/analytics.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FireAnalytics", function() { return _analytics__WEBPACK_IMPORTED_MODULE_0__["FireAnalytics"]; });

/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ "./theme/assets/scripts/components/component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FireComponent", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["FireComponent"]; });

/* harmony import */ var _component_record__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component-record */ "./theme/assets/scripts/components/component-record.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FireComponentRecord", function() { return _component_record__WEBPACK_IMPORTED_MODULE_2__["FireComponentRecord"]; });

/* harmony import */ var _convert_to_inline_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./convert-to-inline-svg */ "./theme/assets/scripts/components/convert-to-inline-svg.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConvertToInlineSvg", function() { return _convert_to_inline_svg__WEBPACK_IMPORTED_MODULE_3__["ConvertToInlineSvg"]; });

/* harmony import */ var _detect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./detect */ "./theme/assets/scripts/components/detect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FireDetect", function() { return _detect__WEBPACK_IMPORTED_MODULE_4__["FireDetect"]; });

/* harmony import */ var _lazy_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lazy-loader */ "./theme/assets/scripts/components/lazy-loader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FireLazyLoader", function() { return _lazy_loader__WEBPACK_IMPORTED_MODULE_5__["FireLazyLoader"]; });

/* harmony import */ var _social_share__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./social-share */ "./theme/assets/scripts/components/social-share.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SocialShare", function() { return _social_share__WEBPACK_IMPORTED_MODULE_6__["SocialShare"]; });

/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./storage */ "./theme/assets/scripts/components/storage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FireStorage", function() { return _storage__WEBPACK_IMPORTED_MODULE_7__["FireStorage"]; });










/***/ }),

/***/ "./theme/assets/scripts/components/lazy-loader.js":
/*!********************************************************!*\
  !*** ./theme/assets/scripts/components/lazy-loader.js ***!
  \********************************************************/
/*! exports provided: FireLazyLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FireLazyLoader", function() { return FireLazyLoader; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lozad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lozad */ "./node_modules/lozad/dist/lozad.min.js");
/* harmony import */ var lozad__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lozad__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var defaultConfig = {
  rootMargin: '0% 0% 150%',
  loaded: function loaded(element) {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).attr('data-background-image')) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('<img/>').attr('src', jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).attr('data-background-image')).on('load', function () {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).remove();
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).addClass('lozad--loaded');
      });
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).on('load', function () {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).addClass('lozad--loaded');
      });
    }
  }
};
var FireLazyLoader = /*#__PURE__*/function () {
  function FireLazyLoader(config) {
    _classCallCheck(this, FireLazyLoader);

    this.observer = null;
    this.config = config ? config : defaultConfig;
  }

  _createClass(FireLazyLoader, [{
    key: "init",
    value: function init() {
      this.observer = lozad__WEBPACK_IMPORTED_MODULE_1___default()('.lozad', this.config);
    }
  }]);

  return FireLazyLoader;
}();

/***/ }),

/***/ "./theme/assets/scripts/components/polyfills.js":
/*!******************************************************!*\
  !*** ./theme/assets/scripts/components/polyfills.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ "./node_modules/@babel/polyfill/lib/index.js");
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var intersection_observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! intersection-observer */ "./node_modules/intersection-observer/intersection-observer.js");
/* harmony import */ var intersection_observer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(intersection_observer__WEBPACK_IMPORTED_MODULE_1__);
// https://github.com/zloirock/core-js
// import 'core-js/fn/array/from';
// import 'core-js/fn/string/includes';



/***/ }),

/***/ "./theme/assets/scripts/components/social-share.js":
/*!*********************************************************!*\
  !*** ./theme/assets/scripts/components/social-share.js ***!
  \*********************************************************/
/*! exports provided: SocialShare */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialShare", function() { return SocialShare; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @component */ "./theme/assets/scripts/components/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var SocialShare = /*#__PURE__*/function (_FireComponent) {
  _inherits(SocialShare, _FireComponent);

  var _super = _createSuper(SocialShare);

  function SocialShare(id) {
    _classCallCheck(this, SocialShare);

    return _super.call(this, id);
  }

  _createClass(SocialShare, [{
    key: "_initEventListeners",
    value: function _initEventListeners() {
      this.elements.$facebook.on('click', function () {
        document.open("https://www.facebook.com/sharer/sharer.php?u=".concat(encodeURIComponent(location.href)), '', 'width=626,height=436');
        _component__WEBPACK_IMPORTED_MODULE_1__["FireAnalytics"].sendEvent(_component__WEBPACK_IMPORTED_MODULE_1__["FireAnalytics"].category.BUTTONS, _component__WEBPACK_IMPORTED_MODULE_1__["FireAnalytics"].action.CLICK, 'social-share: Facebook');
      });
      this.elements.$twitter.on('click', function () {
        document.open("http://twitter.com/share?url=".concat(encodeURIComponent(location.href)), '', 'width=626,height=300');
        _component__WEBPACK_IMPORTED_MODULE_1__["FireAnalytics"].sendEvent(_component__WEBPACK_IMPORTED_MODULE_1__["FireAnalytics"].category.BUTTONS, _component__WEBPACK_IMPORTED_MODULE_1__["FireAnalytics"].action.CLICK, 'social-share: Twitter');
      });
    }
  }, {
    key: "init",
    value: function init() {
      if (!this.componentExists) return;

      this._initEventListeners();
    }
  }, {
    key: "elements",
    get: function get() {
      return {
        $facebook: jquery__WEBPACK_IMPORTED_MODULE_0___default()("".concat(this.componentSelector, "[data-share=\"facebook\"]")),
        $twitter: jquery__WEBPACK_IMPORTED_MODULE_0___default()("".concat(this.componentSelector, "[data-share=\"twitter\"]"))
      };
    }
  }]);

  return SocialShare;
}(_component__WEBPACK_IMPORTED_MODULE_1__["FireComponent"]);

/***/ }),

/***/ "./theme/assets/scripts/components/storage.js":
/*!****************************************************!*\
  !*** ./theme/assets/scripts/components/storage.js ***!
  \****************************************************/
/*! exports provided: FireStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FireStorage", function() { return FireStorage; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var inMemoryStorage = {};
var storage = localStorage;
var FireStorage = /*#__PURE__*/function () {
  function FireStorage() {
    _classCallCheck(this, FireStorage);
  }

  _createClass(FireStorage, [{
    key: "isSupported",
    get: function get() {
      try {
        var key = 'is_session_storage_supported';
        storage.setItem(key, key);
        storage.removeItem(key);
        return true;
      } catch (error) {
        return false;
      }
    }
  }], [{
    key: "getItem",
    value: function getItem(key) {
      if (this.isSupported()) {
        return storage.getItem(key);
      }

      return inMemoryStorage[key] || null;
    }
  }, {
    key: "setItem",
    value: function setItem(key, value) {
      if (this.isSupported()) {
        storage.setItem(key, value);
      } else {
        inMemoryStorage[key] = value;
      }
    }
  }, {
    key: "removeItem",
    value: function removeItem(key) {
      if (this.isSupported()) {
        storage.removeItem(key);
      } else {
        delete inMemoryStorage[key];
      }
    }
  }, {
    key: "clear",
    value: function clear(key) {
      if (this.isSupported()) {
        storage.clear();
      } else {
        inMemoryStorage = {};
      }
    }
  }, {
    key: "key",
    value: function key(n) {
      if (this.isSupported()) {
        return storage.key(n);
      } else {
        return Object.keys(inMemoryStorage)[n] || null;
      }
    }
  }]);

  return FireStorage;
}();

/***/ }),

/***/ "./theme/assets/scripts/utilities/add-script.js":
/*!******************************************************!*\
  !*** ./theme/assets/scripts/utilities/add-script.js ***!
  \******************************************************/
/*! exports provided: addScript */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addScript", function() { return addScript; });
/**
 * @type public
 * @name addScript
 * @description
 *
 * Dynamically adds script tag to page
 *
 * @param {Object} attribute
 * @param {String} text
 * @param {Function} callback
 * @return {Void}
 *
 **/
function addScript(attribute, text, callback) {
  var script = document.createElement('script');

  for (var attr in attribute) {
    script.setAttribute(attr, attribute[attr] ? attribute[attr] : null);
  }

  script.innerHTML = text;
  script.onload = callback;
  document.body.appendChild(script);
}

/***/ }),

/***/ "./theme/assets/scripts/utilities/capitalize-first-letter.js":
/*!*******************************************************************!*\
  !*** ./theme/assets/scripts/utilities/capitalize-first-letter.js ***!
  \*******************************************************************/
/*! exports provided: capitalizeFirstLetter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalizeFirstLetter", function() { return capitalizeFirstLetter; });
/**
 * @type public
 * @name capitalizeFirstLetter
 * @description
 *
 * Captilizes the first letter of a string
 *
 * @param {Boolean}
 * @return {Void}
 *
 **/
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/***/ }),

/***/ "./theme/assets/scripts/utilities/clear-fragment.js":
/*!**********************************************************!*\
  !*** ./theme/assets/scripts/utilities/clear-fragment.js ***!
  \**********************************************************/
/*! exports provided: clearFragment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearFragment", function() { return clearFragment; });
/**
 * @type public
 * @name clearFragment
 * @description
 *
 * Removes everything after and including # from URL
 *
 * @return {Void}
 *
 **/
function clearFragment() {
  history.pushState('', document.title, window.location.pathname + window.location.search);
}

/***/ }),

/***/ "./theme/assets/scripts/utilities/convert-source-to-inline-svg.js":
/*!************************************************************************!*\
  !*** ./theme/assets/scripts/utilities/convert-source-to-inline-svg.js ***!
  \************************************************************************/
/*! exports provided: convertSourceToSVG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertSourceToSVG", function() { return convertSourceToSVG; });
/**
 * @type public
 * @name convertSourceToSVG
 * @description
 *
 * Converts a source into an inline SVG
 *
 * @param {Object} target
 * @param {String} url
 * @param {String} color
 * @param {String} classes
 * @param {String} id
 * @return {Void}
 *
 **/
function convertSourceToSVG(target, url, color, classes) {
  var fileExtension = url.split('.').pop();
  if (fileExtension !== 'svg') return;
  $.get(url, function (data) {
    var $svg = $(data).find('svg'); // re-appends classes

    if (classes) {
      $svg.attr('class', classes);
    } // manually sets viewBox so SVG can be scaled


    if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
      $svg.attr('viewBox', "0 0 ".concat($svg.attr('height'), " ").concat($svg.attr('width')));
    }

    if (color) {
      var svgPathes = $svg.find('g, path');
      svgPathes.each(function (index, path) {
        var fill = $(path).attr('fill');
        var stroke = $(path).attr('stroke');

        if (fill !== undefined && fill.indexOf('#') > -1) {
          $(path).attr('fill', color);
        }

        if (stroke !== undefined && stroke.indexOf('#') > -1) {
          $(path).attr('stroke', color);
        }
      });
    }

    target.replaceWith($svg);
  });
}

/***/ }),

/***/ "./theme/assets/scripts/utilities/find-visible-section.js":
/*!****************************************************************!*\
  !*** ./theme/assets/scripts/utilities/find-visible-section.js ***!
  \****************************************************************/
/*! exports provided: findVisibleSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findVisibleSection", function() { return findVisibleSection; });
/**
 * @type public
 * @name findVisibleSection
 * @description
 *
 * @param {Element} element
 * @return {Element}
 *
 **/
function findVisibleSection(element) {
  return element.is(':hidden') || element.hasClass('gap') ? findVisibleSection(element.next()) : element;
}

/***/ }),

/***/ "./theme/assets/scripts/utilities/generate-unique-id.js":
/*!**************************************************************!*\
  !*** ./theme/assets/scripts/utilities/generate-unique-id.js ***!
  \**************************************************************/
/*! exports provided: generateUniqueId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateUniqueId", function() { return generateUniqueId; });
/* harmony import */ var _shuffle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shuffle */ "./theme/assets/scripts/utilities/shuffle.js");

/**
 * @type public
 * @name generateUniqueId
 * @description
 *
 * Generates a unique string
 *
 * @param {Array} array
 * @return {Array}
 *
 **/

function generateUniqueId() {
  return Object(_shuffle__WEBPACK_IMPORTED_MODULE_0__["shuffle"])(btoa(Math.random()).toLowerCase().replace(/=/, '').split('')).join('');
}

/***/ }),

/***/ "./theme/assets/scripts/utilities/get-page-type.js":
/*!*********************************************************!*\
  !*** ./theme/assets/scripts/utilities/get-page-type.js ***!
  \*********************************************************/
/*! exports provided: getPageType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPageType", function() { return getPageType; });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * @type public
 * @name getPageType
 * @description
 *
 * Checks body class for page type
 *
 * @return {String} page type
 *
 **/
function getPageType() {
  var prefix = 'fire-page-type--';
  var bodyClasses = Array.from(document.body.classList);

  var _bodyClasses$filter = bodyClasses.filter(function (item) {
    return item.includes(prefix);
  }),
      _bodyClasses$filter2 = _slicedToArray(_bodyClasses$filter, 1),
      type = _bodyClasses$filter2[0];

  var cleanType = type.replace(prefix, '');
  return cleanType;
}

/***/ }),

/***/ "./theme/assets/scripts/utilities/ignore-context.js":
/*!**********************************************************!*\
  !*** ./theme/assets/scripts/utilities/ignore-context.js ***!
  \**********************************************************/
/*! exports provided: ignoreContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ignoreContext", function() { return ignoreContext; });
/**
 * @type public
 * @name ignoreContext
 * @description
 *
 * Ignores context and stops Drupal behavior triggers
 *
 * @param {Element} context
 * @param {Array} elementsToIgnore
 * @return {Boolean}
 *
 **/
function ignoreContext(context, elementsToIgnore) {
  var ignore = false;
  elementsToIgnore.forEach(function (element) {
    if ($(context).is(element)) {
      ignore = true;
      return false;
    }
  });
  return ignore;
}

/***/ }),

/***/ "./theme/assets/scripts/utilities/index.js":
/*!*************************************************!*\
  !*** ./theme/assets/scripts/utilities/index.js ***!
  \*************************************************/
/*! exports provided: breakpoints, isDesktop, isTablet, isMobile, windowMatchesMaxWidthQuery, unsetTabIndex, setTabIndex, getPageType, lockBody, lockBodyToggle, capitalizeFirstLetter, clearFragment, shuffle, generateUniqueId, addScript, convertSourceToSVG, iOSFixDoubleTap, findVisibleSection, moveBootstrapModalsToBody, ignoreContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _screen_sizes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screen-sizes */ "./theme/assets/scripts/utilities/screen-sizes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "breakpoints", function() { return _screen_sizes__WEBPACK_IMPORTED_MODULE_0__["breakpoints"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDesktop", function() { return _screen_sizes__WEBPACK_IMPORTED_MODULE_0__["isDesktop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTablet", function() { return _screen_sizes__WEBPACK_IMPORTED_MODULE_0__["isTablet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return _screen_sizes__WEBPACK_IMPORTED_MODULE_0__["isMobile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "windowMatchesMaxWidthQuery", function() { return _screen_sizes__WEBPACK_IMPORTED_MODULE_0__["windowMatchesMaxWidthQuery"]; });

/* harmony import */ var _tab_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab-index */ "./theme/assets/scripts/utilities/tab-index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unsetTabIndex", function() { return _tab_index__WEBPACK_IMPORTED_MODULE_1__["unsetTabIndex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTabIndex", function() { return _tab_index__WEBPACK_IMPORTED_MODULE_1__["setTabIndex"]; });

/* harmony import */ var _get_page_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-page-type */ "./theme/assets/scripts/utilities/get-page-type.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPageType", function() { return _get_page_type__WEBPACK_IMPORTED_MODULE_2__["getPageType"]; });

/* harmony import */ var _lock_body__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lock-body */ "./theme/assets/scripts/utilities/lock-body.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lockBody", function() { return _lock_body__WEBPACK_IMPORTED_MODULE_3__["lockBody"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lockBodyToggle", function() { return _lock_body__WEBPACK_IMPORTED_MODULE_3__["lockBodyToggle"]; });

/* harmony import */ var _capitalize_first_letter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./capitalize-first-letter */ "./theme/assets/scripts/utilities/capitalize-first-letter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "capitalizeFirstLetter", function() { return _capitalize_first_letter__WEBPACK_IMPORTED_MODULE_4__["capitalizeFirstLetter"]; });

/* harmony import */ var _clear_fragment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clear-fragment */ "./theme/assets/scripts/utilities/clear-fragment.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearFragment", function() { return _clear_fragment__WEBPACK_IMPORTED_MODULE_5__["clearFragment"]; });

/* harmony import */ var _shuffle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shuffle */ "./theme/assets/scripts/utilities/shuffle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shuffle", function() { return _shuffle__WEBPACK_IMPORTED_MODULE_6__["shuffle"]; });

/* harmony import */ var _generate_unique_id__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./generate-unique-id */ "./theme/assets/scripts/utilities/generate-unique-id.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateUniqueId", function() { return _generate_unique_id__WEBPACK_IMPORTED_MODULE_7__["generateUniqueId"]; });

/* harmony import */ var _add_script__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-script */ "./theme/assets/scripts/utilities/add-script.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addScript", function() { return _add_script__WEBPACK_IMPORTED_MODULE_8__["addScript"]; });

/* harmony import */ var _convert_source_to_inline_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./convert-source-to-inline-svg */ "./theme/assets/scripts/utilities/convert-source-to-inline-svg.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "convertSourceToSVG", function() { return _convert_source_to_inline_svg__WEBPACK_IMPORTED_MODULE_9__["convertSourceToSVG"]; });

/* harmony import */ var _ios_fix_double_tap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ios-fix-double-tap */ "./theme/assets/scripts/utilities/ios-fix-double-tap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "iOSFixDoubleTap", function() { return _ios_fix_double_tap__WEBPACK_IMPORTED_MODULE_10__["iOSFixDoubleTap"]; });

/* harmony import */ var _find_visible_section__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./find-visible-section */ "./theme/assets/scripts/utilities/find-visible-section.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findVisibleSection", function() { return _find_visible_section__WEBPACK_IMPORTED_MODULE_11__["findVisibleSection"]; });

/* harmony import */ var _move_bootstrap_modals_to_body__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./move-bootstrap-modals-to-body */ "./theme/assets/scripts/utilities/move-bootstrap-modals-to-body.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "moveBootstrapModalsToBody", function() { return _move_bootstrap_modals_to_body__WEBPACK_IMPORTED_MODULE_12__["moveBootstrapModalsToBody"]; });

/* harmony import */ var _ignore_context__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ignore-context */ "./theme/assets/scripts/utilities/ignore-context.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ignoreContext", function() { return _ignore_context__WEBPACK_IMPORTED_MODULE_13__["ignoreContext"]; });
















/***/ }),

/***/ "./theme/assets/scripts/utilities/ios-fix-double-tap.js":
/*!**************************************************************!*\
  !*** ./theme/assets/scripts/utilities/ios-fix-double-tap.js ***!
  \**************************************************************/
/*! exports provided: iOSFixDoubleTap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iOSFixDoubleTap", function() { return iOSFixDoubleTap; });
/**
 * @type public
 * @name iOSFixDoubleTap
 * @description
 *
 * Fixes double tap issue on iOS devices
 *
 * @param {Array} array
 * @return {Array}
 *
 **/
function iOSFixDoubleTap() {
  $('button, a').on('touchstart', function (event) {
    var $target = $(event.currentTarget);
    $target.is(':focus') ? $target.blur() : $target.focus();
  });
}

/***/ }),

/***/ "./theme/assets/scripts/utilities/lock-body.js":
/*!*****************************************************!*\
  !*** ./theme/assets/scripts/utilities/lock-body.js ***!
  \*****************************************************/
/*! exports provided: lockBody, lockBodyToggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lockBody", function() { return lockBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lockBodyToggle", function() { return lockBodyToggle; });
/**
 * @type public
 * @name lockBody
 * @requires jQuery
 * @description
 *
 * Locks/unlocks body element where it currently is
 * Allows you to manually pass value or uses scrollTop.
 * Uses animate with step function to handle refresh issues.
 *
 * @param {Boolean} lock
 * @return {Void}
 *
 **/
function lockBody(lock) {
  var $body = $('body');

  if (lock === true) {
    $body.css({
      overflow: 'hidden'
    });
  } else if (lock === false) {
    $body.removeAttr('style');
  }

  $body.attr('data-fire-lock-body', lock);
}
/**
 * @type public
 * @name lockBodyToggle
 * @requires jQuery
 * @description
 *
 * Toggles the body lock
 *
 * @return {Void}
 *
 **/

function lockBodyToggle() {
  var status = $('body').attr('data-fire-lock-body');

  if (status === undefined || status === 'false') {
    lockBody(true);
  } else {
    lockBody(false);
  }
}

/***/ }),

/***/ "./theme/assets/scripts/utilities/move-bootstrap-modals-to-body.js":
/*!*************************************************************************!*\
  !*** ./theme/assets/scripts/utilities/move-bootstrap-modals-to-body.js ***!
  \*************************************************************************/
/*! exports provided: moveBootstrapModalsToBody */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveBootstrapModalsToBody", function() { return moveBootstrapModalsToBody; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

/**
 * @type public
 * @name moveBootstrapModalsToBody
 * @description
 *
 * Moves modal to body on open.
 *
 * @return {Void}
 *
 **/

function moveBootstrapModalsToBody() {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.modal-dialog').parent().on('show.bs.modal', function (e) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.relatedTarget.attributes['data-target'].value).appendTo('body');
  });
}

/***/ }),

/***/ "./theme/assets/scripts/utilities/screen-sizes.js":
/*!********************************************************!*\
  !*** ./theme/assets/scripts/utilities/screen-sizes.js ***!
  \********************************************************/
/*! exports provided: breakpoints, isDesktop, isTablet, isMobile, windowMatchesMaxWidthQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "breakpoints", function() { return breakpoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDesktop", function() { return isDesktop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTablet", function() { return isTablet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return isMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "windowMatchesMaxWidthQuery", function() { return windowMatchesMaxWidthQuery; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

/**
 * @type public
 * @name screenSizes
 * @description
 *
 * Defines screen sizes
 *
 **/

var breakpoints = {
  xs: 576,
  sm: 768,
  md: 992,
  lg: 1200
};
/**
 * @type public
 * @name isDesktop
 * @description
 *
 * Check for desktop breakpoint
 *
 * @return {Boolean}
 *
 **/

function isDesktop() {
  return window.matchMedia("(min-width: ".concat(breakpoints.md + 1, "px)")).matches;
}
/**
 * @type public
 * @name isTablet
 * @description
 *
 * Check for tablet breakpoint
 *
 * @return {Boolean}
 *
 **/

function isTablet() {
  return window.matchMedia("(min-width: ".concat(breakpoints.sm + 1, "px)")).matches && window.matchMedia("(max-width: ".concat(breakpoints.md, "px)")).matches;
}
/**
 * @type public
 * @name isMobile
 * @description
 *
 * Check for mobile breakpoint
 *
 * @return {Boolean}
 *
 **/

function isMobile() {
  return window.matchMedia("(max-width: ".concat(breakpoints.sm - 1, "px)")).matches;
}
/**
 * @type public
 * @name windowMatchesMaxWidthQuery
 * @description
 *
 * Check for specific media query
 *
 * @param {String}
 * @return {Boolean}
 *
 **/

function windowMatchesMaxWidthQuery(mediaQuery) {
  return window.matchMedia(mediaQuery).matches;
}

/***/ }),

/***/ "./theme/assets/scripts/utilities/shuffle.js":
/*!***************************************************!*\
  !*** ./theme/assets/scripts/utilities/shuffle.js ***!
  \***************************************************/
/*! exports provided: shuffle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shuffle", function() { return shuffle; });
/**
 * @type public
 * @name shuffle
 * @description
 *
 * Fisher-Yates (aka Knuth) Shuffle.
 *
 * @param {Array} array
 * @return {Array}
 *
 **/
function shuffle(array) {
  var currentIndex = array.length;
  var temporaryValue;
  var randomIndex; // While there remain elements to shuffle...

  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1; // And swap it with the current element.

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

/***/ }),

/***/ "./theme/assets/scripts/utilities/tab-index.js":
/*!*****************************************************!*\
  !*** ./theme/assets/scripts/utilities/tab-index.js ***!
  \*****************************************************/
/*! exports provided: unsetTabIndex, setTabIndex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unsetTabIndex", function() { return unsetTabIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTabIndex", function() { return setTabIndex; });
/**
 * @type public
 * @name unsetTabIndex
 * @requires jQuery
 * @description
 *
 * Remove tabindex from element
 *
 * @param {Element}
 * @return {Void}
 *
 **/
function unsetTabIndex(element) {
  $(element).attr('tabindex', '');
}
/**
 * @type public
 * @name setTabIndex
 * @requires jQuery
 * @description
 *
 * Set tabindex on element
 *
 * @param {Element}
 * @param {Number}
 * @return {Void}
 *
 **/

function setTabIndex(element, index) {
  $(element).attr('tabindex', index);
}

/***/ }),

/***/ "./theme/main.js":
/*!***********************!*\
  !*** ./theme/main.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_polyfills__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @component/polyfills */ "./theme/assets/scripts/components/polyfills.js");
/* harmony import */ var alpinejs_dist_alpine_ie11__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! alpinejs/dist/alpine-ie11 */ "./node_modules/alpinejs/dist/alpine-ie11.js");
/* harmony import */ var alpinejs_dist_alpine_ie11__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(alpinejs_dist_alpine_ie11__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var balance_text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! balance-text */ "./node_modules/balance-text/balancetext.js");
/* harmony import */ var balance_text__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(balance_text__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @component */ "./theme/assets/scripts/components/index.js");
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @utility */ "./theme/assets/scripts/utilities/index.js");






var detect = new _component__WEBPACK_IMPORTED_MODULE_4__["FireDetect"]();
var componentRecord = new _component__WEBPACK_IMPORTED_MODULE_4__["FireComponentRecord"]();
var lazyLoader = new _component__WEBPACK_IMPORTED_MODULE_4__["FireLazyLoader"]();
/**
 * @type function
 * @name onPageReady
 * @description
 *
 * Initialize scripts when page is ready
 *
 **/

var onPageReady = function onPageReady() {
  detect.setHtmlClasses();
  detect.detectTrueViewHeight();
  lazyLoader.init();
  lazyLoader.observer.observe();
  componentRecord.registerAllComponents();
  Object(_utility__WEBPACK_IMPORTED_MODULE_5__["moveBootstrapModalsToBody"])();

  if (detect.touch && (detect.platform === 'iPhone' || detect.platform === 'iPad')) {
    Object(_utility__WEBPACK_IMPORTED_MODULE_5__["iOSFixDoubleTap"])();
  }

  balance_text__WEBPACK_IMPORTED_MODULE_3___default()(); // display page

  jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').removeClass('opacity-0'); // global Drupal behaviors

  Drupal.behaviors.fireGlobal = {
    attach: function attach(context, settings) {
      if (Object(_utility__WEBPACK_IMPORTED_MODULE_5__["ignoreContext"])(context, ['.toolbar-menu', '.status-messages'])) return;
      componentRecord.registerAllComponents(true);
      lazyLoader.observer.observe();
    }
  };
}; // fire all scripts


jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(onPageReady);

/***/ }),

/***/ "./theme/templates/components/site-header/site-header.js":
/*!***************************************************************!*\
  !*** ./theme/templates/components/site-header/site-header.js ***!
  \***************************************************************/
/*! exports provided: SiteHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteHeader", function() { return SiteHeader; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @component */ "./theme/assets/scripts/components/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var SiteHeader = /*#__PURE__*/function (_FireComponent) {
  _inherits(SiteHeader, _FireComponent);

  var _super = _createSuper(SiteHeader);

  function SiteHeader(id) {
    _classCallCheck(this, SiteHeader);

    // register the component by calling `super()` and passing in the component id
    // this creates an instance of the `FireComponent` Class that we extended above
    // giving us access to the `this.$component` variable which contains a reference to the registered HTML element
    // as well as `this.$componentExists` to check if the component exists on the page yet
    return _super.call(this, id);
  }

  _createClass(SiteHeader, [{
    key: "init",
    value: function init() {
      // don't run anymore scripts if component doesn't exist on the page
      if (!this.componentExists) return; // run scripts here
    }
  }]);

  return SiteHeader;
}(_component__WEBPACK_IMPORTED_MODULE_1__["FireComponent"]);

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });
//# sourceMappingURL=scripts.js.map