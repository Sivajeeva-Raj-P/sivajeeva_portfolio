import React from "react";
import "../styles/skills.css";

function Skill(){
    
    return(
        <div className="skills-container">
            <h1> Skills</h1>
            <div className="skill-category">
            <h5> Technical Skills</h5>
            <ul type="circle">
                <li> FrontEnd: HTML, CSS, JavaScript,React.js </li>
                <li> Backend: Node.js, Express.js</li>
                <li> Database: MongoDB</li>
                <li> Tools: Git/GitHub, VS Code</li>
            </ul>
           
            <h5> Soft Skills</h5>
            <ul type ="circle">
                <li>Communication</li>
                <li> Presentation </li>
                 <li>Mentoring</li>
                  <li> Time Management </li>
                    <li> Teamwork </li>
                     <li> Problem-Solving</li>
            </ul>

            <h5> Languages </h5>
            <ul type="circle">
            <li>English</li>
            <li>Malayalam</li>
            </ul>
            </div>
        </div>
    )
}
export default Skill;
    