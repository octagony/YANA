import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import withLayout from "../../layout/withLayout";
import { useTheme } from "../../store/useTheme";
import styles from "./Page404.module.css"

const Page404 = () => {
  const {theme} = useTheme();

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") root.classList.remove("dark");
    else root.classList.add("dark");
  }, [theme]);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Wow, you find a treasure!</h1>
      <p className={styles.subText}>
        Nah, just kidding, go back to
        <span className={styles.link}>
          <Link to="/"> main page!</Link>
        </span>
      </p>
    </div>
  );
};

export default withLayout(Page404);
