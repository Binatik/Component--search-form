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
            promiseDate: promiseDate
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
/* harmony import */ var _styles_SearchForm_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/SearchForm.module.scss */ "./styles/SearchForm.module.scss");
/* harmony import */ var _styles_SearchForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_SearchForm_module_scss__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "D:\\\u0410\u0440\u0445\u0438\u0432\\Project\\local\\\u0420\u0430\u0431\u043E\u0442\u0430\\SearchForm\\form\\components\\form\\request.js";


function Request(_ref) {
  var value = _ref.value,
      setObject = _ref.setObject;
  var id = value.id,
      name = value.name;

  function changeQuery(_ref2) {
    var query = _ref2.query;
    var setObject = query.setObject,
        promiseDate = query.promiseDate;
    setObject(null);
    promiseDate(null);
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb3JtL2Zvcm0uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZm9ybS9yZXF1ZXN0LmpzIl0sIm5hbWVzIjpbIkZvcm0iLCJsb2FkaW5nIiwidXNlQ29udGV4dCIsIk1haW5Db250ZXh0IiwicHJvbWlzZURhdGUiLCJkYXRhIiwiaXNMb2FkaW5nIiwiaXNFcnJvciIsInVzZVN0YXRlIiwib2JqZWN0Iiwic2V0T2JqZWN0Iiwic2xlZXAiLCJtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsImdldENvbXBvbmVudFNlbGVjdCIsImNvbnNvbGUiLCJsb2ciLCJzZW5kVGV4dCIsImVycm9yIiwiZm9ybVN0eSIsInRpdGxlIiwiYnRuX2Zvcm0iLCJSZXF1ZXN0IiwidmFsdWUiLCJpZCIsIm5hbWUiLCJjaGFuZ2VRdWVyeSIsInF1ZXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUlBOztBQUNBO0FBQ0E7Q0FHQTs7QUFDQTtBQUdPLFNBQVNBLElBQVQsT0FBMkI7QUFBQTs7QUFBQSxNQUFYQyxPQUFXLFFBQVhBLE9BQVc7O0FBQUEsb0JBQ0FDLHdEQUFVLENBQUNDLGtEQUFELENBRFY7QUFBQSxNQUN0QkMsV0FEc0IsZUFDdEJBLFdBRHNCO0FBQUEsTUFDVEMsSUFEUyxlQUNUQSxJQURTOztBQUFBLE1BRXRCQyxTQUZzQixHQUVDTCxPQUZELENBRXRCSyxTQUZzQjtBQUFBLE1BRVhDLE9BRlcsR0FFQ04sT0FGRCxDQUVYTSxPQUZXOztBQUFBLGtCQUdBQyxzREFBUSxDQUFDLElBQUQsQ0FIUjtBQUFBLE1BR3RCQyxNQUhzQjtBQUFBLE1BR2RDLFNBSGM7O0FBSzdCLFdBQVNDLEtBQVQsQ0FBZUMsRUFBZixFQUFtQjtBQUNoQixXQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFBQyxPQUFPO0FBQUEsYUFBSUMsVUFBVSxDQUFDRCxPQUFELEVBQVVG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LEdBQXNDLElBRGhELGVBRUk7QUFDSSxlQUFTLE9BRGI7QUFFSSxVQUFJLEVBQUUsUUFGVjtBQUdJLGFBQU8sRUFBRUUsV0FIYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBVUg7S0FwQmVKLE8iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNGU5ODliNjBlNzdlMmQyMTgyMzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUNvbnRleHQsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgZm9ybVN0eSBmcm9tICcuLi8uLi9zdHlsZXMvU2VhcmNoRm9ybS5tb2R1bGUuc2NzcydcclxuXHJcbi8vY29tcG9uZW50XHJcbmltcG9ydCB7U2VsZWN0b3J9IGZyb20gJy4vc2VsZWN0b3IuanMnXHJcbmltcG9ydCB7TG9hZGVyRm9ybUVycm9yfSBmcm9tIFwiLi9Mb2FkZXJGb3JtRXJyb3JcIjtcclxuaW1wb3J0IHtSZXF1ZXN0fSBmcm9tIFwiLi9yZXF1ZXN0XCI7XHJcblxyXG4vL1Byb3ZpZGVyXHJcbmltcG9ydCB7TWFpbkNvbnRleHR9IGZyb20gXCIuLi8uLi9wYWdlc1wiO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBGb3JtKHsgbG9hZGluZyB9KSB7XHJcbiAgICBjb25zdCB7IHByb21pc2VEYXRlLCBkYXRhIH0gPSB1c2VDb250ZXh0KE1haW5Db250ZXh0KTtcclxuICAgIGNvbnN0IHsgaXNMb2FkaW5nLCBpc0Vycm9yIH0gPSBsb2FkaW5nO1xyXG4gICAgY29uc3QgWyBvYmplY3QsIHNldE9iamVjdCBdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgIGZ1bmN0aW9uIHNsZWVwKG1zKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldENvbXBvbmVudFNlbGVjdCgpe1xyXG4gICAgICAgIGlmIChpc0xvYWRpbmcgPT09IGZhbHNlICYmIGlzRXJyb3IgIT09IHRydWUpe1xyXG4gICAgICAgICAgcmV0dXJuIDxTZWxlY3RvciBkYXRhTGlzdD17IHtkYXRhLCBzZXRPYmplY3R9IH0vPlxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChpc0xvYWRpbmcgJiYgaXNFcnJvciAhPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn0JfQsNCz0YDRg9C30LrQsCDQtNCw0L3QvdGL0YUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoaXNFcnJvciA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn0J7RiNC40LHQutCwJyk7XHJcbiAgICAgICAgICAgIHJldHVybiA8TG9hZGVyRm9ybUVycm9yIHNsZWVwPXtzbGVlcH0vPlxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZW5kVGV4dChlcnJvcil7XHJcbiAgICAgICAgcmV0dXJuIG9iamVjdCAhPT0gbnVsbCA/ICfQmtGA0LjRgtC10YDQuNC4INC/0L7QuNGB0LrQsCcgOiBg0JrRgNC40YLQtdGA0LjQuCDQv9C+0LjRgdC60LAgJHtlcnJvcn1gO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJjZW50ZXItaXRlbXMgZm9ybXNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybXNfX2JvZHkgd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e2Zvcm1TdHkudGl0bGV9Pnsgc2VuZFRleHQoJ9C90LUg0YPRgdGC0LDQvdC+0LLQu9C10L3RiycpIH08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIHsgb2JqZWN0ICE9PSBudWxsID8gPFJlcXVlc3QgdmFsdWU9e29iamVjdH0gcXVlcnk9eyB7c2V0T2JqZWN0LCBwcm9taXNlRGF0ZX0gfS8+IDogbnVsbCB9XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2Zvcm1TdHkuYnRuX2Zvcm19IGJ0bmB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e1wiYnV0dG9uXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Byb21pc2VEYXRlfT7Ql9Cw0L/QvtC70L3QuNGC0Ywg0YTQvtGA0LzRg1xyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIHsgZ2V0Q29tcG9uZW50U2VsZWN0KCkgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgZm9ybVN0eSBmcm9tIFwiLi4vLi4vc3R5bGVzL1NlYXJjaEZvcm0ubW9kdWxlLnNjc3NcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBSZXF1ZXN0KHt2YWx1ZSwgc2V0T2JqZWN0fSkge1xyXG4gICAgY29uc3QgeyBpZCwgbmFtZSB9ID0gdmFsdWVcclxuXHJcbiAgICBmdW5jdGlvbiBjaGFuZ2VRdWVyeSh7cXVlcnl9KXtcclxuICAgICAgICBjb25zdCB7c2V0T2JqZWN0LCBwcm9taXNlRGF0ZX0gPSBxdWVyeTtcclxuICAgICAgICBzZXRPYmplY3QobnVsbCk7XHJcbiAgICAgICAgcHJvbWlzZURhdGUobnVsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/QodC/0LjRgdC+0Lo6INCt0LvQtdC80LXQvdGCIDEgKGlkIyAxMDQwMDAxMzQpXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICB7dmFsdWUgPyA8cD7QodC/0LjRgdC+0Lo6IHtuYW1lfSAoaWQjIHtpZH0pPC9wPiA6IG51bGx9XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJ0bmB9XHJcbiAgICAgICAgICAgICAgICB0eXBlPXtcImJ1dHRvblwifVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17Y2hhbmdlUXVlcnl9PtCY0LfQvNC10L3QuNGC0Ywg0LfQsNC/0YDQvtGBXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9