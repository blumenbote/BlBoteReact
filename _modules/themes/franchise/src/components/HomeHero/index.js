"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HomeHero = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = require("styled-components");

var _orderingComponents = require("ordering-components");

var _HiOutlineLocationMarker = _interopRequireDefault(require("@meronex/icons/hi/HiOutlineLocationMarker"));

var _styles = require("./styles");

var _Modal = require("../Modal");

var _Buttons = require("../../styles/Buttons");

var _AddressForm = require("../../components/AddressForm");

var _AddressList = require("../../components/AddressList");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var HomeHero = function HomeHero(props) {
  var _props$beforeElements, _props$beforeComponen, _theme$images, _theme$images$general, _theme$defaultLanguag, _theme$defaultLanguag2, _orderState$options2, _orderState$options2$, _theme$defaultLanguag3, _theme$defaultLanguag4, _theme$defaultLanguag5, _orderState$options3, _theme$defaultLanguag6, _props$afterComponent, _props$afterElements;

  var onFindBusiness = props.onFindBusiness;

  var _useSession = (0, _orderingComponents.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      auth = _useSession2[0].auth;

  var _useOrder = (0, _orderingComponents.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 1),
      orderState = _useOrder2[0];

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useState = (0, _react.useState)({
    listOpen: false,
    formOpen: false
  }),
      _useState2 = _slicedToArray(_useState, 2),
      modals = _useState2[0],
      setModals = _useState2[1];

  var theme = (0, _styledComponents.useTheme)();
  var userCustomer = parseInt(window.localStorage.getItem('user-customer'));

  var handleFindBusinesses = function handleFindBusinesses() {
    var _orderState$options, _orderState$options$a;

    if (!(orderState !== null && orderState !== void 0 && (_orderState$options = orderState.options) !== null && _orderState$options !== void 0 && (_orderState$options$a = _orderState$options.address) !== null && _orderState$options$a !== void 0 && _orderState$options$a.location)) {
      setModals(_objectSpread(_objectSpread({}, modals), {}, {
        formOpen: true
      }));
      return;
    }

    setModals({
      listOpen: false,
      formOpen: false
    });
    onFindBusiness && onFindBusiness();
  };

  var handleAddressInput = function handleAddressInput() {
    if (auth) {
      setModals(_objectSpread(_objectSpread({}, modals), {}, {
        listOpen: true
      }));
    } else {
      setModals(_objectSpread(_objectSpread({}, modals), {}, {
        formOpen: true
      }));
    }
  };

  (0, _react.useEffect)(function () {
    return function () {
      return setModals({
        listOpen: false,
        formOpen: false
      });
    };
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.HeroContainer, {
    bgimage: (_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$general = _theme$images.general) === null || _theme$images$general === void 0 ? void 0 : _theme$images$general.homeHero
  }, /*#__PURE__*/_react.default.createElement(_styles.ContentWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Title, null, t('TITLE_HOME', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag = theme.defaultLanguages) === null || _theme$defaultLanguag === void 0 ? void 0 : _theme$defaultLanguag.TITLE_HOME) || 'All We need is Food.')), /*#__PURE__*/_react.default.createElement(_styles.Slogan, null, t('SUBTITLE_HOME', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag2 = theme.defaultLanguages) === null || _theme$defaultLanguag2 === void 0 ? void 0 : _theme$defaultLanguag2.SUBTITLE_HOME) || 'Let\'s start to order food now')), /*#__PURE__*/_react.default.createElement(_styles.WrapInput, {
    onClick: handleAddressInput,
    withIcon: true
  }, /*#__PURE__*/_react.default.createElement(_HiOutlineLocationMarker.default, null), /*#__PURE__*/_react.default.createElement("p", null, (orderState === null || orderState === void 0 ? void 0 : (_orderState$options2 = orderState.options) === null || _orderState$options2 === void 0 ? void 0 : (_orderState$options2$ = _orderState$options2.address) === null || _orderState$options2$ === void 0 ? void 0 : _orderState$options2$.address) || t('TYPE_AN_ADDRESS', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag3 = theme.defaultLanguages) === null || _theme$defaultLanguag3 === void 0 ? void 0 : _theme$defaultLanguag3.TYPE_AN_ADDRESS) || 'Type an address'))), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    name: "find-business",
    onClick: handleFindBusinesses
  }, t('FIND_BUSINESSES', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag4 = theme.defaultLanguages) === null || _theme$defaultLanguag4 === void 0 ? void 0 : _theme$defaultLanguag4.FIND_BUSINESSES) || 'Find businesses'))), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    title: t('WHERE_DO_WE_DELIVERY', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag5 = theme.defaultLanguages) === null || _theme$defaultLanguag5 === void 0 ? void 0 : _theme$defaultLanguag5.WHERE_DO_WE_DELIVERY) || 'Where do we delivery?'),
    open: modals.formOpen,
    onClose: function onClose() {
      return setModals(_objectSpread(_objectSpread({}, modals), {}, {
        formOpen: false
      }));
    }
  }, /*#__PURE__*/_react.default.createElement(_AddressForm.AddressForm, {
    useValidationFileds: true,
    address: (orderState === null || orderState === void 0 ? void 0 : (_orderState$options3 = orderState.options) === null || _orderState$options3 === void 0 ? void 0 : _orderState$options3.address) || {},
    onClose: function onClose() {
      return setModals(_objectSpread(_objectSpread({}, modals), {}, {
        formOpen: false
      }));
    },
    onSaveAddress: function onSaveAddress() {
      return setModals(_objectSpread(_objectSpread({}, modals), {}, {
        formOpen: false
      }));
    },
    onCancel: function onCancel() {
      return setModals(_objectSpread(_objectSpread({}, modals), {}, {
        formOpen: false
      }));
    }
  })), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    title: t('WHERE_DO_WE_DELIVERY', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag6 = theme.defaultLanguages) === null || _theme$defaultLanguag6 === void 0 ? void 0 : _theme$defaultLanguag6.WHERE_DO_WE_DELIVERY) || 'Where do we delivery?'),
    open: modals.listOpen,
    width: "70%",
    onClose: function onClose() {
      return setModals(_objectSpread(_objectSpread({}, modals), {}, {
        listOpen: false
      }));
    }
  }, /*#__PURE__*/_react.default.createElement(_AddressList.AddressList, {
    isModal: true,
    changeOrderAddressWithDefault: true,
    userId: isNaN(userCustomer) ? null : userCustomer,
    onCancel: function onCancel() {
      return setModals(_objectSpread(_objectSpread({}, modals), {}, {
        listOpen: false
      }));
    },
    onAccept: function onAccept() {
      return handleFindBusinesses();
    }
  }))), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};

exports.HomeHero = HomeHero;