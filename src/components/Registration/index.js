import React from "react";
import Pager from "./Pager";

const Registration = ({setLoginActive, isLoginActive}) => {
  return (
    <>
      <div className="authentication__card registration">
        <h1 className="title">Regisztráció</h1>
        <Pager/>
        <h2 className="redirect">
          Van már felhasználód? Kattints a{" "}
          <span onClick={() => setLoginActive(!isLoginActive)}>bejelentkezés</span>
          hez
        </h2>
      </div>
    </>
  );
};

export default Registration;
