import React, { useState, useRef, useLayoutEffect } from "react";
import { FaTrash } from "react-icons/fa";
import { AiFillEdit, AiOutlineCheck } from "react-icons/ai";

const Note = ({ id, text, date, deleteNote, editNote }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editValue, setEditValue] = useState(text);
  const editNoteValue = useRef(null);

  useLayoutEffect(() => {
    if (isEdit && editNoteValue) {
      editNoteValue.current.focus();
    }
  }, [isEdit]);

  return (
    <div className="bg-lime-200 rounded-xl p-4 min-h-[170px] flex flex-col justify-between whitespace-pre-wrap">
      {isEdit ? (
        <input
          ref={editNoteValue}
          type="text"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
        />
      ) : (
        <span>{text}</span>
      )}
      <div className="flex justify-between items-center">
        <p>{date}</p>
        <div className="flex items-center gap-8">
          {isEdit ? (
            <AiOutlineCheck
              onClick={() => {
                setIsEdit(!isEdit);
                editNote(id, editValue);
              }}
            />
          ) : (
            <AiFillEdit onClick={() => setIsEdit(!isEdit)} />
          )}
          <FaTrash
            className="cursor-pointer hover:scale-[1.2]"
            size={20}
            onClick={() => deleteNote(id)}
          />
        </div>
      </div>
    </div>
  );
};

export default Note;
