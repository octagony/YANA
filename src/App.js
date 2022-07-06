import { useState } from "react";
import { nanoid } from "nanoid";
import Header from "./components/Header";
import NotesGrid from "./components/NotesGrid";
import SearchBar from "./components/SearchBar";

function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      text: "sample text 1",
      date: "04.07.2022",
    },
    {
      id: 2,
      text: "sample text 2",
      date: "03.07.2022",
    },
    {
      id: 3,
      text: "sample text 4",
      date: "06.07.2022",
    },
  ]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="container font-sans mx-auto px-4 h-screen">
      <Header />
      <SearchBar/>
      <NotesGrid notes={notes} addNote={addNote} deleteNote={deleteNote} />
    </div>
  );
}

export default App;
