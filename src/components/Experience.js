import React from "react";
import "../styles/experience.css";

function Experience (){
    return(
        <div className="experience-container">
            <h1> Professional Experience / Internships</h1>
            <div className="experience-item">
              <h5>Part-time Tutor</h5>
              <span>September 2025 - Present</span>
              <p>Wayvida Learning, Thiruvanathapuram</p>
              <ul>
                <li>Conduct one-on-one and group tutoring sessions for students in Science.</li>
                <li>Develop personalized lesson plans and study materials to cater to individual student needs.</li>
                <li>Monitor student progress and provide feedback to students and parents.</li>
                <li>Foster a positive learning environment to encourage student engagement and motivation.</li>
              </ul>
            </div>

            <div className="experience-item">
              <h5>Full-Stack Web Developer Intern</h5>
              <span>August 2025 - Present</span>
              <p>MashupStack, Thiruvanathapuram</p>
              <ul>
                <li>Learning MERN Stack development with hands-on projects.</li>
                <li>Using Node.js and Express.js for backend development and MongoDB for database management.</li>
              </ul>
            </div>

            <div className="experience-item">
              <h5>Research Intern</h5>
              <span>8 - 19 May 2023</span>
              <p>Central Tuber Crops Research Institute, ICAR-CTCRI, Sreekariyam</p>
              <ul>
                <li>Assisted in molecular study of plant DNA and instrumentation under guidance of Dr. Mohan C.</li>
                <li>Gained hands-on experience in DNA extraction, PCR amplification, and gel electrophoresis techniques.</li>
              </ul>
            </div>
        </div>
    )
}
export default Experience;