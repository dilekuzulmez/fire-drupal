/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/scripts/common/analytics.js":
/*!********************************************!*\
  !*** ./assets/scripts/common/analytics.js ***!
  \********************************************/
/*! exports provided: trigger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trigger", function() { return trigger; });
// Note: Google Analytics should be initiated using a Drupal module

/**
 * @type function
 * @name trigger
 * @description
 *
 * Trigger a GA event
 *
 **/
var trigger = function trigger(event) {
  if (typeof window.dataLayer === 'undefined') return;
  dataLayer.push(event);
};

/***/ }),

/***/ "./assets/scripts/common/component-record.js":
/*!***************************************************!*\
  !*** ./assets/scripts/common/component-record.js ***!
  \***************************************************/
/*! exports provided: FireComponentRecord */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FireComponentRecord", function() { return FireComponentRecord; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @common */ "./assets/scripts/common/index.js");
/* harmony import */ var _include_site_header_site_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @include/site-header/site-header */ "./templates/include/site-header/site-header.js");
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

var FireComponentRecord =
/*#__PURE__*/
function () {
  function FireComponentRecord() {
    _classCallCheck(this, FireComponentRecord);
  }

  _createClass(FireComponentRecord, [{
    key: "_registerComponent",
    // register correct component
    value: function _registerComponent(component, name, id) {
      // mark as registered
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(component).attr('data-registered', id); // init correct component class

      switch (name) {
        case 'site-header':
          new _include_site_header_site_header__WEBPACK_IMPORTED_MODULE_2__["SiteHeader"](id).init();
          break;

        default:
          break;
      }
    }
  }, {
    key: "registerAllComponents",
    value: function registerAllComponents() {
      var _this = this;

      // loop through all components on the page
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-fire-component]').each(function (index, component) {
        // get name of component
        var names = jquery__WEBPACK_IMPORTED_MODULE_0___default()(component).data('fire-component');
        names = names.split(', '); // generate a unique ID

        var id = _common__WEBPACK_IMPORTED_MODULE_1__["FireHelpers"].generateUniqueId();
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = names[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var name = _step.value;

            _this._registerComponent(component, name, id);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      });
    }
  }]);

  return FireComponentRecord;
}();

/***/ }),

/***/ "./assets/scripts/common/component.js":
/*!********************************************!*\
  !*** ./assets/scripts/common/component.js ***!
  \********************************************/
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

// dependencies

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

var FireComponent =
/*#__PURE__*/
function () {
  function FireComponent(id) {
    _classCallCheck(this, FireComponent);

    // id is generated by FireComponentRecord
    this.id = id;
  } // grab component HTML element and assign to a variable,
  // this is now usable anywhere this Class is extended


  _createClass(FireComponent, [{
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

/***/ "./assets/scripts/common/detect.js":
/*!*****************************************!*\
  !*** ./assets/scripts/common/detect.js ***!
  \*****************************************/
/*! exports provided: FireDetect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FireDetect", function() { return FireDetect; });
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
var FireDetect =
/*#__PURE__*/
function () {
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
  }]);

  return FireDetect;
}();

/***/ }),

/***/ "./assets/scripts/common/helpers.js":
/*!******************************************!*\
  !*** ./assets/scripts/common/helpers.js ***!
  \******************************************/
/*! exports provided: breakpoints, isDesktop, isTablet, isMobile, windowMatchesMaxWidthQuery, unsetTabIndex, setTabIndex, getPageType, lockBody, lockBodyToggle, capitalizeFirstLetter, clearFragment, shuffle, generateUniqueId, addScript, convertSourceToSVG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "breakpoints", function() { return breakpoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDesktop", function() { return isDesktop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTablet", function() { return isTablet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return isMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "windowMatchesMaxWidthQuery", function() { return windowMatchesMaxWidthQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unsetTabIndex", function() { return unsetTabIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTabIndex", function() { return setTabIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPageType", function() { return getPageType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lockBody", function() { return lockBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lockBodyToggle", function() { return lockBodyToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalizeFirstLetter", function() { return capitalizeFirstLetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearFragment", function() { return clearFragment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shuffle", function() { return shuffle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateUniqueId", function() { return generateUniqueId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addScript", function() { return addScript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertSourceToSVG", function() { return convertSourceToSVG; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


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
var isDesktop = window.matchMedia("(min-width: ".concat(breakpoints.md + 1, "px)")).matches;
var isTablet = window.matchMedia("(max-width: ".concat(breakpoints.md, "px)")).matches;
var isMobile = window.matchMedia("(max-width: ".concat(breakpoints.sm, "px)")).matches;
function windowMatchesMaxWidthQuery(width) {
  return window.matchMedia("(max-width: ".concat(width, "px)")).matches;
}
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
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).attr('tabindex', '');
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
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).attr('tabindex', index);
}
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
 * @param {Boolean}
 * @param {Any}
 * @return {Void}
 *
 **/

