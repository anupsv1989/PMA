module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./commons/helpers.js":
/*!****************************!*\
  !*** ./commons/helpers.js ***!
  \****************************/
/*! exports provided: dateFormat, statusDisplay, progressDisplay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateFormat", function() { return dateFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "statusDisplay", function() { return statusDisplay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "progressDisplay", function() { return progressDisplay; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\RandDChamber\\LogwardAssignment\\ProjectManagement\\PMA\\commons\\helpers.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const dateFormat = "DD-MM-YYYY"; // returns color codes for status

const statusDisplay = rec => {
  switch (rec) {
    case "UNRELEASED":
      return __jsx("div", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 17
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Tag"], {
        color: "magenta",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 21
        }
      }, rec));
      break;

    case "RELEASED":
      return __jsx("div", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 17
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Tag"], {
        color: "green",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }
      }, rec));

    case "IN PROGRESS":
      return __jsx("div", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 17
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Tag"], {
        color: "blue",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 21
        }
      }, rec));
  }
}; // returns progress bar

const progressDisplay = rec => {
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
    strokeColor: {
      '0%': '#108ee9',
      '100%': '#87d068'
    },
    percent: rec,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  });
};

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\RandDChamber\\LogwardAssignment\\ProjectManagement\\PMA\\components\\Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const linkStyle = {
  marginRight: 15
};

const Header = () => __jsx("div", {
  className: "menuStyle",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }
}, __jsx("a", {
  style: linkStyle,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 13
  }
}, "Home")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/about",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }
}, __jsx("a", {
  style: linkStyle,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 13
  }
}, "About")));

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/MyLayout.js":
/*!********************************!*\
  !*** ./components/MyLayout.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
var _jsxFileName = "D:\\RandDChamber\\LogwardAssignment\\ProjectManagement\\PMA\\components\\MyLayout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const layoutStyle = {
  margin: 20,
  padding: 20
};

const Layout = props => __jsx("div", {
  style: layoutStyle,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }
}, props.children);

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./containers/ChildReleaseList.js":
/*!****************************************!*\
  !*** ./containers/ChildReleaseList.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChildReleaseList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _commons_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../commons/helpers */ "./commons/helpers.js");
var _jsxFileName = "D:\\RandDChamber\\LogwardAssignment\\ProjectManagement\\PMA\\containers\\ChildReleaseList.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





 // Items for child release listing
// Expects - props from parent - callback method to call on save

