import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IQuestion } from 'src/app/models/Question';
import { ReportQuestionComponent } from '../report-question/report-question.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ExamService } from 'src/app/services/exam.service';

@Component({
  selector: 'app-question-tab',
  templateUrl: './question-tab.component.html',
  styleUrls: ['./question-tab.component.scss'],
})
export class QuestionTabComponent implements OnInit {
  @Input() question: IQuestion;
  @Input() isShow: boolean;
  @Input() isExpand: boolean;
  isChecked: boolean = false;
  question_shortened: string = '';
  panelOpenState: boolean = false;

  constructor(
    private dialog: MatDialog,
    private _snackBar: MatSnackBar,
  ) {}

  ngOnInit(): void {
    const max = window.innerWidth > 420 ? 180 : 60;
    const q = this.question.question;
    this.question_shortened = q.length > max ? q.slice(0, max) + '...' : q;
  }

  openReportQuestionDialog() {
    const dialogref = this.dialog.open(ReportQuestionComponent, {
      data: this.question,
      width: '400px',
    });
    dialogref.afterClosed().subscribe((resp) => {
      if (resp === 'close')
        this._snackBar.open('Success sending Report. Thank you', '', {
          duration: 3000,
        });
    });
  }
}
