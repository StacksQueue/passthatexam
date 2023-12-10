import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from './modules/shared/shared.module';
import { HeaderAdsComponent } from './components/header-ads/header-ads.component';
import { NgcCookieConsentConfig, NgcCookieConsentModule } from 'ngx-cookieconsent';
import { environment } from 'src/environments/environment';
import { CookieComponent } from './components/cookie/cookie.component';
const cookieConfig: NgcCookieConsentConfig = {
  cookie: {
    domain: environment.domain,
  },
  position: 'bottom-right',
  theme: 'edgeless',
  palette: {
    popup: {
      background: '#387a5c',
      text: '#ffffff',
      link: '#ffffff',
    },
    button: {
      background: '#bb35b4',
      text: '#ffffff',
      border: 'transparent',
    },
  },
  type: 'opt-out',
  content: {
    href: 'https://passthatboard.com/privacy-policy',
  },
};

@NgModule({
  declarations: [AppComponent, HeaderComponent, HeaderAdsComponent, CookieComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    SharedModule,
    NgcCookieConsentModule.forRoot(cookieConfig),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
