import { Action } from '@ngrx/store';

import { Note } from '../models/note';

export const LOAD_NOTES = '[Notes Collection] Load Notes';
export const LOAD_SUCCESS = '[Notes Collection] Load Success';
export const LOAD_FAIL = '[Notes Collection] Load Fail';

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

export type All
  = LoadNotes
  | LoadSuccess
  | LoadFail;
