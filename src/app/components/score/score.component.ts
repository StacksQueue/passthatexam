import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
import { ExamService } from 'src/app/services/exam.service';
import { ExamFilterComponent } from '../exam-filter/exam-filter.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

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
  // @Input() score: Score;

  constructor(
    private router: Router,
    private examService: ExamService,
    private _bottomSheet: MatBottomSheet,
    public dialogRef: MatDialogRef<ScoreComponent>,
    @Inject(MAT_DIALOG_DATA) public score: Score
  ) {}

  ngOnInit(): void {}

  openBottomSheet(): void {
    // this._bottomSheet.open(ExamFilterComponent);
  }
}
