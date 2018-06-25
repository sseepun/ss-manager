webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
// Route Guard
var route_guard_service_1 = __webpack_require__("./src/app/services/route-guard.service.ts");
// Components
var page_home_component_1 = __webpack_require__("./src/app/page-home/page-home.component.ts");
var page_login_component_1 = __webpack_require__("./src/app/page-login/page-login.component.ts");
var page_register_component_1 = __webpack_require__("./src/app/page-register/page-register.component.ts");
var page_about_component_1 = __webpack_require__("./src/app/page-about/page-about.component.ts");
var page_contact_component_1 = __webpack_require__("./src/app/page-contact/page-contact.component.ts");
var page_user_panel_component_1 = __webpack_require__("./src/app/page-user-panel/page-user-panel.component.ts");
var page_admin_panel_component_1 = __webpack_require__("./src/app/page-admin-panel/page-admin-panel.component.ts");
var page_forms_component_1 = __webpack_require__("./src/app/page-forms/page-forms.component.ts");
var ss_pdf_form_component_1 = __webpack_require__("./src/app/page-forms/ss-pdf-form/ss-pdf-form.component.ts");
var routes = [
    {
        path: '', component: page_home_component_1.PageHomeComponent
    },
    {
        path: 'login', component: page_login_component_1.PageLoginComponent,
        canActivate: [route_guard_service_1.GuestRouteGuard]
    },
    {
        path: 'register', component: page_register_component_1.PageRegisterComponent,
        canActivate: [route_guard_service_1.GuestRouteGuard]
    },
    {
        path: 'about', component: page_about_component_1.PageAboutComponent
    },
    {
        path: 'contact', component: page_contact_component_1.PageContactComponent
    },
    {
        path: 'admin-panel', component: page_admin_panel_component_1.PageAdminPanelComponent,
        canActivate: [route_guard_service_1.MemberRouteGuard]
    },
    {
        path: 'user-panel', component: page_user_panel_component_1.PageUserPanelComponent,
        canActivate: [route_guard_service_1.MemberRouteGuard]
    },
    {
        path: 'forms/:accessCode', component: ss_pdf_form_component_1.SsPdfFormComponent,
        canActivate: [route_guard_service_1.MemberRouteGuard]
    },
    {
        path: 'forms', component: page_forms_component_1.PageFormsComponent,
        canActivate: [route_guard_service_1.MemberRouteGuard]
    },
    {
        path: '**', redirectTo: ''
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule],
            providers: [route_guard_service_1.GuestRouteGuard, route_guard_service_1.MemberRouteGuard, route_guard_service_1.AdminRouteGuard]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n/* Scroll bar style */\r\n#app-selector-container::-webkit-scrollbar,\r\n#app-content-container::-webkit-scrollbar {width: 6px;}\r\n#app-selector-container::-webkit-scrollbar-track,\r\n#app-content-container::-webkit-scrollbar-track {\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); border-radius: 3px;\t\r\n}\r\n#app-selector-container::-webkit-scrollbar-thumb,\r\n#app-content-container::-webkit-scrollbar-thumb {\r\n    background-color: #B5B4B4; outline: 1px solid slategrey; border-radius: 3px;\t\t\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header-navbar></app-header-navbar>\n\n<div class=\"app-container\">\n    <router-outlet></router-outlet>\n</div>\n\n<app-footer-navbar></app-footer-navbar>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var socketio_service_1 = __webpack_require__("./src/app/services/socketio.service.ts");
var user_service_1 = __webpack_require__("./src/app/services/user.service.ts");
var cookie_service_1 = __webpack_require__("./src/app/services/cookie.service.ts");
core_1.enableProdMode();
var AppComponent = /** @class */ (function () {
    function AppComponent(router, _socketio, _user, _cookie) {
        this.router = router;
        this._socketio = _socketio;
        this._user = _user;
        this._cookie = _cookie;
    }
    AppComponent.prototype.ngOnInit = function () {
        this._socketio.connect();
        // Get announcement from Socket.io
        this._socketio.getSocket().on('announce-account-status', function (userId) {
            if (this.yourAccount(userId)) {
                this._user.update();
                this.router.navigate(['/check-status']);
            }
        }.bind(this));
        this._socketio.getSocket().on('announce-account-delete', function (userId) {
            if (this.yourAccount(userId)) {
                this._socketio.logout();
                this._user.logoutUser();
                this.router.navigate(['/']);
            }
        }.bind(this));
        this._socketio.getSocket().on('announce-account-privilage', function (userId) {
            if (this.yourAccount(userId)) {
                this._user.update();
                this.router.navigate(['/']);
            }
        }.bind(this));
    };
    AppComponent.prototype.yourAccount = function (userId) {
        if (this._user.getUser() !== undefined && this._user.getUser() !== null && userId === this._user.getUser()._id) {
            return true;
        }
        else
            return false;
    };
    AppComponent.prototype.ngOnDestroy = function () {
        // Unbind Socket.io
        this._socketio.getSocket().removeAllListeners('announce-account-status');
        this._socketio.getSocket().removeAllListeners('announce-account-delete');
        this._socketio.getSocket().removeAllListeners('announce-account-privilage');
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            socketio_service_1.SocketioService,
            user_service_1.UserService,
            cookie_service_1.CookieService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Modules
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var ng2_pdf_viewer_1 = __webpack_require__("./node_modules/ng2-pdf-viewer/ng2-pdf-viewer.es5.js");
// Routing Modules
var page_user_panel_routing_module_1 = __webpack_require__("./src/app/page-user-panel/page-user-panel-routing.module.ts");
var app_routing_module_1 = __webpack_require__("./src/app/app-routing.module.ts");
// Services
var admin_service_1 = __webpack_require__("./src/app/services/admin.service.ts");
var authentication_service_1 = __webpack_require__("./src/app/services/authentication.service.ts");
var cookie_service_1 = __webpack_require__("./src/app/services/cookie.service.ts");
var fileupload_service_1 = __webpack_require__("./src/app/services/fileupload.service.ts");
var form_service_1 = __webpack_require__("./src/app/services/form.service.ts");
var socketio_service_1 = __webpack_require__("./src/app/services/socketio.service.ts");
var translation_service_1 = __webpack_require__("./src/app/services/translation.service.ts");
var user_service_1 = __webpack_require__("./src/app/services/user.service.ts");
var route_guard_service_1 = __webpack_require__("./src/app/services/route-guard.service.ts");
// Components
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var header_navbar_component_1 = __webpack_require__("./src/app/navbars/header-navbar/header-navbar.component.ts");
var page_home_component_1 = __webpack_require__("./src/app/page-home/page-home.component.ts");
var page_login_component_1 = __webpack_require__("./src/app/page-login/page-login.component.ts");
var footer_navbar_component_1 = __webpack_require__("./src/app/navbars/footer-navbar/footer-navbar.component.ts");
var page_contact_component_1 = __webpack_require__("./src/app/page-contact/page-contact.component.ts");
var page_about_component_1 = __webpack_require__("./src/app/page-about/page-about.component.ts");
var page_register_component_1 = __webpack_require__("./src/app/page-register/page-register.component.ts");
var page_admin_panel_component_1 = __webpack_require__("./src/app/page-admin-panel/page-admin-panel.component.ts");
var page_user_panel_component_1 = __webpack_require__("./src/app/page-user-panel/page-user-panel.component.ts");
var table_search_component_1 = __webpack_require__("./src/app/reusable/table-search/table-search.component.ts");
var pagination_component_1 = __webpack_require__("./src/app/reusable/pagination/pagination.component.ts");
var signature_pad_component_1 = __webpack_require__("./src/app/reusable/signature-pad/signature-pad.component.ts");
var page_forms_component_1 = __webpack_require__("./src/app/page-forms/page-forms.component.ts");
var ss_pdf_form_component_1 = __webpack_require__("./src/app/page-forms/ss-pdf-form/ss-pdf-form.component.ts");
var page_user_profile_component_1 = __webpack_require__("./src/app/page-user-panel/page-user-profile/page-user-profile.component.ts");
var page_user_form_history_component_1 = __webpack_require__("./src/app/page-user-panel/page-user-form-history/page-user-form-history.component.ts");
var page_user_setting_component_1 = __webpack_require__("./src/app/page-user-panel/page-user-setting/page-user-setting.component.ts");
var user_profile_component_1 = __webpack_require__("./src/app/reusable/user-profile/user-profile.component.ts");
var form_result_component_1 = __webpack_require__("./src/app/reusable/form-result/form-result.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                header_navbar_component_1.HeaderNavbarComponent,
                page_home_component_1.PageHomeComponent,
                page_login_component_1.PageLoginComponent,
                footer_navbar_component_1.FooterNavbarComponent,
                page_contact_component_1.PageContactComponent,
                page_about_component_1.PageAboutComponent,
                page_register_component_1.PageRegisterComponent,
                page_admin_panel_component_1.PageAdminPanelComponent,
                page_user_panel_component_1.PageUserPanelComponent,
                table_search_component_1.TableSearchComponent,
                pagination_component_1.PaginationComponent,
                signature_pad_component_1.SignaturePadComponent,
                page_forms_component_1.PageFormsComponent,
                ss_pdf_form_component_1.SsPdfFormComponent,
                page_user_profile_component_1.PageUserProfileComponent,
                page_user_form_history_component_1.PageUserFormHistoryComponent,
                page_user_setting_component_1.PageUserSettingComponent,
                user_profile_component_1.UserProfileComponent,
                form_result_component_1.FormResultComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                forms_1.FormsModule,
                ng2_pdf_viewer_1.PdfViewerModule,
                page_user_panel_routing_module_1.PageUserPanelRoutingModule,
                app_routing_module_1.AppRoutingModule
            ],
            providers: [
                admin_service_1.AdminService,
                authentication_service_1.AuthenticationService,
                cookie_service_1.CookieService,
                fileupload_service_1.FileuploadService,
                form_service_1.FormService,
                socketio_service_1.SocketioService,
                translation_service_1.TranslationService,
                user_service_1.UserService,
                {
                    provide: core_1.APP_INITIALIZER,
                    useFactory: function (_user) { return function () { return _user.init(); }; },
                    deps: [user_service_1.UserService],
                    multi: true
                },
                route_guard_service_1.GuestRouteGuard, route_guard_service_1.MemberRouteGuard, route_guard_service_1.AdminRouteGuard
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/globals.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ipHost = 'http://localhost:7000';
exports.testing = true;


/***/ }),

/***/ "./src/app/languages/translation-en-th.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Translate_EN_TH = {
    '.': '',
    'home': 'หน้าแรก',
    'sign in': 'เข้าสู่ระบบ',
    'sign up': 'สมัครสมาชิก',
    'about': 'เกี่ยวกับเรา',
    'contact': 'ติดต่อเรา',
    'username': 'ชื่อผู้ใช้งาน',
    'password': 'รหัสผ่าน',
    'remember me': 'จำฉันไว้ในระบบ',
    'forgot': 'ลืม',
    'admin panel': 'ระบบจัดการ Admin',
    'hello,': 'สวัสดี',
    'status': 'สถานะ',
    'e-mail': 'อีเมล',
    'e-mail address': 'ที่อยู่อีเมล',
    'first name': 'ชื่อจริง',
    'last name': 'นามสกุล',
    'used for singing in': 'ใช้ในการเข้าสู่ระบบ',
    '5 letters minimum': 'อย่างต่ำ 5 ตัวอักษร',
    'confirm password': 'ยืนยันรหัสผ่าน',
    'e-mail is already in use': 'อีเมลนี้ได้ถูกใช้งานแล้ว',
    'password is too short': 'รหัสผ่านสั้นเกินไป',
    'password does not match': 'รหัสผ่านไม่ตรงกัน',
    'sign out': 'ออกจากระบบ',
    'forms': 'แบบฟอร์ม',
    'all forms': 'แบบฟอร์มทั้งหมด',
    'show per page': 'แสดงต่อหน้า',
    'sort by': 'เรียงโดย',
    'search': 'ค้นหา',
    'create date': 'จัดทำวันที่',
    'no forms available.': 'ไม่พบเเบบฟอร์มที่ค้นหา',
    'loading forms': 'กำลังค้นหาเเบบฟอร์ม',
    'submit form': 'ส่งแบบฟอร์ม',
    'back to forms': 'กลับไปเลือกเเบบฟอร์ม',
    'form actions': 'การจัดการแบบฟอร์ม',
    'your form is submitted successfully. our staff will check your form shortly. thank you.': 'เราได้รับแบบฟอร์มของคุณเรียบร้อยแล้ว เจ้าหน้าที่ของเรากำลังตรวจสอบความถูกต้อง ขอบคุณครับ',
    'we cannot accept your form at this time. please try again later. thank you.': 'ระบบของเราเราไม่สามารถรับแบบฟอร์มของคุณได้ในขณะนี้ กรุณาลองใหม่อีกครั้งในภายหลัง ขอบคุณครับ',
    'your form is updated successfully. our staff will check your form shortly. thank you.': 'คุณได้แก้ไขแบบฟอร์มของคุณเรียบร้อยแล้ว เจ้าหน้าที่ของเรากำลังตรวจสอบความถูกต้อง ขอบคุณครับ',
    'you cannot update your form at this time. please try again later. thank you.': 'คุณไม่สามารถแก้ไขแบบฟอร์มของคุณได้ในขณะนี้ กรุณาลองใหม่อีกครั้งในภายหลัง ขอบคุณครับ',
    'your form status has been updated by our staff.': 'สถานะแบบฟอร์มของคุณได้รับการอัปเดตโดยเจ้าหน้าที่ของเราแล้ว',
    'this form type has been set inactive or deleted by our staff.': 'แบบฟอร์มนี้ได้รับการตั้งค่าระงับการใช้งานชั่วคราวหรือถูกลบโดยเจ้าหน้าที่ของเรา',
    'your form has been deleted by our staff. please contact our staff for information. thank you.': 'เราได้ลบฟอร์มของคุณแล้ว กรุณาติดต่อเจ้าหน้าที่เพื่อสอบถามข้อมูล ขอบคุณครับ',
    'edit submitted form failed.': 'เกิดข้อผิดพลาดในการเเก้ไขแบบฟอร์มนี้',
    'set submitted form status failed.': 'เกิดข้อผิดพลาดในการเเก้ไขสถานะของแบบฟอร์มนี้',
    'go to home': 'ไปหน้าเเรก',
    'go to forms': 'ไปหน้าแบบฟอร์ม',
    'go to your history': 'ไปหน้าประวัติการใช้งาน',
    'back to admin forms': 'กลับไปหน้าจัดการแบบฟอร์ม',
    'download pdf': 'ดาวน์โหลด PDF',
    'back to form history': 'กลับไปหน้าประวัติการใช้งาน',
    'loading submitted form history': 'กำลังค้นหาประวัติการใช้งานเเบบฟอร์มของคุณ',
    'no submitted forms found.': 'ไม่พบประวัติการใช้งานเเบบฟอร์มของคุณ',
    'form name': 'ชื่อแบบฟอร์ม',
    'submitted date': 'วันที่ส่ง',
    'actions': 'การจัดการ',
    'delete this form': 'ลบแบบฟอร์มนี้',
    'edit this form': 'แก้ไขแบบฟอร์มนี้'
};


/***/ }),

/***/ "./src/app/navbars/footer-navbar/footer-navbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navbars/footer-navbar/footer-navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-md-12 text-center\">\n        <div class=\"social\">\n          <ul class=\"list-inline list-unstyled\">\n            <li class=\"list-inline-item ml-2\">\n              <a href=\"#\">\n                <i class=\"fab fa-facebook-f\"></i>\n              </a>\n            </li>\n            <li class=\"list-inline-item ml-2\">\n              <a href=\"#\">\n                <i class=\"fab fa-instagram\"></i>\n              </a>\n            </li>\n            <li class=\"list-inline-item ml-2\">\n              <a href=\"#\">\n                <i class=\"fab fa-twitter\"></i>\n              </a>\n            </li>\n            <li class=\"list-inline-item ml-2\">\n              <a href=\"#\">\n                <i class=\"fab fa-youtube\"></i>\n              </a>\n            </li>\n            <li class=\"list-inline-item ml-2\">\n              <a href=\"#\">\n                <i class=\"fab fa-vimeo-v\"></i>\n              </a>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-md-3 col-9\">\n        <hr>\n      </div>\n      <div class=\"col-md-12 text-center\">\n        <p><span>@Copyright 2017-2018</span> - All Rights Reserved by <span>S.Seepun</span></p>\n      </div>\n    </div>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/navbars/footer-navbar/footer-navbar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var FooterNavbarComponent = /** @class */ (function () {
    function FooterNavbarComponent() {
    }
    FooterNavbarComponent.prototype.ngOnInit = function () {
    };
    FooterNavbarComponent = __decorate([
        core_1.Component({
            selector: 'app-footer-navbar',
            template: __webpack_require__("./src/app/navbars/footer-navbar/footer-navbar.component.html"),
            styles: [__webpack_require__("./src/app/navbars/footer-navbar/footer-navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterNavbarComponent);
    return FooterNavbarComponent;
}());
exports.FooterNavbarComponent = FooterNavbarComponent;


/***/ }),

/***/ "./src/app/navbars/header-navbar/header-navbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navbars/header-navbar/header-navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top custom-nav\">\n  <div class=\"container\">\n    <div class=\"logo\">\n      <h6 class=\"logo-title\">SSM</h6>\n    </div>\n    <div class=\"d-xl-none d-lg-none\">\n      <button class=\"navbar-toggle\" type=\"button\" data-toggle=\"menu-side\" data-target=\".side-menu\" data-target-2=\".side-menu-container\">\n        <i class=\"fas fa-bars\"></i>\n      </button>\n    </div>\n    <div class=\"side-menu in\">\n      <div class=\"theme\">\n        <a class=\"d-md-none d-sm-none d-none d-lg-inline-block setting\" href=\"#\"><i class=\"fas fa-cog\"></i></a>\n        <a id=\"day\" class=\"active-theme\" data-theme=\"assets/css/theme/day.css\"><i class=\"fas fa-sun\"></i></a>\n        <a id=\"night\" data-theme=\"assets/css/theme/night.css\"><i class=\"fas fa-moon\"></i></a>\n      </div>\n      <div class=\"theme theme-language\">\n        <a class=\"d-md-none d-sm-none d-none d-lg-inline-block setting\" href=\"#\"><i class=\"fas fa-globe\"></i></a>\n        <a class=\"active-theme\" (click)=\"_t.setLanguage('EN')\">EN</a>\n        <a (click)=\"_t.setLanguage('TH')\">TH</a>\n      </div>\n\n      <ul class=\"nav\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/\" \n          [routerLinkActiveOptions]=\"{exact: true}\">{{_t.translate('Home')}}</a>\n        </li>\n\n        <ng-container *ngIf=\"!_user.isLoggedIn\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/login\">{{_t.translate('Sign In')}}</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/register\">{{_t.translate('Sign Up')}}</a>\n          </li>\n        </ng-container>\n\n        <li class=\"nav-item\" *ngIf=\"_user.isLoggedIn && _user.isActive && _user.isAdmin\">\n          <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/admin-panel\">{{_t.translate('Admin Panel')}}</a>\n        </li>\n\n        <ng-container *ngIf=\"_user.isLoggedIn && _user.isActive\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/user-panel\">\n              {{_t.translate('Hello,')}} <span class=\"main-color strong\">{{helloUsername()}}</span>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/forms\">{{_t.translate('Forms')}}</a>\n          </li>\n        </ng-container>\n\n        <li class=\"nav-item\" *ngIf=\"_user.isLoggedIn && !_user.isActive\">\n          <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/status\">\n            {{_t.translate('Status')}}: <span [ngClass]=\"statusClass()\">{{userStatus()}}</span>\n          </a>\n        </li>\n\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/about\">{{_t.translate('About')}}</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/contact\">{{_t.translate('Contact')}}</a>\n        </li>\n\n        <li class=\"nav-item\" *ngIf=\"_user.isLoggedIn\">\n          <a class=\"nav-link\" (click)=\"memberLogOut()\">{{_t.translate('Sign Out')}}</a>\n        </li>\n      </ul>\n\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/navbars/header-navbar/header-navbar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var user_service_1 = __webpack_require__("./src/app/services/user.service.ts");
var socketio_service_1 = __webpack_require__("./src/app/services/socketio.service.ts");
var cookie_service_1 = __webpack_require__("./src/app/services/cookie.service.ts");
var translation_service_1 = __webpack_require__("./src/app/services/translation.service.ts");
var HeaderNavbarComponent = /** @class */ (function () {
    function HeaderNavbarComponent(_t, router, _socketio, _cookie, _user) {
        this._t = _t;
        this.router = router;
        this._socketio = _socketio;
        this._cookie = _cookie;
        this._user = _user;
    }
    HeaderNavbarComponent.prototype.ngOnInit = function () {
    };
    HeaderNavbarComponent.prototype.helloUsername = function () {
        var name = this._user.getUser().username.substring(0, this._user.getUser().username.length);
        if (name.length < 13)
            return name;
        else
            return name.substring(0, 11) + '...';
    };
    HeaderNavbarComponent.prototype.statusClass = function () {
        if (this._user.getUser().status === 'Ban')
            return 'danger-color strong';
        else if (this._user.getUser().status === 'Pending')
            return 'warning-color strong';
        else
            return '';
    };
    HeaderNavbarComponent.prototype.userStatus = function () { return this._user.getUser().status; };
    HeaderNavbarComponent.prototype.memberLogOut = function () {
        this._socketio.logout();
        this._user.setUser(null);
        this._cookie.clearUserLoginCookie();
        this.router.navigate(['/']);
    };
    HeaderNavbarComponent.prototype.ngAfterViewInit = function () {
        $('.nav li a').on('click', function () {
            $('.nav li a').removeClass('active');
            $(this).addClass('active');
        });
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 55) {
                $('nav').addClass('sticky');
                $('.header-space').addClass('sticky');
            }
            else {
                $('nav').removeClass('sticky');
                $('.header-space').removeClass('sticky');
            }
        });
        $('body').scrollspy({
            offset: 70
        });
        $('.theme a').on('click', function () {
            $('.theme a').removeClass('active-theme');
            $(this).addClass('active-theme');
        });
        $('#day').on('click', function () {
            $('head link#theme').attr('href', $(this).data('theme'));
        });
        $('#night').on('click', function () {
            $('head link#theme').attr('href', $(this).data('theme'));
        });
        var sideslider = $('[data-toggle=menu-side]');
        var sel = sideslider.attr('data-target');
        var sel2 = sideslider.attr('data-target-2');
        sideslider.on('click', function () {
            $(sel).toggleClass('in');
            $(sel2).toggleClass('out');
        });
    };
    HeaderNavbarComponent = __decorate([
        core_1.Component({
            selector: 'app-header-navbar',
            template: __webpack_require__("./src/app/navbars/header-navbar/header-navbar.component.html"),
            styles: [__webpack_require__("./src/app/navbars/header-navbar/header-navbar.component.css")]
        }),
        __metadata("design:paramtypes", [translation_service_1.TranslationService,
            router_1.Router,
            socketio_service_1.SocketioService,
            cookie_service_1.CookieService,
            user_service_1.UserService])
    ], HeaderNavbarComponent);
    return HeaderNavbarComponent;
}());
exports.HeaderNavbarComponent = HeaderNavbarComponent;


