import { AfterViewInit, Component, OnInit, Type } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IQuestion } from 'src/app/models/Question';
import { ExamService } from 'src/app/services/exam.service';
import { IQuestionFilter } from 'src/app/models/QuestionFilter';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ExamFilterComponent } from '../exam-filter/exam-filter.component';
import { MatDialog } from '@angular/material/dialog';
import { ScoreComponent } from '../score/score.component';
import { History } from 'src/app/models/History';
import { SkipPromptComponent } from '../skip-prompt/skip-prompt.component';
import { ReportQuestionComponent } from '../report-question/report-question.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ExplainPromptComponent } from '../explain-prompt/explain-prompt.component';

export interface Score {
  score: number;
  total: number;
}

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss'],
})
export class ExamComponent implements OnInit {
  questionnaires: IQuestion[] = [];
  current: IQuestion;
  filter: IQuestionFilter = {
    category: [],
    items: 50,
    timer: 0,
    programs: [],
  };

  isloading: boolean = false;
  isEnd: boolean = false;
  ishome: boolean = false;
  isPrompted: boolean = false;

  histories: History[] = [];
  current_item: number = 1;
  history: History;
  nextskipped: number = 1;

  constructor(
    private examService: ExamService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private _bottomSheet: MatBottomSheet,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.resetValues();
      this.queryParamsHandling(params);
    });

    this.examService.onFirstChoosenAnswer().subscribe((resp: History) => {
      this.histories.push({
        isCorrect: resp.isCorrect,
        itemNo: resp.itemNo,
        choosenAnswer: resp.choosenAnswer,
      });
      if (this.questionnaires.length === this.histories.length)
        this.openDialog(ScoreComponent, this.histories);
    });

    this.ishome = this.router.url === '/';
  }

  next() {
    if (this.questionnaires.length == this.histories.length) this.isEnd = true;
    if (this.current_item > this.histories.length && !this.isPrompted) {
      console.log('prompt');
      this.isPrompted = true;
      this.openDialog(SkipPromptComponent, null);
    }
    this.getQuestion(this.current_item + 1);
  }

  back() {
    this.getQuestion(this.current_item - 1);
  }

  gotoSkippedQuestion() {
    const total: number = this.questionnaires.length;
    const answeredNos: number[] = this.histories.map((x) => x.itemNo);
    let skippedNos: number[] = [];
    for (let x = this.nextskipped; x <= total; x++) {
      if (!answeredNos.includes(x)) skippedNos.push(x);
    }

    skippedNos.sort((a, b) => b - a);
    let skipped = skippedNos.pop();
    this.nextskipped = skippedNos.length ? skippedNos.pop()! : 1;

    if (skipped) this.getQuestion(skipped);
  }

  getQuestion(itemNo: number) {
    this.current_item = itemNo;
    this.current = this.questionnaires[this.current_item - 1];
    this.history = this.getHistory();
  }

  getExamQuestionnaires() {
    this.isloading = true;
    this.examService.getExams(this.filter).subscribe({
      next: (resp: any) => {
        this.questionnaires = resp['data'];
        this.current = this.questionnaires[this.current_item - 1];
      },
      error: (err: any) => console.log(err),
      complete: () => (this.isloading = false),
    });
  }

  getHistory(): History {
    return this.histories.filter((x) => x.itemNo == this.current_item)[0];
  }

  openBottomSheet(): void {
    this._bottomSheet.open(ExamFilterComponent);
  }

  openExplainDialog() {
    this.openDialog(ExplainPromptComponent, this.current.explanation);
  }

  openReportQuestionDialog() {
    this.openDialog(ReportQuestionComponent, this.current);
  }

  openDialog(
    component: Type<
      | ScoreComponent
      | SkipPromptComponent
      | ReportQuestionComponent
      | ExplainPromptComponent
    >,
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

  resetValues() {
    this.histories = [];
    this.current_item = 1;
  }

  queryParamsHandling(params: Params) {
    this.filter.category =
      params['category'] && Array.isArray(params['category'])
        ? params['category']
        : params['category']
        ? [params['category']]
        : [];
    this.filter.items =
      params['items'] && parseInt(params['items']) > 0 ? params['items'] : 50;
    this.filter.timer = params['timer'] ? params['timer'] : 0;
    this.filter.programs =
      params['programs'] && Array.isArray(params['programs'])
        ? params['programs']
        : params['programs']
        ? [params['programs']]
        : [];
    this.getExamQuestionnaires();
  }
}
