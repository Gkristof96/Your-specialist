import React, { useState } from "react";
import Login from "../../components/login";
import Registration from "../../components/registration";

const Authentication = (props) => {
  const [loginActive, setLoginActive] = useState(true);
  const handleAuth = (data) => {
    props.handleLogin(data);
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
