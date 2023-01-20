import React from "react";
import { FaTrash } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useNotes } from "../store/useNotes";

const Note = ({ id, text, date }) => {
  const deleteNote = useNotes((state) => state.deleteNote);
  return (
    <div className="bg-lime-200 w-full rounded-xl p-4 min-h-[200px] flex flex-col justify-between whitespace-pre-wrap md:[&:nth-child(3)]:col-start-1 md:[&:nth-child(3)]:col-end-3  md:[&:nth-child(7)]:col-start-1 md:[&:nth-child(7)]:col-end-[-1] ">
      <span>{text.length > 30 ? `${text.slice(0, 30)}...` : text}</span>
      <div className="flex justify-between items-center">
        <p>{date}</p>
        <div className="flex items-center gap-8">
          <Link to={`/edit-note/${id}`}>
            <AiFillEdit size={25} />
          </Link>
          <FaTrash
            className="cursor-pointer transition-transform hover:scale-[1.2]"
            size={20}
            onClick={() => deleteNote(id)}
          />
        </div>
      </div>
    </div>
  );
};

export default Note;
