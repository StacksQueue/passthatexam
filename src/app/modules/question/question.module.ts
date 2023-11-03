import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionRoutingModule } from './question-routing.module';
import { QuestionListComponent } from 'src/app/components/question-list/question-list.component';
import { QuestionTabComponent } from 'src/app/components/question-tab/question-tab.component';
import { QuestionSearchComponent } from 'src/app/components/question-search/question-search.component';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChoicefilterPipe } from 'src/app/pipes/choicefilter.pipe';

@NgModule({
  declarations: [
    QuestionListComponent,
    QuestionTabComponent,
    QuestionSearchComponent,
    ChoicefilterPipe
  ],

  imports: [
    CommonModule,
    QuestionRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class QuestionModule {}
