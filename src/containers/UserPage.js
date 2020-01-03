import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu, Image, Button, Container, Label } from "semantic-ui-react";
import SideBar from "../components/SideBar";

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
        <SideBar />
        <div>
          <p>{this.props.username}</p>
        </div>
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
