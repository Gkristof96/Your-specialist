import React, { useState } from "react";
import Login from '../../components/Login'
import Registration from '../../components/Registration'

const Authentication = () => {
  const [isLoginActive, setLoginActive] = useState(true);
  return (
    <>
      <section className="authentication section">
        <div className="authentication__container">
          {isLoginActive ? (
            <Login
              isLoginActive={isLoginActive}
              setLoginActive={setLoginActive}
            />
          ) : (
            <Registration
              isLoginActive={isLoginActive}
              setLoginActive={setLoginActive}
            />
          )}
        </div>
      </section>
    </>
  );
};

export default Authentication;
