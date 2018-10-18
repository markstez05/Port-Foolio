import React, { Component } from 'react';
import equip from "../../images/equip.png";
import "./landing.css";
class Landing extends Component {
    hover(){
        document.getElementById("profile").onmouseover = function(){
        document.getElementById('stats').style.width = '45%';
        document.getElementById("stats").style.transitionDelay = "1.7s";
        document.getElementById("profile").style.transitionDelay = "0s";
        // document.getElementById('stats').style.height = ''; 
    }
  }
   hoverOff(ev){ document.getElementById('profile').onmouseout = function(){
        document.getElementById("stats").style.transition = "all 1.8s";
        document.getElementById("stats").style.transitionDelay = "0s";
        document.getElementById("profile").style.transition = "all 1.8s";
        document.getElementById("profile").style.transitionDelay = "1.9s";
        document.getElementById('stats').style.width = '';
        // document.getElementById('stats').style.height = '0px';   
    }
};
  render() {
    return (
      <div className="landing">
        <div className="profile"> 
            <h1 >Mark Stesney</h1>
            <h2>Full Stack Web Developer</h2>
            <img src={ equip } alt="equip" className="image" /> 
            <div onMouseOut={this.hoverOff} onMouseOver={this.hover} id="profile" className="profile-info">
            <div className="skew"></div>
            <h3 className="name">About Me</h3>
            <h5 className="title">Full Stack Web Developer</h5></div>
            </div>
            <div id="stats" className="stats">
            <div className="stat-info">
            <h4>Technical Skills</h4>
            </div>
            </div>
      </div>
    );
  }
}

export default Landing;