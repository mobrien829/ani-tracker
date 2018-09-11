import React from "react";

const FilterOption = ({ genre }) => {
  return <option value={genre}>{genre}</option>;
};

export default FilterOption;
