import { useEffect } from "react";
import { useTheme } from "../store/useTheme";
import { useNotes } from "../store/useNotes";
import NotesGrid from "../components/NotesGrid";
import SearchBar from "../components/SearchBar";
import Layout from "../layout/withLayout";
import { animated, useSpring } from "@react-spring/web";

const App = () => {
  const [notes, setNotes] = useNotes((state) => [state.notes, state.setNotes]);
  const theme = useTheme((state) => state.theme);

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
