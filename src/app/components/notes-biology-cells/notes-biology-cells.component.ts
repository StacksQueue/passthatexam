import { Component } from '@angular/core';

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}
export var adsbygoogle: any[];

@Component({
  selector: 'app-notes-biology-cells',
  templateUrl: './notes-biology-cells.component.html',
  styleUrls: ['./notes-biology-cells.component.scss'],
})
export class NotesBiologyCellsComponent {
}
