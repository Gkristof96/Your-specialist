import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { FaExclamationTriangle } from "react-icons/fa";

const Login = (
  { handleSuccesfullAuth, loginActive, setLoginActive },
  props
) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    axios
      .post(
        "url",
        {
          user: {
            username: register.username,
            password: register.password,
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.logged_in) {
          handleSuccesfullAuth(response.data);
          props.history.push("/dashboard");
        } else {
        }
      })
      .catch((error) => {
        console.log("registration error", error);
      });
  };
  return (
    <>
      <div className="login-card">
        <h1 className="login-card__title">Bejelentkezés</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="login-card__input"
            name="username"
            autoComplete="off"
            placeholder="Felhasználónév"
            ref={register({ required: " Kötelező kitölteni!" })}
          />
          {errors.username && (
            <p>
              <FaExclamationTriangle />
              {errors.username.message}
            </p>
          )}
          <input
            className="login-card__input"
            name="password"
            autoComplete="off"
            placeholder="Jelszó"
            ref={register({ required: " Kötelező kitölteni!" })}
          />
          {errors.password && (
            <p>
              <FaExclamationTriangle />
              {errors.password.message}
            </p>
          )}
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
