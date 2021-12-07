import React from "react";
import Project from "./Project";
import "./Portfolio.css";
import dacfront from "./images/dacfront.jpg";
import sailingapp from "./images/sailingapp.jpg";

function Portfolio() {
  return (
    <>
      <div className="portfolio-container" id="portfolio">
        <h2 className="article-title">Portfolio</h2>
    
          <div className="projects-container">
            <Project
              path="https://dutchartclass.nl"
              img={dacfront}
              titel="Dutch Art Class"
              text="Creating an online art school. From the idea to the execution of
              building a homepage, training the art teacher in giving online
              sessions to developing a promotion plan"
            />
            <Project
              path="https://dutchartclass.nl"
              img={dacfront}
              titel="Dutch Art Class"
              text="Creating an online art school. From the idea to the execution of
              building a homepage, training the art teacher in giving online
              sessions to developing a promotion plan"
            />
            <Project
            path="https://focused-stonebraker-0d6f32.netlify.app"
            img={sailingapp}
            titel="Sailing Weather App"
            text="Creating a sailing app to check the weather. Calculating wind speed to beaufort at the current location and which ever location requiered"
          />
          </div>
        
      </div>
    </>
  );
}

export default Portfolio;
