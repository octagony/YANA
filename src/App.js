import { useState } from "react";
import { nanoid } from "nanoid";
import Header from "./components/Header";
import NotesGrid from "./components/NotesGrid";
import SearchBar from "./components/SearchBar";

function App() {
  const [notes, setNotes] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

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
  };

  const setTheme = ()=>{
    setIsDarkMode(!isDarkMode);
    console.log(isDarkMode);
  }

  return (
    <div className={`${isDarkMode && 'dark-mode'}`}>
      <div className="container font-mono mx-auto px-4 h-screen">
        <Header setTheme={setTheme} />
        <SearchBar value={inputValue} filterNotes={setInputValue} />
        <NotesGrid
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(inputValue)
          )}
          addNote={addNote}
          deleteNote={deleteNote}
        />
      </div>
    </div>
  );
}

export default App;
