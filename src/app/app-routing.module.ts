import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Route Guard
import { GuestRouteGuard, MemberRouteGuard, AdminRouteGuard } from './services/route-guard.service';

// Components
import { PageHomeComponent } from './page-home/page-home.component';
import { PageLoginComponent } from './page-login/page-login.component';
import { PageRegisterComponent } from './page-register/page-register.component';
import { PageAboutComponent } from './page-about/page-about.component';
import { PageContactComponent } from './page-contact/page-contact.component';
import { PageUserPanelComponent } from './page-user-panel/page-user-panel.component';
import { PageAdminPanelComponent } from './page-admin-panel/page-admin-panel.component';
import { PageFormsComponent } from './page-forms/page-forms.component';
import { SsPdfFormComponent } from './page-forms/ss-pdf-form/ss-pdf-form.component';


const routes: Routes = [
  {
    path: '', component: PageHomeComponent
  }, 
  {
    path: 'login', component: PageLoginComponent, 
    canActivate: [ GuestRouteGuard ]
  }, 
  {
    path: 'register', component: PageRegisterComponent, 
    canActivate: [ GuestRouteGuard ]
  },
  {
    path: 'about', component: PageAboutComponent
  },
  {
    path: 'contact', component: PageContactComponent
  },
  {
    path: 'admin-panel', component: PageAdminPanelComponent, 
    canActivate: [ MemberRouteGuard ]
  },
  {
    path: 'user-panel', component: PageUserPanelComponent, 
    canActivate: [ MemberRouteGuard ]
  },
  {
    path: 'forms/:accessCode', component: SsPdfFormComponent,
    canActivate: [ MemberRouteGuard ]
  },
  {
    path: 'forms', component: PageFormsComponent,
    canActivate: [ MemberRouteGuard ]
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [GuestRouteGuard, MemberRouteGuard, AdminRouteGuard]
})
export class AppRoutingModule { }
