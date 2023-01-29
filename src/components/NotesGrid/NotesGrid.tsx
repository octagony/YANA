import React from "react";
import NewNote from "../NewNote/NewNote";
import Note from "../Note/Note";
import { useNotes } from "../../store/useNotes";
import { useSearch } from "../../store/useSearch";
import styles from "./NotesGrid.module.css"

const NotesGrid = () => {
  const {notes} = useNotes();
  const {inputValue} = useSearch();

  return (
    <main className={styles.wrapper}>
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
