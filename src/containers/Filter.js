import FilterOption from "../components/FilterOption";
import React, { Component } from "react";
import genres from "../data/genres";
import { Dropdown } from "semantic-ui-react";

class Filter extends Component {
  mapOptions = () => {
    const mappedComponents = genres.map(genre => (
      <FilterOption key={genre} genre={genre} />
    ));
    return mappedComponents;
  };

  render() {
    return (
      //   <select value={this.props.selectedGenre}>{this.mapOptions()}</select>
      <Dropdown search selection options={genres} placeholder="Select genre" />
    );
  }
}

export default Filter;
