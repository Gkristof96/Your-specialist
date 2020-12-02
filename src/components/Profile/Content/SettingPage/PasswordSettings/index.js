import React, { useState } from "react";
import { FaExclamationTriangle } from 'react-icons/fa'
import axios from 'axios'
import validate from '../../../../customHooks/validations/validateChangePassword'
import useInputs from '../../../../customHooks/useInputs'
import InputField from '../../../../InputField'

const PasswordChange = () => {
  const [values, setValues] = useState({
    old_password: '',
    password: '',
    cpassword: ''
  });
  const saveData = () => {
    axios
      .post("url", {
        values,
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
    saveData
  );
  return (
    <>
      <div className="password-settings">
        <h1 className="password-settings__title">Jelszó csere</h1>
        <form onSubmit={handleSubmit}>
          <InputField
            name='old_password' 
            type='password' placeholder='Régi jelszó' 
            handleChange={handleChange} 
            value={values.old_password}
          />
          {errors.old_password && 
            <p className='error-message'>
              <FaExclamationTriangle/>
              {errors.old_password}
            </p>
          }
          <InputField 
            name='password' 
            type='password' placeholder='Jelszó' 
            handleChange={handleChange} 
            value={values.password}
          />
          {errors.password && 
            <p className='error-message'>
              <FaExclamationTriangle/>
              {errors.password}
            </p>
          }
          <InputField 
            name='cpassword' 
            type='password' placeholder='Jelszó mégegyszer' 
            handleChange={handleChange} 
            value={values.cpassword}
          />
          {errors.cpassword && 
            <p className='error-message'>
              <FaExclamationTriangle/>
              {errors.cpassword}
            </p>
          }
          <input className="btn" type="submit" value="Mentés" />
        </form>
      </div>
    </>
  );
};

export default PasswordChange;