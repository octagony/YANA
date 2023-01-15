import React from "react";
import { FaTrash } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import notesStore from "../store/NotesStore.jsx";

const Note = ({ id, text, date }) => {
  const deleteNote = notesStore((state) => state.deleteNote);

  return (
    <div className="bg-lime-200 rounded-xl p-4 min-h-[170px] flex flex-col justify-between whitespace-pre-wrap [&:nth-child(3)]:col-start-1 [&:nth-child(3)]:col-end-3 [&:nth-child(4)]:col-start-3 [&:nth-child(4)]:col-end-5 [&:nth-child(7)]:col-start-1 [&:nth-child(7)]:col-end-[-1] ">
      <span>{text}</span>
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
