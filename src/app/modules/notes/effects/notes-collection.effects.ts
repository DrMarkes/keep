import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {AngularFirestore} from 'angularfire2/firestore';
import 'rxjs/add/operator/switchMap';
import {Action} from '@ngrx/store';
import 'rxjs/add/operator/catch';

import * as notesCollection from '../actions/notes-collection.actions';
import {Note} from '../models/note';
import "rxjs/add/operator/mergeMap";
import "rxjs/add/observable/fromPromise";
import {AddNote} from "../actions/notes-collection.actions";

@Injectable()
export class NotesCollectionEffects {

  constructor(private actions: Actions,
              private afStore: AngularFirestore) {
  }

  @Effect()
  loadNotes: Observable<Action> = this.actions.ofType(notesCollection.LOAD_NOTES)
    .switchMap(() =>
      this.afStore.collection<Note>('notes').snapshotChanges()
        .map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data() as Note;
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        })
        .map((notes: Note[]) => {
          return new notesCollection.LoadSuccess(notes);
        })
        .catch(err => Observable.of(new notesCollection.LoadFail(err))));

  @Effect()
  addNote: Observable<Action> = this.actions.ofType(notesCollection.ADD_NOTE)
    .map((action: notesCollection.AddNote) => action.payload)
    .mergeMap(note => {
      this.afStore.collection<Note>('notes').add(Object.assign({}, note));
      return Observable.of(new notesCollection.AddNoteSuccess());
    })
    .catch((err) => Observable.of(new notesCollection.AddNoteFail(err)));
}
