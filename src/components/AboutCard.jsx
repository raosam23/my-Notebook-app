import React from "react";
import { Link } from "react-router-dom";

export default function AboutCard() {
  return (
    <div>
      <div class="card">
        <div class="card-header">About us</div>
        <div class="card-body">
          <h5 class="card-title">Create your notes on cloud 9</h5>
          <p class="card-text">
            Create, manage, and access your notes from anywhere at any time. No
            longer will you have to worry about losing your important thoughts
            or ideas due to device malfunctions or accidental deletions. By
            leveraging the power of cloud technology, we ensure that your notes
            are always protected and readily available.
          </p>
          <Link to="/" class="btn btn-primary">
            Start creating Notes
          </Link>
        </div>
      </div>
    </div>
  );
}
