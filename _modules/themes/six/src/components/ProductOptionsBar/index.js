"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductOptionsBar = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styles = require("./styles");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ProductOptionsBar = function ProductOptionsBar(props) {
  var extras = props.extras,
      selected = props.selected,
      setSelected = props.setSelected,
      errors = props.errors;

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      options = _useState2[0],
      setOptions = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      errorsIds = _useState4[0],
      setErrorsIds = _useState4[1];

  (0, _react.useEffect)(function () {
    var _optionsList = extras === null || extras === void 0 ? void 0 : extras.reduce(function (allOptions, extra) {
      allOptions = [].concat(_toConsumableArray(allOptions), _toConsumableArray(extra.options));
      allOptions = allOptions.filter(function (option) {
        return option.enabled;
      });
      return allOptions;
    }, []);

    var _optionsReduced = _optionsList.reduce(function (reducer, option) {
      reducer.push({
        id: option.id,
        name: option.name,
        min: option.min
      });
      return reducer;
    }, []);

    var _optionsSorted = _optionsReduced.sort(function (option1, option2) {
      if (option1.min === 0 && option2.min >= 1) {
        return 1;
      } else if (option1.min >= 1 && option2.min === 0) {
        return -1;
      } else {
        return 0;
      }
    });

    var _options = [].concat(_toConsumableArray(_optionsSorted), [{
      id: -1,
      name: 'Comments'
    }]);

    setOptions(_options);
    setSelected(_options[0]);
  }, []);
  (0, _react.useEffect)(function () {
    var _errorsIds = Object.keys(errors).reduce(function (reduced, error) {
      reduced.push(parseInt(error === null || error === void 0 ? void 0 : error.replace('id:', '')));
      return reduced;
    }, []);

    setErrorsIds(_errorsIds);
  }, [errors]);
  (0, _react.useEffect)(function () {
    if ((options === null || options === void 0 ? void 0 : options.length) > 0 && selected !== '') {
      setSelected(options[0]);
    }
  }, [options]);

  var handleOptionClick = function handleOptionClick(id) {
    var _selectedOption = options.find(function (option) {
      return option.id === id;
    });

    setSelected(_selectedOption);
  };

  return /*#__PURE__*/_react.default.createElement(_styles.OptionsBarContainer, null, options.map(function (option) {
    return /*#__PURE__*/_react.default.createElement(_styles.OptionSelector, {
      key: option.id,
      className: "".concat(option.id === selected.id ? 'selected' : '', " ").concat(errorsIds.includes(option.id) ? 'required' : ''),
      onClick: function onClick() {
        return handleOptionClick(option.id);
      }
    }, option.name);
  }));
};

exports.ProductOptionsBar = ProductOptionsBar;