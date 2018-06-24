(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("dyna-ui-styles"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define("dyna-ui-tooltip", ["react", "dyna-ui-styles", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["dyna-ui-tooltip"] = factory(require("react"), require("dyna-ui-styles"), require("react-dom"));
	else
		root["dyna-ui-tooltip"] = factory(root["react"], root["dyna-ui-styles"], root["react-dom"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_5__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
var ReactDOM = __webpack_require__(5);
var dyna_ui_styles_1 = __webpack_require__(2);
exports.EColor = dyna_ui_styles_1.EColor;
var TooltipContainer_1 = __webpack_require__(6);
var EStyle;
(function (EStyle) {
    EStyle["ROUNDED"] = "ROUNDED";
    EStyle["FLATTED"] = "FLATTED";
})(EStyle = exports.EStyle || (exports.EStyle = {}));
var ETooltipDirection;
(function (ETooltipDirection) {
    ETooltipDirection["NORTH"] = "NORTH";
    ETooltipDirection["EAST"] = "EAST";
    ETooltipDirection["SOUTH"] = "SOUTH";
    ETooltipDirection["WEST"] = "WEST";
    ETooltipDirection["NORTH_EAST"] = "NORTH_EAST";
    ETooltipDirection["NORTH_WEST"] = "NORTH_WEST";
    ETooltipDirection["SOUTH_EAST"] = "SOUTH_EAST";
    ETooltipDirection["SOUTH_WEST"] = "SOUTH_WEST";
})(ETooltipDirection = exports.ETooltipDirection || (exports.ETooltipDirection = {}));
var DynaTooltip = /** @class */ (function (_super) {
    __extends(DynaTooltip, _super);
    function DynaTooltip(props) {
        var _this = _super.call(this, props) || this;
        _this.didUnmount = false;
        _this.handleGlobalScroll = _this.handleGlobalScroll.bind(_this);
        return _this;
    }
    DynaTooltip.prototype.componentWillMount = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.didUnmount)
                return; // exit, in unmount, no need to create it
            _this.tooltipContainer = document.createElement('div');
            document.querySelector('body').appendChild(_this.tooltipContainer);
            ReactDOM.render(React.createElement(TooltipContainer_1.TooltipContainer, { ref: _this.initializeTooltipComponent.bind(_this) }), _this.tooltipContainer);
            window.addEventListener('scroll', _this.handleGlobalScroll, true);
        }, this.props.delayCreationMs);
    };
    DynaTooltip.prototype.initializeTooltipComponent = function (tooltipComponent) {
        this.tooltipComponent = tooltipComponent;
        this.updateTooltipFromProps(this.props);
    };
    DynaTooltip.prototype.componentWillUnmount = function () {
        this.didUnmount = true;
        if (this.tooltipContainer) {
            document.querySelector('body').removeChild(this.tooltipContainer);
            window.removeEventListener('scroll', this.handleGlobalScroll);
        }
    };
    DynaTooltip.prototype.componentWillReceiveProps = function (nextProps) {
        this.updateTooltipFromProps(nextProps);
    };
    DynaTooltip.prototype.handleGlobalScroll = function (event) {
        if (this.tooltipComponent)
            this.tooltipComponent.update({ show: false });
    };
    DynaTooltip.prototype.updateTooltipFromProps = function (props) {
        if (!this.tooltipComponent)
            return; // is not yet rendered
        var style = props.style, color = props.color, tooltipContent = props.tooltipContent, tooltipDirection = props.tooltipDirection;
        this.tooltipComponent.update({
            style: style, color: color, content: tooltipContent, direction: tooltipDirection,
        });
    };
    DynaTooltip.prototype.handleMouseEnter = function () {
        if (this.props.enabled) {
            this.tooltipComponent.update({ show: true });
        }
    };
    DynaTooltip.prototype.handleMouseLeave = function () {
        if (this.props._debug_doNotHide)
            return;
        this.tooltipComponent.update({ show: false });
    };
    DynaTooltip.prototype.handleMouseMove = function (event) {
        this.tooltipComponent.update({
            x: event.clientX,
            y: event.clientY,
        });
    };
    DynaTooltip.prototype.render = function () {
        var children = this.props.children;
        return (React.createElement("span", { onMouseEnter: this.handleMouseEnter.bind(this), onMouseLeave: this.handleMouseLeave.bind(this), onMouseMove: this.handleMouseMove.bind(this) }, children));
    };
    DynaTooltip.defaultProps = {
        style: EStyle.ROUNDED,
        color: dyna_ui_styles_1.EColor.WHITE_BLACK,
        enabled: true,
        children: null,
        delayCreationMs: 500,
        tooltipContent: null,
        tooltipDirection: ETooltipDirection.SOUTH_EAST,
        _debug_doNotHide: false,
    };
    return DynaTooltip;
}(React.Component));
exports.DynaTooltip = DynaTooltip;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DynaTooltip_1 = __webpack_require__(0);
exports.DynaTooltip = DynaTooltip_1.DynaTooltip;
exports.EStyle = DynaTooltip_1.EStyle;
exports.EColor = DynaTooltip_1.EColor;
exports.ETooltipDirection = DynaTooltip_1.ETooltipDirection;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
var dyna_ui_styles_1 = __webpack_require__(2);
var DynaTooltip_1 = __webpack_require__(0);
__webpack_require__(7);
var animationDuration = 250; // same value 240852049
var TooltipContainer = /** @class */ (function (_super) {
    __extends(TooltipContainer, _super);
    function TooltipContainer(props) {
        var _this = _super.call(this, props) || this;
        _this.domDisplayTimer = null;
        _this.state = {
            show: false,
            x: 0, y: 0,
            direction: DynaTooltip_1.ETooltipDirection.SOUTH_EAST,
            style: DynaTooltip_1.EStyle.ROUNDED,
            color: dyna_ui_styles_1.EColor.WHITE_BLACK,
            content: null,
            _domDisplay: false,
        };
        return _this;
    }
    TooltipContainer.prototype.update = function (state) {
        var _this = this;
        state = __assign({}, state);
        var turnsToShow = this.state.show === false && state.show === true;
        var turnsToHide = this.state.show === true && state.show === false;
        if (turnsToShow) {
            if (this.domDisplayTimer !== null)
                clearTimeout(this.domDisplayTimer);
            this.domDisplayTimer = null;
            state._domDisplay = true;
            state.show = false;
            setTimeout(function () {
                _this.setState({ show: true });
            }, 10);
        }
        this.setState(state);
        if (turnsToHide) {
            this.domDisplayTimer = setTimeout(function () {
                _this.domDisplayTimer = null;
                _this.setState({ _domDisplay: false });
            }, animationDuration);
        }
    };
    Object.defineProperty(TooltipContainer.prototype, "hasContent", {
        get: function () {
            var content = this.state.content;
            if (Array.isArray(content))
                return !!content.filter(function (v) { return !!v; }).length;
            else
                return !!content;
        },
        enumerable: true,
        configurable: true
    });
    TooltipContainer.prototype.render = function () {
        var _a = this.state, show = _a.show, x = _a.x, y = _a.y, direction = _a.direction, style = _a.style, color = _a.color, content = _a.content, _domDisplay = _a._domDisplay;
        if (!this.hasContent)
            return null;
        if (!_domDisplay)
            return null;
        var divStyle = {
            top: y,
            left: x,
        };
        var className = [
            "dyna-tooltip-container",
            "dyna-tooltip-container--direction-" + direction,
            "dyna-tooltip-container--display-" + (show ? "SHOW" : "HIDE"),
            "dyna-tooltip-container--style-" + (style || "NONE"),
            "dyna-tooltip-container--color-" + (color || "NONE"),
        ].join(' ').trim();
        return (React.createElement("div", { className: className, style: divStyle }, content));
    };
    return TooltipContainer;
}(React.Component));
exports.TooltipContainer = TooltipContainer;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(8);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(10)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/lib/index.js??ref--4-2!../../node_modules/less-loader/dist/cjs.js!./TooltipContainer.less", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/lib/index.js??ref--4-2!../../node_modules/less-loader/dist/cjs.js!./TooltipContainer.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, ".dyna-tooltip-container {\n  position: fixed;\n  -webkit-transition: opacity 250ms ease-in-out;\n  transition: opacity 250ms ease-in-out;\n  z-index: 1000;\n}\n.dyna-tooltip-container--display-SHOW {\n  opacity: 1;\n}\n.dyna-tooltip-container--display-HIDE {\n  opacity: 0;\n}\n@-webkit-keyframes dyna-tooltip-show {\n  0% {\n    opacity: 0.001;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes dyna-tooltip-show {\n  0% {\n    opacity: 0.001;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes dyna-tooltip-hide {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0.001;\n  }\n}\n@keyframes dyna-tooltip-hide {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0.001;\n  }\n}\n.dyna-tooltip-container--style-ROUNDED {\n  border: 1px solid;\n  padding: 4px 8px;\n  -webkit-box-shadow: 3px 3px 6px 0px #3c3c3c;\n          box-shadow: 3px 3px 6px 0px #3c3c3c;\n  border-radius: 4px;\n}\n.dyna-tooltip-container--style-FLATTED {\n  border: 1px solid;\n  padding: 4px 8px;\n  -webkit-box-shadow: 3px 3px 6px 0px #3c3c3c;\n          box-shadow: 3px 3px 6px 0px #3c3c3c;\n}\n.dyna-tooltip-container--color-BLACK_WHITE {\n  background-color: #222223;\n  border-color: #A2AAAD;\n  color: #2D2926;\n}\n.dyna-tooltip-container--color-BLACK_ORANGE {\n  background-color: #222223;\n  border-color: #FFAE62;\n  color: #2D2926;\n}\n.dyna-tooltip-container--color-TRANSPARENT_ORANGE {\n  background-color: transparent;\n  border-color: #FFAE62;\n  color: #2D2926;\n}\n.dyna-tooltip-container--color-TRANSPARENT_WHITE {\n  background-color: transparent;\n  border-color: #A2AAAD;\n  color: #2D2926;\n}\n.dyna-tooltip-container--color-ORANGE_WHITE {\n  background-color: #FF6900;\n  border-color: #C8C9C7;\n  color: #2D2926;\n}\n.dyna-tooltip-container--color-RED_WHITE {\n  background-color: #DA291C;\n  border-color: #A2AAAD;\n  color: #2D2926;\n}\n.dyna-tooltip-container--color-GREY_WHITE {\n  background-color: #51534A;\n  border-color: #A2AAAD;\n  color: #C1C6C8;\n}\n.dyna-tooltip-container--color-WHITE_BLACK {\n  background-color: #D0D3D4;\n  border-color: #212721;\n  color: #2D2926;\n}\n.dyna-tooltip-container--color-WHITE_RED {\n  background-color: #D0D3D4;\n  border-color: #AF272F;\n  color: #2D2926;\n}\n.dyna-tooltip-container--color-WHITE_ORANGE {\n  background-color: #D9D9D6;\n  border-color: #FFAE62;\n  color: #2D2926;\n}\n.dyna-tooltip-container--direction-NORTH {\n  -webkit-transform: translate(-50%, -125%);\n          transform: translate(-50%, -125%);\n}\n.dyna-tooltip-container--direction-EAST {\n  -webkit-transform: translate(25%, -50%);\n          transform: translate(25%, -50%);\n}\n.dyna-tooltip-container--direction-SOUTH {\n  -webkit-transform: translate(-50%, 20%);\n          transform: translate(-50%, 20%);\n}\n.dyna-tooltip-container--direction-WEST {\n  -webkit-transform: translate(-125%, -50%);\n          transform: translate(-125%, -50%);\n}\n.dyna-tooltip-container--direction-NORTH_EAST {\n  -webkit-transform: translate(25%, -125%);\n          transform: translate(25%, -125%);\n}\n.dyna-tooltip-container--direction-NORTH_WEST {\n  -webkit-transform: translate(-125%, -125%);\n          transform: translate(-125%, -125%);\n}\n.dyna-tooltip-container--direction-SOUTH_EAST {\n  -webkit-transform: translate(25%, 20%);\n          transform: translate(25%, 20%);\n}\n.dyna-tooltip-container--direction-SOUTH_WEST {\n  -webkit-transform: translate(-125%, 20%);\n          transform: translate(-125%, 20%);\n}\n", ""]);

// exports


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(11);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
	// get current location
	var location = typeof window !== "undefined" && window.location;

	if (!location) {
		throw new Error("fixUrls requires window.location");
	}

	// blank or null?
	if (!css || typeof css !== "string") {
		return css;
	}

	var baseUrl = location.protocol + "//" + location.host;
	var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
 This regular expression is just a way to recursively match brackets within
 a string.
 	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
    (  = Start a capturing group
      (?:  = Start a non-capturing group
          [^)(]  = Match anything that isn't a parentheses
          |  = OR
          \(  = Match a start parentheses
              (?:  = Start another non-capturing groups
                  [^)(]+  = Match anything that isn't a parentheses
                  |  = OR
                  \(  = Match a start parentheses
                      [^)(]*  = Match anything that isn't a parentheses
                  \)  = Match a end parentheses
              )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
  \)  = Match a close parens
 	 /gi  = Get all matches, not the first.  Be case insensitive.
  */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
			return $1;
		}).replace(/^'(.*)'$/, function (o, $1) {
			return $1;
		});

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
			return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
			//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};

/***/ })
/******/ ]);
});