/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/*styles.css */\n\n:root {\n    --sand: #F4EBDD;\n    --sand-light: #FBF8F2;\n    --mocha: #405747;\n    --mocha-dark: #293D30;\n    --mocha-light: #718573;\n    --watermelon: #E98F91;\n    --text: #171e14;\n    --muted: #77796F;\n    --white: #FFFFFF;\n    --shadow: 0 6px 24px rgba(41, 61, 48, 0.08);\n}\n\n/* =========================\n   GLOBAL STYLES\n========================= */\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    background-color: var(--sand);\n    color: var(--text);\n    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    line-height: 1.7;\n    min-height: 100vh;\n}\n\n/*\n   FOR NAV\n*/\n\nheader {\n    background-color: var(--mocha);\n    padding: 18px 24px;\n    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.12);\n}\n\nnav {\n    max-width: 1100px;\n    margin: 0 auto;\n}\n\nnav ul {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 16px;\n    list-style: none;\n}\n\nnav button {\n    background: transparent;\n    border: none;\n    color: var(--sand-light);\n    padding: 10px 24px;\n    border-radius: 25px;\n    font-size: 0.95rem;\n    font-weight: 600;\n    cursor: pointer;\n    transition: all 0.25s ease;\n}\n\nnav button:hover {\n    background-color: var(--mocha-light);\n}\n\nnav button:active {\n    background-color: var(--watermelon);\n    color: var(--mocha-dark);\n}\n\n/* \n   MAIN CONTENT\n */\n\n#content {\n    max-width: 1050px;\n    width: 90%;\n    margin: 55px auto;\n    padding: 20px;\n}\n\n#content h1 {\n    color: var(--mocha-dark);\n    font-size: clamp(2rem, 5vw, 3rem);\n    text-align: center;\n    margin-bottom: 20px;\n    line-height: 1.2;\n}\n\n#content h2 {\n    color: var(--mocha);\n    font-size: 1.6rem;\n    margin-bottom: 15px;\n}\n\n#content p {\n    color: var(--muted);\n    margin-bottom: 16px;\n}\n\n/* \n   HOME PAGE\n */\n\n#content > h1,\n#content > p,\n#content > h2,\n#content > ul {\n    max-width: 760px;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n#content > h1 {\n    margin-bottom: 24px;\n}\n\n#content > p {\n    text-align: center;\n}\n\n#content > h2 {\n    margin-top: 40px;\n    text-align: center;\n}\n\n#content > ul {\n    background-color: var(--sand-light);\n    padding: 25px 45px;\n    border-radius: 16px;\n    box-shadow: var(--shadow);\n    list-style-position: inside;\n}\n\n#content li {\n    padding: 6px 0;\n    color: var(--mocha-dark);\n}\n\n/* \n   MENU PAGE\n */\n\n.menu-container {\n    width: 100%;\n}\n\n.menu-container > h1 {\n    margin-bottom: 40px;\n}\n\n.menu-container section {\n    background-color: var(--sand-light);\n    padding: 30px;\n    margin-bottom: 28px;\n    border-radius: 18px;\n    box-shadow: var(--shadow);\n}\n\n.menu-container section h2 {\n    border-bottom: 2px solid var(--sand);\n    padding-bottom: 12px;\n    margin-bottom: 22px;\n}\n\n.menu-container section {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));\n    gap: 18px;\n}\n\n.menu-container section h2 {\n    grid-column: 1 / -1;\n}\n\n.menu-item {\n    background-color: var(--white);\n    border-radius: 12px;\n    padding: 20px;\n    border: 1px solid rgba(64, 87, 71, 0.08);\n    transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n\n.menu-item:hover {\n    transform: translateY(-4px);\n    box-shadow: var(--shadow);\n}\n\n.menu-item h3 {\n    color: var(--mocha-dark);\n    font-size: 1.1rem;\n    margin-bottom: 8px;\n}\n\n.menu-item p {\n    font-size: 0.9rem;\n}\n\n.menu-item p:last-child {\n    color: var(--mocha);\n    font-weight: 700;\n    font-size: 1.05rem;\n    margin-bottom: 0;\n}\n\n/* \n   CONTACT PAGE\n */\n\n#content > p strong {\n    color: var(--mocha-dark);\n}\n\n#content > p {\n    max-width: 700px;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n/* \n   NAV RESPONSIVE DESIGN\n */\n\n@media (max-width: 600px) {\n    header {\n        padding: 14px 10px;\n    }\n\n    nav ul {\n        gap: 4px;\n    }\n\n    nav button {\n        padding: 9px 15px;\n        font-size: 0.85rem;\n    }\n\n    #content {\n        width: 95%;\n        margin: 30px auto;\n        padding: 10px;\n    }\n\n    .menu-container section {\n        padding: 20px;\n        grid-template-columns: 1fr;\n    }\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://js_recipes/./src/styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://js_recipes/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://js_recipes/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/styles.css"
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://js_recipes/./src/styles.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://js_recipes/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://js_recipes/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://js_recipes/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://js_recipes/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://js_recipes/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://js_recipes/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/contact.js"
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   contact: () => (/* binding */ contact),\n/* harmony export */   contactBtn: () => (/* binding */ contactBtn)\n/* harmony export */ });\n//contact.js \n\nconst contact = function(){ \n    const content = document.getElementById(\"content\"); \n    const h1 = document.createElement(\"h1\"); \n    h1.innerText = \"Get in Touch\"; \n\n    const p1 = document.createElement(\"p\"); \n    p1.innerText = \"We’d love to hear from you! Whether you’re booking a table, asking about our menu,\\n or planning a special occasion, our team is happy to help.\";\n\n    const address = document.createElement(\"p\");\n    address.innerHTML = \"<strong>Address:</strong> 12 Garden Lane, Gaborone, Botswana\";\n\n    const phone = document.createElement(\"p\"); \n    phone.innerHTML = \"<strong>Phone:</strong> +267 71 234 567\"; \n\n    const email = document.createElement(\"p\"); \n    email.innerHTML = \"<strong>Email:</strong> hello@artisan.bw\" \n\n    content.append(h1,p1,address,phone,email);\n} \n\nconst contactBtn = document.getElementById(\"contact\");\n\n\n\n\n//# sourceURL=webpack://js_recipes/./src/contact.js?\n}");

