import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import AutoSearch from "../../components/AutoInput";
import InputContext from '../../contexts/inputContext'
import useInputs from '../../components/customHooks/useInputs'
import validate from '../../components/customHooks/validations/validateIndex'

const Index = () => {
  // állapotok deklarálása
  const [values, setValues] = useState({
    city: '',
    profession: '',
  })
  // context meghívása
  const {cities,professions} = useContext(InputContext);
  // history létrehozása
  let history = useHistory();
  // Keresést kezelő függvény
  const handleSearch = () => {
      history.push(`/providerslist?city=${values.city}&profession=${values.profession}`)
  }
  // saját horog hívása
  const { handleChange, handleSubmit } = useInputs(
    validate,
    values,
    setValues,
    handleSearch
  );
  return (
    <>
      <section className="hero">
        <div className="hero__container">
          <div className="main-message">
            <h1 className="hero-title">Hiába keresel nem találsz szakembert?</h1>
            <span className="subtitle">
              Tégy egy probát nálunk, garantáljuk hogy itt megtalálod azt mester
              akire most szükséged van
            </span>
          </div>
        </div>
      </section>
      <section className="call-to-action">
        <div className="call-to-action__container">
          <AutoSearch
            search={values.city}
            values={values}
            setValues={setValues}
            handlechange={handleChange}
            items={cities}
            placeholder="Település"
            type="city"
          />
          <AutoSearch
            search={values.profession}
            values={values}
            setValues={setValues}
            handlechange={handleChange}
            items={professions}
            placeholder="Szakma"
            type="profession"
          />
          <form onSubmit={handleSubmit}>
            <button 
              className='btn'
              type='submit'
            >
              Keresés
            </button>
          </form>
          
        </div>
      </section>
    </>
  );
};

export default Index;
