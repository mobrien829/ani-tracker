import React, { Component } from "react";
import { Card, Dimmer, Image, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { selectShowAction } from "../actions/shows";
import { saveShowClicker, saveUserShow } from "../utils/save_show";
// import "../ShowCard.css";

class ShowCard extends Component {
  handleShowClick = () => {
    this.props.history.push(`/anime/${this.props.show.id}`);
    console.log(this.props.show.id);
    this.props.selectShow(this.props.show.id);
  };

  sanitizeDesc = string => {
    return string ? string.replace(/<br>/g, "") : null;
  };

  render() {
    return (
      <React.Fragment>
        <Card>
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
              className="saveButton"
              circular
              color="green"
              onClick={event =>
                saveShowClicker(this.props.show, this.props.userId)
              }
            >
              Save
            </Button>
          </Card.Content>
        </Card>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedShow: state.selectedShow,
    userId: state.userId
  };
}

function mapDispatchToProps(dispatch) {
  return {
    selectShow: data => {
      dispatch(selectShowAction(data));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowCard);
