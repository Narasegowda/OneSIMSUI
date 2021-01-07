import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DealershipConfigurationComponent } from './dealershipConfiguration.component';

const routes: Routes = [
  { path: '', component: DealershipConfigurationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DealershipConfigurationRoutingModule { }
