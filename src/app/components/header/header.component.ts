import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ExamFilterComponent } from '../exam-filter/exam-filter.component';

export interface Majors {
  name: string;
  route: string[];
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  toolbarVisible = false;
  majors: Majors[] = [
    { name: 'English', route: ['/coverage/english'] },
    { name: 'Filipino', route: ['/coverage/filipino'] },
    { name: 'Biological Science', route: ['/coverage/biological-science'] },
    { name: 'Physical Science', route: ['/coverage/physical-science'] },
    { name: 'Mathematics', route: ['/coverage/mathematics'] },
    { name: 'Social Sciences', route: ['/coverage/social-science'] },
    { name: 'Values Education', route: ['/coverage/values-education'] },
    { name: 'MAPEH', route: ['/coverage/mapeh'] },
    {
      name: 'Agriculture and Fishery Arts',
      route: ['/coverage/agri-fishery-arts'],
    },
    { name: 'TLE', route: ['/coverage/tle'] },
  ];

  isMenuOpen = false;

  ngOnInit(): void { }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
