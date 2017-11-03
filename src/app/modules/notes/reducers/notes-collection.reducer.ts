import * as notesCollectionActions from '../actions/notes-collection.actions';
import { Note } from '../models/note';

export type Action = notesCollectionActions.All;

export interface State {
  loaded: boolean;
  loading: boolean;
  errorMessage: string;
  notes: Note[];
}

const initialState: State = {
  loading: false,
  loaded: false,
  errorMessage: null,
  notes: []
};

export function reducer(state: State = initialState, action: Action) {
  switch (action.type) {
    case notesCollectionActions.LOAD_NOTES:
      return { ...state, loading: true };

    case notesCollectionActions.LOAD_SUCCESS:
      return { ...state, loaded: true, loading: false, notes: action.payload };

    case notesCollectionActions.LOAD_FAIL:
      return { ...state, loaded: false, loading: false, error: action.payload.message };

    default:
      return state;
  }
}

export const getNotes = (state: State) => state.notes;
