import { useEffect } from "react";
import useTheme from "./store/useTheme.jsx";
import { useNotes } from "./store/useNotes.jsx";
import Header from "./components/Header";
import NotesGrid from "./components/NotesGrid";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";

function App() {
  const notes = useNotes((state) => state.notes);
  const theme = useTheme((state) => state.theme);

  useEffect(() => {
    localStorage.setItem("notes-data", JSON.stringify(notes));
    localStorage.setItem("theme", JSON.stringify(theme));
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
    <div className="container font-mono text-lg mx-auto px-4 ">
      <Header />
      <SearchBar />
      <NotesGrid />
      <Footer />
    </div>
  );
}

export default App;
