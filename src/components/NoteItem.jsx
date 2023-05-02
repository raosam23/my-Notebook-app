import React from "react";

export const NoteItem = (props) => {
  const { note } = props;
  return (
    <>
      <div className="col-md-3">
        <div class="card my-3">
          <div class="card-body">
            <h5 class="card-title">{note.title}</h5>
            <p class="card-text">{note.description} Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit similique minima neque numquam accusamus officia placeat. Eos maxime quas, quia assumenda cupiditate iusto qui, amet, omnis accusantium pariatur laboriosam ad.</p>
          </div>
        </div>
      </div>
    </>
  );
};
