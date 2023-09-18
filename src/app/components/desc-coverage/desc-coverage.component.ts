import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { Filter } from 'src/app/models/Filter';
import { ExamService } from 'src/app/services/exam.service';

@Component({
  selector: 'app-desc-coverage',
  templateUrl: './desc-coverage.component.html',
  styleUrls: ['./desc-coverage.component.scss'],
})
export class DescCoverageComponent implements OnInit {
  coverages: Filter[] = [];
  constructor(private examService: ExamService) {}
  ngOnInit(): void {
    this.examService
      .getExamCoverage()
      .subscribe((resp) => (this.coverages = resp['data']));
  }
}
