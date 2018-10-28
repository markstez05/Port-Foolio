import React, { Component } from 'react';
import './App.css';
import Main from "./components/main/main"
import Landing from "./components/landing/landing"
import Nav from "./components/nav/nav";
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
      <Main />
      <Route exact path="/" component={Landing} />
      </div>
      </Router>
    );
  }
}

export default App;
