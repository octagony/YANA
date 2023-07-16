import React, { useState, useEffect, useRef } from "react";
import { useNotes } from "../../store/useNotes";
import Button from "../../UI/Button";
import styles from "./NewNote.module.css";

const NewNote = () => {
  const { notes, addNote } = useNotes();
  const [textNote, setTextNote] = useState<string>("");
  const areaRef = useRef<HTMLTextAreaElement>(null);

  const [isSaveButtons, setIsSaveButton] = useState<boolean>(
    notes.length > 0 ? false : true
  );

  useEffect(() => {
    notes.length > 0 ? setIsSaveButton(false) : setIsSaveButton(true);
  }, [notes]);

  useEffect(() => {
    if (areaRef.current) {
      areaRef.current.focus();
    }
  }, []);

  const saveNote = () => {
    if (textNote.trim().length > 0) {
      addNote(textNote);
      setTextNote("");
    }
  };

  return (
    <div className={styles.wrapper}>
      <textarea
        className={styles.area}
        cols={10}
        rows={8}
        placeholder="Just start type..."
        value={textNote}
        ref={areaRef}
        onChange={(event) => setTextNote(event.target.value)}
        onKeyDown={(event) => {
          if (event.ctrlKey && event.key === "Enter") {
            saveNote();
          }
        }}
      ></textarea>
      <div className={styles.saveBtn}>
        <Button noteAction={saveNote}>Save</Button>
      </div>
      {isSaveButtons ? (
        <p className={styles.infoBtns}>
          <code className={styles.mainBtn}>Ctrl</code>
          <code className={styles.secondBtn}>+</code>
          <code className={styles.mainBtn}>Enter</code>
          <code className={styles.secondBtn}>for save</code>
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default NewNote;
