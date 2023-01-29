import React from "react";
import { useEffect } from "react";
import { useTheme } from "../store/useTheme";
import { useNotes } from "../store/useNotes";
import NotesGrid from "../components/NotesGrid";
import SearchBar from "../components/SearchBar";
import Layout from "../layout/withLayout";
import { animated, useSpring } from "@react-spring/web";

const App = () => {
  const {notes, setNotes} = useNotes();
  const { theme } = useTheme();

  const animation = useSpring({
    x: 0,
    from: {
      x: -300,
    },
  });

  useEffect(() => {
    setNotes(notes);
  }, [notes, setNotes]);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
    }
  }, [theme]);

  return (
    <animated.div style={animation}>
      <SearchBar />
      <NotesGrid />
    </animated.div>
  );
};

export default Layout(App);