function lockBody(lock, position) {
  var $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body');
  var $document = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document);
  var pageOffset = position ? position : $document.scrollTop();

  if (lock === true) {
    $body.css({
      overflow: 'hidden',
      top: '-' + pageOffset + 'px',
      position: 'fixed',
      width: '100%'
    });
  } else if (lock === false) {
    $body.removeAttr('style');
  }

  $body.attr('data-fire-lock-body', lock); // goes to a set position

  if (position) {
    $body.animate({
      scrollTop: position
    }, {
      duration: 0,
      step: function step(val) {
        return window.scrollTo(0, val);
      }
    });
  }
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
  var status = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').attr('data-fire-lock-body');

  if (status === undefined || status === 'false') {
    lockBody(true);
  } else {
    lockBody(false);
  }
}
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
  return shuffle(btoa(Math.random()).toLowerCase().replace(/=/, '').split('')).join('');
}
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
/**
 * @type public
 * @name convertSourceToSVG
 * @description
 *
 * Converts a source into an inline SVG
 * More information: https://github.com/skycatchfire/fire/issues/68
 *
 * @param {Object} target
 * @param {String} url
 * @param {String} color
 * @param {String} classes
 * @param {String} id
 * @return {Void}
 *
 **/

function convertSourceToSVG(target, url, color, classes, id) {
  var fileExtension = url.split('.').pop();
  if (fileExtension !== 'svg') return;
  jquery__WEBPACK_IMPORTED_MODULE_0___default.a.get(url, function (data) {
    var $svg = jquery__WEBPACK_IMPORTED_MODULE_0___default()(data).find('svg'); // re-appends id

    if (id) {
      $svg.attr('id', id);
    } // re-appends classes


    if (classes) {
      $svg.attr('class', classes);
    } // manually sets viewBox so SVG can be scaled


    if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
      $svg.attr('viewBox', "0 0 ".concat($svg.attr('height'), " ").concat($svg.attr('width')));
    }

    if (color) {
      var svgPathes = $svg.find('g, path');
      svgPathes.each(function (index, path) {
        var fill = jquery__WEBPACK_IMPORTED_MODULE_0___default()(path).attr('fill');
        var stroke = jquery__WEBPACK_IMPORTED_MODULE_0___default()(path).attr('stroke');

        if (fill !== undefined && fill.indexOf('#') > -1) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(path).attr('fill', color);
        }

        if (stroke !== undefined && stroke.indexOf('#') > -1) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(path).attr('stroke', color);
        }
      });
    }

    target.replaceWith($svg);
  });
}

/***/ }),

/***/ "./assets/scripts/common/index.js":
/*!****************************************!*\
  !*** ./assets/scripts/common/index.js ***!
  \****************************************/
/*! exports provided: FireHelpers, FireStorage, trigger, FireDetect, FireComponent, FireComponentRecord, FireLazyLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FireHelpers", function() { return FireHelpers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FireStorage", function() { return FireStorage; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./assets/scripts/common/helpers.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./assets/scripts/common/storage.js");
/* harmony import */ var _analytics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./analytics */ "./assets/scripts/common/analytics.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "trigger", function() { return _analytics__WEBPACK_IMPORTED_MODULE_2__["trigger"]; });

/* harmony import */ var _detect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detect */ "./assets/scripts/common/detect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FireDetect", function() { return _detect__WEBPACK_IMPORTED_MODULE_3__["FireDetect"]; });

/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component */ "./assets/scripts/common/component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FireComponent", function() { return _component__WEBPACK_IMPORTED_MODULE_4__["FireComponent"]; });

/* harmony import */ var _component_record__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component-record */ "./assets/scripts/common/component-record.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FireComponentRecord", function() { return _component_record__WEBPACK_IMPORTED_MODULE_5__["FireComponentRecord"]; });

/* harmony import */ var _lazy_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lazy-loader */ "./assets/scripts/common/lazy-loader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FireLazyLoader", function() { return _lazy_loader__WEBPACK_IMPORTED_MODULE_6__["FireLazyLoader"]; });



var FireHelpers = _helpers__WEBPACK_IMPORTED_MODULE_0__;
var FireStorage = _storage__WEBPACK_IMPORTED_MODULE_1__;






/***/ }),

