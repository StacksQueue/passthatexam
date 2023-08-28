import { Component, Input, OnInit, Type } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IQuestion } from 'src/app/models/Question';
import { ReportQuestionComponent } from '../report-question/report-question.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ExamService } from 'src/app/services/exam.service';
import { ExplainPromptComponent } from '../explain-prompt/explain-prompt.component';

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

  constructor(private dialog: MatDialog, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    const max = window.innerWidth > 420 ? 180 : 60;
    const q = this.question.question;
    this.question_shortened = q.length > max ? q.slice(0, max) + '...' : q;
  }

  openExplainDialog() {
    this.openDialog(ExplainPromptComponent, this.question.explanation);
  }

  openReportQuestionDialog() {
    this.openDialog(ReportQuestionComponent, this.question);
    
  }

  openDialog(
    component: Type<ReportQuestionComponent | ExplainPromptComponent>,
    data: any
  ) {
    const dialogref = this.dialog.open(component, {
      data: data,
      width: '400px',
    });

    dialogref.afterClosed().subscribe((resp) => {
      if (component === ReportQuestionComponent && resp === 'close')
        this._snackBar.open('Success sending Report. Thank you', '', {
          duration: 3000,
        });
    });
  }
}
