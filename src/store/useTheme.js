import create from "zustand";

export const useTheme = create((set) => ({
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
