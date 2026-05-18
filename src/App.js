
import React from "react";
import image from "./images/Siva_portfolio.jpeg";
import "./App.css";

function App() {

  const message = "Sivajeeva Raj P";

  const message2 =
    "Software Developer | UI/UX Enthusiast | Data Analytics & Technical Training";

  const hi = "Hi All, I'm Sivajeeva !";

  const about =
    "Aspiring technology professional with hands-on experience in Full Stack Web Development, Frontend Development, UI/UX Design, and data-related technologies. Skilled in building responsive web applications and user-friendly digital interfaces using HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, and MySQL, along with designing modern UI layouts using Figma. Familiar with Python, Excel, and data analysis concepts, with a strong interest in creating responsive, accessible, and user-focused digital solutions while continuously learning modern technologies and development practices.";

  return (
    <div className="app-container">

      <div className="left-section">

        <img
          className="images"
          src={image}
          alt="Sivajeeva Raj P"
        />

        <h1 className="Name">{message}</h1>

        <p className="message">{message2}</p>

      </div>

      <div className="right-section">

        <h2 className="intro-heading">{hi}</h2>

        <p className="about">{about}</p>

      </div>

    </div>
  );
}

export default App;

