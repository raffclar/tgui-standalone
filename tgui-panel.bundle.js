/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./packages/common/color.js":
/*!**********************************!*\
  !*** ./packages/common/color.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Color": function() { return /* binding */ Color; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */
var EPSILON = 0.0001;
var Color = /*#__PURE__*/function () {
  function Color() {
    var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var g = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var b = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

    _classCallCheck(this, Color);

    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }

  _createClass(Color, [{
    key: "toString",
    value: function () {
      function toString() {
        return "rgba(".concat(this.r | 0, ", ").concat(this.g | 0, ", ").concat(this.b | 0, ", ").concat(this.a | 0, ")");
      }

      return toString;
    }()
  }]);

  return Color;
}();
/**
 * Creates a color from the CSS hex color notation.
 */

Color.fromHex = function (hex) {
  return new Color(parseInt(hex.substr(1, 2), 16), parseInt(hex.substr(3, 2), 16), parseInt(hex.substr(5, 2), 16));
};
/**
 * Linear interpolation of two colors.
 */


Color.lerp = function (c1, c2, n) {
  return new Color((c2.r - c1.r) * n + c1.r, (c2.g - c1.g) * n + c1.g, (c2.b - c1.b) * n + c1.b, (c2.a - c1.a) * n + c1.a);
};
/**
 * Loops up the color in the provided list of colors
 * with linear interpolation.
 */


Color.lookup = function (value) {
  var colors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var len = colors.length;

  if (len < 2) {
    throw new Error('Needs at least two colors!');
  }

  var scaled = value * (len - 1);

  if (value < EPSILON) {
    return colors[0];
  }

  if (value >= 1 - EPSILON) {
    return colors[len - 1];
  }

  var ratio = scaled % 1;
  var index = scaled | 0;
  return Color.lerp(colors[index], colors[index + 1], ratio);
};

/***/ }),

/***/ "./packages/tgui-panel/Notifications.js":
/*!**********************************************!*\
  !*** ./packages/tgui-panel/Notifications.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Notifications": function() { return /* binding */ Notifications; }
/* harmony export */ });
/* harmony import */ var inferno__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inferno */ "./.yarn/cache/inferno-npm-7.4.8-f828cb79a7-dd2af1493c.zip/node_modules/inferno/index.esm.js");
/* harmony import */ var tgui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tgui/components */ "./packages/tgui/components/index.js");


/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */

var Notifications = function Notifications(props) {
  var children = props.children;
  return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "Notifications", children, 0);
};

var NotificationsItem = function NotificationsItem(props) {
  var rightSlot = props.rightSlot,
      children = props.children;
  return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_components__WEBPACK_IMPORTED_MODULE_1__.Flex, {
    "align": "center",
    "className": "Notification",
    children: [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_components__WEBPACK_IMPORTED_MODULE_1__.Flex.Item, {
      "className": "Notification__content",
      "grow": 1,
      children: children
    }), rightSlot && (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_components__WEBPACK_IMPORTED_MODULE_1__.Flex.Item, {
      "className": "Notification__rightSlot",
      children: rightSlot
    })]
  });
};

Notifications.Item = NotificationsItem;

/***/ }),

/***/ "./packages/tgui-panel/Panel.js":
/*!**************************************!*\
  !*** ./packages/tgui-panel/Panel.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Panel": function() { return /* binding */ Panel; }
/* harmony export */ });
/* harmony import */ var inferno__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inferno */ "./.yarn/cache/inferno-npm-7.4.8-f828cb79a7-dd2af1493c.zip/node_modules/inferno/index.esm.js");
/* harmony import */ var tgui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tgui/components */ "./packages/tgui/components/index.js");
/* harmony import */ var tgui_layouts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tgui/layouts */ "./packages/tgui/layouts/index.js");
/* harmony import */ var _audio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./audio */ "./packages/tgui-panel/audio/index.js");
/* harmony import */ var _chat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chat */ "./packages/tgui-panel/chat/index.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game */ "./packages/tgui-panel/game/index.js");
/* harmony import */ var _Notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Notifications */ "./packages/tgui-panel/Notifications.js");
/* harmony import */ var _ping__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ping */ "./packages/tgui-panel/ping/index.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./settings */ "./packages/tgui-panel/settings/index.js");


/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */








var Panel = function Panel(props, context) {
  // IE8-10: Needs special treatment due to missing Flex support
  if (Byond.IS_LTE_IE10) {
    return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, HoboPanel);
  }

  var audio = (0,_audio__WEBPACK_IMPORTED_MODULE_3__.useAudio)(context);
  var settings = (0,_settings__WEBPACK_IMPORTED_MODULE_8__.useSettings)(context);
  var game = (0,_game__WEBPACK_IMPORTED_MODULE_5__.useGame)(context);

  if (true) {
    var _require = __webpack_require__(/*! tgui/debug */ "./packages/tgui/debug/index.js"),
        useDebug = _require.useDebug,
        KitchenSink = _require.KitchenSink;

    var debug = useDebug(context);

    if (debug.kitchenSink) {
      return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, KitchenSink, {
        "panel": true
      });
    }
  }

  return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_layouts__WEBPACK_IMPORTED_MODULE_2__.Pane, {
    "theme": settings.theme,
    children: (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_components__WEBPACK_IMPORTED_MODULE_1__.Stack, {
      "fill": true,
      "vertical": true,
      children: [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_components__WEBPACK_IMPORTED_MODULE_1__.Stack.Item, {
        children: (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_components__WEBPACK_IMPORTED_MODULE_1__.Section, {
          "fitted": true,
          children: (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_components__WEBPACK_IMPORTED_MODULE_1__.Stack, {
            "mr": 1,
            "align": "center",
            children: [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_components__WEBPACK_IMPORTED_MODULE_1__.Stack.Item, {
              "grow": true,
              "overflowX": "auto",
              children: (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, _chat__WEBPACK_IMPORTED_MODULE_4__.ChatTabs)
            }), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_components__WEBPACK_IMPORTED_MODULE_1__.Stack.Item, {
              children: (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, _ping__WEBPACK_IMPORTED_MODULE_7__.PingIndicator)
            }), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_components__WEBPACK_IMPORTED_MODULE_1__.Stack.Item, {
              children: (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
                "color": "grey",
                "selected": audio.visible,
                "icon": "music",
                "tooltip": "Music player",
                "tooltipPosition": "bottom-left",
                "onClick": function () {
                  function onClick() {
                    return audio.toggle();
                  }

                  return onClick;
                }()
              })
            }), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_components__WEBPACK_IMPORTED_MODULE_1__.Stack.Item, {
              children: (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
                "icon": settings.visible ? 'times' : 'cog',
                "selected": settings.visible,
                "tooltip": settings.visible ? 'Close settings' : 'Open settings',
                "tooltipPosition": "bottom-left",
                "onClick": function () {
                  function onClick() {
                    return settings.toggle();
                  }

                  return onClick;
                }()
              })
            })]
          })
        })
      }), audio.visible && (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_components__WEBPACK_IMPORTED_MODULE_1__.Stack.Item, {
        children: (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_components__WEBPACK_IMPORTED_MODULE_1__.Section, {
          children: (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, _audio__WEBPACK_IMPORTED_MODULE_3__.NowPlayingWidget)
        })
      }), settings.visible && (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_components__WEBPACK_IMPORTED_MODULE_1__.Stack.Item, {
        children: (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, _settings__WEBPACK_IMPORTED_MODULE_8__.SettingsPanel)
      }), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_components__WEBPACK_IMPORTED_MODULE_1__.Stack.Item, {
        "grow": true,
        children: (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_components__WEBPACK_IMPORTED_MODULE_1__.Section, {
          "fill": true,
          "fitted": true,
          "position": "relative",
          children: [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_layouts__WEBPACK_IMPORTED_MODULE_2__.Pane.Content, {
            "scrollable": true,
            children: (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, _chat__WEBPACK_IMPORTED_MODULE_4__.ChatPanel, {
              "lineHeight": settings.lineHeight
            })
          }), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, _Notifications__WEBPACK_IMPORTED_MODULE_6__.Notifications, {
            children: [game.connectionLostAt && (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, _Notifications__WEBPACK_IMPORTED_MODULE_6__.Notifications.Item, {
              "rightSlot": (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
                "color": "white",
                "onClick": function () {
                  function onClick() {
                    return Byond.command('.reconnect');
                  }

                  return onClick;
                }(),
                children: "Reconnect"
              }),
              children: "You are either AFK, experiencing lag or the connection has closed."
            }), game.roundRestartedAt && (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, _Notifications__WEBPACK_IMPORTED_MODULE_6__.Notifications.Item, {
              children: "The connection has been closed because the server is restarting. Please wait while you automatically reconnect."
            })]
          })]
        })
      })]
    })
  });
};

var HoboPanel = function HoboPanel(props, context) {
  var settings = (0,_settings__WEBPACK_IMPORTED_MODULE_8__.useSettings)(context);
  return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_layouts__WEBPACK_IMPORTED_MODULE_2__.Pane, {
    "theme": settings.theme,
    children: (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_layouts__WEBPACK_IMPORTED_MODULE_2__.Pane.Content, {
      "scrollable": true,
      children: [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
        "style": {
          position: 'fixed',
          top: '1em',
          right: '2em',
          'z-index': 1000
        },
        "selected": settings.visible,
        "onClick": function () {
          function onClick() {
            return settings.toggle();
          }

          return onClick;
        }(),
        children: "Settings"
      }), settings.visible && (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, _settings__WEBPACK_IMPORTED_MODULE_8__.SettingsPanel) || (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, _chat__WEBPACK_IMPORTED_MODULE_4__.ChatPanel, {
        "lineHeight": settings.lineHeight
      })]
    })
  });
};

/***/ }),

/***/ "./packages/tgui-panel/audio/NowPlayingWidget.js":
/*!*******************************************************!*\
  !*** ./packages/tgui-panel/audio/NowPlayingWidget.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NowPlayingWidget": function() { return /* binding */ NowPlayingWidget; }
/* harmony export */ });
/* harmony import */ var inferno__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inferno */ "./.yarn/cache/inferno-npm-7.4.8-f828cb79a7-dd2af1493c.zip/node_modules/inferno/index.esm.js");
/* harmony import */ var common_math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/math */ "./packages/common/math.ts");
/* harmony import */ var common_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/redux */ "./packages/common/redux.js");
/* harmony import */ var tgui_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tgui/components */ "./packages/tgui/components/index.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../settings */ "./packages/tgui-panel/settings/index.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./selectors */ "./packages/tgui-panel/audio/selectors.js");


/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */





var NowPlayingWidget = function NowPlayingWidget(props, context) {
  var _audio$meta;

  var audio = (0,common_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(context, _selectors__WEBPACK_IMPORTED_MODULE_5__.selectAudio);
  var dispatch = (0,common_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(context);
  var settings = (0,_settings__WEBPACK_IMPORTED_MODULE_4__.useSettings)(context);
  var title = (_audio$meta = audio.meta) === null || _audio$meta === void 0 ? void 0 : _audio$meta.title;
  return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_components__WEBPACK_IMPORTED_MODULE_3__.Flex, {
    "align": "center",
    children: [audio.playing && (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createFragment)([(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_components__WEBPACK_IMPORTED_MODULE_3__.Flex.Item, {
      "shrink": 0,
      "mx": 0.5,
      "color": "label",
      children: "Now playing:"
    }), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_components__WEBPACK_IMPORTED_MODULE_3__.Flex.Item, {
      "mx": 0.5,
      "grow": 1,
      "style": {
        'white-space': 'nowrap',
        'overflow': 'hidden',
        'text-overflow': 'ellipsis'
      },
      children: title || 'Unknown Track'
    })], 4) || (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_components__WEBPACK_IMPORTED_MODULE_3__.Flex.Item, {
      "grow": 1,
      "color": "label",
      children: "Nothing to play."
    }), audio.playing && (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_components__WEBPACK_IMPORTED_MODULE_3__.Flex.Item, {
      "mx": 0.5,
      "fontSize": "0.9em",
      children: (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        "tooltip": "Stop",
        "icon": "stop",
        "onClick": function () {
          function onClick() {
            return dispatch({
              type: 'audio/stopMusic'
            });
          }

          return onClick;
        }()
      })
    }), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_components__WEBPACK_IMPORTED_MODULE_3__.Flex.Item, {
      "mx": 0.5,
      "fontSize": "0.9em",
      children: (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_components__WEBPACK_IMPORTED_MODULE_3__.Knob, {
        "minValue": 0,
        "maxValue": 1,
        "value": settings.adminMusicVolume,
        "step": 0.0025,
        "stepPixelSize": 1,
        "format": function () {
          function format(value) {
            return (0,common_math__WEBPACK_IMPORTED_MODULE_1__.toFixed)(value * 100) + '%';
          }

          return format;
        }(),
        "onDrag": function () {
          function onDrag(e, value) {
            return settings.update({
              adminMusicVolume: value
            });
          }

          return onDrag;
        }()
      })
    })]
  });
};

/***/ }),

/***/ "./packages/tgui-panel/audio/hooks.js":
/*!********************************************!*\
  !*** ./packages/tgui-panel/audio/hooks.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useAudio": function() { return /* binding */ useAudio; }
/* harmony export */ });
/* harmony import */ var common_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! common/redux */ "./packages/common/redux.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectors */ "./packages/tgui-panel/audio/selectors.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */


var useAudio = function useAudio(context) {
  var state = (0,common_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(context, _selectors__WEBPACK_IMPORTED_MODULE_1__.selectAudio);
  var dispatch = (0,common_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)(context);
  return _objectSpread(_objectSpread({}, state), {}, {
    toggle: function () {
      function toggle() {
        return dispatch({
          type: 'audio/toggle'
        });
      }

      return toggle;
    }()
  });
};

/***/ }),

/***/ "./packages/tgui-panel/audio/index.js":
/*!********************************************!*\
  !*** ./packages/tgui-panel/audio/index.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useAudio": function() { return /* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_0__.useAudio; },
/* harmony export */   "audioMiddleware": function() { return /* reexport safe */ _middleware__WEBPACK_IMPORTED_MODULE_1__.audioMiddleware; },
/* harmony export */   "NowPlayingWidget": function() { return /* reexport safe */ _NowPlayingWidget__WEBPACK_IMPORTED_MODULE_2__.NowPlayingWidget; },
/* harmony export */   "audioReducer": function() { return /* reexport safe */ _reducer__WEBPACK_IMPORTED_MODULE_3__.audioReducer; }
/* harmony export */ });
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hooks */ "./packages/tgui-panel/audio/hooks.js");
/* harmony import */ var _middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./middleware */ "./packages/tgui-panel/audio/middleware.js");
/* harmony import */ var _NowPlayingWidget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NowPlayingWidget */ "./packages/tgui-panel/audio/NowPlayingWidget.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducer */ "./packages/tgui-panel/audio/reducer.js");
/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */





/***/ }),

/***/ "./packages/tgui-panel/audio/middleware.js":
/*!*************************************************!*\
  !*** ./packages/tgui-panel/audio/middleware.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "audioMiddleware": function() { return /* binding */ audioMiddleware; }
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./packages/tgui-panel/audio/player.js");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */

var audioMiddleware = function audioMiddleware(store) {
  var player = new _player__WEBPACK_IMPORTED_MODULE_0__.AudioPlayer();
  player.onPlay(function () {
    store.dispatch({
      type: 'audio/playing'
    });
  });
  player.onStop(function () {
    store.dispatch({
      type: 'audio/stopped'
    });
  });
  return function (next) {
    return function (action) {
      var type = action.type,
          payload = action.payload;

      if (type === 'audio/playMusic') {
        var url = payload.url,
            options = _objectWithoutProperties(payload, ["url"]);

        player.play(url, options);
        return next(action);
      }

      if (type === 'audio/stopMusic') {
        player.stop();
        return next(action);
      }

      if (type === 'settings/update' || type === 'settings/load') {
        var volume = payload === null || payload === void 0 ? void 0 : payload.adminMusicVolume;

        if (typeof volume === 'number') {
          player.setVolume(volume);
        }

        return next(action);
      }

      return next(action);
    };
  };
};

/***/ }),

/***/ "./packages/tgui-panel/audio/player.js":
/*!*********************************************!*\
  !*** ./packages/tgui-panel/audio/player.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AudioPlayer": function() { return /* binding */ AudioPlayer; }
/* harmony export */ });
/* harmony import */ var tgui_logging__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tgui/logging */ "./packages/tgui/logging.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function () { function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; } return n; }(), e: function () { function e(_e) { throw _e; } return e; }(), f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function () { function s() { it = o[Symbol.iterator](); } return s; }(), n: function () { function n() { var step = it.next(); normalCompletion = step.done; return step; } return n; }(), e: function () { function e(_e2) { didErr = true; err = _e2; } return e; }(), f: function () { function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } return f; }() }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */

