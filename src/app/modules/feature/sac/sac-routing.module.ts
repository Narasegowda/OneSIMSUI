import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SacComponent } from './sac.component';


const routes: Routes = [
  { path: '', component: SacComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SacRoutingModule { }


