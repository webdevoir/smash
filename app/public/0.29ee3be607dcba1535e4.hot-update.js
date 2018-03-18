webpackHotUpdate(0,{

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(10);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuejs_auto_complete__ = __webpack_require__(25);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuejs_auto_complete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vuejs_auto_complete__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jspdf__ = __webpack_require__(42);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jspdf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jspdf__);\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n  name: 'serviceNotify',\n  components: {\n    Autocomplete: __WEBPACK_IMPORTED_MODULE_1_vuejs_auto_complete___default.a\n  },\n  data: function data() {\n    return {\n      kind: '',\n      company: '',\n      client: '',\n      plate: '',\n      done_at: '',\n      next_service: '',\n      day1: '',\n      day2: '',\n      month1: '',\n      month2: '',\n      year1: '',\n      year2: '',\n      email_subject: '',\n      email_body: '',\n      kinds: [],\n      companies: [],\n      vehicles: [],\n      clients: [],\n      services: [],\n      result: false\n    };\n  },\n  created: function created() {\n    var _this = this;\n\n    __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/api/v1/service_types', { headers: { Authorization: localStorage.getItem('token') } }).then(function (response) {\n      _this.loading = true;\n      _this.$data.kinds = response.data.data;\n      _this.$data.kinds = _this.sortByKey(_this.$data.kinds, 'kind');\n    }).catch(function (e) {\n      _this.errors.push(e);\n    });\n    __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/api/v1/companies', { headers: { Authorization: localStorage.getItem('token') } }).then(function (response) {\n      _this.loading = true;\n      _this.$data.companies = response.data.data;\n      _this.$data.companies = _this.sortByKey(_this.$data.companies, 'name');\n    }).catch(function (e) {\n      _this.errors.push(e);\n    });\n    __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/api/v1/equipments', { headers: { Authorization: localStorage.getItem('token') } }).then(function (response) {\n      _this.loading = true;\n      _this.$data.vehicles = response.data.data;\n      _this.$data.vehicles = _this.sortByKey(_this.$data.vehicles, 'plate');\n    }).catch(function (e) {\n      _this.errors.push(e);\n    });\n    __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/api/v1/costumers', { headers: { Authorization: localStorage.getItem('token') } }).then(function (response) {\n      _this.loading = true;\n      _this.$data.clients = response.data.data;\n      _this.$data.clients = _this.sortByKey(_this.$data.clients, 'name');\n    }).catch(function (e) {\n      _this.errors.push(e);\n    });\n  },\n\n  methods: {\n    formattedDisplay: function formattedDisplay(result) {\n      return result.plate;\n    },\n    formattedDisplayClient: function formattedDisplayClient(result) {\n      return result.name;\n    },\n    setAttributes: function setAttributes(vehicle) {\n      this.$data.plate = vehicle.selectedObject.plate;\n      this.$data.client = vehicle.selectedObject.proprietary;\n      this.$refs.autocompleteClient.display = vehicle.selectedObject.proprietary;\n    },\n    setAttributesClient: function setAttributesClient(client) {\n      this.$data.client = client.selectedObject.name;\n    },\n    sortByKey: function sortByKey(array, key) {\n      return array.sort(function (a, b) {\n        var x = a[key];\n        var y = b[key];\n        return x < y ? -1 : x > y ? 1 : 0;\n      });\n    },\n    clearText: function clearText() {\n      console.log(this.done_at);\n      this.$data.kind = '';\n      this.$data.company = '';\n      this.$data.client = '';\n      this.$data.plate = '';\n      this.$data.done_at = '';\n      this.$data.next_service = '';\n      this.day1 = '';\n      this.day2 = '';\n      this.month1 = '';\n      this.month2 = '';\n      this.year1 = '';\n      this.year2 = '';\n      this.$refs.autocomplete.clearValues();\n      this.$refs.autocompleteClient.clearValues();\n      console.log('cleared all entry text fields');\n    },\n    showList: function showList() {\n      this.$data.result = true;\n    },\n    removeDuplicates: function removeDuplicates(originalArray, prop) {\n      var newArray = [];\n      var lookupObject = {};\n\n      for (var i in originalArray) {\n        lookupObject[originalArray[i][prop]] = originalArray[i];\n      }\n\n      for (i in lookupObject) {\n        newArray.push(lookupObject[i]);\n      }\n      return newArray;\n    },\n    goToEdit: function goToEdit(id) {\n      console.log('trying to edit service with id -> ' + id);\n      this.$router.push({ path: '/services/edit/' + id });\n    },\n    submitSearch: function submitSearch() {\n      var _this2 = this;\n\n      this.$data.result = false;\n      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/api/v1/services/search', {\n        headers: {\n          Authorization: localStorage.getItem('token')\n        },\n        params: {\n          name: this.$data.kind,\n          company: this.$data.company,\n          costumer: this.$data.client,\n          equipment: this.$data.plate,\n          day1: this.$data.day1,\n          day2: this.$data.day2,\n          month1: this.$data.month1,\n          month2: this.$data.month2,\n          year1: this.$data.year1,\n          year2: this.$data.year2\n        }\n      }).then(function (response) {\n        _this2.$data.services = response.data.data;\n        _this2.removeDuplicates(_this2.$data.services, 'costumer');\n        console.log(_this2.$data.services);\n      }).then(this.showList());\n    },\n    reverseString: function reverseString(s) {\n      return s.split('').reverse().join('');\n    },\n    createQueryPdf: function createQueryPdf() {\n      var doc = new __WEBPACK_IMPORTED_MODULE_2_jspdf___default.a();\n      var j = 0;\n      var collumn = 0;\n      var token = new Date();\n\n      doc.setFontSize(12);\n      doc.text(55, 6, 'LISTA DE DESTINATÁRIOS - DATA: ' + token.getDate() + '/' + token.getUTCMonth() + '/' + token.getFullYear() + '\\n\\n');\n      this.services.forEach(function (service, i) {\n        if (i % 15 === 0 && i !== 0 && collumn === 1) {\n          j = 0;\n          collumn = 0;\n          doc.addPage();\n        } else if (i % 15 === 0 && i !== 0 && collumn === 0) {\n          collumn = 1;\n          j = 0;\n        }\n        doc.text(20 + collumn * 85, 10 + j * 18, '----------------------------------------------------------\\n' + 'Cliente: ' + service.costumer + '\\n');\n        j++;\n      });\n      doc.save('lista_destinatarios_' + token.getDate() + '_' + token.getUTCMonth() + '_' + token.getFullYear() + '.pdf');\n    }\n  }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzExLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL1NlcnZpY2VOb3RpZnkudnVlP2Y0YTYiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJhbmltYXRlZCBmYWRlSW4gbXhcIj5cbiAgICAgICAgPGItcm93PlxuICAgICAgICAgICAgPGItY29sIG1kPVwiNlwiIGNsYXNzPVwibXgtYXV0b1wiPlxuICAgICAgICAgICAgICAgIDxiLWNhcmQ+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc2xvdD1cImhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5GaWx0cmFnZW0gZGUgU2VydmnDp29zPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmFkZ2UgYmFkZ2UtaW5mbyBiYWRnZS1waWxsXCIgdi1iLXBvcG92ZXIuaG92ZXI9XCInVXRpbGl6ZSBvcyBjYW1wb3MgcGFyYSBkZWZpbmlyIG9zIGRlc3RpbmF0w6FyaW9zISdcIiB0aXRsZT1cIkF0ZW7Dp8OjbyFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXF1ZXN0aW9uXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8Yi1mb3JtLWdyb3VwXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkVzY29saGEgbyB0aXBvIGRlIHNlcnZpw6dvOlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbC1mb3I9XCJiYXNpY1NlbGVjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6bGFiZWwtY29scz1cIjNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmhvcml6b250YWw9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1mb3JtLXNlbGVjdCBpZD1cImtpbmRcIiB2LW1vZGVsPVwia2luZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6cGxhaW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiU2VsZWNpb25lIG8gdGlwbyBkZSBzZXJ2acOnb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdi1mb3I9XCJrIGluIGtpbmRzXCI+e3trLmtpbmR9fTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWZvcm0tc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICA8L2ItZm9ybS1ncm91cD5cbiAgICAgICAgICAgICAgICAgICAgPGItZm9ybS1ncm91cFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJGaWxpYWwgcmVzcG9uc8OhdmVsIHBlbG9zIHNlcnZpw6dvOlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbC1mb3I9XCJiYXNpY1NlbGVjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6bGFiZWwtY29scz1cIjNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmhvcml6b250YWw9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1mb3JtLXNlbGVjdCBpZD1cImNvbXBhbnlcIiB2LW1vZGVsPVwiY29tcGFueVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6cGxhaW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiU2VsZWNpb25lIGEgZmlsaWFsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2LWZvcj1cImMgaW4gY29tcGFuaWVzXCI+e3tjLm5hbWV9fTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWZvcm0tc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICA8L2ItZm9ybS1ncm91cD5cbiAgICAgICAgICAgICAgICAgICAgPGItZm9ybS1ncm91cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwbGF0ZVwiPlBsYWNhIGRvIGVxdWlwYW1lbnRvOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YXV0b2NvbXBsZXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiYXV0b2NvbXBsZXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBsYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6c2hvd05vUmVzdWx0cz1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6c291cmNlPVwidmVoaWNsZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMtcHJvcGVydHk9XCJwbGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOnJlc3VsdHMtZGlzcGxheT1cImZvcm1hdHRlZERpc3BsYXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBzZWxlY3RlZD1cInNldEF0dHJpYnV0ZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0LWNsYXNzPVwidmVoaWNsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRyZSBjb20gYSBwbGFjYSBkbyBlcXVpcGFtZW50b1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hdXRvY29tcGxldGU+XG4gICAgICAgICAgICAgICAgICAgIDwvYi1mb3JtLWdyb3VwPlxuICAgICAgICAgICAgICAgICAgICA8Yi1mb3JtLWdyb3VwPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2xpZW50XCI+Tm9tZSBkbyBDbGllbnRlIG91IEVtcHJlc2EgY29udHJhdGFudGU6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhdXRvY29tcGxldGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJhdXRvY29tcGxldGVDbGllbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiY2xpZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6c2hvd05vUmVzdWx0cz1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6c291cmNlPVwiY2xpZW50c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy1wcm9wZXJ0eT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpyZXN1bHRzLWRpc3BsYXk9XCJmb3JtYXR0ZWREaXNwbGF5Q2xpZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAc2VsZWN0ZWQ9XCJzZXRBdHRyaWJ1dGVzQ2xpZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dC1jbGFzcz1cImNsaWVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRyZSBjb20gbyBub21lIGRvIENsaWVudGUgb3UgRW1wcmVzYSBDb250cmF0YW50ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hdXRvY29tcGxldGU+XG4gICAgICAgICAgICAgICAgICAgIDwvYi1mb3JtLWdyb3VwPlxuICAgICAgICAgICAgICAgICAgICA8Yi1mb3JtLWdyb3VwPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImRvbmVfYXRcIj48c3Ryb25nPiBEYXRhIGRlIGV4ZWN1w6fDo28gZG8gc2VydmnDp286PC9zdHJvbmc+PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLXJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yi1jb2wgc209XCIzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWZvcm0tZ3JvdXAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImRheTFcIj5EaWE8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGItZm9ybS1zZWxlY3QgaWQ9XCJkYXkxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJkYXkxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpwbGFpbj1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm9wdGlvbnM9XCJbMSwyLDMsNCw1LDYsNyw4LDksMTAsMTEsMTIsMTMsMTQsMTUsMTYsMTcsMTgsMTksMjAsMjEsMjIsMjMsMjQsMjUsMjYsMjcsMjgsMjksMzAsMzFdXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ItZm9ybS1zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1mb3JtLWdyb3VwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGItY29sIHNtPVwiM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yi1mb3JtLWdyb3VwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm1vbnRoMVwiPk3DqnM8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGItZm9ybS1zZWxlY3QgaWQ9XCJtb250aDFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cIm1vbnRoMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cGxhaW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpvcHRpb25zPVwiWzEsMiwzLDQsNSw2LDcsOCw5LDEwLDExLDEyXVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWZvcm0tc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ItZm9ybS1ncm91cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNvbCBzbT1cIjNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGItZm9ybS1ncm91cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ5ZWFyMVwiPkFubzwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yi1mb3JtLXNlbGVjdCBpZD1cInllYXIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJ5ZWFyMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cGxhaW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpvcHRpb25zPVwiWzIwMTcsMjAxOCwyMDE5LDIwMjAsMjAyMSwyMDIyLDIwMjMsMjAyNCwyMDI1LDIwMjYsMjAyNywyMDI4LDIwMjksMjAzMF1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1mb3JtLXNlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWZvcm0tZ3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1yb3c+XG4gICAgICAgICAgICAgICAgICAgIDwvYi1mb3JtLWdyb3VwPlxuICAgICAgICAgICAgICAgICAgIDxiLWZvcm0tZ3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkb25lX2F0XCI+PHN0cm9uZz4gRGF0YSBkZSBBZ2VuZGFtZW50byBkbyBwcsOzeGltbyBzZXJ2acOnbzo8L3N0cm9uZz48L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICA8Yi1yb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGItY29sIHNtPVwiM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yi1mb3JtLWdyb3VwID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkYXkyXCI+RGlhPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWZvcm0tc2VsZWN0IGlkPVwiZGF5MlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZGF5MlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cGxhaW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpvcHRpb25zPVwiWzEsMiwzLDQsNSw2LDcsOCw5LDEwLDExLDEyLDEzLDE0LDE1LDE2LDE3LDE4LDE5LDIwLDIxLDIyLDIzLDI0LDI1LDI2LDI3LDI4LDI5LDMwLDMxXVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWZvcm0tc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ItZm9ybS1ncm91cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNvbCBzbT1cIjNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGItZm9ybS1ncm91cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJtb250aDJcIj5Nw6pzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWZvcm0tc2VsZWN0IGlkPVwibW9udGgyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJtb250aDJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnBsYWluPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6b3B0aW9ucz1cIlsxLDIsMyw0LDUsNiw3LDgsOSwxMCwxMSwxMl1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1mb3JtLXNlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWZvcm0tZ3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yi1jb2wgc209XCIzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWZvcm0tZ3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwieWVhcjJcIj5Bbm88L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGItZm9ybS1zZWxlY3QgaWQ9XCJ5ZWFyMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwieWVhcjJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnBsYWluPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6b3B0aW9ucz1cIlsyMDE3LDIwMTgsMjAxOSwyMDIwLDIwMjEsMjAyMiwyMDIzLDIwMjQsMjAyNSwyMDI2LDIwMjcsMjAyOCwyMDI5LDIwMzBdXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ItZm9ybS1zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1mb3JtLWdyb3VwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Itcm93PlxuICAgICAgICAgICAgICAgICAgIDwvYi1mb3JtLWdyb3VwPiBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzbG90PVwiZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1idXR0b24gdi1vbjpjbGljaz1cImNsZWFyVGV4dCgpXCIgdHlwZT1cInJlc2V0XCIgc2l6ZT1cInNtXCIgdmFyaWFudD1cIndhcm5pbmdcIj48aSBjbGFzcz1cImZhIGZhLWJhblwiPjwvaT4gQXBhZ2FyIGNhbXBvczwvYi1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1idXR0b24gdi1vbjpjbGljaz1cInN1Ym1pdFNlYXJjaCgpXCIgIHN0eWxlPVwiZmxvYXQ6cmlnaHRcIiB0eXBlPVwic3VibWl0XCIgc2l6ZT1cInNtXCIgdmFyaWFudD1cInByaW1hcnlcIj48aSBjbGFzcz1cImZhIGZhLXNlbmRcIj48L2k+IEZpbHRyYXIgRGVzdGluYXTDoXJpb3MhPC9iLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9iLWNhcmQ+XG4gICAgICAgICAgICA8L2ItY29sPlxuICAgICAgICAgICAgPGItY29sIG1kPVwiNlwiIGNsYXNzPVwibXgtYXV0b1wiPlxuICAgICAgICAgICAgICAgIDxiLWFsZXJ0IDpzaG93PVwicmVzdWx0XCIgdmFyaWFudD1cImJnLWdyYXktMTAwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxiLWNhcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHNsb3Q9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkUtbWFpbCBhIHNlciBlbnZpYWRvOjwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJiYWRnZSBiYWRnZS1pbmZvIGJhZGdlLXBpbGxcIiB2LWItcG9wb3Zlci5ob3Zlcj1cIidPIEVtYWlsIHJlbWV0ZW50ZSBzZXLDoSBvIGRhIGVtcHJlc2EgcmVzcG9uc8OhdmVsIHBlbG8gc2VydmnDp28hJ1wiIHRpdGxlPVwiQXRlbsOnw6NvIVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXF1ZXN0aW9uXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1mb3JtLWdyb3VwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJUw610dWxvIGRvIEVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbC1mb3I9XCJiYXNpY1RleHRhcmVhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bGFiZWwtY29scz1cIjJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpob3Jpem9udGFsPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWZvcm0taW5wdXQgaWQ9XCJiYXNpY1RleHRhcmVhXCIgdi1tb2RlbD1cImVtYWlsX3N1YmplY3RcIiA6dGV4dGFyZWE9XCJ0cnVlXCIgOnJvd3M9XCI5XCIgcGxhY2Vob2xkZXI9XCJFbnRyZSBjb20gbyB0w610dWxvIGRvIEVtYWlsIGFxdWkuLlwiPjwvYi1mb3JtLWlucHV0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWZvcm0tZ3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1mb3JtLWdyb3VwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDb3JwbyBkbyBFbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwtZm9yPVwiYmFzaWNUZXh0YXJlYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmxhYmVsLWNvbHM9XCIyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6aG9yaXpvbnRhbD1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGItZm9ybS10ZXh0YXJlYSBpZD1cInRleHRhcmVhMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZW1haWxfYm9keVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRpZ2l0ZSBvIGNvcnBvIGRvIEVtYWlsIGEgc2VyIGVudmlhZG8uLi5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnJvd3M9XCI2XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDptYXgtcm93cz1cIjZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWZvcm0tdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ItZm9ybS1ncm91cD5cbiAgICAgICAgICAgICAgICAgICAgPC9iLWNhcmQ+XG4gICAgICAgICAgICAgICAgICAgIDxiLWNhcmQgaGVhZGVyLXRhZz1cImhlYWRlclwiIGZvb3Rlci10YWc9XCJmb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc2xvdD1cImhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYWxpZ24tanVzdGlmeVwiPjwvaT48c3Ryb25nPkNsaWVudGVzIGEgc2VyZW0gbm90aWZpY2Fkb3M8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWJ1dHRvbiBzaXplPVwic21cIiB2LW9uOmNsaWNrPVwiY3JlYXRlUXVlcnlQZGYoKVwiIHN0eWxlPVwiZmxvYXQ6cmlnaHRcIiB2YXJpYW50PVwic2Vjb25kYXJ5XCI+RXhwb3J0YXIgZmlsdHJhZ2VtIGVtIFBERjwvYi1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWxpc3QtZ3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGItbGlzdC1ncm91cC1pdGVtICB2LW1vZGVsPVwic2VydmljZXNcIiBjbGFzcz1cImZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLXN0YXJ0XCIgdi1mb3I9XCJzIGluIHNlcnZpY2VzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggdy0xMDAganVzdGlmeS1jb250ZW50LWJldHdlZW5cIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cIm1iLTFcIj57e3MuY29zdHVtZXJ9fTwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1saXN0LWdyb3VwLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ItbGlzdC1ncm91cD5cbiAgICAgICAgICAgICAgICAgICAgPC9iLWNhcmQ+XG4gICAgICAgICAgICAgICAgPC9iLWFsZXJ0PlxuICAgICAgICAgICAgPC9iLWNvbD5cbiAgICAgICAgPC9iLXJvdz5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgQXV0b2NvbXBsZXRlIGZyb20gJ3Z1ZWpzLWF1dG8tY29tcGxldGUnXG5pbXBvcnQgSnNQREYgZnJvbSAnanNwZGYnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ3NlcnZpY2VOb3RpZnknLFxuICBjb21wb25lbnRzOiB7XG4gICAgQXV0b2NvbXBsZXRlXG4gIH0sXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBraW5kOiAnJyxcbiAgICAgIGNvbXBhbnk6ICcnLFxuICAgICAgY2xpZW50OiAnJyxcbiAgICAgIHBsYXRlOiAnJyxcbiAgICAgIGRvbmVfYXQ6ICcnLFxuICAgICAgbmV4dF9zZXJ2aWNlOiAnJyxcbiAgICAgIGRheTE6ICcnLFxuICAgICAgZGF5MjogJycsXG4gICAgICBtb250aDE6ICcnLFxuICAgICAgbW9udGgyOiAnJyxcbiAgICAgIHllYXIxOiAnJyxcbiAgICAgIHllYXIyOiAnJyxcbiAgICAgIGVtYWlsX3N1YmplY3Q6ICcnLFxuICAgICAgZW1haWxfYm9keTogJycsXG4gICAgICBraW5kczogW10sXG4gICAgICBjb21wYW5pZXM6IFtdLFxuICAgICAgdmVoaWNsZXM6IFtdLFxuICAgICAgY2xpZW50czogW10sXG4gICAgICBzZXJ2aWNlczogW10sXG4gICAgICByZXN1bHQ6IGZhbHNlXG4gICAgfVxuICB9LFxuICBjcmVhdGVkICgpIHtcbiAgICBheGlvcy5nZXQoYC9hcGkvdjEvc2VydmljZV90eXBlc2AsIHtoZWFkZXJzOiB7QXV0aG9yaXphdGlvbjogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyl9fSkudGhlbihcbiAgICAgIHJlc3BvbnNlID0+IHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZVxuICAgICAgICB0aGlzLiRkYXRhLmtpbmRzID0gcmVzcG9uc2UuZGF0YS5kYXRhXG4gICAgICAgIHRoaXMuJGRhdGEua2luZHMgPSB0aGlzLnNvcnRCeUtleSh0aGlzLiRkYXRhLmtpbmRzLCAna2luZCcpXG4gICAgICB9KS5jYXRjaChlID0+IHsgdGhpcy5lcnJvcnMucHVzaChlKSB9KVxuICAgIGF4aW9zLmdldChgL2FwaS92MS9jb21wYW5pZXNgLCB7aGVhZGVyczoge0F1dGhvcml6YXRpb246IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpfX0pLnRoZW4oXG4gICAgICByZXNwb25zZSA9PiB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWVcbiAgICAgICAgdGhpcy4kZGF0YS5jb21wYW5pZXMgPSByZXNwb25zZS5kYXRhLmRhdGFcbiAgICAgICAgdGhpcy4kZGF0YS5jb21wYW5pZXMgPSB0aGlzLnNvcnRCeUtleSh0aGlzLiRkYXRhLmNvbXBhbmllcywgJ25hbWUnKVxuICAgICAgfSkuY2F0Y2goZSA9PiB7IHRoaXMuZXJyb3JzLnB1c2goZSkgfSlcbiAgICBheGlvcy5nZXQoYC9hcGkvdjEvZXF1aXBtZW50c2AsIHtoZWFkZXJzOiB7QXV0aG9yaXphdGlvbjogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyl9fSkudGhlbihcbiAgICAgIHJlc3BvbnNlID0+IHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZVxuICAgICAgICB0aGlzLiRkYXRhLnZlaGljbGVzID0gcmVzcG9uc2UuZGF0YS5kYXRhXG4gICAgICAgIHRoaXMuJGRhdGEudmVoaWNsZXMgPSB0aGlzLnNvcnRCeUtleSh0aGlzLiRkYXRhLnZlaGljbGVzLCAncGxhdGUnKVxuICAgICAgfSkuY2F0Y2goZSA9PiB7IHRoaXMuZXJyb3JzLnB1c2goZSkgfSlcbiAgICBheGlvcy5nZXQoYC9hcGkvdjEvY29zdHVtZXJzYCwge2hlYWRlcnM6IHtBdXRob3JpemF0aW9uOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKX19KS50aGVuKFxuICAgICAgcmVzcG9uc2UgPT4ge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlXG4gICAgICAgIHRoaXMuJGRhdGEuY2xpZW50cyA9IHJlc3BvbnNlLmRhdGEuZGF0YVxuICAgICAgICB0aGlzLiRkYXRhLmNsaWVudHMgPSB0aGlzLnNvcnRCeUtleSh0aGlzLiRkYXRhLmNsaWVudHMsICduYW1lJylcbiAgICAgIH0pLmNhdGNoKGUgPT4geyB0aGlzLmVycm9ycy5wdXNoKGUpIH0pXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBmb3JtYXR0ZWREaXNwbGF5IChyZXN1bHQpIHtcbiAgICAgIHJldHVybiByZXN1bHQucGxhdGVcbiAgICB9LFxuICAgIGZvcm1hdHRlZERpc3BsYXlDbGllbnQgKHJlc3VsdCkge1xuICAgICAgcmV0dXJuIHJlc3VsdC5uYW1lXG4gICAgfSxcbiAgICBzZXRBdHRyaWJ1dGVzICh2ZWhpY2xlKSB7XG4gICAgICB0aGlzLiRkYXRhLnBsYXRlID0gdmVoaWNsZS5zZWxlY3RlZE9iamVjdC5wbGF0ZVxuICAgICAgdGhpcy4kZGF0YS5jbGllbnQgPSB2ZWhpY2xlLnNlbGVjdGVkT2JqZWN0LnByb3ByaWV0YXJ5XG4gICAgICB0aGlzLiRyZWZzLmF1dG9jb21wbGV0ZUNsaWVudC5kaXNwbGF5ID0gdmVoaWNsZS5zZWxlY3RlZE9iamVjdC5wcm9wcmlldGFyeVxuICAgIH0sXG4gICAgc2V0QXR0cmlidXRlc0NsaWVudCAoY2xpZW50KSB7XG4gICAgICB0aGlzLiRkYXRhLmNsaWVudCA9IGNsaWVudC5zZWxlY3RlZE9iamVjdC5uYW1lXG4gICAgfSxcbiAgICBzb3J0QnlLZXkgKGFycmF5LCBrZXkpIHtcbiAgICAgIHJldHVybiBhcnJheS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHZhciB4ID0gYVtrZXldXG4gICAgICAgIHZhciB5ID0gYltrZXldXG4gICAgICAgIHJldHVybiAoKHggPCB5KSA/IC0xIDogKCh4ID4geSkgPyAxIDogMCkpXG4gICAgICB9KVxuICAgIH0sXG4gICAgY2xlYXJUZXh0ICgpIHtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuZG9uZV9hdClcbiAgICAgIHRoaXMuJGRhdGEua2luZCA9ICcnXG4gICAgICB0aGlzLiRkYXRhLmNvbXBhbnkgPSAnJ1xuICAgICAgdGhpcy4kZGF0YS5jbGllbnQgPSAnJ1xuICAgICAgdGhpcy4kZGF0YS5wbGF0ZSA9ICcnXG4gICAgICB0aGlzLiRkYXRhLmRvbmVfYXQgPSAnJ1xuICAgICAgdGhpcy4kZGF0YS5uZXh0X3NlcnZpY2UgPSAnJ1xuICAgICAgdGhpcy5kYXkxID0gJydcbiAgICAgIHRoaXMuZGF5MiA9ICcnXG4gICAgICB0aGlzLm1vbnRoMSA9ICcnXG4gICAgICB0aGlzLm1vbnRoMiA9ICcnXG4gICAgICB0aGlzLnllYXIxID0gJydcbiAgICAgIHRoaXMueWVhcjIgPSAnJ1xuICAgICAgdGhpcy4kcmVmcy5hdXRvY29tcGxldGUuY2xlYXJWYWx1ZXMoKVxuICAgICAgdGhpcy4kcmVmcy5hdXRvY29tcGxldGVDbGllbnQuY2xlYXJWYWx1ZXMoKVxuICAgICAgY29uc29sZS5sb2coJ2NsZWFyZWQgYWxsIGVudHJ5IHRleHQgZmllbGRzJylcbiAgICB9LFxuICAgIHNob3dMaXN0ICgpIHtcbiAgICAgIHRoaXMuJGRhdGEucmVzdWx0ID0gdHJ1ZVxuICAgIH0sXG4gICAgcmVtb3ZlRHVwbGljYXRlcyAob3JpZ2luYWxBcnJheSwgcHJvcCkge1xuICAgICAgdmFyIG5ld0FycmF5ID0gW11cbiAgICAgIHZhciBsb29rdXBPYmplY3QgPSB7fVxuXG4gICAgICBmb3IgKHZhciBpIGluIG9yaWdpbmFsQXJyYXkpIHtcbiAgICAgICAgbG9va3VwT2JqZWN0W29yaWdpbmFsQXJyYXlbaV1bcHJvcF1dID0gb3JpZ2luYWxBcnJheVtpXVxuICAgICAgfVxuXG4gICAgICBmb3IgKGkgaW4gbG9va3VwT2JqZWN0KSB7XG4gICAgICAgIG5ld0FycmF5LnB1c2gobG9va3VwT2JqZWN0W2ldKVxuICAgICAgfVxuICAgICAgcmV0dXJuIG5ld0FycmF5XG4gICAgfSxcbiAgICBnb1RvRWRpdCAoaWQpIHtcbiAgICAgIGNvbnNvbGUubG9nKCd0cnlpbmcgdG8gZWRpdCBzZXJ2aWNlIHdpdGggaWQgLT4gJyArIGlkKVxuICAgICAgdGhpcy4kcm91dGVyLnB1c2goe3BhdGg6IGAvc2VydmljZXMvZWRpdC8ke2lkfWB9KVxuICAgIH0sXG4gICAgc3VibWl0U2VhcmNoICgpIHtcbiAgICAgIHRoaXMuJGRhdGEucmVzdWx0ID0gZmFsc2VcbiAgICAgIGF4aW9zLmdldCgnL2FwaS92MS9zZXJ2aWNlcy9zZWFyY2gnLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKVxuICAgICAgICB9LFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBuYW1lOiB0aGlzLiRkYXRhLmtpbmQsXG4gICAgICAgICAgY29tcGFueTogdGhpcy4kZGF0YS5jb21wYW55LFxuICAgICAgICAgIGNvc3R1bWVyOiB0aGlzLiRkYXRhLmNsaWVudCxcbiAgICAgICAgICBlcXVpcG1lbnQ6IHRoaXMuJGRhdGEucGxhdGUsXG4gICAgICAgICAgZGF5MTogdGhpcy4kZGF0YS5kYXkxLFxuICAgICAgICAgIGRheTI6IHRoaXMuJGRhdGEuZGF5MixcbiAgICAgICAgICBtb250aDE6IHRoaXMuJGRhdGEubW9udGgxLFxuICAgICAgICAgIG1vbnRoMjogdGhpcy4kZGF0YS5tb250aDIsXG4gICAgICAgICAgeWVhcjE6IHRoaXMuJGRhdGEueWVhcjEsXG4gICAgICAgICAgeWVhcjI6IHRoaXMuJGRhdGEueWVhcjJcbiAgICAgICAgfVxuICAgICAgfSkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIHRoaXMuJGRhdGEuc2VydmljZXMgPSByZXNwb25zZS5kYXRhLmRhdGFcbiAgICAgICAgdGhpcy5yZW1vdmVEdXBsaWNhdGVzKHRoaXMuJGRhdGEuc2VydmljZXMsICdjb3N0dW1lcicpXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuJGRhdGEuc2VydmljZXMpXG4gICAgICB9KS50aGVuKHRoaXMuc2hvd0xpc3QoKSlcbiAgICB9LFxuICAgIHJldmVyc2VTdHJpbmcgKHMpIHtcbiAgICAgIHJldHVybiBzLnNwbGl0KCcnKS5yZXZlcnNlKCkuam9pbignJylcbiAgICB9LFxuICAgIGNyZWF0ZVF1ZXJ5UGRmICgpIHtcbiAgICAgIHZhciBkb2MgPSBuZXcgSnNQREYoKVxuICAgICAgdmFyIGogPSAwXG4gICAgICB2YXIgY29sbHVtbiA9IDBcbiAgICAgIGxldCB0b2tlbiA9IG5ldyBEYXRlKClcbiAgICAgIC8vIFNldHRpbmcgZm9udCBzaXplIGFuZCBhZGRpbmcgdGhlIG5lZWRlZCBudW1iZXIgb2YgcGFnZXNcbiAgICAgIGRvYy5zZXRGb250U2l6ZSgxMilcbiAgICAgIGRvYy50ZXh0KDU1LCA2LCAnTElTVEEgREUgREVTVElOQVTDgVJJT1MgLSBEQVRBOiAnICsgdG9rZW4uZ2V0RGF0ZSgpICsgJy8nICsgdG9rZW4uZ2V0VVRDTW9udGgoKSArICcvJyArIHRva2VuLmdldEZ1bGxZZWFyKCkgKyAnXFxuXFxuJylcbiAgICAgIHRoaXMuc2VydmljZXMuZm9yRWFjaChmdW5jdGlvbiAoc2VydmljZSwgaSkge1xuICAgICAgICBpZiAoaSAlIDE1ID09PSAwICYmIGkgIT09IDAgJiYgY29sbHVtbiA9PT0gMSkge1xuICAgICAgICAgIGogPSAwXG4gICAgICAgICAgY29sbHVtbiA9IDBcbiAgICAgICAgICBkb2MuYWRkUGFnZSgpXG4gICAgICAgIH0gZWxzZSBpZiAoaSAlIDE1ID09PSAwICYmIGkgIT09IDAgJiYgY29sbHVtbiA9PT0gMCkge1xuICAgICAgICAgIGNvbGx1bW4gPSAxXG4gICAgICAgICAgaiA9IDBcbiAgICAgICAgfVxuICAgICAgICBkb2MudGV4dCgyMCArIChjb2xsdW1uICogODUpLCAxMCArIChqICogMTgpLFxuICAgICAgICAgICctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuJyArXG4gICAgICAgICAgJ0NsaWVudGU6ICcgKyBzZXJ2aWNlLmNvc3R1bWVyICsgJ1xcbidcbiAgICAgICAgKVxuICAgICAgICBqKytcbiAgICAgIH0pXG4gICAgICBkb2Muc2F2ZSgnbGlzdGFfZGVzdGluYXRhcmlvc18nICsgdG9rZW4uZ2V0RGF0ZSgpICsgJ18nICsgdG9rZW4uZ2V0VVRDTW9udGgoKSArICdfJyArIHRva2VuLmdldEZ1bGxZZWFyKCkgKyAnLnBkZicpXG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIFNlcnZpY2VOb3RpZnkudnVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQXlMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFEQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFwQkE7QUFzQkE7O0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQUE7OztBQUdBO0FBREE7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWQTtBQUpBO0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQS9HQTtBQXZEQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///311\n");

/***/ })

})