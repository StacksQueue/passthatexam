import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgcCookieConsentService, NgcNoCookieLawEvent, NgcStatusChangeEvent } from 'ngx-cookieconsent';
import { Subscription } from 'rxjs';

export var adsbygoogle: any[];

@Component({
  selector: 'app-cookie',
  templateUrl: './cookie.component.html',
  styleUrls: ['./cookie.component.scss'],
})
export class CookieComponent implements OnInit, OnDestroy {
  //keep refs to subscriptions to be able to unsubscribe later
  private popupOpenSubscription: Subscription;
  private popupCloseSubscription: Subscription;
  private initializeSubscription: Subscription;
  private statusChangeSubscription: Subscription;
  private revokeChoiceSubscription: Subscription;
  private noCookieLawSubscription: Subscription;

  constructor(private ccService: NgcCookieConsentService) {
    this.ccService.toggleRevokeButton(false);
  }

  ngOnInit() {
    if (!this.ccService.hasConsented()) {
      (adsbygoogle = (window as any).adsbygoogle || []).requestNonPersonalizedAds = 1;
    }

    this.statusChangeSubscription = this.ccService.statusChange$.subscribe((event: NgcStatusChangeEvent) => {
      this.ccService.close(false);
      try {
        if (event.status === 'deny') {
          (adsbygoogle = (window as any).adsbygoogle || []).requestNonPersonalizedAds = 1;
        }
        // (adsbygoogle = (window as any).adsbygoogle || []).pauseAdRequests = 0;
      } catch (e) {
        console.error('ads err', e);
      }
    });
  }

  ngOnDestroy() {
    // unsubscribe to cookieconsent observables to prevent memory leaks
    console.log('destroy');
    this.popupOpenSubscription.unsubscribe();
    this.popupCloseSubscription.unsubscribe();
    this.initializeSubscription.unsubscribe();
    this.statusChangeSubscription.unsubscribe();
    this.revokeChoiceSubscription.unsubscribe();
    this.noCookieLawSubscription.unsubscribe();
  }
}
