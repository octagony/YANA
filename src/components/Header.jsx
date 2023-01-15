import React from "react";
import { IconContext } from "react-icons/lib";
import ThemeToggle from "./ThemeToggle";
import themeStore from "../store/ThemeStore.jsx";

const Header = () => {
  const theme = themeStore((state) => state.theme);
  return (
    <header className="p-2 flex justify-between items-center mb-3">
      <h1
        className={`${
          theme
            ? "text-cyan-50 text-3xl font-bold"
            : "text-gray-700 text-3xl font-bold"
        }`}
      >
        1-2-3 Notes
      </h1>
      <IconContext.Provider value={{ color: `${theme ? "white" : "black"}` }}>
        <ThemeToggle />
      </IconContext.Provider>
    </header>
  );
};
export default Header;
