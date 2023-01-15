import { useEffect, useState } from "react";
import notesStore from "./store/NotesStore.jsx";
import themeStore from "./store/ThemeStore.jsx";
import Header from "./components/Header";
import NotesGrid from "./components/NotesGrid";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";

function App() {
  const notes = notesStore((state) => state.notes);
  const theme = themeStore((state) => state.theme);

  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    localStorage.setItem("notes-data", JSON.stringify(notes));
    localStorage.setItem("dark-mode", JSON.stringify(theme));
  }, [notes, theme]);

  return (
    <div className={`${theme && "dark-mode"} h-screen`}>
      <div className="container font-mono text-lg mx-auto px-4 ">
        <Header />
        <SearchBar value={inputValue} filterNotes={setInputValue} />
        <NotesGrid value={inputValue} filterNotes={setInputValue} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
