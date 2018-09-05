import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import ShowCard from "../components/ShowCard";

class ShowCardsContainer extends Component {
  mapShows = () => {
    let shows = this.props.shows.map(show => (
      <Grid.Column mobile={16} tablet={8} computer={4}>
        <ShowCard show={show} />
        {/* {console.log("hi mapping is working")} */}
      </Grid.Column>
    ));
    return shows;
  };

  render() {
    console.log(this.props.shows);
    // this.props.shows.forEach(show => console.log(show.media));
    return <Grid>{this.mapShows()}</Grid>;
  }
}

export default ShowCardsContainer;
