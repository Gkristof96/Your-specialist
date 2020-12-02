import React, { useState } from "react";
import { FaExclamationTriangle } from 'react-icons/fa'
import axios from 'axios'
import StarRate from "../../../../StarRate";
import InputField from '../../../../InputField'
import TextField from '../../../../TextField'
import validate from '../../../../customHooks/validations/validateLogin'
import useInputs from '../../../../customHooks/useInputs'

const Rating = () => {
  //állapotok az inputok tárolására
  const [rate, setRate] = useState();
  const [values, setValues] = useState({
    email: '',
    name: '',
    message: ''
  });
  // adatok küldése a szervernek
  const handleData = () => {
    axios
      .post("url", {
        rate: {
          email: values.email,
          name: values.name,
          rate: rate,
          message: values.message
        },
      })
      .then((response) => {
        console.log('siker')
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
    handleData
  );
  return (
    <>
      <div className="rating">
        <h1>Értékelés</h1>
        <form onSubmit={handleSubmit}>
          <InputField 
            name='name' 
            type='text' placeholder='Név' 
            handleChange={handleChange} 
            value={values.name}
          />
          {errors.name && 
            <p className='error-message'>
              <FaExclamationTriangle/>
              {errors.name}
            </p>
          }
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
          <StarRate rating={rate} setRating={setRate} />
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
    </>
  );
};

export default Rating;
