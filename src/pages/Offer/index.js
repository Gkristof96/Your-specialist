import React, { useState, useContext } from "react";
import axios from 'axios'
import { FaExclamationTriangle } from "react-icons/fa";
import InputField from '../../components/InputField'
import TextField from '../../components/TextField'
import AutoSearch from '../../components/AutoInput'
import validate from '../../components/customHooks/validations/validateContact'
import useInputs from '../../components/customHooks/useInputs'
import InputContext from '../../contexts/inputContext'

const Offer = () => {
  // állapotok az inputok tárolására
  const [values, setValues] = useState({
    email: '',
    name: '',
    message: '',
    city: '',
    profession: ''
  });
  // context hívása
  const {cities,professions} = useContext(InputContext)
  // Adatok küldése a szervernek
  const sendData = () => {
    axios
      .post("url", {
        offer: {
          name: values.name,
          email: values.email,
          description: values.message,
          profession: values.profession,
          city: values.city,
        },
      })
      .then((response) => {
        console.log("elküldve");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // saját horog hívása
  const { handleChange, handleSubmit, errors } = useInputs(
    validate,
    values,
    setValues,
    sendData
  );
  return (
    <>
      <section className="offer section">
        <div className="offer__container">
          <div className="offer-card">
            <h1 className="title">Árajánlat</h1>
            <form onSubmit={handleSubmit}>
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
                  search={values.city}
                  values={values}
                  setValues={setValues}
                  handlechange={handleChange}
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
                  search={values.profession}
                  values={values}
                  setValues={setValues}
                  handlechange={handleChange}
                  items={professions}
                  placeholder="Szakma"
                  type="profession"
                />
                <div className='message'>
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
                </div>
              <input className="btn" type="submit" value="Küldés" />
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Offer;
