import React, { useState } from "react";
import Login from '../../components/Login'
import Registration from '../../components/Registration'

const Authentication = () => {
  // állapot az authentikációs felület eldöntésére
  const [isLoginActive, setLoginActive] = useState(true);
  return (
    <>
      <section className="authentication section">
        <div className="authentication__container">
          {/* a komponens eldöntésére feltételes renderelés*/}
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