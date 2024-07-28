"use strict";
(self["webpackChunkiotwatch_react"] = self["webpackChunkiotwatch_react"] || []).push([["DashboardChunk"],{

/***/ "./components/card.jsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@mui/icons-material/MoreVert.js");
/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./node_modules/@mui/material/colors/grey.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@mui/material/styles/useTheme.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@mui/material/MenuItem/MenuItem.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@mui/material/CardHeader/CardHeader.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/@mui/material/Menu/Menu.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./node_modules/@mui/material/Card/Card.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./node_modules/@mui/material/CardContent/CardContent.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var _styles_card_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./styles/card.module.scss");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }








var menuItems = ["Cambiar Color", "Forzar Valor", "Remover"];
var CustomCardHeader = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(function (_ref) {
  var Icon = _ref.Icon,
    _ref$title = _ref.title,
    title = _ref$title === void 0 ? "" : _ref$title,
    tab = _ref.tab,
    index = _ref.index,
    items = _ref.items,
    date = _ref.date;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      open: false,
      anchorEl: null,
      selected: undefined
    }),
    _useState2 = _slicedToArray(_useState, 2),
    menu = _useState2[0],
    setMenuState = _useState2[1];
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__["default"])();

  // Effect to execute a function when a menu has been selected
  // useEffect(() => {
  //   const item = items[menu.selected];

  //   if (item) {
  //     switch (item) {
  //       case "Cambiar Color":
  //         break;
  //       case "Forzar Valor":
  //         break;
  //       case "Remover":
  //         dispatch(remove({ tab: tab, index: index }));
  //         break;
  //       default:
  //         break;
  //     }
  //   }
  // }, [menu.selected]);

  var menuList = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return items.map(function (menu, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
        key: "menu" + index,
        value: index,
        onClick: function onClick(event) {
          setMenuState(_objectSpread(_objectSpread({}, menu), {}, {
            open: false,
            anchorEl: event.currentTarget,
            selected: event.currentTarget.value
          }));
        }
      }, menu);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sx: {
      width: "100%"
    },
    avatar: Icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Icon, {
      sx: {
        fill: theme.palette.info.dark
      },
      "aria-label": "recipe"
    }),
    action: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
      "aria-label": "settings",
      onClick: function onClick(event) {
        setMenuState(_objectSpread(_objectSpread({}, menu), {}, {
          anchorEl: event.currentTarget,
          open: Boolean(event.currentTarget)
        }));
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_7__["default"], null)),
    titleTypographyProps: {
      textTransform: "capitalize",
      fontSize: "clamp(0.7rem,1vw,1.5rem)",
      fontWeight: "500",
      color: theme.palette.text.primary
    },
    title: title
    //subheader={date.toLocaleString()}
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    id: "simple-menu",
    anchorEl: menu.anchorEl,
    keepMounted: true,
    open: menu.open,
    onClose: function onClose() {
      setMenuState(_objectSpread(_objectSpread({}, menu), {}, {
        anchorEl: null,
        open: false
      }));
    }
  }, menuList));
});

/**
 * Componente que representara una Card con un sensor
 */
var CustomCard = function CustomCard(_ref2) {
  var _children$props, _children$props$title, _children$props$date, _children$props2, _children$props$Icon, _children$props3;
  var children = _ref2.children,
    tab = _ref2.tab,
    index = _ref2.index;
  var theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__["default"])();
  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_9__.useTranslation)(),
    _useTranslation2 = _slicedToArray(_useTranslation, 1),
    t = _useTranslation2[0];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    raised: true,
    className: _styles_card_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].card,
    sx: {
      backgroundColor: theme.palette.mode == "dark" ? _mui_material_colors__WEBPACK_IMPORTED_MODULE_11__["default"][900] : "#f8f9fa"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CustomCardHeader, {
    title: (_children$props = children.props) === null || _children$props === void 0 || (_children$props$title = _children$props.title) === null || _children$props$title === void 0 ? void 0 : _children$props$title.call(_children$props),
    date: (_children$props$date = (_children$props2 = children.props).date) === null || _children$props$date === void 0 ? void 0 : _children$props$date.call(_children$props2),
    tab: tab,
    index: index,
    items: menuItems,
    Icon: (_children$props$Icon = (_children$props3 = children.props).Icon) === null || _children$props$Icon === void 0 ? void 0 : _children$props$Icon.call(_children$props3)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    className: _styles_card_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].card_content,
    sx: {
      padding: "0px"
    },
    children: children
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(CustomCard));

/***/ }),

/***/ "./components/dashboard/AddCard.jsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gridlayoutItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/dashboard/gridlayoutItem.jsx");
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/card.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_card_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./styles/card.module.scss");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/react-i18next/dist/es/useTranslation.js");
var _excluded = ["tabIndex", "index"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], t.indexOf(o) >= 0 || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.indexOf(n) >= 0) continue; t[n] = r[n]; } return t; }







var AddCard = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().forwardRef(function (_ref, ref) {
  var tabIndex = _ref.tabIndex,
    index = _ref.index,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)(),
    _useTranslation2 = _slicedToArray(_useTranslation, 1),
    t = _useTranslation2[0];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_gridlayoutItem__WEBPACK_IMPORTED_MODULE_0__["default"], _extends({
    ref: ref,
    key: "gridlayoutitem-".concat(tabIndex, "-").concat(index)
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    tab: tabIndex,
    index: index
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: _styles_card_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].card_box_content
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    component: "h3",
    color: "silver"
  }, t("add.new.card")))));
});
AddCard.propTypes = {
  tabIndex: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().number).isRequired,
  index: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().number).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddCard);

/***/ }),

/***/ "./components/dashboard/CreateDashboardModal.jsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_components_globalAlert_globalAlert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./redux/components/globalAlert/globalAlert.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var _mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@mui/material/DialogTitle/DialogTitle.js");
/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@mui/material/Dialog/Dialog.js");
/* harmony import */ var _mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@mui/material/DialogContent/DialogContent.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@mui/material/DialogContentText/DialogContentText.js");
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/@mui/material/DialogActions/DialogActions.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./node_modules/@mui/material/Button/Button.js");












var CreateDashboardModal = function CreateDashboardModal(_ref) {
  var _ref$open = _ref.open,
    open = _ref$open === void 0 ? false : _ref$open,
    onClose = _ref.onClose;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_3__["default"], {
    open: open,
    onClose: onClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_4__["default"], null, "Subscribe"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], null, "To subscribe to this website, please enter your email address here. We will send updates occasionally."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    autoFocus: true,
    margin: "dense",
    id: "name",
    label: "Email Address",
    type: "email",
    fullWidth: true,
    variant: "standard"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onClick: onClose
  }, "Cancel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onClick: onClose
  }, "Subscribe")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateDashboardModal);

