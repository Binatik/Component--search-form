webpackHotUpdate_N_E("pages/index",{

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
      setIdOption = dataList.setIdOption;

  function saveData() {
    var id = selectRef.current[selectRef.current.selectedIndex + 1].value;
    console.log(checkId(id) + 'test'); //setIdOption(selectRef.current[selectRef.current.selectedIndex + 1].value)
  }

  function checkId(value) {
    switch (value) {
      case 1:
        return data['items'][1].name;

      case 2:
        return data['items'][2].name;

      case 3:
        return data['items'][3].name;

      default:
        return;
    }
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
      form: "Select",
      className: _styles_Selector_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.custom
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
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
          lineNumber: 28,
          columnNumber: 21
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: "".concat(_styles_Selector_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.btn_send, " btn"),
      type: "button",
      onClick: saveData,
      children: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb3JtL3NlbGVjdG9yLmpzIl0sIm5hbWVzIjpbIlNlbGVjdG9yIiwiZGF0YUxpc3QiLCJzZWxlY3RSZWYiLCJ1c2VSZWYiLCJkYXRhIiwic2V0SWRPcHRpb24iLCJzYXZlRGF0YSIsImlkIiwiY3VycmVudCIsInNlbGVjdGVkSW5kZXgiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJjaGVja0lkIiwibmFtZSIsInNlbGVjdG9yU3R5IiwiY3VzdG9tIiwic2VsZWN0IiwiaXRlbXMiLCJtYXAiLCJpbmRleCIsIm9wdGlvbiIsImJ0bl9zZW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxTQUFTQSxRQUFULE9BQThCO0FBQUE7O0FBQUE7O0FBQUEsTUFBWEMsUUFBVyxRQUFYQSxRQUFXO0FBQ2pDLE1BQU1DLFNBQVMsR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQXhCO0FBRGlDLE1BRXpCQyxJQUZ5QixHQUVISCxRQUZHLENBRXpCRyxJQUZ5QjtBQUFBLE1BRW5CQyxXQUZtQixHQUVISixRQUZHLENBRW5CSSxXQUZtQjs7QUFJakMsV0FBU0MsUUFBVCxHQUFtQjtBQUNmLFFBQU1DLEVBQUUsR0FBR0wsU0FBUyxDQUFDTSxPQUFWLENBQWtCTixTQUFTLENBQUNNLE9BQVYsQ0FBa0JDLGFBQWxCLEdBQWtDLENBQXBELEVBQXVEQyxLQUFsRTtBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUMsT0FBTyxDQUFDTixFQUFELENBQVAsR0FBYyxNQUExQixFQUZlLENBR2Y7QUFDSDs7QUFFRCxXQUFTTSxPQUFULENBQWlCSCxLQUFqQixFQUF1QjtBQUNuQixZQUFPQSxLQUFQO0FBQ0ksV0FBSyxDQUFMO0FBQVMsZUFBT04sSUFBSSxDQUFDLE9BQUQsQ0FBSixDQUFjLENBQWQsRUFBaUJVLElBQXhCOztBQUNULFdBQUssQ0FBTDtBQUFTLGVBQU9WLElBQUksQ0FBQyxPQUFELENBQUosQ0FBYyxDQUFkLEVBQWlCVSxJQUF4Qjs7QUFDVCxXQUFLLENBQUw7QUFBUyxlQUFPVixJQUFJLENBQUMsT0FBRCxDQUFKLENBQWMsQ0FBZCxFQUFpQlUsSUFBeEI7O0FBQ1Q7QUFBUztBQUpiO0FBTUg7O0FBRUQsc0JBQ0kscUVBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUEsNEJBQ0k7QUFBTyxVQUFJLEVBQUMsUUFBWjtBQUFxQixlQUFTLEVBQUVDLG1FQUFXLENBQUNDO0FBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJO0FBQVMsU0FBRyxFQUFFZCxTQUFkO0FBQXlCLFFBQUUsRUFBQyxRQUE1QjtBQUFxQyxVQUFJLEVBQUMsUUFBMUM7QUFBbUQsZUFBUyxFQUFFYSxtRUFBVyxDQUFDRSxNQUExRTtBQUFBLGdCQUNLYixJQURMLGFBQ0tBLElBREwsdUJBQ0tBLElBQUksQ0FBRWMsS0FBTixDQUFZQyxHQUFaLENBQWdCLGlCQUFlQyxLQUFmO0FBQUEsWUFBR04sSUFBSCxTQUFHQSxJQUFIO0FBQUEsWUFBU1AsRUFBVCxTQUFTQSxFQUFUO0FBQUEsNEJBQ2I7QUFFSSxtQkFBUyxFQUFFUSxtRUFBVyxDQUFDTSxNQUYzQjtBQUdJLGVBQUssRUFBRUQsS0FIWDtBQUFBLDBCQUdxQk4sSUFIckI7QUFBQSxXQUNTUCxFQURUO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGE7QUFBQSxPQUFoQjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSixlQVdJO0FBQ0ksZUFBUyxZQUFNUSxtRUFBVyxDQUFDTyxRQUFsQixTQURiO0FBRUksVUFBSSxFQUFFLFFBRlY7QUFHSSxhQUFPLEVBQUVoQixRQUhiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFvQkg7O0dBdkNlTixROztLQUFBQSxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjM3ZTE5YWJlMGU1N2FiYjlmYTNjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VSZWZ9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHNlbGVjdG9yU3R5IGZyb20gXCIuLi8uLi9zdHlsZXMvU2VsZWN0b3IubW9kdWxlLnNjc3NcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTZWxlY3Rvcih7ZGF0YUxpc3R9KSB7XHJcbiAgICBjb25zdCBzZWxlY3RSZWYgPSB1c2VSZWYobnVsbClcclxuICAgIGNvbnN0IHsgZGF0YSwgc2V0SWRPcHRpb24gfSA9IGRhdGFMaXN0O1xyXG5cclxuICAgIGZ1bmN0aW9uIHNhdmVEYXRhKCl7XHJcbiAgICAgICAgY29uc3QgaWQgPSBzZWxlY3RSZWYuY3VycmVudFtzZWxlY3RSZWYuY3VycmVudC5zZWxlY3RlZEluZGV4ICsgMV0udmFsdWVcclxuICAgICAgICBjb25zb2xlLmxvZyhjaGVja0lkKGlkKSArICd0ZXN0Jyk7XHJcbiAgICAgICAgLy9zZXRJZE9wdGlvbihzZWxlY3RSZWYuY3VycmVudFtzZWxlY3RSZWYuY3VycmVudC5zZWxlY3RlZEluZGV4ICsgMV0udmFsdWUpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2hlY2tJZCh2YWx1ZSl7XHJcbiAgICAgICAgc3dpdGNoKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMTogIHJldHVybiBkYXRhWydpdGVtcyddWzFdLm5hbWVcclxuICAgICAgICAgICAgY2FzZSAyOiAgcmV0dXJuIGRhdGFbJ2l0ZW1zJ11bMl0ubmFtZVxyXG4gICAgICAgICAgICBjYXNlIDM6ICByZXR1cm4gZGF0YVsnaXRlbXMnXVszXS5uYW1lXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVyblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcm09J1NlbGVjdCcgY2xhc3NOYW1lPXtzZWxlY3RvclN0eS5jdXN0b219Lz5cclxuICAgICAgICAgICAgPHNlbGVjdCAgcmVmPXtzZWxlY3RSZWZ9IGlkPVwiU2VsZWN0XCIgbmFtZT1cIlNlbGVjdFwiIGNsYXNzTmFtZT17c2VsZWN0b3JTdHkuc2VsZWN0fT5cclxuICAgICAgICAgICAgICAgIHtkYXRhPy5pdGVtcy5tYXAoKHsgbmFtZSwgaWQgfSwgaW5kZXgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3NlbGVjdG9yU3R5Lm9wdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2luZGV4fSA+IHtuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17IGAke3NlbGVjdG9yU3R5LmJ0bl9zZW5kfSBidG5gfVxyXG4gICAgICAgICAgICAgICAgdHlwZT17XCJidXR0b25cIn1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3NhdmVEYXRhfVxyXG4gICAgICAgICAgICA+0J7RgtC/0YDQsNCy0LjRgtGMXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9