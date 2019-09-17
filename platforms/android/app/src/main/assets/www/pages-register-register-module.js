(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-register-register-module"],{

/***/ "./src/app/pages/register/register.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.module.ts ***!
  \***************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/pages/register/register.page.ts");







var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }
];
var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/pages/register/register.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n<link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">\r\n\r\n<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Inscription</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <form name=\"registerForm\" class=\"w3-container w3-card-4 w3-light-grey\">\r\n    <h2>Inscription</h2>\r\n    <p>Entrez vos informations ci-dessous afin de vous inscrire.</p>\r\n\r\n    <p>\r\n      <label>prénom</label><br />\r\n      <input\r\n              name=\"firstname\"\r\n              type=\"text\"\r\n              [(ngModel)] = \"firstname\"></p>\r\n    <p>\r\n      <label>nom de famille</label><br />\r\n      <input\r\n              name=\"lastname\"\r\n              type=\"text\"\r\n              [(ngModel)] = \"lastname\"></p>\r\n    <p>\r\n      <label>e-mail</label><br />\r\n      <input\r\n              name=\"email\"\r\n              type=\"text\"\r\n              [(ngModel)] = \"email\"></p>\r\n    <p>\r\n      <label>mot de passe</label><br />\r\n      <input\r\n              name=\"password\"\r\n              type=\"password\"\r\n              [(ngModel)] = \"password\"></p>\r\n    <p>\r\n      <label>retapez le mot de passe</label><br />\r\n      <input\r\n              name=\"password_bis\"\r\n              type=\"password\"\r\n              [(ngModel)] = \"passwordbis\"></p>\r\n\r\n    <ion-button\r\n            expand=\"block\"\r\n            shape=\"round\"\r\n            [disabled]=\"registerButtonStatus\"\r\n            (click)=\"register(firstname, lastname, email, password )\">\r\n      inscription\r\n    </ion-button><br />\r\n  </form>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/register/register.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=text] {\n  background-color: lightgrey;\n  color: black;\n  border: 2px solid black;\n  border-radius: 4px; }\n\ninput[type=password] {\n  background-color: lightgrey;\n  color: black;\n  border: 2px solid black;\n  border-radius: 4px; }\n\nion-button {\n  border-spacing: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvRTpcXEVTR0k0LWNhdmlub1xcc2l0ZVxcY2F2aW5vL3NyY1xcYXBwXFxwYWdlc1xccmVnaXN0ZXJcXHJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLG9CQUFvQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXRbdHlwZT10ZXh0XSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9cGFzc3dvcmRdIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuaW9uLWJ1dHRvbiB7XHJcbiAgYm9yZGVyLXNwYWNpbmc6IDEwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/register/register.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/register/register.page.ts ***!
  \*************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/register.service */ "./src/app/services/register.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var RegisterPage = /** @class */ (function () {
    function RegisterPage(registerService, loadCtrl, alrtCtrl, router) {
        this.registerService = registerService;
        this.loadCtrl = loadCtrl;
        this.alrtCtrl = alrtCtrl;
        this.router = router;
        this.registerButtonStatus = false;
        this.firstname = '';
        this.lastname = '';
        this.email = '';
        this.password = '';
        this.passwordbis = '';
    }
    RegisterPage.prototype.ngOnInit = function () {
    };
    RegisterPage.prototype.presentAlert = function (header, subHeader, message, buttons) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alrtCtrl.create({
                            header: header,
                            subHeader: subHeader,
                            message: message,
                            buttons: buttons
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage.prototype.register = function (firstname, lastname, email, password) {
        var _this = this;
        this.registerButtonStatus = true;
        if (this.firstname === ''
            || this.lastname === ''
            || this.email === ''
            || this.password === ''
            || this.passwordbis === '') { // Checks if all fields have been filled
            this.presentAlert('Erreur', 'Veuillez renseigner tous les champs, merci.', null, ['ok']);
            this.registerButtonStatus = false;
        }
        else if (this.password !== this.passwordbis) {
            this.presentAlert('Erreur', 'Les mots de passe renseignés sont différents', null, ['ok']);
            this.registerButtonStatus = false;
        }
        else {
            this.registerResponse = this.registerService.register(firstname, lastname, email, password)
                .subscribe(function (response) {
                console.log(response.token);
                _this.token = response.token;
                _this.presentAlert('Erreur', 'Vous avez été enregistré en tant que ' + _this.firstname + ' ' + _this.lastname, null, ['ok']);
                localStorage.setItem('token', response.token);
                _this.router.navigateByUrl('/home');
            });
            this.registerButtonStatus = false;
        }
    };
    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.page.html */ "./src/app/pages/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/pages/register/register.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_register_service__WEBPACK_IMPORTED_MODULE_2__["RegisterService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ }),

/***/ "./src/app/services/register.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/register.service.ts ***!
  \**********************************************/
/*! exports provided: RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _constants_generalconstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/generalconstants */ "./src/app/constants/generalconstants.ts");




var RegisterService = /** @class */ (function () {
    function RegisterService(httpClient) {
        this.httpClient = httpClient;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        this.registerUri = _constants_generalconstants__WEBPACK_IMPORTED_MODULE_3__["ApplicationModel"].DefaultApplicationDetails.onlineUrl + _constants_generalconstants__WEBPACK_IMPORTED_MODULE_3__["ApplicationModel"].DefaultApplicationDetails.registerRoute;
    }
    RegisterService.prototype.register = function (firstname, lastname, email, password) {
        return this.httpClient.post(this.registerUri, {
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password
        });
    };
    RegisterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RegisterService);
    return RegisterService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-register-register-module.js.map