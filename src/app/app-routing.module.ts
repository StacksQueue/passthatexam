import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamComponent } from './components/exam/exam.component';
import { PolicyComponent } from './components/policy/policy.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'exam',
    pathMatch: 'full'
  },
  {
    path:'exam',
    component: ExamComponent
  },
  {
    path:'policy',
    component: PolicyComponent
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
