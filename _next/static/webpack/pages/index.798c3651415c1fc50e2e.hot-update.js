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
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      className: "center-items forms",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "forms__body wrapper",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: _styles_SearchForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.title,
          children: "\u041A\u0440\u0438\u0442\u0435\u0440\u0438\u0438 \u043F\u043E\u0438\u0441\u043A\u0430: \u043D\u0435 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u044B"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "".concat(_styles_SearchForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.btn_form, " btn"),
          type: "button",
          onClick: promiseDate,
          children: "\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0444\u043E\u0440\u043C\u0443"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }, this), getComponentSelect()]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }, this)
  }, void 0, false, {
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb3JtL2Zvcm0uanMiXSwibmFtZXMiOlsiRm9ybSIsImxvYWRpbmciLCJ1c2VDb250ZXh0IiwiTWFpbkNvbnRleHQiLCJwcm9taXNlRGF0ZSIsImRhdGEiLCJpc0xvYWRpbmciLCJpc0Vycm9yIiwidXNlU3RhdGUiLCJvYmplY3QiLCJzZXRPYmplY3QiLCJjb25zb2xlIiwibG9nIiwic2xlZXAiLCJtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsImdldENvbXBvbmVudFNlbGVjdCIsImZvcm1TdHkiLCJ0aXRsZSIsImJ0bl9mb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBSUE7O0FBQ0E7Q0FHQTs7QUFDQTtBQUdPLFNBQVNBLElBQVQsT0FBMkI7QUFBQTs7QUFBQSxNQUFYQyxPQUFXLFFBQVhBLE9BQVc7O0FBQUEsb0JBQ0FDLHdEQUFVLENBQUNDLGtEQUFELENBRFY7QUFBQSxNQUN0QkMsV0FEc0IsZUFDdEJBLFdBRHNCO0FBQUEsTUFDVEMsSUFEUyxlQUNUQSxJQURTOztBQUFBLE1BRXRCQyxTQUZzQixHQUVDTCxPQUZELENBRXRCSyxTQUZzQjtBQUFBLE1BRVhDLE9BRlcsR0FFQ04sT0FGRCxDQUVYTSxPQUZXOztBQUFBLGtCQUdBQyxzREFBUSxDQUFDLElBQUQsQ0FIUjtBQUFBLE1BR3RCQyxNQUhzQjtBQUFBLE1BR2RDLFNBSGM7O0FBSzlCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsTUFBWjs7QUFFQyxXQUFTSSxLQUFULENBQWVDLEVBQWYsRUFBbUI7QUFDaEIsV0FBTyxJQUFJQyxPQUFKLENBQVksVUFBQUMsT0FBTztBQUFBLGFBQUlDLFVBQVUsQ0FBQ0QsT0FBRCxFQUFVRixFQUFWLENBQWQ7QUFBQSxLQUFuQixDQUFQO0FBQ0g7O0FBRUQsV0FBU0ksa0JBQVQsR0FBNkI7QUFDekIsUUFBSVosU0FBUyxLQUFLLEtBQWQsSUFBdUJDLE9BQU8sS0FBSyxJQUF2QyxFQUE0QztBQUMxQywwQkFBTyxxRUFBQyxxREFBRDtBQUFVLGdCQUFRLEVBQUc7QUFBQ0YsY0FBSSxFQUFKQSxJQUFEO0FBQU9LLG1CQUFTLEVBQVRBO0FBQVA7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFQO0FBQ0QsS0FGRCxNQUdLLElBQUlKLFNBQVMsSUFBSUMsT0FBTyxLQUFLLElBQTdCLEVBQW1DO0FBQ3BDSSxhQUFPLENBQUNDLEdBQVIsQ0FBWSxpQkFBWjtBQUNILEtBRkksTUFHQSxJQUFJTCxPQUFPLEtBQUssSUFBaEIsRUFBc0I7QUFDdkJJLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVo7QUFDQSwwQkFBTyxxRUFBQyxnRUFBRDtBQUFpQixhQUFLLEVBQUVDO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBUDtBQUNIOztBQUNELFdBQU8sSUFBUDtBQUNIOztBQUVELHNCQUNJLHFFQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBLDJCQUNJO0FBQU0sZUFBUyxFQUFDLG9CQUFoQjtBQUFBLDZCQUNJO0FBQUssaUJBQVMsRUFBQyxxQkFBZjtBQUFBLGdDQUNJO0FBQUksbUJBQVMsRUFBRU0scUVBQU8sQ0FBQ0MsS0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSTtBQUNJLG1CQUFTLFlBQUtELHFFQUFPLENBQUNFLFFBQWIsU0FEYjtBQUVJLGNBQUksRUFBRSxRQUZWO0FBR0ksaUJBQU8sRUFBRWpCLFdBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkosRUFPTWMsa0JBQWtCLEVBUHhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFlSDs7R0F4Q2VsQixJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljc5OGMzNjUxNDE1YzFmYzUwZTJlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IGZvcm1TdHkgZnJvbSAnLi4vLi4vc3R5bGVzL1NlYXJjaEZvcm0ubW9kdWxlLnNjc3MnXHJcblxyXG4vL2NvbXBvbmVudFxyXG5pbXBvcnQge1NlbGVjdG9yfSBmcm9tICcuL3NlbGVjdG9yLmpzJ1xyXG5pbXBvcnQge0xvYWRlckZvcm1FcnJvcn0gZnJvbSBcIi4vTG9hZGVyRm9ybUVycm9yXCI7XHJcblxyXG4vL1Byb3ZpZGVyXHJcbmltcG9ydCB7TWFpbkNvbnRleHR9IGZyb20gXCIuLi8uLi9wYWdlc1wiO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBGb3JtKHsgbG9hZGluZyB9KSB7XHJcbiAgICBjb25zdCB7IHByb21pc2VEYXRlLCBkYXRhIH0gPSB1c2VDb250ZXh0KE1haW5Db250ZXh0KTtcclxuICAgIGNvbnN0IHsgaXNMb2FkaW5nLCBpc0Vycm9yIH0gPSBsb2FkaW5nO1xyXG4gICAgY29uc3QgWyBvYmplY3QsIHNldE9iamVjdCBdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgY29uc29sZS5sb2cob2JqZWN0KTtcclxuXHJcbiAgICAgZnVuY3Rpb24gc2xlZXAobXMpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Q29tcG9uZW50U2VsZWN0KCl7XHJcbiAgICAgICAgaWYgKGlzTG9hZGluZyA9PT0gZmFsc2UgJiYgaXNFcnJvciAhPT0gdHJ1ZSl7XHJcbiAgICAgICAgICByZXR1cm4gPFNlbGVjdG9yIGRhdGFMaXN0PXsge2RhdGEsIHNldE9iamVjdH0gfS8+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGlzTG9hZGluZyAmJiBpc0Vycm9yICE9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfQl9Cw0LPRgNGD0LfQutCwINC00LDQvdC90YvRhScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChpc0Vycm9yID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfQntGI0LjQsdC60LAnKTtcclxuICAgICAgICAgICAgcmV0dXJuIDxMb2FkZXJGb3JtRXJyb3Igc2xlZXA9e3NsZWVwfS8+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJjZW50ZXItaXRlbXMgZm9ybXNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybXNfX2JvZHkgd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e2Zvcm1TdHkudGl0bGV9PtCa0YDQuNGC0LXRgNC40Lgg0L/QvtC40YHQutCwOiDQvdC1INGD0YHRgtCw0L3QvtCy0LvQtdC90Ys8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtmb3JtU3R5LmJ0bl9mb3JtfSBidG5gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXtcImJ1dHRvblwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtwcm9taXNlRGF0ZX0+0JfQsNC/0L7Qu9C90LjRgtGMINGE0L7RgNC80YNcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICB7IGdldENvbXBvbmVudFNlbGVjdCgpIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufVxyXG5cclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==