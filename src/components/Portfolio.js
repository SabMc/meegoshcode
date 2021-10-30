import React from "react";
import Project from "./Project";
import "./Portfolio.css";
import dacfront from "./images/dacfront.jpg";
import sailingapp from "./images/sailingapp.jpg";

function Portfolio() {
  return (
    <>
      <div className="portfolio-container">
        <h2>Portfolio</h2>
        <div className="portfolio-wrapper">
          <ul className="projects-container">
            <Project
              path="#"
              img={dacfront}
              titel="Dutch Art Class"
              text="Creating an online school. From the idea to the execution of
              building a homepage, training the art teacher in giving live
              sessions to developing a promotion plan"
            />

            <Project
              path="#"
              img={sailingapp}
              titel="Sailing Weather App"
              text="Creating a sailing app to check the weather. Calculating the wind speed to beaufort at the current location and which ever location requiered"
            />
          </ul>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
