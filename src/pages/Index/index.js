import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import AutoSearch from "../../components/AutoInput";

import InputContext from '../../contexts/inputContext'


const Index = () => {
  // állapotok deklarálása
  const [city, setCity] = useState("");
  const [profession, setProfession] = useState("");
  // context meghívása
  const {cities,professions} = useContext(InputContext);
  // history létrehozása
  let history = useHistory();
  // Keresést kezelő függvény
  const handleSearch = () => {
    // ha mindkét adat megvan adva átírányitjuk a providers oldalra
    if(city.length > 0 && profession.length > 0) {
      history.push(`/providerslist?city=${city}&profession=${profession}`)
    }
    // ellenkező esetben hibaüzenet
    else {
      console.log(cities)
    }
  }
  return (
    <>
      <section className="hero">
        <div className="hero__container">
          <div className="main-message">
            <h1 className="title">Hiába keresel nem találsz szakembert?</h1>
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
            search={city}
            setSearch={setCity}
            items={cities}
            placeholder="Település"
            type="city"
          />
          <AutoSearch
            search={profession}
            setSearch={setProfession}
            items={professions}
            placeholder="Szakma"
            type="profession"
          />

          <button className='btn' onClick={() => handleSearch()}>Keresés</button>
          
        </div>
      </section>
    </>
  );
};

export default Index;
