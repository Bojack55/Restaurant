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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadAboutPage)\n/* harmony export */ });\nfunction loadAboutPage() {\n  var contentDiv = document.getElementById('content');\n  if (contentDiv) {\n    contentDiv.innerHTML = \"\\n    <div class =\\\"contact-style\\\">\\n      <div class =\\\"contact-title\\\"><h1>Contact Us</h1></div>\\n      <div class=\\\"contact-info\\\">\\n        <p><strong>Address:</strong> 123 main St, Benha</p>\\n        <p><strong>Hours:</strong> Everyday: 10 AM - 10 PM</p>\\n        <p><strong>Phone:</strong> 01234567889</p>\\n      </div>\\n      <form>\\n        <label for=\\\"name\\\">Name:</label>\\n        <input type=\\\"text\\\" id=\\\"name\\\" name=\\\"name\\\" required>\\n        <br>\\n        <label for=\\\"email\\\">Email:</label>\\n        <input type=\\\"email\\\" id=\\\"email\\\" name=\\\"email\\\" >\\n        <br>\\n        <label for=\\\"phone\\\">Phone:</label>\\n        <input type=\\\"number\\\" id=\\\"phone\\\" name=\\\"phone\\\" maxlength=\\\"11\\\" minlength=\\\"11\\\" required>\\n        <label for=\\\"message\\\">Order:</label>\\n        <textarea id=\\\"message\\\" name=\\\"message\\\" required></textarea>\\n        <br>\\n        <button type=\\\"submit\\\">Send</button>\\n      </form>\\n    </div>\\n  \";\n  } else {\n    console.error(\"Error: 'content' div not found.\");\n  }\n}\n\n//# sourceURL=webpack://restaurant-site/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadHomePage)\n/* harmony export */ });\nfunction loadHomePage() {\n  var contentDiv = document.getElementById('content');\n  if (contentDiv) {\n    contentDiv.innerHTML = \"\\n      <div class=\\\"total-home\\\">\\n        <div class=\\\"home-style\\\">\\n          <div class=\\\"home-title\\\"><h1>Welcome to Bojack's Shawarma</h1></div>\\n          <div class=\\\"home-logo\\\"><img src=\\\"\".concat(__webpack_require__(/*! ./logo.png */ \"./src/logo.png\"), \"\\\" alt=\\\"Restaurant Image\\\"></div>\\n          <div class=\\\"home-slogan\\\"><p>No Horsing Around - Just Great Shawarma!</p></div>\\n          <P></p>\\n          <div class=\\\"get\\\"><p><em>get yours now</em></p></div>\\n    \");\n  } else {\n    console.error(\"Error: 'content' div not found.\");\n  }\n}\n\n//# sourceURL=webpack://restaurant-site/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var contentDiv = document.getElementById('content');\n  if (!contentDiv) {\n    console.error('Content div not found');\n    return;\n  }\n  document.getElementById('home-btn').addEventListener('click', function () {\n    contentDiv.innerHTML = '';\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  });\n  document.getElementById('menu-btn').addEventListener('click', function () {\n    contentDiv.innerHTML = '';\n    (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  });\n  document.getElementById('contact-btn').addEventListener('click', function () {\n    contentDiv.innerHTML = '';\n    (0,_contact_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  });\n\n  // Load the homepage by default\n  (0,_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n});\n\n//# sourceURL=webpack://restaurant-site/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMenuPage)\n/* harmony export */ });\nfunction loadMenuPage() {\n  var contentDiv = document.getElementById('content');\n  if (contentDiv) {\n    contentDiv.innerHTML = \"\\n    <div class=\\\"menu-style\\\">\\n      <div class=\\\"menu-title\\\"><h1>Our Menu</h1></div>\\n      <p>Check out our delicious menu!</p>\\n      <div class=\\\"menu-sandwichs\\\">\\n        <div><h3>Main Sandwiches</h3></div>\\n        <div class=\\\"menu-sandwichs-all\\\">\\n          <div>\\n            <div>Chicken Shawarma</div>\\n            <div>Price: $65</div>\\n            <img src=\\\"\".concat(__webpack_require__(/*! ./chiken.jpeg */ \"./src/chiken.jpeg\"), \"\\\" alt=\\\"Chicken Shawarma\\\">\\n          </div>\\n          <div>\\n            <div>Meat Shawarma</div>\\n            <div>Price: $80</div>\\n            <img src=\\\"\").concat(__webpack_require__(/*! ./meat.jpeg */ \"./src/meat.jpeg\"), \"\\\" alt=\\\"Meat Shawarma\\\">\\n          </div>\\n          <div>\\n            <div>Mix Shawarma</div>\\n            <div>Price: $75</div>\\n            <img src=\\\"\").concat(__webpack_require__(/*! ./mix.jpeg */ \"./src/mix.jpeg\"), \"\\\" alt=\\\"Mix Shawarma\\\">\\n          </div>\\n        </div>\\n      </div>\\n      <div class=\\\"menu-drinks\\\">\\n        <div><h3>Drinks</h3></div>\\n        <div class=\\\"menu-drinks-all\\\">\\n          <div>\\n            <div>Mineral Water</div>\\n            <div>Price: $10</div>\\n            <img src=\\\"\").concat(__webpack_require__(/*! ./bottel.jpeg */ \"./src/bottel.jpeg\"), \"\\\" alt=\\\"Mineral Water\\\">\\n          </div>\\n          <div>\\n            <div>V Cola</div>\\n            <div>Price: $25</div>\\n            <img src=\\\"\").concat(__webpack_require__(/*! ./V Cola.jpeg */ \"./src/V Cola.jpeg\"), \"\\\" alt=\\\"V Cola\\\">\\n          </div>\\n          <div>\\n            <div>Suntop</div>\\n            <div>Price: $15</div>\\n            <img src=\\\"\").concat(__webpack_require__(/*! ./suntop.jpeg */ \"./src/suntop.jpeg\"), \"\\\" alt=\\\"Suntop\\\">\\n          </div>\\n        </div>\\n      </div>\\n      <div class=\\\"menu-dessert\\\">\\n        <div><h3>Dessert</h3></div>\\n        <div class=\\\"menu-dessert-all\\\">\\n          <div>\\n            <div>Chocolate Cake</div>\\n            <div>Price: $35</div>\\n            <img src=\\\"\").concat(__webpack_require__(/*! ./chocolate.jpeg */ \"./src/chocolate.jpeg\"), \"\\\" alt=\\\"Chocolate Cake\\\">\\n          </div>\\n          <div>\\n            <div>Baklava</div>\\n            <div>Price: $25</div>\\n            <img src=\\\"\").concat(__webpack_require__(/*! ./baklava.jpeg */ \"./src/baklava.jpeg\"), \"\\\" alt=\\\"Baklava\\\">\\n          </div>\\n          <div>\\n            <div>Ice Cream</div>\\n            <div>Price: $20</div>\\n            <img src=\\\"\").concat(__webpack_require__(/*! ./icecream.jpeg */ \"./src/icecream.jpeg\"), \"\\\" alt=\\\"Ice Cream\\\">\\n          </div>\\n        </div>\\n      </div>\\n    </div>\\n    \");\n  } else {\n    console.error(\"Error: 'content' div not found.\");\n  }\n}\n\n//# sourceURL=webpack://restaurant-site/./src/menu.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./bg.jpg */ \"./src/bg.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* Apply a background image to the body */\r\nbody {\r\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n    background-size: cover;\r\n    background-position: center;\r\n    background-attachment: fixed; \r\n    font-family: monospace;\r\n    color: rgb(24, 49, 41);\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n  \r\n  /* Style the header */\r\n  header {\r\n    background-color: rgb(133, 121, 95);\r\n    padding: 50px;\r\n    text-align: center;\r\n  }\r\n  \r\n  header nav {\r\n    display: flex;\r\n    justify-content: center;\r\n  }\r\n  \r\n  header button {\r\n    background-color: rgb(136, 86, 21);\r\n    color: beige;\r\n    border: 2px solid black;\r\n    border-radius: 20%;\r\n    padding: 10px 25px;\r\n    margin: 0 20px;\r\n    font-size: 1rem;\r\n    cursor: pointer;\r\n    transition: 0.5s;\r\n  }\r\n  \r\n  header button:hover {\r\n    background-color: rgb(95, 79, 57);\r\n  }\r\n  \r\n  /* Style for the content area */\r\n  #content {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    padding: 20px;\r\n  }\r\n  \r\n  /* Style for the homepage */\r\n  .total-home {\r\n    background: rgb(133, 121, 95, 0.8);\r\n    padding: 20px;\r\n    border-radius: 10%;\r\n    text-align: center;\r\n  }\r\n  \r\n  .home-style {\r\n    margin: 0 auto;\r\n    max-width: 800px;\r\n    padding: 20px;\r\n  }\r\n  \r\n  .home-title h1 {\r\n    font-size: 2.5rem;\r\n    color: rgb(129, 60, 28);\r\n  }\r\n  \r\n  .home-logo img {\r\n    max-width: 100%;\r\n    height: auto;\r\n    border-radius: 40%;\r\n    border: 2px solid rgb(2, 2, 73);\r\n  }\r\n  \r\n  .home-slogan p {\r\n    font-size: 1.5rem;\r\n    margin: 20px 0;\r\n    color: black;\r\n  }\r\n  .get{\r\n    font-size: 1.4rem;\r\n    font-weight: 500;\r\n  }\r\n  \r\n  /* Style for the contact page */\r\n  .contact-style {\r\n    background: rgb(133, 121, 95, 0.8);\r\n    padding: 100px;\r\n    border-radius: 10%;\r\n    text-align: center;\r\n    max-width: 900px;\r\n    margin: 10px auto;\r\n    color: rgb(0, 0, 0);\r\n  } \r\n  \r\n  .contact-title h1 {\r\n    font-size: 2.5rem;\r\n    color: rgb(129, 60, 28);\r\n  }\r\n  \r\n  .contact-info {\r\n    margin-bottom: 20px;\r\n  }\r\n  \r\n  .contact-info p {\r\n    margin: 20px 0;\r\n    font-size: 20px;\r\n  }\r\n  \r\n  form {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n  \r\n  form label {\r\n    margin: 20px 0;\r\n    font-size: 20px;\r\n  }\r\n  \r\n  form input, \r\n  form textarea {\r\n    padding: 10px;\r\n    margin-bottom: 10px;\r\n    border: none;\r\n    border-radius: 7px;\r\n  }\r\n  \r\n  form button {\r\n    background-color: rgb(136, 86, 21);\r\n    color: white;\r\n    border: none;\r\n    border-radius: 10px;\r\n    padding: 15px;\r\n    font-size: 1rem;\r\n    cursor: pointer;\r\n    transition: 0.5s;\r\n  }\r\n  \r\n  form button:hover {\r\n    background-color: rgb(95, 79, 57);\r\n  }\r\n  \r\n  /* Style for the menu page */\r\n  .menu-style {\r\n    background-color: rgb(133, 121, 95, 0.8);\r\n    padding: 20px 150px ;\r\n    border-radius: 10px;\r\n    max-width: 900px;\r\n    margin: 20px auto;\r\n    color: white;\r\n  }\r\n  \r\n  .menu-title {\r\n    font-size: 2.5rem;\r\n    color: rgb(129, 60, 28);\r\n  }\r\n  \r\n  .menu-title h1 {\r\n    margin: 0;\r\n    font-size: 2.5rem;\r\n  }\r\n  \r\n  .menu-style p {\r\n    text-align: center;\r\n    font-size: 1.2rem;\r\n    margin: 10px 0;\r\n  }\r\n  \r\n  .menu-style h2 {\r\n    text-align: center;\r\n    margin-top: 20px;\r\n    font-size: 2rem;\r\n  }\r\n  \r\n  /* Grid layout for menu items */\r\n  .menu-sandwichs, .menu-drinks, .menu-dessert {\r\n    margin-top: 20px;\r\n  }\r\n  \r\n  .menu-sandwichs div, .menu-drinks div, .menu-dessert div {\r\n    margin: 10px 0;\r\n    font-size: 1rem;\r\n    text-align: center;\r\n  }\r\n  \r\n  .menu-sandwichs-all, .menu-drinks-all, .menu-dessert-all {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\r\n    gap: 20px;\r\n  }\r\n  \r\n  .menu-sandwichs-all div, .menu-drinks-all div, .menu-dessert-all div {\r\n    background: rgba(0, 0, 0, 0.7);\r\n    padding: 10px;\r\n    border-radius: 8px;\r\n    text-align: center;\r\n  }\r\n  \r\n  .menu-sandwichs-all img, .menu-drinks-all img, .menu-dessert-all img {\r\n    max-width: 100%;\r\n    height: auto;\r\n    border-radius: 8px;\r\n  }\r\n  .menu-sandwichs h3, .menu-drinks h3, .menu-dessert h3 {\r\n    margin: 10px 0;\r\n    font-size: 2rem;\r\n    text-align: center;\r\n    color: bisque;}\r\n\r\n  `, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-site/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-site/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-site/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-site/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-site/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-site/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-site/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-site/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-site/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-site/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-site/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/V Cola.jpeg":
/*!*************************!*\
  !*** ./src/V Cola.jpeg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8c718e1bc71e7cd268b4.jpeg\";\n\n//# sourceURL=webpack://restaurant-site/./src/V_Cola.jpeg?");

/***/ }),

