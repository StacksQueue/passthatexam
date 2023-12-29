import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesBiologyCellsComponent } from 'src/app/components/notes-biology-cells/notes-biology-cells.component';
import { NotesEnglishGrammarComponent } from 'src/app/components/notes-english-grammar/notes-english-grammar.component';
import { NotesEnglishWorksAndAuthorsComponent } from 'src/app/components/notes-english-works-and-authors/notes-english-works-and-authors.component';
import { NotesFilipinoPanitikanComponent } from 'src/app/components/notes-filipino-panitikan/notes-filipino-panitikan.component';
import { NotesMathematicsBasicComponent } from 'src/app/components/notes-mathematics-basic/notes-mathematics-basic.component';
import { NotesProfessionalEducationStagesComponent } from 'src/app/components/notes-professional-education-stages/notes-professional-education-stages.component';
import { NotesProfessionalEducationComponent } from 'src/app/components/notes-professional-education/notes-professional-education.component';
import { NotesRizalComponent } from 'src/app/components/notes-rizal/notes-rizal.component';
import { NotesScienceBasicChemistryComponent } from 'src/app/components/notes-science-basic-chemistry/notes-science-basic-chemistry.component';
import { NotesScienceEarthSpaceAstronomyComponent } from 'src/app/components/notes-science-earth-space-astronomy/notes-science-earth-space-astronomy.component';
import { NotesSocialScienceEconomicsComponent } from 'src/app/components/notes-social-science-economics/notes-social-science-economics.component';

const routes: Routes = [
  { path: 'english-grammar', title: 'English - Grammar', component: NotesEnglishGrammarComponent },
  { path: 'mathematics-arithmetic', title: 'Mathematics - Arithmetic', component: NotesMathematicsBasicComponent },
  { path: 'filipino-panitikan', title: 'Filipino - Panitikan', component: NotesFilipinoPanitikanComponent },
  { path: 'socialscience-economics', title: 'Social Science', component: NotesSocialScienceEconomicsComponent },
  { path: 'professional-education', title: 'Professional Education Notes - 1', component: NotesProfessionalEducationComponent },
  { path: 'professional-education-2', title: 'Professional Education Notes - 2', component: NotesProfessionalEducationStagesComponent },
  { path: 'science-earth-space-astronomy', title: 'Science - Earth, Space and Astronomy', component: NotesScienceEarthSpaceAstronomyComponent },
  { path: 'science-biology-cells', title: 'Biology - Cells', component: NotesBiologyCellsComponent },
  { path: 'science-basic-chemistry', title: 'Basic Chemistry', component: NotesScienceBasicChemistryComponent },
  { path: 'rizal', title: 'LET Rizal Notes', component: NotesRizalComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotesRoutingModule {}
