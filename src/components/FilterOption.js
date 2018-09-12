import React from "react";

const FilterOption = ({ genre, text }) => {
  return <option value={genre}>{text}</option>;
};

export default FilterOption;
