import React from "react";
import Project from "./Project";
import "./Portfolio.css";
import dacfront from "./images/dacfront.jpg";

function Portfolio() {
  return (
    <>
      <div className="portfolio-container">
        <h2>Portfolio</h2>
        <div className="projects-container">
          <Project
            path="href: https: //dutchartclass.nl"
            img={dacfront}
            titel="Dutch Art Class"
            text="Creating an online school. From the idea to the execution of
              building a homepage, training the art teacher in giving live
              sessions to developing a promotion plan"
          />
        </div>
      </div>
    </>
  );
}

export default Portfolio;
