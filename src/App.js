import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Header from "./components/Header";
import NotesGrid from "./components/NotesGrid";
import SearchBar from "./components/SearchBar";

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes-data")) ?? []
  );
  const [inputValue, setInputValue] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(
    JSON.parse(localStorage.getItem("dark-mode")) ?? false
  );
  const [isSaveButtons, setIsSaveButtons] = useState(
    notes.length ? false : true
  );

  useEffect(() => {
    localStorage.setItem("notes-data", JSON.stringify(notes));
    localStorage.setItem("dark-mode", JSON.stringify(isDarkMode));
  }, [notes, isDarkMode]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [newNote, ...notes];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
    setIsSaveButtons(notes.length ? false : true);
  };

  const setTheme = () => {
    setIsDarkMode(!isDarkMode);
    console.log(isDarkMode);
  };

  const showSaveBtns = (boolean) => {
    boolean ? setIsSaveButtons(true) : setIsSaveButtons(false);
  };

  return (
    <div className={`${isDarkMode && "dark-mode"}`}>
      <div className="container font-mono text-lg mx-auto px-4 h-screen">
        <Header setTheme={setTheme} isDarkMode={isDarkMode} />
        <SearchBar value={inputValue} filterNotes={setInputValue} />
        <NotesGrid
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(inputValue)
          )}
          addNote={addNote}
          deleteNote={deleteNote}
          showSaveBtns={showSaveBtns}
          isSaveButtons={isSaveButtons}
        />
      </div>
    </div>
  );
}

export default App;
