import React, { useState, useContext } from "react";
import { FaExclamationTriangle } from 'react-icons/fa'
import axios from 'axios'
import InputField from '../../../../InputField'
import TextField from '../../../../TextField'
import AutoSearch from '../../../../AutoInput'
import validate from '../../../../customHooks/validations/validatePersonalData'
import useInputs from '../../../../customHooks/useInputs'
import InputContext from '../../../../../contexts/inputContext'

const PersonalSettings = ({ user, setUser }) => {
  const [values, setValues] = useState({
    firstname: '',
    lastname: '',
    email: '',
    tel: '',
    city: '',
    bio: ''
  })
  const {cities} = useContext(InputContext)

  const saveData = () => {
    setUser({user})
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
      <div className="personal-settings">
        <h1 className='personal-settings__title'>Személyes beállítások</h1>
        <form onSubmit={handleSubmit}>
                <InputField 
                  name='firstname' 
                  type='text' placeholder='Keresztnév' 
                  handleChange={handleChange} 
                  value={values.firstname}
                />
                {errors.firstname && 
                  <p className='error-message'>
                    <FaExclamationTriangle/>
                    {errors.firstname}
                  </p>
                }
                <AutoSearch
                  search={values.city}
                  values={values}
                  setValues={setValues}
                  handlechange={handleChange}
                  items={cities}
                  placeholder="Szakma"
                  type="city"
                />
                <InputField 
                  name='lastname' 
                  type='text' placeholder='Vezetéknév' 
                  handleChange={handleChange} 
                  value={values.lastname}
                />
                {errors.lastname && 
                  <p className='error-message'>
                    <FaExclamationTriangle/>
                    {errors.lastname}
                  </p>
                }
                <InputField 
                  name='tel' 
                  type='text' placeholder='Telefonszám' 
                  handleChange={handleChange} 
                  value={values.tel}
                />
                {errors.tel && 
                  <p className='error-message'>
                    <FaExclamationTriangle/>
                    {errors.tel}
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
                <div className='bio'>
                  <TextField 
                    name='bio' 
                    placeholder='Bemutatkozás' 
                    handleChange={handleChange} 
                    value={values.bio}
                  />
                  {errors.bio && 
                    <p className='error-message'>
                      <FaExclamationTriangle/>
                      {errors.bio}
                    </p>
                  }
                </div>
                <input className="btn" type="submit" value="Küldés" />
        </form>
      </div>
    </>
  );
};

export default PersonalSettings;