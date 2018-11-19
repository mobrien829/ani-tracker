import React, { Component } from "react";
import { connect } from "react-redux";
import { Image, Container, Button } from "semantic-ui-react";
import { loadOneShowAction, clearSelectedShowAction } from "../actions/shows";
import "../ShowPage.css";

class ShowPage extends Component {
  componentDidMount() {
    console.log(document.title);
    this.props.show ? null : this.handleFetch();
  }

  handleClick() {
    console.log("button was clicked");
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
        genres
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
      .then(data => {
        document.title = `${data.data.Media.title.english} - AniTracker`;
        this.props.addShow(data);
      });
  }

  sanitizeDesc = string => {
    return string ? string.replace(/<br>/g, "") : null;
  };

  render() {
    // const { bannerImage, coverImage, description, title } = this.props.show;
    // console.log(this.props);
    return (
      <React.Fragment>
        {this.props.show ? (
          <React.Fragment>
            <div>
              <img
                // style={{ position: "absolute"}}
                src={this.props.show.bannerImage}
                alt=""
              />
              <div
                style={{
                  backgroundColor: "white",
                  position: "relative",
                  display: "inline"
                }}
              >
                <h1>
                  {this.props.title.english
                    ? this.props.title.english
                    : this.props.title.romaji}
                </h1>
              </div>
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
              <br />
              <Button circular color="red" onClick={this.handleClick}>
                Go Back
              </Button>
              <Button circular color="green" onClick={this.handleClick}>
                Save to my list
              </Button>
            </div>

            {/* <Container
                text
                style={{ position: "relative", display: "inline", zindex: 2 }}
              >
                {this.props.title.english
                  ? this.props.title.english
                  : this.props.title.romaji}
              </Container> */}
            {/* <Container text>
              {this.sanitizeDesc(this.props.description)}
            </Container> */}
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
    },
    clearShow: data => {
      dispatch(clearSelectedShowAction(data));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowPage);
