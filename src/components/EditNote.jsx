import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNotes } from "../store/useNotes.jsx";

const EditNote = () => {
  const { id } = useParams();

  const notes = useNotes((state) => state.notes);
  const editNote = useNotes((state) => state.editNote);

  const note = notes.find((note) => note.id === id);

  const [handleChange, setHandleChange] = useState(note.text);

  useEffect(() => {
    localStorage.setItem("notes-data", JSON.stringify(notes));
  }, [notes]);

  const saveNote = () => {
    editNote(id, handleChange);
  };

  return (
    <div>
      <textarea
        className="placeholder:text-gray-200 whitespace-pre-wrap outline-none bg-emerald-500"
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
    </div>
  );
};

export default EditNote;
