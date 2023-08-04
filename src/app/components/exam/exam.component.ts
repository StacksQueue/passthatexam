import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IQuestion } from 'src/app/models/Question';
import { ExamService } from 'src/app/services/exam.service';
import { IQuestionFilter } from 'src/app/models/QuestionFilter';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ExamFilterComponent } from '../exam-filter/exam-filter.component';
import { MatDialog } from '@angular/material/dialog';
import { ScoreComponent } from '../score/score.component';
import { History } from 'src/app/models/History';

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
  };

  isloading: boolean = false;
  isEnd: boolean = false;
  ishome: boolean = false;

  histories: History[] = [];
  current_item: number = 1;
  history: History;

  constructor(
    private examService: ExamService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private _bottomSheet: MatBottomSheet,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: Params) =>
      this.queryParamsHandling(params)
    );

    this.examService.onFirstChoosenAnswer().subscribe((resp: History) => {
      this.histories.push({
        isCorrect: resp.isCorrect,
        itemNo: resp.itemNo,
        choosenAnswer: resp.choosenAnswer,
      });
      if (this.questionnaires.length === this.histories.length)
        this.openDialog();
    });

    this.ishome = this.router.url === '/';
  }

  next() {
    console.log(this.current_item > this.questionnaires.length)
    if (this.questionnaires.length == this.histories.length) this.isEnd = true;
    this.current_item += 1;
    this.current = this.questionnaires[this.current_item - 1];
    this.history = this.getHistory();
  }

  back() {
    this.current_item -= 1;
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

  openDialog() {
    const dialogref = this.dialog.open(ScoreComponent, {
      data: this.histories,
      width: '400px',
    });
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
    this.getExamQuestionnaires();
  }
}
