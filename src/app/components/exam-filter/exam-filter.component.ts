import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, switchMap } from 'rxjs';
import { ExamService } from 'src/app/services/exam.service';
import { Category } from 'src/app/models/Category';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-exam-filter',
  templateUrl: './exam-filter.component.html',
  styleUrls: ['./exam-filter.component.scss'],
})
export class ExamFilterComponent implements OnInit {
  searchControl = new FormControl('');
  categories: Category[];
  categoryTags: string[] = ['eng'];

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

  displayFn(categ: Category): string {
    return categ && categ.tagName ? categ.tagName : '';
  }
}
