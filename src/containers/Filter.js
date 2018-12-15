import FilterOption from "../components/FilterOption";
import React, { Component } from "react";
import genres from "../data/genres";
import { Button } from "semantic-ui-react";
import { connect } from "react-redux";
import {
  selectGenreAction,
  changeShowsByGenreAction,
  addShowsAction
} from "../actions/shows";

class Filter extends Component {
  state = { genre: "" };
  mapOptions = () => {
    const mappedComponents = genres.map(genre => (
      <FilterOption key={genre.value} genre={genre.value} text={genre.text} />
    ));
    return mappedComponents;
  };

  handleChange = event => {
    this.setState({ genre: event.target.value }, () => {
      this.props.selectGenre(this.state.genre);
    });
  };
  handleClick = () => {
    this.props.handleFetch(1, this.props.genre);
  };

  addShows = data => {
    this.props.addShows(data);
  };

  render() {
    return (
      <React.Fragment>
        <select
          value={this.props.genre}
          onChange={event => this.handleChange(event)}
        >
          {this.mapOptions()}
        </select>
        <Button onClick={this.handleClick}>Load Shows</Button>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    genre: state.selectedGenre
  };
}

function mapDispatchToProps(dispatch) {
  return {
    selectGenre: data => {
      dispatch(selectGenreAction(data));
    },
    changeGenre: data => {
      dispatch(changeShowsByGenreAction(data));
    },
    addShows: data => {
      dispatch(addShowsAction(data));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
