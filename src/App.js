import React, { Component } from "react";
import { connect } from "react-redux";
import ShowContainer from "./containers/ShowContainer";
import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router-dom";
import ShowPage from "./components/ShowPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <React.Fragment>
          <Route
            path="/anime/:id"
            component={routerProps => <ShowPage {...routerProps} />}
          />
          <Route
            exact
            path="/anime"
            component={routerProps => <ShowContainer {...routerProps} />}
          />
        </React.Fragment>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    shows: state.shows
  };
}

export default connect(mapStateToProps)(App);
