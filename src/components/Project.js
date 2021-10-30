import React from "react";

//import { Link } from "react-router-dom";

//hover lifting up with box shadow

function Project(props) {
  return (
    <div className="container-portfolio">
      <li className="portfolio-content">
        <div className="projectlink">
          <figure className="project-img-wrap">
            <img
              src={props.img}
              alt="frontpageproject"
              className="frontpage-img"
            />
          </figure>

          <div className="project-info">
            <h5 className="project-text">{props.titel}</h5>
            <p>{props.text}</p>
            <a href={props.path}>Find out more</a>
          </div>
        </div>
      </li>
    </div>
  );
}

export default Project;
