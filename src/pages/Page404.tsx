import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import withLayout from "../layout/withLayout";
import { useTheme } from "../store/useTheme";

const Page404 = () => {
  const {theme} = useTheme();

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") root.classList.remove("dark");
    else root.classList.add("dark");
  }, [theme]);

  return (
    <div className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] dark:text-white text-center py-4 grid">
      <h1 className="text-xl mb-4 sm:text-3xl">Wow, you find a treasure!</h1>
      <p className="text-sm sm:text-xl">
        Nah, just kidding, go back to
        <span className="text-emerald-700 dark:text-lime-300">
          <Link to="/"> main page!</Link>
        </span>
      </p>
    </div>
  );
};

export default withLayout(Page404);
