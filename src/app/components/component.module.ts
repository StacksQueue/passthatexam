import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ChoiceComponent } from './choice/choice.component';
import { MaterialModule } from '../modules/material.module';
import { QuestionComponent } from './question/question.component';
import { ExamComponent } from './exam/exam.component';
import { ScoreComponent } from './score/score.component';
import { ExamFilterComponent } from './exam-filter/exam-filter.component';

@NgModule({
  declarations: [HeaderComponent, ChoiceComponent, QuestionComponent, ExamComponent, ScoreComponent, ExamFilterComponent],
  imports: [CommonModule, MaterialModule],
  exports: [HeaderComponent, ChoiceComponent, QuestionComponent, ExamComponent],
})
export class ComponentModule {}
