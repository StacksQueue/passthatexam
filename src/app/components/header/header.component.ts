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

  isMenuOpen = true;

  ngOnInit(): void {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
