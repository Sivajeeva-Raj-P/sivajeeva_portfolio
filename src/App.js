import React from "react";
import image from "./images/Siva_portfolio.jpeg";
import "./App.css";

function App (){
let message = "Sivajeeva Raj P" ;
let message2 = "Full-Stack Web Developer";

  return (
    <div>
      <p className="Name">{message}</p>
      <p className="message" >{message2}</p>
      <img className="images" src = {image} alt="Sivajeeva" />
    </div>
  )
}
export default App;