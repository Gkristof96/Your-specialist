import React, { useState } from "react";
import Suggestion from "../Suggestions";

const AutoSearch = ({ placeholder, search, handlechange, items, type, values, setValues }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [display, setDisplay] = useState(false);

  // input változásnál hívódik meg
  const onTextChange = (e) => {
    const value = e.target.value;
    if (value.length > 0) {
      // regex az egyezés figyelésére
      const regex = new RegExp(`^${value}`, "i");
      // elmenteni minden olyan elemet ami egyezik
      setSuggestions(items.sort().filter((v) => regex.test(v)));
    }
    handlechange(e);
  };
  // input értékének átállítása az ajánlás alapján
  const suggestionChanged = (value) => {
    if (suggestions.length > 1) {
      setValues({...values, [type]: value})
      setSuggestions([]);
      setDisplay(false);
    }
    setDisplay(false);
  };

  return (
    <>
      <div className={`autofill-input ${type}`}>
        <input
          onFocus={() => setValues({...values, [type]: ''})}
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
