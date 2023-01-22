import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import withLayout from "../layout/withLayout";
import { useNotes } from "../store/useNotes";
import { useTheme } from "../store/useTheme";
import Button from "../UI/Button";

const EditNote = () => {

  const { id } = useParams();

  const [notes, setNotes] = useNotes((state) => [state.notes,state.setNotes]);
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

  useEffect(() => {
    setNotes(notes);
  }, [notes, setNotes]);

  const saveNote = () => {
    editNote(id, handleChange);
  };

  return (
    <>
      <h2 className="mb-4 text-4xl font-bold text-center dark:text-white">
        Edit Note
      </h2>
      <div className="bg-lime-200 rounded-xl p-2">
        <textarea
          className="placeholder:text-gray-200 resize-none leading-7 whitespace-pre-wrap outline-none bg-lime-200 w-full rounded-xl p-4 mb-2"
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
        <Button className="block mx-auto mb-2 w-2/12 hover:bg-emerald-600 hover:text-gray-100" noteAction={saveNote}>Save</Button>
      </div>
    </>
  );
};

export default withLayout(EditNote);
