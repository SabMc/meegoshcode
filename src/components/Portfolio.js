import React from "react";
//import Project from "./Project";
import "./Portfolio.css";
import Project2 from "./Project2";
import dacfront from "./images/dacfront.jpg";
import sailingapp from "./images/sailingapp.jpg";

function Portfolio() {
  return (
    <>
      <div className="portfolio-container" id="portfolio">
        <h2 className="article-title">Portfolio</h2>
    
          <div className="projects-container">
          <Project2 
          img={dacfront}
          alt="dutch art class frontpage picture"
          description="Online Art School"
          titel="Dutch Art Class"
          text="Creating an online art school. From the idea to the execution of
          building a homepage, training the art teacher in giving online
          sessions to developing a promotion plan "
          url="https://dutchartclass.nl"
          
          />
          
          <Project2 
          img={sailingapp}
          alt="sailing app frontpage picture"
          description="Final Project React Workshop"
          titel="Sailing Weather App"
          text="Creating a sailing app to check the weather. Calculating wind speed to Beaufort at the current location and which ever location requiered"
          url="https://focused-stonebraker-0d6f32.netlify.app"
          
          />

          </div>
        
      </div>
    </>
  );
}

export default Portfolio;
