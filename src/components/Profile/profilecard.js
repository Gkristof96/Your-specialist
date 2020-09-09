import React, { useState } from "react";
import ContentPage from "./contentpage";
import SettingPage from "../Settings/settingpage";
import ProfessionBadge from "../professionsbadge";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import StaticStar from "../staticstar";

const ProfileCard = (props) => {
  const [step, setStep] = useState(1);
  const [isSetting, setSetting] = useState(false);
  const {
    firstname,
    lastname,
    city,
    tel,
    email,
    rate,
    image,
    professions,
  } = props.user;
  return (
    <>
      <section className="profile">
        <div className="profile__header">
          <div className="profile__picture">
            <img src={`../${image}`} alt={image} />
          </div>
          <h1>{`${firstname} ${lastname}`}</h1>
          <h2>
            <FaMapMarkerAlt size="25" />
            {`Hungary, ${city}`}
          </h2>
          <button onClick={() => setSetting(!isSetting)}>
            {isSetting ? "Home" : "Settings"}
          </button>
        </div>
        <div className="profile__sidebard">
          <StaticStar rating={rate} />
          <h1>{rate}</h1>
          <span>
            <FaPhoneAlt size="25" />
            {tel}
          </span>
          <span>
            <FaEnvelope size="25" />
            {email}
          </span>
          {professions.map((profession, i) => (
            <ProfessionBadge key={i} profession={profession} />
          ))}
        </div>
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
            <SettingPage step={step} user={props.user} />
          ) : (
            <ContentPage step={step} user={props.user} />
          )}
        </div>
      </section>
    </>
  );
};

export default ProfileCard;
