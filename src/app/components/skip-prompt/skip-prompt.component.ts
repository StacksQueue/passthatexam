import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-skip-prompt',
  templateUrl: './skip-prompt.component.html',
  styleUrls: ['./skip-prompt.component.scss'],
})
export class SkipPromptComponent {
  constructor(public dialogRef: MatDialogRef<SkipPromptComponent>) {}
  close() {
    this.dialogRef.close();
  }
}
