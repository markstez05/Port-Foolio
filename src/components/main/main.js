import React, { Component } from 'react';
import "./main.css"
import logoBig from "../../images/LogoBig.png"
import fall from "../../images/fall.jpeg"
class Main extends Component {


render () {
    return (
        <div id="home" className="main">
        <img src={ fall } alt="fall" className="fall" ></img>
        <div className="opac">
        <img src={ logoBig } alt="logobig" className="logobig"></img>
        <div className="bar"></div>
        <div className="box1">
        <p className="welcome">Welcome</p>
        </div>
        </div>
        </div>
        )
    }
};

export default Main 