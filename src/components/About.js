import React from "react";

import "./About.css";

import frontpageme from "./images/frontpageme2.jpg";

function About() {
  return (
    <>
      <div className="about-container">
        <div className="parallax"></div>

        <div className="introduction">
          <div className="one">
            <img src={frontpageme} alt="mypic" className="me-image" />
          </div>
          <div className="description two">
            <h2 className="article-title">Sabrina from Meegosh Code</h2>
            <p>
              Welcome to the world of Meegosh, I am an environmental engineer
              and front-end developer. <br /> Change management allows me to
              combine all of my skills <br /> I like to keep my pages
              minimalistic and glamurous <br /> Speaking multiple languages
              allows me to engage easily with different people all over the
              planet
            </p>
            <p>
              My goal is to bring your projects online in a minimalistic design
              to focus on your message
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
