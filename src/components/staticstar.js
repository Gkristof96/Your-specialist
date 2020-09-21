import React from "react";
import { FaStar } from "react-icons/fa";

const StaticStar = (props) => {
  const { rating } = props;
  return (
    <>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <FaStar
            className="star"
            color={ratingValue <= rating ? "#fff" : "#D3CDCD"}
          />
        );
      })}
    </>
  );
};

export default StaticStar;
