import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {AngularFirestore} from 'angularfire2/firestore';
import 'rxjs/add/operator/switchMap';
import {Action} from '@ngrx/store';
import 'rxjs/add/operator/catch';

import * as notesCollection from '../actions/notes-collection.actions';
import {Note} from '../models/note';

@Injectable()
export class NotesCollectionEffects {

  constructor(private actions: Actions,
              private afStore: AngularFirestore) {
  }

  @Effect()
  loadNotes: Observable<Action> = this.actions.ofType(notesCollection.LOAD_NOTES)
    .switchMap(() =>
      this.afStore.collection<Note>('notes').valueChanges()
        .map((notes: Note[]) => {
          return new notesCollection.LoadSuccess(notes);
        })
        .catch(err => Observable.of(new notesCollection.LoadFail(err))));

}
