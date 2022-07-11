import React, { useState, useRef, useLayoutEffect, useCallback } from "react";
import { FaTrash } from "react-icons/fa";
import { AiFillEdit, AiOutlineCheck } from "react-icons/ai";

const Note = ({ id, text, date, deleteNote, editNote }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editValue, setEditValue] = useState(text);
  const editNoteValue = useRef(null);

  const editModeMemoized = useCallback(() => {
    setIsEdit(!isEdit);
    editNote(id, editValue);
  }, [editValue, isEdit, id, editNote]);

  useLayoutEffect(() => {
    if (isEdit && editNoteValue) {
      editNoteValue.current.focus();
    }
  }, [isEdit]);

  return (
    <div className="bg-lime-200 rounded-xl p-4 min-h-[170px] flex flex-col justify-between whitespace-pre-wrap">
      {isEdit ? (
        <input
          className="bg-lime-200 h-auto p-2"
          ref={editNoteValue}
          type="text"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              editModeMemoized();
            }
          }}
        />
      ) : (
        <span>{text}</span>
      )}
      <div className="flex justify-between items-center">
        <p>{date}</p>
        <div className="flex items-center gap-8">
          {isEdit ? (
            <AiOutlineCheck
              className="cursor-pointer transition-transform hover:scale-[1.2]"
              size={25}
              onClick={editModeMemoized}
            />
          ) : (
            <AiFillEdit
              className="cursor-pointer transition-transform hover:scale-[1.2]"
              size={25}
              onClick={() => setIsEdit(!isEdit)}
            />
          )}
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
