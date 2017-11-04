import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule } from '@angular/forms';

import { NotesRoutingModule } from './notes-routing.module';
import { NotesListComponent } from './components/notes-list/notes-list.component';
import { NoteComponent } from './components/note/note.component';
import { NotesService } from './services/notes.service';
import { AppMaterialDesignModule } from '../../app-material-design.module';
import { reducers } from './reducers/index';
import { NotesCollectionEffects } from './effects/notes-collection.effects';
import { NoteFormComponent } from './components/note-form/note-form.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NotesRoutingModule,
    AppMaterialDesignModule,
    EffectsModule.forFeature([NotesCollectionEffects]),
    StoreModule.forFeature('notes', reducers)
  ],
  declarations: [NotesListComponent, NoteComponent, NoteFormComponent],
  providers: [NotesService]
})
export class NotesModule { }
