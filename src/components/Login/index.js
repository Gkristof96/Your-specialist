import React, { useContext } from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import AuthContext from "../../contexts/authContext";
import InputField from '../InputField'
import useAuth from '../customHooks/useInputs'

const Login = ({loginActive, setLoginActive }) => {
  const {handleLogin} = useContext(AuthContext);
  const { handleChange, handleSubmit, values, errors } = useAuth(
    handleLogin
  );

  return (
    <>
      <div className="login-card">
        <h1 className="login-card__title">Bejelentkezés</h1>
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
        <h2 className="login-card__register-redirect">
          Még nincs felhasználód? Kattints a{" "}
          <span onClick={() => setLoginActive(!loginActive)}>regisztráció</span>
          hoz
        </h2>
      </div>
    </>
  );
};

export default Login;