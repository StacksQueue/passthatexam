import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamComponent } from './components/exam/exam.component';
import { PolicyComponent } from './components/policy/policy.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    // redirectTo: 'exam',
    // pathMatch: 'full'
    component: HomeComponent,
    title: 'PassThatBoard - Free LET and Civil Service Exam Reviewer'
  },
  {
    path:'exam',
    component: ExamComponent,
    title: 'PassThatBoard - Exam'
  },
  {
    path:'policy',
    component: PolicyComponent,
    title: 'PassThatBoard - Policy'
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
