(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-new-bottle-new-bottle-module"],{

/***/ "./src/app/pages/new-bottle/new-bottle.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/new-bottle/new-bottle.module.ts ***!
  \*******************************************************/
/*! exports provided: NewBottlePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewBottlePageModule", function() { return NewBottlePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _new_bottle_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-bottle.page */ "./src/app/pages/new-bottle/new-bottle.page.ts");







var routes = [
    {
        path: '',
        component: _new_bottle_page__WEBPACK_IMPORTED_MODULE_6__["NewBottlePage"]
    }
];
var NewBottlePageModule = /** @class */ (function () {
    function NewBottlePageModule() {
    }
    NewBottlePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            declarations: [_new_bottle_page__WEBPACK_IMPORTED_MODULE_6__["NewBottlePage"]]
        })
    ], NewBottlePageModule);
    return NewBottlePageModule;
}());



/***/ }),

/***/ "./src/app/pages/new-bottle/new-bottle.page.html":
/*!*******************************************************!*\
  !*** ./src/app/pages/new-bottle/new-bottle.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Nouvelle bouteille</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <form name=\"registerForm\" class=\"w3-container w3-card-4 w3-light-grey\">\n    <p>Entrez vos informations ci-dessous afin d'enregistrer une nouvelle bouteille.</p>\n\n    <div *ngFor=\"let region of regionList.name; let i=index\">\n      <select [formControlName]=\"i\">\n      </select>\n    </div>\n\n    <div>\n      <p>\n        <label>nom</label><br />\n        <input\n                name=\"name\"\n                type=\"text\"\n                [(ngModel)] = \"name\"></p>\n      <p>\n        <label>description</label><br />\n        <input\n                name=\"description\"\n                type=\"text\"\n                [(ngModel)] = \"description\"></p>\n      <p>\n        <label>prix</label><br />\n        <input\n                name=\"price\"\n                type=\"text\"\n                [(ngModel)] = \"price\"></p>\n      <p>\n        <label>prix moyen</label><br />\n        <input\n                name=\"averagePrice\"\n                type=\"text\"\n                [(ngModel)] = \"averagePrice\"></p>\n      <p>\n        <label>bio</label><br />\n        <input\n                name=\"isOrganic\"\n                type=\"text\"\n                [(ngModel)] = \"isOrganic\"></p>\n      <p>\n        <label>Type de vin</label><br />\n        <input\n                name=\"wineTypeId\"\n                type=\"text\"\n                [(ngModel)] = \"wineTypeId\"></p>\n      <p>\n        <label>pays</label><br />\n        <input\n                name=\"countryId\"\n                type=\"text\"\n                [(ngModel)] = \"countryId\"></p>\n      <p>\n        <label>région</label><br />\n        <input\n                name=\"regionId\"\n                type=\"text\"\n                [(ngModel)] = \"regionId\"></p>\n      <p>\n        <label>domaine</label><br />\n        <input\n                name=\"domainId\"\n                type=\"text\"\n                [(ngModel)] = \"domainId\"></p>\n      <p>\n        <label>millésime</label><br />\n        <input\n                name=\"vintageId\"\n                type=\"text\"\n                [(ngModel)] = \"vintageId\"></p>\n    </div>\n    <ion-button\n            expand=\"block\"\n            shape=\"round\"\n            [disabled]=\"newBottleButtonStatus\"\n            (click)=\"createNewBottle(name,\n                                     description,\n                                     price,\n                                     averagePrice,\n                                     isOrganic,\n                                     wineTypeId,\n                                     countryId,\n                                     regionId,\n                                     domainId,\n                                     vintageId)\">\n      Enregistrer\n    </ion-button><br />\n  </form>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/new-bottle/new-bottle.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/new-bottle/new-bottle.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  margin-top: 15px;\n  margin-bottom: 5px; }\n\ndiv {\n  margin: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbmV3LWJvdHRsZS9FOlxcRVNHSTQtY2F2aW5vXFxzaXRlXFxjYXZpbm8vc3JjXFxhcHBcXHBhZ2VzXFxuZXctYm90dGxlXFxuZXctYm90dGxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9uZXctYm90dGxlL25ldy1ib3R0bGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbmRpdiB7XHJcbiAgbWFyZ2luOiA1MHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/new-bottle/new-bottle.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/new-bottle/new-bottle.page.ts ***!
  \*****************************************************/
