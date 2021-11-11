"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapAutoScroll = exports.UpsellingContainer = exports.SkeletonContainer = exports.Item = exports.Image = exports.HorizontalUpsellingContainer = exports.HorizontalItem = exports.HorizontalImage = exports.HorizontalDetails = exports.Details = exports.Container = exports.CloseUpselling = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16;

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: column;\n  width: 100%;\n  button {\n    width: 46%;\n    margin-top: 20px;\n  }\n  \n  @media (min-width: 768px){\n    justify-content: flex-start;\n    height: auto;\n    button {\n      width: 46%;\n      margin-top: 20px;\n    }\n  }\n"])));

exports.Container = Container;

var UpsellingContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  overflow: auto;\n"])));

exports.UpsellingContainer = UpsellingContainer;

var Item = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  border: 1px solid #eee;\n  width: 70%;\n  min-width: 150px;\n  padding: 20px;\n  margin: 15px 0;\n  flex-direction: column;\n  justify-content: flex-start;\n  text-align: center;\n  border-radius: 9px;\n  box-sizing: border-box;\n\n  @media (min-width: 490px) {\n    width: 43%;\n  }\n\n  @media (min-width: 769px) {\n    width: 27%;\n    padding: 11px;\n  }\n\n  @media (min-width: 1024px) {\n    width: 20%;\n    margin: 10px 15px;\n  }\n"])));

exports.Item = Item;

var Image = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 100%;\n  img{\n    width: 100%;\n    height: auto;\n    border-radius: 16px;\n    aspect-ratio: attr(width) / attr(height)\n  }\n"])));

exports.Image = Image;

var Details = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-size: 16px;\n  div {\n    width: 100%;\n     h3 {\n      margin-block-start: 0.1em;\n      margin-block-end: 0.1em;\n      text-align: center;\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      font-size: 12px;\n    }\n  }\n  p{\n    color: ", ";\n    margin: 2px auto;\n  }\n  button {\n    width: auto;\n    margin: 8px auto 0;\n    padding: 0 20px;\n    font-size: 1em;\n    line-height: 22px;\n\n  }\n\n  @media (min-width: 480px){\n    div{\n      h3{\n        font-size: 14px;\n      }\n    }\n  }\n\n"])), function (props) {
  return props.theme.colors.primary;
});

exports.Details = Details;

var CloseUpselling = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  width: 100%;\n  text-align: center;\n\n  button{\n    width: 90%;\n    font-size: 1.4em;\n    padding: 10px 0;\n  }\n\n  @media (min-width: 720px){\n    button{\n      width: 40%;\n      padding: 2px;\n      font-size: 1em;\n    }\n  }\n"])));

exports.CloseUpselling = CloseUpselling;

var SkeletonContainer = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 15%;\n  margin: 20px;\n  padding: 10px;\n  flex-direction: column;\n  justify-content: flex-start;\n  text-align: center;\n  border-radius: 9px;\n  overflow: hidden;\n"])));

exports.SkeletonContainer = SkeletonContainer;

var HorizontalUpsellingContainer = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n"])));

exports.HorizontalUpsellingContainer = HorizontalUpsellingContainer;

var HorizontalItem = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  border-radius: 7.6px;\n  margin-right: 15px;\n  border: 1px solid #E9ECEF;\n  box-sizing: border-box;\n  padding: 10px;\n\n  ", "\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    margin-left: 15px;\n    margin-right: 0px;\n  "])));
});

exports.HorizontalItem = HorizontalItem;

var HorizontalImage = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  img {\n    border-radius: 7.6px;\n    min-width: 73px;\n    min-height: 73px;\n    margin-left: 10px;\n\n    ", "\n\n  }\n"])), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n      margin-right: 10px;\n      margin-left: 0;\n    "])));
});

exports.HorizontalImage = HorizontalImage;

var HorizontalDetails = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  min-width: 100px;\n  h3 {\n    font-weight: 500;\n    font-size: 12px;\n    color: ", ";\n    margin: 0 0 5px 0;\n  }\n\n  span {\n    font-size: 12px;\n    color: ", ";\n\n    &.discount {\n      font-size: 10px;\n      color: #909BA9;\n      ", "\n    }\n  }\n\n  button {\n    margin-top: 6px;\n    border-radius: 50px;\n    color: ", ";\n    background: ", "\n  }\n"])), function (props) {
  return props.theme.colors.darkTextColor;
}, function (props) {
  return props.theme.colors.darkTextColor;
}, function (props) {
  var _props$theme2;

  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n        margin-right: 5px;\n      "]))) : (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n        margin-left: 5px;\n      "])));
}, function (props) {
  var _props$theme3;

  return (_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.colors.primary;
}, function (props) {
  var _props$theme4;

  return (_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.colors.primaryContrast;
});

exports.HorizontalDetails = HorizontalDetails;

var WrapAutoScroll = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  margin-top: 20px;\n  width: 100%;\n  overflow-x: auto;\n  display: flex;\n"])));

exports.WrapAutoScroll = WrapAutoScroll;