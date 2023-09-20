import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
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
  programs: string[] = [];
  selectedPrograms: string[] = [];
  isloading: boolean = false;
  isShow: boolean = false;
  isExpand: boolean = false;
  pagination: Pagination = {
    length: 100,
    page: 1,
    limit: 10,
    pageSizeOption: [5, 10, 25, 100],
  };
  watermark: boolean = false;

  constructor(
    private router: Router,
    private examService: ExamService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.queryParamsHandling(params);
    });
    this.examService.getExamPrograms().subscribe((resp) => {
      this.programs = resp['data'];
      if (!this.selectedPrograms.length) this.selectedPrograms = resp['data'];
    });
  }

  getQuestionList() {
    this.isloading = true;
    this.examService
      .getQuestionList(this.keyword, this.selectedPrograms, this.pagination)
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
    this.router.navigate(['/questions'], navigationExtras);
  }

  queryParamsHandling(params: Params) {
    this.pagination.page = params['page'] ? params['page'] : 1;
    this.pagination.limit = params['limit'] ? params['limit'] : 25;
    this.keyword = params['keyword'] ? params['keyword'] : '';
    this.selectedPrograms = params['programs']
      ? Array.isArray(params['programs'])
        ? params['programs']
        : [params['programs']]
      : [];
    this.watermark = params['watermark'] ? params['watermark'] : false;
    this.getQuestionList();
  }
}
