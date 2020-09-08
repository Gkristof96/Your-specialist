import React, { useState } from "react";
import ContentPage from "./contentpage";
import SettingPage from "../Settings/settingpage";
import { FaMapMarkerAlt } from "react-icons/fa";

const ProfileCard = (props) => {
  const [step, setStep] = useState(1);
  const [isSetting, setSetting] = useState(false);
  const { user } = props;
  return (
    <>
      <section className="profile">
        <div className="profile__header">
          <div className="profile__picture"></div>
          <h1>Steve speros</h1>
          <h2>
            <FaMapMarkerAlt size="25" />
            Hungary, Lajosmizse
          </h2>
          <button onClick={() => setSetting(!isSetting)}>
            {isSetting ? "Home" : "Settings"}
          </button>
        </div>
        <div className="profile__sidebard"></div>
        <div className="profile__navbar">
          {isSetting ? (
            <>
              <h1 onClick={() => setStep(1)}>Személyes</h1>
              <h1 onClick={() => setStep(2)}>Szakmai</h1>
              <h1 onClick={() => setStep(3)}>jelszó</h1>
              <h1 onClick={() => setStep(4)}>galléria</h1>
            </>
          ) : (
            <>
              <h1 onClick={() => setStep(1)}>Description</h1>
              <h1 onClick={() => setStep(2)}>Gallery</h1>
              <h1 onClick={() => setStep(3)}>Rating</h1>
            </>
          )}
        </div>
        <div className="profile__content">
          {isSetting ? (
            <SettingPage step={step} user={user} />
          ) : (
            <ContentPage step={step} user={user} />
          )}
        </div>
      </section>
    </>
  );
};

export default ProfileCard;
