import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { NotesRizalComponent } from '../../components/notes-rizal/notes-rizal.component';
import { NotesScienceEarthSpaceAstronomyComponent } from 'src/app/components/notes-science-earth-space-astronomy/notes-science-earth-space-astronomy.component';

@NgModule({
  declarations: [NotesRizalComponent, NotesScienceEarthSpaceAstronomyComponent],
  imports: [CommonModule, NotesRoutingModule],
})
export class NotesModule {}
