(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lazyload"],{

/***/ "./src/lazyload.js":
/*!*************************!*\
  !*** ./src/lazyload.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return lazyload; });\n/* harmony import */ var _newssourceComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newssourceComponent.js */ \"./src/newssourceComponent.js\");\n/* harmony import */ var _sourceFetch_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sourceFetch.js */ \"./src/sourceFetch.js\");\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config.json */ \"./src/config.json\");\nvar _config_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./config.json */ \"./src/config.json\", 1);\n/* harmony import */ var _errorHandler_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./errorHandler.js */ \"./src/errorHandler.js\");\n\n\n\n\nclass lazyload {\n  static constructingLoad() {\n    let articlesFetcher = new _newssourceComponent_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    const sourceSelectBox = document.getElementById(\"newsSource\");\n    sourceSelectBox.addEventListener(\"change\", event => {\n      let selectCurrentVal = _config_json__WEBPACK_IMPORTED_MODULE_2__.urlConstructor.sourceID = event.target.value;\n      let url = _config_json__WEBPACK_IMPORTED_MODULE_2__.urlConstructor[0].apiURL + _config_json__WEBPACK_IMPORTED_MODULE_2__.urlConstructor[1].articleSource + selectCurrentVal + _config_json__WEBPACK_IMPORTED_MODULE_2__.urlConstructor[3].apiKey;\n      articlesFetcher.get(url);\n    });\n  }\n\n}\n\n//# sourceURL=webpack:///./src/lazyload.js?");

/***/ })

}]);