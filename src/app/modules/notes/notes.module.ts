import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { NotesRizalComponent } from '../../components/notes-rizal/notes-rizal.component';


@NgModule({
  declarations: [
    NotesRizalComponent
  ],
  imports: [
    CommonModule,
    NotesRoutingModule
  ]
})
export class NotesModule { }
