import React, { Component } from "react";
import { connect } from "react-redux";

class UserPage extends Component {
  componentDidMount() {
    console.log("user page mounted");
    console.log(this.props);
  }
  render() {
    return (
      <React.Fragment>
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
