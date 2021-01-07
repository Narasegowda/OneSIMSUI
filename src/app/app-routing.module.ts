import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './modules/feature/dashboard/dashboard.component';
import { NotFoundComponent } from './modules/feature/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, },
  {
    path: 'appraisal',
    loadChildren: () => import('./modules/feature/appraisal/appraisal.module')
      .then(mod => mod.AppraisalModule)
  },
  {
    path: 'dealershipConfiguration',
    loadChildren: () => import('./modules/feature/dealershipConfiguration/dealershipConfiguration.module')
      .then(mod => mod.DealershipConfigurationModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/feature/login/login.module')
      .then(mod => mod.LoginModule)
  },
  {
    path: 'sac',
    loadChildren: () => import('./modules/feature/sac/sac.module')
      .then(mod => mod.SacModule)
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
