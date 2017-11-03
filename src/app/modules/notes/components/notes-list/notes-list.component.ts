import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Store } from '@ngrx/store';

import { Note } from '../../models/note';
import * as notesCollectionActions from '../../actions/notes-collection.actions';
import * as fromNotes from '../../reducers/index';


@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {
  notes: Observable<Note[]>;

  constructor(private store: Store<fromNotes.State>) {
    this.notes = store.select(fromNotes.getNotes);
  }

  ngOnInit() {
    this.store.dispatch(new notesCollectionActions.LoadNotes());
  }

}
