import React from "react";
import {
  FaImages,
  FaRegFileAlt,
  FaStarHalfAlt,
  FaUser,
  FaShieldAlt,
  FaWrench,
} from "react-icons/fa";

const Navbar = ({ setStep, isSetting }) => {
  return (
    <>
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
    </>
  );
};

export default Navbar;
