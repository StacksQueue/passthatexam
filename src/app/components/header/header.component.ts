import { Component, OnInit } from '@angular/core';

export interface Route {
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
  majors: Route[] = [
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

  notes: Route[] = [
    { name: 'English | Grammar', route: ['/notes/english-grammar'] },
    { name: 'Mathematics | Arithmetic', route: ['/notes/mathematics-arithmetic'] },
    { name: 'Filipino | Panitikan', route: ['/notes/filipino-panitikan'] },
    { name: 'Social Science | Economics', route: ['/notes/socialscience-economics'] },
    { name: 'Science | Earth, Space, and Astronomy', route: ['/notes/science-earth-space-astronomy'] },
    { name: 'Science | Biology - Cells', route: ['/notes/science-biology-cells'] },
    { name: 'Science | Basic Chemistry', route: ['/notes/science-basic-chemistry'] },
    { name: 'Science | Scientific Methods', route: ['/notes/scientific-methods'] },
    { name: 'Professional Education Notes - 1', route: ['/notes/professional-education'] },
    { name: 'Professional Education Notes - 2', route: ['/notes/professional-education-2'] },
    { name: 'Rizal', route: ['/notes/rizal'] },
  ];

  isMenuOpen = false;

  ngOnInit(): void {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
