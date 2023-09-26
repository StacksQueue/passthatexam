import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ExamFilterComponent } from '../exam-filter/exam-filter.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  toolbarVisible = false;
  majors: string[] = [
    'English',
    'Filipino',
    'Biological Science',
    'Physical Science',
    'Mathematics',
    'Social Sciences',
    'Values Education',
    'MAPEH',
    'Agriculture and Fishery Arts',
    'TLE',
  ];

  constructor(private _bottomSheet: MatBottomSheet) {}

  ngOnInit(): void {}

  openBottomSheet(): void {
    this._bottomSheet.open(ExamFilterComponent);
  }

  toggleToolbar() {
    this.toolbarVisible = !this.toolbarVisible;
  }
}
