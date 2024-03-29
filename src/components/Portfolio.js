import React from "react";
//import Project from "./Project";
import "./Portfolio.css";
import Project3 from "./Project3";
import persportfolio from "./images/persportfolio.jpg";
import dacfront from "./images/dacfront.jpg";
import sailingapp from "./images/sailingapp.jpg";
import artistico from "./images/artistico.jpg";
import kreativ from "./images/kreativ.jpeg";

function Portfolio() {
  return (
    <>
      <div className="portfolio-container" id="portfolio">
        <h2 className="article-title">Portfolio</h2>
    
          <div className="projects-container">

          <Project3 
          img={persportfolio}
          alt="personal portfolio final project from shecodes workshop responsive"
          titel="Personal Portfolio"
          text="The Personal Portfolio was the final project of the SheCodes Responsive Workshop. It contains business projects as well as personal interests."
          url="https://determined-snyder-2d5355.netlify.app/"
          
          />
          <Project3 
          img={dacfront}
          alt="dutch art class frontpage picture"
          titel="Dutch Art Class"
          text="Creating an online art school. From the idea to the execution of
          building a homepage, training the art teacher in giving online
          sessions to developing a promotion plan "
          url="https://dutchartclass.nl"
          />
          <Project3 
          img={sailingapp}
          alt="sailing app frontpage picture"
          titel="Sailing Weather App"
          text="Creating a sailing app to check the weather. Calculating wind speed to Beaufort at the current location and which ever location requiered"
          url="https://focused-stonebraker-0d6f32.netlify.app"
          />
          
          </div>
          <div className="projects-container">

          <Project3 
          img={artistico}
          alt="online portfolio for perfume distributor from Switzerland"
          titel="Artistico Kosmetikagentur"
          text="Designing and creating a website for a perfume distributor in Switzerland. Showing all the brands represented by Artistico and the company news."
          url="https://artistico-kosmetikagentur.ch//"
          
          />
          <Project3 
          img={kreativ}
          alt="personal portfolio final project for Swiss Artist Lilly Zinsli"
          titel="Kreativ Lilly Zinsli"
          text="Designing and creating a website for a Swiss Artist. Displaying her art work and a short biografie about her life and working style."
          url="https://kreativ-lillyzinsli.com//"
          
          />
          
          
          </div>
        
      </div>
    </>
  );
}

export default Portfolio;
