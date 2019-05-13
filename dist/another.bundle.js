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
/******/ 			if(installedChunks[chunkId]) {
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
/******/ 		"another": 0
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
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
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
/******/ 	deferredModules.push(["./src/lazyload.js","vendors~another~index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/styles/main.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/styles/main.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"html, body {\\n  font-family: \\\"arial\\\", \\\"sans-serif\\\";\\n  font-size: 14px;\\n  margin: 0;\\n  height: 100%; }\\n\\n.newsContainer {\\n  width: 80%;\\n  margin: 0 auto;\\n  height: auto; }\\n  .newsContainer h1 {\\n    font-size: 2.6em;\\n    color: #4674a5; }\\n\\n.imageContainer {\\n  width: 100%;\\n  margin: 20px 0; }\\n  .imageContainer img {\\n    width: 100%; }\\n\\n.newsTitle {\\n  margin: 10px 0;\\n  font-size: 18px;\\n  font-weight: bold; }\\n\\n.publishDate {\\n  font-size: 10px;\\n  color: \\\"#7d7b7b\\\";\\n  margin: 11px 0; }\\n\\n#newsSourceBtn {\\n  padding: 10px 18px;\\n  background-color: #008cff;\\n  color: #FFF;\\n  border: 1px solid #0350ab;\\n  border-radius: 9px;\\n  font-size: 14px; }\\n\\n#newsSource {\\n  padding: 10px;\\n  border-radius: 10px;\\n  border: 1px solid #ccc;\\n  font-size: 14px;\\n  width: 300px;\\n  margin: 0 auto;\\n  display: block; }\\n\\n.header {\\n  background-color: #7cc1f9;\\n  height: 87px;\\n  padding: 40px 0 0 0; }\\n\\n#newsDetails {\\n  height: 100%;\\n  display: block;\\n  border: 1px solid #CCC;\\n  max-height: 100%;\\n  padding: 0 20px; }\\n\\n@media only screen and (min-width: 400px) and (max-width: 768px) {\\n  .newsContainer {\\n    width: 90%; } }\\n\\n.errorPopupClass {\\n  width: 400px;\\n  height: 150px;\\n  position: absolute;\\n  left: 33%;\\n  top: 30%;\\n  border: 1px solid #CCC;\\n  z-index: 999;\\n  background-color: #FFF;\\n  border-radius: 10px;\\n  padding: 20px; }\\n\\n.close {\\n  position: absolute;\\n  right: 10px;\\n  top: 10px;\\n  color: #000;\\n  cursor: pointer;\\n  font-size: 20px; }\\n\\n#shadowPopup {\\n  position: absolute;\\n  height: 100%;\\n  width: 100%;\\n  background: #000;\\n  top: 0;\\n  left: 0;\\n  opacity: 0.3; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/styles/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./src/SourceFetchService.js":
/*!***********************************!*\
  !*** ./src/SourceFetchService.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n/* harmony import */ var _newssourceComponent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newssourceComponent.js */ \"./src/newssourceComponent.js\");\n/* harmony import */ var _sourceFetch_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sourceFetch.js */ \"./src/sourceFetch.js\");\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config.json */ \"./src/config.json\");\nvar _config_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./config.json */ \"./src/config.json\", 1);\n/* harmony import */ var _errorHandler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./errorHandler.js */ \"./src/errorHandler.js\");\n\n\n\n\n\n\nclass intilizerClass {\n  run() {\n    const newsBtn = document.getElementById(\"newsSource\");\n    newsBtn.addEventListener(\"change\", () => {\n      _errorHandler_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].getInstance();\n    });\n  }\n\n}\n\nlet IntilizerClass = new intilizerClass();\n/* harmony default export */ __webpack_exports__[\"default\"] = (IntilizerClass);\n\n//# sourceURL=webpack:///./src/SourceFetchService.js?");

/***/ }),

/***/ "./src/config.json":
/*!*************************!*\
  !*** ./src/config.json ***!
  \*************************/
/*! exports provided: urlConstructor, default */
/***/ (function(module) {

eval("module.exports = {\"urlConstructor\":[{\"apiURL\":\"https://newsapi.org/v1/\"},{\"articleSource\":\"articles?source=\"},{\"sourceID\":\"bbc-news\"},{\"apiKey\":\"&apiKey=720c0314e8b2423eb7e1ffca5a1eeeb1\"},{\"apiSources\":\"sources?apiKey=\"}]};\n\n//# sourceURL=webpack:///./src/config.json?");

/***/ }),

/***/ "./src/errorHandler.js":
/*!*****************************!*\
  !*** ./src/errorHandler.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ErrorPopup; });\n/* harmony import */ var _sourceFetch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sourceFetch.js */ \"./src/sourceFetch.js\");\n\nclass ErrorPopup {\n  open(error) {\n    let errorPopup = document.getElementById(\"errorPopup\");\n\n    if (!errorPopup) {\n      let createDiv = document.createElement(\"div\");\n      let createDivShadow = document.createElement(\"div\");\n      createDivShadow.setAttribute(\"id\", \"shadowPopup\");\n      createDiv.setAttribute(\"id\", \"errorPopup\");\n      createDiv.setAttribute(\"class\", \"errorPopupClass open\");\n      let createSpan = document.createElement(\"span\");\n      createSpan.setAttribute(\"class\", \"close\");\n      createSpan.setAttribute(\"id\", \"closePopup\");\n      createSpan.innerText = \"X\";\n      document.getElementsByTagName(\"body\")[0].appendChild(createDivShadow);\n      document.getElementsByTagName(\"body\")[0].appendChild(createDiv);\n      let getId = document.getElementById(\"errorPopup\");\n      getId.innerText = error.message;\n      getId.appendChild(createSpan);\n      errorPopupHandler.closePopup();\n    }\n  }\n\n  static close() {\n    const closePopup = document.getElementById(\"closePopup\");\n    const getIdErroPopup = document.getElementById(\"errorPopup\");\n    let createDivShadow = document.getElementById(\"shadowPopup\");\n    closePopup.addEventListener(\"click\", () => {\n      getIdErroPopup.remove();\n      createDivShadow.remove();\n    });\n  }\n\n  static getInstance() {\n    __webpack_require__.e(/*! import() | lazyload */ \"lazyload\").then(__webpack_require__.bind(null, /*! ./lazyload.js */ \"./src/lazyload.js\")).then(module => {\n      const constructingLoad = module.default;\n      constructingLoad.constructingLoad();\n    }).catch(function (error) {\n      ErrorPopupHandler.openPopup(error);\n    });\n  }\n\n}\nconst ErrorPopupHandler = new errorPopupHandler();\n\n//# sourceURL=webpack:///./src/errorHandler.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ \"./src/styles/main.scss\");\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config.json */ \"./src/config.json\");\nvar _config_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./config.json */ \"./src/config.json\", 1);\n/* harmony import */ var _sourceFetch_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sourceFetch.js */ \"./src/sourceFetch.js\");\n\n\n\nlet httpurl = `${_config_json__WEBPACK_IMPORTED_MODULE_1__.urlConstructor[0].apiURL}${_config_json__WEBPACK_IMPORTED_MODULE_1__.urlConstructor[4].apiSources}${_config_json__WEBPACK_IMPORTED_MODULE_1__.urlConstructor[3].apiKey}`;\nvar handler = {\n  get: function (obj, prop) {\n    if (prop === \"get\") {\n      const innerCall = new Proxy(obj, {\n        apply: function (target, thisarg, args) {\n          target.fetch(...args);\n        }\n      });\n      innerCall(httpurl);\n    }\n  }\n};\nvar proxy = new Proxy(_sourceFetch_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], handler);\nproxy.get = \"get\";\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/lazyload.js":
/*!*************************!*\
  !*** ./src/lazyload.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return lazyload; });\n/* harmony import */ var _newssourceComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newssourceComponent.js */ \"./src/newssourceComponent.js\");\n/* harmony import */ var _sourceFetch_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sourceFetch.js */ \"./src/sourceFetch.js\");\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config.json */ \"./src/config.json\");\nvar _config_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./config.json */ \"./src/config.json\", 1);\n/* harmony import */ var _errorHandler_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./errorHandler.js */ \"./src/errorHandler.js\");\n\n\n\n\nclass lazyload {\n  static constructingLoad() {\n    let articlesFetcher = new _newssourceComponent_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    const sourceSelectBox = document.getElementById(\"newsSource\");\n    sourceSelectBox.addEventListener(\"change\", event => {\n      let selectCurrentVal = _config_json__WEBPACK_IMPORTED_MODULE_2__.urlConstructor.sourceID = event.target.value;\n      let url = _config_json__WEBPACK_IMPORTED_MODULE_2__.urlConstructor[0].apiURL + _config_json__WEBPACK_IMPORTED_MODULE_2__.urlConstructor[1].articleSource + selectCurrentVal + _config_json__WEBPACK_IMPORTED_MODULE_2__.urlConstructor[3].apiKey;\n      articlesFetcher.get(url);\n    });\n  }\n\n}\n\n//# sourceURL=webpack:///./src/lazyload.js?");

