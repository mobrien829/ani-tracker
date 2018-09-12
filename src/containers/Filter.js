import FilterOption from "../components/FilterOption";
import React, { Component } from "react";
import genres from "../data/genres";
import { Dropdown } from "semantic-ui-react";
import { connect } from "react-redux";
import { selectGenreAction } from "../actions/shows";

class Filter extends Component {
  //   state = { genre: "" };
  mapOptions = () => {
    const mappedComponents = genres.map(genre => (
      <FilterOption key={genre} genre={genre.value} text={genre.text} />
    ));
    return mappedComponents;
  };

  handleChange = event => {
    console.log(event.target.value);
    this.props.selectGenre(event.target.value);
    this.props.handleFetch();
  };

  render() {
    return (
      //   <Dropdown
      //     search
      //     selection
      //     options={genres}
      //     placeholder="Select genre"
      //     // value={this.props.value}
      //     onChange={event => this.handleChange(event)}
      //   />
      <select
        value={this.props.genre}
        onChange={event => this.handleChange(event)}
      >
        {this.mapOptions()}
      </select>
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
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
