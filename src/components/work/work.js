import React, { Component } from "react";
import "./work.css";
import ff7menu from "../../images/ff7 menu.png";
import ff7login from "../../images/FF7 Logi.png";
import ff7 from "../../images/FF7.png";
import map from "../../images/Map.png";
import jeremiah from "../../images/Static.png";
import mapProfile from "../../images/Map Profile.png";
import list from "../../images/List.png";
import react from "../../images/react.png";
import redux from "../../images/redux.png";
import node from "../../images/node.png";
import jwt from "../../images/JWT.png";
import css from "../../images/css.png";
import html from "../../images/html.png";
import js from "../../images/js.png";
import python from "../../images/python.png";
import gmaps from "../../images/gmaps.png";

class Work extends Component {

    componentDidMount(){
        this.carousel();
        this.carouselTwo();  
    }

    nextSlide = () => {
        this.slide1 = document.getElementById("div1");
        this.slide2 = document.getElementById("div2");
        this.slide3 = document.getElementById("div3");
              this.slide1.className = "slide-div3";
              this.slide2.className = "slide-div2";
              this.slide3.className = "slide-div1";
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
        setTimeout(this.carousel, 3000);
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
        setTimeout(this.carouselTwo, 2500);
    }
    
    render() {  
        return (
            <div id="work" className="work-container">
        <h2 className="project-header">Projects</h2>
      <div id="div1" className="slide-div1">
        <div className="slide-info">
         <div className="slide-text">
        <h2>Atlas</h2>
        <p>Atlas is a social networking app which allows current job seekers to match with recruiters in their area by simply searching through job postings in the app.</p>
        </div>
        </div>
        <img className="slides" src={ mapProfile }  />
        <img className="slides" src={ list } />
        <img className="slides" src={ map }  />
      <a   className="visited"
            target="_blank"
            rel="noopener noreferrer"
            href="https://atlas-minerva.herokuapp.com/">
        <h1 className="title-header">Atlas</h1>
        </a>
        <p className="tech-desc">Geolocation job search application.</p>
        <div className="tech-list">
        <div className="list-tech">
        <div className="work-icon-div">
        <img className="work-icon" src={react} alt="react"></img>
            <p className="tech-title1">React</p>
        </div>
        </div>
        <div className="list-tech">
        <div className="work-icon-div">
        <img className="work-icon" src={redux} alt="react"></img>
            <p className="tech-title1">Redux</p>
            </div>
        </div>
        <div className="list-tech">
        <div className="work-icon-div">
        <img className="work-icon" src={python} alt="react"></img>
            <p className="tech-title1">Python</p>
            </div>
        </div>
        <div className="list-tech">
        <div className="work-icon-div">
        <img className="work-icon" src={gmaps} alt="react"></img>
            <p className="tech-title1">Google Maps</p>
            </div>
        </div>
        </div>
        </div>
        <div id="div2" className="slide-div3">
        <a   className="visited"
            target="_blank"
            rel="noopener noreferrer"
            href="https://jeremiahsite.herokuapp.com/">
        <div className="slide-info">
         <div className="slide-text">
        <h2>Jermiah Hall DUI School</h2>
        <p>Jeremiah Hall DUI School is a static information site for DUI schooling in Tulsa, OK. </p>
        </div>
        </div>
        <img className="slides3" src={ jeremiah }  />
        <h1 className="title-header">Static Site</h1>
        </a>
        <p className="tech-desc">Static informative site for DUI schooling.</p>
        <div className="tech-list">
        <div className="list-tech">
        <div className="work-icon-div">
        <img className="work-icon" src={js} alt="react"></img>
        <p className="tech-title2">JavaScript</p>
        </div>
        </div>
        <div className="list-tech">
        <div className="work-icon-div">
        <img className="work-icon" src={html} alt="react"></img>
            <p className="tech-title2">HTML</p>
            </div>
        </div>
        <div className="list-tech">
        <div className="work-icon-div">
        <img className="work-icon" src={css} alt="react"></img>
        <p className="tech-title2">CSS</p>
        </div>
        </div>
        </div>
        </div>
      <div id="div3" className="slide-div2">
        <a   className="visited"
            target="_blank"
            rel="noopener noreferrer"
            href="https://ff7.herokuapp.com/">
        <div className="slide-info">
         <div className="slide-text">
        <h2>FF7 Resu-Maker</h2>
        <p>FF7 Resu-Maker is an application used to build out a full resume in a Final Fantasy 7 menu themed layout. </p>
        </div>
        </div>
        <img className="slidesOne" src={ ff7login }  />
        <img className="slidesOne" src={ ff7menu } />
        <img className="slidesOne" src={ ff7 }  />
        <h1 className="title-header">FF7 Resu-Maker</h1>
        </a>
        <p className="tech-desc">Final Fantasy Seven themed resume builder.</p>
        <div className="tech-list">
        <div className="list-tech">
        <div className="work-icon-div">
        <img className="work-icon" src={react} alt="react"></img>
            <p className="tech-title1">React</p>
            </div>
        </div>
        <div className="list-tech">
        <div className="work-icon-div">
        <img className="work-icon" src={redux} alt="react"></img>
            <p className="tech-title1">Redux</p>
            </div>
        </div>
        <div className="list-tech">
        <div className="work-icon-div">
        <img className="work-icon" src={node} alt="react"></img>
            <p className="tech-title1">Express</p>
            </div>
        </div>
        <div className="list-tech">
        <div className="work-icon-div">
        <img className="work-icon" src={jwt} alt="react"></img>
            <p className="tech-title1">JWT</p>
        </div>
        </div>
        </div>
        </div>
      </div>
      
    );
  }
}

export default Work;
