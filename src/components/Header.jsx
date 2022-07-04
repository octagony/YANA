import React from "react";
import { BsFillMoonFill } from 'react-icons/bs';

const Header = () => {
  return (
    <header className="p-2 flex justify-between items-center">
      <h1 className="font-bold text-3xl">1-2-3 Notes</h1>
      <BsFillMoonFill size={25}/>
    </header>
  );
};
export default Header;
