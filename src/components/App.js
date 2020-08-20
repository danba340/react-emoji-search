import React, { useState } from "react";
import Header from "./Header";
import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";
import filterEmojis from "./filterEmojis";

const MAXRESULTS = 20;

export default function App() {
  // State for SearchResults
  const [searchResult, setSearchResult] = useState(
    filterEmojis("", MAXRESULTS)
  );

  // Handler for SearchInput change
  const handleSearchChange = (event) => {
    // Logging on text input change
    console.log("Search input value is:", event.target.value);
    // Get search result using new text input
    const newSearchResult = filterEmojis(event.target.value, MAXRESULTS);
    // Logging new state before setting it
    console.log("Setting search result state to:", newSearchResult);
    setSearchResult(newSearchResult);
  };

  return (
    <div>
      <Header />
      <SearchInput textChange={handleSearchChange} />
      <SearchResults results={searchResult} />
    </div>
  );
}
