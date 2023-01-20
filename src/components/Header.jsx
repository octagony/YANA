import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header className="p-4 flex justify-between items-center mb-3">
      <div>
        <Link to="/">
          <h1 className="text-4xl font-bold text-center dark:text-white">
            YANA
          </h1>
        </Link>
        <span className="text-sm dark:text-white">Yet Another Notes App</span>
      </div>
      <ThemeToggle />
    </header>
  );
};
export default Header;
