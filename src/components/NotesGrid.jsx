import React from 'react'
import Note from './Note';

const NotesGrid = ({notes}) => {
  console.log(notes);
  return(
    <main>
      {notes.map((note)=>(
        <Note key={note.id}
        id={note.id}
        text={note.text}
        date={note.date}
        />
      ))}
    </main>
  )
};

export default NotesGrid;