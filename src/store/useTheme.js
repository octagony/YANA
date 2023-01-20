import create from "zustand";

const getInitialTheme = () => {
  const theme = localStorage.getItem("theme") ?? "light";
  return theme;
};

export const useTheme = create((set) => ({
  theme: getInitialTheme(),
  setTheme: () =>
    set((state) => {
      localStorage.setItem("theme", JSON.stringify(state.theme));
      return {
        theme: state.theme === "light" ? "dark" : "light",
      };
    }),
  // set((state) => ({ theme: state.theme === "light" ? "dark" : "light" }));
}));
