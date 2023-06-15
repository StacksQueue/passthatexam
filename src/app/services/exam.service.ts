import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, catchError, map, throwError } from 'rxjs';
import { IQuestion } from '../models/Question';

@Injectable({
  providedIn: 'root',
})
export class ExamService {
  answerSubject: Subject<string> = new Subject<string>();
  constructor(private https: HttpClient) {}

  getExams(): IQuestion[] {
    return [
      {
        source: 'actual-test-2018-gen-ed',
        program: 'Education',
        year: 2018,
        major: ['prof ed'],
        question:
          'What should a cooperating teacher do to help the student teacher who has been assigned to him/her?',
        choices: [
          'Provide opportunities for the student teacher to acquire the skills and competencies of effective teachers.',
          'Show your lesson plan and let him/her follow what is in your lesson plan.',
          'Write or prepare activities to be done and let him/her execute these in class.',
          'Don’t allow him/her to make own decisions as to how the lesson is to be introduced.',
        ],
        answer:
          'Provide opportunities for the student teacher to acquire the skills and competencies of effective teachers.',
      },
      {
        source: 'actual-test-2018-gen-ed',
        program: 'Education',
        year: 2018,
        major: ['prof ed'],
        question:
          'Under what level would questions fall which require students to apply a rule or a process to a problem and thereby determine the single right answer to that problem?',
        choices: ['analysis', 'application', 'evaluation', 'synthesis'],
        answer: 'application',
      },
    ];
  }

  onChoosenAnswer() {
    return this.answerSubject.asObservable();
  }

  handleError(err: HttpErrorResponse) {
    return throwError(() => new Error(err.message));
  }
}