/***/ }),

/***/ "./src/app/page-about/page-about.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page-about/page-about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header-space\"></div>\n\n<!-- start about section -->\n<section class=\"about top-section\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <h2>About</h2>\n      </div>\n      <div class=\"col-md-6 mb-3 center\">\n        <img src=\"assets/img/about.jpg\" alt=\"image\">\n      </div>\n      <div class=\"col-md-6 mb-3 center\">\n        <div class=\"about-title\">\n          <p>We create a variety of videos that help businesses talk about themselves, their lives, ideas, solutions and products. This and image advertising, and promotional videos for products, and content for Internet works, and corporate videos, and video presentations, cases and even instructions.</p>\n          <p>There are 10 specialists in the company's staff, they work on the development of the ideas of the commercials, writing scripts, directing, organizing filming, shooting and post-production of video.</p>\n        </div>\n      </div>\n      <div class=\"col-md-12 mt-5\">\n        <h4>Four stages of product creation</h4>\n      </div>\n      <div class=\"col-md-3 mb-4\">\n        <div class=\"text-center\">\n          <i class=\"fas fa-lightbulb\"></i>\n          <h5>Cretaes of idea</h5>\n          <div class=\"about-brdr\"></div>\n          <p>Video for the purpose and target audience of the client.</p>\n        </div>\n      </div>\n      <div class=\"col-md-3 mb-4\">\n        <div class=\"text-center\">\n          <i class=\"fas fa-clipboard-list\"></i>\n          <h5>Pre-Production</h5>\n          <div class=\"about-brdr\"></div>\n          <p>Is the process of fixing some of the elements involved in a film, play, or other performance. </p>\n        </div>\n      </div>\n      <div class=\"col-md-3 mb-4\">\n        <div class=\"text-center\">\n          <i class=\"fas fa-video\"></i>\n          <h5>Production</h5>\n          <div class=\"about-brdr\"></div>\n          <p>It is the equivalent of filmmaking, but with images recorded digitally instead of on film stock.</p>\n        </div>\n      </div>\n      <div class=\"col-md-3 mb-4\">\n        <div class=\"text-center\">\n          <i class=\"fas fa-tv\"></i>\n          <h5>Post-Productio</h5>\n          <div class=\"about-brdr\"></div>\n          <p>Is part of the process of filmmaking, video production, and photography.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- end about section -->\n\n<!-- start portfolio section -->\n<section class=\"project\">\n  <div class=\"container\">\n    <div class=\"col-md-12\">\n      <h2>Showcase</h2>\n    </div>\n    <div class=\"col-md-12 text-center\">\n      <ul class=\"list-inline list-unstyled filter\">\n        <li class=\"list-inline-item\">\n          <a class=\"active-f\" data-filter=\"*\">All</a>\n        </li>\n        <li class=\"list-inline-item\">\n          <a data-filter=\".photo\">Photo</a>\n        </li>\n        <li class=\"list-inline-item\">\n          <a data-filter=\".video\">Video</a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"row project-container\">\n        <div class=\"col-md-3 col-6 project-item photo\">\n          <a class=\"item-image\" href=\"assets/img/work/1.jpg\">\n            <img src=\"assets/img/work/1.jpg\" alt=\"image\">\n          </a>\n        </div>\n        <div class=\"col-md-3 col-6 project-item photo\">\n          <a class=\"item-image\" href=\"assets/img/work/2.jpg\">\n            <img src=\"assets/img/work/2.jpg\" alt=\"image\">\n          </a>\n        </div>\n        <div class=\"col-md-3 col-6 project-item video\">\n          <a class=\"item-video\" href=\"#\"> <!-- paste the link to the video instead of # -->\n            <i class=\"fas fa-play\"></i>\n            <img src=\"assets/img/work/3.jpg\" alt=\"image\">\n          </a>\n        </div>\n        <div class=\"col-md-3 col-6 project-item photo\">\n          <a class=\"item-image\" href=\"assets/img/work/4.jpg\">\n            <img src=\"assets/img/work/4.jpg\" alt=\"image\">\n          </a>\n        </div>\n        <div class=\"col-md-3 col-6 project-item video\">\n          <a class=\"item-video\" href=\"#\"> <!-- paste the link to the video instead of # -->\n            <i class=\"fas fa-play\"></i>\n            <img src=\"assets/img/work/5.jpg\" alt=\"image\">\n          </a>\n        </div>\n        <div class=\"col-md-3 col-6 project-item video\">\n          <a class=\"item-video\" href=\"#\"> <!-- paste the link to the video instead of # -->\n            <i class=\"fas fa-play\"></i>\n            <img src=\"assets/img/work/6.jpg\" alt=\"image\">\n          </a>\n        </div>\n        <div class=\"col-md-3 col-6 project-item photo\">\n          <a class=\"item-image\" href=\"assets/img/work/8.jpg\">\n            <img src=\"assets/img/work/8.jpg\" alt=\"image\">\n          </a>\n        </div>\n        <div class=\"col-md-3 col-6 project-item video\">\n          <a class=\"item-video\" href=\"#\"> <!-- paste the link to the video instead of # -->\n            <i class=\"fas fa-play\"></i>\n            <img src=\"assets/img/work/7.jpg\" alt=\"image\">\n          </a>\n        </div>\n    </div>\n  </div>\n</section>\n<!-- end portfolio section -->"

/***/ }),

/***/ "./src/app/page-about/page-about.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var PageAboutComponent = /** @class */ (function () {
    function PageAboutComponent() {
    }
    PageAboutComponent.prototype.ngOnInit = function () {
    };
    PageAboutComponent = __decorate([
        core_1.Component({
            selector: 'app-page-about',
            template: __webpack_require__("./src/app/page-about/page-about.component.html"),
            styles: [__webpack_require__("./src/app/page-about/page-about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageAboutComponent);
    return PageAboutComponent;
}());
exports.PageAboutComponent = PageAboutComponent;


/***/ }),

/***/ "./src/app/page-admin-panel/page-admin-panel.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page-admin-panel/page-admin-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header-space\"></div>\n\n<p>\n  page-admin-panel works!\n</p>\n"

/***/ }),

/***/ "./src/app/page-admin-panel/page-admin-panel.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var PageAdminPanelComponent = /** @class */ (function () {
    function PageAdminPanelComponent() {
    }
    PageAdminPanelComponent.prototype.ngOnInit = function () {
    };
    PageAdminPanelComponent = __decorate([
        core_1.Component({
            selector: 'app-page-admin-panel',
            template: __webpack_require__("./src/app/page-admin-panel/page-admin-panel.component.html"),
            styles: [__webpack_require__("./src/app/page-admin-panel/page-admin-panel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageAdminPanelComponent);
    return PageAdminPanelComponent;
}());
exports.PageAdminPanelComponent = PageAdminPanelComponent;


/***/ }),

/***/ "./src/app/page-contact/page-contact.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page-contact/page-contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header-space\"></div>\n\n<!-- start contact section -->\n<section class=\"contact top-section\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <h2>Contact</h2>\n      </div>\n\n      <div class=\"col-md-4 text-center\">\n        <i class=\"fas fa-map-marker-alt\"></i>\n        <p>Ukraine, Kiev, st. Holoseyevskaya 88</p>\n      </div>\n      <div class=\"col-md-4 text-center\">\n        <i class=\"fas fa-at\"></i>\n        <p>info@yourdomain.com</p>\n      </div>\n      <div class=\"col-md-4 text-center\">\n        <i class=\"fas fa-mobile\"></i>\n        <p>+38(098) 333-55-88</p>\n      </div>\n      \n      <div class=\"col-md-12 mt-4\">\n        <form id=\"form\">\n          <div class=\"row justify-content-center\">\n            <div class=\"col-md-4\">\n              <div class=\"form-group\">\n                <input class=\"form-control\" type=\"text\" name=\"name\" placeholder=\"Name*\" required>\n              </div>\n            </div>\n            <div class=\"col-md-4\">\n              <div class=\"form-group\">\n                <input class=\"form-control\" type=\"email\" name=\"email\" placeholder=\"Email*\" required>\n              </div>\n            </div>\n            <div class=\"col-md-4\">\n              <div class=\"form-group\">\n                <input class=\"form-control\" type=\"tel\" name=\"phone\" placeholder=\"Phone\">\n              </div>\n            </div>\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <textarea class=\"form-control\" name=\"text\" rows=\"8\" placeholder=\"Message*\" required></textarea>\n              </div>\n            </div>\n            <button class=\"btn btn-success\" type=\"submit\">Send Message</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- end contact section -->"

/***/ }),

/***/ "./src/app/page-contact/page-contact.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var PageContactComponent = /** @class */ (function () {
    function PageContactComponent() {
    }
    PageContactComponent.prototype.ngOnInit = function () {
    };
    PageContactComponent = __decorate([
        core_1.Component({
            selector: 'app-page-contact',
            template: __webpack_require__("./src/app/page-contact/page-contact.component.html"),
            styles: [__webpack_require__("./src/app/page-contact/page-contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageContactComponent);
    return PageContactComponent;
}());
exports.PageContactComponent = PageContactComponent;


/***/ }),

/***/ "./src/app/page-forms/page-forms.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page-forms/page-forms.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header-space\"></div>\n\n<section class=\"contact content-section\">\n  <div class=\"container\">\n    <div class=\"row\">\n      \n        <div class=\"col-md-4 col-lg-3\">\n          <h2 class=\"list-header under-line\">{{_t.translate('Form Category')}}</h2>\n          <div class=\"list-container\">\n            <div class=\"list-item under-line\" [ngClass]=\"{'active':pageName=='All Forms'}\"\n            (click)=\"changeFormCategory('All Forms')\">\n              <i class=\"fas fa-arrow-right\"></i>\n              {{_t.translate('All Forms')}}\n            </div>\n            <div *ngFor=\"let category of formCatagory;\" class=\"list-item under-line\"\n            [ngClass]=\"{'active':pageName===category.categoryEN}\"\n            (click)=\"changeFormCategory(category.categoryEN)\">\n              <i class=\"fas fa-arrow-right\"></i>\n              <ng-container *ngIf=\"_t.getLanguage==='TH'\">{{category.categoryTH}}</ng-container>\n              <ng-container *ngIf=\"_t.getLanguage==='EN'\">{{category.categoryEN}}</ng-container>\n            </div>\n          </div>\n        </div>\n        \n        <div class=\"col-md-8 col-lg-9\">\n          <app-table-search [selected]=\"criteria\" (criteriaChange)=\"criteriaChange($event)\"></app-table-search>\n\n          <div class=\"row form-container\">\n            <h2 *ngIf=\"forms===null\" class=\"result-err-table-text\">{{_t.translate('Loading forms')}}...</h2>\n            <h2 *ngIf=\"forms!==null && forms.length==0\" class=\"result-err-table-text\">{{_t.translate('No forms available.')}}</h2>\n\n            <ng-container *ngIf=\"forms!==null && forms.length>0\">\n              <div *ngFor=\"let form of forms;\" class=\"col-sm-6 col-md-6 col-lg-4 form-selection-container\"\n              routerLink=\"/forms/{{form.accessCode}}\">\n                <div class=\"form-selection\">\n                  <img class=\"form-img\" [src]=\"formPreview(form)\">\n                  <div class=\"form-cover\"></div>\n                  <h2 class=\"form-owner\">{{formOwner(form)}} Form</h2>\n                  <div class=\"form-desc\">{{formName(form)}}</div>\n                  <div class=\"form-date\">\n                    {{_t.translate('Create date')}}: \n                    <span>{{dateFromObjectId(form._id)}}</span>\n                  </div>\n                </div>\n              </div>\n            </ng-container>\n          </div>\n\n          <app-pagination [pagination]=\"pagination\" [selected]=\"criteria\" (criteriaChange)=\"criteriaChange($event)\"></app-pagination>\n        </div>\n\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/page-forms/page-forms.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var socketio_service_1 = __webpack_require__("./src/app/services/socketio.service.ts");
var form_service_1 = __webpack_require__("./src/app/services/form.service.ts");
var translation_service_1 = __webpack_require__("./src/app/services/translation.service.ts");
var PageFormsComponent = /** @class */ (function () {
    function PageFormsComponent(_t, router, _form, _socketio) {
        this._t = _t;
        this.router = router;
        this._form = _form;
        this._socketio = _socketio;
        this.pageName = 'All Forms';
        this.formCatagory = [];
        this.criteria = {
            page: 0, start: 0, limit: 25, total: 0,
            sort: 'None', search: '', category: 'None'
        };
        this.pagination = [];
        this.forms = null;
    }
    PageFormsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._form.getFormCategory().then(function (result) {
            if (result.status)
                _this.formCatagory = result.data;
        });
        this.getFormsSubscription = this._form.observeForms().subscribe(function (result) {
            if (result.status) {
                _this.forms = result.data;
                _this.criteria.total = result.totalForms;
                _this.pagination = [];
                var count = 0;
                while (count * _this.criteria.limit < _this.criteria.total) {
                    _this.pagination.push(count);
                    count += 1;
                }
            }
        });
        this._form.getActiveForms(this.criteria);
        // Get announcement from Socket.io
        this._socketio.getSocket().on('announce-main-form-deleted', function (form) {
            this._form.getActiveForms(this.criteria);
        }.bind(this));
    };
    PageFormsComponent.prototype.formPreview = function (form) {
        if (form.previewUrl === undefined || form.previewUrl === null || form.previewUrl === '')
            return 'assets/img/formPreview/default.jpg';
        else
            return '../public/formPreview/' + form.previewUrl;
    };
    PageFormsComponent.prototype.formOwner = function (form) {
        if (form.owner === undefined || form.owner === null || form.owner === '')
            return 'SS';
        else
            return form.owner;
    };
    PageFormsComponent.prototype.dateFromObjectId = function (objectId) {
        var date = new Date(parseInt(objectId.substring(0, 8), 16) * 1000);
        return date.getMonth() + '/' + date.getDate() + '/' + date.getFullYear();
    };
    PageFormsComponent.prototype.formName = function (form) {
        if (this._t.getLanguage == 'EN')
            return form.nameEN;
        else
            return form.nameTH;
    };
    PageFormsComponent.prototype.criteriaChange = function (selected) {
        this.criteria = __assign({}, this.criteria, selected);
        this._form.getActiveForms(this.criteria);
    };
    PageFormsComponent.prototype.changeFormCategory = function (category) {
        if (this.pageName !== category) {
            this.pageName = category;
            this.criteria.page = 0;
            this.criteria.start = 0;
            if (category === 'All Forms')
                this.criteria.category = 'None';
            else
                this.criteria.category = category;
            this._form.getActiveForms(this.criteria);
        }
    };
    PageFormsComponent.prototype.goToForm = function (form) {
        this.router.navigate(['/forms/' + form.accessCode]);
        this._form.setMode();
    };
    PageFormsComponent.prototype.paginationChangePage = function (page) {
        this.criteria.page = page;
        this.criteria.start = page * this.criteria.limit;
        this._form.getActiveForms(this.criteria);
    };
    PageFormsComponent.prototype.previouseFormPage = function () {
        if (this.criteria.page > 0) {
            this.criteria.page -= 1;
            this.criteria.start = this.criteria.page * this.criteria.limit;
            this._form.getActiveForms(this.criteria);
        }
    };
    PageFormsComponent.prototype.nextFormPage = function () {
        if ((this.criteria.page + 1) * this.criteria.limit < this.criteria.total) {
            this.criteria.page += 1;
            this.criteria.start = this.criteria.page * this.criteria.limit;
            this._form.getActiveForms(this.criteria);
        }
    };
    PageFormsComponent.prototype.ngOnDestroy = function () {
        this.getFormsSubscription.unsubscribe();
        this._socketio.getSocket().removeAllListeners('announce-main-form-deleted');
    };
    PageFormsComponent = __decorate([
        core_1.Component({
            selector: 'app-page-forms',
            template: __webpack_require__("./src/app/page-forms/page-forms.component.html"),
            styles: [__webpack_require__("./src/app/page-forms/page-forms.component.css")]
        }),
        __metadata("design:paramtypes", [translation_service_1.TranslationService,
            router_1.Router,
            form_service_1.FormService,
            socketio_service_1.SocketioService])
    ], PageFormsComponent);
    return PageFormsComponent;
}());
exports.PageFormsComponent = PageFormsComponent;


/***/ }),

