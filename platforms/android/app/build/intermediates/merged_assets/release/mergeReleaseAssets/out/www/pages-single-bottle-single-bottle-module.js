(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-single-bottle-single-bottle-module"],{

/***/ "./src/app/pages/single-bottle/single-bottle.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/single-bottle/single-bottle.module.ts ***!
  \*************************************************************/
/*! exports provided: SingleBottlePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleBottlePageModule", function() { return SingleBottlePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _single_bottle_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./single-bottle.page */ "./src/app/pages/single-bottle/single-bottle.page.ts");







var routes = [
    {
        path: '',
        component: _single_bottle_page__WEBPACK_IMPORTED_MODULE_6__["SingleBottlePage"]
    }
];
var SingleBottlePageModule = /** @class */ (function () {
    function SingleBottlePageModule() {
    }
    SingleBottlePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_single_bottle_page__WEBPACK_IMPORTED_MODULE_6__["SingleBottlePage"]]
        })
    ], SingleBottlePageModule);
    return SingleBottlePageModule;
}());



/***/ }),

/***/ "./src/app/pages/single-bottle/single-bottle.page.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/single-bottle/single-bottle.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Une bouteille</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/single-bottle/single-bottle.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/single-bottle/single-bottle.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpbmdsZS1ib3R0bGUvc2luZ2xlLWJvdHRsZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/single-bottle/single-bottle.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/single-bottle/single-bottle.page.ts ***!
  \***********************************************************/
/*! exports provided: SingleBottlePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleBottlePage", function() { return SingleBottlePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SingleBottlePage = /** @class */ (function () {
    function SingleBottlePage() {
    }
    SingleBottlePage.prototype.ngOnInit = function () {
    };
    SingleBottlePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-single-bottle',
            template: __webpack_require__(/*! ./single-bottle.page.html */ "./src/app/pages/single-bottle/single-bottle.page.html"),
            styles: [__webpack_require__(/*! ./single-bottle.page.scss */ "./src/app/pages/single-bottle/single-bottle.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SingleBottlePage);
    return SingleBottlePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-single-bottle-single-bottle-module.js.map