import React, { Component } from "react";
import { connect } from "react-redux";
import ShowContainer from "./ShowContainer";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  // componentDidMount() {
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ShowContainer />
      </div>
    );
  }
}

export default App;
