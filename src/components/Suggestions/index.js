import React from "react";

const Suggestion = ({ suggestions, suggestionChanged, display }) => {
  return (
    <>
      {display ? (
        <ul>
          {suggestions.map((item, i) => (
            <li key={i} onClick={() => suggestionChanged(item)}>
              {item}
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
};

export default Suggestion;