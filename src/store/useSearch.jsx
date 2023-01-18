import create from "zustand";

const useSearch = create((set) => ({
  inputValue: "",
  setInputValue: (text) =>
    set((state) => ({
      inputValue: text,
    })),
}));

export default useSearch;
