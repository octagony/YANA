import { useEffect } from "react";
import { useTheme } from "../store/useTheme";
import { useNotes } from "../store/useNotes";
import NotesGrid from "../components/NotesGrid";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";

function App() {
  const [notes, setNotes] = useNotes((state) => [state.notes, state.setNotes]);
  const theme = useTheme((state) => state.theme);

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
    <>
      <SearchBar />
      <NotesGrid />
      <Footer />
    </>
  );
}

export default App;
