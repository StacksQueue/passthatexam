import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import {
  ActivatedRoute,
  NavigationExtras,
  Params,
  Router,
} from '@angular/router';
import { Pagination } from 'src/app/models/Pagination';
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
  pagination: Pagination = {
    length: 100,
    page: 1,
    limit: 10,
    pageSizeOption: [5, 10, 25, 100],
  };

  constructor(
    private router: Router,
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
    this.examService
      .getQuestionList(this.keyword, this.pagination)
      .subscribe((resp) => {
        this.questionnaires = resp['data'];
        this.pagination.length = resp['total'];
        this.isloading = false;
      });
  }

  paginate(event: PageEvent) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        page: event.pageIndex + 1,
        limit: event.pageSize,
      },
      queryParamsHandling: 'merge',
    };
    console.log(event.pageIndex);
    this.router.navigate(['/questions'], navigationExtras);
  }

  queryParamsHandling(params: Params) {
    this.pagination.page = params['page'] ? params['page'] : 1;
    this.pagination.limit = params['limit'] ? params['limit'] : 25;
    this.keyword = params['keyword'] ? params['keyword'] : '';
    console.log('query', this.pagination.page);
    this.getQuestionList();
  }
}
