import React from "react";

const Suggestion = (props) => {
  const { suggestions, suggestionChanged } = props;
  if (suggestions.length === 0) {
    return null;
  }
  return (
    <>
      <ul>
        {suggestions.map((item, i) => (
          <li key={i} onClick={() => suggestionChanged(item)}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Suggestion;