/***/ "./src/app/page-forms/ss-pdf-form/ss-pdf-form.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page-forms/ss-pdf-form/ss-pdf-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header-space\"></div>\n<div class=\"loader\"><div class=\"loader-inner\"></div></div>\n\n<!-- Form -->\n<section *ngIf=\"page==='Form'\" class=\"contact ss-pdf-section\"><div class=\"container\"><div class=\"row\">\n  <div *ngIf=\"form===null || userDetail===null\" class=\"col-md-12\">\n    <h2>Loading the form with access code - {{accessCode}}...</h2>\n  </div>\n  <ng-container *ngIf=\"form!==null && userDetail!==null\">\n    <h2 *ngIf=\"_t.getLanguage==='EN'\">{{form.nameEN}}</h2>\n    <h2 *ngIf=\"_t.getLanguage==='TH'\">{{form.nameTH}}</h2>\n\n    <div class=\"col-md-12 ss-pdf-content\" id=\"ss-pdf-content\" #content>\n      <pdf-viewer class=\"ss-pdf-viewer\" [src]=\"pdfPath\"\n      (after-load-complete)=\"pdfLoadComplete($event)\"></pdf-viewer>\n\n      <!-- New form -->\n      <ng-container *ngIf=\"_form.getMode==='New' && _form.getRole!=='Admin'\">\n        <form #newForm=\"ngForm\" (ngSubmit)=\"submitForm(newForm)\" ngNativeValidate>\n          <ng-container *ngFor=\"let input of inputList;\">\n            <ng-container *ngIf=\"!inputAdmin(input.name)\">\n              <!-- Special inputs -->\n              <ng-container *ngIf=\"inputSpecial(input.name)\">\n                <div *ngIf=\"inputSignature(input.name)\" [ngStyle]=\"inputPosition(input)\" class=\"ss-signature\">\n                  <app-signature-pad [container]=\"input\" (submitSignature)=\"submitSignature($event, input.name)\"></app-signature-pad>\n                </div>\n                <div *ngIf=\"inputProfileImg(input.name)\" [ngStyle]=\"inputPosition(input)\" class=\"ss-profile\">\n                  <img [src]=\"userProfileImage\">\n                </div>\n                <input *ngIf=\"inputFullname(input.name)\" class=\"ss-form-input\"\n                  [type]=\"input.type\" [value]=\"userFullname\" [ngStyle]=\"inputPosition(input)\" disabled>\n              </ng-container>\n              <!-- Normal inputs -->\n              <ng-container *ngIf=\"!inputSpecial(input.name)\">\n                <input *ngIf=\"input.type!='checkbox' && inputRequired(input.name)\" \n                  class=\"ss-form-input\" [type]=\"input.type\" [name]=\"input.name\" value=\"\"\n                  [ngStyle]=\"inputPosition(input)\" ngModel required>\n                <input *ngIf=\"input.type!='checkbox' && !inputRequired(input.name)\" \n                  class=\"ss-form-input\" [type]=\"input.type\" [name]=\"input.name\" value=\"\"\n                  [ngStyle]=\"inputPosition(input)\" ngModel>\n                <input *ngIf=\"input.type=='checkbox' && inputRequired(input.name)\"\n                  class=\"ss-form-input checkbox\" [type]=\"input.type\" [name]=\"input.name\" \n                  (change)=\"checkboxChange($event, input.name)\"\n                  [ngStyle]=\"inputPosition(input)\" ngModel required>\n                <input *ngIf=\"input.type=='checkbox' && !inputRequired(input.name)\"\n                  class=\"ss-form-input checkbox\" [type]=\"input.type\" [name]=\"input.name\" \n                  (change)=\"checkboxChange($event, input.name)\"\n                  [ngStyle]=\"inputPosition(input)\" ngModel>\n              </ng-container>\n            </ng-container>\n          </ng-container>\n\n          <div class=\"ss-button-container new-mode\">\n            <h2 class=\"ss-btn-title\">{{_t.translate('Form actions')}}</h2>\n            <input class=\"btn btn-primary\" type=\"submit\" [value]=\"_t.translate('Submit form')\">\n            <input class=\"btn btn-success\" type=\"button\" [value]=\"_t.translate('Back to forms')\"\n              routerLink=\"/forms\">\n          </div>\n        </form>\n      </ng-container>\n\n      <!-- Edit form -->\n      <ng-container *ngIf=\"(_form.getMode==='Edit' || _form.getMode==='EditByPass') && loadForm!==null\">\n        <form #editForm=\"ngForm\" (ngSubmit)=\"editSubmittedForm(editForm)\" ngNativeValidate>\n\n          <!-- Normal users -->          \n          <ng-container *ngIf=\"_form.getRole!='Admin'\">\n            <ng-container *ngFor=\"let input of inputList\">\n\n              <!-- User inputs -->\n              <ng-container *ngIf=\"!inputAdmin(input.name)\">\n                <!-- Special inputs -->\n                <ng-container *ngIf=\"inputSpecial(input.name)\">\n                  <div *ngIf=\"inputSignature(input.name)\" [ngStyle]=\"inputPosition(input)\" class=\"ss-signature\">\n                    <app-signature-pad [container]=\"input\" (submitSignature)=\"submitSignature($event, input.name)\"\n                    [signature]=\"loadForm.formValue[input.name]\"></app-signature-pad>\n                  </div>\n                  <div *ngIf=\"inputProfileImg(input.name)\" [ngStyle]=\"inputPosition(input)\" class=\"ss-profile\">\n                    <img [src]=\"userProfileImage\">\n                  </div>\n                  <input *ngIf=\"inputFullname(input.name)\" class=\"ss-form-input\"\n                    [type]=\"input.type\" [value]=\"userFullname\" [ngStyle]=\"inputPosition(input)\" disabled>\n                </ng-container>\n                <!-- Normal inputs -->\n                <ng-container *ngIf=\"!inputSpecial(input.name)\">\n                  <input *ngIf=\"input.type!='checkbox' && inputRequired(input.name)\"\n                    class=\"ss-form-input\" [type]=\"input.type\" [name]=\"input.name\"\n                    [ngModel]=\"default(loadForm.formValue[input.name])\" [value]=\"input.value\"\n                    [ngStyle]=\"inputPosition(input)\" ngModel required>\n                  <input *ngIf=\"input.type!='checkbox' && !inputRequired(input.name)\"\n                    class=\"ss-form-input\" [type]=\"input.type\" [name]=\"input.name\"\n                    [ngModel]=\"default(loadForm.formValue[input.name])\" [value]=\"input.value\"\n                    [ngStyle]=\"inputPosition(input)\" ngModel>\n                  <input *ngIf=\"input.type=='checkbox' && loadForm.formValue[input.name]\"\n                    class=\"ss-form-input checkbox\"\n                    [type]=\"input.type\" [name]=\"input.name\"\n                    (change)=\"checkboxChange($event, input.name)\"\n                    [ngStyle]=\"inputPosition(input)\" ngModel checked>\n                  <input *ngIf=\"input.type=='checkbox' && !loadForm.formValue[input.name]\"\n                    class=\"ss-form-input checkbox\"\n                    [type]=\"input.type\" [name]=\"input.name\"\n                    (change)=\"checkboxChange($event, input.name)\"\n                    [ngStyle]=\"inputPosition(input)\" ngModel>\n                </ng-container>\n              </ng-container>\n\n              <!-- Admin inputs -->\n              <ng-container *ngIf=\"inputAdmin(input.name)\">\n                <!-- Spacial inputs -->\n                <ng-container *ngIf=\"inputSpecial(input.name)\">\n                  <div *ngIf=\"inputSignature(input.name)\" [ngStyle]=\"inputPosition(input)\" class=\"ss-signature disabled\">\n                    <app-signature-pad [container]=\"input\" [disabled]=\"true\"\n                    [signature]=\"loadForm.formValue[input.name]\"></app-signature-pad>\n                  </div>\n                </ng-container>\n                <!-- Normal inputs -->\n                <ng-container *ngIf=\"!inputSpecial(input.name)\">\n                  <input *ngIf=\"input.type!='checkbox'\" class=\"ss-form-input\"\n                    [type]=\"input.type\" [name]=\"input.name\"\n                    [ngModel]=\"default(loadForm.formValue[input.name])\" [value]=\"input.value\"\n                    [ngStyle]=\"inputPosition(input)\" ngModel disabled>\n                  <div *ngIf=\"input.type=='checkbox' && loadForm.formValue[input.name]\"\n                    class=\"ss-form-input checkbox-yes\" [ngStyle]=\"inputPosition(input)\"><div></div>\n                  </div>\n                  <div *ngIf=\"input.type=='checkbox' && !loadForm.formValue[input.name]\"\n                    class=\"ss-form-input checkbox-no\" [ngStyle]=\"inputPosition(input)\"></div>\n                </ng-container>\n              </ng-container>\n\n            </ng-container>\n          </ng-container>\n\n          <!-- Admin users -->\n          <ng-container *ngIf=\"_form.getRole==='Admin'\">\n            <ng-container *ngFor=\"let input of inputList\">\n\n              <!-- Admin inputs -->\n              <ng-container *ngIf=\"inputAdmin(input.name)\">\n                <!-- Special inputs -->\n                <ng-container *ngIf=\"inputSpecial(input.name)\">\n                  <div *ngIf=\"inputSignature(input.name)\" [ngStyle]=\"inputPosition(input)\" class=\"ss-signature\">\n                    <app-signature-pad [container]=\"input\" (submitSignature)=\"submitSignature($event, input.name)\"\n                    [signature]=\"loadForm.formValue[input.name]\"></app-signature-pad>\n                  </div>\n                </ng-container>\n                <!-- Normal inputs -->\n                <ng-container *ngIf=\"!inputSpecial(input.name)\">\n                  <input *ngIf=\"input.type!='checkbox' && inputRequired(input.name)\"\n                    class=\"ss-form-input\" [type]=\"input.type\" [name]=\"input.name\"\n                    [ngModel]=\"default(loadForm.formValue[input.name])\" [value]=\"input.value\"\n                    [ngStyle]=\"inputPosition(input)\" ngModel required>\n                  <input *ngIf=\"input.type!='checkbox' && !inputRequired(input.name)\"\n                    class=\"ss-form-input\" [type]=\"input.type\" [name]=\"input.name\"\n                    [ngModel]=\"default(loadForm.formValue[input.name])\" [value]=\"input.value\"\n                    [ngStyle]=\"inputPosition(input)\" ngModel>\n                  <input *ngIf=\"input.type=='checkbox' && loadForm.formValue[input.name]\"\n                    class=\"ss-form-input checkbox\" [type]=\"input.type\" [name]=\"input.name\"\n                    (change)=\"checkboxChange($event, input.name)\"\n                    [ngStyle]=\"inputPosition(input)\" ngModel checked>\n                  <input *ngIf=\"input.type=='checkbox' && !loadForm.formValue[input.name]\"\n                    class=\"ss-form-input checkbox\" [type]=\"input.type\" [name]=\"input.name\"\n                    (change)=\"checkboxChange($event, input.name)\"\n                    [ngStyle]=\"inputPosition(input)\" ngModel>\n                </ng-container>\n              </ng-container>\n\n              <!-- User inputs -->\n              <ng-container *ngIf=\"!inputAdmin(input.name)\">\n                <!-- Special inputs -->\n                <ng-container *ngIf=\"inputSpecial(input.name)\">\n                  <div *ngIf=\"inputSignature(input.name)\" [ngStyle]=\"inputPosition(input)\" class=\"ss-signature disabled\">\n                    <app-signature-pad [container]=\"input\" [disabled]=\"true\"\n                    [signature]=\"loadForm.formValue[input.name]\"></app-signature-pad>\n                  </div>\n                  <div *ngIf=\"inputProfileImg(input.name)\" [ngStyle]=\"inputPosition(input)\" class=\"ss-profile\">\n                    <img [src]=\"userProfileImage\" width=\"100%\" height=\"100%\">\n                  </div>\n                  <input *ngIf=\"inputFullname(input.name)\" class=\"ss-form-input\"\n                    [type]=\"input.type\" [value]=\"userFullname\" [ngStyle]=\"inputPosition(input)\" disabled>\n                </ng-container>\n                <!-- Normal inputs -->\n                <ng-container *ngIf=\"!inputSpecial(input.name)\">\n                  <input *ngIf=\"input.type!='checkbox'\"\n                    class=\"ss-form-input\" [type]=\"input.type\" [name]=\"input.name\"\n                    [ngModel]=\"default(loadForm.formValue[input.name])\" [value]=\"input.value\"\n                    [ngStyle]=\"inputPosition(input)\" ngModel disabled>\n                  <div *ngIf=\"input.type=='checkbox' && loadForm.formValue[input.name]\"\n                    class=\"ss-form-input checkbox-yes\" [ngStyle]=\"inputPosition(input)\"><div></div>\n                  </div>\n                  <div *ngIf=\"input.type=='checkbox' && !loadForm.formValue[input.name]\"\n                    class=\"ss-form-input checkbox-no\" [ngStyle]=\"inputPosition(input)\"></div>\n                </ng-container>\n              </ng-container>\n\n            </ng-container>\n          </ng-container>\n\n          <div *ngIf=\"_form.getRole!=='Admin'\" class=\"ss-button-container edit-mode\">\n            <h2 class=\"ss-btn-title\">{{_t.translate('Form actions')}}</h2>\n            <input class=\"btn btn-primary\" type=\"submit\" [value]=\"_t.translate('Edit this form')\">\n            <input class=\"btn btn-success\" type=\"button\" [value]=\"_t.translate('Back to form history')\"\n              routerLink=\"/user-panel/form-history\">\n            <input class=\"btn btn-danger\" type=\"button\" [value]=\"_t.translate('Delete this form')\"\n              (click)=\"userDeleteSubmittedForm()\">\n          </div>\n          <!-- <div *ngIf=\"_form.getRole==='Admin'\" class=\"ss-button-container view-mode\">\n            <h2 class=\"ss-btn-title\">{{_t.translate('Form actions')}}</h2>\n            <input class=\"btn btn-primary\" type=\"button\" [value]=\"_t.translate('Download PDF')\"\n              (click)=\"downloadPDF()\">\n            <input class=\"btn btn-success\" type=\"button\" [value]=\"_t.translate('Back to admin forms')\"\n              routerLink=\"/admin-panel/submitted-forms\">\n            <input *ngIf=\"loadForm.status!=='Approved'\" class=\"btn btn-success\" type=\"button\"\n              [value]=\"_t.translate('Approved')\" (click)=\"adminSetSubmittedFormStatus('Approved')\">\n            <input *ngIf=\"loadForm.status!=='Not approved'\" class=\"btn btn-success\" type=\"button\"\n              [value]=\"_t.translate('Not approved')\" (click)=\"adminSetSubmittedFormStatus('Not approved')\">\n            <input class=\"btn btn-success\" type=\"button\" [value]=\"_t.translate('Delete this form')\"\n              (click)=\"adminDeleteSubmittedForm()\"> -->\n\n          <!-- <div class=\"button-container\">\n            <ng-container *ngIf=\"formService.getRole()=='Admin'\">\n              <input class=\"political-simple-btn\" type=\"button\" value=\"Back to admin forms\" (click)=\"backToAdminForms()\">\n              <input *ngIf=\"form!==null && userDetail!==null\"\n              class=\"political-simple-btn\" type=\"submit\" value=\"Edit and Approve\">\n              <input *ngIf=\"loadForm.status!='Approved'\" class=\"political-simple-btn\"\n              type=\"button\" value=\"Approve\" (click)=\"adminSetSubmittedFormStatus('Approved')\">\n              <input *ngIf=\"loadForm.status!='Not approved'\" class=\"political-simple-btn warning-btn\"\n              type=\"button\" value=\"Not approved\" (click)=\"adminSetSubmittedFormStatus('Not approved')\">\n              <input class=\"political-simple-btn delete-btn\" type=\"button\" value=\"Delete form\" (click)=\"adminDeleteSubmittedForm()\">\n            </ng-container>\n          </div> -->\n        </form>\n      </ng-container>\n\n      <!-- View form -->\n      <ng-container *ngIf=\"(_form.getMode==='View' || _form.getMode==='ViewByPass') && loadForm!==null\">\n        <form>\n          <ng-container *ngFor=\"let input of inputList\">\n            <!-- Special inputs -->\n            <ng-container *ngIf=\"inputSpecial(input.name)\">\n              <div *ngIf=\"inputSignature(input.name)\" [ngStyle]=\"inputPosition(input)\" class=\"ss-signature disabled\">\n                <app-signature-pad [container]=\"input\" [disabled]=\"true\"\n                [signature]=\"loadForm.formValue[input.name]\"></app-signature-pad>\n              </div>\n              <div *ngIf=\"inputProfileImg(input.name)\" [ngStyle]=\"inputPosition(input)\" class=\"ss-profile disabled\">\n                <img [src]=\"userProfileImage\">\n              </div>\n              <input *ngIf=\"inputFullname(input.name)\" class=\"ss-form-input\"\n                [type]=\"input.type\" [value]=\"userFullname\" [ngStyle]=\"inputPosition(input)\" disabled>\n            </ng-container>\n            <!-- Normal inputs -->\n            <ng-container *ngIf=\"!inputSpecial(input.name)\">\n              <input *ngIf=\"input.type!='checkbox'\" class=\"ss-form-input\"\n                [type]=\"input.type\" [name]=\"input.name\"\n                [ngModel]=\"default(loadForm.formValue[input.name])\" [value]=\"input.value\"\n                [ngStyle]=\"inputPosition(input)\" ngModel disabled>\n              <div *ngIf=\"input.type=='checkbox' && loadForm.formValue[input.name]\"\n                class=\"ss-form-input checkbox-yes\" [ngStyle]=\"inputPosition(input)\"><div></div>\n              </div>\n              <div *ngIf=\"input.type=='checkbox' && !loadForm.formValue[input.name]\"\n                class=\"ss-form-input checkbox-no\" [ngStyle]=\"inputPosition(input)\"></div>\n            </ng-container>\n          </ng-container>\n\n          <div *ngIf=\"_form.getRole!=='Admin'\" class=\"ss-button-container view-mode\">\n            <h2 class=\"ss-btn-title\">{{_t.translate('Form actions')}}</h2>\n            <input class=\"btn btn-primary\" type=\"button\" [value]=\"_t.translate('Download PDF')\"\n              (click)=\"downloadPDF()\">\n            <input class=\"btn btn-success\" type=\"button\" [value]=\"_t.translate('Back to form history')\"\n              routerLink=\"/user-panel/form-history\">\n          </div>\n          <!-- <div *ngIf=\"_form.getRole==='Admin'\" class=\"ss-button-container view-mode\">\n            <h2 class=\"ss-btn-title\">{{_t.translate('Form actions')}}</h2>\n            <input class=\"btn btn-primary\" type=\"button\" [value]=\"_t.translate('Download PDF')\"\n              (click)=\"downloadPDF()\">\n            <input class=\"btn btn-success\" type=\"button\" [value]=\"_t.translate('Back to admin forms')\"\n              routerLink=\"/admin-panel/submitted-forms\">\n            <input *ngIf=\"loadForm.status!=='Approved'\" class=\"btn btn-success\" type=\"button\"\n              [value]=\"_t.translate('Approved')\" (click)=\"adminSetSubmittedFormStatus('Approved')\">\n            <input *ngIf=\"loadForm.status!=='Not approved'\" class=\"btn btn-success\" type=\"button\"\n              [value]=\"_t.translate('Not approved')\" (click)=\"adminSetSubmittedFormStatus('Not approved')\">\n            <input class=\"btn btn-success\" type=\"button\" [value]=\"_t.translate('Delete this form')\"\n              (click)=\"adminDeleteSubmittedForm()\"> \n          </div> -->\n        </form>\n      </ng-container>\n\n    </div>\n  </ng-container>\n</div></div></section>\n\n<!-- Downloading -->\n<div id=\"ss-pdf-content-holder\"></div>\n<div *ngIf=\"saving\" class=\"ss-dowloading\"><h2>Downloading PDF...</h2></div>\n\n<!-- Status result -->\n<app-form-result [page]=\"page\" (redirect)=\"adminRedirect($event)\"></app-form-result>"

/***/ }),

