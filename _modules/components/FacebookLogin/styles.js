"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FacebookButton = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Buttons = require("../../styles/Buttons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: #EFEFEF;\n  border-color: #EFEFEF;\n  font-size: 16px;\n  font-weight: 400;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  svg {\n    font-size: 28px;\n    color: #1977F2;\n  }\n\n  div {\n    margin: 0 auto;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FacebookButton = (0, _styledComponents.default)(_Buttons.Button)(_templateObject());
exports.FacebookButton = FacebookButton;