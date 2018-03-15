webpackHotUpdate(0,{

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(1249);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(1252);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_chartjs__ = __webpack_require__(14);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__(11);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);\n\n\n\n\n\n\nvar brandSuccess = '#4dbd74';\nvar brandInfo = '#63c2de';\n\n\nfunction convertHex(hex, opacity) {\n  hex = hex.replace('#', '');\n  var r = parseInt(hex.substring(0, 2), 16);\n  var g = parseInt(hex.substring(2, 4), 16);\n  var b = parseInt(hex.substring(4, 6), 16);\n\n  var result = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')';\n  return result;\n}\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n  extends: __WEBPACK_IMPORTED_MODULE_2_vue_chartjs__[\"c\" /* Line */],\n  props: ['height'],\n  mounted: function mounted() {\n    var _this = this;\n\n    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {\n      var services, data1, data2;\n      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              services = [];\n              data1 = new Array(31).fill(0);\n              data2 = new Array(31).fill(0);\n              _context.next = 5;\n              return __WEBPACK_IMPORTED_MODULE_3_axios___default.a.get('/api/v1/home').then(function (response) {\n                services = response.data.data.monthly_services;\n                services.forEach(function (service) {\n                  var tokenDate = new Date(service.done_at);\n                  var day1 = tokenDate.getUTCDate();\n                  tokenDate = new Date(service.next_service);\n                  var day2 = tokenDate.getUTCDate();\n\n                  data1[day1 - 1] = data1[day1 - 1] + 1;\n                  data2[day2 - 1] = data2[day2 - 1] + 1;\n                });\n              }).catch(function (e) {\n                _this.errors.push(e);\n              });\n\n            case 5:\n              _this.renderChart({\n                labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],\n                datasets: [{\n                  label: 'Serviços atendidos',\n                  backgroundColor: convertHex(brandInfo, 10),\n                  borderColor: brandSuccess,\n                  pointHoverBackgroundColor: '#fff',\n                  borderWidth: 2,\n                  data: data1\n                }, {\n                  label: 'Serviços provisionados',\n                  backgroundColor: 'transparent',\n                  borderColor: brandInfo,\n                  pointHoverBackgroundColor: '#fff',\n                  borderWidth: 2,\n                  data: data2\n                }]\n              }, {\n                maintainAspectRatio: false,\n                legend: {\n                  display: true\n                },\n                scales: {\n                  xAxes: [{\n                    gridLines: {\n                      drawOnChartArea: true\n                    }\n                  }],\n                  yAxes: [{\n                    ticks: {\n                      beginAtZero: true,\n                      maxTicksLimit: 5,\n                      stepSize: Math.ceil(50 / 5),\n                      max: 50\n                    },\n                    gridLines: {\n                      display: true\n                    }\n                  }]\n                },\n                elements: {\n                  point: {\n                    radius: 0,\n                    hitRadius: 10,\n                    hoverRadius: 5,\n                    hoverBorderWidth: 3\n                  }\n                }\n              });\n\n            case 6:\n            case 'end':\n              return _context.stop();\n          }\n        }\n      }, _callee, _this);\n    }))();\n  },\n\n  methods: {\n    renderAgain: function renderAgain(data1, data2) {\n      this.renderChart({\n        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],\n        datasets: [{\n          label: 'Serviços atendidos',\n          backgroundColor: convertHex(brandInfo, 10),\n          borderColor: brandSuccess,\n          pointHoverBackgroundColor: '#fff',\n          borderWidth: 2,\n          data: data1\n        }, {\n          label: 'Serviços provisionados',\n          backgroundColor: 'transparent',\n          borderColor: brandInfo,\n          pointHoverBackgroundColor: '#fff',\n          borderWidth: 2,\n          data: data2\n        }]\n      }, {\n        maintainAspectRatio: false,\n        legend: {\n          display: true\n        },\n        scales: {\n          xAxes: [{\n            gridLines: {\n              drawOnChartArea: true\n            }\n          }],\n          yAxes: [{\n            ticks: {\n              beginAtZero: true,\n              maxTicksLimit: 1,\n              stepSize: Math.ceil(30 / 5),\n              max: 30\n            },\n            gridLines: {\n              display: true\n            }\n          }]\n        },\n        elements: {\n          point: {\n            radius: 0,\n            hitRadius: 10,\n            hoverRadius: 4,\n            hoverBorderWidth: 3\n          }\n        }\n      });\n    }\n  }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzIwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL01haW5DaGFydC52dWU/YTE2NCJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuaW1wb3J0IHsgTGluZSB9IGZyb20gJ3Z1ZS1jaGFydGpzJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG4vLyBjb25zdCBicmFuZFByaW1hcnkgPSAnIzIwYThkOCdcbmNvbnN0IGJyYW5kU3VjY2VzcyA9ICcjNGRiZDc0J1xuY29uc3QgYnJhbmRJbmZvID0gJyM2M2MyZGUnXG4vLyBjb25zdCBicmFuZERhbmdlciA9ICcjZjg2YzZiJ1xuXG5mdW5jdGlvbiBjb252ZXJ0SGV4IChoZXgsIG9wYWNpdHkpIHtcbiAgaGV4ID0gaGV4LnJlcGxhY2UoJyMnLCAnJylcbiAgY29uc3QgciA9IHBhcnNlSW50KGhleC5zdWJzdHJpbmcoMCwgMiksIDE2KVxuICBjb25zdCBnID0gcGFyc2VJbnQoaGV4LnN1YnN0cmluZygyLCA0KSwgMTYpXG4gIGNvbnN0IGIgPSBwYXJzZUludChoZXguc3Vic3RyaW5nKDQsIDYpLCAxNilcblxuICBjb25zdCByZXN1bHQgPSAncmdiYSgnICsgciArICcsJyArIGcgKyAnLCcgKyBiICsgJywnICsgb3BhY2l0eSAvIDEwMCArICcpJ1xuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZXh0ZW5kczogTGluZSxcbiAgcHJvcHM6IFsnaGVpZ2h0J10sXG4gIGFzeW5jIG1vdW50ZWQgKCkge1xuICAgIHZhciBzZXJ2aWNlcyA9IFtdXG4gICAgdmFyIGRhdGExID0gbmV3IEFycmF5KDMxKS5maWxsKDApXG4gICAgdmFyIGRhdGEyID0gbmV3IEFycmF5KDMxKS5maWxsKDApXG5cbiAgICBhd2FpdCBheGlvcy5nZXQoYC9hcGkvdjEvaG9tZWApLnRoZW4oXG4gICAgICByZXNwb25zZSA9PiB7XG4gICAgICAgIHNlcnZpY2VzID0gcmVzcG9uc2UuZGF0YS5kYXRhLm1vbnRobHlfc2VydmljZXNcbiAgICAgICAgc2VydmljZXMuZm9yRWFjaChmdW5jdGlvbiAoc2VydmljZSkge1xuICAgICAgICAgIHZhciB0b2tlbkRhdGUgPSBuZXcgRGF0ZShzZXJ2aWNlLmRvbmVfYXQpXG4gICAgICAgICAgdmFyIGRheTEgPSB0b2tlbkRhdGUuZ2V0VVRDRGF0ZSgpXG4gICAgICAgICAgdG9rZW5EYXRlID0gbmV3IERhdGUoc2VydmljZS5uZXh0X3NlcnZpY2UpXG4gICAgICAgICAgdmFyIGRheTIgPSB0b2tlbkRhdGUuZ2V0VVRDRGF0ZSgpXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ1NlcnZpY2UgZG9uZSBhdCAtPiAnICsgZGF5MSArICcgYW5kIHJldmlzaW9uIHBsYW5uZWQgdG8gZGF5ICcgKyBkYXkyKVxuICAgICAgICAgIGRhdGExW2RheTEgLSAxXSA9IGRhdGExW2RheTEgLSAxXSArIDFcbiAgICAgICAgICBkYXRhMltkYXkyIC0gMV0gPSBkYXRhMltkYXkyIC0gMV0gKyAxXG4gICAgICAgIH0pXG4gICAgICB9KS5jYXRjaChlID0+IHsgdGhpcy5lcnJvcnMucHVzaChlKSB9KVxuICAgIHRoaXMucmVuZGVyQ2hhcnQoe1xuICAgICAgbGFiZWxzOiBbJzEnLCAnMicsICczJywgJzQnLCAnNScsICc2JywgJzcnLCAnOCcsICc5JywgJzEwJywgJzExJywgJzEyJywgJzEzJywgJzE0JywgJzE1JywgJzE2JywgJzE3JywgJzE4JywgJzE5JywgJzIwJywgJzIxJywgJzIyJywgJzIzJywgJzI0JywgJzI1JywgJzI2JywgJzI3JywgJzI4JywgJzI5JywgJzMwJywgJzMxJ10sXG4gICAgICBkYXRhc2V0czogW1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICdTZXJ2acOnb3MgYXRlbmRpZG9zJyxcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbnZlcnRIZXgoYnJhbmRJbmZvLCAxMCksXG4gICAgICAgICAgYm9yZGVyQ29sb3I6IGJyYW5kU3VjY2VzcyxcbiAgICAgICAgICBwb2ludEhvdmVyQmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgICAgICAgYm9yZGVyV2lkdGg6IDIsXG4gICAgICAgICAgZGF0YTogZGF0YTFcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiAnU2VydmnDp29zIHByb3Zpc2lvbmFkb3MnLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICBib3JkZXJDb2xvcjogYnJhbmRJbmZvLFxuICAgICAgICAgIHBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgICAgICAgICBib3JkZXJXaWR0aDogMixcbiAgICAgICAgICBkYXRhOiBkYXRhMlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSwge1xuICAgICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogZmFsc2UsXG4gICAgICBsZWdlbmQ6IHtcbiAgICAgICAgZGlzcGxheTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHNjYWxlczoge1xuICAgICAgICB4QXhlczogW3tcbiAgICAgICAgICBncmlkTGluZXM6IHtcbiAgICAgICAgICAgIGRyYXdPbkNoYXJ0QXJlYTogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfV0sXG4gICAgICAgIHlBeGVzOiBbe1xuICAgICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgICBiZWdpbkF0WmVybzogdHJ1ZSxcbiAgICAgICAgICAgIG1heFRpY2tzTGltaXQ6IDUsXG4gICAgICAgICAgICBzdGVwU2l6ZTogTWF0aC5jZWlsKDUwIC8gNSksXG4gICAgICAgICAgICBtYXg6IDUwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBncmlkTGluZXM6IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH1dXG4gICAgICB9LFxuICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgcG9pbnQ6IHtcbiAgICAgICAgICByYWRpdXM6IDAsXG4gICAgICAgICAgaGl0UmFkaXVzOiAxMCxcbiAgICAgICAgICBob3ZlclJhZGl1czogNSxcbiAgICAgICAgICBob3ZlckJvcmRlcldpZHRoOiAzXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgcmVuZGVyQWdhaW4gKGRhdGExLCBkYXRhMikge1xuICAgICAgdGhpcy5yZW5kZXJDaGFydCh7XG4gICAgICAgIGxhYmVsczogWycxJywgJzInLCAnMycsICc0JywgJzUnLCAnNicsICc3JywgJzgnLCAnOScsICcxMCcsICcxMScsICcxMicsICcxMycsICcxNCcsICcxNScsICcxNicsICcxNycsICcxOCcsICcxOScsICcyMCcsICcyMScsICcyMicsICcyMycsICcyNCcsICcyNScsICcyNicsICcyNycsICcyOCcsICcyOScsICczMCcsICczMSddLFxuICAgICAgICBkYXRhc2V0czogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnU2VydmnDp29zIGF0ZW5kaWRvcycsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbnZlcnRIZXgoYnJhbmRJbmZvLCAxMCksXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogYnJhbmRTdWNjZXNzLFxuICAgICAgICAgICAgcG9pbnRIb3ZlckJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDIsXG4gICAgICAgICAgICBkYXRhOiBkYXRhMVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6ICdTZXJ2acOnb3MgcHJvdmlzaW9uYWRvcycsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogYnJhbmRJbmZvLFxuICAgICAgICAgICAgcG9pbnRIb3ZlckJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDIsXG4gICAgICAgICAgICBkYXRhOiBkYXRhMlxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSwge1xuICAgICAgICBtYWludGFpbkFzcGVjdFJhdGlvOiBmYWxzZSxcbiAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgZGlzcGxheTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBzY2FsZXM6IHtcbiAgICAgICAgICB4QXhlczogW3tcbiAgICAgICAgICAgIGdyaWRMaW5lczoge1xuICAgICAgICAgICAgICBkcmF3T25DaGFydEFyZWE6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XSxcbiAgICAgICAgICB5QXhlczogW3tcbiAgICAgICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgICAgIGJlZ2luQXRaZXJvOiB0cnVlLFxuICAgICAgICAgICAgICBtYXhUaWNrc0xpbWl0OiAxLFxuICAgICAgICAgICAgICBzdGVwU2l6ZTogTWF0aC5jZWlsKDMwIC8gNSksXG4gICAgICAgICAgICAgIG1heDogMzBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBncmlkTGluZXM6IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1dXG4gICAgICAgIH0sXG4gICAgICAgIGVsZW1lbnRzOiB7XG4gICAgICAgICAgcG9pbnQ6IHtcbiAgICAgICAgICAgIHJhZGl1czogMCxcbiAgICAgICAgICAgIGhpdFJhZGl1czogMTAsXG4gICAgICAgICAgICBob3ZlclJhZGl1czogNCxcbiAgICAgICAgICAgIGhvdmVyQm9yZGVyV2lkdGg6IDNcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBNYWluQ2hhcnQudnVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBOzs7QUFFQTtBQUVBO0FBQ0E7O0FBQ0E7QUFDQTs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBWEE7QUFxQkE7O0FBRUE7QUFEQTs7OztBQU1BO0FBREE7QUFEQTs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTs7QUFPQTtBQURBO0FBUEE7QUFOQTs7O0FBb0JBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFEQTtBQXZCQTtBQUNBOzs7Ozs7OztBQStCQTtBQUNBOztBQUNBOztBQUVBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFYQTtBQXFCQTs7QUFFQTtBQURBOzs7O0FBTUE7QUFEQTtBQURBOzs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUpBOztBQU9BO0FBREE7QUFQQTtBQU5BOzs7QUFvQkE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQURBO0FBdkJBO0FBZ0NBO0FBdERBO0FBMUVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///320\n");

/***/ })

})