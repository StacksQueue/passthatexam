import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgcCookieConsentService, NgcNoCookieLawEvent, NgcStatusChangeEvent } from 'ngx-cookieconsent';
import { Subscription } from 'rxjs';

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

  constructor(private ccService: NgcCookieConsentService) {}

  ngOnInit() {
    console.log(this.ccService.hasConsented());
    this.popupOpenSubscription = this.ccService.popupOpen$.subscribe(() => {
      // you can use this.ccService.getConfig() to do stuff...
      console.log('pop up open');
    });

    this.popupCloseSubscription = this.ccService.popupClose$.subscribe(() => {
      // you can use this.ccService.getConfig() to do stuff...
      console.log('pop up close');
    });

    this.initializeSubscription = this.ccService.initialized$.subscribe((event: any) => {
      // you can use this.ccService.getConfig() to do stuff...
      console.log('pop up initilized');
    });

    this.statusChangeSubscription = this.ccService.statusChange$.subscribe((event: NgcStatusChangeEvent) => {
      // you can use this.ccService.getConfig() to do stuff...
      console.log('pop up change subscription');
    });

    this.revokeChoiceSubscription = this.ccService.revokeChoice$.subscribe(() => {
      // you can use this.ccService.getConfig() to do stuff...
      console.log('pop up revoke subscription');
    });

    this.noCookieLawSubscription = this.ccService.noCookieLaw$.subscribe((event: NgcNoCookieLawEvent) => {
      // you can use this.ccService.getConfig() to do stuff...
      console.log('no cookie law');
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
