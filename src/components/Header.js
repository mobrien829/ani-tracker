import React, { Component } from "react";
import {
  Button,
  Container,
  Header,
  Menu,
  Segment,
  Input
} from "semantic-ui-react";
import Filter from "../containers/Filter";

const HomepageHeading = () => (
  <Container text>
    <Header
      as="h1"
      content=""
      style={{
        fontSize: "3em",
        fontWeight: "normal",
        marginTop: "2em"
      }}
    />
    <Header
      as="h2"
      content=""
      style={{
        fontSize: "1.7em",
        fontWeight: "normal",
        marginTop: "1.5em"
      }}
    />
  </Container>
);

class DesktopContainer extends Component {
  handleClick = event => {
    // event.preventDefault();
    console.log(this.props);
    localStorage.clear();
    this.props.push("/");
  };

  render() {
    return (
      <div>
        <Segment
          textAlign="center"
          style={{ minHeight: 300, padding: "1em 0em" }}
          vertical
        >
          <Menu fixed secondary size="large">
            <Container>
              <Menu.Item as="a">
                <Input placeholder="Search" />
                <Button>Search</Button>
              </Menu.Item>
              <Menu.Item as="a">
                <Filter />
              </Menu.Item>
              <Menu.Item position="right">
                <Button as="a" onClick={event => this.handleClick(event)}>
                  Log Out
                </Button>
              </Menu.Item>
            </Container>
          </Menu>
          <HomepageHeading />
        </Segment>
      </div>
    );
  }
}

export default DesktopContainer;
