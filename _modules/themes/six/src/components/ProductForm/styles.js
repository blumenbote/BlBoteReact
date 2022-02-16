"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperSubOption = exports.WrapperIngredients = exports.WrapperImage = exports.SkuContent = exports.SkeletonBlock = exports.ShareWrapper = exports.SectionTitle = exports.ProductTopBar = exports.ProductPrice = exports.ProductInfoWrapper = exports.ProductInfo = exports.ProductImage = exports.ProductFormTitle = exports.ProductEdition = exports.ProductContainer = exports.ProductComment = exports.ProductActions = exports.FloatingProductBar = void 0;

var _polished = require("polished");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ProductContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  padding: 0px 10px 10px;\n  width: 100%;\n  box-sizing: border-box;\n  @media (min-width: 768px) {\n    height: 100%;\n    padding: 0px 30px 10px;\n  }\n  @media (min-width: 1024px) {\n    flex-wrap: nowrap;\n    overflow: auto;\n    padding: 0;\n    height: 99vh;\n    overflow-y: scroll;\n  }\n"])));

exports.ProductContainer = ProductContainer;

var ProductTopBar = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  width: 100vw;\n  min-height: 102px;\n  padding: 0px 16px 0px 52px;\n  box-sizing: border-box;\n  @media (min-width: 1024px) {\n    padding: 0px 16px 0px 120px;\n  }\n  &h1 {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n"])));

exports.ProductTopBar = ProductTopBar;

var ProductInfoWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: grid;\n  grid-template-columns: 100%;\n  margin: 20px 48px;\n  @media (min-width: 1024px) {\n    grid-template-columns: 500px auto;\n  }\n"])));

exports.ProductInfoWrapper = ProductInfoWrapper;

var WrapperImage = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 100%;\n  @media (min-width: 1024px) {\n    border-width: 0px 1px 0px 0px;\n    border-color: #DEE2E6;\n    border-style: solid;\n  }\n"])));

exports.WrapperImage = WrapperImage;

var ProductImage = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  height: 350px;\n  width: 392px;\n  border-radius: 8px;\n  background-color: ", ";\n  img {\n    width: 100%;\n    object-fit: contain;\n  }\n  @media (min-width: 1024px) {\n    justify-content: center;\n    img {\n      width: 310px;\n      height: 310px;\n      border-radius: 10px;\n      box-sizing: border-box;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.secundaryBackground;
});

exports.ProductImage = ProductImage;

var ProductInfo = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding: 0px;\n  position: relative;\n  margin-top: 20px;\n  box-sizing: border-box;\n  h1 {\n    font-size: 20px;\n    font-weight: 500;\n    text-align: center;\n    color: #263238;\n    margin-top: 0px;\n  }\n  p {\n    font-size: 14px;\n    font-weight: 200;\n    margin-top: 0px;\n    line-height: 1.5em;\n    width: 100%;\n    text-align: left;\n    ", "\n  }\n  @media (min-width: 381px) {\n    h1 {\n      font-size: 24px;\n    }\n    p {\n      font-size: 16px;\n    }\n  }\n  @media (min-width: 411px) {\n    padding: 10px 0px;\n  }\n  @media (min-width: 1024px) {\n    padding: 0px 20px;\n    top: 0;\n    margin-top: 0px;   \n    height: fit-content;\n    min-height: 100%;\n    box-sizing: border-box;\n  }\n"])), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      text-align: right;\n    "])));
});

exports.ProductInfo = ProductInfo;

var ProductFormTitle = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  overflow-wrap: break-word;\n  padding: 0 7px;\n  margin-top: 12px;\n  @media (min-width: 1024px) {\n    width: calc(100% - 25px);\n  }\n  & span {\n    font-size: 18px\n  }\n"])));

exports.ProductFormTitle = ProductFormTitle;

var ProductEdition = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral([""])));

exports.ProductEdition = ProductEdition;

var SectionTitle = _styledComponents.default.h3(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  text-transform: capitalize;\n  font-size: 18px;\n  padding: 15px 0px;\n  margin: 0px;\n  font-weight: 600;\n  color: #333333;\n  border-bottom: 1px solid ", ";\n  margin-bottom: 20px;\n"])), function (props) {
  return props.theme.colors.borderColor;
});

exports.SectionTitle = SectionTitle;

var ProductComment = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 25px;\n  h3 {\n    color: ", ";\n  }\n  p {\n    font-weight: 300;\n    margin-bottom: 5px;\n  }\n  textarea {\n    background-color: transparent;\n  }\n  @media (min-width: 577px) {\n    margin-bottom: 62px;\n  }\n  @media (min-width: 769px) {\n    margin-bottom: 0px;\n  }\n"])), function (props) {
  return props.theme.colors.fontSecundary;
});

