export interface INote {
  text: string;
  id: string;
  date: string;
}

export interface INotes {
  notes: INote[];
  setNotes: (notes: INote[]) => void;
  addNote: (text: string) => void;
  deleteNote: (id: string) => void;
  editNote: (id: string, value: string) => void;
}
