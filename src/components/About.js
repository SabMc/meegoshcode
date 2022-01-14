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
            <img src={frontpageme} alt="mypic" className="me-image" />
          </div>
          <div className="description two">
            <h2 className="article-title">Sabrina from Meegosh Code</h2>
            <p className="short-text">
            Meegosh Code offers customised digital solutions for small businesses and artists. 
            <ul className="service-list"><li>Creating and maintaining websites
</li><li>Building online courses</li><li>Developing a marketing plan</li><li>Setting up virtual events</li></ul>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
