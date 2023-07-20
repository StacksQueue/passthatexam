import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IQuestion } from 'src/app/models/Question';
import { ExamService } from 'src/app/services/exam.service';
import { IQuestionFilter } from 'src/app/models/QuestionFilter';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ExamFilterComponent } from '../exam-filter/exam-filter.component';

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
  score: Score = {
    score: 0,
    total: 0,
  };
  isloading: boolean = false;

  constructor(
    private examService: ExamService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private _bottomSheet: MatBottomSheet
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: Params) =>
      this.queryParamsHandling(params)
    );
    this.examService.onFirstChoosenAnswer().subscribe((resp: boolean) => {
      this.score.score =
        resp === true ? this.score.score + 1 : this.score.score;
    });
  }

  next() {
    if (this.questionnaires.length == 0) console.log('end');
    else this.current = this.questionnaires.pop()!;
  }

  getExamQuestionnaires() {
    this.isloading = true;
    this.examService.getExams(this.filter).subscribe({
      next: (resp: any) => {
        this.questionnaires = resp['data'];
        this.score.total = this.questionnaires.length;
        this.current = this.questionnaires.pop()!;
      },
      error: (err: any) => console.log(err),
      complete: () => (this.isloading = false)
    });
  }

  openBottomSheet(): void {
    this._bottomSheet.open(ExamFilterComponent);
  }

  queryParamsHandling(params: Params) {
    this.filter.category =
      params['category'] && Array.isArray(params['category'])
        ? params['category']
        : params['category']
        ? [params['category']]
        : [];
    this.filter.items = params['items'] ? params['items'] : 50;
    this.filter.timer = params['timer'] ? params['timer'] : 0;
    this.getExamQuestionnaires();
  }
}
