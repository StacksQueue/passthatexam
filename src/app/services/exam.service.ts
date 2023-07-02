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

@Injectable({
  providedIn: 'root',
})
export class ExamService {
  firstChoiceSubject: Subject<boolean> = new Subject<boolean>();
  constructor(private https: HttpClient) {}

  getExams(filter: IQuestionFilter): Observable<IQuestion[]> {
    let params = new HttpParams({
      fromObject: { limit: filter.items, major: filter.category },
    });
    return this.https
      .get<IQuestion[]>(environment.api_url + '/question', { params })
      .pipe(catchError(this.handleError));
  }

  getExamCategories(search: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('search', search);
    return this.https
      .get(environment.api_url + '/category', { params })
      .pipe(catchError(this.handleError));
  }

  onFirstChoosenAnswer() {
    return this.firstChoiceSubject.asObservable();
  }

  handleError(err: HttpErrorResponse) {
    return throwError(() => new Error(err.message));
  }
}
