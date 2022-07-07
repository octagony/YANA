import React from "react";
import NewNote from "./NewNote";
import Note from "./Note";

const NotesGrid = ({
  notes,
  addNote,
  deleteNote,
  showSaveBtns,
  isSaveButtons,
}) => {
  return (
    <main className="grid grid-cols-layout gap-4">
      <NewNote
        addNote={addNote}
        showSaveBtns={showSaveBtns}
        isSaveButtons={isSaveButtons}
      />
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          text={note.text}
          date={note.date}
          deleteNote={deleteNote}
        />
      ))}
    </main>
  );
};

export default NotesGrid;
