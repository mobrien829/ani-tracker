import React, { Component } from "react";
import { connect } from "react-redux";

class UserPage extends Component {
  componentDidMount() {
    console.log("user page mounted");
    console.log(this.props);
  }
  render() {
    return null;
  }
}

function mapStateToProps(state) {
  return {
    userId: state.userId,
    username: state.loggedInUser
  };
}

export default connect(mapStateToProps)(UserPage);
