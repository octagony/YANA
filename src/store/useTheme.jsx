import create from "zustand";

const themeStore = create((set) => ({
  theme: JSON.parse(localStorage.getItem("theme")) ?? "light",
  setTheme: () =>
    set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),
}));

export default themeStore;
