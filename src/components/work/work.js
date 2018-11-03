import React, { Component } from "react";
import "./work.css";
import ff7menu from "../../images/ff7 menu.png"
import ff7login from "../../images/FF7 Logi.png"
import ff7 from "../../images/FF7.png"

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
        setTimeout(this.carousel, 3500);
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
        setTimeout(this.carouselTwo, 3500);
    }

    render() {  
    return (
      <div id="work" className="work-container">
        <h2>FF7 Resu-Maker</h2>
      <div className="slide-div">
        <img className="slides" src={ ff7login }  />
        <img className="slides" src={ ff7menu } />
        <img className="slides" src={ ff7 }  />
        </div>
      <div className="slide-div">
        <img className="slidesOne" src={ ff7login }  />
        <img className="slidesOne" src={ ff7menu } />
        <img className="slidesOne" src={ ff7 }  />
        </div>
      </div>
      
    );
  }
}

export default Work;
