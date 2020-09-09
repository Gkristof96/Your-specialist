import React, { useState } from "react";
import Suggestion from "./suggestion";

const ValidAutoSearch = (props) => {
  const [suggestions, setSuggestions] = useState([]);

  const { name, errors, search, setSearch, items, register } = props;

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
          name={name}
          type="text"
          ref={register({ required: "Kötekező kitölteni!" })}
        />
        {errors.name && <p>{errors.name.message}</p>}
        <Suggestion
          suggestions={suggestions}
          suggestionChanged={suggestionChanged}
        />
      </div>
    </>
  );
};

export default ValidAutoSearch;