var logger = (0,tgui_logging__WEBPACK_IMPORTED_MODULE_0__.createLogger)('AudioPlayer');
var AudioPlayer = /*#__PURE__*/function () {
  function AudioPlayer() {
    var _this = this;

    _classCallCheck(this, AudioPlayer);

    // Doesn't support HTMLAudioElement
    if (Byond.IS_LTE_IE9) {
      return;
    } // Set up the HTMLAudioElement node


    this.node = document.createElement('audio');
    this.node.style.setProperty('display', 'none');
    document.body.appendChild(this.node); // Set up other properties

    this.playing = false;
    this.volume = 1;
    this.options = {};
    this.onPlaySubscribers = [];
    this.onStopSubscribers = []; // Listen for playback start events

    this.node.addEventListener('canplaythrough', function () {
      logger.log('canplaythrough');
      _this.playing = true;
      _this.node.playbackRate = _this.options.pitch || 1;
      _this.node.currentTime = _this.options.start || 0;
      _this.node.volume = _this.volume;

      _this.node.play();

      var _iterator = _createForOfIteratorHelper(_this.onPlaySubscribers),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var subscriber = _step.value;
          subscriber();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }); // Listen for playback stop events

    this.node.addEventListener('ended', function () {
      logger.log('ended');

      _this.stop();
    }); // Listen for playback errors

    this.node.addEventListener('error', function (e) {
      if (_this.playing) {
        logger.log('playback error', e.error);

        _this.stop();
      }
    }); // Check every second to stop the playback at the right time

    this.playbackInterval = setInterval(function () {
      if (!_this.playing) {
        return;
      }

      var shouldStop = _this.options.end > 0 && _this.node.currentTime >= _this.options.end;

      if (shouldStop) {
        _this.stop();
      }
    }, 1000);
  }

  _createClass(AudioPlayer, [{
    key: "destroy",
    value: function () {
      function destroy() {
        if (!this.node) {
          return;
        }

        this.node.stop();
        document.removeChild(this.node);
        clearInterval(this.playbackInterval);
      }

      return destroy;
    }()
  }, {
    key: "play",
    value: function () {
      function play(url) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        if (!this.node) {
          return;
        }

        logger.log('playing', url, options);
        this.options = options;
        this.node.src = url;
      }

      return play;
    }()
  }, {
    key: "stop",
    value: function () {
      function stop() {
        if (!this.node) {
          return;
        }

        if (this.playing) {
          var _iterator2 = _createForOfIteratorHelper(this.onStopSubscribers),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var subscriber = _step2.value;
              subscriber();
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }

        logger.log('stopping');
        this.playing = false;
        this.node.src = '';
      }

      return stop;
    }()
  }, {
    key: "setVolume",
    value: function () {
      function setVolume(volume) {
        if (!this.node) {
          return;
        }

        this.volume = volume;
        this.node.volume = volume;
      }

      return setVolume;
    }()
  }, {
    key: "onPlay",
    value: function () {
      function onPlay(subscriber) {
        if (!this.node) {
          return;
        }

        this.onPlaySubscribers.push(subscriber);
      }

      return onPlay;
    }()
  }, {
    key: "onStop",
    value: function () {
      function onStop(subscriber) {
        if (!this.node) {
          return;
        }

        this.onStopSubscribers.push(subscriber);
      }

      return onStop;
    }()
  }]);

  return AudioPlayer;
}();

/***/ }),

/***/ "./packages/tgui-panel/audio/reducer.js":
/*!**********************************************!*\
  !*** ./packages/tgui-panel/audio/reducer.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "audioReducer": function() { return /* binding */ audioReducer; }
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */
var initialState = {
  visible: false,
  playing: false,
  track: null
};
var audioReducer = function audioReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var type = action.type,
      payload = action.payload;

  if (type === 'audio/playing') {
    return _objectSpread(_objectSpread({}, state), {}, {
      visible: true,
      playing: true
    });
  }

  if (type === 'audio/stopped') {
    return _objectSpread(_objectSpread({}, state), {}, {
      visible: false,
      playing: false
    });
  }

  if (type === 'audio/playMusic') {
    return _objectSpread(_objectSpread({}, state), {}, {
      meta: payload
    });
  }

  if (type === 'audio/stopMusic') {
    return _objectSpread(_objectSpread({}, state), {}, {
      visible: false,
      playing: false,
      meta: null
    });
  }

  if (type === 'audio/toggle') {
    return _objectSpread(_objectSpread({}, state), {}, {
      visible: !state.visible
    });
  }

  return state;
};

/***/ }),

/***/ "./packages/tgui-panel/audio/selectors.js":
/*!************************************************!*\
  !*** ./packages/tgui-panel/audio/selectors.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectAudio": function() { return /* binding */ selectAudio; }
/* harmony export */ });
/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */
var selectAudio = function selectAudio(state) {
  return state.audio;
};

/***/ }),

/***/ "./packages/tgui-panel/chat/ChatPageSettings.js":
/*!******************************************************!*\
  !*** ./packages/tgui-panel/chat/ChatPageSettings.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatPageSettings": function() { return /* binding */ ChatPageSettings; }
/* harmony export */ });
/* harmony import */ var inferno__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inferno */ "./.yarn/cache/inferno-npm-7.4.8-f828cb79a7-dd2af1493c.zip/node_modules/inferno/index.esm.js");
/* harmony import */ var common_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/redux */ "./packages/common/redux.js");
/* harmony import */ var tgui_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tgui/components */ "./packages/tgui/components/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "./packages/tgui-panel/chat/actions.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./packages/tgui-panel/chat/constants.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./selectors */ "./packages/tgui-panel/chat/selectors.js");


/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */





var ChatPageSettings = function ChatPageSettings(props, context) {
  var page = (0,common_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(context, _selectors__WEBPACK_IMPORTED_MODULE_5__.selectCurrentChatPage);
  var dispatch = (0,common_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(context);
  return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_components__WEBPACK_IMPORTED_MODULE_2__.Section, {
    children: [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_components__WEBPACK_IMPORTED_MODULE_2__.Stack, {
      "align": "center",
      children: [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_components__WEBPACK_IMPORTED_MODULE_2__.Stack.Item, {
        "grow": 1,
        children: (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_components__WEBPACK_IMPORTED_MODULE_2__.Input, {
          "fluid": true,
          "value": page.name,
          "onChange": function () {
            function onChange(e, value) {
              return dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_3__.updateChatPage)({
                pageId: page.id,
                name: value
              }));
            }

            return onChange;
          }()
        })
      }), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_components__WEBPACK_IMPORTED_MODULE_2__.Stack.Item, {
        children: (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
          "icon": "times",
          "color": "red",
          "onClick": function () {
            function onClick() {
              return dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_3__.removeChatPage)({
                pageId: page.id
              }));
            }

            return onClick;
          }(),
          children: "Remove"
        })
      })]
    }), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_components__WEBPACK_IMPORTED_MODULE_2__.Divider), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_components__WEBPACK_IMPORTED_MODULE_2__.Section, {
      "title": "Messages to display",
      "level": 2,
      children: [_constants__WEBPACK_IMPORTED_MODULE_4__.MESSAGE_TYPES.filter(function (typeDef) {
        return !typeDef.important && !typeDef.admin;
      }).map(function (typeDef) {
        return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_components__WEBPACK_IMPORTED_MODULE_2__.Button.Checkbox, {
          "checked": page.acceptedTypes[typeDef.type],
          "onClick": function () {
            function onClick() {
              return dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_3__.toggleAcceptedType)({
                pageId: page.id,
                type: typeDef.type
              }));
            }

            return onClick;
          }(),
          children: typeDef.name
        }, typeDef.type);
      }), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_components__WEBPACK_IMPORTED_MODULE_2__.Collapsible, {
        "mt": 1,
        "color": "transparent",
        "title": "Admin stuff",
        children: _constants__WEBPACK_IMPORTED_MODULE_4__.MESSAGE_TYPES.filter(function (typeDef) {
          return !typeDef.important && typeDef.admin;
        }).map(function (typeDef) {
          return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_components__WEBPACK_IMPORTED_MODULE_2__.Button.Checkbox, {
            "checked": page.acceptedTypes[typeDef.type],
            "onClick": function () {
              function onClick() {
                return dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_3__.toggleAcceptedType)({
                  pageId: page.id,
                  type: typeDef.type
                }));
              }

              return onClick;
            }(),
            children: typeDef.name
          }, typeDef.type);
        })
      })]
    })]
  });
};

/***/ }),

/***/ "./packages/tgui-panel/chat/ChatPanel.js":
/*!***********************************************!*\
  !*** ./packages/tgui-panel/chat/ChatPanel.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatPanel": function() { return /* binding */ ChatPanel; }
/* harmony export */ });
/* harmony import */ var inferno__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inferno */ "./.yarn/cache/inferno-npm-7.4.8-f828cb79a7-dd2af1493c.zip/node_modules/inferno/index.esm.js");
/* harmony import */ var common_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/react */ "./packages/common/react.ts");
/* harmony import */ var tgui_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tgui/components */ "./packages/tgui/components/index.js");
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderer */ "./packages/tgui-panel/chat/renderer.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function () { function _setPrototypeOf(o, p) { o.__proto__ = p; return o; } return _setPrototypeOf; }(); return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); } return _createSuperInternal; }(); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function () { function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); } return _getPrototypeOf; }(); return _getPrototypeOf(o); }

/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */




var ChatPanel = /*#__PURE__*/function (_Component) {
  _inherits(ChatPanel, _Component);

  var _super = _createSuper(ChatPanel);

  function ChatPanel() {
    var _this;

    _classCallCheck(this, ChatPanel);

    _this = _super.call(this);
    _this.ref = (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createRef)();
    _this.state = {
      scrollTracking: true
    };

    _this.handleScrollTrackingChange = function (value) {
      return _this.setState({
        scrollTracking: value
      });
    };

    return _this;
  }

  _createClass(ChatPanel, [{
    key: "componentDidMount",
    value: function () {
      function componentDidMount() {
        _renderer__WEBPACK_IMPORTED_MODULE_3__.chatRenderer.mount(this.ref.current);
        _renderer__WEBPACK_IMPORTED_MODULE_3__.chatRenderer.events.on('scrollTrackingChanged', this.handleScrollTrackingChange);
        this.componentDidUpdate();
      }

      return componentDidMount;
    }()
  }, {
    key: "componentWillUnmount",
    value: function () {
      function componentWillUnmount() {
        _renderer__WEBPACK_IMPORTED_MODULE_3__.chatRenderer.events.off('scrollTrackingChanged', this.handleScrollTrackingChange);
      }

      return componentWillUnmount;
    }()
  }, {
    key: "componentDidUpdate",
    value: function () {
      function componentDidUpdate(prevProps) {
        requestAnimationFrame(function () {
          _renderer__WEBPACK_IMPORTED_MODULE_3__.chatRenderer.ensureScrollTracking();
        });
        var shouldUpdateStyle = !prevProps || (0,common_react__WEBPACK_IMPORTED_MODULE_1__.shallowDiffers)(this.props, prevProps);

        if (shouldUpdateStyle) {
          _renderer__WEBPACK_IMPORTED_MODULE_3__.chatRenderer.assignStyle({
            'width': '100%',
            'white-space': 'pre-wrap',
            'font-size': this.props.fontSize,
            'line-height': this.props.lineHeight
          });
        }
      }

      return componentDidUpdate;
    }()
  }, {
    key: "render",
    value: function () {
      function render() {
        var scrollTracking = this.state.scrollTracking;
        return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createFragment)([(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "Chat", null, 1, null, null, this.ref), !scrollTracking && (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
          "className": "Chat__scrollButton",
          "icon": "arrow-down",
          "onClick": function () {
            function onClick() {
              return _renderer__WEBPACK_IMPORTED_MODULE_3__.chatRenderer.scrollToBottom();
            }

            return onClick;
          }(),
          children: "Scroll to bottom"
        })], 0);
      }

      return render;
    }()
  }]);

  return ChatPanel;
}(inferno__WEBPACK_IMPORTED_MODULE_0__.Component);

/***/ }),

/***/ "./packages/tgui-panel/chat/ChatTabs.js":
/*!**********************************************!*\
  !*** ./packages/tgui-panel/chat/ChatTabs.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatTabs": function() { return /* binding */ ChatTabs; }
/* harmony export */ });
/* harmony import */ var inferno__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inferno */ "./.yarn/cache/inferno-npm-7.4.8-f828cb79a7-dd2af1493c.zip/node_modules/inferno/index.esm.js");
/* harmony import */ var common_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/redux */ "./packages/common/redux.js");
/* harmony import */ var tgui_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tgui/components */ "./packages/tgui/components/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "./packages/tgui-panel/chat/actions.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./selectors */ "./packages/tgui-panel/chat/selectors.js");
/* harmony import */ var _settings_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../settings/actions */ "./packages/tgui-panel/settings/actions.js");


/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */






var UnreadCountWidget = function UnreadCountWidget(_ref) {
  var value = _ref.value;
  return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {
    "style": {
      'font-size': '0.7em',
      'border-radius': '0.25em',
      'width': '1.7em',
      'line-height': '1.55em',
      'background-color': 'crimson',
      'color': '#fff'
    },
    children: Math.min(value, 99)
  });
};

var ChatTabs = function ChatTabs(props, context) {
  var pages = (0,common_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(context, _selectors__WEBPACK_IMPORTED_MODULE_4__.selectChatPages);
  var currentPage = (0,common_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(context, _selectors__WEBPACK_IMPORTED_MODULE_4__.selectCurrentChatPage);
  var dispatch = (0,common_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(context);
  return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_components__WEBPACK_IMPORTED_MODULE_2__.Flex, {
    "align": "center",
    children: [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_components__WEBPACK_IMPORTED_MODULE_2__.Flex.Item, {
      children: (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_components__WEBPACK_IMPORTED_MODULE_2__.Tabs, {
        "textAlign": "center",
        children: pages.map(function (page) {
          return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_components__WEBPACK_IMPORTED_MODULE_2__.Tabs.Tab, {
            "selected": page === currentPage,
            "rightSlot": page.unreadCount > 0 && (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, UnreadCountWidget, {
              "value": page.unreadCount
            }),
            "onClick": function () {
              function onClick() {
                return dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_3__.changeChatPage)({
                  pageId: page.id
                }));
              }

              return onClick;
            }(),
            children: page.name
          }, page.id);
        })
      })
    }), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_components__WEBPACK_IMPORTED_MODULE_2__.Flex.Item, {
      "ml": 1,
      children: (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        "color": "transparent",
        "icon": "plus",
        "onClick": function () {
          function onClick() {
            dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_3__.addChatPage)());
            dispatch((0,_settings_actions__WEBPACK_IMPORTED_MODULE_5__.openChatSettings)());
          }

          return onClick;
        }()
      })
    })]
  });
};

/***/ }),

/***/ "./packages/tgui-panel/chat/actions.js":
/*!*********************************************!*\
  !*** ./packages/tgui-panel/chat/actions.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadChat": function() { return /* binding */ loadChat; },
/* harmony export */   "rebuildChat": function() { return /* binding */ rebuildChat; },
/* harmony export */   "updateMessageCount": function() { return /* binding */ updateMessageCount; },
/* harmony export */   "addChatPage": function() { return /* binding */ addChatPage; },
/* harmony export */   "changeChatPage": function() { return /* binding */ changeChatPage; },
/* harmony export */   "updateChatPage": function() { return /* binding */ updateChatPage; },
/* harmony export */   "toggleAcceptedType": function() { return /* binding */ toggleAcceptedType; },
/* harmony export */   "removeChatPage": function() { return /* binding */ removeChatPage; },
/* harmony export */   "changeScrollTracking": function() { return /* binding */ changeScrollTracking; },
/* harmony export */   "saveChatToDisk": function() { return /* binding */ saveChatToDisk; }
/* harmony export */ });
/* harmony import */ var common_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! common/redux */ "./packages/common/redux.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ "./packages/tgui-panel/chat/model.js");
/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */


var loadChat = (0,common_redux__WEBPACK_IMPORTED_MODULE_0__.createAction)('chat/load');
var rebuildChat = (0,common_redux__WEBPACK_IMPORTED_MODULE_0__.createAction)('chat/rebuild');
var updateMessageCount = (0,common_redux__WEBPACK_IMPORTED_MODULE_0__.createAction)('chat/updateMessageCount');
var addChatPage = (0,common_redux__WEBPACK_IMPORTED_MODULE_0__.createAction)('chat/addPage', function () {
  return {
    payload: (0,_model__WEBPACK_IMPORTED_MODULE_1__.createPage)()
  };
});
var changeChatPage = (0,common_redux__WEBPACK_IMPORTED_MODULE_0__.createAction)('chat/changePage');
var updateChatPage = (0,common_redux__WEBPACK_IMPORTED_MODULE_0__.createAction)('chat/updatePage');
var toggleAcceptedType = (0,common_redux__WEBPACK_IMPORTED_MODULE_0__.createAction)('chat/toggleAcceptedType');
var removeChatPage = (0,common_redux__WEBPACK_IMPORTED_MODULE_0__.createAction)('chat/removePage');
var changeScrollTracking = (0,common_redux__WEBPACK_IMPORTED_MODULE_0__.createAction)('chat/changeScrollTracking');
var saveChatToDisk = (0,common_redux__WEBPACK_IMPORTED_MODULE_0__.createAction)('chat/saveToDisk');

/***/ }),

