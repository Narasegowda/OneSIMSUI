import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SacRoutingModule } from './sac-routing.module';


import {  SacComponent} from './sac.component';


@NgModule({
 
  imports: [
    CommonModule,
    SacRoutingModule
  ],
  exports: [
    SacComponent
  ],
  declarations: [
    SacComponent
  ],
  providers: [
  ],
})
export class SacModule { }


