import React from "react";
import { FaTrash } from "react-icons/fa";

const Note = ({ id, text, date, deleteNote }) => {
  return (
    <div className="bg-lime-200 rounded-xl p-4 min-h-[170px] flex flex-col justify-between whitespace-pre-wrap">
      <span>{text}</span>
      <div className="flex justify-between items-center">
        <p>{date}</p>
        <FaTrash
          className="cursor-pointer"
          size={20}
          onClick={() => deleteNote(id)}
        />
      </div>
    </div>
  );
};

export default Note;
