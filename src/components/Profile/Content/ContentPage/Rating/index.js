import React, { useState } from "react";
import { FaExclamationTriangle } from 'react-icons/fa'
import StarRate from "../../../../StarRate";
import axios from 'axios'
import validate from '../../../../customHooks/validations/validateLogin'
import useInputs from '../../../../customHooks/useInputs'
import InputField from '../../../../InputField'

const Rating = () => {
  const [rate, setRate] = useState();
  const [values, setValues] = useState({
    email: '',
    name: '',
    message: ''
  });
  const sendData = () => {
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
  const { handleChange, handleSubmit, errors } = useInputs(
    validate,
    values,
    setValues,
    sendData
  );
  return (
    <>
      <div className="rating">
        <h1>Értékelés</h1>
        <form>
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
          <div className="input-group">
            <label>Email</label>
            <input name="email" type="text" />
          </div>
          <StarRate rating={rate} setRating={setRate} />
          <div className="input-group">
            <label>Leírás</label>
            <textarea name="name" />
          </div>
          <input className="btn" type="submit" value="Küldés" />
        </form>
      </div>
    </>
  );
};

export default Rating;
