import React, { Component } from "react";
import { connect } from "react-redux";
class ShowPage extends Component {
  render() {
    console.log(this.props);
    return <div> hello </div>;
  }
}

function mapStateToProps(state) {
  return {
    show: state.selectedShow
  };
}

export default connect(mapStateToProps)(ShowPage);
