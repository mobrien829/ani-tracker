import React, { Component } from "react";
import DesktopContainer from "../components/Header";
import ShowCardsContainer from "./ShowCardsContainer";
import { connect } from "react-redux";

class ShowContainer extends Component {
  state = { id: 1, shows: [], page: 1, hasNextPage: false };

  componentDidMount() {
    this.handleFetch(this.state.page);
  }

  // componentDidUpdate() {
  //   this.state.hasNextPage
  //     ? this.setState(
  //         { page: this.state.page + 1, hasNextPage: false },
  //         this.handleFetch(this.state.page)
  //       )
  //     : null;
  // }

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
      .then(data =>
        this.setState(
          {
            shows: [...this.state.shows, ...data.data.Page.media],
            hasNextPage: data.data.Page.pageInfo.hasNextPage
          },
          () => console.log(this.state)
        )
      );
  }

  testLogData = () => {
    return this.state.shows.forEach(show =>
      console.log(show.media.description)
    );
  };

  render() {
    // this.testLogData();
    // this.checkNextPage();
    return (
      <React.Fragment>
        <DesktopContainer />
        {this.state.shows.length > 0 ? (
          <ShowCardsContainer shows={this.state.shows} />
        ) : null}
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    shows: state.shows
  };
}

export default connect(mapStateToProps)(ShowContainer);
