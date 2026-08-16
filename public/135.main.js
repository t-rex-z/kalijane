"use strict";
(self["webpackChunkkali_jane"] = self["webpackChunkkali_jane"] || []).push([[135],{

/***/ 4135
(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {


// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(5072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(7825);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(7659);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(5056);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(540);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(1113);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/index.css
var cjs_js_src = __webpack_require__(6523);
;// ./src/index.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(cjs_js_src/* default */.A, options);




       /* harmony default export */ const src = (cjs_js_src/* default */.A && cjs_js_src/* default */.A.locals ? cjs_js_src/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(467);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(3029);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js + 2 modules
var createClass = __webpack_require__(9530);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(388);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(3954);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(5361);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(4756);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/react-router-dom/dist/index.js
var dist = __webpack_require__(4976);
// EXTERNAL MODULE: ./node_modules/react-router/dist/index.js
var react_router_dist = __webpack_require__(7767);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__(5458);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(296);
;// ./src/withRouter.js
/* unused harmony import specifier */ var _extends;
/* unused harmony import specifier */ var React;
/* unused harmony import specifier */ var useLocation;
/* unused harmony import specifier */ var useNavigate;
/* unused harmony import specifier */ var useParams;



var withRouter = function withRouter(Component) {
  return function (props) {
    var location = useLocation();
    var navigate = useNavigate();
    var params = useParams();
    return /*#__PURE__*/React.createElement(Component, _extends({
      location: location,
      navigate: navigate,
      params: params
    }, props));
  };
};
/* harmony default export */ const src_withRouter = ((/* unused pure expression or super */ null && (withRouter)));
// EXTERNAL MODULE: ./node_modules/react-pageloom/dist/esm/components/wrapper/Wrapper.js + 12 modules
var Wrapper = __webpack_require__(7575);
// EXTERNAL MODULE: ./node_modules/react-pageloom/dist/esm/components/block/Block.js + 1 modules
var Block = __webpack_require__(7528);
// EXTERNAL MODULE: ./node_modules/react-pageloom/dist/esm/components/container/Container.js + 2 modules
var Container = __webpack_require__(9025);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[3]!./src/views/MainPage.scss
var MainPage = __webpack_require__(5311);
;// ./src/views/MainPage.scss

      
      
      
      
      
      
      
      
      

var MainPage_options = {};

MainPage_options.styleTagTransform = (styleTagTransform_default());
MainPage_options.setAttributes = (setAttributesWithoutAttributes_default());
MainPage_options.insert = insertBySelector_default().bind(null, "head");
MainPage_options.domAPI = (styleDomAPI_default());
MainPage_options.insertStyleElement = (insertStyleElement_default());

var MainPage_update = injectStylesIntoStyleTag_default()(MainPage/* default */.A, MainPage_options);




       /* harmony default export */ const views_MainPage = (MainPage/* default */.A && MainPage/* default */.A.locals ? MainPage/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./node_modules/react-intersection-observer/dist/index.mjs
var react_intersection_observer_dist = __webpack_require__(5692);
;// ./src/views/MainPage.js







function MainPage_MainPage() {
  var _useState = (0,react.useState)([]),
    _useState2 = (0,slicedToArray/* default */.A)(_useState, 2),
    words = _useState2[0],
    setWords = _useState2[1];
  var _useState3 = (0,react.useState)("home"),
    _useState4 = (0,slicedToArray/* default */.A)(_useState3, 2),
    currentPage = _useState4[0],
    setCurrentPage = _useState4[1];
  var _useState5 = (0,react.useState)(false),
    _useState6 = (0,slicedToArray/* default */.A)(_useState5, 2),
    onLibraryPrecoEnter = _useState6[0],
    setOnLibraryPrecoEnter = _useState6[1];
  var UniversBlockRef = (0,react.useRef)(null);
  var CouvScrollRef = (0,react.useRef)(null);
  var ExtraitsScrollRef = (0,react.useRef)(null);
  var LibrairieScrollRef = (0,react.useRef)(null);
  var CbUniversBlockTrackingRef = (0,react_intersection_observer_dist/* useOnInView */.zQ)(function (inView, entry) {
    if (inView) {
      // Element is in view - perhaps log an impression
      setCurrentPage("couv");
      console.log("Element appeared in view", entry.target);
      var now = Date.now();
      UniversBlockRef.current = setInterval(function () {
        _startTimer(now);
      }, 200);
    } else {
      console.log("Element left view", entry.target);
      clearInterval(UniversBlockRef.current);
      var updatedWords = (0,toConsumableArray/* default */.A)(words);
      for (var i = 0; i < updatedWords.length; ++i) {
        var word = updatedWords[i];
        word.opacity = 0;
      }
      setWords(updatedWords);
    }
  }, {
    /* Optional options */
    threshold: 0.5,
    triggerOnce: false
  });
  var CbExtraitsBlockTrackingRef = (0,react_intersection_observer_dist/* useOnInView */.zQ)(function (inView, entry) {
    if (inView) {
      setCurrentPage("extraits");
    }
  }, {
    /* Optional options */
    threshold: 0.5,
    triggerOnce: false
  });
  var CbLibrairieBlockTrackingRef = (0,react_intersection_observer_dist/* useOnInView */.zQ)(function (inView, entry) {
    if (inView) {
      setCurrentPage("librairie");
    }
  }, {
    /* Optional options */
    threshold: 0.5,
    triggerOnce: false
  });
  var CbHomeBlockTrackingRef = (0,react_intersection_observer_dist/* useOnInView */.zQ)(function (inView, entry) {
    if (inView) {
      setCurrentPage("home");
    }
  }, {
    /* Optional options */
    threshold: 0.5,
    triggerOnce: false
  });
  (0,react.useEffect)(function () {
    setDefaultWords();
  }, []);
  var setDefaultWords = function setDefaultWords() {
    var defaultWords = [{
      value: "AVEC",
      x: 32,
      y: 50,
      size: 18,
      start: 1,
      end: 1.3,
      fontSize: "5vw",
      color: "#c5fd01",
      opacity: 0
    }, {
      value: "KALI-JANE",
      x: 25,
      y: 50,
      size: 18,
      start: 1.3,
      end: 1.6,
      fontSize: "5vw",
      color: "#b80444",
      opacity: 0
    }, {
      value: "KALI-JANE",
      x: 25,
      y: 50,
      size: 18,
      start: 1.6,
      end: 1.9,
      fontSize: "5vw",
      color: "#c5fd01",
      opacity: 0
    }, {
      value: "KALI-JANE",
      x: 25,
      y: 50,
      size: 18,
      start: 1.9,
      end: 2.1,
      fontSize: "5vw",
      color: "#b80444",
      opacity: 0
    }, {
      value: "KALI-JANE",
      x: 25,
      y: 50,
      size: 18,
      start: 2.1,
      end: 2.3,
      fontSize: "5vw",
      color: "#c5fd01",
      opacity: 0
    }, {
      value: "KALI-JANE",
      x: 25,
      y: 50,
      size: 18,
      start: 2.3,
      end: 3.3,
      fontSize: "5vw",
      color: "#b80444",
      opacity: 0
    }, {
      value: "SEBASTIEN",
      x: 23,
      y: 50,
      size: 18,
      start: 3.3,
      end: 3.7,
      fontSize: "5vw",
      color: "#c5fd01",
      opacity: 0
    }, {
      value: "BELLANGER",
      x: 23,
      y: 50,
      size: 18,
      start: 3.7,
      end: 4.1,
      fontSize: "5vw",
      color: "#b80444",
      opacity: 0
    }, {
      value: "ECRIT",
      x: 29,
      y: 50,
      size: 18,
      start: 4.1,
      end: 4.5,
      fontSize: "5vw",
      color: "#c5fd01",
      opacity: 0
    }, {
      value: "SON ALICE",
      x: 25,
      y: 50,
      size: 18,
      start: 4.5,
      end: 4.9,
      fontSize: "5vw",
      color: "#b80444",
      opacity: 0
    }, {
      value: "AUX",
      x: 17,
      y: 50,
      size: 18,
      start: 4.9,
      end: 5.5,
      fontSize: "5vw",
      color: "#c5fd01",
      opacity: 0
    }, {
      value: "POLLUANTS",
      x: 30,
      y: 50,
      size: 18,
      start: 5.1,
      end: 5.5,
      fontSize: "5vw",
      color: "#b80444",
      opacity: 0
    }, {
      value: "ETERNELS",
      x: 25,
      y: 50,
      size: 18,
      start: 5.5,
      end: 5.9,
      fontSize: "5vw",
      color: "#c5fd01",
      opacity: 0
    }, {
      value: "MUTASY",
      x: 27,
      y: 50,
      size: 18,
      start: 6,
      end: 6.2,
      fontSize: "5vw",
      color: "#b80444",
      opacity: 0
    }, {
      value: "MUTASY",
      x: 27,
      y: 50,
      size: 18,
      start: 6.2,
      end: 6.4,
      fontSize: "5vw",
      color: "#c5fd01",
      opacity: 0
    }, {
      value: "MUTASY",
      x: 27,
      y: 50,
      size: 18,
      start: 6.4,
      end: 6.6,
      fontSize: "5vw",
      color: "#b80444",
      opacity: 0
    }, {
      value: "MUTASY",
      x: 27,
      y: 50,
      size: 18,
      start: 6.6,
      end: 6.8,
      fontSize: "5vw",
      color: "#c5fd01",
      opacity: 0
    }, {
      value: "MUTASY",
      x: 27,
      y: 50,
      size: 18,
      start: 6.8,
      end: 8,
      fontSize: "5vw",
      color: "#b80444",
      opacity: 0
    }, {
      value: "FANTAISIE",
      x: 24,
      y: 50,
      size: 18,
      start: 8,
      end: 8.4,
      fontSize: "5vw",
      color: "#c5fd01",
      opacity: 0
    }, {
      value: "MUTANTE",
      x: 25,
      y: 50,
      size: 18,
      start: 8.4,
      end: 8.8,
      fontSize: "5vw",
      color: "#b80444",
      opacity: 0
    }, {
      value: "OUI",
      x: 32,
      y: 50,
      size: 18,
      start: 8.8,
      end: 9.2,
      fontSize: "5vw",
      color: "#c5fd01",
      opacity: 0
    }, {
      value: "LES PLASTIQUES",
      x: 17,
      y: 50,
      size: 31,
      start: 9.2,
      end: 9.6,
      fontSize: "5vw",
      color: "#b80444",
      opacity: 0
    }, {
      value: "EN",
      x: 31,
      y: 50,
      size: 18,
      start: 9.6,
      end: 10.2,
      fontSize: "5vw",
      color: "#c5fd01",
      opacity: 0
    }, {
      value: "ONT",
      x: 39,
      y: 50,
      size: 18,
      start: 9.9,
      end: 10.2,
      fontSize: "5vw",
      color: "#b80444",
      opacity: 0
    }, {
      value: "PERTURBE",
      x: 24,
      y: 50,
      size: 18,
      start: 10.2,
      end: 10.6,
      fontSize: "5vw",
      color: "#c5fd01",
      opacity: 0
    }, {
      value: "LE RECIT",
      x: 25,
      y: 50,
      size: 18,
      start: 10.6,
      end: 11,
      fontSize: "5vw",
      color: "#b80444",
      opacity: 0
    }, {
      value: "ODYSSEE",
      x: 25,
      y: 50,
      size: 18,
      start: 11,
      end: 12.9,
      fontSize: "5vw",
      color: "#c5fd01",
      opacity: 0
    }, {
      value: "A HAUTEUR",
      x: 23,
      y: 50,
      size: 18,
      start: 12.9,
      end: 13.3,
      fontSize: "5vw",
      color: "#b80444",
      opacity: 0
    }, {
      value: "D'ENFANT",
      x: 25,
      y: 50,
      size: 18,
      start: 13.3,
      end: 13.7,
      fontSize: "5vw",
      color: "#c5fd01",
      opacity: 0
    }, {
      value: "CE DRAME",
      x: 24,
      y: 50,
      size: 18,
      start: 13.7,
      end: 14.1,
      fontSize: "5vw",
      color: "#b80444",
      opacity: 0
    }, {
      value: "FEROCE",
      x: 26,
      y: 50,
      size: 18,
      start: 14.1,
      end: 14.5,
      fontSize: "5vw",
      color: "#c5fd01",
      opacity: 0
    }, {
      value: "A",
      x: 20,
      y: 50,
      size: 18,
      start: 14.5,
      end: 15.4,
      fontSize: "5vw",
      color: "#b80444",
      opacity: 0
    }, {
      value: "LA",
      x: 24,
      y: 50,
      size: 18,
      start: 14.8,
      end: 15.4,
      fontSize: "5vw",
      color: "#c5fd01",
      opacity: 0
    }, {
      value: "CROISEE",
      x: 31,
      y: 50,
      size: 18,
      start: 15.1,
      end: 15.4,
      fontSize: "5vw",
      color: "#b80444",
      opacity: 0
    }, {
      value: "DU ROMAN",
      x: 24,
      y: 50,
      size: 18,
      start: 15.4,
      end: 15.8,
      fontSize: "5vw",
      color: "#c5fd01",
      opacity: 0
    }, {
      value: "ET DU POEME",
      x: 20,
      y: 50,
      size: 18,
      start: 15.8,
      end: 16.2,
      fontSize: "5vw",
      color: "#b80444",
      opacity: 0
    }, {
      value: "EPIQUE",
      x: 27,
      y: 50,
      size: 18,
      start: 16.2,
      end: 16.6,
      fontSize: "5vw",
      color: "#c5fd01",
      opacity: 0
    }, {
      value: "SE DEPLOIE",
      x: 22,
      y: 50,
      size: 18,
      start: 16.6,
      end: 17,
      fontSize: "5vw",
      color: "#b80444",
      opacity: 0
    }, {
      value: "EN",
      x: 33,
      y: 50,
      size: 18,
      start: 17,
      end: 17.4,
      fontSize: "5vw",
      color: "#c5fd01",
      opacity: 0
    }, {
      value: "DIX",
      x: 28,
      y: 50,
      size: 18,
      start: 17.4,
      end: 18,
      fontSize: "5vw",
      color: "#b80444",
      opacity: 0
    }, {
      value: "ECLATS",
      x: 38,
      y: 50,
      size: 18,
      start: 17.7,
      end: 18,
      fontSize: "5vw",
      color: "#c5fd01",
      opacity: 0
    }, {
      value: "SENSIBLES",
      x: 25,
      y: 50,
      size: 18,
      start: 18,
      end: 18.5,
      fontSize: "5vw",
      color: "#b80444",
      opacity: 0
    }, {
      value: "AUSSI APPELES",
      x: 17,
      y: 50,
      size: 18,
      start: 18.5,
      end: 18.9,
      fontSize: "5vw",
      color: "#c5fd01",
      opacity: 0
    }, {
      value: "ALLELIES",
      x: 25,
      y: 50,
      size: 18,
      start: 18.9,
      end: 21,
      fontSize: "5vw",
      color: "#b80444",
      opacity: 0
    }, {
      value: "CELLE",
      x: 27,
      y: 50,
      size: 18,
      start: 21,
      end: 21.4,
      fontSize: "5vw",
      color: "#c5fd01",
      opacity: 0
    }, {
      value: "DE",
      x: 33,
      y: 50,
      size: 18,
      start: 21.4,
      end: 22,
      fontSize: "5vw",
      color: "#b80444",
      opacity: 0
    }, {
      value: "LA",
      x: 40,
      y: 50,
      size: 18,
      start: 21.7,
      end: 22,
      fontSize: "5vw",
      color: "#c5fd01",
      opacity: 0
    }, {
      value: "FUGUE",
      x: 27,
      y: 50,
      size: 18,
      start: 22,
      end: 22.5,
      fontSize: "5vw",
      color: "#b80444",
      opacity: 0
    }, {
      value: "OUVRE",
      x: 27,
      y: 50,
      size: 18,
      start: 22.5,
      end: 22.9,
      fontSize: "5vw",
      color: "#c5fd01",
      opacity: 0
    }, {
      value: "L'EPOPEE",
      x: 25,
      y: 50,
      size: 18,
      start: 23,
      end: 23.2,
      fontSize: "5vw",
      color: "#b80444",
      opacity: 0
    }, {
      value: "L'EPOPEE",
      x: 25,
      y: 50,
      size: 18,
      start: 23.2,
      end: 23.5,
      fontSize: "5vw",
      color: "#c5fd01",
      opacity: 0
    }, {
      value: "L'EPOPEE",
      x: 25,
      y: 50,
      size: 18,
      start: 23.5,
      end: 23.7,
      fontSize: "5vw",
      color: "#b80444",
      opacity: 0
    }, {
      value: "L'EPOPEE",
      x: 25,
      y: 50,
      size: 18,
      start: 23.7,
      end: 25,
      fontSize: "5vw",
      color: "#c5fd01",
      opacity: 0
    }];
    setWords(defaultWords);
  };
  var _startTimer = function startTimer(startTime) {
    var updatedWords = (0,toConsumableArray/* default */.A)(words);
    var timeElapsed = (Date.now() - startTime) / 1000;
    var hasChanged = false;
    for (var i = 0; i < updatedWords.length; ++i) {
      var word = updatedWords[i];
      if (word.end < timeElapsed && word.opacity > 0) {
        word.opacity = 0;
        hasChanged = true;
      } else if (word.start <= timeElapsed && word.end >= timeElapsed && word.opacity == 0) {
        console.log("MATCH FOR ", word);
        word.opacity = 100;
        hasChanged = true;
      }
    }
    if (hasChanged) {
      setWords(updatedWords);
    }

    //If we reach the end + 2 seconds, play again
    if (timeElapsed > updatedWords[updatedWords.length - 1].end + 2) {
      clearInterval(UniversBlockRef.current);
      var now = Date.now();
      UniversBlockRef.current = setInterval(function () {
        _startTimer(now);
      }, 200);
    }
  };
  var getWords = function getWords() {
    var result = [];
    for (var i = 0; i < words.length; ++i) {
      var word = words[i];
      result.push(/*#__PURE__*/react.createElement("span", {
        className: "wordFont",
        key: i,
        style: {
          "float": "left",
          position: "absolute",
          left: word.x + "%",
          top: word.y + "%",
          fontSize: word.fontSize,
          opacity: word.opacity,
          color: word.color
        }
      }, word.value));
    }
    return result;
  };
  console.log("INNER HEIGHT", window.innerHeight);
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    className: "menu"
  }, /*#__PURE__*/react.createElement("div", {
    className: "mainMenu"
  }, /*#__PURE__*/react.createElement("div", {
    className: "couvButton".concat(currentPage == "couv" ? "Selected" : ""),
    onClick: function onClick() {
      CouvScrollRef.current.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }), /*#__PURE__*/react.createElement("div", {
    id: "extraitButton",
    className: "extraitButton".concat(currentPage == "extraits" ? "Selected" : ""),
    onClick: function onClick() {
      ExtraitsScrollRef.current.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }), /*#__PURE__*/react.createElement("div", {
    id: "librairieButton",
    className: "librairieButton".concat(currentPage == "librairie" ? "Selected" : ""),
    onClick: function onClick() {
      LibrairieScrollRef.current.scrollIntoView({
        behavior: 'smooth'
      });
    }
  })), /*#__PURE__*/react.createElement("div", {
    className: "betweenMenus"
  }), /*#__PURE__*/react.createElement("div", {
    className: "extraMenu"
  }, /*#__PURE__*/react.createElement("div", {
    className: "mailButton"
  }), /*#__PURE__*/react.createElement("div", {
    className: "instaButton"
  }), /*#__PURE__*/react.createElement("div", {
    className: "tiktokButton"
  }))), /*#__PURE__*/react.createElement(Wrapper/* PageWrapper */.f, {
    snapScroll: true
  }, /*#__PURE__*/react.createElement(Block/* PageBlock */.B, null, /*#__PURE__*/react.createElement("div", {
    className: "homeBlock",
    ref: CbHomeBlockTrackingRef
  }, /*#__PURE__*/react.createElement("div", {
    className: "precoBlock"
  }))), /*#__PURE__*/react.createElement(Block/* PageBlock */.B, {
    ref: CouvScrollRef
  }, /*#__PURE__*/react.createElement("div", {
    className: "universBlock",
    ref: CbUniversBlockTrackingRef
  }, /*#__PURE__*/react.createElement("div", {
    className: "letters"
  }, getWords()), /*#__PURE__*/react.createElement("div", {
    className: "bookBack"
  }, /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("img", {
    src: "assets/images/4 de couv.png"
  }), /*#__PURE__*/react.createElement("p", {
    className: "bookFont"
  }, /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("br", null), "Kali-Jane a six ans, amazone ou gitane, elle h\xE9site, c\u2019est une fille du futur.", /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("br", null), "Elle voyage dans une roulotte avec son pap\u0101ye, le boucher de la tribu. Ensemble, et g\xE9n\xE9ration apr\xE8s g\xE9n\xE9ration pour son peuple, ils font le tour de notre plan\xE8te sauvage et hybride.", /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("br", null), "Aujourd\u2019hui, les deux nomades ont pris du retard sur le reste de la caravane ; c\u2019est la nuit et Kali-Jane ne dort pas. Elle fugue.", /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("br", null), "L\u2019enfant part sauver sa Dame, une biche au sang dragon. Elle lui a jur\xE9 qu\u2019elle ne serait pas abattue. Elle r\xEAve de la soigner et l'emm\xE8ne gu\xE9rir \xE0 la mer M\xE9diterran\xE9e.", /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("br", null), "Mais la biche n\u2019est pas malade, l\u2019animale est enceinte et s\u2019est livr\xE9e au boucher pour son accouchement prochain.", /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("br", null), "Enceinte comme les femmes de jadis.", /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("br", null), "Alors, si l\u2019automne tropical les asphyxie, si les lianes entrelacent des barricades et les ronces \xE9lectrocutent, non, Kali-Jane n\u2019aura pas le choix, il faudra qu\u2019elle la d\xE9clare, \xE0 l\u2019encre vivant de son crachat, sa guerre contre la nature.")))), /*#__PURE__*/react.createElement(Block/* PageBlock */.B, {
    ref: ExtraitsScrollRef
  }, /*#__PURE__*/react.createElement(Container/* Container */.m, null, /*#__PURE__*/react.createElement("div", {
    className: "extraitBlock",
    ref: CbExtraitsBlockTrackingRef
  }, /*#__PURE__*/react.createElement("div", {
    className: "extraitLeft"
  }, /*#__PURE__*/react.createElement("div", {
    id: "extrait1L"
  })), /*#__PURE__*/react.createElement("div", {
    className: "extraitRight"
  }, /*#__PURE__*/react.createElement("div", {
    id: "extrait1R"
  }))))), /*#__PURE__*/react.createElement(Block/* PageBlock */.B, null, /*#__PURE__*/react.createElement(Container/* Container */.m, null, /*#__PURE__*/react.createElement("div", {
    className: "extraitBlock"
  }, /*#__PURE__*/react.createElement("div", {
    className: "extraitLeft"
  }, /*#__PURE__*/react.createElement("div", {
    id: "extrait2L"
  })), /*#__PURE__*/react.createElement("div", {
    className: "extraitRight"
  }, /*#__PURE__*/react.createElement("div", {
    id: "extrait2R"
  }))))), /*#__PURE__*/react.createElement(Block/* PageBlock */.B, null, /*#__PURE__*/react.createElement(Container/* Container */.m, null, /*#__PURE__*/react.createElement("div", {
    className: "extraitBlock"
  }, /*#__PURE__*/react.createElement("div", {
    className: "extraitLeft"
  }, /*#__PURE__*/react.createElement("div", {
    id: "extrait3L"
  })), /*#__PURE__*/react.createElement("div", {
    className: "extraitRight"
  }, /*#__PURE__*/react.createElement("div", {
    id: "extrait3R"
  }))))), /*#__PURE__*/react.createElement(Block/* PageBlock */.B, null, /*#__PURE__*/react.createElement(Container/* Container */.m, null, /*#__PURE__*/react.createElement("div", {
    className: "extraitBlock"
  }, /*#__PURE__*/react.createElement("div", {
    className: "extraitLeft"
  }, /*#__PURE__*/react.createElement("div", {
    id: "extrait4L"
  })), /*#__PURE__*/react.createElement("div", {
    className: "extraitRight"
  }, /*#__PURE__*/react.createElement("div", {
    id: "extrait4R"
  }))))), /*#__PURE__*/react.createElement(Block/* PageBlock */.B, {
    ref: LibrairieScrollRef
  }, /*#__PURE__*/react.createElement(Container/* Container */.m, null, /*#__PURE__*/react.createElement("div", {
    className: "librairieBlock",
    ref: CbLibrairieBlockTrackingRef
  }, /*#__PURE__*/react.createElement("div", {
    id: "librairieHead"
  }, /*#__PURE__*/react.createElement("div", {
    id: "signature",
    style: {
      height: '100%',
      width: Math.trunc(document.documentElement.clientHeight * 35 / 100) + "px"
    }
  }, /*#__PURE__*/react.createElement("div", {
    id: "sigPicture"
  })), /*#__PURE__*/react.createElement("div", {
    id: "author"
  }, /*#__PURE__*/react.createElement("div", {
    id: "authorPhoto"
  }, /*#__PURE__*/react.createElement("div", {
    id: "authorBackground"
  }), /*#__PURE__*/react.createElement("div", {
    id: "authorPicture"
  }), /*#__PURE__*/react.createElement("div", {
    className: "clear"
  })), /*#__PURE__*/react.createElement("div", {
    id: "authorName"
  }), /*#__PURE__*/react.createElement("div", {
    id: "authorText"
  }, /*#__PURE__*/react.createElement("p", {
    className: "authorFont"
  }, "Bonjour \xE0 tous ! Je ne vous ai pas dit : \xE0 5 ans, j\u2019adorais jouer de la batterie avec mon b\xE2ton et les poubelles de la cour. Cela faisait un boucan de fou ! Je ne sais plus tr\xE8s bien si j\u2019\xE9tais super heureux ou super \xE9nerv\xE9, mais j\u2019ai le souvenir de purs moments artistiques !", /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("br", null), "Pourquoi je vous raconte \xE7a ? Parce que Kali-Jane braille fort et r\xE9agit n\u2019importe comment parfois, je sais bien, elle saoule... Mais ne lui en voulez pas, en tout cas pas trop, c\u2019est pas sa faute ! D\xE8s que j\u2019\xE9cris son histoire, voil\xE0, j\u2019avoue, \xE7a me rattrape, je sens compulsivement vibrer les poubelles sur les touches de clavier.")))), /*#__PURE__*/react.createElement("div", {
    id: "librairieBody"
  }, /*#__PURE__*/react.createElement("div", {
    id: "librairieBackground"
  }, /*#__PURE__*/react.createElement("div", {
    style: {
      height: '80%',
      width: Math.trunc(document.documentElement.clientHeight * 35 / 100) + "px"
    }
  }), /*#__PURE__*/react.createElement("div", {
    className: "librairieLivres",
    style: {
      height: '80%'
    }
  }, /*#__PURE__*/react.createElement("div", {
    className: "librairieItem"
  }, /*#__PURE__*/react.createElement("div", {
    className: "tome1"
  }), /*#__PURE__*/react.createElement("div", {
    className: "itemSeparator"
  }), /*#__PURE__*/react.createElement("p", {
    className: "libraryFont"
  }, "Kali-Jane - tome 1", /*#__PURE__*/react.createElement("br", null), "All\xE8lie de la fugue")))), /*#__PURE__*/react.createElement("div", {
    className: "preco",
    onMouseEnter: function onMouseEnter() {
      setOnLibraryPrecoEnter(true);
    },
    onMouseLeave: function onMouseLeave() {
      setOnLibraryPrecoEnter(false);
    }
  }, /*#__PURE__*/react.createElement("div", {
    className: "precoBig"
  }, /*#__PURE__*/react.createElement("span", null, "PRECOMMANDES")), /*#__PURE__*/react.createElement("div", {
    id: "precoArrow",
    className: 'precoArrow' + (onLibraryPrecoEnter ? "Hover" : "")
  }))))))));
}
// EXTERNAL MODULE: ./node_modules/react-icons/fa/index.esm.js
var index_esm = __webpack_require__(1612);
// EXTERNAL MODULE: ./node_modules/react-icons/io5/index.esm.js
var io5_index_esm = __webpack_require__(9826);
// EXTERNAL MODULE: ./node_modules/react-icons/tb/index.esm.js
var tb_index_esm = __webpack_require__(819);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[3]!./src/views/MobilePage.scss
var MobilePage = __webpack_require__(7456);
;// ./src/views/MobilePage.scss

      
      
      
      
      
      
      
      
      

var MobilePage_options = {};

MobilePage_options.styleTagTransform = (styleTagTransform_default());
MobilePage_options.setAttributes = (setAttributesWithoutAttributes_default());
MobilePage_options.insert = insertBySelector_default().bind(null, "head");
MobilePage_options.domAPI = (styleDomAPI_default());
MobilePage_options.insertStyleElement = (insertStyleElement_default());

var MobilePage_update = injectStylesIntoStyleTag_default()(MobilePage/* default */.A, MobilePage_options);




       /* harmony default export */ const views_MobilePage = (MobilePage/* default */.A && MobilePage/* default */.A.locals ? MobilePage/* default */.A.locals : undefined);

;// ./src/views/MobilePage.js









var MobilePage_images = [{
  src: './assets/images/extraits/page1.jpg',
  loading: 'lazy'
}, {
  src: './assets/images/extraits/page2.jpg',
  loading: 'lazy'
}, {
  src: './assets/images/extraits/page3.jpg',
  loading: 'lazy'
}];
function MobilePage_MobilePage() {
  var _useState = (0,react.useState)(false),
    _useState2 = (0,slicedToArray/* default */.A)(_useState, 2),
    showMenu = _useState2[0],
    setShowMenu = _useState2[1];
  var _useState3 = (0,react.useState)("home"),
    _useState4 = (0,slicedToArray/* default */.A)(_useState3, 2),
    currentPage = _useState4[0],
    setCurrentPage = _useState4[1];
  var _useState5 = (0,react.useState)(null),
    _useState6 = (0,slicedToArray/* default */.A)(_useState5, 2),
    extraitsArrowPosition = _useState6[0],
    setExtraitsArrowPosition = _useState6[1];
  var extraits = ["./assets/images/extraits/page1.jpg", "./assets/images/extraits/page2.jpg", "./assets/images/extraits/page3.jpg", "./assets/images/extraits/page4.jpg", "./assets/images/extraits/page5.jpg", "./assets/images/extraits/page6.jpg", "./assets/images/extraits/page7.jpg", "./assets/images/extraits/page8.jpg"];
  var UniversBlockRef = (0,react.useRef)(null);
  var CouvScrollRef = (0,react.useRef)(null);
  var ExtraitsScrollRef = (0,react.useRef)(null);
  var LibrairieScrollRef = (0,react.useRef)(null);
  var CbUniversBlockTrackingRef = (0,react_intersection_observer_dist/* useOnInView */.zQ)(function (inView, entry) {
    if (inView) {
      // Element is in view - perhaps log an impression
      setCurrentPage("couv");
    }
  }, {
    /* Optional options */
    threshold: 0.5,
    triggerOnce: false
  });
  var CbExtraitsBlockTrackingRef = (0,react_intersection_observer_dist/* useOnInView */.zQ)(function (inView, entry) {
    if (inView) {
      setCurrentPage("extraits");
    }
  }, {
    /* Optional options */
    threshold: 0.5,
    triggerOnce: false
  });
  var CbLibrairieBlockTrackingRef = (0,react_intersection_observer_dist/* useOnInView */.zQ)(function (inView, entry) {
    if (inView) {
      setCurrentPage("librairie");
    }
  }, {
    /* Optional options */
    threshold: 0.5,
    triggerOnce: false
  });
  var CbHomeBlockTrackingRef = (0,react_intersection_observer_dist/* useOnInView */.zQ)(function (inView, entry) {
    if (inView) {
      setCurrentPage("home");
    }
  }, {
    /* Optional options */
    threshold: 0.5,
    triggerOnce: false
  });
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    id: "landscape"
  }, /*#__PURE__*/react.createElement("h3", null, "Veuillez passer en mode portrait svp.")), /*#__PURE__*/react.createElement("div", {
    id: "portrait"
  }, /*#__PURE__*/react.createElement("div", {
    className: "mMenuButton",
    onClick: function onClick() {
      setShowMenu(true);
    }
  }, /*#__PURE__*/react.createElement(index_esm/* FaBars */.OXb, null)), /*#__PURE__*/react.createElement("div", {
    className: "mShopButton"
  }, /*#__PURE__*/react.createElement(tb_index_esm/* TbShoppingCartShare */.szA, null)), showMenu && /*#__PURE__*/react.createElement("div", {
    id: "mMenu"
  }, /*#__PURE__*/react.createElement("div", {
    className: "mCloseButton",
    onClick: function onClick() {
      setShowMenu(false);
    }
  }, /*#__PURE__*/react.createElement(io5_index_esm/* IoClose */.$8F, null)), /*#__PURE__*/react.createElement("div", {
    className: "mMenuButtons"
  }, /*#__PURE__*/react.createElement("div", {
    className: "mCouvButton".concat(currentPage == "couv" ? "Selected" : ""),
    onClick: function onClick() {
      setShowMenu(false);
      CouvScrollRef.current.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }), /*#__PURE__*/react.createElement("div", {
    id: "extraitButton",
    className: "mExtraitButton".concat(currentPage == "extraits" ? "Selected" : ""),
    onClick: function onClick() {
      setShowMenu(false);
      ExtraitsScrollRef.current.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }), /*#__PURE__*/react.createElement("div", {
    id: "librairieButton",
    className: "mLibrairieButton".concat(currentPage == "librairie" ? "Selected" : ""),
    onClick: function onClick() {
      setShowMenu(false);
      LibrairieScrollRef.current.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }), /*#__PURE__*/react.createElement("div", {
    className: "mMailButton"
  }), /*#__PURE__*/react.createElement("div", {
    className: "mInstaButton"
  }), /*#__PURE__*/react.createElement("div", {
    className: "mTiktokButton"
  }))), /*#__PURE__*/react.createElement(Wrapper/* PageWrapper */.f, {
    snapScroll: true
  }, /*#__PURE__*/react.createElement(Block/* PageBlock */.B, null, /*#__PURE__*/react.createElement("div", {
    className: "mHomeBlock",
    ref: CbHomeBlockTrackingRef
  }, /*#__PURE__*/react.createElement("div", {
    className: "mPrecoButton"
  }))), /*#__PURE__*/react.createElement(Block/* PageBlock */.B, {
    ref: CouvScrollRef
  }, /*#__PURE__*/react.createElement("div", {
    className: "mUniversBlock",
    ref: CbUniversBlockTrackingRef
  }, /*#__PURE__*/react.createElement("p", {
    className: "bookFont"
  }, /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("br", null), "Kali-Jane a six ans, amazone ou gitane, elle h\xE9site, c\u2019est une fille du futur.", /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("br", null), "Elle voyage dans une roulotte avec son pap\u0101ye, le boucher de la tribu. Ensemble, et g\xE9n\xE9ration apr\xE8s g\xE9n\xE9ration pour son peuple, ils font le tour de notre plan\xE8te sauvage et hybride.", /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("br", null), "Aujourd\u2019hui, les deux nomades ont pris du retard sur le reste de la caravane ; c\u2019est la nuit et Kali-Jane ne dort pas. Elle fugue.", /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("br", null), "L\u2019enfant part sauver sa Dame, une biche au sang dragon. Elle lui a jur\xE9 qu\u2019elle ne serait pas abattue. Elle r\xEAve de la soigner et l'emm\xE8ne gu\xE9rir \xE0 la mer M\xE9diterran\xE9e.", /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("br", null), "Mais la biche n\u2019est pas malade, l\u2019animale est enceinte et s\u2019est livr\xE9e au boucher pour son accouchement prochain.", /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("br", null), "Enceinte comme les femmes de jadis.", /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("br", null), "Alors, si l\u2019automne tropical les asphyxie, si les lianes entrelacent des barricades et les ronces \xE9lectrocutent ; non, Kali-Jane n\u2019aura pas le choix, il faudra qu\u2019elle la d\xE9clare, \xE0 l\u2019encre vivant de son crachat, sa guerre contre la nature."))), /*#__PURE__*/react.createElement(Block/* PageBlock */.B, {
    ref: ExtraitsScrollRef
  }, /*#__PURE__*/react.createElement("div", {
    className: "mExtraitBlock",
    ref: CbExtraitsBlockTrackingRef
  }, /*#__PURE__*/react.createElement("div", {
    className: "mExtraitGallery"
  }, extraits.map(function (url, index) {
    return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("img", {
      onLoad: function onLoad(event) {
        console.log("LOADED", event.target.height);
        setExtraitsArrowPosition({
          width: event.target.width,
          height: event.target.height
        });
      },
      src: url,
      style: {
        position: index == 0 ? "relative" : "absolute",
        top: 0,
        left: index * 100 + "%",
        "float": "left"
      }
    }), index == 0 && extraitsArrowPosition != null && /*#__PURE__*/react.createElement("div", {
      className: "extraitsArrow",
      style: {
        zIndex: 999999999999,
        position: "absolute",
        left: extraitsArrowPosition.width - 50 + "px",
        top: extraitsArrowPosition.height - 50 + "px",
        width: "50px",
        height: "50px",
        color: "black",
        display: "block",
        fontSize: "xx-large"
      }
    }, /*#__PURE__*/react.createElement(index_esm/* FaArrowCircleRight */.BEG, null)));
  })))), /*#__PURE__*/react.createElement(Block/* PageBlock */.B, {
    ref: LibrairieScrollRef
  }, /*#__PURE__*/react.createElement(Container/* Container */.m, null, /*#__PURE__*/react.createElement("div", {
    className: "mLibrairieBlock",
    ref: CbLibrairieBlockTrackingRef
  }, /*#__PURE__*/react.createElement("div", {
    className: "mLibrairieItem"
  }, /*#__PURE__*/react.createElement("div", {
    className: "mTome1"
  }), /*#__PURE__*/react.createElement("div", {
    className: "mItemSeparator"
  }), /*#__PURE__*/react.createElement("p", {
    className: "libraryFont"
  }, "Kali-Jane - tome 1", /*#__PURE__*/react.createElement("br", null), "All\xE8lie de la fugue"))))))));
}
;// ./src/views/App.js







function _callSuper(t, o, e) { return o = (0,getPrototypeOf/* default */.A)(o), (0,possibleConstructorReturn/* default */.A)(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.A)(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }




var isMobile = function isMobile() {
  // Check if the new API is supported
  if (navigator.userAgentData) {
    return navigator.userAgentData.mobile;
  }

  // Fallback for Safari/Firefox (see Solution 3)
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};
var App = /*#__PURE__*/function (_Component) {
  function App() {
    (0,classCallCheck/* default */.A)(this, App);
    return _callSuper(this, App);
  }
  (0,inherits/* default */.A)(App, _Component);
  return (0,createClass/* default */.A)(App, [{
    key: "lockToPortrait",
    value: function () {
      var _lockToPortrait = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee() {
        var _t;
        return regenerator_default().wrap(function (_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 1;
              return screen.orientation.lock('portrait');
            case 1:
              console.log('Orientation locked to portrait');
              _context.next = 3;
              break;
            case 2:
              _context.prev = 2;
              _t = _context["catch"](0);
              console.error('Failed to lock orientation:', _t);
              // Fallback: Handle unsupported browsers or permission issues
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 2]]);
      }));
      function lockToPortrait() {
        return _lockToPortrait.apply(this, arguments);
      }
      return lockToPortrait;
    }()
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (isMobile()) {
        this.lockToPortrait();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var basePath = "";
      var onMobile = isMobile();
      console.log("IS MOBILE ?", onMobile);
      if (onMobile) {}
      return /*#__PURE__*/react.createElement(dist/* HashRouter */.I9, null, /*#__PURE__*/react.createElement("div", {
        id: "app"
      }, /*#__PURE__*/react.createElement("main", {
        id: "main"
      }, /*#__PURE__*/react.createElement(react_router_dist/* Routes */.BV, null, /*#__PURE__*/react.createElement(react_router_dist/* Route */.qh, {
        exact: true,
        path: basePath + "/",
        element: onMobile ? /*#__PURE__*/react.createElement(MobilePage_MobilePage, null) : /*#__PURE__*/react.createElement(MainPage_MainPage, null)
      })))));
    }
  }]);
}(react.Component);
/* harmony default export */ const views_App = (App);
;// ./src/serviceWorker.js
// This optional code is used to register a service worker.
// register() is not called by default.

// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.

// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA

var isLocalhost = Boolean(window.location.hostname === 'localhost' ||
// [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' ||
// 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if ( true && 'serviceWorker' in navigator) {
    // The URL constructor is available in all browsers that support SW.
    var publicUrl = new URL("MISSING_ENV_VAR".PUBLIC_URL, window.location.href);
    if (publicUrl.origin !== window.location.origin) {
      // Our service worker won't work if PUBLIC_URL is on a different origin
      // from what our page is served on. This might happen if a CDN is used to
      // serve assets; see https://github.com/facebook/create-react-app/issues/2374
      return;
    }
    window.addEventListener('load', function () {
      var swUrl = "".concat("MISSING_ENV_VAR".PUBLIC_URL, "/service-worker.js");
      if (isLocalhost) {
        // This is running on localhost. Let's check if a service worker still exists or not.
        checkValidServiceWorker(swUrl, config);

        // Add some additional logging to localhost, pointing developers to the
        // service worker/PWA documentation.
        navigator.serviceWorker.ready.then(function () {
          console.log('This web app is being served cache-first by a service ' + 'worker. To learn more, visit https://bit.ly/CRA-PWA');
        });
      } else {
        // Is not localhost. Just register service worker
        registerValidSW(swUrl, config);
      }
    });
  }
}
function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(function (registration) {
    registration.onupdatefound = function () {
      var installingWorker = registration.installing;
      if (installingWorker == null) {
        return;
      }
      installingWorker.onstatechange = function () {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.');

            // Execute callback
            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.');

            // Execute callback
            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  })["catch"](function (error) {
    console.error('Error during service worker registration:', error);
  });
}
function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: {
      'Service-Worker': 'script'
    }
  }).then(function (response) {
    // Ensure service worker exists, and that we really are getting a JS file.
    var contentType = response.headers.get('content-type');
    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(function (registration) {
        registration.unregister().then(function () {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  })["catch"](function () {
    console.log('No internet connection found. App is running in offline mode.');
  });
}
function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function (registration) {
      registration.unregister();
    })["catch"](function (error) {
      console.error(error.message);
    });
  }
}
// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(5338);
;// ./src/bootstrap.js





var container = document.getElementById('root');
var root = (0,client/* createRoot */.H)(container);
console.log("TEST");
root.render(/*#__PURE__*/react.createElement(views_App, null));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
unregister();

/***/ },

