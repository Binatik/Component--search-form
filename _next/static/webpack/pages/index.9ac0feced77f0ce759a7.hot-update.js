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
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pages */ "./pages/index.js");


var _jsxFileName = "D:\\\u0410\u0440\u0445\u0438\u0432\\Project\\local\\\u0420\u0430\u0431\u043E\u0442\u0430\\SearchForm\\form\\components\\form\\form.js",
    _s = $RefreshSig$();


 //component


 //Provider


function Form(_ref) {
  _s();

  var loading = _ref.loading;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_pages__WEBPACK_IMPORTED_MODULE_5__["MainContext"]),
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
        lineNumber: 26,
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
        lineNumber: 33,
        columnNumber: 20
      }, this);
    }

    return null;
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    children: [console.log(idOption), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      className: "center-items forms",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "forms__body wrapper",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: _styles_SearchForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.title,
          children: "\u041A\u0440\u0438\u0442\u0435\u0440\u0438\u0438 \u043F\u043E\u0438\u0441\u043A\u0430: \u043D\u0435 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u044B"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
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
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 39,
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

/***/ "./components/form/selector.js":
/*!*************************************!*\
  !*** ./components/form/selector.js ***!
  \*************************************/
/*! exports provided: Selector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Selector", function() { return Selector; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Selector_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/Selector.module.scss */ "./styles/Selector.module.scss");
/* harmony import */ var _styles_Selector_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Selector_module_scss__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "D:\\\u0410\u0440\u0445\u0438\u0432\\Project\\local\\\u0420\u0430\u0431\u043E\u0442\u0430\\SearchForm\\form\\components\\form\\selector.js",
    _s = $RefreshSig$();



function Selector(_ref) {
  _s();

  var _this = this;

  var dataList = _ref.dataList;
  var selectRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  var data = dataList.data,
      setObject = dataList.setObject;

  function saveData() {
    var id = +selectRef.current[selectRef.current.selectedIndex].value;
    setObject(getObject(id));
  }

  function getObject(value) {
    for (var i = 0; i < data.items.length; i++) {
      if (i === value) {
        console.log('test');
        return data === null || data === void 0 ? void 0 : data.items[i];
      }
    }
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
      form: "Select",
      className: _styles_Selector_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.custom
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
      ref: selectRef,
      id: "Select",
      name: "Select",
      className: _styles_Selector_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.select,
      children: data === null || data === void 0 ? void 0 : data.items.map(function (_ref2, index) {
        var name = _ref2.name,
            id = _ref2.id;
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          className: _styles_Selector_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.option,
          value: index,
          children: [" ", name]
        }, id, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 21
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: "".concat(_styles_Selector_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.btn_send, " btn"),
      type: "button",
      onClick: saveData,
      children: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 9
  }, this);
}

_s(Selector, "ZWT7gh/OJFBnpMPAzZjffIz5LQw=");

_c = Selector;

var _c;

