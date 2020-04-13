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

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("input", {
    type: "text",
    value: inputVal,
    onChange: function onChange(e) {
      return setInputVal(e.target.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }), __jsx("button", {
    onClick: setArrayValues(myArray.push(inputVal)),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, " Submit "), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, " The items in the array are "));
}

/* harmony default export */ __webpack_exports__["default"] = (ArraysinHooks);

/***/ }),

/***/ "./containers/objectsinHooks.js":
/*!**************************************!*\
  !*** ./containers/objectsinHooks.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _arraysinhooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./arraysinhooks */ "./containers/arraysinhooks.js");

var _jsxFileName = "D:\\RandDChamber\\LogwardPlugin\\ProjectManagement\\PMA\\containers\\objectsinHooks.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




function ObjectsinHooks() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    firstName: "",
    lastName: ""
  }),
      name = _useState[0],
      setName = _useState[1];

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, " Hooks demo using objects "), __jsx("input", {
    type: "text",
    value: name.firstName,
    onChange: function onChange(e) {
      return setName(_objectSpread({}, name, {
        firstName: e.target.value
      }));
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }), __jsx("input", {
    type: "text",
    value: name.lastName,
    onChange: function onChange(e) {
      return setName(_objectSpread({}, name, {
        lastName: e.target.value
      }));
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, "Firstname : ", name.firstName, " ---  LastName : ", name.lastName), __jsx(_arraysinhooks__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ObjectsinHooks);

/***/ })

})
//# sourceMappingURL=hooks.js.f312a032aab138a19434.hot-update.js.map