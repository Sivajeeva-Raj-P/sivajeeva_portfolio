import React from "react";
import "../styles/skills.css";

function Skill(){
    
    return(
        <div className="skills-container">
            <h1>Skills</h1>
            <div className="skill-category">
                <h2 className="skill-heading">Technical Skills Development</h2>
                <ul type="circle">
                    <li>FrontEnd: HTML, CSS, JavaScript, React.js</li>
                    <li>Backend: Node.js, Express.js</li>
                    <li>Database: MongoDB, MySQL</li>
                    <li>Programming:  Python </li>
                    <li>Tools: Git/GitHub, VS Code</li>
                </ul>
            </div>

            <div className="skill-category">
                <h2 className="skill-heading">UI/UX Design</h2>
                <ul type="circle">
                    <li>Figma</li>
                    <li>Responsive Design</li>
                    <li>Wireframing</li>
                    <li>User-centered design</li>
                    <li>UI/UX Principles</li>
              </ul>
            </div>

             <div className="skill-category">
                <h2 className="skill-heading">Data Analytics</h2>
                <ul type="circle">
                    <li>Excel</li>
                    <li>MySQL</li>
                    <li>Python</li>
                    <li>Power BI</li>
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
    