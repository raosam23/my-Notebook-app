import React from "react";
import Form from "./Form";

export const Home = () => {
  return (
    <>
      <div className="container my-3">
        <h2>Add a Note</h2>
        <Form />
      </div>
      <div className="container my-3">
        <h2>Your Notes</h2>
      </div>
    </>
  );
};
