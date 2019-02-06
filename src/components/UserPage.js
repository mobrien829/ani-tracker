import React, { Component } from "react";
import { connect } from "react-redux";

class UserPage extends Component {
  // componentDidUpdate() {
  //   // fetches user info if this page is directly loaded
  //   // console.log(this.props);
  //   this.props.user ? null : this.handleFetch();
  // }

  handleFetch() {
    const url = "http://localhost:4000/api/v1/users";
    const id = parseInt(
      this.props.location.pathname
        .split("")
        .slice(7)
        .join("")
    );

    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: localStorage.getItem("token")
      }
    };
    fetch(url, options)
      .then(resp => resp.json())
      .then(data => console.log(data));
  }
  render() {
    return <div>{/* <h1>{this.props.user}</h1> */}</div>;
  }
}

function mapStateToProps(state) {
  return {
    user: state.username
  };
}

function mapDispatchToProps(dispatch) {
  return null;
}

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(UserPage);
