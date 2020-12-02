import React, { useState, useContext } from "react";
import axios from "axios";
import AutoSearch from "../../../../AutoInput";
import ProfessionBadge from "../../../../ProfessionBadge";
import InputContext from '../../../../../contexts/inputContext'
import useInputs from '../../../../customHooks/useInputs'
import validate from '../../../../customHooks/validations/validateProfession'

const ProfessionSettings = ({ professionList, user, setUser }) => {
  const [professionsData, setProfessionData] = useState(professionList);
  const [values, setValues] = useState({
    profession: ''
  });
  const {professions} = useContext(InputContext)

  const saveData = () => {
    setUser({ ...user, professions: professionsData });
    axios
      .post("url", {
        professions: user.professions,
        })
        .then((response) => {
          console.log("elküldve");
        })
        .catch((error) => {
          console.log(error);
        });
  };

  const handleAddProfession = () => {
    professionsData.push(values.profession);
  };
  const { handleChange, handleSubmit } = useInputs(
    validate,
    values,
    setValues,
    saveData
  );
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
              search={values.profession}
              values={values}
              setValues={setValues}
              handlechange={handleChange}
              items={professions}
              placeholder="Szakma"
              type="profession"
            />
          <button className="btn" onClick={() => handleAddProfession()}>
            Hozzáad
          </button>
        </div>
        
        <form onSubmit={handleSubmit}>
            <button 
              className='btn'
              type='submit'
            >
              Mentés
            </button>
          </form>
      </div>
    </>
  );
};

export default ProfessionSettings;
