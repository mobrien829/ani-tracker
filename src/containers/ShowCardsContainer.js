import React, { Component } from "react";

class ShowCardsContainer extends Component {
  render() {
    this.props.shows.forEach(show => console.log(show.Media));
    return null;
  }
}

export default ShowCardsContainer;
