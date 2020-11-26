import React, { useContext, useState } from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import AuthContext from "../../contexts/authContext";
import InputField from '../InputField'
import useInputs from '../customHooks/useInputs'
import validate from '../customHooks/validations/validateLogin'
import axios from 'axios'

const Login = ({isLoginActive, setLoginActive }) => {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });
  const {handleLogin} = useContext(AuthContext);

  const sendData = () => {
    axios
      .post("url", {
        user: {
          email: values.email,
          password: values.password,
        },
      })
      .then((response) => {
        if(response.message === 'logged') {
          handleLogin(response.data)
        }
        else {
          console.log('rossz')
        }
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
      <div className="authentication__card login">
        <h1 className="title">Bejelentkezés</h1>
        <form onSubmit={handleSubmit}>
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
          <input className="btn" type="submit" value="Bejelentkezés" />
        </form>
        <h2 className="redirect">
          Még nincs felhasználód? Kattints a{" "}
          <span onClick={() => setLoginActive(!isLoginActive)}>regisztráció</span>
          hoz
        </h2>
      </div>
    </>
  );
};

export default Login;
