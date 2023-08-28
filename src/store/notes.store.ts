// Libraries
import { create } from "zustand";

// Types
import { INotes, INote } from "../../types/INotes";

export const useNotes = create<INotes>((set) => ({
  notes: [],
  setNotes: (notes: INote[]) => {
    set((state) => {
      state.notes = notes;
      return {
        notes,
      };
    });
  },
}));