/***/ "./src/app/page-forms/ss-pdf-form/ss-pdf-form.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var socketio_service_1 = __webpack_require__("./src/app/services/socketio.service.ts");
var user_service_1 = __webpack_require__("./src/app/services/user.service.ts");
var form_service_1 = __webpack_require__("./src/app/services/form.service.ts");
var fileupload_service_1 = __webpack_require__("./src/app/services/fileupload.service.ts");
var translation_service_1 = __webpack_require__("./src/app/services/translation.service.ts");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var d3 = __webpack_require__("./node_modules/d3/index.js");
var html2canvas = __webpack_require__("./node_modules/html2canvas/dist/npm/index.js");
var form_input_1 = __webpack_require__("./src/app/schemas/form-input.ts");
var SsPdfFormComponent = /** @class */ (function () {
    function SsPdfFormComponent(elementRef, router, _router, _socketio, _user, _form, _fileupload, _t) {
        this.elementRef = elementRef;
        this.router = router;
        this._router = _router;
        this._socketio = _socketio;
        this._user = _user;
        this._form = _form;
        this._fileupload = _fileupload;
        this._t = _t;
        this.bypass = false;
        this.accessCode = null;
        this.userDetail = null;
        this.form = null;
        this.inputList = [];
        this.inputNames = [];
        this.signatureNames = [];
        this.signatures = {};
        this.loadForm = null;
        this.checkboxValue = {};
        this.dpiRatio = 96 / 72;
        this.marginLeft = 0;
        this.pageNumber = 1;
        this.evidences = [];
        this.editEvidences = null;
        this.processing = false;
        this.page = 'Form';
        this.saving = false;
        this.deleting = false;
    }
    SsPdfFormComponent.prototype.formScale = function () {
        var elem1 = this.host.select('.ss-pdf-content').node(), elem2 = this.host.select('.page').node();
        var left = (elem1.getBoundingClientRect().width - elem2.getBoundingClientRect().width) / 2;
        left = Math.max(0, left);
        this.marginLeft = left;
        if (window.innerWidth <= 991)
            this.marginLeft += 15;
    };
    SsPdfFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.host = d3.select(this.elementRef.nativeElement);
        d3.select('body').classed('grey-body', true);
        // Load form
        this.loadForm = Object.assign({}, this._form.getSubmittedForm);
        this.routerSubscription = this._router.params.subscribe(function (params) {
            if (params.accessCode !== undefined) {
                _this.accessCode = params.accessCode;
                _this._form.getFormDetail(_this.accessCode)
                    .then(function (result) { if (result.status)
                    _this.form = result.data; });
                if (_this._form.getRole === 'User' || _this.loadForm === null) {
                    var user = Object.assign({}, _this._user.getUser());
                    _this._user.getUserDetail(user)
                        .then(function (result) { if (result.status)
                        _this.userDetail = result.data; });
                }
                else {
                    _this._user.getUserDetailById(_this.loadForm.userId)
                        .then(function (result) { if (result.status)
                        _this.userDetail = result.data; });
                }
            }
        });
        // Socket.io
        this._socketio.getSocket().on('announce-form-user-status', function (form) {
            if (this.yourSubmitted(form._id))
                this.page = 'Status change';
        }.bind(this));
        this._socketio.getSocket().on('announce-form-deleted', function (form) {
            if (this.yourSubmitted(form._id))
                this.page = 'Form deleted';
        }.bind(this));
        this._socketio.getSocket().on('announce-main-form-deleted', function (form) {
            if (this.form !== null && this.form._id === form._id)
                this.page = 'Main form deleted';
        }.bind(this));
    };
    SsPdfFormComponent.prototype.yourSubmitted = function (formId) {
        if (this.loadForm !== null && this.loadForm._id === formId)
            return true;
        else
            return false;
    };
    SsPdfFormComponent.prototype.pdfLoadComplete = function (pdf) {
        var _this = this;
        $('.loader').delay(600).fadeOut('slow');
        d3.timeout(function () {
            _this.pdfSize = _this.host.select('.page').node().getBoundingClientRect();
            _this.pageHeight = _this.pdfSize.height + 10;
            _this.pageNumber = pdf.numPages;
            _this.formScale();
            _this.profileAdjustment(0);
            var _loop_1 = function (i) {
                var currentPage = null;
                pdf.getPage(i)
                    .then(function (p) {
                    currentPage = p;
                    return p.getAnnotations();
                })
                    .then(function (ann) {
                    var annotations = ann;
                    annotations
                        .filter(function (a) { return a.subtype === 'Widget'; })
                        .forEach(function (a) {
                        var fieldRect = currentPage.getViewport(_this.dpiRatio)
                            .convertToViewportRectangle(a.rect);
                        _this.addFormInput(a, fieldRect, i);
                    });
                });
            };
            for (var i = 1; i <= pdf.numPages; i++) {
                _loop_1(i);
            }
        }, 200);
    };
    SsPdfFormComponent.prototype.addFormInput = function (annotation, rect, page) {
        if (rect === void 0) { rect = null; }
        if (page === void 0) { page = 0; }
        var formControl = new forms_1.FormControl(annotation.buttonValue || '');
        var input = new form_input_1.FormInput();
        input.name = annotation.fieldName.replace(/ /g, '-');
        input.name = input.name.replace(/\./g, '-');
        input.name = input.name.replace(/--/g, '-');
        var name = input.name, i = 0;
        while (this.inputNames.indexOf(name) > -1) {
            i += 1;
            name = input.name + i;
        }
        input.name = name;
        this.inputNames.push(input.name);
        if (annotation.fieldType === 'Tx') {
            input.type = 'text';
            input.value = annotation.buttonValue || '';
        }
        else {
            input.type = 'checkbox';
            input.value = '';
        }
        if (rect) {
            input.top = rect[1] - (rect[1] - rect[3]) + (this.pageHeight * (page - 1));
            input.left = rect[0];
            input.height = (rect[1] - rect[3]);
            input.width = (rect[2] - rect[0]);
            input.textAlignment = Number(annotation.textAlignment);
        }
        this.inputList.push(input);
    };
    SsPdfFormComponent.prototype.profileAdjustment = function (i) {
        var _this = this;
        if (i === void 0) { i = 0; }
        i += 1;
        var profile = this.host.select('.ss-profile');
        if (profile.node() === null && i < 10) {
            d3.timeout(function () { _this.profileAdjustment(i); }, 200);
        }
        else {
            var profileSize = profile.node().getBoundingClientRect(), image = profile.select('img'), imageSize = image.node().getBoundingClientRect();
            image.style('top', ((profileSize.height - imageSize.height) / 2) + 'px');
        }
    };
    Object.defineProperty(SsPdfFormComponent.prototype, "pdfPath", {
        // General input process
        get: function () { return '../public/forms/' + this.form.pdfForm; },
        enumerable: true,
        configurable: true
    });
    SsPdfFormComponent.prototype.inputPosition = function (formInput) {
        var fontSize = 16;
        var style = {
            top: formInput.top + 'px',
            left: (this.marginLeft + formInput.left) + 'px',
            height: formInput.height + 'px',
            width: formInput.width + 'px',
            'font-size': fontSize + 'px'
        };
        if (formInput.textAlignment == 1)
            style['text-align'] = 'center';
        else if (formInput.textAlignment == 2)
            style['text-align'] = 'right';
        return style;
    };
    SsPdfFormComponent.prototype.checkboxChange = function (event, name) { this.checkboxValue[name] = event.currentTarget.checked; };
    SsPdfFormComponent.prototype.default = function (value) { return value === undefined ? '' : value; };
    SsPdfFormComponent.prototype.submitSignature = function (signature, name) { this.signatures[name] = signature; };
    // Special inputs
    SsPdfFormComponent.prototype.inputSpecial = function (name) { return name.startsWith('ss-'); };
    SsPdfFormComponent.prototype.inputAdmin = function (name) { return name.indexOf('-admin') > -1 ? true : false; };
    SsPdfFormComponent.prototype.inputRequired = function (name) { return name.indexOf('-required') > -1 ? true : false; };
    SsPdfFormComponent.prototype.inputSignature = function (name) { return name.indexOf('ss-signature') > -1 ? true : false; };
    SsPdfFormComponent.prototype.inputProfileImg = function (name) { return name.indexOf('ss-profile-img') > -1 ? true : false; };
    SsPdfFormComponent.prototype.inputFullname = function (name) { return name.indexOf('ss-fullname') > -1 ? true : false; };
    Object.defineProperty(SsPdfFormComponent.prototype, "userProfileImage", {
        // Predefined values
        get: function () {
            if (this.userDetail !== null) {
                if (this.userDetail.profileUrl === undefined || this.userDetail.profileUrl === null || this.userDetail.profileUrl === '')
                    return 'assets/img/profile/default.jpg';
                else
                    return '../public/profile/' + this.userDetail.profileUrl;
            }
            else
                return 'assets/img/profile/default.jpg';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SsPdfFormComponent.prototype, "userFullname", {
        get: function () {
            return this.userDetail !== null ? this.userDetail.firstname + ' ' + this.userDetail.lastname : '';
        },
        enumerable: true,
        configurable: true
    });
    // Form actions
    SsPdfFormComponent.prototype.submitForm = function (form) {
        var _this = this;
        if (!this.processing) {
            this.processing = true;
            var values_1 = __assign({}, form.value, this.checkboxValue, this.signatures);
            if (this.evidences.length > 0) {
                var evidenceForm = new FormData();
                for (var i = 0; i < this.evidences.length; i++) {
                    var evidence = this.evidences[i];
                    evidenceForm.append('evidences', evidence.file, evidence.file['name']);
                }
                this._fileupload.uploadFormEvidences(evidenceForm, this.evidences.length).then(function (result1) {
                    if (result1.status) {
                        var evidences = [];
                        for (var i = 0; i < _this.evidences.length; i++) {
                            evidences.push({ name: _this.evidences[i].name, file: result1.data[i] });
                        }
                        _this._form.submitForm(_this.userDetail.userId, _this.form._id, values_1, evidences)
                            .then(function (result) {
                            _this._form.formSubmitted.emit(result);
                            _this.processing = false;
                            if (result.status)
                                _this.page = 'Submitted ok';
                            else
                                _this.page = 'Submitted failed';
                        });
                    }
                    else {
                        _this.processing = false;
                        _this.page = 'Submitted failed';
                    }
                });
            }
            else {
                this._form.submitForm(this.userDetail.userId, this.form._id, values_1)
                    .then(function (result) {
                    _this._form.formSubmitted.emit(result);
                    _this.processing = false;
                    if (result.status)
                        _this.page = 'Submitted ok';
                    else
                        _this.page = 'Submitted failed';
                });
            }
        }
    };
    SsPdfFormComponent.prototype.editSubmittedForm = function (form) {
        var _this = this;
        if (!this.processing) {
            this.processing = true;
            var checkbox_1 = {};
            Object.keys(this.loadForm.formValue).map(function (key) {
                if (_this.loadForm.formValue[key] == true)
                    checkbox_1[key] = true;
            });
            var values_2 = __assign({}, this.loadForm.formValue, form.value, checkbox_1, this.checkboxValue, this.signatures);
            if (this.editEvidences !== null && this._form.getRole !== 'Admin') {
                if (this.editEvidences.oldDeleteEvidences.length > 0) {
                    this._fileupload.removeFormEvidences(this.editEvidences.oldDeleteEvidences);
                }
                if (this.editEvidences.newEvidences.length > 0) {
                    var evidenceForm = new FormData();
                    for (var i = 0; i < this.editEvidences.newEvidences.length; i++) {
                        var evidence = this.editEvidences.newEvidences[i];
                        evidenceForm.append('evidences', evidence.file, evidence.file['name']);
                    }
                    this._fileupload.uploadFormEvidences(evidenceForm, this.editEvidences.newEvidences.length)
                        .then(function (result1) {
                        if (result1.status) {
                            var evidences = _this.editEvidences.oldEvidences;
                            for (var i = 0; i < _this.editEvidences.newEvidences.length; i++) {
                                evidences.push({
                                    name: _this.editEvidences.newEvidences[i].name,
                                    file: result1.data[i]
                                });
                            }
                            _this.userEditSubmittedForm(values_2, evidences);
                        }
                        else {
                            _this.processing = false;
                            _this.page = 'Edited failed';
                        }
                    });
                }
                else
                    this.userEditSubmittedForm(values_2, this.editEvidences.oldEvidences);
            }
            else {
                if (this._form.getRole !== 'Admin')
                    this.userEditSubmittedForm(values_2);
                else
                    this.adminEditSubmittedForm(values_2);
            }
        }
    };
    SsPdfFormComponent.prototype.userEditSubmittedForm = function (values, evidences) {
        var _this = this;
        if (evidences === void 0) { evidences = undefined; }
        if (evidences === undefined) {
            this._form.editSubmittedForm(this._form.getSubmittedForm._id, values)
                .then(function (result) {
                _this.processing = false;
                if (result.status)
                    _this.page = 'Edited ok';
                else
                    _this.page = 'Edited failed';
            });
        }
        else {
            this._form.editSubmittedForm(this._form.getSubmittedForm._id, values, evidences)
                .then(function (result) {
                _this.processing = false;
                if (result.status)
                    _this.page = 'Edited ok';
                else
                    _this.page = 'Edited failed';
            });
        }
    };
    SsPdfFormComponent.prototype.adminEditSubmittedForm = function (values) {
        var _this = this;
        this._form.editSubmittedForm(this._form.getSubmittedForm._id, values)
            .then(function (result) {
            if (result.status) {
                _this.loadForm.formValue = values;
                _this.adminSetSubmittedFormStatus('Approved');
            }
            else {
                _this.bypass = true;
                _this.processing = false;
                _this.page = 'Admin edited failed';
            }
        });
    };
    SsPdfFormComponent.prototype.adminSetSubmittedFormStatus = function (status) {
        var _this = this;
        if (this._user.getUser().level >= 7) {
            var approver = Object.assign({}, this._user.getUser());
            this._form.setSubmittedFormStatus(this.loadForm, status, approver).then(function (result) {
                _this.bypass = true;
                _this.processing = false;
                if (result.status) {
                    _this._socketio.submittedFormStatusChange(_this.loadForm);
                    _this.router.navigate(['/admin-panel/submitted-forms']);
                }
                else
                    _this.page = 'Admin set status failed';
            });
        }
        else {
            this._form.setMode();
            this.router.navigate(['/']);
        }
    };
    SsPdfFormComponent.prototype.deleteSubmittedForm = function () {
        // if (this.userinfoService.getUserinfo().level >= 7) {
        //   this.formService.deleteSubmittedForm(this.loadForm.userId, this.loadForm).then(result => {
        //     if (result.status) {
        //       this.bypass = true;
        //       this.socketioService.deletedUserForm(this.loadForm);
        //       this.router.navigate(['/admin-panel/submitted-forms']);
        //     }
        //   });
        // } else {
        //   this.formService.setMode();
        //   this.router.navigate(['/']);
        // }
    };
    SsPdfFormComponent.prototype.downloadPDF = function () {
        var _this = this;
        if (!this.saving) {
            this.saving = true;
            var doc_1 = new jsPDF('p', 'pt', 'a4'), pdfConf = { pagesplit: false, background: '#fff' };
            d3.selectAll('.ss-button-container').style('display', 'none');
            html2canvas(document.getElementById('ss-pdf-content')).then(function (canvasObj) {
                document.getElementById('ss-pdf-content-holder').appendChild(canvasObj);
                var containerSize = _this.host.select('#ss-pdf-content').node().getBoundingClientRect(), pdfSize = _this.host.select('.page').node().getBoundingClientRect(), scale = [595 / pdfSize.width, 842 / pdfSize.height];
                doc_1.addImage(canvasObj, (containerSize.x - pdfSize.x) * scale[0], 0, containerSize.width * scale[0], containerSize.height * scale[1]);
                for (var i = 1; i < _this.pageNumber; i++) {
                    doc_1.addPage();
                    doc_1.addImage(canvasObj, (containerSize.x - pdfSize.x) * scale[0], (-i * (10 + pdfSize.height)) * scale[1], containerSize.width * scale[0], containerSize.height * scale[1]);
                }
                document.getElementById('ss-pdf-content-holder').removeChild(canvasObj);
                doc_1.save(_this.form.nameTH + ' - ' + _this.userDetail.firstname + ' ' + _this.userDetail.lastname + '.pdf');
                _this.host.select('.ss-dowloading').classed('inactive', true);
                setTimeout(function () {
                    _this.saving = false;
                    d3.selectAll('.ss-button-container').style('display', 'block');
                }, 250);
            });
        }
    };
    SsPdfFormComponent.prototype.adminRedirect = function (link) {
        this.bypass = true;
        this.router.navigate(['/']);
    };
    SsPdfFormComponent.prototype.ngOnDestroy = function () {
        d3.select('body').classed('grey-body', false);
        this.routerSubscription.unsubscribe();
        if (!this.bypass || this._form.getRole !== 'Admin'
            || (this._form.getMode !== 'ViewByPass' && this._form.getMode !== 'EditByPass'))
            this._form.setMode();
        // Unbind Socket.io
        this._socketio.getSocket().removeAllListeners('announce-form-user-status');
        this._socketio.getSocket().removeAllListeners('announce-form-deleted');
        this._socketio.getSocket().removeAllListeners('announce-main-form-deleted');
    };
    __decorate([
        core_1.ViewChild('content'),
        __metadata("design:type", core_1.ElementRef)
    ], SsPdfFormComponent.prototype, "content", void 0);
    __decorate([
        core_1.HostListener('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SsPdfFormComponent.prototype, "formScale", null);
    SsPdfFormComponent = __decorate([
        core_1.Component({
            selector: 'app-ss-pdf-form',
            template: __webpack_require__("./src/app/page-forms/ss-pdf-form/ss-pdf-form.component.html"),
            styles: [__webpack_require__("./src/app/page-forms/ss-pdf-form/ss-pdf-form.component.css")]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef,
            router_1.Router,
            router_1.ActivatedRoute,
            socketio_service_1.SocketioService,
            user_service_1.UserService,
            form_service_1.FormService,
            fileupload_service_1.FileuploadService,
            translation_service_1.TranslationService])
    ], SsPdfFormComponent);
    return SsPdfFormComponent;
}());
exports.SsPdfFormComponent = SsPdfFormComponent;


/***/ }),

/***/ "./src/app/page-home/page-home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page-home/page-home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loader\"><div class=\"loader-inner\"></div></div>\n\n<!-- start home section -->\n<section id=\"home\" class=\"home video-ytb\">\n  <div class=\"home-table\">\n    <div class=\"home-table-cell\">\n      <div class=\"container\">\n        <div class=\"row justify-content-center\">\n          <div class=\"col-md-12 text-center\">\n            <h4>- Welcome To Our -</h4>\n            <h1>SS Manager</h1>\n            <p>&ldquo;Manage you PDF forms easier like never before.&rdquo;</p>\n            <a href=\"#project\" class=\"btn btn-primary mx-auto\">Our Showcase</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- end home section -->\n\n<!-- start team section -->\n<section id=\"team\" class=\"team\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-md-12\">\n        <h2>Team</h2>\n      </div>\n      \n      <div class=\"col-md-4 col-6 mb-3\">\n        <div class=\"people\">\n          <div class=\"people-img\">\n            <img src=\"assets/img/team/1.jpg\" alt=\"image\">\n          </div>\n          <div class=\"people-inf\">\n            <a href=\"#\"><i class=\"fab fa-facebook-f\"></i></a>\n            <a href=\"#\"><i class=\"fab fa-instagram\"></i></a>\n          </div>\n        </div>\n        <div class=\"people-title\">\n          <h6>Name</h6>\n          <p>Profession</p>\n        </div>\n      </div>\n      <div class=\"col-md-4 col-6 mb-3\">\n        <div class=\"people\">\n          <div class=\"people-img\">\n            <img src=\"assets/img/team/2.jpg\" alt=\"image\">\n          </div>\n          <div class=\"people-inf\">\n            <a href=\"#\"><i class=\"fab fa-facebook-f\"></i></a>\n            <a href=\"#\"><i class=\"fab fa-instagram\"></i></a>\n          </div>\n        </div>\n        <div class=\"people-title\">\n          <h6>Name</h6>\n          <p>Profession</p>\n        </div>\n      </div>\n      <div class=\"col-md-4 col-6 mb-3\">\n        <div class=\"people\">\n          <div class=\"people-img\">\n            <img src=\"assets/img/team/3.jpg\" alt=\"image\">\n          </div>\n          <div class=\"people-inf\">\n            <a href=\"#\"><i class=\"fab fa-facebook-f\"></i></a>\n            <a href=\"#\"><i class=\"fab fa-instagram\"></i></a>\n          </div>\n        </div>\n        <div class=\"people-title\">\n          <h6>Name</h6>\n          <p>Profession</p>\n        </div>\n      </div>\n      <div class=\"col-md-4 col-6 mb-3\">\n        <div class=\"people\">\n          <div class=\"people-img\">\n            <img src=\"assets/img/team/4.jpg\" alt=\"image\">\n          </div>\n          <div class=\"people-inf\">\n            <a href=\"#\"><i class=\"fab fa-facebook-f\"></i></a>\n            <a href=\"#\"><i class=\"fab fa-instagram\"></i></a>\n          </div>\n        </div>\n        <div class=\"people-title\">\n          <h6>Name</h6>\n          <p>Profession</p>\n        </div>\n      </div>\n      <div class=\"col-md-4 col-6 mb-3\">\n        <div class=\"people\">\n          <div class=\"people-img\">\n            <img src=\"assets/img/team/4.jpg\" alt=\"image\">\n          </div>\n          <div class=\"people-inf\">\n            <a href=\"#\"><i class=\"fab fa-facebook-f\"></i></a>\n            <a href=\"#\"><i class=\"fab fa-instagram\"></i></a>\n          </div>\n        </div>\n        <div class=\"people-title\">\n          <h6>Name</h6>\n          <p>Profession</p>\n        </div>\n      </div>\n      \n    </div>\n  </div>\n</section>\n<!-- end team section -->\n\n<!-- start statistic -->\n<div id=\"statistic\" class=\"statistic\">\n  <div class=\"statistic-table\">\n    <div class=\"statistic-table-cell\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-4 col-4 text-center\">\n            <i class=\"fas fa-thumbs-up\"></i>\n            <p class=\"counter\">22</p>\n            <h4>Likes</h4>\n          </div>\n          <div class=\"col-md-4 col-4 text-center\">\n            <i class=\"fas fa-users\"></i>\n            <p class=\"counter\">511</p>\n            <h4>Visitors</h4>\n          </div>\n          <div class=\"col-md-4 col-4 text-center\">\n            <i class=\"fas fa-user\"></i>\n            <p class=\"counter\">6</p>\n            <h4>Team</h4>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- end statistic -->\n\n<!-- start portfolio section -->\n<section id=\"project\" class=\"project\">\n  <div class=\"container\">\n    <div class=\"col-md-12\">\n      <h2>Showcase</h2>\n    </div>\n    <div class=\"col-md-12 text-center\">\n      <ul class=\"list-inline list-unstyled filter\">\n        <li class=\"list-inline-item\">\n          <a class=\"active-f\" data-filter=\"*\">All</a>\n        </li>\n        <li class=\"list-inline-item\">\n          <a data-filter=\".photo\">Photo</a>\n        </li>\n        <li class=\"list-inline-item\">\n          <a data-filter=\".video\">Video</a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"row project-container\">\n        <div class=\"col-md-3 col-6 project-item photo\">\n          <a class=\"item-image\" href=\"assets/img/work/1.jpg\">\n            <img src=\"assets/img/work/1.jpg\" alt=\"image\">\n          </a>\n        </div>\n        <div class=\"col-md-3 col-6 project-item photo\">\n          <a class=\"item-image\" href=\"assets/img/work/2.jpg\">\n            <img src=\"assets/img/work/2.jpg\" alt=\"image\">\n          </a>\n        </div>\n        <div class=\"col-md-3 col-6 project-item video\">\n          <a class=\"item-video\" href=\"#\"> <!-- paste the link to the video instead of # -->\n            <i class=\"fas fa-play\"></i>\n            <img src=\"assets/img/work/3.jpg\" alt=\"image\">\n          </a>\n        </div>\n        <div class=\"col-md-3 col-6 project-item photo\">\n          <a class=\"item-image\" href=\"assets/img/work/4.jpg\">\n            <img src=\"assets/img/work/4.jpg\" alt=\"image\">\n          </a>\n        </div>\n        <div class=\"col-md-3 col-6 project-item video\">\n          <a class=\"item-video\" href=\"#\"> <!-- paste the link to the video instead of # -->\n            <i class=\"fas fa-play\"></i>\n            <img src=\"assets/img/work/5.jpg\" alt=\"image\">\n          </a>\n        </div>\n        <div class=\"col-md-3 col-6 project-item video\">\n          <a class=\"item-video\" href=\"#\"> <!-- paste the link to the video instead of # -->\n            <i class=\"fas fa-play\"></i>\n            <img src=\"assets/img/work/6.jpg\" alt=\"image\">\n          </a>\n        </div>\n        <div class=\"col-md-3 col-6 project-item photo\">\n          <a class=\"item-image\" href=\"assets/img/work/8.jpg\">\n            <img src=\"assets/img/work/8.jpg\" alt=\"image\">\n          </a>\n        </div>\n        <div class=\"col-md-3 col-6 project-item video\">\n          <a class=\"item-video\" href=\"#\"> <!-- paste the link to the video instead of # -->\n            <i class=\"fas fa-play\"></i>\n            <img src=\"assets/img/work/7.jpg\" alt=\"image\">\n          </a>\n        </div>\n    </div>\n  </div>\n</section>\n<!-- end portfolio section -->\n\n<!-- start about section -->\n<section id=\"about\" class=\"about\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <h2>About</h2>\n      </div>\n      <div class=\"col-md-6 mb-3 center\">\n        <img src=\"assets/img/about.jpg\" alt=\"image\">\n      </div>\n      <div class=\"col-md-6 mb-3 center\">\n        <div class=\"about-title\">\n          <p>We create a variety of videos that help businesses talk about themselves, their lives, ideas, solutions and products. This and image advertising, and promotional videos for products, and content for Internet works, and corporate videos, and video presentations, cases and even instructions.</p>\n          <p>There are 10 specialists in the company's staff, they work on the development of the ideas of the commercials, writing scripts, directing, organizing filming, shooting and post-production of video.</p>\n        </div>\n      </div>\n      <div class=\"col-md-12 mt-5\">\n        <h4>Four stages of product creation</h4>\n      </div>\n      <div class=\"col-md-3 mb-4\">\n        <div class=\"text-center\">\n          <i class=\"fas fa-lightbulb\"></i>\n          <h5>Cretaes of idea</h5>\n          <div class=\"about-brdr\"></div>\n          <p>Video for the purpose and target audience of the client.</p>\n        </div>\n      </div>\n      <div class=\"col-md-3 mb-4\">\n        <div class=\"text-center\">\n          <i class=\"fas fa-clipboard-list\"></i>\n          <h5>Pre-Production</h5>\n          <div class=\"about-brdr\"></div>\n          <p>Is the process of fixing some of the elements involved in a film, play, or other performance. </p>\n        </div>\n      </div>\n      <div class=\"col-md-3 mb-4\">\n        <div class=\"text-center\">\n          <i class=\"fas fa-video\"></i>\n          <h5>Production</h5>\n          <div class=\"about-brdr\"></div>\n          <p>It is the equivalent of filmmaking, but with images recorded digitally instead of on film stock.</p>\n        </div>\n      </div>\n      <div class=\"col-md-3 mb-4\">\n        <div class=\"text-center\">\n          <i class=\"fas fa-tv\"></i>\n          <h5>Post-Productio</h5>\n          <div class=\"about-brdr\"></div>\n          <p>Is part of the process of filmmaking, video production, and photography.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- end about section -->\n\n<!-- start contact section -->\n<section id=\"contact\" class=\"contact\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <h2>Contact</h2>\n      </div>\n      <div class=\"col-md-4 text-center\">\n        <i class=\"fas fa-map-marker-alt\"></i>\n        <p>Ukraine, Kiev, st. Holoseyevskaya 88</p>\n      </div>\n      <div class=\"col-md-4 text-center\">\n        <i class=\"fas fa-at\"></i>\n        <p>info@yourdomain.com</p>\n      </div>\n      <div class=\"col-md-4 text-center\">\n        <i class=\"fas fa-mobile\"></i>\n        <p>+38(098) 333-55-88</p>\n      </div>\n      <div class=\"col-md-12 mt-4\">\n        <form id=\"form\">\n          <div class=\"row justify-content-center\">\n            <div class=\"col-md-4\">\n              <div class=\"form-group\">\n                <input class=\"form-control\" type=\"text\" name=\"name\" placeholder=\"Name*\" required>\n              </div>\n            </div>\n            <div class=\"col-md-4\">\n              <div class=\"form-group\">\n                <input class=\"form-control\" type=\"email\" name=\"email\" placeholder=\"Email*\" required>\n              </div>\n            </div>\n            <div class=\"col-md-4\">\n              <div class=\"form-group\">\n                <input class=\"form-control\" type=\"tel\" name=\"phone\" placeholder=\"Phone\">\n              </div>\n            </div>\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <textarea class=\"form-control\" name=\"text\" rows=\"8\" placeholder=\"Message*\" required></textarea>\n              </div>\n            </div>\n            <button class=\"btn btn-success\" type=\"submit\">Send Message</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- end contact section -->"

/***/ }),

