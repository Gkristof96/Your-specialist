import React from "react";
import Pager from "./Pager";

const Registration = ({setLoginActive}) => {
  return (
    <>
      <div className="authentication__card registration">
        <h1 className="title">Regisztráció</h1>
        <Pager/>
        <h2 className="redirect">
          Van már felhasználód? Kattints a{" "}
          <span onClick={() => setLoginActive(true)}>bejelentkezés</span>
          hez
        </h2>
      </div>
    </>
  );
};

export default Registration;