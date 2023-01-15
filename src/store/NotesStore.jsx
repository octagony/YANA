import create from "zustand";
import { nanoid } from "nanoid";

const notesStore = create((set) => ({
  notes: JSON.parse(localStorage.getItem("notes-data")) ?? [],
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
        note.id === id ? { ...note, text: value } : note
      ),
    }));
  },
}));

export default notesStore;
