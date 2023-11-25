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
export class NotesRizalComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    try {
      (adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error('ads err', e);
    }
  }
}
