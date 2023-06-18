import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, catchError, map, throwError } from 'rxjs';
import { IQuestion } from '../models/Question';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ExamService {
  answerSubject: Subject<string> = new Subject<string>();
  constructor(private https: HttpClient) {}

  getExams(): Observable<IQuestion[]> {
    let params = new HttpParams();
    params = params.append('test', JSON.stringify([1, 2, 3]));
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

  onChoosenAnswer() {
    return this.answerSubject.asObservable();
  }

  handleError(err: HttpErrorResponse) {
    return throwError(() => new Error(err.message));
  }
}