/***/ }),

/***/ "./components/dashboard/gridlayout.jsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_grid_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-grid-layout/index.js");
/* harmony import */ var react_grid_layout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_grid_layout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_grid_layout_css_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-grid-layout/css/styles.css");
/* harmony import */ var react_resizable_css_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-resizable/css/styles.css");
/* harmony import */ var react_sizeme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/react-sizeme/dist/react-sizeme.js");
/* harmony import */ var react_sizeme__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_sizeme__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var _gridlayoutItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./components/dashboard/gridlayoutItem.jsx");
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./components/card.jsx");
/* harmony import */ var _AddCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./components/dashboard/AddCard.jsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./constants/index.js");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }










var GridLayout = function GridLayout(props) {
  var data = props.data,
    tabIndex = props.tabIndex;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("ls"),
    _useState2 = _slicedToArray(_useState, 2),
    breakpoint = _useState2[0],
    onBreakpointChange = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState4 = _slicedToArray(_useState3, 2),
    layouts = _useState4[0],
    onLayoutsChange = _useState4[1];
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
  var handleLayoutsChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (currentLayout, newLayouts) {
    //dispatch(layout({ tab: tabIndex, newLayout: newLayouts }));
    onLayoutsChange(newLayouts);
  }, []);
  var handleBreakpointChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (newBreakpoint, newCols) {
    // dispatch(
    //   breakpoint({
    //     tab: tabIndex,
    //     cols: newCols,
    //     breakpoint: newBreakpoint,
    //   }),
    // );
    onBreakpointChange(newBreakpoint);
  }, []);
  var renderCards = function renderCards(_ref) {
    var cards = _ref.cards;
    return cards ? cards[tabIndex].gridlayout.cards.map(function (data, i) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_gridlayoutItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
        key: "gridlayout-".concat(tabIndex, "-").concat(i),
        "data-grid": cards[breakpoint]
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_card__WEBPACK_IMPORTED_MODULE_7__["default"], {
        tab: tabIndex,
        index: i
        // children={cardGenerator(data, theme, index)}
      }));
    }) : [];
  };
  var memoizedContent = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    var cards = renderCards(data);
    cards.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AddCard__WEBPACK_IMPORTED_MODULE_8__["default"], _extends({
      tabIndex: tabIndex,
      index: cards.length + 1,
      key: "defaultAddCard".concat(cards.length + 1)
    }, _constants__WEBPACK_IMPORTED_MODULE_9__.DEFAULT_CARD_LAYOUT_PROPS)));
    return cards;
  }, [tabIndex, breakpoint]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      width: "100%",
      height: "100%",
      maxHeight: "100vh"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_sizeme__WEBPACK_IMPORTED_MODULE_4__.SizeMe, null, function (_ref2) {
    var size = _ref2.size;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_grid_layout__WEBPACK_IMPORTED_MODULE_1__.Responsive, _extends({
      measureBeforeMount: true,
      maxRows: 11,
      autoSize: true,
      width: size.width || 700,
      breakpoints: {
        lg: 1200,
        md: 996,
        sm: 768,
        xs: 480,
        xxs: 0
      },
      cols: {
        lg: 12,
        md: 10,
        sm: 6,
        xs: 3,
        xxs: 3
      }
    }, props, {
      compactType: "vertical",
      onLayoutChange: handleLayoutsChange,
      onBreakpointChange: handleBreakpointChange
    }), memoizedContent);
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(GridLayout));

/***/ }),

/***/ "./components/dashboard/gridlayoutItem.jsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["style", "className", "onMouseDown", "onMouseUp", "onTouchEnd", "children"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], t.indexOf(o) >= 0 || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.indexOf(n) >= 0) continue; t[n] = r[n]; } return t; }

var GridLayoutItem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function (_ref, ref) {
  var style = _ref.style,
    className = _ref.className,
    onMouseDown = _ref.onMouseDown,
    onMouseUp = _ref.onMouseUp,
    onTouchEnd = _ref.onTouchEnd,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", _extends({
    ref: ref,
    className: className,
    style: _objectSpread({
      width: "100%",
      height: "100%"
    }, style),
    onMouseDown: onMouseDown,
    onMouseUp: onMouseUp,
    onTouchEnd: onTouchEnd
  }, props), children);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GridLayoutItem);

/***/ }),

/***/ "./components/dashboard/subitem/tabpanel.jsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_routes_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./styles/routes.module.scss");
var _excluded = ["children", "value", "index"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], t.indexOf(o) >= 0 || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.indexOf(n) >= 0) continue; t[n] = r[n]; } return t; }




var TabPanel = function TabPanel(props) {
  var children = props.children,
    value = props.value,
    index = props.index,
    other = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", _extends({
    role: "tabpanel",
    hidden: value !== index,
    id: "full-width-tabpanel-".concat(index),
    "aria-labelledby": "full-width-tab-".concat(index)
  }, other, {
    className: _styles_routes_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].container
  }), value === index && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      p: 3,
      width: "100%",
      height: "inherit"
    }
  }, children));
};
TabPanel.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),
  index: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number).isRequired,
  value: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TabPanel);

/***/ }),

/***/ "./components/default/ActionSpeedDial.jsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_SpeedDial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@mui/material/SpeedDial/SpeedDial.js");
/* harmony import */ var _mui_material_SpeedDialIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@mui/material/SpeedDialIcon/SpeedDialIcon.js");
/* harmony import */ var _mui_material_SpeedDialAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@mui/material/SpeedDialAction/SpeedDialAction.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);





var ActionSpeedDial = function ActionSpeedDial(_ref) {
  var actions = _ref.actions;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_SpeedDial__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ariaLabel: "SpeedDial basic example",
    sx: {
      position: "fixed",
      bottom: 32,
      right: 32
    },
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_SpeedDialIcon__WEBPACK_IMPORTED_MODULE_2__["default"], null)
  }, actions.map(function (action) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_SpeedDialAction__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: action.name,
      icon: action.icon,
      tooltipTitle: action.name,
      onClick: action.handleOnClick
    });
  }));
};
ActionSpeedDial.propTypes = {
  actions: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().array).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActionSpeedDial);

/***/ }),

