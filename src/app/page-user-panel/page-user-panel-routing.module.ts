import { NgModule, Injectable } from '@angular/core';
import { Routes, RouterModule, CanActivate, CanActivateChild } from '@angular/router';

// Route Guard
import { MemberRouteGuard } from '../services/route-guard.service';

// Components
import { PageUserPanelComponent } from './page-user-panel.component';
import { PageUserProfileComponent } from './page-user-profile/page-user-profile.component';
import { PageUserFormHistoryComponent } from './page-user-form-history/page-user-form-history.component';
import { PageUserSettingComponent } from './page-user-setting/page-user-setting.component';


const routes: Routes = [
  {
    path: 'user-panel', component: PageUserPanelComponent,
    canActivate: [ MemberRouteGuard ],
    canActivateChild: [ MemberRouteGuard ],
    children: [
      { path: 'profile', component: PageUserProfileComponent },
      { path: 'form-history', component: PageUserFormHistoryComponent },
      { path: 'setting', component: PageUserSettingComponent },
      { path: '', redirectTo: 'profile', pathMatch: 'full' },
      { path: '**', redirectTo: 'profile' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [MemberRouteGuard]
})
export class PageUserPanelRoutingModule { }
