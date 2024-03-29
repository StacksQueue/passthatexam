import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-explain-prompt',
  templateUrl: './explain-prompt.component.html',
  styleUrls: ['./explain-prompt.component.scss'],
})
export class ExplainPromptComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public explanation: string,
    public dialogRef: MatDialogRef<ExplainPromptComponent>
  ) {}

  close() {
    this.dialogRef.close();
  }
}
