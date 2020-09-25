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
          <div className="input-group">
            <label>Felhasználónév</label>
            <input
              name="username"
              autoComplete="off"
              ref={register({ required: " Kötelező kitölteni!" })}
            />
            {errors.username && (
              <p>
                <FaExclamationTriangle />
                {errors.username.message}
              </p>
            )}
          </div>
          <div className="input-group">
            <label>Jelszó</label>
            <input
              name="password"
              autoComplete="off"
              ref={register({ required: " Kötelező kitölteni!" })}
            />
            {errors.password && (
              <p>
                <FaExclamationTriangle />
                {errors.password.message}
              </p>
            )}
          </div>
          <input className="btn" type="submit" value="Bejelentkezés" />
        </form>
        <span className="login__register-redirect">
          Még nincs felhasználód? Kattints a{" "}
          <span onClick={() => setLoginActive(!loginActive)}>regisztráció</span>
          hoz
        </span>
      </div>
    </>
  );
};

export default Login;
