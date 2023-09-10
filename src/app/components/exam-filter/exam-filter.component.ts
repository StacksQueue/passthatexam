import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, switchMap } from 'rxjs';
import { ExamService } from 'src/app/services/exam.service';
import { Category } from 'src/app/models/Category';
import { ThemePalette } from '@angular/material/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { NavigationExtras, Router } from '@angular/router';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { Filter } from 'src/app/models/Filter';

@Component({
  selector: 'app-exam-filter',
  templateUrl: './exam-filter.component.html',
  styleUrls: ['./exam-filter.component.scss'],
})
export class ExamFilterComponent implements OnInit {
  item = 50;
  timer = 0;
  categories: string[];

  programs: string[] = [];
  majors: string[] = [];

  selectedProgram: string = 'Civil Service';
  selectedMajor: string = 'Civil Service';

  coverages: string[] = [];

  filters: Filter[];


  constructor(
    private examService: ExamService,
    private router: Router,
    private _bottomSheetRef: MatBottomSheetRef<ExamFilterComponent>
  ) {}

  ngOnInit(): void {
    this.examService.getExamCoverage().subscribe((resp) => {
      this.initializeFilters(resp['data']);
    });
  }

  initializeFilters(data: Filter[]) {
    this.filters = data;
    this.programs = [...new Set(this.filters.map((x) => x.program))];
    this.majors = this.filters
      .filter((x) => this.selectedProgram === x.program)
      .map((y) => y.major);
    this.coverages = this.filters
      .filter((x) => x.major === this.selectedMajor)
      .map((y) => y.coverage)
      .flat(1);
  }

  onExamTypeChange(event: MatButtonToggleChange) {
    this.selectedProgram = event.value;
    this.majors = this.filters
      .filter((x) => this.selectedProgram === x.program)
      .map((y) => y.major);
    this.selectedMajor = this.majors[0];

    this.coverages = this.filters
      .filter((x) => x.major === this.selectedMajor)
      .map((y) => y.coverage)
      .flat(1);
  }

  onMajorChange(event: MatButtonToggleChange) {
    this.selectedMajor = event.value;
    this.coverages = this.filters
      .filter((x) => x.major === this.selectedMajor)
      .map((y) => y.coverage)
      .flat(1);
  }

  navigate() {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        // category: this.selectedCategories.map((val) => val),
        items: this.item,
        timer: this.timer,
        programs: this.selectedProgram,
      },
      queryParamsHandling: 'merge',
    };
    this.router.navigate(['/exam'], navigationExtras);
    this._bottomSheetRef.dismiss();
  }
}
