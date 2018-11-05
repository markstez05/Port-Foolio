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
            x[i].style.transform = "none";
        }
        this.myIndex++;
        if (this.myIndex > x.length) { this.myIndex = 1 }
        x[this.myIndex - 1].style.opacity = "1";
        x[this.myIndex - 1].style.transition = "";
        x[this.myIndex - 1].style.transform = "";
        setTimeout(this.carousel, 4000);
    }
    myIndexTwo = 0;
    carouselTwo = () =>{
        let j;
        let y = document.getElementsByClassName("slidesOne");
        for (j = 0; j < y.length; j++) {
            y[j].style.opacity = "0";
            y[j].style.transform = "none";
        }
        this.myIndexTwo++;
        if (this.myIndexTwo > y.length) { this.myIndexTwo = 1 }
        y[this.myIndexTwo - 1].style.opacity = "1";
        y[this.myIndexTwo - 1].style.transition = "";
        y[this.myIndexTwo - 1].style.transform = "";
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
        <ul className="list-tech">
            <li>React</li>
            <li>Redux</li>
        </ul>
        </div>
      <div className="slide-div2">
        <img className="slidesOne" src={ ff7login }  />
        <img className="slidesOne" src={ ff7menu } />
        <img className="slidesOne" src={ ff7 }  />
        <h1 className="title-header">FF7 Resu-Maker</h1>
        <ul className="list-tech">
            <li>React</li>
            <li>Redux</li>
        </ul>
        </div>
      </div>
      
    );
  }
}

export default Work;
