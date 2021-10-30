import React from "react";

import { Link } from "react-router-dom";

//hover lifting up with box shadow

function Project(props) {
  return (
    <div className="container-portfolio">
      <li className="portfolio-content">
        <Link className="projectlink" to={props.path} target="_blank">
          <figure className="project-img-wrap">
            <img src={props.img} alt="frontpagedac" className="frontpage-img" />
          </figure>

          <div className="project-info">
            <h5 className="project-text">{props.titel}</h5>
            <p>{props.text}</p>
          </div>
        </Link>
      </li>
    </div>
  );
}

export default Project;
