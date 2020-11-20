import React, { useState, useContext } from "react";

import InputContext from '../../contexts/inputContext'
import axios from 'axios'


const Offer = () => {
  const [city, setCity] = useState("");
  const [profession, setProfession] = useState("");
  const {cities,professions} = useContext(InputContext)

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
            <form>
              
              <input className="btn" type="submit" value="Küldés" />
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Offer;
