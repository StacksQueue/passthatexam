import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-question-search',
  templateUrl: './question-search.component.html',
  styleUrls: ['./question-search.component.scss'],
})
export class QuestionSearchComponent {
  @Input() programs: string[] = [];
  questionForm: FormGroup;

  constructor(private formbuilder: FormBuilder, private router: Router) {
    this.questionForm = this.formbuilder.group({
      search: new FormControl(''),
    });
  }

  onEnterKey(event: KeyboardEvent) {
    if (event?.key === 'Enter') {
      this.onSubmit();
    }
  }

  onSubmit() {
    const keyword = this.questionForm.value.search;
    const navigationExtras: NavigationExtras = {
      queryParams: { keyword, programs: this.programs },
      queryParamsHandling: "merge",
    };

    this.router.navigate(['/questions'], navigationExtras);
  }
}