/***/ 5311
(module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1601);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4417);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(5091), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(5170), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(146), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(6158), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(1898), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(9458), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(6385), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(2727), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(5220), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(3228), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(6893), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(475), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(9328), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(3216), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(382), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(8126), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(211), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(6841), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(8840), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_19___ = new URL(/* asset import */ __webpack_require__(8472), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_20___ = new URL(/* asset import */ __webpack_require__(8066), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_21___ = new URL(/* asset import */ __webpack_require__(8250), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_22___ = new URL(/* asset import */ __webpack_require__(4128), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_23___ = new URL(/* asset import */ __webpack_require__(4291), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_24___ = new URL(/* asset import */ __webpack_require__(9526), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_25___ = new URL(/* asset import */ __webpack_require__(1665), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_26___ = new URL(/* asset import */ __webpack_require__(1716), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_27___ = new URL(/* asset import */ __webpack_require__(6871), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_28___ = new URL(/* asset import */ __webpack_require__(4079), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_29___ = new URL(/* asset import */ __webpack_require__(9858), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_30___ = new URL(/* asset import */ __webpack_require__(4736), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_31___ = new URL(/* asset import */ __webpack_require__(986), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_32___ = new URL(/* asset import */ __webpack_require__(4801), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_33___ = new URL(/* asset import */ __webpack_require__(4102), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_34___ = new URL(/* asset import */ __webpack_require__(6520), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_35___ = new URL(/* asset import */ __webpack_require__(6122), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_36___ = new URL(/* asset import */ __webpack_require__(6015), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_9___);
var ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_10___);
var ___CSS_LOADER_URL_REPLACEMENT_11___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_11___);
var ___CSS_LOADER_URL_REPLACEMENT_12___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_12___);
var ___CSS_LOADER_URL_REPLACEMENT_13___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_13___);
var ___CSS_LOADER_URL_REPLACEMENT_14___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_14___);
var ___CSS_LOADER_URL_REPLACEMENT_15___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_15___);
var ___CSS_LOADER_URL_REPLACEMENT_16___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_16___);
var ___CSS_LOADER_URL_REPLACEMENT_17___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_17___);
var ___CSS_LOADER_URL_REPLACEMENT_18___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_18___);
var ___CSS_LOADER_URL_REPLACEMENT_19___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_19___);
var ___CSS_LOADER_URL_REPLACEMENT_20___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_20___);
var ___CSS_LOADER_URL_REPLACEMENT_21___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_21___);
var ___CSS_LOADER_URL_REPLACEMENT_22___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_22___);
var ___CSS_LOADER_URL_REPLACEMENT_23___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_23___);
var ___CSS_LOADER_URL_REPLACEMENT_24___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_24___);
var ___CSS_LOADER_URL_REPLACEMENT_25___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_25___);
var ___CSS_LOADER_URL_REPLACEMENT_26___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_26___);
var ___CSS_LOADER_URL_REPLACEMENT_27___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_27___);
var ___CSS_LOADER_URL_REPLACEMENT_28___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_28___);
var ___CSS_LOADER_URL_REPLACEMENT_29___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_29___);
var ___CSS_LOADER_URL_REPLACEMENT_30___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_30___);
var ___CSS_LOADER_URL_REPLACEMENT_31___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_31___);
var ___CSS_LOADER_URL_REPLACEMENT_32___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_32___);
var ___CSS_LOADER_URL_REPLACEMENT_33___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_33___);
var ___CSS_LOADER_URL_REPLACEMENT_34___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_34___);
var ___CSS_LOADER_URL_REPLACEMENT_35___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_35___);
var ___CSS_LOADER_URL_REPLACEMENT_36___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_36___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.homeBlock{background-image:url(${___CSS_LOADER_URL_REPLACEMENT_0___});background-size:cover;width:100vw;height:100vh}.universBlock{background-image:url(${___CSS_LOADER_URL_REPLACEMENT_1___});background-size:cover;width:100vw;height:100vh;display:flex}.otherBlock{background-color:#090807;color:#fff;background-size:cover;width:100vw;height:150vh}.blankBlock{background-color:#090807;color:#fff;background-size:cover;width:100vw;height:100vh;display:flex}.precoBlock{position:relative;background-image:url(${___CSS_LOADER_URL_REPLACEMENT_2___});background-size:cover;width:25vw;height:60vh;top:30vh;left:73vw;cursor:pointer}.testBottom{position:absolute;bottom:10vh;font-size:30pt}.letters{width:65%;height:80%;margin-top:5%}.bookBack{color:#b80444;background-image:url(${___CSS_LOADER_URL_REPLACEMENT_3___});background-size:cover;width:20%;height:fit-content;margin-top:2.5%;margin-left:5%;padding:10px 40px 40px 40px;font-size:1.6vh;line-height:2.2vh;background-position:left top;border-radius:30px;background-repeat:no-repeat;text-align:justify}.bookBack img{height:10vh}.clear{clear:both}.fade-in-out{opacity:0;animation:fade-in 0s linear forwards,fade-out 0s linear forwards}@keyframes fade-in{0%{opacity:0}50%{opacity:1}}@keyframes fade-out{50%{opacity:1}100%{opacity:0}}.menu{position:fixed;height:75vh;top:25vh;left:2.5vw;z-index:10000000000}.mainMenu{border-left:2px dotted #c5fe01;padding-left:10px;padding-bottom:2vh;margin-bottom:1vh}.couvButton{cursor:pointer;background-image:url(${___CSS_LOADER_URL_REPLACEMENT_4___});width:9vw;height:9vh;background-size:contain;background-repeat:no-repeat;margin-bottom:2vh}.couvButtonSelected{cursor:pointer;background-image:url(${___CSS_LOADER_URL_REPLACEMENT_5___});width:9vw;height:9vh;background-size:contain;background-repeat:no-repeat;margin-bottom:2vh}.couvButton:hover{background-image:url(${___CSS_LOADER_URL_REPLACEMENT_5___})}.extraitButton{cursor:pointer;background-image:url(${___CSS_LOADER_URL_REPLACEMENT_6___});width:9vw;height:9vh;background-size:contain;background-repeat:no-repeat;margin-bottom:2vh}.extraitButtonSelected{cursor:pointer;background-image:url(${___CSS_LOADER_URL_REPLACEMENT_7___});width:9vw;height:9vh;background-size:contain;background-repeat:no-repeat;margin-bottom:2vh}.extraitButton:hover{background-image:url(${___CSS_LOADER_URL_REPLACEMENT_7___})}.auteurButton{cursor:pointer;background-image:url(${___CSS_LOADER_URL_REPLACEMENT_8___});width:9vw;height:9vh;background-size:contain;background-repeat:no-repeat;margin-bottom:2vh}.auteurButton:hover{background-image:url(${___CSS_LOADER_URL_REPLACEMENT_9___})}.librairieButton{cursor:pointer;background-image:url(${___CSS_LOADER_URL_REPLACEMENT_10___});width:9vw;height:9vh;background-size:contain;background-repeat:no-repeat;margin-bottom:2vh}.librairieButton:hover{background-image:url(${___CSS_LOADER_URL_REPLACEMENT_11___})}.librairieButtonSelected{cursor:pointer;background-image:url(${___CSS_LOADER_URL_REPLACEMENT_11___});width:9vw;height:9vh;background-size:contain;background-repeat:no-repeat;margin-bottom:2vh}.betweenMenus{height:2vh;width:2vw;background-image:url(http://localhost:3004/f604c663b210e31d499f.png);background-size:contain;background-repeat:no-repeat;left:-0.3vw;position:relative}.extraMenu{border-left:5px dotted #c80931;padding-left:10px;padding-top:4vh;margin-top:1vh}.mailButton{cursor:pointer;background-image:url(${___CSS_LOADER_URL_REPLACEMENT_12___});width:4vw;height:4vh;background-size:contain;background-repeat:no-repeat;margin-bottom:2vh}.mailButton:hover{background-image:url(${___CSS_LOADER_URL_REPLACEMENT_13___})}.youtubeButton{cursor:pointer;background-image:url(${___CSS_LOADER_URL_REPLACEMENT_14___});width:4vw;height:4vh;background-size:contain;background-repeat:no-repeat;margin-bottom:2vh}.youtubeButton:hover{background-image:url(${___CSS_LOADER_URL_REPLACEMENT_15___})}.tiktokButton{cursor:pointer;background-image:url(${___CSS_LOADER_URL_REPLACEMENT_16___});width:4vw;height:4vh;background-size:contain;background-repeat:no-repeat;margin-bottom:2vh}.tiktokButton:hover{background-image:url(${___CSS_LOADER_URL_REPLACEMENT_17___})}.instaButton{cursor:pointer;background-image:url(${___CSS_LOADER_URL_REPLACEMENT_18___});width:4vw;height:4vh;background-size:contain;background-repeat:no-repeat;margin-bottom:2vh}.instaButton:hover{background-image:url(${___CSS_LOADER_URL_REPLACEMENT_19___})}.extraitBlock{background-color:#18160d;background-size:cover;width:100vw;height:100vh;display:flex;align-items:center}.extraitLeft{margin-left:16vw;width:40vw;height:95vh}.extraitRight{margin-left:2vw;width:40vw;height:95vh}#extrait1L{background-image:url(${___CSS_LOADER_URL_REPLACEMENT_20___});background-size:contain;background-repeat:no-repeat;background-position-y:center;width:100%;height:100%}#extrait1R{background-image:url(${___CSS_LOADER_URL_REPLACEMENT_21___});background-size:contain;background-repeat:no-repeat;background-position-y:center;width:100%;height:100%}#extrait2L{background-image:url(${___CSS_LOADER_URL_REPLACEMENT_22___});background-size:contain;background-repeat:no-repeat;background-position-y:center;width:100%;height:100%}#extrait2R{background-image:url(${___CSS_LOADER_URL_REPLACEMENT_23___});background-size:contain;background-repeat:no-repeat;background-position-y:center;width:100%;height:100%}#extrait3L{background-image:url(${___CSS_LOADER_URL_REPLACEMENT_24___});background-size:contain;background-repeat:no-repeat;background-position-y:center;width:100%;height:100%}#extrait3R{background-image:url(${___CSS_LOADER_URL_REPLACEMENT_25___});background-size:contain;background-repeat:no-repeat;background-position-y:center;width:100%;height:100%}#extrait4L{background-image:url(${___CSS_LOADER_URL_REPLACEMENT_26___});background-size:contain;background-repeat:no-repeat;background-position-y:center;width:100%;height:100%}#extrait4R{background-image:url(${___CSS_LOADER_URL_REPLACEMENT_27___});background-size:contain;background-repeat:no-repeat;background-position-y:center;width:100%;height:100%}.librairieBlock{background-color:#000;width:100vw;height:100vh}#librairieHead{width:100%;height:35%;background-image:url(${___CSS_LOADER_URL_REPLACEMENT_28___});background-size:cover;display:flex}#sigPicture{width:100%;height:100%;background-image:url(${___CSS_LOADER_URL_REPLACEMENT_29___});background-size:auto 100%}#author{width:80%;height:100%;padding:0;display:flex}#authorPhoto{height:100%;width:10%;margin:0;padding:0}#authorBackground{width:65%;height:80%;background-color:#c80931;margin:0;padding:0;float:left;z-index:0;position:relative;float:left}#authorPicture{width:100%;height:90%;background-image:url(${___CSS_LOADER_URL_REPLACEMENT_30___});background-size:cover;margin-top:20px;margin-left:20px;padding:0;z-index:100;position:relative}#authorName{height:90%;margin-top:10px;margin-left:30px;padding-left:10px;padding-right:10px;position:relative;background-image:url(${___CSS_LOADER_URL_REPLACEMENT_31___});background-size:auto 100%;width:9%;background-repeat:no-repeat}#authorText{height:100%;width:50%;display:flex;align-items:center;font-size:2.5vh}#librairieBody{width:100%;height:65%;background-image:url(${___CSS_LOADER_URL_REPLACEMENT_32___});background-size:cover;display:flex}.librairieLivres{margin-top:5px;display:flex;padding-top:10px}.librairieItem{display:flex;flex-direction:column;height:60%;color:#fff;gap:5px;align-items:center}.itemSeparator{border-bottom:1.5px dotted #c5fe01;width:30%}.tome1{height:65%;width:100%;margin-left:5%;background-image:url(${___CSS_LOADER_URL_REPLACEMENT_33___});background-size:cover;background-repeat:no-repeat;background-position:bottom;cursor:pointer;transition:.5s;transform:scale(1)}.tome1:hover::before{transform:scale(1.1);box-shadow:0 0 15px #ffee10}.tome1:hover{box-shadow:0 0 10px #ffee10;text-shadow:0 0 10px #ffee10}#librairieBackground{height:100%;width:100%;display:flex;background-position:bottom;background-repeat:no-repeat;background-image:url(${___CSS_LOADER_URL_REPLACEMENT_34___})}.preco{cursor:pointer}.precoBig{float:left;bottom:0;right:11vh;position:absolute;font-size:9vh;color:#c5fe01;z-index:9999999;font-family:"HelveticaBlk";padding:0;margin:0}.precoArrow{float:left;bottom:0;right:0;position:absolute;z-index:9999999;background-repeat:no-repeat;background-image:url(${___CSS_LOADER_URL_REPLACEMENT_35___});height:9vh;width:9vh;padding:0;margin:0;background-size:cover}.precoArrowHover{float:left;bottom:0;right:0;position:absolute;z-index:9999999;background-repeat:no-repeat;background-image:url(${___CSS_LOADER_URL_REPLACEMENT_36___});height:9vh;width:9vh;padding:0;margin:0;background-size:cover}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ 7456
(module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1601);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4417);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(9328), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(382), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(211), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(8840), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(1898), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(9458), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(6385), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(2727), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(6893), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(475), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(5366), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(1077), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(5170), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(4102), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_9___);
var ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_10___);
var ___CSS_LOADER_URL_REPLACEMENT_11___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_11___);
var ___CSS_LOADER_URL_REPLACEMENT_12___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_12___);
var ___CSS_LOADER_URL_REPLACEMENT_13___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_13___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@media only screen and (orientation: landscape){#landscape{display:block}#portrait{display:none}}@media only screen and (orientation: portrait){#landscape{display:none}#portrait{display:block}}#landscape{background-color:#18160d;color:#fff;text-align:center;height:100vh;vertical-align:middle;align-content:center}.mMenuButton{position:fixed;color:#d45a5a;width:50px;height:50px;z-index:999999;left:10px;top:10px;font-size:2.3vh}.mShopButton{position:fixed;color:#d45a5a;height:50px;z-index:999999;right:10px;top:10px;font-size:2.3vh}#mMenu{position:fixed;z-index:999999;width:100vw;height:100vh;background-color:#080808;opacity:.9}.mCloseButton{font-size:4.3vh;color:#fff;position:absolute;right:20px;top:20px}.mMenuButtons{position:absolute;top:10%;left:50px}.mMailButton{cursor:pointer;background-image:url(${___CSS_LOADER_URL_REPLACEMENT_0___});width:11vw;height:4vh;background-size:contain;background-repeat:no-repeat;margin-bottom:2vh}.mYoutubeButton{cursor:pointer;background-image:url(${___CSS_LOADER_URL_REPLACEMENT_1___});width:11vw;height:4vh;background-size:contain;background-repeat:no-repeat;margin-bottom:2vh}.mTiktokButton{cursor:pointer;background-image:url(${___CSS_LOADER_URL_REPLACEMENT_2___});width:11vw;height:4vh;background-size:contain;background-repeat:no-repeat;margin-bottom:2vh}.mInstaButton{cursor:pointer;background-image:url(${___CSS_LOADER_URL_REPLACEMENT_3___});width:11vw;height:4vh;background-size:contain;background-repeat:no-repeat;margin-bottom:2vh}.mCouvButton{cursor:pointer;background-image:url(${___CSS_LOADER_URL_REPLACEMENT_4___});width:30vw;height:9vh;background-size:contain;background-repeat:no-repeat;margin-bottom:2vh}.mCouvButtonSelected{cursor:pointer;background-image:url(${___CSS_LOADER_URL_REPLACEMENT_5___});width:30vw;height:9vh;background-size:contain;background-repeat:no-repeat;margin-bottom:2vh}.mExtraitButton{cursor:pointer;background-image:url(${___CSS_LOADER_URL_REPLACEMENT_6___});width:30vw;height:9vh;background-size:contain;background-repeat:no-repeat;margin-bottom:2vh}.mExtraitButtonSelected{cursor:pointer;background-image:url(${___CSS_LOADER_URL_REPLACEMENT_7___});width:30vw;height:9vh;background-size:contain;background-repeat:no-repeat;margin-bottom:2vh}.mLibrairieButton{cursor:pointer;background-image:url(${___CSS_LOADER_URL_REPLACEMENT_8___});width:30vw;height:9vh;background-size:contain;background-repeat:no-repeat;margin-bottom:2vh}.mLibrairieButtonSelected{cursor:pointer;background-image:url(${___CSS_LOADER_URL_REPLACEMENT_9___});width:30vw;height:9vh;background-size:contain;background-repeat:no-repeat;margin-bottom:2vh}.mHomeBlock{width:100vw;height:100vh;background-image:url(${___CSS_LOADER_URL_REPLACEMENT_10___});background-size:contain;background-color:#080808;background-repeat:no-repeat;background-position-y:15vh}.mPrecoButton{background-image:url(${___CSS_LOADER_URL_REPLACEMENT_11___});background-size:cover;width:300px;height:52px;background-repeat:no-repeat;margin-right:50%;position:relative;margin-left:auto;top:80vh;margin-right:auto}.mUniversBlock{width:100vw;height:100vh;background-image:url(${___CSS_LOADER_URL_REPLACEMENT_12___});background-size:cover;display:flex;align-items:center;flex-direction:column}.mUniversBlock p{text-align:justify;padding-left:10px;padding-right:10px;font-size:2.2vh;margin-top:10px;line-height:1.3}.mExtraitBlock{width:100vw;height:100vh;background-color:#18160d}.mExtraitGallery{height:90vh;position:absolute;top:10vh;overflow-x:scroll}.mExtraitGallery img{width:100%}.mLibrairieBlock{width:100vw;height:100vh;background-color:#18160d}@keyframes flickerAnimation{0%{opacity:1}50%{opacity:0}100%{opacity:1}}@-o-keyframes flickerAnimation{0%{opacity:1}50%{opacity:0}100%{opacity:1}}@-moz-keyframes flickerAnimation{0%{opacity:1}50%{opacity:0}100%{opacity:1}}@-webkit-keyframes flickerAnimation{0%{opacity:1}50%{opacity:0}100%{opacity:1}}.extraitsArrow{-webkit-animation:flickerAnimation 6s infinite;-moz-animation:flickerAnimation 6s infinite;-o-animation:flickerAnimation 6s infinite;animation:flickerAnimation 6s infinite}.mLibrairieItem{display:flex;flex-direction:column;color:#fff;gap:5px;align-items:center;width:60%;padding-left:20%;height:inherit}.mItemSeparator{border-bottom:1.5px dotted #c5fe01;width:30%}.mTome1{height:65%;width:100%;margin-left:5%;background-image:url(${___CSS_LOADER_URL_REPLACEMENT_13___});background-size:contain;background-repeat:no-repeat;background-position:bottom;cursor:pointer;transition:.5s;transform:scale(1)}.mTome1:hover::before{transform:scale(1.1);box-shadow:0 0 15px #ffee10}.mPrecoBtn{bottom:5px;color:#c80931;position:absolute;width:100%;text-align:center;font-size:x-large}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ 6523
(module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1601);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ 5091
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d3bff102d8331f4da4f5.jpg";

/***/ },

