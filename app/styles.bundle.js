webpackJsonp(["styles"],{

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./src/styles.css":
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\r\nbody {overflow-y: scroll;}\r\nnav {z-index: 1000;}\r\n.header-space {\r\n    position: -webkit-sticky;\r\n    position: sticky; top: 0; background: #000000; height: 72px; opacity: 1;\r\n    -webkit-transition: .4s opacity, .4s height;\r\n    transition: .4s opacity, .4s height; z-index: 900;\r\n}\r\n.header-space.sticky {opacity: 0; height: 59px;}\r\n.loader {z-index: 800;}\r\n.top-section {padding-top: 4rem; -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 96%, 0 100%); clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 96%, 0 100%);}\r\n.last-row {margin-bottom: 35px;}\r\n.strong {font-weight: 600;}\r\n.main-color {color: #f7ca18 !important;}\r\n.primary-color, .primary {color: #007bff !important;}\r\n.success-color, .success {color: #28a745 !important;}\r\n.info-color, .info {color: #17a2b8 !important;}\r\n.warning-color, .warning {color: #ffc107 !important;}\r\n.danger-color, .danger {color: #dc3545 !important;}\r\n.error-box {min-height: 40px; margin-top: -8px; color: red;}\r\n.error-message {min-height: 24px; color: red;}\r\n.content-section {padding: 4rem 0 1.5rem 0;}\r\n.content-section .container {max-width: calc(100vw - 120px) !important;}\r\n.list-header {font-size: 26px; padding-bottom: 10px; margin-bottom: 22px; text-align: left;}\r\n.list-item {\r\n    font-size: 15px; padding-bottom: 9px; margin-bottom: 9px; pointer-events: all; cursor: pointer;\r\n    opacity: 0.6; padding-left: 0; outline: none; -webkit-transition: all .5s; transition: all .5s; text-transform: capitalize;\r\n}\r\n.list-item.active {opacity: 1; font-weight: 600;}\r\n.list-item:hover {padding-left: 12px; opacity: 1;}\r\n.list-item i {font-size: 11px; padding-right: 8px; border: 0 !important;}\r\n.table-criteria-container {margin-bottom: 20px;}\r\n.table-criteria {margin-bottom: 10px;}\r\n.table-criteria .form-control {display: inline-block; margin-left: 5px;}\r\n.table-search .btn {margin-top: -1.5px;}\r\n.form-selection-container {padding: 8.5px;}\r\n.form-selection-container:active, .form-selection-container:focus {\r\n    border: 0; text-decoration: none; outline-width: 0;\r\n}\r\n.form-container {margin-bottom: 30px;}\r\n.form-container h2 {width: 100%;}\r\n.form-selection {padding: 12px; position: relative; pointer-events: all; cursor: pointer;}\r\n.form-selection img {width: 100%; height: 11.5vw;}\r\n.form-selection .form-cover {\r\n    position: absolute; top: 12px; background: rgba(0,0,0,0); opacity: 0;\r\n    width: calc(100% - 24px); height: 11.5vw; -webkit-transition: .3s background, .3s opacity; transition: .3s background, .3s opacity;\r\n}\r\n.form-selection:hover .form-cover {background: rgba(0,0,0,.75); opacity: 1;}\r\n.form-selection .form-owner {text-align: left; font-size: 15px; color: #f7ca18; margin: 10px 0 0 0;}\r\n.form-selection .form-desc {margin: 5px 0 0 0; line-height: 22px; min-height: 44px;}\r\n.form-selection .form-date {margin: 10px 0 0 0; font-size: 12px;}\r\n.form-selection .form-date span {font-weight: 600;}\r\n.result-err-table-text {margin: 25px 0;}\r\n.no-transition {-webkit-transition: 0s all !important;transition: 0s all !important;}\r\n.pagination-wraper {width: 100%; text-align: center;}\r\n.pagination-wraper li {\r\n    display: inline-block; list-style: none; vertical-align: middle;\r\n    text-align: center; pointer-events: none;\r\n}\r\n.pagination-wraper li.active {pointer-events: all; cursor: pointer;}\r\n.pagination-wraper li span {\r\n    float: left; width: 40px; height: 40px; font-size: 16px;\r\n    margin-right: 7px; padding-top: 6px; -webkit-transition: all .2s; transition: all .2s;\r\n}\r\n.pagination-wraper li span, .pagination-wraper li span i {font-size: 16px}\r\n.table-container {width: 100%; padding: 10px 15px;}\r\n.table-container table {width: 100%;}\r\nth, td {text-align: center; font-size: 14px; padding: 8px 12px;}\r\ntd i {font-size: 16px !important; margin: 0 !important; cursor: pointer;}\r\nth {font-size: 15px;}\r\n.col-left {text-align: left;}\r\n/* Start SS-PDF */\r\n.ng2-pdf-viewer-container {overflow: hidden !important;}\r\n.ss-pdf-section {padding: 2rem 0;}\r\n.ss-pdf-content {position: relative;}\r\n.ss-form-input, .ss-profile, .ss-signature {\r\n    position: absolute; border: 0; background: rgba(248,255,156,.75); border-radius: 2px;\r\n}\r\n.ss-profile img {position: absolute; width: 100%; height: auto;}\r\n.ss-form-input {padding-left: 10px; padding-right: 10px;}\r\n.ss-form-input:focus {background: #f8ff9c; border: 1.5px solid #228ae6; border-radius: 2px;}\r\n.ss-form-input[type=text] {color: #000;}\r\n.ss-form-input:disabled, .ss-signature.disabled, .ss-profile.disabled {\r\n    border: none; background: none; pointer-events: none; font-weight: 600;\r\n}\r\n.ss-button-container {\r\n    position: fixed; top: calc(100vh - 50px); right: 10px; padding: 15px 15px 17px 15px;\r\n    width: 260px; -webkit-transition: .45s top; transition: .45s top; border-radius: 5px; z-index: 800;\r\n}\r\n.ss-button-container.new-mode:hover {top: calc(100vh - 160px);}\r\n.ss-button-container.view-mode:hover {top: calc(100vh - 160px);}\r\n.ss-button-container.edit-mode:hover {top: calc(100vh - 207px);}\r\n.ss-btn-title {margin-bottom: 10px; font-size: 20px;}\r\n.ss-button-container .btn {width: 100%; margin-top: 15px;}\r\n.text-medium {font-size: 26px;}\r\n.ss-result-button-container {text-align: center;}\r\n.ss-result-button-container .btn {margin: 0 2px; width: 180px;}\r\n.ss-dowloading {\r\n    position: -webkit-sticky;\r\n    position: sticky; top: 0; left: 0; width: 100vw; height: 100vh; text-align: center;\r\n    -webkit-transition: .25s opacity;\r\n    transition: .25s opacity; opacity: 1; z-index: 850; padding-top: 53vh;\r\n}\r\n.ss-dowloading.inactive {opacity: 0;}\r\n.ss-dowloading h2 {font-family: 'Passion One', sans-serif;}\r\n/* End SS-PDF */\r\n@media (max-width: 991.98px) {\r\n    .content-section .container {max-width: calc(100vw - 60px) !important;}\r\n    .form-selection img, .form-selection img, .form-selection .form-cover {height: 15.5vw;}\r\n}\r\n@media (max-width: 767.98px) {\r\n    .last-row {margin-bottom: 25px;}\r\n    .list-header {text-align: center;}\r\n\r\n    .list-item {border: 0; float: left; width: 33.333%; text-align: center;}\r\n    .list-item i {display: none;}\r\n\r\n    .table-criteria-container {margin: 5px 0 20px 0; padding: 20px 0 0 0;}\r\n    .form-selection img, .form-selection img, .form-selection .form-cover {height: 23vw;}\r\n}\r\n@media (max-width: 650.98px) {\r\n    .list-item {width: 50%;}\r\n}\r\n@media (max-width: 575.98px) {\r\n    .header-space {height: 46px;}\r\n    .header-space.sticky {height: 41px;}\r\n    .form-selection img, .form-selection img, .form-selection .form-cover {height: 48vw;}\r\n}\r\n@media (max-width: 450.98px) {\r\n    .list-item {width: 100%;}\r\n}"

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
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
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__("./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

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
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
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

/***/ "./node_modules/style-loader/lib/urls.js":
/***/ (function(module, exports) {


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
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

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


/***/ }),

/***/ "./src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./src/styles.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/raw-loader/index.js!../node_modules/postcss-loader/lib/index.js??embedded!./styles.css", function() {
			var newContent = require("!!../node_modules/raw-loader/index.js!../node_modules/postcss-loader/lib/index.js??embedded!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/styles.css");


/***/ })

},[8]);
//# sourceMappingURL=styles.bundle.js.map