import React, { useState, useContext } from "react";

import InputField from '../../components/InputField'
import TextField from '../../components/TextField'
import AutoSearch from '../../components/AutoInput'

import validateContact from '../../components/customHooks/validations/validateContact'
import useInputs from '../../components/customHooks/useInputs'

import InputContext from '../../contexts/inputContext'
import axios from 'axios'
import {
  FaExclamationTriangle
} from "react-icons/fa";


const Offer = () => {
  const [values, setValues] = useState({
    email: '',
    name: '',
    message: ''
  });
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

  const { handleChange, handleSubmit, errors } = useInputs(
    validateContact,
    values,
    setValues
  );
  return (
    <>
      <section className="offer section">
        <div className="offer__container">
          <div className="offer-card">
            <h1 className="offer-card__title">Árajánlat</h1>
            <form className='form'>
              <InputField 
                  name='name' 
                  type='text' placeholder='Teljes Név' 
                  handleChange={handleChange} 
                  value={values.name}
                />
                {errors.name && 
                  <p className='error-message'>
                    <FaExclamationTriangle/>
                    {errors.name}
                  </p>
                }
                <AutoSearch
                  search={city}
                  setSearch={setCity}
                  items={cities}
                  placeholder="Település"
                  type="city"
                />
                <InputField 
                  name='email' 
                  type='text' placeholder='Email' 
                  handleChange={handleChange} 
                  value={values.email}
                />
                {errors.email && 
                  <p className='error-message'>
                    <FaExclamationTriangle/>
                    {errors.email}
                  </p>
                }
                <AutoSearch
                  search={profession}
                  setSearch={setProfession}
                  items={professions}
                  placeholder="Szakma"
                  type="city"
                />
                <TextField 
                  name='message' 
                  placeholder='Üzenet' 
                  handleChange={handleChange} 
                  value={values.message}
                />
                {errors.message && 
                  <p className='error-message'>
                    <FaExclamationTriangle/>
                    {errors.message}
                  </p>
                }
              <input className="btn" type="submit" value="Küldés" />
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Offer;
