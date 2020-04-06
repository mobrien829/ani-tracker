import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu, Image, Button, Container, Label } from "semantic-ui-react";
import SideBar from "../components/SideBar";
import Biography from "../components/Biography";
import UserShows from "./UserShows";
// import "../Menu.css";

class UserPage extends Component {
  state = { activeItem: "profile" };
  componentDidMount() {
    console.log(this.props);
  }

  handleItemClick = (event, { name }) =>
    this.setState({ activeItem: name }, console.log(this.state));

  render() {
    const { activeItem } = this.state;
    return (
      <React.Fragment>
        {/* maybe try to store the menu semantic within a div then custom css the div */}
        <p>{this.props.username}</p>
        <div className="menuHolder">
          <SideBar />
          <Biography {...this.props.bio} />
        </div>
        <UserShows />
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    userId: state.userId,
    username: state.loggedInUser
  };
}

export default connect(mapStateToProps)(UserPage);
