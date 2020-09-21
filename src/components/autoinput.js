import React, { useState } from "react";
import Suggestion from "./suggestion";

const AutoSearch = ({ placeholder, search, setSearch, items }) => {
  const [suggestions, setSuggestions] = useState(["Type something..."]);
  const [display, setDisplay] = useState(false);

  const onTextChange = (e) => {
    const value = e.target.value;
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      setSuggestions(items.sort().filter((v) => regex.test(v)));
    }
    setSearch(value);
  };

  const suggestionChanged = (value) => {
    if (suggestions.length > 1) {
      setSearch(value);
      setSuggestions([]);
      setDisplay(false);
    }
    setDisplay(false);
  };

  return (
    <>
      <div className="autoComplete">
        <input
          onFocus={() => setSearch("")}
          value={search}
          type="text"
          onChange={onTextChange}
          onClick={() => setDisplay(true)}
          placeholder={placeholder}
        />
        <Suggestion
          suggestions={suggestions}
          suggestionChanged={suggestionChanged}
          display={display}
        />
      </div>
    </>
  );
};

export default AutoSearch;
