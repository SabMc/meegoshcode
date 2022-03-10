import React from "react";
import "./Skills.css";
import "./Card.css";
import {FaWordpressSimple} from "react-icons/fa";
import {FaHtml5} from "react-icons/fa";
import {FaJs} from "react-icons/fa";
import {FaBootstrap} from "react-icons/fa";
import {FaReact} from "react-icons/fa";
import {FaCss3} from "react-icons/fa";
import phone from "./images/phone.svg";
import tree from "./images/tree.svg";
import course from "./images/course.svg";

function Skills() {
    return (
      <div className="section-skills">
          <h2>Service</h2>

        <div className="container-service">
          <div className="service">
            <div className="service-img">
              <img src={phone} alt="phone representing web development and creating a website"/>
              </div>
            <div className="service-txt">
              <h3>Creating and Maintaining your Website</h3>
              <p>We create your website. 
                We will build a website based on your ideas and design requests. 
              </p>
            </div>
            </div>
          
            <div className="service">
            <div className="service-txt">
              <h3>Green Hosting</h3>
              <p>Working with a hosting company that is providing green hosting. The data center is located in Europe. The heat produced for cooling the center is compensated and invested into renewalbe energy projects.
              </p>
            </div>
            <div className="service-img">
              <img src={tree} alt="tree representing green hosting of the website"/>
              </div>
            </div>

            <div className="service">
            <div className="service-img">
              <img src={course} alt="phone representing web development and creating a website"/>
              </div>
            <div className="service-txt">
              <h3>Building Online Courses</h3>
              <p>We help you to create your own online school and bring your courses to your student's home
              </p>
            </div>
            </div>

          </div>

          <h2>Tools we use</h2>

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