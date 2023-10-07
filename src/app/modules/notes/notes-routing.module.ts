import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesRizalComponent } from 'src/app/components/notes-rizal/notes-rizal.component';

const routes: Routes = [
  { path: '', title: 'LET Rizal Notes', component: NotesRizalComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotesRoutingModule {}
