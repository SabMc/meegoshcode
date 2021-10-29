import React from "react";

import { Link } from "react-router-dom";

//hover lifting up with box shadow

function Project() {
  return (
    <>
      <Link className="projectlink" to="#">
        <img src="#" alt="Screenshot" />

        <div className="project-info">
          <h5 className="project-text">Weather forecast for sailing</h5>
        </div>
      </Link>
    </>
  );
}

export default Project;
