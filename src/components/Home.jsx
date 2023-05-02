import React, { useContext } from "react";
import Form from "./Form";
import NoteContext from "../context/notes/NoteContext";

export const Home = () => {
  const context = useContext(NoteContext);
  // eslint-disable-next-line no-unused-vars
  const {notes, setNotes} = context;
  return (
    <>
      <div className="container my-3">
        <h2>Add a Note</h2>
        <Form />
      </div>
      <div className="container my-3">
        <h2>Your Notes</h2>
        {notes.map(note => note.title)}
      </div>
    </>
  );
};
