import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Clipboard from "clipboard";

import SearchResultRow from "./SearchResultRow";

import "../styles/SearchResults.css";

export default function SearchResults({ results }) {
  useEffect(() => {
    // Runs on mount due to empty dependency array []
    console.log("SearchResults mounted");
    const clipboard = new Clipboard(".copy-to-clipboard");
    return () => {
      // Runs on unmount to clean up clipboard instance
      clipboard.destroy();
    };
  }, []);

  return (
    <div className="component-search-results">
      {results.length ? (
        results.map((result) => (
          <SearchResultRow
            key={result.title}
            symbol={result.symbol}
            title={result.title}
          />
        ))
      ) : (
        <div className="no-results">No results</div>
      )}
    </div>
  );
}

SearchResults.propTypes = {
  resutls: PropTypes.array,
};
