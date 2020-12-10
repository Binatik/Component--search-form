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
    console.log(value);

    switch (value) {
      case 1:
        return data === null || data === void 0 ? void 0 : data.items;

      case 2:
        return data === null || data === void 0 ? void 0 : data.items;

      case 3:
        return data === null || data === void 0 ? void 0 : data.items;

      default:
        return 'text';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb3JtL3NlbGVjdG9yLmpzIl0sIm5hbWVzIjpbIlNlbGVjdG9yIiwiZGF0YUxpc3QiLCJzZWxlY3RSZWYiLCJ1c2VSZWYiLCJkYXRhIiwic2V0SWRPcHRpb24iLCJzYXZlRGF0YSIsImlkIiwiY3VycmVudCIsInNlbGVjdGVkSW5kZXgiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJjaGVja0lkIiwiaXRlbXMiLCJzZWxlY3RvclN0eSIsImN1c3RvbSIsInNlbGVjdCIsIm1hcCIsImluZGV4IiwibmFtZSIsIm9wdGlvbiIsImJ0bl9zZW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxTQUFTQSxRQUFULE9BQThCO0FBQUE7O0FBQUE7O0FBQUEsTUFBWEMsUUFBVyxRQUFYQSxRQUFXO0FBQ2pDLE1BQU1DLFNBQVMsR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQXhCO0FBRGlDLE1BRXpCQyxJQUZ5QixHQUVISCxRQUZHLENBRXpCRyxJQUZ5QjtBQUFBLE1BRW5CQyxXQUZtQixHQUVISixRQUZHLENBRW5CSSxXQUZtQjs7QUFJakMsV0FBU0MsUUFBVCxHQUFtQjtBQUNmLFFBQU1DLEVBQUUsR0FBR0wsU0FBUyxDQUFDTSxPQUFWLENBQWtCTixTQUFTLENBQUNNLE9BQVYsQ0FBa0JDLGFBQWxCLEdBQWtDLENBQXBELEVBQXVEQyxLQUFsRTtBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUwsRUFBWjtBQUNBSSxXQUFPLENBQUNDLEdBQVIsQ0FBWUMsT0FBTyxDQUFDTixFQUFELENBQW5CLEVBSGUsQ0FJZjtBQUNIOztBQUVELFdBQVNNLE9BQVQsQ0FBaUJILEtBQWpCLEVBQXVCO0FBQ25CQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjs7QUFDQSxZQUFPQSxLQUFQO0FBQ0ksV0FBSyxDQUFMO0FBQVMsZUFBT04sSUFBUCxhQUFPQSxJQUFQLHVCQUFPQSxJQUFJLENBQUVVLEtBQWI7O0FBQ1QsV0FBSyxDQUFMO0FBQVMsZUFBT1YsSUFBUCxhQUFPQSxJQUFQLHVCQUFPQSxJQUFJLENBQUVVLEtBQWI7O0FBQ1QsV0FBSyxDQUFMO0FBQVMsZUFBT1YsSUFBUCxhQUFPQSxJQUFQLHVCQUFPQSxJQUFJLENBQUVVLEtBQWI7O0FBQ1Q7QUFBUyxlQUFPLE1BQVA7QUFKYjtBQU1IOztBQUVELHNCQUNJLHFFQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBLDRCQUNJO0FBQU8sVUFBSSxFQUFDLFFBQVo7QUFBcUIsZUFBUyxFQUFFQyxtRUFBVyxDQUFDQztBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSTtBQUFTLFNBQUcsRUFBRWQsU0FBZDtBQUF5QixRQUFFLEVBQUMsUUFBNUI7QUFBcUMsVUFBSSxFQUFDLFFBQTFDO0FBQW1ELGVBQVMsRUFBRWEsbUVBQVcsQ0FBQ0UsTUFBMUU7QUFBQSxnQkFDS2IsSUFETCxhQUNLQSxJQURMLHVCQUNLQSxJQUFJLENBQUVVLEtBQU4sQ0FBWUksR0FBWixDQUFnQixpQkFBZUMsS0FBZjtBQUFBLFlBQUdDLElBQUgsU0FBR0EsSUFBSDtBQUFBLFlBQVNiLEVBQVQsU0FBU0EsRUFBVDtBQUFBLDRCQUNiO0FBRUksbUJBQVMsRUFBRVEsbUVBQVcsQ0FBQ00sTUFGM0I7QUFHSSxlQUFLLEVBQUVGLEtBSFg7QUFBQSwwQkFHcUJDLElBSHJCO0FBQUEsV0FDU2IsRUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURhO0FBQUEsT0FBaEI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFXSTtBQUNJLGVBQVMsWUFBTVEsbUVBQVcsQ0FBQ08sUUFBbEIsU0FEYjtBQUVJLFVBQUksRUFBRSxRQUZWO0FBR0ksYUFBTyxFQUFFaEIsUUFIYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBb0JIOztHQXpDZU4sUTs7S0FBQUEsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wMjBmZGJmOTIwMjY1MTYxOWUzZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlUmVmfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzZWxlY3RvclN0eSBmcm9tIFwiLi4vLi4vc3R5bGVzL1NlbGVjdG9yLm1vZHVsZS5zY3NzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2VsZWN0b3Ioe2RhdGFMaXN0fSkge1xyXG4gICAgY29uc3Qgc2VsZWN0UmVmID0gdXNlUmVmKG51bGwpXHJcbiAgICBjb25zdCB7IGRhdGEsIHNldElkT3B0aW9uIH0gPSBkYXRhTGlzdDtcclxuXHJcbiAgICBmdW5jdGlvbiBzYXZlRGF0YSgpe1xyXG4gICAgICAgIGNvbnN0IGlkID0gc2VsZWN0UmVmLmN1cnJlbnRbc2VsZWN0UmVmLmN1cnJlbnQuc2VsZWN0ZWRJbmRleCArIDFdLnZhbHVlXHJcbiAgICAgICAgY29uc29sZS5sb2coaWQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNoZWNrSWQoaWQpKTtcclxuICAgICAgICAvL3NldElkT3B0aW9uKHNlbGVjdFJlZi5jdXJyZW50W3NlbGVjdFJlZi5jdXJyZW50LnNlbGVjdGVkSW5kZXggKyAxXS52YWx1ZSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjaGVja0lkKHZhbHVlKXtcclxuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgICAgICAgc3dpdGNoKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMTogIHJldHVybiBkYXRhPy5pdGVtc1xyXG4gICAgICAgICAgICBjYXNlIDI6ICByZXR1cm4gZGF0YT8uaXRlbXNcclxuICAgICAgICAgICAgY2FzZSAzOiAgcmV0dXJuIGRhdGE/Lml0ZW1zXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiAndGV4dCc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9ybT0nU2VsZWN0JyBjbGFzc05hbWU9e3NlbGVjdG9yU3R5LmN1c3RvbX0vPlxyXG4gICAgICAgICAgICA8c2VsZWN0ICByZWY9e3NlbGVjdFJlZn0gaWQ9XCJTZWxlY3RcIiBuYW1lPVwiU2VsZWN0XCIgY2xhc3NOYW1lPXtzZWxlY3RvclN0eS5zZWxlY3R9PlxyXG4gICAgICAgICAgICAgICAge2RhdGE/Lml0ZW1zLm1hcCgoeyBuYW1lLCBpZCB9LCBpbmRleCkgPT5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c2VsZWN0b3JTdHkub3B0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aW5kZXh9ID4ge25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsgYCR7c2VsZWN0b3JTdHkuYnRuX3NlbmR9IGJ0bmB9XHJcbiAgICAgICAgICAgICAgICB0eXBlPXtcImJ1dHRvblwifVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17c2F2ZURhdGF9XHJcbiAgICAgICAgICAgID7QntGC0L/RgNCw0LLQuNGC0YxcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=