import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ExamService } from 'src/app/services/exam.service';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.scss'],
})
export class ChoiceComponent implements OnInit {
  @Input() choice: string;
  @Input() answer: string;

  isAnswer: boolean = false;
  isChoosen: boolean= false;
  constructor(
    private examService: ExamService
  ) {}

  ngOnInit(): void {
    this.examService.onChoosenAnswer().subscribe((resp: string)=> {
      console.log(this.answer === resp, this.answer)
      this.isAnswer = this.answer === this.choice;
    })

  }

  chooseAnswer() {
    this.examService.answerSubject.next(this.choice)
    this.isChoosen = true;
  }
}
