import React from "react";
import PropTypes from "prop-types";
import "../styles/SearchResultRow.css";

export default function SearchResultRow({ symbol, title }) {
  // Create hex that matches name on jsdelivr.net
  const codePointHex = symbol.codePointAt(0).toString(16);
  const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;

  return (
    <div
      className="component-search-result-row copy-to-clipboard"
      data-clipboard-text={symbol}
    >
      <img alt={title} src={src} />
      <div className="title">{title}</div>
      <span className="info">Click to copy</span>
    </div>
  );
}

SearchResultRow.propTypes = {
  title: PropTypes.string,
  symbol: PropTypes.string,
};
