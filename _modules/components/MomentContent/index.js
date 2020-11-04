"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MomentContent = void 0;

var _react = _interopRequireDefault(require("react"));

var _orderingComponents = require("ordering-components");

var _styles = require("./styles");

var _MomentControl = require("../MomentControl");

var _SpinnerLoader = require("../SpinnerLoader");

var _useWindowSize2 = require("../../hooks/useWindowSize");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var MomentContent = function MomentContent(props) {
  var _document, _document$getElementB;

  var _useOrder = (0, _orderingComponents.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 1),
      orderState = _useOrder2[0];

  var currentDate = new Date();
  currentDate.setTime(currentDate.getTime() + 6 * 24 * 60 * 60 * 1000);
  currentDate.setHours(23);
  currentDate.setMinutes(59);
  var momentProps = {
    maxDate: currentDate
  };

  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
      width = _useWindowSize.width;

  var momentControl = (_document = document) === null || _document === void 0 ? void 0 : (_document$getElementB = _document.getElementById('moment_control')) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.getBoundingClientRect();
  return /*#__PURE__*/_react.default.createElement(_styles.Container, {
    isLoading: orderState === null || orderState === void 0 ? void 0 : orderState.loading
  }, /*#__PURE__*/_react.default.createElement(_MomentControl.MomentControl, momentProps), (orderState === null || orderState === void 0 ? void 0 : orderState.loading) && /*#__PURE__*/_react.default.createElement(_styles.Layer, {
    height: (momentControl === null || momentControl === void 0 ? void 0 : momentControl.height) && "".concat(momentControl === null || momentControl === void 0 ? void 0 : momentControl.height, "px")
  }, /*#__PURE__*/_react.default.createElement(_SpinnerLoader.SpinnerLoader, {
    style: {
      top: width <= 768 ? '50%' : '40%',
      position: width <= 768 ? 'absolute' : 'sticky',
      height: 'auto'
    }
  })));
};

exports.MomentContent = MomentContent;