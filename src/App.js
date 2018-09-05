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
            exact
            path="/anime"
            render={routerProps => <ShowContainer {...routerProps} />}
          />
          <Route
            path="/anime/:id"
            render={() => <ShowPage {...this.props.show} />}
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
