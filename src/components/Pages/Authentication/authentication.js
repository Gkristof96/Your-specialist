import React, { useState } from "react";
import Login from "../../login";
import Registration from "../../registration";

const Authentication = ({ handleLogin }, props) => {
  const [loginActive, setLoginActive] = useState(true);
  const handleAuth = (data) => {
    handleLogin(data);
    props.history.pushe("/index");
  };
  return (
    <>
      <section className="authentication">
        <div className="container">
          {loginActive ? (
            <Login
              handleLogin={handleAuth}
              loginActive={loginActive}
              setLoginActive={setLoginActive}
            />
          ) : (
            <Registration handleAuth={handleAuth} />
          )}
        </div>
      </section>
    </>
  );
};

export default Authentication;
