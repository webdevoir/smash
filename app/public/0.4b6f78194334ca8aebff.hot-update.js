webpackHotUpdate(0,{

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__(321);\n\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n  name: 'header-dropdown',\n  data: function data() {\n    return {\n      username: '',\n      itemsCount: 42\n    };\n  },\n  beforeCreate: function beforeCreate() {\n    this.username = localStorage.getItem('username');\n    console.log(localStorage.getItem('username'));\n  },\n\n  methods: {\n    logout: function logout() {\n      localStorage.removeItem('token');\n      localStorage.removeItem('username');\n      __WEBPACK_IMPORTED_MODULE_0__store__[\"a\" /* default */].commit('LOGOUT_USER');\n      this.$router.push('/login');\n    }\n  }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTI3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL0hlYWRlckRyb3Bkb3duLnZ1ZT8wYTdlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICAgIDxiLW5hdi1pdGVtLWRyb3Bkb3duIHJpZ2h0IG5vLWNhcmV0PlxuICAgICAgICA8dGVtcGxhdGUgc2xvdD1cImJ1dHRvbi1jb250ZW50XCI+XG4gICAgICAgICAgPGltZyBzcmM9XCJzdGF0aWMvaW1nL2F2YXRhcnMvNi5qcGdcIiBjbGFzcz1cImltZy1hdmF0YXJcIiBhbHQ9XCJhZG1pbkBib290c3RyYXBtYXN0ZXIuY29tXCI+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDxiLWRyb3Bkb3duLWhlYWRlciB0YWc9XCJkaXZcIiBjbGFzcz1cInRleHQtY2VudGVyXCI+PHN0cm9uZz57e3RoaXMudXNlcm5hbWV9fTwvc3Ryb25nPjwvYi1kcm9wZG93bi1oZWFkZXI+XG4gICAgICAgIDxiLWRyb3Bkb3duLWl0ZW0+PGkgY2xhc3M9XCJmYSBmYS1iZWxsLW9cIj48L2k+IFVwZGF0ZXM8Yi1iYWRnZSB2YXJpYW50PVwiaW5mb1wiPnt7aXRlbXNDb3VudH19PC9iLWJhZGdlPjwvYi1kcm9wZG93bi1pdGVtPlxuICAgICAgICA8Yi1kcm9wZG93bi1pdGVtPjxpIGNsYXNzPVwiZmEgZmEtZW52ZWxvcGUtb1wiPjwvaT4gTWVzc2FnZXM8Yi1iYWRnZSB2YXJpYW50PVwic3VjY2Vzc1wiPnt7aXRlbXNDb3VudH19PC9iLWJhZGdlPjwvYi1kcm9wZG93bi1pdGVtPlxuICAgICAgICA8Yi1kcm9wZG93bi1pdGVtPjxpIGNsYXNzPVwiZmEgZmEtdGFza3NcIj48L2k+IFRhc2tzPGItYmFkZ2UgdmFyaWFudD1cImRhbmdlclwiPnt7aXRlbXNDb3VudH19PC9iLWJhZGdlPjwvYi1kcm9wZG93bi1pdGVtPlxuICAgICAgICA8Yi1kcm9wZG93bi1pdGVtPjxpIGNsYXNzPVwiZmEgZmEtY29tbWVudHNcIj48L2k+IENvbW1lbnRzPGItYmFkZ2UgdmFyaWFudD1cIndhcm5pbmdcIj57e2l0ZW1zQ291bnR9fTwvYi1iYWRnZT48L2ItZHJvcGRvd24taXRlbT5cbiAgICAgICAgPGItZHJvcGRvd24taGVhZGVyIHRhZz1cImRpdlwiIGNsYXNzPVwidGV4dC1jZW50ZXJcIj48c3Ryb25nPlNldHRpbmdzPC9zdHJvbmc+PC9iLWRyb3Bkb3duLWhlYWRlcj5cbiAgICAgICAgPGItZHJvcGRvd24taXRlbT48aSBjbGFzcz1cImZhIGZhLXVzZXJcIj48L2k+IFByb2ZpbGU8L2ItZHJvcGRvd24taXRlbT5cbiAgICAgICAgPGItZHJvcGRvd24taXRlbT48aSBjbGFzcz1cImZhIGZhLXdyZW5jaFwiPjwvaT4gU2V0dGluZ3M8L2ItZHJvcGRvd24taXRlbT5cbiAgICAgICAgPGItZHJvcGRvd24taXRlbT48aSBjbGFzcz1cImZhIGZhLXVzZFwiPjwvaT4gUGF5bWVudHM8Yi1iYWRnZSB2YXJpYW50PVwic2Vjb25kYXJ5XCI+e3tpdGVtc0NvdW50fX08L2ItYmFkZ2U+PC9iLWRyb3Bkb3duLWl0ZW0+XG4gICAgICAgIDxiLWRyb3Bkb3duLWl0ZW0+PGkgY2xhc3M9XCJmYSBmYS1maWxlXCI+PC9pPiBQcm9qZWN0czxiLWJhZGdlIHZhcmlhbnQ9XCJwcmltYXJ5XCI+e3tpdGVtc0NvdW50fX08L2ItYmFkZ2U+PC9iLWRyb3Bkb3duLWl0ZW0+XG4gICAgICAgIDxiLWRyb3Bkb3duLWRpdmlkZXI+PC9iLWRyb3Bkb3duLWRpdmlkZXI+XG4gICAgICAgIDxiLWRyb3Bkb3duLWl0ZW0+PGkgY2xhc3M9XCJmYSBmYS1zaGllbGRcIj48L2k+IExvY2sgQWNjb3VudDwvYi1kcm9wZG93bi1pdGVtPlxuICAgICAgICA8Yi1kcm9wZG93bi1pdGVtPjxpIGNsYXNzPVwiZmEgZmEtbG9ja1wiPjwvaT4gTG9nb3V0PC9iLWRyb3Bkb3duLWl0ZW0+XG4gICAgICA8L2ItbmF2LWl0ZW0tZHJvcGRvd24+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbiAgaW1wb3J0IHN0b3JlIGZyb20gJ0Avc3RvcmUnXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiAnaGVhZGVyLWRyb3Bkb3duJyxcbiAgICBkYXRhOiAoKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB1c2VybmFtZTogJycsXG4gICAgICAgIGl0ZW1zQ291bnQ6IDQyXG4gICAgICB9XG4gICAgfSxcbiAgICBiZWZvcmVDcmVhdGUgKCkge1xuICAgICAgdGhpcy51c2VybmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VybmFtZScpXG4gICAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcm5hbWUnKSlcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgIGxvZ291dCAoKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VybmFtZScpXG4gICAgICAgIHN0b3JlLmNvbW1pdCgnTE9HT1VUX1VTRVInKVxuICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCgnL2xvZ2luJylcbiAgICAgIH1cbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gSGVhZGVyRHJvcGRvd24udnVlIl0sIm1hcHBpbmdzIjoiOzs7QUFvQkE7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBWkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///127\n");

/***/ })

})