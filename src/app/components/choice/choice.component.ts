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
  isChoosen: boolean = false;
  isFirstAnswer: boolean = false;
  constructor(private examService: ExamService) {}

  ngOnInit(): void {
    this.examService.onFirstChoosenAnswer().subscribe((resp:boolean)=>{
      this.isFirstAnswer = true;
      this.isAnswer = this.answer === this.choice;
    })
  }

  chooseAnswer() {
    if(!this.isFirstAnswer) {
      this.isChoosen = true;
      // this.isAnswer = this.answer === this.choice;
      console.log('here', this.answer === this.choice)
      this.examService.firstChoiceSubject.next(this.answer === this.choice);
    }
  }
}
