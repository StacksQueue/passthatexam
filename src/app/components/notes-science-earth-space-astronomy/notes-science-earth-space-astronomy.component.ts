import { AfterViewInit, Component } from '@angular/core';
declare global {
  interface Window {
    adsbygoogle: any[];
  }
}
export var adsbygoogle: any[];
@Component({
  selector: 'app-notes-science-earth-space-astronomy',
  templateUrl: './notes-science-earth-space-astronomy.component.html',
  styleUrls: ['./notes-science-earth-space-astronomy.component.scss'],
})
export class NotesScienceEarthSpaceAstronomyComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    try {
      (adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error('ads err', e);
    }
  }
}
