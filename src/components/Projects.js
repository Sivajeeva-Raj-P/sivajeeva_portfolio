import React from "react";
import "../styles/projects.css";

function Projects(){

    return(
        <div className="projects-container">
            <h1>Projects</h1>
            
            <div className="project-item">
                <h5>OTT Streaming Platform</h5>
                <span>February 2026 - March 2026</span>
                <p>Associated With MashupStack</p>
                <ul type="circle">
                    <li>A web-based OTT streaming platform where users can browse, watch, and manage movies, while admins oversee content, users, and reports.</li>
                    <li>Built a structured user interface supporting user authentication, movie browsing, watchlist and history features, while also designing admin panels for managing movies, users, and activity reports.</li>
                </ul>
            </div>

            <div className="project-item">
                <h5>Receipe Sharing Platform</h5>
                <span>January 2026 - February 2026</span>
                <p>Associated With MashupStack</p>
                <ul type="circle">
                    <li>A web application that allows users to create, manage, and explore cooking recipes, with an admin interface for user moderation and content oversight.</li>
                    <li>Designed user pages for authentication and recipe management, implemented clear recipe-detail layouts, and created an admin interface for overseeing users and content quality.</li>
                </ul>
            </div>

             <div className="project-item">
                <h5> URL Shortener</h5>
                <span>January 2026</span>
                <p>Associated With MashupStack</p>
                <ul type="circle">
                      <li>Developed a React-based application to generate and manage shortened URLs with a clean and responsive user
interface.</li>
                    <li>Implemented features like authentication, search, pagination, and a limit of 5 URLs per user with edit and delete
functionality.</li>
                </ul>
            </div>
            
             <div className="project-item">
                <h5>Medical Store Management Site</h5>
                <span>December 2025</span>
                <p>Associated With MashupStack</p>
                <ul type="circle">
                    <li>Built an Express.js-based application for managing medicine inventory with features to add, edit, delete, and
track stock.</li>
                    <li>Implemented user authentication, search functionality, pagination, and restricted users to a maximum of 5 medicine
entries.
</li>
                </ul>
            </div>
            

            <div className="project-item">
                <h5>Design of Coumarin-Conjugated Nanoliposomes to Target Thrombus and their Applications in Thrombolytic Therapy</h5>
                <span>December 2023 - May 2024</span>
                <p>Final Year UG Project</p>
                <ul type="circle">
                    <li>Conducted in-silico analysis to identify potential drug targets of Coumarin.</li>
                    <li>Synthesized and characterized Coumarin-Conjugated Nanoliposomes using FT-IR and DLS.</li>
                    <li>Evaluated biological activities such as anticoagulant and antioxidant properties; assessed cytotoxicity using Allium cepa model.</li>
                </ul>
            </div>

            <div className="project-item">
                <h5>Incidence of Myocarditis Post COVID Vaccination: A Study</h5>
                <span>August 2023 - December 2023</span>
                <p>Final Year UG Seminar</p>
                <ul type="circle">
                    <li>Delivered a detailed presentation on the occurrence of myocarditis after COVID-19 vaccination.</li>
                    <li>Analyzed and interpreted data to explore possible correlations between vaccination and myocarditis.</li>
                </ul>
            </div>
        </div>
    )
}
export default Projects;