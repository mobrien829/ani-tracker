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
import SearchBar from "./SearchBar";
import { connect } from "react-redux";

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
  // componentDidMount() {
  //   console.log(this.props);
  // }
  handleClick = event => {
    // event.preventDefault();
    console.log(this.props);
    localStorage.clear();
    this.props.push("/");
  };

  handleUserClick = event => {
    console.log(event.target);
    this.props.push("/user");
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
              <Menu.Item>
                {/* <Input placeholder="Search" />
                <Button>Search</Button> */}
                <SearchBar />
              </Menu.Item>
              <Menu.Item>
                <Filter handleFetch={this.props.handleFetch} />
              </Menu.Item>
              <Menu.Item
                name="user"
                content={this.props.user}
                onClick={event => this.handleUserClick(event)}
              ></Menu.Item>
              <Menu.Item align="right">
                <Button onClick={event => this.handleClick(event)}>
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

function mapStateToProps(state) {
  return {
    user: state.loggedInUser
  };
}

export default connect(mapStateToProps)(DesktopContainer);
