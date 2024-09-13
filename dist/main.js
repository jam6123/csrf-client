/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _vercel_analytics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vercel/analytics */ \"./node_modules/@vercel/analytics/dist/index.mjs\");\n\n\n(0,_vercel_analytics__WEBPACK_IMPORTED_MODULE_0__.inject)()\n\n//# sourceURL=webpack://csrf-client/./src/index.js?");

/***/ }),

/***/ "./node_modules/@vercel/analytics/dist/index.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/@vercel/analytics/dist/index.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DEV_SCRIPT_URL: () => (/* binding */ DEV_SCRIPT_URL),\n/* harmony export */   PROD_SCRIPT_URL: () => (/* binding */ PROD_SCRIPT_URL),\n/* harmony export */   \"default\": () => (/* binding */ generic_default),\n/* harmony export */   inject: () => (/* binding */ inject),\n/* harmony export */   pageview: () => (/* binding */ pageview),\n/* harmony export */   track: () => (/* binding */ track)\n/* harmony export */ });\n// package.json\nvar name = \"@vercel/analytics\";\nvar version = \"1.3.1\";\n\n// src/queue.ts\nvar initQueue = () => {\n  if (window.va)\n    return;\n  window.va = function a(...params) {\n    (window.vaq = window.vaq || []).push(params);\n  };\n};\n\n// src/utils.ts\nfunction isBrowser() {\n  return typeof window !== \"undefined\";\n}\nfunction detectEnvironment() {\n  try {\n    const env = \"development\";\n    if (env === \"development\" || env === \"test\") {\n      return \"development\";\n    }\n  } catch (e) {\n  }\n  return \"production\";\n}\nfunction setMode(mode = \"auto\") {\n  if (mode === \"auto\") {\n    window.vam = detectEnvironment();\n    return;\n  }\n  window.vam = mode;\n}\nfunction getMode() {\n  const mode = isBrowser() ? window.vam : detectEnvironment();\n  return mode || \"production\";\n}\nfunction isProduction() {\n  return getMode() === \"production\";\n}\nfunction isDevelopment() {\n  return getMode() === \"development\";\n}\nfunction removeKey(key, { [key]: _, ...rest }) {\n  return rest;\n}\nfunction parseProperties(properties, options) {\n  if (!properties)\n    return void 0;\n  let props = properties;\n  const errorProperties = [];\n  for (const [key, value] of Object.entries(properties)) {\n    if (typeof value === \"object\" && value !== null) {\n      if (options.strip) {\n        props = removeKey(key, props);\n      } else {\n        errorProperties.push(key);\n      }\n    }\n  }\n  if (errorProperties.length > 0 && !options.strip) {\n    throw Error(\n      `The following properties are not valid: ${errorProperties.join(\n        \", \"\n      )}. Only strings, numbers, booleans, and null are allowed.`\n    );\n  }\n  return props;\n}\n\n// src/generic.ts\nvar DEV_SCRIPT_URL = \"https://va.vercel-scripts.com/v1/script.debug.js\";\nvar PROD_SCRIPT_URL = \"/_vercel/insights/script.js\";\nfunction inject(props = {\n  debug: true\n}) {\n  var _a;\n  if (!isBrowser())\n    return;\n  setMode(props.mode);\n  initQueue();\n  if (props.beforeSend) {\n    (_a = window.va) == null ? void 0 : _a.call(window, \"beforeSend\", props.beforeSend);\n  }\n  const src = props.scriptSrc || (isDevelopment() ? DEV_SCRIPT_URL : PROD_SCRIPT_URL);\n  if (document.head.querySelector(`script[src*=\"${src}\"]`))\n    return;\n  const script = document.createElement(\"script\");\n  script.src = src;\n  script.defer = true;\n  script.dataset.sdkn = name + (props.framework ? `/${props.framework}` : \"\");\n  script.dataset.sdkv = version;\n  if (props.disableAutoTrack) {\n    script.dataset.disableAutoTrack = \"1\";\n  }\n  if (props.endpoint) {\n    script.dataset.endpoint = props.endpoint;\n  }\n  if (props.dsn) {\n    script.dataset.dsn = props.dsn;\n  }\n  script.onerror = () => {\n    const errorMessage = isDevelopment() ? \"Please check if any ad blockers are enabled and try again.\" : \"Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.\";\n    console.log(\n      `[Vercel Web Analytics] Failed to load script from ${src}. ${errorMessage}`\n    );\n  };\n  if (isDevelopment() && props.debug === false) {\n    script.dataset.debug = \"false\";\n  }\n  document.head.appendChild(script);\n}\nfunction track(name2, properties, options) {\n  var _a, _b;\n  if (!isBrowser()) {\n    const msg = \"[Vercel Web Analytics] Please import `track` from `@vercel/analytics/server` when using this function in a server environment\";\n    if (isProduction()) {\n      console.warn(msg);\n    } else {\n      throw new Error(msg);\n    }\n    return;\n  }\n  if (!properties) {\n    (_a = window.va) == null ? void 0 : _a.call(window, \"event\", { name: name2, options });\n    return;\n  }\n  try {\n    const props = parseProperties(properties, {\n      strip: isProduction()\n    });\n    (_b = window.va) == null ? void 0 : _b.call(window, \"event\", {\n      name: name2,\n      data: props,\n      options\n    });\n  } catch (err) {\n    if (err instanceof Error && isDevelopment()) {\n      console.error(err);\n    }\n  }\n}\nfunction pageview({ route, path }) {\n  var _a;\n  (_a = window.va) == null ? void 0 : _a.call(window, \"pageview\", {\n    route,\n    path\n  });\n}\nvar generic_default = {\n  inject,\n  track\n};\n\n//# sourceMappingURL=index.mjs.map\n\n//# sourceURL=webpack://csrf-client/./node_modules/@vercel/analytics/dist/index.mjs?");

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;