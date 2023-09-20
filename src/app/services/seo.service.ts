import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  constructor(@Inject(DOCUMENT) private document: Document) {}
  createLinkForCanonicalURL(route: string, params: Params) {
    this.destroyLinkForCanonicalURL();
    const page = params['page'] ? '?page=' + params['page'] : '';
    let link: HTMLElement = this.document.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', route + page);
    this.document.head.appendChild(link);
  }

  destroyLinkForCanonicalURL() {
    const links = this.document.querySelectorAll("link[rel='canonical']");
    links.forEach((link) => link.remove());
  }
}
