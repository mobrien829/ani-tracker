import React from "react";
import { connect } from "react-redux";

const BannerImage = props => {
  console.log(props.show.bannerImage);
  return <img src={props.show.bannerImage} alt="" />;
};

function mapStateToProps(state) {
  return {
    show: state.selectedShow
  };
}

export default connect(mapStateToProps)(BannerImage);
