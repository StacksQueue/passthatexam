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
  ],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule, FormsModule, RouterModule],
  exports: [HeaderComponent, ChoiceComponent, QuestionComponent, ExamComponent],
})
export class ComponentModule {}
