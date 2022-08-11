import React from "react";

import "./About.css";

import frontpageme from "./images/frontpageme2.jpg";

function About() {
  return (
    <>
      <div className="about-container" >
        <div className="parallax"></div>

        <div className="introduction" id="about">
          <div className="one">
            <img src={frontpageme} alt="Sabrina from Meegosh Code" className="me-image" />
          </div>
          <div className="description two">
            <h2 className="article-title">Sabrina from Meegosh Code</h2>
            <p className="quote">
            Meegosh Code offers customised websites from the design to the execution for businesses and artists. <br/> 
            For every complexe challenge we find a simple and powerful solution  
            </p>
            
           
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
