import React, { useState } from "react";
import AutoSearch from "../autoinput";
import ProfessionBadge from "../professionsbadge";

const ProfessionSettings = ({ professions, user, setUser }) => {
  const [professionsData, setProfessions] = useState(professions);
  const handleSave = () => {
    setUser({ ...user, professions: professionsData });
  };
  return (
    <>
      <div className="profession-settings">
        <h1>Szakmai beállítások</h1>
        <div className="profession-container">
          {professionsData.map((data, i) => (
            <>
              <ProfessionBadge
                key={i}
                profession={data}
                professions={professionsData}
                setProfessions={setProfessions}
                settings={true}
              />
            </>
          ))}
        </div>
        <AutoSearch />
        <button onClick={() => handleSave()}>Mentés</button>
      </div>
    </>
  );
};

export default ProfessionSettings;
