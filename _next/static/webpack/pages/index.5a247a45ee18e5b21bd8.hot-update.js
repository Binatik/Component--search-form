webpackHotUpdate_N_E("pages/index",{

/***/ "./components/form/form.js":
/*!*********************************!*\
  !*** ./components/form/form.js ***!
  \*********************************/
/*! exports provided: Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_SearchForm_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/SearchForm.module.scss */ "./styles/SearchForm.module.scss");
/* harmony import */ var _styles_SearchForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_SearchForm_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _selector_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selector.js */ "./components/form/selector.js");
/* harmony import */ var _LoaderFormError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LoaderFormError */ "./components/form/LoaderFormError.js");
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./request */ "./components/form/request.js");
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pages */ "./pages/index.js");


var _jsxFileName = "D:\\\u0410\u0440\u0445\u0438\u0432\\Project\\local\\\u0420\u0430\u0431\u043E\u0442\u0430\\SearchForm\\form\\components\\form\\form.js",
    _s = $RefreshSig$();


 //component



 //Provider


function Form(_ref) {
  _s();

  var loading = _ref.loading;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_pages__WEBPACK_IMPORTED_MODULE_6__["MainContext"]),
      promiseDate = _useContext.promiseDate,
      data = _useContext.data,
      setData = _useContext.setData;

  var isLoading = loading.isLoading,
      isError = loading.isError;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      object = _useState[0],
      setObject = _useState[1];

  function sleep(ms) {
    return new Promise(function (resolve) {
      return setTimeout(resolve, ms);
    });
  }

  function getComponentSelect() {
    if (isLoading === false && isError !== true && data !== null) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_selector_js__WEBPACK_IMPORTED_MODULE_3__["Selector"], {
        dataList: {
          data: data,
          setObject: setObject
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 18
      }, this);
    } else if (isLoading && isError !== true) {
      console.log('Загрузка данных');
    } else if (isError === true) {
      console.log('Ошибка');
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_LoaderFormError__WEBPACK_IMPORTED_MODULE_4__["LoaderFormError"], {
        sleep: sleep
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 20
      }, this);
    }

    return null;
  }

  function sendText(error) {
    return object !== null ? 'Критерии поиска' : "\u041A\u0440\u0438\u0442\u0435\u0440\u0438\u0438 \u043F\u043E\u0438\u0441\u043A\u0430 ".concat(error);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      className: "center-items forms",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "forms__body wrapper",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: _styles_SearchForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.title,
          children: sendText('не установлены')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 21
        }, this), object !== null ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_request__WEBPACK_IMPORTED_MODULE_5__["Request"], {
          value: object,
          query: {
            setObject: setObject,
            setData: setData
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 41
        }, this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "".concat(_styles_SearchForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.btn_form, " btn"),
          type: "button",
          onClick: promiseDate,
          children: "\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0444\u043E\u0440\u043C\u0443"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 21
        }, this), getComponentSelect()]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 9
  }, this);
}

_s(Form, "/OHvxjWNIScEM/4XbuJrHhb+O14=");

_c = Form;

var _c;

$RefreshReg$(_c, "Form");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/form/request.js":
/*!************************************!*\
  !*** ./components/form/request.js ***!
  \************************************/
/*! exports provided: Request */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return Request; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_SearchForm_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/SearchForm.module.scss */ "./styles/SearchForm.module.scss");
/* harmony import */ var _styles_SearchForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_SearchForm_module_scss__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "D:\\\u0410\u0440\u0445\u0438\u0432\\Project\\local\\\u0420\u0430\u0431\u043E\u0442\u0430\\SearchForm\\form\\components\\form\\request.js";


function Request(_ref) {
  var value = _ref.value,
      query = _ref.query;
  var id = value.id,
      name = value.name;
  var setObject = query.setObject,
      setData = query.setData;

  function changeQuery() {
    setData(null);
    setObject(null);
  } //Список: Элемент 1 (id# 104000134)


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    children: [value ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["\u0421\u043F\u0438\u0441\u043E\u043A: ", name, " (id# ", id, ")"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 22
    }, this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: "btn",
      type: "button",
      onClick: changeQuery,
      children: "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0437\u0430\u043F\u0440\u043E\u0441"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }, this);
}
_c = Request;

