import { Component, Inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IQuestion } from 'src/app/models/Question';
import { IReport } from 'src/app/models/Report';
import { ExamService } from 'src/app/services/exam.service';

@Component({
  selector: 'app-report-question',
  templateUrl: './report-question.component.html',
  styleUrls: ['./report-question.component.scss'],
})
export class ReportQuestionComponent {
  reportForm: FormGroup;
  issues: string[] = [
    'Incorrect Answer',
    'Missing Content',
    'Unclear Explanation',
    'Others',
  ];

  constructor(
    private formbuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public question: IQuestion,
    private examService: ExamService,
    public dialogRef: MatDialogRef<ReportQuestionComponent>
  ) {
    this.reportForm = this.formbuilder.group({
      questionId: new FormControl(question._id),
      selectedIssue: new FormControl('', [Validators.required]),
      remarks: new FormControl(''),
    });
  }

  onSubmit() {
    let report: IReport = {
      questionId: this.reportForm.value.questionId,
      type: this.reportForm.value.selectedIssue,
      remarks: this.reportForm.value.remarks,
    };
    if (this.reportForm.valid) {
      this.examService
        .createIssueReport(report)
        .subscribe((resp) => console.log(resp));
      this.dialogRef.close('close');
    }
  }
}
