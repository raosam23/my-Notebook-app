import React, { useContext, useState } from "react";
import NoteContext from "../context/notes/NoteContext";

export default function AddNote(props) {
  const context = useContext(NoteContext);
  const  { addNote } = context;

  const [note, setNote] = useState({
    title : "",
    description : "",
    tag : ""
  });

  const handleOnClick = (event)=>{
    event.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({
      title : "",
      description : "",
      tag : ""
    });
    props.showAlert("Note Added Succesfully","success");
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
              value = {note.title}
              onChange={handleOnChange}
              minLength={5}
              required
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
              value = {note.description}
              onChange={handleOnChange}
              minLength={5}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
              Tag
            </label>
            <input
              type="text"
              className="form-control"
              id="tag"
              name="tag"
              value = {note.tag}
              onChange={handleOnChange}
            />
          </div>
          {/* <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div> */}
          <button type="submit" className="btn btn-primary" onClick={handleOnClick} disabled={note.title.length<5 || note.description.length<5}>
            Add Note
          </button>
        </form>
      </div>
    </>
  );
}