/***/ 6158
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "207ca854df968870053f.png";

/***/ },

/***/ 5170
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6c5f2a496f4ae94220be.jpg";

/***/ },

/***/ 8066
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8da78d07d6ede0e8c1fc.jpg";

/***/ },

/***/ 8250
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a6893bfe825bc0e8976f.jpg";

/***/ },

/***/ 4128
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c6ad81b7e1e31582b162.jpg";

/***/ },

/***/ 4291
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0ec82f436c28b0eafa5d.jpg";

/***/ },

/***/ 9526
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a51d6d60880b5f5535b5.jpg";

/***/ },

/***/ 1665
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "984bc56de4dff9d0deca.jpg";

/***/ },

/***/ 1716
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c886bc6138c1babd2bec.jpg";

/***/ },

/***/ 6871
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e72e4e8caec23faa7b19.jpg";

/***/ },

/***/ 8840
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c7f0c9ad9eb5a4b93337.png";

/***/ },

/***/ 8472
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0c61dc691d6be3d3014b.png";

/***/ },

/***/ 6122
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f52eab03cc6d191c232c.png";

/***/ },

/***/ 6015
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "499dd28fbe9dea0c451b.png";

/***/ },

/***/ 986
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fb764f21fd718ecc98d5.png";

/***/ },

