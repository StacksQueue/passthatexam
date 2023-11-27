import { AfterViewInit, Component } from '@angular/core';

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}
export var adsbygoogle: any[];

@Component({
  selector: 'app-notes-rizal',
  templateUrl: './notes-rizal.component.html',
  styleUrls: ['./notes-rizal.component.scss'],
})
export class NotesRizalComponent {

}
