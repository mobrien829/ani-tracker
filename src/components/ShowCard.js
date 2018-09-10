import React, { Component } from "react";
import { Card, Dimmer, Image, Button } from "semantic-ui-react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { selectShowAction } from "../actions/shows";
// import "../ShowCard.css";

class ShowCard extends Component {
  handleClick = () => {
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
            <Card.Header onClick={this.handleClick}>
              {this.props.show.title.english
                ? this.props.show.title.english
                : this.props.show.title.romaji}
            </Card.Header>
            <Card.Description style={{ maxHeight: 250, overflow: "auto" }}>
              {this.sanitizeDesc(this.props.show.description)}
            </Card.Description>
            <Button className="malButton" circular color="blue" />
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
