import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { IQuestion } from '../models/Question';

@Injectable({
  providedIn: 'root',
})
export class ExamService {
  constructor(private https: HttpClient) {}

  getExams(): IQuestion[] {
    return [
      {
        source: 'actual-test-2018-gen-ed',
        program: 'Licensure Exam for Teachers',
        year: 2018,
        major: 'Prof Ed',
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
    ];
  }

  handleError(err: HttpErrorResponse) {
    return throwError(() => new Error(err.message));
  }
}