/***/ "./constants/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_CARD_LAYOUT_PROPS: () => (/* binding */ DEFAULT_CARD_LAYOUT_PROPS)
/* harmony export */ });
var DEFAULT_CARD_LAYOUT_PROPS = Object.freeze({
  "data-grid": {
    w: 2,
    h: 3,
    minW: 2,
    minH: 3,
    maxW: 2,
    maxH: 3,
    x: 0,
    y: 0,
    isResizable: false,
    isDraggable: false,
    isBounded: false
  }
});

/***/ }),

/***/ "./hooks/useWebSocket.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reconnecting_webSocket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/reconnecting-webSocket/dist/reconnecting-websocket-mjs.js");
/* provided dependency */ var console = __webpack_require__("./node_modules/console-browserify/index.js");


var useWebSocket = function useWebSocket(serverUrl) {
  var webSocketRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (webSocketRef.current === null || webSocketRef.current.url !== serverUrl) {
      if (webSocketRef.current) {
        webSocketRef.current.close(); // Cierra la instancia anterior si existe
      }
      try {
        webSocketRef.current = new reconnecting_webSocket__WEBPACK_IMPORTED_MODULE_1__["default"](serverUrl);
      } catch (error) {
        console.error(error);
      }
    }
    return function () {
      if (webSocketRef.current) {
        webSocketRef.current.close();
      }
    };
  }, [serverUrl]);
  var subscribeToEvent = function subscribeToEvent(eventName, callback) {
    if (webSocketRef.current) {
      webSocketRef.current.addEventListener(eventName, callback);
    }
  };
  var unsubscribeFromEvent = function unsubscribeFromEvent(eventName) {
    if (webSocketRef.current) {
      webSocketRef.current.removeEventListener(eventName);
    }
  };
  return {
    webSocket: webSocketRef.current,
    subscribeToEvent: subscribeToEvent,
    unsubscribeFromEvent: unsubscribeFromEvent
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useWebSocket);

/***/ }),

/***/ "./pages/dashboard.jsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./node_modules/@mui/material/styles/useTheme.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./node_modules/@mui/material/Tab/Tab.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./node_modules/@mui/material/Tabs/Tabs.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var _utils_useApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./utils/useApi.js");
/* harmony import */ var _constants_apiRoutes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./constants/apiRoutes.js");
/* harmony import */ var _components_dashboard_CreateDashboardModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./components/dashboard/CreateDashboardModal.jsx");
/* harmony import */ var _components_dashboard_gridlayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./components/dashboard/gridlayout.jsx");
/* harmony import */ var _components_dashboard_subitem_tabpanel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./components/dashboard/subitem/tabpanel.jsx");
/* harmony import */ var _components_default_ActionSpeedDial__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./components/default/ActionSpeedDial.jsx");
/* harmony import */ var _styles_dashboard_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./styles/dashboard.module.scss");
/* harmony import */ var _mui_icons_material_DashboardCustomize__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./node_modules/@mui/icons-material/DashboardCustomize.js");
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }














//brokerSlice reducers
// import { suscribe, unsuscribe } from "Redux/components/broker/brokerSlice";

var Dashboard = function Dashboard() {
  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_9__.useTranslation)(),
    _useTranslation2 = _slicedToArray(_useTranslation, 1),
    t = _useTranslation2[0];
  var theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_10__["default"])();
  var _useApi = (0,_utils_useApi__WEBPACK_IMPORTED_MODULE_2__.useApi)(_constants_apiRoutes__WEBPACK_IMPORTED_MODULE_3__["default"].DASHBOARD, false),
    _useApi2 = _slicedToArray(_useApi, 3),
    _useApi2$ = _useApi2[0],
    result = _useApi2$ === void 0 ? {} : _useApi2$,
    loaded = _useApi2[1],
    refresh = _useApi2[2];
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    openDashboardModal = _useState2[0],
    setOpenDashboardModal = _useState2[1];
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var handleOpenDashboardModal = function handleOpenDashboardModal() {
    setOpenDashboardModal(true);
  };
  var handleCloseDashboardModal = function handleCloseDashboardModal() {
    setOpenDashboardModal(false);
  };
  var actions = [{
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_DashboardCustomize__WEBPACK_IMPORTED_MODULE_11__["default"], null),
    name: 'Add Card',
    handleOnClick: handleOpenDashboardModal
  }];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([{
      title: 'test1'
    }, {
      title: 'test2'
    }]),
    _useState4 = _slicedToArray(_useState3, 2),
    tabs = _useState4[0],
    setTabs = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState6 = _slicedToArray(_useState5, 2),
    tabIndex = _useState6[0],
    setTabIndex = _useState6[1];
  var tabsComponent = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return tabs.map(function (tab, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
        className: "tab-item",
        key: "tab".concat(index),
        label: t(tab.title),
        id: "full-width-tab-".concat(index),
        "aria-controls": "full-width-tabpanel-".concat(index)
      });
    });
  }, [tabs]);
  var handleOnChangeTabIndex = function handleOnChangeTabIndex(event, index) {
    setTabIndex(index);
  };
  var handleAddTab = function handleAddTab() {
    var newTabIndex = tabs.length + 1;
    var newTab = {
      title: "Pesta\xF1a ".concat(newTabIndex)
    };
    setTabs([].concat(_toConsumableArray(tabs), [newTab]));
    setTabIndex(newTabIndex - 1); // Selecciona la pestaña recién creada
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: {
      display: 'flex',
      flexDirection: 'column',
      width: 'inherit',
      height: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    display: "flex",
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    value: tabIndex,
    onChange: handleOnChangeTabIndex,
    indicatorColor: "secondary",
    textColor: "inherit",
    variant: "fullWidth",
    "aria-label": "full width tabs example",
    centered: true
  }, tabsComponent), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    variant: "contained",
    color: "primary",
    onClick: handleAddTab
  }, "+")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_dashboard_subitem_tabpanel__WEBPACK_IMPORTED_MODULE_6__["default"], {
    key: "tab-panel#".concat(tabIndex),
    value: tabIndex,
    index: tabIndex,
    dir: theme.direction
  }, result ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_dashboard_gridlayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    rowHeight: 60,
    data: result,
    tabIndex: tabIndex
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    className: _styles_dashboard_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].flex_box_center
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    variant: 'h5',
    color: 'silver'
  }, t('dashboard.cards.not.found.add.new')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_dashboard_CreateDashboardModal__WEBPACK_IMPORTED_MODULE_4__["default"], {
    open: openDashboardModal,
    onClose: handleCloseDashboardModal
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_default_ActionSpeedDial__WEBPACK_IMPORTED_MODULE_7__["default"], {
    actions: actions
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(Dashboard));

/***/ }),

