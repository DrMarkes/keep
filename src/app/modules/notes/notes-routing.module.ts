import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotesListComponent } from './components/notes-list/notes-list.component';
import { NoteFormComponent } from './components/note-form/note-form.component';

const routes: Routes = [
  { path: 'add_note', component: NoteFormComponent },
  { path: 'notes', component: NotesListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule { }
