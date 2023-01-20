import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import withLayout from "../layout/withLayout";
import { useNotes } from "../store/useNotes";
import { useTheme } from "../store/useTheme";

const EditNote = () => {
  const { id } = useParams();

  const notes = useNotes((state) => state.notes);
  const theme = useTheme((state) => state.theme);
  const editNote = useNotes((state) => state.editNote);

  const note = notes.find((note) => note.id === id);

  const [handleChange, setHandleChange] = useState(note.text);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
    }
  }, [theme]);

  const saveNote = () => {
    editNote(id, handleChange);
  };

  return (
    <>
      <h2 className="text-4xl font-bold text-center dark:text-white">
        Edit Note
      </h2>
      <textarea
        className="placeholder:text-gray-200 whitespace-pre-wrap outline-none bg-lime-200  w-full rounded-xl p-2"
        cols="10"
        rows="8"
        placeholder="Just start type..."
        value={handleChange}
        onChange={(event) => setHandleChange(event.target.value)}
        onKeyDown={(event) => {
          if (event.ctrlKey && event.key === "Enter") {
            saveNote();
          }
        }}
      ></textarea>
      <button onClick={saveNote}>Save</button>
    </>
  );
};

export default withLayout(EditNote);
