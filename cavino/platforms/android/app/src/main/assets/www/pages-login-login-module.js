(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/pages/login/login.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n<link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">\r\n\r\n<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-title>Connexion</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n    <form name=\"loginForm\" class=\"w3-container w3-card-4 w3-light-grey\">\r\n        <h2>Connexion</h2>\r\n        <p>Entrez vos identifiants de connexion ci-dessous</p>\r\n\r\n        <p>\r\n            <label>e-mail</label><br />\r\n            <input\r\n                    name=\"email\"\r\n                    type=\"text\"\r\n                    [(ngModel)] = \"user\" /></p>\r\n        <p>\r\n            <label>mot de passe</label><br />\r\n            <input\r\n                    name=\"password\"\r\n                    type=\"password\"\r\n                    [(ngModel)] = \"password\" /></p>\r\n\r\n        <ion-button\r\n                expand=\"block\"\r\n                shape=\"round\"\r\n                [disabled] = \"this.loginButtonStatus\"\r\n                (click)=\"connect(user ,password)\">\r\n            connexion\r\n        </ion-button><br />\r\n    </form>\r\n\r\n    <div class=\"w3-container w3-card-4 w3-light-grey\">\r\n        <h2>Inscription</h2>\r\n        <p>Si vous n'êtes pas encore inscrit, vous pouvez la faire ici.</p>\r\n        <ion-button\r\n                expand=\"block\"\r\n                shape=\"round\"\r\n                [disabled]=\"this.loginButtonStatus\"\r\n                [routerDirection]=\"'root'\"\r\n                [routerLink]=\"'/register'\">\r\n            inscription\r\n        </ion-button><br />\r\n    </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=text] {\n  background-color: lightgrey;\n  color: black;\n  border: 2px solid black;\n  border-radius: 4px; }\n\ninput[type=password] {\n  background-color: lightgrey;\n  color: black;\n  border: 2px solid black;\n  border-radius: 4px; }\n\nion-button {\n  border-spacing: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vRTpcXEVTR0k0LWNhdmlub1xcc2l0ZVxcY2F2aW5vL3NyY1xcYXBwXFxwYWdlc1xcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLG9CQUFvQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXRbdHlwZT10ZXh0XSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9cGFzc3dvcmRdIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuaW9uLWJ1dHRvbiB7XHJcbiAgYm9yZGVyLXNwYWNpbmc6IDEwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var LoginPage = /** @class */ (function () {
    function LoginPage(loginService, loadCtrl, alrtCtrl, router) {
        this.loginService = loginService;
        this.loadCtrl = loadCtrl;
        this.alrtCtrl = alrtCtrl;
        this.router = router;
        this.token = '';
        this.loginButtonStatus = false;
        this.user = '';
        this.password = '';
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.presentAlert = function (header, subHeader, message, buttons) {
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
    LoginPage.prototype.goToHome = function () {
        this.router.navigateByUrl('/home');
    };
    LoginPage.prototype.connect = function (user, password) {
        this.loginButtonStatus = true;
        if (this.user === '' || this.password === '') { // Check if both email and password has been filled
            this.presentAlert('Erreur', 'Veuillez renseigner vos identifiants', null, ['ok']);
        }
        else if (localStorage.getItem('token') == null ||
            localStorage.getItem('token') === '') { // Check if no token has already been registered
            this.loginResponse = this.loginService.login(user, password)
                .subscribe(function (response) {
                // this.presentAlert('Connected', 'connected', 'You are now connected', ['ok']);
                localStorage.setItem('token', response.token);
                localStorage.setItem('uuid', response.uuid);
            });
        }
        else {
            this.presentAlert('Connected', 'Already connected', 'You are already connected with the token ' + localStorage.getItem('token'), ['ok']);
            location.reload();
            console.log('token : ' + this.token);
        }
        this.loginButtonStatus = false;
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/pages/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module.js.map