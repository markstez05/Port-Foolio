import React, { Component } from 'react';
import './App.css';
import Main from "./components/main/main"
import Landing from "./components/landing/landing"
import Nav from "./components/nav/nav";

class App extends Component {
  render() {
    return (
      <div className="App">
      <Nav />
      <Landing />
      <Main />
      </div>
    );
  }
}

export default App;
