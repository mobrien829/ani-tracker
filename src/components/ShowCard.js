import React, { Component } from "react";
import { Card, Dimmer, Image, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { selectShowAction } from "../actions/shows";

class ShowCard extends Component {
  handleShowClick = () => {
    this.props.history.push(`/anime/${this.props.show.id}`);
    console.log(this.props.show.id);
    this.props.selectShow(this.props.show.id);
  };

  sanitizeGenres = string => {
    return string.join(", ");
  };

  handleSaveClick = () => {
    // console.log(this.props);

    const data = {
      title: this.props.show.title.english,
      malId: this.props.show.id,
      description: this.props.show.description,
      coverImgString: this.props.show.coverImage.large,
      bannerImgString: this.props.show.bannerImage,
      genres: this.sanitizeGenres(this.props.show.genres)
    };
    // console.log(data);

    const settings = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: localStorage.getItem("token")
      },
      body: JSON.stringify(data)
    };
    console.log(settings);

    fetch("http://localhost:4000/api/v1/shows", settings)
      .then(res => res.json())
      .then(data => console.log(data));
  };

  sanitizeDesc = string => {
    return string ? string.replace(/<br>/g, "") : null;
  };

  render() {
    return (
      <React.Fragment>
        <Card
          style={{ boxShadow: "none" }}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          <Dimmer.Dimmable
            as={Image}
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
            size="large"
            src={this.props.show.coverImage.large}
            style={{ maxHeight: 300 }}
          />
          <Card.Content>
            <Card.Header
              onClick={this.handleShowClick}
              style={{ maxHeight: 25, overflow: "auto" }}
            >
              {this.props.show.title.english
                ? this.props.show.title.english
                : this.props.show.title.romaji}
            </Card.Header>
            <Card.Description
              style={{ minHeight: 250, maxHeight: 250, overflow: "auto" }}
            >
              {this.sanitizeDesc(this.props.show.description)}
            </Card.Description>
            <Button
              className="malButton"
              circular
              color="blue"
              onClick={this.handleShowClick}
            >
              Show Page
            </Button>
            <Button
              onClick={this.handleSaveClick}
              className="saveButton"
              circular
              color="green"
            >
              Add to List
            </Button>
          </Card.Content>
        </Card>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedShow: state.selectedShow
  };
}

function mapDispatchToProps(dispatch) {
  return {
    selectShow: data => {
      dispatch(selectShowAction(data));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowCard);
