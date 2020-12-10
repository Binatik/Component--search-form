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

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



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

    var _iterator = _createForOfIteratorHelper(data.items.length),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var element = _step.value;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    switch (value) {
      case '0':
        return data === null || data === void 0 ? void 0 : data.items[0];

      case '1':
        return data === null || data === void 0 ? void 0 : data.items[1];

      case '2':
        return data === null || data === void 0 ? void 0 : data.items[2];

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
      lineNumber: 31,
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
          lineNumber: 34,
          columnNumber: 21
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: "".concat(_styles_Selector_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.btn_send, " btn"),
      type: "button",
      onClick: saveData,
      children: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb3JtL3NlbGVjdG9yLmpzIl0sIm5hbWVzIjpbIlNlbGVjdG9yIiwiZGF0YUxpc3QiLCJzZWxlY3RSZWYiLCJ1c2VSZWYiLCJkYXRhIiwic2V0SWRPcHRpb24iLCJzYXZlRGF0YSIsImlkIiwiY3VycmVudCIsInNlbGVjdGVkSW5kZXgiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJjaGVja0lkIiwiaXRlbXMiLCJsZW5ndGgiLCJlbGVtZW50Iiwic2VsZWN0b3JTdHkiLCJjdXN0b20iLCJzZWxlY3QiLCJtYXAiLCJpbmRleCIsIm5hbWUiLCJvcHRpb24iLCJidG5fc2VuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sU0FBU0EsUUFBVCxPQUE4QjtBQUFBOztBQUFBOztBQUFBLE1BQVhDLFFBQVcsUUFBWEEsUUFBVztBQUNqQyxNQUFNQyxTQUFTLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUF4QjtBQURpQyxNQUV6QkMsSUFGeUIsR0FFSEgsUUFGRyxDQUV6QkcsSUFGeUI7QUFBQSxNQUVuQkMsV0FGbUIsR0FFSEosUUFGRyxDQUVuQkksV0FGbUI7O0FBSWpDLFdBQVNDLFFBQVQsR0FBbUI7QUFDZixRQUFNQyxFQUFFLEdBQUdMLFNBQVMsQ0FBQ00sT0FBVixDQUFrQk4sU0FBUyxDQUFDTSxPQUFWLENBQWtCQyxhQUFwQyxFQUFtREMsS0FBOUQ7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVlMLEVBQVo7QUFDQUksV0FBTyxDQUFDQyxHQUFSLENBQVlDLE9BQU8sQ0FBQ04sRUFBRCxDQUFuQixFQUhlLENBSWY7QUFDSDs7QUFFRCxXQUFTTSxPQUFULENBQWlCSCxLQUFqQixFQUF1QjtBQUNuQkMsV0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7O0FBRG1CLCtDQUVDTixJQUFJLENBQUNVLEtBQUwsQ0FBV0MsTUFGWjtBQUFBOztBQUFBO0FBRW5CLDBEQUFzQztBQUFBLFlBQTdCQyxPQUE2QjtBQUVyQztBQUprQjtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQU1uQixZQUFPTixLQUFQO0FBQ0ksV0FBSyxHQUFMO0FBQVcsZUFBT04sSUFBUCxhQUFPQSxJQUFQLHVCQUFPQSxJQUFJLENBQUVVLEtBQU4sQ0FBWSxDQUFaLENBQVA7O0FBQ1gsV0FBSyxHQUFMO0FBQVcsZUFBT1YsSUFBUCxhQUFPQSxJQUFQLHVCQUFPQSxJQUFJLENBQUVVLEtBQU4sQ0FBWSxDQUFaLENBQVA7O0FBQ1gsV0FBSyxHQUFMO0FBQVcsZUFBT1YsSUFBUCxhQUFPQSxJQUFQLHVCQUFPQSxJQUFJLENBQUVVLEtBQU4sQ0FBWSxDQUFaLENBQVA7O0FBQ1g7QUFBUztBQUpiO0FBTUg7O0FBRUQsc0JBQ0kscUVBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUEsNEJBQ0k7QUFBTyxVQUFJLEVBQUMsUUFBWjtBQUFxQixlQUFTLEVBQUVHLG1FQUFXLENBQUNDO0FBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJO0FBQVMsU0FBRyxFQUFFaEIsU0FBZDtBQUF5QixRQUFFLEVBQUMsUUFBNUI7QUFBcUMsVUFBSSxFQUFDLFFBQTFDO0FBQW1ELGVBQVMsRUFBRWUsbUVBQVcsQ0FBQ0UsTUFBMUU7QUFBQSxnQkFDS2YsSUFETCxhQUNLQSxJQURMLHVCQUNLQSxJQUFJLENBQUVVLEtBQU4sQ0FBWU0sR0FBWixDQUFnQixpQkFBZUMsS0FBZjtBQUFBLFlBQUdDLElBQUgsU0FBR0EsSUFBSDtBQUFBLFlBQVNmLEVBQVQsU0FBU0EsRUFBVDtBQUFBLDRCQUNiO0FBRUksbUJBQVMsRUFBRVUsbUVBQVcsQ0FBQ00sTUFGM0I7QUFHSSxlQUFLLEVBQUVGLEtBSFg7QUFBQSwwQkFHcUJDLElBSHJCO0FBQUEsV0FDU2YsRUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURhO0FBQUEsT0FBaEI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFXSTtBQUNJLGVBQVMsWUFBTVUsbUVBQVcsQ0FBQ08sUUFBbEIsU0FEYjtBQUVJLFVBQUksRUFBRSxRQUZWO0FBR0ksYUFBTyxFQUFFbEIsUUFIYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBb0JIOztHQTdDZU4sUTs7S0FBQUEsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iZWYzMTkwNzIwMjBmODUwMDM1ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlUmVmfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzZWxlY3RvclN0eSBmcm9tIFwiLi4vLi4vc3R5bGVzL1NlbGVjdG9yLm1vZHVsZS5zY3NzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2VsZWN0b3Ioe2RhdGFMaXN0fSkge1xyXG4gICAgY29uc3Qgc2VsZWN0UmVmID0gdXNlUmVmKG51bGwpXHJcbiAgICBjb25zdCB7IGRhdGEsIHNldElkT3B0aW9uIH0gPSBkYXRhTGlzdDtcclxuXHJcbiAgICBmdW5jdGlvbiBzYXZlRGF0YSgpe1xyXG4gICAgICAgIGNvbnN0IGlkID0gc2VsZWN0UmVmLmN1cnJlbnRbc2VsZWN0UmVmLmN1cnJlbnQuc2VsZWN0ZWRJbmRleF0udmFsdWVcclxuICAgICAgICBjb25zb2xlLmxvZyhpZCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coY2hlY2tJZChpZCkpO1xyXG4gICAgICAgIC8vc2V0SWRPcHRpb24oc2VsZWN0UmVmLmN1cnJlbnRbc2VsZWN0UmVmLmN1cnJlbnQuc2VsZWN0ZWRJbmRleCArIDFdLnZhbHVlKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNoZWNrSWQodmFsdWUpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICAgICAgICBmb3IgKGxldCBlbGVtZW50IG9mIGRhdGEuaXRlbXMubGVuZ3RoKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzd2l0Y2godmFsdWUpIHtcclxuICAgICAgICAgICAgY2FzZSAnMCc6ICByZXR1cm4gZGF0YT8uaXRlbXNbMF07XHJcbiAgICAgICAgICAgIGNhc2UgJzEnOiAgcmV0dXJuIGRhdGE/Lml0ZW1zWzFdO1xyXG4gICAgICAgICAgICBjYXNlICcyJzogIHJldHVybiBkYXRhPy5pdGVtc1syXTtcclxuICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcm09J1NlbGVjdCcgY2xhc3NOYW1lPXtzZWxlY3RvclN0eS5jdXN0b219Lz5cclxuICAgICAgICAgICAgPHNlbGVjdCAgcmVmPXtzZWxlY3RSZWZ9IGlkPVwiU2VsZWN0XCIgbmFtZT1cIlNlbGVjdFwiIGNsYXNzTmFtZT17c2VsZWN0b3JTdHkuc2VsZWN0fT5cclxuICAgICAgICAgICAgICAgIHtkYXRhPy5pdGVtcy5tYXAoKHsgbmFtZSwgaWQgfSwgaW5kZXgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3NlbGVjdG9yU3R5Lm9wdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2luZGV4fSA+IHtuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17IGAke3NlbGVjdG9yU3R5LmJ0bl9zZW5kfSBidG5gfVxyXG4gICAgICAgICAgICAgICAgdHlwZT17XCJidXR0b25cIn1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3NhdmVEYXRhfVxyXG4gICAgICAgICAgICA+0J7RgtC/0YDQsNCy0LjRgtGMXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9