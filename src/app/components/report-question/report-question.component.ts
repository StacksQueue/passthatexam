import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-report-question',
  templateUrl: './report-question.component.html',
  styleUrls: ['./report-question.component.scss']
})
export class ReportQuestionComponent {

  selectedIssue = new FormControl('');
  issues: string[] = ["Incorrect Answer", "Missing Content"]

  onSubmit() {
    console.log('haha')
  }
}
