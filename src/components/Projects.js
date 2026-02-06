import React from "react";
import "../styles/projects.css";

function Projects(){

    return(
        <div className="projects-container">
            <h1> Projects</h1>
            <div className="project-item">
            <h5>Design of Coumarin-Conjugated Nanoliposomes to Target Thrombus 
                and their Applications in Thrombolytic Therapy </h5>
                <p> Final Year UG Project              December 2023 - May 2024 </p>
            <ul type = "circle">
                <li>Conducted in-silico analysis to identify potential drug targets of Coumarin. </li>
             <li> Synthesized and characterized Coumarin-Conjugated Nanoliposomes using FT-IR and DLS. </li>
        <li>Evaluated biological activities such as anticoagulant and antioxidant properties; assessed cytotoxicity using Allium cepa model.</li>
       </ul>
       <h5>Incidence of Myocarditis Post COVID Vaccination: A Study  </h5>
                <p> Final Year UG Seminar              August 2023 - December 2023</p>
            <ul type = "circle">
        <li>Delivered a detailed presentation on the occurrence of myocarditis after COVID-19 vaccination. </li>
        <li>  Analyzed and interpreted data to explore possible correlations between vaccination and myocarditis.</li>
    </ul>
            </div>
        </div>
    )
}
export default Projects;