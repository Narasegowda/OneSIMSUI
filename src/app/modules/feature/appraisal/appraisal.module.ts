import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppraisalComponent } from './appraisal.component';
import { AppraisalRoutingModule } from './appraisal-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppraisalRoutingModule
  ],
  exports: [
    AppraisalComponent
  ],
  declarations: [
    AppraisalComponent
  ],
  providers: [
  ],
})
export class AppraisalModule { }