/***/ 4736
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f7bba4eb2910ea2c5dfb.jpg";

/***/ },

/***/ 9858
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2371a5a4daf9e9ee6d89.jpg";

/***/ },

/***/ 6520
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ed187daeba58cba1bcd4.png";

/***/ },

/***/ 4801
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0212a214e2c360d4caaa.png";

/***/ },

/***/ 4079
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "959f3f048a17ea4d429e.jpg";

/***/ },

/***/ 4102
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9a1d8211ee628e28992d.jpg";

/***/ },

/***/ 9328
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "768f25571df9654d67a5.png";

/***/ },

/***/ 3216
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "402e4d5a3a8adc3e611c.png";

/***/ },

/***/ 1898
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6ab0c0bece694a85c3d6.png";

/***/ },

/***/ 9458
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "eaf913247478cf01be1d.png";

/***/ },

/***/ 5220
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b284e6c3527539754ae0.png";

/***/ },

/***/ 3228
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4d3e0e940b5bb39d711c.png";

/***/ },

/***/ 6385
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "664151ccdfc4ed44934e.png";

/***/ },

/***/ 2727
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a1febdbdc5dc212e773b.png";

/***/ },

/***/ 6893
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "71c15a46e83715661394.png";

/***/ },

/***/ 475
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "414cfd32454081e2a4ba.png";

/***/ },

/***/ 5366
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3e768195929d60191836.png";

/***/ },

/***/ 1077
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a7736ac4c1610fb903f2.png";

/***/ },

/***/ 146
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "846a7a9a3bb84e7d91bb.png";

/***/ },

/***/ 211
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4fd1a4c7a98aaab9e8f0.png";

/***/ },

/***/ 6841
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ee56e8e26682b226e2a1.png";

/***/ },

/***/ 382
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "50224464633627f90d9b.png";

/***/ },

/***/ 8126
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9f10757d7d1b344b64eb.png";

/***/ }

}]);