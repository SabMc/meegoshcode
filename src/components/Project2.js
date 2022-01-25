import React from "react";


function Project2 (props){return (
<div className="grid">
<figure className="effect-marley">
    <img src={props.img} alt={props.alt}/>
        <figcaption>
              <h2>{props.description}<br/>
              <span>{props.titel}</span>
              </h2>
              <p>{props.text}<br/>
              <a href={props.url}>View more</a>
              </p>
              
            </figcaption>     
          </figure>
    
    </div>
    );
}

export default Project2;