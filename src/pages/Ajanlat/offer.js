import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import AutoSearch from "../../components/autoinput";
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
        offe: {
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
      <section className="offer">
        <div className="offer__card">
          <h1>Árajánlat</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-group">
              <label>Név</label>
              <input
                type="text"
                name="name"
                ref={register({ required: "Kötekező kitölteni!" })}
              />
              {errors.name && <p>{errors.name.message}</p>}
            </div>
            <div className="input-group">
              <label>Email cím</label>
              <input
                name="email"
                type="text"
                ref={register({ required: "Kötekező kitölteni!" })}
              />
              {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div className="input-group">
              <label>Település</label>
              <AutoSearch search={city} setSearch={setCity} items={cities} />
            </div>
            <div className="input-group">
              <label>Szakma</label>
              <AutoSearch
                search={profession}
                setSearch={setProfession}
                items={professions}
              />
            </div>
            <div className="input-group">
              <label>Munka leírás</label>
              <textarea
                name="description"
                ref={register({ required: "Kötekező kitölteni!" })}
              />
              {errors.description && <p>{errors.description.message}</p>}
            </div>
            <input type="submit" value="Küldés" />
          </form>
        </div>
      </section>
    </>
  );
};

export default Offer;