/***/ "./packages/tgui-panel/chat/constants.js":
/*!***********************************************!*\
  !*** ./packages/tgui-panel/chat/constants.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAX_VISIBLE_MESSAGES": function() { return /* binding */ MAX_VISIBLE_MESSAGES; },
/* harmony export */   "MAX_PERSISTED_MESSAGES": function() { return /* binding */ MAX_PERSISTED_MESSAGES; },
/* harmony export */   "MESSAGE_SAVE_INTERVAL": function() { return /* binding */ MESSAGE_SAVE_INTERVAL; },
/* harmony export */   "MESSAGE_PRUNE_INTERVAL": function() { return /* binding */ MESSAGE_PRUNE_INTERVAL; },
/* harmony export */   "COMBINE_MAX_MESSAGES": function() { return /* binding */ COMBINE_MAX_MESSAGES; },
/* harmony export */   "COMBINE_MAX_TIME_WINDOW": function() { return /* binding */ COMBINE_MAX_TIME_WINDOW; },
/* harmony export */   "IMAGE_RETRY_DELAY": function() { return /* binding */ IMAGE_RETRY_DELAY; },
/* harmony export */   "IMAGE_RETRY_LIMIT": function() { return /* binding */ IMAGE_RETRY_LIMIT; },
/* harmony export */   "IMAGE_RETRY_MESSAGE_AGE": function() { return /* binding */ IMAGE_RETRY_MESSAGE_AGE; },
/* harmony export */   "MESSAGE_TYPE_UNKNOWN": function() { return /* binding */ MESSAGE_TYPE_UNKNOWN; },
/* harmony export */   "MESSAGE_TYPE_INTERNAL": function() { return /* binding */ MESSAGE_TYPE_INTERNAL; },
/* harmony export */   "MESSAGE_TYPE_SYSTEM": function() { return /* binding */ MESSAGE_TYPE_SYSTEM; },
/* harmony export */   "MESSAGE_TYPE_LOCALCHAT": function() { return /* binding */ MESSAGE_TYPE_LOCALCHAT; },
/* harmony export */   "MESSAGE_TYPE_RADIO": function() { return /* binding */ MESSAGE_TYPE_RADIO; },
/* harmony export */   "MESSAGE_TYPE_INFO": function() { return /* binding */ MESSAGE_TYPE_INFO; },
/* harmony export */   "MESSAGE_TYPE_WARNING": function() { return /* binding */ MESSAGE_TYPE_WARNING; },
/* harmony export */   "MESSAGE_TYPE_DEADCHAT": function() { return /* binding */ MESSAGE_TYPE_DEADCHAT; },
/* harmony export */   "MESSAGE_TYPE_OOC": function() { return /* binding */ MESSAGE_TYPE_OOC; },
/* harmony export */   "MESSAGE_TYPE_ADMINPM": function() { return /* binding */ MESSAGE_TYPE_ADMINPM; },
/* harmony export */   "MESSAGE_TYPE_COMBAT": function() { return /* binding */ MESSAGE_TYPE_COMBAT; },
/* harmony export */   "MESSAGE_TYPE_ADMINCHAT": function() { return /* binding */ MESSAGE_TYPE_ADMINCHAT; },
/* harmony export */   "MESSAGE_TYPE_MODCHAT": function() { return /* binding */ MESSAGE_TYPE_MODCHAT; },
/* harmony export */   "MESSAGE_TYPE_EVENTCHAT": function() { return /* binding */ MESSAGE_TYPE_EVENTCHAT; },
/* harmony export */   "MESSAGE_TYPE_ADMINLOG": function() { return /* binding */ MESSAGE_TYPE_ADMINLOG; },
/* harmony export */   "MESSAGE_TYPE_ATTACKLOG": function() { return /* binding */ MESSAGE_TYPE_ATTACKLOG; },
/* harmony export */   "MESSAGE_TYPE_DEBUG": function() { return /* binding */ MESSAGE_TYPE_DEBUG; },
/* harmony export */   "MESSAGE_TYPES": function() { return /* binding */ MESSAGE_TYPES; }
/* harmony export */ });
/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */
var MAX_VISIBLE_MESSAGES = 2500;
var MAX_PERSISTED_MESSAGES = 1000;
var MESSAGE_SAVE_INTERVAL = 10000;
var MESSAGE_PRUNE_INTERVAL = 60000;
var COMBINE_MAX_MESSAGES = 5;
var COMBINE_MAX_TIME_WINDOW = 5000;
var IMAGE_RETRY_DELAY = 250;
var IMAGE_RETRY_LIMIT = 10;
var IMAGE_RETRY_MESSAGE_AGE = 60000; // Default message type

var MESSAGE_TYPE_UNKNOWN = 'unknown'; // Internal message type

var MESSAGE_TYPE_INTERNAL = 'internal'; // Must match the set of defines in code/__DEFINES/chat.dm

var MESSAGE_TYPE_SYSTEM = 'system';
var MESSAGE_TYPE_LOCALCHAT = 'localchat';
var MESSAGE_TYPE_RADIO = 'radio';
var MESSAGE_TYPE_INFO = 'info';
var MESSAGE_TYPE_WARNING = 'warning';
var MESSAGE_TYPE_DEADCHAT = 'deadchat';
var MESSAGE_TYPE_OOC = 'ooc';
var MESSAGE_TYPE_ADMINPM = 'adminpm';
var MESSAGE_TYPE_COMBAT = 'combat';
var MESSAGE_TYPE_ADMINCHAT = 'adminchat';
var MESSAGE_TYPE_MODCHAT = 'modchat';
var MESSAGE_TYPE_EVENTCHAT = 'eventchat';
var MESSAGE_TYPE_ADMINLOG = 'adminlog';
var MESSAGE_TYPE_ATTACKLOG = 'attacklog';
var MESSAGE_TYPE_DEBUG = 'debug'; // Metadata for each message type

var MESSAGE_TYPES = [// Always-on types
{
  type: MESSAGE_TYPE_SYSTEM,
  name: 'System Messages',
  description: 'Messages from your client, always enabled',
  selector: '.boldannounce',
  important: true
}, // Basic types
{
  type: MESSAGE_TYPE_LOCALCHAT,
  name: 'Local',
  description: 'In-character local messages (say, emote, etc)',
  selector: '.say, .emote'
}, {
  type: MESSAGE_TYPE_RADIO,
  name: 'Radio',
  description: 'All departments of radio messages',
  selector: '.alert, .minorannounce, .syndradio, .centcomradio, .aiprivradio, .comradio, .secradio, .engradio, .medradio, .sciradio, .suppradio, .servradio, .radio, .deptradio, .binarysay, .newscaster, .resonate'
}, {
  type: MESSAGE_TYPE_INFO,
  name: 'Info',
  description: 'Non-urgent messages from the game and items',
  selector: '.notice:not(.pm), .adminnotice, .info, .sinister, .cult, .infoplain, .announce, .hear, .smallnotice, .holoparasite'
}, {
  type: MESSAGE_TYPE_WARNING,
  name: 'Warnings',
  description: 'Urgent messages from the game and items',
  selector: '.warning:not(.pm), .critical, .userdanger, .italics, .alertsyndie, .warningplain'
}, {
  type: MESSAGE_TYPE_DEADCHAT,
  name: 'Deadchat',
  description: 'All of deadchat',
  selector: '.deadsay, .ghostalert'
}, {
  type: MESSAGE_TYPE_OOC,
  name: 'OOC',
  description: 'The bluewall of global OOC messages',
  selector: '.ooc, .adminooc, .oocplain'
}, {
  type: MESSAGE_TYPE_ADMINPM,
  name: 'Admin PMs',
  description: 'Messages to/from admins (adminhelp)',
  selector: '.pm, .adminhelp'
}, {
  type: MESSAGE_TYPE_COMBAT,
  name: 'Combat Log',
  description: 'Urist McTraitor has stabbed you with a knife!',
  selector: '.danger'
}, {
  type: MESSAGE_TYPE_UNKNOWN,
  name: 'Unsorted',
  description: 'Everything we could not sort, always enabled'
}, // Admin stuff
{
  type: MESSAGE_TYPE_ADMINCHAT,
  name: 'Admin Chat',
  description: 'ASAY messages',
  selector: '.admin_channel, .adminsay',
  admin: true
}, {
  type: MESSAGE_TYPE_MODCHAT,
  name: 'Mod Chat',
  description: 'MSAY messages',
  selector: '.mod_channel',
  admin: true
}, {
  type: MESSAGE_TYPE_ADMINLOG,
  name: 'Admin Log',
  description: 'ADMIN LOG: Urist McAdmin has jumped to coordinates X, Y, Z',
  selector: '.log_message',
  admin: true
}, {
  type: MESSAGE_TYPE_ATTACKLOG,
  name: 'Attack Log',
  description: 'Urist McTraitor has shot John Doe',
  admin: true
}, {
  type: MESSAGE_TYPE_DEBUG,
  name: 'Debug Log',
  description: 'DEBUG: SSPlanets subsystem Recover().',
  admin: true
}];

/***/ }),

/***/ "./packages/tgui-panel/chat/index.js":
/*!*******************************************!*\
  !*** ./packages/tgui-panel/chat/index.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatPageSettings": function() { return /* reexport safe */ _ChatPageSettings__WEBPACK_IMPORTED_MODULE_0__.ChatPageSettings; },
/* harmony export */   "ChatPanel": function() { return /* reexport safe */ _ChatPanel__WEBPACK_IMPORTED_MODULE_1__.ChatPanel; },
/* harmony export */   "ChatTabs": function() { return /* reexport safe */ _ChatTabs__WEBPACK_IMPORTED_MODULE_2__.ChatTabs; },
/* harmony export */   "chatMiddleware": function() { return /* reexport safe */ _middleware__WEBPACK_IMPORTED_MODULE_3__.chatMiddleware; },
/* harmony export */   "chatReducer": function() { return /* reexport safe */ _reducer__WEBPACK_IMPORTED_MODULE_4__.chatReducer; }
/* harmony export */ });
/* harmony import */ var _ChatPageSettings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChatPageSettings */ "./packages/tgui-panel/chat/ChatPageSettings.js");
/* harmony import */ var _ChatPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatPanel */ "./packages/tgui-panel/chat/ChatPanel.js");
/* harmony import */ var _ChatTabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChatTabs */ "./packages/tgui-panel/chat/ChatTabs.js");
/* harmony import */ var _middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./middleware */ "./packages/tgui-panel/chat/middleware.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducer */ "./packages/tgui-panel/chat/reducer.js");
/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */






/***/ }),

/***/ "./packages/tgui-panel/chat/middleware.js":
/*!************************************************!*\
  !*** ./packages/tgui-panel/chat/middleware.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "chatMiddleware": function() { return /* binding */ chatMiddleware; }
/* harmony export */ });
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dompurify */ "./.yarn/cache/dompurify-npm-2.2.7-228180f49d-ddf23c494b.zip/node_modules/dompurify/dist/purify.js");
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dompurify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var common_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/storage */ "./packages/common/storage.js");
/* harmony import */ var _settings_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../settings/actions */ "./packages/tgui-panel/settings/actions.js");
/* harmony import */ var _settings_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../settings/selectors */ "./packages/tgui-panel/settings/selectors.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions */ "./packages/tgui-panel/chat/actions.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ "./packages/tgui-panel/chat/constants.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./model */ "./packages/tgui-panel/chat/model.js");
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./renderer */ "./packages/tgui-panel/chat/renderer.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./selectors */ "./packages/tgui-panel/chat/selectors.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function () { function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; } return n; }(), e: function () { function e(_e2) { throw _e2; } return e; }(), f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function () { function s() { it = o[Symbol.iterator](); } return s; }(), n: function () { function n() { var step = it.next(); normalCompletion = step.done; return step; } return n; }(), e: function () { function e(_e3) { didErr = true; err = _e3; } return e; }(), f: function () { function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } return f; }() }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */








 // List of blacklisted tags

var FORBID_TAGS = ['a', 'iframe', 'link', 'video'];

var saveChatToStorage = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function () {
    function _callee(store) {
      var state, fromIndex, messages;
      return regeneratorRuntime.wrap(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                state = (0,_selectors__WEBPACK_IMPORTED_MODULE_8__.selectChat)(store.getState());
                fromIndex = Math.max(0, _renderer__WEBPACK_IMPORTED_MODULE_7__.chatRenderer.messages.length - _constants__WEBPACK_IMPORTED_MODULE_5__.MAX_PERSISTED_MESSAGES);
                messages = _renderer__WEBPACK_IMPORTED_MODULE_7__.chatRenderer.messages.slice(fromIndex).map(function (message) {
                  return (0,_model__WEBPACK_IMPORTED_MODULE_6__.serializeMessage)(message);
                });
                common_storage__WEBPACK_IMPORTED_MODULE_1__.storage.set('chat-state', state);
                common_storage__WEBPACK_IMPORTED_MODULE_1__.storage.set('chat-messages', messages);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), _callee);
    }

    return _callee;
  }()));

  return function () {
    function saveChatToStorage(_x) {
      return _ref.apply(this, arguments);
    }

    return saveChatToStorage;
  }();
}();

var loadChatFromStorage = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function () {
    function _callee2(store) {
      var _yield$Promise$all, _yield$Promise$all2, state, messages, _iterator, _step, message, batch;

      return regeneratorRuntime.wrap(function () {
        function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return Promise.all([common_storage__WEBPACK_IMPORTED_MODULE_1__.storage.get('chat-state'), common_storage__WEBPACK_IMPORTED_MODULE_1__.storage.get('chat-messages')]);

              case 2:
                _yield$Promise$all = _context2.sent;
                _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
                state = _yield$Promise$all2[0];
                messages = _yield$Promise$all2[1];

                if (!(state && state.version <= 4)) {
                  _context2.next = 9;
                  break;
                }

                store.dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_4__.loadChat)());
                return _context2.abrupt("return");

              case 9:
                if (messages) {
                  _iterator = _createForOfIteratorHelper(messages);

                  try {
                    for (_iterator.s(); !(_step = _iterator.n()).done;) {
                      message = _step.value;

                      if (message.html) {
                        message.html = dompurify__WEBPACK_IMPORTED_MODULE_0___default().sanitize(message.html, {
                          FORBID_TAGS: FORBID_TAGS
                        });
                      }
                    }
                  } catch (err) {
                    _iterator.e(err);
                  } finally {
                    _iterator.f();
                  }

                  batch = [].concat(_toConsumableArray(messages), [(0,_model__WEBPACK_IMPORTED_MODULE_6__.createMessage)({
                    type: 'internal/reconnected'
                  })]);
                  _renderer__WEBPACK_IMPORTED_MODULE_7__.chatRenderer.processBatch(batch, {
                    prepend: true
                  });
                }

                store.dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_4__.loadChat)(state));

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }

        return _callee2$;
      }(), _callee2);
    }

    return _callee2;
  }()));

  return function () {
    function loadChatFromStorage(_x2) {
      return _ref2.apply(this, arguments);
    }

    return loadChatFromStorage;
  }();
}();

var chatMiddleware = function chatMiddleware(store) {
  var initialized = false;
  var loaded = false;
  _renderer__WEBPACK_IMPORTED_MODULE_7__.chatRenderer.events.on('batchProcessed', function (countByType) {
    // Use this flag to workaround unread messages caused by
    // loading them from storage. Side effect of that, is that
    // message count can not be trusted, only unread count.
    if (loaded) {
      store.dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_4__.updateMessageCount)(countByType));
    }
  });
  _renderer__WEBPACK_IMPORTED_MODULE_7__.chatRenderer.events.on('scrollTrackingChanged', function (scrollTracking) {
    store.dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_4__.changeScrollTracking)(scrollTracking));
  });
  setInterval(function () {
    return saveChatToStorage(store);
  }, _constants__WEBPACK_IMPORTED_MODULE_5__.MESSAGE_SAVE_INTERVAL);
  return function (next) {
    return function (action) {
      var type = action.type,
          payload = action.payload;

      if (!initialized) {
        initialized = true;
        loadChatFromStorage(store);
      }

      if (type === 'chat/message') {
        // Normalize the payload
        var batch = Array.isArray(payload) ? payload : [payload];
        _renderer__WEBPACK_IMPORTED_MODULE_7__.chatRenderer.processBatch(batch);
        return;
      }

      if (type === _actions__WEBPACK_IMPORTED_MODULE_4__.loadChat.type) {
        next(action);
        var page = (0,_selectors__WEBPACK_IMPORTED_MODULE_8__.selectCurrentChatPage)(store.getState());
        _renderer__WEBPACK_IMPORTED_MODULE_7__.chatRenderer.changePage(page);
        _renderer__WEBPACK_IMPORTED_MODULE_7__.chatRenderer.onStateLoaded();
        loaded = true;
        return;
      }

      if (type === _actions__WEBPACK_IMPORTED_MODULE_4__.changeChatPage.type || type === _actions__WEBPACK_IMPORTED_MODULE_4__.addChatPage.type || type === _actions__WEBPACK_IMPORTED_MODULE_4__.removeChatPage.type || type === _actions__WEBPACK_IMPORTED_MODULE_4__.toggleAcceptedType.type) {
        next(action);

        var _page = (0,_selectors__WEBPACK_IMPORTED_MODULE_8__.selectCurrentChatPage)(store.getState());

        _renderer__WEBPACK_IMPORTED_MODULE_7__.chatRenderer.changePage(_page);
        return;
      }

      if (type === _actions__WEBPACK_IMPORTED_MODULE_4__.rebuildChat.type) {
        _renderer__WEBPACK_IMPORTED_MODULE_7__.chatRenderer.rebuildChat();
        return next(action);
      }

      if (type === _settings_actions__WEBPACK_IMPORTED_MODULE_2__.updateSettings.type || type === _settings_actions__WEBPACK_IMPORTED_MODULE_2__.loadSettings.type) {
        next(action);
        var settings = (0,_settings_selectors__WEBPACK_IMPORTED_MODULE_3__.selectSettings)(store.getState());
        _renderer__WEBPACK_IMPORTED_MODULE_7__.chatRenderer.setHighlight(settings.highlightText, settings.highlightColor);
        return;
      }

      if (type === 'roundrestart') {
        // Save chat as soon as possible
        saveChatToStorage(store);
        return next(action);
      }

      if (type === _actions__WEBPACK_IMPORTED_MODULE_4__.saveChatToDisk.type) {
        _renderer__WEBPACK_IMPORTED_MODULE_7__.chatRenderer.saveToDisk();
        return;
      }

      return next(action);
    };
  };
};

