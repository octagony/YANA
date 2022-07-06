import React, { useState } from "react";
import { HiSun, HiMoon } from "react-icons/hi";

const ThemeToggle = ({ setTheme }) => {
  const [toggleTheme, setToggleTheme] = useState(false);

  const handleTheme = () => {
    setToggleTheme(!toggleTheme);
    setTheme();
  };
  return (
    <div className="p-2">
      {toggleTheme ? (
        <HiSun className="cursor-pointer" size={25} onClick={handleTheme} />
      ) : (
        <HiMoon className="cursor-pointer" size={25} onClick={handleTheme} />
      )}
    </div>
  );
};

export default ThemeToggle;
