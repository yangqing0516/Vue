webpackHotUpdate("index",{

/***/ "./node_modules/_babel-loader@7.1.4@babel-loader/lib/index.js!./node_modules/_vue-loader@15.0.11@vue-loader/lib/index.js??vue-loader-options!./src/components/index.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@7.1.4@babel-loader/lib!./node_modules/_vue-loader@15.0.11@vue-loader/lib??vue-loader-options!./src/components/index.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/_axios@0.18.0@axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\tdata() {\n\t\treturn {\n\t\t\tcarData: [],\n\t\t\tcityWord: [],\n\t\t\tnewCityWord: []\n\t\t};\n\t},\n\tmethods: {\n\t\tgetData() {\n\t\t\taxios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"/items/list\").then(res => {\n\t\t\t\t// 返回值是一个promise对象，使用then方法来调用\n\t\t\t\tthis.carData = JSON.parse(res.data).data;\n\t\t\t\tconst carJson = this.carData;\n\t\t\t\tconst word = [];\n\t\t\t\tconst newWord = [];\n\t\t\t\t// 获取代表城市的属性Spelling\n\t\t\t\tcarJson.map((val, ind) => {\n\t\t\t\t\tword.push(val.Spelling);\n\t\t\t\t});\n\t\t\t\t// 所有的城市字母\n\t\t\t\tword.map(val => {\n\t\t\t\t\tnewWord.push(val.slice(0, 1));\n\t\t\t\t});\n\t\t\t\t// 城市首字母\n\t\t\t\tthis.cityWord = new Set(newWord);\n\t\t\t\t// 转数组\n\t\t\t\tthis.newCityWord = [...this.cityWord];\n\t\t\t\tconsole.log(this.newCityWord);\n\t\t\t});\n\t\t}\n\t},\n\tmounted() {\n\t\tthis.getData();\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvaW5kZXgudnVlP2U0MDgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQURBO0FBRUEsZUFGQTtBQUdBO0FBSEE7QUFLQSxFQVBBO0FBUUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBRkE7QUFHQTtBQUNBO0FBQ0E7QUFDQSxLQUZBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBbEJBO0FBbUJBO0FBckJBLEVBUkE7QUErQkE7QUFDQTtBQUNBO0FBakNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL19iYWJlbC1sb2FkZXJANy4xLjRAYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4wLjExQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zcmMvY29tcG9uZW50cy9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PGRpdiBjbGFzcz1cImJveFwiPlxyXG5cdFx0PGRpdiBjbGFzcz1cImRhdGFcIiB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gY2FyRGF0YVwiIDprZXk9XCJpbmRleFwiPlxyXG5cdFx0XHQ8cD5BPC9wPlxyXG5cdFx0XHQ8dWw+XHJcblx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0PGRsPlxyXG5cdFx0XHRcdFx0XHQ8ZHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIDpzcmM9XCJpdGVtLkNvdmVyUGhvdG9cIiBhbHQvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2R0PlxyXG5cdFx0XHRcdFx0XHQ8ZGQ+XHJcblx0XHRcdFx0XHRcdFx0e3tpdGVtLk5hbWV9fVxyXG5cdFx0XHRcdFx0XHQ8L2RkPlxyXG5cdFx0XHRcdFx0PC9kbD5cclxuXHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHQ8L3VsPlxyXG5cdFx0PC9kaXY+XHJcblx0XHQ8ZGl2IGNsYXNzPVwicmlnaHRXb3JkXCI+XHJcblx0XHRcdDxhIGhyZWY9XCJcIiB2LWZvcj1cIndvcmQgaW4gbmV3Q2l0eVdvcmRcIj57e3dvcmR9fTwvYT5cclxuXHRcdDwvZGl2PlxyXG5cdDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGNhckRhdGE6IFtdLFxyXG5cdFx0XHRcdGNpdHlXb3JkOiBbXSxcclxuXHRcdFx0XHRuZXdDaXR5V29yZDogW11cclxuXHRcdFx0fTtcclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdGdldERhdGEoKSB7XHJcblx0XHRcdFx0YXhpb3MuZ2V0KFwiL2l0ZW1zL2xpc3RcIikudGhlbihyZXMgPT4geyAvLyDov5Tlm57lgLzmmK/kuIDkuKpwcm9taXNl5a+56LGh77yM5L2/55SodGhlbuaWueazleadpeiwg+eUqFxyXG5cdFx0XHRcdFx0dGhpcy5jYXJEYXRhID0gSlNPTi5wYXJzZShyZXMuZGF0YSkuZGF0YTtcclxuXHRcdFx0XHRcdGNvbnN0IGNhckpzb24gPSB0aGlzLmNhckRhdGE7XHJcblx0XHRcdFx0XHRjb25zdCB3b3JkID0gW107XHJcblx0XHRcdFx0XHRjb25zdCBuZXdXb3JkID0gW107XHJcblx0XHRcdFx0XHQvLyDojrflj5bku6Pooajln47luILnmoTlsZ7mgKdTcGVsbGluZ1xyXG5cdFx0XHRcdFx0Y2FySnNvbi5tYXAoKHZhbCwgaW5kKSA9PiB7XHJcblx0XHRcdFx0XHRcdHdvcmQucHVzaCh2YWwuU3BlbGxpbmcpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHQvLyDmiYDmnInnmoTln47luILlrZfmr41cclxuXHRcdFx0XHRcdHdvcmQubWFwKHZhbCA9PiB7XHJcblx0XHRcdFx0XHRcdG5ld1dvcmQucHVzaCh2YWwuc2xpY2UoMCwgMSkpO1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdC8vIOWfjuW4gummluWtl+avjVxyXG5cdFx0XHRcdFx0dGhpcy5jaXR5V29yZCA9IG5ldyBTZXQobmV3V29yZCk7XHJcblx0XHRcdFx0XHQvLyDovazmlbDnu4RcclxuXHRcdFx0XHRcdHRoaXMubmV3Q2l0eVdvcmQgPSBbLi4udGhpcy5jaXR5V29yZF07XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyh0aGlzLm5ld0NpdHlXb3JkKVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0bW91bnRlZCgpIHtcclxuXHRcdFx0dGhpcy5nZXREYXRhKClcclxuXHRcdH1cclxuXHR9O1xyXG48L3NjcmlwdD5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHQuYm94IHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0fVxyXG5cdFxyXG5cdHAge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IDAuMnJlbTtcclxuXHRcdGxpbmUtaGVpZ2h0OiAwLjJyZW07XHJcblx0XHRiYWNrZ3JvdW5kOiAjZjRmNGY0O1xyXG5cdFx0cGFkZGluZy1sZWZ0OiAwLjA1cmVtO1xyXG5cdH1cclxuXHRcclxuXHR1bCB7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGhlaWdodDogMC41cmVtO1xyXG5cdH1cclxuXHRcclxuXHR1bCBsaSB7XHJcblx0XHR3aWR0aDogOTUlO1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0bWFyZ2luOiAwIGF1dG87XHJcblx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcclxuXHR9XHJcblx0XHJcblx0dWwgbGkgZGwge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IDAuNXJlbTtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHRcclxuXHR1bCBsaSBkbCBkdCBpbWcge1xyXG5cdFx0d2lkdGg6IDAuNDVyZW07XHJcblx0XHRoZWlnaHQ6IGF1dG87XHJcblx0XHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG5cdH1cclxuXHRcclxuXHR1bCBsaSBkbCBkZCB7XHJcblx0XHRtYXJnaW4tbGVmdDogMC4ycmVtO1xyXG5cdH1cclxuXHRcclxuXHQucmlnaHRXb3JkIHtcclxuXHRcdHdpZHRoOiAuMTRyZW07XHJcblx0XHRoZWlnaHQ6IDMuMzZyZW07XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdHJpZ2h0OiAuMDJyZW07XHJcblx0XHR0b3A6LjY0cmVtO1xyXG5cdFx0bWFyZ2luOiBhdXRvO1xyXG5cdH1cclxuXHRcclxuXHQucmlnaHRXb3JkIGEge1xyXG5cdFx0Zm9udC1zaXplOiAuMTJyZW07XHJcblx0fVxyXG48L3N0eWxlPiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/_babel-loader@7.1.4@babel-loader/lib/index.js!./node_modules/_vue-loader@15.0.11@vue-loader/lib/index.js??vue-loader-options!./src/components/index.vue?vue&type=script&lang=js\n");

/***/ })

})