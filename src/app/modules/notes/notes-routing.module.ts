import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesBiologyCellsComponent } from 'src/app/components/notes-biology-cells/notes-biology-cells.component';
import { NotesFilipinoPanitikanComponent } from 'src/app/components/notes-filipino-panitikan/notes-filipino-panitikan.component';
import { NotesProfessionalEducationStagesComponent } from 'src/app/components/notes-professional-education-stages/notes-professional-education-stages.component';
import { NotesProfessionalEducationComponent } from 'src/app/components/notes-professional-education/notes-professional-education.component';
import { NotesRizalComponent } from 'src/app/components/notes-rizal/notes-rizal.component';
import { NotesScienceEarthSpaceAstronomyComponent } from 'src/app/components/notes-science-earth-space-astronomy/notes-science-earth-space-astronomy.component';

const routes: Routes = [
  { path: 'rizal', title: 'LET Rizal Notes', component: NotesRizalComponent },
  { path: 'filipino-panitikan', title: 'Filipino - Panitikan', component: NotesFilipinoPanitikanComponent },
  { path: 'professional-education', title: 'Professional Education Notes - 1', component: NotesProfessionalEducationComponent },
  { path: 'professional-education-2', title: 'Professional Education Notes - 2', component: NotesProfessionalEducationStagesComponent },
  { path: 'science-earth-space-astronomy', title: 'Science - Earth, Space and Astronomy', component: NotesScienceEarthSpaceAstronomyComponent },
  { path: 'science-biology-cells', title: 'Biology - Cells', component: NotesBiologyCellsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotesRoutingModule {}
