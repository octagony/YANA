import create from "zustand";

interface ITheme{
  theme: string;
  setTheme: ()=> void;
}

export const useTheme = create<ITheme>((set) => ({
  theme: localStorage.getItem("theme") ?? "light",
  setTheme: () =>
    set((state) => {
      localStorage.setItem(
        "theme",
        JSON.stringify(state.theme === "light" ? "dark" : "light")
      );
      return {
        theme: state.theme === "light" ? "dark" : "light",
      };
    }),
}));
