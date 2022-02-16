"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessesListing = void 0;

var _react = _interopRequireWildcard(require("react"));

var _FiMap = _interopRequireDefault(require("@meronex/icons/fi/FiMap"));

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _styles = require("./styles");

var _Buttons = require("../../../../../../src/styles/Buttons");

var _NotFoundSource = require("../../../../../components/NotFoundSource");

var _Confirm = require("../../../../../components/Confirm");

var _OrdersOption = require("../../../../../components/OrdersOption");

var _useWindowSize = require("../../../../../hooks/useWindowSize");

var _Modal = require("../Modal");

var _BusinessesMap = require("../BusinessesMap");

var _BusinessController = require("../BusinessController");

var _SearchBar = require("../SearchBar");

var _AddressList = require("../AddressList");

var _AddressForm = require("../AddressForm");

var _BusinessInformation = require("../BusinessInformation");

var _orderingComponents = require("ordering-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var PIXELS_TO_SCROLL = 500;

var BusinessesListingUI = function BusinessesListingUI(props) {
  var _businessesList$busin, _props$beforeElements, _props$beforeComponen, _orderState$options2, _props$afterComponent, _props$afterElements;

  var businessesList = props.businessesList,
      paginationProps = props.paginationProps,
      searchValue = props.searchValue,
      getBusinesses = props.getBusinesses,
      isCustomLayout = props.isCustomLayout,
      onRedirectPage = props.onRedirectPage,
      handleChangeSearch = props.handleChangeSearch,
      handleBusinessClick = props.handleBusinessClick;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useOrder = (0, _orderingComponents.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 1),
      orderState = _useOrder2[0];

  var _useSession = (0, _orderingComponents.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      auth = _useSession2[0].auth;

  var _useConfig = (0, _orderingComponents.useConfig)(),
      _useConfig2 = _slicedToArray(_useConfig, 1),
      configs = _useConfig2[0].configs;

  var _useState = (0, _react.useState)({
    listOpen: false,
    formOpen: false
  }),
      _useState2 = _slicedToArray(_useState, 2),
      modals = _useState2[0],
      setModals = _useState2[1];

  var _useState3 = (0, _react.useState)({
    open: false,
    content: []
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      alertState = _useState4[0],
      setAlertState = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      activeMap = _useState6[0],
      setActiveMap = _useState6[1];

  var _useState7 = (0, _react.useState)(''),
      _useState8 = _slicedToArray(_useState7, 2),
      mapErrors = _useState8[0],
      setMapErrors = _useState8[1];

  var _useState9 = (0, _react.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      showBusinessInfo = _useState10[0],
      setShowBusinessInfo = _useState10[1];

  var _useState11 = (0, _react.useState)({}),
      _useState12 = _slicedToArray(_useState11, 2),
      businessInfoById = _useState12[0],
      setBusinessInfoById = _useState12[1];

  var _useState13 = (0, _react.useState)({
    isLoaded: false,
    businessInfo: {}
  }),
      _useState14 = _slicedToArray(_useState13, 2),
      closestBusiness = _useState14[0],
      setClosestBusiness = _useState14[1];

  var windowSize = (0, _useWindowSize.useWindowSize)();

  var _useUtils = (0, _orderingComponents.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      optimizeImage = _useUtils2[0].optimizeImage;

  var userCustomer = JSON.parse(window.localStorage.getItem('user-customer'));
  var businessesIds = isCustomLayout && businessesList.businesses && ((_businessesList$busin = businessesList.businesses) === null || _businessesList$busin === void 0 ? void 0 : _businessesList$busin.map(function (business) {
    return business.id;
  }));
  var handleScroll = (0, _react.useCallback)(function () {
    var _document$documentEle, _document$documentEle2;

    var listWindows = document.querySelector('#list_wrapper');
    var innerHeightScrolltop = listWindows.innerHeight + ((_document$documentEle = document.documentElement) === null || _document$documentEle === void 0 ? void 0 : _document$documentEle.scrollTop) + PIXELS_TO_SCROLL;
    var badScrollPosition = innerHeightScrolltop < ((_document$documentEle2 = document.documentElement) === null || _document$documentEle2 === void 0 ? void 0 : _document$documentEle2.offsetHeight);
    var hasMore = !(paginationProps.totalPages === paginationProps.currentPage);
    if (badScrollPosition || businessesList.loading || !hasMore) return;
    getBusinesses();
  }, [businessesList, paginationProps]);
  (0, _react.useEffect)(function () {
    if (!businessesList.loading) {
      var _businessesList$busin2;

      var _closestBusiness = businessesList === null || businessesList === void 0 ? void 0 : (_businessesList$busin2 = businessesList.businesses) === null || _businessesList$busin2 === void 0 ? void 0 : _businessesList$busin2.find(function (business) {
        return business.name.toLowerCase().includes('starbucks');
      });

      if (_closestBusiness && Object.keys(_closestBusiness).length > 0) {
        setClosestBusiness({
          isLoaded: true,
          businessInfo: _objectSpread({}, _closestBusiness)
        });
      }
    }
  }, [businessesList]); // useEffect(() => {
  //   if (!showBusinessInfo) {
  //     const listWindows = document.querySelector('#list_wrapper')
  //     listWindows.addEventListener('scroll', handleScroll)
  //     return () => listWindows.removeEventListener('scroll', handleScroll)
  //   }
  // }, [handleScroll, showBusinessInfo])

  var handleClickAddress = function handleClickAddress(e) {
    if (auth) {
      setModals(_objectSpread(_objectSpread({}, modals), {}, {
        listOpen: true
      }));
    } else {
      setModals(_objectSpread(_objectSpread({}, modals), {}, {
        formOpen: true
      }));
    }
  };

  var handleFindBusinesses = function handleFindBusinesses() {
    var _orderState$options, _orderState$options$a;

    if (!(orderState !== null && orderState !== void 0 && (_orderState$options = orderState.options) !== null && _orderState$options !== void 0 && (_orderState$options$a = _orderState$options.address) !== null && _orderState$options$a !== void 0 && _orderState$options$a.location)) {
      setAlertState({
        open: true,
        content: [t('SELECT_AN_ADDRESS_TO_SEARCH', 'Select or add an address to search')]
      });
      return;
    }

    setModals({
      listOpen: false,
      formOpen: false
    });
  };

  var toggleMap = function toggleMap() {
    setActiveMap(!activeMap);
  };

  var handleCloseAlerts = function handleCloseAlerts() {
    setAlertState({
      open: false,
      content: []
    });
    setMapErrors('');
  };

  var handleMapErrors = function handleMapErrors(errKey) {
    setAlertState({
      open: true,
      content: [t(errKey, mapErrors[errKey])]
    });
  };

  (0, _react.useEffect)(function () {
    if (mapErrors) {
      handleMapErrors(mapErrors);
      setActiveMap(false);
    }
  }, [mapErrors]);

  var getCustomArray = function getCustomArray(list) {
    var isArray = Array.isArray(list);
    return isArray ? list : Object.values(list);
  };

  var handleShowBusinessInfo = function handleShowBusinessInfo(business) {
    setShowBusinessInfo(true);
    setBusinessInfoById(business);
  };

  var types = ['food', 'laundry', 'alcohol', 'groceries'];

  var getBusinessType = function getBusinessType() {
    if (Object.keys(businessInfoById).length <= 0) return t('GENERAL', 'General');
    var _types = [];
    types.forEach(function (type) {
      var _type$replace;

      return businessInfoById[type] && _types.push(t("BUSINESS_TYPE_".concat(type === null || type === void 0 ? void 0 : (_type$replace = type.replace(/\s/g, '_')) === null || _type$replace === void 0 ? void 0 : _type$replace.toUpperCase()), type));
    });
    return _types.join(', ');
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), closestBusiness.isLoaded ? /*#__PURE__*/_react.default.createElement(_BusinessController.BusinessController, {
    key: closestBusiness.businessInfo.id,
    className: "card",
    business: closestBusiness.businessInfo,
    handleCustomClick: handleBusinessClick,
    orderType: orderState === null || orderState === void 0 ? void 0 : (_orderState$options2 = orderState.options) === null || _orderState$options2 === void 0 ? void 0 : _orderState$options2.type,
    isButton: true,
    buttonMessage: t('STARBUCKS_KIOSK_HOME_MESSAGE', 'Toca la pantalla para iniciar')
  }) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 500
  }), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};

var BusinessesListing = function BusinessesListing(props) {
  var businessListingProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessesListingUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.BusinessList, businessListingProps);
};

exports.BusinessesListing = BusinessesListing;