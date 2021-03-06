import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import ShowCard from "../components/ShowCard";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

class ShowCardsContainer extends Component {
  mapShows = () => {
    let shows = this.props.shows.map(show => (
      <Grid.Column mobile={16} tablet={8} computer={4} key={show.title.native}>
        <Route
          component={routerProps => (
            <ShowCard key={show.id} show={show} {...routerProps} />
          )}
        />
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

function mapStateToProps(state) {
  return {
    shows: state.shows
  };
}

export default connect(mapStateToProps)(ShowCardsContainer);