/***/ }),

/***/ "./packages/tgui-panel/chat/model.js":
/*!*******************************************!*\
  !*** ./packages/tgui-panel/chat/model.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "canPageAcceptType": function() { return /* binding */ canPageAcceptType; },
/* harmony export */   "createPage": function() { return /* binding */ createPage; },
/* harmony export */   "createMainPage": function() { return /* binding */ createMainPage; },
/* harmony export */   "createMessage": function() { return /* binding */ createMessage; },
/* harmony export */   "serializeMessage": function() { return /* binding */ serializeMessage; },
/* harmony export */   "isSameMessage": function() { return /* binding */ isSameMessage; }
/* harmony export */ });
/* harmony import */ var common_uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! common/uuid */ "./packages/common/uuid.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./packages/tgui-panel/chat/constants.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function () { function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; } return n; }(), e: function () { function e(_e) { throw _e; } return e; }(), f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function () { function s() { it = o[Symbol.iterator](); } return s; }(), n: function () { function n() { var step = it.next(); normalCompletion = step.done; return step; } return n; }(), e: function () { function e(_e2) { didErr = true; err = _e2; } return e; }(), f: function () { function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } return f; }() }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */


var canPageAcceptType = function canPageAcceptType(page, type) {
  return type.startsWith(_constants__WEBPACK_IMPORTED_MODULE_1__.MESSAGE_TYPE_INTERNAL) || page.acceptedTypes[type];
};
var createPage = function createPage(obj) {
  return _objectSpread({
    id: (0,common_uuid__WEBPACK_IMPORTED_MODULE_0__.createUuid)(),
    name: 'New Tab',
    acceptedTypes: {},
    unreadCount: 0,
    createdAt: Date.now()
  }, obj);
};
var createMainPage = function createMainPage() {
  var acceptedTypes = {};

  var _iterator = _createForOfIteratorHelper(_constants__WEBPACK_IMPORTED_MODULE_1__.MESSAGE_TYPES),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var typeDef = _step.value;
      acceptedTypes[typeDef.type] = true;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return createPage({
    name: 'Main',
    acceptedTypes: acceptedTypes
  });
};
var createMessage = function createMessage(payload) {
  return _objectSpread({
    createdAt: Date.now()
  }, payload);
};
var serializeMessage = function serializeMessage(message) {
  return {
    type: message.type,
    text: message.text,
    html: message.html,
    times: message.times,
    createdAt: message.createdAt
  };
};
var isSameMessage = function isSameMessage(a, b) {
  return typeof a.text === 'string' && a.text === b.text || typeof a.html === 'string' && a.html === b.html;
};

/***/ }),

/***/ "./packages/tgui-panel/chat/reducer.js":
/*!*********************************************!*\
  !*** ./packages/tgui-panel/chat/reducer.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": function() { return /* binding */ initialState; },
/* harmony export */   "chatReducer": function() { return /* binding */ chatReducer; }
/* harmony export */ });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./packages/tgui-panel/chat/actions.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ "./packages/tgui-panel/chat/model.js");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function () { function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; } return n; }(), e: function () { function e(_e) { throw _e; } return e; }(), f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function () { function s() { it = o[Symbol.iterator](); } return s; }(), n: function () { function n() { var step = it.next(); normalCompletion = step.done; return step; } return n; }(), e: function () { function e(_e2) { didErr = true; err = _e2; } return e; }(), f: function () { function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } return f; }() }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */


var mainPage = (0,_model__WEBPACK_IMPORTED_MODULE_1__.createMainPage)();
var initialState = {
  version: 5,
  currentPageId: mainPage.id,
  scrollTracking: true,
  pages: [mainPage.id],
  pageById: _defineProperty({}, mainPage.id, mainPage)
};
var chatReducer = function chatReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var type = action.type,
      payload = action.payload;

  if (type === _actions__WEBPACK_IMPORTED_MODULE_0__.loadChat.type) {
    // Validate version and/or migrate state
    if ((payload === null || payload === void 0 ? void 0 : payload.version) !== state.version) {
      return state;
    } // Reset page message counts
    // NOTE: We are mutably changing the payload on the assumption
    // that it is a copy that comes straight from the web storage.


    for (var _i = 0, _Object$keys = Object.keys(payload.pageById); _i < _Object$keys.length; _i++) {
      var id = _Object$keys[_i];
      var page = payload.pageById[id];
      page.unreadCount = 0;
    }

    return _objectSpread(_objectSpread({}, state), payload);
  }

  if (type === _actions__WEBPACK_IMPORTED_MODULE_0__.changeScrollTracking.type) {
    var scrollTracking = payload;

    var nextState = _objectSpread(_objectSpread({}, state), {}, {
      scrollTracking: scrollTracking
    });

    if (scrollTracking) {
      var pageId = state.currentPageId;

      var _page = _objectSpread(_objectSpread({}, state.pageById[pageId]), {}, {
        unreadCount: 0
      });

      nextState.pageById = _objectSpread(_objectSpread({}, state.pageById), {}, _defineProperty({}, pageId, _page));
    }

    return nextState;
  }

  if (type === _actions__WEBPACK_IMPORTED_MODULE_0__.updateMessageCount.type) {
    var countByType = payload;
    var pages = state.pages.map(function (id) {
      return state.pageById[id];
    });
    var currentPage = state.pageById[state.currentPageId];

    var nextPageById = _objectSpread({}, state.pageById);

    var _iterator = _createForOfIteratorHelper(pages),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _page2 = _step.value;
        var unreadCount = 0;

        for (var _i2 = 0, _Object$keys2 = Object.keys(countByType); _i2 < _Object$keys2.length; _i2++) {
          var _type = _Object$keys2[_i2];

          // Message does not belong here
          if (!(0,_model__WEBPACK_IMPORTED_MODULE_1__.canPageAcceptType)(_page2, _type)) {
            continue;
          } // Current page is scroll tracked


          if (_page2 === currentPage && state.scrollTracking) {
            continue;
          } // This page received the same message which we can read
          // on the current page.


          if (_page2 !== currentPage && (0,_model__WEBPACK_IMPORTED_MODULE_1__.canPageAcceptType)(currentPage, _type)) {
            continue;
          }

          unreadCount += countByType[_type];
        }

        if (unreadCount > 0) {
          nextPageById[_page2.id] = _objectSpread(_objectSpread({}, _page2), {}, {
            unreadCount: _page2.unreadCount + unreadCount
          });
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return _objectSpread(_objectSpread({}, state), {}, {
      pageById: nextPageById
    });
  }

  if (type === _actions__WEBPACK_IMPORTED_MODULE_0__.addChatPage.type) {
    return _objectSpread(_objectSpread({}, state), {}, {
      currentPageId: payload.id,
      pages: [].concat(_toConsumableArray(state.pages), [payload.id]),
      pageById: _objectSpread(_objectSpread({}, state.pageById), {}, _defineProperty({}, payload.id, payload))
    });
  }

  if (type === _actions__WEBPACK_IMPORTED_MODULE_0__.changeChatPage.type) {
    var _pageId = payload.pageId;

    var _page3 = _objectSpread(_objectSpread({}, state.pageById[_pageId]), {}, {
      unreadCount: 0
    });

    return _objectSpread(_objectSpread({}, state), {}, {
      currentPageId: _pageId,
      pageById: _objectSpread(_objectSpread({}, state.pageById), {}, _defineProperty({}, _pageId, _page3))
    });
  }

  if (type === _actions__WEBPACK_IMPORTED_MODULE_0__.updateChatPage.type) {
    var _pageId2 = payload.pageId,
        update = _objectWithoutProperties(payload, ["pageId"]);

    var _page4 = _objectSpread(_objectSpread({}, state.pageById[_pageId2]), update);

    return _objectSpread(_objectSpread({}, state), {}, {
      pageById: _objectSpread(_objectSpread({}, state.pageById), {}, _defineProperty({}, _pageId2, _page4))
    });
  }

  if (type === _actions__WEBPACK_IMPORTED_MODULE_0__.toggleAcceptedType.type) {
    var _pageId3 = payload.pageId,
        _type2 = payload.type;

    var _page5 = _objectSpread({}, state.pageById[_pageId3]);

    _page5.acceptedTypes = _objectSpread({}, _page5.acceptedTypes);
    _page5.acceptedTypes[_type2] = !_page5.acceptedTypes[_type2];
    return _objectSpread(_objectSpread({}, state), {}, {
      pageById: _objectSpread(_objectSpread({}, state.pageById), {}, _defineProperty({}, _pageId3, _page5))
    });
  }

  if (type === _actions__WEBPACK_IMPORTED_MODULE_0__.removeChatPage.type) {
    var _pageId4 = payload.pageId;

    var _nextState = _objectSpread(_objectSpread({}, state), {}, {
      pages: _toConsumableArray(state.pages),
      pageById: _objectSpread({}, state.pageById)
    });

    delete _nextState.pageById[_pageId4];
    _nextState.pages = _nextState.pages.filter(function (id) {
      return id !== _pageId4;
    });

    if (_nextState.pages.length === 0) {
      _nextState.pages.push(mainPage.id);

      _nextState.pageById[mainPage.id] = mainPage;
      _nextState.currentPageId = mainPage.id;
    }

    if (!_nextState.currentPageId || _nextState.currentPageId === _pageId4) {
      _nextState.currentPageId = _nextState.pages[0];
    }

    return _nextState;
  }

  return state;
};

/***/ }),

/***/ "./packages/tgui-panel/chat/renderer.js":
/*!**********************************************!*\
  !*** ./packages/tgui-panel/chat/renderer.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "chatRenderer": function() { return /* binding */ chatRenderer; }
/* harmony export */ });
/* harmony import */ var common_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! common/events */ "./packages/common/events.js");
/* harmony import */ var common_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/react */ "./packages/common/react.ts");
/* harmony import */ var tgui_logging__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tgui/logging */ "./packages/tgui/logging.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./packages/tgui-panel/chat/constants.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model */ "./packages/tgui-panel/chat/model.js");
/* harmony import */ var _replaceInTextNode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./replaceInTextNode */ "./packages/tgui-panel/chat/replaceInTextNode.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function () { function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; } return n; }(), e: function () { function e(_e) { throw _e; } return e; }(), f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function () { function s() { it = o[Symbol.iterator](); } return s; }(), n: function () { function n() { var step = it.next(); normalCompletion = step.done; return step; } return n; }(), e: function () { function e(_e2) { didErr = true; err = _e2; } return e; }(), f: function () { function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } return f; }() }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */






var logger = (0,tgui_logging__WEBPACK_IMPORTED_MODULE_2__.createLogger)('chatRenderer'); // We consider this as the smallest possible scroll offset
// that is still trackable.

var SCROLL_TRACKING_TOLERANCE = 24;

var findNearestScrollableParent = function findNearestScrollableParent(startingNode) {
  var body = document.body;
  var node = startingNode;

  while (node && node !== body) {
    // This definitely has a vertical scrollbar, because it reduces
    // scrollWidth of the element. Might not work if element uses
    // overflow: hidden.
    if (node.scrollWidth < node.offsetWidth) {
      return node;
    }

    node = node.parentNode;
  }

  return window;
};

var createHighlightNode = function createHighlightNode(text, color) {
  var node = document.createElement('span');
  node.className = 'Chat__highlight';
  node.setAttribute('style', 'background-color:' + color);
  node.textContent = text;
  return node;
};

var createMessageNode = function createMessageNode() {
  var node = document.createElement('div');
  node.className = 'ChatMessage';
  return node;
};

var createReconnectedNode = function createReconnectedNode() {
  var node = document.createElement('div');
  node.className = 'Chat__reconnected';
  return node;
};

var handleImageError = function handleImageError(e) {
  setTimeout(function () {
    /** @type {HTMLImageElement} */
    var node = e.target;
    var attempts = parseInt(node.getAttribute('data-reload-n'), 10) || 0;

    if (attempts >= _constants__WEBPACK_IMPORTED_MODULE_3__.IMAGE_RETRY_LIMIT) {
      logger.error("failed to load an image after ".concat(attempts, " attempts"));
      return;
    }

    var src = node.src;
    node.src = null;
    node.src = src + '#' + attempts;
    node.setAttribute('data-reload-n', attempts + 1);
  }, _constants__WEBPACK_IMPORTED_MODULE_3__.IMAGE_RETRY_DELAY);
};
/**
 * Assigns a "times-repeated" badge to the message.
 */


var updateMessageBadge = function updateMessageBadge(message) {
  var node = message.node,
      times = message.times;

  if (!node || !times) {
    // Nothing to update
    return;
  }

  var foundBadge = node.querySelector('.Chat__badge');
  var badge = foundBadge || document.createElement('div');
  badge.textContent = times;
  badge.className = (0,common_react__WEBPACK_IMPORTED_MODULE_1__.classes)(['Chat__badge', 'Chat__badge--animate']);
  requestAnimationFrame(function () {
    badge.className = 'Chat__badge';
  });

  if (!foundBadge) {
    node.appendChild(badge);
  }
};

