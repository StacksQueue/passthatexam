import { Component, Input } from '@angular/core';
import { Filter } from 'src/app/models/Filter';

@Component({
  selector: 'app-desc-coverage-list',
  templateUrl: './desc-coverage-list.component.html',
  styleUrls: ['./desc-coverage-list.component.scss']
})
export class DescCoverageListComponent {
  @Input() coverages: Filter[];
  @Input() major: string;
}
