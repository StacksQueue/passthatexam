import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PolicyRoutingModule } from './policy-routing.module';
import { PolicyComponent } from 'src/app/components/policy/policy.component';
import { HomeModule } from '../home/home.module';

@NgModule({
  declarations: [PolicyComponent],
  imports: [CommonModule, PolicyRoutingModule, HomeModule],
})
export class PolicyModule {}
