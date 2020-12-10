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
    console.log(id);
    console.log(checkId(id)); //setIdOption(selectRef.current[selectRef.current.selectedIndex + 1].value)
  }

  function checkId(value) {
    switch (value) {
      case 1:
        return data === null || data === void 0 ? void 0 : data.items;

      case 2:
        return data === null || data === void 0 ? void 0 : data.items;

      case 3:
        return data === null || data === void 0 ? void 0 : data.items;

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
      lineNumber: 26,
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
          lineNumber: 29,
          columnNumber: 21
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: "".concat(_styles_Selector_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.btn_send, " btn"),
      type: "button",
      onClick: saveData,
      children: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb3JtL3NlbGVjdG9yLmpzIl0sIm5hbWVzIjpbIlNlbGVjdG9yIiwiZGF0YUxpc3QiLCJzZWxlY3RSZWYiLCJ1c2VSZWYiLCJkYXRhIiwic2V0SWRPcHRpb24iLCJzYXZlRGF0YSIsImlkIiwiY3VycmVudCIsInNlbGVjdGVkSW5kZXgiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJjaGVja0lkIiwiaXRlbXMiLCJzZWxlY3RvclN0eSIsImN1c3RvbSIsInNlbGVjdCIsIm1hcCIsImluZGV4IiwibmFtZSIsIm9wdGlvbiIsImJ0bl9zZW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxTQUFTQSxRQUFULE9BQThCO0FBQUE7O0FBQUE7O0FBQUEsTUFBWEMsUUFBVyxRQUFYQSxRQUFXO0FBQ2pDLE1BQU1DLFNBQVMsR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQXhCO0FBRGlDLE1BRXpCQyxJQUZ5QixHQUVISCxRQUZHLENBRXpCRyxJQUZ5QjtBQUFBLE1BRW5CQyxXQUZtQixHQUVISixRQUZHLENBRW5CSSxXQUZtQjs7QUFJakMsV0FBU0MsUUFBVCxHQUFtQjtBQUNmLFFBQU1DLEVBQUUsR0FBR0wsU0FBUyxDQUFDTSxPQUFWLENBQWtCTixTQUFTLENBQUNNLE9BQVYsQ0FBa0JDLGFBQWxCLEdBQWtDLENBQXBELEVBQXVEQyxLQUFsRTtBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUwsRUFBWjtBQUNBSSxXQUFPLENBQUNDLEdBQVIsQ0FBWUMsT0FBTyxDQUFDTixFQUFELENBQW5CLEVBSGUsQ0FJZjtBQUNIOztBQUVELFdBQVNNLE9BQVQsQ0FBaUJILEtBQWpCLEVBQXVCO0FBQ25CLFlBQU9BLEtBQVA7QUFDSSxXQUFLLENBQUw7QUFBUyxlQUFPTixJQUFQLGFBQU9BLElBQVAsdUJBQU9BLElBQUksQ0FBRVUsS0FBYjs7QUFDVCxXQUFLLENBQUw7QUFBUyxlQUFPVixJQUFQLGFBQU9BLElBQVAsdUJBQU9BLElBQUksQ0FBRVUsS0FBYjs7QUFDVCxXQUFLLENBQUw7QUFBUyxlQUFPVixJQUFQLGFBQU9BLElBQVAsdUJBQU9BLElBQUksQ0FBRVUsS0FBYjs7QUFDVDtBQUFTO0FBSmI7QUFNSDs7QUFFRCxzQkFDSSxxRUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQSw0QkFDSTtBQUFPLFVBQUksRUFBQyxRQUFaO0FBQXFCLGVBQVMsRUFBRUMsbUVBQVcsQ0FBQ0M7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUk7QUFBUyxTQUFHLEVBQUVkLFNBQWQ7QUFBeUIsUUFBRSxFQUFDLFFBQTVCO0FBQXFDLFVBQUksRUFBQyxRQUExQztBQUFtRCxlQUFTLEVBQUVhLG1FQUFXLENBQUNFLE1BQTFFO0FBQUEsZ0JBQ0tiLElBREwsYUFDS0EsSUFETCx1QkFDS0EsSUFBSSxDQUFFVSxLQUFOLENBQVlJLEdBQVosQ0FBZ0IsaUJBQWVDLEtBQWY7QUFBQSxZQUFHQyxJQUFILFNBQUdBLElBQUg7QUFBQSxZQUFTYixFQUFULFNBQVNBLEVBQVQ7QUFBQSw0QkFDYjtBQUVJLG1CQUFTLEVBQUVRLG1FQUFXLENBQUNNLE1BRjNCO0FBR0ksZUFBSyxFQUFFRixLQUhYO0FBQUEsMEJBR3FCQyxJQUhyQjtBQUFBLFdBQ1NiLEVBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEYTtBQUFBLE9BQWhCO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLGVBV0k7QUFDSSxlQUFTLFlBQU1RLG1FQUFXLENBQUNPLFFBQWxCLFNBRGI7QUFFSSxVQUFJLEVBQUUsUUFGVjtBQUdJLGFBQU8sRUFBRWhCLFFBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQW9CSDs7R0F4Q2VOLFE7O0tBQUFBLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguN2UyMDFhZWRiOTdiMzA2YThkYjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVJlZn0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc2VsZWN0b3JTdHkgZnJvbSBcIi4uLy4uL3N0eWxlcy9TZWxlY3Rvci5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNlbGVjdG9yKHtkYXRhTGlzdH0pIHtcclxuICAgIGNvbnN0IHNlbGVjdFJlZiA9IHVzZVJlZihudWxsKVxyXG4gICAgY29uc3QgeyBkYXRhLCBzZXRJZE9wdGlvbiB9ID0gZGF0YUxpc3Q7XHJcblxyXG4gICAgZnVuY3Rpb24gc2F2ZURhdGEoKXtcclxuICAgICAgICBjb25zdCBpZCA9IHNlbGVjdFJlZi5jdXJyZW50W3NlbGVjdFJlZi5jdXJyZW50LnNlbGVjdGVkSW5kZXggKyAxXS52YWx1ZVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGlkKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhjaGVja0lkKGlkKSk7XHJcbiAgICAgICAgLy9zZXRJZE9wdGlvbihzZWxlY3RSZWYuY3VycmVudFtzZWxlY3RSZWYuY3VycmVudC5zZWxlY3RlZEluZGV4ICsgMV0udmFsdWUpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2hlY2tJZCh2YWx1ZSl7XHJcbiAgICAgICAgc3dpdGNoKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMTogIHJldHVybiBkYXRhPy5pdGVtc1xyXG4gICAgICAgICAgICBjYXNlIDI6ICByZXR1cm4gZGF0YT8uaXRlbXNcclxuICAgICAgICAgICAgY2FzZSAzOiAgcmV0dXJuIGRhdGE/Lml0ZW1zXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVyblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcm09J1NlbGVjdCcgY2xhc3NOYW1lPXtzZWxlY3RvclN0eS5jdXN0b219Lz5cclxuICAgICAgICAgICAgPHNlbGVjdCAgcmVmPXtzZWxlY3RSZWZ9IGlkPVwiU2VsZWN0XCIgbmFtZT1cIlNlbGVjdFwiIGNsYXNzTmFtZT17c2VsZWN0b3JTdHkuc2VsZWN0fT5cclxuICAgICAgICAgICAgICAgIHtkYXRhPy5pdGVtcy5tYXAoKHsgbmFtZSwgaWQgfSwgaW5kZXgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3NlbGVjdG9yU3R5Lm9wdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2luZGV4fSA+IHtuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17IGAke3NlbGVjdG9yU3R5LmJ0bl9zZW5kfSBidG5gfVxyXG4gICAgICAgICAgICAgICAgdHlwZT17XCJidXR0b25cIn1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3NhdmVEYXRhfVxyXG4gICAgICAgICAgICA+0J7RgtC/0YDQsNCy0LjRgtGMXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9