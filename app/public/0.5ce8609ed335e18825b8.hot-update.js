webpackHotUpdate(0,{

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(10);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);\n\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n  name: 'serviceTypeEdit',\n  data: function data() {\n    return {\n      selected: [],\n      kind: '',\n      dismissSecs: 3,\n      dismissCountDown: 0,\n      showDismissibleAlert: false\n    };\n  },\n  created: function created() {\n    var _this = this;\n\n    var id = this.$route.params.id;\n    __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/api/v1/service_types/' + id).then(function (response) {\n      _this.loading = true;\n      _this.kind = response.data.data.kind;\n    }).catch(function (e) {\n      _this.errors.push(e);\n    });\n  },\n\n  methods: {\n    countDownChanged: function countDownChanged(dismissCountDown) {\n      this.dismissCountDown = dismissCountDown;\n    },\n    showAlert: function showAlert() {\n      this.dismissCountDown = this.dismissSecs;\n    },\n\n    clearText: function clearText() {\n      console.log('cleared type name text');\n      this.$data.kind = '';\n    },\n    notifyUser: function notifyUser() {\n      this.showAlert();\n      this.goBack();\n    },\n    goBack: function goBack() {\n      var self = this;\n      setTimeout(function () {\n        self.$router.go(-1);\n      }, 2000);\n    },\n    goBackNow: function goBackNow() {\n      this.$router.go(-1);\n    },\n    updateData: function updateData() {\n      var _this2 = this;\n\n      var id = this.$route.params.id;\n      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.patch('/api/v1/service_types/' + id, {\n        kind: this.kind\n      }).then(function (response) {\n        console.log(response);\n      }).catch(function (e) {\n        _this2.errors.push(e);\n        console.log(e);\n      }).then(this.notifyUser());\n    }\n  }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzQ4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL1NlcnZpY2VUeXBlRWRpdC52dWU/YjI0MyJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJhbmltYXRlZCBmYWRlSW4gbXhcIj5cbiAgICAgICAgPGItcm93PlxuICAgICAgICAgICAgPGItY29sIG1kPVwiNlwiIGNsYXNzPVwibXgtYXV0b1wiPlxuICAgICAgICAgICAgICAgIDxiLWNhcmQ+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc2xvdD1cImhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5FZGl0YXIgdGlwbyBkZSBzZXJ2acOnbzwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGItYWxlcnQgOnNob3c9XCJkaXNtaXNzQ291bnREb3duXCJcbiAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInN1Y2Nlc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICBAZGlzbWlzc2VkPVwiZGlzbWlzc0NvdW50ZG93bj0wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgQGRpc21pc3MtY291bnQtZG93bj1cImNvdW50RG93bkNoYW5nZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgRGFkb3MgYXR1YWxpemFkb3MgY29tIHN1Y2Vzc28hXG4gICAgICAgICAgICAgICAgICAgIDwvYi1hbGVydD5cbiAgICAgICAgICAgICAgICAgICAgPGItZm9ybS1ncm91cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWZvcm0gdmFsaWRhdGVkIG5vdmFsaWRhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGItZm9ybS1ncm91cCBsYWJlbC1mb3I9XCJraW5kXCIgbGFiZWw9XCJBbHRlcmFyIHRpcG8gZGUgc2VydmnDp286XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWZvcm0taW5wdXQgdi1tb2RlbD1cImtpbmRcIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sLXdhcm5pbmdcIiBpZD1cImtpbmRcIj48L2ItZm9ybS1pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ItZm9ybS1ncm91cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1mb3JtPlxuICAgICAgICAgICAgICAgICAgICA8L2ItZm9ybS1ncm91cD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzbG90PVwiZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGItYnV0dG9uIHYtb246Y2xpY2s9XCJnb0JhY2tOb3coKVwiICB0eXBlPVwic3VibWl0XCIgc2l6ZT1cInNtXCIgdmFyaWFudD1cImRhbmdlclwiPjxpIGNsYXNzPVwiZmEgZmEtY2xvc2VcIj48L2k+IFZvbHRhcjwvYi1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPGItYnV0dG9uIHYtb246Y2xpY2s9XCJjbGVhclRleHQoKVwiIHR5cGU9XCJyZXNldFwiIHNpemU9XCJzbVwiIHZhcmlhbnQ9XCJ3YXJuaW5nXCI+PGkgY2xhc3M9XCJmYSBmYS1iYW5cIj48L2k+IEFwYWdhciBjYW1wbzwvYi1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPGItYnV0dG9uIHYtb246Y2xpY2s9XCJ1cGRhdGVEYXRhKClcIiBzdHlsZT1cImZsb2F0OnJpZ2h0XCIgdHlwZT1cInN1Ym1pdFwiIHNpemU9XCJzbVwiIHZhcmlhbnQ9XCJwcmltYXJ5XCI+PGkgY2xhc3M9XCJmYSBmYS1lZGl0XCI+PC9pPiBBbHRlcmFyIHRpcG8hPC9iLWJ1dHRvbj4gIFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2ItY2FyZD5cbiAgICAgICAgICAgIDwvYi1jb2w+XG4gICAgICAgIDwvYi1yb3c+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnc2VydmljZVR5cGVFZGl0JyxcbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNlbGVjdGVkOiBbXSxcbiAgICAgIGtpbmQ6ICcnLFxuICAgICAgZGlzbWlzc1NlY3M6IDMsXG4gICAgICBkaXNtaXNzQ291bnREb3duOiAwLFxuICAgICAgc2hvd0Rpc21pc3NpYmxlQWxlcnQ6IGZhbHNlXG4gICAgfVxuICB9LFxuICBjcmVhdGVkICgpIHtcbiAgICBjb25zdCBpZCA9IHRoaXMuJHJvdXRlLnBhcmFtcy5pZFxuICAgIGF4aW9zLmdldChgL2FwaS92MS9zZXJ2aWNlX3R5cGVzLyR7aWR9YCkudGhlbihcbiAgICAgIHJlc3BvbnNlID0+IHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZVxuICAgICAgICB0aGlzLmtpbmQgPSByZXNwb25zZS5kYXRhLmRhdGEua2luZFxuICAgICAgfSkuY2F0Y2goZSA9PiB7IHRoaXMuZXJyb3JzLnB1c2goZSkgfSlcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGNvdW50RG93bkNoYW5nZWQgKGRpc21pc3NDb3VudERvd24pIHtcbiAgICAgIHRoaXMuZGlzbWlzc0NvdW50RG93biA9IGRpc21pc3NDb3VudERvd25cbiAgICB9LFxuICAgIHNob3dBbGVydCAoKSB7XG4gICAgICB0aGlzLmRpc21pc3NDb3VudERvd24gPSB0aGlzLmRpc21pc3NTZWNzXG4gICAgfSxcbiAgICBjbGVhclRleHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdjbGVhcmVkIHR5cGUgbmFtZSB0ZXh0JylcbiAgICAgIHRoaXMuJGRhdGEua2luZCA9ICcnXG4gICAgfSxcbiAgICBub3RpZnlVc2VyICgpIHtcbiAgICAgIHRoaXMuc2hvd0FsZXJ0KClcbiAgICAgIHRoaXMuZ29CYWNrKClcbiAgICB9LFxuICAgIGdvQmFjayAoKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXNcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBzZWxmLiRyb3V0ZXIuZ28oLTEpXG4gICAgICB9LCAyMDAwKVxuICAgIH0sXG4gICAgZ29CYWNrTm93ICgpIHtcbiAgICAgIHRoaXMuJHJvdXRlci5nbygtMSlcbiAgICB9LFxuICAgIHVwZGF0ZURhdGEgKCkge1xuICAgICAgY29uc3QgaWQgPSB0aGlzLiRyb3V0ZS5wYXJhbXMuaWRcbiAgICAgIGF4aW9zLnBhdGNoKGAvYXBpL3YxL3NlcnZpY2VfdHlwZXMvJHtpZH1gLCB7XG4gICAgICAgIGtpbmQ6IHRoaXMua2luZFxuICAgICAgfSkudGhlbihyZXNwb25zZSA9PiB7IGNvbnNvbGUubG9nKHJlc3BvbnNlKSB9KS5jYXRjaChlID0+IHtcbiAgICAgICAgdGhpcy5lcnJvcnMucHVzaChlKVxuICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgfSkudGhlbih0aGlzLm5vdGlmeVVzZXIoKSlcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gU2VydmljZVR5cGVFZGl0LnZ1ZSJdLCJtYXBwaW5ncyI6Ijs7OztBQWdDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTs7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUFBOztBQUVBO0FBREE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhDQTtBQW5CQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///348\n");

/***/ })

})