import React from "react";
import { useEffect } from "react";
import { useNotes } from "../store/useNotes";
import NotesGrid from "../components/NotesGrid/NotesGrid";
import SearchBar from "../components/SearchBar/SearchBar";
import withLayout from "../layout/withLayout";
import { animated, useSpring } from "@react-spring/web";
import { useThemeToggling } from "../hooks/useThemeToggling";

const App = () => {
  const { notes, setNotes } = useNotes();
  const theme = useThemeToggling();

  const animation = useSpring({
    x: 0,
    from: {
      x: -300,
    },
  });

  useEffect(() => {
    setNotes(notes);
  }, [notes, setNotes]);

  return (
    <animated.div style={animation}>
      <SearchBar />
      <NotesGrid />
    </animated.div>
  );
};

export default withLayout(App);
