import React from "react";
import { Link } from "react-router-dom";

const NotFound = ({ location }) => {
  return (
    <>
      <section className="notfound section">
        <div className="notfound__container">
          <h1 className="title">Hoppá, valami hiba történt!</h1>
          <span className="subtitle">
            Az <code>{location.pathname}</code> oldal vagy nem létezik vagy
            valami hiba történt vele, kérjük probálkoz újból!
          </span>
          <Link to="/" className="btn">
            Főoldalra
          </Link>
        </div>
      </section>
    </>
  );
};

export default NotFound;
