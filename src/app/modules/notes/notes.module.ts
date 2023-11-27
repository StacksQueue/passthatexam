import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { NotesRizalComponent } from '../../components/notes-rizal/notes-rizal.component';
import { NotesScienceEarthSpaceAstronomyComponent } from 'src/app/components/notes-science-earth-space-astronomy/notes-science-earth-space-astronomy.component';
import { NotesBiologyCellsComponent } from 'src/app/components/notes-biology-cells/notes-biology-cells.component';
import { NotesProfessionalEducationComponent } from 'src/app/components/notes-professional-education/notes-professional-education.component';
import { NotesProfessionalEducationStagesComponent } from 'src/app/components/notes-professional-education-stages/notes-professional-education-stages.component';

@NgModule({
  declarations: [
    NotesRizalComponent,
    NotesScienceEarthSpaceAstronomyComponent,
    NotesBiologyCellsComponent,
    NotesProfessionalEducationComponent,
    NotesProfessionalEducationStagesComponent,
  ],
  imports: [CommonModule, NotesRoutingModule],
})
export class NotesModule {}
