import React, { Component } from "react";

class ShowContainer extends Component {
  state = { id: 1, shows: [] };

  componentDidMount() {
    console.log("hi");
    this.handleFetch();
  }

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
    return null;
  }
}

export default ShowContainer;
