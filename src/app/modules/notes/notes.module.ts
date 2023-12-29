import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { NotesRizalComponent } from '../../components/notes-rizal/notes-rizal.component';
import { NotesScienceEarthSpaceAstronomyComponent } from 'src/app/components/notes-science-earth-space-astronomy/notes-science-earth-space-astronomy.component';
import { NotesBiologyCellsComponent } from 'src/app/components/notes-biology-cells/notes-biology-cells.component';
import { NotesProfessionalEducationComponent } from 'src/app/components/notes-professional-education/notes-professional-education.component';
import { NotesProfessionalEducationStagesComponent } from 'src/app/components/notes-professional-education-stages/notes-professional-education-stages.component';
import { NotesFilipinoPanitikanComponent } from 'src/app/components/notes-filipino-panitikan/notes-filipino-panitikan.component';
import { NotesSocialScienceEconomicsComponent } from 'src/app/components/notes-social-science-economics/notes-social-science-economics.component';
import { NotesMathematicsBasicComponent } from 'src/app/components/notes-mathematics-basic/notes-mathematics-basic.component';
import { NotesEnglishWorksAndAuthorsComponent } from 'src/app/components/notes-english-works-and-authors/notes-english-works-and-authors.component';
import { NotesEnglishGrammarComponent } from 'src/app/components/notes-english-grammar/notes-english-grammar.component';
import { NotesScienceBasicChemistryComponent } from 'src/app/components/notes-science-basic-chemistry/notes-science-basic-chemistry.component';

@NgModule({
  declarations: [
    NotesRizalComponent,
    NotesScienceEarthSpaceAstronomyComponent,
    NotesBiologyCellsComponent,
    NotesProfessionalEducationComponent,
    NotesProfessionalEducationStagesComponent,
    NotesFilipinoPanitikanComponent,
    NotesSocialScienceEconomicsComponent,
    NotesMathematicsBasicComponent,
    NotesEnglishWorksAndAuthorsComponent,
    NotesEnglishGrammarComponent,
    NotesScienceBasicChemistryComponent
  ],
  imports: [CommonModule, NotesRoutingModule],
})
export class NotesModule {}
