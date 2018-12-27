import React from "react";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react";

const ShowDescription = props => {
  console.log(props.show.description);
  return (
    <div>
      <p>{sanitizeDesc(props.show.description)}</p>
    </div>
  );
};

const sanitizeDesc = string => {
  return string ? string.replace(/<br>/g, "") : null;
};

function mapStateToProps(state) {
  return {
    show: state.selectedShow
  };
}

export default connect(mapStateToProps)(ShowDescription);
