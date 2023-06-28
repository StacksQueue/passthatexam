import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, switchMap } from 'rxjs';
import { ExamService } from 'src/app/services/exam.service';
import { Category } from 'src/app/models/Category';
import { ThemePalette } from '@angular/material/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-exam-filter',
  templateUrl: './exam-filter.component.html',
  styleUrls: ['./exam-filter.component.scss'],
})
export class ExamFilterComponent implements OnInit {
  searchControl = new FormControl('');
  categories: Category[];
  categoryTags: string[] = ['eng'];
  // matchips
  // separatorKeysCodes: number[] = [ENTER, COMMA];
  selectedCategories: Category[] = [];

  constructor(private examService: ExamService) {}

  ngOnInit(): void {
    console.log(this.searchControl.value);
    this.examService
      .getExamCategories(this.searchControl.value!)
      .subscribe((resp) => {
        this.categories = resp['data'];
        console.log({ category: this.categories });
      });

    this.searchControl.valueChanges
      .pipe(
        debounceTime(600),
        switchMap(() =>
          this.examService.getExamCategories(this.searchControl.value!)
        )
      )
      .subscribe((resp) => (this.categories = resp['data']));
  }

  selected(event: MatAutocompleteSelectedEvent) {
    this.selectedCategories.push(event.option.value);
  }

  removeFromAutocomplete() {
    this.categories = this.categories.filter((categ) => {
      console.log(
        'wahaa',
        this.selectedCategories.some((x) => x._id == categ._id)
      );
      return this.selectedCategories.some((x) => x._id == categ._id);
    });
  }

  displayFn(categ: Category): string {
    return categ && categ.tagName ? categ.tagName : '';
  }
}