class ChildReleaseList extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "isEditing", record => record.key === this.state.editingKey);

    _defineProperty(this, "EditableCell", (_ref) => {
      let {
        editing,
        dataIndex,
        title,
        inputType,
        record,
        index,
        children
      } = _ref,
          restProps = _objectWithoutProperties(_ref, ["editing", "dataIndex", "title", "inputType", "record", "index", "children"]);

      let inputNode;

      switch (dataIndex) {
        case "version":
          inputNode = __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
            defaultValue: record.version,
            name: "version",
            onChange: this.handleVersion,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 29
            }
          });
          break;

        case "startDate":
          inputNode = __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["DatePicker"], {
            name: "startDate",
            defaultValue: moment__WEBPACK_IMPORTED_MODULE_2___default()(record.startDate, _commons_helpers__WEBPACK_IMPORTED_MODULE_4__["dateFormat"]),
            onChange: this.handleStartDate,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 29
            }
          });
          break;

        case "endDate":
          inputNode = __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["DatePicker"], {
            name: "endDate",
            defaultValue: moment__WEBPACK_IMPORTED_MODULE_2___default()(record.endDate, _commons_helpers__WEBPACK_IMPORTED_MODULE_4__["dateFormat"]),
            onChange: this.handleEndDate,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 29
            }
          });
          break;

        case "description":
          inputNode = __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
            defaultValue: record.description,
            onChange: this.handleDescription,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 29
            }
          });
          break;

        case "status":
          inputNode = Object(_commons_helpers__WEBPACK_IMPORTED_MODULE_4__["statusDisplay"])(this.state.editStatus); // inputNode = this.fetchStatusDisp(record.status);

          break;

        case "progress":
          inputNode = __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Slider"], {
            defaultValue: record.progress ? record.progress : 0,
            tooltipVisible: true,
            name: "progress",
            onChange: this.handleSlider,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 29
            }
          });
          break;
      }

      return __jsx("td", _extends({}, restProps, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 13
        }
      }), editing ? __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
        name: record.key + "__" + dataIndex,
        style: {
          margin: 0
        },
        rules: [{
          required: true,
          message: `Please Input ${title}!`
        }],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 25
        }
      }, inputNode) : children); // }
    });

    _defineProperty(this, "handleChange", value => {
      console.log("Vlaue", value);
      this.setState({
        editStatus: value
      });
    });

    _defineProperty(this, "handleSlider", value => {
      let releaseType = "IN PROGRESS";

      if (value == 0) {
        releaseType = "IN PROGRESS";
      } else if (value == 100) {
        releaseType = "RELEASED";
      } else {
        releaseType = "UNRELEASED";
      }

      this.setState({
        editProgress: value,
        editStatus: releaseType
      });
    });

    _defineProperty(this, "handleStartDate", (date, str) => {
      this.setState({
        editstartDate: str
      });
    });

    _defineProperty(this, "handleEndDate", (date, str) => {
      this.setState({
        editEndDate: str
      });
    });

    _defineProperty(this, "handleDescription", e => {
      this.setState({
        editDescription: e.target.value
      });
    });

    _defineProperty(this, "cancel", () => {
      this.setState({
        editingKey: ''
      });
    });

    this.state = {
      editStatus: "IN PROGRESS",
      editingKey: '',
      editProgress: "",
      editstartDate: "",
      editEndDate: "",
      editDescription: "",
      childColumns: [{
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        editable: true,
        render: rec => Object(_commons_helpers__WEBPACK_IMPORTED_MODULE_4__["statusDisplay"])(rec)
      }, {
        title: 'Progess',
        dataIndex: 'progress',
        key: 'progress',
        editable: true,
        render: rec => Object(_commons_helpers__WEBPACK_IMPORTED_MODULE_4__["progressDisplay"])(rec)
      }, {
        title: 'Start Date',
        dataIndex: 'startDate',
        key: 'startDate',
        editable: true
      }, {
        title: 'End Date',
        dataIndex: 'endDate',
        key: 'endDate',
        editable: true
      }, {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
        editable: true
      }, {
        title: 'Action',
        key: 'action',
        render: (text, record) => {
          const editable = this.isEditing(record);
          return editable ? __jsx("span", {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 29
            }
          }, __jsx("a", {
            href: "javascript:;",
            onClick: () => this.save(record),
            style: {
              marginRight: 8
            },
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 33
            }
          }, "Save"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popconfirm"], {
            title: "Sure to cancel?",
            onConfirm: this.cancel,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 33
            }
          }, __jsx("a", {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 37
            }
          }, "Cancel"))) : __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["EditOutlined"], {
            disabled: this.state.editingKey !== '',
            onClick: () => this.edit(record),
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 33
            }
          });
        }
      }]
    };
  }

  save(record) {
    let {
      editstartDate,
      editEndDate,
      editDescription,
      editStatus,
      editProgress
    } = this.state;
    let temp = this.props.thisData;
    temp.childRelease.map(item => {
      if (item.key == record.key) {
        item.key = record.key;
        item.status = editStatus;
        item.progress = editProgress;
        item.startDate = editstartDate;
        item.endDate = editEndDate;
        item.description = editDescription;
      }
    });
    let arr = JSON.parse(localStorage.getItem("parentReleaseData"));
    let index = arr.map(x => {
      return x.key;
    }).indexOf(temp.key);
    arr.splice(index, 1);
    let addData = temp;
    arr.unshift(addData); // debugger;

    localStorage.setItem('parentReleaseData', JSON.stringify(arr));
    this.setState({
      editingKey: "",
      editStatus: "",
      editProgress: "",
      editstartDate: "",
      editEndDate: "",
      editDescription: ""
    });
    this.props.refreshCallBack();
  }

  componentWillReceiveProps(nextProps) {
    let {
      dataFromLS
    } = nextProps;

    if (dataFromLS) {
      this.setState({
        listDataSrc: dataFromLS,
        editingKey: ""
      });
    }
  }

  edit(record) {
    this.setState({
      editingKey: record.key,
      editStatus: record.status,
      editProgress: record.progress,
      editstartDate: record.startDate,
      editEndDate: record.endDate,
      editDescription: record.description
    });
  }

  render() {
    const components = {
      body: {
        cell: this.EditableCell
      }
    };
    const columns = this.state.childColumns.map(col => {
      if (!col.editable) {
        return col;
      }

      return _objectSpread({}, col, {
        onCell: record => ({
          record,
          inputType: col.dataIndex,
          dataIndex: col.dataIndex,
          title: col.title,
          editing: this.isEditing(record)
        })
      });
    });
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Table"], {
      columns: columns,
      dataSource: this.props.thisData.childRelease,
      pagination: false,
      components: components,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 288,
        columnNumber: 13
      }
    });
  }

}

