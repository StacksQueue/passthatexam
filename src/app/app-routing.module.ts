import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamComponent } from './components/exam/exam.component';
import { ExamFilterComponent } from './components/exam-filter/exam-filter.component';

const routes: Routes = [
  {
    path: '',
    component: ExamComponent,
  },
  {
    path:'exam',
    component: ExamComponent
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
