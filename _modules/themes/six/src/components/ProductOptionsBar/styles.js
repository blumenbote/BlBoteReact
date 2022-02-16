"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OptionsBarContainer = exports.OptionSelector = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var OptionsBarContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  overflow-x: auto;\n  overflow-y: initial;\n  background-color: #F8F9FA;\n  border-width: 1px 0px;\n  border-style: solid;\n  border-color: #DEE2E6;\n  @media (min-width: 1024px) {\n    padding-left: 35px;\n    overflow: initial;\n  }\n  &::-webkit-scrollbar {\n    display: none;\n  }\n"])));

exports.OptionsBarContainer = OptionsBarContainer;

var OptionSelector = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: relative;\n  height: 68px;\n  margin: 0 16px;\n  display: flex;\n  align-items: center;\n  font-weight: 500;\n  color: #6C757D;\n  white-space: nowrap;\n  &.selected {\n    border-bottom: 4px solid ", ";\n    color: #000;\n  }\n  ::after {\n    content: \" \";\n    position: absolute;\n    right: -19px;\n    top: 9px;\n    background-color: ", ";\n    width: 12px;\n    height: 12px;\n    border-radius: 50%;\n    opacity: 0;\n    transition: opacity 0.3s\n  }\n  &.required::after {\n    opacity: 1;\n  }\n  cursor: pointer;\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primary;
});

exports.OptionSelector = OptionSelector;