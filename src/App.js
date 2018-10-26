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
      <Nav />
      <Route exact path="/" component={Landing} />
      <Route path="/about" component={Main} />
      <Main />
      </div>
      </Router>
    );
  }
}

export default App;
