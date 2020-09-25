import React from "react";
import { FaStar } from "react-icons/fa";

const StaticStar = ({ rating }) => {
  return (
    <>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <FaStar
            key={i}
            className="star"
            color={ratingValue <= rating ? "#fff" : "#D3CDCD"}
          />
        );
      })}
    </>
  );
};

export default StaticStar;
