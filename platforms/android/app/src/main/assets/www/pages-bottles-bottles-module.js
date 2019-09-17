(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-bottles-bottles-module"],{

/***/ "./src/app/pages/bottles/bottles.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/bottles/bottles.module.ts ***!
  \*************************************************/
/*! exports provided: BottlesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottlesPageModule", function() { return BottlesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _bottles_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bottles.page */ "./src/app/pages/bottles/bottles.page.ts");







var routes = [
    {
        path: '',
        component: _bottles_page__WEBPACK_IMPORTED_MODULE_6__["BottlesPage"]
    }
];
var BottlesPageModule = /** @class */ (function () {
    function BottlesPageModule() {
    }
    BottlesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_bottles_page__WEBPACK_IMPORTED_MODULE_6__["BottlesPage"]]
        })
    ], BottlesPageModule);
    return BottlesPageModule;
}());



/***/ }),

/***/ "./src/app/pages/bottles/bottles.page.html":
/*!*************************************************!*\
  !*** ./src/app/pages/bottles/bottles.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-title>Mes bouteilles</ion-title>\r\n        <ion-menu side=\"end\" menuId=\"filter\">\r\n            <ion-header>\r\n                <ion-toolbar color=\"primary\">\r\n                    <ion-title>Filtres</ion-title>\r\n                </ion-toolbar>\r\n            </ion-header>\r\n        </ion-menu>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n\r\n    <ion-list>\r\n        <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let b of bottleList\">\r\n            <ion-card>\r\n                <ion-card-content>\r\n                    <ion-grid>\r\n                        <ion-row>\r\n                            <ion-col>\r\n                                <ion-card-header>\r\n                                    <ion-card-title>{{b.name}}</ion-card-title>\r\n                                    <ion-card-subtitle>{{b.description}}</ion-card-subtitle>\r\n                                </ion-card-header>\r\n                                <ul>\r\n                                    <li>prix actuel : {{b.price}}</li>\r\n                                    <li>prix moyen : {{b.averagePrice}}</li>\r\n                                    <li>pays : {{b.country.name}}</li>\r\n                                    <li>région : {{b.region.name}}</li>\r\n                                    <li>domain : {{b.domain.name}}</li>\r\n                                    <li>couleur : {{b.wineType.name}}</li>\r\n                                    <li>Millésime : {{b.vintage.year}}</li>\r\n                                    <li>Id : {{b.id}}</li>\r\n                                    <input type=\"hidden\" value=\"{{b.id}}\" />\r\n                                </ul>\r\n                                <ion-img *ngIf=\"b.isOrganic\" class=\"abicon\" src=\"/assets/agriculture_biologique.png\"></ion-img>\r\n                            </ion-col>\r\n                            <ion-col>\r\n                                <ion-img class=\"bottle_mini\" src=\"/assets/medoc-2014.jpg\"></ion-img>\r\n                            </ion-col>\r\n                        </ion-row>\r\n                    </ion-grid>\r\n                </ion-card-content>\r\n            </ion-card>\r\n        </ion-menu-toggle>\r\n    </ion-list>\r\n\r\n</ion-content>\r\n\r\n<ion-footer padding>\r\n    <ion-button\r\n            expand=\"block\"\r\n            shape=\"round\"\r\n            [disabled]=\"bottlesButtonStatus\"\r\n            routerLink=\"/new-bottle\">\r\n        ajouter un bouteille\r\n    </ion-button>\r\n</ion-footer>\r\n"

/***/ }),

/***/ "./src/app/pages/bottles/bottles.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/bottles/bottles.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bottle_mini {\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  padding: 5px;\n  max-width: 350px;\n  height: auto;\n  margin-left: auto;\n  margin-right: auto; }\n\n.abicon {\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  padding: 5px;\n  max-width: 50px;\n  height: auto;\n  margin-right: auto; }\n\n.div_left {\n  margin-left: 0px;\n  width: 50%; }\n\n.div_right {\n  margin-right: 0px;\n  width: 50%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYm90dGxlcy9FOlxcRVNHSTQtY2F2aW5vXFxzaXRlXFxjYXZpbm8vc3JjXFxhcHBcXHBhZ2VzXFxib3R0bGVzXFxib3R0bGVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVUsRUFBQTs7QUFHWjtFQUNFLGlCQUFpQjtFQUNqQixVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ib3R0bGVzL2JvdHRsZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvdHRsZV9taW5pIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgbWF4LXdpZHRoOiAzNTBweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uYWJpY29uIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgbWF4LXdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5kaXZfbGVmdCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4uZGl2X3JpZ2h0IHtcclxuICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/bottles/bottles.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/bottles/bottles.page.ts ***!
  \***********************************************/
/*! exports provided: BottlesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottlesPage", function() { return BottlesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_bottles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/bottles.service */ "./src/app/services/bottles.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var BottlesPage = /** @class */ (function () {
    function BottlesPage(bottlesService, router) {
        this.bottlesService = bottlesService;
        this.router = router;
    }
    BottlesPage.prototype.ngOnInit = function () {
        this.getUserBottles();
    };
    BottlesPage.prototype.getUserBottles = function () {
        var _this = this;
        this.bottlesResponse = this.bottlesService.getUserBottles(0, 20)
            .subscribe(function (data) {
            console.log(data);
            _this.bottleList = data;
        });
    };
    BottlesPage.prototype.goToBottle = function (id) {
    };
    BottlesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bottles',
            template: __webpack_require__(/*! ./bottles.page.html */ "./src/app/pages/bottles/bottles.page.html"),
            styles: [__webpack_require__(/*! ./bottles.page.scss */ "./src/app/pages/bottles/bottles.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_bottles_service__WEBPACK_IMPORTED_MODULE_2__["BottlesService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], BottlesPage);
    return BottlesPage;
}());



/***/ }),

/***/ "./src/app/services/bottles.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/bottles.service.ts ***!
  \*********************************************/
/*! exports provided: BottlesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottlesService", function() { return BottlesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _constants_generalconstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/generalconstants */ "./src/app/constants/generalconstants.ts");




var BottlesService = /** @class */ (function () {
    function BottlesService(http) {
        this.http = http;
        this.uuid = localStorage.getItem('uuid');
        this.token = localStorage.getItem('token');
        this.options = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                Authorization: 'Bearer ' + this.token,
                'Content-Type': 'application/json'
            }) };
        this.userBottlesUri = _constants_generalconstants__WEBPACK_IMPORTED_MODULE_3__["ApplicationModel"].DefaultApplicationDetails.onlineUrl
            + _constants_generalconstants__WEBPACK_IMPORTED_MODULE_3__["ApplicationModel"].DefaultApplicationDetails.bottlesRoute;
    }
    BottlesService.prototype.getUserBottles = function (offset, limit) {
        return this.http.get(this.userBottlesUri + '?offset=' + offset + '&limit=' + limit, this.options);
    };
    BottlesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], BottlesService);
    return BottlesService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-bottles-bottles-module.js.map