var _c;

$RefreshReg$(_c, "Request");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: MainContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainContext", function() { return MainContext; });
/* harmony import */ var D_Project_local_SearchForm_form_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_Project_local_SearchForm_form_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_Project_local_SearchForm_form_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_Project_local_SearchForm_form_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_form_form_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/form/form.js */ "./components/form/form.js");




var _jsxFileName = "D:\\\u0410\u0440\u0445\u0438\u0432\\Project\\local\\\u0420\u0430\u0431\u043E\u0442\u0430\\SearchForm\\form\\pages\\index.js",
    _s = $RefreshSig$();


 //component

 //Executing a request to the server

function getData(_x) {
  return _getData.apply(this, arguments);
} //Provider


function _getData() {
  _getData = Object(D_Project_local_SearchForm_form_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/D_Project_local_SearchForm_form_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(url) {
    var data;
    return D_Project_local_SearchForm_form_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return fetch(url);

          case 2:
            data = _context2.sent;
            return _context2.abrupt("return", data.json());

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getData.apply(this, arguments);
}

var MainContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createContext();

function Index() {
  _s();

  //De-structuring the array.
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      data = _useState[0],
      setData = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isError = _useState3[0],
      setIsError = _useState3[1];

  function promiseDate() {
    return _promiseDate.apply(this, arguments);
  }

  function _promiseDate() {
    _promiseDate = Object(D_Project_local_SearchForm_form_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/D_Project_local_SearchForm_form_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var fetchDate;
      return D_Project_local_SearchForm_form_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setIsLoading(true);
              _context.prev = 1;
              _context.next = 4;
              return getData('https://raw.githubusercontent.com/Binatik/SearchForm/main/data.json');

            case 4:
              fetchDate = _context.sent;
              setIsLoading(false);
              setData(fetchDate);
              console.log('Данные загружены!');
              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](1);
              setIsError(true);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 10]]);
    }));
    return _promiseDate.apply(this, arguments);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("title", {
        children: "Form"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(MainContext.Provider, {
      value: {
        data: data,
        promiseDate: promiseDate,
        setData: setData
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_form_form_js__WEBPACK_IMPORTED_MODULE_5__["Form"], {
        loading: {
          isLoading: isLoading,
          isError: isError
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 9
  }, this);
}

_s(Index, "sctXHHdOUwd1/y2lTBZAcSs1RkM=");

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb3JtL2Zvcm0uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZm9ybS9yZXF1ZXN0LmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJGb3JtIiwibG9hZGluZyIsInVzZUNvbnRleHQiLCJNYWluQ29udGV4dCIsInByb21pc2VEYXRlIiwiZGF0YSIsInNldERhdGEiLCJpc0xvYWRpbmciLCJpc0Vycm9yIiwidXNlU3RhdGUiLCJvYmplY3QiLCJzZXRPYmplY3QiLCJzbGVlcCIsIm1zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiZ2V0Q29tcG9uZW50U2VsZWN0IiwiY29uc29sZSIsImxvZyIsInNlbmRUZXh0IiwiZXJyb3IiLCJmb3JtU3R5IiwidGl0bGUiLCJidG5fZm9ybSIsIlJlcXVlc3QiLCJ2YWx1ZSIsInF1ZXJ5IiwiaWQiLCJuYW1lIiwiY2hhbmdlUXVlcnkiLCJnZXREYXRhIiwidXJsIiwiZmV0Y2giLCJqc29uIiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwiSW5kZXgiLCJzZXRJc0xvYWRpbmciLCJzZXRJc0Vycm9yIiwiZmV0Y2hEYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUlBOztBQUNBO0FBQ0E7Q0FHQTs7QUFDQTtBQUdPLFNBQVNBLElBQVQsT0FBMkI7QUFBQTs7QUFBQSxNQUFYQyxPQUFXLFFBQVhBLE9BQVc7O0FBQUEsb0JBQ1NDLHdEQUFVLENBQUNDLGtEQUFELENBRG5CO0FBQUEsTUFDdEJDLFdBRHNCLGVBQ3RCQSxXQURzQjtBQUFBLE1BQ1RDLElBRFMsZUFDVEEsSUFEUztBQUFBLE1BQ0hDLE9BREcsZUFDSEEsT0FERzs7QUFBQSxNQUV0QkMsU0FGc0IsR0FFQ04sT0FGRCxDQUV0Qk0sU0FGc0I7QUFBQSxNQUVYQyxPQUZXLEdBRUNQLE9BRkQsQ0FFWE8sT0FG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QWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNWEyNDdhNDVlZTE4ZTViMjFiZDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUNvbnRleHQsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgZm9ybVN0eSBmcm9tICcuLi8uLi9zdHlsZXMvU2VhcmNoRm9ybS5tb2R1bGUuc2NzcydcclxuXHJcbi8vY29tcG9uZW50XHJcbmltcG9ydCB7U2VsZWN0b3J9IGZyb20gJy4vc2VsZWN0b3IuanMnXHJcbmltcG9ydCB7TG9hZGVyRm9ybUVycm9yfSBmcm9tIFwiLi9Mb2FkZXJGb3JtRXJyb3JcIjtcclxuaW1wb3J0IHtSZXF1ZXN0fSBmcm9tIFwiLi9yZXF1ZXN0XCI7XHJcblxyXG4vL1Byb3ZpZGVyXHJcbmltcG9ydCB7TWFpbkNvbnRleHR9IGZyb20gXCIuLi8uLi9wYWdlc1wiO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBGb3JtKHsgbG9hZGluZyB9KSB7XHJcbiAgICBjb25zdCB7IHByb21pc2VEYXRlLCBkYXRhLCBzZXREYXRhIH0gPSB1c2VDb250ZXh0KE1haW5Db250ZXh0KTtcclxuICAgIGNvbnN0IHsgaXNMb2FkaW5nLCBpc0Vycm9yIH0gPSBsb2FkaW5nO1xyXG4gICAgY29uc3QgWyBvYmplY3QsIHNldE9iamVjdCBdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgIGZ1bmN0aW9uIHNsZWVwKG1zKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldENvbXBvbmVudFNlbGVjdCgpe1xyXG4gICAgICAgIGlmIChpc0xvYWRpbmcgPT09IGZhbHNlICYmIGlzRXJyb3IgIT09IHRydWUgJiYgZGF0YSAhPT0gbnVsbCl7XHJcbiAgICAgICAgICByZXR1cm4gPFNlbGVjdG9yIGRhdGFMaXN0PXsge2RhdGEsIHNldE9iamVjdH0gfS8+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGlzTG9hZGluZyAmJiBpc0Vycm9yICE9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfQl9Cw0LPRgNGD0LfQutCwINC00LDQvdC90YvRhScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChpc0Vycm9yID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfQntGI0LjQsdC60LAnKTtcclxuICAgICAgICAgICAgcmV0dXJuIDxMb2FkZXJGb3JtRXJyb3Igc2xlZXA9e3NsZWVwfS8+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNlbmRUZXh0KGVycm9yKXtcclxuICAgICAgICByZXR1cm4gb2JqZWN0ICE9PSBudWxsID8gJ9Ca0YDQuNGC0LXRgNC40Lgg0L/QvtC40YHQutCwJyA6IGDQmtGA0LjRgtC10YDQuNC4INC/0L7QuNGB0LrQsCAke2Vycm9yfWA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImNlbnRlci1pdGVtcyBmb3Jtc1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3Jtc19fYm9keSB3cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17Zm9ybVN0eS50aXRsZX0+eyBzZW5kVGV4dCgn0L3QtSDRg9GB0YLQsNC90L7QstC70LXQvdGLJykgfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgeyBvYmplY3QgIT09IG51bGwgPyA8UmVxdWVzdCB2YWx1ZT17b2JqZWN0fSBxdWVyeT17IHtzZXRPYmplY3QsIHNldERhdGF9IH0vPiA6IG51bGwgfVxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtmb3JtU3R5LmJ0bl9mb3JtfSBidG5gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXtcImJ1dHRvblwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtwcm9taXNlRGF0ZX0+0JfQsNC/0L7Qu9C90LjRgtGMINGE0L7RgNC80YNcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICB7IGdldENvbXBvbmVudFNlbGVjdCgpIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufVxyXG5cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGZvcm1TdHkgZnJvbSBcIi4uLy4uL3N0eWxlcy9TZWFyY2hGb3JtLm1vZHVsZS5zY3NzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUmVxdWVzdCh7dmFsdWUsIHF1ZXJ5fSkge1xyXG4gICAgY29uc3QgeyBpZCwgbmFtZSB9ID0gdmFsdWVcclxuICAgIGNvbnN0IHsgc2V0T2JqZWN0LCBzZXREYXRhIH0gPSBxdWVyeTtcclxuXHJcbiAgICBmdW5jdGlvbiBjaGFuZ2VRdWVyeSgpe1xyXG4gICAgICAgIHNldERhdGEobnVsbClcclxuICAgICAgICBzZXRPYmplY3QobnVsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/QodC/0LjRgdC+0Lo6INCt0LvQtdC80LXQvdGCIDEgKGlkIyAxMDQwMDAxMzQpXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICB7dmFsdWUgPyA8cD7QodC/0LjRgdC+0Lo6IHtuYW1lfSAoaWQjIHtpZH0pPC9wPiA6IG51bGx9XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJ0bmB9XHJcbiAgICAgICAgICAgICAgICB0eXBlPXtcImJ1dHRvblwifVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17Y2hhbmdlUXVlcnl9PtCY0LfQvNC10L3QuNGC0Ywg0LfQsNC/0YDQvtGBXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuXHJcbi8vY29tcG9uZW50XHJcbmltcG9ydCB7Rm9ybX0gZnJvbSAnLi4vY29tcG9uZW50cy9mb3JtL2Zvcm0uanMnXHJcblxyXG4vL0V4ZWN1dGluZyBhIHJlcXVlc3QgdG8gdGhlIHNlcnZlclxyXG5hc3luYyBmdW5jdGlvbiBnZXREYXRhKHVybCkge1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKHVybCk7XHJcbiAgICByZXR1cm4gZGF0YS5qc29uKClcclxuICAgIC8vV2UgcmVjZWl2ZWQgdGhlIGRhdGEgYW5kIHJldHVybmVkIGl0IGFzIGEgZnVuY3Rpb24uXHJcbn1cclxuXHJcbi8vUHJvdmlkZXJcclxuZXhwb3J0IGNvbnN0IE1haW5Db250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpXHJcblxyXG5mdW5jdGlvbiBJbmRleCgpIHtcclxuICAgIC8vRGUtc3RydWN0dXJpbmcgdGhlIGFycmF5LlxyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbaXNFcnJvciwgc2V0SXNFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gcHJvbWlzZURhdGUoKSB7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZldGNoRGF0ZSA9IGF3YWl0IGdldERhdGEoJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9CaW5hdGlrL1NlYXJjaEZvcm0vbWFpbi9kYXRhLmpzb24nKTtcclxuICAgICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgc2V0RGF0YShmZXRjaERhdGUpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn0JTQsNC90L3Ri9C1INC30LDQs9GA0YPQttC10L3RiyEnKTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgc2V0SXNFcnJvcih0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPkZvcm08L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIi8+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPE1haW5Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXsge2RhdGEsIHByb21pc2VEYXRlLCBzZXREYXRhfSB9PlxyXG4gICAgICAgICAgICAgICAgPEZvcm0gbG9hZGluZz17IHtpc0xvYWRpbmcsIGlzRXJyb3J9IH0vPlxyXG4gICAgICAgICAgICA8L01haW5Db250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=