/***/ "./assets/scripts/common/lazy-loader.js":
/*!**********************************************!*\
  !*** ./assets/scripts/common/lazy-loader.js ***!
  \**********************************************/
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
var FireLazyLoader =
/*#__PURE__*/
function () {
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

/***/ "./assets/scripts/common/polyfills.js":
/*!********************************************!*\
  !*** ./assets/scripts/common/polyfills.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var intersection_observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! intersection-observer */ "./node_modules/intersection-observer/intersection-observer.js");
/* harmony import */ var intersection_observer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(intersection_observer__WEBPACK_IMPORTED_MODULE_0__);
// https://github.com/zloirock/core-js
// import 'core-js/fn/array/from';
// import 'core-js/fn/string/includes';
// import '@babel/polyfill';


/***/ }),

/***/ "./assets/scripts/common/storage.js":
/*!******************************************!*\
  !*** ./assets/scripts/common/storage.js ***!
  \******************************************/
/*! exports provided: getItem, setItem, removeItem, clear, key */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItem", function() { return getItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setItem", function() { return setItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeItem", function() { return removeItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clear", function() { return clear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "key", function() { return key; });
var inMemoryStorage = {};
var storage = sessionStorage;

function isSupported() {
  try {
    var _key = 'is_session_storage_supported';
    storage.setItem(_key, _key);
    storage.removeItem(_key);
    return true;
  } catch (error) {
    return false;
  }
}

function getItem(key) {
  if (isSupported()) {
    return storage.getItem(key);
  }

  return inMemoryStorage[key] || null;
}
function setItem(key, value) {
  if (isSupported()) {
    storage.setItem(key, value);
  } else {
    inMemoryStorage[key] = value;
  }
}
function removeItem(key) {
  if (isSupported()) {
    storage.removeItem(key);
  } else {
    delete inMemoryStorage[key];
  }
}
function clear(key) {
  if (isSupported()) {
    storage.clear();
  } else {
    inMemoryStorage = {};
  }
}
function key(n) {
  if (isSupported()) {
    return storage.key(n);
  } else {
    return Object.keys(inMemoryStorage)[n] || null;
  }
}

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_polyfills__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @common/polyfills */ "./assets/scripts/common/polyfills.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @common */ "./assets/scripts/common/index.js");
// dependencies
 // polyfills

 // common


var detect = new _common__WEBPACK_IMPORTED_MODULE_2__["FireDetect"]();
var componentRecord = new _common__WEBPACK_IMPORTED_MODULE_2__["FireComponentRecord"]();
var lazyLoader = new _common__WEBPACK_IMPORTED_MODULE_2__["FireLazyLoader"]();
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
  lazyLoader.init();
  lazyLoader.observer.observe();
  componentRecord.registerAllComponents(); // display page

  jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').addClass('has-loaded');
}; // fire all scripts


jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(onPageReady);

/***/ }),

/***/ "./node_modules/intersection-observer/intersection-observer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/intersection-observer/intersection-observer.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the W3C SOFTWARE AND DOCUMENT NOTICE AND LICENSE.
 *
 *  https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 */
