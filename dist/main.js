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

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"requestWeatherData\": () => (/* binding */ requestWeatherData)\n/* harmony export */ });\nconst API_KEY = 'd644270adbe9c25e44edbe1e955d3bd4';\n\nasync function requestWeatherData (city) {\n  try {\n    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=\"metric\"&appid=${API_KEY}`, { mode: 'cors' });\n    return response.json();\n  } catch (error) {\n    console.log('Bad search');\n  }\n}\n\n\n//# sourceURL=webpack:///./src/api.js?");

/***/ }),

/***/ "./src/convert.js":
/*!************************!*\
  !*** ./src/convert.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"kelvinToFahr\": () => (/* binding */ kelvinToFahr),\n/* harmony export */   \"kelvinToCelsius\": () => (/* binding */ kelvinToCelsius)\n/* harmony export */ });\nfunction kelvinToFahr (temp) {\n  return (9 / 5) * (temp - 273) + 32;\n}\n\nfunction kelvinToCelsius (temp) {\n  return temp - 273;\n}\n\n\n\n\n//# sourceURL=webpack:///./src/convert.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./src/api.js\");\n/* harmony import */ var _convert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./convert */ \"./src/convert.js\");\n\n\n\nlet currentCityData = null;\nlet currentTempSetting = 'C';\nconst converters = {\n  C: _convert__WEBPACK_IMPORTED_MODULE_1__.kelvinToCelsius,\n  F: _convert__WEBPACK_IMPORTED_MODULE_1__.kelvinToFahr\n};\n\nconst searchForm = document.getElementById('search-form');\nconst searchBar = document.getElementById('search-bar');\n\nsearchForm.addEventListener('submit', function () {\n  const searchText = searchBar.value;\n  searchBar.value = '';\n\n  const response = (0,_api__WEBPACK_IMPORTED_MODULE_0__.requestWeatherData)(searchText);\n  response.then(data => {\n    currentCityData = data;\n    updateWeatherData(data, converters[currentTempSetting]);\n  });\n});\n\nconst tempToggle = document.getElementById('temp-toggle');\ntempToggle.addEventListener('click', function () {\n  currentTempSetting = currentTempSetting === 'C' ? 'F' : 'C';\n  tempToggle.innerHTML = currentTempSetting;\n  updateWeatherData(currentCityData, converters[currentTempSetting]);\n});\n\nfunction updateWeatherData (data, convert) {\n  const cityName = document.getElementById('city-name');\n  cityName.innerHTML = `${data.name}, ${data.sys.country}`;\n\n  const mainTemp = document.getElementById('main-temp');\n  mainTemp.innerHTML = `${Math.round(convert(data.main.temp))}°${currentTempSetting}`;\n\n  const weatherMain = document.getElementById('weather-main');\n  weatherMain.innerHTML = data.weather[0].main;\n\n  const weatherDesc = document.getElementById('weather-desc');\n  weatherDesc.innerHTML = data.weather[0].description;\n\n  const highTemp = document.getElementById('high-temp');\n  highTemp.innerHTML = `High: ${Math.round(convert(data.main.temp_max))}°${currentTempSetting}`;\n\n  const lowTemp = document.getElementById('low-temp');\n  lowTemp.innerHTML = `Low: ${Math.round(convert(data.main.temp_min))}°${currentTempSetting}`;\n\n  const feelsLike = document.getElementById('feels-like');\n  feelsLike.innerHTML = `Feel: ${Math.round(convert(data.main.feels_like))}°${currentTempSetting}`;\n\n  const humidity = document.getElementById('humidity');\n  humidity.innerHTML = `Humidity: ${data.main.humidity}%`;\n}\n\n\n//# sourceURL=webpack:///./src/index.js?");

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