/***/ },

/***/ "./src/home.js"
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   homeBtn: () => (/* binding */ homeBtn),\n/* harmony export */   renderDom: () => (/* binding */ renderDom)\n/* harmony export */ });\n//module.js \n\nfunction renderDom(){ \n    const content = document.getElementById(\"content\"); \n    const h1 = document.createElement(\"h1\");\n    const p1 = document.createElement(\"p\"); \n    const h2 = document.createElement(\"h2\"); \n    const p2 = document.createElement(\"p\");\n    const li1 = document.createElement(\"li\"); \n    const li2 = document.createElement(\"li\"); \n    const li3 = document.createElement(\"li\");  \n    const p4 = document.createElement(\"p\"); \n    const list = document.createElement(\"ul\");\n\n    h1.innerText = \"Welcome to the Artisan\";\n    p1.innerText = \"Where great food meets unforgettable moments.\\n\\n Discover a delicious blend of fresh ingredients, bold flavours, and warm hospitality. Whether\\n you're joining us for a casual lunch, a romantic dinner, or a special celebration, we're here to\\n make every visit memorable.\\n\\nCome hungry, leave happy.\"; \n    \n    h2.innerText = \"Opening Hours\"; \n    p2.innerText = \"We're here to serve you delicious food and warm hospitality throughout the week.\\n\";  \n\n\n    li1.innerText = \"Monday – Friday: 08:00 – 22:00\";\n    li2.innerText = \"Saturday: 09:00 – 23:00\"; \n    li3.innerText = \"Sunday: 10:00 – 20:00\\n\";   \n\n\n    p4.innerText = \"Whether you're stopping by for a quick lunch or settling in for a leisurely dinner, we'd love to welcome you.\"; \n    list.append(li1,li2,li3);\n    content.append(h1,p1,h2,p2,list,p4);\n} \n\nconst homeBtn = document.getElementById(\"home\");\n\n\n\n\n//# sourceURL=webpack://js_recipes/./src/home.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n//index.js\n\n\n \n\n\n_menu_js__WEBPACK_IMPORTED_MODULE_2__.menuBtn.addEventListener('click',function(){ \n    content.innerHTML = \"\";\n    renderMenu();\n})\n\n_home_js__WEBPACK_IMPORTED_MODULE_1__.homeBtn.addEventListener('click', function(){ \n    content.innerHTML = \"\"; \n    (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.renderDom)();\n})  \n\n_contact_js__WEBPACK_IMPORTED_MODULE_3__.contactBtn.addEventListener('click',function(){ \n    content.innerHTML = \"\"; \n    (0,_contact_js__WEBPACK_IMPORTED_MODULE_3__.contact)();\n})\n\nfunction renderMenu(){ \n    const content = document.getElementById(\"content\");  \n\n    const menuContainer = document.createElement(\"main\");\n    menuContainer.classList.add(\"menu-container\");\n    const title = document.createElement(\"h1\"); \n    title.innerText = \"Our Menu\";\n\n    for (const category in _menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]){ \n        const section = document.createElement(\"section\");\n        const heading = document.createElement(\"h2\"); \n\n        heading.innerText = category; \n        section.append(heading); \n\n        for (const item of _menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"][category]){\n            const card = document.createElement(\"article\"); \n            card.classList.add(\"menu-item\");\n\n            const name = document.createElement(\"h4\"); \n            const description = document.createElement(\"p\"); \n            const price = document.createElement(\"p\"); \n\n            name.innerText = item[\"name\"]; \n            description.innerText = item[\"description\"] || \"\"; //incase they have no description to avoid returning undefined\n            price.innerText = \"BWP \" + item[\"price\"]; \n\n            card.append(name,description,price); \n            section.append(card);\n        }\n\n        menuContainer.append(section);        \n    }\n    content.append(title,menuContainer);\n}\n\nfunction setActiveTab(button) {\n    document.querySelectorAll(\"nav button\").forEach(btn => {\n        btn.classList.remove(\"active\");\n    });\n\n    button.classList.add(\"active\");\n}\n\n\n;(0,_home_js__WEBPACK_IMPORTED_MODULE_1__.renderDom)();\n\n\n\n\n//# sourceURL=webpack://js_recipes/./src/index.js?\n}");

