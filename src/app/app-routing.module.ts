import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamComponent } from './components/exam/exam.component';
import { PolicyComponent } from './components/policy/policy.component';
import { HomeComponent } from './components/home/home.component';
import { DonateComponent } from './components/donate/donate.component';
import { QuestionListComponent } from './components/question-list/question-list.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'exam',
    title: 'Pass That Board - CSE and LET Exam Drills',
    loadChildren: () =>
      import('./modules/exam/exam.module').then((m) => m.ExamModule),
  },
  {
    path: 'copyright-policy',
    title: 'Pass That Board - Copyright Policy And Disclaimer',
    loadChildren: () =>
      import('./modules/policy/policy.module').then((m) => m.PolicyModule),
  },
  {
    path: 'donate',
    title: 'Pass That Board - Donate to Us',
    loadChildren: () =>
      import('./modules/donate/donate.module').then((m) => m.DonateModule),
  },
  {
    path: 'questions',
    title: 'Pass That Board - CSE & LET Questions',
    loadChildren: () =>
      import('./modules/question/question.module').then(
        (m) => m.QuestionModule
      ),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
