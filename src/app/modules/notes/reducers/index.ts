import {createFeatureSelector, createSelector} from '@ngrx/store';

import * as fromRoot from '../../../reducers/index';
import * as fromNotesCollection from './notes-collection.reducer';

export interface NotesState {
  notesCollection: fromNotesCollection.State;
}

export interface State extends fromRoot.State {
  'notes': NotesState;
}

export const reducers = {
  notesCollection: fromNotesCollection.reducer
};

export const getNotesState = createFeatureSelector<NotesState>('notes');

export const getNotesCollectionState = createSelector(
  getNotesState,
  (state: NotesState) => state.notesCollection
);

export const getNotes = createSelector(
  getNotesCollectionState,
  fromNotesCollection.getNotes
);
