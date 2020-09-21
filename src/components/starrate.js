import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRate = (props) => {
  const { rating, setRating } = props;
  const [hover, setHover] = useState(null);
  return (
    <>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label>
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
