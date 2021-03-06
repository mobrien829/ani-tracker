import React, { Component } from "react";
import { connect } from "react-redux";
import ShowContainer from "./containers/ShowContainer";
import logo from "./logo.svg";
import "./App.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import ShowPage from "./containers/ShowPage";
import AniTrackerAdapter from "./api/AniTrackerAdapter";
import LoginPage from "./components/LoginPage";
import SignUp from "./components/SignUp";
import UserPage from "./containers/UserPage";

class App extends Component {
  componentDidMount() {
    document.title = "AniTracker";
  }

  // getRandomInt = max => {
  //   let numb = Math.floor(Math.random() * Math.floor(max));
  //   return numb.toString();
  // };

  render() {
    return (
      <div className="App">
        <Router>
          {!AniTrackerAdapter.isLoggedIn() ? (
            <React.Fragment>
              <Switch>
                <Route
                  exact
                  path="/register"
                  render={routerProps => <SignUp {...routerProps} />}
                />

                <Route
                  exact
                  path="/"
                  render={routerProps => <LoginPage {...routerProps} />}
                />
              </Switch>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Switch>
                <Route
                  exact
                  path="/anime/:id"
                  render={routerProps => (
                    <ShowPage {...this.props.selectedShow} {...routerProps} />
                  )}
                />
                <Route
                  exact
                  path="/anime"
                  render={routerProps => <ShowContainer {...routerProps} />}
                />
                <Route
                  exact
                  path="/user/:username"
                  render={routerProps => <UserPage {...routerProps} />}
                ></Route>
              </Switch>
            </React.Fragment>
          )}
        </Router>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    shows: state.shows,
    selectedShow: state.selectedShow
  };
}

export default connect(mapStateToProps)(App);
