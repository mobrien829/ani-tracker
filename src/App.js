import React, { Component } from "react";
import { connect } from "react-redux";
import ShowContainer from "./containers/ShowContainer";
import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ShowContainer />
      </div>
    );
  }
}

export default App;
