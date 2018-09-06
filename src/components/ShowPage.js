import React, { Component } from "react";
import { connect } from "react-redux";
import { Image } from "semantic-ui-react";
import { addOneShowAction } from "../actions/shows";

class ShowPage extends Component {
  componentDidMount() {
    this.props.show ? null : this.handleFetch();
  }
  handleFetch() {
    let id = parseInt(
      this.props.location.pathname
        .split("")
        .slice(7)
        .join("")
    );

    let query = `query ($id: Int) {Media(id: $id, type: ANIME) {
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
    `;

    let variables = {
      id: id
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
      .then(data => this.props.addShow(data));
  }

  render() {
    // const { bannerImage, coverImage, description, title } = this.props.show;
    console.log(this.props);
    return (
      <React.Fragment>
        {this.props.show ? (
          <React.Fragment>
            <Image
              style={{ display: "background" }}
              src={this.props.show.bannerImage}
            />
            <div style={{ display: "inline" }}>Hello</div>
          </React.Fragment>
        ) : null}
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    show: state.selectedShow
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addShow: data => {
      dispatch(addOneShowAction(data));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowPage);
