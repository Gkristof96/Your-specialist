import React, { useState } from "react";
import ContentPage from "./contentpage";
import SettingPage from "../Settings/settingpage";
import ProfessionBadge from "../professionsbadge";
import { BsFillGearFill, BsFillHouseDoorFill } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaImages,
  FaRegFileAlt,
  FaStarHalfAlt,
  FaUser,
  FaShieldAlt,
  FaWrench,
} from "react-icons/fa";
import StaticStar from "../staticstar";

const ProfileCard = ({ user }) => {
  const [step, setStep] = useState(1);
  const [isSetting, setSetting] = useState(false);
  const logged_in = true;
  const identical = 2;
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
        <div className="header">
          <div className="picture">
            <img src={`../${image}`} alt={image} />
          </div>
          <h1>{`${firstname} ${lastname}`}</h1>
          <h2>
            <FaMapMarkerAlt size="25" />
            {`Hungary, ${city}`}
          </h2>
          {logged_in && id === identical ? (
            <>
              <button className="gear" onClick={() => setSetting(!isSetting)}>
                {isSetting ? (
                  <BsFillHouseDoorFill size="25" />
                ) : (
                  <BsFillGearFill size="25" />
                )}
              </button>
              <button className="log" onClick={() => setSetting(!isSetting)}>
                <FiLogOut size="25" />
              </button>
            </>
          ) : null}
        </div>
        <div className="main">
          <div className="sidebar">
            <div className="sidebar-container">
              <dis className="rating">
                <StaticStar rating={rate} />
              </dis>
              <div className="contact">
                <span>
                  <FaPhoneAlt size="25" />
                  {tel}
                </span>
                <span>
                  <FaEnvelope size="25" />
                  {email}
                </span>
              </div>
              <div className="professions">
                <h1>Szakmák:</h1>
                {professions.map((profession, i) => (
                  <ProfessionBadge key={i} profession={profession} />
                ))}
              </div>
            </div>
          </div>
          <div className="navbar">
            {isSetting ? (
              <>
                <h1 onClick={() => setStep(1)}>
                  <FaUser size="40" className="nav-icons" />
                </h1>
                <h1 onClick={() => setStep(2)}>
                  <FaWrench size="40" className="nav-icons" />
                </h1>
                <h1 onClick={() => setStep(3)}>
                  <FaShieldAlt size="40" className="nav-icons" />
                </h1>
                <h1 onClick={() => setStep(4)}>
                  <FaImages size="40" className="nav-icons" />
                </h1>
              </>
            ) : (
              <>
                <h1 onClick={() => setStep(1)}>
                  <FaRegFileAlt size="40" className="nav-icons" />
                </h1>
                <h1 onClick={() => setStep(2)}>
                  <FaImages size="40" className="nav-icons" />
                </h1>
                <h1 onClick={() => setStep(3)}>
                  <FaStarHalfAlt size="40" className="nav-icons" />
                </h1>
              </>
            )}
          </div>
          <div className="content">
            {isSetting ? (
              <SettingPage step={step} user={user} />
            ) : (
              <ContentPage step={step} user={user} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
