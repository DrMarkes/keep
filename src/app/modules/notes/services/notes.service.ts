import { Injectable } from '@angular/core';
import 'rxjs/add/observable/of';

import { Note } from '../models/note';

const NOTES: Note[] = [
  new Note('note1'),
  new Note('note2'),
  new Note('note3'),
  new Note('note4')
];

@Injectable()
export class NotesService {
  private notes: Note[];

  constructor() {
    this.notes = NOTES;
  }

  getNotes(): Note[] {
    return this.notes;
  }

}
