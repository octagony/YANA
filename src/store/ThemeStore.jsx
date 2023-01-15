import create from "zustand";

const themeStore = create((set) => ({
  theme: JSON.parse(localStorage.getItem("dark-mode")) ?? false,
  setTheme: () => set((state) => ({ theme: !state.theme })),
}));

export default themeStore;
