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
      data = _useContext.data;

  var isLoading = loading.isLoading,
      isError = loading.isError;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      object = _useState[0],
      setObject = _useState[1];

  console.log(object);

  function sleep(ms) {
    return new Promise(function (resolve) {
      return setTimeout(resolve, ms);
    });
  }

  function getComponentSelect() {
    if (isLoading === false && isError !== true) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_selector_js__WEBPACK_IMPORTED_MODULE_3__["Selector"], {
        dataList: {
          data: data,
          setObject: setObject
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
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
        lineNumber: 34,
        columnNumber: 20
      }, this);
    }

    return null;
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      className: "center-items forms",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "forms__body wrapper",
        children: [object === null ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: _styles_SearchForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.title,
          children: "\u041A\u0440\u0438\u0442\u0435\u0440\u0438\u0438 \u043F\u043E\u0438\u0441\u043A\u0430: \u043D\u0435 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u044B"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 40
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_request__WEBPACK_IMPORTED_MODULE_5__["Request"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 109
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "".concat(_styles_SearchForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.btn_form, " btn"),
          type: "button",
          onClick: promiseDate,
          children: "\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0444\u043E\u0440\u043C\u0443"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }, this), getComponentSelect()]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 9
  }, this);
}

_s(Form, "64efFyy12pjFZXj0J+cX7xA2YXo=");

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

var _jsxFileName = "D:\\\u0410\u0440\u0445\u0438\u0432\\Project\\local\\\u0420\u0430\u0431\u043E\u0442\u0430\\SearchForm\\form\\components\\form\\request.js";