(function (window, document) {
  'use strict'; // Exits early if all IntersectionObserver and IntersectionObserverEntry
  // features are natively supported.

  if ('IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype) {
    // Minimal polyfill for Edge 15's lack of `isIntersecting`
    // See: https://github.com/w3c/IntersectionObserver/issues/211
    if (!('isIntersecting' in window.IntersectionObserverEntry.prototype)) {
      Object.defineProperty(window.IntersectionObserverEntry.prototype, 'isIntersecting', {
        get: function get() {
          return this.intersectionRatio > 0;
        }
      });
    }

    return;
  }
  /**
   * An IntersectionObserver registry. This registry exists to hold a strong
   * reference to IntersectionObserver instances currently observing a target
   * element. Without this registry, instances without another reference may be
   * garbage collected.
   */


  var registry = [];
  /**
   * Creates the global IntersectionObserverEntry constructor.
   * https://w3c.github.io/IntersectionObserver/#intersection-observer-entry
   * @param {Object} entry A dictionary of instance properties.
   * @constructor
   */

  function IntersectionObserverEntry(entry) {
    this.time = entry.time;
    this.target = entry.target;
    this.rootBounds = entry.rootBounds;
    this.boundingClientRect = entry.boundingClientRect;
    this.intersectionRect = entry.intersectionRect || getEmptyRect();
    this.isIntersecting = !!entry.intersectionRect; // Calculates the intersection ratio.

    var targetRect = this.boundingClientRect;
    var targetArea = targetRect.width * targetRect.height;
    var intersectionRect = this.intersectionRect;
    var intersectionArea = intersectionRect.width * intersectionRect.height; // Sets intersection ratio.

    if (targetArea) {
      // Round the intersection ratio to avoid floating point math issues:
      // https://github.com/w3c/IntersectionObserver/issues/324
      this.intersectionRatio = Number((intersectionArea / targetArea).toFixed(4));
    } else {
      // If area is zero and is intersecting, sets to 1, otherwise to 0
      this.intersectionRatio = this.isIntersecting ? 1 : 0;
    }
  }
  /**
   * Creates the global IntersectionObserver constructor.
   * https://w3c.github.io/IntersectionObserver/#intersection-observer-interface
   * @param {Function} callback The function to be invoked after intersection
   *     changes have queued. The function is not invoked if the queue has
   *     been emptied by calling the `takeRecords` method.
   * @param {Object=} opt_options Optional configuration options.
   * @constructor
   */


  function IntersectionObserver(callback, opt_options) {
    var options = opt_options || {};

    if (typeof callback != 'function') {
      throw new Error('callback must be a function');
    }

    if (options.root && options.root.nodeType != 1) {
      throw new Error('root must be an Element');
    } // Binds and throttles `this._checkForIntersections`.


    this._checkForIntersections = throttle(this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT); // Private properties.

    this._callback = callback;
    this._observationTargets = [];
    this._queuedEntries = [];
    this._rootMarginValues = this._parseRootMargin(options.rootMargin); // Public properties.

    this.thresholds = this._initThresholds(options.threshold);
    this.root = options.root || null;
    this.rootMargin = this._rootMarginValues.map(function (margin) {
      return margin.value + margin.unit;
    }).join(' ');
  }
  /**
   * The minimum interval within which the document will be checked for
   * intersection changes.
   */


  IntersectionObserver.prototype.THROTTLE_TIMEOUT = 100;
  /**
   * The frequency in which the polyfill polls for intersection changes.
   * this can be updated on a per instance basis and must be set prior to
   * calling `observe` on the first target.
   */

  IntersectionObserver.prototype.POLL_INTERVAL = null;
  /**
   * Use a mutation observer on the root element
   * to detect intersection changes.
   */

  IntersectionObserver.prototype.USE_MUTATION_OBSERVER = true;
  /**
   * Starts observing a target element for intersection changes based on
   * the thresholds values.
   * @param {Element} target The DOM element to observe.
   */

  IntersectionObserver.prototype.observe = function (target) {
    var isTargetAlreadyObserved = this._observationTargets.some(function (item) {
      return item.element == target;
    });

    if (isTargetAlreadyObserved) {
      return;
    }

    if (!(target && target.nodeType == 1)) {
      throw new Error('target must be an Element');
    }

    this._registerInstance();

    this._observationTargets.push({
      element: target,
      entry: null
    });

    this._monitorIntersections();

    this._checkForIntersections();
  };
  /**
   * Stops observing a target element for intersection changes.
   * @param {Element} target The DOM element to observe.
   */


  IntersectionObserver.prototype.unobserve = function (target) {
    this._observationTargets = this._observationTargets.filter(function (item) {
      return item.element != target;
    });

    if (!this._observationTargets.length) {
      this._unmonitorIntersections();

      this._unregisterInstance();
    }
  };
  /**
   * Stops observing all target elements for intersection changes.
   */


  IntersectionObserver.prototype.disconnect = function () {
    this._observationTargets = [];

    this._unmonitorIntersections();

    this._unregisterInstance();
  };
  /**
   * Returns any queue entries that have not yet been reported to the
   * callback and clears the queue. This can be used in conjunction with the
   * callback to obtain the absolute most up-to-date intersection information.
   * @return {Array} The currently queued entries.
   */


  IntersectionObserver.prototype.takeRecords = function () {
    var records = this._queuedEntries.slice();

    this._queuedEntries = [];
    return records;
  };
  /**
   * Accepts the threshold value from the user configuration object and
   * returns a sorted array of unique threshold values. If a value is not
   * between 0 and 1 and error is thrown.
   * @private
   * @param {Array|number=} opt_threshold An optional threshold value or
   *     a list of threshold values, defaulting to [0].
   * @return {Array} A sorted list of unique and valid threshold values.
   */


  IntersectionObserver.prototype._initThresholds = function (opt_threshold) {
    var threshold = opt_threshold || [0];
    if (!Array.isArray(threshold)) threshold = [threshold];
    return threshold.sort().filter(function (t, i, a) {
      if (typeof t != 'number' || isNaN(t) || t < 0 || t > 1) {
        throw new Error('threshold must be a number between 0 and 1 inclusively');
      }

      return t !== a[i - 1];
    });
  };
  /**
   * Accepts the rootMargin value from the user configuration object
   * and returns an array of the four margin values as an object containing
   * the value and unit properties. If any of the values are not properly
   * formatted or use a unit other than px or %, and error is thrown.
   * @private
   * @param {string=} opt_rootMargin An optional rootMargin value,
   *     defaulting to '0px'.
   * @return {Array<Object>} An array of margin objects with the keys
   *     value and unit.
   */


  IntersectionObserver.prototype._parseRootMargin = function (opt_rootMargin) {
    var marginString = opt_rootMargin || '0px';
    var margins = marginString.split(/\s+/).map(function (margin) {
      var parts = /^(-?\d*\.?\d+)(px|%)$/.exec(margin);

      if (!parts) {
        throw new Error('rootMargin must be specified in pixels or percent');
      }

      return {
        value: parseFloat(parts[1]),
        unit: parts[2]
      };
    }); // Handles shorthand.

    margins[1] = margins[1] || margins[0];
    margins[2] = margins[2] || margins[0];
    margins[3] = margins[3] || margins[1];
    return margins;
  };
  /**
   * Starts polling for intersection changes if the polling is not already
   * happening, and if the page's visibility state is visible.
   * @private
   */


  IntersectionObserver.prototype._monitorIntersections = function () {
    if (!this._monitoringIntersections) {
      this._monitoringIntersections = true; // If a poll interval is set, use polling instead of listening to
      // resize and scroll events or DOM mutations.

      if (this.POLL_INTERVAL) {
        this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL);
      } else {
        addEvent(window, 'resize', this._checkForIntersections, true);
        addEvent(document, 'scroll', this._checkForIntersections, true);

        if (this.USE_MUTATION_OBSERVER && 'MutationObserver' in window) {
          this._domObserver = new MutationObserver(this._checkForIntersections);

          this._domObserver.observe(document, {
            attributes: true,
            childList: true,
            characterData: true,
            subtree: true
          });
        }
      }
    }
  };
  /**
   * Stops polling for intersection changes.
   * @private
   */


  IntersectionObserver.prototype._unmonitorIntersections = function () {
    if (this._monitoringIntersections) {
      this._monitoringIntersections = false;
      clearInterval(this._monitoringInterval);
      this._monitoringInterval = null;
      removeEvent(window, 'resize', this._checkForIntersections, true);
      removeEvent(document, 'scroll', this._checkForIntersections, true);

      if (this._domObserver) {
        this._domObserver.disconnect();

        this._domObserver = null;
      }
    }
  };
  /**
   * Scans each observation target for intersection changes and adds them
   * to the internal entries queue. If new entries are found, it
   * schedules the callback to be invoked.
   * @private
   */


  IntersectionObserver.prototype._checkForIntersections = function () {
    var rootIsInDom = this._rootIsInDom();

    var rootRect = rootIsInDom ? this._getRootRect() : getEmptyRect();

    this._observationTargets.forEach(function (item) {
      var target = item.element;
      var targetRect = getBoundingClientRect(target);

      var rootContainsTarget = this._rootContainsTarget(target);

      var oldEntry = item.entry;

      var intersectionRect = rootIsInDom && rootContainsTarget && this._computeTargetAndRootIntersection(target, rootRect);

      var newEntry = item.entry = new IntersectionObserverEntry({
        time: now(),
        target: target,
        boundingClientRect: targetRect,
        rootBounds: rootRect,
        intersectionRect: intersectionRect
      });

      if (!oldEntry) {
        this._queuedEntries.push(newEntry);
      } else if (rootIsInDom && rootContainsTarget) {
        // If the new entry intersection ratio has crossed any of the
        // thresholds, add a new entry.
        if (this._hasCrossedThreshold(oldEntry, newEntry)) {
          this._queuedEntries.push(newEntry);
        }
      } else {
        // If the root is not in the DOM or target is not contained within
        // root but the previous entry for this target had an intersection,
        // add a new record indicating removal.
        if (oldEntry && oldEntry.isIntersecting) {
          this._queuedEntries.push(newEntry);
        }
      }
    }, this);

    if (this._queuedEntries.length) {
      this._callback(this.takeRecords(), this);
    }
  };
  /**
   * Accepts a target and root rect computes the intersection between then
   * following the algorithm in the spec.
   * TODO(philipwalton): at this time clip-path is not considered.
   * https://w3c.github.io/IntersectionObserver/#calculate-intersection-rect-algo
   * @param {Element} target The target DOM element
   * @param {Object} rootRect The bounding rect of the root after being
   *     expanded by the rootMargin value.
   * @return {?Object} The final intersection rect object or undefined if no
   *     intersection is found.
   * @private
   */


  IntersectionObserver.prototype._computeTargetAndRootIntersection = function (target, rootRect) {
    // If the element isn't displayed, an intersection can't happen.
    if (window.getComputedStyle(target).display == 'none') return;
    var targetRect = getBoundingClientRect(target);
    var intersectionRect = targetRect;
    var parent = getParentNode(target);
    var atRoot = false;

    while (!atRoot) {
      var parentRect = null;
      var parentComputedStyle = parent.nodeType == 1 ? window.getComputedStyle(parent) : {}; // If the parent isn't displayed, an intersection can't happen.

      if (parentComputedStyle.display == 'none') return;

      if (parent == this.root || parent == document) {
        atRoot = true;
        parentRect = rootRect;
      } else {
        // If the element has a non-visible overflow, and it's not the <body>
        // or <html> element, update the intersection rect.
        // Note: <body> and <html> cannot be clipped to a rect that's not also
        // the document rect, so no need to compute a new intersection.
        if (parent != document.body && parent != document.documentElement && parentComputedStyle.overflow != 'visible') {
          parentRect = getBoundingClientRect(parent);
        }
      } // If either of the above conditionals set a new parentRect,
      // calculate new intersection data.


      if (parentRect) {
        intersectionRect = computeRectIntersection(parentRect, intersectionRect);
        if (!intersectionRect) break;
      }

      parent = getParentNode(parent);
    }

    return intersectionRect;
  };
  /**
   * Returns the root rect after being expanded by the rootMargin value.
   * @return {Object} The expanded root rect.
   * @private
   */


  IntersectionObserver.prototype._getRootRect = function () {
    var rootRect;

    if (this.root) {
      rootRect = getBoundingClientRect(this.root);
    } else {
      // Use <html>/<body> instead of window since scroll bars affect size.
      var html = document.documentElement;
      var body = document.body;
      rootRect = {
        top: 0,
        left: 0,
        right: html.clientWidth || body.clientWidth,
        width: html.clientWidth || body.clientWidth,
        bottom: html.clientHeight || body.clientHeight,
        height: html.clientHeight || body.clientHeight
      };
    }

    return this._expandRectByRootMargin(rootRect);
  };
  /**
   * Accepts a rect and expands it by the rootMargin value.
   * @param {Object} rect The rect object to expand.
   * @return {Object} The expanded rect.
   * @private
   */


  IntersectionObserver.prototype._expandRectByRootMargin = function (rect) {
    var margins = this._rootMarginValues.map(function (margin, i) {
      return margin.unit == 'px' ? margin.value : margin.value * (i % 2 ? rect.width : rect.height) / 100;
    });

    var newRect = {
      top: rect.top - margins[0],
      right: rect.right + margins[1],
      bottom: rect.bottom + margins[2],
      left: rect.left - margins[3]
    };
    newRect.width = newRect.right - newRect.left;
    newRect.height = newRect.bottom - newRect.top;
    return newRect;
  };
  /**
   * Accepts an old and new entry and returns true if at least one of the
   * threshold values has been crossed.
   * @param {?IntersectionObserverEntry} oldEntry The previous entry for a
   *    particular target element or null if no previous entry exists.
   * @param {IntersectionObserverEntry} newEntry The current entry for a
   *    particular target element.
   * @return {boolean} Returns true if a any threshold has been crossed.
   * @private
   */


  IntersectionObserver.prototype._hasCrossedThreshold = function (oldEntry, newEntry) {
    // To make comparing easier, an entry that has a ratio of 0
    // but does not actually intersect is given a value of -1
    var oldRatio = oldEntry && oldEntry.isIntersecting ? oldEntry.intersectionRatio || 0 : -1;
    var newRatio = newEntry.isIntersecting ? newEntry.intersectionRatio || 0 : -1; // Ignore unchanged ratios

    if (oldRatio === newRatio) return;

    for (var i = 0; i < this.thresholds.length; i++) {
      var threshold = this.thresholds[i]; // Return true if an entry matches a threshold or if the new ratio
      // and the old ratio are on the opposite sides of a threshold.

      if (threshold == oldRatio || threshold == newRatio || threshold < oldRatio !== threshold < newRatio) {
        return true;
      }
    }
  };
  /**
   * Returns whether or not the root element is an element and is in the DOM.
   * @return {boolean} True if the root element is an element and is in the DOM.
   * @private
   */


  IntersectionObserver.prototype._rootIsInDom = function () {
    return !this.root || containsDeep(document, this.root);
  };
  /**
   * Returns whether or not the target element is a child of root.
   * @param {Element} target The target element to check.
   * @return {boolean} True if the target element is a child of root.
   * @private
   */


  IntersectionObserver.prototype._rootContainsTarget = function (target) {
    return containsDeep(this.root || document, target);
  };
  /**
   * Adds the instance to the global IntersectionObserver registry if it isn't
   * already present.
   * @private
   */


  IntersectionObserver.prototype._registerInstance = function () {
    if (registry.indexOf(this) < 0) {
      registry.push(this);
    }
  };
  /**
   * Removes the instance from the global IntersectionObserver registry.
   * @private
   */


  IntersectionObserver.prototype._unregisterInstance = function () {
    var index = registry.indexOf(this);
    if (index != -1) registry.splice(index, 1);
  };
  /**
   * Returns the result of the performance.now() method or null in browsers
   * that don't support the API.
   * @return {number} The elapsed time since the page was requested.
   */


  function now() {
    return window.performance && performance.now && performance.now();
  }
  /**
   * Throttles a function and delays its execution, so it's only called at most
   * once within a given time period.
   * @param {Function} fn The function to throttle.
   * @param {number} timeout The amount of time that must pass before the
   *     function can be called again.
   * @return {Function} The throttled function.
   */


  function throttle(fn, timeout) {
    var timer = null;
    return function () {
      if (!timer) {
        timer = setTimeout(function () {
          fn();
          timer = null;
        }, timeout);
      }
    };
  }
  /**
   * Adds an event handler to a DOM node ensuring cross-browser compatibility.
   * @param {Node} node The DOM node to add the event handler to.
   * @param {string} event The event name.
   * @param {Function} fn The event handler to add.
   * @param {boolean} opt_useCapture Optionally adds the even to the capture
   *     phase. Note: this only works in modern browsers.
   */


  function addEvent(node, event, fn, opt_useCapture) {
    if (typeof node.addEventListener == 'function') {
      node.addEventListener(event, fn, opt_useCapture || false);
    } else if (typeof node.attachEvent == 'function') {
      node.attachEvent('on' + event, fn);
    }
  }
  /**
   * Removes a previously added event handler from a DOM node.
   * @param {Node} node The DOM node to remove the event handler from.
   * @param {string} event The event name.
   * @param {Function} fn The event handler to remove.
   * @param {boolean} opt_useCapture If the event handler was added with this
   *     flag set to true, it should be set to true here in order to remove it.
   */


  function removeEvent(node, event, fn, opt_useCapture) {
    if (typeof node.removeEventListener == 'function') {
      node.removeEventListener(event, fn, opt_useCapture || false);
    } else if (typeof node.detatchEvent == 'function') {
      node.detatchEvent('on' + event, fn);
    }
  }
  /**
   * Returns the intersection between two rect objects.
   * @param {Object} rect1 The first rect.
   * @param {Object} rect2 The second rect.
   * @return {?Object} The intersection rect or undefined if no intersection
   *     is found.
   */


  function computeRectIntersection(rect1, rect2) {
    var top = Math.max(rect1.top, rect2.top);
    var bottom = Math.min(rect1.bottom, rect2.bottom);
    var left = Math.max(rect1.left, rect2.left);
    var right = Math.min(rect1.right, rect2.right);
    var width = right - left;
    var height = bottom - top;
    return width >= 0 && height >= 0 && {
      top: top,
      bottom: bottom,
      left: left,
      right: right,
      width: width,
      height: height
    };
  }
  /**
   * Shims the native getBoundingClientRect for compatibility with older IE.
   * @param {Element} el The element whose bounding rect to get.
   * @return {Object} The (possibly shimmed) rect of the element.
   */


  function getBoundingClientRect(el) {
    var rect;

    try {
      rect = el.getBoundingClientRect();
    } catch (err) {// Ignore Windows 7 IE11 "Unspecified error"
      // https://github.com/w3c/IntersectionObserver/pull/205
    }

    if (!rect) return getEmptyRect(); // Older IE

    if (!(rect.width && rect.height)) {
      rect = {
        top: rect.top,
        right: rect.right,
        bottom: rect.bottom,
        left: rect.left,
        width: rect.right - rect.left,
        height: rect.bottom - rect.top
      };
    }

    return rect;
  }
  /**
   * Returns an empty rect object. An empty rect is returned when an element
   * is not in the DOM.
   * @return {Object} The empty rect.
   */


  function getEmptyRect() {
    return {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      width: 0,
      height: 0
    };
  }
  /**
   * Checks to see if a parent element contains a child element (including inside
   * shadow DOM).
   * @param {Node} parent The parent element.
   * @param {Node} child The child element.
   * @return {boolean} True if the parent node contains the child node.
   */


  function containsDeep(parent, child) {
    var node = child;

    while (node) {
      if (node == parent) return true;
      node = getParentNode(node);
    }

    return false;
  }
  /**
   * Gets the parent node of an element or its host element if the parent node
   * is a shadow root.
   * @param {Node} node The node whose parent to get.
   * @return {Node|null} The parent node or null if no parent exists.
   */


  function getParentNode(node) {
    var parent = node.parentNode;

    if (parent && parent.nodeType == 11 && parent.host) {
      // If the parent is a shadow root, return the host element.
      return parent.host;
    }

    return parent;
  } // Exposes the constructors globally.


  window.IntersectionObserver = IntersectionObserver;
  window.IntersectionObserverEntry = IntersectionObserverEntry;
})(window, document);

