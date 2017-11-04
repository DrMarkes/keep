import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Store } from '@ngrx/store';
import { Router } from "@angular/router";

import { Note } from '../../models/note';
import * as notesCollectionActions from '../../actions/notes-collection.actions';
import * as fromNotes from '../../reducers/index';


@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotesListComponent implements OnInit {
  notes: Observable<Note[]>;

  constructor(private store: Store<fromNotes.State>,
              private router: Router) {
    this.notes = store.select(fromNotes.getNotes);
  }

  ngOnInit() {
    this.store.dispatch(new notesCollectionActions.LoadNotes());
  }

  addNote() {
    this.router.navigateByUrl('/add_note');
  }
}
