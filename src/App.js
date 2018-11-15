import React, { Component } from 'react';
import './App.css';
import Main from "./components/main/main"
import Landing from "./components/landing/landing"
import Nav from "./components/nav/nav";
import Work from "./components/work/work";
import Resume from "./components/resume/resume";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <div  id="spinBig" className="spinner"></div>
      <div id="spinSmall" className="spinner1"></div>
      <Nav />
      <Route  component={Main} />
      <Route  component={Landing} />
      <Route component={Resume} />
      <Route  component={Work} />
      </div>
      </Router>
    );
  }
}

export default App;
