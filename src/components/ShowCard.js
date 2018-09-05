import React, { Component } from "react";
import { Card, Dimmer, Image, Button } from "semantic-ui-react";
import { Route } from "react-router-dom";
import ShowPage from "./ShowPage";
import { connect } from "react-redux";

class ShowCard extends Component {
  handleClick = () => {
    this.props.history.push(`/anime/${this.props.show.id}`);
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
              {this.props.show.description}
            </Card.Description>
            <Button className="malButton" circular color="blue" />
          </Card.Content>
        </Card>
      </React.Fragment>
    );
  }
}

export default connect()(ShowCard);