/***/ }),

/***/ "./containers/addChildRelease.js":
/*!***************************************!*\
  !*** ./containers/addChildRelease.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddChildRelease; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _commons_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../commons/helpers */ "./commons/helpers.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\RandDChamber\\LogwardAssignment\\ProjectManagement\\PMA\\containers\\addChildRelease.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16
  }
}; // To add items for child / expandables release listing
// Expects - props from parent - callback method to call on save

class AddChildRelease extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "onFinish", values => {
      let {
        thisData,
        dbData
      } = this.props;
      let defDate = new Date();
      let arr = dbData;
      arr.map(item => {
        if (item.key == thisData.key) {
          let temp = {
            key: "cr" + new Date().getTime(),
            status: values.status,
            startDate: values['startDate'] ? values['startDate'].format(_commons_helpers__WEBPACK_IMPORTED_MODULE_2__["dateFormat"]) : moment__WEBPACK_IMPORTED_MODULE_3___default()(defDate).format(_commons_helpers__WEBPACK_IMPORTED_MODULE_2__["dateFormat"]),
            endDate: values['endDate'] ? values['endDate'].format(_commons_helpers__WEBPACK_IMPORTED_MODULE_2__["dateFormat"]) : moment__WEBPACK_IMPORTED_MODULE_3___default()(defDate).format(_commons_helpers__WEBPACK_IMPORTED_MODULE_2__["dateFormat"]),
            description: values.description,
            progress: values.progress
          };
          item.childRelease.push(temp);
        }
      });
      localStorage.setItem("parentReleaseData", JSON.stringify(arr));
      this.props.refreshCallBack();
      this.props.closeModal();
    });

    this.state = {
      localPRItems: []
    };
  }

  componentDidMount() {
    let chkItem = JSON.parse(localStorage.getItem("parentReleaseData"));
    let getItems = chkItem == null ? [] : chkItem;
    this.setState({
      localPRItems: getItems
    });
  }

  render() {
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 13
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
      name: "basic",
      initialValues: {
        remember: true
      },
      onFinish: this.onFinish,
      onFinishFailed: this.onFinishFailed,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 17
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 21
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      span: 8,
      className: "left-addCol",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 25
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      label: "Status",
      name: "status",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 29
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
      name: "status",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 33
      }
    }, __jsx(Option, {
      value: "IN PROGRESS",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 37
      }
    }, "In Progress"), __jsx(Option, {
      value: "UNRELEASED",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 37
      }
    }, "Unreleased"), __jsx(Option, {
      value: "RELEASED",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 37
      }
    }, "Released")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      span: 6,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 25
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      label: "Start Date",
      name: "startDate",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 29
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["DatePicker"], {
      defaultValue: moment__WEBPACK_IMPORTED_MODULE_3___default()(new Date(), _commons_helpers__WEBPACK_IMPORTED_MODULE_2__["dateFormat"]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 33
      }
    }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      span: 6,
      className: "enddate-align",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 25
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      label: "End Date",
      name: "endDate",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 29
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["DatePicker"], {
      defaultValue: moment__WEBPACK_IMPORTED_MODULE_3___default()(new Date(), _commons_helpers__WEBPACK_IMPORTED_MODULE_2__["dateFormat"]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 33
      }
    })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 21
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      span: 8,
      className: "left-addCol",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 25
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      label: "Progress",
      name: "progress",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 29
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Slider"], {
      defaultValue: 0,
      tooltipPlacement: "bottom",
      name: "progress",
      onChange: this.handleSlider,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 33
      }
    }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      span: 14,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 25
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      label: "Description",
      name: "description",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 29
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 33
      }
    })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 21
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      span: 24,
      className: "btn-add-child",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 25
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, _extends({}, tailLayout, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 29
      }
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      type: "primary",
      htmlType: "submit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 33
      }
    }, "Submit"))))));
  }

}

/***/ }),

