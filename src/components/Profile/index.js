import React, { useState } from "react";

import { BsFillGearFill, BsFillHouseDoorFill } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

import StaticStar from "../StarBar";
import Navbar from "./navbar";
import ProfessionBadge from "../ProfessionBadge";
import SettingPage from "./Content/SettingPage";
import ContentPage from "./Content/SettingPage";

const ProfileCard = ({ user, setUser }) => {
  const [isSetting, setSetting] = useState(false);
  const [step, setStep] = useState(1);
  const logged_in = true;
  const identical = 1;
  const {
    id,
    firstname,
    lastname,
    city,
    tel,
    email,
    rate,
    image,
    professions,
  } = user;
  return (
    <>
      <div className="profile-card">
        <div className="profile-card__header">
          <div className="picture">
            <img src={`../${image}`} alt={image} />
          </div>
          <div className="Name">
            <h1>{`${firstname} ${lastname}`}</h1>
            <h2>
              <FaMapMarkerAlt size="25" />
              {`Hungary, ${city}`}
            </h2>
          </div>
          {logged_in && id === identical ? (
            <>
              <button
                className="gear"
                onClick={() => {
                  setSetting(!isSetting);
                  setStep(1);
                }}
              >
                {isSetting ? (
                  <BsFillHouseDoorFill size="25" />
                ) : (
                  <BsFillGearFill size="25" />
                )}
              </button>
              <button className="log">
                <FiLogOut size="25" />
              </button>
            </>
          ) : null}
        </div>
        <div className="profile-card__sidebar">
          <div className="sidebar-container">
            <div className="rating">
              <StaticStar rating={rate} />
            </div>
            <div className="contact-data">
              <span>
                <FaPhoneAlt size="25" />
                {tel}
              </span>
              <span>
                <FaEnvelope size="25" />
                {email}
              </span>
            </div>
            <h1>Szakmák:</h1>
            <div className="professions">
              {professions.map((profession, i) => (
                <ProfessionBadge key={i} profession={profession} />
              ))}
            </div>
          </div>
        </div>
        <Navbar setStep={setStep} isSetting={isSetting} />
        <div className="profile-card__content">
          {isSetting ? (
            <SettingPage setUser={setUser} step={step} user={user} />
          ) : (
            <ContentPage step={step} user={user} />
          )}
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