/***/ "./pages/trackMap.jsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/react-leaflet/lib/hooks.js");
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/react-leaflet/lib/Marker.js");
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/react-leaflet/lib/Popup.js");
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./node_modules/react-leaflet/lib/MapContainer.js");
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./node_modules/react-leaflet/lib/TileLayer.js");
/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/leaflet/dist/leaflet.css");
/* harmony import */ var _hooks_useWebSocket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./hooks/useWebSocket.js");
/* harmony import */ var _react_keycloak_web__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@react-keycloak/web/lib/index.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }







var TrackMap = function TrackMap() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)(),
    _useTranslation2 = _slicedToArray(_useTranslation, 1),
    t = _useTranslation2[0];
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState2 = _slicedToArray(_useState, 2),
    messageData = _useState2[0],
    setMessageData = _useState2[1];
  var _useKeycloak = (0,_react_keycloak_web__WEBPACK_IMPORTED_MODULE_4__.useKeycloak)(),
    keycloak = _useKeycloak.keycloak;
  var traccarWSUrl = new URL('ws://localhost:8082/api/socket');
  traccarWSUrl.searchParams.append('token', keycloak.token);
  var _useWebSocket = (0,_hooks_useWebSocket__WEBPACK_IMPORTED_MODULE_3__["default"])(traccarWSUrl.toString()),
    webSocket = _useWebSocket.webSocket,
    subscribeToEvent = _useWebSocket.subscribeToEvent,
    unsubscribeFromEvent = _useWebSocket.unsubscribeFromEvent;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!webSocket) return;
    subscribeToEvent('message', function (data) {
      setMessageData(data);
    });
    return function () {
      unsubscribeFromEvent('message');
    };
  }, [webSocket, subscribeToEvent, unsubscribeFromEvent]);
  var LocationMarker = function LocationMarker() {
    var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      position = _useState4[0],
      setPosition = _useState4[1];
    var map = (0,react_leaflet__WEBPACK_IMPORTED_MODULE_6__.useMapEvents)({
      click: function click() {
        map.locate();
      },
      locationfound: function locationfound(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      }
    });
    return position === null ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_leaflet__WEBPACK_IMPORTED_MODULE_7__.Marker, {
      position: position
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_leaflet__WEBPACK_IMPORTED_MODULE_8__.Popup, null, "You are here"));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "map-component"
  }, JSON.stringify(messageData), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "map"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_leaflet__WEBPACK_IMPORTED_MODULE_9__.MapContainer, {
    center: [51.505, -0.09],
    zoom: 13,
    scrollWheelZoom: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_leaflet__WEBPACK_IMPORTED_MODULE_10__.TileLayer, {
    attribution: "\xA9 <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors",
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LocationMarker, null))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TrackMap);

/***/ }),

/***/ "./utils/useApi.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useApi: () => (/* binding */ useApi)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _configuration_axios_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./configuration/axios-config.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_components_globalAlert_globalAlert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./redux/components/globalAlert/globalAlert.js");
/* harmony import */ var _redux_components_login_loginSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./redux/components/login/loginSlice.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }







/**
 * Common UseApi Hook Pattern
 * @param url
 * @param skip
 * @returns {(boolean|refresh)[]}
 */
function useApi(url, skip) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState2 = _slicedToArray(_useState, 2),
    result = _useState2[0],
    setResult = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    loaded = _useState6[0],
    setLoaded = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState8 = _slicedToArray(_useState7, 2),
    error = _useState8[0],
    setError = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState10 = _slicedToArray(_useState9, 2),
    refreshIndex = _useState10[0],
    setRefreshIndex = _useState10[1];
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  var refresh = function refresh() {
    setRefreshIndex(refreshIndex + 1);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (error) {
      dispatch((0,_redux_components_globalAlert_globalAlert__WEBPACK_IMPORTED_MODULE_3__.show)({
        open: true,
        showLoading: false,
        severity: "error",
        message: error.message
      }));
    }
  }, [error]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var cancelled = false;
    if (skip) {
      setResult(null);
      setLoading(false);
      setLoaded(false);
    } else {
      setLoading(true);
      _configuration_axios_config__WEBPACK_IMPORTED_MODULE_1__["default"].get(url).then(function (r) {
        if (!cancelled) {
          setResult(r.data);
          setLoading(false);
          setLoaded(true);
        }
      })["catch"](function (error) {
        setLoading(false);
        if (error.response) {
          setError(error.response.data);
        } else {
          setError(error.message);
        }
      });
    }
    return function () {
      cancelled = true;
    };
  }, [url, refreshIndex]);
  return [result, loading, loaded, error, refresh, setResult];
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./styles/card.module.scss":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#GbEG8ZM_m0jX6owJZVgV {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  white-space: pre-line;
}

.eH5hOOvDMc_79h_VmWd1 {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  flex-direction: column;
  width: inherit;
  height: inherit;
}

.AP_N7tSjIIcR4LUMwSuI {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0;
}

.T1ipQtxKAoTPZSCFDd92 {
  width: 100%;
  height: 100%;
  border: 1px solid gray;
  background-color: rgb(125, 193, 220);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: whitesmoke;
  border-radius: 5px;
  padding: 0;
}

.F3gSPYjxyAkBImzPYkLg {
  width: 100%;
  height: 100%;
  padding: 0;
  border-radius: 5px;
}

.wRN3YfkdfCF4NwTIZ66d {
  font-size: 10px;
}

.kn18CdT3kYCO7ii2OWky {
  width: 100%;
  height: 100%;
  max-height: inherit;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  flex-direction: column;
  width: inherit;
  height: inherit;
  overflow: hidden;
}

.VwBqlJZa5fLLTw7OtjRJ {
  width: 100%;
  height: 95%;
  max-height: inherit;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  flex-direction: row;
  width: inherit;
  height: inherit;
}

.TbXSfMsErnc35r2zxPvN {
  width: 50%;
  height: 100%;
  max-height: inherit;
  max-width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  flex-direction: row;
  width: inherit;
  height: inherit;
}
.TbXSfMsErnc35r2zxPvN div {
  width: 20%;
  height: inherit;
  max-height: inherit;
  max-width: 20%;
}

.hqB8O1YN7DgitjtR2Oae {
  width: 50%;
  height: auto;
  max-height: inherit;
  max-width: 50%;
}

