import { NgModule, Injectable } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

const routes: Routes = [
  // { path: 'computer-or-mobile', component: SsComputerOrMobileComponent },
  // { path: 'temperature-contour', component: SsTemperatureComponent },
  // { path: 'heatmap-set01', component: SsHeatmap01Component },
  // { path: 'fluid-gauge', component: SsGauge01Component },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
