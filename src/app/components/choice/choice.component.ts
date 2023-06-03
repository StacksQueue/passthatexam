import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.scss'],
})
export class ChoiceComponent implements OnInit {
  @Input() choices: string[] = [];
  @Output() choose: EventEmitter<string> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    console.log(this.choices);
  }

  chooseAnswer(choice: string) {
    this.choose.emit(choice);
  }
}