/***/ "./containers/addParentRelease.js":
/*!****************************************!*\
  !*** ./containers/addParentRelease.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddParentRelease; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _commons_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../commons/helpers */ "./commons/helpers.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\RandDChamber\\LogwardAssignment\\ProjectManagement\\PMA\\containers\\addParentRelease.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16
  }
}; // To add items for main release listing
// Expects - props from parent - callback method to call on save

class AddParentRelease extends react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "onFinish", values => {
      let defDate = new Date();
      let arr = this.state.localPRItems;
      let prObj = {
        key: new Date().getTime(),
        version: values.version,
        status: "",
        progress: 0,
        startDate: values['startDate'] ? values['startDate'].format(_commons_helpers__WEBPACK_IMPORTED_MODULE_2__["dateFormat"]) : moment__WEBPACK_IMPORTED_MODULE_3___default()(defDate).format(_commons_helpers__WEBPACK_IMPORTED_MODULE_2__["dateFormat"]),
        endDate: values['endDate'] ? values['endDate'].format(_commons_helpers__WEBPACK_IMPORTED_MODULE_2__["dateFormat"]) : moment__WEBPACK_IMPORTED_MODULE_3___default()(defDate).format(_commons_helpers__WEBPACK_IMPORTED_MODULE_2__["dateFormat"]),
        description: values.description,
        childRelease: []
      };
      arr.push(prObj);
      localStorage.setItem("parentReleaseData", JSON.stringify(arr));
      this.props.refreshCallBack();
    });

    this.state = {
      localPRItems: []
    };
  }

  componentDidMount() {
    let chkItem = JSON.parse(localStorage.getItem("parentReleaseData"));
    let getItems = chkItem == null ? [] : chkItem;
    this.setState({
      localPRItems: getItems
    });
  }

  render() {
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 13
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
      name: "basic",
      initialValues: {
        remember: false
      },
      onFinish: this.onFinish,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "parent-release-sec",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 21
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 25
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      span: 5,
      className: "parent-release-sec-col",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 29
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      label: "Version",
      name: "version",
      rules: [{
        required: true,
        message: 'Please input your version!'
      }],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 33
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 37
      }
    }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      span: 4,
      className: "parent-release-sec-col",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 29
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      label: "Start Date",
      name: "startDate",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 33
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["DatePicker"], {
      defaultValue: moment__WEBPACK_IMPORTED_MODULE_3___default()(new Date(), _commons_helpers__WEBPACK_IMPORTED_MODULE_2__["dateFormat"]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 37
      }
    }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      span: 4,
      className: "parent-release-sec-col",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 29
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      label: "Release Date",
      name: "endDate",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 33
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["DatePicker"], {
      defaultValue: moment__WEBPACK_IMPORTED_MODULE_3___default()(new Date(), _commons_helpers__WEBPACK_IMPORTED_MODULE_2__["dateFormat"]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 37
      }
    }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      span: 5,
      className: "parent-release-sec-col",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 29
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      label: "Description",
      name: "description",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 33
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 37
      }
    }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      span: 4,
      className: "parent-release-sec-col",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 29
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, _extends({}, tailLayout, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 33
      }
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      type: "primary",
      htmlType: "submit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 37
      }
    }, "Submit")))))));
  }

}

/***/ }),

/***/ "./containers/parentReleaseList.js":
/*!*****************************************!*\
  !*** ./containers/parentReleaseList.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _addParentRelease__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addParentRelease */ "./containers/addParentRelease.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _addChildRelease__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addChildRelease */ "./containers/addChildRelease.js");
/* harmony import */ var _ChildReleaseList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ChildReleaseList */ "./containers/ChildReleaseList.js");
/* harmony import */ var _redux_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/action */ "./redux/action.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _commons_helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../commons/helpers */ "./commons/helpers.js");
var _jsxFileName = "D:\\RandDChamber\\LogwardAssignment\\ProjectManagement\\PMA\\containers\\parentReleaseList.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const {
  onFetchItem
} = _redux_action__WEBPACK_IMPORTED_MODULE_6__["default"]; // Main release listing page
// Expects - redux for listing object
// Caters other components and passes props such as data and redux methods

