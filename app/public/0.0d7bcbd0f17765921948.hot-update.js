webpackHotUpdate(0,{

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__HeaderDropdown_vue__ = __webpack_require__(1057);\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n  name: 'c-header',\n  components: {\n    HeaderDropdown: __WEBPACK_IMPORTED_MODULE_0__HeaderDropdown_vue__[\"a\" /* default */]\n  },\n  data: function data() {\n    return {\n      username: ''\n    };\n  },\n  beforeCreate: function beforeCreate() {\n    this.username = localStorage.getItem('username');\n    console.log(localStorage.getItem('username'));\n  },\n\n  methods: {\n    sidebarToggle: function sidebarToggle(e) {\n      e.preventDefault();\n      document.body.classList.toggle('sidebar-hidden');\n    },\n    sidebarMinimize: function sidebarMinimize(e) {\n      e.preventDefault();\n      document.body.classList.toggle('sidebar-minimized');\n    },\n    mobileSidebarToggle: function mobileSidebarToggle(e) {\n      e.preventDefault();\n      document.body.classList.toggle('sidebar-mobile-show');\n    },\n    asideToggle: function asideToggle(e) {\n      e.preventDefault();\n      document.body.classList.toggle('aside-menu-hidden');\n    }\n  }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTI2LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL0hlYWRlci52dWU/MzI1OCJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxoZWFkZXIgY2xhc3M9XCJhcHAtaGVhZGVyIG5hdmJhclwiPlxuICAgIDxidXR0b24gY2xhc3M9XCJuYXZiYXItdG9nZ2xlciBtb2JpbGUtc2lkZWJhci10b2dnbGVyIGQtbGctbm9uZVwiIHR5cGU9XCJidXR0b25cIiBAY2xpY2s9XCJtb2JpbGVTaWRlYmFyVG9nZ2xlXCI+XG4gICAgICA8c3BhbiBjbGFzcz1cIm5hdmJhci10b2dnbGVyLWljb25cIj48L3NwYW4+XG4gICAgPC9idXR0b24+XG4gICAgPGItbGluayBjbGFzcz1cIm5hdmJhci1icmFuZFwiIHRvPVwiI1wiPjwvYi1saW5rPlxuICAgIDxidXR0b24gY2xhc3M9XCJuYXZiYXItdG9nZ2xlciBzaWRlYmFyLXRvZ2dsZXIgZC1tZC1kb3duLW5vbmVcIiB0eXBlPVwiYnV0dG9uXCIgQGNsaWNrPVwic2lkZWJhclRvZ2dsZVwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJuYXZiYXItdG9nZ2xlci1pY29uXCI+PC9zcGFuPlxuICAgIDwvYnV0dG9uPlxuICAgIDxiLW5hdmJhci1uYXYgY2xhc3M9XCJkLW1kLWRvd24tbm9uZVwiPlxuICAgICAgXG4gICAgPC9iLW5hdmJhci1uYXY+XG4gICAgPGItbmF2YmFyLW5hdiBjbGFzcz1cIm1sLWF1dG9cIj5cbiAgICAgIDxiLW5hdi1pdGVtIGNsYXNzPVwicHgtM1wiIHN0eWxlPVwiZmxvYXQ6cmlnaHRcIj5cbiAgICAgICAgPGg2PjxiPkxvZ2FkbyBjb21vOjwvYj4gPHNwYW4gY2xhc3M9XCJiYWRnZSBiYWRnZS1wcmltYXJ5IGJhZGdlLXBpbGxcIj57e3RoaXMudXNlcm5hbWV9fTwvc3Bhbj48L2g2PlxuICAgICAgPC9iLW5hdi1pdGVtPlxuICAgIDwvYi1uYXZiYXItbmF2PlxuICAgIFxuICA8L2hlYWRlcj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuICBpbXBvcnQgSGVhZGVyRHJvcGRvd24gZnJvbSAnLi9IZWFkZXJEcm9wZG93bi52dWUnXG5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6ICdjLWhlYWRlcicsXG4gICAgY29tcG9uZW50czoge1xuICAgICAgSGVhZGVyRHJvcGRvd25cbiAgICB9LFxuICAgIGRhdGE6ICgpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHVzZXJuYW1lOiAnJ1xuICAgICAgfVxuICAgIH0sXG4gICAgYmVmb3JlQ3JlYXRlICgpIHtcbiAgICAgIHRoaXMudXNlcm5hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcm5hbWUnKVxuICAgICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJuYW1lJykpXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICBzaWRlYmFyVG9nZ2xlIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ3NpZGViYXItaGlkZGVuJylcbiAgICAgIH0sXG4gICAgICBzaWRlYmFyTWluaW1pemUgKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnc2lkZWJhci1taW5pbWl6ZWQnKVxuICAgICAgfSxcbiAgICAgIG1vYmlsZVNpZGViYXJUb2dnbGUgKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnc2lkZWJhci1tb2JpbGUtc2hvdycpXG4gICAgICB9LFxuICAgICAgYXNpZGVUb2dnbGUgKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnYXNpZGUtbWVudS1oaWRkZW4nKVxuICAgICAgfVxuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gSGVhZGVyLnZ1ZSJdLCJtYXBwaW5ncyI6Ijs7O0FBb0JBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBREE7QUFHQTs7QUFFQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaEJBO0FBZEEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///126\n");

/***/ })

})