/***/ "./src/app/page-home/page-home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var PageHomeComponent = /** @class */ (function () {
    function PageHomeComponent() {
    }
    PageHomeComponent.prototype.ngOnInit = function () {
    };
    PageHomeComponent.prototype.ngAfterViewInit = function () {
        $('.loader').delay(100).fadeOut('slow');
        $('#home').YTPlayer({
            fitToBackground: true,
            videoId: 'Gk_yPWU-Sw0'
        });
        $('a[href*="#"]').on('click', function (e) {
            var id = $(this).attr('href');
            if (id !== '#') {
                var selector = $(id);
                if (selector.val() !== undefined) {
                    e.preventDefault();
                    $('html, body').animate({
                        scrollTop: selector.offset().top - 0
                    }, 1000, 'easeInOutCubic');
                }
            }
        });
        $('.counter').countUp({
            delay: 8,
            time: 600
        });
    };
    PageHomeComponent = __decorate([
        core_1.Component({
            selector: 'app-page-home',
            template: __webpack_require__("./src/app/page-home/page-home.component.html"),
            styles: [__webpack_require__("./src/app/page-home/page-home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageHomeComponent);
    return PageHomeComponent;
}());
exports.PageHomeComponent = PageHomeComponent;


/***/ }),

/***/ "./src/app/page-login/page-login.component.css":
/***/ (function(module, exports) {

module.exports = ".last-row {text-align: right;}\r\n\r\n@media (max-width: 767.98px) {\r\n    .last-row {text-align: center;}\r\n}"

/***/ }),

/***/ "./src/app/page-login/page-login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header-space\"></div>\n\n<section class=\"contact top-section\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <h2 style=\"margin-bottom:25px;\">{{_t.translate('Sign In')}}</h2>\n      </div>\n      \n      <div class=\"col-md-1 col-lg-2\"></div>\n      <div class=\"col-md-10 col-lg-8 mt-4\">\n        <form #login=\"ngForm\" (ngSubmit)=\"memberLogIn(login)\" ngNativeValidate>\n          <div class=\"row justify-content-center\">\n            \n            <div class=\"col-md-6 col-lg-6\">\n              <div class=\"form-group\">\n                {{_t.translate('Username')}}\n                <input class=\"form-control\" type=\"text\" name=\"username\" value=\"\" ngModel required>\n              </div>\n            </div>\n            <div class=\"col-md-6 col-lg-6\">\n              <div class=\"form-group\">\n                {{_t.translate('Password')}}\n                <input class=\"form-control\" type=\"password\" name=\"password\" value=\"\" ngModel required>\n              </div>\n            </div>\n            <div class=\"col-md-12 col-lg-12 error-box\">\n              <span *ngIf=\"loginMsg!==null\">* {{loginMsg}}</span>\n            </div>            \n\n            <div class=\"col-md-6 col-lg-6\">\n              <div class=\"form-group\">\n                  <input name=\"rememberme\" type=\"checkbox\" ngModel> {{_t.translate('Remember me')}}\n              </div>\n            </div>\n            <div class=\"col-md-6 col-lg-6\">\n              <div class=\"form-group last-row\">\n                  {{_t.translate('Forgot')}}\n                  <a routerLink=\"/recover/username\">{{_t.translate('username')}}</a> /\n                  <a routerLink=\"/recover/password\">{{_t.translate('password')}}</a> ?\n              </div>\n            </div>\n            \n            <button class=\"btn btn-success\" type=\"submit\" style=\"padding:6px 20px;\">{{_t.translate('Sign In')}}</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/page-login/page-login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var authentication_service_1 = __webpack_require__("./src/app/services/authentication.service.ts");
var user_service_1 = __webpack_require__("./src/app/services/user.service.ts");
var cookie_service_1 = __webpack_require__("./src/app/services/cookie.service.ts");
var translation_service_1 = __webpack_require__("./src/app/services/translation.service.ts");
var PageLoginComponent = /** @class */ (function () {
    function PageLoginComponent(router, _t, _authentication, _user, _cookie) {
        this.router = router;
        this._t = _t;
        this._authentication = _authentication;
        this._user = _user;
        this._cookie = _cookie;
        this.processing = false;
        this.loginMsg = null;
    }
    PageLoginComponent.prototype.ngOnInit = function () {
    };
    PageLoginComponent.prototype.memberLogIn = function (form) {
        var _this = this;
        if (!this.processing) {
            this.processing = true;
            this._authentication.login(form.value)
                .then(function (result) {
                if (result.status) {
                    if (form.value.rememberme)
                        _this._cookie.setUserLoginCookie(result.data);
                    else
                        _this._cookie.clearUserLoginCookie();
                    _this.loginMsg = null;
                    _this.loginSuccess(result.data);
                    form.resetForm();
                }
                else
                    _this.loginMsg = result.message;
                _this.processing = false;
            });
        }
    };
    PageLoginComponent.prototype.loginSuccess = function (user) {
        this._user.setUser(user);
        this.router.navigate(['/']);
    };
    PageLoginComponent = __decorate([
        core_1.Component({
            selector: 'app-page-login',
            template: __webpack_require__("./src/app/page-login/page-login.component.html"),
            styles: [__webpack_require__("./src/app/page-login/page-login.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            translation_service_1.TranslationService,
            authentication_service_1.AuthenticationService,
            user_service_1.UserService,
            cookie_service_1.CookieService])
    ], PageLoginComponent);
    return PageLoginComponent;
}());
exports.PageLoginComponent = PageLoginComponent;


/***/ }),

/***/ "./src/app/page-register/page-register.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page-register/page-register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header-space\"></div>\n\n<section class=\"contact top-section\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <h2 style=\"margin-bottom:25px;\">{{_t.translate('Sign Up')}}</h2>\n      </div>\n      \n      <div class=\"col-md-1 col-lg-2\"></div>\n      <div class=\"col-md-10 col-lg-8 mt-4\">\n\n        <form #register=\"ngForm\" (ngSubmit)=\"registerMember(register)\" ngNativeValidate>\n          <div class=\"row justify-content-center\">\n            \n            <div class=\"col-md-6 col-lg-6\">\n              <div class=\"form-group\">\n                {{_t.translate('First name')}}\n                <input class=\"form-control\" type=\"text\" name=\"firstname\" value=\"\" ngModel required>\n                <div class=\"error-message\"></div>\n              </div>\n            </div>\n            <div class=\"col-md-6 col-lg-6\">\n              <div class=\"form-group\">\n                {{_t.translate('Last name')}}\n                <input class=\"form-control\" type=\"text\" name=\"lastname\" value=\"\" ngModel required>\n                <div class=\"error-message\"></div>\n              </div>\n            </div>\n            \n            <div class=\"col-md-6 col-lg-6\">\n              <div class=\"form-group\">\n                {{_t.translate('Username')}} ({{_t.translate('used for singing in')}})\n                <input class=\"form-control\" type=\"text\" name=\"username\" value=\"\" ngModel required>\n                <div class=\"error-message\">\n                  <span *ngIf=\"usernameInUse\">*{{_t.translate('Username is already in use')}}</span>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-6 col-lg-6\">\n              <div class=\"form-group\">\n                {{_t.translate('E-mail address')}}\n                <input class=\"form-control\" type=\"email\" name=\"email\" value=\"\" ngModel required>\n                <div class=\"error-message\">\n                  <span *ngIf=\"emailInUse\">*{{_t.translate('E-mail is already in use')}}</span>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"col-md-6 col-lg-6\">\n              <div class=\"form-group\">\n                {{_t.translate('Password')}} ({{_t.translate('5 letters minimum')}})\n                <input class=\"form-control\" type=\"password\" name=\"password\" value=\"\" ngModel required>\n                <div class=\"error-message\">\n                  <span *ngIf=\"passTooShort\">*{{_t.translate('Password is too short')}}</span>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-6 col-lg-6 last-row\">\n              <div class=\"form-group\">\n                {{_t.translate('Confirm password')}}\n                <input class=\"form-control\" type=\"password\" name=\"confirmPassword\" value=\"\" ngModel required>\n                <div class=\"error-message\">\n                  <span *ngIf=\"passNotMatch\">*{{_t.translate('Password does not match')}}</span>\n                </div>\n              </div>\n            </div>\n            \n            <button class=\"btn btn-success\" type=\"submit\" style=\"padding:6px 20px;\">{{_t.translate('Sign Up')}}</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/page-register/page-register.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var socketio_service_1 = __webpack_require__("./src/app/services/socketio.service.ts");
var authentication_service_1 = __webpack_require__("./src/app/services/authentication.service.ts");
var user_service_1 = __webpack_require__("./src/app/services/user.service.ts");
var cookie_service_1 = __webpack_require__("./src/app/services/cookie.service.ts");
var translation_service_1 = __webpack_require__("./src/app/services/translation.service.ts");
var PageRegisterComponent = /** @class */ (function () {
    function PageRegisterComponent(router, _socketio, _authentication, _user, _cookie, _t) {
        this.router = router;
        this._socketio = _socketio;
        this._authentication = _authentication;
        this._user = _user;
        this._cookie = _cookie;
        this._t = _t;
        this.processing = false;
        this.usernameInUse = false;
        this.emailInUse = false;
        this.passTooShort = false;
        this.passNotMatch = false;
    }
    PageRegisterComponent.prototype.ngOnInit = function () {
    };
    PageRegisterComponent.prototype.registerMember = function (form) {
        var _this = this;
        if (!this.processing) {
            this.processing = true;
            if (form.value.password !== form.value.confirmPassword) {
                this.processing = false;
                this.registerErrorType(-3);
            }
            else {
                this._authentication.register(form.value)
                    .then(function (response) {
                    if (response.status) {
                        _this.registerSuccess(form.value);
                        form.resetForm();
                        _this.registerErrorType();
                    }
                    else
                        _this.registerErrorType(response.data);
                    _this.processing = false;
                });
            }
        }
    };
    PageRegisterComponent.prototype.registerErrorType = function (index) {
        if (index === void 0) { index = -100; }
        if (index == 0) {
            this.passNotMatch = false;
            this.passTooShort = true;
            this.usernameInUse = false;
            this.emailInUse = false;
        }
        else if (index == -1) {
            this.passNotMatch = false;
            this.passTooShort = false;
            this.usernameInUse = true;
            this.emailInUse = false;
        }
        else if (index == -2) {
            this.passNotMatch = false;
            this.passTooShort = false;
            this.usernameInUse = false;
            this.emailInUse = true;
        }
        else if (index == -3) {
            this.passNotMatch = true;
            this.passTooShort = false;
            this.usernameInUse = false;
            this.emailInUse = false;
        }
        else {
            this.passNotMatch = false;
            this.passTooShort = false;
            this.usernameInUse = false;
            this.emailInUse = false;
        }
    };
    PageRegisterComponent.prototype.registerSuccess = function (formValue) {
        var _this = this;
        this._socketio.newMember(formValue.username);
        this._authentication.login(formValue)
            .then(function (result) {
            _this._socketio.login(result.data.username);
            _this._user.setUser(result.data);
            _this.router.navigate(['/check-status']);
            _this._cookie.setUserLoginCookie(result.data);
        });
    };
    PageRegisterComponent = __decorate([
        core_1.Component({
            selector: 'app-page-register',
            template: __webpack_require__("./src/app/page-register/page-register.component.html"),
            styles: [__webpack_require__("./src/app/page-register/page-register.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            socketio_service_1.SocketioService,
            authentication_service_1.AuthenticationService,
            user_service_1.UserService,
            cookie_service_1.CookieService,
            translation_service_1.TranslationService])
    ], PageRegisterComponent);
    return PageRegisterComponent;
}());
exports.PageRegisterComponent = PageRegisterComponent;


/***/ }),

/***/ "./src/app/page-user-panel/page-user-form-history/page-user-form-history.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page-user-panel/page-user-form-history/page-user-form-history.component.html":
/***/ (function(module, exports) {

module.exports = "<app-table-search [type]=\"2\" [criteria]=\"options\" [selected]=\"criteria\" \n(criteriaChange)=\"criteriaChange($event)\"></app-table-search>\n\n<div class=\"row form-container\">\n  \n  <div class=\"table-container\"><table><tbody>\n    <tr>\n      <th width=\"45%\">{{_t.translate('Form Name')}}</th>\n      <th width=\"22%\">{{_t.translate('Submitted Date')}}</th>\n      <th width=\"15%\">{{_t.translate('Status')}}</th>\n      <th width=\"18%\">{{_t.translate('Actions')}}</th>\n    </tr>\n    <tr *ngIf=\"forms===null\"><td colspan=\"4\">\n      {{_t.translate('Loading submitted form history')}}...\n    </td></tr>\n    <tr *ngIf=\"forms!==null && forms.length==0\"><td colspan=\"4\">\n      {{_t.translate('No submitted forms found.')}}\n    </td></tr>\n    <ng-container *ngIf=\"forms!==null && forms.length>0\">\n      <tr *ngFor=\"let form of forms;\">\n        <td *ngIf=\"_t.getLanguage==='TH'\" class=\"col-left\">{{form.form.nameTH}}</td>\n        <td *ngIf=\"_t.getLanguage==='EN'\" class=\"col-left\">{{form.form.nameEN}}</td>\n        <td>{{dateFromObjectId(form._id)}}</td>\n        <td [ngClass]=\"{'danger':form.status=='Not approved', 'warning':form.status=='Pending', 'primary':form.status=='Approved'}\">\n          {{form.status}}\n        </td>\n\n        <!-- Pending forms -->\n        <td *ngIf=\"form.status==='Pending'\">\n          <i class=\"far fa-address-book primary\" (click)=\"viewSubmittedForm(form)\" title=\"View\"></i>&nbsp;\n          <i class=\"fas fa-edit warning\" (click)=\"editSubmittedForm(form)\" title=\"Edit\"></i>&nbsp;\n          <i class=\"far fa-trash-alt danger\" (click)=\"tryDeleteForm(form)\" title=\"Delete\"></i>\n        </td>\n        <!-- Approved / Not approved forms -->\n        <td *ngIf=\"form.status==='Not approved' || form.status==='Approved'\">\n          <i class=\"far fa-address-book primary\" (click)=\"viewSubmittedForm(form)\" title=\"View\"></i>\n        </td>\n\n      </tr>\n    </ng-container>\n  </tbody></table></div>\n\n</div>\n\n<app-pagination [pagination]=\"pagination\" [selected]=\"criteria\" (criteriaChange)=\"criteriaChange($event)\"></app-pagination>"

/***/ }),

/***/ "./src/app/page-user-panel/page-user-form-history/page-user-form-history.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var socketio_service_1 = __webpack_require__("./src/app/services/socketio.service.ts");
var user_service_1 = __webpack_require__("./src/app/services/user.service.ts");
var form_service_1 = __webpack_require__("./src/app/services/form.service.ts");
var translation_service_1 = __webpack_require__("./src/app/services/translation.service.ts");
var PageUserFormHistoryComponent = /** @class */ (function () {
    function PageUserFormHistoryComponent(router, _socketio, _user, _form, _t) {
        this.router = router;
        this._socketio = _socketio;
        this._user = _user;
        this._form = _form;
        this._t = _t;
        this.options = {
            limit: [10, 25, 50, 100],
            sort: [
                'None', 'Status increasing', 'Status decreasing',
                'Submitted date increasing', 'Submitted date decreasing'
            ]
        };
        this.criteria = {
            page: 0, start: 0, limit: 25, total: 0,
            sort: 'None', search: '', category: 'None'
        };
        this.pagination = [];
        this.forms = null;
        this.selectedForm = null;
    }
    PageUserFormHistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getSubmittedFormsSubscription = this._form.observeSubmittedForms().subscribe(function (result) {
            if (result.status) {
                _this.forms = result.data;
                _this.criteria.total = result.totalSubmittedForms;
                _this.pagination = [];
                var count = 0;
                while (count * _this.criteria.limit < _this.criteria.total) {
                    _this.pagination.push(count);
                    count += 1;
                }
            }
        });
        this._form.getSubmittedForms(this._user.getUser()._id, this.criteria);
        // Get announcement from Socket.io
        this._socketio.getSocket().on('announce-form-user-status', function (form) {
            this.yourSubmittedFormUpdate(form.userId);
        }.bind(this));
        this._socketio.getSocket().on('announce-form-deleted', function (form) {
            this.yourSubmittedFormUpdate(form.userId);
        }.bind(this));
        this._socketio.getSocket().on('announce-main-form-deleted', function (form) {
            this._form.getSubmittedForms(this._user.getUser()._id, this.criteria);
        }.bind(this));
    };
    PageUserFormHistoryComponent.prototype.yourSubmittedFormUpdate = function (userId) {
        if (userId === this._user.getUser()._id) {
            this.selectedForm = null;
            this._form.setMode();
            this._form.getSubmittedForms(this._user.getUser()._id, this.criteria);
        }
    };
    PageUserFormHistoryComponent.prototype.dateFromObjectId = function (objectId) {
        var date = new Date(parseInt(objectId.substring(0, 8), 16) * 1000);
        return date.getMonth() + '/' + date.getDate() + '/' + date.getFullYear();
    };
    PageUserFormHistoryComponent.prototype.criteriaChange = function (selected) {
        this.criteria = __assign({}, this.criteria, selected);
        this._form.getSubmittedForms(this._user.getUser()._id, this.criteria);
    };
    PageUserFormHistoryComponent.prototype.viewSubmittedForm = function (form) {
        this.router.navigate(['/forms/' + form.form.accessCode]);
        this._form.setMode('View', 'User', form);
    };
    PageUserFormHistoryComponent.prototype.editSubmittedForm = function (form) {
        this.router.navigate(['/forms/' + form.form.accessCode]);
        this._form.setMode('Edit', 'User', form);
    };
    PageUserFormHistoryComponent.prototype.ngOnDestroy = function () {
        this.getSubmittedFormsSubscription.unsubscribe();
        // Unbind Socket.io
        this._socketio.getSocket().removeAllListeners('announce-form-user-status');
        this._socketio.getSocket().removeAllListeners('announce-form-deleted');
        this._socketio.getSocket().removeAllListeners('announce-main-form-deleted');
    };
    PageUserFormHistoryComponent = __decorate([
        core_1.Component({
            selector: 'app-page-user-form-history',
            template: __webpack_require__("./src/app/page-user-panel/page-user-form-history/page-user-form-history.component.html"),
            styles: [__webpack_require__("./src/app/page-user-panel/page-user-form-history/page-user-form-history.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            socketio_service_1.SocketioService,
            user_service_1.UserService,
            form_service_1.FormService,
            translation_service_1.TranslationService])
    ], PageUserFormHistoryComponent);
    return PageUserFormHistoryComponent;
}());
exports.PageUserFormHistoryComponent = PageUserFormHistoryComponent;


/***/ }),

/***/ "./src/app/page-user-panel/page-user-panel-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
// Route Guard
var route_guard_service_1 = __webpack_require__("./src/app/services/route-guard.service.ts");
// Components
var page_user_panel_component_1 = __webpack_require__("./src/app/page-user-panel/page-user-panel.component.ts");
var page_user_profile_component_1 = __webpack_require__("./src/app/page-user-panel/page-user-profile/page-user-profile.component.ts");
var page_user_form_history_component_1 = __webpack_require__("./src/app/page-user-panel/page-user-form-history/page-user-form-history.component.ts");
var page_user_setting_component_1 = __webpack_require__("./src/app/page-user-panel/page-user-setting/page-user-setting.component.ts");
var routes = [
    {
        path: 'user-panel', component: page_user_panel_component_1.PageUserPanelComponent,
        canActivate: [route_guard_service_1.MemberRouteGuard],
        canActivateChild: [route_guard_service_1.MemberRouteGuard],
        children: [
            { path: 'profile', component: page_user_profile_component_1.PageUserProfileComponent },
            { path: 'form-history', component: page_user_form_history_component_1.PageUserFormHistoryComponent },
            { path: 'setting', component: page_user_setting_component_1.PageUserSettingComponent },
            { path: '', redirectTo: 'profile', pathMatch: 'full' },
            { path: '**', redirectTo: 'profile' }
        ]
    }
];
var PageUserPanelRoutingModule = /** @class */ (function () {
    function PageUserPanelRoutingModule() {
    }
    PageUserPanelRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule],
            providers: [route_guard_service_1.MemberRouteGuard]
        })
    ], PageUserPanelRoutingModule);
    return PageUserPanelRoutingModule;
}());
exports.PageUserPanelRoutingModule = PageUserPanelRoutingModule;


