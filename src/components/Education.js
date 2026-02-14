import React from "react";
import "../styles/education.css";

function Education (){
    const educationData = [
        {
            degree: "Bachelor of Technology in Biotechnology and Biochemical Engineering",
            institution: "Sree Chitra Thirunal College of Engineering, Pappanamcode, Thiruvananthapuram",
            period: "2020 - 2024",
            grade: "8.58 CGPA"
        },
        {
            degree: "Higher Secondary (Biology Science)",
            institution: "Government Vocational Higher Secondary School, Vellanad, Thiruvananthapuram",
            period: "2018 - 2020",
            grade: "91%"
        },
        {
            degree: "Matriculation",
            institution: "Government Vocational Higher Secondary School, Vellanad, Thiruvananthapuram",
            period: "2017 - 2018",
            grade: "92%"
        }
    ];

    return(
        <div className="education-container">
            <h1>Education</h1>
            <div className="education-cards">
                {educationData.map((edu, index) => (
                    <div key={index} className="education-card">
                        <h3 className="degree-title">{edu.degree}</h3>
                        <p className="institution">{edu.institution}</p>
                        <div className="edu-details">
                            <span className="period">{edu.period}</span>
                            <span className="grade">{edu.grade}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Education;