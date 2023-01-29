import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import withLayout from "../../layout/withLayout";
import { useNotes } from "../../store/useNotes";
import Button from "../../UI/Button";
import { animated, useSpring } from "@react-spring/web";
import { INote } from "../../../types/INotes";
import styles from "./EditNote.module.css";
import { useThemeToggling } from "../../hooks/useThemeToggling";

const EditNote = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const animation = useSpring({
    x: 0,
    from: {
      x: -300,
    },
  });

  const { notes, setNotes } = useNotes();
  const { editNote } = useNotes();
  const  theme  = useThemeToggling();

  const note = notes.find((note: INote) => note.id === id);
  const [handleChange, setHandleChange] = useState<string>(
    note?.text as string
  );

  useEffect(() => {
    setNotes(notes);
  }, [notes, setNotes]);

  useEffect(() => {
    if (note?.id !== id) {
      navigate("/");
    }
  }, []);

  const saveNote = () => {
    editNote(id as string, handleChange);
  };

  return (
    <animated.div style={animation}>
      <h2 className={styles.title}>Edit Note</h2>
      <div className={styles.wrapper}>
        <textarea
          className={styles.area}
          cols={10}
          rows={8}
          placeholder="Just start type..."
          value={handleChange}
          onChange={(event) => setHandleChange(event.target.value)}
          onKeyDown={(event) => {
            if (event.ctrlKey && event.key === "Enter") {
              saveNote();
            }
          }}
        ></textarea>
        <Button className={styles.btn} noteAction={saveNote}>
          Save
        </Button>
      </div>
    </animated.div>
  );
};

export default withLayout(EditNote);
