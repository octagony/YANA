import React from "react";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header className="p-2 flex justify-between items-center mb-3">
      <h1 className="text-4xl dark:text-white">1-2-3 Notes</h1>
      <ThemeToggle />
    </header>
  );
};
export default Header;
