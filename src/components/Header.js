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
import { setUsernameAction, setUserIdAction } from "../actions/users";

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
  componentDidMount() {
    console.log(this.props);
    this.fetchUserInfo();
  }

  fetchUserInfo() {
    const url = "http://localhost:4000/api/v1/users/";
    let authToken = localStorage.getItem("token");
    let config = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${authToken}`
      }
    };
    fetch(url, config)
      .then(res => res.json())
      .then(data => this.setReduxFromFetch(data));
  }

  // THIS FUNCTION SETS REDUX STATE AFTER WE FETCH FROM RAILS BACKEND
  setReduxFromFetch = data => {
    this.props.setUserId(data.id);
    this.props.setUsername(data.username);
  };

  handleLogOutClick = event => {
    // event.preventDefault();
    localStorage.clear();
    this.props.push("/");
  };

  handleUserClick = event => {
    this.props.push(`/user/${this.props.loggedInUser}`);
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
                <Button onClick={event => this.handleLogOutClick(event)}>
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

function mapDispatchToProps(dispatch) {
  return {
    setUserId: data => {
      dispatch(setUserIdAction(data));
    },
    setUsername: data => {
      dispatch(setUsernameAction(data));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DesktopContainer);
