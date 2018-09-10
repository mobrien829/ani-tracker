import React, { Component } from "react";
import { connect } from "react-redux";
import { Image, Container } from "semantic-ui-react";
import { loadOneShowAction } from "../actions/shows";
import "../ShowPage.css";

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

  sanitizeDesc = string => {
    return string ? string.replace(/<br>/g, "") : null;
  };

  render() {
    // const { bannerImage, coverImage, description, title } = this.props.show;
    console.log(this.props);
    return (
      <React.Fragment>
        {this.props.show ? (
          <React.Fragment>
            <Image
              style={{ position: "absolute", zindex: 1 }}
              src={this.props.show.bannerImage}
            />
            <div
              style={{
                backgroundColor: "white",
                position: "relative",
                display: "inline"
              }}
            >
              {this.props.title.english}
            </div>
            <div
              style={{
                backgroundColor: "white",
                position: "relative",
                display: "block",
                top: "50%",
                width: "50%",
                margin: "0 auto"
              }}
            >
              {this.sanitizeDesc(this.props.description)}
            </div>
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
      dispatch(loadOneShowAction(data));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowPage);
