import React, { useState } from "react";

const NewNote = ({ addNote, showSaveBtns, isSaveButtons }) => {
  const [textNote, setTextNote] = useState("");

  const remainingText = 150;

  const handleChange = (event) => {
    if (remainingText - event.target.value.length >= 0) {
      setTextNote(event.target.value);
    }
  };

  const saveNote = () => {
    if (textNote.trim().length > 0) {
      addNote(textNote);
      setTextNote("");
      showSaveBtns(false);
    }
  };

  return (
    <div className="bg-emerald-500 rounded-xl p-4 min-h-[170px] flex flex-col justify-between whitespace-pre-wrap">
      <textarea
        className="placeholder:text-gray-200 whitespace-pre-wrap outline-none"
        cols="10"
        rows="8"
        placeholder="Just start type..."
        value={textNote}
        onChange={handleChange}
        onKeyDown={(event) => {
          if (event.ctrlKey && event.key === "Enter") {
            saveNote();
          }
        }}
      ></textarea>
      <div className="flex justify-between items-center">
        <p className="text-xl text-gray-200 flex-grow">
          Remaining:{remainingText - textNote.length}
        </p>
        <button
          className="p-2 bg-transparent border-2 border-lime-200 rounded-2xl shadow-lg transition hover:bg-lime-500"
          onClick={saveNote}
          aria-label="Save"
        >
          Save
        </button>
      </div>
      {isSaveButtons ? (
        <p className="text-sm text-center py-2 hidden lg:block">
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
