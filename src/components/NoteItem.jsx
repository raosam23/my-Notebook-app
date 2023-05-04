import React, { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";

export const NoteItem = (props) => {
  const { note } = props;
  const context = useContext(NoteContext)
  const { deleteNote } = context

  const handleDeleteNote = ()=> {
    deleteNote(note._id);
  }

  return (
    <>
      <div className="col-md-3">
        <div className="card my-3">
          <div className="card-body">
            <h5 className="card-title">{note.title}</h5>
            <p className="card-text">{note.description}</p>
            <i className="fa-solid fa-pen-to-square mx-2"></i>
            <i className="fa-solid fa-trash mx-2" onClick={handleDeleteNote}></i>
          </div>
        </div>
      </div>
    </>
  );
};