class ReleaseList extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "addChildItem", rec => {
      this.setState({
        modalVisible: true,
        currentRecord: rec
      });
    });

    _defineProperty(this, "deleteItem", rec => {
      let arr = JSON.parse(localStorage.getItem("parentReleaseData"));
      let index = arr.map(x => {
        return x.key;
      }).indexOf(rec.key);
      arr.splice(index, 1);
      localStorage.setItem('parentReleaseData', JSON.stringify(arr));
      this.fetchItem();
    });

    _defineProperty(this, "EditableCell", (_ref) => {
      let {
        editing,
        dataIndex,
        title,
        inputType,
        record,
        index,
        children
      } = _ref,
          restProps = _objectWithoutProperties(_ref, ["editing", "dataIndex", "title", "inputType", "record", "index", "children"]);

      let inputNode;

      switch (dataIndex) {
        case "version":
          inputNode = __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
            defaultValue: record.version,
            name: "version",
            onChange: e => this.handleVersionDesc(e, "editVersion"),
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 176,
              columnNumber: 29
            }
          });
          break;

        case "startDate":
          inputNode = __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["DatePicker"], {
            name: "startDate",
            defaultValue: moment__WEBPACK_IMPORTED_MODULE_3___default()(record.startDate, _commons_helpers__WEBPACK_IMPORTED_MODULE_9__["dateFormat"]),
            onChange: this.handleStartDate,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 179,
              columnNumber: 29
            }
          });
          break;

        case "endDate":
          inputNode = __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["DatePicker"], {
            name: "endDate",
            defaultValue: moment__WEBPACK_IMPORTED_MODULE_3___default()(record.endDate, _commons_helpers__WEBPACK_IMPORTED_MODULE_9__["dateFormat"]),
            onChange: this.handleEndDate,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 182,
              columnNumber: 29
            }
          });
          break;

        case "description":
          inputNode = __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
            defaultValue: record.description,
            onChange: e => this.handleVersionDesc(e, "editDescription"),
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 186,
              columnNumber: 29
            }
          });
          break;

        case "status":
          inputNode = __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
            style: {
              width: 120
            },
            name: "status",
            defaultValue: this.state.editStatus,
            onChange: e => this.handleSelectSlider(e, "editStatus"),
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 190,
              columnNumber: 21
            }
          }, __jsx(Option, {
            value: "IN PROGRESS",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 191,
              columnNumber: 25
            }
          }, "In Progress"), __jsx(Option, {
            value: "UNRELEASED",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 192,
              columnNumber: 25
            }
          }, "Unreleased"), __jsx(Option, {
            value: "RELEASED",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 193,
              columnNumber: 25
            }
          }, "Released"));
          break;

        case "progress":
          inputNode = __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Slider"], {
            defaultValue: this.state.editProgress == "" ? 0 : this.state.editProgress,
            tooltipVisible: true,
            name: "progress",
            onChange: e => this.handleSelectSlider(e, "editProgress"),
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 197,
              columnNumber: 29
            }
          });
          break;
      }

      return __jsx("td", _extends({}, restProps, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 13
        }
      }), editing ? __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
        name: record.key + "_" + dataIndex,
        style: {
          margin: 0
        },
        rules: [{
          required: true,
          message: `Please Input ${title}!`
        }],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 25
        }
      }, inputNode) : children);
    });

    _defineProperty(this, "handleSelectSlider", (value, type) => {
      this.setState({
        [type]: value
      });
    });

    _defineProperty(this, "handleVersionDesc", (e, type) => {
      this.setState({
        [type]: e.target.value
      });
    });

    _defineProperty(this, "handleStartDate", (date, str) => {
      this.setState({
        editstartDate: str
      });
    });

    _defineProperty(this, "handleEndDate", (date, str) => {
      this.setState({
        editEndDate: str
      });
    });

    _defineProperty(this, "isEditing", record => record.key === this.state.editingKey);

    _defineProperty(this, "cancel", () => {
      this.setState({
        editingKey: ''
      });
    });

    _defineProperty(this, "handleCancel", () => {
      this.setState({
        modalVisible: false
      });
    });

    _defineProperty(this, "handleOk", () => {
      this.setState({
        modalVisible: false
      });
    });

    _defineProperty(this, "fetchItem", () => {
      console.log("on fetch item call back");
      this.props.onFetchItem();
    });

    let _this = this;

    this.state = {
      editingKey: '',
      editVersion: "",
      editStatus: "",
      editProgress: 0,
      editstartDate: "",
      editEndDate: "",
      editDescription: "",
      modalVisible: false,
      currentRecord: {},
      columns: [{
        title: 'Version No',
        dataIndex: 'version',
        key: 'version',
        render: text => __jsx("a", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 37
          }
        }, text),
        editable: true
      }, {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        editable: true,
        render: rec => Object(_commons_helpers__WEBPACK_IMPORTED_MODULE_9__["statusDisplay"])(rec)
      }, {
        title: 'Progress',
        dataIndex: 'progress',
        key: 'progress',
        editable: true,
        render: rec => Object(_commons_helpers__WEBPACK_IMPORTED_MODULE_9__["progressDisplay"])(rec)
      }, {
        title: 'Start Date',
        dataIndex: 'startDate',
        key: 'startDate',
        editable: true
      }, {
        title: 'Release Date',
        dataIndex: 'endDate',
        key: 'endDate',
        editable: true
      }, {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
        editable: true
      }, {
        title: 'Action',
        key: 'action',
        render: (text, record) => {
          const editable = this.isEditing(record);

          const Content = __jsx("div", {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 29
            }
          }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 33
            }
          }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
            span: 8,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 37
            }
          }, __jsx("a", {
            disabled: this.state.editingKey !== '',
            onClick: () => this.edit(record),
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 51
            }
          }, "Edit")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
            span: 8,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 37
            }
          }, __jsx("a", {
            disabled: this.state.editingKey !== '',
            onClick: () => this.addChildItem(record),
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 51
            }
          }, "Add")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
            span: 8,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 37
            }
          }, __jsx("a", {
            disabled: this.state.editingKey !== '',
            onClick: () => this.deleteItem(record),
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 51
            }
          }, "Delete"))));

          return editable ? __jsx("span", {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 29
            }
          }, __jsx("a", {
            href: "javascript:;",
            onClick: () => this.save(record),
            style: {
              marginRight: 8
            },
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 33
            }
          }, "Save"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popconfirm"], {
            title: "Sure to cancel?",
            onConfirm: this.cancel,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 33
            }
          }, __jsx("a", {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 37
            }
          }, "Cancel"))) : __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
            content: Content,
            title: "Actions",
            trigger: "hover",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 33
            }
          }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["MenuOutlined"], {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 37
            }
          }));
        }
      }],
      listDataSrc: [],
      isEdit: false
    };
  }

  componentDidMount() {
    // let chkItem = JSON.parse(localStorage.getItem("parentReleaseData"));
    // let getItems = chkItem == null ? [] : chkItem;
    // this.setState({
    //     listDataSrc: getItems
    // })
    this.fetchItem();
  }

  componentWillReceiveProps(nextProps) {
    let {
      dataFromLS
    } = nextProps;

    if (dataFromLS) {
      this.setState({
        listDataSrc: dataFromLS,
        editingKey: ""
      });
    }
  }

  save(record) {
    let {
      editVersion,
      editstartDate,
      editEndDate,
      editDescription,
      editStatus,
      editProgress,
      listDataSrc
    } = this.state;
    listDataSrc.map(item => {
      if (item.key == record.key) {
        item.key = record.key;
        item.childRelease = item.childRelease;
        item.version = editVersion;
        item.status = editStatus;
        item.progress = editProgress;
        item.startDate = editstartDate;
        item.endDate = editEndDate;
        item.description = editDescription;
      }
    });
    localStorage.setItem('parentReleaseData', JSON.stringify(listDataSrc));
    this.setState({
      editStatus: "",
      editProgress: "",
      editstartDate: "",
      editVersion: "",
      editEndDate: "",
      editDescription: ""
    });
    this.fetchItem();
  }

  edit(record) {
    this.setState({
      editingKey: record.key,
      editStatus: record.status,
      editProgress: record.progress,
      editstartDate: record.startDate,
      editVersion: record.version,
      editEndDate: record.endDate,
      editDescription: record.description
    });
  }

  render() {
    let {
      listDataSrc
    } = this.state;
    const components = {
      body: {
        cell: this.EditableCell
      }
    };
    const columns = this.state.columns.map(col => {
      if (!col.editable) {
        return col;
      }

      return _objectSpread({}, col, {
        onCell: record => ({
          record,
          inputType: col.dataIndex,
          dataIndex: col.dataIndex,
          title: col.title,
          editing: this.isEditing(record)
        })
      });
    });
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 356,
        columnNumber: 17
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Table"], {
      columns: columns,
      dataSource: this.props.dataFromLS,
      components: components,
      expandable: {
        expandedRowRender: record => __jsx(_ChildReleaseList__WEBPACK_IMPORTED_MODULE_5__["default"], {
          thisData: record,
          refreshCallBack: this.fetchItem,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 362,
            columnNumber: 58
          }
        })
      },
      rowClassName: "editable-row",
      pagination: {
        onChange: this.cancel
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 357,
        columnNumber: 21
      }
    })), __jsx(_addParentRelease__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, this.props, {
      refreshCallBack: this.fetchItem,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 370,
        columnNumber: 17
      }
    })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
      title: "Add Batch Release",
      visible: this.state.modalVisible,
      onOk: this.handleOk,
      footer: null,
      closable: true,
      className: "modal-Layout",
      onCancel: this.handleCancel,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 371,
        columnNumber: 17
      }
    }, __jsx(_addChildRelease__WEBPACK_IMPORTED_MODULE_4__["default"], {
      thisData: this.state.currentRecord,
      closeModal: this.handleOk,
      dbData: listDataSrc,
      refreshCallBack: this.fetchItem,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 380,
        columnNumber: 21
      }
    })));
  }

}

