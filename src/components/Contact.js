import React from "react";
import "./Contact.css";
import "./Card.css"
import {FaMailBulk} from "react-icons/fa";
import {FaFacebookF} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaLinkedinIn} from "react-icons/fa";


function Contact(){
    return (
    <div id="contact">
        <h2>Send an e-mail 
            <br />
        <a href="mailto:sabrina@meegoshcode.com" title="Contact email Meegosh Code">
            <div className="card contact-card">
                <div className="icon">
                <FaMailBulk  />
                </div>
                <p>Mail</p>
            </div>
        </a>
        </h2>
        <h2>or reach out on Social Media</h2>
<div className="contact-container">
<div className="social-media-link linkedin">
    <a href="https://www.linkedin.com/in/sabrina-mcewan-15a04ab0/" title="Linkedin Sabrina from Meegosh Code">
        
            <div className="card">
            <div className="icon">
                <FaLinkedinIn  />
                </div>
                <p>Linkedin</p>
            </div>
        </a>
        </div>
<div className="social-media-link insta">
<a href="https://www.instagram.com/meegoshcode/" title="Instagram from Sabrin from Meegosh Code"> 
<div className="card">
            <div className="icon">
                <FaInstagram  />
                </div>
                <p>Instagram</p>
            </div>
</a>
</div>
<div className="social-media-link facebook"><a href="https://www.facebook.com/Meegosh-Code-108366868384600" title="Facebook from Sabrina from Meegosh Code"> 
<div className="card">
            <div className="icon">
                <FaFacebookF  />
                </div>
                <p>Facebook</p>
            </div>
</a>
</div>

</div>


            </div>
            );
        }

export default Contact;