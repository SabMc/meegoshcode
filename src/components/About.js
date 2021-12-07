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
              Welcome to the world of Meegosh, being a process engineer and
              front-end developer allows me to combine my skills in change
              management. <br />My goal is
              to bring your projects online in a minimalistic design to focus on
              your message. <br /> Speaking multiple languages allows me to
              engage easily with different people all over the planet.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
