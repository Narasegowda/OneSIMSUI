import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppraisalComponent } from './appraisal.component';

const routes: Routes = [
  {
    path: '', component: AppraisalComponent, children: [
      {
        path: '',
        loadChildren: () => import(`./manualAppraisal/manual.module`)
          .then(m => m.ManualModule)
      },
      {
        path: 'manual',
        loadChildren: () => import(`./manualAppraisal/manual.module`)
          .then(m => m.ManualModule)
      },
      {
        path: 'Auto',
        loadChildren: () => import(`./autoAppraisal/auto.module`)
          .then(m => m.AutoModule)
      },
      {
        path: '**',
        loadChildren: () => import(`./manualAppraisal/manual.module`)
          .then(m => m.ManualModule)
      },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppraisalRoutingModule { }
