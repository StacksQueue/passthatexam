import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, catchError, map, throwError } from 'rxjs';
import { IQuestion } from '../models/Question';
import { IQuestionFilter } from '../models/QuestionFilter';
import { environment } from 'src/environments/environment';
import { History } from '../models/History';
import { IReport } from '../models/Report';
import { Pagination } from '../models/Pagination';

@Injectable({
  providedIn: 'root',
})
export class ExamService {
  firstChoiceSubject: Subject<History> = new Subject<History>();
  constructor(private https: HttpClient) {}

  getExams(filter: IQuestionFilter): Observable<IQuestion[]> {
    let params = new HttpParams({
      fromObject: {
        limit: filter.items,
        major: filter.major,
        program: filter.program,
        coverage: filter.coverage
      },
    });
    return this.https
      .get<IQuestion[]>(environment.api_url + '/question', { params })
      .pipe(catchError(this.handleError));
  }

  getExamPrograms(): Observable<any> {
    let params = new HttpParams();
    return this.https
      .get(environment.api_url + '/question/program', { params })
      .pipe(catchError(this.handleError));
  }

  getExamCoverage(): Observable<any> {
    let params = new HttpParams();
    return this.https
      .get(environment.api_url + '/question/coverage', { params })
      .pipe(catchError(this.handleError));
  }

  getQuestionList(
    keyword: string,
    programs: string[],
    pagination: Pagination
  ): Observable<any> {
    let params = new HttpParams({
      fromObject: {
        keyword: keyword,
        page: pagination.page,
        limit: pagination.limit,
        programs: programs,
      },
    });

    return this.https
      .get(environment.api_url + '/question/search', { params })
      .pipe(catchError(this.handleError));
  }

  getExamCategories(search: string, program: string[]): Observable<any> {
    let params = new HttpParams({
      fromObject: {
        search,
        program,
      },
    });
    // params = params.append('search', search);
    return this.https
      .get(environment.api_url + '/question/category', { params })
      .pipe(catchError(this.handleError));
  }

  createIssueReport(report: IReport) {
    return this.https
      .post(environment.api_url + '/report', report)
      .pipe(catchError(this.handleError));
  }

  onFirstChoosenAnswer() {
    return this.firstChoiceSubject.asObservable();
  }

  handleError(err: HttpErrorResponse) {
    return throwError(() => new Error(err.message));
  }
}
