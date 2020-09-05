import React, { useState } from "react";
import Suggestion from "./suggestion";

const AutoSearch = (props) => {
  const [suggestions, setSuggestions] = useState([]);

  const { search, setSearch, items } = props;

  const onTextChange = (e) => {
    const value = e.target.value;
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      setSuggestions(items.sort().filter((v) => regex.test(v)));
    }
    setSearch(value);
  };

  const suggestionChanged = (value) => {
    setSearch(value);
    setSuggestions([]);
  };
  return (
    <>
      <div className="autoComplete">
        <input
          onFocus={() => setSearch("")}
          value={search}
          type="text"
          onChange={onTextChange}
        />
        <Suggestion
          suggestions={suggestions}
          suggestionChanged={suggestionChanged}
        />
      </div>
    </>
  );
};

export default AutoSearch;
