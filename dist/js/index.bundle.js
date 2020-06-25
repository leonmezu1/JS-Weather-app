/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_checkResult__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/checkResult */ \"./src/modules/checkResult.js\");\n\nObject(_modules_checkResult__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/checkResult.js":
/*!************************************!*\
  !*** ./src/modules/checkResult.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ \"./src/modules/logic.js\");\n/* eslint-disable prefer-destructuring */\n\nconst form = document.querySelector('.top-banner form');\nconst input = document.querySelector('.top-banner input');\nconst msg = document.querySelector('.top-banner .msg');\nconst list = document.querySelector('.ajax-section .cities');\n\nconst validateInput = () => {\n  form.addEventListener('submit', e => {\n    e.preventDefault();\n    let inputVal = input.value;\n    const listItems = list.querySelectorAll('.ajax-section .city');\n    const listItemsArray = Array.from(listItems);\n\n    if (listItemsArray.length > 0) {\n      const filteredArray = listItemsArray.filter(el => {\n        let content = '';\n\n        if (inputVal.includes(',')) {\n          if (inputVal.split(',')[1].length > 2) {\n            inputVal = inputVal.split(',')[0];\n            content = el.querySelector('.city-name span').textContent.toLowerCase();\n          } else {\n            content = el.querySelector('.city-name').dataset.name.toLowerCase();\n          }\n        } else {\n          content = el.querySelector('.city-name span').textContent.toLowerCase();\n        }\n\n        return content === inputVal.toLowerCase();\n      });\n\n      if (filteredArray.length > 0) {\n        msg.textContent = `You already know the weather for ${filteredArray[0].querySelector('.city-name span').textContent} ...otherwise be more specific by providing the country code as well 😉`;\n        form.reset();\n        input.focus();\n      }\n    }\n\n    Object(_logic__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(inputVal);\n    msg.textContent = '';\n    form.reset();\n    input.focus();\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (validateInput);\n\n//# sourceURL=webpack:///./src/modules/checkResult.js?");

/***/ }),

/***/ "./src/modules/logic.js":
/*!******************************!*\
  !*** ./src/modules/logic.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _renderResult__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderResult */ \"./src/modules/renderResult.js\");\n\nconst msg = document.querySelector('.top-banner .msg');\nconst apiKey = 'b9d786489eff73f5cec702d51ff7bba6';\n\nconst fetchData = inputVal => {\n  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;\n  fetch(url).then(response => response.json()).then(data => {\n    const {\n      main,\n      name,\n      sys,\n      weather\n    } = data;\n    const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0].icon}.svg`;\n    Object(_renderResult__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(main, name, sys, weather, icon);\n  }).catch(() => {\n    msg.textContent = 'Please search for a valid city 😩';\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (fetchData);\n\n//# sourceURL=webpack:///./src/modules/logic.js?");

/***/ }),

/***/ "./src/modules/renderResult.js":
/*!*************************************!*\
  !*** ./src/modules/renderResult.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst list = document.querySelector('.ajax-section .cities');\n\nconst renderResult = (main, name, sys, weather, icon) => {\n  const li = document.createElement('li');\n  li.classList.add('city');\n  const markup = `\n    <h2 class=\"city-name\" data-name=\"${name},${sys.country}\">\n      <span>${name}</span>\n      <sup>${sys.country}</sup>\n    </h2>\n    <div class=\"city-temp\">${Math.round(main.temp)}<sup>°C</sup></div>\n    <figure>\n      <img class=\"city-icon\" src=\"${icon}\" alt=\"${weather[0].description}\">\n      <figcaption>${weather[0].description}</figcaption>\n    </figure>\n  `;\n  li.innerHTML = markup;\n  list.appendChild(li);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderResult);\n\n//# sourceURL=webpack:///./src/modules/renderResult.js?");

/***/ })

/******/ });