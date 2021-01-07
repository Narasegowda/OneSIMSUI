import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DealershipConfigurationComponent } from './dealershipConfiguration.component';
import { DealershipConfigurationRoutingModule } from './dealershipConfiguration-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DealershipConfigurationRoutingModule
  ],
  exports: [
    DealershipConfigurationComponent
  ],
  declarations: [
    DealershipConfigurationComponent
  ],
  providers: [
  ],
})
export class DealershipConfigurationModule { }
