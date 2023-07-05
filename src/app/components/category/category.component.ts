import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  programList: string[] = [
    'Civil Service Exam',
    'Licensure Exam for Teachers',
    'Licensure Exam for Nursing',
    'Civil Engineering Licensure Exam',
  ];

  constructor() {}

  ngOnInit(): void {}
}
