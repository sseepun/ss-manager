import { NgModule, Injectable } from '@angular/core';
import { Routes, RouterModule, CanActivate, CanActivateChild } from '@angular/router';

// Route Guard
import { AdminRouteGuard } from '../services/route-guard.service';

// Components
import { PageAdminPanelComponent } from './page-admin-panel.component';
import { PageAdminStatisticsComponent } from './page-admin-statistics/page-admin-statistics.component';
import { PageAdminSubmittedFormsComponent } from './page-admin-submitted-forms/page-admin-submitted-forms.component';
import { PageAdminFormManagementComponent } from './page-admin-form-management/page-admin-form-management.component';
import { PageAdminFormCategoryComponent } from './page-admin-form-category/page-admin-form-category.component';
import { PageAdminUserManagementComponent } from './page-admin-user-management/page-admin-user-management.component';


const routes: Routes = [
  {
    path: 'admin-panel', component: PageAdminPanelComponent,
    canActivate: [ AdminRouteGuard ],
    canActivateChild: [ AdminRouteGuard ],
    children: [
      { path: 'statistics', component: PageAdminStatisticsComponent },
      { path: 'submitted-forms', component: PageAdminSubmittedFormsComponent },
      { path: 'form-management', component: PageAdminFormManagementComponent },
      { path: 'form-category', component: PageAdminFormCategoryComponent },
      { path: 'user-management', component: PageAdminUserManagementComponent },
      { path: '', redirectTo: 'statistics', pathMatch: 'full' },
      { path: '**', redirectTo: 'statistics' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AdminRouteGuard]
})
export class PageAdminPanelRoutingModule { }
