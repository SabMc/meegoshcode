import React from "react";
import "./Skills.css";
import "./Card.css";
import {FaWordpressSimple} from "react-icons/fa";
import {FaHtml5} from "react-icons/fa";
import {FaJs} from "react-icons/fa";
import {FaBootstrap} from "react-icons/fa";
import {FaReact} from "react-icons/fa";
import {FaCss3} from "react-icons/fa";


function Skills() {
    return (
      <div>
          <h2>Skills</h2>
          <div className="container-skills">
              <div>
                <div className="card">
                <div className="icon">
                <FaHtml5  />
                </div>
                <p>HTML</p>
                </div>
              </div>
              <div>
                <div className="card">
                <div className="icon">
                <FaCss3  />
                </div>
                <p>CSS</p>
                </div>
              </div>

              <div>
                <div className="card">
                <div className="icon">
                <FaJs  />
                </div>
                <p>JS</p>
                </div>
              </div>
              
          </div>
          <div className="container-skills">
              <div>
                <div className="card">
                <div className="icon">
                <FaReact/>
                </div>
                <p>React</p>
                </div>
              </div>

              <div>
                <div className="card">
                <div className="icon">
                <FaWordpressSimple />
                </div>
                <p>Wordpress</p>
                </div>
              </div>
              
              <div>
                <div className="card">
                <div className="icon">
                <FaBootstrap/>
                </div>
                <p>Bootstrap</p>
                </div>
              </div>
          </div>      
      </div>
    );
  }
  
  export default Skills;