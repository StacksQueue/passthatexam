import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamComponent } from './components/exam/exam.component';
import { PolicyComponent } from './components/policy/policy.component';
import { HomeComponent } from './components/home/home.component';
import { DonateComponent } from './components/donate/donate.component';

const routes: Routes = [
  {
    path: '',
    // redirectTo: 'exam',
    // pathMatch: 'full'
    component: HomeComponent,
    title: 'Pass That Board - Free LET and Civil Service Exam Reviewer'
  },
  {
    path:'exam',
    component: ExamComponent,
    title: 'Pass That Board - Exam'
  },
  {
    path:'policy',
    component: PolicyComponent,
    title: 'Pass That Board - Policy'
  },
  {
    path:'donate',
    component: DonateComponent,
    title: 'Pass That Board - Donate to Us'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