$RefreshReg$(_c, "Selector");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb3JtL2Zvcm0uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZm9ybS9zZWxlY3Rvci5qcyJdLCJuYW1lcyI6WyJGb3JtIiwibG9hZGluZyIsInVzZUNvbnRleHQiLCJNYWluQ29udGV4dCIsInByb21pc2VEYXRlIiwiZGF0YSIsImlzTG9hZGluZyIsImlzRXJyb3IiLCJ1c2VTdGF0ZSIsIm9iamVjdCIsInNldE9iamVjdCIsImNvbnNvbGUiLCJsb2ciLCJzbGVlcCIsIm1zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiZ2V0Q29tcG9uZW50U2VsZWN0IiwiaWRPcHRpb24iLCJmb3JtU3R5IiwidGl0bGUiLCJidG5fZm9ybSIsIlNlbGVjdG9yIiwiZGF0YUxpc3QiLCJzZWxlY3RSZWYiLCJ1c2VSZWYiLCJzYXZlRGF0YSIsImlkIiwiY3VycmVudCIsInNlbGVjdGVkSW5kZXgiLCJ2YWx1ZSIsImdldE9iamVjdCIsImkiLCJpdGVtcyIsImxlbmd0aCIsInNlbGVjdG9yU3R5IiwiY3VzdG9tIiwic2VsZWN0IiwibWFwIiwiaW5kZXgiLCJuYW1lIiwib3B0aW9uIiwiYnRuX3NlbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FJQTs7QUFDQTtDQUdBOztBQUNBO0FBR08sU0FBU0EsSUFBVCxPQUEyQjtBQUFBOztBQUFBLE1BQVhDLE9BQVcsUUFBWEEsT0FBVzs7QUFBQSxvQkFDQUMsd0RBQVUsQ0FBQ0Msa0RBQUQsQ0FEVjtBQUFBLE1BQ3RCQyxXQURzQixlQUN0QkEsV0FEc0I7QUFBQSxNQUNUQyxJQURTLGVBQ1RBLElBRFM7O0FBQUEsTUFFdEJDLFNBRnNCLEdBRUNMLE9BRkQsQ0FFdEJLLFNBRnNCO0FBQUEsTUFFWEMsT0FGVyxHQUVDTixPQUZELENBRVhNLE9BRlc7O0FBQUEsa0JBR0FDLHNEQUFRLENBQUMsSUFBRCxDQUhSO0FBQUEs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T1AsSUFBUCxhQUFPQSxJQUFQLHVCQUFPQSxJQUFJLENBQUU2QixLQUFOLENBQVlELENBQVosQ0FBUDtBQUNIO0FBQ0o7QUFDSjs7QUFFRCxzQkFDSSxxRUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQSw0QkFDSTtBQUFPLFVBQUksRUFBQyxRQUFaO0FBQXFCLGVBQVMsRUFBRUcsbUVBQVcsQ0FBQ0M7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUk7QUFBUyxTQUFHLEVBQUVaLFNBQWQ7QUFBeUIsUUFBRSxFQUFDLFFBQTVCO0FBQXFDLFVBQUksRUFBQyxRQUExQztBQUFtRCxlQUFTLEVBQUVXLG1FQUFXLENBQUNFLE1BQTFFO0FBQUEsZ0JBQ0tqQyxJQURMLGFBQ0tBLElBREwsdUJBQ0tBLElBQUksQ0FBRTZCLEtBQU4sQ0FBWUssR0FBWixDQUFnQixpQkFBZUMsS0FBZjtBQUFBLFlBQUdDLElBQUgsU0FBR0EsSUFBSDtBQUFBLFlBQVNiLEVBQVQsU0FBU0EsRUFBVDtBQUFBLDRCQUNiO0FBRUksbUJBQVMsRUFBRVEsbUVBQVcsQ0FBQ00sTUFGM0I7QUFHSSxlQUFLLEVBQUVGLEtBSFg7QUFBQSwwQkFHcUJDLElBSHJCO0FBQUEsV0FDU2IsRUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURhO0FBQUEsT0FBaEI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFXSTtBQUNJLGVBQVMsWUFBTVEsbUVBQVcsQ0FBQ08sUUFBbEIsU0FEYjtBQUVJLFVBQUksRUFBRSxRQUZWO0FBR0ksYUFBTyxFQUFFaEIsUUFIYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBb0JIOztHQXRDZUosUTs7S0FBQUEsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45YWMwZmVjZWQ3N2YwY2U3NTlhNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBmb3JtU3R5IGZyb20gJy4uLy4uL3N0eWxlcy9TZWFyY2hGb3JtLm1vZHVsZS5zY3NzJ1xyXG5cclxuLy9jb21wb25lbnRcclxuaW1wb3J0IHtTZWxlY3Rvcn0gZnJvbSAnLi9zZWxlY3Rvci5qcydcclxuaW1wb3J0IHtMb2FkZXJGb3JtRXJyb3J9IGZyb20gXCIuL0xvYWRlckZvcm1FcnJvclwiO1xyXG5cclxuLy9Qcm92aWRlclxyXG5pbXBvcnQge01haW5Db250ZXh0fSBmcm9tIFwiLi4vLi4vcGFnZXNcIjtcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRm9ybSh7IGxvYWRpbmcgfSkge1xyXG4gICAgY29uc3QgeyBwcm9taXNlRGF0ZSwgZGF0YSB9ID0gdXNlQ29udGV4dChNYWluQ29udGV4dCk7XHJcbiAgICBjb25zdCB7IGlzTG9hZGluZywgaXNFcnJvciB9ID0gbG9hZGluZztcclxuICAgIGNvbnN0IFsgb2JqZWN0LCBzZXRPYmplY3QgXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKG9iamVjdCk7XHJcblxyXG4gICAgIGZ1bmN0aW9uIHNsZWVwKG1zKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldENvbXBvbmVudFNlbGVjdCgpe1xyXG4gICAgICAgIGlmIChpc0xvYWRpbmcgPT09IGZhbHNlICYmIGlzRXJyb3IgIT09IHRydWUpe1xyXG4gICAgICAgICAgcmV0dXJuIDxTZWxlY3RvciBkYXRhTGlzdD17IHtkYXRhLCBzZXRPYmplY3R9IH0vPlxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChpc0xvYWRpbmcgJiYgaXNFcnJvciAhPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn0JfQsNCz0YDRg9C30LrQsCDQtNCw0L3QvdGL0YUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoaXNFcnJvciA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn0J7RiNC40LHQutCwJyk7XHJcbiAgICAgICAgICAgIHJldHVybiA8TG9hZGVyRm9ybUVycm9yIHNsZWVwPXtzbGVlcH0vPlxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAge2NvbnNvbGUubG9nKGlkT3B0aW9uKX1cclxuICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiY2VudGVyLWl0ZW1zIGZvcm1zXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1zX19ib2R5IHdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtmb3JtU3R5LnRpdGxlfT7QmtGA0LjRgtC10YDQuNC4INC/0L7QuNGB0LrQsDog0L3QtSDRg9GB0YLQsNC90L7QstC70LXQvdGLPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7Zm9ybVN0eS5idG5fZm9ybX0gYnRuYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17XCJidXR0b25cIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17cHJvbWlzZURhdGV9PtCX0LDQv9C+0LvQvdC40YLRjCDRhNC+0YDQvNGDXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgeyBnZXRDb21wb25lbnRTZWxlY3QoKSB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiIsImltcG9ydCBSZWFjdCwge3VzZVJlZn0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc2VsZWN0b3JTdHkgZnJvbSBcIi4uLy4uL3N0eWxlcy9TZWxlY3Rvci5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNlbGVjdG9yKHtkYXRhTGlzdH0pIHtcclxuICAgIGNvbnN0IHNlbGVjdFJlZiA9IHVzZVJlZihudWxsKVxyXG4gICAgY29uc3QgeyBkYXRhLCBzZXRPYmplY3QgfSA9IGRhdGFMaXN0O1xyXG5cclxuICAgIGZ1bmN0aW9uIHNhdmVEYXRhKCl7XHJcbiAgICAgICAgY29uc3QgaWQgPSArc2VsZWN0UmVmLmN1cnJlbnRbc2VsZWN0UmVmLmN1cnJlbnQuc2VsZWN0ZWRJbmRleF0udmFsdWVcclxuICAgICAgICBzZXRPYmplY3QoZ2V0T2JqZWN0KGlkKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0T2JqZWN0KHZhbHVlKXtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpPGRhdGEuaXRlbXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBpZihpID09PSB2YWx1ZSl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndGVzdCcpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE/Lml0ZW1zW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9ybT0nU2VsZWN0JyBjbGFzc05hbWU9e3NlbGVjdG9yU3R5LmN1c3RvbX0vPlxyXG4gICAgICAgICAgICA8c2VsZWN0ICByZWY9e3NlbGVjdFJlZn0gaWQ9XCJTZWxlY3RcIiBuYW1lPVwiU2VsZWN0XCIgY2xhc3NOYW1lPXtzZWxlY3RvclN0eS5zZWxlY3R9PlxyXG4gICAgICAgICAgICAgICAge2RhdGE/Lml0ZW1zLm1hcCgoeyBuYW1lLCBpZCB9LCBpbmRleCkgPT5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c2VsZWN0b3JTdHkub3B0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aW5kZXh9ID4ge25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsgYCR7c2VsZWN0b3JTdHkuYnRuX3NlbmR9IGJ0bmB9XHJcbiAgICAgICAgICAgICAgICB0eXBlPXtcImJ1dHRvblwifVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17c2F2ZURhdGF9XHJcbiAgICAgICAgICAgID7QntGC0L/RgNCw0LLQuNGC0YxcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=