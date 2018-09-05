import React, { Component } from "react";
import { Card, Dimmer, Image, Button } from "semantic-ui-react";

class ShowCard extends Component {
  render() {
    return (
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
          <Card.Header>
            {this.props.show.title.english
              ? this.props.show.title.english
              : this.props.show.title.romaji}
          </Card.Header>
          {/* <Card.Meta>{this.props.article.source.name}</Card.Meta> */}
          <Card.Description>{this.props.show.description}</Card.Description>
          <Button circular color="blue" />
        </Card.Content>
      </Card>
    );
  }
}

export default ShowCard;
