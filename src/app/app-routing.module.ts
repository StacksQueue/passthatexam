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
    // redirectTo: 'exam',
    // pathMatch: 'full'
    // component: HomeComponent,
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
    title: 'Pass That Board - Free LET and Civil Service Exam Reviewer',
  },
  {
    path: 'exam',
    loadChildren: () =>
      import('./modules/exam/exam.module').then((m) => m.ExamModule),
    title: 'Pass That Board - Exam',
  },
  {
    path: 'policy',
    loadChildren: () =>
      import('./modules/policy/policy.module').then((m) => m.PolicyModule),
    title: 'Pass That Board - Policy',
  },
  {
    path: 'donate',
    loadChildren: () =>
      import('./modules/donate/donate.module').then((m) => m.DonateModule),
    title: 'Pass That Board - Donate to Us',
  },
  {
    path: 'questions',
    loadChildren: () =>
      import('./modules/question/question.module').then(
        (m) => m.QuestionModule
      ),
    title: 'Pass That Board - CSE & LET Questions',
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
