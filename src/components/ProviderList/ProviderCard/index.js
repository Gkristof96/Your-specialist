import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import ProfessionBadge from "../../ProfessionBadge";
import StaticStar from "../../StarBar";

const ProviderCard = ({ user }) => {
  const { id, lastname, firstname, image, rate, professions, city, bio } = user;
  return (
    <>
      <Link to={`/profile/${id}`}>
        <div className="profilecard">
          <div className="picture">
            <img src={`../${image}`} alt={image} />
          </div>
          <div className="rate">
            <StaticStar rating={rate} />
          </div>
          <div className="data">
            <h1>{`${firstname} ${lastname}`}</h1>
            <h2>
              <FaMapMarkerAlt size="14" />
              {`Hungary, ${city}`}
            </h2>
            <div className="bio-scroll">
              <p>{bio}</p>
            </div>
          </div>
          <div className="professions">
            {professions.map((profession, i) => (
              <ProfessionBadge key={i} profession={profession} />
            ))}
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProviderCard;