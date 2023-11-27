import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesBiologyCellsComponent } from 'src/app/components/notes-biology-cells/notes-biology-cells.component';
import { NotesProfessionalEducationComponent } from 'src/app/components/notes-professional-education/notes-professional-education.component';
import { NotesRizalComponent } from 'src/app/components/notes-rizal/notes-rizal.component';
import { NotesScienceEarthSpaceAstronomyComponent } from 'src/app/components/notes-science-earth-space-astronomy/notes-science-earth-space-astronomy.component';

const routes: Routes = [
  { path: 'rizal', title: 'LET Rizal Notes', component: NotesRizalComponent },
  { path: 'professional-education', title: 'Professional Education Notes', component: NotesProfessionalEducationComponent },
  { path: 'science-earth-space-astronomy', title: 'Science - Earth, Space and Astronomy', component: NotesScienceEarthSpaceAstronomyComponent },
  { path: 'science-biology-cells', title: 'Biology - Cells', component: NotesBiologyCellsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotesRoutingModule {}
