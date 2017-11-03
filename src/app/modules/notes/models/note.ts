interface INote {
  title?: string;
  content?: string;
  id: string;
}

export class Note implements INote {

  constructor(public id: string) {}
}
