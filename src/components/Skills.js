import React from "react";
import "./Skills.css";
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
              <div><FaHtml5/>HTML</div>
              <div><FaCss3/>CSS</div>
              <div><FaJs/>JS</div>
              
          </div>
          <div className="container-skills">
              <div><FaReact/>React</div>
              <div><FaWordpressSimple /> Wordpress</div>
            <div><FaBootstrap/>Bootstrap</div>
          </div>
          
        
      </div>
    );
  }
  
  export default Skills;