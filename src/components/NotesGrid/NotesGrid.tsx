// Libraries
import React, { FC, useContext, useEffect } from "react";
import { useAuthStore } from "../../store/auth.store";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase/config";

// Components
import NewNote from "../NewNote/NewNote";
import Note from "../Note/Note";

// Store
import { useNotes } from "../../store/notes.store";
import { useSearch } from "../../store/search.store";

// Types
import { INote } from "../../../types/INotes";

// Context
import { AuthContext } from "../../context/auth.context";

// Styles
import styles from "./NotesGrid.module.css";

const NotesGrid: FC = () => {
  const { notes } = useNotes();
  const { inputValue } = useSearch();
  const { user } = useContext(AuthContext);
  const { setLoading } = useAuthStore();
  const { setNotes } = useNotes();

  const notesCollectionRef = collection(db, "users", `${user.uid}`, "notes");
  const notesCollectionQuery = query(
    notesCollectionRef,
    orderBy("date", "desc")
  );

  useEffect(() => {
    setLoading(true);
    onSnapshot(notesCollectionQuery, (querySnapshot) => {
      const notes: INote[] = [];
      querySnapshot.forEach((doc) => {
        const note = {
          id: doc.id,
          text: doc.data().text,
          date: doc.data().date,
        };
        notes.push(note);
      });
      setNotes(notes);
    });
    setLoading(false);
  }, [user]);

  return (
    <main className={styles.wrapper}>
      <NewNote />
      {notes
        ? notes
            .filter((note) => note.text.toLowerCase().includes(inputValue))
            .sort((prev, next) =>  Number(next.date) - Number(prev.date))
            .map((note) => <Note key={note.id} {...note} />)
        : null}
    </main>
  );
};

export default NotesGrid;
