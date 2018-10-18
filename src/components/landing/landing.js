import React, { Component } from 'react';
import equip from "../../images/equip.png";
import "./landing.css";
class Landing extends Component {
    hover(ev){
        document.getElementById("profile").onmouseover = function(){
        document.getElementById('stats').style.display = '';
        document.getElementById("stats").style.transition = "all 2s";
    }
    document.getElementById('profile').onmouseout = function(){
        document.getElementById("stats").style.transition = "all 2s";
        document.getElementById('stats').style.display = 'none';
    }
};
  render() {
    return (
      <div className="landing">
        <div className="profile"> 
            <img src={ equip } alt="equip" className="image" /> 
            <div  onMouseOver={this.hover} id="profile" className="profile-info">
            <div className="skew"></div>
            <h3>Mark Stesney</h3>
            <h5>Full Stack Web Developer</h5></div>
            </div>
            <div id="stats" className="stats"><h4>Stats</h4></div>
      </div>
    );
  }
}

export default Landing;