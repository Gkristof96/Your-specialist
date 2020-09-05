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
            color={ratingValue <= rating ? "#ffc107" : "#e4e5e9"}
          />
        );
      })}
    </>
  );
};

export default StaticStar;
