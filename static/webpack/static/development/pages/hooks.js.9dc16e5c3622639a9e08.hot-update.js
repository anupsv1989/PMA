webpackHotUpdate("static\\development\\pages\\hooks.js",{

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
/* harmony import */ var _containers_arraysinhooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../containers/arraysinhooks */ "./containers/arraysinhooks.js");
var _jsxFileName = "D:\\RandDChamber\\LogwardPlugin\\ProjectManagement\\PMA\\pages\\hooksAsFunction.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function hooksAsFunction() {
  var initialVal = 0;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialVal),
      counterValue = _useState[0],
      incrementCounter = _useState[1]; //behaves as componentDidMount , DidUpdate & WillUnmount for functional components


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    document.title = "Title - " + counterValue;
  });

  var incrementBy5 = function incrementBy5() {
    for (var i = 0; i < 5; i++) {
      incrementCounter(function (prevVal) {
        return prevVal + 1;
      });
    } //this is not called when everytime the component is rendered


    document.title = "Title - " + counterValue;
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
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
      lineNumber: 34,
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
      lineNumber: 35,
      columnNumber: 13
    }
  }, "Counter -"), __jsx("button", {
    onClick: function onClick() {
      return incrementCounter(initialVal);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, "Counter 0"), __jsx("button", {
    onClick: incrementBy5,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, "Counter +5"), __jsx("button", {
    onClick: function onClick() {
      return incrementCounter(counterValue + 1);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, "Use Effect Demo"), __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, " ", counterValue, " "), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }), __jsx(_containers_objectsinHooks__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }), __jsx(_containers_arraysinhooks__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (hooksAsFunction);

/***/ })

})
//# sourceMappingURL=hooks.js.9dc16e5c3622639a9e08.hot-update.js.map