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
    var id = selectRef.current[selectRef.current.selectedIndex].value;
    console.log(id);
    console.log(checkId(id)); //setIdOption(selectRef.current[selectRef.current.selectedIndex + 1].value)
  }

  function checkId(value) {
    console.log(value);

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
      lineNumber: 27,
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
          lineNumber: 30,
          columnNumber: 21
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: "".concat(_styles_Selector_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.btn_send, " btn"),
      type: "button",
      onClick: saveData,
      children: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb3JtL3NlbGVjdG9yLmpzIl0sIm5hbWVzIjpbIlNlbGVjdG9yIiwiZGF0YUxpc3QiLCJzZWxlY3RSZWYiLCJ1c2VSZWYiLCJkYXRhIiwic2V0SWRPcHRpb24iLCJzYXZlRGF0YSIsImlkIiwiY3VycmVudCIsInNlbGVjdGVkSW5kZXgiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJjaGVja0lkIiwiaSIsIml0ZW1zIiwibGVuZ3RoIiwic2VsZWN0b3JTdHkiLCJjdXN0b20iLCJzZWxlY3QiLCJtYXAiLCJpbmRleCIsIm5hbWUiLCJvcHRpb24iLCJidG5fc2VuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sU0FBU0EsUUFBVCxPQUE4QjtBQUFBOztBQUFBOztBQUFBLE1BQVhDLFFBQVcsUUFBWEEsUUFBVztBQUNqQyxNQUFNQyxTQUFTLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUF4QjtBQURpQyxNQUV6QkMsSUFGeUIsR0FFSEgsUUFGRyxDQUV6QkcsSUFGeUI7QUFBQSxNQUVuQkMsV0FGbUIsR0FFSEosUUFGRyxDQUVuQkksV0FGbUI7O0FBSWpDLFdBQVNDLFFBQVQsR0FBbUI7QUFDZixRQUFNQyxFQUFFLEdBQUdMLFNBQVMsQ0FBQ00sT0FBVixDQUFrQk4sU0FBUyxDQUFDTSxPQUFWLENBQWtCQyxhQUFwQyxFQUFtREMsS0FBOUQ7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVlMLEVBQVo7QUFDQUksV0FBTyxDQUFDQyxHQUFSLENBQVlDLE9BQU8sQ0FBQ04sRUFBRCxDQUFuQixFQUhlLENBSWY7QUFDSDs7QUFFRCxXQUFTTSxPQUFULENBQWlCSCxLQUFqQixFQUF1QjtBQUNuQkMsV0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7O0FBQ0EsU0FBSSxJQUFJSSxDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUNWLElBQUksQ0FBQ1csS0FBTCxDQUFXQyxNQUE1QixFQUFvQ0YsQ0FBQyxFQUFyQyxFQUF3QztBQUNwQyxVQUFHQSxDQUFDLEtBQUtKLEtBQVQsRUFBZTtBQUNYQyxlQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaO0FBQ0EsZUFBT1IsSUFBUCxhQUFPQSxJQUFQLHVCQUFPQSxJQUFJLENBQUVXLEtBQU4sQ0FBWUQsQ0FBWixDQUFQO0FBQ0g7QUFDSjtBQUNKOztBQUVELHNCQUNJLHFFQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBLDRCQUNJO0FBQU8sVUFBSSxFQUFDLFFBQVo7QUFBcUIsZUFBUyxFQUFFRyxtRUFBVyxDQUFDQztBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSTtBQUFTLFNBQUcsRUFBRWhCLFNBQWQ7QUFBeUIsUUFBRSxFQUFDLFFBQTVCO0FBQXFDLFVBQUksRUFBQyxRQUExQztBQUFtRCxlQUFTLEVBQUVlLG1FQUFXLENBQUNFLE1BQTFFO0FBQUEsZ0JBQ0tmLElBREwsYUFDS0EsSUFETCx1QkFDS0EsSUFBSSxDQUFFVyxLQUFOLENBQVlLLEdBQVosQ0FBZ0IsaUJBQWVDLEtBQWY7QUFBQSxZQUFHQyxJQUFILFNBQUdBLElBQUg7QUFBQSxZQUFTZixFQUFULFNBQVNBLEVBQVQ7QUFBQSw0QkFDYjtBQUVJLG1CQUFTLEVBQUVVLG1FQUFXLENBQUNNLE1BRjNCO0FBR0ksZUFBSyxFQUFFRixLQUhYO0FBQUEsMEJBR3FCQyxJQUhyQjtBQUFBLFdBQ1NmLEVBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEYTtBQUFBLE9BQWhCO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLGVBV0k7QUFDSSxlQUFTLFlBQU1VLG1FQUFXLENBQUNPLFFBQWxCLFNBRGI7QUFFSSxVQUFJLEVBQUUsUUFGVjtBQUdJLGFBQU8sRUFBRWxCLFFBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQW9CSDs7R0F6Q2VOLFE7O0tBQUFBLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMWQxNGVhMzc4NTBmZWY1ZTVlYjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVJlZn0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc2VsZWN0b3JTdHkgZnJvbSBcIi4uLy4uL3N0eWxlcy9TZWxlY3Rvci5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNlbGVjdG9yKHtkYXRhTGlzdH0pIHtcclxuICAgIGNvbnN0IHNlbGVjdFJlZiA9IHVzZVJlZihudWxsKVxyXG4gICAgY29uc3QgeyBkYXRhLCBzZXRJZE9wdGlvbiB9ID0gZGF0YUxpc3Q7XHJcblxyXG4gICAgZnVuY3Rpb24gc2F2ZURhdGEoKXtcclxuICAgICAgICBjb25zdCBpZCA9IHNlbGVjdFJlZi5jdXJyZW50W3NlbGVjdFJlZi5jdXJyZW50LnNlbGVjdGVkSW5kZXhdLnZhbHVlXHJcbiAgICAgICAgY29uc29sZS5sb2coaWQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNoZWNrSWQoaWQpKTtcclxuICAgICAgICAvL3NldElkT3B0aW9uKHNlbGVjdFJlZi5jdXJyZW50W3NlbGVjdFJlZi5jdXJyZW50LnNlbGVjdGVkSW5kZXggKyAxXS52YWx1ZSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjaGVja0lkKHZhbHVlKXtcclxuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaTxkYXRhLml0ZW1zLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgaWYoaSA9PT0gdmFsdWUpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3Rlc3QnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhPy5pdGVtc1tpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcm09J1NlbGVjdCcgY2xhc3NOYW1lPXtzZWxlY3RvclN0eS5jdXN0b219Lz5cclxuICAgICAgICAgICAgPHNlbGVjdCAgcmVmPXtzZWxlY3RSZWZ9IGlkPVwiU2VsZWN0XCIgbmFtZT1cIlNlbGVjdFwiIGNsYXNzTmFtZT17c2VsZWN0b3JTdHkuc2VsZWN0fT5cclxuICAgICAgICAgICAgICAgIHtkYXRhPy5pdGVtcy5tYXAoKHsgbmFtZSwgaWQgfSwgaW5kZXgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3NlbGVjdG9yU3R5Lm9wdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2luZGV4fSA+IHtuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17IGAke3NlbGVjdG9yU3R5LmJ0bl9zZW5kfSBidG5gfVxyXG4gICAgICAgICAgICAgICAgdHlwZT17XCJidXR0b25cIn1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3NhdmVEYXRhfVxyXG4gICAgICAgICAgICA+0J7RgtC/0YDQsNCy0LjRgtGMXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9