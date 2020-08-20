import React from "react";
import PropTypes from "prop-types";

import "../styles/SearchInput.css";

export default function SearchInput({ textChange }) {
  const handleChange = (event) => {
    textChange(event);
  };

  return (
    <div className="component-search-input">
      <input onChange={handleChange} />
    </div>
  );
}

SearchInput.propTypes = {
  textChange: PropTypes.func,
};
