import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Location } from '@angular/common';

import { Note } from '../../models/note';
import * as fromNotes from '../../reducers/index';
import * as notesCollectionActions from '../../actions/notes-collection.actions';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent implements OnInit {
  note: Note;

  constructor(private store: Store<fromNotes.State>,
              private location: Location) {
    this.note = new Note();
  }

  ngOnInit() {
  }

  addNote(note: Note) {
    this.note.timestamp = Date.now();
    this.store.dispatch(new notesCollectionActions.AddNote(note));
    this.location.back();
  }

  cancel() {
    this.location.back();
  }
}
