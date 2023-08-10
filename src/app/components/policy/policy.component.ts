import { Component } from '@angular/core';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.scss']
})
export class PolicyComponent {
  toolbarVisible = true;

  toggleToolbar() {
    this.toolbarVisible = !this.toolbarVisible;
  }

}
