webpackHotUpdate("index",{

/***/ "./node_modules/_babel-loader@7.1.4@babel-loader/lib/index.js!./node_modules/_vue-loader@15.0.11@vue-loader/lib/index.js??vue-loader-options!./src/components/index.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@7.1.4@babel-loader/lib!./node_modules/_vue-loader@15.0.11@vue-loader/lib??vue-loader-options!./src/components/index.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/_axios@0.18.0@axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\tdata() {\n\t\treturn {\n\t\t\tcarData: [],\n\t\t\tcityWord: []\n\t\t};\n\t},\n\tmethods: {},\n\tmounted() {\n\t\taxios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"/items/list\").then(res => {\n\t\t\tthis.carData = JSON.parse(res.data).data;\n\t\t\tconst carJson = this.carData;\n\t\t\tconst word = [];\n\t\t\tconst newWord = [];\n\t\t\t// 获取代表城市的属性Spelling\n\t\t\tcarJson.map((val, ind) => {\n\t\t\t\tword.push(val.Spelling);\n\t\t\t});\n\t\t\tconsole.log(this.cityWord);\n\t\t\t// 所有的城市字母\n\t\t\tword.map(val => {\n\t\t\t\tnewWord.push(val.slice(0, 1));\n\t\t\t});\n\t\t\t// 城市首字母\n\t\t\tthis.cityWord = new Set(this.newWord); // 对象\n\t\t\t// 转数组\n\n\t\t});\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvaW5kZXgudnVlP2U0MDgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQURBO0FBRUE7QUFGQTtBQUlBLEVBTkE7QUFPQSxZQVBBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFGQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFGQTtBQUdBO0FBQ0EseUNBZkEsQ0FlQTtBQUNBOztBQUdBLEdBbkJBO0FBcUJBO0FBaENBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL19iYWJlbC1sb2FkZXJANy4xLjRAYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4wLjExQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zcmMvY29tcG9uZW50cy9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PGRpdiBjbGFzcz1cImJveFwiPlxyXG5cdFx0PGRpdiBjbGFzcz1cImRhdGFcIiB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gY2FyRGF0YVwiIDprZXk9XCJpbmRleFwiPlxyXG5cdFx0XHQ8cD5BPC9wPlxyXG5cdFx0XHQ8dWw+XHJcblx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0PGRsPlxyXG5cdFx0XHRcdFx0XHQ8ZHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIDpzcmM9XCJpdGVtLkNvdmVyUGhvdG9cIiBhbHQvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2R0PlxyXG5cdFx0XHRcdFx0XHQ8ZGQ+XHJcblx0XHRcdFx0XHRcdFx0e3tpdGVtLk5hbWV9fVxyXG5cdFx0XHRcdFx0XHQ8L2RkPlxyXG5cdFx0XHRcdFx0PC9kbD5cclxuXHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHQ8L3VsPlxyXG5cdFx0PC9kaXY+XHJcblx0PC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcbjxzY3JpcHQ+XHJcblx0aW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Y2FyRGF0YTogW10sXHJcblx0XHRcdFx0Y2l0eVdvcmQ6IFtdXHJcblx0XHRcdH07XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cclxuXHRcdH0sXHJcblx0XHRtb3VudGVkKCkge1xyXG5cdFx0XHRheGlvcy5nZXQoXCIvaXRlbXMvbGlzdFwiKS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0dGhpcy5jYXJEYXRhID0gSlNPTi5wYXJzZShyZXMuZGF0YSkuZGF0YTtcclxuXHRcdFx0XHRjb25zdCBjYXJKc29uID0gdGhpcy5jYXJEYXRhO1xyXG5cdFx0XHRcdGNvbnN0IHdvcmQgPSBbXTtcclxuXHRcdFx0XHRjb25zdCBuZXdXb3JkID0gW11cclxuXHRcdFx0XHQvLyDojrflj5bku6Pooajln47luILnmoTlsZ7mgKdTcGVsbGluZ1xyXG5cdFx0XHRcdGNhckpzb24ubWFwKCh2YWwsIGluZCkgPT4ge1xyXG5cdFx0XHRcdFx0d29yZC5wdXNoKHZhbC5TcGVsbGluZyk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0Y29uc29sZS5sb2codGhpcy5jaXR5V29yZClcclxuXHRcdFx0XHQvLyDmiYDmnInnmoTln47luILlrZfmr41cclxuXHRcdFx0XHR3b3JkLm1hcCh2YWw9PntcclxuXHRcdFx0XHRcdG5ld1dvcmQucHVzaCh2YWwuc2xpY2UoMCwgMSkpO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0Ly8g5Z+O5biC6aaW5a2X5q+NXHJcblx0XHRcdFx0dGhpcy5jaXR5V29yZD0gbmV3IFNldCh0aGlzLm5ld1dvcmQpOyAvLyDlr7nosaFcclxuXHRcdFx0XHQvLyDovazmlbDnu4RcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fVxyXG5cdH07XHJcbjwvc2NyaXB0PlxyXG48c3R5bGU+XHJcblx0LmJveCB7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGhlaWdodDogMTAwJTtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdH1cclxuXHRcclxuXHRwIHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiAwLjJyZW07XHJcblx0XHRsaW5lLWhlaWdodDogMC4ycmVtO1xyXG5cdFx0YmFja2dyb3VuZDogI2Y0ZjRmNDtcclxuXHRcdHBhZGRpbmctbGVmdDogMC4wNXJlbTtcclxuXHR9XHJcblx0XHJcblx0dWwge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IDAuNXJlbTtcclxuXHR9XHJcblx0XHJcblx0dWwgbGkge1xyXG5cdFx0d2lkdGg6IDk1JTtcclxuXHRcdGhlaWdodDogMTAwJTtcclxuXHRcdG1hcmdpbjogMCBhdXRvO1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XHJcblx0fVxyXG5cdFxyXG5cdHVsIGxpIGRsIHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiAwLjVyZW07XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcblx0XHJcblx0dWwgbGkgZGwgZHQgaW1nIHtcclxuXHRcdHdpZHRoOiAwLjQ1cmVtO1xyXG5cdFx0aGVpZ2h0OiBhdXRvO1xyXG5cdFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHR9XHJcblx0XHJcblx0dWwgbGkgZGwgZGQge1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDAuMnJlbTtcclxuXHR9XHJcbjwvc3R5bGU+Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/_babel-loader@7.1.4@babel-loader/lib/index.js!./node_modules/_vue-loader@15.0.11@vue-loader/lib/index.js??vue-loader-options!./src/components/index.vue?vue&type=script&lang=js\n");

/***/ })

})