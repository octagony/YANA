import React from "react";
import { IButton } from "./Button.props";
import styles from "./Button.module.css";

const Button = ({ children, noteAction, className }: IButton) => {
  return (
    <button
      className={`${styles.btn} ${className}`}
      onClick={noteAction}
      aria-label="Save button"
    >
      {children}
    </button>
  );
};

export default Button;