/***/ "./src/baklava.jpeg":
/*!**************************!*\
  !*** ./src/baklava.jpeg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"012581e0404c344c2b20.jpeg\";\n\n//# sourceURL=webpack://restaurant-site/./src/baklava.jpeg?");

/***/ }),

/***/ "./src/bg.jpg":
/*!********************!*\
  !*** ./src/bg.jpg ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d6195a23a85ac925011f.jpg\";\n\n//# sourceURL=webpack://restaurant-site/./src/bg.jpg?");

/***/ }),

/***/ "./src/bottel.jpeg":
/*!*************************!*\
  !*** ./src/bottel.jpeg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2f5a375a6c5a60b75897.jpeg\";\n\n//# sourceURL=webpack://restaurant-site/./src/bottel.jpeg?");

/***/ }),

/***/ "./src/chiken.jpeg":
/*!*************************!*\
  !*** ./src/chiken.jpeg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"32e17705749dc71f3679.jpeg\";\n\n//# sourceURL=webpack://restaurant-site/./src/chiken.jpeg?");

/***/ }),

/***/ "./src/chocolate.jpeg":
/*!****************************!*\
  !*** ./src/chocolate.jpeg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"44426b8fad30be5c5c68.jpeg\";\n\n//# sourceURL=webpack://restaurant-site/./src/chocolate.jpeg?");

/***/ }),

