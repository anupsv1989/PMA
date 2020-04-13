webpackHotUpdate("static\\development\\pages\\hooksAsFunction.js",{

/***/ "./pages/hooksAsFunction.js":
/*!**********************************!*\
  !*** ./pages/hooksAsFunction.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\RandDChamber\\LogwardPlugin\\ProjectManagement\\PMA\\pages\\hooksAsFunction.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function hooksAsFunction() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      counterValue = _useState[0],
      incrementCounter = _useState[1]; // incrementCounter() {
  //     counterValue = counterValue + 1;
  // }


  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, " Only here since this is a functional component - we can use hooks "), ">", __jsx("button", {
    onClick: function onClick() {
      return incrementCounter(counterValue + 1);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, " Count + "), __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, " ", counterValue, " "));
}

/* harmony default export */ __webpack_exports__["default"] = (hooksAsFunction);

/***/ })

})
//# sourceMappingURL=hooksAsFunction.js.060d74b535fcd3ebd719.hot-update.js.map