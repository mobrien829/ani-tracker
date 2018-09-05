import React, { Component } from "react";
import { connect } from "react-redux";
class ShowPage extends Component {
  render() {
    console.log(this.props);
    return null;
  }
}

export default connect()(ShowPage);
