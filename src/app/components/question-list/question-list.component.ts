import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IQuestion } from 'src/app/models/Question';
import { ExamService } from 'src/app/services/exam.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss'],
})
export class QuestionListComponent implements OnInit {
  keyword: string = '';
  questionnaires: IQuestion[] = [];

  constructor(
    private examService: ExamService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.queryParamsHandling(params);
    });
  }

  getQuestionList() {
    this.examService.getQuestionList(this.keyword).subscribe((resp) => {
      this.questionnaires = resp['data'];
    });
  }

  queryParamsHandling(params: Params) {
    this.keyword = params['keyword'] ? params['keyword'] : '';
    this.getQuestionList();
  }
}
