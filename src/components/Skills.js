import React from "react";
import "../styles/skills.css";

function Skill(){
    
    return(
        <div className="skills-container">
            <h1>Skills</h1>
            <div className="skill-category">
                <h2 className="skill-heading">Technical Skills</h2>
                <ul type="circle">
                    <li>FrontEnd: HTML, CSS, JavaScript, React.js</li>
                    <li>Backend: Node.js, Express.js</li>
                    <li>Database: MongoDB</li>
                    <li>Tools: Git/GitHub, VS Code</li>
                </ul>
            </div>

            <div className="skill-category">
                <h2 className="skill-heading">Soft Skills</h2>
                <ul type="circle">
                    <li>Communication</li>
                    <li>Presentation</li>
                    <li>Mentoring</li>
                    <li>Time Management</li>
                    <li>Teamwork</li>
                    <li>Problem-Solving</li>
                </ul>
            </div>

            <div className="skill-category">
                <h2 className="skill-heading">Languages</h2>
                <ul type="circle">
                    <li>English</li>
                    <li>Malayalam</li>
                </ul>
            </div>
        </div>
    )
}
export default Skill;
    