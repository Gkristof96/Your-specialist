import React, { useState, useEffect } from "react";
import AutoSearch from "../../../../AutoInput";
import ProfessionBadge from "../../../../ProfessionBadge";
import axios from "axios";

const ProfessionSettings = ({ professions, user, setUser }) => {
  const [professionsData, setProfessionData] = useState(professions);
  const [profession, setProfession] = useState("");
  const [suggestion, setSuggestion] = useState([]);

  async function fetchProfessions() {
    await axios
      .get("../data/professions.json")
      .then((response) => {
        setSuggestion(response.data.professions);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    fetchProfessions();
  }, []);

  const handleSave = () => {
    setUser({ ...user, professions: professionsData });
    const sendData = () => {
      axios
        .post("url", {
          user: {
              professions: user.professions
          },
        })
        .then((response) => {
          console.log("elküldve");
        })
        .catch((error) => {
          console.log(error);
        });
    };
  };
  const handleAddProfession = () => {
    professionsData.push(profession);
  };
  return (
    <>
      <div className="profession-settings">
        <h1 className="profession-settings__title">Szakmai beállítások</h1>
        <div className="profession-container">
          {professionsData.map((data, i) => (
            <>
              <ProfessionBadge
                key={i}
                profession={data}
                professions={professionsData}
                setProfessions={setProfessionData}
                settings={true}
              />
            </>
          ))}
        </div>
        <div className="profession-input">
          <AutoSearch
            search={profession}
            setSearch={setProfession}
            items={suggestion}
            placeholder="Szakma"
            type="profession"
          />
          <button className="btn" onClick={() => handleAddProfession()}>
            Hozzáad
          </button>
        </div>

        <button className="btn" onClick={() => handleSave()}>
          Mentés
        </button>
      </div>
    </>
  );
};

export default ProfessionSettings;
