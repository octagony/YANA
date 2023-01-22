import React from "react";
import NewNote from "./NewNote";
import Note from "./Note";
import { useNotes } from "../store/useNotes";
import { useSearch } from "../store/useSearch";

const NotesGrid = () => {
  const notes = useNotes((state) => state.notes);
  const inputValue = useSearch((state) => state.inputValue);

  return (
    <main className="grid md:grid-cols-2 gap-5">
      <NewNote />
      {notes
        .filter((note) => note.text.toLowerCase().includes(inputValue))
        .map((note) => (
          <Note key={note.id} {...note} />
        ))}
    </main>
  );
};

export default NotesGrid;
