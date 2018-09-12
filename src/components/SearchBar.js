import React, { Component } from "react";
import { Search, Button, Input } from "semantic-ui-react";
import { connect } from "react-redux";
import { searchApiAction } from "../actions/shows";

class SearchBar extends Component {
  state = { searchTerm: "" };

  handleChange = event => {
    this.setState({ searchTerm: event.target.value }, () =>
      console.log(this.state)
    );
  };

  handleSubmit = () => {
    console.log(this.state.searchTerm);
    this.handleFetch(this.state);
  };

  handleFetch = () => {
    let query = `
    query ($search: String) {
      Page {
        pageInfo {
          currentPage
          lastPage
          hasNextPage
          perPage
        }
        media (search: $search type: ANIME) {
          id
          bannerImage
          coverImage {
              large
          }
          description(asHtml: false)
          genres
          title {
            english
            romaji
            native
          }
        }
      }
    }
    `;
    var variables = {
      search: this.state.searchTerm
      // page: this.state.pageNumber,
      // perPage: 10
    };

    var url = "https://graphql.anilist.co";
    var options = {
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
      .then(data => this.props.searchApi(data));
  };

  render() {
    return (
      <React.Fragment>
        <Input icon="search" onChange={event => this.handleChange(event)} />
        <Button onClick={() => this.handleSubmit()}>Search</Button>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    genre: state.genre
  };
}

function mapDispatchToProps(dispatch) {
  return {
    searchApi: data => {
      dispatch(searchApiAction(data));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
