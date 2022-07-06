import React from "react";
import ThemeToggle from "./ThemeToggle";

const Header = ({ setTheme }) => {
  return (
    <header className="p-2 flex justify-between items-center mb-3">
      <h1 className="font-bold text-3xl">1-2-3 Notes</h1>
      <ThemeToggle setTheme={setTheme} />
    </header>
  );
};
export default Header;
