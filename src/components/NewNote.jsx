import React, { useState, useEffect } from "react";
import { useNotes } from "../store/useNotes";
import Button from "../UI/Button";

const NewNote = () => {
  const [notes, addNote] = useNotes((state) => [state.notes, state.addNote]);
  const [textNote, setTextNote] = useState("");

  const [isSaveButtons, setIsSaveButton] = useState(
    notes.length > 0 ? false : true
  );

  useEffect(() => {
    notes.length > 0 ? setIsSaveButton(false) : setIsSaveButton(true);
  }, [notes]);

  const saveNote = () => {
    if (textNote.trim().length > 0) {
      addNote(textNote);
      setTextNote("");
    }
  };

  return (
    <div className="bg-emerald-500 rounded-xl p-4 min-h-[170px] flex flex-col justify-between whitespace-pre-wrap">
      <textarea
        className="placeholder:text-neutral-100 leading-7 resize-none whitespace-pre-wrap outline-none bg-emerald-500 p-4"
        cols="10"
        rows="8"
        placeholder="Just start type..."
        value={textNote}
        onChange={(event) => setTextNote(event.target.value)}
        onKeyDown={(event) => {
          if (event.ctrlKey && event.key === "Enter") {
            saveNote();
          }
        }}
      ></textarea>
      <div className="ml-auto">
        <Button noteAction={saveNote}>Save</Button>
      </div>
      {isSaveButtons ? (
        <p className="text-sm text-center py-2 ">
          <code className="p-2 border-2 rounded-xl bg-white shadow-xl border-white">
            Ctrl
          </code>
          <code className="p-2 ">+</code>
          <code className="p-2 border-2 rounded-xl bg-white shadow-xl border-white">
            Enter
          </code>
          <code className="p-2 ">for save</code>
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default NewNote;
