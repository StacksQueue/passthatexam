import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PolicyRoutingModule } from './policy-routing.module';
import { PolicyComponent } from 'src/app/components/policy/policy.component';
import { ExamModule } from '../exam/exam.module';

@NgModule({
  declarations: [PolicyComponent],
  imports: [CommonModule, PolicyRoutingModule, ExamModule],
})
export class PolicyModule {}