const mapStateToProps = state => {
  return {
    dataFromLS: state.dataFromLS
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps, {
  onFetchItem
})(ReleaseList));

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname))]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Page; });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var _containers_parentReleaseList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../containers/parentReleaseList */ "./containers/parentReleaseList.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _redux_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/reducer */ "./redux/reducer.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _redux_saga__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../redux/saga */ "./redux/saga.js");
var _jsxFileName = "D:\\RandDChamber\\LogwardAssignment\\ProjectManagement\\PMA\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;











const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_9___default()();
const store = Object(redux__WEBPACK_IMPORTED_MODULE_8__["createStore"])(_redux_reducer__WEBPACK_IMPORTED_MODULE_6__["default"], Object(redux__WEBPACK_IMPORTED_MODULE_8__["applyMiddleware"])(sagaMiddleware));
sagaMiddleware.run(_redux_saga__WEBPACK_IMPORTED_MODULE_10__["default"]);
const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid red'
};
function Page() {
  return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_7__["Provider"], {
    store: store,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }), __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, __jsx(_containers_parentReleaseList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  })));
}

/***/ }),

/***/ "./redux/action.js":
/*!*************************!*\
  !*** ./redux/action.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// exporting default actions;
const actions = {
  FETCH_ITEM: "FETCH_ITEM",
  FETCH_ITEM_SUCCESS: "FETCH_ITEM_SUCCESS",
  onFetchItem: () => ({
    type: actions.FETCH_ITEM,
    value: 1
  }),
  onFetchItemSuccess: result => ({
    type: actions.FETCH_ITEM_SUCCESS,
    result
  })
};
/* harmony default export */ __webpack_exports__["default"] = (actions);

