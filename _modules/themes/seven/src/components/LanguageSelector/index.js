"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LanguageSelector = void 0;

var _react = _interopRequireDefault(require("react"));

var _orderingComponents = require("ordering-components");

var _Select = require("../../styles/Select");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LanguageSelectorUI = function LanguageSelectorUI(props) {
  var _languagesState$langu;

  var languagesState = props.languagesState,
      currentLanguage = props.currentLanguage,
      handleChangeLanguage = props.handleChangeLanguage,
      notReload = props.notReload,
      defaultLanguages = props.defaultLanguages,
      defaultCurrentLanguage = props.defaultCurrentLanguage;

  var _languages = languagesState === null || languagesState === void 0 ? void 0 : (_languagesState$langu = languagesState.languages) === null || _languagesState$langu === void 0 ? void 0 : _languagesState$langu.map(function (language) {
    var _language$code;

    return {
      value: language === null || language === void 0 ? void 0 : language.code,
      content: language === null || language === void 0 ? void 0 : language.name,
      showOnSelected: (_language$code = language.code) === null || _language$code === void 0 ? void 0 : _language$code.toUpperCase()
    };
  });

  _languages && _languages.sort(function (a, b) {
    return a.content > b.content ? 1 : b.content > a.content ? -1 : 0;
  });
  return _languages && _languages.length > 1 ? /*#__PURE__*/_react.default.createElement(_Select.Select, {
    options: languagesState !== null && languagesState !== void 0 && languagesState.loading ? defaultLanguages : _languages,
    defaultValue: languagesState !== null && languagesState !== void 0 && languagesState.loading ? defaultCurrentLanguage : currentLanguage,
    onChange: function onChange(languageId) {
      return handleChangeLanguage(languageId);
    },
    notReload: notReload,
    noborder: true
  }) : null;
};

var LanguageSelector = function LanguageSelector(props) {
  var DefaultChangeLanguage = function DefaultChangeLanguage() {};

  var langProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: LanguageSelectorUI,
    onChangeLanguage: props.onChangeLanguage || DefaultChangeLanguage,
    defaultLanguages: [{
      content: 'English',
      showOnSelected: 'EN',
      value: 'en'
    }],
    defaultCurrentLanguage: 'en'
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.LanguageSelector, langProps);
};

exports.LanguageSelector = LanguageSelector;