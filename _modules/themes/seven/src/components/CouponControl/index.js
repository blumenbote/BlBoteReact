"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CouponControl = void 0;

var _react = _interopRequireDefault(require("react"));

var _orderingComponents = require("ordering-components");

var _styles = require("./styles");

var _Inputs = require("../../styles/Inputs");

var _Buttons = require("../../styles/Buttons");

var _Confirm = require("../../../../../components/Confirm");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var CouponControlUI = function CouponControlUI(props) {
  var _props$beforeElements, _props$beforeComponen, _props$afterComponent, _props$afterElements;

  var couponDefault = props.couponDefault,
      couponInput = props.couponInput,
      handleButtonApplyClick = props.handleButtonApplyClick,
      handleRemoveCouponClick = props.handleRemoveCouponClick,
      onChangeInputCoupon = props.onChangeInputCoupon,
      confirm = props.confirm,
      setConfirm = props.setConfirm;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useOrder = (0, _orderingComponents.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 1),
      orderState = _useOrder2[0];

  var onRemoveCoupon = function onRemoveCoupon() {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_COUPON', 'Are you sure that you want to delete the coupon?')
    });
  };

  var handleOnAccept = function handleOnAccept() {
    if (!confirm.error) {
      handleRemoveCouponClick && handleRemoveCouponClick();
    }

    setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
      open: false,
      error: false
    }));
    onChangeInputCoupon('');
  };

  var handleClose = function handleClose() {
    setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
      open: false,
      error: false
    }));
    onChangeInputCoupon('');
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.CouponContainer, null, couponDefault ? /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    onClick: function onClick() {
      return onRemoveCoupon();
    }
  }, t('REMOVE_COUPON', 'Remove Coupon'), " ", couponDefault) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    placeholder: t('DISCOUNT_COUPON', 'Discount coupon'),
    onChange: function onChange(e) {
      return onChangeInputCoupon(e.target.value);
    },
    autoComplete: "off"
  }), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    disabled: !couponInput || orderState.loading,
    onClick: handleButtonApplyClick
  }, t('COUPON_APPLY', 'Apply'))), /*#__PURE__*/_react.default.createElement(_Confirm.Confirm, {
    title: t('COUPON', 'Coupon'),
    content: confirm === null || confirm === void 0 ? void 0 : confirm.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: confirm === null || confirm === void 0 ? void 0 : confirm.open,
    onClose: handleClose,
    onCancel: !(confirm !== null && confirm !== void 0 && confirm.error) ? function () {
      return setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
        open: false,
        error: false
      }));
    } : null,
    onAccept: handleOnAccept,
    closeOnBackdrop: false
  })), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};

var CouponControl = function CouponControl(props) {
  var couponProp = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: CouponControlUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.CouponControl, couponProp);
};

exports.CouponControl = CouponControl;