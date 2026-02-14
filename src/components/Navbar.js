import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";
import DownloadCV from "./DownloadCV";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <NavLink to="/" className="link">Home</NavLink>
        <NavLink to="/skill" className="link">Skills</NavLink>
        <NavLink to="/experience" className="link">Experience</NavLink>
        <NavLink to="/projects" className="link">Projects</NavLink>
        <NavLink to="/education" className="link">Education</NavLink>
        <NavLink to="/contact" className="link">Contact</NavLink>
        <DownloadCV />
      </nav>
    </div>
  );
}

export default Navbar;
    
