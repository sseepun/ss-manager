// Modules
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { PdfViewerModule } from 'ng2-pdf-viewer';

// Routing Modules
import { PageUserPanelRoutingModule } from './page-user-panel/page-user-panel-routing.module';
import { PageAdminPanelRoutingModule } from './page-admin-panel/page-admin-panel-routing.module';
import { AppRoutingModule } from './app-routing.module';

// Services
import { AdminService } from './services/admin.service';
import { AuthenticationService } from './services/authentication.service';
import { CookieService } from './services/cookie.service';
import { FileuploadService } from './services/fileupload.service';
import { FormService } from './services/form.service';
import { SocketioService } from './services/socketio.service';
import { TranslationService } from './services/translation.service';
import { UserService } from './services/user.service';
import { GuestRouteGuard, MemberRouteGuard, AdminRouteGuard } from './services/route-guard.service';

// Components
import { AppComponent } from './app.component';
import { HeaderNavbarComponent } from './navbars/header-navbar/header-navbar.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageLoginComponent } from './page-login/page-login.component';
import { FooterNavbarComponent } from './navbars/footer-navbar/footer-navbar.component';
import { PageContactComponent } from './page-contact/page-contact.component';
import { PageAboutComponent } from './page-about/page-about.component';
import { PageRegisterComponent } from './page-register/page-register.component';
import { PageAdminPanelComponent } from './page-admin-panel/page-admin-panel.component';
import { PageUserPanelComponent } from './page-user-panel/page-user-panel.component';
import { TableSearchComponent } from './reusable/table-search/table-search.component';
import { PaginationComponent } from './reusable/pagination/pagination.component';
import { SignaturePadComponent } from './reusable/signature-pad/signature-pad.component';
import { PageFormsComponent } from './page-forms/page-forms.component';
import { SsPdfFormComponent } from './page-forms/ss-pdf-form/ss-pdf-form.component';
import { PageUserProfileComponent } from './page-user-panel/page-user-profile/page-user-profile.component';
import { PageUserFormHistoryComponent } from './page-user-panel/page-user-form-history/page-user-form-history.component';
import { PageUserSettingComponent } from './page-user-panel/page-user-setting/page-user-setting.component';
import { UserProfileComponent } from './reusable/user-profile/user-profile.component';
import { FormResultComponent } from './reusable/form-result/form-result.component';
import { PageAdminStatisticsComponent } from './page-admin-panel/page-admin-statistics/page-admin-statistics.component';
import { PageAdminSubmittedFormsComponent } from './page-admin-panel/page-admin-submitted-forms/page-admin-submitted-forms.component';
import { PageAdminFormCategoryComponent } from './page-admin-panel/page-admin-form-category/page-admin-form-category.component';
import { PageAdminUserManagementComponent } from './page-admin-panel/page-admin-user-management/page-admin-user-management.component';
import { PageAdminFormManagementComponent } from './page-admin-panel/page-admin-form-management/page-admin-form-management.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderNavbarComponent,
    PageHomeComponent,
    PageLoginComponent,
    FooterNavbarComponent,
    PageContactComponent,
    PageAboutComponent,
    PageRegisterComponent,
    PageAdminPanelComponent,
    PageUserPanelComponent,
    TableSearchComponent,
    PaginationComponent,
    SignaturePadComponent,
    PageFormsComponent,
    SsPdfFormComponent,
    PageUserProfileComponent,
    PageUserFormHistoryComponent,
    PageUserSettingComponent,
    UserProfileComponent,
    FormResultComponent,
    PageAdminStatisticsComponent,
    PageAdminSubmittedFormsComponent,
    PageAdminFormCategoryComponent,
    PageAdminUserManagementComponent,
    PageAdminFormManagementComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    PdfViewerModule,
    PageUserPanelRoutingModule,
    PageAdminPanelRoutingModule,
    AppRoutingModule
  ],
  providers: [
    AdminService,
    AuthenticationService,
    CookieService,
    FileuploadService,
    FormService,
    SocketioService,
    TranslationService,
    UserService,
    {
      provide: APP_INITIALIZER,
      useFactory: (_user: UserService) => function() { return _user.init() },
      deps: [ UserService ],
      multi: true
    },
    GuestRouteGuard, MemberRouteGuard, AdminRouteGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
