import React from "react";
import Project from "./Project";
import "./Portfolio.css";

function Portfolio() {
  return (
    <>
      <div className="portfolio-container">
        <h2>Portfolio</h2>
        <div className="projects-container">
          <Project />
          <Project />
          <Project />
        </div>
      </div>
    </>
  );
}

export default Portfolio;