/***/ }),

/***/ "./src/newssourceComponent.js":
/*!************************************!*\
  !*** ./src/newssourceComponent.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ArticlesFetcher; });\n/* harmony import */ var _errorHandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errorHandler.js */ \"./src/errorHandler.js\");\n\nclass ArticlesFetcher {\n  async get(url) {\n    try {\n      let response = await fetch(url);\n\n      if (response.status === 200) {\n        const data = await response.json();\n        ArticlesFetcher.NewssourceComponent(data);\n      } else {\n        await new _errorHandler_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]().openPopup();\n      }\n    } catch (error) {\n      new _errorHandler_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]().openPopup(error);\n    }\n  }\n\n  static NewssourceComponent(data) {\n    const elementId = document.getElementById(\"newsDetails\");\n    let returnHtml = \"\",\n        uniqueVal = [];\n    data.articles.map(({\n      author,\n      title,\n      description,\n      publishedAt,\n      url,\n      urlToImage\n    }, index) => {\n      uniqueVal = index === 0 ? `<h1>${author}</h1>` : \"\";\n      returnHtml += `${uniqueVal}<div class=\"newsTitle\">${title}</div><div class=\"newsDescription\">${description}</div><div class=\"publishDate\">${publishedAt}</div><div class=\"imageContainer\"><a href=\"${url}\" target=\"_blank\"><img class =\"imageLazy\" src=${urlToImage} /></a></div>`;\n    });\n    elementId.innerHTML = returnHtml;\n  }\n\n}\n\n//# sourceURL=webpack:///./src/newssourceComponent.js?");

