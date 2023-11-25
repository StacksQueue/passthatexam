import { AfterViewInit, Component } from '@angular/core';

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}
export var adsbygoogle: any[];

@Component({
  selector: 'app-header-ads',
  templateUrl: './header-ads.component.html',
  styleUrls: ['./header-ads.component.scss']
})
export class HeaderAdsComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    setTimeout(() => {
      try {
        (adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.log(e);
      }
    }, 100);
  }

}
