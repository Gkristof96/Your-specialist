import React, { useState, useEffect } from "react";
import AutoSearch from "../../components/autoinput";
import { Link } from "react-router-dom";

const Index = () => {
  const [city, setCity] = useState("");
  const [profession, setProfession] = useState("");
  const [cities, setCities] = useState([]);
  const [professions, setProfessions] = useState([]);

  const urlCities = "data/cities.json";
  const urlProfessions = "data/professions.json";

  async function fetchCities() {
    const response = await fetch(urlCities);
    const data = await response.json();
    setCities(data.cities);
  }

  async function fetchProfessions() {
    const response = await fetch(urlProfessions);
    const data = await response.json();
    setProfessions(data.professions);
  }

  useEffect(() => {
    fetchCities();
    fetchProfessions();
  }, []);
  return (
    <>
      <section className="index">
        <div className="hero">
          <h1 className="title">Hiába keresel nem találsz szakembert?</h1>
          <span className="subtitle">
            Tégy egy probát nálunk, garantáljuk hogy itt megtalálod azt mester
            akire most szükséged van
          </span>
        </div>
        <div className="cta">
          <AutoSearch search={city} setSearch={setCity} items={cities} />
          <AutoSearch
            search={profession}
            setSearch={setProfession}
            items={professions}
          />
          <Link
            to={`/providerslist?city=${city}&profession=${profession}`}
            className="btn"
          >
            Keresés
          </Link>
        </div>
      </section>
    </>
  );
};

export default Index;
