import React, { Component } from "react";
import BannerImage from "../components/ShowInfoContainerComponents/BannerImage";
import MenuButton from "../components/ShowInfoContainerComponents/BannerImage";
import ShowDescription from "../components/ShowInfoContainerComponents/BannerImage";
import { connect } from "react-redux";

class ShowInfoContainer extends Component {
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <React.Fragment>
        <BannerImage />
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    show: state.selectedShow
  };
}

export default connect(mapStateToProps)(ShowInfoContainer);