/***/ }),

/***/ "./redux/reducer.js":
/*!**************************!*\
  !*** ./redux/reducer.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  dataFromLS: []
};

const reducer = (state = initialState, action) => {
  const newState = _objectSpread({}, state);

  switch (action.type) {
    case "FETCH_ITEM_SUCCESS":
      console.log("Inside reducer", action.result);
      newState.dataFromLS = action.result && JSON.parse(action.result).length > 0 ? JSON.parse(action.result) : [];
      break;
  }

  return newState;
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./redux/saga.js":
/*!***********************!*\
  !*** ./redux/saga.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
// import { delay } from "redux-saga";


function* fetchUser(action) {
  try {
    // const user = yield call(Api.fetchUser, action.payload.userId);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: "USER_FETCH_SUCCEEDED",
      user: user
    });
  } catch (e) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: "USER_FETCH_FAILED",
      message: e.message
    });
  }
}

function* onFetchItem() {
  // yield delay(4000);
  console.log("Inside sAga"); // yield put({ type: "DELETE_ITEM_SUCCESS", value: 1 });

  let res = localStorage.getItem("parentReleaseData");
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
    type: "FETCH_ITEM_SUCCESS",
    result: res
  });
} // export function* watchAgeUp() {
//     yield takeLatest("AGE_UP", ageUpAsync);
// }


function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])("USER_FETCH_REQUESTED", fetchUser);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])("FETCH_ITEM", onFetchItem);
}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\RandDChamber\LogwardAssignment\ProjectManagement\PMA\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map