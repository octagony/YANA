import React from "react";
import NewNote from "./NewNote";
import Note from "./Note";
import notesStore from "../store/NotesStore.jsx";

const NotesGrid = () => {
  const notes = notesStore((state) => state.notes);
  return (
    <main className="grid grid-cols-layout gap-5">
      <NewNote />
      {notes.map((note) => (
        <Note key={note.id} {...note} />
      ))}
    </main>
  );
};

export default NotesGrid;