.WIL6iordRUB6Z0MaXjeS {
  width: 55%;
  height: inherit;
  max-height: inherit;
  max-width: 55%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  flex-direction: row;
  width: inherit;
  height: inherit;
}

.yFFfwFfvrrZzN2KaR8fZ {
  width: 100%;
  height: inherit;
  max-height: inherit;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  flex-direction: row;
  width: inherit;
  height: inherit;
}

.E27Fl479biQNWgiPxr1C {
  width: 50%;
  height: 100%;
  max-height: inherit;
  max-width: 50%;
  fill: royalblue;
}

.QRrOBzihx3osckR5rqdQ {
  width: 100%;
  height: 100%;
  max-height: inherit;
  max-width: 100%;
  font-size: large;
  fill: royalblue;
}

.JrLGQZvDXuUhfROrcaMC {
  font-size: 1.3vw;
  text-align: center;
  flex-wrap: nowrap;
  font-family: sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  color: #c4c4c4;
  font-size-adjust: ex-height 0.58;
}

.qvyblhDmUnJeIbiIBuT4 {
  font-size: 1.2vw;
  text-align: center;
  flex-wrap: nowrap;
  font-family: sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  color: #2c2c2c;
  padding-top: 40px;
}

.Q2Ru7P95jU1hC9TDuvqz {
  font-size: 2vw;
  text-align: center;
  flex-wrap: nowrap;
  font-family: sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  color: #2c2c2c;
  margin-top: 4;
}`, "",{"version":3,"sources":["webpack://./styles/root.scss","webpack://./styles/card.module.scss"],"names":[],"mappings":"AAoDA;EACE,YAAA;EACA,aAAA;EACA,SAAA;EACA,UAAA;EACA,qBAAA;ACnDF;;ADsDA;EAvCE,aAAA;EACA,mBAuC8B;EAtC9B,uBAsCsC;EArCtC,UAAA;EACA,SAAA;EACA,sBAmCsB;EAlCtB,cAAA;EACA,eAAA;ACXF;;AD+CA;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;AC5CF;;AD+CA;EACE,WAAA;EACA,YAAA;EACA,sBAAA;EACA,oCAAA;EACA,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,uBAAA;EACA,iBAAA;EACA,kBAAA;EACA,UAAA;AC5CF;;AD+CA;EACE,WAAA;EACA,YAAA;EACA,UAAA;EACA,kBAAA;AC5CF;;AD+CA;EACE,eAAA;AC5CF;;AAjDA;EDQE,WCP2B;EDQ3B,YCRqB;EDSrB,mBAAA;EACA,eCV2B;EDkB3B,aAAA;EACA,mBAlBc;EAmBd,uBAlBgB;EAmBhB,UAAA;EACA,SAAA;EACA,sBCvBiC;EDwBjC,cAAA;EACA,eAAA;ECxBA,gBAAA;AA+DF;;AA5DA;EDGE,WARc;EASd,WCHqB;EDIrB,mBAAA;EACA,eAXc;EAmBd,aAAA;EACA,mBAlBc;EAmBd,uBAlBgB;EAmBhB,UAAA;EACA,SAAA;EACA,mBAvBkB;EAwBlB,cAAA;EACA,eAAA;ACsDF;;AAvEA;EDDE,UAJa;EAKb,YAVe;EAWf,mBAAA;EACA,cAPa;EAeb,aAAA;EACA,mBAlBc;EAmBd,uBAlBgB;EAmBhB,UAAA;EACA,SAAA;EACA,mBAvBkB;EAwBlB,cAAA;EACA,eAAA;ACqEF;AApFE;EDHA,UCI6B;EDH7B,eCGoB;EDFpB,mBAAA;EACA,cCC6B;AAyF/B;;AArFA;EDRE,UCSwB;EDRxB,YCQkB;EDPlB,mBAAA;EACA,cCMwB;AA2F1B;;AAxFA;EDZE,UCa8B;EDZ9B,eCYqB;EDXrB,mBAAA;EACA,cCU8B;EDF9B,aAAA;EACA,mBAlBc;EAmBd,uBAlBgB;EAmBhB,UAAA;EACA,SAAA;EACA,mBAvBkB;EAwBlB,cAAA;EACA,eAAA;ACiGF;;AAnGA;EDhBE,WCiB8B;EDhB9B,eCgBqB;EDfrB,mBAAA;EACA,eCc8B;EDN9B,aAAA;EACA,mBAlBc;EAmBd,uBAlBgB;EAmBhB,UAAA;EACA,SAAA;EACA,mBAvBkB;EAwBlB,cAAA;EACA,eAAA;ACgHF;;AA9GA;EDpBE,UCqBwB;EDpBxB,YCoBkB;EDnBlB,mBAAA;EACA,cCkBwB;EACxB,eAAA;AAoHF;;AAjHA;EDzBE,WC0BwB;EDzBxB,YCyBkB;EDxBlB,mBAAA;EACA,eCuBwB;EACxB,gBAAA;EACA,eAAA;AAuHF;;AApHA;EDEE,gBCDyB;EDEzB,kBCF4C;EDG5C,iBAAA;EACA,uBCJgC;EDKhC,iBCLoD;EDMpD,yBAAA;EACA,cCP0D;EAC1D,gCAAA;AA6HF;;AA1HA;EDHE,gBCIyB;EDHzB,kBCG4C;EDF5C,iBAAA;EACA,uBCCgC;EDAhC,iBAAA;EACA,yBAAA;EACA,cCF0D;EAC1D,iBAAA;AAmIF;;AAhIA;EDRE,cCSyB;EDRzB,kBCQ0C;EDP1C,iBAAA;EACA,uBCM8B;EDL9B,iBCKkD;EDJlD,yBAAA;EACA,cCGwD;EACxD,aAAA;AAyIF","sourcesContent":["$nav-color: linear-gradient(315deg, #d9d9d9 0%, #f6f2f2 74%);\r\n$default-height: 100%;\r\n$default-width: 100%;\r\n$default-direction: row;\r\n$default-align: center;\r\n$default-justify: center;\r\n$medium-width: 50%;\r\n$medium-height: 50%;\r\n\r\n@mixin box($height: $default-height, $width: $default-width) {\r\n  width: $width;\r\n  height: $height;\r\n  max-height: inherit;\r\n  max-width: $width;\r\n}\r\n\r\n@mixin default_flex(\r\n  $directon: $default-direction,\r\n  $alignItems: $default-align,\r\n  $justifyContent: $default-justify\r\n) {\r\n  display: flex;\r\n  align-items: $alignItems;\r\n  justify-content: $justifyContent;\r\n  padding: 0;\r\n  margin: 0;\r\n  flex-direction: $directon;\r\n  width: inherit;\r\n  height: inherit;\r\n}\r\n\r\n@mixin flex_1(\r\n  $height: $default-height,\r\n  $width: $default-width,\r\n  $directon: $default-direction,\r\n  $alignItems: $default-align,\r\n  $justifyContent: $default-justify\r\n) {\r\n  @include box($height, $width);\r\n  @include default_flex($directon, $alignItems, $justifyContent);\r\n}\r\n\r\n@mixin typography($font-size, $font-family, $text-align, $font-weight, $color) {\r\n  font-size: $font-size;\r\n  text-align: $text-align;\r\n  flex-wrap: nowrap;\r\n  font-family: $font-family;\r\n  font-weight: $font-weight;\r\n  text-transform: uppercase;\r\n  color: $color;\r\n}\r\n\r\n#react {\r\n  width: 100vw;\r\n  height: 100vh;\r\n  margin: 0;\r\n  padding: 0;\r\n  white-space: pre-line;\r\n}\r\n\r\n.flex_box_center {\r\n  @include default_flex(column, center, center);\r\n}\r\n\r\n.map-component {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 0;\r\n}\r\n\r\n.map {\r\n  width: 100%;\r\n  height: 100%;\r\n  border: 1px solid gray;\r\n  background-color: rgb(125, 193, 220);\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: center;\r\n  color: whitesmoke;\r\n  border-radius: 5px;\r\n  padding: 0;\r\n}\r\n\r\n.leaflet-container {\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 0;\r\n  border-radius: 5px;\r\n}\r\n\r\n.leaflet-control-attribution {\r\n  font-size: 10px;\r\n}","@use \"root\";\r\n\r\n.card {\r\n  @include root.flex_1(100%, 100%, column);\r\n  overflow: hidden;\r\n}\r\n\r\n.card_content {\r\n  @include root.flex_1(95%, root.$default-width);\r\n}\r\n\r\n.card_stack_width {\r\n  @include root.flex_1(root.$default-height, root.$medium-width);\r\n  div {\r\n    @include root.box(inherit, 20%);\r\n  }\r\n}\r\n\r\n.card_stack_content {\r\n  @include root.box(auto, 50%);\r\n}\r\n\r\n.card_box_content {\r\n  @include root.flex_1(inherit, 55%);\r\n}\r\n\r\n.card_action {\r\n  @include root.flex_1(inherit, 100%);\r\n}\r\n\r\n.card_icon_small {\r\n  @include root.box(100%, 50%);\r\n  fill: royalblue;\r\n}\r\n\r\n.card_icon_big {\r\n  @include root.box(100%, 100%);\r\n  font-size: large;\r\n  fill: royalblue;\r\n}\r\n\r\n.title_1 {\r\n  @include root.typography(1.3vw, sans-serif, center, bold, #c4c4c4);\r\n  font-size-adjust: ex-height 0.58;\r\n}\r\n\r\n.title_2 {\r\n  @include root.typography(1.2vw, sans-serif, center, bold, #2c2c2c);\r\n  padding-top: 40px;\r\n}\r\n\r\n.content_1 {\r\n  @include root.typography(2vw, sans-serif, center, bold, #2c2c2c);\r\n  margin-top: 4;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"react": `GbEG8ZM_m0jX6owJZVgV`,
	"flex_box_center": `eH5hOOvDMc_79h_VmWd1`,
	"map-component": `AP_N7tSjIIcR4LUMwSuI`,
	"map": `T1ipQtxKAoTPZSCFDd92`,
	"leaflet-container": `F3gSPYjxyAkBImzPYkLg`,
	"leaflet-control-attribution": `wRN3YfkdfCF4NwTIZ66d`,
	"card": `kn18CdT3kYCO7ii2OWky`,
	"card_content": `VwBqlJZa5fLLTw7OtjRJ`,
	"card_stack_width": `TbXSfMsErnc35r2zxPvN`,
	"card_stack_content": `hqB8O1YN7DgitjtR2Oae`,
	"card_box_content": `WIL6iordRUB6Z0MaXjeS`,
	"card_action": `yFFfwFfvrrZzN2KaR8fZ`,
	"card_icon_small": `E27Fl479biQNWgiPxr1C`,
	"card_icon_big": `QRrOBzihx3osckR5rqdQ`,
	"title_1": `JrLGQZvDXuUhfROrcaMC`,
	"title_2": `qvyblhDmUnJeIbiIBuT4`,
	"content_1": `Q2Ru7P95jU1hC9TDuvqz`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./styles/dashboard.module.scss":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#FmhujRGwXJtslHnUhSc4 {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  white-space: pre-line;
}

.OOQqvwxn2z1lv6VItE3w {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  flex-direction: column;
  width: inherit;
  height: inherit;
}

.j68GweQrdFFM52978M9c {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0;
}

.F7q0nQzJaY4af9OeDZf5 {
  width: 100%;
  height: 100%;
  border: 1px solid gray;
  background-color: rgb(125, 193, 220);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: whitesmoke;
  border-radius: 5px;
  padding: 0;
}

.HiZSvrsOucvsrQvvah7Q {
  width: 100%;
  height: 100%;
  padding: 0;
  border-radius: 5px;
}

.Q0Pgbjv2Y4Tm_up7oaNz {
  font-size: 10px;
}`, "",{"version":3,"sources":["webpack://./styles/root.scss","webpack://./styles/dashboard.module.scss"],"names":[],"mappings":"AAoDA;EACE,YAAA;EACA,aAAA;EACA,SAAA;EACA,UAAA;EACA,qBAAA;ACnDF;;ADsDA;EAvCE,aAAA;EACA,mBAuC8B;EAtC9B,uBAsCsC;EArCtC,UAAA;EACA,SAAA;EACA,sBAmCsB;EAlCtB,cAAA;EACA,eAAA;ACXF;;AD+CA;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;AC5CF;;AD+CA;EACE,WAAA;EACA,YAAA;EACA,sBAAA;EACA,oCAAA;EACA,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,uBAAA;EACA,iBAAA;EACA,kBAAA;EACA,UAAA;AC5CF;;AD+CA;EACE,WAAA;EACA,YAAA;EACA,UAAA;EACA,kBAAA;AC5CF;;AD+CA;EACE,eAAA;AC5CF","sourcesContent":["$nav-color: linear-gradient(315deg, #d9d9d9 0%, #f6f2f2 74%);\r\n$default-height: 100%;\r\n$default-width: 100%;\r\n$default-direction: row;\r\n$default-align: center;\r\n$default-justify: center;\r\n$medium-width: 50%;\r\n$medium-height: 50%;\r\n\r\n@mixin box($height: $default-height, $width: $default-width) {\r\n  width: $width;\r\n  height: $height;\r\n  max-height: inherit;\r\n  max-width: $width;\r\n}\r\n\r\n@mixin default_flex(\r\n  $directon: $default-direction,\r\n  $alignItems: $default-align,\r\n  $justifyContent: $default-justify\r\n) {\r\n  display: flex;\r\n  align-items: $alignItems;\r\n  justify-content: $justifyContent;\r\n  padding: 0;\r\n  margin: 0;\r\n  flex-direction: $directon;\r\n  width: inherit;\r\n  height: inherit;\r\n}\r\n\r\n@mixin flex_1(\r\n  $height: $default-height,\r\n  $width: $default-width,\r\n  $directon: $default-direction,\r\n  $alignItems: $default-align,\r\n  $justifyContent: $default-justify\r\n) {\r\n  @include box($height, $width);\r\n  @include default_flex($directon, $alignItems, $justifyContent);\r\n}\r\n\r\n@mixin typography($font-size, $font-family, $text-align, $font-weight, $color) {\r\n  font-size: $font-size;\r\n  text-align: $text-align;\r\n  flex-wrap: nowrap;\r\n  font-family: $font-family;\r\n  font-weight: $font-weight;\r\n  text-transform: uppercase;\r\n  color: $color;\r\n}\r\n\r\n#react {\r\n  width: 100vw;\r\n  height: 100vh;\r\n  margin: 0;\r\n  padding: 0;\r\n  white-space: pre-line;\r\n}\r\n\r\n.flex_box_center {\r\n  @include default_flex(column, center, center);\r\n}\r\n\r\n.map-component {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 0;\r\n}\r\n\r\n.map {\r\n  width: 100%;\r\n  height: 100%;\r\n  border: 1px solid gray;\r\n  background-color: rgb(125, 193, 220);\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: center;\r\n  color: whitesmoke;\r\n  border-radius: 5px;\r\n  padding: 0;\r\n}\r\n\r\n.leaflet-container {\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 0;\r\n  border-radius: 5px;\r\n}\r\n\r\n.leaflet-control-attribution {\r\n  font-size: 10px;\r\n}","#react {\n  width: 100vw;\n  height: 100vh;\n  margin: 0;\n  padding: 0;\n  white-space: pre-line;\n}\n\n.flex_box_center {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  margin: 0;\n  flex-direction: column;\n  width: inherit;\n  height: inherit;\n}\n\n.map-component {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  padding: 0;\n}\n\n.map {\n  width: 100%;\n  height: 100%;\n  border: 1px solid gray;\n  background-color: rgb(125, 193, 220);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  color: whitesmoke;\n  border-radius: 5px;\n  padding: 0;\n}\n\n.leaflet-container {\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  border-radius: 5px;\n}\n\n.leaflet-control-attribution {\n  font-size: 10px;\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"react": `FmhujRGwXJtslHnUhSc4`,
	"flex_box_center": `OOQqvwxn2z1lv6VItE3w`,
	"map-component": `j68GweQrdFFM52978M9c`,
	"map": `F7q0nQzJaY4af9OeDZf5`,
	"leaflet-container": `HiZSvrsOucvsrQvvah7Q`,
	"leaflet-control-attribution": `Q0Pgbjv2Y4Tm_up7oaNz`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./styles/routes.module.scss":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#DLyYjv1t7VZjyt1tCmTW {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  white-space: pre-line;
}

.UQfJeV3ozN04dPUjYFec {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  flex-direction: column;
  width: inherit;
  height: inherit;
}

.h7QGOVnkgBa4yMJ5vL25 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0;
}

