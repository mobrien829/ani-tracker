import React, { Component } from "react";
import DesktopContainer from "../components/Header";
import ShowCardsContainer from "./ShowCardsContainer";
import { connect } from "react-redux";
import { addShowsAction } from "../actions/shows";

class ShowContainer extends Component {
  state = { page: 1, hasNextPage: false };

  componentDidMount() {
    this.handleFetch();
  }

  handleFetch(page) {
    let query = `query ($page: Int, $genre: String) {Page(page: $page){
      pageInfo{
        lastPage
        perPage
        currentPage
        hasNextPage
      }
      media(genre: $genre, type: ANIME) {
        id
        bannerImage
        coverImage {
          large
        }
        description(asHtml: false)
        title {
          romaji
          english
          native
        }
      }
    }
    }`;
    let variables = {
      genre: "mecha",
      page: page
    };
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
      .then(data => this.addShows(data));
  }

  addShows = data => {
    this.setState({
      hasNextPage: data.data.Page.pageInfo.hasNextPage
    });
    this.props.addShows(data);
  };

  render() {
    return (
      <React.Fragment>
        <DesktopContainer {...this.props.history} />
        {this.props.shows.length > 0 ? <ShowCardsContainer /> : null}
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    shows: state.shows
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addShows: data => {
      dispatch(addShowsAction(data));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowContainer);
