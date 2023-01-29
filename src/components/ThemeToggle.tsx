import React from "react";
import { HiSun, HiMoon } from "react-icons/hi";
import { useTheme } from "../store/useTheme";

const ThemeToggle = () => {
  const {theme, setTheme} = useTheme();
  return (
    <button className="p-2 cursor-pointer dark:text-white" onClick={setTheme} aria-label="Theme Toggle"
    >
      {theme === "light" ? <HiSun size={25} /> : <HiMoon size={25} />}
    </button>
  );
};

export default ThemeToggle;