var ChatRenderer = /*#__PURE__*/function () {
  function ChatRenderer() {
    var _this = this;

    _classCallCheck(this, ChatRenderer);

    /** @type {HTMLElement} */
    this.loaded = false;
    /** @type {HTMLElement} */

    this.rootNode = null;
    this.queue = [];
    this.messages = [];
    this.visibleMessages = [];
    this.page = null;
    this.events = new common_events__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(); // Scroll handler

    /** @type {HTMLElement} */

    this.scrollNode = null;
    this.scrollTracking = true;

    this.handleScroll = function (type) {
      var node = _this.scrollNode;
      var height = node.scrollHeight;
      var bottom = node.scrollTop + node.offsetHeight;
      var scrollTracking = Math.abs(height - bottom) < SCROLL_TRACKING_TOLERANCE;

      if (scrollTracking !== _this.scrollTracking) {
        _this.scrollTracking = scrollTracking;

        _this.events.emit('scrollTrackingChanged', scrollTracking);

        logger.debug('tracking', _this.scrollTracking);
      }
    };

    this.ensureScrollTracking = function () {
      if (_this.scrollTracking) {
        _this.scrollToBottom();
      }
    }; // Periodic message pruning


    setInterval(function () {
      return _this.pruneMessages();
    }, _constants__WEBPACK_IMPORTED_MODULE_3__.MESSAGE_PRUNE_INTERVAL);
  }

  _createClass(ChatRenderer, [{
    key: "isReady",
    value: function () {
      function isReady() {
        return this.loaded && this.rootNode && this.page;
      }

      return isReady;
    }()
  }, {
    key: "mount",
    value: function () {
      function mount(node) {
        var _this2 = this;

        // Mount existing root node on top of the new node
        if (this.rootNode) {
          node.appendChild(this.rootNode);
        } // Initialize the root node
        else {
            this.rootNode = node;
          } // Find scrollable parent


        this.scrollNode = findNearestScrollableParent(this.rootNode);
        this.scrollNode.addEventListener('scroll', this.handleScroll);
        setImmediate(function () {
          _this2.scrollToBottom();
        }); // Flush the queue

        this.tryFlushQueue();
      }

      return mount;
    }()
  }, {
    key: "onStateLoaded",
    value: function () {
      function onStateLoaded() {
        this.loaded = true;
        this.tryFlushQueue();
      }

      return onStateLoaded;
    }()
  }, {
    key: "tryFlushQueue",
    value: function () {
      function tryFlushQueue() {
        if (this.isReady() && this.queue.length > 0) {
          this.processBatch(this.queue);
          this.queue = [];
        }
      }

      return tryFlushQueue;
    }()
  }, {
    key: "assignStyle",
    value: function () {
      function assignStyle() {
        var style = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        for (var _i = 0, _Object$keys = Object.keys(style); _i < _Object$keys.length; _i++) {
          var key = _Object$keys[_i];
          this.rootNode.style.setProperty(key, style[key]);
        }
      }

      return assignStyle;
    }()
  }, {
    key: "setHighlight",
    value: function () {
      function setHighlight(text, color) {
        if (!text || !color) {
          this.highlightRegex = null;
          this.highlightColor = null;
          return;
        }

        var allowedRegex = /^[a-z0-9_\-\s]+$/ig;
        var lines = String(text).split(',').map(function (str) {
          return str.trim();
        }).filter(function (str) {
          return (// Must be longer than one character
            str && str.length > 1 // Must be alphanumeric (with some punctuation)
            && allowedRegex.test(str)
          );
        }); // Nothing to match, reset highlighting

        if (lines.length === 0) {
          this.highlightRegex = null;
          this.highlightColor = null;
          return;
        }

        this.highlightRegex = new RegExp('(' + lines.join('|') + ')', 'gi');
        this.highlightColor = color;
      }

      return setHighlight;
    }()
  }, {
    key: "scrollToBottom",
    value: function () {
      function scrollToBottom() {
        // scrollHeight is always bigger than scrollTop and is
        // automatically clamped to the valid range.
        this.scrollNode.scrollTop = this.scrollNode.scrollHeight;
      }

      return scrollToBottom;
    }()
  }, {
    key: "changePage",
    value: function () {
      function changePage(page) {
        if (!this.isReady()) {
          this.page = page;
          this.tryFlushQueue();
          return;
        }

        this.page = page; // Fast clear of the root node

        this.rootNode.textContent = '';
        this.visibleMessages = []; // Re-add message nodes

        var fragment = document.createDocumentFragment();
        var node;

        var _iterator = _createForOfIteratorHelper(this.messages),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var message = _step.value;

            if ((0,_model__WEBPACK_IMPORTED_MODULE_4__.canPageAcceptType)(page, message.type)) {
              node = message.node;
              fragment.appendChild(node);
              this.visibleMessages.push(message);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        if (node) {
          this.rootNode.appendChild(fragment);
          node.scrollIntoView();
        }
      }

      return changePage;
    }()
  }, {
    key: "getCombinableMessage",
    value: function () {
      function getCombinableMessage(predicate) {
        var now = Date.now();
        var len = this.visibleMessages.length;
        var from = len - 1;
        var to = Math.max(0, len - _constants__WEBPACK_IMPORTED_MODULE_3__.COMBINE_MAX_MESSAGES);

        for (var i = from; i >= to; i--) {
          var message = this.visibleMessages[i];
          var matches = // Is not an internal message
          !message.type.startsWith(_constants__WEBPACK_IMPORTED_MODULE_3__.MESSAGE_TYPE_INTERNAL) // Text payload must fully match
          && (0,_model__WEBPACK_IMPORTED_MODULE_4__.isSameMessage)(message, predicate) // Must land within the specified time window
          && now < message.createdAt + _constants__WEBPACK_IMPORTED_MODULE_3__.COMBINE_MAX_TIME_WINDOW;

          if (matches) {
            return message;
          }
        }

        return null;
      }

      return getCombinableMessage;
    }()
  }, {
    key: "processBatch",
    value: function () {
      function processBatch(batch) {
        var _this3 = this;

        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var prepend = options.prepend,
            _options$notifyListen = options.notifyListeners,
            notifyListeners = _options$notifyListen === void 0 ? true : _options$notifyListen;
        var now = Date.now(); // Queue up messages until chat is ready

        if (!this.isReady()) {
          if (prepend) {
            this.queue = [].concat(_toConsumableArray(batch), _toConsumableArray(this.queue));
          } else {
            this.queue = [].concat(_toConsumableArray(this.queue), _toConsumableArray(batch));
          }

          return;
        } // Insert messages


        var fragment = document.createDocumentFragment();
        var countByType = {};
        var node;

        var _iterator2 = _createForOfIteratorHelper(batch),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var payload = _step2.value;
            var message = (0,_model__WEBPACK_IMPORTED_MODULE_4__.createMessage)(payload); // Combine messages

            var combinable = this.getCombinableMessage(message);

            if (combinable) {
              combinable.times = (combinable.times || 1) + 1;
              updateMessageBadge(combinable);
              continue;
            } // Reuse message node


            if (message.node) {
              node = message.node;
            } // Reconnected
            else if (message.type === 'internal/reconnected') {
                node = createReconnectedNode();
              } // Create message node
              else {
                  node = createMessageNode(); // Payload is plain text

                  if (message.text) {
                    node.textContent = message.text;
                  } // Payload is HTML
                  else if (message.html) {
                      node.innerHTML = message.html;
                    } else {
                      logger.error('Error: message is missing text payload', message);
                    } // Highlight text


                  if (!message.avoidHighlighting && this.highlightRegex) {
                    var highlighted = (0,_replaceInTextNode__WEBPACK_IMPORTED_MODULE_5__.highlightNode)(node, this.highlightRegex, function (text) {
                      return createHighlightNode(text, _this3.highlightColor);
                    });

                    if (highlighted) {
                      node.className += ' ChatMessage--highlighted';
                    }
                  } // Linkify text


                  var linkifyNodes = node.querySelectorAll('.linkify');

                  for (var i = 0; i < linkifyNodes.length; ++i) {
                    (0,_replaceInTextNode__WEBPACK_IMPORTED_MODULE_5__.linkifyNode)(linkifyNodes[i]);
                  } // Assign an image error handler


                  if (now < message.createdAt + _constants__WEBPACK_IMPORTED_MODULE_3__.IMAGE_RETRY_MESSAGE_AGE) {
                    var imgNodes = node.querySelectorAll('img');

                    for (var _i2 = 0; _i2 < imgNodes.length; _i2++) {
                      var imgNode = imgNodes[_i2];
                      imgNode.addEventListener('error', handleImageError);
                    }
                  }
                } // Store the node in the message


            message.node = node; // Query all possible selectors to find out the message type

            if (!message.type) {
              // IE8: Does not support querySelector on elements that
              // are not yet in the document.
              var typeDef = !Byond.IS_LTE_IE8 && _constants__WEBPACK_IMPORTED_MODULE_3__.MESSAGE_TYPES.find(function (typeDef) {
                return typeDef.selector && node.querySelector(typeDef.selector);
              });
              message.type = (typeDef === null || typeDef === void 0 ? void 0 : typeDef.type) || _constants__WEBPACK_IMPORTED_MODULE_3__.MESSAGE_TYPE_UNKNOWN;
            }

            updateMessageBadge(message);

            if (!countByType[message.type]) {
              countByType[message.type] = 0;
            }

            countByType[message.type] += 1; // TODO: Detect duplicates

            this.messages.push(message);

            if ((0,_model__WEBPACK_IMPORTED_MODULE_4__.canPageAcceptType)(this.page, message.type)) {
              fragment.appendChild(node);
              this.visibleMessages.push(message);
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        if (node) {
          var firstChild = this.rootNode.childNodes[0];

          if (prepend && firstChild) {
            this.rootNode.insertBefore(fragment, firstChild);
          } else {
            this.rootNode.appendChild(fragment);
          }

          if (this.scrollTracking) {
            setImmediate(function () {
              return _this3.scrollToBottom();
            });
          }
        } // Notify listeners that we have processed the batch


        if (notifyListeners) {
          this.events.emit('batchProcessed', countByType);
        }
      }

      return processBatch;
    }()
  }, {
    key: "pruneMessages",
    value: function () {
      function pruneMessages() {
        if (!this.isReady()) {
          return;
        } // Delay pruning because user is currently interacting
        // with chat history


        if (!this.scrollTracking) {
          logger.debug('pruning delayed');
          return;
        } // Visible messages


        {
          var messages = this.visibleMessages;
          var fromIndex = Math.max(0, messages.length - _constants__WEBPACK_IMPORTED_MODULE_3__.MAX_VISIBLE_MESSAGES);

          if (fromIndex > 0) {
            this.visibleMessages = messages.slice(fromIndex);

            for (var i = 0; i < fromIndex; i++) {
              var message = messages[i];
              this.rootNode.removeChild(message.node); // Mark this message as pruned

              message.node = 'pruned';
            } // Remove pruned messages from the message array


            this.messages = this.messages.filter(function (message) {
              return message.node !== 'pruned';
            });
            logger.log("pruned ".concat(fromIndex, " visible messages"));
          }
        } // All messages

        {
          var _fromIndex = Math.max(0, this.messages.length - _constants__WEBPACK_IMPORTED_MODULE_3__.MAX_PERSISTED_MESSAGES);

          if (_fromIndex > 0) {
            this.messages = this.messages.slice(_fromIndex);
            logger.log("pruned ".concat(_fromIndex, " stored messages"));
          }
        }
      }

      return pruneMessages;
    }()
  }, {
    key: "rebuildChat",
    value: function () {
      function rebuildChat() {
        if (!this.isReady()) {
          return;
        } // Make a copy of messages


        var fromIndex = Math.max(0, this.messages.length - _constants__WEBPACK_IMPORTED_MODULE_3__.MAX_PERSISTED_MESSAGES);
        var messages = this.messages.slice(fromIndex); // Remove existing nodes

        var _iterator3 = _createForOfIteratorHelper(messages),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var message = _step3.value;
            message.node = undefined;
          } // Fast clear of the root node

        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }

        this.rootNode.textContent = '';
        this.messages = [];
        this.visibleMessages = []; // Repopulate the chat log

        this.processBatch(messages, {
          notifyListeners: false
        });
      }

      return rebuildChat;
    }()
  }, {
    key: "saveToDisk",
    value: function () {
      function saveToDisk() {
        // Allow only on IE11
        if (Byond.IS_LTE_IE10) {
          return;
        } // Compile currently loaded stylesheets as CSS text


        var cssText = '';
        var styleSheets = document.styleSheets;

        for (var i = 0; i < styleSheets.length; i++) {
          var cssRules = styleSheets[i].cssRules;

          for (var _i3 = 0; _i3 < cssRules.length; _i3++) {
            var rule = cssRules[_i3];
            cssText += rule.cssText + '\n';
          }
        }

        cssText += 'body, html { background-color: #141414 }\n'; // Compile chat log as HTML text

        var messagesHtml = '';

        var _iterator4 = _createForOfIteratorHelper(this.visibleMessages),
            _step4;

        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var message = _step4.value;

            if (message.node) {
              messagesHtml += message.node.outerHTML + '\n';
            }
          } // Create a page

        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }

        var pageHtml = '<!doctype html>\n' + '<html>\n' + '<head>\n' + '<title>SS13 Chat Log</title>\n' + '<style>\n' + cssText + '</style>\n' + '</head>\n' + '<body>\n' + '<div class="Chat">\n' + messagesHtml + '</div>\n' + '</body>\n' + '</html>\n'; // Create and send a nice blob

        var blob = new Blob([pageHtml]);
        var timestamp = new Date().toISOString().substring(0, 19).replace(/[-:]/g, '').replace('T', '-');
        window.navigator.msSaveBlob(blob, "ss13-chatlog-".concat(timestamp, ".html"));
      }

      return saveToDisk;
    }()
  }]);

  return ChatRenderer;
}(); // Make chat renderer global so that we can continue using the same
// instance after hot code replacement.


if (!window.__chatRenderer__) {
  window.__chatRenderer__ = new ChatRenderer();
}
/** @type {ChatRenderer} */


var chatRenderer = window.__chatRenderer__;

/***/ }),

/***/ "./packages/tgui-panel/chat/replaceInTextNode.js":
/*!*******************************************************!*\
  !*** ./packages/tgui-panel/chat/replaceInTextNode.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "replaceInTextNode": function() { return /* binding */ replaceInTextNode; },
/* harmony export */   "highlightNode": function() { return /* binding */ highlightNode; },
/* harmony export */   "linkifyNode": function() { return /* binding */ linkifyNode; }
/* harmony export */ });
/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */

/**
 * Replaces text matching a regular expression with a custom node.
 */
var replaceInTextNode = function replaceInTextNode(regex, createNode) {
  return function (node) {
    var text = node.textContent;
    var textLength = text.length;
    var match;
    var lastIndex = 0;
    var fragment;
    var n = 0; // eslint-disable-next-line no-cond-assign

    while (match = regex.exec(text)) {
      n += 1; // Lazy init fragment

      if (!fragment) {
        fragment = document.createDocumentFragment();
      }

      var matchText = match[0];
      var matchLength = matchText.length;
      var matchIndex = match.index; // Insert previous unmatched chunk

      if (lastIndex < matchIndex) {
        fragment.appendChild(document.createTextNode(text.substring(lastIndex, matchIndex)));
      }

      lastIndex = matchIndex + matchLength; // Create a wrapper node

      fragment.appendChild(createNode(matchText));
    }

    if (fragment) {
      // Insert the remaining unmatched chunk
      if (lastIndex < textLength) {
        fragment.appendChild(document.createTextNode(text.substring(lastIndex, textLength)));
      } // Commit the fragment


      node.parentNode.replaceChild(fragment, node);
    }

    return n;
  };
}; // Highlight
// --------------------------------------------------------

/**
 * Default highlight node.
 */

var createHighlightNode = function createHighlightNode(text) {
  var node = document.createElement('span');
  node.setAttribute('style', 'background-color:#fd4;color:#000');
  node.textContent = text;
  return node;
};
/**
 * Highlights the text in the node based on the provided regular expression.
 *
 * @param {Node} node Node which you want to process
 * @param {RegExp} regex Regular expression to highlight
 * @param {(text: string) => Node} createNode Highlight node creator
 * @returns {number} Number of matches
 */


var highlightNode = function highlightNode(node, regex) {
  var createNode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : createHighlightNode;

  if (!createNode) {
    createNode = createHighlightNode;
  }

  var n = 0;
  var childNodes = node.childNodes;

  for (var i = 0; i < childNodes.length; i++) {
    var _node = childNodes[i]; // Is a text node

    if (_node.nodeType === 3) {
      n += replaceInTextNode(regex, createNode)(_node);
    } else {
      n += highlightNode(_node, regex, createNode);
    }
  }

  return n;
}; // Linkify
// --------------------------------------------------------

var URL_REGEX = /(?:(?:https?:\/\/)|(?:www\.))(?:[^ ]*?\.[^ ]*?)+[-A-Za-z0-9+&@#/%?=~_|$!:,.;()]+/ig;
/**
 * Highlights the text in the node based on the provided regular expression.
 *
 * @param {Node} node Node which you want to process
 * @returns {number} Number of matches
 */

var linkifyNode = function linkifyNode(node) {
  var n = 0;
  var childNodes = node.childNodes;

  for (var i = 0; i < childNodes.length; i++) {
    var _node2 = childNodes[i];
    var tag = String(_node2.nodeName).toLowerCase(); // Is a text node

    if (_node2.nodeType === 3) {
      n += linkifyTextNode(_node2);
    } else if (tag !== 'a') {
      n += linkifyNode(_node2);
    }
  }

  return n;
};
var linkifyTextNode = replaceInTextNode(URL_REGEX, function (text) {
  var node = document.createElement('a');
  node.href = text;
  node.textContent = text;
  return node;
});

/***/ }),

/***/ "./packages/tgui-panel/chat/selectors.js":
/*!***********************************************!*\
  !*** ./packages/tgui-panel/chat/selectors.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectChat": function() { return /* binding */ selectChat; },
/* harmony export */   "selectChatPages": function() { return /* binding */ selectChatPages; },
/* harmony export */   "selectCurrentChatPage": function() { return /* binding */ selectCurrentChatPage; },
/* harmony export */   "selectChatPageById": function() { return /* binding */ selectChatPageById; }
/* harmony export */ });
/* harmony import */ var common_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! common/collections */ "./packages/common/collections.ts");
/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */

var selectChat = function selectChat(state) {
  return state.chat;
};
var selectChatPages = function selectChatPages(state) {
  return (0,common_collections__WEBPACK_IMPORTED_MODULE_0__.map)(function (id) {
    return state.chat.pageById[id];
  })(state.chat.pages);
};
var selectCurrentChatPage = function selectCurrentChatPage(state) {
  return state.chat.pageById[state.chat.currentPageId];
};
var selectChatPageById = function selectChatPageById(id) {
  return function (state) {
    return state.chat.pageById[id];
  };
};

/***/ }),

/***/ "./packages/tgui-panel/game/actions.js":
/*!*********************************************!*\
  !*** ./packages/tgui-panel/game/actions.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "roundRestarted": function() { return /* binding */ roundRestarted; },
/* harmony export */   "connectionLost": function() { return /* binding */ connectionLost; },
/* harmony export */   "connectionRestored": function() { return /* binding */ connectionRestored; }
/* harmony export */ });
/* harmony import */ var common_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! common/redux */ "./packages/common/redux.js");
/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */

var roundRestarted = (0,common_redux__WEBPACK_IMPORTED_MODULE_0__.createAction)('roundrestart');
var connectionLost = (0,common_redux__WEBPACK_IMPORTED_MODULE_0__.createAction)('game/connectionLost');
var connectionRestored = (0,common_redux__WEBPACK_IMPORTED_MODULE_0__.createAction)('game/connectionRestored');

/***/ }),

/***/ "./packages/tgui-panel/game/constants.js":
/*!***********************************************!*\
  !*** ./packages/tgui-panel/game/constants.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CONNECTION_LOST_AFTER": function() { return /* binding */ CONNECTION_LOST_AFTER; }