/*! exports provided: NewBottlePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewBottlePage", function() { return NewBottlePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_new_bottle_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/new-bottle.service */ "./src/app/services/new-bottle.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_region_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/region.service */ "./src/app/services/region.service.ts");





var NewBottlePage = /** @class */ (function () {
    function NewBottlePage(newBottleService, regionService, router) {
        this.newBottleService = newBottleService;
        this.regionService = regionService;
        this.router = router;
    }
    NewBottlePage.prototype.ngOnInit = function () {
        var _this = this;
        this.regionService.getRegionsList()
            .subscribe(function (data) {
            _this.regionList = data;
            console.log(_this.regionList);
        });
    };
    NewBottlePage.prototype.createNewBottle = function (name, description, price, averagePrice, isOrganic, wineTypeId, countryId, regionId, domainId, vintageId) {
        this.newBottleButtonStatus = true;
        this.newBottleService.registerNewBottle(name, description, price, averagePrice, isOrganic, wineTypeId, countryId, regionId, domainId, vintageId)
            .subscribe(function (data) {
            console.log(data);
        });
        this.newBottleButtonStatus = false;
    };
    NewBottlePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-bottle',
            template: __webpack_require__(/*! ./new-bottle.page.html */ "./src/app/pages/new-bottle/new-bottle.page.html"),
            styles: [__webpack_require__(/*! ./new-bottle.page.scss */ "./src/app/pages/new-bottle/new-bottle.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_new_bottle_service__WEBPACK_IMPORTED_MODULE_2__["NewBottleService"],
            _services_region_service__WEBPACK_IMPORTED_MODULE_4__["RegionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NewBottlePage);
    return NewBottlePage;
}());



/***/ }),

/***/ "./src/app/services/new-bottle.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/new-bottle.service.ts ***!
  \************************************************/
/*! exports provided: NewBottleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewBottleService", function() { return NewBottleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _constants_generalconstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/generalconstants */ "./src/app/constants/generalconstants.ts");




var NewBottleService = /** @class */ (function () {
    function NewBottleService(httpClient) {
        this.httpClient = httpClient;
        this.uuid = localStorage.getItem('uuid');
        this.token = localStorage.getItem('token');
        this.options = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                Authorization: 'Bearer ' + this.token,
                'Content-Type': 'application/json'
            }) };
        this.newBottleUri = _constants_generalconstants__WEBPACK_IMPORTED_MODULE_3__["ApplicationModel"].DefaultApplicationDetails.onlineUrl
            + _constants_generalconstants__WEBPACK_IMPORTED_MODULE_3__["ApplicationModel"].DefaultApplicationDetails.newBottleRoute;
    }
    NewBottleService.prototype.registerNewBottle = function (name, description, price, averagePrice, isOrganic, wineTypeId, countryId, regionId, domainId, vintageId) {
        return this.httpClient.post(this.newBottleUri, {
            name: name,
            description: description,
            price: price,
            averagePrice: averagePrice,
            isOrganic: isOrganic,
            wineTypeId: wineTypeId,
            regionId: regionId,
            countryId: countryId,
            domainId: domainId,
            vintageId: vintageId
        }, this.options);
    };
    NewBottleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], NewBottleService);
    return NewBottleService;
}());



/***/ }),

/***/ "./src/app/services/region.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/region.service.ts ***!
  \********************************************/
/*! exports provided: RegionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionService", function() { return RegionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _constants_generalconstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/generalconstants */ "./src/app/constants/generalconstants.ts");




var RegionService = /** @class */ (function () {
    function RegionService(http) {
        this.http = http;
        this.uuid = localStorage.getItem('uuid');
        this.token = localStorage.getItem('token');
        this.options = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                Authorization: 'Bearer ' + this.token,
                'Content-Type': 'application/json'
            }) };
        this.regionListUri = _constants_generalconstants__WEBPACK_IMPORTED_MODULE_3__["ApplicationModel"].DefaultApplicationDetails.onlineUrl
            + _constants_generalconstants__WEBPACK_IMPORTED_MODULE_3__["ApplicationModel"].DefaultApplicationDetails.regionsRoute
            + '?offset=0&limit=20';
    }
    RegionService.prototype.getRegionsList = function () {
        return this.http.get(this.regionListUri, this.options);
    };
    RegionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RegionService);
    return RegionService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-new-bottle-new-bottle-module.js.map