function Request() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb3JtL2Zvcm0uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZm9ybS9yZXF1ZXN0LmpzIl0sIm5hbWVzIjpbIkZvcm0iLCJsb2FkaW5nIiwidXNlQ29udGV4dCIsIk1haW5Db250ZXh0IiwicHJvbWlzZURhdGUiLCJkYXRhIiwiaXNMb2FkaW5nIiwiaXNFcnJvciIsInVzZVN0YXRlIiwib2JqZWN0Iiwic2V0T2JqZWN0IiwiY29uc29sZSIsImxvZyIsInNsZWVwIiwibXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJnZXRDb21wb25lbnRTZWxlY3QiLCJmb3JtU3R5IiwidGl0bGUiLCJidG5fZm9ybSIsIlJlcXVlc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBSUE7O0FBQ0E7QUFDQTtDQUdBOztBQUNBO0FBR08sU0FBU0EsSUFBVCxPQUEyQjtBQUFBOztBQUFBLE1BQVhDLE9BQVcsUUFBWEEsT0FBVzs7QUFBQSxvQkFDQUMsd0RBQVUsQ0FBQ0Msa0RBQUQsQ0FEVjtBQUFBLE1BQ3RCQyxXQURzQixlQUN0QkEsV0FEc0I7QUFBQSxNQUNUQyxJQURTLGVBQ1RBLElBRFM7O0FBQUEsTUFFdEJDLFNBRnNCLEdBRUNMLE9BRkQsQ0FFdEJLLFNBRnNCO0FBQUEsTUFFWEMsT0FGVyxHQUVDTixPQUZELENBRVhNLE9BRlc7O0FBQUEsa0JBR0FDLHNEQUFRLENBQUMsSUFBRCxDQUhSO0FBQUEsTUFHdEJDLE1BSHNCO0FBQUEsTUFHZEMsU0FIYzs7QUFLOUJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSCxNQUFaOztBQUVDLFdBQVNJLEtBQVQsQ0FBZUMsRUFBZixFQUFtQjtBQUNoQixXQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFBQyxPQUFPO0FBQUEsYUFBSUMsVUFBVSxDQUFDRCxPQUFELEVBQVVGLEVBQVYsQ0FBZDtBQUFBLEtBQW5CLENBQVA7QUFDSDs7QUFFRCxXQUFTSSxrQkFBVCxHQUE2QjtBQUN6QixRQUFJWixTQUFTLEtBQUssS0FBZCxJQUF1QkMsT0FBTyxLQUFLLElBQXZDLEVBQTRDO0FBQzFDLDBCQUFPLHFFQUFDLHFEQUFEO0FBQVUsZ0JBQVEsRUFBRztBQUFDRixjQUFJLEVBQUpBLElBQUQ7QUFBT0ssbUJBQVMsRUFBVEE7QUFBUDtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQVA7QUFDRCxLQUZELE1BR0ssSUFBSUosU0FBUyxJQUFJQyxPQUFPLEtBQUssSUFBN0IsRUFBbUM7QUFDcENJLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaO0FBQ0gsS0FGSSxNQUdBLElBQUlMLE9BQU8sS0FBSyxJQUFoQixFQUFzQjtBQUN2QkksYUFBTyxDQUFDQyxHQUFSLENBQVksUUFBWjtBQUNBLDBCQUFPLHFFQUFDLGdFQUFEO0FBQWlCLGFBQUssRUFBRUM7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFQO0FBQ0g7O0FBQ0QsV0FBTyxJQUFQO0FBQ0g7O0FBRUQsc0JBQ0kscUVBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUEsMkJBQ0k7QUFBTSxlQUFTLEVBQUMsb0JBQWhCO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxFQUFDLHFCQUFmO0FBQUEsbUJBQ0tKLE1BQU0sS0FBSyxJQUFYLGdCQUFrQjtBQUFJLG1CQUFTLEVBQUVVLHFFQUFPLENBQUNDLEtBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFsQixnQkFBdUYscUVBQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFENUYsZUFFSTtBQUNJLG1CQUFTLFlBQUtELHFFQUFPLENBQUNFLFFBQWIsU0FEYjtBQUVJLGNBQUksRUFBRSxRQUZWO0FBR0ksaUJBQU8sRUFBRWpCLFdBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkosRUFPTWMsa0JBQWtCLEVBUHhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFlSDs7R0F4Q2VsQixJOztLQUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiaEI7QUFFTyxTQUFTc0IsT0FBVCxHQUFtQjtBQUN0QixzQkFDSSxxRUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBS0g7S0FOZUEsTyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41ODRkM2M3MmJlNjMzYzRjYmUwMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBmb3JtU3R5IGZyb20gJy4uLy4uL3N0eWxlcy9TZWFyY2hGb3JtLm1vZHVsZS5zY3NzJ1xyXG5cclxuLy9jb21wb25lbnRcclxuaW1wb3J0IHtTZWxlY3Rvcn0gZnJvbSAnLi9zZWxlY3Rvci5qcydcclxuaW1wb3J0IHtMb2FkZXJGb3JtRXJyb3J9IGZyb20gXCIuL0xvYWRlckZvcm1FcnJvclwiO1xyXG5pbXBvcnQge1JlcXVlc3R9IGZyb20gXCIuL3JlcXVlc3RcIjtcclxuXHJcbi8vUHJvdmlkZXJcclxuaW1wb3J0IHtNYWluQ29udGV4dH0gZnJvbSBcIi4uLy4uL3BhZ2VzXCI7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEZvcm0oeyBsb2FkaW5nIH0pIHtcclxuICAgIGNvbnN0IHsgcHJvbWlzZURhdGUsIGRhdGEgfSA9IHVzZUNvbnRleHQoTWFpbkNvbnRleHQpO1xyXG4gICAgY29uc3QgeyBpc0xvYWRpbmcsIGlzRXJyb3IgfSA9IGxvYWRpbmc7XHJcbiAgICBjb25zdCBbIG9iamVjdCwgc2V0T2JqZWN0IF0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhvYmplY3QpO1xyXG5cclxuICAgICBmdW5jdGlvbiBzbGVlcChtcykge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRDb21wb25lbnRTZWxlY3QoKXtcclxuICAgICAgICBpZiAoaXNMb2FkaW5nID09PSBmYWxzZSAmJiBpc0Vycm9yICE9PSB0cnVlKXtcclxuICAgICAgICAgIHJldHVybiA8U2VsZWN0b3IgZGF0YUxpc3Q9eyB7ZGF0YSwgc2V0T2JqZWN0fSB9Lz5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoaXNMb2FkaW5nICYmIGlzRXJyb3IgIT09IHRydWUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ9CX0LDQs9GA0YPQt9C60LAg0LTQsNC90L3Ri9GFJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGlzRXJyb3IgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ9Ce0YjQuNCx0LrQsCcpO1xyXG4gICAgICAgICAgICByZXR1cm4gPExvYWRlckZvcm1FcnJvciBzbGVlcD17c2xlZXB9Lz5cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImNlbnRlci1pdGVtcyBmb3Jtc1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3Jtc19fYm9keSB3cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge29iamVjdCA9PT0gbnVsbCA/IDxoMiBjbGFzc05hbWU9e2Zvcm1TdHkudGl0bGV9PtCa0YDQuNGC0LXRgNC40Lgg0L/QvtC40YHQutCwOiDQvdC1INGD0YHRgtCw0L3QvtCy0LvQtdC90Ys8L2gyPiA6IDxSZXF1ZXN0Lz59XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2Zvcm1TdHkuYnRuX2Zvcm19IGJ0bmB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e1wiYnV0dG9uXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Byb21pc2VEYXRlfT7Ql9Cw0L/QvtC70L3QuNGC0Ywg0YTQvtGA0LzRg1xyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIHsgZ2V0Q29tcG9uZW50U2VsZWN0KCkgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFJlcXVlc3QoKSB7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==