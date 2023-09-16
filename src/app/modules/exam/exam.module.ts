import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamRoutingModule } from './exam-routing.module';
import { MaterialModule } from '../material.module';
import { QuestionComponent } from 'src/app/components/question/question.component';
import { ChoiceComponent } from 'src/app/components/choice/choice.component';
import { ExamComponent } from 'src/app/components/exam/exam.component';
import { SkipPromptComponent } from 'src/app/components/skip-prompt/skip-prompt.component';
import { ReportQuestionComponent } from 'src/app/components/report-question/report-question.component';
import { ExplainPromptComponent } from 'src/app/components/explain-prompt/explain-prompt.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExamFilterComponent } from 'src/app/components/exam-filter/exam-filter.component';
import { ScoreComponent } from 'src/app/components/score/score.component';
import { DescWelcomeComponent } from 'src/app/components/desc-welcome/desc-welcome.component';

@NgModule({
  declarations: [
    QuestionComponent,
    ChoiceComponent,
    ExamComponent,
    SkipPromptComponent,
    ReportQuestionComponent,
    ExplainPromptComponent,
    ExamFilterComponent,
    ScoreComponent,
    DescWelcomeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ExamRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [QuestionComponent, ChoiceComponent, ExamComponent],
})
export class ExamModule {}
