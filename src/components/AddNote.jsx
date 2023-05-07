import React, { useContext, useState } from "react";
import NoteContext from "../context/notes/NoteContext";

export default function AddNote() {
  const context = useContext(NoteContext);
  const  { addNote } = context;

  const [note, setNote] = useState({
    title : "",
    description : "",
    tag : "default"
  });

  const handleOnClick = (event)=>{
    event.preventDefault();
    addNote(note.title, note.description, note.tag);
  }

  const handleOnChange = (event) => {
    setNote({
      ...note,
      [event.target.name] : event.target.value
    })
  }
  return (
    <>
      <div className="container my-3">
        <h2>Add a Note</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              aria-describedby="emailHelp"
              name="title"
              onChange={handleOnChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              onChange={handleOnChange}
            />
          </div>
          <div className="mb-3 form-check">
            {/* <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label> */}
          </div>
          <button type="submit" className="btn btn-primary" onClick={handleOnClick}>
            Add Note
          </button>
        </form>
      </div>
    </>
  );
}
