import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamRoutingModule } from './exam-routing.module';
import { MaterialModule } from '../material.module';
import { QuestionComponent } from 'src/app/components/question/question.component';
import { ChoiceComponent } from 'src/app/components/choice/choice.component';
import { ExamComponent } from 'src/app/components/exam/exam.component';

@NgModule({
  declarations: [QuestionComponent, ChoiceComponent, ExamComponent],
  imports: [CommonModule, MaterialModule, ExamRoutingModule],
  exports: [QuestionComponent, ChoiceComponent, ExamComponent],
})
export class ExamModule {}
