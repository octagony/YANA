import create from "zustand";

interface ISearch {
  inputValue: string;
  setInputValue: (text: string) => void;
}

export const useSearch = create<ISearch>((set) => ({
  inputValue: "",
  setInputValue: (text) =>
    set(() => ({
      inputValue: text,
    })),
}));
