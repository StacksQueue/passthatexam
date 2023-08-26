import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-question-search',
  templateUrl: './question-search.component.html',
  styleUrls: ['./question-search.component.scss'],
})
export class QuestionSearchComponent {
  questionForm: FormGroup;

  constructor(private formbuilder: FormBuilder) {
    this.questionForm = this.formbuilder.group({
      search: new FormControl(''),
    });
  }

  onEnterKey(event: KeyboardEvent) {
    if (event?.key  === 'Enter') {
      this.onSubmit();
    }
  }

  onSubmit() {
    console.log(this.questionForm.value)
  }
}
