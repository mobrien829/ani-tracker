import React, { Component } from "react";
import BannerImage from "../components/ShowInfoContainerComponents/BannerImage";
import MenuButton from "../components/ShowInfoContainerComponents/MenuButton";
import ShowDescription from "../components/ShowInfoContainerComponents/ShowDescription";
import { connect } from "react-redux";

class ShowInfoContainer extends Component {
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <React.Fragment>
        <BannerImage />
        <ShowDescription />
        <MenuButton history={this.props.history} />
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
