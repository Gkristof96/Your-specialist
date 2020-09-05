import React from "react";
import { FaTools } from "react-icons/fa";

const ProfessionBadge = (props) => {
  return (
    <>
      <div className="badge">
        <FaTools />
        {` ${props.profession}`}
      </div>
    </>
  );
};

export default ProfessionBadge;
