import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss'],
})
export class DonateComponent {
  constructor(private _snackBar: MatSnackBar) {}

  clipboardClicked() {
    this._snackBar.open('Number copied to clipboard', '', {
      duration: 3000,
      verticalPosition: 'top'
    });
  }
}
