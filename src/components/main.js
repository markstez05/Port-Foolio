import React, { Component } from 'react';
import "./main.css"
import stance from "./stance.png"

class Main extends Component {
    constructor(props) {
      super(props);
    }

render () {
    return (
        <div className="main">
        {/* <div><span></span></div> */}
        <div className="container">
        <div className="Nav">
        <div className="left-box"></div>
        <div className="nav">
        
            <p className="nav-name">M.A.R.K. ST3Z</p>      
            </div>
            <div className="right-box"></div>
        </div>
        <div className="shadow-box-div">
        <div className="shadow-box1"></div>
        <div className="middle-box"></div>
        <div className="shadow-box"></div>
        </div>
        <div className="screen-border">
        <div className="screen">
        <div className="screen-top">asdf</div>

        <div className="middle-screen">
        <div className="equip-bar"></div>
        <div className="character"></div>
        <div className="equip-bar2"></div>
        </div>
        
        <div className="screen-bot"></div>
        </div>
        </div>
        <div className="controller-box">
        <div className="controller-box-left"></div>
        <div className="controller-box-mid"> 
        <div className="joystick">
        </div>
        <div className="buttons">
        <div className="button1"></div><div className="button2"></div>
        <div className="button1a"></div><div className="button2"></div>
        </div>
        </div>
        <div className="controller-box-right"></div>
        </div>
       
       <div className="coin"></div>
        </div>
        </div>
        )
    }
};

export default Main 