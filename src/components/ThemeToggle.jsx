import React from "react";
import { HiSun, HiMoon } from "react-icons/hi";
import themeStore from "../store/ThemeStore.jsx";

const ThemeToggle = () => {
  const [theme, setTheme] = themeStore((state) => [
    state.theme,
    state.setTheme,
  ]);
  return (
    <div className="p-2 cursor-pointer" onClick={setTheme}>
      {theme ? <HiSun size={25} /> : <HiMoon size={25} />}
    </div>
  );
};

export default ThemeToggle;
