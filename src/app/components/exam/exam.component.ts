import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IQuestion } from 'src/app/models/Question';
import { QuestionFilter } from 'src/app/models/QuestionFilter';
import { ExamService } from 'src/app/services/exam.service';

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


  constructor(
    private examService: ExamService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.questionnaires = this.examService.getExams();
    this.activatedRoute.queryParams.subscribe((params: Params) =>
      this.queryParamsHandling(params)
    );
  }

  next() {
    if (this.questionnaires.length == 0) console.log('end');
    else this.current = this.questionnaires.pop()!;
  }

  getExamQuestionnaires() {
    this.examService.getExams('').subscribe((resp: any) => {
      this.questionnaires = resp['data'];
      this.current = this.questionnaires.pop()!;
    });
  }

  queryParamsHandling(params: Params) {
    this.getExamQuestionnaires();
  }
}
