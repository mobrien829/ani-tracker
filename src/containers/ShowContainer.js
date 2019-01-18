import React, { Component } from "react";
import AnimeHeader from "../components/Header";
import ShowCardsContainer from "./ShowCardsContainer";
import { connect } from "react-redux";
import { addShowsAction } from "../actions/shows";
import { logInActionId } from "../actions/users";

class ShowContainer extends Component {
  state = { page: 1, hasNextPage: false };

  componentDidMount() {
    this.handleLogIn();
    // this.handleUsername();
    this.handleFetch();
  }

  componentDidUpdate() {
    // console.log(this.props.genre);
    // below code is for loading multiple pages. Doesn't currently work, and no plans to update due to the ability to search.
    // this.state.hasNextPage
    //   ? this.setState(
    //       { page: this.state.page + 1, hasNextPage: false },
    //       this.handleFetch(this.state.page)
    //     )
    //   : null;
  }

  // handleUsername() {
  //   console.log("hi");
  //   const url = "http://localhost:4000/api/v1/users/";
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: localStorage.getItem("token")
  //     }
  //   };
  //   fetch(url, options)
  //     .then(resp => resp.json())
  //     // .then(data => console.log(data.username));
  //     .then(data => this.props.setInfo(data.username));
  // }

  // function sets user ID in redux for use in other pages
  handleLogIn() {
    const url = "http://localhost:4000/api/v1/users/";
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token")
      }
    };
    fetch(url, options)
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        this.props.setLogIn(data);
      });
  }

  handleFetch(page, genre = "action") {
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
        genres
        title {
          romaji
          english
          native
        }
      }
    }
    }`;
    let variables = {
      genre: genre,
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
      // .then(data => this.uniqueShowsHelper(data))
      // .then(array => {
      //   console.log(this);
      // this.addShows(array);
      .then(data => this.addShows(data));
  }

  // uniqueShowsHelper = shows => {
  //   return shows.map(show => (this.props.shows.include(show) ? show : null));
  // };

  addShows = data => {
    this.setState({
      hasNextPage: data.data.Page.pageInfo.hasNextPage
    });
    this.props.addShows(data);
  };

  render() {
    return (
      <React.Fragment>
        <AnimeHeader {...this.props.history} handleFetch={this.handleFetch} />
        {this.props.shows.length > 0 ? (
          <ShowCardsContainer {...this.props.routerProps} />
        ) : null}
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    shows: state.shows,
    genre: state.selectedGenre,
    userId: state.userId
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addShows: data => {
      dispatch(addShowsAction(data));
    },
    setLogIn: data => {
      dispatch(logInActionId(data));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowContainer);
