import React, { Component } from "react";
import { connect } from "react-redux";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.handleFetch();
  }

  state = { id: 1, shows: [] };

  handleFetch() {
    let query = `query ($id: Int){Media (id: $id, type: ANIME){
      id
      description(asHtml: false)
      title {
        romaji
        english
        native
      }
  }
  }`;
    let variables = { id: this.state.id };
    const url = "https://graphql.anilist.co";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        query: query,
        variables: variables
      })
    };
    fetch(url, options)
      .then(response => response.json())
      .then(data =>
        this.setState({ shows: [...this.state.shows, data] }, () =>
          console.log(data.data)
        )
      );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
