import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRate = ({ setRating, rating }) => {
  const [hover, setHover] = useState(null);
  return (
    <>
      {/* 5 elemű tömb létrehozása */}
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label key={i}>
            <input
              className="input"
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              className="star"
              size={100}
              color={ratingValue <= (hover || rating) ? "#ffc145" : "#D3CDCD"}
              onMouseOver={() => setHover(ratingValue)}
              onMouseOut={() => setHover(null)}
            />
          </label>
        );
      })}
    </>
  );
};

export default StarRate;