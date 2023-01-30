import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import styles from "./Header.module.css"

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <Link to="/">
          <h1 className={styles.title}>
            YANA
          </h1>
        </Link>
        <span className={styles.subtitle}>Yet Another Notes App</span>
      </div>
      <ThemeToggle />
    </header>
  );
};
export default Header;
