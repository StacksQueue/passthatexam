import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DonateRoutingModule } from './donate-routing.module';
import { MaterialModule } from '../material.module';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { DonateComponent } from 'src/app/components/donate/donate.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [DonateComponent],
  imports: [
    CommonModule,
    MaterialModule,
    DonateRoutingModule,
    ClipboardModule,
    SharedModule
  ]
})
export class DonateModule { }
