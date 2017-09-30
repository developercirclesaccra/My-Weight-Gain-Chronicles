import React, { Component } from "react";
import Foods from "./components/Foods";
import Jumbotron from "./components/Jumbotron";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Jumbotron />
        <Foods />
      </div>
    );
  }
}

export default App;
