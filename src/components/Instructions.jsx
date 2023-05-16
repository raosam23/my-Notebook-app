import React from "react";
import { Link } from "react-router-dom";

function Instructions() {
  return (
    <div className="my-5">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">How to start creating notes</h5>
          <p class="card-text">
          Begin the process of note creation by logging in or signing up with your email account. From there, you can promptly enter the title, description, and optional note tags, which will be securely stored in the cloud. Enjoy the flexibility to edit or delete your notes effortlessly, ensuring a seamless and efficient note-taking experience.
          </p>
          <Link to="/" class="btn btn-primary">
            Start creating Notes
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Instructions;
