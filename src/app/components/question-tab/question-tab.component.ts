import { Component, Input, OnInit } from '@angular/core';
import { IQuestion } from 'src/app/models/Question';

@Component({
  selector: 'app-question-tab',
  templateUrl: './question-tab.component.html',
  styleUrls: ['./question-tab.component.scss']
})
export class QuestionTabComponent implements OnInit {
  @Input() question: IQuestion;

  ngOnInit(): void {
    console.log(this.question)
  }

}