/* harmony export */ });
/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */
var CONNECTION_LOST_AFTER = 15000;

/***/ }),

/***/ "./packages/tgui-panel/game/hooks.js":
/*!*******************************************!*\
  !*** ./packages/tgui-panel/game/hooks.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useGame": function() { return /* binding */ useGame; }
/* harmony export */ });
/* harmony import */ var common_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! common/redux */ "./packages/common/redux.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectors */ "./packages/tgui-panel/game/selectors.js");
/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */


var useGame = function useGame(context) {
  return (0,common_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(context, _selectors__WEBPACK_IMPORTED_MODULE_1__.selectGame);
};

/***/ }),

/***/ "./packages/tgui-panel/game/index.js":
/*!*******************************************!*\
  !*** ./packages/tgui-panel/game/index.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useGame": function() { return /* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_0__.useGame; },
/* harmony export */   "gameMiddleware": function() { return /* reexport safe */ _middleware__WEBPACK_IMPORTED_MODULE_1__.gameMiddleware; },
/* harmony export */   "gameReducer": function() { return /* reexport safe */ _reducer__WEBPACK_IMPORTED_MODULE_2__.gameReducer; }
/* harmony export */ });
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hooks */ "./packages/tgui-panel/game/hooks.js");
/* harmony import */ var _middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./middleware */ "./packages/tgui-panel/game/middleware.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducer */ "./packages/tgui-panel/game/reducer.js");
/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */




/***/ }),

/***/ "./packages/tgui-panel/game/middleware.js":
/*!************************************************!*\
  !*** ./packages/tgui-panel/game/middleware.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameMiddleware": function() { return /* binding */ gameMiddleware; }
/* harmony export */ });
/* harmony import */ var _ping_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ping/actions */ "./packages/tgui-panel/ping/actions.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./packages/tgui-panel/game/actions.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectors */ "./packages/tgui-panel/game/selectors.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./packages/tgui-panel/game/constants.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */





var withTimestamp = function withTimestamp(action) {
  return _objectSpread(_objectSpread({}, action), {}, {
    meta: _objectSpread(_objectSpread({}, action.meta), {}, {
      now: Date.now()
    })
  });
};

var gameMiddleware = function gameMiddleware(store) {
  var lastPingedAt;
  setInterval(function () {
    var state = store.getState();

    if (!state) {
      return;
    }

    var game = (0,_selectors__WEBPACK_IMPORTED_MODULE_2__.selectGame)(state);
    var pingsAreFailing = lastPingedAt && Date.now() >= lastPingedAt + _constants__WEBPACK_IMPORTED_MODULE_3__.CONNECTION_LOST_AFTER;

    if (!game.connectionLostAt && pingsAreFailing) {
      store.dispatch(withTimestamp((0,_actions__WEBPACK_IMPORTED_MODULE_1__.connectionLost)()));
    }

    if (game.connectionLostAt && !pingsAreFailing) {
      store.dispatch(withTimestamp((0,_actions__WEBPACK_IMPORTED_MODULE_1__.connectionRestored)()));
    }
  }, 1000);
  return function (next) {
    return function (action) {
      var type = action.type,
          payload = action.payload,
          meta = action.meta;

      if (type === _ping_actions__WEBPACK_IMPORTED_MODULE_0__.pingSuccess.type) {
        lastPingedAt = meta.now;
        return next(action);
      }

      if (type === _actions__WEBPACK_IMPORTED_MODULE_1__.roundRestarted.type) {
        return next(withTimestamp(action));
      }

      return next(action);
    };
  };
};

/***/ }),

/***/ "./packages/tgui-panel/game/reducer.js":
/*!*********************************************!*\
  !*** ./packages/tgui-panel/game/reducer.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameReducer": function() { return /* binding */ gameReducer; }
/* harmony export */ });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./packages/tgui-panel/game/actions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */


var initialState = {
  // TODO: This is where round info should be.
  roundId: null,
  roundTime: null,
  roundRestartedAt: null,
  connectionLostAt: null
};
var gameReducer = function gameReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var type = action.type,
      payload = action.payload,
      meta = action.meta;

  if (type === 'roundrestart') {
    return _objectSpread(_objectSpread({}, state), {}, {
      roundRestartedAt: meta.now
    });
  }

  if (type === _actions__WEBPACK_IMPORTED_MODULE_0__.connectionLost.type) {
    return _objectSpread(_objectSpread({}, state), {}, {
      connectionLostAt: meta.now
    });
  }

  if (type === _actions__WEBPACK_IMPORTED_MODULE_0__.connectionRestored.type) {
    return _objectSpread(_objectSpread({}, state), {}, {
      connectionLostAt: null
    });
  }

  return state;
};

/***/ }),

/***/ "./packages/tgui-panel/game/selectors.js":
/*!***********************************************!*\
  !*** ./packages/tgui-panel/game/selectors.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectGame": function() { return /* binding */ selectGame; }
/* harmony export */ });
/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */
var selectGame = function selectGame(state) {
  return state.game;
};

/***/ }),

/***/ "./packages/tgui-panel/index.js":
/*!**************************************!*\
  !*** ./packages/tgui-panel/index.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var inferno__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inferno */ "./.yarn/cache/inferno-npm-7.4.8-f828cb79a7-dd2af1493c.zip/node_modules/inferno/index.esm.js");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/main.scss */ "./packages/tgui-panel/styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_themes_light_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/themes/light.scss */ "./packages/tgui-panel/styles/themes/light.scss");
/* harmony import */ var _styles_themes_light_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_themes_light_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var common_perf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! common/perf */ "./packages/common/perf.js");
/* harmony import */ var common_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! common/redux */ "./packages/common/redux.js");
/* harmony import */ var tgui_dev_server_link_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tgui-dev-server/link/client */ "./packages/tgui-dev-server/link/client.js");
/* harmony import */ var tgui_events__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tgui/events */ "./packages/tgui/events.js");
/* harmony import */ var tgui_links__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tgui/links */ "./packages/tgui/links.js");
/* harmony import */ var tgui_renderer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tgui/renderer */ "./packages/tgui/renderer.js");
/* harmony import */ var tgui_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tgui/store */ "./packages/tgui/store.js");
/* harmony import */ var _audio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./audio */ "./packages/tgui-panel/audio/index.js");
/* harmony import */ var _chat__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./chat */ "./packages/tgui-panel/chat/index.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./game */ "./packages/tgui-panel/game/index.js");
/* harmony import */ var _panelFocus__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./panelFocus */ "./packages/tgui-panel/panelFocus.js");
/* harmony import */ var _ping__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ping */ "./packages/tgui-panel/ping/index.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./settings */ "./packages/tgui-panel/settings/index.js");
/* harmony import */ var _telemetry__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./telemetry */ "./packages/tgui-panel/telemetry.js");
var _window$performance, _window$performance$t;



/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */
// Themes
















common_perf__WEBPACK_IMPORTED_MODULE_3__.perf.mark('inception', (_window$performance = window.performance) === null || _window$performance === void 0 ? void 0 : (_window$performance$t = _window$performance.timing) === null || _window$performance$t === void 0 ? void 0 : _window$performance$t.navigationStart);
common_perf__WEBPACK_IMPORTED_MODULE_3__.perf.mark('init');
var store = (0,tgui_store__WEBPACK_IMPORTED_MODULE_9__.configureStore)({
  reducer: (0,common_redux__WEBPACK_IMPORTED_MODULE_4__.combineReducers)({
    audio: _audio__WEBPACK_IMPORTED_MODULE_10__.audioReducer,
    chat: _chat__WEBPACK_IMPORTED_MODULE_11__.chatReducer,
    game: _game__WEBPACK_IMPORTED_MODULE_12__.gameReducer,
    ping: _ping__WEBPACK_IMPORTED_MODULE_14__.pingReducer,
    settings: _settings__WEBPACK_IMPORTED_MODULE_15__.settingsReducer
  }),
  middleware: {
    pre: [_chat__WEBPACK_IMPORTED_MODULE_11__.chatMiddleware, _ping__WEBPACK_IMPORTED_MODULE_14__.pingMiddleware, _telemetry__WEBPACK_IMPORTED_MODULE_16__.telemetryMiddleware, _settings__WEBPACK_IMPORTED_MODULE_15__.settingsMiddleware, _audio__WEBPACK_IMPORTED_MODULE_10__.audioMiddleware, _game__WEBPACK_IMPORTED_MODULE_12__.gameMiddleware]
  }
});
var renderApp = (0,tgui_renderer__WEBPACK_IMPORTED_MODULE_8__.createRenderer)(function () {
  var _require = __webpack_require__(/*! ./Panel */ "./packages/tgui-panel/Panel.js"),
      Panel = _require.Panel;

  return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_store__WEBPACK_IMPORTED_MODULE_9__.StoreProvider, {
    "store": store,
    children: (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, Panel)
  });
});

var setupApp = function setupApp() {
  // Delay setup
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupApp);
    return;
  }

  (0,tgui_events__WEBPACK_IMPORTED_MODULE_6__.setupGlobalEvents)({
    ignoreWindowFocus: true
  });
  (0,_panelFocus__WEBPACK_IMPORTED_MODULE_13__.setupPanelFocusHacks)();
  (0,tgui_links__WEBPACK_IMPORTED_MODULE_7__.captureExternalLinks)(); // Subscribe for Redux state updates

  store.subscribe(renderApp); // Subscribe for bankend updates

  window.update = function (msg) {
    return store.dispatch(Byond.parseJson(msg));
  }; // Process the early update queue


  while (true) {
    var msg = window.__updateQueue__.shift();

    if (!msg) {
      break;
    }

    window.update(msg);
  } // Unhide the panel


  Byond.winset('output', {
    'is-visible': false
  });
  Byond.winset('browseroutput', {
    'is-visible': true,
    'is-disabled': false,
    'pos': '0x0',
    'size': '0x0'
  }); // Resize the panel to match the non-browser output

  Byond.winget('output').then(function (output) {
    Byond.winset('browseroutput', {
      'size': output.size
    });
  }); // Enable hot module reloading

  if (false) {}
};

setupApp();

/***/ }),

/***/ "./packages/tgui-panel/panelFocus.js":
/*!*******************************************!*\
  !*** ./packages/tgui-panel/panelFocus.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setupPanelFocusHacks": function() { return /* binding */ setupPanelFocusHacks; }
/* harmony export */ });
/* harmony import */ var common_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! common/vector */ "./packages/common/vector.js");
/* harmony import */ var tgui_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tgui/events */ "./packages/tgui/events.js");
/* harmony import */ var tgui_focus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tgui/focus */ "./packages/tgui/focus.js");
/**
 * Basically, hacks from goonchat which try to keep the map focused at all
 * times, except for when some meaningful action happens o
 *
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */


 // Empyrically determined number for the smallest possible
// text you can select with the mouse.

var MIN_SELECTION_DISTANCE = 10;

var deferredFocusMap = function deferredFocusMap() {
  return setImmediate(function () {
    return (0,tgui_focus__WEBPACK_IMPORTED_MODULE_2__.focusMap)();
  });
};

var setupPanelFocusHacks = function setupPanelFocusHacks() {
  var focusStolen = false;
  var clickStartPos = null;
  window.addEventListener('focusin', function (e) {
    focusStolen = (0,tgui_events__WEBPACK_IMPORTED_MODULE_1__.canStealFocus)(e.target);
  });
  window.addEventListener('mousedown', function (e) {
    clickStartPos = [e.screenX, e.screenY];
  });
  window.addEventListener('mouseup', function (e) {
    if (clickStartPos) {
      var clickEndPos = [e.screenX, e.screenY];
      var dist = (0,common_vector__WEBPACK_IMPORTED_MODULE_0__.vecLength)((0,common_vector__WEBPACK_IMPORTED_MODULE_0__.vecSubtract)(clickEndPos, clickStartPos));

      if (dist >= MIN_SELECTION_DISTANCE) {
        focusStolen = true;
      }
    }

    if (!focusStolen) {
      deferredFocusMap();
    }
  });
  tgui_events__WEBPACK_IMPORTED_MODULE_1__.globalEvents.on('keydown', function (key) {
    if (key.isModifierKey()) {
      return;
    }

    deferredFocusMap();
  });
};

/***/ }),

/***/ "./packages/tgui-panel/ping/PingIndicator.js":
/*!***************************************************!*\
  !*** ./packages/tgui-panel/ping/PingIndicator.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PingIndicator": function() { return /* binding */ PingIndicator; }
/* harmony export */ });
/* harmony import */ var inferno__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inferno */ "./.yarn/cache/inferno-npm-7.4.8-f828cb79a7-dd2af1493c.zip/node_modules/inferno/index.esm.js");
/* harmony import */ var common_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/color */ "./packages/common/color.js");
/* harmony import */ var common_math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/math */ "./packages/common/math.ts");
/* harmony import */ var common_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! common/redux */ "./packages/common/redux.js");
/* harmony import */ var tgui_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tgui/components */ "./packages/tgui/components/index.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./selectors */ "./packages/tgui-panel/ping/selectors.js");


/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */





var PingIndicator = function PingIndicator(props, context) {
  var ping = (0,common_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(context, _selectors__WEBPACK_IMPORTED_MODULE_5__.selectPing);
  var color = common_color__WEBPACK_IMPORTED_MODULE_1__.Color.lookup(ping.networkQuality, [new common_color__WEBPACK_IMPORTED_MODULE_1__.Color(220, 40, 40), new common_color__WEBPACK_IMPORTED_MODULE_1__.Color(220, 200, 40), new common_color__WEBPACK_IMPORTED_MODULE_1__.Color(60, 220, 40)]);
  var roundtrip = ping.roundtrip ? (0,common_math__WEBPACK_IMPORTED_MODULE_2__.toFixed)(ping.roundtrip) : '--';
  return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "Ping", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_components__WEBPACK_IMPORTED_MODULE_4__.Box, {
    "className": "Ping__indicator",
    "backgroundColor": color
  }), roundtrip], 0);
};

/***/ }),

/***/ "./packages/tgui-panel/ping/actions.js":
/*!*********************************************!*\
  !*** ./packages/tgui-panel/ping/actions.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pingSuccess": function() { return /* binding */ pingSuccess; },
/* harmony export */   "pingFail": function() { return /* binding */ pingFail; },
/* harmony export */   "pingReply": function() { return /* binding */ pingReply; }
/* harmony export */ });
/* harmony import */ var common_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! common/redux */ "./packages/common/redux.js");
/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */

var pingSuccess = (0,common_redux__WEBPACK_IMPORTED_MODULE_0__.createAction)('ping/success', function (ping) {
  var now = Date.now();
  var roundtrip = (now - ping.sentAt) * 0.5;
  return {
    payload: {
      lastId: ping.id,
      roundtrip: roundtrip
    },
    meta: {
      now: now
    }
  };
});
var pingFail = (0,common_redux__WEBPACK_IMPORTED_MODULE_0__.createAction)('ping/fail');
var pingReply = (0,common_redux__WEBPACK_IMPORTED_MODULE_0__.createAction)('ping/reply');

/***/ }),

/***/ "./packages/tgui-panel/ping/constants.js":
/*!***********************************************!*\
  !*** ./packages/tgui-panel/ping/constants.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PING_INTERVAL": function() { return /* binding */ PING_INTERVAL; },
/* harmony export */   "PING_TIMEOUT": function() { return /* binding */ PING_TIMEOUT; },
/* harmony export */   "PING_MAX_FAILS": function() { return /* binding */ PING_MAX_FAILS; },
/* harmony export */   "PING_QUEUE_SIZE": function() { return /* binding */ PING_QUEUE_SIZE; },
/* harmony export */   "PING_ROUNDTRIP_BEST": function() { return /* binding */ PING_ROUNDTRIP_BEST; },
/* harmony export */   "PING_ROUNDTRIP_WORST": function() { return /* binding */ PING_ROUNDTRIP_WORST; }
/* harmony export */ });
/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */
var PING_INTERVAL = 2500;
var PING_TIMEOUT = 2000;
var PING_MAX_FAILS = 3;
var PING_QUEUE_SIZE = 8;
var PING_ROUNDTRIP_BEST = 50;
var PING_ROUNDTRIP_WORST = 200;

/***/ }),

/***/ "./packages/tgui-panel/ping/index.js":
/*!*******************************************!*\
  !*** ./packages/tgui-panel/ping/index.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pingMiddleware": function() { return /* reexport safe */ _middleware__WEBPACK_IMPORTED_MODULE_0__.pingMiddleware; },
/* harmony export */   "PingIndicator": function() { return /* reexport safe */ _PingIndicator__WEBPACK_IMPORTED_MODULE_1__.PingIndicator; },
/* harmony export */   "pingReducer": function() { return /* reexport safe */ _reducer__WEBPACK_IMPORTED_MODULE_2__.pingReducer; }
/* harmony export */ });
/* harmony import */ var _middleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./middleware */ "./packages/tgui-panel/ping/middleware.js");
/* harmony import */ var _PingIndicator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PingIndicator */ "./packages/tgui-panel/ping/PingIndicator.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducer */ "./packages/tgui-panel/ping/reducer.js");
/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */




/***/ }),

