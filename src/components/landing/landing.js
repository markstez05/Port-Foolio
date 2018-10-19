import React, { Component } from 'react';
import equip from "../../images/equip.png";
import "./landing.css";
import {  FaLinkedin, FaGithub, FaEnvelope, FaPhoneSquare} from "react-icons/fa";
import react from "../../images/react.png";
import mongo from "../../images/mongodb.png";
import redux from "../../images/redux.png";
import node from "../../images/node.png";
import git from "../../images/git.png";

class Landing extends Component {
    hover(){
        document.getElementById("profile").onmouseover = function(){
        document.getElementById('stats').style.width = '55%';
        document.getElementById("stats").style.transitionDelay = "1.7s";
        document.getElementById("profile").style.transitionDelay = "0s";
        document.getElementById("info").style.opacity = "1";
        document.getElementById("info").style.transition = " all ease-in 1.1s";
        document.getElementById("info").style.transitionDelay = "2s";
        document.getElementById("logo").style.opacity = "1";
        document.getElementById("logo").style.transition = "all ease-in 1.1s";
        document.getElementById("logo").style.transitionDelay = "3.5s";
    }
  }
   hoverOff(ev){ document.getElementById('profile').onmouseout = function(){
        document.getElementById("stats").style.transition = "all 1.8s";
        document.getElementById("stats").style.transitionDelay = "0s";
        document.getElementById("profile").style.transition = "all 1.8s";
        document.getElementById("profile").style.transitionDelay = "1.9s";
        document.getElementById('stats').style.width = "";
        document.getElementById("info").style.opacity = "";
        document.getElementById("info").style.transitionDelay = "-.45s"
        document.getElementById("logo").style.opacity = "";
        document.getElementById("logo").style.transitionDelay = "-.45s"
    }
};
  render() {
    return (
      <div className="landing">

        <div className="profile"> 
            <img src={ equip } alt="equip" className="image" /> 
            <div onMouseOut={this.hoverOff} onMouseOver={this.hover} id="profile" className="profile-info">
            <div className="skew"></div>
            <h3 className="name">About Me</h3>
            <h5 className="title">Full Stack Web Developer</h5>
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
            <div id="stats" className="stats">
            <div id="info" className="stat-info">
            <div id="logo" className="logo">
            <h1 className="logo-name" >Mark Stesney</h1>
            <h2 className="logo-title">Full Stack Web Developer</h2>
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
            </div>
            </div>
      </div>
    );
  }
}

export default Landing;