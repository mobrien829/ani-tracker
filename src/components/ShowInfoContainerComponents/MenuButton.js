import React from "react";
import { Button } from "semantic-ui-react";
const MenuButton = props => {
  const handleClick = () => {
    props.history.push("/anime");
  };

  console.log("menu button rendered");
  return (
    <Button color="red" onClick={handleClick}>
      Back to All Shows
    </Button>
  );
};

export default MenuButton;
