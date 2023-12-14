import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, NavigationExtras, Params, Router } from '@angular/router';
import { Pagination } from 'src/app/models/Pagination';
import { IQuestion } from 'src/app/models/Question';
import { ExamService } from 'src/app/services/exam.service';
import { SeoService } from 'src/app/services/seo.service';

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
  selectedCoverage: string[] = [];
  selectedMain: string[] = [];
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

  questionsbycoverage = [];

  constructor(private router: Router, private examService: ExamService, private activatedRoute: ActivatedRoute, private seoService: SeoService) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.seoService.createLinkForCanonicalURL('https://passthatboard.com/questions', params);
      this.queryParamsHandling(params);
    });
    this.examService.getExamPrograms().subscribe((resp) => {
      this.programs = resp['data'];
      if (!this.selectedPrograms.length) this.selectedPrograms = resp['data'];
    });
  }

  getQuestionList() {
    this.isloading = true;
    this.examService.getQuestionList(this.keyword, this.selectedPrograms, this.pagination).subscribe((resp) => {
      this.questionnaires = resp['data'];
      this.pagination.length = resp['total'];
      this.isloading = false;
    });
  }

  getQuestionListByCategory() {
    this.examService.getQuestionListByCategory(this.pagination, this.selectedCoverage, this.selectedMain).subscribe((resp) => {
      this.questionsbycoverage = resp['data'];
      console.log(this.questionsbycoverage);
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
    this.selectedPrograms = params['programs'] ? (Array.isArray(params['programs']) ? params['programs'] : [params['programs']]) : [];
    this.selectedCoverage = params['coverage'] ? (Array.isArray(params['coverage']) ? params['coverage'] : [params['coverage']]) : [];
    this.selectedMain = params['main'] ? (Array.isArray(params['main']) ? params['main'] : [params['main']]) : [];
    this.watermark = params['watermark'] ? JSON.parse(params['watermark']) : false;
    this.getQuestionList();
    this.getQuestionListByCategory();
  }
}
