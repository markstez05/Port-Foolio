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
        document.getElementById("stats").style.transition = "ease-out 1.6s";
        document.getElementById('stats').style.width = '80%';
        document.getElementById("stats").style.transitionDelay = "1.45s";
        document.getElementById("info").style.opacity = "1";
        document.getElementById("info").style.transition = " all ease-in 1.6s";
        document.getElementById("info").style.transitionDelay = "2.7s";
        document.getElementById("lorem").style.opacity = "0";
        document.getElementById("lorem").style.transition = "all ease-out 1.4s";    
        document.getElementById("lorem").style.transitionDelay = "1.45s";   
        document.getElementById("lorem1").style.opacity = "0";
        document.getElementById("lorem1").style.transition = "all ease-out 1.4s";    
        document.getElementById("lorem1").style.transitionDelay = "1.45s";
        document.getElementById("lorem2").style.opacity = "0";
        document.getElementById("lorem2").style.transition = "all ease-out 1.4s";    
        document.getElementById("lorem2").style.transitionDelay = "1.45s";        
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
        document.getElementById("stats").style.transition = "all ease-out 1.7s";
        document.getElementById("stats").style.transitionDelay = ".2s";
        document.getElementById('stats').style.width = "";
        document.getElementById("profile1").style.transform = "";
        document.getElementById("profile1").style.transition = "all ease-out 1.3s";
        document.getElementById("profile1").style.transitionDelay = "2.1s";
        document.getElementById("info").style.opacity = "";
        document.getElementById("info").style.transition = "all ease-out .89s";
        document.getElementById("info").style.transitionDelay = "0s"
        document.getElementById("lorem").style.opacity = "1";
        document.getElementById("lorem").style.transition = "all ease-in 1.4s";    
        document.getElementById("lorem").style.transitionDelay = "2.1s";   
        document.getElementById("lorem1").style.opacity = "1";
        document.getElementById("lorem1").style.transition = "all ease-in 1.4s";    
        document.getElementById("lorem1").style.transitionDelay = "2.1s";
        document.getElementById("lorem2").style.opacity = "1";
        document.getElementById("lorem2").style.transition = "all ease-in 1.4s";    
        document.getElementById("lorem2").style.transitionDelay = "2.1s";  
    }
    
    componentDidMount(){ window.addEventListener("scroll", function() {
     let spinBig = document.getElementById("spinBig"),
      spinSmall = document.getElementById("spinSmall");
        spinBig.style.transform = "rotate("+window.pageYOffset+"deg)";
        spinSmall.style.transform = "rotate(-"+window.pageYOffset+"deg)";
    });
  }
  render() {
    return (
      <div className="landing">
      <div className="header"><p><span className="header-text" id="lorem2">Hi<span>,</span> I<span>'</span>m </span><strong>Mark Stesney</strong></p><p><span className="header-text" id="lorem1" >Web Developer <span>/ </span>Designer <span>/ </span></span>Full Stack Engineer</p>
      <p id="lorem" className="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
            <div  id="spinBig" className="spinner"></div>
            <div id="spinSmall" className="spinner1"></div>
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
            <h3 className="name">Information</h3>
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
            <div className="tech-box2">

<div className="button-div"> <a className="resume" href={ resume } download><FaDownload className="icons2"/>Download Resume</a> </div>
</div>
            </div>
            </div>
            </div>
            </div>
            <div id="stats" className="stats">
            <div id="info" className="stat-info">
            <div id="logo" className="logo">
            <h1 className="logo-name" >Mark Stesney</h1>
            <h2 className="logo-title">Favorite Tech</h2>
            </div>
            <h4 className="info-title"></h4>
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
            <div className="tech-container2">
            <div className="tech-box2">
            <ul>
              <li className="tech-title2">HTML</li>
              <li className="tech-title2">SCSS</li>
              <li className="tech-title2">BootStrap</li>
              <li className="tech-title2">SASS/LESS</li>
            </ul>
            </div>
            <div className="tech-box2">
            <ul>
              <li className="tech-title2">Express</li>
              <li className="tech-title2">Django</li>
              <li className="tech-title2">JavaScript</li>
              <li className="tech-title2">Python</li>
            </ul>
            </div>
            <div className="tech-box2">
            <ul>
              <li className="tech-title2">Express</li>
              <li className="tech-title2">Django</li>
              <li className="tech-title2">JavaScript</li>
              <li className="tech-title2">Python</li>
            </ul>
            </div>
            <div className="tech-box2">
            <ul>
              <li className="tech-title2">Express</li>
              <li className="tech-title2">Django</li>
              <li className="tech-title2">JavaScript</li>
              <li className="tech-title2">Python</li>
            </ul>
            </div>
            </div>
            </div>
            </div>
      </div>
    );
  }
}

export default Landing;