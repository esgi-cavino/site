(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-bottle-bottle-module"],{

/***/ "./src/app/pages/bottle/bottle.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/bottle/bottle.module.ts ***!
  \***********************************************/
/*! exports provided: BottlePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottlePageModule", function() { return BottlePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _bottle_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bottle.page */ "./src/app/pages/bottle/bottle.page.ts");







var routes = [
    {
        path: '',
        component: _bottle_page__WEBPACK_IMPORTED_MODULE_6__["BottlePage"]
    }
];
var BottlePageModule = /** @class */ (function () {
    function BottlePageModule() {
    }
    BottlePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_bottle_page__WEBPACK_IMPORTED_MODULE_6__["BottlePage"]]
        })
    ], BottlePageModule);
    return BottlePageModule;
}());



/***/ }),

/***/ "./src/app/pages/bottle/bottle.page.html":
/*!***********************************************!*\
  !*** ./src/app/pages/bottle/bottle.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Détails d'une bouteille</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-text>Name</ion-text>\r\n  <p>Le name</p>\r\n  <ion-text>Region</ion-text>\r\n  <p>La region</p>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/bottle/bottle.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/bottle/bottle.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JvdHRsZS9ib3R0bGUucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/bottle/bottle.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/bottle/bottle.page.ts ***!
  \*********************************************/
/*! exports provided: BottlePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottlePage", function() { return BottlePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var BottlePage = /** @class */ (function () {
    function BottlePage() {
        this.bottleResponse = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"];
    }
    BottlePage.prototype.ngOnInit = function () {
    };
    BottlePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bottle',
            template: __webpack_require__(/*! ./bottle.page.html */ "./src/app/pages/bottle/bottle.page.html"),
            styles: [__webpack_require__(/*! ./bottle.page.scss */ "./src/app/pages/bottle/bottle.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BottlePage);
    return BottlePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-bottle-bottle-module.js.map