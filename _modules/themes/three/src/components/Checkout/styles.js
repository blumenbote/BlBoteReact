"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddDeliveryInstrunction = exports.WrapCheckoutDeliveryDetails = exports.PromoCodeButton = exports.RightContentItem = exports.PaymentMethodHeader = exports.DeliveryScheduleContainer = exports.WarningText = exports.CartsList = exports.NotFoundImage = exports.WarningMessage = exports.WrapperPlaceOrderButton = exports.CartContainer = exports.DriverTipContainer = exports.PaymentMethodContainer = exports.BusinessDetailsContainer = exports.UserDetailsContainer = exports.DeliveryDetailsContainer = exports.SectionTitle = exports.WrapperUserDetails = exports.RightInnerContainer = exports.RightContent = exports.LeftContent = exports.WrappContainer = exports.Container = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-top: 110px;\n\n  @media (min-width: 992px) {\n    padding-top: 65px;\n  }\n"])));

exports.Container = Container;

var WrappContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 91%;\n  margin: 20px auto;\n  display: flex;\n  justify-content: space-between;\n  @media (max-width: 992px) {\n    flex-direction: column;\n  }\n"])));

exports.WrappContainer = WrappContainer;

var LeftContent = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 60%;\n  @media (max-width: 992px) {\n    width: 100%;\n  }\n"])));

exports.LeftContent = LeftContent;

var RightContent = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 30%;\n  @media (max-width: 992px) {\n    width: 100%;\n  }\n"])));

exports.RightContent = RightContent;

var RightInnerContainer = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  position: sticky;\n  top: 80px;\n"])));

exports.RightInnerContainer = RightInnerContainer;

var WrapperUserDetails = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  width: 100%;\n"])));

exports.WrapperUserDetails = WrapperUserDetails;

var SectionTitle = _styledComponents.default.h3(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  font-size: 24px;\n  margin: 0px;\n"])));

exports.SectionTitle = SectionTitle;

var DeliveryDetailsContainer = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid ", ";\n  padding-bottom: 20px;\n"])), function (props) {
  return props.theme.colors.secundary;
});

exports.DeliveryDetailsContainer = DeliveryDetailsContainer;

var UserDetailsContainer = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  margin: 30px 0px 20px;\n  flex-wrap: wrap;\n"])));

exports.UserDetailsContainer = UserDetailsContainer;
var BusinessDetailsContainer = (0, _styledComponents.default)(UserDetailsContainer)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  div {\n    h1 {\n      text-transform: capitalize;\n      margin: 0px;\n      font-size: 24px;\n    }\n  }\n"])));
exports.BusinessDetailsContainer = BusinessDetailsContainer;

var PaymentMethodContainer = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin: 20px 0px 0px;\n  h1 {\n    margin: 0px;\n    font-size: 24px;\n  }\n"])));

exports.PaymentMethodContainer = PaymentMethodContainer;
var DriverTipContainer = (0, _styledComponents.default)(PaymentMethodContainer)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  h1 {\n    border-bottom: 1px solid ", ";\n    padding-bottom: 20px;\n  }\n"])), function (props) {
  return props.theme.colors.secundary;
});
exports.DriverTipContainer = DriverTipContainer;
var CartContainer = (0, _styledComponents.default)(PaymentMethodContainer)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  margin-bottom: 20px;\n  h1 {\n    margin: 20px 0px;\n  }\n"])));
exports.CartContainer = CartContainer;

var WrapperPlaceOrderButton = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  margin: 20px 0px 10px;\n\n  button {\n    width: 100%;\n    padding: 5px 20px;\n    cursor: pointer;\n\n    &:disabled {\n      opacity: 0.5;\n      cursor: not-allowed;\n    }\n  }\n"])));

exports.WrapperPlaceOrderButton = WrapperPlaceOrderButton;

var WarningMessage = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 150px;\n  max-height: 300px;\n  background-color: #F2BB40;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  opacity: 0.8;\n  border-radius: 10px;\n  position: relative;\n  margin-bottom: 20px;\n\n  svg {\n    position: absolute;\n    font-size: 30px;\n    top: 0;\n    left: 0;\n    margin: 11px;\n    ", "\n  }\n\n  h1 {\n    font-size: 20px;\n    margin: 0px 60px;\n    text-align: center;\n  }\n"])), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n        right: 0;\n        left: initial\n    "])));
});

exports.WarningMessage = WarningMessage;

var NotFoundImage = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  max-width: 300px;\n\n  img {\n    width: 300px;\n  }\n"])));

exports.NotFoundImage = NotFoundImage;

var CartsList = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 90%;\n  margin: auto;\n\n  @media (min-width: 381px) {\n    width: 80%;\n  }\n"])));

exports.CartsList = CartsList;

var WarningText = _styledComponents.default.p(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  margin: 10px auto;\n  text-align: center;\n  color: #D83520;\n"])));

exports.WarningText = WarningText;

var DeliveryScheduleContainer = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  padding: 20px 0;\n"])));

exports.DeliveryScheduleContainer = DeliveryScheduleContainer;
var PaymentMethodHeader = (0, _styledComponents.default)(DeliveryDetailsContainer)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n"])));
exports.PaymentMethodHeader = PaymentMethodHeader;

var RightContentItem = _styledComponents.default.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  column-gap: 10px;\n  margin-bottom: 10px;\n\n  svg {\n    font-size: 24px;\n  }\n\n  ", "\n\n  ", "\n"])), function (_ref) {
  var bold = _ref.bold;
  return bold && (0, _styledComponents.css)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n    cursor: pointer;\n    font-weight: 600;\n    text-decoration: underline;\n  "])));
}, function (_ref2) {
  var lastItem = _ref2.lastItem;
  return lastItem && (0, _styledComponents.css)(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n    padding-bottom: 20px;\n    border-bottom: 1px solid ", ";\n  "])), function (props) {
    return props.theme.colors.secundary;
  });
});

exports.RightContentItem = RightContentItem;

var PromoCodeButton = _styledComponents.default.div(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n  text-align: center;\n  span {\n    text-decoration: underline;\n    font-weight: 600;\n    cursor: pointer;\n  }\n"])));

exports.PromoCodeButton = PromoCodeButton;

var WrapCheckoutDeliveryDetails = _styledComponents.default.div(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n"])));

exports.WrapCheckoutDeliveryDetails = WrapCheckoutDeliveryDetails;

var AddDeliveryInstrunction = _styledComponents.default.a(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  text-decoration: underline;\n  font-weight: 600;\n"])));

exports.AddDeliveryInstrunction = AddDeliveryInstrunction;