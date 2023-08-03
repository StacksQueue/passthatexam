import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
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
  @Input() history: History;
  isAnswer: boolean = false;
  isChoosen: boolean = false;
  isFirstAnswer: boolean = false;
  constructor(private examService: ExamService) {}

  ngOnInit(): void {
    this.examService.onFirstChoosenAnswer().subscribe((resp: History) => {
      this.isFirstAnswer = true;
      this.isAnswer = this.answer === this.choice;
    });

    if (
      (this.history && this.history.choosenAnswer === this.choice) ||
      (this.history && this.answer === this.choice)
    ) {
      this.isChoosen = true;
      this.isAnswer = this.answer === this.choice;
      this.isFirstAnswer = true;
    }
  }

  chooseAnswer() {
    if (!this.isFirstAnswer && !this.history) {
      this.isChoosen = true;
      this.examService.firstChoiceSubject.next({
        isCorrect: this.answer === this.choice,
        itemNo: this.itemNo,
        choosenAnswer: this.choice,
      });
    }
  }
}
