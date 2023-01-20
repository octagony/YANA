import { useEffect } from "react";
import { useTheme } from "../store/useTheme";
import { useNotes } from "../store/useNotes";
import Header from "../components/Header";
import NotesGrid from "../components/NotesGrid";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";

function App() {
  const notes = useNotes((state) => state.notes);
  const theme = useTheme((state) => state.theme);

  useEffect(() => {
    localStorage.setItem("notes-data", JSON.stringify(notes));
  }, [notes, theme]);

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