.R17zqCztts3JcQ70TLNI {
  width: 100%;
  height: 100%;
  border: 1px solid gray;
  background-color: rgb(125, 193, 220);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: whitesmoke;
  border-radius: 5px;
  padding: 0;
}

.XO56XpgypQ8VRePuphZM {
  width: 100%;
  height: 100%;
  padding: 0;
  border-radius: 5px;
}

.z1qB47_h1eClpQHCznzH {
  font-size: 10px;
}

:root {
  width: 100%;
  height: 100%;
  max-height: inherit;
  max-width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0px;
  height: -webkit-fill-available;
}

.q8B991GjMuZIv5tfiao7 {
  width: 100%;
  height: 100%;
  max-height: inherit;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  flex-direction: row;
  width: inherit;
  height: inherit;
  flex-direction: row;
}

.YMXBvInJvAje_q7noa9S {
  width: 100%;
  height: 8%;
}

.CEAz52Bs8p8nslumST7q {
  width: 100%;
  height: 92%;
  padding: 3px;
  background-color: linear-gradient(315deg, #d9d9d9 0%, #f6f2f2 74%);
}

.lsyRP6wIHy8R94NkwYLF {
  width: 100%;
  height: 100%;
  max-height: inherit;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  flex-direction: column;
  width: inherit;
  height: inherit;
  overflow: auto;
}`, "",{"version":3,"sources":["webpack://./styles/root.scss","webpack://./styles/routes.module.scss"],"names":[],"mappings":"AAoDA;EACE,YAAA;EACA,aAAA;EACA,SAAA;EACA,UAAA;EACA,qBAAA;ACnDF;;ADsDA;EAvCE,aAAA;EACA,mBAuC8B;EAtC9B,uBAsCsC;EArCtC,UAAA;EACA,SAAA;EACA,sBAmCsB;EAlCtB,cAAA;EACA,eAAA;ACXF;;AD+CA;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;AC5CF;;AD+CA;EACE,WAAA;EACA,YAAA;EACA,sBAAA;EACA,oCAAA;EACA,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,uBAAA;EACA,iBAAA;EACA,kBAAA;EACA,UAAA;AC5CF;;AD+CA;EACE,WAAA;EACA,YAAA;EACA,UAAA;EACA,kBAAA;AC5CF;;AD+CA;EACE,eAAA;AC5CF;;AAjDA;EDQE,WARc;EASd,YAVe;EAWf,mBAAA;EACA,eAXc;ECEd,SAAA;EACA,UAAA;EACA,sBAAA;AAuDF;;AApDA;EACE,WAAA;EACA,8BAAA;AAuDF;;AApDA;EDJE,WARc;EASd,YAVe;EAWf,mBAAA;EACA,eAXc;EAmBd,aAAA;EACA,mBAlBc;EAmBd,uBAlBgB;EAmBhB,UAAA;EACA,SAAA;EACA,mBAvBkB;EAwBlB,cAAA;EACA,eAAA;ECZA,mBAAA;AAkEF;;AA/DA;EACE,WAAA;EACA,UAAA;AAkEF;;AA/DA;EACE,WAAA;EACA,WAAA;EACA,YAAA;EACA,kED5BU;AC8FZ;;AA/DA;EDrBE,WCsB2B;EDrB3B,YCqBqB;EDpBrB,mBAAA;EACA,eCmB2B;EDX3B,aAAA;EACA,mBAlBc;EAmBd,uBAlBgB;EAmBhB,UAAA;EACA,SAAA;EACA,sBCMiC;EDLjC,cAAA;EACA,eAAA;ECKA,cAAA;AA6EF","sourcesContent":["$nav-color: linear-gradient(315deg, #d9d9d9 0%, #f6f2f2 74%);\r\n$default-height: 100%;\r\n$default-width: 100%;\r\n$default-direction: row;\r\n$default-align: center;\r\n$default-justify: center;\r\n$medium-width: 50%;\r\n$medium-height: 50%;\r\n\r\n@mixin box($height: $default-height, $width: $default-width) {\r\n  width: $width;\r\n  height: $height;\r\n  max-height: inherit;\r\n  max-width: $width;\r\n}\r\n\r\n@mixin default_flex(\r\n  $directon: $default-direction,\r\n  $alignItems: $default-align,\r\n  $justifyContent: $default-justify\r\n) {\r\n  display: flex;\r\n  align-items: $alignItems;\r\n  justify-content: $justifyContent;\r\n  padding: 0;\r\n  margin: 0;\r\n  flex-direction: $directon;\r\n  width: inherit;\r\n  height: inherit;\r\n}\r\n\r\n@mixin flex_1(\r\n  $height: $default-height,\r\n  $width: $default-width,\r\n  $directon: $default-direction,\r\n  $alignItems: $default-align,\r\n  $justifyContent: $default-justify\r\n) {\r\n  @include box($height, $width);\r\n  @include default_flex($directon, $alignItems, $justifyContent);\r\n}\r\n\r\n@mixin typography($font-size, $font-family, $text-align, $font-weight, $color) {\r\n  font-size: $font-size;\r\n  text-align: $text-align;\r\n  flex-wrap: nowrap;\r\n  font-family: $font-family;\r\n  font-weight: $font-weight;\r\n  text-transform: uppercase;\r\n  color: $color;\r\n}\r\n\r\n#react {\r\n  width: 100vw;\r\n  height: 100vh;\r\n  margin: 0;\r\n  padding: 0;\r\n  white-space: pre-line;\r\n}\r\n\r\n.flex_box_center {\r\n  @include default_flex(column, center, center);\r\n}\r\n\r\n.map-component {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 0;\r\n}\r\n\r\n.map {\r\n  width: 100%;\r\n  height: 100%;\r\n  border: 1px solid gray;\r\n  background-color: rgb(125, 193, 220);\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: center;\r\n  color: whitesmoke;\r\n  border-radius: 5px;\r\n  padding: 0;\r\n}\r\n\r\n.leaflet-container {\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 0;\r\n  border-radius: 5px;\r\n}\r\n\r\n.leaflet-control-attribution {\r\n  font-size: 10px;\r\n}","@use \"root\";\r\n\r\n:root {\r\n  @include root.box();\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  margin: 0px;\r\n  height: -webkit-fill-available;\r\n}\r\n\r\n.main {\r\n  @include root.flex_1();\r\n  flex-direction: row;\r\n}\r\n\r\n.nav_space {\r\n  width: 100%;\r\n  height: 8%;\r\n}\r\n\r\n.workspace {\r\n  width: 100%;\r\n  height: 92%;\r\n  padding: 3px;\r\n  background-color: root.$nav-color;\r\n}\r\n\r\n.container {\r\n  @include root.flex_1(100%, 100%, column);\r\n  overflow: auto;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"react": `DLyYjv1t7VZjyt1tCmTW`,
	"flex_box_center": `UQfJeV3ozN04dPUjYFec`,
	"map-component": `h7QGOVnkgBa4yMJ5vL25`,
	"map": `R17zqCztts3JcQ70TLNI`,
	"leaflet-container": `XO56XpgypQ8VRePuphZM`,
	"leaflet-control-attribution": `z1qB47_h1eClpQHCznzH`,
	"main": `q8B991GjMuZIv5tfiao7`,
	"nav_space": `YMXBvInJvAje_q7noa9S`,
	"workspace": `CEAz52Bs8p8nslumST7q`,
	"container": `lsyRP6wIHy8R94NkwYLF`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./styles/card.module.scss":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_card_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./styles/card.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_card_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_card_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_card_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_card_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./styles/dashboard.module.scss":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_dashboard_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./styles/dashboard.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_dashboard_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_dashboard_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_dashboard_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_dashboard_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./styles/routes.module.scss":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_routes_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./styles/routes.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_routes_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_routes_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_routes_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_routes_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2IDYiIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmYwMCIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI2cHgiIGhlaWdodD0iNnB4Ij48ZyBvcGFjaXR5PSIwLjMwMiI+PHBhdGggZD0iTSA2IDYgTCAwIDYgTCAwIDQuMiBMIDQgNC4yIEwgNC4yIDQuMiBMIDQuMiAwIEwgNiAwIEwgNiA2IEwgNiA2IFoiIGZpbGw9IiMwMDAwMDAiLz48L2c+PC9zdmc+":
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2IDYiIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmYwMCIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI2cHgiIGhlaWdodD0iNnB4Ij48ZyBvcGFjaXR5PSIwLjMwMiI+PHBhdGggZD0iTSA2IDYgTCAwIDYgTCAwIDQuMiBMIDQgNC4yIEwgNC4yIDQuMiBMIDQuMiAwIEwgNiAwIEwgNiA2IEwgNiA2IFoiIGZpbGw9IiMwMDAwMDAiLz48L2c+PC9zdmc+";

/***/ })

}]);
//# sourceMappingURL=DashboardChunk.index_bundle.js.map