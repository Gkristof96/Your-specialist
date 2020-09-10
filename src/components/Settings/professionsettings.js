import React from "react";
import AutoSearch from "../autoinput";
import ProfessionBadge from "../professionsbadge";

const ProfessionSettings = (props) => {
  const { professions } = props.user;
  return (
    <>
      <div className="profession-settings">
        <h1>Szakmai beállítások</h1>
        <div className="profession-container">
          {professions.map((data, i) => (
            <ProfessionBadge profession={data} />
          ))}
        </div>
        <AutoSearch />
      </div>
    </>
  );
};

export default ProfessionSettings;
