import React, { Component } from 'react';
import "./nav.css";
import Scrollspy from 'react-scrollspy'

class NavBar extends Component{
    state = {
    isTop: true,
  };

  componentDidMount() {
    document.addEventListener('scroll', () => {
    const isTop = window.scrollY < 100;
    if (isTop !== this.state.isTop) {
      this.setState({ isTop });
    } 
      })
    };
  



    render(){
        return(
            <div id="navdiv" style={{ backgroundColor: !this.state.isTop ? "rgba(0, 128, 128, .7)" : "rgba(91, 157, 173, 0)" }}className="navdiv">
          <a className="title1" href="/">Mark Stesney</a>
              <Scrollspy items={ ['home','about', 'contact'] } currentClassName="is-current">
            <div className="navbar1">
                <a className="nav-link" href="#home">Home</a>
                <a className="nav-link" href="#about">About</a>
                <a className="nav-link" href="#contact">Contact</a>
            </div>
              </Scrollspy>
            </div>
        )
    }

}

export default NavBar;