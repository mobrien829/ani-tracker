import React, { Component } from "react";
import { Container } from "semantic-ui-react";

class Biography extends Component {
  render() {
    return <Container>{this.props.bio}</Container>;
  }
}

export default Biography;

// below is functional component using hooks

// import React, { useState, useEffect } from "react";
// import { Container } from "semantic-ui-react";
// import axios from "axios";

// function Biography() {
//   const [data, setData] = useState();
//   useEffect(async () => {
//     const result = await axios("localhost:4000/api/v1/user");
//   });

//   return (
//     <Container>this is blah's bio. he likes harem and mecha anime</Container>
//   );
// }

// export default Biography;
