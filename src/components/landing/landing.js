import React, { Component } from 'react';
import equip from "../../images/equip.png";
import "./landing.css";
import {  FaLinkedin, FaGithub, FaDownload, FaEnvelope, FaPhoneSquare, FaAngleUp, FaAngleRight, FaAngleDown} from "react-icons/fa";
import react from "../../images/react.png";
import mongo from "../../images/mongodb.png";
import redux from "../../images/redux.png";
import node from "../../images/node.png";
import git from "../../images/git.png";
import resume from "../../images/MarkStesneyResume.jpg"

class Landing extends Component {

    hover = () =>{
        document.getElementById("profile1").style.transform = "none";
        document.getElementById("profile1").style.transition = "transform 1.3s cubic-bezier(.4, .4, .4, 1)";
        document.getElementById("profile1").style.transitionDelay = ".2s";
        document.getElementById("up-arrow").style.height = "0px";
        document.getElementById("up-arrow").style.transition = "ease-out .5s";
        document.getElementById("down-arrow").style.height = "40px";
        document.getElementById("down-arrow").style.transition = "ease-in .5s";
        document.getElementById("stats").style.transition = "ease-in-out 1.3s";
        document.getElementById('stats').style.width = '80%';
        document.getElementById("stats").style.transitionDelay = "1.45s";
        document.getElementById("info").style.opacity = "1";
        document.getElementById("info").style.transition = " all ease-in 1.3s";
        document.getElementById("info").style.transitionDelay = "1.9s";
        document.getElementById("logo").style.opacity = "1";
        document.getElementById("logo").style.transition = "all ease-in 1.3s";
        document.getElementById("logo").style.transitionDelay = "3s";
    }
    buttonRight = () => {
      document.getElementById("right-arrow").style.width = "0px";
      document.getElementById("right-arrow").style.transition = "ease-out .5s";
      document.getElementById("down-arrow").style.height = "40px";
      document.getElementById("down-arrow").style.transition = "ease-in .5s";
      document.getElementById('stats').style.width = '55%';
      document.getElementById("stats").style.transitionDelay = ".45s";
      document.getElementById("info").style.opacity = "1";
      document.getElementById("info").style.transition = " all ease-in 1.3s";
      document.getElementById("info").style.transitionDelay = ".55s";
      document.getElementById("logo").style.opacity = "1";
      document.getElementById("logo").style.transition = "all ease-in 1.3s";
      document.getElementById("logo").style.transitionDelay = "2s";
    }
   hoverOff = () => {
        document.getElementById("up-arrow").style.height = "";
        document.getElementById("up-arrow").style.transition = "ease-in .5s";
        document.getElementById("down-arrow").style.height = "";
        document.getElementById("down-arrow").style.transition = "ease-out .5s";
        document.getElementById("stats").style.transition = "all ease-out 1.4s";
        document.getElementById("stats").style.transitionDelay = "1.2s";
        document.getElementById('stats').style.width = "";
        document.getElementById("profile1").style.transform = "";
        document.getElementById("profile1").style.transition = "all ease-out 1.3s";
        document.getElementById("profile1").style.transitionDelay = "2.9s";
        document.getElementById("info").style.opacity = "";
        document.getElementById("info").style.transitionDelay = ".52s"
        document.getElementById("logo").style.opacity = "";
        document.getElementById("logo").style.transitionDelay = "-.3s"
    }
 
  render() {
    return (
      <div className="landing">
      <div className="header"><p>Hi, I'm <strong>Mark Stesney</strong></p><p>Web Developer/Designer/Full Stack Engineer</p></div>


        <div  id="about" className="profile"> 
            <img src={ equip } alt="equip" className="image" /> 
            <div id="profile1" className="profile-info">
            <div className="skew"></div>
             <FaAngleUp 
                id="up-arrow"
                className="arrow-button"
                onClick={this.hover}
             />
               <FaAngleRight
                id="right-arrow"
                className="arrow-button3"
                onClick={this.buttonRight}
             />
             <FaAngleDown
                id="down-arrow"
                className="arrow-button2"
                onClick={this.hoverOff}
             />
             <div className="profile-text">
            <h3 className="name">About Me</h3>
            <h5 className="title"></h5>
            <div className="profile-stuff">
            <h5 className="stuff-info">Fayetteville, AR</h5>
            <a className="email"
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:mstesney12@gmail.com">
            mstesney12@gmail.com</a>
            <h5 className="stuff-info">(918)361-8479</h5>
            </div>
            <div className="icon-div">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/mark-stesney/"
              >
            <FaLinkedin className="icons" /></a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/markstez05"
              >
            <FaGithub className="icons" /></a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:mstesney12@gmail.com"
              >
            <FaEnvelope className="icons" /></a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="tel:1-918-361-8479"
              >
            <FaPhoneSquare className="icons" /></a>
            </div>
            </div>
            </div>
            </div>
            <div id="stats" className="stats">
            <div id="info" className="stat-info">
            <div id="logo" className="logo">
            <h1 className="logo-name" >Mark Stesney</h1>
            <h2 className="logo-title">Software Engineer</h2>
            </div>
            <h4 className="info-title">Favorite Tech</h4>
            <div className="tech-container">
            <div className="tech-box">
            <img src={ react } alt="tech" className="tech"/>
            <h5 className="tech-title">React</h5>
            </div>
            <div className="tech-box">
            <img src={ redux } alt="tech" className="tech"/>
            <h5 className="tech-title">Redux</h5>
            </div>
            <div className="tech-box">
            <img src={ git } alt="tech" className="tech"/>
            <h5 className="tech-title">Git</h5>
            </div>
            <div className="tech-box">
            <img src={ node } alt="tech" className="tech"/>
            <h5 className="tech-title">NodeJS</h5>
            </div>
            <div className="tech-box">
            <img src={ mongo } alt="tech" className="tech"/>
            <h5 className="tech-title">MongoDB</h5>
            </div>
            </div>
            <h4 className="info-title2"></h4>
            <div className="tech-container">
          
            <h4 className="info-title2"></h4> 
            <div className="button-div"> <a className="resume" href={ resume } download><FaDownload className="icons2"/>Download Resume</a> </div>


              {/* <h5 className="bio">My skills include Full Stack Web Development as well as supervising and facilitating multi-faceted projects, troubleshooting an array of technological issues, managing and developing groups of people, orchestrating positive client experiences, and engaging in constructive analysis feedback.</h5> */}
            
            </div>
            </div>
            </div>
      </div>
    );
  }
}

export default Landing;