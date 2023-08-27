import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
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
  isloading: boolean = false;

  constructor(
    private examService: ExamService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.queryParamsHandling(params);
    });
  }

  toggleShowAllAnswer(event: MatSlideToggleChange) {
    this.examService.showAllAnswerSubject.next(event.checked);
  }

  toggleExpandQuestion(event: MatSlideToggleChange) {
    this.examService.showQuestionTabSubject.next(event.checked);
  }

  getQuestionList() {
    this.isloading = true;
    this.examService.getQuestionList(this.keyword).subscribe((resp) => {
      this.questionnaires = resp['data'];
      this.isloading = false;
    });
  }

  queryParamsHandling(params: Params) {
    this.keyword = params['keyword'] ? params['keyword'] : '';
    this.getQuestionList();
  }
}
