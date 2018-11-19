import React, { Component } from "react";
import { connect } from "react-redux";
import ShowContainer from "./containers/ShowContainer";
import logo from "./logo.svg";
import "./App.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import ShowPage from "./components/ShowPage";
import AniTrackerAdapter from "./api/AniTrackerAdapter";
import LoginPage from "./components/LoginPage";
import SignUp from "./components/SignUp";

class App extends Component {
  componentDidMount() {
    document.title = "AniTracker";
  }

  render() {
    return (
      <div className="App">
        {/* comment in the ! for logged in status later */}
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
                  component={routerProps => (
                    <ShowPage {...this.props.selectedShow} {...routerProps} />
                  )}
                />
                <Route
                  exact
                  path="/anime"
                  render={routerProps => <ShowContainer {...routerProps} />}
                />
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
