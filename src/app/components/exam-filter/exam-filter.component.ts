import { Component, OnInit } from '@angular/core';
import { ExamService } from 'src/app/services/exam.service';
import { NavigationExtras, Router } from '@angular/router';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Filter } from 'src/app/models/Filter';
import { MatButtonToggleChange } from '@angular/material/button-toggle';

@Component({
  selector: 'app-exam-filter',
  templateUrl: './exam-filter.component.html',
  styleUrls: ['./exam-filter.component.scss'],
})
export class ExamFilterComponent implements OnInit {
  item = 80;
  programs: string[] = [];
  selectedProgram: string = 'Education';
  selectedMajor: string = 'General Education';
  selectedCoverage: string[] = [];
  filters: Filter[] = [];
  defaults = [
    {
      program: 'Education',
      major: 'General Education',
    },
    {
      program: 'Civil Service',
      major: 'Civil Service',
    },
  ];

  constructor(
    private examService: ExamService,
    private router: Router,
    private _bottomSheetRef: MatBottomSheetRef<ExamFilterComponent>
  ) {}

  ngOnInit(): void {
    this.examService.getExamCoverage().subscribe((resp) => {
      this.filters = resp['data'];
      this.programs = [...new Set(this.filters.map((x) => x.program))];
    });
  }

  onProgramChanged(event: MatButtonToggleChange) {
    this.selectedProgram = event.value;
    this.selectedMajor = this.defaults.filter(
      (x) => x.program == this.selectedProgram
    )[0].major;
  }

  navigate() {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        category: this.selectedCoverage,
        items: this.item,
        program: this.selectedProgram,
      },
      queryParamsHandling: 'merge',
    };
    this.router.navigate(['/'], navigationExtras);
    this._bottomSheetRef.dismiss();
  }
}
