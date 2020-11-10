"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CartPopover = void 0;

var _react = _interopRequireWildcard(require("react"));

var _IosBasket = _interopRequireDefault(require("@meronex/icons/ios/IosBasket"));

var _reactPopper = require("react-popper");

var _styles = require("./styles");

var _orderingComponents = require("ordering-components");

var _styledComponents = require("styled-components");

var _CartContent = require("../CartContent");

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

var CartPopover = function CartPopover(props) {
  var _props$carts, _props$carts2;

  var open = props.open,
      auth = props.auth;

  var _useOrder = (0, _orderingComponents.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 1),
      orderState = _useOrder2[0];

  var theme = (0, _styledComponents.useTheme)();
  var referenceElement = (0, _react.useRef)();
  var popperElement = (0, _react.useRef)();
  var arrowElement = (0, _react.useRef)();
  var popper = (0, _reactPopper.usePopper)(referenceElement.current, popperElement.current, {
    placement: (theme === null || theme === void 0 ? void 0 : theme.rtl) ? 'bottom' : 'auto',
    modifiers: [{
      name: 'arrow',
      options: {
        element: arrowElement.current
      }
    }, {
      name: 'offset',
      options: {
        offset: [0, 12]
      }
    }]
  });
  var styles = popper.styles,
      attributes = popper.attributes,
      forceUpdate = popper.forceUpdate;
  (0, _react.useEffect)(function () {
    forceUpdate && forceUpdate();
  }, [open, orderState]);

  var handleClickOutside = function handleClickOutside(e) {
    var _popperElement$curren, _referenceElement$cur;

    if (!open) return;
    var outsidePopover = !((_popperElement$curren = popperElement.current) === null || _popperElement$curren === void 0 ? void 0 : _popperElement$curren.contains(e.target));
    var outsidePopoverMenu = !((_referenceElement$cur = referenceElement.current) === null || _referenceElement$cur === void 0 ? void 0 : _referenceElement$cur.contains(e.target));
    var outsideModal = !window.document.getElementById('app-modals') || !window.document.getElementById('app-modals').contains(e.target);

    if (outsidePopover && outsidePopoverMenu && outsideModal) {
      props.onClose && props.onClose();
    }
  };

  (0, _react.useEffect)(function () {
    window.addEventListener('mouseup', handleClickOutside);
    return function () {
      return window.removeEventListener('mouseup', handleClickOutside);
    };
  }, [open]);
  (0, _react.useEffect)(function () {
    props.onClose();
  }, [auth]);

  var popStyle = _objectSpread(_objectSpread({}, styles.popper), {}, {
    visibility: open ? 'visible' : 'hidden',
    width: '450px',
    maxHeight: '70vh',
    overflowY: 'auto'
  });

  if (!open) {
    popStyle.transform = 'translate3d(0px, 0px, 0px)';
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.HeaderItem, {
    ref: referenceElement,
    onClick: props.onClick
  }, /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(_IosBasket.default, null), ((_props$carts = props.carts) === null || _props$carts === void 0 ? void 0 : _props$carts.length) > 0 && /*#__PURE__*/_react.default.createElement("p", null, (_props$carts2 = props.carts) === null || _props$carts2 === void 0 ? void 0 : _props$carts2.length))), /*#__PURE__*/_react.default.createElement(_styles.PopoverBody, _extends({
    className: "cart-popover",
    ref: popperElement,
    style: popStyle
  }, attributes.popper), /*#__PURE__*/_react.default.createElement(_CartContent.CartContent, {
    carts: props.carts,
    isOrderStateCarts: !!orderState.carts,
    onClose: props.onClose
  }), /*#__PURE__*/_react.default.createElement(_styles.PopoverArrow, {
    key: "arrow",
    ref: arrowElement,
    style: styles.arrow
  })));
};

exports.CartPopover = CartPopover;