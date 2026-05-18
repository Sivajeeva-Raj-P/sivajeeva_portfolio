import React from "react";
import "../styles/projects.css";

function Projects() {
  return (
    <div className="projects-container">

      <h1>Projects</h1>

     <p> <a href="#ui-ux" className="project-link">
        UI/UX Projects
      </a>  </p>
      <p> <a href="#web-dev" className="project-link">
        Web Development Projects
      </a> </p>
     <p> <a href="#bio" className="project-link">
        Academic Projects
      </a>  </p>


      {/* UI/UX Design Projects */}
      <div id="ui-ux" className="projects-section">

        <h2 style={{ color: "white", textAlign: "center" }}>
          UI/UX Design
        </h2>

        <div className="projects-grid">

          <div className="project-item">
            <h5>Student Management Dashboard UI</h5>

            <span>May 2026</span>

            <p>Personal Project</p>

            <ul>
              <li>
                Designed a responsive student dashboard interface using Figma featuring analytics cards, sidebar navigation, attendance tracking, and profile management layouts.
              </li>

              <li>
                Created dashboard screens with modern UI structure, responsive layouts, consistent spacing, and typography principles.
              </li>

              <li>
                Focused on user-friendly dashboard workflows, visual hierarchy, and mobile-first responsive design concepts.
              </li>
            </ul>

            <a
              href="Student Management Dashboard UI.pdf"
              download="Student_Management_Dashboard_UI.pdf"
              className="download-btn"
            >
              Download Figma PDF
            </a>
          </div>

          <div className="project-item">

            <h5>Learner’s World Responsive Login UI</h5>

            <span>April 2026</span>

            <p>Personal Project</p>

            <ul>
              <li>
                Designed a responsive login page UI using Figma focusing on clean layout structure, typography, spacing, and mobile responsiveness.
              </li>

              <li>
                Created user-friendly authentication screen layouts with responsive desktop and mobile interface designs.
              </li>

              <li>
                Focused on modern UI styling principles including alignment, visual hierarchy, and responsive layout design.
              </li>
            </ul>

            <a
              href="Login page project.pdf"
              download="Learners_World_Responsive_Login_UI.pdf"
              className="download-btn"
            >
              Download Figma PDF
            </a>

          </div>

        </div>

      </div>

      {/* Web Development Projects */}
      <div id="web-dev" className="projects-section">


        <h2 style={{ color: "white", textAlign: "center" }}>
          Web Development
        </h2>

        <div className="projects-grid">

          <div className="project-item">
            <h5>OTT Streaming Platform</h5>

            <span>February 2026 - March 2026</span>

            <p>Associated With MashupStack</p>

            <ul>
              <li>
                A web-based OTT streaming platform where users can browse, watch, and manage movies, while admins oversee content, users, and reports.
              </li>

              <li>
                Built a structured user interface supporting user authentication, movie browsing, watchlist and history features, while also designing admin panels for managing movies, users, and activity reports.
              </li>
            </ul>
          </div>

          <div className="project-item">

            <h5>Recipe Sharing Platform</h5>

            <span>January 2026 - February 2026</span>

            <p>Associated With MashupStack</p>

            <ul>
              <li>
                A web application that allows users to create, manage, and explore cooking recipes, with an admin interface for user moderation and content oversight.
              </li>

              <li>
                Designed user pages for authentication and recipe management, implemented clear recipe-detail layouts, and created an admin interface for overseeing users and content quality.
              </li>
            </ul>
          </div>

          <div className="project-item">

            <h5>URL Shortener</h5>

            <span>January 2026</span>

            <p>Associated With MashupStack</p>

            <ul>
              <li>
                Developed a React-based application to generate and manage shortened URLs with a clean and responsive user interface.
              </li>

              <li>
                Implemented features like authentication, search, pagination, and a limit of 5 URLs per user with edit and delete functionality.
              </li>
            </ul>
          </div>

          <div className="project-item">

            <h5>Medical Store Management Site</h5>

            <span>December 2025</span>

            <p>Associated With MashupStack</p>

            <ul>
              <li>
                Built an Express.js-based application for managing medicine inventory with features to add, edit, delete, and track stock.
              </li>

              <li>
                Implemented user authentication, search functionality, pagination, and restricted users to a maximum of 5 medicine entries.
              </li>
            </ul>
          </div>

        </div>

      </div>

      {/* Academic Projects */}
      <div id="bio" className="projects-section">

        <h2 style={{ color: "white", textAlign: "center" }}>
          Academic Projects
        </h2>

        <div className="projects-grid">

          <div className="project-item">

            <h5>
              Design of Coumarin-Conjugated Nanoliposomes to Target Thrombus
            </h5>

            <span>December 2023 - May 2024</span>

            <p>Final Year UG Project</p>

            <ul>
              <li>
                Conducted in-silico analysis to identify potential drug targets of Coumarin.
              </li>

              <li>
                Synthesized and characterized Coumarin-Conjugated Nanoliposomes using FT-IR and DLS.
              </li>

              <li>
                Evaluated biological activities such as anticoagulant and antioxidant properties.
              </li>
            </ul>

          </div>

          <div className="project-item">

            <h5>Incidence of Myocarditis Post COVID Vaccination</h5>

            <span>August 2023 - December 2023</span>

            <p>Final Year UG Seminar</p>

            <ul>
              <li>
                Delivered a detailed presentation on the occurrence of myocarditis after COVID-19 vaccination.
              </li>

              <li>
                Analyzed and interpreted data to explore possible correlations between vaccination and myocarditis.
              </li>
            </ul>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Projects;

