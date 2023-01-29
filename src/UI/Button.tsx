import React from "react";
import { IButton } from "./Button.types";

const Button = ({ children, noteAction, className }: IButton) => {
  return (
    <button
      className={`mt-2 p-2 bg-emerald-600 text-xl text-gray-200  bg-transparent border-2 rounded-2xl shadow-lg transition hover:bg-lime-200 hover:text-neutral-900 ${className}`}
      onClick={noteAction}
      aria-label="Save"
    >
      {children}
    </button>
  );
};

export default Button;
