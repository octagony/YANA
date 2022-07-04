import React from "react";
import { FaTrash } from "react-icons/fa";

const Note = ({ id, text, date }) => {
  return (
    <div className="bg-sky-50 rounded-xl p-4 min-h-[170px] flex flex-col justify-between">
      <span>{text}</span>
      <div className="flex justify-between items-center">
        <p>{date}</p>
        <FaTrash size={20} />
      </div>
    </div>
  );
};

export default Note;
