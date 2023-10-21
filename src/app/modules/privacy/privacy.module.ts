import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivacyRoutingModule } from './privacy-routing.module';
import { PrivacyPolicyComponent } from 'src/app/components/privacy-policy/privacy-policy.component';


@NgModule({
  declarations: [PrivacyPolicyComponent],
  imports: [
    CommonModule,
    PrivacyRoutingModule
  ]
})
export class PrivacyModule { }
