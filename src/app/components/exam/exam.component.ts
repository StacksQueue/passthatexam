import { Component, OnInit } from '@angular/core';
import { IQuestion } from 'src/app/models/Question';
import { ExamService } from 'src/app/services/exam.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss'],
})
export class ExamComponent implements OnInit {
  questionnaires: IQuestion[] = []
  constructor(private examService: ExamService) {}

  ngOnInit(): void {
    this.questionnaires = this.examService.getExams()
  }

  onChoose(event: string) {
    console.log(event)
  }
}
