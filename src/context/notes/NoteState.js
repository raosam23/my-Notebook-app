import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const initialNotes = [];

  const [notes, setNotes] = useState(initialNotes);

  // Get all Notes
  const getNote = async () => {
    // API call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ0N2I2ZGY1NDlmMzc3NjdiZDRlZGU5In0sImlhdCI6MTY4MjYxMTI1OX0.zj5fS-4jHWf80I2vv3j9iqmhceh_RE7cEE4RIdVDsP4",
      },
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  };

  // Add a Note
  const addNote = async (title, description, tag) => {
    // API Call
    // eslint-disable-next-line no-unused-vars
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ0N2I2ZGY1NDlmMzc3NjdiZDRlZGU5In0sImlhdCI6MTY4MjYxMTI1OX0.zj5fS-4jHWf80I2vv3j9iqmhceh_RE7cEE4RIdVDsP4",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    // Logic to add new note
    console.log("Adding a new note");
    let note = {
      _id: "644e42fe0527e90b5e9e5a26",
      user: "6447b6df549f37767bd4ede9",
      title: title,
      description: description,
      tag: tag,
      date: "2023-05-04T11:50:18.577Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  // Delete a Note
  const deleteNote = async (id) => {
    // API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ0N2I2ZGY1NDlmMzc3NjdiZDRlZGU5In0sImlhdCI6MTY4MjYxMTI1OX0.zj5fS-4jHWf80I2vv3j9iqmhceh_RE7cEE4RIdVDsP4",
      }
    });
    const json = response.json();
    console.log(json);
    console.log("Deleted Note with id " + id);
    let newNotes = notes.filter((note) => note._id !== id);
    setNotes(newNotes);
  };

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API call
    // eslint-disable-next-line no-unused-vars
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ0N2I2ZGY1NDlmMzc3NjdiZDRlZGU5In0sImlhdCI6MTY4MjYxMTI1OX0.zj5fS-4jHWf80I2vv3j9iqmhceh_RE7cEE4RIdVDsP4",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    // const json = response.json();

    // Logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  return (
    <NoteContext.Provider
      value={{ notes, getNote, addNote, deleteNote, editNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
