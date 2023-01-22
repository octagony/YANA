import create from "zustand";
import { nanoid } from "nanoid";

const getLocalStorage = (key) => JSON.parse(localStorage.getItem(key));

const setLocalStorage = (key, value) =>{
  localStorage.setItem(key, JSON.stringify(value));
}

export const useNotes = create((set) => ({
  notes: getLocalStorage("notes-data") ?? [],
  setNotes: (notes) => {
    set(() => {
      setLocalStorage("notes-data", notes);
      return {
        notes
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
