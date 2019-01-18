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

class AnimeHeader extends Component {
  handleClick = event => {
    // event.preventDefault();
    // console.log(this.props);
    localStorage.clear();
    this.props.push("/");
  };

  componentDidMount() {
    console.log(this.props);
    // this.handleUsername();
  }

  // handleUsername() {
  //   const url = "http://localhost:4000/api/v1/users/";
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: localStorage.getItem("token")
  //     }
  //   };
  //   fetch(url, options)
  //     .then(resp => resp.json())
  //     .then(data => {
  //       console.log(data.username);
  //     });
  // }

  render() {
    return (
      <div>
        <Segment
          textAlign="center"
          style={{ minHeight: 300, padding: "1em 0em" }}
          vertical
        >
          <Menu secondary size="large">
            <Container>
              <Menu.Item position="left">
                <div />
              </Menu.Item>
              <Menu.Item as="a">
                <SearchBar />
              </Menu.Item>
              <Menu.Item as="a">
                <Filter handleFetch={this.props.handleFetch} />
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

function mapStateToProps(state) {
  return {
    currentUser: state.username
  };
}

export default connect(mapStateToProps)(AnimeHeader);
