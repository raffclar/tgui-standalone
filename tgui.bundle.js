/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./packages/tgui/index.js":
/*!********************************!*\
  !*** ./packages/tgui/index.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var inferno__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inferno */ "./.yarn/cache/inferno-npm-7.4.8-f828cb79a7-dd2af1493c.zip/node_modules/inferno/index.esm.js");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/main.scss */ "./packages/tgui/styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_themes_abductor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/themes/abductor.scss */ "./packages/tgui/styles/themes/abductor.scss");
/* harmony import */ var _styles_themes_abductor_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_themes_abductor_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_themes_cardtable_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/themes/cardtable.scss */ "./packages/tgui/styles/themes/cardtable.scss");
/* harmony import */ var _styles_themes_cardtable_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_themes_cardtable_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_themes_hackerman_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/themes/hackerman.scss */ "./packages/tgui/styles/themes/hackerman.scss");
/* harmony import */ var _styles_themes_hackerman_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_themes_hackerman_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_themes_malfunction_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/themes/malfunction.scss */ "./packages/tgui/styles/themes/malfunction.scss");
/* harmony import */ var _styles_themes_malfunction_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_themes_malfunction_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_themes_neutral_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/themes/neutral.scss */ "./packages/tgui/styles/themes/neutral.scss");
/* harmony import */ var _styles_themes_neutral_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_themes_neutral_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_themes_ntos_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/themes/ntos.scss */ "./packages/tgui/styles/themes/ntos.scss");
/* harmony import */ var _styles_themes_ntos_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_themes_ntos_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_themes_paper_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/themes/paper.scss */ "./packages/tgui/styles/themes/paper.scss");
/* harmony import */ var _styles_themes_paper_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_themes_paper_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styles_themes_retro_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/themes/retro.scss */ "./packages/tgui/styles/themes/retro.scss");
/* harmony import */ var _styles_themes_retro_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_themes_retro_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _styles_themes_syndicate_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles/themes/syndicate.scss */ "./packages/tgui/styles/themes/syndicate.scss");
/* harmony import */ var _styles_themes_syndicate_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_themes_syndicate_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _styles_themes_wizard_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./styles/themes/wizard.scss */ "./packages/tgui/styles/themes/wizard.scss");
/* harmony import */ var _styles_themes_wizard_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_themes_wizard_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var common_perf__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! common/perf */ "./packages/common/perf.js");
/* harmony import */ var tgui_dev_server_link_client__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tgui-dev-server/link/client */ "./packages/tgui-dev-server/link/client.js");
/* harmony import */ var _hotkeys__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./hotkeys */ "./packages/tgui/hotkeys.ts");
/* harmony import */ var _links__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./links */ "./packages/tgui/links.js");
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./renderer */ "./packages/tgui/renderer.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./store */ "./packages/tgui/store.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./events */ "./packages/tgui/events.js");
var _window$performance, _window$performance$t;



/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */
// Themes


















common_perf__WEBPACK_IMPORTED_MODULE_12__.perf.mark('inception', (_window$performance = window.performance) === null || _window$performance === void 0 ? void 0 : (_window$performance$t = _window$performance.timing) === null || _window$performance$t === void 0 ? void 0 : _window$performance$t.navigationStart);
common_perf__WEBPACK_IMPORTED_MODULE_12__.perf.mark('init');
var store = (0,_store__WEBPACK_IMPORTED_MODULE_17__.configureStore)();
var renderApp = (0,_renderer__WEBPACK_IMPORTED_MODULE_16__.createRenderer)(function () {
  var _require = __webpack_require__(/*! ./routes */ "./packages/tgui/routes.js"),
      getRoutedComponent = _require.getRoutedComponent;

  var Component = getRoutedComponent(store);
  return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, _store__WEBPACK_IMPORTED_MODULE_17__.StoreProvider, {
    "store": store,
    children: (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, Component)
  });
});

var setupApp = function setupApp() {
  // Delay setup
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupApp);
    return;
  }

  (0,_events__WEBPACK_IMPORTED_MODULE_18__.setupGlobalEvents)();
  (0,_hotkeys__WEBPACK_IMPORTED_MODULE_14__.setupHotKeys)();
  (0,_links__WEBPACK_IMPORTED_MODULE_15__.captureExternalLinks)(); // Subscribe for state updates

  store.subscribe(renderApp); // Dispatch incoming messages

  window.update = function (msg) {
    return store.dispatch(Byond.parseJson(msg));
  }; // Process the early update queue


  while (true) {
    var msg = window.__updateQueue__.shift();

    if (!msg) {
      break;
    }

    window.update(msg);
  } // Enable hot module reloading


  if (false) {}
};

setupApp();

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
/******/ 			"tgui": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["tgui-common"], function() { return __webpack_require__("./packages/tgui/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=tgui.bundle.js.map