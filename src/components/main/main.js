import React, { Component } from 'react';
import "./main.css"
import logoBig from "../../images/LogoBig.png"
import code from "../../images/code.jpeg"
import logoAlt from "../../images/logoAlt.png"

class Main extends Component {


render () {
    return (
        <div id="home" className="main">
        <img src={ code } alt="fall" className="fall" ></img>
        <div className="opac">
        <img src={ logoAlt } alt="logobig" className="logobig"></img>
        <div className="bar"></div>
        <div className="box1">
        <div className="box-contain">
        <div className="box"></div>
        </div>
        <p className="welcome">Mark Stesney</p>
        </div>
        </div>
        </div>
        )
    }
};

export default Main 