/***/ "./packages/tgui-panel/ping/middleware.js":
/*!************************************************!*\
  !*** ./packages/tgui-panel/ping/middleware.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pingMiddleware": function() { return /* binding */ pingMiddleware; }
/* harmony export */ });
/* harmony import */ var tgui_backend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tgui/backend */ "./packages/tgui/backend.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./packages/tgui-panel/ping/actions.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./packages/tgui-panel/ping/constants.js");
/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */



var pingMiddleware = function pingMiddleware(store) {
  var initialized = false;
  var index = 0;
  var interval;
  var pings = [];

  var sendPing = function sendPing() {
    for (var i = 0; i < _constants__WEBPACK_IMPORTED_MODULE_2__.PING_QUEUE_SIZE; i++) {
      var _ping = pings[i];

      if (_ping && Date.now() - _ping.sentAt > _constants__WEBPACK_IMPORTED_MODULE_2__.PING_TIMEOUT) {
        pings[i] = null;
        store.dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_1__.pingFail)());
      }
    }

    var ping = {
      index: index,
      sentAt: Date.now()
    };
    pings[index] = ping;
    (0,tgui_backend__WEBPACK_IMPORTED_MODULE_0__.sendMessage)({
      type: 'ping',
      payload: {
        index: index
      }
    });
    index = (index + 1) % _constants__WEBPACK_IMPORTED_MODULE_2__.PING_QUEUE_SIZE;
  };

  return function (next) {
    return function (action) {
      var type = action.type,
          payload = action.payload;

      if (!initialized) {
        initialized = true;
        interval = setInterval(sendPing, _constants__WEBPACK_IMPORTED_MODULE_2__.PING_INTERVAL);
        sendPing();
      }

      if (type === 'roundrestart') {
        // Stop pinging because dreamseeker is currently reconnecting.
        // Topic calls in the middle of reconnect will crash the connection.
        clearInterval(interval);
        return next(action);
      }

      if (type === 'pingReply') {
        var _index = payload.index;
        var ping = pings[_index]; // Received a timed out ping

        if (!ping) {
          return;
        }

        pings[_index] = null;
        return next((0,_actions__WEBPACK_IMPORTED_MODULE_1__.pingSuccess)(ping));
      }

      return next(action);
    };
  };
};

/***/ }),

/***/ "./packages/tgui-panel/ping/reducer.js":
/*!*********************************************!*\
  !*** ./packages/tgui-panel/ping/reducer.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pingReducer": function() { return /* binding */ pingReducer; }
/* harmony export */ });
/* harmony import */ var common_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! common/math */ "./packages/common/math.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./packages/tgui-panel/ping/actions.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./packages/tgui-panel/ping/constants.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */



var pingReducer = function pingReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var type = action.type,
      payload = action.payload;

  if (type === _actions__WEBPACK_IMPORTED_MODULE_1__.pingSuccess.type) {
    var roundtrip = payload.roundtrip;
    var prevRoundtrip = state.roundtripAvg || roundtrip;
    var roundtripAvg = Math.round(prevRoundtrip * 0.4 + roundtrip * 0.6);
    var networkQuality = 1 - (0,common_math__WEBPACK_IMPORTED_MODULE_0__.scale)(roundtripAvg, _constants__WEBPACK_IMPORTED_MODULE_2__.PING_ROUNDTRIP_BEST, _constants__WEBPACK_IMPORTED_MODULE_2__.PING_ROUNDTRIP_WORST);
    return {
      roundtrip: roundtrip,
      roundtripAvg: roundtripAvg,
      failCount: 0,
      networkQuality: networkQuality
    };
  }

  if (type === _actions__WEBPACK_IMPORTED_MODULE_1__.pingFail.type) {
    var _state$failCount = state.failCount,
        failCount = _state$failCount === void 0 ? 0 : _state$failCount;

    var _networkQuality = (0,common_math__WEBPACK_IMPORTED_MODULE_0__.clamp01)(state.networkQuality - failCount / _constants__WEBPACK_IMPORTED_MODULE_2__.PING_MAX_FAILS);

    var nextState = _objectSpread(_objectSpread({}, state), {}, {
      failCount: failCount + 1,
      networkQuality: _networkQuality
    });

    if (failCount > _constants__WEBPACK_IMPORTED_MODULE_2__.PING_MAX_FAILS) {
      nextState.roundtrip = undefined;
      nextState.roundtripAvg = undefined;
    }

    return nextState;
  }

  return state;
};

/***/ }),

/***/ "./packages/tgui-panel/ping/selectors.js":
/*!***********************************************!*\
  !*** ./packages/tgui-panel/ping/selectors.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectPing": function() { return /* binding */ selectPing; }
/* harmony export */ });
/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */
var selectPing = function selectPing(state) {
  return state.ping;
};

/***/ }),

/***/ "./packages/tgui-panel/settings/SettingsPanel.js":
/*!*******************************************************!*\
  !*** ./packages/tgui-panel/settings/SettingsPanel.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPanel": function() { return /* binding */ SettingsPanel; },
/* harmony export */   "SettingsGeneral": function() { return /* binding */ SettingsGeneral; }
/* harmony export */ });
/* harmony import */ var inferno__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inferno */ "./.yarn/cache/inferno-npm-7.4.8-f828cb79a7-dd2af1493c.zip/node_modules/inferno/index.esm.js");
/* harmony import */ var common_math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/math */ "./packages/common/math.ts");
/* harmony import */ var tgui_backend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tgui/backend */ "./packages/tgui/backend.ts");
/* harmony import */ var common_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! common/redux */ "./packages/common/redux.js");
/* harmony import */ var tgui_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tgui/components */ "./packages/tgui/components/index.js");
/* harmony import */ var _chat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../chat */ "./packages/tgui-panel/chat/index.js");
/* harmony import */ var _chat_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../chat/actions */ "./packages/tgui-panel/chat/actions.js");
/* harmony import */ var _themes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../themes */ "./packages/tgui-panel/themes.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./actions */ "./packages/tgui-panel/settings/actions.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./constants */ "./packages/tgui-panel/settings/constants.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./selectors */ "./packages/tgui-panel/settings/selectors.js");


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */










var SettingsPanel = function SettingsPanel(props, context) {
  var activeTab = (0,common_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(context, _selectors__WEBPACK_IMPORTED_MODULE_10__.selectActiveTab);
  var dispatch = (0,common_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(context);
  return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_components__WEBPACK_IMPORTED_MODULE_4__.Stack, {
    "fill": true,
    children: [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_components__WEBPACK_IMPORTED_MODULE_4__.Stack.Item, {
      children: (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_components__WEBPACK_IMPORTED_MODULE_4__.Section, {
        "fitted": true,
        "fill": true,
        "minHeight": "8em",
        children: (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_components__WEBPACK_IMPORTED_MODULE_4__.Tabs, {
          "vertical": true,
          children: _constants__WEBPACK_IMPORTED_MODULE_9__.SETTINGS_TABS.map(function (tab) {
            return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_components__WEBPACK_IMPORTED_MODULE_4__.Tabs.Tab, {
              "selected": tab.id === activeTab,
              "onClick": function () {
                function onClick() {
                  return dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_8__.changeSettingsTab)({
                    tabId: tab.id
                  }));
                }

                return onClick;
              }(),
              children: tab.name
            }, tab.id);
          })
        })
      })
    }), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_components__WEBPACK_IMPORTED_MODULE_4__.Stack.Item, {
      "grow": 1,
      "basis": 0,
      children: [activeTab === 'general' && (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, SettingsGeneral), activeTab === 'chatPage' && (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, _chat__WEBPACK_IMPORTED_MODULE_5__.ChatPageSettings)]
    })]
  });
};
var SettingsGeneral = function SettingsGeneral(props, context) {
  var _useSelector = (0,common_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(context, _selectors__WEBPACK_IMPORTED_MODULE_10__.selectSettings),
      theme = _useSelector.theme,
      fontFamily = _useSelector.fontFamily,
      fontSize = _useSelector.fontSize,
      lineHeight = _useSelector.lineHeight,
      highlightText = _useSelector.highlightText,
      highlightColor = _useSelector.highlightColor;

  var dispatch = (0,common_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(context);

  var _useLocalState = (0,tgui_backend__WEBPACK_IMPORTED_MODULE_2__.useLocalState)(context, "freeFont", false),
      _useLocalState2 = _slicedToArray(_useLocalState, 2),
      freeFont = _useLocalState2[0],
      setFreeFont = _useLocalState2[1];

  return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_components__WEBPACK_IMPORTED_MODULE_4__.Section, {
    children: [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_components__WEBPACK_IMPORTED_MODULE_4__.LabeledList, {
      children: [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_components__WEBPACK_IMPORTED_MODULE_4__.LabeledList.Item, {
        "label": "Theme",
        children: (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_components__WEBPACK_IMPORTED_MODULE_4__.Dropdown, {
          "selected": theme,
          "options": _themes__WEBPACK_IMPORTED_MODULE_7__.THEMES,
          "onSelected": function () {
            function onSelected(value) {
              return dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_8__.updateSettings)({
                theme: value
              }));
            }

            return onSelected;
          }()
        })
      }), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_components__WEBPACK_IMPORTED_MODULE_4__.LabeledList.Item, {
        "label": "Font style",
        children: (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_components__WEBPACK_IMPORTED_MODULE_4__.Stack, {
          "inline": true,
          "align": "baseline",
          children: [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_components__WEBPACK_IMPORTED_MODULE_4__.Stack.Item, {
            children: !freeFont && (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_components__WEBPACK_IMPORTED_MODULE_4__.Dropdown, {
              "selected": fontFamily,
              "options": _constants__WEBPACK_IMPORTED_MODULE_9__.FONTS,
              "onSelected": function () {
                function onSelected(value) {
                  return dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_8__.updateSettings)({
                    fontFamily: value
                  }));
                }

                return onSelected;
              }()
            }) || (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_components__WEBPACK_IMPORTED_MODULE_4__.Input, {
              "value": fontFamily,
              "onChange": function () {
                function onChange(e, value) {
                  return dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_8__.updateSettings)({
                    fontFamily: value
                  }));
                }

                return onChange;
              }()
            })
          }), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_components__WEBPACK_IMPORTED_MODULE_4__.Stack.Item, {
            children: (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
              "content": "Custom font",
              "icon": freeFont ? "lock-open" : "lock",
              "color": freeFont ? "good" : "bad",
              "ml": 1,
              "onClick": function () {
                function onClick() {
                  setFreeFont(!freeFont);
                }

                return onClick;
              }()
            })
          })]
        })
      }), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_components__WEBPACK_IMPORTED_MODULE_4__.LabeledList.Item, {
        "label": "Font size",
        children: (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_components__WEBPACK_IMPORTED_MODULE_4__.NumberInput, {
          "width": "4em",
          "step": 1,
          "stepPixelSize": 10,
          "minValue": 8,
          "maxValue": 32,
          "value": fontSize,
          "unit": "px",
          "format": function () {
            function format(value) {
              return (0,common_math__WEBPACK_IMPORTED_MODULE_1__.toFixed)(value);
            }

            return format;
          }(),
          "onChange": function () {
            function onChange(e, value) {
              return dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_8__.updateSettings)({
                fontSize: value
              }));
            }

            return onChange;
          }()
        })
      }), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_components__WEBPACK_IMPORTED_MODULE_4__.LabeledList.Item, {
        "label": "Line height",
        children: (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_components__WEBPACK_IMPORTED_MODULE_4__.NumberInput, {
          "width": "4em",
          "step": 0.01,
          "stepPixelSize": 2,
          "minValue": 0.8,
          "maxValue": 5,
          "value": lineHeight,
          "format": function () {
            function format(value) {
              return (0,common_math__WEBPACK_IMPORTED_MODULE_1__.toFixed)(value, 2);
            }

            return format;
          }(),
          "onDrag": function () {
            function onDrag(e, value) {
              return dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_8__.updateSettings)({
                lineHeight: value
              }));
            }

            return onDrag;
          }()
        })
      })]
    }), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_components__WEBPACK_IMPORTED_MODULE_4__.Divider), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_components__WEBPACK_IMPORTED_MODULE_4__.Box, {
      children: [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_components__WEBPACK_IMPORTED_MODULE_4__.Flex, {
        "mb": 1,
        "color": "label",
        "align": "baseline",
        children: [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_components__WEBPACK_IMPORTED_MODULE_4__.Flex.Item, {
          "grow": 1,
          children: "Highlight words (comma separated):"
        }), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_components__WEBPACK_IMPORTED_MODULE_4__.Flex.Item, {
          "shrink": 0,
          children: [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_components__WEBPACK_IMPORTED_MODULE_4__.ColorBox, {
            "mr": 1,
            "color": highlightColor
          }), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_components__WEBPACK_IMPORTED_MODULE_4__.Input, {
            "width": "5em",
            "monospace": true,
            "placeholder": "#ffffff",
            "value": highlightColor,
            "onInput": function () {
              function onInput(e, value) {
                return dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_8__.updateSettings)({
                  highlightColor: value
                }));
              }

              return onInput;
            }()
          })]
        })]
      }), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_components__WEBPACK_IMPORTED_MODULE_4__.TextArea, {
        "height": "3em",
        "value": highlightText,
        "onChange": function () {
          function onChange(e, value) {
            return dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_8__.updateSettings)({
              highlightText: value
            }));
          }

          return onChange;
        }()
      })]
    }), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_components__WEBPACK_IMPORTED_MODULE_4__.Divider), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_components__WEBPACK_IMPORTED_MODULE_4__.Box, {
      children: [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
        "icon": "check",
        "onClick": function () {
          function onClick() {
            return dispatch((0,_chat_actions__WEBPACK_IMPORTED_MODULE_6__.rebuildChat)());
          }

          return onClick;
        }(),
        children: "Apply now"
      }), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_components__WEBPACK_IMPORTED_MODULE_4__.Box, {
        "inline": true,
        "fontSize": "0.9em",
        "ml": 1,
        "color": "label",
        children: "Can freeze the chat for a while."
      })]
    }), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_components__WEBPACK_IMPORTED_MODULE_4__.Divider), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, tgui_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
      "icon": "save",
      "onClick": function () {
        function onClick() {
          return dispatch((0,_chat_actions__WEBPACK_IMPORTED_MODULE_6__.saveChatToDisk)());
        }

        return onClick;
      }(),
      children: "Save chat log"
    })]
  });
};

/***/ }),

/***/ "./packages/tgui-panel/settings/actions.js":
/*!*************************************************!*\
  !*** ./packages/tgui-panel/settings/actions.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateSettings": function() { return /* binding */ updateSettings; },
/* harmony export */   "loadSettings": function() { return /* binding */ loadSettings; },
/* harmony export */   "changeSettingsTab": function() { return /* binding */ changeSettingsTab; },
/* harmony export */   "toggleSettings": function() { return /* binding */ toggleSettings; },
/* harmony export */   "openChatSettings": function() { return /* binding */ openChatSettings; }
/* harmony export */ });
/* harmony import */ var common_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! common/redux */ "./packages/common/redux.js");
/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */

var updateSettings = (0,common_redux__WEBPACK_IMPORTED_MODULE_0__.createAction)('settings/update');
var loadSettings = (0,common_redux__WEBPACK_IMPORTED_MODULE_0__.createAction)('settings/load');
var changeSettingsTab = (0,common_redux__WEBPACK_IMPORTED_MODULE_0__.createAction)('settings/changeTab');
var toggleSettings = (0,common_redux__WEBPACK_IMPORTED_MODULE_0__.createAction)('settings/toggle');
var openChatSettings = (0,common_redux__WEBPACK_IMPORTED_MODULE_0__.createAction)('settings/openChatTab');

/***/ }),

/***/ "./packages/tgui-panel/settings/constants.js":
/*!***************************************************!*\
  !*** ./packages/tgui-panel/settings/constants.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SETTINGS_TABS": function() { return /* binding */ SETTINGS_TABS; },
/* harmony export */   "FONTS_DISABLED": function() { return /* binding */ FONTS_DISABLED; },
/* harmony export */   "FONTS": function() { return /* binding */ FONTS; }
/* harmony export */ });
/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */
var SETTINGS_TABS = [{
  id: 'general',
  name: 'General'
}, {
  id: 'chatPage',
  name: 'Chat Tabs'
}];
var FONTS_DISABLED = "Default";
var FONTS = [FONTS_DISABLED, 'Verdana', 'Arial', 'Arial Black', 'Comic Sans MS', 'Impact', 'Lucida Sans Unicode', 'Tahoma', 'Trebuchet MS', 'Courier New', 'Lucida Console'];

/***/ }),

/***/ "./packages/tgui-panel/settings/hooks.js":
/*!***********************************************!*\
  !*** ./packages/tgui-panel/settings/hooks.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useSettings": function() { return /* binding */ useSettings; }
/* harmony export */ });
/* harmony import */ var common_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! common/redux */ "./packages/common/redux.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./packages/tgui-panel/settings/actions.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectors */ "./packages/tgui-panel/settings/selectors.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */



