webpackHotUpdate("static\\development\\pages\\hooks.js",{

/***/ "./containers/arraysinhooks.js":
/*!*************************************!*\
  !*** ./containers/arraysinhooks.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\RandDChamber\\LogwardPlugin\\ProjectManagement\\PMA\\containers\\arraysinhooks.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function ArraysinHooks() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      inputVal = _useState[0],
      setInputVal = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(["a", "b", "c", "d"]),
      myArray = _useState2[0],
      setArrayValues = _useState2[1];

  consoleVal = function consoleVal() {
    console.log("The value in the arrya", inputVal);
    console.log("The value in the arrya () ", setInputVal);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("input", {
    type: "text",
    value: inputVal,
    onChange: function onChange(e) {
      return setInputVal(e.target.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }), __jsx("button", {
    onClick: consoleVal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, " Submit "), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, " The items in the array are "));
}

/* harmony default export */ __webpack_exports__["default"] = (ArraysinHooks);

/***/ })

})
//# sourceMappingURL=hooks.js.9e5c0d8aa6ed7fda4c3f.hot-update.js.map