import React, { useContext, useEffect } from "react";
import NoteContext from "../context/notes/NoteContext";

export const About = () => {
  const a = useContext(NoteContext);
  useEffect(() => {
    a.update();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      This is About {a.state.name} and he is in class {a.state.class}
    </div>
  );
};