exports.ProductComment = ProductComment;

var ProductActions = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px;\n  position: relative;\n  bottom: 76px;\n  right: 0;\n  width: 100%;\n  background-color: #FFF;\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\n  box-sizing: border-box;\n  &.isIndividualBusinessCart-ProductAction {\n    bottom: 0;\n    @media (min-width: 1024px) {\n      padding: 0;\n    }\n    \n  }\n  div.incdec-control {\n    width: 11%;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    svg {\n      width: 25px;\n      height: 25px;\n      cursor: pointer;\n    }\n    span {\n      font-size: 18px;\n      font-weight: 600;\n    }\n  }\n  div:last-child {\n    width: 100%;\n    display: flex;\n    align-items: center;\n  }\n  button:disabled,\n  button.disabled,\n  svg.disabled {\n    opacity: 0.4;\n  }\n  svg.disabled {\n    pointer-events: none;\n  }\n  button.add {\n    width: 28%;\n    padding: 5px 10px;\n    margin: 0px 0px;\n    position: relative;\n    \n    &.soldout {\n      width: 100%;\n      pointer-events: none;\n    }\n  }\n\n  @media (min-width: 769px) {\n    position: relative;\n    bottom: initial;\n    right: initial;\n    background-color: transparent;\n    box-shadow: none;\n  }\n  @media (min-width: 1024px) {\n    position: relative;\n    justify-content: space-between;\n    div.incdec-control {\n      svg {\n        width: 30px;\n        height: 30px;\n        cursor: pointer;\n      }\n    }\n    div:last-child {\n      width: 70%;\n      button {\n        width: 100%;\n      }\n    }\n  }\n"])));

exports.ProductActions = ProductActions;

var SkeletonBlock = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  width: ", ";\n  border-radius: 16px;\n  margin: auto;\n  span {\n    margin-bottom: 10px;\n  }\n"])), function (_ref) {
  var width = _ref.width;
  return width && "".concat(width, "%");
});

exports.SkeletonBlock = SkeletonBlock;

var WrapperSubOption = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  border-radius: 10px;\n  /* &.error {\n    background-color: ", ";\n  } */\n  &.soldout {\n    pointer-events: none;\n    background-color: hsl(0, 0%, 72%);\n  }\n"])), (0, _polished.lighten)(0.58, '#A52121'));

exports.WrapperSubOption = WrapperSubOption;

var SkuContent = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  h2 {\n    font-size: 16px;\n    font-weight: 500;\n    margin-bottom: 0px;\n  }\n  p {\n    font-size: 14px;\n  }\n"])));

exports.SkuContent = SkuContent;

var WrapperIngredients = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref2) {
  var isProductSoldout = _ref2.isProductSoldout;
  return isProductSoldout && (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n    border-radius: 10px;\n    pointer-events: none;\n    background: hsl(0, 0%, 72%);\n  "])));
});

exports.WrapperIngredients = WrapperIngredients;

var ShareWrapper = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: -40px;\n  left: -5px;\n  ", "\n  width: fit-content;\n  height: fit-content;\n  z-index: 20;\n  cursor: pointer;\n  \n  .product-share {    \n    .a2a_vertical_style {\n      top: 36px;\n      left: 0;\n      display: flex;\n      flex-direction: column;\n      width: 40px;\n      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\n    }\n  }\n\n  @media (min-width: 768px) {\n    left: -8px;\n    ", "\n  }\n\n  @media (min-width: 1024px) {\n    left: -25px;\n    top: -8px;\n    ", "\n  }\n\n"])), function (props) {
  var _props$theme2;

  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n    right: 10px;\n  "])));
}, function (props) {
  var _props$theme3;

  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n      left: unset; \n      right: 25px;\n    "])));
}, function (props) {
  var _props$theme4;

  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n      left: unset; \n      right: -25px;\n    "])));
});

exports.ShareWrapper = ShareWrapper;

var FloatingProductBar = _styledComponents.default.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  position: fixed;\n  display: flex;\n  width: 100vw;\n  bottom: 0px;\n  background-color: #E8F0ED;\n  heigth: 80px;\n"])));

exports.FloatingProductBar = FloatingProductBar;

var ProductPrice = _styledComponents.default.div(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  font-size: 20px;\n  font-weight: 600;\n  padding-left: 36px;\n  width: 100px;\n"])));

exports.ProductPrice = ProductPrice;