/***/ },

/***/ "./src/menu.js"
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   menuBtn: () => (/* binding */ menuBtn)\n/* harmony export */ });\n//menu.js\nconst menu = {\n    Starters: [\n        {\n            name: \"Garlic Bread\",\n            price: 12,\n            description: \"Toasted bread with garlic butter and fresh herbs.\"\n        },\n        {\n            name: \"Creamy Mushroom Soup\",\n            price: 18,\n            description: \"A rich, comforting soup served with warm bread.\"\n        },\n        {\n            name: \"Crispy Chicken Wings\",\n            price: 25,\n            description: \"Golden wings tossed in BBQ or spicy sauce.\"\n        }\n    ],\n\n    \"Main Courses\": [\n        {\n            name: \"Grilled Chicken\",\n            price: 35,\n            description: \"Herb-marinated chicken with seasoned potatoes and vegetables.\"\n        },\n        {\n            name: \"Beef Burger\",\n            price: 32,\n            description: \"Juicy beef patty with cheese, lettuce, tomato and house sauce.\"\n        },\n        {\n            name: \"Creamy Chicken Alfredo\",\n            price: 38,\n            description: \"Tender chicken and pasta in creamy Parmesan sauce.\"\n        },\n        {\n            name: \"Pan-Seared Tilapia\",\n            price: 40,\n            description: \"Fresh tilapia served with fragrant rice and vegetables.\"\n        },\n        {\n            name: \"Vegetable Stir-Fry\",\n            price: 28,\n            description: \"Fresh vegetables served with rice.\"\n        }\n    ],\n\n    Desserts: [\n        {\n            name: \"Chocolate Brownie\",\n            price: 15,\n            description: \"Rich chocolate brownie with vanilla ice cream.\"\n        },\n        {\n            name: \"Classic Cheesecake\",\n            price: 18,\n            description: \"Creamy cheesecake with a buttery biscuit base.\"\n        },\n        {\n            name: \"Fresh Fruit Platter\",\n            price: 12,\n            description: \"A selection of seasonal fruits.\"\n        }\n    ],\n\n    Beverages: [\n        { name: \"Fresh Lemonade\", price: 8 },\n        { name: \"Fresh Juice\", price: 10 },\n        { name: \"Cappuccino\", price: 12 },\n        { name: \"Iced Coffee\", price: 15 },\n        { name: \"Mineral Water\", price: 5 }\n    ]\n}; \n\nconst menuBtn = document.getElementById(\"menu\");\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n\n\n//# sourceURL=webpack://js_recipes/./src/menu.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		const getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperties(exports, { [Symbol.toStringTag]: { value: 'Module' }, __esModule: { value: true } });
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	__webpack_require__.nc = undefined;
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;