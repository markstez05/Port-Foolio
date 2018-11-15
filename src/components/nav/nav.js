import React, { Component } from 'react';
import "./nav.css";
import { FaBriefcase, FaFile , FaHome, FaGithub, FaLinkedin, FaEnvelope, FaPhoneSquare, FaUser } from "react-icons/fa";
import logo from "../../images/logo.png"

class NavBar extends Component{
    state = {
    isTop: true,
    isMid: false,
    isBot: false,
    isBotter: false
  };



  componentDidMount() {
    document.addEventListener('scroll', () => {
    const isTop = window.scrollY < 400;
    const isMid = window.scrollY > 400 && window.scrollY < 1100;
    const isBot = window.scrollY > 1100 && window.scrollY < 1900;
    const isBotter = window.scrollY > 1900 && window.scrollY < 4100;
    
    console.log(window.scrollY);
    if (isTop !== this.state.isTop) {
      this.setState({ isTop });
    }
    if (isMid !== this.state.isMid) {
      this.setState({ isMid });
    }
    if (isBot !== this.state.isBot) {
      this.setState({ isBot });
    }
    if (isBotter !== this.state.isBotter) {
      this.setState({ isBotter });
    }
      })
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
  };
  
  scrollTop = () => {
     document.documentElement.scrollTop = 0;
   }
    render(){
        return(
          <div id="navdiv" className="navdiv">
          <div>
          <a className="title1" href="/"><img src={ logo } alt="logo-pic" className="logo-pic"></img></a></div>
            <div className="navbar1">
                <a style={{color: this.state.isTop ? "rgb(7, 231, 231)" : "rgb(71, 71, 71)"}}
                  className="nav-link"
                  href="#home">
                  <FaHome/></a>
                <a style={{color: this.state.isMid ? "rgb(7, 231, 231)" : "rgb(71, 71, 71)"}}
                  className="nav-link"
                  href="#about">
                  <FaUser/></a>
               <a style={{color: this.state.isBot ? "rgb(7, 231, 231)" : "rgb(71, 71, 71)"}}
               className="nav-link"
               href="#resume">
                  <FaFile/></a>
                  <a style={{color: this.state.isBotter ? "rgb(7, 231, 231)" : "rgb(71, 71, 71)"}}
               className="nav-link"
               href="#work">
                  <FaBriefcase/></a>
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