/***/ }),

/***/ "./src/sourceFetch.js":
/*!****************************!*\
  !*** ./src/sourceFetch.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SourceFetcher; });\n/* harmony import */ var _errorHandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errorHandler.js */ \"./src/errorHandler.js\");\n/* harmony import */ var _SourceFetchService_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SourceFetchService.js */ \"./src/SourceFetchService.js\");\n\n\nclass SourceFetcher {\n  constructor() {\n    this.data;\n  }\n\n  static async fetch(url) {\n    try {\n      let response = await fetch(url);\n\n      if (response.status === 200) {\n        this.data = await response.json();\n        SourceFetcher.NewssourceSelectComponent(this.data);\n        _SourceFetchService_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].run();\n      } else {\n        await Object(_errorHandler_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().openPopup();\n      }\n    } catch (error) {\n      Object(_errorHandler_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().openPopup(error);\n    }\n  }\n\n  static NewssourceSelectComponent(data) {\n    const sourceSelectBox = document.getElementById(\"newsSource\");\n    data.sources.map(({\n      id\n    }, index) => {\n      const selectOptions = document.createElement(\"option\");\n      selectOptions[index] += selectOptions.text = id;\n      sourceSelectBox.appendChild(selectOptions);\n    });\n  }\n\n}\n\n//# sourceURL=webpack:///./src/sourceFetch.js?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/styles/main.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/styles/main.scss?");

/***/ })

/******/ });