/***/ }),

/***/ "./node_modules/lozad/dist/lozad.min.js":
/*!**********************************************!*\
  !*** ./node_modules/lozad/dist/lozad.min.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! lozad.js - v1.9.0 - 2019-02-09
* https://github.com/ApoorvSaxena/lozad.js
* Copyright (c) 2019 Apoorv Saxena; Licensed MIT */
!function (t, e) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function () {
  "use strict";

  var g = Object.assign || function (t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];

      for (var o in r) {
        Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
      }
    }

    return t;
  },
      n = "undefined" != typeof document && document.documentMode,
      l = {
    rootMargin: "0px",
    threshold: 0,
    load: function load(t) {
      if ("picture" === t.nodeName.toLowerCase()) {
        var e = document.createElement("img");
        n && t.getAttribute("data-iesrc") && (e.src = t.getAttribute("data-iesrc")), t.getAttribute("data-alt") && (e.alt = t.getAttribute("data-alt")), t.appendChild(e);
      }

      if ("video" === t.nodeName.toLowerCase() && !t.getAttribute("data-src") && t.children) {
        for (var r = t.children, o = void 0, a = 0; a <= r.length - 1; a++) {
          (o = r[a].getAttribute("data-src")) && (r[a].src = o);
        }

        t.load();
      }

      t.getAttribute("data-src") && (t.src = t.getAttribute("data-src")), t.getAttribute("data-srcset") && t.setAttribute("srcset", t.getAttribute("data-srcset")), t.getAttribute("data-background-image") && (t.style.backgroundImage = "url('" + t.getAttribute("data-background-image") + "')"), t.getAttribute("data-toggle-class") && t.classList.toggle(t.getAttribute("data-toggle-class"));
    },
    loaded: function loaded() {}
  };
  /**
     * Detect IE browser
     * @const {boolean}
     * @private
     */


  function f(t) {
    t.setAttribute("data-loaded", !0);
  }

  var b = function b(t) {
    return "true" === t.getAttribute("data-loaded");
  };

  return function () {
    var r,
        o,
        a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ".lozad",
        t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
        e = g({}, l, t),
        n = e.root,
        i = e.rootMargin,
        d = e.threshold,
        c = e.load,
        u = e.loaded,
        s = void 0;
    return window.IntersectionObserver && (s = new IntersectionObserver((r = c, o = u, function (t, e) {
      t.forEach(function (t) {
        (0 < t.intersectionRatio || t.isIntersecting) && (e.unobserve(t.target), b(t.target) || (r(t.target), f(t.target), o(t.target)));
      });
    }), {
      root: n,
      rootMargin: i,
      threshold: d
    })), {
      observe: function observe() {
        for (var t = function (t) {
          var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : document;
          return t instanceof Element ? [t] : t instanceof NodeList ? t : e.querySelectorAll(t);
        }(a, n), e = 0; e < t.length; e++) {
          b(t[e]) || (s ? s.observe(t[e]) : (c(t[e]), f(t[e]), u(t[e])));
        }
      },
      triggerLoad: function triggerLoad(t) {
        b(t) || (c(t), f(t), u(t));
      },
      observer: s
    };
  };
});

/***/ }),

/***/ "./templates/include/site-header/site-header.js":
/*!******************************************************!*\
  !*** ./templates/include/site-header/site-header.js ***!
  \******************************************************/
/*! exports provided: SiteHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteHeader", function() { return SiteHeader; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @common */ "./assets/scripts/common/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var SiteHeader =
/*#__PURE__*/
function (_FireComponent) {
  _inherits(SiteHeader, _FireComponent);

  function SiteHeader(id) {
    _classCallCheck(this, SiteHeader);

    // register the component by calling `super()` and passing in the component id
    // this creates an instance of the `FireComponent` Class that we extended above
    // giving us access to the `this.$component` variable which contains a reference to the registered HTML element
    // as well as `this.$componentExists` to check if the component exists on the page yet
    return _possibleConstructorReturn(this, _getPrototypeOf(SiteHeader).call(this, id));
  }

  _createClass(SiteHeader, [{
    key: "init",
    value: function init() {
      // don't run anymore scripts if component doesn't exist on the page
      if (!this.componentExists) return; // run scripts here
    }
  }]);

  return SiteHeader;
}(_common__WEBPACK_IMPORTED_MODULE_1__["FireComponent"]);

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
//# sourceMappingURL=bundle.js.map