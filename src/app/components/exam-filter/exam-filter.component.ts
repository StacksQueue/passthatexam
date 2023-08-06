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

@Component({
  selector: 'app-exam-filter',
  templateUrl: './exam-filter.component.html',
  styleUrls: ['./exam-filter.component.scss'],
})
export class ExamFilterComponent implements OnInit {
  searchControl = new FormControl('');
  item = 50;
  timer = 0;
  categories: string[];
  categoryTags: string[] = ['eng'];
  selectedCategories: string[] = [];
  defaultCategories = ['English', 'Civil Service', 'Professional Education'];
  name: string = '';

  programs: string[] = [];
  selectedPrograms: string[] = ['Civil Service'];

  constructor(
    private examService: ExamService,
    private router: Router,
    private _bottomSheetRef: MatBottomSheetRef<ExamFilterComponent>
  ) {}

  ngOnInit(): void {
    this.examService
      .getExamCategories(this.searchControl.value!, this.selectedPrograms)
      .subscribe((resp) => {
        this.categories = resp['data'];
        this.addDefaultCategories();
      });

    this.examService.getExamPrograms().subscribe((resp) => {
      this.programs = resp['data'];
    });

    this.searchControl.valueChanges
      .pipe(
        debounceTime(600),
        switchMap(() =>
          this.examService.getExamCategories(
            this.searchControl.value!,
            this.selectedPrograms
          )
        )
      )
      .subscribe((resp) => {
        this.categories = resp['data'];
        console.log(this.categories);
      });
  }

  selected(event: MatAutocompleteSelectedEvent) {
    this.selectedCategories.push(event.option.value);
    this.selectedCategories = this.selectedCategories.filter(
      (val, ndx, arr) => arr.findIndex((val2) => val2 == val) === ndx
    );
  }

  addDefaultCategories() {
    this.selectedCategories = this.categories.filter((categ) =>
      this.defaultCategories.includes(categ)
    );
  }

  removeChips(removed: string) {
    this.selectedCategories = this.selectedCategories.filter(
      (categ) => categ != removed
    );
  }

  removeFromAutocomplete() {
    this.categories = this.categories.filter((categ) => {
      return this.selectedCategories.some((x) => x == categ);
    });
  }

  onButtonToggleChange(event: MatButtonToggleChange) {
    this.selectedPrograms = [event.value];
    this.examService
      .getExamCategories(this.searchControl.value!, this.selectedPrograms)
      .subscribe((resp) => {
        this.categories = resp['data'];
        this.addDefaultCategories();
      });
  }

  navigate() {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        category: this.selectedCategories.map((val) => val),
        items: this.item,
        timer: this.timer,
        programs: this.selectedPrograms,
      },
      queryParamsHandling: 'merge',
    };
    this.router.navigate(['/exam'], navigationExtras);
    this._bottomSheetRef.dismiss();
  }

  displayFn(categ: Category): string {
    return categ && categ.tagName ? categ.tagName : '';
  }
}
