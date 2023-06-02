import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ChoiceComponent } from './choice/choice.component';
import { MaterialModule } from '../modules/material.module';
import { QuestionComponent } from './question/question.component';

@NgModule({
  declarations: [HeaderComponent, ChoiceComponent, QuestionComponent],
  imports: [CommonModule, MaterialModule],
  exports: [HeaderComponent, ChoiceComponent, QuestionComponent],
})
export class ComponentModule {}
