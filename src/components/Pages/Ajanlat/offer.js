import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import AutoSearch from "../../autoinput";
import axios from "axios";

const Offer = () => {
  const { register, handleSubmit, errors } = useForm();

  const [city, setCity] = useState("");
  const [profession, setProfession] = useState("");
  const [cities, setCities] = useState([]);
  const [professions, setProfessions] = useState([]);

  async function fetchCities() {
    const response = await fetch("data/cities.json");
    const data = await response.json();
    setCities(data.cities);
  }
  async function fetchProfessions() {
    const response = await fetch("data/professions.json");
    const data = await response.json();
    setProfessions(data.professions);
  }

  useEffect(() => {
    fetchCities();
    fetchProfessions();
  }, []);

  const onSubmit = (data) => {
    axios
      .post("url", {
        offer: {
          name: data.name,
          email: data.email,
          description: data.description,
          profession: profession,
          city: city,
        },
      })
      .then((response) => {
        console.log("elküldve", response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <section className="offer section">
        <div className="offer__container">
          <div className="offer-card">
            <h1 className="offer-card__title">Árajánlat</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                className="offer-card__input"
                type="text"
                name="name"
                ref={register({ required: "Kötekező kitölteni!" })}
              />
              {errors.name && <p>{errors.name.message}</p>}
              <input
                className="offer-card__input"
                name="email"
                type="text"
                ref={register({ required: "Kötekező kitölteni!" })}
              />
              {errors.email && <p>{errors.email.message}</p>}
              <AutoSearch
                type="city"
                search={city}
                setSearch={setCity}
                items={cities}
              />
              <AutoSearch
                type="profession"
                search={profession}
                setSearch={setProfession}
                items={professions}
              />
              <textarea
                className="offer-card__text"
                name="description"
                ref={register({ required: "Kötekező kitölteni!" })}
              />
              {errors.description && <p>{errors.description.message}</p>}
              <input className="btn" type="submit" value="Küldés" />
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Offer;
