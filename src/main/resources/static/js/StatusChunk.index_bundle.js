"use strict";
(self["webpackChunkiotwatch_react"] = self["webpackChunkiotwatch_react"] || []).push([["StatusChunk"],{

/***/ "./node_modules/@mui/icons-material/ErrorOutline.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


"use client";

var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _createSvgIcon = _interopRequireDefault(__webpack_require__("./node_modules/@mui/icons-material/utils/createSvgIcon.js"));
var _jsxRuntime = __webpack_require__("./node_modules/react/jsx-runtime.js");
var _default = exports["default"] = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"
}), 'ErrorOutline');

/***/ }),

/***/ "./pages/error.jsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@mui/material/Container/Container.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@mui/material/CssBaseline/CssBaseline.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@mui/material/Paper/Paper.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_icons_material_ErrorOutline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@mui/icons-material/ErrorOutline.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);




var styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh"
  },
  paper: {
    padding: 4,
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  icon: {
    fontSize: "72px",
    color: "#f44336" // Color rojo
  },
  message: {
    marginTop: 2
  },
  button: {
    marginTop: 2
  }
};
var ErrorPage = function ErrorPage(_ref) {
  var history = _ref.history;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"], {
    maxWidth: "sm",
    sx: styles.container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    elevation: 3,
    sx: styles.paper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ErrorOutline__WEBPACK_IMPORTED_MODULE_4__["default"], {
    sx: styles.icon
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "h5"
  }, "\xA1Error!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "body1",
    sx: styles.message
  }, "Ocurri\xF3 un error en la plataforma de IoT."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "contained",
    color: "primary",
    sx: styles.button,
    onClick: function onClick() {
      return history.goBack();
    }
  }, "Volver al inicio")));
};
ErrorPage.propTypes = {
  history: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorPage);

/***/ })

}]);
//# sourceMappingURL=StatusChunk.index_bundle.js.map