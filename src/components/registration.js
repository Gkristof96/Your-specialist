import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { FaExclamationTriangle } from "react-icons/fa";

const Registration = ({ handleSuccesfullAuth }, props) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    axios
      .post(
        "url",
        {
          user: {
            username: register.username,
            email: register.email,
            password: register.password,
            password_confirmation: register.cpassword,
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.status === "created") {
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
      <div className="registration-card">
        <h1 className="registration-card__title">Regisztráció</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-group">
            <label>Felhasználónév</label>
            <input
              className="text-field"
              type="text"
              name="username"
              autoComplete="off"
              ref={register({
                required: " Kötelező kitölteni!",
                minLength: {
                  value: 2,
                  message:
                    " Legalább 3 karakteres kell legyen a felhasználónév!",
                },
              })}
            />
            {errors.username && (
              <p>
                <FaExclamationTriangle color="red" />
                {errors.username.message}
              </p>
            )}
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              className="text-field"
              type="email"
              name="email"
              autoComplete="off"
              ref={register({
                required: " Kötelező kitölteni!",
              })}
            />
            {errors.email && (
              <p>
                <FaExclamationTriangle color="red" />
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="input-group">
            <label>Jelszó</label>
            <input
              className="text-field"
              type="password"
              name="password"
              autoComplete="off"
              ref={register({
                required: " Kötelező kitölteni!",
                minLength: {
                  value: 8,
                  message: " Legalább 8 karakteres kell legyen a jelszó!",
                },
                maxLength: {
                  value: 32,
                  message: " Legfeljebb 32 karakteres lehet a jelszó!",
                },
              })}
            />
            {errors.password && (
              <p>
                <FaExclamationTriangle color="red" />
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="input-group">
            <label>Jelszó mégegyszer</label>
            <input
              className="text-field"
              type="password"
              name="cpassword"
              autoComplete="off"
              ref={register({
                required: " Kötelező kitölteni!",
                minLength: {
                  value: 8,
                  message: " Legalább 8 karakteres kell legyen a jelszó!",
                },
                maxLength: {
                  value: 32,
                  message: " Legfeljebb 32 karakteres lehet a jelszó!",
                },
              })}
            />
            {errors.cpassword && (
              <p>
                <FaExclamationTriangle color="red" />
                {errors.cpassword.message}
              </p>
            )}
          </div>
          <div className="check-group">
            <input
              id="terms"
              type="checkbox"
              name="checkbox"
              ref={register({
                required: " Kérjük fogad el a felhasználási feltételeket",
              })}
            />
            <label htmlFor="terms">Elfogadom a felhasználói feltételeket</label>
          </div>
          {errors.checkbox && (
            <p>
              <FaExclamationTriangle color="red" />
              {errors.checkbox.message}
            </p>
          )}

          <input className="btn" type="submit" value="Regisztráció" />
        </form>
      </div>
    </>
  );
};

export default Registration;