var useSettings = function useSettings(context) {
  var settings = (0,common_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(context, _selectors__WEBPACK_IMPORTED_MODULE_2__.selectSettings);
  var dispatch = (0,common_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)(context);
  return _objectSpread(_objectSpread({}, settings), {}, {
    visible: settings.view.visible,
    toggle: function () {
      function toggle() {
        return dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_1__.toggleSettings)());
      }

      return toggle;
    }(),
    update: function () {
      function update(obj) {
        return dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_1__.updateSettings)(obj));
      }

      return update;
    }()
  });
};

/***/ }),

/***/ "./packages/tgui-panel/settings/index.js":
/*!***********************************************!*\
  !*** ./packages/tgui-panel/settings/index.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useSettings": function() { return /* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_0__.useSettings; },
/* harmony export */   "settingsMiddleware": function() { return /* reexport safe */ _middleware__WEBPACK_IMPORTED_MODULE_1__.settingsMiddleware; },
/* harmony export */   "settingsReducer": function() { return /* reexport safe */ _reducer__WEBPACK_IMPORTED_MODULE_2__.settingsReducer; },
/* harmony export */   "SettingsPanel": function() { return /* reexport safe */ _SettingsPanel__WEBPACK_IMPORTED_MODULE_3__.SettingsPanel; }
/* harmony export */ });
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hooks */ "./packages/tgui-panel/settings/hooks.js");
/* harmony import */ var _middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./middleware */ "./packages/tgui-panel/settings/middleware.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducer */ "./packages/tgui-panel/settings/reducer.js");
/* harmony import */ var _SettingsPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SettingsPanel */ "./packages/tgui-panel/settings/SettingsPanel.js");
/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */





/***/ }),

/***/ "./packages/tgui-panel/settings/middleware.js":
/*!****************************************************!*\
  !*** ./packages/tgui-panel/settings/middleware.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "settingsMiddleware": function() { return /* binding */ settingsMiddleware; }
/* harmony export */ });
/* harmony import */ var common_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! common/storage */ "./packages/common/storage.js");
/* harmony import */ var _themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../themes */ "./packages/tgui-panel/themes.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./packages/tgui-panel/settings/actions.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectors */ "./packages/tgui-panel/settings/selectors.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./packages/tgui-panel/settings/constants.js");
/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */






var setGlobalFontSize = function setGlobalFontSize(fontSize) {
  document.documentElement.style.setProperty('font-size', fontSize + 'px');
  document.body.style.setProperty('font-size', fontSize + 'px');
};

var setGlobalFontFamily = function setGlobalFontFamily(fontFamily) {
  if (fontFamily === _constants__WEBPACK_IMPORTED_MODULE_4__.FONTS_DISABLED) fontFamily = null;
  document.documentElement.style.setProperty('font-family', fontFamily);
  document.body.style.setProperty('font-family', fontFamily);
};

var settingsMiddleware = function settingsMiddleware(store) {
  var initialized = false;
  return function (next) {
    return function (action) {
      var type = action.type,
          payload = action.payload;

      if (!initialized) {
        initialized = true;
        common_storage__WEBPACK_IMPORTED_MODULE_0__.storage.get('panel-settings').then(function (settings) {
          store.dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_2__.loadSettings)(settings));
        });
      }

      if (type === _actions__WEBPACK_IMPORTED_MODULE_2__.updateSettings.type || type === _actions__WEBPACK_IMPORTED_MODULE_2__.loadSettings.type) {
        // Set client theme
        var theme = payload === null || payload === void 0 ? void 0 : payload.theme;

        if (theme) {
          (0,_themes__WEBPACK_IMPORTED_MODULE_1__.setClientTheme)(theme);
        } // Pass action to get an updated state


        next(action);
        var settings = (0,_selectors__WEBPACK_IMPORTED_MODULE_3__.selectSettings)(store.getState()); // Update global UI font size

        setGlobalFontSize(settings.fontSize);
        setGlobalFontFamily(settings.fontFamily); // Save settings to the web storage

        common_storage__WEBPACK_IMPORTED_MODULE_0__.storage.set('panel-settings', settings);
        return;
      }

      return next(action);
    };
  };
};

/***/ }),

/***/ "./packages/tgui-panel/settings/reducer.js":
/*!*************************************************!*\
  !*** ./packages/tgui-panel/settings/reducer.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "settingsReducer": function() { return /* binding */ settingsReducer; }
/* harmony export */ });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./packages/tgui-panel/settings/actions.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./packages/tgui-panel/settings/constants.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */


var initialState = {
  version: 1,
  fontSize: 13,
  fontFamily: _constants__WEBPACK_IMPORTED_MODULE_1__.FONTS[0],
  lineHeight: 1.2,
  theme: 'light',
  adminMusicVolume: 0.5,
  highlightText: '',
  highlightColor: '#ffdd44',
  view: {
    visible: false,
    activeTab: _constants__WEBPACK_IMPORTED_MODULE_1__.SETTINGS_TABS[0].id
  }
};
var settingsReducer = function settingsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var type = action.type,
      payload = action.payload;

  if (type === _actions__WEBPACK_IMPORTED_MODULE_0__.updateSettings.type) {
    return _objectSpread(_objectSpread({}, state), payload);
  }

  if (type === _actions__WEBPACK_IMPORTED_MODULE_0__.loadSettings.type) {
    // Validate version and/or migrate state
    if (!(payload !== null && payload !== void 0 && payload.version)) {
      return state;
    }

    delete payload.view;
    return _objectSpread(_objectSpread({}, state), payload);
  }

  if (type === _actions__WEBPACK_IMPORTED_MODULE_0__.toggleSettings.type) {
    return _objectSpread(_objectSpread({}, state), {}, {
      view: _objectSpread(_objectSpread({}, state.view), {}, {
        visible: !state.view.visible
      })
    });
  }

  if (type === _actions__WEBPACK_IMPORTED_MODULE_0__.openChatSettings.type) {
    return _objectSpread(_objectSpread({}, state), {}, {
      view: _objectSpread(_objectSpread({}, state.view), {}, {
        visible: true,
        activeTab: 'chatPage'
      })
    });
  }

  if (type === _actions__WEBPACK_IMPORTED_MODULE_0__.changeSettingsTab.type) {
    var tabId = payload.tabId;
    return _objectSpread(_objectSpread({}, state), {}, {
      view: _objectSpread(_objectSpread({}, state.view), {}, {
        activeTab: tabId
      })
    });
  }

  return state;
};

/***/ }),

/***/ "./packages/tgui-panel/settings/selectors.js":
/*!***************************************************!*\
  !*** ./packages/tgui-panel/settings/selectors.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectSettings": function() { return /* binding */ selectSettings; },
/* harmony export */   "selectActiveTab": function() { return /* binding */ selectActiveTab; }
/* harmony export */ });
/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */
var selectSettings = function selectSettings(state) {
  return state.settings;
};
var selectActiveTab = function selectActiveTab(state) {
  return state.settings.view.activeTab;
};

/***/ }),

/***/ "./packages/tgui-panel/telemetry.js":
/*!******************************************!*\
  !*** ./packages/tgui-panel/telemetry.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "telemetryMiddleware": function() { return /* binding */ telemetryMiddleware; }
/* harmony export */ });
/* harmony import */ var tgui_backend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tgui/backend */ "./packages/tgui/backend.ts");
/* harmony import */ var common_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/storage */ "./packages/common/storage.js");
/* harmony import */ var tgui_logging__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tgui/logging */ "./packages/tgui/logging.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */



var logger = (0,tgui_logging__WEBPACK_IMPORTED_MODULE_2__.createLogger)('telemetry');
var MAX_CONNECTIONS_STORED = 10;

var connectionsMatch = function connectionsMatch(a, b) {
  return a.ckey === b.ckey && a.address === b.address && a.computer_id === b.computer_id;
};

var telemetryMiddleware = function telemetryMiddleware(store) {
  var telemetry;
  var wasRequestedWithPayload;
  return function (next) {
    return function (action) {
      var type = action.type,
          payload = action.payload; // Handle telemetry requests

      if (type === 'telemetry/request') {
        // Defer telemetry request until we have the actual telemetry
        if (!telemetry) {
          logger.debug('deferred');
          wasRequestedWithPayload = payload;
          return;
        }

        logger.debug('sending');
        var limits = (payload === null || payload === void 0 ? void 0 : payload.limits) || {}; // Trim connections according to the server limit

        var connections = telemetry.connections.slice(0, limits.connections);
        (0,tgui_backend__WEBPACK_IMPORTED_MODULE_0__.sendMessage)({
          type: 'telemetry',
          payload: {
            connections: connections
          }
        });
        return;
      } // Keep telemetry up to date


      if (type === 'backend/update') {
        next(action);

        _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function () {
          function _callee() {
            var _payload$config;

            var client, telemetryMutated, duplicateConnection, _payload;

            return regeneratorRuntime.wrap(function () {
              function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      // Extract client data
                      client = payload === null || payload === void 0 ? void 0 : (_payload$config = payload.config) === null || _payload$config === void 0 ? void 0 : _payload$config.client;

                      if (client) {
                        _context.next = 4;
                        break;
                      }

                      logger.error('backend/update payload is missing client data!');
                      return _context.abrupt("return");

                    case 4:
                      if (telemetry) {
                        _context.next = 13;
                        break;
                      }

                      _context.next = 7;
                      return common_storage__WEBPACK_IMPORTED_MODULE_1__.storage.get('telemetry');

                    case 7:
                      _context.t0 = _context.sent;

                      if (_context.t0) {
                        _context.next = 10;
                        break;
                      }

                      _context.t0 = {};

                    case 10:
                      telemetry = _context.t0;

                      if (!telemetry.connections) {
                        telemetry.connections = [];
                      }

                      logger.debug('retrieved telemetry from storage', telemetry);

                    case 13:
                      // Append a connection record
                      telemetryMutated = false;
                      duplicateConnection = telemetry.connections.find(function (conn) {
                        return connectionsMatch(conn, client);
                      });

                      if (!duplicateConnection) {
                        telemetryMutated = true;
                        telemetry.connections.unshift(client);

                        if (telemetry.connections.length > MAX_CONNECTIONS_STORED) {
                          telemetry.connections.pop();
                        }
                      } // Save telemetry


                      if (telemetryMutated) {
                        logger.debug('saving telemetry to storage', telemetry);
                        common_storage__WEBPACK_IMPORTED_MODULE_1__.storage.set('telemetry', telemetry);
                      } // Continue deferred telemetry requests


                      if (wasRequestedWithPayload) {
                        _payload = wasRequestedWithPayload;
                        wasRequestedWithPayload = null;
                        store.dispatch({
                          type: 'telemetry/request',
                          payload: _payload
                        });
                      }

                    case 18:
                    case "end":
                      return _context.stop();
                  }
                }
              }

              return _callee$;
            }(), _callee);
          }

          return _callee;
        }()))();

        return;
      }

      return next(action);
    };
  };
};

/***/ }),

/***/ "./packages/tgui-panel/themes.js":
/*!***************************************!*\
  !*** ./packages/tgui-panel/themes.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "THEMES": function() { return /* binding */ THEMES; },
/* harmony export */   "setClientTheme": function() { return /* binding */ setClientTheme; }
/* harmony export */ });
/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */
var THEMES = ['light', 'dark'];
var COLOR_DARK_BG = '#202020';
var COLOR_DARK_BG_DARKER = '#171717';
var COLOR_DARK_TEXT = '#a4bad6';
var setClientThemeTimer = null;
/**
 * Darkmode preference, originally by Kmc2000.
 *
 * This lets you switch client themes by using winset.
 *
 * If you change ANYTHING in interface/skin.dmf you need to change it here.
 *
 * There's no way round it. We're essentially changing the skin by hand.
 * It's painful but it works, and is the way Lummox suggested.
 */

var setClientTheme = function setClientTheme(name) {
  // Transmit once for fast updates and again in a little while in case we won
  // the race against statbrowser init.
  clearInterval(setClientThemeTimer);
  Byond.command(".output statbrowser:set_theme ".concat(name));
  setClientThemeTimer = setTimeout(function () {
    Byond.command(".output statbrowser:set_theme ".concat(name));
  }, 1500);

  if (name === 'light') {
    return Byond.winset({
      // Main windows
      'infowindow.background-color': 'none',
      'infowindow.text-color': '#000000',
      'info.background-color': 'none',
      'info.text-color': '#000000',
      'browseroutput.background-color': 'none',
      'browseroutput.text-color': '#000000',
      'outputwindow.background-color': 'none',
      'outputwindow.text-color': '#000000',
      'mainwindow.background-color': 'none',
      'split.background-color': 'none',
      // Buttons
      'changelog.background-color': 'none',
      'changelog.text-color': '#000000',
      'rules.background-color': 'none',
      'rules.text-color': '#000000',
      'wiki.background-color': 'none',
      'wiki.text-color': '#000000',
      'forum.background-color': 'none',
      'forum.text-color': '#000000',
      'github.background-color': 'none',
      'github.text-color': '#000000',
      'report-issue.background-color': 'none',
      'report-issue.text-color': '#000000',
      // Status and verb tabs
      'output.background-color': 'none',
      'output.text-color': '#000000',
      'statwindow.background-color': 'none',
      'statwindow.text-color': '#000000',
      'stat.background-color': '#FFFFFF',
      'stat.tab-background-color': 'none',
      'stat.text-color': '#000000',
      'stat.tab-text-color': '#000000',
      'stat.prefix-color': '#000000',
      'stat.suffix-color': '#000000',
      // Say, OOC, me Buttons etc.
      'saybutton.background-color': 'none',
      'saybutton.text-color': '#000000',
      'oocbutton.background-color': 'none',
      'oocbutton.text-color': '#000000',
      'mebutton.background-color': 'none',
      'mebutton.text-color': '#000000',
      'asset_cache_browser.background-color': 'none',
      'asset_cache_browser.text-color': '#000000',
      'tooltip.background-color': 'none',
      'tooltip.text-color': '#000000'
    });
  }

  if (name === 'dark') {
    Byond.winset({
      // Main windows
      'infowindow.background-color': COLOR_DARK_BG,
      'infowindow.text-color': COLOR_DARK_TEXT,
      'info.background-color': COLOR_DARK_BG,
      'info.text-color': COLOR_DARK_TEXT,
      'browseroutput.background-color': COLOR_DARK_BG,
      'browseroutput.text-color': COLOR_DARK_TEXT,
      'outputwindow.background-color': COLOR_DARK_BG,
      'outputwindow.text-color': COLOR_DARK_TEXT,
      'mainwindow.background-color': COLOR_DARK_BG,
      'split.background-color': COLOR_DARK_BG,
      // Buttons
      'changelog.background-color': '#494949',
      'changelog.text-color': COLOR_DARK_TEXT,
      'rules.background-color': '#494949',
      'rules.text-color': COLOR_DARK_TEXT,
      'wiki.background-color': '#494949',
      'wiki.text-color': COLOR_DARK_TEXT,
      'forum.background-color': '#494949',
      'forum.text-color': COLOR_DARK_TEXT,
      'github.background-color': '#3a3a3a',
      'github.text-color': COLOR_DARK_TEXT,
      'report-issue.background-color': '#492020',
      'report-issue.text-color': COLOR_DARK_TEXT,
      // Status and verb tabs
      'output.background-color': COLOR_DARK_BG_DARKER,
      'output.text-color': COLOR_DARK_TEXT,
      'statwindow.background-color': COLOR_DARK_BG_DARKER,
      'statwindow.text-color': COLOR_DARK_TEXT,
      'stat.background-color': COLOR_DARK_BG_DARKER,
      'stat.tab-background-color': COLOR_DARK_BG,
      'stat.text-color': COLOR_DARK_TEXT,
      'stat.tab-text-color': COLOR_DARK_TEXT,
      'stat.prefix-color': COLOR_DARK_TEXT,
      'stat.suffix-color': COLOR_DARK_TEXT,
      // Say, OOC, me Buttons etc.
      'saybutton.background-color': COLOR_DARK_BG,
      'saybutton.text-color': COLOR_DARK_TEXT,
      'oocbutton.background-color': COLOR_DARK_BG,
      'oocbutton.text-color': COLOR_DARK_TEXT,
      'mebutton.background-color': COLOR_DARK_BG,
      'mebutton.text-color': COLOR_DARK_TEXT,
      'asset_cache_browser.background-color': COLOR_DARK_BG,
      'asset_cache_browser.text-color': COLOR_DARK_TEXT,
      'tooltip.background-color': COLOR_DARK_BG,
      'tooltip.text-color': COLOR_DARK_TEXT
    });
  }
};

/***/ }),

/***/ "./packages/tgui-panel/styles/main.scss":
/*!**********************************************!*\
  !*** ./packages/tgui-panel/styles/main.scss ***!
  \**********************************************/
/***/ (function() {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/tgui-panel/styles/themes/light.scss":
/*!******************************************************!*\
  !*** ./packages/tgui-panel/styles/themes/light.scss ***!
  \******************************************************/
/***/ (function() {

// extracted by mini-css-extract-plugin

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"tgui-panel": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			__webpack_require__.O();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunktgui_standalone"] = self["webpackChunktgui_standalone"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["tgui-common"], function() { return __webpack_require__("./packages/tgui-polyfill/index.js"); })
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["tgui-common"], function() { return __webpack_require__("./packages/tgui-panel/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=tgui-panel.bundle.js.map