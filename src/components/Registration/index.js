import React from "react";
import axios from "axios";

const Registration = () => {
  return (
    <>
      <div className="registration-card">
        <h1 className="registration-card__title">Regisztráció</h1>
        <form>
          <input className="btn" type="submit" value="Regisztráció" />
        </form>
      </div>
    </>
  );
};

export default Registration;
