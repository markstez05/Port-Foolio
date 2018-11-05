import React, { Component } from "react";
import "./work.css";
import ff7menu from "../../images/ff7 menu.png";
import ff7login from "../../images/FF7 Logi.png";
import ff7 from "../../images/FF7.png";
import map from "../../images/Map.png";
import mapProfile from "../../images/Map Profile.png";
import list from "../../images/List.png";

class Work extends Component {

    componentDidMount(){
        this.carousel();
        this.carouselTwo();
    }

    myIndex = 0;
    carousel =()=>{
        let i;
        let x = document.getElementsByClassName("slides");
        for (i = 0; i < x.length; i++) {
            x[i].style.opacity = "0";
        }
        this.myIndex++;
        if (this.myIndex > x.length) { this.myIndex = 1 }
        x[this.myIndex - 1].style.opacity= "";
        setTimeout(this.carousel, 4000);
    }
    myIndexTwo = 0;
    carouselTwo = () =>{
        let j;
        let y = document.getElementsByClassName("slidesOne");
        for (j = 0; j < y.length; j++) {
            y[j].style.opacity = "0";
        }
        this.myIndexTwo++;
        if (this.myIndexTwo > y.length) { this.myIndexTwo = 1 }
        y[this.myIndexTwo - 1].style.opacity = "1";
        setTimeout(this.carouselTwo, 4500);
    }

    render() {  
    return (
      <div id="work" className="work-container">
        <h2 className="project-header">Projects</h2>
      <div className="slide-div">
        <img className="slides" src={ mapProfile }  />
        <img className="slides" src={ list } />
        <img className="slides" src={ map }  />
        <h1 className="title-header">Atlas Map</h1>
        <div className="tech-list">
        <div className="list-tech">
            <p>React</p>
            <p>Redux</p>
        </div>
        <div className="list-tech">
            <p>Python</p>
            <p>Django</p>
        </div>
        <div className="list-tech">
            <p>Google-Maps</p>
            <p>React-Maps</p>
        </div>
        <div className="list-tech">
            <p>SASS</p>
            <p>JWT</p>
        </div>
        </div>
        </div>
      <div className="slide-div2">
        <img className="slidesOne" src={ ff7login }  />
        <img className="slidesOne" src={ ff7menu } />
        <img className="slidesOne" src={ ff7 }  />
        <h1 className="title-header">FF7 Resu-Maker</h1>
        <div className="tech-list">
        <div className="list-tech">
            <p>React</p>
            <p>Redux</p>
        </div>
        <div className="list-tech">
            <p>Node.Js</p>
            <p>Express</p>
        </div>
        <div className="list-tech">
            <p>JWT</p>
            <p>Passport</p>
        </div>
        <div className="list-tech">
            <p>Bcrypt</p>
            <p>Mongoose</p>
        </div>
        </div>
        </div>
      </div>
      
    );
  }
}

export default Work;