/***/ }),

/***/ "./src/app/page-user-panel/page-user-panel.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page-user-panel/page-user-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header-space\"></div>\n\n<section class=\"contact content-section\">\n  <div class=\"container\">\n    <div class=\"row\">\n      \n        <div class=\"col-md-4 col-lg-3\">\n          <h2 class=\"list-header under-line\">{{_t.translate('User Panel')}}</h2>\n          <div class=\"list-container\">\n            <div class=\"list-item under-line\" routerLinkActive=\"active\" routerLink=\"profile\">\n              <i class=\"fas fa-arrow-right\"></i>\n              {{_t.translate('Profile')}}\n            </div>\n            <div class=\"list-item under-line\" routerLinkActive=\"active\" routerLink=\"form-history\">\n              <i class=\"fas fa-arrow-right\"></i>\n              {{_t.translate('Form History')}}\n            </div>\n            <div class=\"list-item under-line\" routerLinkActive=\"active\" routerLink=\"setting\">\n              <i class=\"fas fa-arrow-right\"></i>\n              {{_t.translate('Setting')}}\n            </div>\n          </div>\n        </div>\n        \n        <div class=\"col-md-8 col-lg-9\">\n          <router-outlet></router-outlet>\n        </div>\n\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/page-user-panel/page-user-panel.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var translation_service_1 = __webpack_require__("./src/app/services/translation.service.ts");
var PageUserPanelComponent = /** @class */ (function () {
    function PageUserPanelComponent(_t) {
        this._t = _t;
    }
    PageUserPanelComponent.prototype.ngOnInit = function () {
    };
    PageUserPanelComponent = __decorate([
        core_1.Component({
            selector: 'app-page-user-panel',
            template: __webpack_require__("./src/app/page-user-panel/page-user-panel.component.html"),
            styles: [__webpack_require__("./src/app/page-user-panel/page-user-panel.component.css")]
        }),
        __metadata("design:paramtypes", [translation_service_1.TranslationService])
    ], PageUserPanelComponent);
    return PageUserPanelComponent;
}());
exports.PageUserPanelComponent = PageUserPanelComponent;


/***/ }),

/***/ "./src/app/page-user-panel/page-user-profile/page-user-profile.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page-user-panel/page-user-profile/page-user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  page-user-profile works!\n</p>\n"

/***/ }),

/***/ "./src/app/page-user-panel/page-user-profile/page-user-profile.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var PageUserProfileComponent = /** @class */ (function () {
    function PageUserProfileComponent() {
    }
    PageUserProfileComponent.prototype.ngOnInit = function () {
    };
    PageUserProfileComponent = __decorate([
        core_1.Component({
            selector: 'app-page-user-profile',
            template: __webpack_require__("./src/app/page-user-panel/page-user-profile/page-user-profile.component.html"),
            styles: [__webpack_require__("./src/app/page-user-panel/page-user-profile/page-user-profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageUserProfileComponent);
    return PageUserProfileComponent;
}());
exports.PageUserProfileComponent = PageUserProfileComponent;


/***/ }),

/***/ "./src/app/page-user-panel/page-user-setting/page-user-setting.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page-user-panel/page-user-setting/page-user-setting.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  page-user-setting works!\n</p>\n"

/***/ }),

/***/ "./src/app/page-user-panel/page-user-setting/page-user-setting.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var PageUserSettingComponent = /** @class */ (function () {
    function PageUserSettingComponent() {
    }
    PageUserSettingComponent.prototype.ngOnInit = function () {
    };
    PageUserSettingComponent = __decorate([
        core_1.Component({
            selector: 'app-page-user-setting',
            template: __webpack_require__("./src/app/page-user-panel/page-user-setting/page-user-setting.component.html"),
            styles: [__webpack_require__("./src/app/page-user-panel/page-user-setting/page-user-setting.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageUserSettingComponent);
    return PageUserSettingComponent;
}());
exports.PageUserSettingComponent = PageUserSettingComponent;


/***/ }),

/***/ "./src/app/reusable/form-result/form-result.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/reusable/form-result/form-result.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Submitted results -->\n<section *ngIf=\"page==='Submitted ok'\" class=\"contact top-section\"><div class=\"container\"><div class=\"row\">\n  <div class=\"col-md-12\">\n    <h2 class=\"text-medium\">\n      {{_t.translate('Your form is submitted successfully. Our staff will check your form shortly. Thank you.')}}\n    </h2>\n  </div>\n  <div class=\"col-md-12 ss-result-button-container\">\n    <button class=\"btn btn-success\" type=\"button\" routerLink=\"/\">{{_t.translate('Go to home')}}</button>\n    <button class=\"btn btn-success\" type=\"button\" routerLink=\"/forms\">{{_t.translate('Go to forms')}}</button>\n    <button class=\"btn btn-success\" type=\"button\" routerLink=\"/user-panel/form-history\">{{_t.translate('Go to your history')}}</button>\n  </div>\n</div></div></section>\n<section *ngIf=\"page==='Submitted failed'\" class=\"contact top-section\"><div class=\"container\"><div class=\"row\">\n  <div class=\"col-md-12\">\n    <h2 class=\"text-medium\">\n      {{_t.translate('We cannot accept your form at this time. Please try again later. Thank you.')}}\n    </h2>\n  </div>\n  <div class=\"col-md-12 ss-result-button-container\">\n    <button class=\"btn btn-success\" type=\"button\" routerLink=\"/\">{{_t.translate('Go to home')}}</button>\n    <button class=\"btn btn-success\" type=\"button\" routerLink=\"/forms\">{{_t.translate('Go to forms')}}</button>\n    <button class=\"btn btn-success\" type=\"button\" routerLink=\"/user-panel/form-history\">{{_t.translate('Go to your history')}}</button>\n  </div>\n</div></div></section>\n\n<!-- Edited results -->\n<section *ngIf=\"page==='Edited ok'\" class=\"contact top-section\"><div class=\"container\"><div class=\"row\">\n  <div class=\"col-md-12\">\n    <h2 class=\"text-medium\">\n      {{_t.translate('Your form is updated successfully. Our staff will check your form shortly. Thank you.')}}\n    </h2>\n  </div>\n  <div class=\"col-md-12 ss-result-button-container\">\n    <button class=\"btn btn-success\" type=\"button\" routerLink=\"/\">{{_t.translate('Go to home')}}</button>\n    <button class=\"btn btn-success\" type=\"button\" routerLink=\"/forms\">{{_t.translate('Go to forms')}}</button>\n    <button class=\"btn btn-success\" type=\"button\" routerLink=\"/user-panel/form-history\">{{_t.translate('Go to your history')}}</button>\n  </div>\n</div></div></section>\n<section *ngIf=\"page==='Edited failed'\" class=\"contact top-section\"><div class=\"container\"><div class=\"row\">\n  <div class=\"col-md-12\">\n    <h2 class=\"text-medium\">\n      {{_t.translate('You cannot update your form at this time. Please try again later. Thank you.')}}\n    </h2>\n  </div>\n  <div class=\"col-md-12 ss-result-button-container\">\n    <button class=\"btn btn-success\" type=\"button\" routerLink=\"/\">{{_t.translate('Go to home')}}</button>\n    <button class=\"btn btn-success\" type=\"button\" routerLink=\"/forms\">{{_t.translate('Go to forms')}}</button>\n    <button class=\"btn btn-success\" type=\"button\" routerLink=\"/user-panel/form-history\">{{_t.translate('Go to your history')}}</button>\n  </div>\n</div></div></section>\n\n<!-- Admin results -->\n<section *ngIf=\"page==='Admin edited failed'\" class=\"contact top-section\"><div class=\"container\"><div class=\"row\">\n  <div class=\"col-md-12\">\n    <h2 class=\"text-medium\">\n      {{_t.translate('Edit submitted form failed.')}}\n    </h2>\n  </div>\n  <div class=\"col-md-12 ss-result-button-container\">\n    <button class=\"btn btn-success\" type=\"button\" routerLink=\"/\">{{_t.translate('Go to home')}}</button>\n    <button class=\"btn btn-success\" type=\"button\" (click)=\"goToLink('/admin-panel/submitted-forms')\">\n      {{_t.translate('Back to admin forms')}}\n    </button>\n  </div>\n</div></div></section>\n<section *ngIf=\"page==='Admin set status failed'\" class=\"contact top-section\"><div class=\"container\"><div class=\"row\">\n  <div class=\"col-md-12\">\n    <h2 class=\"text-medium\">\n      {{_t.translate('Set submitted form status failed.')}}\n    </h2>\n  </div>\n  <div class=\"col-md-12 ss-result-button-container\">\n    <button class=\"btn btn-success\" type=\"button\" routerLink=\"/\">{{_t.translate('Go to home')}}</button>\n    <button class=\"btn btn-success\" type=\"button\" (click)=\"goToLink('/admin-panel/submitted-forms')\">\n      {{_t.translate('Back to admin forms')}}\n    </button>\n  </div>\n</div></div></section>\n\n<!-- Socket.io announcements -->\n<section *ngIf=\"page==='Status change'\" class=\"contact top-section\"><div class=\"container\"><div class=\"row\">\n  <div class=\"col-md-12\">\n    <h2 class=\"text-medium\">\n      {{_t.translate('Your form status has been updated by our staff.')}}\n    </h2>\n  </div>\n  <div class=\"col-md-12 ss-result-button-container\">\n    <button class=\"btn btn-success\" type=\"button\" routerLink=\"/\">{{_t.translate('Go to home')}}</button>\n    <button class=\"btn btn-success\" type=\"button\" routerLink=\"/forms\">{{_t.translate('Go to forms')}}</button>\n    <button class=\"btn btn-success\" type=\"button\" routerLink=\"/user-panel/form-history\">{{_t.translate('Go to your history')}}</button>\n  </div>\n</div></div></section>\n<section *ngIf=\"page==='Form deleted'\" class=\"contact top-section\"><div class=\"container\"><div class=\"row\">\n  <div class=\"col-md-12\">\n    <h2 class=\"text-medium\">\n      {{_t.translate('Your form has been deleted by our staff. Please contact our staff for information. Thank you.')}}\n    </h2>\n  </div>\n  <div class=\"col-md-12 ss-result-button-container\">\n    <button class=\"btn btn-success\" type=\"button\" routerLink=\"/\">{{_t.translate('Go to home')}}</button>\n    <button class=\"btn btn-success\" type=\"button\" routerLink=\"/forms\">{{_t.translate('Go to forms')}}</button>\n    <button class=\"btn btn-success\" type=\"button\" routerLink=\"/user-panel/form-history\">{{_t.translate('Go to your history')}}</button>\n  </div>\n</div></div></section>\n<section *ngIf=\"page==='Main form deleted'\" class=\"contact top-section\"><div class=\"container\"><div class=\"row\">\n  <div class=\"col-md-12\">\n    <h2 class=\"text-medium\">\n      {{_t.translate('This form type has been set inactive or deleted by our staff.')}}\n    </h2>\n  </div>\n  <div class=\"col-md-12 ss-result-button-container\">\n    <button class=\"btn btn-success\" type=\"button\" routerLink=\"/\">{{_t.translate('Go to home')}}</button>\n    <button class=\"btn btn-success\" type=\"button\" routerLink=\"/forms\">{{_t.translate('Go to forms')}}</button>\n    <button class=\"btn btn-success\" type=\"button\" routerLink=\"/user-panel/form-history\">{{_t.translate('Go to your history')}}</button>\n  </div>\n</div></div></section>"

/***/ }),

/***/ "./src/app/reusable/form-result/form-result.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var translation_service_1 = __webpack_require__("./src/app/services/translation.service.ts");
var FormResultComponent = /** @class */ (function () {
    function FormResultComponent(_t) {
        this._t = _t;
        this.page = 'Form';
        this.redirect = new core_1.EventEmitter();
    }
    FormResultComponent.prototype.ngOnInit = function () {
    };
    FormResultComponent.prototype.goToLink = function (link) {
        this.redirect.emit(link);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], FormResultComponent.prototype, "page", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], FormResultComponent.prototype, "redirect", void 0);
    FormResultComponent = __decorate([
        core_1.Component({
            selector: 'app-form-result',
            template: __webpack_require__("./src/app/reusable/form-result/form-result.component.html"),
            styles: [__webpack_require__("./src/app/reusable/form-result/form-result.component.css")]
        }),
        __metadata("design:paramtypes", [translation_service_1.TranslationService])
    ], FormResultComponent);
    return FormResultComponent;
}());
exports.FormResultComponent = FormResultComponent;


/***/ }),

/***/ "./src/app/reusable/pagination/pagination.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/reusable/pagination/pagination.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row pagination-container\">\n  <ul class=\"pagination-wraper\">\n    <li [ngClass]=\"{'active':selected.page!==0}\" (click)=\"previousPage()\">\n      <span><i class=\"fas fa-angle-left\"></i></span>\n    </li>\n\n    <li *ngFor=\"let page of pagination;\" (click)=\"selectPage(page)\"\n    [ngClass]=\"{'active':page!==selected.page, 'selected':page===selected.page}\">\n      <span>{{page+1}}</span>\n    </li>\n\n    <li [ngClass]=\"{'active':selected.page!==pagination.length-1}\" (click)=\"nextPage()\">\n      <span><i class=\"fas fa-angle-right\"></i></span>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/reusable/pagination/pagination.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var translation_service_1 = __webpack_require__("./src/app/services/translation.service.ts");
var PaginationComponent = /** @class */ (function () {
    function PaginationComponent(_t) {
        this._t = _t;
        this.pagination = [];
        this.selected = {
            page: 0, start: 0, limit: 25, total: 0,
            sort: 'None', search: '', category: 'None'
        };
        this.criteriaChange = new core_1.EventEmitter();
    }
    PaginationComponent.prototype.ngOnInit = function () {
    };
    PaginationComponent.prototype.previousPage = function () {
        this.selected.page = Math.max(0, this.selected.page - 1);
        this.selected.start = this.selected.page * this.selected.limit;
        this.criteriaChange.emit(this.selected);
    };
    PaginationComponent.prototype.nextPage = function () {
        this.selected.page = Math.min(this.pagination.length - 1, this.selected.page + 1);
        this.selected.start = this.selected.page * this.selected.limit;
        this.criteriaChange.emit(this.selected);
    };
    PaginationComponent.prototype.selectPage = function (page) {
        this.selected.page = page;
        this.selected.start = this.selected.page * this.selected.limit;
        this.criteriaChange.emit(this.selected);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], PaginationComponent.prototype, "pagination", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], PaginationComponent.prototype, "selected", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], PaginationComponent.prototype, "criteriaChange", void 0);
    PaginationComponent = __decorate([
        core_1.Component({
            selector: 'app-pagination',
            template: __webpack_require__("./src/app/reusable/pagination/pagination.component.html"),
            styles: [__webpack_require__("./src/app/reusable/pagination/pagination.component.css")]
        }),
        __metadata("design:paramtypes", [translation_service_1.TranslationService])
    ], PaginationComponent);
    return PaginationComponent;
}());
exports.PaginationComponent = PaginationComponent;


