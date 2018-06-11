webpackHotUpdate("index",{

/***/ "./node_modules/_babel-loader@7.1.4@babel-loader/lib/index.js!./node_modules/_vue-loader@15.0.11@vue-loader/lib/index.js??vue-loader-options!./src/components/index.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@7.1.4@babel-loader/lib!./node_modules/_vue-loader@15.0.11@vue-loader/lib??vue-loader-options!./src/components/index.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/_axios@0.18.0@axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\tdata() {\n\t\treturn {\n\t\t\tcarData: [],\n\t\t\tcityWord: [],\n\t\t\tnewCityWord: []\n\t\t};\n\t},\n\tmethods: {\n\t\tgetData() {\n\t\t\taxios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"/items/list\").then(res => {\n\t\t\t\t// 返回值是一个promise对象，使用then方法来调用\n\t\t\t\t// 所有的数据\n\t\t\t\tthis.carData = JSON.parse(res.data).data;\n\t\t\t\tconst cityWord = [];\n\t\t\t\tconst newCityWord = [];\n\t\t\t\tthis.carData.map((val, ind) => {\n\t\t\t\t\tlet firstWord = val.Spelling.slice(0, 1);\n\t\t\t\t\tif (cityWord.indexOf(firstWord) === -1) {\n\t\t\t\t\t\tcityWord.push(firstWord);\n\t\t\t\t\t\tnewCityWord.push({\n\t\t\t\t\t\t\tcityWord: firstWord,\n\t\t\t\t\t\t\tlist: [val]\n\t\t\t\t\t\t});\n\t\t\t\t\t} else {\n\t\t\t\t\t\tnewCityWord.map((value, ind) => {\n\t\t\t\t\t\t\tif (firstWord === value.cityWord) {\n\t\t\t\t\t\t\t\tvalue.list.push(val);\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t});\n\t\t\t\t\t}\n\t\t\t\t});\n\t\t\t\tconsole.log(newCityWord);\n\t\t\t});\n\t\t}\n\t},\n\tmounted() {\n\t\tthis.getData();\n\t\t//res.data.data.forEach((item, index) => {\n\t\t//\t\t\tlet letter = item.Spelling.slice(0, 1);\n\t\t//\t\t\tif(spelling.indexOf(letter) == -1) {\n\t\t//\t\t\t\tspelling.push(letter);\n\t\t//\t\t\t\t// 创建新的首字母对应的对象，并把当前车辆添加到list的第一项\n\t\t//\t\t\t\tdata.push({\n\t\t//\t\t\t\t\tspelling: letter,\n\t\t//\t\t\t\t\tlist: [item]\n\t\t//\t\t\t\t});\n\t\t//\t\t\t} else {\n\t\t//\t\t\t\t// 直接把车辆添加到所对应首字母的list里\n\t\t//\t\t\t\tdata.forEach((value, key) => {\n\t\t//\t\t\t\t\tif(letter == value.spelling) {\n\t\t//\t\t\t\t\t\tvalue.list.push(item);\n\t\t//\t\t\t\t\t}\n\t\t//\t\t\t\t})\n\t\t//\t\t\t}\n\t\t//})\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvaW5kZXgudnVlP2U0MDgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQURBO0FBRUEsZUFGQTtBQUdBO0FBSEE7QUFLQSxFQVBBO0FBUUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFEQTtBQUVBO0FBRkE7QUFJQSxNQU5BLE1BTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSkE7QUFLQTtBQUVBLEtBaEJBO0FBaUJBO0FBQ0EsSUF2QkE7QUF3QkE7QUExQkEsRUFSQTtBQW9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF4REEiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvX2JhYmVsLWxvYWRlckA3LjEuNEBiYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjAuMTFAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NyYy9jb21wb25lbnRzL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8ZGl2IGNsYXNzPVwiYm94XCI+XHJcblx0XHQ8ZGl2IGNsYXNzPVwiZGF0YVwiIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBjYXJEYXRhXCIgOmtleT1cImluZGV4XCI+XHJcblx0XHRcdDxwPkE8L3A+XHJcblx0XHRcdDx1bD5cclxuXHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHQ8ZGw+XHJcblx0XHRcdFx0XHRcdDxkdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgOnNyYz1cIml0ZW0uQ292ZXJQaG90b1wiIGFsdC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZHQ+XHJcblx0XHRcdFx0XHRcdDxkZD5cclxuXHRcdFx0XHRcdFx0XHR7e2l0ZW0uTmFtZX19XHJcblx0XHRcdFx0XHRcdDwvZGQ+XHJcblx0XHRcdFx0XHQ8L2RsPlxyXG5cdFx0XHRcdDwvbGk+XHJcblx0XHRcdDwvdWw+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDxkaXYgY2xhc3M9XCJyaWdodFdvcmRcIj5cclxuXHRcdFx0PGEgaHJlZj1cIlwiIHYtZm9yPVwid29yZCBpbiBuZXdDaXR5V29yZFwiPnt7d29yZH19PC9hPlxyXG5cdFx0PC9kaXY+XHJcblx0PC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcbjxzY3JpcHQ+XHJcblx0aW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Y2FyRGF0YTogW10sXHJcblx0XHRcdFx0Y2l0eVdvcmQ6IFtdLFxyXG5cdFx0XHRcdG5ld0NpdHlXb3JkOiBbXVxyXG5cdFx0XHR9O1xyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0Z2V0RGF0YSgpIHtcclxuXHRcdFx0XHRheGlvcy5nZXQoXCIvaXRlbXMvbGlzdFwiKS50aGVuKHJlcyA9PiB7IC8vIOi/lOWbnuWAvOaYr+S4gOS4qnByb21pc2Xlr7nosaHvvIzkvb/nlKh0aGVu5pa55rOV5p2l6LCD55SoXHJcblx0XHRcdFx0XHQvLyDmiYDmnInnmoTmlbDmja5cclxuXHRcdFx0XHRcdHRoaXMuY2FyRGF0YSA9IEpTT04ucGFyc2UocmVzLmRhdGEpLmRhdGE7XHJcblx0XHRcdFx0XHRjb25zdCBjaXR5V29yZCA9IFtdO1xyXG5cdFx0XHRcdFx0Y29uc3QgbmV3Q2l0eVdvcmQgPSBbXTtcclxuXHRcdFx0XHRcdHRoaXMuY2FyRGF0YS5tYXAoKHZhbCwgaW5kKSA9PiB7XHJcblx0XHRcdFx0XHRcdGxldCBmaXJzdFdvcmQgPSB2YWwuU3BlbGxpbmcuc2xpY2UoMCwgMSk7XHJcblx0XHRcdFx0XHRcdGlmIChjaXR5V29yZC5pbmRleE9mKGZpcnN0V29yZCkgPT09IC0xKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjaXR5V29yZC5wdXNoKGZpcnN0V29yZCk7XHJcblx0XHRcdFx0XHRcdFx0XHRuZXdDaXR5V29yZC5wdXNoKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2l0eVdvcmQ6IGZpcnN0V29yZCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0bGlzdDogW3ZhbF1cclxuXHRcdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0bmV3Q2l0eVdvcmQubWFwKCh2YWx1ZSwgaW5kKT0+e1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKGZpcnN0V29yZCA9PT0gdmFsdWUuY2l0eVdvcmQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWUubGlzdC5wdXNoKHZhbClcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0Y29uc29sZS5sb2cobmV3Q2l0eVdvcmQpXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRtb3VudGVkKCkge1xyXG5cdFx0XHR0aGlzLmdldERhdGEoKTtcclxuXHRcdFx0Ly9yZXMuZGF0YS5kYXRhLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XHJcblx0XHRcdC8vXHRcdFx0bGV0IGxldHRlciA9IGl0ZW0uU3BlbGxpbmcuc2xpY2UoMCwgMSk7XHJcblx0XHRcdC8vXHRcdFx0aWYoc3BlbGxpbmcuaW5kZXhPZihsZXR0ZXIpID09IC0xKSB7XHJcblx0XHRcdC8vXHRcdFx0XHRzcGVsbGluZy5wdXNoKGxldHRlcik7XHJcblx0XHRcdC8vXHRcdFx0XHQvLyDliJvlu7rmlrDnmoTpppblrZfmr43lr7nlupTnmoTlr7nosaHvvIzlubbmiorlvZPliY3ovabovobmt7vliqDliLBsaXN055qE56ys5LiA6aG5XHJcblx0XHRcdC8vXHRcdFx0XHRkYXRhLnB1c2goe1xyXG5cdFx0XHQvL1x0XHRcdFx0XHRzcGVsbGluZzogbGV0dGVyLFxyXG5cdFx0XHQvL1x0XHRcdFx0XHRsaXN0OiBbaXRlbV1cclxuXHRcdFx0Ly9cdFx0XHRcdH0pO1xyXG5cdFx0XHQvL1x0XHRcdH0gZWxzZSB7XHJcblx0XHRcdC8vXHRcdFx0XHQvLyDnm7TmjqXmiorovabovobmt7vliqDliLDmiYDlr7nlupTpppblrZfmr43nmoRsaXN06YeMXHJcblx0XHRcdC8vXHRcdFx0XHRkYXRhLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcclxuXHRcdFx0Ly9cdFx0XHRcdFx0aWYobGV0dGVyID09IHZhbHVlLnNwZWxsaW5nKSB7XHJcblx0XHRcdC8vXHRcdFx0XHRcdFx0dmFsdWUubGlzdC5wdXNoKGl0ZW0pO1xyXG5cdFx0XHQvL1x0XHRcdFx0XHR9XHJcblx0XHRcdC8vXHRcdFx0XHR9KVxyXG5cdFx0XHQvL1x0XHRcdH1cclxuXHRcdFx0Ly99KVxyXG5cdFx0fVxyXG5cdH07XHJcbjwvc2NyaXB0PlxyXG48c3R5bGUgc2NvcGVkPlxyXG5cdC5ib3gge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHR9XHJcblx0XHJcblx0cCB7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGhlaWdodDogMC4ycmVtO1xyXG5cdFx0bGluZS1oZWlnaHQ6IDAuMnJlbTtcclxuXHRcdGJhY2tncm91bmQ6ICNmNGY0ZjQ7XHJcblx0XHRwYWRkaW5nLWxlZnQ6IDAuMDVyZW07XHJcblx0fVxyXG5cdFxyXG5cdHVsIHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiAwLjVyZW07XHJcblx0fVxyXG5cdFxyXG5cdHVsIGxpIHtcclxuXHRcdHdpZHRoOiA5NSU7XHJcblx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRtYXJnaW46IDAgYXV0bztcclxuXHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xyXG5cdH1cclxuXHRcclxuXHR1bCBsaSBkbCB7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGhlaWdodDogMC41cmVtO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cdFxyXG5cdHVsIGxpIGRsIGR0IGltZyB7XHJcblx0XHR3aWR0aDogMC40NXJlbTtcclxuXHRcdGhlaWdodDogYXV0bztcclxuXHRcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcblx0fVxyXG5cdFxyXG5cdHVsIGxpIGRsIGRkIHtcclxuXHRcdG1hcmdpbi1sZWZ0OiAwLjJyZW07XHJcblx0fVxyXG5cdFxyXG5cdC5yaWdodFdvcmQge1xyXG5cdFx0d2lkdGg6IC4xNHJlbTtcclxuXHRcdGhlaWdodDogMy4zNnJlbTtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0cmlnaHQ6IC4wMnJlbTtcclxuXHRcdHRvcDogLjY0cmVtO1xyXG5cdFx0bWFyZ2luOiBhdXRvO1xyXG5cdH1cclxuXHRcclxuXHQucmlnaHRXb3JkIGEge1xyXG5cdFx0Zm9udC1zaXplOiAuMTJyZW07XHJcblx0fVxyXG48L3N0eWxlPiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/_babel-loader@7.1.4@babel-loader/lib/index.js!./node_modules/_vue-loader@15.0.11@vue-loader/lib/index.js??vue-loader-options!./src/components/index.vue?vue&type=script&lang=js\n");

/***/ })

})