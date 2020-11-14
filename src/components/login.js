import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { FaExclamationTriangle } from "react-icons/fa";
import AuthContext from "../contexts/authContext";

const Login = ({ handleSuccesfullAuth, loginActive, setLoginActive },props) => {
  const {handleLogin} = useContext(AuthContext);

  const onSubmit = (e) => {
      e.preventDefault();
      handleLogin();
  };
  return (
    <>
      <div className="login-card">
        <h1 className="login-card__title">Bejelentkezés</h1>
        <form onSubmit={onSubmit}>
          <input
            className="login-card__input"
            name="username"
            autoComplete="off"
            placeholder="Felhasználónév"
          />
          <input
            className="login-card__input"
            name="password"
            autoComplete="off"
            placeholder="Jelszó"
          />
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
