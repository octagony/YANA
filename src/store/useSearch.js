import create from "zustand";

export const useSearch = create((set) => ({
  inputValue: "",
  setInputValue: (text) =>
    set((state) => ({
      inputValue: text,
    })),
}));