/***/ }),

/***/ "./src/app/reusable/signature-pad/signature-pad.component.css":
/***/ (function(module, exports) {

module.exports = ".signature-container {width: 100%; height: 100%; position: relative;}\r\n*>>> .line {fill: none; stroke-width: 1.5px;}\r\n*>>> .swatch {cursor: pointer; opacity: 0.2; -webkit-transition: .3s opacity; transition: .3s opacity;}\r\n*>>> .swatch:hover {opacity: 1;}\r\n*>>> .signature-delete {text-anchor: end;}\r\n.trash-btn {\r\n    position: absolute; right: 0; top: 0; cursor: pointer; font-size: 12px;\r\n    opacity: 0.2; -webkit-transition: .3s opacity; transition: .3s opacity;\r\n}\r\n.trash-btn:hover {opacity: 1;}\r\n.trash-btn.disabled {display: none;}"

/***/ }),

/***/ "./src/app/reusable/signature-pad/signature-pad.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"signature-container\">\n  <svg></svg>\n  <i class=\"far fa-trash-alt trash-btn\" [ngClass]=\"{'disabled':disabled}\"></i>\n</div>\n"

/***/ }),

/***/ "./src/app/reusable/signature-pad/signature-pad.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var d3 = __webpack_require__("./node_modules/d3/index.js");
var SignaturePadComponent = /** @class */ (function () {
    function SignaturePadComponent(elementRef) {
        this.elementRef = elementRef;
        this.signature = [];
        this.disabled = false;
        this.activeColor = '#000000';
        this.activeLine = null;
        this.submitSignature = new core_1.EventEmitter();
    }
    SignaturePadComponent.prototype.ngOnInit = function () {
        if (this.signature === undefined || this.signature === null)
            this.signature = [];
        if (this.container !== undefined) {
            this.width = Math.floor(this.container.width);
            this.height = Math.floor(this.container.height);
            this.host = d3.select(this.elementRef.nativeElement).select('.signature-container');
            this.svg = this.host.select('svg')
                .attr('width', this.width + 'px').attr('height', this.height + 'px');
            this.renderSpace = this.svg.append('g').attr('class', 'render-sapce');
            this.lineRenderer = d3.line().x(function (d) { return d[0]; }).y(function (d) { return d[1]; }).curve(d3.curveLinear);
            if (!this.disabled)
                this.setup();
            this.renderSignature();
        }
    };
    SignaturePadComponent.prototype.setup = function () {
        var _this = this;
        this.draw = d3.drag();
        this.draw.on('start', function () {
            _this.activeLine = { color: _this.activeColor, points: [] };
        });
        this.draw.on('drag', function () {
            _this.activeLine.points.push([d3.event.x, d3.event.y]);
            _this.drawSignature(_this.activeLine);
        });
        this.draw.on('end', function () {
            if (_this.activeLine.points.length > 0) {
                _this.signature.push(_this.activeLine);
                _this.activeLine = null;
                _this.submitSignature.emit(_this.signature);
            }
        });
        this.svg.call(this.draw);
        var colors = ['#000000', 'red', 'green', 'blue'];
        this.svg.selectAll('rect.swatch').data(colors).enter().append('rect').attr('class', 'swatch')
            .classed('active', function (d) { return d === _this.activeColor; })
            .attr('y', function (d, i) { return i * _this.height / colors.length; }).style('fill', function (d) { return d; })
            .attr('width', 0.03 * this.width).attr('height', 0.8 * this.height / colors.length)
            .on('click', function (d) {
            _this.activeColor = d;
            _this.svg.selectAll('rect.swatch').classed('active', function (k) { return k === _this.activeColor; });
        });
        this.host.select('.trash-btn').on('click', function () {
            _this.deleteSignature();
        });
    };
    SignaturePadComponent.prototype.drawSignature = function (line) {
        if (line === void 0) { line = null; }
        if (line !== null) {
            var index = this.signature.length, thisLine = this.renderSpace.select('.line' + index);
            if (thisLine.empty()) {
                thisLine = this.renderSpace.append('path').attr('class', 'line line' + index)
                    .style('stroke', line.color).style('fill', 'none');
            }
            thisLine.attr('d', this.lineRenderer(line.points));
        }
    };
    SignaturePadComponent.prototype.deleteSignature = function () {
        this.signature = [];
        this.renderSpace.selectAll('.line').remove();
        this.submitSignature.emit(this.signature);
    };
    SignaturePadComponent.prototype.renderSignature = function () {
        var _this = this;
        if (this.signature.length > 0) {
            this.renderSpace.selectAll('.line').data(this.signature).enter().append('path')
                .attr('class', function (d, i) { return 'line line' + i; }).style('stroke', function (d) { return d.color; })
                .style('fill', 'none')
                .attr('d', function (d) { return _this.lineRenderer(d.points); });
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], SignaturePadComponent.prototype, "container", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], SignaturePadComponent.prototype, "signature", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], SignaturePadComponent.prototype, "disabled", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], SignaturePadComponent.prototype, "submitSignature", void 0);
    SignaturePadComponent = __decorate([
        core_1.Component({
            selector: 'app-signature-pad',
            template: __webpack_require__("./src/app/reusable/signature-pad/signature-pad.component.html"),
            styles: [__webpack_require__("./src/app/reusable/signature-pad/signature-pad.component.css")]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], SignaturePadComponent);
    return SignaturePadComponent;
}());
exports.SignaturePadComponent = SignaturePadComponent;


/***/ }),

/***/ "./src/app/reusable/table-search/table-search.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/reusable/table-search/table-search.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"type===1\" class=\"row table-criteria-container md-border-top\">\n  <div class=\"col-md-5 col-lg-4 table-limit table-criteria\">\n    {{_t.translate('Show per page')}}\n    <select class=\"form-control no-transition\" (change)=\"limitChange($event.target.value)\" [ngStyle]=\"limitStyle()\">\n      <ng-container *ngFor=\"let limit of criteria.limit;\">\n        <option *ngIf=\"limit===selected.limit\" [value]=\"limit\" selected=\"selected\">{{limit}}</option>\n        <option *ngIf=\"limit!==selected.limit\" [value]=\"limit\">{{limit}}</option>\n      </ng-container>\n    </select>\n  </div>\n  <div class=\"col-md-7 col-lg-4 table-sort table-criteria\">\n    {{_t.translate('Sort by')}}\n    <select class=\"form-control no-transition\" (change)=\"sortChange($event.target.value)\" [ngStyle]=\"sortStyle()\">\n      <ng-container *ngFor=\"let sort of criteria.sort;\">\n        <option *ngIf=\"sort===selected.sort\" [value]=\"sort\" selected=\"selected\">{{sort}}</option>\n        <option *ngIf=\"sort!==selected.sort\" [value]=\"sort\">{{sort}}</option>\n      </ng-container>\n    </select>\n  </div>\n  <div class=\"col-md-12 col-lg-4 table-search table-criteria\">\n    <input #keyword class=\"form-control no-transition\" type=\"text\" (keyup.enter)=\"searchChange(keyword.value)\" [ngStyle]=\"searchStyle()\"\n    [value]=\"selected.search\">\n    <input type=\"submit\" class=\"btn btn-success\" [value]=\"_t.translate('Search')\" (click)=\"searchChange(keyword.value)\">\n  </div>\n</div>\n\n<div *ngIf=\"type===2\" class=\"row table-criteria-container md-border-top\">\n  <div class=\"col-md-5 col-lg-5 table-limit table-criteria\">\n    {{_t.translate('Show per page')}}\n    <select class=\"form-control no-transition\" (change)=\"limitChange($event.target.value)\" [ngStyle]=\"limitStyle()\">\n      <ng-container *ngFor=\"let limit of criteria.limit;\">\n        <option *ngIf=\"limit===selected.limit\" [value]=\"limit\" selected=\"selected\">{{limit}}</option>\n        <option *ngIf=\"limit!==selected.limit\" [value]=\"limit\">{{limit}}</option>\n      </ng-container>\n    </select>\n  </div>\n  <div class=\"col-md-7 col-lg-7 table-sort table-criteria\">\n    {{_t.translate('Sort by')}}\n    <select class=\"form-control no-transition\" (change)=\"sortChange($event.target.value)\" [ngStyle]=\"sortStyle()\">\n      <ng-container *ngFor=\"let sort of criteria.sort;\">\n        <option *ngIf=\"sort===selected.sort\" [value]=\"sort\" selected=\"selected\">{{sort}}</option>\n        <option *ngIf=\"sort!==selected.sort\" [value]=\"sort\">{{sort}}</option>\n      </ng-container>\n    </select>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/reusable/table-search/table-search.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var translation_service_1 = __webpack_require__("./src/app/services/translation.service.ts");
var TableSearchComponent = /** @class */ (function () {
    function TableSearchComponent(_t) {
        this._t = _t;
        this.type = 1;
        this.criteria = {
            limit: [1, 10, 25, 50, 100],
            sort: [
                'None', 'Name increasing', 'Name decreasing', 'Owner increasing', 'Owner decreasing',
                'Created date increasing', 'Created date decreasing'
            ]
        };
        this.selected = {
            page: 0, start: 0, limit: 25, total: 0,
            sort: 'None', search: '', category: 'None'
        };
        this.criteriaChange = new core_1.EventEmitter();
    }
    TableSearchComponent.prototype.ngOnInit = function () {
    };
    TableSearchComponent.prototype.limitChange = function (value) {
        this.selected.limit = value;
        this.selected.page = 0;
        this.selected.start = 0;
        this.selected.total = 0;
        this.criteriaChange.emit(this.selected);
    };
    TableSearchComponent.prototype.sortChange = function (value) {
        this.selected.sort = value;
        this.criteriaChange.emit(this.selected);
    };
    TableSearchComponent.prototype.searchChange = function (value) {
        value = value.trim();
        value = value.replace(/\//g, '');
        value = value.replace(/\\/g, '');
        value = value.replace(/  /g, '');
        if (value !== this.selected.search) {
            this.selected.page = 0;
            this.selected.start = 0;
            this.selected.search = value;
            this.criteriaChange.emit(this.selected);
        }
    };
    TableSearchComponent.prototype.limitStyle = function () {
        if (this._t.getLanguage === 'EN')
            return { width: 'calc(100% - 117px)' };
        else
            return { width: 'calc(100% - 94px)' };
    };
    TableSearchComponent.prototype.sortStyle = function () {
        if (this._t.getLanguage === 'EN')
            return { width: 'calc(100% - 61px)' };
        else
            return { width: 'calc(100% - 66px)' };
    };
    TableSearchComponent.prototype.searchStyle = function () {
        if (this._t.getLanguage === 'EN')
            return { width: 'calc(100% - 85px)', 'margin-left': 0 };
        else
            return { width: 'calc(100% - 62px)', 'margin-left': 0 };
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], TableSearchComponent.prototype, "type", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], TableSearchComponent.prototype, "criteria", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], TableSearchComponent.prototype, "selected", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], TableSearchComponent.prototype, "criteriaChange", void 0);
    TableSearchComponent = __decorate([
        core_1.Component({
            selector: 'app-table-search',
            template: __webpack_require__("./src/app/reusable/table-search/table-search.component.html"),
            styles: [__webpack_require__("./src/app/reusable/table-search/table-search.component.css")]
        }),
        __metadata("design:paramtypes", [translation_service_1.TranslationService])
    ], TableSearchComponent);
    return TableSearchComponent;
}());
exports.TableSearchComponent = TableSearchComponent;


/***/ }),

/***/ "./src/app/reusable/user-profile/user-profile.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/reusable/user-profile/user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  user-profile works!\n</p>\n"

/***/ }),

/***/ "./src/app/reusable/user-profile/user-profile.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent() {
    }
    UserProfileComponent.prototype.ngOnInit = function () {
    };
    UserProfileComponent = __decorate([
        core_1.Component({
            selector: 'app-user-profile',
            template: __webpack_require__("./src/app/reusable/user-profile/user-profile.component.html"),
            styles: [__webpack_require__("./src/app/reusable/user-profile/user-profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserProfileComponent);
    return UserProfileComponent;
}());
exports.UserProfileComponent = UserProfileComponent;


/***/ }),

/***/ "./src/app/schemas/form-input.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FormInput = /** @class */ (function () {
    function FormInput() {
    }
    return FormInput;
}());
exports.FormInput = FormInput;


/***/ }),

/***/ "./src/app/services/admin.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var globals_1 = __webpack_require__("./src/app/globals.ts");
var Subject_1 = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var AdminService = /** @class */ (function () {
    function AdminService(http) {
        this.http = http;
        this.apiUrl = globals_1.ipHost + '/admin';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.subjectUsers = new Subject_1.Subject();
    }
    AdminService.prototype.getUsers = function (criteria) {
        var _this = this;
        var url = this.apiUrl + '/getusers/' + criteria.start + '/' + criteria.limit + '/'
            + criteria.sort + '/' + criteria.search.replace(/\//g, '');
        return this.http.get(url).toPromise()
            .then(function (response) {
            var result = response.json();
            if (globals_1.testing)
                console.log(result.message);
            _this.subjectUsers.next(result);
        })
            .catch(function (err) {
            _this.subjectUsers.next({ status: false, message: err, data: null });
        });
    };
    AdminService.prototype.setAccoundStatus = function (user, status) {
        var url = this.apiUrl + '/setaccountstatus', input = { userId: user._id, status: status };
        return this.http.post(url, JSON.stringify(input), { headers: this.headers })
            .toPromise()
            .then(function (response) {
            var result = response.json();
            if (globals_1.testing)
                console.log(result.message);
            return result;
        })
            .catch(function (err) { return { status: false, message: err, data: null }; });
    };
    AdminService.prototype.updateUserPrivilage = function (userId, updatedUser) {
        var url = this.apiUrl + '/updateuserprivilage', input = { userId: userId, updatedUser: updatedUser };
        return this.http.post(url, JSON.stringify(input), { headers: this.headers })
            .toPromise()
            .then(function (response) {
            var result = response.json();
            if (globals_1.testing)
                console.log(result.message);
            return result;
        })
            .catch(function (err) { return { status: false, message: err, data: null }; });
    };
    AdminService.prototype.deleteAccount = function (user) {
        var url = this.apiUrl + '/deleteaccount', input = { userId: user._id };
        return this.http.post(url, JSON.stringify(input), { headers: this.headers })
            .toPromise()
            .then(function (response) {
            var result = response.json();
            if (globals_1.testing)
                console.log(result.message);
            return result;
        })
            .catch(function (err) { return { status: false, message: err, data: null }; });
    };
    // Observable
    AdminService.prototype.observeUsers = function () {
        return this.subjectUsers.asObservable();
    };
    AdminService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], AdminService);
    return AdminService;
}());
exports.AdminService = AdminService;


/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var globals_1 = __webpack_require__("./src/app/globals.ts");
var socketio_service_1 = __webpack_require__("./src/app/services/socketio.service.ts");
var translation_service_1 = __webpack_require__("./src/app/services/translation.service.ts");
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, _socketio, _t) {
        this.http = http;
        this._socketio = _socketio;
        this._t = _t;
        this.apiUrl = globals_1.ipHost + '/authentication';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    AuthenticationService.prototype.authenticate = function () {
        var _this = this;
        var url = this.apiUrl + '/authenticate';
        return this.http.get(url).toPromise()
            .then(function (response) {
            var result = response.json();
            if (globals_1.testing)
                console.log(result.message);
            if (result.status)
                _this._socketio.login(result.data.username);
            return result;
        })
            .catch(function (err) { return { status: false, message: err, data: null }; });
    };
    AuthenticationService.prototype.cookieLanguage = function () {
        var _this = this;
        var url = this.apiUrl + '/cookielanguage';
        this.http.get(url).toPromise()
            .then(function (response) {
            var result = response.json();
            if (globals_1.testing)
                console.log(result.message);
            if (result.status)
                _this._t.setLanguage(result.data);
            return result;
        })
            .catch(function (err) { return { status: false, message: err, data: null }; });
    };
    AuthenticationService.prototype.register = function (formValue) {
        var url = this.apiUrl + '/register';
        return this.http.post(url, JSON.stringify(formValue), { headers: this.headers })
            .toPromise()
            .then(function (response) {
            var result = response.json();
            if (globals_1.testing)
                console.log(result.message);
            return result;
        })
            .catch(function (err) { return { status: false, message: err, data: null }; });
    };
    AuthenticationService.prototype.login = function (formValue) {
        var _this = this;
        var url = this.apiUrl + '/login';
        return this.http.post(url, JSON.stringify(formValue), { headers: this.headers })
            .toPromise()
            .then(function (response) {
            var result = response.json();
            if (globals_1.testing)
                console.log(result.message);
            if (result.status)
                _this._socketio.login(result.data.username);
            return result;
        })
            .catch(function (err) { return { status: false, message: err, data: null }; });
    };
    AuthenticationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, socketio_service_1.SocketioService,
            translation_service_1.TranslationService])
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;


/***/ }),

/***/ "./src/app/services/cookie.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var globals_1 = __webpack_require__("./src/app/globals.ts");
var CookieService = /** @class */ (function () {
    function CookieService(http) {
        this.http = http;
        this.apiUrl = globals_1.ipHost + '/cookie';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    CookieService.prototype.setUserLoginCookie = function (user) {
        var url = this.apiUrl + '/setlogincookie/' + user.username + '/' + user._id;
        this.http.get(url).toPromise()
            .then(function (response) {
            var result = response.json();
            if (globals_1.testing)
                console.log(result.message);
            return result;
        })
            .catch(function (err) { return { status: false, message: err, data: null }; });
    };
    CookieService.prototype.clearUserLoginCookie = function () {
        var url = this.apiUrl + '/clearlogincookie';
        this.http.get(url).toPromise()
            .then(function (response) {
            var result = response.json();
            if (globals_1.testing)
                console.log(result.message);
            return result;
        })
            .catch(function (err) { return { status: false, message: err, data: null }; });
    };
    CookieService.prototype.setLanguageCookie = function (language) {
        var url = this.apiUrl + '/setlanguagecookie/' + language;
        this.http.get(url).toPromise()
            .then(function (response) {
            var result = response.json();
            if (globals_1.testing)
                console.log(result.message);
            return result;
        })
            .catch(function (err) { return { status: false, message: err, data: null }; });
    };
    CookieService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], CookieService);
    return CookieService;
}());
exports.CookieService = CookieService;


/***/ }),

/***/ "./src/app/services/fileupload.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var globals_1 = __webpack_require__("./src/app/globals.ts");
var FileuploadService = /** @class */ (function () {
    function FileuploadService(http) {
        this.http = http;
        this.apiUrl = globals_1.ipHost + '/fileupload';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    FileuploadService.prototype.deleteUserProfile = function (userId) {
        var url = this.apiUrl + '/deleteuserprofile', input = { userId: userId };
        return this.http.post(url, JSON.stringify({ 'input': input }), { headers: this.headers })
            .toPromise()
            .then(function (response) {
            var result = response.json();
            if (globals_1.testing)
                console.log(result.message);
            return result;
        })
            .catch(function (err) { return null; });
    };
    FileuploadService.prototype.uploadUserProfile = function (userId, profileData) {
        var url = this.apiUrl + '/uploaduserprofile?userId=' + userId;
        return this.http.post(url, profileData)
            .toPromise()
            .then(function (response) {
            var result = response.json();
            if (globals_1.testing)
                console.log(result.message);
            return result;
        })
            .catch(function (err) { return null; });
    };
    FileuploadService.prototype.uploadMainForm = function (formFile) {
        var url = this.apiUrl + '/uploadmainform';
        return this.http.post(url, formFile)
            .toPromise()
            .then(function (response) {
            var result = response.json();
            if (globals_1.testing)
                console.log(result.message);
            return result;
        })
            .catch(function (err) { return null; });
    };
    FileuploadService.prototype.uploadMainFormPreview = function (formPreviewFile) {
        var url = this.apiUrl + '/uploadmainformpreview';
        return this.http.post(url, formPreviewFile)
            .toPromise()
            .then(function (response) {
            var result = response.json();
            if (globals_1.testing)
                console.log(result.message);
            return result;
        })
            .catch(function (err) { return null; });
    };
    FileuploadService.prototype.removeMainFormPreview = function (previewPath) {
        var url = this.apiUrl + '/removemainformpreview', input = { previewPath: previewPath };
        return this.http.post(url, JSON.stringify({ 'input': input }), { headers: this.headers })
            .toPromise()
            .then(function (response) {
            var result = response.json();
            if (globals_1.testing)
                console.log(result.message);
            return result;
        })
            .catch(function (err) { return null; });
    };
    FileuploadService.prototype.uploadFormEvidences = function (evidenceForm, evidenceNumber) {
        var url = this.apiUrl + '/uploadformevidences/?en=' + evidenceNumber;
        return this.http.post(url, evidenceForm)
            .toPromise()
            .then(function (response) {
            var result = response.json();
            if (globals_1.testing)
                console.log(result.message);
            return result;
        })
            .catch(function (err) { return null; });
    };
    FileuploadService.prototype.removeFormEvidences = function (evidences) {
        var url = this.apiUrl + '/removeformevidences', input = { evidences: evidences };
        return this.http.post(url, JSON.stringify({ 'input': input }), { headers: this.headers })
            .toPromise()
            .then(function (response) {
            var result = response.json();
            if (globals_1.testing)
                console.log(result.message);
            return result;
        })
            .catch(function (err) { return null; });
    };
    FileuploadService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], FileuploadService);
    return FileuploadService;
}());
exports.FileuploadService = FileuploadService;


