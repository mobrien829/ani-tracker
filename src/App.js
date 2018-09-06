import React, { Component } from "react";
import { connect } from "react-redux";
import ShowContainer from "./containers/ShowContainer";
import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import ShowPage from "./components/ShowPage";
import AniTrackerAdapter from "./api/AniTrackerAdapter";
import LoginPage from "./components/LoginPage";
import SignUp from "./components/SignUp";
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* {
            !BookmarkAdapter.isLoggedIn() ?
              <React.Fragment>
                <Route exact path="/" render={(routerProps) => <LoginPage {...routerProps}/>} />

                <Route exact path="/register" render={(routerProps) => <SignUp {...routerProps}/>} />
              </React.Fragment>

              :
              <React.Fragment>
                <Route exact path="/news" render={(routerProps) => <GoogleNews {...routerProps}/>} />

                <Route exact path="/mybookmarks" render={(routerProps) => <BookmarksCollection {...routerProps}/>} />
              </React.Fragment>
        } */}
        <Router>
          {!AniTrackerAdapter.isLoggedIn() ? (
            <React.Fragment>
              <Switch>
                <Route
                  exact
                  path="/register"
                  component={routerProps => <SignUp {...routerProps} />}
                />

                <Route
                  exact
                  path="/"
                  component={routerProps => <LoginPage {...routerProps} />}
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
