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
  var initialVal = 0;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialVal),
      counterValue = _useState[0],
      incrementCounter = _useState[1];

  var incrementBy5 = function incrementBy5() {
    console.log("Preval", prevVal);

    for (var i = 0; i < 5; i++) {
      incrementCounter(function (prevVal) {
        return prevVal + 1;
      });
    }

    console.log("Preval after", prevVal);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, " Only here since this is a functional component - we can use hooks "), ">", __jsx("button", {
    onClick: function onClick() {
      return incrementCounter(counterValue + 1);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, "Counter +"), __jsx("button", {
    onClick: function onClick() {
      return incrementCounter(counterValue - 1);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, "Counter -"), __jsx("button", {
    onClick: function onClick() {
      return incrementCounter(initialVal);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, "Counter 0"), __jsx("button", {
    onClick: incrementBy5,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, "Counter +5"), __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, " ", counterValue, " "));
}

/* harmony default export */ __webpack_exports__["default"] = (hooksAsFunction);

/***/ })

})
//# sourceMappingURL=hooksAsFunction.js.3dd3a68eb3a6ef08192f.hot-update.js.map