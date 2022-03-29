import React from "react";
import persportfolio from "./images/persportfolio.jpg";

function Project3(props) {
return(
    <div className="project-card">
        <div className="proj-img">
            <img 
            src={props.img} 
            alt={props.alt}
            />
        </div>
        <div>
            <h2>{props.titel}</h2>
            <p>{props.text}</p>
        </div>
        <div>
            <a href={props.url}>Find out more</a>
        </div>



    </div>
);
}

export default Project3;