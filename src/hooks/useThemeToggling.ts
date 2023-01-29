import React, { useEffect } from "react";
import { useTheme } from "../store/useTheme";

export const useThemeToggling = () => {
  const { theme } = useTheme();
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") root.classList.remove("dark");
    else root.classList.add("dark");
  }, [theme]);

  return theme;
};
