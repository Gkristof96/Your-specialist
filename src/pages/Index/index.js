import React, { useState, useEffect } from "react";
import AutoSearch from "../../components/autoinput";
import { Link } from "react-router-dom";
import axios from "axios";

const Index = (props) => {
  const [city, setCity] = useState("");
  const [profession, setProfession] = useState("");
  const [cities, setCities] = useState([]);
  const [professions, setProfessions] = useState([]);

  async function fetchCities() {
    await axios
      .get("../data/cities.json")
      .then((response) => {
        setCities(response.data.cities);
      })
      .catch((error) => console.log(error));
  }
  async function fetchProfessions() {
    await axios
      .get("../data/professions.json")
      .then((response) => {
        setProfessions(response.data.professions);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    fetchCities();
    fetchProfessions();
  }, []);
  return (
    <>
      <section className="hero">
        <div className="container">
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
        <div className="container">
          <div className="search-card">
            <div className="input">
              <AutoSearch
                search={city}
                setSearch={setCity}
                items={cities}
                placeholder="Település"
              />
              <AutoSearch
                search={profession}
                setSearch={setProfession}
                items={professions}
                placeholder="Szakma"
              />
            </div>

            <Link
              to={`/providerslist?city=${city}&profession=${profession}`}
              className="btn"
            >
              Keresés
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