/***/ "./src/icecream.jpeg":
/*!***************************!*\
  !*** ./src/icecream.jpeg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b8e3b54a3adcce113860.jpeg\";\n\n//# sourceURL=webpack://restaurant-site/./src/icecream.jpeg?");

/***/ }),

/***/ "./src/logo.png":
/*!**********************!*\
  !*** ./src/logo.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4cd8af6f35756ca2fefa.png\";\n\n//# sourceURL=webpack://restaurant-site/./src/logo.png?");

/***/ }),

/***/ "./src/meat.jpeg":
/*!***********************!*\
  !*** ./src/meat.jpeg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b914276f72481d4862d5.jpeg\";\n\n//# sourceURL=webpack://restaurant-site/./src/meat.jpeg?");

/***/ }),

/***/ "./src/mix.jpeg":
/*!**********************!*\
  !*** ./src/mix.jpeg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"57404d5742cfb3351954.jpeg\";\n\n//# sourceURL=webpack://restaurant-site/./src/mix.jpeg?");

/***/ }),

/***/ "./src/suntop.jpeg":
/*!*************************!*\
  !*** ./src/suntop.jpeg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"629791d0a027354b97b4.jpeg\";\n\n//# sourceURL=webpack://restaurant-site/./src/suntop.jpeg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;