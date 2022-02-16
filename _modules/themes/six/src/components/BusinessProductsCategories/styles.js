"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CategoryCard = exports.CategoriesContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CategoriesContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  text-align: center;\n  div.category {\n    text-overflow: ellipsis;\n  }  \n"])));

exports.CategoriesContainer = CategoriesContainer;

var CategoryCard = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 176px;\n  margin: 20px;\n  img {\n    width: 100%;\n    height: 176px;\n    border-radius: 50%;\n    background-color: ", "\n  }\n"])), function (props) {
  return props.theme.colors.primaryDarkBackground;
});

exports.CategoryCard = CategoryCard;