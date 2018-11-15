import React, { Component } from 'react';
import "./resume.css";

class Resume extends Component {


render () {
    return (
        <div id="resume" className="resume-div">
             <h2 className="project-header3">Resume</h2>
        <div className="resume-container">
        <div className="resume-item">
        <div className="resume-headers">
        <h3 className="resume-title">EXPERIENCE</h3>
        </div>
        <div className="resume-info">
            <h3 className="resume-header">
            Lambda School
            </h3>
            <div>
                <p className="date"><span className="spanner">Software Engineer</span>  March 2018 - Current</p>
                <ul className="content">
                <li className="resume-list">
                Engineer applications using React, Redux, Node, Express, MongoDB, HTML, CSS3, and Bcrypt.
                </li>
                <li className="resume-list"> 
                Develop application modules following sprint guidelines and client specifications.
                </li>
                <li className="resume-list">
                Archetype data flow and structure for the application using Node, Express, MongoDB, Mongoose Schemas, and RESTful APIs for the back end, and React & Redux for the front end.
                </li>
                <li className="resume-list">
                Implement Responsive User Interface components using React, HTML, CSS3, React-Strap, Material UI, and Styled Components.
                </li>
                    </ul>
            </div>
            <div>
            <h3 className="resume-header">
            Treatment Services, LLC
            </h3>
                <p className="date"><span className="spanner">Chief Development Officer</span>  March 2015 - January 2018</p>
                <ul className="content">
                <li className="resume-list">
                Worked with the State Opioid Treatment Authority to determine statistical relevance of areas in need of treatment facilities.                 </li>
                <li className="resume-list"> 
                Established community relationships to generate awareness and educate around the stigma of and need for treatment facilities.                </li>
                <li className="resume-list">
                Facilitated all lease and facility contract negotiations. Managed site construction.                </li>
                <li className="resume-list">
                Worked with the D.E.A. to schedule and complete licensing and certifications.                </li>
                    </ul>
            </div>
        </div>
        
        </div>
        <div className="resume-item">
        <div className="resume-headers">
        <h3 className="resume-title">EXPERIENCE</h3>
        </div>
        <div className="resume-info">
            <p>
            Lambda School of Computer Science
            </p>
            </div>
        </div>
        </div>
        </div>
        )
    }
};

export default Resume