import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ExamService } from 'src/app/services/exam.service';
import { History } from 'src/app/models/History';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.scss'],
})
export class ChoiceComponent implements OnInit {
  @Input() choice: string;
  @Input() answer: string;
  @Input() ishome: boolean;
  @Input() itemNo: number;

  isAnswer: boolean = false;
  isChoosen: boolean = false;
  isFirstAnswer: boolean = false;
  constructor(private examService: ExamService) {}

  ngOnInit(): void {
    this.examService.onFirstChoosenAnswer().subscribe((resp: History) => {
      this.isFirstAnswer = true;
      this.isAnswer = this.answer === this.choice;
    });
  }

  chooseAnswer() {
    if (!this.isFirstAnswer) {
      this.isChoosen = true;
      // console.log({ answer: this.answer, choise: this.choice });

      this.examService.firstChoiceSubject.next({
        isCorrect: this.answer === this.choice,
        itemNo: this.itemNo, 
        choosenAnswer: this.choice
      });
    }
  }
}
