import React from "react";
import "../styles/about.css";

function About(){

     let hi = "Hi All, I'm Sivajeeva !" 
let about ="I focus on building clean, responsive, and user-friendly web applications using modern full-stack development practices. I work with React on the frontend and Node.js, Express.js, and MongoDB on the backend to create functional and structured solutions. My work emphasizes clarity, usability, and maintainable code. I enjoy solving problems, paying attention to detail, and creating smooth user experiences. I aim to contribute to meaningful digital projects while continually strengthening my technical capabilities."
    return (
        <div className="about-container">
            <h1 className="name"> {hi}</h1>
            <p className="about">{about}</p>
            
        </div>
    )
}
export default About;