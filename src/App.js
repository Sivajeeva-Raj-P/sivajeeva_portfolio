import React from "react";
import image from "./images/Siva_portfolio.jpeg";
import "./App.css";

function App (){
let message = "Sivajeeva Raj P" ;
let message2 = "Full-Stack Web Developer";
let hi = "Hi All, I'm Sivajeeva !" 
let about ="I focus on building clean, responsive, and user-friendly web applications using modern full-stack development practices. I work with React on the frontend and Node.js, Express.js, and MongoDB on the backend to create functional and structured solutions. My work emphasizes clarity, usability, and maintainable code. I enjoy solving problems, paying attention to detail, and creating smooth user experiences. I aim to contribute to meaningful digital projects while continually strengthening my technical capabilities."

  return (
    <div className="app-container">
      <div className="left-section">
        <p className="Name">{message}</p>
        <p className="message" >{message2}</p>
        <img className="images" src = {image} alt="Sivajeeva" />
      </div>
      <div className="right-section">
            <h1 className="name"> {hi}</h1>
            <p className="about">{about}</p>
      </div>
    </div>
  )
}
export default App;