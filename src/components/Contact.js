import React from "react";
import "../styles/contact.css";

function Contact(){
    
    return (
        <div className="contact-container">
            <h1>Contact Information</h1>
            <div className="contact-content">
                <div className="contact-item">
                    <h3>Phone</h3>
                    <p><a href="tel:+919847985176">+91 98479 85176</a></p>
                </div>
                <div className="contact-item">
                    <h3>Email</h3>
                    <p><a href="mailto:priyajeeva.in@gmail.com">priyajeeva.in@gmail.com</a></p>
                </div>
                <div className="contact-item">
                    <h3>LinkedIn</h3>
                    <p><a href="https://www.linkedin.com/in/sivajeeva-raj-p" target="_blank" rel="noopener noreferrer">sivajeeva-raj-p</a></p>
                </div>
                <div className="contact-item">
                    <h3>GitHub</h3>
                    <p><a href="https://github.com/Sivajeeva-Raj-P" target="_blank" rel="noopener noreferrer">Sivajeeva-Raj-P</a></p>
                </div>
            </div>
        </div>
    )
}
export default Contact;