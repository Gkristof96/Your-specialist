import React, { useState } from "react";
import SettingPage from "../../components/Settings/settingpage";
import { useParams, Redirect } from "react-router-dom";

const Settings = (props) => {
  const [step, setStep] = useState(1);
  const { id } = useParams();
  const { loggedInStatus, user } = props;
  return (
    <>
      {loggedInStatus === "NOT_LOGGED_IN" && id === user.id ? (
        <Redirect to="/login" />
      ) : (
        <section className="settings-section">
          <div classsName="profile__header"></div>
          <div className="profile__sidebar"></div>
          <nav></nav>
          <div className="profile__content"></div>
          <nav>
            <ul>
              <li
                onClick={() => setStep(1)}
                className={`${step === 1 && "active"}`}
              >
                Személyes beállítások
              </li>
              <li
                onClick={() => setStep(2)}
                className={`${step === 2 && "active"}`}
              >
                Szakmai beállítások
              </li>
              <li
                onClick={() => setStep(3)}
                className={`${step === 3 && "active"}`}
              >
                Jelszó csere
              </li>
              <li
                onClick={() => setStep(4)}
                className={`${step === 4 && "active"}`}
              >
                Galléria feltöltése
              </li>
            </ul>
          </nav>
          <div className="setting-page">
            <SettingPage step={step} user={user} />
          </div>
        </section>
      )}
    </>
  );
};

export default Settings;
