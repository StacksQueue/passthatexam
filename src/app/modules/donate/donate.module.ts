import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DonateRoutingModule } from './donate-routing.module';
import { MaterialModule } from '../material.module';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { DonateComponent } from 'src/app/components/donate/donate.component';


@NgModule({
  declarations: [DonateComponent],
  imports: [
    CommonModule,
    MaterialModule,
    DonateRoutingModule,
    ClipboardModule,
  ]
})
export class DonateModule { }
