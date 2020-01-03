import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu, Image, Button, Container, Label } from "semantic-ui-react";

class SideBar extends Component {
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
        <Menu vertical className="fixed left">
          <Menu.Item
            name="profile"
            active={activeItem === "profile"}
            onClick={this.handleItemClick}
          >
            Profile
          </Menu.Item>
          <Menu.Item
            name="shows"
            active={activeItem === "shows"}
            onClick={this.handleItemClick}
          >
            Shows
          </Menu.Item>
          <Menu.Item
            name="friends"
            active={activeItem === "friends"}
            onClick={this.handleItemClick}
          >
            Friends
          </Menu.Item>
        </Menu>
        <div>
          <p>{this.props.username}</p>
        </div>
      </React.Fragment>
    );
  }
}

export default SideBar;
