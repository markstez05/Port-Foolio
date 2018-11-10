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
        setTimeout(this.carouselTwo, 3000);
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
        <img className="work-icon" src={react} alt="react"></img>
            <p>Redux</p>
        </div>
        <div className="list-tech">
        <img className="work-icon" src={react} alt="react"></img>
            <p>Django</p>
        </div>
        <div className="list-tech">
        <img className="work-icon" src={react} alt="react"></img>
            <p>React-Maps</p>
        </div>
        <div className="list-tech">
        <img className="work-icon" src={react} alt="react"></img>
            <p>JWT</p>
        </div>
        </div>
        </div>
        <a   className="visited"
            target="_blank"
            rel="noopener noreferrer"
            href="https://jeremiahsite.herokuapp.com/">
        <div className="slide-div3">
        <img className="slides3" src={ jeremiah }  />
        <h1 className="title-header">Static Site</h1>
        <div className="tech-list">
        <div className="list-tech">
            <img className="work-icon" src={react} alt="react"></img>
            <p>React</p>
        </div>
        <div className="list-tech">
        <img className="work-icon" src={react} alt="react"></img>
        </div>
        <div className="list-tech">
        <img className="work-icon" src={react} alt="react"></img>
            <p></p>
        </div>
        <div className="list-tech">
        <img className="work-icon" src={react} alt="react"></img>
        </div>
        </div>
        </div>
        </a>
      <div className="slide-div2">
        <img className="slidesOne" src={ ff7login }  />
        <img className="slidesOne" src={ ff7menu } />
        <img className="slidesOne" src={ ff7 }  />
        <h1 className="title-header">FF7 Resu-Maker</h1>
        <div className="tech-list">
        <div className="list-tech">
        <img className="work-icon" src={react} alt="react"></img>
            <p>React</p>
        </div>
        <div className="list-tech">
        <img className="work-icon" src={redux} alt="react"></img>
            <p>Redux</p>
        </div>
        <div className="list-tech">
        <img className="work-icon" src={node} alt="react"></img>
            <p>Express</p>
        </div>
        <div className="list-tech">
        <img className="work-icon" src={react} alt="react"></img>
            <p>Mongoose</p>
        </div>
        </div>
        </div>
      </div>
      
    );
  }
}

export default Work;
