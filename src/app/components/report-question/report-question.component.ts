import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-report-question',
  templateUrl: './report-question.component.html',
  styleUrls: ['./report-question.component.scss']
})
export class ReportQuestionComponent {


  reportForm: FormGroup
  issues: string[] = ["Incorrect Answer", "Missing Content"]

  constructor(private formbuilder: FormBuilder) {
    this.reportForm = this.formbuilder.group({
      selectedIssue: new FormControl('', [Validators.required]),
      answer: new FormControl('')
    })
  }

  onSubmit() {
    console.log('haha')
  }
}
