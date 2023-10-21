import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvertisingRoutingModule } from './advertising-routing.module';
import { AdvertisingComponent } from 'src/app/components/advertising/advertising.component';


@NgModule({
  declarations: [AdvertisingComponent],
  imports: [
    CommonModule,
    AdvertisingRoutingModule,
  ]
})
export class AdvertisingModule { }
