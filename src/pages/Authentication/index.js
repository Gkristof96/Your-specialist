import React, { useState } from "react";
import Login from '../../components/Login'
import Registration from '../../components/Registration'

const Authentication = ({ handleLogin }, props) => {
  const [loginActive, setLoginActive] = useState(true);
  return (
    <>
      <section className="authentication section">
        <div className="authentication__container">
          {loginActive ? (
            <Login
              loginActive={loginActive}
              setLoginActive={setLoginActive}
            />
          ) : (
            <Registration/>
          )}
        </div>
      </section>
    </>
  );
};

export default Authentication;
