import { Action } from '@ngrx/store';

import { Note } from '../models/note';

export const LOAD_NOTES = '[Notes Collection] Load Notes';
export const LOAD_SUCCESS = '[Notes Collection] Load Success';
export const LOAD_FAIL = '[Notes Collection] Load Fail';
export const ADD_NOTE = '[Notes Collection] Add Note';
export const ADD_NOTE_SUCCESS = '[Notes Collection] Add Note Success';
export const ADD_NOTE_FAIL = '[Notes Collection] Add Note Fail';

export class LoadNotes implements Action {
  readonly type = LOAD_NOTES;
}

export class LoadSuccess implements Action {
  readonly type = LOAD_SUCCESS;

  constructor(public payload: Note[]) {}
}

export class LoadFail implements Action {
  readonly type = LOAD_FAIL;

  constructor(public payload: any) {}
}

export class AddNote implements Action {
  readonly type = ADD_NOTE;

  constructor(public payload: Note) {}
}

export class AddNoteSuccess implements Action {
  readonly type = ADD_NOTE_SUCCESS;
}

export class AddNoteFail implements Action {
  readonly type = ADD_NOTE_FAIL;

  constructor(public payload: any) {}
}

export type All
  = LoadNotes
  | LoadSuccess
  | LoadFail
  | AddNote
  | AddNoteSuccess
  | AddNoteFail;
