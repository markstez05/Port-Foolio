import React, { Component } from 'react';
import "./nav.css";
import { FaHome, FaGithub, FaLinkedin, FaEnvelope, FaPhoneSquare, FaUser } from "react-icons/fa";
import logo from "../../images/logo.png";

class NavBar extends Component{
    state = {
    isTop: true,
  };

  componentDidMount() {
    document.addEventListener('scroll', () => {
    const isTop = window.scrollY === true;
    if (isTop !== this.state.isTop) {
      this.setState({ isTop });
    }  else {
      !this.setState({ isTop })
    }
      })
    };
  



    render(){
        return(
          <div id="navdiv" className="navdiv">
          <div>
          <a className="title1" href="/"><img src={ logo } alt="logo-pic" className="logo-pic"></img></a></div>
            <div className="navbar1">
                <a className="nav-link" href="#home"><FaHome/></a>
                <a className="nav-link" href="#about"><FaUser/></a>
                <a className="nav-link" href="#contact"><FaEnvelope/></a>
            </div>
            <div className="navbar2">
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
        )
    }

}

export default NavBar;