/***/ }),

/***/ "./src/app/services/form.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var globals_1 = __webpack_require__("./src/app/globals.ts");
var Subject_1 = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var FormService = /** @class */ (function () {
    function FormService(http) {
        this.http = http;
        this.apiUrl = globals_1.ipHost + '/form';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.subjectForms = new Subject_1.Subject();
        this.subjectSubmittedForms = new Subject_1.Subject();
        this.subjectPendingFormNumber = new Subject_1.Subject();
        this.subjectAdminForms = new Subject_1.Subject();
        this.subjectAdminSubmittedForms = new Subject_1.Subject();
        this.subjectAdminGovForms = new Subject_1.Subject();
        this.mode = 'New'; // New, Edit, View, ByPass (Admin)
        this.role = 'User'; // User, Admin  
        this.submittedForm = null;
        this.form = null;
        this.criteria = null;
        this.formSubmitted = new core_1.EventEmitter();
    }
    FormService.prototype.setMode = function (mode, role, submittedForm, form, criteria) {
        if (mode === void 0) { mode = 'New'; }
        if (role === void 0) { role = 'User'; }
        if (submittedForm === void 0) { submittedForm = null; }
        if (form === void 0) { form = null; }
        if (criteria === void 0) { criteria = null; }
        if (submittedForm === null) {
            this.mode = 'New';
            this.role = 'User';
            this.submittedForm = null;
            this.form = null;
            this.criteria = null;
        }
        else if (role === 'User') {
            this.mode = mode;
            this.role = 'User';
            this.submittedForm = submittedForm;
            this.form = null;
            this.criteria = null;
        }
        else {
            this.mode = mode;
            this.role = role;
            this.submittedForm = submittedForm;
            this.form = form;
            this.criteria = criteria;
        }
    };
    Object.defineProperty(FormService.prototype, "getMode", {
        get: function () { return this.mode; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormService.prototype, "getRole", {
        get: function () { return this.role; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormService.prototype, "getSubmittedForm", {
        get: function () { return this.submittedForm; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormService.prototype, "getForm", {
        get: function () { return this.form; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormService.prototype, "getCriteria", {
        get: function () { return this.criteria; },
        enumerable: true,
        configurable: true
    });
    FormService.prototype.getFormCategory = function () {
        var url = this.apiUrl + '/getformcategory';
        return this.http.get(url).toPromise()
            .then(function (response) {
            var result = response.json();
            if (globals_1.testing)
                console.log(result.message);
            return result;
        })
            .catch(function (err) { return { status: false, message: err, data: null }; });
    };
    FormService.prototype.getActiveForms = function (criteria) {
        var _this = this;
        var search = criteria.search;
        if (search === '')
            search = 'EmptyNone';
        var url = this.apiUrl + '/getactiveforms/' + criteria.category + '/'
            + criteria.start + '/' + criteria.limit + '/'
            + criteria.sort + '/' + search;
        return this.http.get(url).toPromise()
            .then(function (response) {
            var result = response.json();
            if (globals_1.testing)
                console.log(result.message);
            _this.subjectForms.next(result);
        })
            .catch(function (err) {
            _this.subjectForms.next({ status: false, message: err, data: null });
        });
    };
    FormService.prototype.getFormDetail = function (accessCode) {
        var url = this.apiUrl + '/getformdetail/' + accessCode;
        return this.http.get(url).toPromise()
            .then(function (response) {
            var result = response.json();
            if (globals_1.testing)
                console.log(result.message);
            return result;
        })
            .catch(function (err) { return { status: false, message: err, data: null }; });
    };
    FormService.prototype.getSubmittedForms = function (userId, criteria) {
        var _this = this;
        var url = this.apiUrl + '/getsubmittedforms/' + userId + '/'
            + criteria.start + '/' + criteria.limit + '/' + criteria.sort;
        return this.http.get(url).toPromise()
            .then(function (response) {
            var result = response.json();
            if (globals_1.testing)
                console.log(result.message);
            _this.subjectSubmittedForms.next(result);
        })
            .catch(function (err) {
            _this.subjectSubmittedForms.next({ status: false, message: err, data: null });
        });
    };
    FormService.prototype.submitForm = function (userId, formId, formValue, evidences) {
        if (evidences === void 0) { evidences = null; }
        var url = this.apiUrl + '/submitform', input = { userId: userId, formId: formId, formValue: formValue };
        if (evidences !== null)
            input['evidences'] = evidences;
        return this.http.post(url, JSON.stringify(input), { headers: this.headers })
            .toPromise()
            .then(function (response) {
            var result = response.json();
            if (globals_1.testing)
                console.log(result.message);
            return result;
        })
            .catch(function (err) { return { status: false, message: err, data: null }; });
    };
    FormService.prototype.deleteSubmittedForm = function (userId, form) {
        var url = this.apiUrl + '/deletesubmittedform', input = { userId: userId, formId: form._id };
        if (form.evidences !== undefined)
            input['evidences'] = form.evidences;
        return this.http.post(url, JSON.stringify(input), { headers: this.headers })
            .toPromise()
            .then(function (response) {
            var result = response.json();
            if (globals_1.testing)
                console.log(result.message);
            return result;
        })
            .catch(function (err) { return { status: false, message: err, data: null }; });
    };
    FormService.prototype.editSubmittedForm = function (formId, formValue, evidences) {
        if (evidences === void 0) { evidences = null; }
        var url = this.apiUrl + '/editsubmittedform', input = { formId: formId, formValue: formValue };
        if (evidences !== null)
            input['evidences'] = evidences;
        return this.http.post(url, JSON.stringify(input), { headers: this.headers })
            .toPromise()
            .then(function (response) {
            var result = response.json();
            if (globals_1.testing)
                console.log(result.message);
            return result;
        })
            .catch(function (err) { return { status: false, message: err, data: null }; });
    };
    FormService.prototype.getPendingFormNumber = function () {
        var _this = this;
        var url = this.apiUrl + '/pendingformnumber';
        return this.http.get(url).toPromise()
            .then(function (response) {
            var result = response.json();
            if (globals_1.testing)
                console.log(result.message);
            _this.subjectPendingFormNumber.next(result);
        })
            .catch(function (err) {
            _this.subjectPendingFormNumber.next({ status: false, message: err, data: null });
        });
    };
    FormService.prototype.adminGetActiveForms = function (criteria) {
        var _this = this;
        var url = this.apiUrl + '/admingetactiveforms/' + criteria.category + '/'
            + criteria.start + '/' + criteria.limit + '/'
            + criteria.sort + '/' + criteria.search.replace(/\//g, '');
        return this.http.get(url).toPromise()
            .then(function (response) {
            var result = response.json();
            if (globals_1.testing)
                console.log(result.message);
            _this.subjectAdminForms.next(result);
        })
            .catch(function (err) {
            _this.subjectAdminForms.next({ status: false, message: err, data: null });
        });
    };
    FormService.prototype.adminGetSubmittedForms = function (form, criteria) {
        var _this = this;
        var url = this.apiUrl + '/admingetsubmittedforms/' + form._id + '/'
            + criteria.start + '/' + criteria.limit + '/' + criteria.sort;
        return this.http.get(url).toPromise()
            .then(function (response) {
            var result = response.json();
            if (globals_1.testing)
                console.log(result.message);
            _this.subjectAdminSubmittedForms.next(result);
        })
            .catch(function (err) {
            _this.subjectAdminSubmittedForms.next({ status: false, message: err, data: null });
        });
    };
    FormService.prototype.adminGetForms = function (criteria) {
        var _this = this;
        var url = this.apiUrl + '/admingetforms/' + criteria.start + '/' + criteria.limit + '/'
            + criteria.sort + '/' + criteria.search.replace(/\//g, '');
        return this.http.get(url).toPromise()
            .then(function (response) {
            var result = response.json();
            if (globals_1.testing)
                console.log(result.message);
            _this.subjectAdminGovForms.next(result);
        })
            .catch(function (err) {
            _this.subjectAdminGovForms.next({ status: false, message: err, data: null });
        });
    };
    FormService.prototype.setSubmittedFormStatus = function (form, status, approver) {
        var url = this.apiUrl + '/setsubmittedformstatus', input = { formId: form._id, status: status, approver: approver };
        return this.http.post(url, JSON.stringify(input), { headers: this.headers })
            .toPromise()
            .then(function (response) {
            var result = response.json();
            if (globals_1.testing)
                console.log(result.message);
            return result;
        })
            .catch(function (err) { return { status: false, message: err, data: null }; });
    };
    FormService.prototype.setFormStatus = function (form, status) {
        var url = this.apiUrl + '/setformstatus', input = { formId: form._id, status: status };
        return this.http.post(url, JSON.stringify(input), { headers: this.headers })
            .toPromise()
            .then(function (response) {
            var result = response.json();
            if (globals_1.testing)
                console.log(result.message);
            return result;
        })
            .catch(function (err) { return { status: false, message: err, data: null }; });
    };
    FormService.prototype.createForm = function (form) {
        var url = this.apiUrl + '/createform', input = { form: form };
        return this.http.post(url, JSON.stringify(input), { headers: this.headers })
            .toPromise()
            .then(function (response) {
            var result = response.json();
            if (globals_1.testing)
                console.log(result.message);
            return result;
        })
            .catch(function (err) { return { status: false, message: err, data: null }; });
    };
    FormService.prototype.deleteForm = function (form) {
        var url = this.apiUrl + '/deleteform', input = { form: form };
        return this.http.post(url, JSON.stringify(input), { headers: this.headers })
            .toPromise()
            .then(function (response) {
            var result = response.json();
            if (globals_1.testing)
                console.log(result.message);
            return result;
        })
            .catch(function (err) { return { status: false, message: err, data: null }; });
    };
    FormService.prototype.editForm = function (form) {
        var url = this.apiUrl + '/editform', input = { form: form };
        return this.http.post(url, JSON.stringify(input), { headers: this.headers })
            .toPromise()
            .then(function (response) {
            var result = response.json();
            if (globals_1.testing)
                console.log(result.message);
            return result;
        })
            .catch(function (err) { return { status: false, message: err, data: null }; });
    };
    FormService.prototype.addFormCategory = function (formCategory) {
        var url = this.apiUrl + '/addformcategory', input = { formCategory: formCategory };
        return this.http.post(url, JSON.stringify(input), { headers: this.headers })
            .toPromise()
            .then(function (response) {
            var result = response.json();
            if (globals_1.testing)
                console.log(result.message);
            return result;
        })
            .catch(function (err) { return { status: false, message: err, data: null }; });
    };
    FormService.prototype.deleteFormCategory = function (formCategory) {
        var url = this.apiUrl + '/deleteformcategory', input = { formCategory: formCategory };
        return this.http.post(url, JSON.stringify(input), { headers: this.headers })
            .toPromise()
            .then(function (response) {
            var result = response.json();
            if (globals_1.testing)
                console.log(result.message);
            return result;
        })
            .catch(function (err) { return { status: false, message: err, data: null }; });
    };
    // Observable
    FormService.prototype.observeForms = function () { return this.subjectForms.asObservable(); };
    FormService.prototype.observeSubmittedForms = function () { return this.subjectSubmittedForms.asObservable(); };
    FormService.prototype.observePendingFormNumber = function () { return this.subjectPendingFormNumber.asObservable(); };
    FormService.prototype.observeAdminForms = function () { return this.subjectAdminForms.asObservable(); };
    FormService.prototype.observeAdminSubmittedForms = function () { return this.subjectAdminSubmittedForms.asObservable(); };
    FormService.prototype.observeAdminGovForms = function () { return this.subjectAdminGovForms.asObservable(); };
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], FormService.prototype, "formSubmitted", void 0);
    FormService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], FormService);
    return FormService;
}());
exports.FormService = FormService;


/***/ }),

/***/ "./src/app/services/route-guard.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var user_service_1 = __webpack_require__("./src/app/services/user.service.ts");
var GuestRouteGuard = /** @class */ (function () {
    function GuestRouteGuard(_user, router) {
        this._user = _user;
        this.router = router;
    }
    GuestRouteGuard.prototype.canActivate = function (next, state) {
        if (this._user.isLoggedIn) {
            this.router.navigate(['/']);
            return false;
        }
        return true;
    };
    GuestRouteGuard = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router])
    ], GuestRouteGuard);
    return GuestRouteGuard;
}());
exports.GuestRouteGuard = GuestRouteGuard;
var MemberRouteGuard = /** @class */ (function () {
    function MemberRouteGuard(_user, router) {
        this._user = _user;
        this.router = router;
    }
    MemberRouteGuard.prototype.canActivate = function (next, state) {
        if (!this._user.isLoggedIn || !this._user.isActive) {
            this.router.navigate(['/']);
            return false;
        }
        return true;
    };
    MemberRouteGuard.prototype.canActivateChild = function (childRoute, state) {
        return this.canActivate(childRoute, state);
    };
    MemberRouteGuard = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router])
    ], MemberRouteGuard);
    return MemberRouteGuard;
}());
exports.MemberRouteGuard = MemberRouteGuard;
var AdminRouteGuard = /** @class */ (function () {
    function AdminRouteGuard(_user, router) {
        this._user = _user;
        this.router = router;
    }
    AdminRouteGuard.prototype.canActivate = function (next, state) {
        if (!this._user.isLoggedIn || !this._user.isActive || !this._user.isAdmin) {
            this.router.navigate(['/']);
            return false;
        }
        return true;
    };
    AdminRouteGuard.prototype.canActivateChild = function (childRoute, state) {
        return this.canActivate(childRoute, state);
    };
    AdminRouteGuard = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router])
    ], AdminRouteGuard);
    return AdminRouteGuard;
}());
exports.AdminRouteGuard = AdminRouteGuard;


/***/ }),

/***/ "./src/app/services/socketio.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var io = __webpack_require__("./node_modules/socket.io-client/lib/index.js");
var globals_1 = __webpack_require__("./src/app/globals.ts");
var SocketioService = /** @class */ (function () {
    function SocketioService() {
        this.socket = io(globals_1.ipHost);
    }
    SocketioService.prototype.connect = function () {
        this.socket.on('online-users', function (onlineUsers) {
            this.onlineUsers = onlineUsers;
        }.bind(this));
        this.socket.emit('get-online-users');
    };
    SocketioService.prototype.getSocket = function () { return this.socket; };
    SocketioService.prototype.getOnlineUsers = function () { return this.onlineUsers; };
    SocketioService.prototype.newMember = function (username) { this.socket.emit('new-member', username); };
    SocketioService.prototype.login = function (username) { this.socket.emit('member-login', username); };
    SocketioService.prototype.logout = function () { this.socket.emit('member-logout'); };
    // User account changing
    SocketioService.prototype.accountStatus = function (userId) { this.socket.emit('account-status', userId); };
    SocketioService.prototype.accountPrivilage = function (userId) { this.socket.emit('account-privilage', userId); };
    SocketioService.prototype.deleteAccount = function (userId) { this.socket.emit('account-delete', userId); };
    // Forms
    SocketioService.prototype.userFormSubmitted = function (formId) { this.socket.emit('form-submitted', formId); };
    SocketioService.prototype.deletedUserForm = function (form) { this.socket.emit('form-deleted', form); };
    SocketioService.prototype.submittedFormStatusChange = function (form) {
        this.socket.emit('form-status', form.formId);
        this.socket.emit('form-user-status', form);
    };
    // Main forms
    SocketioService.prototype.deleteForm = function (form) { this.socket.emit('main-form-deleted'); };
    SocketioService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], SocketioService);
    return SocketioService;
}());
exports.SocketioService = SocketioService;


/***/ }),

/***/ "./src/app/services/translation.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var translation_en_th_1 = __webpack_require__("./src/app/languages/translation-en-th.ts");
var dictionary = {
    'EN': 'default_language',
    'TH': translation_en_th_1.Translate_EN_TH
};
var cookie_service_1 = __webpack_require__("./src/app/services/cookie.service.ts");
var TranslationService = /** @class */ (function () {
    function TranslationService(_cookie) {
        this._cookie = _cookie;
        this.language = 'EN';
    }
    TranslationService.prototype.setLanguage = function (language) {
        if (dictionary[language] !== undefined && this.language !== language) {
            this.currentDict = dictionary[language];
            this.language = language;
            this._cookie.setLanguageCookie(language);
        }
    };
    Object.defineProperty(TranslationService.prototype, "getLanguage", {
        get: function () { return this.language; },
        enumerable: true,
        configurable: true
    });
    TranslationService.prototype.translate = function (value) {
        if (this.language === 'EN')
            return value;
        else {
            var result = this.currentDict[value.toLowerCase()];
            return result !== undefined ? result : value;
        }
    };
    TranslationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [cookie_service_1.CookieService])
    ], TranslationService);
    return TranslationService;
}());
exports.TranslationService = TranslationService;


/***/ }),

/***/ "./src/app/services/user.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var globals_1 = __webpack_require__("./src/app/globals.ts");
var authentication_service_1 = __webpack_require__("./src/app/services/authentication.service.ts");
var UserService = /** @class */ (function () {
    function UserService(http, _authentication) {
        this.http = http;
        this._authentication = _authentication;
        this.apiUrl = globals_1.ipHost + '/user';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    UserService.prototype.init = function () {
        var _this = this;
        // Check cookie language
        this._authentication.cookieLanguage();
        // Check remember me login
        return this._authentication.authenticate()
            .then(function (result) {
            if (result.status) {
                _this.setUser(result.data);
            }
        });
    };
    Object.defineProperty(UserService.prototype, "isLoggedIn", {
        get: function () { return this.user !== undefined && this.user !== null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserService.prototype, "isAdmin", {
        get: function () { return this.user !== undefined && this.user !== null && this.user.level >= 7; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserService.prototype, "isActive", {
        get: function () { return this.user !== undefined && this.user !== null && this.user.status === 'Active'; },
        enumerable: true,
        configurable: true
    });
    UserService.prototype.setUser = function (user) { this.user = user; };
    UserService.prototype.getUser = function () { return this.user; };
    UserService.prototype.logoutUser = function () { this.user = undefined; };
    UserService.prototype.update = function () {
        var _this = this;
        var url = this.apiUrl + '/update/' + this.user._id;
        return this.http.get(url).toPromise()
            .then(function (response) {
            var result = response.json();
            if (globals_1.testing)
                console.log(result.message);
            _this.user = result.data;
        })
            .catch(function (err) {
            _this.user = null;
        });
    };
    UserService.prototype.getUserDetail = function (user) {
        var url = this.apiUrl + '/detail/' + user._id;
        return this.http.get(url).toPromise()
            .then(function (response) {
            var result = response.json();
            if (globals_1.testing)
                console.log(result.message);
            return result;
        })
            .catch(function (err) { return { status: false, message: err, data: null }; });
    };
    UserService.prototype.updateUserDetail = function (userId, updatedUserDetail) {
        var url = this.apiUrl + '/updatedetail', input = { userId: userId, updatedUserDetail: updatedUserDetail };
        return this.http.post(url, JSON.stringify(input), { headers: this.headers })
            .toPromise()
            .then(function (response) {
            var result = response.json();
            if (globals_1.testing)
                console.log(result.message);
            return result;
        })
            .catch(function (err) { return { status: false, message: err, data: null }; });
    };
    UserService.prototype.getUserById = function (userId) {
        var url = this.apiUrl + '/getuserbyid/' + userId;
        return this.http.get(url).toPromise()
            .then(function (response) {
            var result = response.json();
            if (globals_1.testing)
                console.log(result.message);
            return result;
        })
            .catch(function (err) { return { status: false, message: err, data: null }; });
    };
    UserService.prototype.getUserDetailById = function (userId) {
        var url = this.apiUrl + '/detail/' + userId;
        return this.http.get(url).toPromise()
            .then(function (response) {
            var result = response.json();
            if (globals_1.testing)
                console.log(result.message);
            return result;
        })
            .catch(function (err) { return { status: false, message: err, data: null }; });
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http,
            authentication_service_1.AuthenticationService])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map