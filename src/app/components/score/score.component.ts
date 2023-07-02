import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExamService } from 'src/app/services/exam.service';

export interface Score {
  score: number;
  total: number;
}
@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss'],
})
export class ScoreComponent implements OnInit {
  @Input() score: Score;
  constructor(private router: Router, private examService: ExamService) {}

  ngOnInit(): void {}

  navigate() {
    this.router.navigate(['/']);
  }
}
