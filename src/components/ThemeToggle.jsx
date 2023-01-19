import React from "react";
import { HiSun, HiMoon } from "react-icons/hi";
import useTheme from "../store/useTheme.jsx";

const ThemeToggle = () => {
  const [theme, setTheme] = useTheme((state) => [state.theme, state.setTheme]);
  return (
    <div className="p-2 cursor-pointer dark:text-white" onClick={setTheme}>
      {theme === "light" ? <HiSun size={25} /> : <HiMoon size={25} />}
    </div>
  );
};

export default ThemeToggle;
