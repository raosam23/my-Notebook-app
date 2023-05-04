import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const initialNotes = [
    {
      _id: "644c0cba2c2cc21243148886",
      user: "6447b6df549f37767bd4ede9",
      title: "Walter White Called Me",
      description:
        "Walter White, aka, Heisenberg called me and he told me to check out the Carwash building that he is buying to launder his money",
      tag: "Personal",
      date: "2023-04-28T18:13:14.278Z",
      __v: 0,
    },
    {
      _id: "644c0da32c2cc21243148889",
      user: "6447b6df549f37767bd4ede9",
      title: "Public Masturbation Case",
      description:
        "Some dude called Brandon, publically masturbated inside a starbucks, I am yet to meet him, we have a meeting at 5pm tomorrow",
      tag: "Client",
      date: "2023-04-28T18:17:07.341Z",
      __v: 0,
    },
    {
      _id: "644d3f47d0b5d165e0b7631c",
      user: "6447b6df549f37767bd4ede9",
      title: "I might get arrested today",
      description:
        "So Marion got to know that I am Saul Goodman, and she has used that lifeline thing and they have called the feds on me. I am going to ask for an Hoover Max Pro from one of my vaccum cleaner friend so that he can help me to get out of this situation.",
      tag: "Emergency",
      date: "2023-04-29T16:01:11.259Z",
      __v: 0,
    },
    {
      _id: "644e42fe0527e90b5e9e5a25",
      user: "6447b6df549f37767bd4ede9",
      title: "2 for 1 discount",
      description:
        "Today I met DEA Agent Hank Schrader, I got to know that his mom works in an whore house, and she offers 2 for 1 discount. So I am planning of going there to meet his mom. Hank is definately not going to be happy with this.",
      tag: "DEA",
      date: "2023-04-30T10:29:18.577Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(initialNotes);

  // Add a Note
  const addNote = (title, description, tag)=> {
    // TODO : API Call
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
    setNotes(notes.concat(note))
  }

  // Delete a Note
  const deleteNote = (id)=> {

  }

  // Edit a Note
  const editNote = (id)=> {

  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote}}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
