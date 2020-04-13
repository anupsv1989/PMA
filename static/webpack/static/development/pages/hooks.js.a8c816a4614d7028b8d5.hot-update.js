webpackHotUpdate("static\\development\\pages\\hooks.js",{

/***/ "./containers/objectsinHooks.js":
/*!**************************************!*\
  !*** ./containers/objectsinHooks.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\RandDChamber\\LogwardPlugin\\ProjectManagement\\PMA\\containers\\objectsinHooks.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function ObjectsinHooks() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    firstName: "",
    lastName: ""
  }),
      name = _useState[0],
      setName = _useState[1];

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("input", {
    type: "text",
    value: name.firstName,
    onChange: function onChange(e) {
      return setName({
        firstName: e.target.value
      });
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }), __jsx("input", {
    type: "text",
    value: name.lastName,
    onChange: function onChange(e) {
      return setName({
        lastName: e.target.value
      });
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, "Firstname : ", name.firstName, " ---  LastName : ", name.lastName));
}

/* harmony default export */ __webpack_exports__["default"] = (ObjectsinHooks);

/***/ }),

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
/* harmony import */ var _containers_objectsinHooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../containers/objectsinHooks */ "./containers/objectsinHooks.js");
var _jsxFileName = "D:\\RandDChamber\\LogwardPlugin\\ProjectManagement\\PMA\\pages\\hooksAsFunction.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function hooksAsFunction() {
  var initialVal = 0;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialVal),
      counterValue = _useState[0],
      incrementCounter = _useState[1];

  var incrementBy5 = function incrementBy5() {
    for (var i = 0; i < 5; i++) {
      incrementCounter(function (prevVal) {
        return prevVal + 1;
      });
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, " Only here since this is a functional component - we can use hooks "), ">", __jsx("button", {
    onClick: function onClick() {
      return incrementCounter(function (prevVal) {
        return prevVal + 1;
      });
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, "Counter +"), __jsx("button", {
    onClick: function onClick() {
      return incrementCounter(function (prevVal) {
        return prevVal - 1;
      });
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, "Counter -"), __jsx("button", {
    onClick: function onClick() {
      return incrementCounter(initialVal);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, "Counter 0"), __jsx("button", {
    onClick: incrementBy5,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, "Counter +5"), __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, " ", counterValue, " "), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }), __jsx(_containers_objectsinHooks__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (hooksAsFunction);

/***/ })

})
//# sourceMappingURL=hooks.js.a8c816a4614d7028b8d5.hot-update.js.map