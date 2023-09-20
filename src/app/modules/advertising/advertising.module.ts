import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvertisingRoutingModule } from './advertising-routing.module';
import { AdvertisingComponent } from 'src/app/components/advertising/advertising.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [AdvertisingComponent],
  imports: [
    CommonModule,
    AdvertisingRoutingModule,
    SharedModule
  ]
})
export class AdvertisingModule { }
