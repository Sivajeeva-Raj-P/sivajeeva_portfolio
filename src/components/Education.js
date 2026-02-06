import React from "react";
import "../styles/education.css";

function Education (){
    return(
        <div className="education-container">
            <h1> Education</h1>
            <table>
                <tr>
                    <th> Degree </th>
                    <th> Institution </th>
                    <th> Period </th>
                    <th> Grade </th>
                </tr> 
                <tr>
                    <td> Bachelor of Technology in Biotechnology and Biochemical Engineering </td>
                    <td>Sree Chitra Thirunal College of Engineering, Pappanamcode, Thiruvananthapuram </td>
                    <td> 2020 -2024 </td>
                    <td> 8.58 </td>
                </tr>
                <tr>
                    <td> Higher Secondary  ( Biology Science ) </td>
                    <td> Government Vocational Higher Secondary School, Vellanad, Thiruvananthapuram</td>
                    <td> 2018 -2020 </td>
                    <td> 91% </td>
                </tr>
                <tr>
                    <td> Matriculation </td>
                    <td> Government Vocational Higher Secondary School, Vellanad, Thiruvananthapuram</td>
                    <td> 2017 -2018</td>
                    <td> 92% </td>
                </tr>
            </table>
        </div>
    )
}

export default Education;