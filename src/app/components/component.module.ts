import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ChoiceComponent } from './choice/choice.component';
import { MaterialModule } from '../modules/material.module';
import { QuestionComponent } from './question/question.component';
import { ExamComponent } from './exam/exam.component';
import { ScoreComponent } from './score/score.component';
import { ExamFilterComponent } from './exam-filter/exam-filter.component';
import { CategoryComponent } from './category/category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PolicyComponent } from './policy/policy.component';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './slider/slider.component';
import { FooterComponent } from './footer/footer.component';
import { SkipPromptComponent } from './skip-prompt/skip-prompt.component';
import { ReportQuestionComponent } from './report-question/report-question.component';
import { ExplainPromptComponent } from './explain-prompt/explain-prompt.component';
import { DonateComponent } from './donate/donate.component';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionTabComponent } from './question-tab/question-tab.component';
import { QuestionSearchComponent } from './question-search/question-search.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ChoiceComponent,
    QuestionComponent,
    ExamComponent,
    ScoreComponent,
    ExamFilterComponent,
    CategoryComponent,
    PolicyComponent,
    HomeComponent,
    SliderComponent,
    FooterComponent,
    SkipPromptComponent,
    ReportQuestionComponent,
    ExplainPromptComponent,
    DonateComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    ClipboardModule,
  ],
  exports: [HeaderComponent, ChoiceComponent, QuestionComponent, ExamComponent],
})
export class ComponentModule {}
