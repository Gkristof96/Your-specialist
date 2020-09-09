import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import ProfessionBadge from "../components/professionsbadge";
import StaticStar from "./staticstar";
import { Link } from "react-router-dom";

const ProviderCard = (props) => {
  const {
    id,
    image,
    firstname,
    lastname,
    bio,
    professions,
    rate,
    city,
  } = props.user;
  return (
    <>
      <Link to={`/profile/${id}`}>
        <section className="profilecard">
          <div className="profilecard__picture">
            <img src={`../${image}`} alt={image} />
          </div>
          <div className="profilecard__data"></div>
          <h1>{`${firstname} ${lastname}`}</h1>
          <h2>
            <FaMapMarkerAlt size="25" />
            {`Hungary, ${city}`}
            <p>{bio}</p>
          </h2>
          <div className="profilecard__rate">
            <StaticStar rating={rate} />
            <h1>{rate}</h1>
          </div>
          <div className="profilecard__professions">
            {professions.map((profession, i) => (
              <ProfessionBadge key={i} profession={profession} />
            ))}
          </div>
        </section>
      </Link>
    </>
  );
};

export default ProviderCard;
