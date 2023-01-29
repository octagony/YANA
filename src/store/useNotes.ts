import create from "zustand";
import { nanoid } from "nanoid";

interface INote{
  text:string;
  id:string;
  date:string;
}

interface INotes {
  notes: INote[];
  setNotes: (notes: INote[]) => void;
  addNote: (text: string) => void;
  deleteNote: (id: string) => void;
  editNote: (id: string, value: string) => void;
}

const getLocalStorage = (key) => JSON.parse(localStorage.getItem(key));

const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const useNotes = create<INotes>((set) => ({
  notes: getLocalStorage("notes-data") ?? [],
  setNotes: (notes) => {
    set(() => {
      setLocalStorage("notes-data", notes);
      return {
        notes,
      };
    });
  },
  addNote: (text) =>
    set((state) => ({
      notes: [
        { text, id: nanoid(), date: new Date().toLocaleDateString() },
        ...state.notes,
      ],
    })),
  deleteNote: (id) => {
    set((state) => ({
      notes: state.notes.filter((note) => note.id !== id),
    }));
  },
  editNote: (id, value) => {
    set((state) => ({
      notes: state.notes.map((note) =>
        note.id === id
          ? { ...note, text: value, date: new Date().toLocaleDateString() }
          : note
      ),
    }));
  },
}));
